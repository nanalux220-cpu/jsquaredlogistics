import { ArrowRight, Check, Lightbulb, MessagesSquare, PackageCheck, PenTool } from 'lucide-react';
import { delay } from '@/lib/delay';
import { processSteps } from '@/data/site';

const icons = [MessagesSquare, Lightbulb, PenTool, PackageCheck];

export default function Process() {
  return (
    <section id="process" className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-28">
      {/* Soft brand glow and grid in the background */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-brand/25 blur-[140px]" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#ff7a3d]/10 blur-[140px]" aria-hidden="true"></div>
      <div className="cine-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" aria-hidden="true"></div>

      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[660px]" data-reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="h-section mt-5">
              From first idea to final files in <span className="text-brand">four simple steps.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[17px] leading-relaxed text-white/65" data-reveal style={delay(80)}>
            Whether it's a logo, a brochure or a full brand rollout, you always know what's happening, what we need from you and when the next files land.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Line that links the steps on large screens */}
          <span className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-brand via-white/25 to-brand lg:block" aria-hidden="true"></span>

          {processSteps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li
                key={s.n}
                className="group relative flex flex-col rounded-[28px] border border-white/10 bg-[#2b3036] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:bg-[#31363b]"
                data-reveal
                style={delay(i * 100)}
              >
                <div className="flex items-center justify-between">
                  <span className="relative flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-brand text-white shadow-[0_12px_30px_-10px_rgba(214,29,34,0.8)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[52px] font-bold leading-none tracking-[-0.05em] text-white/10 transition-colors duration-300 group-hover:text-white/25">
                    {s.n}
                  </span>
                </div>

                <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">Step {s.n}</p>
                <h3 className="mt-2 text-[23px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/65">{s.text}</p>

                <p className="mt-7 flex items-center gap-2.5 border-t border-white/10 pt-5 text-[14px] font-medium text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span><span className="sr-only">You get: </span>{s.result}</span>
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[28px] border border-white/10 bg-gradient-to-r from-brand/20 via-white/[0.03] to-transparent p-7 sm:flex-row sm:items-center md:px-10" data-reveal>
          <div>
            <p className="font-display text-[22px] font-semibold tracking-[-0.02em]">Ready for step one?</p>
            <p className="mt-1 text-[15px] text-white/65">Tell us about your project and we'll reply within one working day.</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Start your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
