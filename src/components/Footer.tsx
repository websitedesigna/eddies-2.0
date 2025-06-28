import React from 'react';
import { Leaf, Mail, Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Trippy background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-xl animate-spin"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-600 via-purple-600 to-pink-600 p-2 rounded-lg animate-pulse">
                <Leaf className="h-6 w-6 text-white transform rotate-12" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  GreenChef
                </h3>
                <p className="text-xs text-emerald-400">Cannabis Culinary Guide</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted resource for safe, delicious cannabis cooking with precise dosing and expert guidance.
            </p>
            <div className="text-xs text-purple-300 italic">
              🌿 Crafted with passion by{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Riley Oliver
              </span>{' '}
              🌿
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#recipes" className="text-gray-300 hover:text-emerald-400 transition-colors hover:animate-pulse">Recipe Collection</a></li>
              <li><a href="#calculator" className="text-gray-300 hover:text-purple-400 transition-colors hover:animate-pulse">THC Calculator</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-pink-400 transition-colors hover:animate-pulse">Education Hub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors hover:animate-pulse">Dosing Guide</a></li>
            </ul>
          </div>

          {/* Safety */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Safety First
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors hover:animate-pulse">Consumption Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors hover:animate-pulse">Storage Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors hover:animate-pulse">Legal Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors hover:animate-pulse">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4 text-emerald-400 animate-pulse" />
                <span className="text-gray-300">roswebsitedesign@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm hover:text-purple-400 transition-colors">
                <Shield className="h-4 w-4 text-purple-400 animate-pulse" />
                <span className="text-gray-300">Safety & Privacy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 GreenChef by Riley Oliver. All rights reserved. Use responsibly and in accordance with local laws.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for the cannabis community by</span>
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Riley Oliver
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-purple-800 rounded-lg border border-purple-600">
          <p className="text-xs text-gray-300 text-center leading-relaxed">
            <strong>Important:</strong> This website is for educational purposes only. Cannabis consumption may be illegal in your jurisdiction. 
            Always follow local laws and consume responsibly. Consult with healthcare professionals before using cannabis, 
            especially if you have medical conditions or take medications. Keep all cannabis products away from children and pets.
            <br />
            <span className="text-purple-300 italic mt-2 block">
              Website designed and developed by Riley Oliver with love for the cannabis community 🌿✨
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
