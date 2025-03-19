import React from 'react';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image Container */}
      <div className="relative min-h-[90vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/voiceglow-cdn/o/public%2Flkk3vaaz.jpg?alt=media&token=0b50bef7-e0aa-4919-b76e-d0eae7d12fee')`
          }}
        />
        
        {/* Content */}
        <HeroContent />

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Gray gradient transition */}
          <div className="h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}