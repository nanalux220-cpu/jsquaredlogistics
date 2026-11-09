import { delay } from '@/lib/delay';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { services, site } from '@/data/site';
import HeroBackdrop from './HeroBackdrop';

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-[72px] text-white">
      <HeroBackdrop />

      <div className="container-site relative flex flex-1 flex-col justify-center py-16 md:py-24">
        <p className="eyebrow !text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]" data-reveal>{site.tagline}</p>
        <h1
          className="mt-6 max-w-[13ch] text-[clamp(44px,7.4vw,108px)] font-bold leading-[0.95] tracking-[-0.045em] [text-shadow:0_10px_40px_rgba(0,0,0,0.45)]"
          data-reveal
          style={delay(80)}
        >
          Design that makes your brand <span className="text-brand">impossible to ignore.</span>
        </h1>
        <p className="mt-7 max-w-[50ch] text-[17px] leading-relaxed text-white/85 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] md:text-[19px]" data-reveal style={delay(160)}>
          Brand identity, print, digital, and packaging design from a Leeds studio that cares about every detail, for clients in Leeds and worldwide.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal style={delay(240)}>
          <a href="#contact" className="btn-primary">
            Start your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#services" className="btn-outline-light backdrop-blur-sm">See our services</a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[14px] text-white/70" data-reveal style={delay(320)}>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" aria-hidden="true" /> Based in Leeds, working worldwide</li>
          <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand" aria-hidden="true" /> Replies within one working day</li>
        </ul>
      </div>

      <div className="container-site relative flex items-end justify-between gap-6 pb-10">
        <ul className="hidden flex-wrap gap-2 md:flex">
          {services.map((s) => (
            <li key={s.title} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-md">{s.title}</li>
          ))}
        </ul>
        <a href="#services" className="flex shrink-0 items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white" aria-label="Scroll to services">
          <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/40">
            <span className="cine-scroll mt-2 h-2 w-1 rounded-full bg-white"></span>
          </span>
          Scroll
        </a>
      </div>
    </section>
  );
}
