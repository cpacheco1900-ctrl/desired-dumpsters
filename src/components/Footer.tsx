import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Service Areas', href: '#areas' },
  { name: 'Why Choose Us', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/transparent-logo.png"
                alt="Desired Dumpsters"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-navy-100 text-sm">
              West Michigan's most trusted dumpster rental and junk removal service with transparent, flat-rate pricing.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-navy-100 hover:text-orange-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+16163147778"
                className="flex items-center gap-2 text-navy-100 hover:text-orange-400 transition-colors"
              >
                <Phone size={18} />
                (616) 314-7778
              </a>
              <p className="text-navy-100 text-sm">Mon-Sat, 7AM-7PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">Service Area</h4>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-1" />
              <p className="text-navy-100 text-sm">
                Serving 25+ West Michigan cities including Grand Rapids, Holland, Zeeland, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-navy-200 text-sm">
              &copy; 2026 Desired Dumpsters. All rights reserved.
            </p>
            <div className="text-navy-200 text-sm">
              No Hidden Fees | Transparent Pricing | Locally Owned
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-navy-200 text-sm border-t border-navy-700 pt-6">
            <a href="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-orange-400 transition-colors">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
