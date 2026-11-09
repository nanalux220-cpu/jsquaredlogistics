import type { CSSProperties } from 'react';
import { processSteps } from '@/mocks/home';

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-foreground-950/10 bg-secondary-950 px-5 py-16 text-foreground-950 md:px-8 md:py-24 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div data-reveal>
            <p className="stamp">How we work</p>
            <h2 className="mt-4 max-w-[22ch] text-[clamp(26px,4.2vw,52px)] font-semibold leading-[1.03] tracking-[-0.03em]">
              From first sketch to final proof, in <em className="accent">four</em> steps.
            </h2>
          </div>
          <div data-reveal>
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-foreground-700">
              Every project runs the same way, whether it is a logo, a brochure or a full brand rollout. You always know
              what is happening, what we need from you, and when the next files land.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex cursor-pointer items-center gap-2 border-b border-accent-500/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-500 transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              Start a brief <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>

        <ol className="mt-12 grid list-none grid-cols-1 gap-x-8 gap-y-10 p-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-10">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="step-item group relative border-t border-foreground-950/20 pt-7"
              style={{ '--hue': step.hue } as CSSProperties}
              data-reveal
            >
              <span
                className="step-rule absolute left-0 top-0 h-[3px] w-9 -translate-y-[1.5px] transition-all duration-500 ease-out group-hover:w-full"
                aria-hidden="true"
              ></span>
              <div className="flex items-start justify-between gap-4">
                <span className="step-num font-label text-[12px] tracking-[0.2em] transition-colors duration-300">
                  {step.n}
                </span>
                <span className="step-icon flex h-11 w-11 items-center justify-center rounded-full text-[18px] transition-colors duration-300 ease-out">
                  <i className={step.icon} aria-hidden="true"></i>
                </span>
              </div>
              <h3 className="mt-6 text-[18px] font-semibold uppercase leading-tight tracking-[-0.01em] md:text-[21px]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-foreground-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}