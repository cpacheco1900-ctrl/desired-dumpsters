import React, { useState } from 'react';
import { X } from 'lucide-react';

export const SpringPromo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="flex-1 font-semibold text-sm md:text-base text-center">
          🌱 Spring Cleanup Special! Get <strong>$20 off</strong> any 15 or 20 yard dumpster rental. Limited time offer, call to book.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 ml-4 text-white hover:text-green-100 transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
