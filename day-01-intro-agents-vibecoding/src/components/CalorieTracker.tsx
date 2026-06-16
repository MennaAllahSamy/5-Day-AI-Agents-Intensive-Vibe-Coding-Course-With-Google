import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CalorieTracker: React.FC<{ total: number }> = ({ total }) => {
  const goal = 2100;
  const percentage = Math.min(Math.round((total / goal) * 100), 100);

  return (
    <div className="flex items-center gap-4 md:gap-8 justify-end">
      <div className="text-right flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-semibold">Daily Progress</p>
        <div className="text-xl md:text-2xl font-black text-[#1A1C1B] flex items-baseline justify-end gap-1">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={total}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="tabular-nums"
            >
              {total.toLocaleString()}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs md:text-sm font-medium text-[#6B7280] tracking-normal">/ {goal.toLocaleString()} kcal</span>
        </div>
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border-[3px] md:border-4 border-[#166534] flex items-center justify-center bg-white shadow-sm">
        <span className="text-[10px] font-bold text-[#1A1C1B]">{percentage}%</span>
      </div>
    </div>
  );
}
