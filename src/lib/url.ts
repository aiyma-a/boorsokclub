// Prefix a site path with the deploy base (e.g. /boorsokclub on GitHub Pages).
// Always write internal links as u('/recipes/') rather than '/recipes/'.
export const u = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
