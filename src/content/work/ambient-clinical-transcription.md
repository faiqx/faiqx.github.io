---
title: Making ambient clinical transcription survive a dropped connection
summary: Three architecture generations until recording stopped losing audio.
description: How I rebuilt an ambient clinical transcription system until the backend was completely stateless for recording, so network blips stopped costing consultations.
chapter: noscai
linkLabel: The transcription rebuild
year: '2025'
date: 2025-09-01
outcome: Dropped connections, network blips, and refreshes no longer lose audio.
stack:
  - TypeScript
  - Node.js
  - Audio streaming
status: draft
---


## The constraint

TODO: what the feature does (recorded consultation to structured medical note), and why losing audio is not a recoverable error in a clinical setting.

## What I did not do

TODO: the first two architecture generations, and specifically why each one failed. This is the most valuable section: two rejected designs with real reasons is a stronger signal than the one that worked.

## The approach

TODO: what "completely stateless for recording" means concretely, and where the state went instead.

## The tradeoff

TODO: what statelessness cost. Complexity moved to the client? Storage? Reconciliation?

## The outcome

TODO: how this was verified. What does a test for "survives a dropped connection" look like?
