import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="text-yellow-500 mr-2" size={24} />
            <span className="text-xl font-bold text-white">
              Racer<span className="text-yellow-500">PH</span>
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</a>
            <a href="#officers" className="text-gray-400 hover:text-yellow-500 transition-colors">Officers</a>
            <a href="#rules" className="text-gray-400 hover:text-yellow-500 transition-colors">Guild Rules</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 my-8"></div>
        
        <div className="text-center">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> for DARK MU EPOCH players
          </p>
          <p className="mt-2">
            &copy; {currentYear} RacerPH Guild. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;