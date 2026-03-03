import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { Section } from './Section';

const cities = [
  'Allendale', 'Byron Center', 'Comstock Park',
  'Coopersville', 'Fruitport', 'Georgetown',
  'Grand Haven', 'Grand Rapids', 'Grandville', 'Holland', 'Hudsonville',
  'Jenison', 'Kent', 'Kentwood', 'Marne', 'Muskegon',
  'Norton Shores', 'Nunica', 'Walker', 'Wyoming', 'Zeeland',
  'Saugatuck', 'Fennville', 'Allegan'
];

const cityCoords = [
  { name: 'Allendale', lat: 42.9728, lng: -85.9547 },
  { name: 'Byron Center', lat: 42.8128, lng: -85.7247 },
  { name: 'Comstock Park', lat: 43.0467, lng: -85.6736 },
  { name: 'Coopersville', lat: 43.0642, lng: -85.9280 },
  { name: 'Fruitport', lat: 43.1320, lng: -86.1547 },
  { name: 'Georgetown', lat: 42.8956, lng: -85.9547 },
  { name: 'Grand Haven', lat: 43.0631, lng: -86.2283 },
  { name: 'Grand Rapids', lat: 42.9634, lng: -85.6681 },
  { name: 'Grandville', lat: 42.9084, lng: -85.7608 },
  { name: 'Holland', lat: 42.7875, lng: -86.1089 },
  { name: 'Hudsonville', lat: 42.8728, lng: -85.8636 },
  { name: 'Jenison', lat: 42.9081, lng: -85.8269 },
  { name: 'Kent', lat: 43.0000, lng: -85.5500 },
  { name: 'Kentwood', lat: 42.8695, lng: -85.6447 },
  { name: 'Marne', lat: 43.0281, lng: -85.9047 },
  { name: 'Muskegon', lat: 43.2342, lng: -86.2484 },
  { name: 'Norton Shores', lat: 43.1681, lng: -86.2647 },
  { name: 'Nunica', lat: 43.0789, lng: -85.9736 },
  { name: 'Walker', lat: 43.0006, lng: -85.7681 },
  { name: 'Wyoming', lat: 42.9134, lng: -85.7053 },
  { name: 'Zeeland', lat: 42.8128, lng: -86.0172 },
  { name: 'Saugatuck', lat: 42.6556, lng: -86.2025 },
  { name: 'Fennville', lat: 42.5920, lng: -86.1044 },
  { name: 'Allegan', lat: 42.5292, lng: -85.8556 },
];

const MAPS_API_KEY = 'AIzaSyAiUudgZM8gu3C1HunBbRRRpwoLSZIwg8A';
const RED_MARKER = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

export const ServiceAreas: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const google = (window as any).google;
      if (!mapRef.current || !google) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 43.0, lng: -85.9 },
        zoom: 9,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      const bounds = new google.maps.LatLngBounds();

      cityCoords.forEach((city) => {
        const position = { lat: city.lat, lng: city.lng };
        const marker = new google.maps.Marker({
          position,
          map,
          title: city.name,
          icon: RED_MARKER,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="font-weight:600;font-size:14px;padding:4px 8px">${city.name}</div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        bounds.extend(position);
      });

      map.fitBounds(bounds);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).google?.maps) {
      initMap();
    } else {
      const existing = document.getElementById('google-maps-script');
      if (!existing) {
        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        existing.addEventListener('load', initMap);
      }
    }
  }, []);

  return (
    <Section id="areas" bgColor="white">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Service Areas</h2>
          <p className="text-lg text-gray-600">We proudly serve over 20 West Michigan cities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div
              key={city}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors animate-fade-in"
              style={{ animationDelay: `${(index % 10) * 30}ms` }}
            >
              <span className="text-orange-500 flex-shrink-0 text-lg">📍</span>
              <span className="text-gray-700 font-medium">{city}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '500px' }}>
          <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
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
