import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'lg';
}

export const Card: React.FC<CardProps> = ({ children, className = '', shadow = 'sm' }) => {
  const shadowClasses = {
    sm: 'shadow-card',
    lg: 'shadow-card-lg',
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-100 overflow-hidden ${shadowClasses[shadow]} ${className}`}>
      {children}
    </div>
  );
};
