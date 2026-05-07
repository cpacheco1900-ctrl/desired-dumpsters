import React from 'react';
import { Zap, Percent, MapPin, Star } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

export const Hero: React.FC = () => {
  const handleScrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Zap, label: 'Same-Day Delivery', value: 'Available' },
    { icon: Percent, label: 'Flat-Rate Pricing', value: 'No Surprises' },
    { icon: MapPin, label: 'Locally Owned', value: 'Since Day 1' },
  ];

  return (
    <section id="home" className="pt-[81px] md:pt-[97px] pb-0 relative overflow-hidden min-h-[92vh] flex items-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/159519/houe-home-modern-building-159519.jpeg?auto=compress&cs=tinysrgb&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/97 via-navy-900/90 to-navy-800/80 z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-white space-y-7 animate-fade-in">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/30 px-3 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (<Star key={i} size={13} className="text-orange-400 fill-orange-400" />))}
                <span className="text-orange-300 text-xs font-semibold ml-1">5-Star Rated</span>
              </div>
              <Badge variant="success" className="text-xs">No Hidden Fees</Badge>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight">
                West Michigan's Most Trusted <span className="text-orange-400">Dumpster Rental</span> &amp; Cleanout Service
              </h1>
              <p className="text-lg text-navy-100 mt-5 leading-relaxed max-w-lg">Fast, reliable dumpster rentals and junk removal with transparent, flat-rate pricing. No surprises, no stress.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={handleScrollToBooking} className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-base transition-all">Book Your Dumpster</Button>
              <Button variant="secondary" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 rounded-xl transition-all"><a href="tel:+16163147778" className="block">Call (616) 314-7778</a></Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-1">
                  <stat.icon className="text-orange-400" size={20} />
                  <p className="text-xs font-bold text-white leading-tight">{stat.label}</p>
                  <p className="text-xs text-navy-200">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img src="/dumpster.jpg" alt="Desired Dumpsters roll-off dumpster rental" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Ready to Book?</p>
                  <p className="text-navy-100 text-xs">Delivery as soon as today</p>
                </div>
                <button onClick={handleScrollToBooking} className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">Get Started</button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-500/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
