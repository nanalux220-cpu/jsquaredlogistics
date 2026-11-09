import { useEffect } from 'react';

export default function usePanels() {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const film = document.querySelector('.chapter');
    const navF = () => {
      const pastFilm = film ? film.getBoundingClientRect().bottom <= 72 : scrollY > 24;
      nav?.classList.toggle('is-solid', pastFilm);
    };
    addEventListener('scroll', navF, { passive: true });
    addEventListener('resize', navF);
    navF();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => { removeEventListener('scroll', navF); removeEventListener('resize', navF); };
    }

    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal')) : [];
      el.style.setProperty('--i', String(Math.max(0, sibs.indexOf(el))));
      io.observe(el);
    });

    const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    let raf = 0;
    const paint = () => {
      raf = 0;
      const h = innerHeight;
      layers.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -h || r.top > 2 * h) return;
        const centre = (r.top + r.height / 2 - h / 2) / h;
        let speed = parseFloat(el.dataset.parallax || '0.32');
        if (el.classList.contains('panel-bg') && innerWidth < 780) speed = Math.min(speed, 0.22);
        el.style.setProperty('--py', `${(centre * -speed * h).toFixed(1)}px`);
      });
    };

    const SOFT = '.stage video, .plate, .panel-bg';
    const soften = (el: Element) => {
      const m = el as HTMLImageElement & HTMLVideoElement;
      const nw = m.naturalWidth || m.videoWidth; const nh = m.naturalHeight || m.videoHeight;
      if (!nw || !nh) return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const factor = Math.max(r.width / nw, r.height / nh);
      const px = factor <= 1.15 ? 0 : Math.min(1.6, Math.max(0.4, (factor - 1) * 1.2));
      (el as HTMLElement).style.setProperty('--soften', `${px.toFixed(2)}px`);
    };
    const softenAll = () => document.querySelectorAll(SOFT).forEach(soften);
    const onLoad = (e: Event) => { const t = e.target as Element; if (t.matches && t.matches(SOFT)) soften(t); };
    document.addEventListener('load', onLoad, true);
    document.addEventListener('loadedmetadata', onLoad, true);
    addEventListener('resize', softenAll);
    softenAll();

    const manifestos = [...document.querySelectorAll<HTMLElement>('[data-words]')].map((el) => {
      if (!el.dataset.wrapped) {
        el.dataset.wrapped = '1';
        const wrap = (node: Node) => {
          [...node.childNodes].forEach((child) => {
            if (child.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (child.textContent || '').split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
                const w = document.createElement('span'); w.className = 'w'; w.textContent = part; frag.appendChild(w);
              });
              (child as Text).replaceWith(frag);
            } else if (child.nodeType === 1) wrap(child);
          });
        };
        wrap(el);
      }
      return { section: (el.closest('section') || el) as HTMLElement, words: [...el.querySelectorAll<HTMLElement>('.w')] };
    });
    const light = () => {
      const h = innerHeight;
      manifestos.forEach((m) => {
        const r = m.section.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) return;
        const p = Math.min(1, Math.max(0, (h * 0.8 - r.top) / (r.height + h * 0.45)));
        const n = m.words.length;
        m.words.forEach((w, i) => w.style.setProperty('--lit', p * (n + 1) > i + 1 ? '1' : '0'));
      });
    };
    const onScrollLight = () => requestAnimationFrame(light);
    const onScrollPaint = () => { if (!raf) raf = requestAnimationFrame(paint); };
    addEventListener('scroll', onScrollLight, { passive: true });
    addEventListener('scroll', onScrollPaint, { passive: true });
    addEventListener('resize', paint);
    light();
    paint();

    return () => {
      removeEventListener('scroll', navF);
      removeEventListener('resize', navF);
      io.disconnect();
      document.removeEventListener('load', onLoad, true);
      document.removeEventListener('loadedmetadata', onLoad, true);
      removeEventListener('resize', softenAll);
      removeEventListener('scroll', onScrollLight);
      removeEventListener('scroll', onScrollPaint);
      removeEventListener('resize', paint);
    };
  }, []);
}