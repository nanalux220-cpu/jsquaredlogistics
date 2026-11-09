import { studio } from '@/mocks/home';

export default function OperatingArea() {
  return (
    <section id="operating-area" className="relative isolate overflow-hidden bg-background-900">
      <img
        src={studio.operatingBg}
        alt="Leeds rooftops at dusk, the area J Squared covers for graphic design work"
        title="Operating area — Leeds graphic design studio"
        className="absolute inset-0 h-full w-full object-cover object-top"
        onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
      />
      <div className="absolute inset-0 bg-background-950/55" aria-hidden="true"></div>
      <div className="relative mx-auto flex w-full max-w-[1440px] justify-end px-5 py-14 md:px-8 md:py-20 lg:px-14">
        <div className="w-full max-w-[540px] bg-background-50 p-8 text-foreground-50 shadow-2xl md:p-12" data-reveal>
          <h2 className="text-[clamp(24px,3vw,38px)] font-semibold uppercase leading-tight tracking-[-0.03em]">Operating area</h2>
          <span className="mt-5 block h-px w-14 bg-accent-600" aria-hidden="true"></span>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-200">{studio.operatingArea}</p>
          <a
            href="#contact"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 bg-accent-500 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-background-50 transition-colors hover:bg-accent-600"
          >
            Contacts us <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}