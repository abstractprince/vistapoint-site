# Vista Point — Next.js 14 Website

Production-ready, locale-aware marketing website for Vista Point built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. In Vercel, import the repository.
3. Keep the default Next.js build settings.
4. Deploy.

## Connect domain: `vistapoint.com`

High-level steps (no DNS automation in this repo):

1. In Vercel, open the project settings → **Domains**.
2. Add `vistapoint.com` and follow the prompts to obtain DNS records.
3. Update your DNS provider with the required records.
4. Wait for propagation; Vercel will confirm when the domain is verified.

## Editing text & localization

All locale copy is centralized in:

- `src/content/en.ts`
- `src/content/ru.ts`
- `src/content/es.ts`

Edit these files to update the site text without touching layout or components.

## Replacing placeholder images

1. Place real images in `/public/images`.
2. Update the corresponding image path fields in the content/config.
   - Example: update the `ImagePlaceholder` usage or swap it for `next/image`
     using the new `/public/images/...` path.

## Brand blue color

To change the brand blue in one place, edit the CSS variable in:

- `app/globals.css` → `--vp-blue`

## Project structure

- `app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable UI components
- `src/content/` — Locale-specific copy
- `src/config/` — Site-wide config and navigation metadata
