import React from 'react';
import { X, Clock, Users, Gauge, AlertTriangle } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {
  if (!isOpen || !recipe) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {recipe.thcPerServing} THC per serving
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Title and description */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-600 text-sm font-medium">{recipe.category}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{recipe.name}</h2>
            <p className="text-gray-600 leading-relaxed">{recipe.description}</p>
          </div>

          {/* Recipe stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <Clock className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-gray-900">Prep Time</div>
              <div className="text-sm text-gray-600">{recipe.prepTime}</div>
            </div>
            <div className="text-center">
              <Users className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-gray-900">Servings</div>
              <div className="text-sm text-gray-600">{recipe.servings}</div>
            </div>
            <div className="text-center">
              <Gauge className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-gray-900">Cook Time</div>
              <div className="text-sm text-gray-600">{recipe.cookTime}</div>
            </div>
          </div>

          {/* Safety warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-amber-800 mb-1">Important Safety Information</h4>
                <p className="text-sm text-amber-700">
                  Start with a small portion and wait at least 2 hours before consuming more. 
                  Effects can take 30 minutes to 2 hours to appear. Keep away from children and pets.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex space-x-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-600 text-white text-sm font-medium rounded-full flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tips */}
          {recipe.tips.length > 0 && (
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <h4 className="text-md font-semibold text-emerald-800 mb-3">Pro Tips</h4>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="inline-block w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-emerald-700 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;