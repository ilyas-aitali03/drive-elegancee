import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
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
        <HeroSection />
        <WhyChooseUs />
        <CarFleet />
        <DeliverySection />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
