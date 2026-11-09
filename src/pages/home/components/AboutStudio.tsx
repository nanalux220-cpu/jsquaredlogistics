import { studio } from '@/mocks/home';

export default function AboutStudio() {
  return (
    <section id="about" className="bg-background-50 px-5 py-16 text-foreground-50 md:px-8 md:py-24 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-reveal>
          <p className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-300">About the studio</p>
          <h2 className="mt-4 max-w-[24ch] text-[clamp(26px,3.6vw,46px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Design Solutions for Everyday Life and Business
          </h2>
          <span className="mt-6 block h-px w-14 bg-accent-600" aria-hidden="true"></span>
          <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-foreground-200 md:text-base">{studio.designSolutions}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center gap-2 bg-accent-500 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-background-50 transition-colors hover:bg-accent-600"
            >
              Get in touch <i className="ri-arrow-right-line"></i>
            </a>
            <p className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-300">Leeds &middot; Clients worldwide</p>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden bg-secondary-200" data-reveal>
          <img
            src={studio.aboutImg}
            alt="A designer flying a drone inside a warehouse, creating aerial graphic content"
            title="Aerial and graphic design content creation in Leeds"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
          />
        </div>
      </div>
    </section>
  );
}