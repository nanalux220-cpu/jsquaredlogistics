import type { CSSProperties } from 'react';
import { pillars } from '@/mocks/home';

export default function Pillars() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background-50 px-5 py-16 text-foreground-50 md:px-8 md:py-24 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-16">
          <div data-reveal>
            <p className="stamp">Our services</p>
            <h2 className="mt-4 max-w-[24ch] text-[clamp(26px,4.2vw,52px)] font-semibold leading-[1.03] tracking-[-0.03em]">
              Three ways we make a brand <em className="accent">impossible</em> to ignore.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[15px] leading-relaxed text-foreground-700 md:pb-2" data-reveal>
            Design that carries across every screen, page and print run — drawn in Leeds, delivered wherever your
            audience happens to be.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="pillar-card group relative flex flex-col overflow-hidden rounded-2xl p-6 md:p-8"
              style={{ '--hue': p.hue } as CSSProperties}
              data-reveal
            >
              <span
                className="pillar-rule absolute left-0 top-0 h-[3px] w-10 transition-all duration-500 ease-out group-hover:w-full"
                aria-hidden="true"
              ></span>

              <div className="relative flex items-start justify-between gap-4">
                <span className="pillar-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-[24px] shadow-[0_10px_24px_-16px_rgba(15,15,18,0.55)] transition-colors duration-500 ease-out">
                  <i className={p.icon} aria-hidden="true"></i>
                </span>
                <span className="pillar-kicker font-label text-[10px] uppercase tracking-[0.2em]">
                  {p.kicker}
                </span>
              </div>

              <h3 className="relative mt-7 text-[22px] font-semibold uppercase leading-tight tracking-[-0.01em] md:text-[25px]">
                {p.title}
              </h3>
              <p className="relative mt-3.5 text-[14px] leading-relaxed text-foreground-200 md:text-[15px]">{p.text}</p>

              <ul className="relative mt-6 flex list-none flex-wrap gap-2 p-0">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="pillar-tag rounded-full px-3 py-1 font-label text-[10px] uppercase tracking-[0.12em]"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="#featured"
                className="pillar-more relative mt-7 inline-flex w-fit cursor-pointer items-center gap-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors"
              >
                Learn more
                <i className="ri-arrow-right-line transition-transform duration-300 ease-out group-hover:translate-x-1"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}