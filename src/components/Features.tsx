import React from 'react';
import { DollarSign, Zap, Heart, Truck, Clock, CheckCircle } from 'lucide-react';
import { Section } from './Section';

const features = [
  {
    icon: DollarSign,
    title: 'No Hidden Fees',
    description: 'What we quote is what you pay. Complete pricing transparency.',
  },
  {
    icon: Zap,
    title: 'Fast, Reliable Service',
    description: 'Same-day or next-day delivery available. Punctual pickups every time.',
  },
  {
    icon: Heart,
    title: 'Locally Owned',
    description: 'We are part of your community and committed to exceptional service.',
  },
  {
    icon: Truck,
    title: 'Driveway Friendly',
    description: 'Our professionals protect your property with care and precision.',
  },
  {
    icon: Clock,
    title: 'Flexible Rentals',
    description: 'Simple additional day pricing. Rent as long as you need.',
  },
  {
    icon: CheckCircle,
    title: 'Full-Service Cleanouts',
    description: 'We handle everything from start to finish for complete peace of mind.',
  },
];

export const Features: React.FC = () => {
  return (
    <Section id="features" bgColor="light">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Excellence in service, transparency in pricing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-100">
                    <feature.icon className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
