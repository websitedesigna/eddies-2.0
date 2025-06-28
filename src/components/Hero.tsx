import React from 'react';
import { ChefHat, Sparkles, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-purple-50 via-pink-50 to-lime-50 py-20 overflow-hidden">
      {/* Trippy background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-xl animate-spin"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-purple-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Sparkles className="h-4 w-4 animate-spin" />
            <span>Premium Cannabis Culinary Experience</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master the Art of{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-purple-600 via-pink-600 to-lime-600 bg-clip-text text-transparent animate-pulse">
              Cannabis Cooking
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover expertly crafted recipes, precise dosing tools, and comprehensive guides 
            to create exceptional cannabis-infused culinary experiences with confidence and safety.
          </p>

          {/* Creator credit */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 italic">
              🌿 Crafted with love by{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                Riley Oliver
              </span>{' '}
              🌿
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#recipes"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
            >
              Explore Trippy Recipes
            </a>
            <a
              href="#calculator"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Calculate Your High
            </a>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 hover:rotate-1 border-2 border-transparent hover:border-gradient-to-r hover:from-emerald-400 hover:to-purple-400">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 animate-bounce">
                <ChefHat className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Recipes</h3>
              <p className="text-gray-600">Carefully tested recipes with precise dosing and detailed instructions.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 hover:-rotate-1 border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-400">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Sparkles className="h-6 w-6 text-purple-600 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Tools</h3>
              <p className="text-gray-600">Advanced calculators for accurate THC dosing and potency estimation.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 hover:rotate-1 border-2 border-transparent hover:border-gradient-to-r hover:from-green-400 hover:to-blue-400">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Practices</h3>
              <p className="text-gray-600">Education on decarboxylation, safety, and responsible consumption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;