// Theme toggle. The stored choice is replayed by the inline script in
// Base.astro, which runs before first paint; this only handles the click.
//
// With no stored choice `data-theme` is absent and the page follows the
// system via `color-scheme: light dark`. The first click has to resolve what
// the system is currently showing so it can flip to the opposite of what the
// user actually sees, rather than assuming light.

const storageKey = 'theme';

function systemTheme(): 'light' | 'dark' {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

for (const toggle of document.querySelectorAll<HTMLElement>('[data-theme-toggle]')) {
  toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.dataset.theme ?? systemTheme();
    const next = current === 'dark' ? 'light' : 'dark';

    root.dataset.theme = next;
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Storage blocked. The choice still applies for this page view.
    }
  });
}
