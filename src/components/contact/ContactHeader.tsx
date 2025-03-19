import React from 'react';
import { Twitter } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';

export default function ContactHeader() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-6">
        Let's Work Together
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Contact me today to discuss how I can automate your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 max-w-xs bg-gradient-to-r from-red-500 to-red-600 text-white 
            py-4 px-8 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 
            transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          Contact Me
        </button>
        <a
          href="https://x.com/PolatskiD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-xs bg-gradient-to-r from-red-500 to-red-600 text-white 
            py-4 px-8 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 
            transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          DM on Twitter
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}