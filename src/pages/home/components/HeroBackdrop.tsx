import { site } from '@/data/site';

// Graphic design motion backdrop for the hero, built from CSS and SVG so it runs on every phone,
// tablet and desktop without downloading a video: a slow push-in on a studio photo, light leaks,
// a layout grid, pen-tool curves that draw themselves, a spinning construction ring, floating
// swatch and type cards, a moving pen cursor, a light sweep, crop marks and film grain.
const swatches = [
  { hex: '#D61D22', name: 'Signature red' },
  { hex: '#FF7A3D', name: 'Warm orange' },
  { hex: '#25292F', name: 'Charcoal' },
  { hex: '#FFFFFF', name: 'Paper' },
];

export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Studio photo with a slow push-in */}
      <div className="cine-kenburns absolute inset-0 brightness-110 saturate-[1.15]">
        <picture>
          <source media="(max-aspect-ratio: 4/5)" srcSet={site.heroImageMobile} width={828} height={1094} />
          <img
          src={site.heroImage}
          srcSet={`${site.heroImageSmall} 960w, ${site.heroImage} 1920w`}
          sizes="100vw"
          alt=""
          width={1920}
          height={836}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          />
        </picture>
      </div>

      {/* Light grade so the photo shows while text stays readable */}
      <div className="absolute inset-0 bg-ink/45"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-ink/5"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/85 to-transparent"></div>

      {/* Light leaks */}
      <div className="cine-glow absolute -right-[15%] top-[5%] h-[80vmin] w-[80vmin] rounded-full bg-brand/30 blur-[100px]"></div>
      <div className="cine-glow-slow absolute -left-[20%] bottom-[-10%] h-[70vmin] w-[70vmin] rounded-full bg-[#ff7a3d]/20 blur-[110px]"></div>

      {/* Layout grid */}
      <div className="cine-grid absolute inset-0 opacity-[0.10]"></div>

      {/* Pen-tool curves that draw, hold and redraw across the whole frame */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        <path className="cine-loop" d="M-2 82 C 18 62, 34 96, 52 74 S 78 66, 88 40 S 98 18, 104 14" stroke="#d61d22" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path className="cine-loop cine-loop-2" d="M-2 30 C 20 18, 30 44, 50 36 S 80 10, 104 26" stroke="rgba(255,255,255,0.55)" strokeWidth="1.25"  vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="24" x2="100" y2="24" stroke="rgba(255,255,255,0.10)" strokeDasharray="4 8" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="78" x2="100" y2="78" stroke="rgba(255,255,255,0.10)" strokeDasharray="4 8" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Anchor points riding on the red curve */}
      {[
        ['left-[52%] top-[74%]', '0s'],
        ['left-[88%] top-[40%]', '1.2s'],
      ].map(([pos, d]) => (
        <span key={pos} className={`cine-pop absolute ${pos} -ml-1.5 -mt-1.5 h-3 w-3 border border-white bg-brand`} style={{ animationDelay: d }}></span>
      ))}

      {/* Construction ring */}
      <div className="absolute right-[-30vmin] top-[8%] h-[70vmin] w-[70vmin] md:right-[4%] md:top-1/2 md:h-[56vmin] md:w-[56vmin] md:-translate-y-1/2">
        <svg className="cine-spin h-full w-full" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="98" stroke="rgba(255,255,255,0.22)" strokeDasharray="1 4" />
          <circle cx="100" cy="100" r="74" stroke="rgba(255,255,255,0.18)" />
          <circle cx="100" cy="100" r="46" stroke="rgba(214,29,34,0.75)" strokeWidth="1.2" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.14)" strokeDasharray="3 5" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,0.14)" strokeDasharray="3 5" />
          <rect x="96" y="22" width="8" height="8" fill="#d61d22" />
          <rect x="170" y="96" width="8" height="8" fill="#fff" />
        </svg>
      </div>

      {/* Floating design cards (desktop and tablet) */}
      <div className="cine-float absolute right-[30%] top-[16%] hidden w-[210px] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md lg:block xl:right-[33%]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Brand palette</p>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {swatches.map((s) => (
            <span key={s.hex} className="h-10 rounded-md border border-white/20" style={{ background: s.hex }}></span>
          ))}
        </div>
        <p className="mt-2.5 font-mono text-[10px] text-white/70">#D61D22 · #FF7A3D</p>
      </div>

      <div className="cine-float cine-float-2 absolute bottom-[22%] right-[8%] hidden w-[190px] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md lg:block">
        <p className="font-display text-[56px] font-bold leading-none tracking-[-0.05em] text-white">Aa</p>
        <p className="mt-2 text-[11px] font-medium text-white/75">Bricolage Grotesque</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/15">
          <span className="cine-bar block h-full w-2/3 rounded-full bg-brand"></span>
        </div>
      </div>

      <div className="cine-float cine-float-3 absolute right-[6%] top-[14%] hidden rounded-xl border border-white/15 bg-ink/40 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-md md:block">
        W 1920 · H 1080 · 300 dpi
      </div>

      {/* Phone: swatch strip down the right edge */}
      <div className="cine-float absolute right-4 top-[96px] flex flex-col gap-1.5 md:hidden">
        {swatches.map((s) => (
          <span key={s.hex} className="h-5 w-5 rounded-[5px] border border-white/40 shadow-lg" style={{ background: s.hex }}></span>
        ))}
      </div>

      {/* Moving pen-tool cursor */}
      <svg className="cine-cursor absolute left-0 top-0 h-6 w-6 drop-shadow-lg" viewBox="0 0 24 24" fill="none">
        <path d="M3 2l7 19 2.5-7.5L20 11 3 2z" fill="#fff" stroke="#25292f" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>

      {/* Light sweep */}
      <div className="cine-sweep absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"></div>

      {/* Registration marks */}
      <svg className="absolute left-4 top-[88px] h-8 w-8 md:left-10 md:top-[100px]" viewBox="0 0 40 40" fill="none" stroke="rgba(255,255,255,0.5)">
        <circle cx="20" cy="20" r="9" />
        <path d="M0 20h40M20 0v40" />
      </svg>

      {/* Crop marks */}
      <div className="absolute inset-x-3 bottom-4 top-[84px] md:inset-x-8 md:bottom-8 md:top-[92px]">
        {['left-0 top-0 border-l border-t', 'right-0 top-0 border-r border-t', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map((c) => (
          <span key={c} className={`absolute h-5 w-5 border-white/45 ${c}`}></span>
        ))}
      </div>

      {/* Film grain and vignette */}
      <div className="cine-grain absolute -inset-[50%] opacity-[0.08] mix-blend-overlay"></div>
      <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.45)]"></div>
    </div>
  );
}
