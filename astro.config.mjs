// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom domain via GitHub Pages -> base stays at root.
  site: 'https://namsen.aogaa.no',
  i18n: {
    defaultLocale: 'no',
    locales: ['no', 'en', 'de', 'nl'],
    routing: {
      // Norsk ligger på '/', de andre på /en/, /de/, /nl/
      prefixDefaultLocale: false,
    },
  },
});
