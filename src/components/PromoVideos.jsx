import { useState } from 'react';
import { videos } from '../data/site';
import useVisible from './useVisible';
import { Icon } from './Icons';

function LazyYouTube({ id }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="yt">
      {play ? (
        <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`} title="Embesys video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <button className="yt__thumb" onClick={() => setPlay(true)} aria-label="Play video">
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="yt__play" />
        </button>
      )}
    </div>
  );
}

export default function PromoVideos() {
  const perView = useVisible();
  const pages = Math.ceil(videos.length / perView);
  const [page, setPage] = useState(0);
  const p = Math.min(page, pages - 1);
  return (
    <section className="promo section-padding">
      <div className="container">
        <div className="section-subtitle center light"><span>Embesys Innovative Technologies Pvt.Ltd</span></div>
        <h2 className="section-title center light">Promotional Video</h2>
        <div className="arrows">
          <button onClick={() => setPage((p - 1 + pages) % pages)} aria-label="Previous"><Icon name="left" /></button>
          <button onClick={() => setPage((p + 1) % pages)} aria-label="Next"><Icon name="right" /></button>
        </div>
        <div className="vgrid" style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}>
          {videos.slice(p * perView, p * perView + perView).map((id) => <LazyYouTube key={id} id={id} />)}
        </div>
      </div>
    </section>
  );
}
