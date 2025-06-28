import React, { useState } from 'react';
import { BookOpen, Thermometer, Clock, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const educationCards = [
    {
      icon: Thermometer,
      title: 'Decarboxylation Mastery',
      subtitle: 'Unlock Maximum Potency',
      description: 'Learn the science behind activating THC for optimal effects.',
      content: `
        Decarboxylation is the crucial process that activates THC in cannabis. Raw cannabis contains THCA, 
        which must be converted to THC through heat application.

        **Optimal Decarboxylation Process:**
        • Preheat oven to 240°F (115°C)
        • Break cannabis into small, uniform pieces
        • Spread evenly on parchment-lined baking sheet
        • Bake for 40-45 minutes
        • Cannabis should be golden brown, not dark

        **Temperature Guidelines:**
        • 220°F (104°C): 45-60 minutes (gentle, preserves terpenes)
        • 240°F (115°C): 40-45 minutes (standard method)
        • 250°F (121°C): 25-30 minutes (faster, but may degrade compounds)

        **Signs of Proper Decarboxylation:**
        • Color change from green to golden brown
        • Slightly crispy texture
        • Reduced volume
        • Stronger aroma

        Avoid over-decarboxylation, which can degrade THC and produce a harsh taste.
      `,
      color: 'emerald'
    },
    {
      icon: Clock,
      title: 'Timing & Temperature',
      subtitle: 'Perfect Infusion Techniques',
      description: 'Master the art of creating potent cannabis infusions.',
      content: `
        Proper timing and temperature control are essential for creating effective cannabis infusions 
        while preserving beneficial compounds.

        **Infusion Methods:**

        **Oil Infusions (Coconut Oil, Olive Oil):**
        • Low heat: 160-180°F (71-82°C) for 4-6 hours
        • Double boiler method recommended
        • Strain through cheesecloth when complete

        **Butter Infusions:**
        • Water method: Simmer in water bath for 3-4 hours
        • Direct method: 160°F (71°C) for 2-3 hours
        • Always add water to prevent burning

        **Alcohol Tinctures:**
        • Cold extraction: 2-4 weeks in dark place
        • Warm extraction: 140°F (60°C) for 8-12 hours
        • Higher proof alcohol extracts more compounds

        **Key Temperature Rules:**
        • Never exceed 200°F (93°C) during infusion
        • Lower temperatures preserve terpenes
        • Longer times at lower temperatures = better extraction
      `,
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Potency Optimization',
      subtitle: 'Maximize Your Results',
      description: 'Advanced techniques to enhance cannabinoid extraction.',
      content: `
        Optimize your cannabis infusions with these professional techniques for maximum potency 
        and flavor preservation.

        **Advanced Extraction Techniques:**

        **Lecithin Addition:**
        • Add 1 tsp sunflower lecithin per cup of oil
        • Improves bioavailability by 2-3x
        • Helps create stable emulsions

        **Freezing Method:**
        • Freeze cannabis and oil/butter overnight before infusion
        • Breaks down plant cell walls
        • Increases surface area for extraction

        **Pressure Cooking:**
        • 1 hour at high pressure with natural release
        • Significantly reduces infusion time
        • Maintains consistent temperature

        **Quality Factors:**
        • Starting material quality is crucial
        • Fresh, properly cured cannabis works best
        • Store finished products in dark, cool places

        **Testing Potency:**
        • Start with small test batches
        • Keep detailed notes on ratios and methods
        • Allow 24-48 hours for full flavor development

        **Strain Selection Tips:**
        • Indica strains: Higher sedating effects
        • Sativa strains: More energizing effects
        • Hybrid strains: Balanced effects
      `,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        icon: 'bg-emerald-100 text-emerald-600',
        button: 'text-emerald-600 hover:text-emerald-700',
        accent: 'border-emerald-200'
      },
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100 text-blue-600',
        button: 'text-blue-600 hover:text-blue-700',
        accent: 'border-blue-200'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-100 text-purple-600',
        button: 'text-purple-600 hover:text-purple-700',
        accent: 'border-purple-200'
      }
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            <span>Cannabis Education Hub</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Cannabis Cooking</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn the science, techniques, and best practices for creating exceptional cannabis-infused foods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {educationCards.map((card, index) => {
            const Icon = card.icon;
            const colors = getColorClasses(card.color);
            const isExpanded = expandedCard === index;

            return (
              <div 
                key={index}
                className={`${colors.bg} rounded-xl shadow-lg transition-all duration-300 ${
                  isExpanded ? 'md:col-span-3' : ''
                }`}
              >
                <div className="p-6">
                  <div className={`${colors.icon} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-2">{card.subtitle}</p>
                  <p className="text-gray-700 text-sm mb-4">{card.description}</p>

                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className={`${colors.button} flex items-center space-x-1 font-medium text-sm transition-colors`}
                  >
                    <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {isExpanded && (
                  <div className={`border-t ${colors.accent} p-6`}>
                    <div className="prose prose-sm max-w-none">
                      {card.content.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                          return (
                            <h4 key={pIndex} className="font-semibold text-gray-900 mt-6 mb-3">
                              {paragraph.replace(/\*\*/g, '')}
                            </h4>
                          );
                        } else if (paragraph.startsWith('•')) {
                          const items = paragraph.split('\n• ').map(item => item.replace(/^• /, ''));
                          return (
                            <ul key={pIndex} className="list-disc pl-5 space-y-1 mb-4">
                              {items.map((item, iIndex) => (
                                <li key={iIndex} className="text-gray-700">{item}</li>
                              ))}
                            </ul>
                          );
                        } else {
                          return (
                            <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional tips section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Safety Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Dosing Safety</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Start with 2.5mg or less for beginners</li>
                <li>• Wait 2+ hours before taking more</li>
                <li>• Effects can last 4-8 hours</li>
                <li>• Keep detailed dosing logs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Storage & Labeling</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Store in childproof containers</li>
                <li>• Label with THC content and date</li>
                <li>• Keep refrigerated when possible</li>
                <li>• Use within 6 months for best potency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;