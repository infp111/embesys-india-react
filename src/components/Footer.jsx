import { news, offices, contact, logos } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__news">
          <img className="footer__logo" src={logos.full} alt="Embesys" />
          <h3 className="widget-title">Latest Updates</h3>
          <div className="newsfeed">
            <div className="newsfeed__track">
              {[...news, ...news].map((n, i) => (
                <div className="newsitem" key={i}>
                  <h4>{n.title}</h4>
                  <p>{n.body}</p>
                  {n.link && <a href={n.link.href} target="_blank" rel="noreferrer">🔗 {n.link.label}</a>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="widget-title">About Company</h3>
          <p>Embesys Innovative Technologies Pvt.Ltd, started with a vision of being professionally managed, knowledge based, innovative and committed to total customer satisfaction.</p>
          <div className="footer__social">
            {contact.socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}><img src={s.icon} alt={s.name} /></a>
            ))}
          </div>
        </div>
        <div className="footer__offices">
          {offices.map((o) => (
            <div key={o.city}>
              <h3 className="widget-title">{o.city}</h3>
              <p>{o.address}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>Copyright © {new Date().getFullYear()} <a href="https://embesysindia.com">embesysindia.com</a>. All Rights Reserved.</p>
          <ul><li><a href="#">Terms &amp; Condition</a></li><li><a href="#">Careers</a></li><li><a href="#">Privacy Policy</a></li></ul>
        </div>
      </div>
    </footer>
  );
}
