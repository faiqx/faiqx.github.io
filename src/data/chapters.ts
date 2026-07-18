export interface Chapter {
  year: string;
  /** Optional outbound company link rendered before the location in the meta row. */
  company?: { name: string; href: string };
  location: string;
  title: string;
  /**
   * Body copy, verbatim from the design handoff. Rendered with `set:html` so the
   * non-breaking spaces and curly quotes survive exactly as written. Do not rewrite,
   * "improve", or expand any of this text.
   */
  paragraphs: string[];
}

// Chronological, not reverse-chronological. Deliberate.
export const chapters: Chapter[] = [
  {
    year: '2015',
    location: 'Malang, Indonesia · before the career',
    title: 'A pharmacy, a newsroom, and a catfish farm',
    paragraphs: [
      'I started shipping software before I finished high school. A year-long internship at a local IT consultancy in my home town had me building a pharmacy management system, point-of-sale with thermal-printer receipts and stock control that handled both compounded and pre-packaged drugs, plus a shipment tracker for a sea-logistics company. Freelance years followed: web apps across health, logistics, and media, including a news site that became a real publication.',
      'In my senior year of college I was one of twelve students selected to build Panen-Panen, an agricultural supply-chain system for catfish cultivation, a joint project between my university and a government tech consultant that became my thesis. Ten years on, I&rsquo;m back to building for pharmacies. The stakes are just a little higher now.',
    ],
  },
  {
    year: '2019',
    company: { name: 'Widget Brain &rarr; Quinyx', href: 'https://www.quinyx.com' },
    location: 'Stockholm · remote · to 2024',
    title: 'From an AI startup to a WFM pioneer',
    paragraphs: [
      'I joined Widget Brain in 2019 building AI workforce-optimization products. My home turf was the dashboard where shifts get created and filled, including real-time status monitoring of the Lambda functions running the optimization algorithms. My redesign of the algorithm-management side cut &ldquo;unknown&rdquo; algorithm issues by 80% within two months. When Quinyx acquired us, I worked on unifying two very different auth worlds, our in-house authentication gateway and Quinyx&rsquo;s OIDC setup with its &ldquo;macaroon&rdquo; tokens, an enhanced JWT, while porting that same dashboard onto the Quinyx design system.',
      'A stint with the Platform team followed, shipping an in-app rating feature whose feedback flowed straight into G2 for the sales side. Back on the AI team, I led the embedded UKG widget, the shift-creation and shift-fill experience living inside the client&rsquo;s own UKG dashboard, which let a major APAC enterprise keep its scheduling algorithms without migrating and prevented AUD&nbsp;2M in ARR churn. When Quinyx acquired ConcretePlatform, a UK startup building task management for frontline workers, I moved there to help stitch the three products into one all-in-one WFM suite: AI and automation, scheduling and clock punching, and frontline management.',
    ],
  },
  {
    year: '2025',
    company: { name: 'NoscAi', href: 'https://nosc.ai' },
    location: 'Hamburg · remote · present',
    title: 'Building healthcare AI from the ground up',
    paragraphs: [
      'As an early core engineer on ClinicOS, a German medical-practice platform, I work across a codebase where almost everything carries regulatory weight and one clinic can never see another&rsquo;s patient data. My headline work is the ambient clinical transcription system, the feature that turns a recorded consultation into a structured medical note. I rebuilt it through three architecture generations until the backend became completely stateless for recording, so dropped connections, network blips, and refreshes stopped losing audio.',
      'I also own the platform&rsquo;s search: I replaced a legacy importer with a Go indexer and cut its memory footprint roughly six-fold by streaming the 800,000-product German drug database through an on-disk join. Alongside that I built the task-management module, the e-prescribing flow (eRezept and KBV-compliant medication plans with conformant barcodes), and the doctor-letter system on the DIN 5008 standard, and I&rsquo;ve caught the kind of bugs that matter in a pharmacy, like drug strengths printing a hundred times too large.',
    ],
  },
  {
    year: '2025',
    company: { name: 'Wood Wide Web', href: 'https://www.woodwideweb.com' },
    location: 'Bali · remote · concurrent',
    title: 'Making shaky platforms boringly reliable',
    paragraphs: [
      'At Wood Wide Web the anchor of my work is a travel-agency back-office, where I led a model-by-model migration off an aging Sequelize ORM onto a type-safe Prisma&nbsp;+&nbsp;GraphQL stack with zero downtime, then hunted the failures no one wanted to own, N+1 queries, transaction timeouts, a season-pricing off-by-one, and drove a 48% error rate on a core endpoint down to a fraction of a percent. I left behind structured observability with Sentry, Pino, and New Relic, and migrated the end-to-end suite from Cypress to Playwright so releases finally had a signal worth trusting.',
      'In parallel I built a booking-and-payments engine for a dive resort from scratch, integrating a channel manager and a payment gateway with idempotent, spoof-resistant webhooks and a USD-priced, IDR-charged currency model. When you&rsquo;re taking money over an untrusted callback, replays and races are the expected case, not the edge case, so every payment path assumes a hostile environment.',
    ],
  },
];
