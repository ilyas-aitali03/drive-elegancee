import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t('customer1'),
      text: t('testimonial1'),
      rating: 5,
      location: 'Casablanca'
    },
    {
      id: 2,
      name: t('customer2'),
      text: t('testimonial2'),
      rating: 5,
      location: 'Marrakech'
    },
    {
      id: 3,
      name: t('customer3'),
      text: t('testimonial3'),
      rating: 5,
      location: 'Rabat'
    }
  ];

  return (
    <section className="py-20 bg-luxury-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-dark mb-4 fade-in-up">
            {t('testimonialsTitle')}
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl p-8 hover-lift transition-all duration-500 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-luxury-gold" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-luxury-gold font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-luxury-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;