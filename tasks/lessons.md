# Lessons

Patterns worth not repeating, from building this site.

## Restart the dev server after structural changes

Astro's dev server does **not** recover from changes to `content.config.ts`, and
scoped style changes on a component don't reliably survive HMR. Symptoms look
like a code bug: an empty collection, a component whose new styles don't apply.

Cost me four separate false diagnoses. **Restart whenever `content.config.ts`
changes, a new module appears, or a component's `<style>` changes.**

    npx astro dev stop && rm -rf .astro node_modules/.vite

Related: never leave the dev server running during `git` surgery. A `reset --hard`
under a live watcher left it holding a PostCSS config from a state that no longer
existed on disk, which surfaced as `Cannot find module 'autoprefixer'`.

## Verify the DOM, not the build

`npm run build` succeeding proves nothing about what rendered. When the stack
chips moved into the left column, the build passed, the page looked plausible,
and **every chip was missing** — a DOM query caught it, a screenshot would not
have.

Check the thing you changed actually exists and has the properties you intended.

## Python's `str.replace` replaces every occurrence

Bit me twice in edit scripts. Inserting a block and then deleting the "old" copy
removed both, because the inserted one had identical indentation. Pass a count,
or assert on the expected number of matches.

## Measure before tuning a visual value

Twice I guessed at spacing and was wrong by a lot:

- The timeline dot was 4.5px left of the rule and 5px above the year's centre —
  offsets inherited from the original design, invisible until measured.
- The testimonial peek showed 0.4 of a line, because the attribution and quote
  mark occupy the first 95px of the card. It read as "weird" and was arithmetic.

Measure the element, then set the value.

## Markdown HTML comments ship to the browser

`<!-- … -->` in a `.md` file passes straight through to the built HTML and is
readable in view-source. An authoring note was live in production output, and a
note on the anonymised case study named the client. Use `{/* … */}` in `.astro`
files (compile-time), and the post-build guard now fails on any that slip in.

## Kill processes by PID, not by pattern

`pkill -f "astro preview"` matched the shell running it and killed the caller
mid-command. Use `npx astro dev stop`, or find the owner:

    ss -lptn 'sport = :4321'

Avoiding this properly is also why the port drifted 4321 → 4322 → 4323, which
left orphaned servers and made "is this the current build?" a real question.
One port, stopped cleanly.

## Check that generated assets track the design

The favicon and OG card are generated from the site's typeface. A font swap
silently leaves them stale unless regenerated — and the same is true in reverse
when reverting.

## Ask before publishing about a client

The incident write-up was strong material and nearly went out naming a client
whose breach involved 61 confirmed victim records. Publishing that is the
client's disclosure to make. Anonymise, and keep attacker-side indicators while
dropping anything that identifies the victim — including a typosquat domain,
which is literally the client's name misspelled.
