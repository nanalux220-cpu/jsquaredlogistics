import { delay } from '@/lib/delay';
import { useEffect, useState } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { services, site } from '@/data/site';

export default function Hero() {
  const [videoOn, setVideoOn] = useState(false);

  // Only load the background video for people who haven't asked for reduced motion or data saving.
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || conn?.saveData) return;
    setVideoOn(true);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl"></div>

      <div className="container-site relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow" data-reveal>{site.tagline}</p>
          <h1
            className="mt-6 text-[clamp(40px,6.6vw,84px)] font-bold leading-[0.98] tracking-[-0.045em]"
            data-reveal
            style={delay(80)}
          >
            Design that makes your brand <span className="text-brand">impossible to ignore.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-muted md:text-[19px]" data-reveal style={delay(160)}>
            Brand identity, print, digital, packaging and aerial visual content from a Leeds studio that cares about every detail, for clients in Leeds and worldwide.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal style={delay(240)}>
            <a href="#contact" className="btn-primary">
              Start your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-outline">See our services</a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[14px] text-ink-muted" data-reveal style={delay(320)}>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" aria-hidden="true" /> Based in Leeds, working worldwide</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand" aria-hidden="true" /> Replies within one working day</li>
          </ul>
        </div>

        <div className="relative" data-reveal style={delay(200)}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-ink shadow-[0_40px_80px_-40px_rgba(21,23,26,0.6)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={site.heroImage}
              alt="Designers at work in the J Squared studio with sketches and printed proofs"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
            {videoOn && (
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700"
                src={site.heroVideo}
                poster={site.heroImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
                onLoadedData={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden="true"></div>
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
              {services.slice(0, 4).map((s) => (
                <span key={s.title} className="rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">{s.title}</span>
              ))}
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgba(21,23,26,0.35)] sm:block lg:-left-10">
            <p className="font-display text-[30px] font-bold leading-none tracking-[-0.03em] text-brand">6</p>
            <p className="mt-1 text-[12px] font-medium text-ink-muted">design services,<br />one studio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
