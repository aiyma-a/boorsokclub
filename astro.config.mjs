import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the GitHub Pages workflow.
// Once boorsokclub.com points here, set SITE=https://boorsokclub.com and BASE_PATH=/.
export default defineConfig({
  site: process.env.SITE ?? 'https://boorsokclub.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
});
