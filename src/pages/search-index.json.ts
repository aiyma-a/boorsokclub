import { u } from '../lib/url';
import { getCollection } from 'astro:content';
import { glossary } from '../data/glossary';
import { pantry } from '../data/pantry';
import { courses, occasions } from '../data/menu';

// Static search index, built once at build time. No third-party search service.
export async function GET() {
  const recipes = await getCollection('recipes');
  const courseLabel = Object.fromEntries(courses.map((c) => [c.slug, c.label]));
  const occasionLabel = Object.fromEntries(occasions.map((o) => [o.slug, o.label]));

  const items = [
    ...recipes.map((r) => ({
      type: 'Recipe',
      title: r.data.title,
      url: u(`/recipes/${r.id}/`),
      summary: r.data.description,
      keywords: [r.data.region, courseLabel[r.data.course], ...r.data.occasions.map((o) => occasionLabel[o]), ...r.data.tags, ...r.data.ingredients].join(' '),
    })),
    ...glossary.map((g) => ({
      type: 'Glossary',
      title: g.term,
      url: u(`/glossary/#${g.slug}`),
      summary: g.text,
      keywords: g.group,
    })),
    ...pantry.flatMap((section) => section.items.map((item) => ({
      type: 'Pantry',
      title: item.name,
      url: u('/pantry/'),
      summary: item.use,
      keywords: [section.group, item.swap ?? ''].join(' '),
    }))),
    ...courses.map((c) => ({ type: 'Category', title: c.label, url: u(`/recipes/course/${c.slug}/`), summary: c.blurb, keywords: '' })),
    ...occasions.map((o) => ({ type: 'Occasion', title: o.label, url: u(`/occasions/${o.slug}/`), summary: o.blurb, keywords: '' })),
  ];

  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
