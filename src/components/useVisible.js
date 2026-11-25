import { useEffect, useState } from 'react';
const calc = () => (window.innerWidth < 640 ? 1 : window.innerWidth < 992 ? 2 : 3);
export default function useVisible() {
  const [n, setN] = useState(calc);
  useEffect(() => {
    const on = () => setN(calc());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return n;
}
