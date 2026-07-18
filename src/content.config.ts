import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// `z` re-exported from astro:content is deprecated in Astro 7.
import { z } from 'astro/zod';

/**
 * Case studies: one per system worth explaining in more depth than a timeline
 * chapter allows. Deliberately finite — these are written once and don't go
 * stale, unlike a blog nobody keeps feeding.
 */
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Shown under the title; the one-line version of what this was. */
    summary: z.string(),
    /** Meta description and social card text. Falls back to summary. */
    description: z.string().optional(),
    company: z.string(),
    companyUrl: z.url().optional(),
    year: z.string(),
    /** Ordering on the index, newest first. */
    date: z.coerce.date(),
    /** The headline outcome, rendered as the closing stat. */
    outcome: z.string(),
    stack: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
