import { useState } from 'react';
import products from '../data/products.json';
import useAutoplay from './useAutoplay';
import useVisible from './useVisible';
import { Icon } from './Icons';

function ProductSlider({ items }) {
  const perView = useVisible();
  const pages = Math.max(1, Math.ceil(items.length / perView));
  const { index, next, prev, setPaused } = useAutoplay(pages, 6000);
  return (
    <div className="pslider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pslider__viewport">
        <div className="pslider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((p) => (
            <article className="pcard" key={p.title} style={{ flex: `0 0 ${100 / perView}%` }}>
              <div className="pcard__inner">
                <a href={p.href} className="pcard__img"><img src={p.img} alt={p.title} loading="lazy" /></a>
                <div className="pcard__body">
                  <h6>{p.title}</h6>
                  <span className="pcard__brand">{p.brand}</span>
                  <p>{p.desc}</p>
                  <a href={p.href} className="pcard__more">Learn More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {pages > 1 && (
        <>
          <button className="pslider__ctrl pslider__ctrl--prev" onClick={prev} aria-label="Previous"><Icon name="left" /></button>
          <button className="pslider__ctrl pslider__ctrl--next" onClick={next} aria-label="Next"><Icon name="right" /></button>
        </>
      )}
    </div>
  );
}

export default function Products() {
  const [tab, setTab] = useState(0);
  return (
    <section className="products section-padding">
      <div className="container">
        <h2 className="section-title center">Check Our Products</h2>
        <div className="tabs" role="tablist">
          {products.map((g, i) => (
            <button key={g.tab} role="tab" aria-selected={i === tab} className={i === tab ? 'active' : ''} onClick={() => setTab(i)}>
              {g.tab}
            </button>
          ))}
        </div>
        <ProductSlider key={tab} items={products[tab].items} />
      </div>
    </section>
  );
}
