import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { MapPin, Clock, Phone } from 'lucide-react';

const DeliverySection: React.FC = () => {
  const { t } = useLanguage();
  const [deliveryEnabled, setDeliveryEnabled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [
    'Laâyoune Center',
    'Laâyoune Beach',
    'Laâyoune Airport',
    'Foum El Oued',
    'Boujdour',
    'Tarfaya'
  ];

  return (
    <section className="py-20 luxury-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-luxury-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
              Delivery Service
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto rounded-full mb-8"></div>
          </div>

          {/* Delivery Toggle Card */}
          <div className="glass-effect rounded-3xl p-8 lg:p-12 mb-8 fade-in-up">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {t('deliveryToggleTitle')}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t('deliveryInfo')}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">
                  {deliveryEnabled ? 'Enabled' : 'Disabled'}
                </span>
                <Switch
                  checked={deliveryEnabled}
                  onCheckedChange={setDeliveryEnabled}
                  className="data-[state=checked]:bg-luxury-gold"
                />
              </div>
            </div>
          </div>

          {/* Location Selection */}
          {deliveryEnabled && (
            <div className="glass-effect rounded-3xl p-8 fade-in-up">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-luxury-gold" />
                {t('selectLocation')}
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedLocation === location
                        ? 'border-luxury-gold bg-luxury-gold/20 text-white'
                        : 'border-white/30 text-white/80 hover:border-white/50 hover:bg-white/10'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>

              {selectedLocation && (
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="grid md:grid-cols-3 gap-6 text-white">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-luxury-gold" />
                      <div>
                        <div className="font-semibold">Delivery Time</div>
                        <div className="text-sm text-white/80">30-60 minutes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-luxury-gold" />
                      <div>
                        <div className="font-semibold">Coverage Area</div>
                        <div className="text-sm text-white/80">{selectedLocation} City</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-luxury-gold" />
                      <div>
                        <div className="font-semibold">Contact</div>
                        <div className="text-sm text-white/80">+212 688 972 173</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => {
                       // Create delivery notification sound
                       const playDeliverySound = () => {
                         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                         const oscillator = audioContext.createOscillator();
                         const gainNode = audioContext.createGain();
                         
                         oscillator.connect(gainNode);
                         gainNode.connect(audioContext.destination);
                         
                         // Delivery notification sound
                         oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                         oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
                         oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
                         
                         gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                         gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
                         gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                         
                         oscillator.start(audioContext.currentTime);
                         oscillator.stop(audioContext.currentTime + 0.3);
                       };

                       try {
                         playDeliverySound();
                       } catch (error) {
                         console.log('Audio not supported');
                       }

                      const message = encodeURIComponent(`Hello! I would like to request car delivery to ${selectedLocation} in Laâyoune. Please provide details about available cars and delivery schedule.`);
                       window.open(`https://wa.me/212688972173?text=${message}`, '_blank');
                    }}
                    className="w-full mt-6 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    Request Delivery to {selectedLocation}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;