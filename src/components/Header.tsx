import React, { useState } from 'react';
import { Leaf, Menu, X, Calculator, Book, Users } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Recipes', href: '#recipes', icon: Book },
    { name: 'THC Calculator', href: '#calculator', icon: Calculator },
    { name: 'Education', href: '#education', icon: Users },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-gradient-to-r from-purple-400 via-pink-400 to-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-emerald-600 via-purple-600 to-pink-600 p-2 rounded-lg animate-pulse">
              <Leaf className="h-6 w-6 text-white transform rotate-12" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                GreenChef
              </h1>
              <p className="text-xs text-emerald-600 font-medium">Cannabis Culinary Guide</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 font-medium transform hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
      
      {/* Trippy bottom border */}
      <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 via-yellow-400 via-green-400 to-blue-400 animate-pulse"></div>
    </header>
  );
};

export default Header;