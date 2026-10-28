# SuperCool Belgaum Electronic Services (React + Vite)

Website for SuperCool Belgaum Electronic Services: home appliance repair in Belgaum.

## Run on your computer

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # opens a local preview with live reload
```

## Build for deployment

```bash
npm run build      # creates the dist/ folder
npm run preview    # optional: test the built site locally
```

Upload the **contents of `dist/`** to any static host.

## Deploy options

**Vercel or Netlify (free, easiest):** push this folder to GitHub, import the repo, and use
build command `npm run build` and output folder `dist`. Add your domain in the dashboard.

**cPanel / shared hosting:** run `npm run build`, then upload everything inside `dist/`
to `public_html/` (keep the `assets` folder next to `index.html`).

**GitHub Pages:** set `base: '/your-repo-name/'` in `vite.config.js`, build, and publish `dist/`.

## Where to edit things

| What | File |
| --- | --- |
| Phone, WhatsApp, address, footer credit | `src/data.js` (`SHOP`) |
| Service names, descriptions, photos | `src/data.js` (`SERVICES`) |
| "Why Choose Us" points | `src/data.js` (`WHY`) |
| Brand list, colours, logo alt text | `src/data.js` (`BRANDS`, `ALTS`) |
| Service photos (800x500) | `src/assets/photos/` |
| Brand logos | `src/assets/logos/` |
| Page title, description, keywords, business schema | `index.html` |
| Colours, spacing, mobile layout | `src/styles.css` |

**Add the Haier logo:** save it as `src/assets/logos/haier.png`, then in `src/data.js` add
`import haierLogo from './assets/logos/haier.png'` and `'Haier':haierLogo` inside `LOGOS`.

## SEO notes

The page title, description, keywords and LocalBusiness data live in `index.html`.
Once your domain is live, add it as a `url` in that JSON-LD block, register the site in
Google Search Console, and create a Google Business Profile for the shop.
