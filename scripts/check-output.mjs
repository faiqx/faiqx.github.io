/**
 * Post-build output guard.
 *
 * Markdown passes `<!-- … -->` straight through to HTML, so an editorial note
 * left in a case study ships to production and is readable in view-source.
 * On content that is deliberately anonymised that is a disclosure risk, not a
 * cosmetic one: a note explaining who a piece is really about defeats the
 * anonymisation entirely.
 *
 * This fails the build rather than stripping silently, so removing a note is
 * always a deliberate act.
 *
 * Run automatically as part of `npm run build`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';

async function htmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) found.push(path);
  }
  return found;
}

const failures = [];

for (const file of await htmlFiles(DIST)) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/<!--([\s\S]*?)-->/g)) {
    const body = match[1].trim();
    // Astro emits a couple of empty marker comments; only flag real content.
    if (body.length === 0) continue;
    failures.push({ file, note: body.replace(/\s+/g, ' ').slice(0, 120) });
  }
}

if (failures.length > 0) {
  console.error(`\n✗ HTML comments found in built output (${failures.length}):\n`);
  for (const { file, note } of failures) {
    console.error(`  ${file}\n    ${note}\n`);
  }
  console.error('Remove them from the source markdown. Comments in markdown are');
  console.error('served to the browser and are visible in view-source.\n');
  process.exit(1);
}

console.log('✓ output check: no HTML comments in built pages');
