import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Car, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in renting a car in Laâyoune. Can you help me?");
    window.open(`https://wa.me/212688972173?text=${message}`, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-luxury-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-luxury-dark" />
            </div>
            <div className="text-xl font-bold text-white">MoroccoRent</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {t('cars')}
            </button>
            <button
              onClick={() => scrollToSection('delivery')}
              className="text-white hover:text-luxury-gold transition-colors duration-300"
            >
              Delivery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {t('contact')}
            </button>
            
            <Button
              onClick={handleWhatsAppClick}
              className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              {t('reserveNow')}
            </Button>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-luxury-dark/95 backdrop-blur-md rounded-xl mt-2 p-6 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {t('cars')}
            </button>
            <button
              onClick={() => scrollToSection('delivery')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors duration-300"
            >
              Delivery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {t('contact')}
            </button>
            
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              {t('reserveNow')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;