import React from 'react';
import { Clock, Users, Gauge, Star, AlertTriangle } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
      case 'Medium': return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'Hard': return 'bg-gradient-to-r from-red-400 to-pink-600 text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isPsychedelicEdible = recipe.category === 'Psychedelic Edibles' || recipe.category === 'Psychedelic Beverages';
  const isHighDose = recipe.thcPerServing.includes('100') || recipe.thcPerServing.includes('200') || recipe.thcPerServing.includes('300') || recipe.thcPerServing.includes('400');

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 cursor-pointer overflow-hidden group border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-green-400"
      onClick={() => onClick(recipe)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:saturate-150 group-hover:hue-rotate-15"
          onError={(e) => {
            // Fallback to a default image if the image fails to load
            e.currentTarget.src = 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-purple-500/20"></div>
        
        {/* Difficulty badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)} animate-pulse`}>
            {recipe.difficulty}
          </span>
        </div>
        
        {/* THC content badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium animate-bounce ${
            isHighDose 
              ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white' 
              : 'bg-gradient-to-r from-emerald-600 to-green-600 text-white'
          }`}>
            {recipe.thcPerServing}
          </span>
        </div>

        {/* Warning badge for psychedelic edibles */}
        {isPsychedelicEdible && (
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center space-x-1 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
              <AlertTriangle className="h-3 w-3" />
              <span>EXTREME</span>
            </div>
          </div>
        )}
        
        {/* Trippy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-green-400/0 group-hover:from-purple-400/10 group-hover:via-pink-400/10 group-hover:to-green-400/10 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className={`text-sm font-medium ${
            isPsychedelicEdible 
              ? 'bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            {recipe.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {recipe.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1 hover:text-emerald-600 transition-colors">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-purple-600 transition-colors">
            <Users className="h-4 w-4" />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-pink-600 transition-colors">
            <Gauge className="h-4 w-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4 text-yellow-400 fill-current animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {isPsychedelicEdible ? 'Psychonaut approved 🌌' : 'Stoner approved ✨'}
          </span>
        </div>

        {/* High dose warning */}
        {isHighDose && (
          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-600 animate-pulse" />
              <span className="text-xs text-red-700 font-medium">EXTREME POTENCY - Experienced users only!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;