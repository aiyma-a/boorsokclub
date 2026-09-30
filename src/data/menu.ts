// Single source for the site menu and recipe categories.
// Add a category here and it appears in the menu, on the recipes page and gets its own page.

export const courses = [
  { slug: 'tea-and-breakfast', label: 'Tea & Breakfast', blurb: 'Boorsok, kattama and everything that goes with a pot of tea.' },
  { slug: 'soups', label: 'Soups', blurb: 'Shorpo, lagman and warming bowls for cold mountain evenings.' },
  { slug: 'mains', label: 'Main Dishes', blurb: 'Plov, beshbarmak, manti: the dishes at the centre of the table.' },
  { slug: 'breads-and-pastries', label: 'Breads & Pastries', blurb: 'Nan, samsa and dough in all its forms.' },
  { slug: 'salads-and-sides', label: 'Salads & Sides', blurb: 'Achichuk and fresh plates to balance a feast.' },
  { slug: 'sweets', label: 'Sweets', blurb: 'Chak-chak, halva and something sweet for the guests.' },
  { slug: 'drinks', label: 'Drinks', blurb: 'Tea, maksym and the drinks of the steppe.' },
] as const;

export const occasions = [
  { slug: 'guest-table', label: 'The Guest Table', blurb: 'What to set out when guests arrive: the dastorkon.' },
  { slug: 'nooruz', label: 'Nooruz', blurb: 'Dishes for the spring new year, celebrated on 21 March.' },
  { slug: 'celebrations', label: 'Weddings & Celebrations', blurb: 'Feast dishes made in big pots for many people.' },
  { slug: 'everyday', label: 'Everyday Cooking', blurb: 'Quick, simple dishes for a normal weeknight.' },
] as const;

export type CourseSlug = (typeof courses)[number]['slug'];
export type OccasionSlug = (typeof occasions)[number]['slug'];

export const courseSlugs = courses.map((c) => c.slug) as [CourseSlug, ...CourseSlug[]];
export const occasionSlugs = occasions.map((o) => o.slug) as [OccasionSlug, ...OccasionSlug[]];
