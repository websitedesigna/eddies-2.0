import React from 'react';
import { X, Clock, Users, Gauge, AlertTriangle, Shield, Heart } from 'lucide-react';
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

  const isPsychedelicEdible = recipe.category === 'Psychedelic Edibles' || recipe.category === 'Psychedelic Beverages';
  const isHighDose = recipe.thcPerServing.includes('100') || recipe.thcPerServing.includes('200') || recipe.thcPerServing.includes('300') || recipe.thcPerServing.includes('400');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-t-xl"
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg';
            }}
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
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isHighDose 
                ? 'bg-red-600 text-white' 
                : 'bg-emerald-600 text-white'
            }`}>
              {recipe.thcPerServing} THC per serving
            </span>
          </div>
          
          {/* Extreme warning overlay for psychedelic edibles */}
          {isPsychedelicEdible && (
            <div className="absolute top-4 left-4">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                ⚠️ EXTREME POTENCY
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Title and description */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${
                isPsychedelicEdible 
                  ? 'text-red-600' 
                  : 'text-emerald-600'
              }`}>
                {recipe.category}
              </span>
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

          {/* Extreme warning for psychedelic edibles */}
          {isPsychedelicEdible && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-2">⚠️ EXTREME POTENCY WARNING ⚠️</h4>
                  <div className="text-sm text-red-700 space-y-2">
                    <p className="font-semibold">This is a HEROIC DOSE edible that can cause:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Complete ego dissolution and loss of self-identity</li>
                      <li>Intense visual and auditory hallucinations</li>
                      <li>Severe time distortion and reality shifts</li>
                      <li>Effects lasting 8-16 hours</li>
                      <li>Potential for overwhelming psychological experiences</li>
                    </ul>
                    <p className="font-bold mt-3">ONLY for experienced psychonauts with extensive cannabis tolerance!</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular safety warning */}
          {!isPsychedelicEdible && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-amber-800 mb-1">Important Safety Information</h4>
                  <p className="text-sm text-amber-700">
                    Start with a small portion and wait at least 2 hours before consuming more. 
                    Effects can take 30 minutes to 2 hours to appear. Keep away from children and pets.
                  </p>
                </div>
              </div>
            </div>
          )}

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
            <div className={`mt-6 p-4 rounded-lg ${
              isPsychedelicEdible 
                ? 'bg-red-50 border border-red-200' 
                : 'bg-emerald-50 border border-emerald-200'
            }`}>
              <h4 className={`text-md font-semibold mb-3 ${
                isPsychedelicEdible ? 'text-red-800' : 'text-emerald-800'
              }`}>
                {isPsychedelicEdible ? '🛡️ Critical Safety Tips' : '💡 Pro Tips'}
              </h4>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      isPsychedelicEdible ? 'bg-red-600' : 'bg-emerald-600'
                    }`}></span>
                    <span className={`text-sm ${
                      isPsychedelicEdible ? 'text-red-700 font-medium' : 'text-emerald-700'
                    }`}>
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Creator credit */}
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-purple-600" />
              <span className="text-gray-700">
                Recipe crafted with love by{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Riley Oliver
                </span>
                {' '}for the cannabis community 🌿
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;