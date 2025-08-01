import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/212688972173', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+212688972173', '_blank');
  };

  return (
    <section className="py-20 luxury-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 fade-in-up">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-up">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center group cursor-pointer" onClick={handlePhoneClick}>
                  <div className="w-14 h-14 bg-luxury-gold/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-luxury-gold/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t('phone')}</div>
                    <div className="text-white/80">+212 688 972 173</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center group cursor-pointer" onClick={handleWhatsAppClick}>
                  <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t('whatsapp')}</div>
                    <div className="text-white/80">Available 24/7</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center group">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t('location')}</div>
                    <div className="text-white/80">Laâyoune, Morocco</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-white font-semibold mb-4">{t('followUs')}</div>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <Twitter className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in-up">
            <div className="glass-effect rounded-2xl p-8 h-96">
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200" />
                <div className="relative z-10 text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                  <div className="font-semibold">Interactive Map</div>
                  <div className="text-sm">Laâyoune, Morocco</div>
                </div>
                
                {/* Map overlay elements */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-luxury-gold rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="text-center mt-16 fade-in-up">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            
            <Button
              onClick={handlePhoneClick}
              className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;