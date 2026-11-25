# Embesys India – React rebuild (Landing page)

React + Vite rebuild of the landing page at https://embesysindia.com (originally WordPress + Bootstrap 4 + Elementor).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
```
src/
  App.jsx                    page composition (section order mirrors the WP homepage)
  index.css                  all styles (brand: #f07700 orange, #222 dark, #f8f5f0 cream;
                             fonts: Gilda Display / Barlow / Barlow Condensed)
  data/site.js               nav mega-menu, ticker, hero slides, about, features,
                             videos, clients, news, offices, contact
  data/products.json         6 product tabs / 65 product cards
  components/
    TopBar.jsx               address, phone, email, social icons
    Navbar.jsx               sticky nav with multi-level dropdowns + mobile drawer
    NewsTicker.jsx           scrolling "Breaking News" headline
    HeroCarousel.jsx         11-slide autoplay banner carousel
    About.jsx                "Welcome To Embesys…"
    Features.jsx             "Three things to know about us"
    Products.jsx             tabbed product sliders (SolidWorks, NI, CAMWorks, Materialise, AM, OPAL-RT)
    PromoVideos.jsx          12 YouTube videos, paged, lazy-loaded (thumbnail until click)
    Clients.jsx              infinite logo marquee (55 clients)
    Footer.jsx               latest-updates feed, about, 4 offices, copyright
    WhatsAppButton.jsx       floating WhatsApp chat
public/media/                images mirrored from /wp-content/uploads, converted to WebP (~5 MB vs ~28 MB)
```

No runtime dependencies beyond React. Inner-page links still point to embesysindia.com until those pages are rebuilt.

## Routing & pages
- `react-router-dom` (BrowserRouter). Routes live in `src/App.jsx`; pages in `src/pages/`.
- `/` → `HomePage.jsx` (landing sections), `/about` → `AboutPage.jsx` (content in `src/data/about.js`).
- `internalRoutes` in `src/data/site.js` decides which nav links stay in-app; everything else still links to embesysindia.com.
- Hosting: serve with SPA fallback to `index.html` (e.g. `npm run preview`, Netlify `_redirects`, nginx `try_files`).
