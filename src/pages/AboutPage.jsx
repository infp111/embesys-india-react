import { Fragment } from 'react';
import { aboutPage } from '../data/about';
import usePageTitle from '../hooks/usePageTitle';

// Renders **bold** segments from the data file.
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>
  );
}

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.3-4.1-4.1 1.4-1.4 2.7 2.7 5.8-5.8 1.4 1.4-7.2 7.2Z" />
  </svg>
);

export default function AboutPage() {
  const { hero, intro, missionVision: mv } = aboutPage;
  usePageTitle(aboutPage.title);

  return (
    <div className="about-page">
      <section className="abuhero">
        <img src={hero.image} alt={hero.alt} />
      </section>

      <section className="abu-intro">
        <div className="container abu-intro__grid">
          <div className="abu-intro__image">
            <img src={intro.image} alt={intro.imageAlt} loading="lazy" />
          </div>
          <div className="abu-intro__content">
            <h3>{intro.heading}</h3>
            {intro.blocks.map((b, i) =>
              b.list ? (
                <ul key={i} className="abu-checklist">
                  {b.list.map((li) => (
                    <li key={li}><CheckIcon /><strong>{li}</strong></li>
                  ))}
                </ul>
              ) : (
                <p key={i}><Rich text={b.p} /></p>
              )
            )}
          </div>
        </div>
      </section>

      <section className="abu-mv">
        <div className="container">
          <h2 className="abu-mv__title">{mv.heading}</h2>
          <div className="abu-mv__grid">
            <div className="abu-card abu-card--mission">
              <div className="abu-card__icon"><TargetIcon /></div>
              <h5>{mv.mission.title}</h5>
              <p>{mv.mission.text}</p>
            </div>
            <div className="abu-card abu-card--vision">
              <div className="abu-card__icon"><EyeIcon /></div>
              <h5>{mv.vision.title}</h5>
              <ul>{mv.vision.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
