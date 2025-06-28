export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  thcPerServing: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
}

export interface CalculatorInput {
  cannabisAmount: number;
  thcPercentage: number;
  recipeYield: number;
  decarboxylationEfficiency: number;
}

export interface CalculatorResult {
  totalThc: number;
  thcPerServing: number;
  dosageLevel: 'Micro' | 'Low' | 'Medium' | 'High' | 'Very High';
  recommendation: string;
}