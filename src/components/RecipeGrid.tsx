import React, { useState } from 'react';
import { Filter, Search, AlertTriangle, Info } from 'lucide-react';
import type { Recipe } from '../types';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

interface RecipeGridProps {
  recipes: Recipe[];
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showPsychedelicWarning, setShowPsychedelicWarning] = useState(true);

  const categories = ['All', ...Array.from(new Set(recipes.map(recipe => recipe.category)))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const psychedelicRecipes = filteredRecipes.filter(recipe => 
    recipe.category === 'Psychedelic Edibles' || recipe.category === 'Psychedelic Beverages'
  );

  const regularRecipes = filteredRecipes.filter(recipe => 
    recipe.category !== 'Psychedelic Edibles' && recipe.category !== 'Psychedelic Beverages'
  );

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <section id="recipes" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cannabis Recipe Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of delicious cannabis-infused recipes, 
            from beginner-friendly treats to gourmet culinary experiences.
          </p>
        </div>

        {/* Psychedelic Warning */}
        {showPsychedelicWarning && psychedelicRecipes.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1 animate-pulse flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ EXTREME POTENCY WARNING ⚠️</h3>
                <p className="text-red-700 mb-3">
                  This collection includes HEROIC DOSE edibles designed for experienced psychonauts only. 
                  These recipes can cause intense psychedelic experiences, ego dissolution, and reality distortion.
                </p>
                <ul className="text-sm text-red-600 space-y-1 mb-4">
                  <li>• Only for users with extensive cannabis experience</li>
                  <li>• Start with tiny portions (1/4 or less of recommended serving)</li>
                  <li>• Have a sober trip sitter present</li>
                  <li>• Ensure safe, comfortable environment</li>
                  <li>• Keep CBD on hand to counteract effects if needed</li>
                </ul>
                <button
                  onClick={() => setShowPsychedelicWarning(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  I Understand the Risks
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty filter */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white min-w-[120px]"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter info */}
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Info className="h-4 w-4" />
              <span>Showing {filteredRecipes.length} of {recipes.length} recipes</span>
            </div>
            {psychedelicRecipes.length > 0 && (
              <div className="flex items-center space-x-1 text-red-600">
                <AlertTriangle className="h-4 w-4" />
                <span>{psychedelicRecipes.length} extreme potency recipes</span>
              </div>
            )}
          </div>
        </div>

        {/* Regular Recipes Section */}
        {regularRecipes.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Regular Cannabis Edibles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={handleRecipeClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Psychedelic Recipes Section */}
        {psychedelicRecipes.length > 0 && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                🌌 HEROIC DOSE PSYCHEDELIC EDIBLES 🌌
              </h3>
              <p className="text-red-600 font-medium">
                ⚠️ EXTREME CAUTION REQUIRED - For experienced psychonauts only!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychedelicRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={handleRecipeClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default RecipeGrid;