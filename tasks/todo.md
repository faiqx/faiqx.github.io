# faiqx.github.io — rebuild status

Branch `rebuild-astro-site`, PR #31. **Nothing is deployed yet.**

## Stack

Astro 7 (static), TypeScript, plain CSS. Node 22.12+ (`.nvmrc`).
`npm run dev` (port 4321) · `npm run build` · `npm run check`.

Fonts are self-hosted via Astro's font pipeline: **Hanken Grotesk** (prose) and
**JetBrains Mono** (labels, meta, years, chips, footer). Two variable files,
~72 KB, zero third-party requests.

## Content model

Three collections related the way SQL tables would be. **The child row holds the
foreign key, never the parent** — chapters declare nothing about their children,
which are derived by querying.

    chapters(id PK, year, company, shortName, location, title, position, status)
    case_studies(id PK, chapter_id FK, title, linkLabel, outcome, stack, status)
    projects(id PK, chapter_id FK, name, url, role, stack, thumbnail, status)

`reference()` validates the keys at build time. Migrating to Postgres later means
reading the collections and inserting rows; the shape doesn't change.

**`status: draft | published | hidden`**, and visibility **cascades**: hiding the
NoscAi chapter hides its case studies and projects, stops generating their pages,
and drops NoscAi from the Person schema's `worksFor`. Drafts render in dev only.
A project with no `chapter` FK is independent work, attributed to "Personal".

## Conventions worth keeping

- **No em dashes in visible copy.** Deliberate style choice throughout.
- Chapter copy is Faiq's and moves verbatim. Entities (`&rsquo;`, `&nbsp;`,
  `&rarr;`) are written literally in markdown and rendered with `set:html`.
- **Any value containing a colon must be quoted in frontmatter** or the YAML
  parse fails. Hit this twice.
- Collapsible regions use `[data-collapsible]` + `.collapsible` and are driven by
  one shared script. Peeks are expressed in body lines, not pixels.
- `npm run build` runs `scripts/check-output.mjs`, which **fails the build if any
  HTML comment reaches a built page**. Markdown passes comments through to the
  browser, and an editorial note in an anonymised case study is a disclosure
  risk, not a cosmetic one.

## Outstanding — needs Faiq

1. **`"dive resort"` → `"surf resort"`** in `src/content/chapters/wood-wide-web.md`.
   Confirmed to be Scar Reef, which is a surf resort; the copy currently
   contradicts the site it links to. Also fix the framing in
   `work/idempotent-payment-webhooks.md`.
2. **Incident case study is a draft** (`work/compromised-wordpress-estate.md`) and
   needs review. Deliberately anonymised: no client name, domain, mailbox,
   hosting account, theme slug or table prefix. Attacker-side IOCs are kept.
   **Do not link it from the Scar Reef project** — that re-identifies.
   The "about a week" forensics duration is inferred, not known.
3. **61 confirmed victim POSTs** in that engagement is a personal-data breach.
   Independent of the site, worth confirming the client has notified.
4. **Pages source → "GitHub Actions"** in repo settings, or the first deploy fails.
5. **Testimonial photos**: ask Gerben, Johanna and Spencer before using their
   LinkedIn headshots. Drop files in `src/assets/people/`, then set `avatar:` on
   the entry. Without one the initials monogram renders.
6. Three case-study skeletons are drafts with `TODO:` markers only Faiq can fill:
   ambient transcription, Sequelize→Prisma, payment webhooks.

## Optional

- `/work/` → `/case-studies/` (free while nothing is deployed; never free again).
- Off-page SEO matters more than anything left on-page: LinkedIn website field,
  GitHub profile README pointing at the site.
- Bali Authentique's summary dropped the Awan back-office detail. Could move to
  the role line: `Feature development and Awan back-office integration`.

## Decisions already made (don't relitigate)

- Astro over vanilla, because project pages may be embedded later.
- Design file wins over the handoff README where they conflict.
- Structured 10-field case-study frontmatter kept over a leaner schema.
- Testimonials are enclosed cards; **principles stay prose** — boxing them made
  them read as feature tiles.
- **Hanken Grotesk stays.** Schibsted Grotesk was trialled across the whole site
  and reverted: sharper and more newspaper-like, but colder against copy this
  personal.
- Mono is kept for labels. A sans-only variant was trialled and not adopted.
