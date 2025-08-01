import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Create WhatsApp notification sound
    const playWhatsAppSound = () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // WhatsApp-like notification sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    };

    try {
      playWhatsAppSound();
    } catch (error) {
      console.log('Audio not supported');
    }

    const message = encodeURIComponent("Hello! I'm interested in renting a car in Laâyoune. Can you help me?");
    window.open(`https://wa.me/212688972173?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none hover:scale-110 hover:rotate-12"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-125 group-hover:animate-bounce transition-transform duration-300" />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping group-hover:animate-pulse"></div>
      <div className="absolute inset-0 rounded-full bg-green-300 opacity-20 animate-ping animation-delay-200"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        WhatsApp: +212 688 972 173
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;