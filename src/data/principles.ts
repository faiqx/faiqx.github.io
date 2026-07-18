export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: 'Boring reliability over cleverness',
    body: 'The best systems are the ones nobody talks about. I optimize for the migration that doesn&rsquo;t need a rollback and the deploy that doesn&rsquo;t need a war room.',
  },
  {
    title: 'Own it end to end',
    body: 'Data model, API, UI, deploy, and the on-call that follows. Half-ownership is how things fall between the cracks.',
  },
  {
    title: 'Assume a hostile environment where it counts',
    body: 'Code that handles money or medical data gets idempotent writes, spoof-resistant webhooks, and tests that prove one tenant can never read another&rsquo;s data.',
  },
  {
    title: 'Judge code by its guarantees',
    body: 'Much of my code is written with AI now. What makes it production-grade hasn&rsquo;t changed: tests that prove behavior, robustness under failure, and the discipline of doing things the right way even when nobody is watching.',
  },
];

export const stackLine =
  'Mostly TypeScript, Node.js, React, and PostgreSQL. Go when memory matters. Claude for the typing, me for the judgment. Comfortable anywhere in the stack.';
