import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { featured } from '@/mocks/home';
import WorkLightbox from './WorkLightbox';

const SLIDE_MS = 3000;
const RESET_MS = 760;
// Display order: the three pillar services first (Digital, Infographics, UI/UX),
// then Brand Identity, Print and Packaging.
const ORDER = [2, 3, 4, 0, 1, 5];

export default function Featured() {
  const [active, setActive] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const [gliding, setGliding] = useState(true);
  const [paused, setPaused] = useState(false);
  const list = ORDER.map((i) => featured[i]).filter(Boolean);
  const count = list.length;
  const loop = [...list, ...list];
  const settleTimer = useRef<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: number) => {
    setActive((current) => {
      if (current === null) return current;
      const next = (current + dir + count) % count;
      return next;
    });
  }, [count]);

  useEffect(() => {
    if (paused || active !== null) return undefined;
    const id = window.setInterval(() => setIndex((prev) => prev + 1), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused, active]);

  useEffect(() => {
    if (index < count) return undefined;
    settleTimer.current = window.setTimeout(() => {
      setGliding(false);
      setIndex(0);
    }, RESET_MS);
    return () => {
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
    };
  }, [index, count]);

  useEffect(() => {
    if (gliding) return undefined;
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setGliding(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [gliding]);

  const current = index % count;

  const goTo = (target: number) => {
    if (target < 0) {
      setGliding(false);
      setIndex(count - 1);
      return;
    }
    setIndex(target);
  };

  return (
    <section id="featured" className="bg-background-950 px-5 py-20 text-foreground-950 md:px-8 md:py-28 lg:px-14">
      <div
        className="mx-auto w-full max-w-[1440px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="text-center" data-reveal>
          <p className="stamp">What we do</p>
          <h2 className="mx-auto mt-4 max-w-[20ch] text-[clamp(26px,4.2vw,52px)] font-semibold uppercase leading-[1.02] tracking-[-0.03em]">
            Featured services
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-accent-500/70" aria-hidden="true"></span>
          <p className="mx-auto mt-5 max-w-[54ch] text-[14px] leading-relaxed text-foreground-600 md:text-[15px]">
            Six core offers, each delivered with the same attention to type, colour and detail — pick one, or let us
            pull them together into a single brand system.
          </p>
        </div>

        <div className="feat-carousel mt-12" data-reveal>
          <div
            className={`feat-track${gliding ? '' : ' is-instant'}`}
            style={{ '--idx': index } as CSSProperties}
            aria-live="off"
          >
            {loop.map((f, i) => (
              <div className="feat-slide" key={`${f.title}-${i}`}>
                <article
                  className="feat-card group flex h-full flex-col px-3 pb-5 pt-3"
                  style={{ '--hue': f.hue } as CSSProperties}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i % count)}
                    aria-label={`View ${f.title} larger`}
                    className="group/img relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg bg-secondary-950"
                  >
                    <img
                      src={f.img}
                      alt={f.alt}
                      title={`${f.title} — graphic design in Leeds`}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.06]"
                      onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-950/60 via-transparent to-transparent"></span>
                    <span className="feat-view pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-background-50 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
                      <i className="ri-expand-diagonal-line mr-2 text-[13px]"></i> View larger
                    </span>
                  </button>

                  <div className="feat-icon relative z-10 -mt-7 ml-5 flex h-14 w-14 items-center justify-center rounded-xl text-[24px] shadow-[0_14px_32px_-14px_rgba(0,0,0,0.75)] transition-colors duration-500 ease-out">
                    <i className={f.icon} aria-hidden="true"></i>
                  </div>

                  <div className="flex flex-1 flex-col px-2">
                    <h3 className="mt-5 text-[17px] font-semibold uppercase leading-tight tracking-[-0.01em] md:text-[19px]">{f.title}</h3>

                    <p className="mt-3 text-[13px] leading-relaxed text-foreground-600 md:text-[14px]">{f.text}</p>

                    <ul className="mt-5 space-y-2 border-t border-foreground-950/10 pt-5">
                      {f.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-foreground-700 md:text-sm">
                          <span className="feat-mark mt-[6px] h-[5px] w-[5px] shrink-0" aria-hidden="true"></span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="feat-more mt-auto inline-flex w-fit cursor-pointer items-center gap-2 pb-1 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors"
                    >
                      Learn more
                      <i className="ri-arrow-right-line transition-transform duration-300 ease-out group-hover:translate-x-1"></i>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => goTo(index <= 0 ? count - 1 : index - 1)}
            aria-label="Previous service"
            className="feat-arrow"
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <div className="flex items-center gap-2">
            {list.map((f, i) => (
              <button
                key={f.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${f.title}`}
                aria-current={i === current}
                className={`feat-dot${i === current ? ' is-on' : ''}`}
              ></button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next service"
            className="feat-arrow"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      {active !== null && (
        <WorkLightbox works={list} index={active} onClose={close} onStep={step} />
      )}
    </section>
  );
}