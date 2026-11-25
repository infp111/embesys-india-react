import { heroSlides } from '../data/site';
import useAutoplay from './useAutoplay';
import { Icon } from './Icons';

export default function HeroCarousel() {
  const { index, setIndex, next, prev, setPaused } = useAutoplay(heroSlides.length, 5000);
  return (
    <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroSlides.map((s, i) => {
          const img = <img src={s.img} alt={s.alt} loading={i === 0 ? 'eager' : 'lazy'} />;
          return <div className="hero__slide" key={s.img}>{s.href ? <a href={s.href}>{img}</a> : img}</div>;
        })}
      </div>
      <button className="hero__ctrl hero__ctrl--prev" onClick={prev} aria-label="Previous"><Icon name="left" size={30} /></button>
      <button className="hero__ctrl hero__ctrl--next" onClick={next} aria-label="Next"><Icon name="right" size={30} /></button>
      <ul className="hero__dots">
        {heroSlides.map((_, i) => (
          <li key={i}><button className={i === index ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} /></li>
        ))}
      </ul>
    </section>
  );
}
