import { about, logos } from '../data/site';
export default function About() {
  return (
    <section className="about section-padding">
      <div className="container about__grid">
        <div>
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="about__logo"><img src={logos.full} alt="Embesys" /></div>
      </div>
    </section>
  );
}
