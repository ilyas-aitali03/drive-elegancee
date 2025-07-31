import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Users, Settings } from 'lucide-react';
import clioImage from '@/assets/car-clio.jpg';
import peugeotImage from '@/assets/car-peugeot.jpg';
import toyotaImage from '@/assets/car-toyota.jpg';

const CarFleet: React.FC = () => {
  const { t } = useLanguage();

  const cars = [
    {
      id: 1,
      name: 'Renault Clio',
      category: t('economy'),
      image: clioImage,
      price: '25',
      specs: {
        transmission: t('manual'),
        doors: 5,
        seats: 5
      },
      popular: true
    },
    {
      id: 2,
      name: 'Peugeot 308',
      category: t('compact'),
      image: peugeotImage,
      price: '35',
      specs: {
        transmission: t('automatic'),
        doors: 5,
        seats: 5
      },
      popular: false
    },
    {
      id: 3,
      name: 'Toyota Land Cruiser',
      category: t('suv'),
      image: toyotaImage,
      price: '85',
      specs: {
        transmission: t('automatic'),
        doors: 5,
        seats: 7
      },
      popular: true
    }
  ];

  const handleWhatsAppBooking = (carName: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in renting the ${carName}. Can you provide more details?`);
    window.open(`https://wa.me/212600000000?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-dark mb-4 fade-in-up">
            {t('carsTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 fade-in-up">
            {t('carsSubtitle')}
          </p>
          <div className="w-20 h-1 bg-luxury-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group relative bg-white rounded-3xl overflow-hidden hover-lift transition-all duration-500 border border-gray-100 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {car.popular && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-luxury-gold text-luxury-dark font-semibold px-3 py-1">
                    Popular
                  </Badge>
                </div>
              )}

              {/* Car Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Car Details */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-luxury-dark group-hover:text-luxury-gold transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{car.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-luxury-gold">
                      ${car.price}
                    </div>
                    <div className="text-sm text-gray-500">{t('perDay')}</div>
                  </div>
                </div>

                {/* Car Specs */}
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 mr-1" />
                    {car.specs.transmission}
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-1" />
                    {car.specs.doors} {t('doors')}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {car.specs.seats} {t('seats')}
                  </div>
                </div>

                {/* Book Button */}
                <Button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="w-full bg-luxury-dark hover:bg-luxury-gold hover:text-luxury-dark text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  {t('reserveNow')}
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All Cars Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark px-8 py-3 text-lg rounded-full transition-all duration-300"
          >
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarFleet;