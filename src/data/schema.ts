import type { CollectionEntry } from 'astro:content';
import { site } from './site';

/**
 * JSON-LD `Person` schema.
 *
 * This is what tells search engines the page *is* an entity named Faiq Allam
 * rather than just a document mentioning him, and `sameAs` is what links that
 * entity to the LinkedIn and GitHub profiles. It is also the most reliably
 * parsed part of the page for LLM crawlers.
 *
 * `worksFor` is derived from the visible chapters rather than hardcoded, so
 * hiding a chapter also removes the claim that he works there. Structured data
 * that contradicts the page is worse than none.
 *
 * Every claim here is asserted publicly elsewhere on the page or in the design
 * handoff. Do not add anything that isn't independently verifiable.
 */
export function buildPersonSchema(chapters: CollectionEntry<'chapters'>[]) {
  // Current roles only: the chapters whose location says they are ongoing.
  const current = chapters.filter(
    (chapter) =>
      chapter.data.company &&
      /present|concurrent/i.test(chapter.data.location)
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    givenName: 'Faiq',
    familyName: 'Allam',
    url: site.url,
    image: `${site.url}/og.png`,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.description,
    sameAs: [site.linkedin, site.github],
    worksFor: current.map((chapter) => ({
      '@type': 'Organization',
      name: chapter.data.company,
      ...(chapter.data.companyUrl ? { url: chapter.data.companyUrl } : {}),
    })),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'State Polytechnic of Malang',
    },
    knowsAbout: [
      'TypeScript',
      'Node.js',
      'React',
      'PostgreSQL',
      'Go',
      'GraphQL',
      'Prisma',
      'SaaS platform engineering',
      'Healthcare software',
      'Workforce management systems',
      'Payment systems',
      'Distributed systems reliability',
    ],
  };
}
