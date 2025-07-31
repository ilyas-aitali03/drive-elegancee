import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' }
  ];

  return (
    <div className="flex items-center space-x-1 bg-luxury-dark/20 backdrop-blur-md rounded-full p-1 border border-white/10">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === lang.code
              ? 'bg-luxury-gold text-luxury-dark shadow-lg'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;