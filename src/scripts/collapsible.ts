/**
 * Expand/collapse for any element marked `[data-collapsible]`.
 *
 * Each region keeps its own open state. Labels come from the button's data
 * attributes so a chapter can say "Read the chapter" and a project "Read more"
 * without the behaviour knowing anything about either.
 *
 * The toggle and the fade only appear when the content is actually clipped:
 * short copy that already fits inside the peek gets neither, so there is never
 * a control that does nothing. That is measured rather than assumed, because
 * whether text overflows depends on the column width and the loaded font.
 */
const clamped = 'is-clamped';

const regions = [...document.querySelectorAll<HTMLElement>('[data-collapsible]')].flatMap(
  (root) => {
    const body = root.querySelector<HTMLElement>('[data-collapsible-body]');
    const button = root.querySelector<HTMLButtonElement>('[data-collapsible-toggle]');
    const label = root.querySelector<HTMLElement>('[data-collapsible-label]');
    const title = root.querySelector<HTMLElement>('[data-collapsible-title]');

    if (!body || !button || !label) return [];

    const closedLabel = button.dataset.labelClosed ?? 'Read more ↓';
    const openLabel = button.dataset.labelOpen ?? 'Show less ↑';

    const toggle = () => {
      const open = body.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      label.textContent = open ? openLabel : closedLabel;
    };

    button.addEventListener('click', toggle);
    title?.addEventListener('click', toggle);

    return [{ root, body }];
  }
);

/** Mark regions whose content is taller than the collapsed peek. */
function measure() {
  for (const { root, body } of regions) {
    // Only measurable while collapsed; an open region stays as the user left it.
    if (body.classList.contains('is-open')) continue;
    root.classList.toggle(clamped, body.scrollHeight > body.clientHeight + 1);
  }
}

measure();
// Re-measure once webfonts land, since metrics change how many lines it takes.
document.fonts?.ready.then(measure);

let resizeTimer: number | undefined;
addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(measure, 150);
});
