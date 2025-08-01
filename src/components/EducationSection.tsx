import React, { useState, useEffect } from 'react';
import { BookOpen, Thermometer, Clock, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.education-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const educationCards = [
    {
      icon: Thermometer,
      title: 'Decarboxylation Mastery',
      subtitle: 'Unlock Maximum Potency',
      description: 'Master the critical process that transforms THCA into psychoactive THC. This is where the magic happens!',
      content: `
        Listen up, fellow cannabis chef! Decarboxylation isn't just a fancy word - it's the secret sauce that transforms your green into gold. Here's the real deal, human to human:

        **Why This Matters (The Science Made Simple):**
        Your fresh cannabis is loaded with THCA - think of it as "sleeping THC." It won't get you high until you wake it up with heat. This process removes a carboxyl group (hence "decarb"), converting THCA into the THC that creates those beautiful effects we're after.

        **The PERFECT Decarb Process (Follow This Exactly):**
        
        **Step 1: Prep Your Cannabis**
        • Break your buds into popcorn-sized pieces (not powder, not whole nugs)
        • Remove stems and seeds (they add bitterness and reduce potency)
        • Spread evenly on parchment-lined baking sheet
        • Pro tip: Use a pizza stone for even heat distribution

        **Step 2: Temperature Control (This is CRITICAL)**
        • Preheat oven to EXACTLY 240°F (115°C) - use an oven thermometer!
        • Most ovens run hot or cold - don't trust the dial
        • Too hot = destroyed cannabinoids, too cool = incomplete activation

        **Step 3: The Timing Dance**
        • 40-45 minutes for flower (set a timer, no exceptions!)
        • Shake the tray gently every 15 minutes for even heating
        • Your cannabis should turn golden brown, not dark brown
        • It should smell nutty and toasted, not burnt

        **Visual Cues You're Doing It Right:**
        ✅ Color changes from bright green to golden brown
        ✅ Texture becomes slightly crispy and crumbly
        ✅ Volume reduces by about 10-15%
        ✅ Aroma intensifies and becomes more "roasted"

        **Common Mistakes That Kill Your Buzz:**
        ❌ Grinding too fine (creates hot spots and burns)
        ❌ Overcrowding the pan (uneven heating)
        ❌ Opening oven door constantly (temperature fluctuations)
        ❌ Going by color alone without timing

        **Pro Tips from the Trenches:**
        • Mason jar method: Seal ground cannabis in jar, bake for 1 hour at 240°F (contains smell)
        • Sous vide method: 203°F for 1.5 hours (most precise temperature control)
        • Save your ABV (Already Been Vaped) - it's already decarbed!
        • Different strains may need slight timing adjustments

        **Fun Fact:** Properly decarbed cannabis can increase potency by 300-400% compared to raw cannabis in edibles!
      `,
      color: 'emerald'
    },
    {
      icon: Clock,
      title: 'Timing & Temperature',
      subtitle: 'Perfect Infusion Techniques',
      description: 'Time and temperature are your best friends. Master these, and you\'ll create consistently potent infusions every single time.',
      content: `
        Alright, let's talk about the art of infusion - this is where patience meets precision, and magic happens in your kitchen.

        **The Golden Rules of Infusion:**
        Think of cannabinoids like delicate flowers - too much heat kills them, too little heat won't extract them. We're aiming for that sweet spot where THC dissolves into your fat or alcohol without getting destroyed.

        **Oil Infusions (The Crowd Favorite):**
        
        **Coconut Oil Method (My Personal Favorite):**
        • Ratio: 1 cup oil to 7-14g decarbed cannabis
        • Temperature: 160-180°F (71-82°C) - use a candy thermometer
        • Time: 4-6 hours (longer = stronger, but don't exceed 8 hours)
        • Method: Double boiler or slow cooker on LOW
        • Stir every 30 minutes to prevent hot spots
        • Strain through cheesecloth when done

        **Why Coconut Oil Rocks:**
        • Highest saturated fat content = better cannabinoid absorption
        • Solid at room temp = easy to measure and store
        • Neutral flavor won't overpower your recipes
        • Contains MCTs that may enhance bioavailability

        **Butter Infusions (The Classic):**
        
        **Water Method (Foolproof for Beginners):**
        • 1 cup butter + 1 cup water + 7-14g decarbed cannabis
        • Simmer on lowest heat for 3-4 hours
        • Water prevents burning and regulates temperature
        • Strain, refrigerate, remove solidified butter from water
        • Pro tip: Add lecithin for 2-3x potency boost!

        **Alcohol Tinctures (Fast-Acting Sublingual):**
        
        **Quick Extraction Method:**
        • Use 190-proof Everclear (higher proof = better extraction)
        • Ratio: 1 oz decarbed cannabis to 1 cup alcohol
        • Warm method: 140°F (60°C) for 8-12 hours in mason jar
        • Shake every hour for maximum extraction
        • Strain through coffee filter for crystal-clear tincture

        **Temperature Control Secrets:**
        • Invest in a good thermometer - your oven dial lies!
        • Use a double boiler to prevent overheating
        • Slow cookers on "warm" setting are perfect for long infusions
        • Never let your mixture bubble or boil (destroys cannabinoids)

        **Timing Guidelines That Actually Work:**
        • Minimum effective time: 2 hours
        • Sweet spot: 4-6 hours for oils, 8-12 for tinctures
        • Maximum recommended: 8 hours (diminishing returns after this)
        • Taste test every 2 hours - you'll notice the flavor developing

        **Pro Extraction Hacks:**
        • Freeze your decarbed cannabis overnight before infusing (breaks cell walls)
        • Add 1 tsp lecithin per cup of oil (increases bioavailability by 200-300%)
        • Use an immersion circulator for precise temperature control
        • Save your strained plant material - it still has potency for topicals!

        **Insider Knowledge:**
        • Different cannabinoids extract at different rates (THC faster than CBD)
        • Indica strains typically need longer extraction times
        • Fresh vs. cured cannabis affects extraction time
        • Humidity in your kitchen can affect infusion efficiency
      `,
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Potency Optimization',
      subtitle: 'Maximize Your Results',
      description: 'These are the secret techniques that separate amateur edible makers from true cannabis chefs. Get ready to level up!',
      content: `
        Ready to become a cannabis extraction wizard? These techniques will transform your edibles from "meh" to "WHOA!" Let's dive deep into the advanced stuff.

        **The Bioavailability Game-Changer: Lecithin**
        
        This is the secret weapon most people don't know about:
        • Add 1 tsp sunflower lecithin per cup of oil/butter
        • Increases absorption by 200-300% (seriously!)
        • Acts as an emulsifier, helping cannabinoids bind better
        • Sunflower lecithin > soy lecithin (better taste, no allergens)
        • Add it during the last hour of infusion for best results
        
        **Why It Works:** Lecithin helps break down cannabinoids into smaller particles that your body can absorb more easily. It's like giving your edibles a turbo boost!

        **The Freezer Trick (Cell Wall Destruction):**
        
        Here's what the pros do:
        • After decarbing, freeze your cannabis overnight
        • Freezing breaks down plant cell walls
        • Increases surface area for extraction by 40-60%
        • Works even better if you freeze it wet, then dry it
        • Some people do multiple freeze-thaw cycles for maximum effect

        **Pressure Cooking Revolution:**
        
        **Instant Pot Method (2-Hour Infusion):**
        • Combine decarbed cannabis with oil in mason jar
        • Seal jar (not too tight - leave room for expansion)
        • Pressure cook on high for 1 hour with natural release
        • Results rival 6-8 hour traditional methods
        • Perfect temperature control prevents overheating
        • Pro tip: Do a second 30-minute cycle for extra potency

        **Strain Selection Mastery:**
        
        **For Maximum Potency:**
        • High-THC strains: Girl Scout Cookies, Gorilla Glue, Bruce Banner
        • Look for 20%+ THC content on lab reports
        • Avoid old, dry cannabis (potency degrades over time)
        • Fresh, properly cured buds extract better than shake

        **For Specific Effects:**
        • Relaxation: Indica-dominant strains (Granddaddy Purple, Northern Lights)
        • Energy/Creativity: Sativa-dominant strains (Green Crack, Durban Poison)
        • Balanced: Hybrid strains (Blue Dream, Wedding Cake)
        • Sleep: High-CBN strains or aged cannabis

        **Advanced Extraction Techniques:**
        
        **The Ultrasonic Bath Method:**
        • Use an ultrasonic jewelry cleaner
        • Place sealed jar of cannabis and oil in the bath
        • Run for 30-minute cycles with 10-minute breaks
        • Ultrasonic waves break down plant matter at cellular level
        • Reduces extraction time to 2-3 hours total

        **The Sous Vide Precision Method:**
        • Most precise temperature control possible
        • Set to exactly 185°F (85°C) for 4 hours
        • Vacuum seal cannabis with oil for maximum contact
        • Zero risk of overheating or burning
        • Professional-grade results every time

        **Quality Control Secrets:**
        
        **Testing Your Potency:**
        • Start with small test batches (1/8 oz cannabis)
        • Keep detailed notes: strain, time, temperature, ratios
        • Test with 1/4 teaspoon doses and wait 2+ hours
        • Adjust ratios based on desired strength
        • Lab testing is available in legal states for exact numbers

        **Storage for Maximum Potency:**
        • Dark glass containers (light degrades THC)
        • Cool, dry places (heat and humidity are enemies)
        • Vacuum sealing for long-term storage
        • Properly stored infusions last 6-12 months
        • Freeze portions you won't use within 3 months

        **The Terpene Preservation Game:**
        • Lower temperatures preserve more terpenes
        • Terpenes enhance effects (entourage effect)
        • Add fresh citrus zest during last 30 minutes of infusion
        • Some terpenes are water-soluble, others fat-soluble
        • Myrcene enhances THC absorption (found in mangoes!)

        **Pro Tips from Master Extractors:**
        • Decarb at 240°F for exactly 40 minutes (optimal conversion)
        • Use a 1:1 ratio of indica to sativa for balanced effects
        • Add a pinch of salt to butter infusions (enhances flavor)
        • Coconut oil + MCT oil blend = maximum bioavailability
        • Always strain twice: once through mesh, once through coffee filter

        **Mind-Blowing Fact:** The human body has an endocannabinoid system with receptors specifically designed to interact with cannabis compounds. You're literally built for this!
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
                data-index={index}
                className={`education-card ${colors.bg} rounded-xl shadow-lg transition-all duration-700 transform ${
                  visibleCards[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                } ${
                className={`${colors.bg} rounded-xl shadow-lg transition-all duration-300 ${
                  isExpanded ? 'md:col-span-3' : ''
                } hover:scale-105 hover:shadow-2xl`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  animation: visibleCards[index] ? `slideInUp 0.8s ease-out ${index * 0.2}s both` : 'none'
                }}
              >
                <div className="p-6">
                  <div className={`${colors.icon} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                    <Icon className="h-6 w-6 animate-pulse" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">{card.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-2 animate-pulse">{card.subtitle}</p>
                  <p className="text-gray-700 text-sm mb-4">{card.description}</p>

                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className={`${colors.button} flex items-center space-x-1 font-medium text-sm transition-all duration-300 hover:scale-105 transform`}
                  >
                    <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                    <div className="transform transition-transform duration-300">
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 animate-bounce" />
                      ) : (
                        <ChevronDown className="h-4 w-4 animate-bounce" />
                      )}
                    </div>
                  </button>
                </div>

                {isExpanded && (
                  <div className={`border-t ${colors.accent} p-6 animate-fadeIn`}>
                    <div className="prose prose-sm max-w-none">
                      {card.content.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                          return (
                            <h4 key={pIndex} className="font-semibold text-gray-900 mt-6 mb-3 bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
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
        <div className="mt-12 bg-gradient-to-br from-white via-purple-50 to-emerald-50 rounded-xl shadow-2xl p-8 border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-emerald-400 transition-all duration-500 transform hover:scale-105">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2 animate-pulse">
              🚨 CRITICAL SAFETY GUIDELINES 🚨
            </h3>
            <p className="text-gray-600 italic">Your safety is our top priority - please read this carefully!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-red-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Dosing Safety (NEVER Ignore This!)
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span><strong>Beginners:</strong> Start with 2.5mg or LESS - seriously, we mean it!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⏰</span>
                  <span><strong>Wait Time:</strong> Minimum 2 hours, preferably 3-4 hours before more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">🕐</span>
                  <span><strong>Duration:</strong> Effects last 4-12 hours (plan accordingly!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">📝</span>
                  <span><strong>Track Everything:</strong> Keep a dosing journal with times and effects</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Storage & Labeling (Legal Requirements!)
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🔒</span>
                  <span><strong>Childproof:</strong> ALWAYS use childproof containers - kids can't tell the difference!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🏷️</span>
                  <span><strong>Label Everything:</strong> THC content, date made, and "CANNABIS EDIBLE"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">❄️</span>
                  <span><strong>Cool Storage:</strong> Refrigerate for potency, freeze for long-term</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">📅</span>
                  <span><strong>Shelf Life:</strong> 6 months max for best potency and safety</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Emergency info */}
          <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <h5 className="font-bold text-red-800 mb-2 flex items-center">
              <span className="animate-pulse mr-2">🆘</span>
              If Someone Takes Too Much:
            </h5>
            <div className="text-sm text-red-700 grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-1">Immediate Steps:</p>
                <ul className="space-y-1">
                  <li>• Stay calm and keep them calm</li>
                  <li>• Get them to a safe, comfortable place</li>
                  <li>• Give them water and light snacks</li>
                  <li>• Try CBD if available (counteracts THC)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Call 911 If:</p>
                <ul className="space-y-1">
                  <li>• Difficulty breathing</li>
                  <li>• Chest pain or rapid heartbeat</li>
                  <li>• Severe panic or psychosis</li>
                  <li>• Any concerning symptoms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;