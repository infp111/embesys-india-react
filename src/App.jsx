import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { wpPages } from './pages/wp/registry';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

// Plain <a href="/..."> links (carousel, ticker, converted pages) navigate in-app without a reload.
function InternalLinks() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//') || href.startsWith('/media/')) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <InternalLinks />
      <TopBar />
      <Navbar />
      <main>
        <Suspense fallback={<div className="page-loading">Loading…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {wpPages.map(({ slug, Component }) => (
              <Route key={slug} path={`/${slug}`} element={<Component />} />
            ))}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
