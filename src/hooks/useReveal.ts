import { useEffect } from 'react';

// Fades sections in as they scroll into view. Skipped entirely for people who prefer reduced motion.
export default function useReveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    const root = document.documentElement;
    root.classList.add('js-reveal');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => { io.disconnect(); root.classList.remove('js-reveal'); };
  }, []);
}
