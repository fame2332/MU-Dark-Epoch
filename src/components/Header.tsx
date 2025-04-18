import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="text-yellow-500 mr-2" size={32} />
            <span className="text-2xl font-bold text-white tracking-wider">
              Racer<span className="text-yellow-500">PH</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-yellow-500 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#officers" 
              className="text-white hover:text-yellow-500 transition-colors font-medium"
            >
              Officers
            </a>
            <a 
              href="#rules" 
              className="text-white hover:text-yellow-500 transition-colors font-medium"
            >
              Guild Rules
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-white hover:text-yellow-500 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#officers" 
                className="text-white hover:text-yellow-500 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Officers
              </a>
              <a 
                href="#rules" 
                className="text-white hover:text-yellow-500 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Guild Rules
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;