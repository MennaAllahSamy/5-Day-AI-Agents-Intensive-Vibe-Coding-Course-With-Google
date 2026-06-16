export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
  healthIndicator: 'Low' | 'Medium' | 'High';
  matchScore?: number;
}
