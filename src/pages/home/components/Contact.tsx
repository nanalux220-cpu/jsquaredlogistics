import { useState, type FormEvent } from 'react';
import { contactInfo, socials } from '@/mocks/home';

// The form endpoint can be swapped in Vercel (VITE_FORM_ENDPOINT) without touching the code.
const SUBMIT = import.meta.env.VITE_FORM_ENDPOINT || 'https://readdy.ai/api/form/dboq8tph8nnlcb0mjv90';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [count, setCount] = useState(0);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const trap = String(fd.get('company_alt') || '').trim();
    if (trap) { setStatus('ok'); return; }
    fd.delete('company_alt');
    const msg = String(fd.get('message') || '');
    if (!String(fd.get('name') || '').trim() || !String(fd.get('email') || '').trim() || !msg.trim()) {
      setFormError('Please fill in your name, email and project details.');
      setStatus('error');
      return;
    }
    if (msg.length > 500) {
      setFormError('Please keep your message under 500 characters.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setFormError('');
    try {
      const body = new URLSearchParams();
      fd.forEach((v, k) => body.append(k, String(v)));
      const response = await fetch(SUBMIT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: unknown } } | null = null;
      try { parsed = JSON.parse(responseText); } catch { parsed = null; }
      const serverMsg = String(parsed?.meta?.message || parsed?.message || (parsed?.meta?.detail ?? '') || responseText || '');
      if (response.ok && parsed?.code === 'OK' && !/spam/i.test(serverMsg)) {
        setStatus('ok');
        form.reset();
        setCount(0);
      } else {
        setFormError(serverMsg || `Something went wrong. Please try again, or email ${contactInfo.email}.`);
        setStatus('error');
      }
    } catch {
      setFormError(`Network error. Please try again in a moment, or email ${contactInfo.email}.`);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-background-950 px-5 py-20 text-foreground-950 md:px-8 md:py-28 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div data-reveal>
          <p className="stamp">Contact</p>
          <h2 className="mt-4 text-[clamp(28px,4vw,52px)] font-semibold leading-[1.04] tracking-[-0.03em]">
            Let&rsquo;s design something<br className="hidden md:block" /> worth <em className="accent">sharing</em>.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-foreground-700">
            Tell us about your brand and we will come back with ideas, timings and a clear quote.
          </p>

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground-950/10 text-[15px] text-accent-500">
                <i className="ri-map-pin-line"></i>
              </span>
              <div>
                <dt className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-600">Address</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-foreground-900">
                  {contactInfo.address.map((line) => <span key={line} className="block">{line}</span>)}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground-950/10 text-[15px] text-accent-500">
                <i className="ri-phone-line"></i>
              </span>
              <div>
                <dt className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-600">Telephone</dt>
                <dd className="mt-2 text-[15px]">
                  <a className="hover:text-accent-500" href={`tel:${contactInfo.phoneHref}`}>{contactInfo.phone}</a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground-950/10 text-[15px] text-accent-500">
                <i className="ri-mail-line"></i>
              </span>
              <div>
                <dt className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-600">Email</dt>
                <dd className="mt-2 break-all text-[15px]">
                  <a className="hover:text-accent-500" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </dd>
              </div>
            </div>
          </dl>

          {socials.length > 0 && <div className="mt-9 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground-950/15 text-[15px] text-foreground-800 transition-colors hover:border-accent-500 hover:text-accent-500"
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>}
        </div>

        <form id="quote-form" className="form-card" data-readdy-form onSubmit={onSubmit} noValidate data-reveal>
          <input
            type="text"
            name="company_alt"
            className="fld-alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
            onFocus={(e) => e.currentTarget.removeAttribute('readonly')}
          />
          <div className="form-row">
            <div className="field"><label htmlFor="f-name">Your name</label><input id="f-name" name="name" placeholder="Jordan Smith" required /></div>
            <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" type="email" name="email" placeholder="you@business.co.uk" required /></div>
          </div>
          <div className="form-row">
            <div className="field"><label htmlFor="f-company">Business</label><input id="f-company" name="business" placeholder="Business name" /></div>
            <div className="field">
              <label htmlFor="f-service">Service</label>
              <select id="f-service" name="service" defaultValue="Brand Identity Design">
                <option>Brand Identity Design</option>
                <option>Print Design</option>
                <option>Digital Design</option>
                <option>Infographics</option>
                <option>UI/UX Design</option>
                <option>Packaging Design</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-msg">Project details</label>
            <textarea
              id="f-msg"
              name="message"
              rows={5}
              maxLength={500}
              placeholder="What do you need, and by when?"
              required
              onChange={(e) => setCount(e.target.value.length)}
            />
            <span className="mt-1 block text-[12px] text-foreground-600">{count}/500</span>
          </div>
          <button type="submit" className="btn justify-self-start" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send enquiry'} <i className="ri-arrow-right-line"></i>
          </button>
          {status === 'ok' && <p className="m-0 text-[14px] text-accent-400">Thanks — your message is in. We will reply within one working day.</p>}
          {status === 'error' && formError && <p className="m-0 text-[14px] text-accent-400">{formError}</p>}
        </form>
      </div>
    </section>
  );
}