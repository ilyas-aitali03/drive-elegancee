import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Play } from 'lucide-react';
import CarCarousel from './CarCarousel';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in renting a car in Laâyoune. Can you help me with available options?");
    window.open(`https://wa.me/212688972173?text=${message}`, '_blank');
  };

  const scrollToFleet = () => {
    const element = document.getElementById('fleet');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center luxury-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-luxury-gold/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {t('heroTitle')}
              <span className="block text-luxury-gold text-3xl lg:text-5xl font-light">
                {t('heroSubtitle')}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-lg">
              {t('heroDescription')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)] group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t('reserveNow')}
            </Button>
            
            <Button
              variant="outline"
              onClick={scrollToFleet}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View Fleet
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">10+</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm text-white/60">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">50+</div>
              <div className="text-sm text-white/60">Premium Cars</div>
            </div>
          </div>
        </div>

        {/* Right Content - Car Carousel */}
        <div className="relative lg:scale-110 animate-float">
          <CarCarousel />
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-luxury-gold/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;