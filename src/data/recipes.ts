import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Cannabis Brownies',
    description: 'Rich, fudgy brownies infused with perfectly decarboxylated cannabis for a consistent, enjoyable experience.',
    image: 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg',
    prepTime: '20 min',
    cookTime: '35 min',
    servings: 16,
    thcPerServing: '5-10mg',
    difficulty: 'Easy',
    category: 'Desserts',
    ingredients: [
      '1/2 cup cannabis butter (made with 7g cannabis)',
      '1 cup granulated sugar',
      '2 large eggs',
      '1/3 cup unsweetened cocoa powder',
      '1/2 cup all-purpose flour',
      '1/4 tsp salt',
      '1/4 tsp baking powder',
      '1/2 cup chocolate chips'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line an 8x8 inch baking pan with parchment paper.',
      'In a large bowl, mix melted cannabis butter with sugar until well combined.',
      'Beat in eggs one at a time, then add cocoa powder.',
      'In a separate bowl, whisk together flour, salt, and baking powder.',
      'Gradually fold dry ingredients into wet ingredients until just combined.',
      'Fold in chocolate chips and pour batter into prepared pan.',
      'Bake for 30-35 minutes until a toothpick inserted comes out with few moist crumbs.',
      'Cool completely before cutting into 16 squares.'
    ],
    tips: [
      'Start with half a serving and wait 2 hours before consuming more',
      'Store in airtight container for up to 1 week',
      'Label clearly and keep away from children and pets'
    ]
  },
  {
    id: '2',
    name: 'Cannabis-Infused Honey',
    description: 'Versatile golden honey infused with cannabis, perfect for teas, toast, or cooking applications.',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    prepTime: '10 min',
    cookTime: '3 hours',
    servings: 24,
    thcPerServing: '2-5mg',
    difficulty: 'Medium',
    category: 'Condiments',
    ingredients: [
      '1 cup high-quality honey',
      '3.5g decarboxylated cannabis',
      '1 tbsp coconut oil (optional, for better extraction)'
    ],
    instructions: [
      'Decarboxylate cannabis at 240°F for 40 minutes.',
      'Combine honey and decarboxylated cannabis in a double boiler.',
      'Heat mixture on low for 2-3 hours, stirring occasionally.',
      'Strain through fine mesh strainer or cheesecloth.',
      'Store in glass jar in cool, dark place.',
      'Use 1 teaspoon as starting dose.'
    ],
    tips: [
      'Never boil honey as it destroys beneficial enzymes',
      'Dosage can vary significantly - start low',
      'Can be used in beverages, desserts, or eaten directly'
    ]
  },
  {
    id: '3',
    name: 'Elevated Chocolate Chip Cookies',
    description: 'Perfectly chewy cookies with a subtle cannabis flavor and consistent dosing throughout.',
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    thcPerServing: '3-7mg',
    difficulty: 'Easy',
    category: 'Desserts',
    ingredients: [
      '1/2 cup cannabis butter (room temperature)',
      '1/4 cup regular butter (room temperature)',
      '3/4 cup brown sugar',
      '1/4 cup granulated sugar',
      '1 large egg',
      '1 tsp vanilla extract',
      '1 1/4 cups all-purpose flour',
      '1/2 tsp baking soda',
      '1/2 tsp salt',
      '1 cup chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cream together both butters and sugars until light and fluffy.',
      'Beat in egg and vanilla extract.',
      'In separate bowl, whisk flour, baking soda, and salt.',
      'Gradually mix dry ingredients into wet ingredients.',
      'Fold in chocolate chips.',
      'Drop rounded tablespoons onto ungreased baking sheets.',
      'Bake 9-11 minutes until golden brown.',
      'Cool on baking sheet for 5 minutes before transferring.'
    ],
    tips: [
      'Don\'t overbake - cookies continue cooking on hot pan',
      'Chill dough for 30 minutes for thicker cookies',
      'Each cookie should contain approximately the same amount of cannabis butter'
    ]
  },
  {
    id: '4',
    name: 'Cannabis Coconut Oil',
    description: 'Versatile cooking oil perfect for baking, cooking, or adding to smoothies and coffee.',
    image: 'https://images.pexels.com/photos/2090641/pexels-photo-2090641.jpeg',
    prepTime: '15 min',
    cookTime: '6 hours',
    servings: 32,
    thcPerServing: '4-8mg',
    difficulty: 'Medium',
    category: 'Infusions',
    ingredients: [
      '1 cup coconut oil',
      '7-14g decarboxylated cannabis',
      'Slow cooker or double boiler'
    ],
    instructions: [
      'Decarboxylate cannabis in oven at 240°F for 40 minutes.',
      'Melt coconut oil in slow cooker on low setting.',
      'Add decarboxylated cannabis to melted oil.',
      'Cook on low for 6-8 hours, stirring occasionally.',
      'Strain mixture through cheesecloth into glass container.',
      'Store in refrigerator for up to 2 months.',
      'Use in place of regular coconut oil in recipes.'
    ],
    tips: [
      'Longer cooking times increase potency',
      'Oil will solidify when cool - this is normal',
      'Start with 1/4 teaspoon doses'
    ]
  },
  {
    id: '5',
    name: 'Medicated Gummy Bears',
    description: 'Precise-dosed fruity gummies that are easy to portion and delicious to consume.',
    image: 'https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg',
    prepTime: '30 min',
    cookTime: '15 min',
    servings: 50,
    thcPerServing: '2-5mg',
    difficulty: 'Hard',
    category: 'Edibles',
    ingredients: [
      '1/2 cup fruit juice',
      '2 tbsp honey',
      '2 tbsp cannabis tincture',
      '4 packets unflavored gelatin',
      '1/4 cup cold water',
      'Food coloring (optional)',
      'Gummy bear molds'
    ],
    instructions: [
      'Sprinkle gelatin over cold water and let bloom for 5 minutes.',
      'Heat fruit juice and honey in saucepan until just simmering.',
      'Remove from heat and whisk in bloomed gelatin until dissolved.',
      'Let cool slightly, then stir in cannabis tincture.',
      'Add food coloring if desired.',
      'Pour mixture into gummy molds using dropper or small spoon.',
      'Refrigerate for 2-3 hours until set.',
      'Remove from molds and store in airtight container.'
    ],
    tips: [
      'Use precise measurements for consistent dosing',
      'Test potency with small batch first',
      'Keep refrigerated for best texture'
    ]
  },
  {
    id: '6',
    name: 'Cannabis Mac and Cheese',
    description: 'Comfort food elevated with cannabis butter for a warming, satisfying meal.',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 6,
    thcPerServing: '8-15mg',
    difficulty: 'Medium',
    category: 'Main Dishes',
    ingredients: [
      '1 lb elbow macaroni',
      '1/4 cup cannabis butter',
      '1/4 cup all-purpose flour',
      '2 cups milk',
      '2 cups sharp cheddar cheese, shredded',
      '1 cup gruyere cheese, shredded',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/4 tsp paprika',
      '1/2 cup breadcrumbs'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Cook macaroni according to package directions.',
      'In large saucepan, melt cannabis butter over medium heat.',
      'Whisk in flour and cook for 1 minute.',
      'Gradually add milk, whisking constantly until smooth.',
      'Bring to simmer and cook until thickened, about 5 minutes.',
      'Remove from heat and stir in cheeses until melted.',
      'Season with salt, pepper, and paprika.',
      'Combine pasta with cheese sauce in baking dish.',
      'Top with breadcrumbs and bake 20 minutes until golden.'
    ],
    tips: [
      'This is a higher dose recipe - start with smaller portions',
      'Can be made ahead and reheated',
      'Add vegetables like broccoli for extra nutrition'
    ]
  },
  {
    id: '7',
    name: 'Psychedelic Pizza Dough',
    description: 'Far-out pizza dough infused with cannabis oil for the ultimate munchie experience.',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    prepTime: '2 hours',
    cookTime: '15 min',
    servings: 8,
    thcPerServing: '6-12mg',
    difficulty: 'Medium',
    category: 'Main Dishes',
    ingredients: [
      '3 cups all-purpose flour',
      '1 packet active dry yeast',
      '1 tsp sugar',
      '1 cup warm water',
      '2 tbsp cannabis olive oil',
      '1 tsp salt',
      'Your favorite pizza toppings'
    ],
    instructions: [
      'Dissolve yeast and sugar in warm water, let foam for 5 minutes.',
      'Mix flour and salt in large bowl.',
      'Add yeast mixture and cannabis oil to flour.',
      'Knead dough for 8-10 minutes until smooth and elastic.',
      'Place in oiled bowl, cover, and rise for 1 hour.',
      'Punch down and roll out to desired thickness.',
      'Add toppings and bake at 450°F for 12-15 minutes.',
      'Let cool slightly before slicing into 8 pieces.'
    ],
    tips: [
      'Perfect for sharing with friends during a session',
      'Cannabis oil distributes evenly throughout the dough',
      'Effects may take longer due to the bread base'
    ]
  },
  {
    id: '8',
    name: 'Cosmic Smoothie Bowl',
    description: 'A vibrant, galaxy-inspired smoothie bowl that will take your taste buds to another dimension.',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    thcPerServing: '3-8mg',
    difficulty: 'Easy',
    category: 'Beverages',
    ingredients: [
      '1 frozen banana',
      '1/2 cup frozen blueberries',
      '1/2 cup frozen mango chunks',
      '1 tbsp cannabis coconut oil (melted)',
      '1/2 cup coconut milk',
      '1 tbsp honey',
      'Toppings: granola, fresh berries, coconut flakes, chia seeds'
    ],
    instructions: [
      'Blend banana, blueberries, and half the mango with coconut milk.',
      'Add melted cannabis coconut oil and honey.',
      'Blend until smooth and creamy.',
      'Pour into bowls and create swirl patterns.',
      'Top with remaining mango, granola, and other toppings.',
      'Serve immediately for best texture.'
    ],
    tips: [
      'Perfect for morning microdosing',
      'Customize toppings for visual appeal',
      'Freeze fruits overnight for thicker consistency'
    ]
  },
  {
    id: '9',
    name: 'Trippy Trail Mix',
    description: 'An elevated snack mix perfect for adventures and munchie attacks.',
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg',
    prepTime: '45 min',
    cookTime: '20 min',
    servings: 20,
    thcPerServing: '2-4mg',
    difficulty: 'Easy',
    category: 'Snacks',
    ingredients: [
      '2 cups mixed nuts',
      '1 cup dried fruit',
      '1/2 cup dark chocolate chips',
      '1/4 cup cannabis coconut oil',
      '2 tbsp maple syrup',
      '1 tsp vanilla extract',
      '1/2 tsp sea salt',
      '1/4 cup pumpkin seeds'
    ],
    instructions: [
      'Preheat oven to 300°F (150°C).',
      'Mix nuts and pumpkin seeds in large bowl.',
      'Warm cannabis coconut oil, maple syrup, and vanilla.',
      'Pour oil mixture over nuts and toss to coat.',
      'Spread on baking sheet and bake 15-20 minutes.',
      'Let cool completely, then mix in dried fruit and chocolate.',
      'Store in airtight container for up to 2 weeks.'
    ],
    tips: [
      'Perfect for hiking or outdoor adventures',
      'Portion into small bags for easy dosing',
      'Customize with your favorite nuts and fruits'
    ]
  },
  {
    id: '10',
    name: 'Elevated Ice Cream',
    description: 'Creamy, dreamy cannabis-infused ice cream that will send you to cloud nine.',
    image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    prepTime: '30 min',
    cookTime: '4 hours',
    servings: 12,
    thcPerServing: '5-10mg',
    difficulty: 'Hard',
    category: 'Desserts',
    ingredients: [
      '2 cups heavy cream',
      '1 cup whole milk',
      '3/4 cup sugar',
      '6 egg yolks',
      '1/4 cup cannabis butter (melted)',
      '1 tsp vanilla extract',
      'Pinch of salt'
    ],
    instructions: [
      'Heat cream and milk in saucepan until just simmering.',
      'Whisk egg yolks and sugar until pale and thick.',
      'Slowly add hot cream mixture to eggs, whisking constantly.',
      'Return to saucepan and cook until it coats a spoon.',
      'Strain custard and whisk in melted cannabis butter.',
      'Add vanilla and salt, then chill completely.',
      'Churn in ice cream maker according to manufacturer instructions.',
      'Freeze for at least 2 hours before serving.'
    ],
    tips: [
      'Start with small scoops - effects can be strong',
      'Perfect for special occasions',
      'Can be made without ice cream maker using freeze-and-stir method'
    ]
  },
  {
    id: '11',
    name: 'Munchie Monster Nachos',
    description: 'The ultimate loaded nachos with cannabis-infused cheese sauce for maximum satisfaction.',
    image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    thcPerServing: '10-20mg',
    difficulty: 'Medium',
    category: 'Main Dishes',
    ingredients: [
      '1 large bag tortilla chips',
      '2 cups shredded cheese',
      '1/4 cup cannabis butter',
      '2 tbsp flour',
      '1 cup milk',
      '1 can black beans, drained',
      '1 avocado, diced',
      '1/2 cup sour cream',
      'Jalapeños, tomatoes, green onions'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Make cheese sauce: melt cannabis butter, whisk in flour.',
      'Gradually add milk, then cheese until smooth.',
      'Layer chips on large baking sheet.',
      'Pour cheese sauce over chips, add beans.',
      'Bake 10-12 minutes until bubbly.',
      'Top with fresh ingredients and serve immediately.'
    ],
    tips: [
      'Perfect for sharing with friends',
      'Higher dose recipe - consume responsibly',
      'Customize toppings to your preference'
    ]
  },
  {
    id: '12',
    name: 'Space Cake Pops',
    description: 'Bite-sized cake pops that will launch you into orbit with precise dosing.',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
    prepTime: '2 hours',
    cookTime: '30 min',
    servings: 24,
    thcPerServing: '3-6mg',
    difficulty: 'Hard',
    category: 'Desserts',
    ingredients: [
      '1 box vanilla cake mix',
      '1/3 cup cannabis oil',
      '3 eggs',
      '1 cup water',
      '1/2 cup cream cheese frosting',
      '2 cups white chocolate chips',
      '24 cake pop sticks',
      'Colorful sprinkles'
    ],
    instructions: [
      'Bake cake according to package directions using cannabis oil.',
      'Let cake cool completely, then crumble into fine crumbs.',
      'Mix crumbs with frosting until moldable.',
      'Roll into 24 balls and chill for 1 hour.',
      'Melt chocolate and dip each ball, insert stick.',
      'Add sprinkles while chocolate is wet.',
      'Chill until set, about 30 minutes.'
    ],
    tips: [
      'Perfect for parties and events',
      'Consistent dosing in each pop',
      'Can be made days ahead and stored'
    ]
  }
];