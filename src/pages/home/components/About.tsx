import { MapPin } from 'lucide-react';
import { about, site, stats } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="bg-paper-deep py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">About the studio</p>
            <h2 className="h-section mt-5 max-w-[18ch]">{about.title}</h2>
            {about.body.map((p) => (
              <p key={p} className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-ink-muted">{p}</p>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-4 self-end" data-reveal>
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl bg-white p-6 md:p-7">
                <dd className="font-display text-[clamp(34px,4vw,50px)] font-bold leading-none tracking-[-0.04em] text-brand">{s.value}</dd>
                <dt className="mt-3 text-[14px] leading-snug text-ink-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[28px] bg-ink" data-reveal>
          <img
            src={site.leedsImage}
            alt="Leeds rooftops at dusk"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" aria-hidden="true"></div>
          <div className="relative max-w-[560px] p-8 text-white md:p-14">
            <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/70">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" /> Operating area
            </p>
            <h3 className="mt-4 text-[clamp(26px,3vw,38px)] font-bold leading-tight tracking-[-0.03em]">Leeds in person. Everywhere else online.</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-white/75">{about.operatingArea}</p>
            <a href="#contact" className="btn-outline-light mt-8">Check if we cover you</a>
          </div>
        </div>
      </div>
    </section>
  );
}
