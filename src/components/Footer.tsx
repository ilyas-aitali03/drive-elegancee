import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Car } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-luxury-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-luxury-dark" />
              </div>
              <div className="text-xl font-bold">MoroccoRent</div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Premium car rental service in Morocco. Experience luxury and comfort with our premium fleet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Cars</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-luxury-gold">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Car Rental</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Delivery Service</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Airport Transfer</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Long Term Rental</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-luxury-gold">Contact</h4>
            <div className="space-y-2 text-white/80">
              <div>+212 688 972 173</div>
              <div>info@moroccorent.com</div>
              <div>Laâyoune, Morocco</div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => window.open('https://facebook.com/moroccorent', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://instagram.com/moroccorent', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://twitter.com/moroccorent', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2024 MoroccoRent. {t('rights')}.
          </div>
          <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;