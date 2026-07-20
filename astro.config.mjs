import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://010204.best',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  build: { inlineStylesheets: 'always' }
});
