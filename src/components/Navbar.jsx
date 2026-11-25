import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, logos } from '../data/site';
import { Icon } from './Icons';

function MenuItem({ item, depth }) {
  const [open, setOpen] = useState(false);
  const has = item.children?.length;
  return (
    <li className={`menu-item depth-${depth} ${has ? 'has-children' : ''} ${open ? 'open' : ''}`}>
      {item.internal ? (
        <NavLink to={item.href} end>{item.label}</NavLink>
      ) : (
        <a
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          onClick={(e) => { if (has && item.href === '#') { e.preventDefault(); setOpen((o) => !o); } }}
        >
          {item.label}
          {has && <span className="caret"><Icon name={depth === 0 ? 'down' : 'right'} size={13} /></span>}
        </a>
      )}
      {has && (
        <ul className="submenu">
          {item.children.map((c) => <MenuItem key={c.label} item={c} depth={depth + 1} />)}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setMobile(false); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`navbar ${scrolled ? 'navbar--fixed' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo"><img src={logos.main} alt="Embesys Innovative Technologies" /></Link>
        <button className="navbar__toggle" onClick={() => setMobile((m) => !m)} aria-label="Toggle menu">
          <Icon name={mobile ? 'close' : 'menu'} size={26} />
        </button>
        <nav className={`navbar__menu ${mobile ? 'is-open' : ''}`}>
          <ul>{nav.map((i) => <MenuItem key={i.label} item={i} depth={0} />)}</ul>
        </nav>
      </div>
    </header>
  );
}
