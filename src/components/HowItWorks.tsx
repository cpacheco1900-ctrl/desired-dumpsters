import React from 'react';
import { Calendar, Package, CheckCircle2 } from 'lucide-react';
import { Section } from './Section';

const steps = [
  {
    number: 1,
    title: 'Book',
    description: 'Schedule your dumpster rental or cleanout service online or by phone',
    icon: Calendar,
  },
  {
    number: 2,
    title: 'Fill',
    description: 'We deliver your dumpster and you fill it at your own pace',
    icon: Package,
  },
  {
    number: 3,
    title: 'Done',
    description: 'We pick up and haul away your junk. Simple as that!',
    icon: CheckCircle2,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section bgColor="light">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Three simple steps to get your space cleaned up</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col items-center">
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 mx-auto shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex justify-center">
                    <step.icon className="text-navy-900" size={32} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
