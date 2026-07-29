---
title: Taking money over an untrusted callback
summary: A booking-and-payments engine where replays and races are the expected case.
description: Building a dive-resort booking and payments engine with idempotent, spoof-resistant webhooks and a USD-priced, IDR-charged currency model.
chapter: wood-wide-web
linkLabel: The payments engine
year: '2025'
date: 2025-02-01
outcome: 'Every payment path assumes a hostile environment: replays and races are handled as the expected case, not the edge case.'
stack:
  - TypeScript
  - Node.js
  - PostgreSQL
  - Payment gateway
status: draft
---


## The constraint

TODO: why a payment webhook is a hostile input. Who can call it, what they can forge, and what a replay costs.

## What I did not do

TODO: the naive version, and precisely what breaks under a duplicate callback.

## The approach

TODO: how idempotency is enforced, and how a callback is proven authentic.

## The tradeoff

TODO: the USD-priced, IDR-charged currency model. Where is the rate fixed, and who absorbs the movement? This is the most interesting decision here.

## The outcome

TODO: how correctness was demonstrated. Replayed callbacks in a test? Concurrent duplicates?
