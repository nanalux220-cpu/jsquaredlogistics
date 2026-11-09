import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/site';
import Logo from '@/components/Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 12);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape or when the screen grows to desktop size; lock page scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (innerWidth >= 1024) setOpen(false); };
    addEventListener('keydown', onKey);
    addEventListener('resize', onResize);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      removeEventListener('keydown', onKey);
      removeEventListener('resize', onResize);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onDark = !scrolled && !open; // transparent over the dark hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open ? 'border-b border-ink/10 bg-paper' : scrolled ? 'border-b border-ink/10 bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label="Jsquaredlogistics home" className="shrink-0">
          <Logo className="h-8 w-auto sm:h-9" />
        </a>

        {/* Menu sits on the right, next to the quote button */}
        <div className="flex items-center gap-2 lg:gap-3">
          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors xl:px-4 ${onDark ? 'text-white/80 hover:bg-white/10 hover:text-white' : 'text-ink-soft hover:bg-ink/5 hover:text-ink'}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 !text-[14px] sm:inline-flex">
            Get a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${onDark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-ink/5'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="container-site flex h-[calc(100svh-72px)] flex-col gap-1 overflow-y-auto pb-10 pt-4 lg:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-ink/10 py-4 font-display text-[28px] font-semibold tracking-[-0.02em]">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
            Get a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
