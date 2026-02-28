import React from 'react';
import { Container, Trash2, CheckCircle } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';

const services = [
  {
    title: 'Dumpster Rentals',
    description: 'Convenient roll-off dumpsters for any size project',
    icon: Container,
    features: ['15-yard and 20-yard sizes', '3-day rental periods', 'Same/next-day delivery', 'Driveway-friendly'],
    cta: 'See Pricing',
    ctaHref: '#pricing',
  },
  {
    title: 'Junk Removal & Cleanout Services',
    description: 'Full-service cleanouts for homes and businesses',
    icon: Trash2,
    features: ['Residential cleanouts', 'Estate sales prep', 'Garage & basement cleanup', 'Furniture removal'],
    cta: 'Get a Free Quote',
    ctaHref: '#contact',
  },
];

export const Services: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="services" bgColor="light">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Choose the perfect solution for your cleanup needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} shadow="lg" className="hover:shadow-card-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="text-orange-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900">{service.title}</h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => handleNavClick(service.ctaHref)}
                >
                  {service.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
