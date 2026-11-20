# MST Auto Wraps website

Site for MST Auto Wraps: vinyl wraps, PPF and vehicle advertising in Pennsylvania and New Jersey.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Framer Motion and Lucide icons.
English site plus a Russian home page at /ru/.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| URL | What |
| --- | --- |
| `/` | Home page (English) |
| `/ru/` | Home page in Russian, linked to `/` with hreflang |
| `/ppf/`, `/vinyl-wraps/`, `/commercial-wraps/` | Service pages |
| `/bensalem-pa/`, `/main-line/`, `/philadelphia/` | Service-area pages |
| `/privacy/`, `/terms/` | Legal |

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, hours, Instagram, ZIP, service towns | `src/lib/site.ts` |
| Home page text, English and Russian | `src/lib/content.ts` |
| Service and city page text, titles, descriptions | `src/lib/pages.ts` |
| Starting prices (used everywhere) | `src/lib/prices.ts` |
| Photos | `src/lib/images.ts` + `public/images/work/` (run `python3 scripts/optimize-images.py` after adding a photo) |
| Google structured data (LocalBusiness) | `src/components/StructuredData.tsx` |

The street address is never published: Google lists the business as a service-area business,
so the site and structured data show only Bensalem, PA 19020.

## Estimate form

The form works on GitHub Pages without a server:

- **Default:** pressing "Send" opens the visitor's messaging app with a text to +1 215-833-1552,
  already filled in with their name, phone, service and car. They press send.
- **Email delivery:** create a free form at [formspree.io](https://formspree.io) and put its endpoint
  (`https://formspree.io/f/xxxxxxx`) in `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.github/workflows/deploy.yml`.

## Hosting (GitHub Pages)

Every push to `main` builds a static copy of the site (`STATIC_EXPORT=1`) and publishes it to
GitHub Pages at https://mstautowraps.com (`.github/workflows/deploy.yml`).
