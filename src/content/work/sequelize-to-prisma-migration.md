---
title: Migrating an ORM model by model with zero downtime
summary: Moving a travel-agency back-office off an aging Sequelize setup onto type-safe Prisma and GraphQL.
description: How I ran a model-by-model ORM migration with no downtime, then drove a 48% error rate on a core endpoint down to a fraction of a percent.
chapter: wood-wide-web
year: '2025'
date: 2025-04-01
outcome: A 48% error rate on a core endpoint reduced to a fraction of a percent, with no downtime during the migration.
stack:
  - TypeScript
  - Prisma
  - GraphQL
  - PostgreSQL
status: draft
---


## The constraint

TODO: the state of the codebase on arrival, and why a big-bang rewrite was off the table.

## What I did not do

TODO: why model-by-model instead of all at once. What made the incremental path safe?

## The approach

TODO: how both ORMs coexisted during the migration, and how each model was cut over.

## The tradeoff

TODO: the cost of running two ORMs side by side, and how long that period lasted.

## The outcome

TODO: the 48% error rate. What was actually causing it, and which fix moved the number most? N+1 queries, transaction timeouts, and the season-pricing off-by-one are each worth a paragraph.
