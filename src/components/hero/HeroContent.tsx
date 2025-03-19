import React, { useState, useEffect, useRef } from 'react';
import ContactFormModal from '../common/ContactFormModal';
import { SparklesCore } from '../ui/sparkles';

export default function HeroContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headlineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-32 text-center">
        <div className="relative mb-4">
          <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className={`neon-text ${isVisible ? 'animate-neon' : ''}`}>
              Get The Power Of A Team for Less Than a Persons Salary
            </span>
          </h1>

          {/* Sparkles effect container - moved closer to headline */}
          <div className="relative h-24 w-full">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core sparkles component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={120}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={0.5}
            />

            {/* Radial Gradient */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,black)]"></div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed relative z-20">
          From social media dominance to personalized outreach, I deliver 24/7 automation 
          that scales your brand effortlessly.
        </p>
        
        {/* CTA section */}
        <div className="relative mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 
              text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 
              hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl relative z-10"
          >
            Get Started
          </button>
        </div>
      </div>

      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}