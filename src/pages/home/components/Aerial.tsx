import { delay } from '@/lib/delay';
import { ArrowRight } from 'lucide-react';
import { aerialPoints, site } from '@/data/site';

export default function Aerial() {
  return (
    <section id="aerial" className="bg-ink py-20 text-white md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1" data-reveal>
          <div className="aspect-[4/3] overflow-hidden rounded-[28px] bg-ink-soft">
            <img
              src={site.aerialImage}
              alt="A designer flying a drone to capture aerial visual content"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
            />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-brand px-5 py-4 shadow-xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">Photography</p>
            <p className="font-display text-[20px] font-bold">+ Graphic design</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow" data-reveal>Aerial &amp; visual content</p>
          <h2 className="h-section mt-5 max-w-[18ch]" data-reveal>See your brand from a new angle.</h2>
          <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-white/70" data-reveal>
            We combine drone photography with graphic design to tell your story in ways a flat photo can't, from property and sites to events and campaigns.
          </p>
          <ul className="mt-10 space-y-6">
            {aerialPoints.map((p, i) => (
              <li key={p.title} className="flex gap-5" data-reveal style={delay(i * 80)}>
                <span className="mt-1 w-6 shrink-0 font-display text-[14px] font-bold text-brand">0{i + 1}</span>
                <div>
                  <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/65">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mt-10" data-reveal>
            Plan an aerial shoot <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
