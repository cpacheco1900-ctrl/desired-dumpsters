import React from 'react';
import { Check } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';

const pricingPlans = [
  {
    name: '15 Yard Dumpster',
    price: 375,
    popular: false,
    features: [
      'Flat-rate delivery included',
      '3-day rental period',
      '$25 per additional day',
      'Great for residential projects',
      'Up to 15-yard capacity',
    ],
  },
  {
    name: '20 Yard Dumpster',
    price: 400,
    popular: false,
    features: [
      'Flat-rate delivery included',
      '3-day rental period',
      '$25 per additional day',
      'Ideal for larger cleanouts',
      'Up to 20-yard capacity',
    ],
  },
];

export const Pricing: React.FC = () => {
  const handleScrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="pricing" bgColor="white">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">What we quote is what you pay. No hidden fees, no surprises.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              shadow={plan.popular ? 'lg' : 'sm'}
              className={`relative overflow-hidden transition-all hover:shadow-card-lg animate-fade-in ${
                plan.popular ? 'md:ring-2 md:ring-orange-500 md:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 space-y-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-orange-500">${plan.price}</span>
                    <span className="text-gray-600 font-semibold">for 3 days</span>
                  </div>
                  <Badge variant="success">No Hidden Fees</Badge>
                </div>

                <div className="rounded-lg overflow-hidden h-48 bg-gray-100">
                  <img
                    src="/dumpster.jpg"
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="lg"
                  className={`w-full ${!plan.popular ? 'border-orange-500 text-orange-500 hover:bg-orange-50' : ''}`}
                  onClick={handleScrollToBooking}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 max-w-2xl mx-auto text-center">
          <p className="text-gray-700 mb-2">
            <span className="font-bold text-lg">Full-Service Cleanouts:</span>
          </p>
          <p className="text-gray-600 mb-4">
            Custom pricing based on project scope. Call us for a free estimate.
          </p>
          <a
            href="tel:+16163449894"
            className="inline-block text-orange-500 font-bold hover:text-orange-600 transition-colors"
          >
            (616) 344-9894
          </a>
        </div>
      </div>
    </Section>
  );
};
