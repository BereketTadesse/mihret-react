import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Some browsers or libraries like Lenis might need a small delay, 
    // but usually calling window.scrollTo(0, 0) immediately works.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
