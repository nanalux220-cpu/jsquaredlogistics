import { serviceOptions } from '@/data/site';

// A slow, continuous strip of service names between the hero and the services grid.
export default function Ticker() {
  const words = serviceOptions.filter((w) => w !== 'Not sure yet');
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-5 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-[clamp(20px,2.4vw,30px)] font-semibold tracking-[-0.02em]">
            {w}
            <span className="h-2 w-2 rounded-full bg-brand"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
