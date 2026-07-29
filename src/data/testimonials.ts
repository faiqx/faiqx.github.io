import type { ImageMetadata } from 'astro';

export interface Testimonial {
  quote: string;
  name: string;
  /** Role and how they worked with Faiq, rendered under the name. */
  relationship: string;
  /**
   * Optional headshot, imported from src/assets/people/.
   *
   * Only add one once the person has agreed to it. A photo being visible on
   * LinkedIn is not permission to republish it: the copyright usually sits
   * with the photographer, and in the EU a photograph is personal data.
   * Without an avatar the entry falls back to an initials monogram, so the
   * layout is complete either way.
   */
  avatar?: ImageMetadata;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Faiq goes beyond what is expected of him because he takes pride in his work and wants to do it to the very best of his capabilities. Both as a manager and as a colleague that made it really nice and frictionless to work with him.',
    name: 'Gerben Bas',
    relationship: 'CTO at Engyon, managed Faiq at Widget Brain &amp; Quinyx',
  },
  {
    quote:
      'He is always ready to help out when asked and produces high quality solutions to help solve customer problems. He also communicates potential delays and is eager to ensure that we deliver our solutions on time.',
    name: 'Johanna Holm',
    relationship:
      'Product Director at Quinyx, worked with Faiq on the same team at Widget Brain &amp; Quinyx',
  },
  {
    quote:
      'Faiq is not only a highly knowledgeable full-stack engineer but also an absolute pleasure to work with. His approachable and easygoing demeanor makes collaborating with him a truly enjoyable experience.',
    name: 'Spencer Jimenez',
    relationship:
      'Cloud Engineer at Optus, worked with Faiq on the same team at Widget Brain &amp; Quinyx',
  },
];
