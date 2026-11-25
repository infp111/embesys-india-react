"""Convert embesysindia.com WordPress pages (raw/<slug>.html) into React JSX page components.

Outputs (inside embesys-react):
  src/pages/wp/<Component>.jsx     one component per page
  src/pages/wp/registry.js         slug -> lazy component + title
  build/css-src/pages/<slug>.css   unscoped page CSS (scoped later by scope-css.mjs)
  build/css-src/custom.css         wp-custom-css block (global for legacy pages)
  build/images.json                list of image URLs to mirror
"""
import json, os, re, sys
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype

ROOT = os.path.dirname(os.path.abspath(__file__))
APP = os.path.join(ROOT, 'embesys-react')
SLUGS = [s for s in open(os.path.join(ROOT, 'slugs.txt')).read().split() if s not in ('biomedical', 'about')]
SITE = 'https://embesysindia.com'

os.makedirs(f'{APP}/src/pages/wp', exist_ok=True)
os.makedirs(f'{APP}/build/css-src/pages', exist_ok=True)

images = set()

def media_path(url):
    """Map any wp-content/uploads URL to /media/... (png/jpg become .webp)."""
    m = re.search(r'/wp-content/uploads/(.+?)(?:[?#].*)?$', url)
    if not m:
        return None
    rel = m.group(1)
    images.add(SITE + '/wp-content/uploads/' + rel)
    return '/media/' + re.sub(r'\.(png|jpe?g)$', '.webp', rel, flags=re.I)

def fix_url(url):
    if not url:
        return url
    u = url.strip()
    if u.startswith('//'):
        u = 'https:' + u
    if u.startswith('/wp-content/uploads/') or re.match(r'https?://(www\.)?embesysindia\.com/wp-content/uploads/', u):
        return media_path(u)
    return u

def internal_route(href):
    if not href:
        return None
    m = re.match(r'^(?:https?://(?:www\.)?embesysindia\.com)?/([a-z0-9_\-]+)/?(#.*)?$', href.strip())
    if m and (m.group(1) in SLUGS or m.group(1) == 'about'):
        return '/' + m.group(1) + (m.group(2) or '')
    if re.match(r'^(?:https?://(?:www\.)?embesysindia\.com)/?$', href.strip()):
        return '/'
    return None

def css_fix_urls(css):
    def rep(m):
        u = m.group(2)
        nu = fix_url(u)
        return f'url("{nu}")' if nu else m.group(0)
    return re.sub(r'url\(\s*([\'"]?)([^\'")]+)\1\s*\)', rep, css)

ATTR = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'colspan': 'colSpan', 'rowspan': 'rowSpan',
    'allowfullscreen': 'allowFullScreen', 'frameborder': 'frameBorder', 'referrerpolicy': 'referrerPolicy',
    'fetchpriority': 'fetchPriority', 'maxlength': 'maxLength', 'minlength': 'minLength', 'readonly': 'readOnly',
    'autocomplete': 'autoComplete', 'crossorigin': 'crossOrigin', 'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing', 'enctype': 'encType', 'novalidate': 'noValidate', 'accept-charset': 'acceptCharset',
    'playsinline': 'playsInline', 'autoplay': 'autoPlay', 'viewbox': 'viewBox', 'srcdoc': 'srcDoc',
    'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace', 'datetime': 'dateTime',
    'usemap': 'useMap', 'allow': 'allow', 'contenteditable': 'contentEditable', 'spellcheck': 'spellCheck',
    'preserveaspectratio': 'preserveAspectRatio', 'gradientunits': 'gradientUnits', 'gradienttransform': 'gradientTransform',
}
BOOL = {'allowfullscreen', 'required', 'disabled', 'multiple', 'autoplay', 'muted', 'loop', 'playsinline', 'controls',
        'readonly', 'novalidate', 'hidden', 'async', 'defer', 'checked', 'selected', 'open', 'reversed', 'default'}
VOID = {'br', 'img', 'input', 'hr', 'source', 'col', 'wbr', 'meta', 'link', 'area', 'embed', 'track', 'param'}
DROP_TAGS = {'script', 'noscript', 'style', 'link', 'meta'}
NO_WS = {'table', 'tbody', 'thead', 'tfoot', 'tr', 'colgroup', 'select', 'ul', 'ol', 'dl', 'svg', 'g', 'defs'}
SVG_TAGS = {'svg', 'path', 'circle', 'rect', 'g', 'line', 'polyline', 'polygon', 'ellipse', 'defs', 'lineargradient',
            'radialgradient', 'stop', 'use', 'symbol', 'clippath', 'mask', 'text', 'tspan'}
SVG_CASE = {'lineargradient': 'linearGradient', 'radialgradient': 'radialGradient', 'clippath': 'clipPath'}

def camel(s):
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), s)

def style_obj(s):
    out = []
    seen = {}
    for decl in re.split(r';(?![^(]*\))', s):
        if ':' not in decl:
            continue
        k, v = decl.split(':', 1)
        k, v = k.strip(), v.strip()
        if not k or not v:
            continue
        v = css_fix_urls(v)
        key = k if k.startswith('--') else camel(k.lower())
        if key.startswith('Ms'):
            key = 'ms' + key[2:]
        seen[key] = v
    for k, v in seen.items():
        out.append(f'{json.dumps(k) if not re.match(r"^[A-Za-z_$][A-Za-z0-9_$]*$", k) else k}: {json.dumps(v)}')
    return '{ ' + ', '.join(out) + ' }' if out else None

def jtext(t):
    return '{' + json.dumps(t, ensure_ascii=False) + '}'

used_link = False

def emit(node, depth, in_svg=False, parent=None):
    global used_link
    pad = '  ' * depth
    if isinstance(node, (Comment, Doctype)):
        return ''
    if isinstance(node, NavigableString):
        t = str(node)
        if not t.strip():
            if parent in NO_WS:
                return ''
            return pad + '{" "}\n'
        t = re.sub(r'\s+', ' ', t)
        if re.search(r'[{}<>&]', t) or t != t.strip() or re.search(r'[^\x20-\x7E\u00A0-\uFFFF]', t):
            return pad + jtext(t) + '\n'
        return pad + t + '\n'
    tag = node.name.lower()
    if not re.match(r'^[a-z][a-z0-9-]*$', tag):
        tag = 'li' if tag.startswith('li') else 'span'  # malformed tags in source, e.g. <listyle=...>
    if tag in DROP_TAGS:
        return ''
    cls = node.get('class') or []
    if tag == 'a' and 'heading-link' in cls and not node.get_text(strip=True):
        return ''  # anchor plugin noise
    svg = in_svg or tag == 'svg'
    jtag = SVG_CASE.get(tag, tag)
    attrs = []
    href_internal = None
    for k, v in node.attrs.items():
        k = k.lower()
        if isinstance(v, list):
            v = ' '.join(v)
        if k.startswith('on') or k in ('srcset', 'sizes', 'decoding', 'loading') or k.startswith('data-elementor') or k in ('data-id', 'data-element_type', 'data-widget_type', 'data-settings'):
            continue
        if k == 'class':
            v = ' '.join(c for c in v.split() if c != 'elementor-invisible')
            if not v:
                continue
        if k in ('src', 'poster', 'data-src', 'data-bg'):
            v = fix_url(v)
            if k == 'data-src' and tag == 'img':
                continue
        if k == 'href':
            r = internal_route(v)
            if r and tag == 'a' and not node.get('target'):
                href_internal = r
                continue
            v = fix_url(v)
        if k == 'style':
            so = style_obj(v)
            if so:
                attrs.append(f'style={{{so}}}')
            continue
        if tag in ('input', 'textarea') and k == 'value':
            k = 'defaultValue'
        if tag in ('input',) and k == 'checked':
            k = 'defaultChecked'
        if tag == 'option' and k == 'selected':
            continue
        name = ATTR.get(k)
        if not name:
            if k.startswith('aria-') or k.startswith('data-'):
                name = k
            elif svg and ('-' in k or ':' in k):
                name = camel(k.replace(':', '-'))
            else:
                name = k
        if k in BOOL and (v == '' or v.lower() == k):
            attrs.append(name)
            continue
        if '"' in v or '\\' in v or '\n' in v:
            attrs.append(f'{name}={{{json.dumps(v, ensure_ascii=False)}}}')
        else:
            attrs.append(f'{name}="{v}"')
    if tag == 'img' and not node.get('alt') and 'alt=""' not in ' '.join(attrs) and not any(a.startswith('alt=') for a in attrs):
        attrs.append('alt=""')
    if href_internal:
        used_link = True
        jtag = 'Link'
        attrs.insert(0, f'to={json.dumps(href_internal)}')
    a = (' ' + ' '.join(attrs)) if attrs else ''
    if tag in VOID:
        return f'{pad}<{jtag}{a} />\n'
    if tag == 'textarea':
        txt = node.get_text()
        return f'{pad}<textarea{a} defaultValue={json.dumps(txt)} />\n'
    inner = ''.join(emit(c, depth + 1, svg, tag) for c in node.children)
    if not inner.strip():
        return f'{pad}<{jtag}{a} />\n' if tag not in ('iframe', 'i', 'span', 'div', 'a', 'p', 'td', 'th', 'li', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6') else f'{pad}<{jtag}{a}></{jtag}>\n'
    return f'{pad}<{jtag}{a}>\n{inner}{pad}</{jtag}>\n'

def comp_name(slug):
    n = ''.join(p.capitalize() for p in re.split(r'[^a-z0-9]+', slug) if p)
    if n[0].isdigit():
        n = 'P' + n
    return n + 'Page'

registry = []
custom_css_done = False
for slug in SLUGS:
    html = open(os.path.join(ROOT, 'raw', f'{slug}.html'), encoding='utf8', errors='ignore').read()
    title = re.search(r'<title>(.*?)</title>', html, re.S).group(1).strip()
    title = BeautifulSoup(title, 'html.parser').get_text()
    if not custom_css_done:
        cm = re.search(r'<style id="wp-custom-css">(.*?)</style>', html, re.S)
        if cm:
            open(f'{APP}/build/css-src/custom.css', 'w').write(css_fix_urls(cm.group(1)))
            custom_css_done = True
    i, j = html.find('<main'), html.find('</main>')
    main = html[i:j + 7]
    main = re.sub(r'<script.*?</script>', '', main, flags=re.S)
    main = re.sub(r'<li(style=)', r'<li \1', main)  # typo in source markup
    soup = BeautifulSoup(main, 'html.parser')
    styles = [css_fix_urls(s.get_text()) for s in soup.find_all('style')]
    pid = re.search(r'class="elementor elementor-(\d+)', main)
    page_css = '\n'.join(styles)
    if pid:
        pc = os.path.join(ROOT, 'css', f'post-{pid.group(1)}.css')
        if not os.path.exists(pc):
            os.system(f'curl -sL -A "Mozilla/5.0" "{SITE}/wp-content/uploads/elementor/css/post-{pid.group(1)}.css" -o "{pc}"')
        if os.path.exists(pc):
            page_css = css_fix_urls(open(pc).read()) + '\n' + page_css
    open(f'{APP}/build/css-src/pages/{slug}.css', 'w').write(page_css)
    mainel = soup.find('main')
    used_link = False
    body = ''.join(emit(c, 3, False, 'main') for c in mainel.children)
    name = comp_name(slug)
    imports = ["import usePageTitle from '../../hooks/usePageTitle';", "import LegacyPage from '../../components/LegacyPage';", f"import '../../styles/pages/{slug}.css';"]
    if used_link:
        imports.insert(0, "import { Link } from 'react-router-dom';")
    code = (
        f"// Auto-converted from {SITE}/{slug}/ — edit freely, it's plain JSX now.\n"
        + '\n'.join(imports) + '\n\n'
        + f'export default function {name}() {{\n'
        + f'  usePageTitle({json.dumps(title, ensure_ascii=False)});\n'
        + '  return (\n'
        + f'    <LegacyPage slug={json.dumps(slug)}>\n'
        + body
        + '    </LegacyPage>\n  );\n}\n'
    )
    open(f'{APP}/src/pages/wp/{name}.jsx', 'w').write(code)
    h1 = soup.find('h1')
    registry.append({'slug': slug, 'name': name, 'title': title, 'heading': h1.get_text(' ', strip=True) if h1 else title})

# also images referenced from global legacy css
for f in os.listdir(os.path.join(ROOT, 'css')):
    css_fix_urls(open(os.path.join(ROOT, 'css', f), errors='ignore').read())

reg = ["// Auto-generated: every rebuilt WordPress page, lazy-loaded per route.", "import { lazy } from 'react';", '', 'export const wpPages = [']
for r in registry:
    reg.append(f"  {{ slug: {json.dumps(r['slug'])}, title: {json.dumps(r['heading'], ensure_ascii=False)}, Component: lazy(() => import('./{r['name']}.jsx')) }},")
reg.append('];\n')
open(f'{APP}/src/pages/wp/registry.js', 'w').write('\n'.join(reg))
json.dump(sorted(images), open(f'{APP}/build/images.json', 'w'), indent=0)
print(len(registry), 'pages,', len(images), 'images')
