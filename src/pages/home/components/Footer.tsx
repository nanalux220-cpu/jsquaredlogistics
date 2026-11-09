import { contactInfo, socials, studio } from '@/mocks/home';
import Logo from '@/components/feature/Logo';

const mapEmbedSrc =
  'https://www.google.com/maps?q=83%20Roseville%20Road%2C%20Leeds%20LS8%205DT%2C%20United%20Kingdom&z=15&output=embed';
const mapLinkHref =
  'https://www.google.com/maps/search/?api=1&query=83%20Roseville%20Road%2C%20Leeds%20LS8%205DT%2C%20United%20Kingdom';

export default function Footer() {
  return (
    <footer className="border-t border-foreground-950/10 bg-background-950 px-5 pb-8 pt-16 md:px-8 md:pt-20 lg:px-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-16">
          <div data-reveal>
            <a className="footer-logo-link" href="#overview" aria-label="Jsquared Logistics home">
              <Logo className="footer-logo" />
            </a>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-relaxed text-foreground-600">{studio.footerBlurb}</p>
            {socials.length > 0 && <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground-950/15 text-[14px] text-foreground-800 transition-colors hover:border-accent-500 hover:text-accent-500"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>}
          </div>

          <div data-reveal>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground-950">Contacts</h3>
            <div className="mt-6 space-y-5 text-[14px] leading-relaxed text-foreground-600">
              <div>
                <p className="m-0 font-label text-[10px] uppercase tracking-[0.18em] text-foreground-500">Address</p>
                <p className="mt-2">
                  {contactInfo.address.map((line) => <span key={line} className="block">{line}</span>)}
                </p>
              </div>
              <div>
                <p className="m-0 font-label text-[10px] uppercase tracking-[0.18em] text-foreground-500">Telephone</p>
                <a className="mt-2 block hover:text-accent-500" href={`tel:${contactInfo.phoneHref}`}>{contactInfo.phone}</a>
              </div>
              <div>
                <p className="m-0 font-label text-[10px] uppercase tracking-[0.18em] text-foreground-500">Email</p>
                <a className="mt-2 block break-all hover:text-accent-500" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>
          </div>

          <div data-reveal>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground-950">Links</h3>
            <nav className="mt-6 flex flex-col gap-3 text-[14px] text-foreground-600" aria-label="Footer">
              <a className="hover:text-accent-500" href="#overview">Home</a>
              <a className="hover:text-accent-500" href="#about">About</a>
              <a className="hover:text-accent-500" href="#services">Services</a>
              <a className="hover:text-accent-500" href="#featured">Work</a>
              <a className="hover:text-accent-500" href="#process">Process</a>
              <a className="hover:text-accent-500" href="#faq">FAQ</a>
              <a className="hover:text-accent-500" href="#contact">Contact</a>
            </nav>
          </div>

          <div data-reveal>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground-950">Find us</h3>
              <a
                className="whitespace-nowrap font-label text-[10px] uppercase tracking-[0.16em] text-foreground-500 transition-colors hover:text-accent-500"
                href={mapLinkHref}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-foreground-950/12 bg-background-900">
              <iframe
                title="Map showing J Squared studio at 83 Roseville Road, Leeds LS8 5DT"
                src={mapEmbedSrc}
                className="block h-[188px] w-full border-0 grayscale-[0.35]"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-3 flex items-start gap-2 text-[12px] leading-relaxed text-foreground-500">
              <i className="ri-map-pin-2-line mt-[2px] text-[13px] text-accent-500"></i>
              <span>{contactInfo.address.join(' ')}</span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-foreground-950/10 pt-6 text-[12px] text-foreground-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Jsquaredlogistics. All rights reserved.</span>
          <span className="font-label uppercase tracking-[0.16em]">Leeds &middot; Clients worldwide</span>
        </div>
      </div>
    </footer>
  );
}