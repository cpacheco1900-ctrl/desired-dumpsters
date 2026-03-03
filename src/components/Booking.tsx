import React, { useEffect } from 'react';
import { Section } from './Section';

export const Booking: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section id="booking" bgColor="light">
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Ready to Book?</h2>
          <p className="text-lg text-gray-600">Schedule your dumpster rental today</p>
        </div>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/cpacheco1900/dumpster-delivery?background_color=0f172a&text_color=ffffff&primary_color=ea580c"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </Section>
  );
};
