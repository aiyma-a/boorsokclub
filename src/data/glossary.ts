// Starter glossary. Edit freely: add, remove or reword terms in your own voice.
// `slug` becomes the #anchor on /glossary/ and is used by search.

export const glossary = [
  // Dishes
  { term: 'Plov', slug: 'plov', group: 'Dishes', text: 'Rice cooked with meat, carrots and onions in a kazan. Cooked across Central Asia, with every region and family doing it a little differently. Called osh in Uzbek and Tajik.' },
  { term: 'Manti', slug: 'manti', group: 'Dishes', text: 'Large steamed dumplings, usually filled with chopped meat and onion, sometimes pumpkin. Cooked in a tiered steamer.' },
  { term: 'Beshbarmak', slug: 'beshbarmak', group: 'Dishes', text: 'Boiled meat served over thin sheets of noodle dough with onions and broth. The name means "five fingers", because it was traditionally eaten by hand.' },
  { term: 'Lagman', slug: 'lagman', group: 'Dishes', text: 'Thick hand-pulled noodles topped with a sauce of stir-fried meat and vegetables. Rooted in Uyghur and Dungan cooking.' },
  { term: 'Samsa', slug: 'samsa', group: 'Dishes', text: 'Flaky baked pastry filled with meat and onion, traditionally baked on the wall of a tandoor.' },
  { term: 'Shorpo', slug: 'shorpo', group: 'Dishes', text: 'A clear meat broth with large pieces of meat, potato and vegetables.' },
  { term: 'Boorsok', slug: 'boorsok', group: 'Dishes', text: 'Small puffed pieces of fried dough, piled high on the table for guests and celebrations. Also our logo and our name.' },
  { term: 'Kattama', slug: 'kattama', group: 'Dishes', text: 'A flaky, layered flatbread cooked in a pan, often served with tea.' },
  { term: 'Chak-chak', slug: 'chak-chak', group: 'Dishes', text: 'Little pieces of fried dough bound together with honey. Tatar in origin and loved across the region.' },
  { term: 'Achichuk', slug: 'achichuk', group: 'Dishes', text: 'A fresh salad of thinly sliced tomato and onion, served alongside plov to cut its richness.' },
  { term: 'Sumolok', slug: 'sumolok', group: 'Dishes', text: 'A sweet, slow-cooked pudding made from sprouted wheat, prepared overnight for Nooruz.' },
  { term: 'Nan', slug: 'nan', group: 'Dishes', text: 'Round flatbread baked in a tandoor, often stamped with a pattern in the centre. Treated with great respect at the table.' },

  // Dairy and drinks
  { term: 'Kurut', slug: 'kurut', group: 'Dairy & Drinks', text: 'Small, salty balls of dried strained yogurt. Eaten as a snack or crumbled into dishes.' },
  { term: 'Kaymak', slug: 'kaymak', group: 'Dairy & Drinks', text: 'A thick, rich clotted cream, spread on bread or boorsok.' },
  { term: 'Ayran', slug: 'ayran', group: 'Dairy & Drinks', text: 'A cool, lightly salted yogurt drink.' },
  { term: 'Kymyz', slug: 'kymyz', group: 'Dairy & Drinks', text: 'Fermented mare\'s milk: tangy, fizzy and lightly alcoholic. A summer drink of the mountain pastures.' },
  { term: 'Maksym', slug: 'maksym', group: 'Dairy & Drinks', text: 'A tangy fermented drink made from grains, popular in Kyrgyzstan in summer.' },

  // Kitchen and table
  { term: 'Kazan', slug: 'kazan', group: 'Kitchen & Table', text: 'A heavy, round-bottomed cast-iron pot used for plov and many other dishes. A heavy Dutch oven is the closest substitute.' },
  { term: 'Tandoor', slug: 'tandoor', group: 'Kitchen & Table', text: 'A clay oven, heated from inside, where nan and samsa are baked against the hot walls.' },
  { term: 'Zira', slug: 'zira', group: 'Kitchen & Table', text: 'Cumin seeds. The signature spice of plov.' },
  { term: 'Dastorkon', slug: 'dastorkon', group: 'Kitchen & Table', text: 'The cloth spread for a meal, and everything set out on it for guests: bread, sweets, fruit, tea and more.' },

  // Culture
  { term: 'Boz üy', slug: 'boz-uy', group: 'Culture', text: 'The Kyrgyz word for a yurt, the round felt home of nomadic families. It means "grey house".' },
  { term: 'Tunduk', slug: 'tunduk', group: 'Culture', text: 'The wooden crown at the top of a yurt that lets in light and lets out smoke. A symbol of home and family.' },
  { term: 'Shyrdak', slug: 'shyrdak', group: 'Culture', text: 'A hand-stitched felt rug with bold, mirrored patterns, often in red and cream.' },
  { term: 'Nooruz', slug: 'nooruz', group: 'Culture', text: 'The spring new year, celebrated on 21 March with family gatherings and special dishes like sumolok.' },
];

export const glossaryGroups = [...new Set(glossary.map((g) => g.group))];
