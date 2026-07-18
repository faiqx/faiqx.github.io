import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
// `z` re-exported from astro:content is deprecated in Astro 7.
import { z } from 'astro/zod';

/**
 * Content model
 * -------------
 * Three collections, related the way SQL tables would be: the child row holds
 * the foreign key, never the parent. A case study declares its chapter; a
 * project declares its chapter and optionally its case study. Chapters declare
 * nothing about their children — those are derived by querying.
 *
 *   chapters(id PK, year, company, location, title, position, status)
 *   case_studies(id PK, chapter_id FK, title, …, status)
 *   projects(id PK, chapter_id FK, case_study_id FK, …, status)
 *
 * `reference()` is the foreign key constraint: pointing at an id that doesn't
 * exist fails the build rather than silently rendering nothing.
 *
 * Migrating to Postgres later means reading these collections and inserting
 * rows. The shape doesn't have to change.
 */

/**
 * draft     — unfinished. Visible while developing, never in production.
 * published — live.
 * hidden    — finished, but deliberately not shown. Same effect as draft in
 *             production; kept distinct so "not done yet" and "done but not
 *             showing this" stay different facts.
 *
 * Visibility cascades: a case study or project is only ever as visible as the
 * chapter it belongs to. Hiding a chapter hides everything under it.
 */
const status = z.enum(['draft', 'published', 'hidden']).default('published');

const chapters = defineCollection({
  loader: glob({ base: './src/content/chapters', pattern: '**/*.md' }),
  schema: z.object({
    year: z.string(),
    /** Optional outbound company link shown before the location. */
    company: z.string().optional(),
    /** Compact label for attribution elsewhere, e.g. on a project row. */
    shortName: z.string().optional(),
    companyUrl: z.url().optional(),
    location: z.string(),
    title: z.string(),
    /** Chronological position. Deliberately not reverse-chronological. */
    position: z.number().int(),
    status,
  }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    /** FK → chapters. The experience this piece of work belongs to. */
    chapter: reference('chapters'),
    /** Label used when the chapter links through to this piece. */
    linkLabel: z.string().default('Read the case study'),
    year: z.string(),
    date: z.coerce.date(),
    outcome: z.string(),
    stack: z.array(z.string()),
    status,
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.url(),
      summary: z.string(),
      role: z.string(),
      stack: z.array(z.string()),
      thumbnail: image().optional(),
      /**
       * FK → chapters. Which experience this was built during. Omit for
       * independent work, which is attributed to "Personal".
       */
      chapter: reference('chapters').optional(),
      /** FK → work. The case study that goes deeper on this project. */
      caseStudy: reference('work').optional(),
      date: z.coerce.date(),
      status,
    }),
});

export const collections = { chapters, work, projects };
