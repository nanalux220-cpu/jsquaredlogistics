import { useEffect, useState } from 'react';
import { navLinks } from '@/mocks/home';
import Logo from '@/components/feature/Logo';

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape, or when the screen grows past the mobile layout.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (innerWidth > 780) setOpen(false); };
    addEventListener('keydown', onKey);
    addEventListener('resize', onResize);
    return () => { removeEventListener('keydown', onKey); removeEventListener('resize', onResize); };
  }, [open]);
  return (
    <>
      <header className="nav">
        <a className="nav-logo" href="#overview" aria-label="Jsquared Logistics home">
          <Logo className="nav-logo-img" />
        </a>
        <div className="nav-right">
          <nav className="nav-links" aria-label="Main">
            {navLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </nav>
          <a className="btn btn-nav" href="#contact">Contact</a>
        </div>
        <button type="button" className="nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <i className={open ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </header>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {[...navLinks, { href: '#contact', label: 'Contact' }].map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </>
  );
}