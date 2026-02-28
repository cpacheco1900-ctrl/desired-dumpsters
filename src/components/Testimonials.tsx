import React from 'react';
import { Star } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Holland, MI',
    text: 'Desired Dumpsters made our garage cleanout stress-free. Same-day delivery, fair pricing, and excellent service. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Mike D.',
    location: 'Zeeland, MI',
    text: 'The team was professional and punctual. They didn\'t just drop off a dumpster—they actually cared about protecting my driveway.',
    rating: 5,
  },
  {
    name: 'Jason R.',
    location: 'Grand Rapids, MI',
    text: 'Best dumpster rental experience I\'ve had. No surprises, no hidden fees, just honest service at a fair price.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section bgColor="white">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What Customers Say</h2>
          <p className="text-lg text-gray-600">Real feedback from real customers in West Michigan</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="p-8 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-gray-700 italic">{testimonial.text}</p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
