const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
export const Icon = ({ name, size = 20 }) => {
  const s = { width: size, height: size, viewBox: '0 0 24 24', ...P };
  switch (name) {
    case 'pin': return <svg {...s}><path d="M12 21s-7-6.3-7-12a7 7 0 1 1 14 0c0 5.7-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'phone': return <svg {...s}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>;
    case 'mail': return <svg {...s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case 'globe': return <svg {...s}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'badge': return <svg {...s}><circle cx="12" cy="9" r="6"/><path d="m9 14-2 7 5-3 5 3-2-7"/><path d="m9.5 9 1.7 1.7L14.5 7.5"/></svg>;
    case 'bridge': return <svg {...s}><path d="M2 17h20M4 17V9M20 17V9M4 9c4 0 6 4 8 4s4-4 8-4M8 17v-5M16 17v-5"/></svg>;
    case 'left': return <svg {...s}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'right': return <svg {...s}><path d="M9 6l6 6-6 6"/></svg>;
    case 'down': return <svg {...s}><path d="M6 9l6 6 6-6"/></svg>;
    case 'menu': return <svg {...s}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case 'close': return <svg {...s}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case 'whatsapp': return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>;
    default: return null;
  }
};
