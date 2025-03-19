import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export default function Notification({ message, type, isVisible, onClose }: NotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Notification Card */}
      <div className="relative max-w-md w-full mx-4 animate-scale-in">
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl blur-xl ${
          type === 'success' ? 'bg-red-500/50' : 'bg-red-600/50'
        }`} />
        
        {/* Content */}
        <div className={`relative bg-gray-900/90 backdrop-blur-xl border ${
          type === 'success' ? 'border-red-500' : 'border-red-600'
        } rounded-2xl p-6 shadow-2xl`}>
          <div className="flex flex-col items-center text-center gap-4">
            {type === 'success' ? (
              <CheckCircle className="w-12 h-12 text-red-500" />
            ) : (
              <XCircle className="w-12 h-12 text-red-600" />
            )}
            
            <p className="text-xl text-white font-medium">{message}</p>
            
            <button 
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-red-500/20 hover:bg-red-500/30 
                border border-red-500/50 rounded-lg text-red-400 
                hover:text-red-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}