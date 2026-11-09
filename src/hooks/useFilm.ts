import { useEffect } from 'react';

interface Beat { el: HTMLElement; from: number; to: number; parts: HTMLElement[]; lines: HTMLElement[]; chips: HTMLElement[] }
interface Chapter {
  el: HTMLElement; beats: Beat[]; stage: HTMLElement; src: string; dur: number; video: HTMLVideoElement | null;
  playing: boolean; held: boolean; wait: boolean; clock: number; armed?: boolean;
}

export default function useFilm() {
  useEffect(() => {
    const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const FINE = matchMedia('(pointer: fine)').matches;
    const FADE = 0.10;
    const STAGGER = 0.035;
    const chapterEls = [...document.querySelectorAll<HTMLElement>('.chapter')];
    if (!chapterEls.length) return undefined;
    if (REDUCED) { chapterEls.forEach((el) => el.classList.add('is-static')); return undefined; }

    document.querySelectorAll<HTMLElement>('.beat :is(h1, h2)[data-split="lines"]').forEach((h) => {
      if (h.dataset.splitDone) return;
      h.dataset.splitDone = '1';
      const lines = h.innerHTML.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
      h.innerHTML = lines.map((l) => `<span class="line"><span class="line-in">${l}</span></span>`).join('');
    });

    const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
    const ease = (x: number) => 1 - (1 - x) ** 3;

    const chapters: Chapter[] = chapterEls.map((el) => {
      const beats = [...el.querySelectorAll<HTMLElement>('.beat')].map((b) => ({
        el: b,
        from: parseFloat(b.dataset.from || '0') || 0,
        to: b.dataset.to ? parseFloat(b.dataset.to) : 1,
        parts: [...b.children].filter((c) => !c.classList.contains('chips')) as HTMLElement[],
        lines: [...b.querySelectorAll<HTMLElement>('.line-in')],
        chips: [...b.querySelectorAll<HTMLElement>('.chips li')],
      }));
      return {
        el, beats, stage: el.querySelector('.stage') as HTMLElement, src: el.dataset.video || '',
        dur: parseFloat(el.dataset.duration || '') || beats.length * 5,
        video: null, playing: false, held: false, wait: !!el.dataset.video, clock: 0,
      };
    });

    const afterLCP = new Promise<void>((res) => {
      const img = document.querySelector<HTMLImageElement>('.chapter .plate');
      if (!img || img.complete) { res(); return; }
      img.addEventListener('load', () => res(), { once: true });
      img.addEventListener('error', () => res(), { once: true });
      setTimeout(res, 800);
    });

    const posterOf = (c: Chapter) => {
      const plate = c.stage.querySelector('.plate');
      if (plate && plate.getAttribute('src')) return plate.getAttribute('src') || '';
      return c.el.dataset.poster || '';
    };

    const listeners: Array<() => void> = [];

    function start(c: Chapter) {
      const v = c.video;
      if (!v) return;
      const p = v.play();
      if (!p || !p.then) { c.playing = true; return; }
      p.then(() => {
        c.playing = true;
        if (c.wait) c.wait = false;
        else if (Number.isFinite(v.duration) && v.duration > 0 && Math.abs(c.clock * v.duration - v.currentTime) > 1.5) {
          v.currentTime = c.clock * v.duration;
        }
        if (c.held) v.pause();
      }).catch(() => {
        c.playing = false;
        c.wait = false;
        if (c.armed) return;
        c.armed = true;
        const retry = () => start(c);
        addEventListener('pointerdown', retry, { once: true, passive: true });
        addEventListener('touchstart', retry, { once: true, passive: true });
      });
    }

    async function attach(c?: Chapter) {
      if (!c || c.video) return;
      await afterLCP;
      if (c.video || !c.el.isConnected) return;
      const v = document.createElement('video');
      v.muted = true; v.playsInline = true; v.loop = true; v.preload = 'auto';
      v.disablePictureInPicture = true; v.tabIndex = -1;
      v.setAttribute('aria-hidden', 'true');
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      const poster = posterOf(c);
      if (poster) v.poster = poster;
      v.src = c.src;
      setTimeout(() => { c.wait = false; }, 5000);
      v.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(v.duration) && v.duration > 0) c.dur = v.duration;
      }, { once: true });
      v.addEventListener('loadeddata', () => c.stage.classList.add('is-live'), { once: true });
      c.stage.insertBefore(v, c.stage.querySelector('.veil'));
      c.video = v;
      start(c);
    }

    function detach(c?: Chapter) {
      if (!c || !c.video) return;
      c.stage.classList.remove('is-live');
      c.playing = false;
      c.video.pause();
      c.video.removeAttribute('src');
      c.video.load();
      c.video.remove();
      c.video = null;
    }

    const find = (t: Element) => chapters.find((c) => c.el === t);
    const near = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && attach(find(e.target))), { rootMargin: '200px' });
    const far = new IntersectionObserver((es) => es.forEach((e) => !e.isIntersecting && detach(find(e.target))), { rootMargin: '260%' });
    chapters.forEach((c) => { near.observe(c.el); far.observe(c.el); });

    function playhead(c: Chapter, dt: number) {
      const v = c.video;
      if (c.playing && v && Number.isFinite(v.duration) && v.duration > 0) {
        c.clock = clamp01(v.currentTime / v.duration);
        return c.clock;
      }
      if (!c.held && !c.wait) c.clock = (c.clock + dt / Math.max(1, c.dur)) % 1;
      return c.clock;
    }

    function setState(el: HTMLElement, o: number, leaving: boolean) {
      el.style.setProperty('--o', o.toFixed(3));
      el.style.setProperty('--o-inv', (1 - o).toFixed(3));
      el.style.setProperty('--dir', leaving ? '1' : '-1');
    }

    function drive(el: HTMLElement, local: number, i: number, n: number) {
      const tIn = clamp01((local - i * STAGGER) / FADE);
      const tOut = clamp01((1 - local - (n - 1 - i) * STAGGER) / FADE);
      setState(el, ease(Math.min(tIn, tOut)), tOut < 1);
    }

    function applyBeats(c: Chapter, p: number) {
      c.beats.forEach((b) => {
        const span = b.to - b.from;
        const local = span > 0 ? (p - b.from) / span : 0;
        const inside = local >= 0 && local < 1;
        b.el.style.setProperty('--local', clamp01(local).toFixed(3));
        if (!inside) {
          [...b.parts, ...b.lines, ...b.chips].forEach((el) => setState(el, 0, local > 1));
        } else {
          b.parts.forEach((el, i) => drive(el, local, i, b.parts.length));
          b.lines.forEach((el, i) => drive(el, local, i * 0.8, b.lines.length * 0.8));
          b.chips.forEach((el, i) => drive(el, local, 2 + i, 2 + b.chips.length));
        }
        b.el.classList.toggle('is-on', inside);
        b.el.classList.toggle('is-leaving', inside && 1 - local < FADE + STAGGER * 4);
      });
    }

    function hold(c: Chapter, on: boolean) {
      if (c.held === on) return;
      c.held = on;
      const v = c.video;
      if (!v || !c.playing) return;
      if (on) v.pause(); else v.play().catch(() => {});
    }

    if (FINE) chapters.forEach((c) => {
      const over = (e: PointerEvent) => { if ((e.target as Element).closest('.beat')) hold(c, true); };
      const out = (e: PointerEvent) => {
        const rt = e.relatedTarget as Element | null;
        if (!rt || !rt.closest?.('.beat')) hold(c, false);
      };
      c.stage.addEventListener('pointerover', over);
      c.stage.addEventListener('pointerout', out);
      listeners.push(() => { c.stage.removeEventListener('pointerover', over); c.stage.removeEventListener('pointerout', out); });
    });

    function setExit(c?: Chapter) {
      if (!c) return;
      const { top } = c.el.getBoundingClientRect();
      c.el.style.setProperty('--exit', clamp01(-top / Math.max(1, innerHeight)).toFixed(3));
    }

    const cueOff = () => document.documentElement.style.setProperty('--cue', '0');
    addEventListener('scroll', cueOff, { once: true, passive: true });

    let raf = 0;
    let prev = 0;
    const inView = new Set<Element>();
    function tick(now: number) {
      const dt = prev ? Math.min(0.1, (now - prev) / 1000) : 0;
      prev = now;
      chapters.forEach((c) => { setExit(c); applyBeats(c, playhead(c, dt)); });
      raf = requestAnimationFrame(tick);
    }
    const run = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) inView.add(e.target);
        else { inView.delete(e.target); setExit(find(e.target)); }
      });
      if (inView.size && !raf) { prev = 0; raf = requestAnimationFrame(tick); }
      if (!inView.size && raf) { cancelAnimationFrame(raf); raf = 0; }
    });
    chapters.forEach((c) => run.observe(c.el));

    let mraf = 0;
    if (FINE) {
      const root = document.documentElement;
      const MLERP = 0.08;
      let tx = 0; let ty = 0; let mx = 0; let my = 0;
      const settle = () => {
        mx += (tx - mx) * MLERP; my += (ty - my) * MLERP;
        root.style.setProperty('--mx', mx.toFixed(3));
        root.style.setProperty('--my', my.toFixed(3));
        mraf = Math.abs(tx - mx) + Math.abs(ty - my) > 0.002 ? requestAnimationFrame(settle) : 0;
      };
      const aim = (x: number, y: number) => { tx = x; ty = y; if (!mraf) mraf = requestAnimationFrame(settle); };
      const move = (e: PointerEvent) => aim((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
      const leave = () => aim(0, 0);
      addEventListener('pointermove', move, { passive: true });
      document.addEventListener('mouseleave', leave);
      listeners.push(() => { removeEventListener('pointermove', move); document.removeEventListener('mouseleave', leave); });
    }

    return () => {
      near.disconnect(); far.disconnect(); run.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (mraf) cancelAnimationFrame(mraf);
      listeners.forEach((f) => f());
      removeEventListener('scroll', cueOff);
      chapters.forEach((c) => detach(c));
    };
  }, []);
}