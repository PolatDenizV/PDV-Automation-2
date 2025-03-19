import React from 'react';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import LaserEffects from './LaserEffects';

export default function Contact() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]"></div>
      <LaserEffects />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}