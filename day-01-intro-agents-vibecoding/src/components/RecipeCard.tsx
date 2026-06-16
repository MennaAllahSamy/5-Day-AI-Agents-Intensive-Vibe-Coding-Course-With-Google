import React from 'react';
import { Recipe } from '../types';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  recipe: Recipe;
  userIngredients: string[];
  onEat: (calories: number) => void;
}

const levelStyles = {
  Low: 'bg-[#166534] text-white',
  Medium: 'bg-[#CA8A04] text-white',
  High: 'bg-[#991B1B] text-white',
};

const levelTextColors = {
  Low: 'text-[#166534]',
  Medium: 'text-[#CA8A04]',
  High: 'text-[#991B1B]',
};

export const RecipeCard: React.FC<Props> = ({ recipe, userIngredients, onEat }) => {
  const lowerUserEngs = userIngredients.map(i => i.toLowerCase().trim());
  
  const hasIngredient = (ing: string) => {
    const lowerIng = ing.toLowerCase();
    return lowerUserEngs.some(ui => lowerIng.includes(ui) || ui.includes(lowerIng));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[32px] border border-[#E2E8E5] p-6 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300 group"
    >
      <div>
        <div className="flex justify-between items-start mb-4 gap-2">
          <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shrink-0 ${levelStyles[recipe.healthIndicator]}`}>
            {recipe.healthIndicator} Cal
          </span>
          <span className={`text-xl font-bold whitespace-nowrap ${levelTextColors[recipe.healthIndicator]}`}>
            {recipe.calories} kcal
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 leading-tight text-[#1A1C1B]">{recipe.name}</h3>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {recipe.ingredients.map(ing => {
            const matched = hasIngredient(ing);
            return (
              <span 
                key={ing} 
                className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${matched ? 'bg-[#ECFDF5] text-[#065F46] border-[#D1FAE5]' : 'bg-[#F3F4F6] text-[#6B7280] border-[#E2E8E5]'}`}
              >
                {ing}
              </span>
            );
          })}
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-[10px] uppercase font-bold text-[#9CA3AF] tracking-widest">Instructions</p>
          <ol className="text-xs text-[#4B5563] space-y-1.5">
            {recipe.instructions.map((step, idx) => (
              <li key={idx} className="leading-relaxed flex gap-2">
                <span className="text-[#9CA3AF] font-bold">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <button 
        onClick={() => onEat(recipe.calories)} 
        className="w-full py-3 border-2 border-[#166534] text-[#166534] font-bold rounded-xl text-sm hover:bg-[#F0FDF4] transition-colors focus:ring-2 focus:ring-[#166534] focus:outline-none flex items-center justify-center gap-2 group-hover:bg-[#166534] group-hover:text-white mt-auto"
      >
        <Check className="w-4 h-4" />
        Mark as Eaten
      </button>
    </motion.div>
  );
}
