import { highlights } from '@/mocks/home';

export default function Highlights() {
  return (
    <section aria-label="Studio at a glance" className="border-b border-foreground-50/10 bg-background-50 px-5 text-foreground-50 md:px-8 lg:px-14">
      <dl className="mx-auto grid w-full max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <div
            key={h.label}
            className={`flex flex-col gap-1.5 py-8 md:py-10 ${i % 2 ? 'pl-5 md:pl-8' : 'pr-5 md:pr-8'} ${i > 0 ? 'lg:border-l lg:border-foreground-50/10 lg:pl-8' : ''} ${i % 2 ? 'border-l border-foreground-50/10' : ''} ${i > 1 ? 'border-t border-foreground-50/10 lg:border-t-0' : ''}`}
            data-reveal
          >
            <dt className="order-2 font-label text-[11px] uppercase tracking-[0.14em] text-foreground-300">{h.label}</dt>
            <dd className="order-1 m-0 text-[clamp(28px,3.4vw,44px)] font-semibold leading-none tracking-[-0.03em] text-accent-600">{h.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
