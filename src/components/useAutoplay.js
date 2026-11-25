import { useEffect, useState, useCallback } from 'react';
export default function useAutoplay(count, interval = 5000) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  useEffect(() => { if (index >= count) setIndex(0); }, [count, index]);
  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [paused, next, interval, count]);
  return { index, setIndex, next, prev, setPaused };
}
