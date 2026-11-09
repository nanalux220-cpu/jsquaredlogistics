import { useState } from 'react';
import { faqs } from '@/mocks/home';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background-50 px-5 py-16 text-foreground-50 md:px-8 md:py-24 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div data-reveal>
          <p className="stamp">Questions</p>
          <h2 className="mt-4 max-w-[18ch] text-[clamp(26px,4.2vw,52px)] font-semibold leading-[1.03] tracking-[-0.03em]">
            Good to <em className="accent">know</em> before we start.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-foreground-200">
            Something else on your mind? Ask it in the enquiry form and we will answer it with your quote.
          </p>
        </div>
        <div data-reveal>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-foreground-50/15 last:border-b">
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent py-6 text-left text-[clamp(16px,1.4vw,20px)] font-semibold tracking-[-0.01em] text-foreground-50 transition-colors hover:text-accent-600"
                  >
                    {f.q}
                    <i className={`ri-add-line shrink-0 text-[22px] text-accent-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true"></i>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`faq-ans${isOpen ? ' open' : ''}`}>
                  <div>
                    <p className="m-0 max-w-[62ch] pb-6 text-[15px] leading-relaxed text-foreground-200">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
