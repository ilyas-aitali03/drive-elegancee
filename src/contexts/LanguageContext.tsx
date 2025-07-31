import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    cars: 'Cars',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Premium Car Rental',
    heroSubtitle: 'in Morocco',
    heroDescription: 'Experience luxury and comfort with our premium fleet. From business trips to vacation adventures, we have the perfect vehicle for every journey.',
    reserveNow: 'Reserve Now',
    
    // Why Choose Us
    whyChooseTitle: 'Why Choose Us',
    trustTitle: 'Trusted Service',
    trustDesc: 'Over 10 years of reliable car rental service in Morocco',
    deliveryTitle: 'Paid Delivery',
    deliveryDesc: 'We deliver your car wherever you are in major cities for 50 MAD',
    pricesTitle: 'Best Prices',
    pricesDesc: 'Competitive rates with no hidden fees',
    
    // Car Models
    carsTitle: 'Our Fleet',
    carsSubtitle: 'Choose from our premium selection',
    economy: 'Economy',
    compact: 'Compact',
    suv: 'SUV',
    luxury: 'Luxury',
    perDay: '/day',
    automatic: 'Automatic',
    manual: 'Manual',
    doors: 'doors',
    seats: 'seats',
    
    // Delivery
    deliveryToggleTitle: 'Get your car delivered to your address (50 MAD)',
    deliveryInfo: 'Delivery service available within city limits for 50 MAD. Additional charges may apply for locations outside the city.',
    selectLocation: 'Select your location',
    
    // Testimonials
    testimonialsTitle: 'What Our Customers Say',
    testimonial1: 'Excellent service! The car was delivered on time and in perfect condition.',
    testimonial2: 'Professional team and competitive prices. Highly recommended!',
    testimonial3: 'Great experience from booking to return. Will definitely use again.',
    customer1: 'Ahmed M.',
    customer2: 'Sarah L.',
    customer3: 'Mohamed K.',
    
    // Contact
    contactTitle: 'Contact Us',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    location: 'Location',
    
    // Footer
    rights: 'All rights reserved',
    followUs: 'Follow us on social media'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    cars: 'Voitures',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Location de Voitures',
    heroSubtitle: 'Premium au Maroc',
    heroDescription: 'Découvrez le luxe et le confort avec notre flotte premium. Des voyages d\'affaires aux aventures de vacances, nous avons le véhicule parfait pour chaque trajet.',
    reserveNow: 'Réserver',
    
    // Why Choose Us
    whyChooseTitle: 'Pourquoi Nous Choisir',
    trustTitle: 'Service de Confiance',
    trustDesc: 'Plus de 10 ans de service de location fiable au Maroc',
    deliveryTitle: 'Livraison Payante',
    deliveryDesc: 'Nous livrons votre voiture où que vous soyez dans les grandes villes pour 50 MAD',
    pricesTitle: 'Meilleurs Prix',
    pricesDesc: 'Tarifs compétitifs sans frais cachés',
    
    // Car Models
    carsTitle: 'Notre Flotte',
    carsSubtitle: 'Choisissez parmi notre sélection premium',
    economy: 'Économique',
    compact: 'Compacte',
    suv: 'SUV',
    luxury: 'Luxe',
    perDay: '/jour',
    automatic: 'Automatique',
    manual: 'Manuelle',
    doors: 'portes',
    seats: 'places',
    
    // Delivery
    deliveryToggleTitle: 'Faites livrer votre voiture à votre adresse (50 MAD)',
    deliveryInfo: 'Service de livraison disponible dans les limites de la ville pour 50 MAD. Des frais supplémentaires peuvent s\'appliquer pour les emplacements en dehors de la ville.',
    selectLocation: 'Sélectionnez votre emplacement',
    
    // Testimonials
    testimonialsTitle: 'Ce Que Disent Nos Clients',
    testimonial1: 'Excellent service ! La voiture a été livrée à l\'heure et en parfait état.',
    testimonial2: 'Équipe professionnelle et prix compétitifs. Hautement recommandé !',
    testimonial3: 'Excellente expérience de la réservation au retour. Je l\'utiliserai certainement à nouveau.',
    customer1: 'Ahmed M.',
    customer2: 'Sarah L.',
    customer3: 'Mohamed K.',
    
    // Contact
    contactTitle: 'Nous Contacter',
    phone: 'Téléphone',
    whatsapp: 'WhatsApp',
    location: 'Localisation',
    
    // Footer
    rights: 'Tous droits réservés',
    followUs: 'Suivez-nous sur les réseaux sociaux'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    cars: 'السيارات',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'تأجير السيارات',
    heroSubtitle: 'المميز في المغرب',
    heroDescription: 'استمتع بالفخامة والراحة مع أسطولنا المميز. من رحلات العمل إلى مغامرات العطلات، لدينا المركبة المثالية لكل رحلة.',
    reserveNow: 'احجز الآن',
    
    // Why Choose Us
    whyChooseTitle: 'لماذا تختارنا',
    trustTitle: 'خدمة موثوقة',
    trustDesc: 'أكثر من 10 سنوات من خدمة تأجير السيارات الموثوقة في المغرب',
    deliveryTitle: 'توصيل مدفوع',
    deliveryDesc: 'نوصل سيارتك أينما كنت في المدن الكبرى مقابل 50 درهم',
    pricesTitle: 'أفضل الأسعار',
    pricesDesc: 'أسعار تنافسية بدون رسوم خفية',
    
    // Car Models
    carsTitle: 'أسطولنا',
    carsSubtitle: 'اختر من مجموعتنا المميزة',
    economy: 'اقتصادية',
    compact: 'مدمجة',
    suv: 'دفع رباعي',
    luxury: 'فاخرة',
    perDay: '/يوم',
    automatic: 'أوتوماتيك',
    manual: 'يدوي',
    doors: 'أبواب',
    seats: 'مقاعد',
    
    // Delivery
    deliveryToggleTitle: 'احصل على سيارتك مُسلمة إلى عنوانك (50 درهم)',
    deliveryInfo: 'خدمة التوصيل متاحة داخل حدود المدينة مقابل 50 درهم. قد تنطبق رسوم إضافية للمواقع خارج المدينة.',
    selectLocation: 'اختر موقعك',
    
    // Testimonials
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    testimonial1: 'خدمة ممتازة! تم تسليم السيارة في الوقت المحدد وفي حالة مثالية.',
    testimonial2: 'فريق محترف وأسعار تنافسية. أنصح به بشدة!',
    testimonial3: 'تجربة رائعة من الحجز إلى الإرجاع. سأستخدمه بالتأكيد مرة أخرى.',
    customer1: 'أحمد م.',
    customer2: 'سارة ل.',
    customer3: 'محمد ك.',
    
    // Contact
    contactTitle: 'اتصل بنا',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    location: 'الموقع',
    
    // Footer
    rights: 'جميع الحقوق محفوظة',
    followUs: 'تابعونا على وسائل التواصل الاجتماعي'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};