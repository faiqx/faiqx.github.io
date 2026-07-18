export interface Testimonial {
  quote: string;
  name: string;
  /** Role and how they worked with Faiq, rendered on the second caption line. */
  relationship: string;
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
      'One example of his contributions, out of many, is the front end of an AI tile designed to roster approximately 50,000 doctors and nurses. I cannot recommend him highly enough!',
    name: 'Spencer Jimenez',
    relationship:
      'Cloud Engineer at Optus, worked with Faiq on the same team at Widget Brain &amp; Quinyx',
  },
];
