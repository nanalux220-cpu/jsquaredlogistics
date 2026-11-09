import { useEffect, useState } from 'react';
import { site } from '@/data/site';

// Layered, film-like backdrop for the hero: slow-moving studio footage, colour grade, light leaks,
// designer guide lines, crop and registration marks, a drawn bezier curve, and film grain.
export default function HeroBackdrop() {
  const [videoOn, setVideoOn] = useState(false);

  // Only stream the video for people who haven't asked for reduced motion or data saving.
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || conn?.saveData) return;
    setVideoOn(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Footage with a slow push-in */}
      <div className="cine-kenburns absolute inset-0">
        <img src={site.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        {videoOn && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000"
            src={site.heroVideo}
            poster={site.heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            onLoadedData={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
          />
        )}
      </div>

      {/* Colour grade: deep shadows, warm red highlights */}
      <div className="absolute inset-0 bg-ink/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60"></div>

      {/* Light leaks */}
      <div className="cine-glow absolute -right-[10%] top-[10%] h-[70vmin] w-[70vmin] rounded-full bg-brand/40 blur-[110px]"></div>
      <div className="cine-glow-slow absolute bottom-[-20%] left-[30%] h-[55vmin] w-[55vmin] rounded-full bg-[#ff7a3d]/20 blur-[120px]"></div>

      {/* Designer layout grid */}
      <div className="cine-grid absolute inset-0 opacity-[0.12]"></div>

      {/* Graphic design layer */}
      <svg className="absolute inset-0 h-full w-full opacity-50 md:opacity-100" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* Large construction circles */}
        <g className="cine-spin" style={{ transformOrigin: '1080px 430px' }} stroke="rgba(255,255,255,0.18)">
          <circle cx="1080" cy="430" r="300" strokeDasharray="2 10" />
          <circle cx="1080" cy="430" r="220" />
          <line x1="780" y1="430" x2="1380" y2="430" strokeDasharray="4 8" />
          <line x1="1080" y1="130" x2="1080" y2="730" strokeDasharray="4 8" />
        </g>
        <circle cx="1080" cy="430" r="140" stroke="rgba(212,32,42,0.65)" strokeWidth="1.5" />

        {/* Pen-tool bezier curve with anchor points */}
        <path className="cine-draw" d="M760 690 C 900 520, 1010 760, 1160 560 S 1360 380, 1420 300" stroke="#d4202a" strokeWidth="2" />
        <g className="cine-fade" stroke="#fff" strokeWidth="1">
          <line x1="900" y1="520" x2="760" y2="690" strokeOpacity="0.35" />
          <line x1="1010" y1="760" x2="1160" y2="560" strokeOpacity="0.35" />
          <rect x="754" y="684" width="12" height="12" fill="#15171a" />
          <rect x="1154" y="554" width="12" height="12" fill="#d4202a" stroke="#d4202a" />
          <rect x="1414" y="294" width="12" height="12" fill="#15171a" />
          <circle cx="900" cy="520" r="5" fill="#fff" />
          <circle cx="1010" cy="760" r="5" fill="#fff" />
        </g>

        {/* Registration mark */}
        <g className="cine-fade" stroke="rgba(255,255,255,0.55)" transform="translate(1320 140)">
          <circle r="16" />
          <circle r="7" />
          <line x1="-26" y1="0" x2="26" y2="0" />
          <line x1="0" y1="-26" x2="0" y2="26" />
        </g>

        {/* Colour swatches */}
        <g className="cine-fade" transform="translate(1250 760)">
          <rect width="34" height="34" fill="#d4202a" />
          <rect x="40" width="34" height="34" fill="#f7f5f1" />
          <rect x="80" width="34" height="34" fill="#2a2d32" stroke="rgba(255,255,255,0.3)" />
          <rect x="120" width="34" height="34" fill="#ff7a3d" />
        </g>
      </svg>

      {/* Crop marks in the corners */}
      <div className="absolute inset-x-5 bottom-5 top-[88px] md:inset-x-10 md:bottom-10 md:top-[96px]">
        {['left-0 top-0 border-l border-t', 'right-0 top-0 border-r border-t', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map((c) => (
          <span key={c} className={`absolute h-6 w-6 border-white/40 ${c}`}></span>
        ))}
      </div>

      {/* Film grain and vignette */}
      <div className="cine-grain absolute -inset-[50%] opacity-[0.09] mix-blend-overlay"></div>
      <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.85)]"></div>
    </div>
  );
}
