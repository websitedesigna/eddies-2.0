import React, { useState, useEffect } from 'react';
import { Calculator, Zap, AlertCircle, BookOpen, TrendingUp } from 'lucide-react';
import type { CalculatorInput, CalculatorResult } from '../types';

const THCCalculator: React.FC = () => {
  const [input, setInput] = useState<CalculatorInput>({
    cannabisAmount: 7,
    thcPercentage: 20,
    recipeYield: 16,
    decarboxylationEfficiency: 90
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const calculateTHC = () => {
    // THC calculation formula
    const thcInMg = (input.cannabisAmount * 1000) * (input.thcPercentage / 100) * (input.decarboxylationEfficiency / 100);
    const thcPerServing = thcInMg / input.recipeYield;
    
    let dosageLevel: CalculatorResult['dosageLevel'] = 'Micro';
    let recommendation = '';

    if (thcPerServing < 2.5) {
      dosageLevel = 'Micro';
      recommendation = 'Perfect for beginners or microdosing. Minimal psychoactive effects. Great for daily wellness. 🌱';
    } else if (thcPerServing < 5) {
      dosageLevel = 'Low';
      recommendation = 'Mild euphoria and relaxation. Good for beginners and daily use. Functional dosing. 😌';
    } else if (thcPerServing < 10) {
      dosageLevel = 'Medium';
      recommendation = 'Moderate effects with clear euphoria. Good for regular users. Social and creative dosing. 🚀';
    } else if (thcPerServing < 20) {
      dosageLevel = 'High';
      recommendation = 'Strong psychoactive effects. For experienced users only. Couch-lock potential. 🌙';
    } else {
      dosageLevel = 'Very High';
      recommendation = 'EXTREME effects. Heroic dose territory. Use with extreme caution. Psychedelic-like experiences possible. 🌌';
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
    <section id="calculator" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 relative overflow-hidden">
      {/* Trippy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-purple-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
            <Calculator className="h-4 w-4 animate-bounce" />
            <span>Precision Dosing Tool by Riley Oliver</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Advanced THC Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the exact THC content in your cannabis-infused recipes for safe and consistent dosing.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            <span>Quick Recipe Presets</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {presetRecipes.map((preset, index) => (
              <button
                key={index}
                onClick={() => setInput({
                  ...input,
                  cannabisAmount: preset.amount,
                  thcPercentage: preset.thc,
                  recipeYield: preset.yield
                })}
                className="p-3 text-left bg-gradient-to-r from-emerald-50 to-purple-50 hover:from-emerald-100 hover:to-purple-100 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-all duration-200"
              >
                <div className="font-medium text-gray-900 text-sm">{preset.name}</div>
                <div className="text-xs text-gray-600">
                  {preset.amount}g • {preset.thc}% THC
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <div className="bg-gradient-to-br from-emerald-50 via-purple-50 to-green-50 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-green-400 transition-all duration-300">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Recipe Parameters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cannabis Amount (grams) 🌿
                </label>
                <input
                  type="number"
                  value={input.cannabisAmount}
                  onChange={(e) => setInput({...input, cannabisAmount: parseFloat(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-purple-400"
                  step="0.1"
                  min="0"
                />
                <p className="text-xs text-gray-500 mt-1">Typical range: 3.5g - 28g</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  THC Percentage (%) 💚
                </label>
                <input
                  type="number"
                  value={input.thcPercentage}
                  onChange={(e) => setInput({...input, thcPercentage: parseFloat(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-emerald-400"
                  step="0.1"
                  min="0"
                  max="100"
                />
                <p className="text-xs text-gray-500 mt-1">Average flower: 15-25%, Concentrates: 60-90%</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipe Yield (servings) 🍽️
                </label>
                <input
                  type="number"
                  value={input.recipeYield}
                  onChange={(e) => setInput({...input, recipeYield: parseInt(e.target.value) || 1})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 hover:border-green-400"
                  min="1"
                />
                <p className="text-xs text-gray-500 mt-1">How many portions will this recipe make?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Decarboxylation Efficiency (%) 🔥
                </label>
                <input
                  type="range"
                  value={input.decarboxylationEfficiency}
                  onChange={(e) => setInput({...input, decarboxylationEfficiency: parseInt(e.target.value)})}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg appearance-none cursor-pointer slider"
                  min="70"
                  max="100"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>70% (Poor)</span>
                  <span className="font-medium bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                    {input.decarboxylationEfficiency}%
                  </span>
                  <span>100% (Perfect)</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">240°F for 40 minutes = ~90% efficiency</p>
              </div>

              {/* Advanced Options Toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-1"
              >
                <BookOpen className="h-4 w-4" />
                <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Tips</span>
              </button>

              {showAdvanced && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">💡 Pro Tips for Accuracy</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use a lab-tested strain for accurate THC%</li>
                    <li>• Grind cannabis finely for better extraction</li>
                    <li>• Monitor decarb temperature with oven thermometer</li>
                    <li>• Add lecithin to increase bioavailability by 2-3x</li>
                    <li>• Strain material affects final potency</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gradient-to-r hover:from-emerald-400 hover:to-purple-400">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Dosage Results
            </h3>
            
            {result && (
              <div className="space-y-6">
                {/* Main results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-lg text-center border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-200 transform hover:scale-105">
                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent animate-pulse">
                      {result.totalThc.toFixed(1)}mg
                    </div>
                    <div className="text-sm text-emerald-700">Total THC</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg text-center border-2 border-purple-200 hover:border-purple-400 transition-all duration-200 transform hover:scale-105">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                      {result.thcPerServing.toFixed(1)}mg
                    </div>
                    <div className="text-sm text-purple-700">THC per Serving</div>
                  </div>
                </div>

                {/* Dosage level */}
                <div className="text-center">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getDosageColor(result.dosageLevel)} animate-bounce`}>
                    <Zap className="h-4 w-4 animate-pulse" />
                    <span className="font-medium">{result.dosageLevel} Dose</span>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Recommendation</h4>
                  <p className="text-sm text-gray-700">{result.recommendation}</p>
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
                <div className="space-y-2">
                  <h4 className="font-medium bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                    Complete Dosage Guide 📊
                  </h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between hover:bg-green-50 p-2 rounded transition-colors">
                      <span className="font-medium">Micro (0-2.5mg):</span>
                      <span className="text-green-600">Wellness, focus, minimal high 🌱</span>
                    </div>
                    <div className="flex justify-between hover:bg-blue-50 p-2 rounded transition-colors">
                      <span className="font-medium">Low (2.5-5mg):</span>
                      <span className="text-blue-600">Mild euphoria, relaxation 😌</span>
                    </div>
                    <div className="flex justify-between hover:bg-yellow-50 p-2 rounded transition-colors">
                      <span className="font-medium">Medium (5-10mg):</span>
                      <span className="text-yellow-600">Clear high, creativity boost 🚀</span>
                    </div>
                    <div className="flex justify-between hover:bg-orange-50 p-2 rounded transition-colors">
                      <span className="font-medium">High (10-20mg):</span>
                      <span className="text-orange-600">Strong effects, couch-lock 🌙</span>
                    </div>
                    <div className="flex justify-between hover:bg-red-50 p-2 rounded transition-colors">
                      <span className="font-medium">Very High (20mg+):</span>
                      <span className="text-red-600">Psychedelic territory 🌌</span>
                    </div>
                  </div>
                </div>

                {/* Onset time info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-medium text-blue-800 mb-1">⏰ Onset Times</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>• Gummies/Hard candies: 15-45 minutes</div>
                    <div>• Baked goods: 30-90 minutes</div>
                    <div>• Chocolates: 30-60 minutes</div>
                    <div>• Beverages: 15-30 minutes</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Creator credit */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            🌿 Advanced calculator crafted by{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Riley Oliver
            </span>{' '}
            for precise cannabis dosing 🌿
          </p>
        </div>
      </div>
    </section>
  );
};

export default THCCalculator;
