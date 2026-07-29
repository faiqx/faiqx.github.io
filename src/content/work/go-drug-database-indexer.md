---
title: Rebuilding drug-database search as a streaming Go indexer
summary: Replacing a legacy importer that could not hold 800,000 products in memory.
description: How I replaced a memory-bound drug-database importer with a streaming Go indexer and an on-disk join, cutting its memory footprint roughly six-fold.
chapter: noscai
linkLabel: How the indexer works
year: '2025'
date: 2025-06-01
outcome: Roughly six-fold reduction in memory footprint, with correctness preserved across the full 800,000-product catalogue.
stack:
  - Go
  - PostgreSQL
  - On-disk join
status: published
---


## The constraint

ClinicOS needs to search the German drug database, and that database is large: roughly 800,000 products, each carrying the attributes a prescribing doctor needs to see. Search over it has to be fast, it has to be correct, and it has to stay correct, because the consequence of a wrong result here is not a bad search experience. It is a prescribing error.

The importer I inherited loaded the catalogue to build its index. That works until the catalogue outgrows the memory you are willing to give it, and then it stops working all at once rather than gradually. TODO: describe what the failure actually looked like in practice, and what forced the rewrite when it did.

## What I did not do

The obvious fix is to give the process more memory. It is also the fix that buys you a year and leaves the same problem for whoever is on call when the catalogue grows again. The ceiling moves; it does not go away.

The second option was to push the whole job into PostgreSQL and let the database do the joining. Reasonable, and for a smaller dataset I would have taken it. TODO: the real reason this was rejected. Import window? Load on the primary during a rebuild? Worth stating plainly, because rejecting the boring option needs a better justification than taste.

## The approach

The rewrite was a Go indexer that never holds the catalogue in memory at all. Records stream through in a single pass, and the join that previously required both sides resident happens on disk instead.

The shape that makes this work is ordering. If both sides of a join arrive sorted on the join key, you do not need random access into either one: you advance two cursors and merge. Memory then scales with the width of a single record rather than the size of the catalogue, which is the difference between a process that grows with the data and one that does not.

TODO: a monochrome diagram belongs here, showing the streaming pass and the merge. Worth drawing once the prose is settled.

Go was the right tool less for raw speed than for predictability. Explicit allocation and a memory profile you can actually reason about matter more than throughput when the whole point of the exercise is to stop a process from growing without bound.

## The tradeoff

An on-disk join is slower per record than one that runs entirely in memory. I accepted that deliberately. A rebuild that takes longer but always completes is worth more than one that is faster until the day it is not, and this job runs on a schedule where wall-clock time was never the binding constraint. TODO: confirm the actual runtime change, including if it got faster in practice through less GC pressure.

The other cost is that the ordering requirement is now load-bearing. Anything upstream that breaks the sort breaks the join, so that assumption needs to be enforced rather than assumed. TODO: how this is guarded. A test, an assertion in the merge, a check on the input?

## The outcome

Memory dropped roughly six-fold, and the ceiling that made the old importer fragile is gone: the indexer's footprint is now a function of record width, not catalogue size. Growth in the drug database is no longer an operational event.

The correctness work mattered as much as the memory work. In a system where a drug strength printing a hundred times too large is a real bug that ships if nobody catches it, an indexer that is fast and subtly wrong is worse than the one it replaced. TODO: what was done to verify the rebuilt index against the old one.
