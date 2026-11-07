# MST Auto Care website

Premium one-page site for MST Auto Care: vinyl wraps and auto detailing in Pennsylvania and New Jersey.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Framer Motion and Lucide icons.
English and Russian, switchable from the header.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, Instagram, domain, service area | `src/lib/site.ts` |
| All text, English and Russian | `src/lib/content.ts` |
| Images (hero, services, before/after) | `src/lib/images.ts` + `public/images/` (see `public/images/README.md`) |
| SEO title, description, keywords | `src/app/layout.tsx` |
| Google structured data (LocalBusiness) | `src/components/StructuredData.tsx` |
| Social share image | `src/app/opengraph-image.tsx` |
| Colors and fonts | `src/app/globals.css` (`@theme`) |

## Quote form

The form validates every field and works out of the box:

- **No setup (default):** pressing "Request my quote" opens the visitor's messaging app with a
  text to +1 215-833-1552, already filled in with their name, vehicle and service. They just press send.
- **Email delivery (recommended):** create a free form at [formspree.io](https://formspree.io),
  copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`) and set it as
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (in `.env.local` locally, or in your host's environment variables).
  Submissions then arrive in your inbox, with the customer's email set as reply-to.
- **Other services** (Basin, Getform, Web3Forms, your own API): any endpoint that accepts a JSON POST works
  with the same variable. The request body contains `name, phone, email, make, model, year, service, details, vehicle, language`.

## Deploy

Easiest: push this folder to a GitHub repo and import it on [vercel.com](https://vercel.com) (free).
Set `NEXT_PUBLIC_SITE_URL` to your real domain and, optionally, `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

## Before going live

- Replace the demo images with your own photos (`public/images/README.md`).
- Set your real domain in `NEXT_PUBLIC_SITE_URL`.
- Check the Instagram link in `src/lib/site.ts` opens your profile.
- Optional: once you have a Google Business Profile, add your city/ZIP to `StructuredData.tsx`.

## Regenerating the demo artwork

`node scripts/generate-placeholders.mjs` rewrites the SVG placeholders. Not needed once you use real photos.
