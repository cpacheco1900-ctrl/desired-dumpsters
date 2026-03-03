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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-500 shadow-lg' : 'bg-navy-500'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">
            <div className="flex items-center gap-2">
              <img
                src="/Final_PnG_Red_Dumpster_transparent.png"
                alt="Desired Dumpsters"
               className="h-32 md:h-40 w-auto object-contain"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:text-orange-400 font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:+16163449894"
                className="hidden md:flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                <Phone size={20} />
                (616) 344-9894
              </a>
              <Button
                variant="secondary"
                size="md"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#booking');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden md:inline-block border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-navy-500"
              >
                BOOK NOW
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-navy-500 shadow-lg slide-in-drawer">
            <nav className="flex flex-col gap-4 p-6 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:text-orange-400 font-semibold text-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-navy-400 pt-6 mt-2">
                <a
                  href="tel:+16163449894"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-lg mb-4"
                >
                  <Phone size={20} />
                  (616) 344-9894
                </a>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const element = document.querySelector('#booking');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-navy-500"
                >
                  BOOK NOW
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        .slide-in-drawer {
          animation: slideInRight 0.3s ease-out;
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
