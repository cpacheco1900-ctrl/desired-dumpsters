import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Service Areas', href: '#areas' },
  { name: 'Why Us', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/98 backdrop-blur-sm shadow-xl border-b border-navy-700' : 'bg-navy-900'}`}>
        <div className="bg-orange-500 h-1 w-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
              <img src="/desired-logo-white.png" alt="Desired Dumpsters" className="h-10 md:h-12 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base md:text-lg tracking-wide">Dumpsters</span>
                <span className="text-orange-400 text-xs tracking-widest uppercase font-semibold">West Michigan</span>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-navy-100 hover:text-orange-400 font-medium text-sm tracking-wide transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="tel:+16163147778" className="hidden md:flex items-center gap-2 bg-navy-700 hover:bg-navy-600 px-4 py-2 rounded-lg text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all">
                <Phone size={16} />
                (616) 314-7778
              </a>
              <Button variant="secondary" size="md" onClick={(e) => { e.preventDefault(); const el = document.querySelector('#booking'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hidden md:inline-block bg-orange-500 hover:bg-orange-400 text-white border-0 font-bold text-sm px-5 py-2.5 rounded-lg shadow-md transition-all">
                BOOK NOW
              </Button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 rounded-lg hover:bg-navy-700 transition-colors">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-navy-900 shadow-2xl border-l border-navy-700 slide-in-drawer">
            <div className="flex items-center justify-between p-5 border-b border-navy-700">
              <img src="/desired-logo-white.png" alt="Desired Dumpsters" className="h-8 w-auto" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-1"><X size={22} /></button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-navy-100 hover:text-orange-400 hover:bg-navy-800 font-medium text-base px-4 py-3 rounded-lg transition-all">
                  {link.name}
                </a>
              ))}
              <div className="border-t border-navy-700 pt-4 mt-3 space-y-3 px-2">
                <a href="tel:+16163147778" className="flex items-center gap-2 text-orange-400 font-semibold text-base"><Phone size={18} />(616) 314-7778</a>
                <Button variant="secondary" size="md" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); const el = document.querySelector('#booking'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-orange-500 hover:bg-orange-400 text-white border-0 font-bold">
                  BOOK NOW
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
      <style>{`
        .slide-in-drawer { animation: slideInRight 0.25s ease-out; }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
    </>
  );
};
