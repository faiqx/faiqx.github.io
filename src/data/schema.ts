import { site } from './site';

/**
 * JSON-LD `Person` schema.
 *
 * This is what tells search engines the page *is* an entity named Faiq Allam
 * rather than just a document mentioning him, and `sameAs` is what links that
 * entity to the LinkedIn and GitHub profiles. It is also the most reliably
 * parsed part of the page for LLM crawlers.
 *
 * Every claim here is asserted publicly elsewhere on the page or in the design
 * handoff. Do not add anything that isn't independently verifiable.
 */
export const personSchema = {
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
  worksFor: [
    { '@type': 'Organization', name: 'NoscAi', url: 'https://nosc.ai' },
    { '@type': 'Organization', name: 'Wood Wide Web', url: 'https://www.woodwideweb.com' },
  ],
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
