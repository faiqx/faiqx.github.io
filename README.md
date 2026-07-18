# faiqx.github.io

Personal site for Faiq Allam, Sr. Full-Stack Engineer. A single page: a chronological
career timeline told as chapters, working principles, testimonials, and a contact sign-off.

Live at **https://faiqx.github.io**

## Stack

- **[Astro](https://astro.build) 7** — static output, no client framework
- **TypeScript** — content lives in typed modules under `src/data/`, not in markup
- **Plain CSS** — design tokens as custom properties in `src/styles/global.css`,
  everything else scoped per component
- Ships ~1 KB of JavaScript: the chapter expand/collapse, and nothing else

Fluid throughout (`clamp()`, flex-wrap) — there are no media queries by design.

## Develop

Requires Node 22.12+ (see `.nvmrc`).

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run check    # astro check — types and template diagnostics
npm run build    # static build to dist/
npm run preview  # serve the built output
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages. Build output is not committed.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Editing content

All copy lives in `src/data/`, separate from layout:

| File              | Contents                                            |
| ----------------- | --------------------------------------------------- |
| `site.ts`         | Name, role, meta description, email, LinkedIn, nav   |
| `chapters.ts`     | Timeline chapters — year, company link, title, body  |
| `principles.ts`   | The "How I work" items and the closing stack line    |
| `testimonials.ts` | Quotes and attributions                              |

Chapter and principle body copy is rendered with `set:html`, so HTML entities
(`&rsquo;`, `&nbsp;`, `&rarr;`) are written literally and render as intended.

Adding a chapter is one entry in `chapters.ts`; the collapse behaviour, timeline dot, and
last-item spacing all follow automatically.

## Layout

```
src/
  assets/photo.jpeg      portrait, optimized at build time by astro:assets
  components/            Header, Chapter, Principle, Testimonial
  data/                  all copy, typed
  layouts/Base.astro     <head>, meta and OG tags, font loading
  pages/index.astro      the page
  scripts/chapters.ts    chapter expand/collapse
  styles/global.css      design tokens and resets
public/                  favicon, robots.txt, OG image, resume PDF
```

## Notes

- Chapters render **expanded** without JavaScript and are collapsed by CSS behind an
  `html.js` class set before first paint, so the page is fully readable with JS off and
  there is no flash of expanded content with it on.
- The previous version of this site was a Vue 2 SPA deployed by committing a `docs/`
  folder. It remains in the git history.
