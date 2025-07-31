import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Truck, DollarSign } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('trustTitle'),
      description: t('trustDesc'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: t('deliveryTitle'),
      description: t('deliveryDesc'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: t('pricesTitle'),
      description: t('pricesDesc'),
      gradient: 'from-luxury-gold to-luxury-gold-light'
    }
  ];

  return (
    <section className="py-20 bg-luxury-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-dark mb-4 fade-in-up">
            {t('whyChooseTitle')}
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover-lift transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-luxury-dark mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-luxury-gold/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;