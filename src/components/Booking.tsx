import React from 'react';
import { Phone } from 'lucide-react';
import { Section } from './Section';

export const Booking: React.FC = () => {
  return (
    <Section id="booking" bgColor="light">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Ready to Book?</h2>
          <p className="text-lg text-gray-600">Schedule your dumpster rental today</p>
        </div>

        <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 md:p-16 text-center min-h-96 flex flex-col items-center justify-center">
          <p className="text-gray-600 mb-6">
            Calendar booking widget will be integrated here with Cal.com
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Placeholder for future booking system integration
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 w-full max-w-sm">
            <p className="text-gray-700 font-semibold mb-2">Call to Book Now</p>
            <a
              href="tel:+16163449894"
              className="inline-flex items-center gap-2 text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
            >
              <Phone size={28} />
              (616) 344-9894
            </a>
            <p className="text-gray-600 text-sm mt-4">Mon-Sat, 7AM-7PM</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
