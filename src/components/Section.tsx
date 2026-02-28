import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  bgColor = 'white'
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
  };

  return (
    <section id={id} className={`${bgClasses[bgColor]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
};
