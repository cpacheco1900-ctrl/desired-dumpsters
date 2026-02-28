import React from 'react';
import { Check } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'popular';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'success', className = '' }) => {
  const variants = {
    success: 'bg-green-50 text-green-600 border border-green-200 flex items-center gap-2',
    popular: 'bg-orange-500 text-white',
  };

  return (
    <div className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${variants[variant]} ${className}`}>
      {variant === 'success' && <Check size={16} className="flex-shrink-0" />}
      {children}
    </div>
  );
};
