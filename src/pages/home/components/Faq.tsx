import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '@/data/site';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="h-section mt-5 max-w-[14ch]">Good to know before we start.</h2>
          <p className="mt-6 max-w-[40ch] text-[17px] leading-relaxed text-ink-muted">
            Something else on your mind? Ask in the enquiry form and we'll answer with your quote.
          </p>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10" data-reveal>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-[18px] font-semibold tracking-[-0.01em] transition-colors hover:text-brand"
                  >
                    {f.q}
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-brand bg-brand text-white' : 'border-ink/15'}`}>
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`faq-panel${isOpen ? ' open' : ''}`}>
                  <div>
                    <p className="max-w-[62ch] pb-6 pr-12 text-[16px] leading-relaxed text-ink-muted">{f.a}</p>
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
