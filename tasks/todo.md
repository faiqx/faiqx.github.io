# Rebuild faiqx.github.io from design handoff

## Decisions (confirmed with Faiq)
- **Stack:** Astro + TypeScript, static output. Chosen over vanilla because project pages
  may be embedded later; Astro's static build is a plain folder, so GitHub Pages is not a
  constraint.
- **Conflicts:** where the handoff README and `Faiq Allam.dc.html` disagree, the **design
  file wins** — no contact list rows, footer reads "© 2026 Faiq Allam | Jakarta time, EU hours".
- **Migration:** wipe the old Vue 2 app on `master`, rebuild fresh. Old site stays in history.
- **Deploy:** GitHub Actions → Pages (replaces manual `deploy.sh` + committed `docs/`).

## Tasks
- [x] Stash assets to keep (`photo.jpeg`, `favicon.ico`, `resume-en.pdf`)
- [x] Remove Vue app: `src/`, `docs/`, `public/`, `package.json`, `yarn.lock`,
      `vue.config.js`, `babel.config.js`, `deploy.sh`
- [x] Scaffold Astro project (config, tsconfig, package.json, .gitignore)
- [x] Design tokens as CSS custom properties in `src/styles/global.css`
- [x] Content as typed data modules (`src/data/`) so markup is not copy-pasted per chapter
- [x] Components: Header, Chapter (collapsible), Principle, Testimonial, Footer
- [x] `src/pages/index.astro` composing the page, pixel-matching the design file
- [x] Chapter collapse/expand: independent state per chapter, title + button triggers,
      fade overlay, `max-height` transition. Progressive enhancement + a11y attrs.
- [x] Head: title, meta description, OG/Twitter tags, favicon, google-site-verification
- [x] Sitemap via `@astrojs/sitemap`, `robots.txt`
- [x] GitHub Actions workflow deploying to Pages
- [x] README rewrite
- [x] Verify: build passes, serve locally, check rendering + toggles in a browser
- [x] Review section below

## Notes
- No `CNAME` is tracked in git (old `deploy.sh` generated one for `kaboel.space` but it was
  never committed), so the site is served at `faiqx.github.io`. `site` is set accordingly.
- Old Google Analytics snippet used Universal Analytics (`UA-…`), which stopped processing
  data in 2023. Dropped rather than carried over.
- Portrait `src` in the design file pointed at a WhatsApp upload path; the bundled
  `photo.jpeg` (512×512) is the real asset.

## Review

### What changed
The Vue 2 SPA (Buefy, Flickity, vee-validate, pdfvuer, 24 open dependabot branches) is gone.
In its place: an Astro static site that builds to a `dist/` folder of plain HTML, one CSS
file, and ~1 KB of JS. All copy lives in typed modules under `src/data/`, so the timeline,
principles, and testimonials are data, not repeated markup — adding a chapter is one array
entry.

### Deviations from the handoff, and why
- **Astro 7, not 5.** Pinned `^5.2.5` at first out of habit; `npm audit` flagged five
  advisories against that line. Moved to 7.1.1, which needs Node 22.12+ — hence `.nvmrc`
  and `engines`. Clean audit.
- **Favicon replaced.** The old `favicon.ico` was the Kaboel-era logo, off-brand against
  the monochrome design. Swapped for an SVG dot on `#F5F5F4` echoing the timeline marker.
- **OG image** is the portrait (`public/og.jpg`), `twitter:card` set to `summary` since
  it is square rather than 1.91:1.
- **Google Analytics dropped.** The old snippet was Universal Analytics, which stopped
  processing data in 2023.
- **`resume-en.pdf` kept** at the same path so existing links do not 404, though nothing
  in the new design links to it.

### Verification
Driven in headless Chromium against the production build (`npm run preview`):
- 0 console errors, 0 page errors, 0 failed requests
- 0px horizontal overflow at 1280px and at 360px
- Both webfonts computed as applied; background `rgb(245,245,244)`
- 4 chapters, all collapsed on load at `max-height: 92px` with fade at `opacity: 1`
- Toggling chapter 2 leaves chapters 1, 3, 4 closed — state is genuinely independent
- Title click and button click both toggle; label swaps to "Show less ↑";
  `aria-expanded` tracks the open state; re-collapse works
- Anchor nav scrolls
- JS disabled: `max-height: none` on all four bodies (full text readable), toggle buttons
  `display: none`
- `astro check`: 0 errors, 0 warnings, 0 hints

### Left for Faiq
- **GitHub Pages source must be switched to "GitHub Actions"** in repo settings, or the
  first workflow run will fail. This is the one manual step.
- No `CNAME` is committed, so the site serves at `faiqx.github.io`. If `kaboel.space`
  should still resolve, a `CNAME` file needs adding to `public/`.
- `sitemap.xml` from the old site pointed at dead `kaboel.kodeskillet.com` URLs; the new
  one is generated at `/sitemap-index.xml`. Worth resubmitting in Search Console.
