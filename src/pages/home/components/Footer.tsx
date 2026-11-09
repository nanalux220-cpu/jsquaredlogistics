import { contact, navLinks, site, socials } from '@/data/site';
import Logo from '@/components/Logo';
import { SocialGlyph } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e1012] pb-10 pt-16 text-white/70">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr]">
          <div>
            <a href="#top" aria-label="Back to top" className="inline-block rounded-xl bg-white px-4 py-3"><Logo className="h-8 w-auto" /></a>
            <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed">
              A graphic design studio in Leeds, working with clients across the UK and worldwide.
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand hover:text-white">
                    <SocialGlyph name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-white">Explore</h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[...navLinks, { href: '#contact', label: 'Contact' }].map((l) => (
                <li key={l.href}><a href={l.href} className="transition-colors hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-white">Get in touch</h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li><a href={`tel:${contact.phoneHref}`} className="transition-colors hover:text-white">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-white">{contact.email}</a></li>
              <li className="leading-relaxed">{contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-white">Find us</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Map showing the J Squared studio at 83 Roseville Road, Leeds"
                src={contact.mapEmbed}
                className="block h-[180px] w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Graphic design studio · Leeds, UK</p>
        </div>
      </div>
    </footer>
  );
}
