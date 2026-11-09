import { useEffect } from 'react';

export type WorkItem = {
  title: string;
  icon: string;
  text: string;
  img: string;
  alt: string;
  items: string[];
};

type Props = {
  works: WorkItem[];
  index: number;
  onClose: () => void;
  onStep: (dir: number) => void;
};

export default function WorkLightbox({ works, index, onClose, onStep }: Props) {
  const work = works[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, onStep]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background-950/95 px-4 py-10 backdrop-blur-sm md:px-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} — larger view`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-foreground-950/25 bg-background-950/60 text-[20px] text-foreground-950 transition-colors hover:border-accent-500 hover:bg-accent-500 md:right-8 md:top-8"
      >
        <i className="ri-close-line"></i>
      </button>

      <div
        className="relative flex w-full max-w-[1120px] flex-col items-center gap-6 md:flex-row md:gap-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-[58vh] w-full items-center justify-center md:max-h-[80vh] md:w-[46%]">
          <img
            src={work.img}
            alt={work.alt}
            className="max-h-[58vh] w-auto max-w-full rounded-lg object-contain shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] md:max-h-[80vh]"
          />
        </div>

        <div className="w-full text-foreground-950 md:w-[54%]">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-accent-500">
            Featured work · {String(index + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}
          </p>
          <h3 className="mt-3 text-[24px] font-semibold uppercase leading-tight tracking-[-0.01em] md:text-[32px]">
            {work.title}
          </h3>
          <p className="mt-4 max-w-[46ch] text-[14px] leading-relaxed text-foreground-700 md:text-[15px]">{work.text}</p>

          <ul className="mt-6 grid max-w-[46ch] list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2">
            {work.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-[13px] leading-snug text-foreground-600">
                <span className="mt-[6px] h-[5px] w-[5px] shrink-0 bg-accent-500" aria-hidden="true"></span>
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="btn whitespace-nowrap text-[13px]"
            >
              Enquire about this <i className="ri-arrow-right-line"></i>
            </a>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onStep(-1)}
                aria-label="Previous piece"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground-950/20 text-[16px] text-foreground-950 transition-colors hover:border-accent-500 hover:bg-accent-500"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                aria-label="Next piece"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground-950/20 text-[16px] text-foreground-950 transition-colors hover:border-accent-500 hover:bg-accent-500"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}