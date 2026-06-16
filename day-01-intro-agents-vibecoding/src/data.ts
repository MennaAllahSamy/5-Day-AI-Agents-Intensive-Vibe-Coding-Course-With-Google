import { Recipe } from './types';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Spinach and Egg Scramble',
    ingredients: ['Eggs', 'Spinach', 'Olive Oil', 'Salt', 'Black Pepper'],
    instructions: [
      'Heat olive oil in a pan over medium heat.',
      'Add spinach and sauté until wilted.',
      'Whisk eggs in a bowl with salt and pepper.',
      'Pour eggs over spinach and stir frequently until cooked.'
    ],
    calories: 250,
    healthIndicator: 'Low'
  },
  {
    id: '2',
    name: 'Chicken & Broccoli Stir-fry',
    ingredients: ['Chicken Breast', 'Broccoli', 'Soy Sauce', 'Garlic', 'Olive Oil', 'Rice'],
    instructions: [
      'Dice chicken breast into small pieces.',
      'Sauté garlic in olive oil, then add chicken and cook until browned.',
      'Add broccoli florets and soy sauce. Stir-fry for 5 minutes.',
      'Serve hot over steamed rice.'
    ],
    calories: 450,
    healthIndicator: 'Medium'
  },
  {
    id: '3',
    name: 'Tomato Basil Penne',
    ingredients: ['Penne Pasta', 'Tomatoes', 'Fresh Basil', 'Garlic', 'Olive Oil', 'Parmesan', 'Onion'],
    instructions: [
      'Boil pasta in salted water until al dente.',
      'Sauté minced garlic and onion in olive oil until fragrant.',
      'Add chopped tomatoes and simmer for 10 minutes to create sauce.',
      'Toss pasta into the sauce, garnish with fresh basil and parmesan.'
    ],
    calories: 520,
    healthIndicator: 'Medium'
  },
  {
    id: '4',
    name: 'Avocado Toast with Egg',
    ingredients: ['Whole Wheat Bread', 'Avocado', 'Eggs', 'Salt', 'Chili Flakes'],
    instructions: [
      'Toast the slices of whole wheat bread.',
      'Mash the avocado and spread evenly on the toast.',
      'Fry or poach the egg and place it on top of the avocado.',
      'Sprinkle with salt and chili flakes to taste.'
    ],
    calories: 320,
    healthIndicator: 'Low'
  },
  {
    id: '5',
    name: 'Greek Quinoa Salad',
    ingredients: ['Quinoa', 'Cucumber', 'Tomatoes', 'Feta Cheese', 'Olives', 'Lemon Juice'],
    instructions: [
      'Cook quinoa according to package instructions and let cool.',
      'Chop cucumber and tomatoes into small bite-sized pieces.',
      'Mix quinoa, vegetables, olives, and crumbled feta cheese in a bowl.',
      'Drizzle with lemon juice and toss well before serving.'
    ],
    calories: 380,
    healthIndicator: 'Low'
  },
  {
    id: '6',
    name: 'Baked Salmon & Asparagus',
    ingredients: ['Salmon Fillet', 'Asparagus', 'Lemon', 'Olive Oil', 'Garlic Powder', 'Salt'],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Place salmon and asparagus on a baking sheet lined with parchment.',
      'Drizzle everything with olive oil, salt, and garlic powder. Top salmon with lemon slices.',
      'Bake for 12-15 minutes until salmon is perfectly flaky.'
    ],
    calories: 480,
    healthIndicator: 'Medium'
  },
  {
    id: '7',
    name: 'Hearty Beef Stew',
    ingredients: ['Beef Chuck', 'Potatoes', 'Carrots', 'Onions', 'Beef Broth', 'Flour'],
    instructions: [
      'Toss beef chunks in flour and brown them in a large pot.',
      'Add chopped onions, carrots, and potatoes.',
      'Pour in beef broth until everything is covered.',
      'Simmer on low heat for 2 hours until beef is tender and sauce thickens.'
    ],
    calories: 650,
    healthIndicator: 'High'
  },
  {
    id: '8',
    name: 'Berry Oat Protein Smoothie',
    ingredients: ['Oats', 'Mixed Berries', 'Greek Yogurt', 'Milk', 'Honey'],
    instructions: [
      'Add oats to a blender and pulse into a fine powder.',
      'Add mixed berries, Greek yogurt, and milk.',
      'Blend on high until smooth and creamy.',
      'Drizzle a little honey on top if a sweeter taste is desired.'
    ],
    calories: 310,
    healthIndicator: 'Low'
  },
  {
    id: '9',
    name: 'Tofu & Veggie Stir-Fry',
    ingredients: ['Tofu', 'Broccoli', 'Bell Peppers', 'Soy Sauce', 'Garlic', 'Rice'],
    instructions: [
      'Press and cube the tofu, then pan-fry until golden.',
      'Sauté garlic, broccoli, and bell peppers until tender-crisp.',
      'Toss everything together with soy sauce.',
      'Serve hot over rice.'
    ],
    calories: 350,
    healthIndicator: 'Low'
  },
  {
    id: '10',
    name: 'Classic Lentil Soup',
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Onion', 'Vegetable Broth', 'Olive Oil'],
    instructions: [
      'Sauté diced carrots, celery, and onion in olive oil.',
      'Add rinsed lentils and vegetable broth.',
      'Simmer for 30 minutes until lentils are tender.',
      'Season with salt and pepper to taste.'
    ],
    calories: 280,
    healthIndicator: 'Low'
  },
  {
    id: '11',
    name: 'Sweet Potato & Black Bean Tacos',
    ingredients: ['Sweet Potato', 'Black Beans', 'Tortillas', 'Avocado', 'Salsa', 'Lime'],
    instructions: [
      'Roast cubed sweet potatoes until tender and slightly caramelized.',
      'Warm the black beans in a saucepan.',
      'Assemble tacos with sweet potatoes, beans, and diced avocado.',
      'Top with salsa and a squeeze of fresh lime juice.'
    ],
    calories: 410,
    healthIndicator: 'Medium'
  },
  {
    id: '12',
    name: 'Garlic Butter Shrimp Pasta',
    ingredients: ['Shrimp', 'Spaghetti', 'Garlic', 'Butter', 'Lemon', 'Parsley'],
    instructions: [
      'Boil spaghetti until al dente, then drain.',
      'Melt butter in a skillet and sauté minced garlic until fragrant.',
      'Cook shrimp in the garlic butter until pink and opaque.',
      'Toss shrimp, pasta, fresh lemon juice, and chopped parsley together.'
    ],
    calories: 490,
    healthIndicator: 'Medium'
  },
  {
    id: '13',
    name: 'Creamy Mushroom Risotto',
    ingredients: ['Arborio Rice', 'Mushrooms', 'Onion', 'Vegetable Broth', 'Parmesan', 'Butter'],
    instructions: [
      'Sauté onions and sliced mushrooms in butter until soft.',
      'Add Arborio rice and toast lightly for 2 minutes.',
      'Gradually add warm vegetable broth, stirring constantly until absorbed.',
      'Stir in grated parmesan cheese and serve immediately.'
    ],
    calories: 440,
    healthIndicator: 'Medium'
  },
  {
    id: '14',
    name: 'Healthy Turkey Chili',
    ingredients: ['Ground Turkey', 'Kidney Beans', 'Tomatoes', 'Onion', 'Chili Powder', 'Garlic'],
    instructions: [
      'Brown the ground turkey with onions and garlic in a large pot.',
      'Stir in kidney beans, crushed tomatoes, and chili powder.',
      'Simmer on low heat for 45 minutes.',
      'Serve hot in bowls, optionally topped with a little cheese.'
    ],
    calories: 390,
    healthIndicator: 'Medium'
  },
  {
    id: '15',
    name: 'Quick Chicken Quesadilla',
    ingredients: ['Chicken Breast', 'Tortillas', 'Cheddar Cheese', 'Bell Peppers', 'Onion'],
    instructions: [
      'Cook and slice the chicken breast.',
      'Sauté bell peppers and onions until soft.',
      'Place chicken, veggies, and shredded cheese between two tortillas.',
      'Cook in a skillet until cheese melts and tortillas are crispy.'
    ],
    calories: 550,
    healthIndicator: 'High'
  },
  {
    id: '16',
    name: 'Fresh Caprese Salad',
    ingredients: ['Tomatoes', 'Mozzarella', 'Fresh Basil', 'Olive Oil', 'Balsamic Vinegar'],
    instructions: [
      'Slice tomatoes and fresh mozzarella into thick rounds.',
      'Layer them on a plate, alternating with fresh basil leaves.',
      'Drizzle with high-quality olive oil and balsamic vinegar.',
      'Season with a pinch of sea salt and freshly cracked black pepper.'
    ],
    calories: 220,
    healthIndicator: 'Low'
  },
  {
    id: '17',
    name: 'Classic Tuna Salad Sandwich',
    ingredients: ['Canned Tuna', 'Mayonnaise', 'Celery', 'Whole Wheat Bread', 'Lettuce'],
    instructions: [
      'Drain the canned tuna and mix with mayonnaise and finely diced celery.',
      'Toast the whole wheat bread slices.',
      'Add a layer of crisp lettuce to the bread.',
      'Spread the tuna mixture evenly and close the sandwich.'
    ],
    calories: 460,
    healthIndicator: 'Medium'
  },
  {
    id: '18',
    name: 'Fluffy Weekend Pancakes',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Butter', 'Maple Syrup'],
    instructions: [
      'Whisk flour, milk, eggs, and a little melted butter in a bowl.',
      'Heat a lightly buttered griddle or pan over medium heat.',
      'Pour batter in circles and flip when bubbles form on the surface.',
      'Serve warm with a generous pour of maple syrup.'
    ],
    calories: 580,
    healthIndicator: 'High'
  },
  {
    id: '19',
    name: 'Lemon Rosemary Roasted Chicken',
    ingredients: ['Chicken Thighs', 'Potatoes', 'Carrots', 'Olive Oil', 'Rosemary', 'Lemon'],
    instructions: [
      'Preheat the oven to 425°F (220°C).',
      'Chop potatoes and carrots, tossing them in olive oil and rosemary.',
      'Nestle chicken thighs among the vegetables and top with lemon slices.',
      'Roast for 40 minutes until chicken is golden and cooked through.'
    ],
    calories: 530,
    healthIndicator: 'Medium'
  },
  {
    id: '20',
    name: 'Spicy Peanut Noodles',
    ingredients: ['Noodles', 'Peanut Butter', 'Soy Sauce', 'Chili Flakes', 'Green Onion', 'Garlic'],
    instructions: [
      'Boil your choice of noodles until tender, then drain.',
      'In a bowl, whisk peanut butter, soy sauce, minced garlic, and chili flakes.',
      'Toss the warm noodles in the peanut sauce until fully coated.',
      'Garnish with chopped green onions before serving.'
    ],
    calories: 480,
    healthIndicator: 'Medium'
  }
];
