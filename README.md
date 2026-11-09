# Jsquaredlogistics website

One-page site for the Leeds graphic design studio, built with React, Vite, Tailwind and Lucide icons.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
```

## Deploy on Vercel

Everything Vercel needs is in `vercel.json`, so the defaults work.

1. Sign in at https://vercel.com with GitHub.
2. Click **Add New → Project**, pick `nanalux220-cpu/jsquaredlogistics`, and click **Import**.
3. Leave the settings as they are (Framework: Vite, output: `dist`) and click **Deploy**.
4. Every push to `main` then redeploys the site automatically. Pull requests get their own preview link.

### Custom domain

In the Vercel project, open **Settings → Domains**, type the domain (for example `jsquaredlogistics.co.uk`) and click **Add**.
Vercel shows the DNS records to set at your domain registrar, usually:

| Type  | Name  | Value                  |
|-------|-------|------------------------|
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cname.vercel-dns.com` |

Always copy the exact values Vercel shows you. HTTPS is set up automatically once DNS updates.

If you use a domain other than `jsquaredlogistics.co.uk`, update it in `index.html` (canonical and `og:url`),
`public/robots.txt` and `public/sitemap.xml`.

## Editing content

All text, services, FAQs, images, contact details and social links live in `src/data/site.ts`.
Social buttons only appear once their link is filled in.

## Contact form

The form posts to the existing Readdy form endpoint. To use another form service (Formspree, Basin, etc.),
add an environment variable `VITE_FORM_ENDPOINT` in Vercel (**Settings → Environment Variables**) and redeploy.
