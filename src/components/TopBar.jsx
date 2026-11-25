import { contact } from '../data/site';
import { Icon } from './Icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__info">
          <span><Icon name="pin" size={15} /> {contact.address}</span>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}><Icon name="phone" size={15} /> {contact.phone}</a>
          <a href={`mailto:${contact.email}`}><Icon name="mail" size={15} /> {contact.email}</a>
        </div>
        <div className="topbar__social">
          <span>Follow Us On :</span>
          {contact.socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
              <img src={s.icon} alt={s.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
