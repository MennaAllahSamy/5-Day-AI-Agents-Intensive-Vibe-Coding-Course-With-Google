import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Mic } from 'lucide-react';

interface Props {
  ingredients: string[];
  onAdd: (name: string) => void;
  onRemove: (name: string) => void;
}

export const IngredientInput: React.FC<Props> = ({ ingredients, onAdd, onRemove }) => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          // Add period remover and clean up spaces just in case
          setInput(prev => {
             const cleanTranscript = transcript.replace(/[.,]/g, '').trim();
             return prev ? prev + ' ' + cleanTranscript : cleanTranscript;
          });
          setIsListening(false);
          setMicError('');
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
          if (event.error === 'not-allowed') {
            setMicError('Microphone access denied. Please allow it or open the app in a new tab.');
          } else {
            setMicError('Microphone error: ' + event.error);
          }
          setTimeout(() => setMicError(''), 5000);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = input.trim();
    if (val && !ingredients.map(i => i.toLowerCase()).includes(val.toLowerCase())) {
      onAdd(val);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full gap-2">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#6B7280] mb-2 shrink-0">Your Pantry</h2>
      
      <form onSubmit={handleSubmit} className="relative mb-4 shrink-0">
        <input 
          type="text" 
          placeholder="Add ingredient..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-3 bg-[#F3F4F6] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#166534] outline-none transition-shadow pr-20"
        />
        <div className="absolute right-2 top-2 flex gap-1">
          <button 
            type="button" 
            onClick={toggleListening}
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-all ${isListening ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#4B5563]'}`}
            title="Use voice input"
          >
            <Mic className="w-4 h-4" />
          </button>
          <button 
            type="submit" 
            disabled={!input.trim()}
            className="bg-[#166534] hover:bg-[#14532D] disabled:opacity-50 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-all"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </form>

      {micError && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          className="text-xs text-red-500 mb-2 px-1"
        >
          {micError}
        </motion.p>
      )}

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {ingredients.map(ing => (
              <motion.span 
                key={ing}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="px-3 py-1.5 bg-[#ECFDF5] border border-[#D1FAE5] text-[#065F46] rounded-full text-xs font-semibold flex items-center gap-2"
              >
                <span>{ing}</span>
                <button 
                  onClick={() => onRemove(ing)} 
                  className="hover:text-red-500 transition-colors focus:outline-none"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
          {ingredients.length === 0 && (
            <span className="text-sm text-[#6B7280] italic py-2">No ingredients added yet.</span>
          )}
        </div>
      </div>
    </div>
  );
}
