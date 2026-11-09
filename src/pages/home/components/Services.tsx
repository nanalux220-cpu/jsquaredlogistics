import { delay } from '@/lib/delay';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/data/site';
import { ServiceGlyph } from '@/components/icons';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
          <div data-reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="h-section mt-5 max-w-[16ch]">Six services. One consistent brand.</h2>
          </div>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink-muted" data-reveal>
            Pick a single service or let us pull them together into one brand system that works on every screen, page and shelf.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(37,41,47,0.35)]"
              data-reveal
              style={delay((i % 3) * 80)}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-paper-deep">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-lg">
                  <ServiceGlyph name={s.icon} className="h-6 w-6" strokeWidth={1.8} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{s.text}</p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-[14px] text-ink-soft">
                      <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold text-ink transition-colors hover:text-brand"
                  aria-label={`Ask about ${s.title}`}
                >
                  Ask about this <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
