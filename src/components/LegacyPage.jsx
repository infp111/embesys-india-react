import { useEffect, useRef, useState } from 'react';
import '../styles/legacy.css';

/**
 * Wrapper for pages converted from the WordPress site.
 * - Scopes the original Bootstrap/Elementor/theme CSS (.legacy) and the page's own CSS (.page-<slug>).
 * - Re-implements the bits of Bootstrap/jQuery behaviour those pages relied on:
 *   data-toggle="modal" | "collapse" | "tab", data-dismiss="modal", and contact forms.
 */
export default function LegacyPage({ slug, children }) {
  const ref = useRef(null);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const openModal = (modal) => {
      modal.style.display = 'block';
      modal.classList.add('show');
      modal.removeAttribute('aria-hidden');
      document.body.classList.add('modal-open');
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show legacy-backdrop';
      root.appendChild(backdrop);
    };
    const closeModal = (modal) => {
      modal.style.display = 'none';
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      root.querySelectorAll('.legacy-backdrop').forEach((b) => b.remove());
    };
    const target = (el) => {
      const sel = el.getAttribute('data-target') || el.getAttribute('href');
      if (!sel || !sel.startsWith('#') || sel.length < 2) return null;
      try { return root.querySelector(sel); } catch { return null; }
    };

    const onClick = (e) => {
      const t = e.target.closest('[data-toggle], [data-bs-toggle], [data-dismiss], [data-bs-dismiss]');
      if (t && root.contains(t)) {
        const kind = t.getAttribute('data-toggle') || t.getAttribute('data-bs-toggle');
        const dismiss = t.getAttribute('data-dismiss') || t.getAttribute('data-bs-dismiss');
        if (dismiss === 'modal') { e.preventDefault(); const m = t.closest('.modal'); if (m) closeModal(m); return; }
        const el = target(t);
        if (!el) return;
        e.preventDefault();
        if (kind === 'modal') openModal(el);
        if (kind === 'collapse') el.classList.toggle('show');
        if (kind === 'tab') {
          const list = t.closest('.nav, [role="tablist"]');
          list?.querySelectorAll('.active').forEach((a) => a.classList.remove('active'));
          t.classList.add('active');
          const pane = el.parentElement;
          pane?.querySelectorAll(':scope > .tab-pane').forEach((p) => p.classList.remove('active', 'show'));
          el.classList.add('active', 'show');
        }
        return;
      }
      // click on modal backdrop area closes it
      if (e.target.classList?.contains('modal') && e.target.classList.contains('show')) closeModal(e.target);
    };

    const onSubmit = (e) => {
      if (!root.contains(e.target)) return;
      e.preventDefault();
      setNotice('Thanks! Online form submission will be enabled once the backend is connected. Meanwhile, please email digital.marketing@embesysindia.com or call +91 7381069100.');
    };

    const onKey = (e) => { if (e.key === 'Escape') root.querySelectorAll('.modal.show').forEach(closeModal); };

    root.addEventListener('click', onClick);
    root.addEventListener('submit', onSubmit);
    document.addEventListener('keydown', onKey);
    return () => {
      root.removeEventListener('click', onClick);
      root.removeEventListener('submit', onSubmit);
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [slug]);

  return (
    <div ref={ref} className={`legacy elementor-kit-371 page-${slug}`}>
      {children}
      {notice && (
        <div className="legacy-toast" role="status" onClick={() => setNotice(null)}>
          {notice}
        </div>
      )}
    </div>
  );
}
