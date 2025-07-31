import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bmwImage from '@/assets/car-hero-bmw.jpg';
import audiImage from '@/assets/car-hero-audi.jpg';
import mercedesImage from '@/assets/car-hero-mercedes.jpg';

const cars = [
  {
    id: 1,
    name: 'BMW 5 Series',
    image: bmwImage,
    category: 'Luxury Sedan'
  },
  {
    id: 2,
    name: 'Audi Q7',
    image: audiImage,
    category: 'Premium SUV'
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    image: mercedesImage,
    category: 'Executive'
  }
];

const CarCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
      <div className="relative w-full h-full">
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">{car.name}</h3>
              <p className="text-luxury-gold text-lg">{car.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {cars.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-luxury-gold' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarCarousel;