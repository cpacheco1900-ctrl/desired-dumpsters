import React from 'react';
import { Zap, Percent, MapPin } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

export const Hero: React.FC = () => {
  const handleScrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Zap, label: 'Same-Day Delivery', value: 'Available' },
    { icon: Percent, label: 'Flat-Rate Pricing', value: 'No Surprises' },
    { icon: MapPin, label: 'Locally Owned', value: 'Since Day 1' },
  ];

  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pb-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/159519/houe-home-modern-building-159519.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-600/95 to-navy-500/85 z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div>
              <Badge variant="success" className="mb-4">
                No Hidden Fees
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                West Michigan's Most Trusted Dumpster Rental & Cleanout Service
              </h1>
              <p className="text-xl text-navy-100 mt-4 leading-relaxed">
                Fast, reliable dumpster rentals and junk removal with transparent, flat-rate pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={handleScrollToBooking}>
                Book Your Dumpster
              </Button>
              <Button variant="secondary" size="lg" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-navy-500">
                <a href="tel:+16163449894" className="block">Call Now</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center md:items-start">
                  <stat.icon className="text-orange-400 mb-2" size={24} />
                  <p className="text-sm font-semibold text-orange-400">{stat.label}</p>
                  <p className="text-xs text-navy-100">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative rounded-xl overflow-hidden shadow-card-lg">
              <img
                src="/dumpster.jpg"
                alt="Desired Dumpsters roll-off dumpster rental"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
