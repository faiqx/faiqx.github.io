// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://faiqx.github.io',
  integrations: [sitemap({ lastmod: new Date() })],

  // Fonts are downloaded at build time and served from our own origin, so the
  // page makes no third-party requests and nothing blocks render on a Google
  // Fonts round trip. `optimizedFallbacks` generates metric-matched fallback
  // faces, which keeps the swap from shifting layout.
  fonts: [
    {
      name: 'Hanken Grotesk',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
      optimizedFallbacks: true,
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['ui-monospace', 'monospace'],
      optimizedFallbacks: true,
    },
  ],
});
