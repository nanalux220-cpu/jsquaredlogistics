import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { contact, serviceOptions, socials } from '@/data/site';
import { SocialGlyph } from '@/components/icons';

// Enquiries are emailed to the studio through FormSubmit (formsubmit.co). The very first enquiry sends an
// activation email to that address; click the link in it once and every enquiry after that arrives normally.
// To use a different form service, set VITE_FORM_ENDPOINT in Vercel.
const SUBMIT = import.meta.env.VITE_FORM_ENDPOINT || `https://formsubmit.co/ajax/${contact.email}`;
const MAX = 500;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [count, setCount] = useState(0);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get('company_alt') || '').trim()) { setStatus('ok'); return; } // spam trap
    fd.delete('company_alt');
    const msg = String(fd.get('message') || '');
    if (!String(fd.get('name') || '').trim() || !String(fd.get('email') || '').trim() || !msg.trim()) {
      setFormError('Please fill in your name, email and project details.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setFormError('');
    try {
      const payload: Record<string, string> = {
        _subject: `New website enquiry from ${String(fd.get('name'))}`,
        _template: 'table',
        _captcha: 'false',
      };
      fd.forEach((v, k) => { payload[k] = String(v); });
      const response = await fetch(SUBMIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data: { success?: string | boolean; message?: string } = await response.json().catch(() => ({}));
      if (response.ok && String(data.success) !== 'false') {
        setStatus('ok');
        form.reset();
        setCount(0);
      } else {
        setFormError(`Something went wrong sending your message. Please email ${contact.email} instead.`);
        setStatus('error');
      }
    } catch {
      setFormError(`Network error. Please try again in a moment, or email ${contact.email}.`);
      setStatus('error');
    }
  };

  const details = [
    { icon: Phone, label: 'Call', value: contact.phone, href: `tel:${contact.phoneHref}` },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Studio', value: contact.addressLines.join(', '), href: contact.mapLink },
  ];

  return (
    <section id="contact" className="bg-ink py-20 text-white md:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h-section mt-5 max-w-[14ch]">Let's design something worth sharing.</h2>
          <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-white/70">
            Tell us about your business and what you need. We'll reply within one working day with ideas, timings and a clear quote.
          </p>

          <ul className="mt-10 space-y-3">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === 'Studio' ? '_blank' : undefined}
                  rel={label === 'Studio' ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">{label}</span>
                    <span className="block break-words text-[16px] font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {socials.length > 0 && (
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand hover:bg-brand">
                  <SocialGlyph name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}
        </div>

        <form
          id="quote-form"
          onSubmit={onSubmit}
          noValidate
          className="rounded-[28px] bg-paper p-6 text-ink shadow-2xl sm:p-8 md:p-10"
          data-reveal
        >
          <h3 className="text-[24px] font-bold tracking-[-0.02em]">Request a quote</h3>
          <p className="mt-1.5 text-[14px] text-ink-muted">It takes about a minute.</p>

          <input type="text" name="company_alt" className="absolute -left-[10000px] h-px w-px opacity-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="f-name" className="field-label">Your name</label>
              <input id="f-name" name="name" className="field-input" placeholder="Jordan Smith" autoComplete="name" required />
            </div>
            <div>
              <label htmlFor="f-email" className="field-label">Email</label>
              <input id="f-email" name="email" type="email" className="field-input" placeholder="you@business.co.uk" autoComplete="email" required />
            </div>
            <div>
              <label htmlFor="f-business" className="field-label">Business <span className="font-normal text-ink-faint">(optional)</span></label>
              <input id="f-business" name="business" className="field-input" placeholder="Business name" autoComplete="organization" />
            </div>
            <div>
              <label htmlFor="f-service" className="field-label">Service</label>
              <select id="f-service" name="service" className="field-input" defaultValue={serviceOptions[0]}>
                {serviceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="f-msg" className="field-label">Project details</label>
            <textarea
              id="f-msg"
              name="message"
              rows={5}
              maxLength={MAX}
              className="field-input resize-y"
              placeholder="What do you need, and by when?"
              required
              onChange={(e) => setCount(e.target.value.length)}
            />
            <p className="mt-1.5 text-right text-[12px] text-ink-faint">{count}/{MAX}</p>
          </div>

          <button type="submit" className="btn-primary mt-4 w-full disabled:opacity-60" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div aria-live="polite" className="mt-4 text-[14px]">
            {status === 'ok' && (
              <p className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-green-800">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" /> Thanks, your message is in. We'll reply within one working day.
              </p>
            )}
            {status === 'error' && formError && <p className="rounded-xl bg-brand-light p-3 text-brand-dark">{formError}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
