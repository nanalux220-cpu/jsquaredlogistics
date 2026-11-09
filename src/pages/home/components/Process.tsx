import { delay } from '@/lib/delay';
import { processSteps } from '@/data/site';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-[640px]" data-reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="h-section mt-5">From first sketch to final files in four steps.</h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">
            Whether it's a logo, a brochure or a full brand rollout, you always know what's happening, what we need from you and when the next files land.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <li
              key={s.n}
              className="group relative rounded-3xl border border-ink/10 bg-white p-7 transition-colors duration-300 hover:border-brand/40"
              data-reveal
              style={delay(i * 80)}
            >
              <span className="font-display text-[44px] font-bold leading-none tracking-[-0.04em] text-ink/10 transition-colors duration-300 group-hover:text-brand">{s.n}</span>
              <h3 className="mt-8 text-[21px] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
