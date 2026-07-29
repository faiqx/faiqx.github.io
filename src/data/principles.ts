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
    title: 'Assume a hostile environment',
    body: 'Where a mistake is expensive, code gets idempotent writes, spoof-resistant webhooks, and tests that prove one tenant can never read another&rsquo;s data.',
  },
  {
    title: 'Judge code by its guarantees',
    body: 'Tests that prove behavior, robustness under failure, and the discipline of doing things the right way even when nobody is watching. That standard doesn&rsquo;t change because a model wrote the first draft.',
  },
];

export const stackLine =
  'Mostly TypeScript, Node.js, React, and PostgreSQL. Go when memory matters. Comfortable anywhere in the stack.';
