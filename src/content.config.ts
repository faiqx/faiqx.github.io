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

/**
 * Projects: public sites that speak for themselves. Unlike case studies, these
 * have no detail page — the live site is the destination, and putting a page
 * between the reader and the real thing would only add a click.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** The live site. This is what the entry links to. */
      url: z.url(),
      /** One or two lines of context. What it is, and what you did. */
      summary: z.string(),
      role: z.string(),
      year: z.string(),
      stack: z.array(z.string()),
      /**
       * Screenshot in src/assets/projects/. Optional: entries without one
       * render as a text row, which is fine.
       */
      thumbnail: image().optional(),
      /**
       * Optional `work` entry id. Rendered as a link only when that case study
       * is published, so pointing at a draft can't leave a dead link.
       */
      caseStudy: z.string().optional(),
      /** Sort order on the index, newest first. */
      date: z.coerce.date(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work, projects };
