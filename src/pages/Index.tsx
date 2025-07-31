import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CarFleet from '@/components/CarFleet';
import DeliverySection from '@/components/DeliverySection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <WhyChooseUs />
        <div id="fleet">
          <CarFleet />
        </div>
        <div id="delivery">
          <DeliverySection />
        </div>
        <Testimonials />
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
