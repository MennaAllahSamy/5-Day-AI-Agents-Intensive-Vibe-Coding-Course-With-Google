import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Carrot } from 'lucide-react';
import { Recipe } from './types';
import { MOCK_RECIPES } from './data';
import { IngredientInput } from './components/IngredientInput';
import { RecipeCard } from './components/RecipeCard';
import { CalorieTracker } from './components/CalorieTracker';

export default function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [dailyCalories, setDailyCalories] = useState<number>(0);
  const [hasSearched, setHasSearched] = useState(false);

  const handleAddIngredient = (ing: string) => {
    setIngredients(prev => [...prev, ing]);
    setHasSearched(false);
  };

  const handleRemoveIngredient = (ing: string) => {
    setIngredients(prev => prev.filter(i => i !== ing));
    setHasSearched(false);
  };

  const handleGetRecipes = () => {
    if (ingredients.length === 0) {
      setRecipes([]);
      setHasSearched(true);
      return;
    }

    const lowerIngredients = ingredients.map(i => i.toLowerCase().trim());
    
    const scored = MOCK_RECIPES.map(recipe => {
      const recipeIngredientsLower = recipe.ingredients.map(i => i.toLowerCase().trim());
      let matchCount = 0;
      
      recipeIngredientsLower.forEach(ri => {
          if (lowerIngredients.some(li => ri.includes(li) || li.includes(ri))) {
              matchCount++;
          }
      });

      return { ...recipe, matchScore: matchCount };
    });

    // Show ALL recipes that match at least 1 ingredient, sorted by best match
    const filtered = scored.filter(r => (r.matchScore || 0) > 0)
                           .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
                           
    setRecipes(filtered);
    setHasSearched(true);
  };

  const handleEat = (calories: number) => {
    setDailyCalories(prev => prev + calories);
  };

  return (
    <div className="min-h-screen bg-[#F9FBFA] font-sans text-[#1A1C1B] flex flex-col h-screen overflow-hidden">
      <header className="h-20 border-b border-[#E2E8E5] px-6 md:px-8 flex items-center justify-between bg-white shrink-0">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#166534] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="hidden md:inline text-2xl font-bold tracking-tight text-[#166534]">NOURISH.ai</span>
         </div>
         <CalorieTracker total={dailyCalories} />
      </header>

      <main className="flex flex-1 overflow-hidden flex-col md:flex-row">
         <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-[#E2E8E5] bg-white p-6 flex flex-col shrink-0 overflow-y-auto max-h-[40vh] md:max-h-full">
            <IngredientInput 
              ingredients={ingredients} 
              onAdd={handleAddIngredient} 
              onRemove={handleRemoveIngredient} 
            />
            
            <AnimatePresence>
               {ingredients.length > 0 && (
                 <motion.div
                   initial={{ opacity: 0, y: 10, height: 0 }}
                   animate={{ opacity: 1, y: 0, height: 'auto' }}
                   exit={{ opacity: 0, y: 10, height: 0 }}
                   className="overflow-hidden mt-auto pt-6 shrink-0"
                 >
                   <button 
                     onClick={handleGetRecipes}
                     className="w-full py-4 bg-[#166534] hover:bg-[#14532D] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-green-100 transition-all focus:outline-none"
                   >
                     GET RECIPES
                   </button>
                 </motion.div>
               )}
            </AnimatePresence>
         </aside>

         <section className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-2">
               <h1 className="text-3xl md:text-4xl font-black tracking-tighter">Recommended <span className="text-[#166534]">Meals</span></h1>
               <p className="text-sm text-[#6B7280]">
                 {hasSearched ? `Found ${recipes.length} recipes` : 'Add ingredients to see recipes'}
               </p>
            </div>
            
            {hasSearched && recipes.length > 0 ? (
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
                 {recipes.map(recipe => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe} 
                      userIngredients={ingredients} 
                      onEat={handleEat} 
                    />
                 ))}
               </div>
            ) : hasSearched && recipes.length === 0 ? (
               <div className="flex flex-col items-center justify-center p-12 bg-white rounded-[32px] border border-[#E2E8E5] text-zinc-500 shadow-sm h-64 shrink-0">
                  <Carrot className="w-12 h-12 mb-4 text-[#E2E8E5]" />
                  <p className="text-center font-bold text-[#1A1C1B]">No direct matches found.</p>
                  <p className="text-sm text-center mt-1 text-[#6B7280]">Try adding more staple ingredients like eggs, chicken, or rice!</p>
               </div>
            ) : (
               <div className="flex flex-col items-center justify-center p-12 bg-white rounded-[32px] border border-[#E2E8E5] text-[#6B7280] shadow-sm h-64 shrink-0">
                  <Utensils className="w-12 h-12 mb-4 text-[#E2E8E5]" />
                  <p className="text-center font-bold text-[#1A1C1B]">Your recipes will appear here.</p>
                  <p className="text-sm text-center mt-1">Add missing ingredients and click "GET RECIPES".</p>
               </div>
            )}
         </section>
      </main>
    </div>
  );
}
