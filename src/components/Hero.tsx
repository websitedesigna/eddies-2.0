import React, { useState, useEffect } from 'react';
import { ChefHat, Sparkles, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const cannabisFacts = [
    "🧠 The human brain has more cannabinoid receptors than any other G-protein coupled receptor!",
    "🌿 Cannabis has been used medicinally for over 5,000 years across different cultures!",
    "🔬 There are over 100 different cannabinoids in cannabis, each with unique effects!",
    "🍯 Decarboxylation increases THC bioavailability by up to 400% in edibles!",
    "⚡ Edibles can be 3-5x more potent than smoking due to liver metabolism!",
    "🧬 Your endocannabinoid system regulates mood, appetite, sleep, and immune function!",
    "🌱 Cannabis terpenes are also found in lavender, citrus, and pine trees!",
    "🕐 The 'entourage effect' means whole-plant cannabis is more effective than isolated THC!"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % cannabisFacts.length);
    }, 4000);

    return () => clearInterval(factInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-purple-50 via-pink-50 to-lime-50 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Trippy background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-pulse" style={{animationDuration: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-xl animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl animate-ping" style={{animationDuration: '1.5s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-lime-400 to-green-400 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-18 h-18 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Rotating cannabis facts */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-lime-100 border-2 border-green-200 rounded-full px-6 py-3 shadow-lg transform transition-all duration-500 hover:scale-105">
              <p className="text-sm font-medium text-green-800 animate-pulse">
                <span className="inline-block animate-bounce mr-2">💡</span>
                <span key={currentFact} className="animate-fadeIn">
                  {cannabisFacts[currentFact]}
                </span>
              </p>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-purple-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse shadow-lg transform transition-all duration-300 hover:scale-110">
            <Sparkles className="h-5 w-5 animate-spin" style={{animationDuration: '3s'}} />
            <span className="font-bold">Premium Cannabis Culinary Experience by Riley Oliver</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight transform transition-all duration-700 hover:scale-105">
            Master the Art of{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-purple-600 via-pink-600 to-lime-600 bg-clip-text text-transparent animate-pulse relative">
              Cannabis Cooking
              <span className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Transform your kitchen into a <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-bold">cannabis culinary laboratory</span> with our expertly crafted recipes, precision dosing tools, and step-by-step guides that guarantee perfect edibles every single time.
          </p>

          {/* Creator credit */}
          <div className="mb-10">
            <p className="text-lg text-gray-600 italic font-medium">
              🌿 Crafted with love by{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
                Riley Oliver
              </span>
              {' '}• Cannabis Chef & Developer 🌿
            </p>
            <p className="text-sm text-gray-500 mt-2">
              "Your trusted guide to safe, delicious, and perfectly dosed cannabis edibles"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#recipes"
              className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl animate-pulse relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>🍪 Explore Trippy Recipes</span>
                <ChefHat className="h-5 w-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#calculator"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>🧮 Calculate Your High</span>
                <Sparkles className="h-5 w-5 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-2 border-transparent hover:border-emerald-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 animate-bounce group-hover:animate-pulse">
                  <ChefHat className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">Expert Recipes</h3>
                <p className="text-gray-600 leading-relaxed">Meticulously tested recipes with foolproof instructions and precise dosing that guarantee perfect results every time.</p>
                <div className="mt-4 text-sm text-emerald-600 font-semibold">
                  ✓ Step-by-step guides ✓ Dosing precision ✓ Safety first
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border-2 border-transparent hover:border-purple-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 animate-pulse group-hover:animate-spin">
                  <Sparkles className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Precision Tools</h3>
                <p className="text-gray-600 leading-relaxed">Advanced calculators and measurement tools for accurate THC dosing and potency estimation with scientific precision.</p>
                <div className="mt-4 text-sm text-purple-600 font-semibold">
                  ✓ THC calculator ✓ Dosage guides ✓ Potency tracking
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border-2 border-transparent hover:border-green-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 animate-bounce group-hover:animate-pulse">
                  <Shield className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Safe Practices</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive education on decarboxylation, safety protocols, and responsible consumption for worry-free experiences.</p>
                <div className="mt-4 text-sm text-green-600 font-semibold">
                  ✓ Safety protocols ✓ Legal compliance ✓ Best practices
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>10,000+ Successful Edibles Made</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span>Lab-Tested Accuracy</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              <span>Safety-First Approach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;