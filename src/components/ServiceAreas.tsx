import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Section } from './Section';

const cities = [
  'Allendale', 'Byron Center', 'Caledonia', 'Cannon Township', 'Comstock Park',
  'Coopersville', 'East Grand Rapids', 'Forest Hills', 'Fruitport', 'Georgetown',
  'Grand Haven', 'Grand Rapids', 'Grandville', 'Holland', 'Hudsonville',
  'Jenison', 'Kent', 'Kentwood', 'Marne', 'Muskegon',
  'Muskegon Heights', 'Norton Shores', 'Nunica', 'Rockford', 'Sparta',
  'Tallmadge', 'Walker', 'Wayland', 'Wyoming', 'Zeeland'
];

export const ServiceAreas: React.FC = () => {
  return (
    <Section id="areas" bgColor="white">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Service Areas</h2>
          <p className="text-lg text-gray-600">We proudly serve over 25 West Michigan cities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div
              key={city}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors animate-fade-in"
              style={{ animationDelay: `${(index % 10) * 30}ms` }}
            >
              <MapPin className="text-orange-500 flex-shrink-0" size={20} />
              <span className="text-gray-700 font-medium">{city}</span>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8 text-center">
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Don't see your city listed?</span> That doesn't mean we can't help!
          </p>
          <a
            href="tel:+16163147778"
            className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
          >
            <Phone size={20} />
            Call us at (616) 314-7778 to check availability
          </a>
        </div>
      </div>
    </Section>
  );
};
