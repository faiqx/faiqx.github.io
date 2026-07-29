---
year: '2025'
company: Wood Wide Web
companyUrl: https://www.woodwideweb.com
location: Bali · remote · concurrent
title: Making shaky platforms boringly reliable
position: 4
status: published
---

At Wood Wide Web the anchor of my work is a travel-agency back-office, where I led a model-by-model migration off an aging Sequelize ORM onto a type-safe Prisma&nbsp;+&nbsp;GraphQL stack with zero downtime, then hunted the failures no one wanted to own, N+1 queries, transaction timeouts, a season-pricing off-by-one, and drove a 48% error rate on a core endpoint down to a fraction of a percent. I left behind structured observability with Sentry, Pino, and New Relic, and migrated the end-to-end suite from Cypress to Playwright so releases finally had a signal worth trusting.

In parallel I built a booking-and-payments engine for a dive resort from scratch, integrating a channel manager and a payment gateway with idempotent, spoof-resistant webhooks and a USD-priced, IDR-charged currency model. When you&rsquo;re taking money over an untrusted callback, replays and races are the expected case, not the edge case, so every payment path assumes a hostile environment.
