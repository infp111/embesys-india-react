import { features } from '../data/site';
import { Icon } from './Icons';
export default function Features() {
  return (
    <section className="features section-padding">
      <div className="container">
        <div className="section-subtitle">Three Things</div>
        <h2 className="section-title">To Know About Us</h2>
        <div className="features__grid">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <span className="feature__icon"><Icon name={f.icon} size={46} /></span>
              <h5>{f.title}</h5>
              <p>{f.text}</p>
              <span className="feature__shape"><Icon name={f.icon} size={110} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
