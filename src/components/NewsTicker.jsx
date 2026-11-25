import { ticker } from '../data/site';

export default function NewsTicker() {
  const content = (
    <p>
      {ticker.map((t, i) => (
        <span key={i} className="ticker__item">
          {t.tag && <span className="ticker__tag">{t.tag}</span>}{' '}
          {t.href ? (
            <a href={t.href}><strong>{t.text} <span className="ticker__hl">{t.highlight}</span></strong></a>
          ) : (
            <>
              <strong>{t.text}</strong>{' '}
              {t.link && <a href={t.link.href} target="_blank" rel="noreferrer">{t.link.label}</a>}{' '}
              {t.after}
            </>
          )}
          <span className="ticker__sep">|</span>
        </span>
      ))}
    </p>
  );
  return (
    <div className="ticker">
      <div className="ticker__track">{content}{content}</div>
    </div>
  );
}
