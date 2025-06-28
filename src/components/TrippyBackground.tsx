import React from 'react';

const TrippyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-800/20 via-green-800/20 to-blue-900/20 animate-pulse"></div>
      
      {/* Floating mushrooms */}
      <div className="absolute inset-0">
        {/* Large floating mushrooms */}
        <div className="absolute top-10 left-10 w-16 h-16 opacity-30 animate-float">
          <div className="relative">
            {/* Mushroom cap */}
            <div className="w-12 h-8 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full mx-auto animate-pulse"></div>
            <div className="w-10 h-6 bg-gradient-to-r from-red-300 via-pink-400 to-purple-400 rounded-full mx-auto -mt-2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            {/* White spots */}
            <div className="absolute top-1 left-3 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-4 left-5 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
            {/* Mushroom stem */}
            <div className="w-3 h-8 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full mx-auto animate-pulse" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        <div className="absolute top-32 right-20 w-12 h-12 opacity-25 animate-float" style={{animationDelay: '1s'}}>
          <div className="relative">
            <div className="w-10 h-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mx-auto animate-pulse"></div>
            <div className="w-8 h-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 rounded-full mx-auto -mt-1 animate-pulse" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute top-2 right-1 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
            <div className="w-2.5 h-6 bg-gradient-to-b from-green-200 to-green-400 rounded-full mx-auto animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/4 w-14 h-14 opacity-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="relative">
            <div className="w-11 h-7 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full mx-auto animate-pulse"></div>
            <div className="w-9 h-5 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 rounded-full mx-auto -mt-2 animate-pulse" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute top-1 left-2.5 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
            <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '1.1s'}}></div>
            <div className="absolute top-2 left-5 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-7 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full mx-auto animate-pulse" style={{animationDelay: '0.9s'}}></div>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 w-10 h-10 opacity-30 animate-float" style={{animationDelay: '3s'}}>
          <div className="relative">
            <div className="w-8 h-5 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full mx-auto animate-pulse"></div>
            <div className="w-6 h-3 bg-gradient-to-r from-orange-300 via-red-400 to-pink-400 rounded-full mx-auto -mt-1 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-2 right-1.5 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1.3s'}}></div>
            <div className="w-2 h-5 bg-gradient-to-b from-lime-200 to-lime-400 rounded-full mx-auto animate-pulse" style={{animationDelay: '1.1s'}}></div>
          </div>
        </div>

        {/* Small floating mushrooms */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 opacity-40 animate-float" style={{animationDelay: '4s'}}>
          <div className="relative">
            <div className="w-5 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto animate-pulse"></div>
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1.5 h-3 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full mx-auto animate-pulse" style={{animationDelay: '0.7s'}}></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 opacity-35 animate-float" style={{animationDelay: '5s'}}>
          <div className="relative">
            <div className="w-6 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mx-auto animate-pulse"></div>
            <div className="absolute top-1 left-1.5 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
            <div className="w-2 h-4 bg-gradient-to-b from-green-200 to-green-300 rounded-full mx-auto animate-pulse" style={{animationDelay: '0.9s'}}></div>
          </div>
        </div>

        <div className="absolute top-3/4 left-1/5 w-7 h-7 opacity-25 animate-float" style={{animationDelay: '6s'}}>
          <div className="relative">
            <div className="w-5 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
            <div className="absolute top-0.5 left-1.5 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
            <div className="w-1.5 h-4 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full mx-auto animate-pulse" style={{animationDelay: '1.3s'}}></div>
          </div>
        </div>
      </div>

      {/* Psychedelic particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Swirling energy patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-pink-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border-2 border-green-400/20 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Trippy wave effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-y-12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-500/10 to-transparent transform -skew-y-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform skew-x-12 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default TrippyBackground;