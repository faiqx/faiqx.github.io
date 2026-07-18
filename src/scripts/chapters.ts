/**
 * Chapter expand/collapse. One independent open/closed state per chapter.
 *
 * The collapsed presentation lives in CSS behind `html.js`; this only flips a
 * class and keeps the button label and `aria-expanded` in sync. Both the
 * chapter title and the button below the body act as toggles.
 */
const LABEL_OPEN = 'Show less ↑';
const LABEL_CLOSED = 'Read the chapter ↓';

for (const chapter of document.querySelectorAll<HTMLElement>('[data-chapter]')) {
  const body = chapter.querySelector<HTMLElement>('[data-chapter-body]');
  const button = chapter.querySelector<HTMLButtonElement>('[data-chapter-toggle]');
  const label = chapter.querySelector<HTMLElement>('[data-chapter-label]');
  const title = chapter.querySelector<HTMLElement>('[data-chapter-title]');

  if (!body || !button || !label) continue;

  const toggle = () => {
    const open = body.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    label.textContent = open ? LABEL_OPEN : LABEL_CLOSED;
  };

  button.addEventListener('click', toggle);
  title?.addEventListener('click', toggle);
}
