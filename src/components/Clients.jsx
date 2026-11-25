import { clients } from '../data/site';
export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="section-subtitle center"><span>Embesys Innovative Technologies Pvt.Ltd</span></div>
        <h2 className="section-title center">Our Valuable Clients</h2>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {row.map((src, i) => (
            <div className="client" key={i}><img src={src} alt={`Client ${(i % clients.length) + 1}`} loading="lazy" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
