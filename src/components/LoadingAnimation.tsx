import React, { useState, useEffect } from 'react';

const LoadingAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'falling' | 'settling' | 'fading'>('falling');

  useEffect(() => {
    // Start falling phase
    const fallingTimer = setTimeout(() => {
      setPhase('settling');
    }, 3000);

    // Start settling phase
    const settlingTimer = setTimeout(() => {
      setPhase('fading');
    }, 4000);

    // Complete animation
    const fadingTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(fallingTimer);
      clearTimeout(settlingTimer);
      clearTimeout(fadingTimer);
    };
  }, [onComplete]);

  // Generate random weed leaves
  const leaves = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    size: 20 + Math.random() * 30,
    rotation: Math.random() * 360,
    swayAmount: 20 + Math.random() * 40,
  }));

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-emerald-900 via-green-800 to-lime-900 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-800/20 to-green-900/40 animate-pulse"></div>
      
      {/* Floating weed leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute transition-all duration-1000 ease-out ${
            phase === 'falling' 
              ? 'animate-bounce' 
              : phase === 'settling' 
                ? 'animate-pulse' 
                : 'opacity-0'
          }`}
          style={{
            left: `${leaf.left}%`,
            top: phase === 'falling' ? '-10%' : '90%',
            animationDelay: `${leaf.delay}s`,
            transform: `rotate(${leaf.rotation}deg) scale(${phase === 'fading' ? 0 : 1})`,
            transition: phase === 'falling' 
              ? `top 3s ease-out ${leaf.delay}s, transform 3s ease-out ${leaf.delay}s`
              : phase === 'settling'
                ? 'all 1s ease-out'
                : 'all 1.5s ease-out',
          }}
        >
          {/* Cannabis leaf SVG */}
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 100 100"
            className="text-green-400 drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))',
              animation: phase === 'falling' ? `sway-${leaf.id} 2s ease-in-out infinite` : 'none',
            }}
          >
            <defs>
              <style>
                {`
                  @keyframes sway-${leaf.id} {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    25% { transform: translateX(${leaf.swayAmount}px) rotate(5deg); }
                    75% { transform: translateX(-${leaf.swayAmount}px) rotate(-5deg); }
                  }
                `}
              </style>
            </defs>
            <path
              d="M50 10 C30 20, 20 40, 35 60 C40 50, 50 45, 50 50 C50 45, 60 50, 65 60 C80 40, 70 20, 50 10 Z M50 50 C45 60, 35 70, 25 85 C35 80, 45 75, 50 70 C50 75, 55 80, 65 85 C55 70, 45 60, 50 50 Z M50 50 C60 55, 70 65, 85 75 C80 65, 75 55, 70 50 C75 55, 80 60, 85 75 C70 65, 60 55, 50 50 Z M50 50 C40 55, 30 65, 15 75 C20 65, 25 55, 30 50 C25 55, 20 60, 15 75 C30 65, 40 55, 50 50 Z"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>
      ))}

      {/* Loading text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent mb-4 animate-pulse">
            GreenChef
          </h1>
          <p className="text-2xl text-green-300 animate-bounce">
            Preparing your cannabis culinary journey...
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Smoke effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent animate-pulse"></div>
    </div>
  );
};

export default LoadingAnimation;