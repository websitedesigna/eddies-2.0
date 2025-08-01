import React, { useState, useEffect, useRef } from 'react';
import { Calculator, Zap, AlertCircle, BookOpen, TrendingUp } from 'lucide-react';
import type { CalculatorInput, CalculatorResult } from '../types';

const THCCalculator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [input, setInput] = useState<CalculatorInput>({
    cannabisAmount: 7,
    thcPercentage: 20,
    recipeYield: 16,
    decarboxylationEfficiency: 90
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const calculateTHC = () => {
    // THC calculation formula
    const thcInMg = (input.cannabisAmount * 1000) * (input.thcPercentage / 100) * (input.decarboxylationEfficiency / 100);
    const thcPerServing = thcInMg / input.recipeYield;
    
    let dosageLevel: CalculatorResult['dosageLevel'] = 'Micro';
    let recommendation = '';

    if (thcPerServing < 2.5) {
      dosageLevel = 'Micro';
      recommendation = 'Perfect for beginners or microdosing! You\'ll feel relaxed and focused without being "high." Great for daily wellness, creativity, and maintaining productivity. This is your sweet spot for functional cannabis use. 🌱✨';
    } else if (thcPerServing < 5) {
      dosageLevel = 'Low';
      recommendation = 'Mild euphoria and gentle relaxation await! You\'ll feel happy, slightly giggly, and stress-free while still being completely functional. Perfect for social situations, creative projects, or unwinding after work. 😌🌈';
    } else if (thcPerServing < 10) {
      dosageLevel = 'Medium';
      recommendation = 'Now we\'re talking! Clear euphoria, enhanced creativity, and that classic "cannabis feeling" without being overwhelming. Great for movies, music, art, or hanging with friends. You\'ll definitely know you\'re high, but in the best way. 🚀🎨';
    } else if (thcPerServing < 20) {
      dosageLevel = 'High';
      recommendation = 'Strong effects incoming! Expect intense euphoria, possible couch-lock, and a serious case of the munchies. This is for experienced users who want to get REALLY high. Perfect for lazy weekends, deep conversations, or binge-watching your favorite shows. 🌙🛋️';
    } else {
      dosageLevel = 'Very High';
      recommendation = 'WHOA! You\'re entering heroic dose territory! This can cause intense psychedelic-like experiences, time distortion, and reality shifts. Only for the most experienced cannabis users. Have a trip sitter, stay hydrated, and prepare for a wild ride through the cosmos! 🌌🚀👽';
    }

    setResult({
      totalThc: thcInMg,
      thcPerServing,
      dosageLevel,
      recommendation
    });
  };

  useEffect(() => {
    calculateTHC();
  }, [input]);

  const getDosageColor = (level: string) => {
    switch (level) {
      case 'Micro': return 'text-green-600 bg-gradient-to-r from-green-100 to-emerald-100';
      case 'Low': return 'text-blue-600 bg-gradient-to-r from-blue-100 to-cyan-100';
      case 'Medium': return 'text-yellow-600 bg-gradient-to-r from-yellow-100 to-orange-100';
      case 'High': return 'text-orange-600 bg-gradient-to-r from-orange-100 to-red-100';
      case 'Very High': return 'text-red-600 bg-gradient-to-r from-red-100 to-pink-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const presetRecipes = [
    { name: 'Brownies (16 pieces)', amount: 7, thc: 20, yield: 16 },
    { name: 'Cookies (24 pieces)', amount: 3.5, thc: 18, yield: 24 },
    { name: 'Gummies (50 pieces)', amount: 3.5, thc: 25, yield: 50 },
    { name: 'Butter (1 cup)', amount: 14, thc: 22, yield: 32 }
  ];

  return (
    <section 
      ref={sectionRef}
      id="calculator" 
      className={`py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Trippy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-floatSlow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-100 to-purple-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-bold mb-6 animate-glowPulse shadow-lg">
            <Calculator className="h-5 w-5 animate-bounce" />
            <span>🧮 Precision Dosing Tool by Riley Oliver 🧮</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-textGlow">
            Advanced THC Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Calculate the <span className="font-bold text-emerald-600">exact THC content</span> in your cannabis-infused recipes for safe, consistent, and perfectly dosed edibles every single time. No more guessing games!
          </p>
          
          {/* Fun fact ticker */}
          <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 inline-block">
            <p className="text-sm text-blue-800 animate-pulse">
              💡 <strong>Pro Tip:</strong> Edibles can be 3-5x more potent than smoking due to liver metabolism!
            </p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mb-12 bg-gradient-to-br from-white via-emerald-50 to-purple-50 rounded-2xl shadow-2xl p-8 border-2 border-transparent hover:border-emerald-400 transition-all duration-500 transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
            <TrendingUp className="h-6 w-6 text-emerald-600 animate-bounce" />
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">🚀 Quick Recipe Presets (Click to Load!)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {presetRecipes.map((preset, index) => (
              <button
                key={index}
                onClick={() => setInput({
                  ...input,
                  cannabisAmount: preset.amount,
                  thcPercentage: preset.thc,
                  recipeYield: preset.yield
                })}
                className="group p-4 text-left bg-gradient-to-r from-emerald-50 to-purple-50 hover:from-emerald-100 hover:to-purple-100 rounded-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="font-bold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">{preset.name}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {preset.amount}g • {preset.thc}% THC
                </div>
                <div className="text-xs text-emerald-600 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to load! ✨
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <div className="bg-gradient-to-br from-emerald-50 via-purple-50 to-green-50 p-8 rounded-2xl shadow-2xl border-2 border-transparent hover:border-emerald-400 transition-all duration-500 transform hover:scale-105">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-8 flex items-center space-x-2">
              <span>🔧 Recipe Parameters</span>
            </h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                  <span>🌿 Cannabis Amount (grams)</span>
                </label>
                <input
                  type="number"
                  value={input.cannabisAmount}
                  onChange={(e) => setInput({...input, cannabisAmount: parseFloat(e.target.value) || 0})}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-purple-400 text-lg font-medium bg-white shadow-inner"
                  step="0.1"
                  min="0"
                />
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  💡 <strong>Typical range:</strong> 3.5g (eighth) to 28g (ounce) - more cannabis = stronger edibles!
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                  <span>💚 THC Percentage (%)</span>
                </label>
                <input
                  type="number"
                  value={input.thcPercentage}
                  onChange={(e) => setInput({...input, thcPercentage: parseFloat(e.target.value) || 0})}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-emerald-400 text-lg font-medium bg-white shadow-inner"
                  step="0.1"
                  min="0"
                  max="100"
                />
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  🔬 <strong>Reference:</strong> Average flower 15-25%, Premium flower 25-30%, Concentrates 60-90%
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                  <span>🍽️ Recipe Yield (servings)</span>
                </label>
                <input
                  type="number"
                  value={input.recipeYield}
                  onChange={(e) => setInput({...input, recipeYield: parseInt(e.target.value) || 1})}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:border-green-400 text-lg font-medium bg-white shadow-inner"
                  min="1"
                />
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  📊 <strong>Think carefully:</strong> More servings = lower dose per piece. Brownies typically make 16 pieces.
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                  <span>🔥 Decarboxylation Efficiency (%)</span>
                </label>
                <input
                  type="range"
                  value={input.decarboxylationEfficiency}
                  onChange={(e) => setInput({...input, decarboxylationEfficiency: parseInt(e.target.value)})}
                  className="w-full h-4 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg appearance-none cursor-pointer slider"
                  min="70"
                  max="100"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2 font-medium">
                  <span>70% (Poor)</span>
                  <span className="font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent text-lg">
                    {input.decarboxylationEfficiency}%
                  </span>
                  <span>100% (Perfect)</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  🌡️ <strong>Pro tip:</strong> 240°F for 40 minutes = ~90% efficiency. Poor decarb = weak edibles!
                </p>
              </div>

              {/* Advanced Options Toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm text-emerald-600 hover:text-emerald-700 font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="h-5 w-5 animate-bounce" />
                <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Tips</span>
              </button>

              {showAdvanced && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 animate-slideInUp">
                  <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center space-x-2">
                    <span>💡</span>
                    <span>Master-Level Tips for Perfect Accuracy</span>
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">🧪</span>
                      <span><strong>Lab-tested strains:</strong> Always use cannabis with verified THC% for accurate calculations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 font-bold">⚗️</span>
                      <span><strong>Grind consistency:</strong> Fine grind = better extraction, but don't powder it!</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">🌡️</span>
                      <span><strong>Temperature accuracy:</strong> Use an oven thermometer - most ovens lie by 25°F!</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-yellow-500 font-bold">🚀</span>
                      <span><strong>Lecithin magic:</strong> Add sunflower lecithin to increase bioavailability by 200-300%!</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 font-bold">🌿</span>
                      <span><strong>Strain matters:</strong> Indica vs Sativa affects extraction rates and final effects</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-white via-purple-50 to-emerald-50 border-2 border-gray-200 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-emerald-400 transform hover:scale-105">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center space-x-2">
              <span>📊 Your Dosage Results</span>
            </h3>
            
            {result && (
              <div className="space-y-8">
                {/* Main results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl text-center border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent animate-pulse">
                      {result.totalThc.toFixed(1)}mg
                    </div>
                    <div className="text-sm text-emerald-700 font-bold mt-2">🌿 Total THC in Recipe</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                      {result.thcPerServing.toFixed(1)}mg
                    </div>
                    <div className="text-sm text-purple-700 font-bold mt-2">🍪 THC per Serving</div>
                  </div>
                </div>

                {/* Dosage level */}
                <div className="text-center">
                  <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${getDosageColor(result.dosageLevel)} animate-bounce shadow-lg transform hover:scale-110 transition-all duration-300`}>
                    <Zap className="h-5 w-5 animate-pulse" />
                    <span className="font-bold text-lg">{result.dosageLevel} Dose Level</span>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-xl border-2 border-gray-200 hover:border-purple-400 transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                    <span>🎯</span>
                    <span>What to Expect</span>
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{result.recommendation}</p>
                </div>

                {/* Enhanced safety warning */}
                <div className={`rounded-lg p-4 border-2 ${
                  result.thcPerServing >= 20 
                    ? 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200' 
                    : 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200'
                }`}>
                  <div className="flex items-start space-x-2">
                    <AlertCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 animate-pulse ${
                      result.thcPerServing >= 20 ? 'text-red-600' : 'text-amber-600'
                    }`} />
                    <div>
                      <h4 className={`text-sm font-medium mb-1 ${
                        result.thcPerServing >= 20 ? 'text-red-800' : 'text-amber-800'
                      }`}>
                        {result.thcPerServing >= 20 ? '🚨 EXTREME DOSE WARNING' : 'Safety First 🛡️'}
                      </h4>
                      <p className={`text-sm ${
                        result.thcPerServing >= 20 ? 'text-red-700' : 'text-amber-700'
                      }`}>
                        {result.thcPerServing >= 20 
                          ? 'This is a HEROIC DOSE that can cause intense psychedelic experiences. Only for extremely experienced users. Start with 1/4 serving maximum!'
                          : 'Start with half a serving and wait 2+ hours before consuming more. Effects can be delayed and long-lasting.'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced dosage guidelines */}
                <div className="space-y-4">
                  <h4 className="font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent text-lg flex items-center space-x-2">
                    <span>📊</span>
                    <span>Complete Dosage Reference Guide</span>
                  </h4>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between items-center hover:bg-green-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-green-200">
                      <span className="font-bold text-green-700">Micro (0-2.5mg):</span>
                      <span className="text-green-600 font-medium">Wellness, focus, minimal high 🌱</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-blue-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-blue-200">
                      <span className="font-bold text-blue-700">Low (2.5-5mg):</span>
                      <span className="text-blue-600 font-medium">Mild euphoria, relaxation 😌</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-yellow-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-yellow-200">
                      <span className="font-bold text-yellow-700">Medium (5-10mg):</span>
                      <span className="text-yellow-600 font-medium">Clear high, creativity boost 🚀</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-orange-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-orange-200">
                      <span className="font-bold text-orange-700">High (10-20mg):</span>
                      <span className="text-orange-600 font-medium">Strong effects, couch-lock 🌙</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-red-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-red-200">
                      <span className="font-bold text-red-700">Very High (20mg+):</span>
                      <span className="text-red-600 font-medium">Psychedelic territory 🌌</span>
                    </div>
                  </div>
                </div>

                {/* Onset time info */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center space-x-2">
                    <span>⏰</span>
                    <span>Onset Times by Edible Type</span>
                  </h4>
                  <div className="text-sm text-blue-700 space-y-3 grid md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span><strong>Gummies/Hard candies:</strong> 15-45 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span><strong>Baked goods:</strong> 30-90 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span><strong>Chocolates:</strong> 30-60 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span><strong>Beverages:</strong> 15-30 minutes</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 mt-3 font-medium italic">
                    💡 Remember: Effects can take up to 2 hours to fully kick in. Be patient!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Creator credit */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 italic font-medium">
            🌿 Advanced calculator crafted by{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
              Riley Oliver
            </span>{' '}
            for the cannabis community 🌿
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Precision dosing for perfect highs, every single time"
          </p>
        </div>
      </div>
    </section>
  );
};

export default THCCalculator;
