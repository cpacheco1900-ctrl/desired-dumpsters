import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 font-display';

  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95',
    secondary: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 active:scale-95',
    phone: 'text-orange-500 hover:text-orange-600 underline font-semibold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
