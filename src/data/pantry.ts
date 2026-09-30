// Starter pantry guide. Edit freely. `glossary` links an item to its /glossary/ entry.
// Later, product links can be added here. Mark any affiliate links clearly (see /disclosure/).

export const pantry = [
  {
    group: 'Spices & Seasonings',
    intro: 'A short list. Central Asian cooking relies on a few spices used well.',
    items: [
      { name: 'Cumin seeds (zira)', glossary: 'zira', use: 'The signature flavour of plov, samsa and lagman. Buy whole seeds and crush them between your palms.', swap: 'Ground cumin works, but use half as much.' },
      { name: 'Coriander seeds', use: 'Warm, citrusy notes in meat fillings and marinades.', swap: 'Ground coriander.' },
      { name: 'Dried barberries', use: 'Small, tart red berries scattered through plov.', swap: 'Look for "zereshk" at Persian grocers, or use a few chopped dried cranberries.' },
      { name: 'Black pepper and red pepper flakes', use: 'For manti fillings, lagman and shorpo.', swap: null },
      { name: 'Whole garlic heads', use: 'Tucked whole into plov to steam as it cooks.', swap: null },
    ],
  },
  {
    group: 'Staples',
    intro: 'The dry goods behind most everyday dishes.',
    items: [
      { name: 'Rice for plov', use: 'A rice that holds its shape. Central Asian grocers sell devzira and other plov rice.', swap: 'Medium-grain rice, or basmati for a lighter plov.' },
      { name: 'Chickpeas', use: 'Added to plov in many regions.', swap: 'Canned chickpeas, added near the end.' },
      { name: 'Plain flour', use: 'For boorsok, manti, noodles and nan.', swap: null },
      { name: 'Neutral oil', use: 'Plov starts with a generous amount of hot oil. Cottonseed oil is traditional in many areas.', swap: 'Sunflower or vegetable oil.' },
      { name: 'Tea', use: 'Black or green tea, served in small bowls with every meal.', swap: null },
    ],
  },
  {
    group: 'Dairy',
    intro: 'Tangy, salty and rich: dairy from the mountain pastures.',
    items: [
      { name: 'Kurut', glossary: 'kurut', use: 'Salty dried yogurt balls for snacking or crumbling.', swap: 'Crumbled feta for salty tang in cooking.' },
      { name: 'Kaymak', glossary: 'kaymak', use: 'Thick cream for spreading on warm bread and boorsok.', swap: 'Clotted cream.' },
      { name: 'Suzmo (strained yogurt)', use: 'A thick, tangy yogurt served with manti and soups.', swap: 'Greek yogurt or sour cream.' },
      { name: 'Ayran', glossary: 'ayran', use: 'A salty yogurt drink.', swap: 'Plain yogurt thinned with cold water and a pinch of salt.' },
    ],
  },
  {
    group: 'Fresh Produce',
    intro: 'Simple ingredients, used generously.',
    items: [
      { name: 'Carrots', use: 'Cut into thick matchsticks for plov, never grated. Yellow carrots are prized in Central Asia.', swap: 'Ordinary orange carrots.' },
      { name: 'Onions', use: 'In almost everything, often in large amounts.', swap: null },
      { name: 'Pumpkin', use: 'A sweet filling for manti, alone or mixed with meat.', swap: 'Butternut squash.' },
      { name: 'Fresh herbs', use: 'Dill, coriander (cilantro) and spring onions to finish dishes.', swap: null },
      { name: 'Lamb or beef', use: 'The main meats for plov, manti and beshbarmak.', swap: 'Beef for lamb in any recipe here.' },
    ],
  },
  {
    group: 'Kitchen Tools',
    intro: 'You can cook everything here without special tools, but these make it easier.',
    items: [
      { name: 'Kazan', glossary: 'kazan', use: 'A heavy, round-bottomed cast-iron pot for plov, stews and frying.', swap: 'A heavy Dutch oven or cast-iron casserole.' },
      { name: 'Manti steamer', use: 'A tall, multi-tier steamer with oiled trays for dumplings.', swap: 'Any stacked steamer, including bamboo, lined with oiled parchment.' },
      { name: 'Piala (tea bowls)', use: 'Small bowls without handles for tea.', swap: 'Small cups or bowls.' },
      { name: 'Bread stamp (chekich)', use: 'Presses the pattern into the centre of nan so it stays flat.', swap: 'The tines of a fork.' },
    ],
  },
] as const;
