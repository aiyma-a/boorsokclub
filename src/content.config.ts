import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { courseSlugs, occasionSlugs } from './data/menu';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    region: z.string(),
    course: z.enum(courseSlugs),
    occasions: z.array(z.enum(occasionSlugs)).default([]),
    // Path under /public, e.g. /images/boorsok.jpg. Empty until real photos exist.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    prepMinutes: z.number(),
    cookMinutes: z.number(),
    servings: z.string(),
    allergens: z.array(z.string()).default([]),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { recipes };
