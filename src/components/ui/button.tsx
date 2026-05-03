'use client';

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'destructive' | 'pink' | 'yellow' | 'mint';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return children;
    }

    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95';

    const variants = {
      default: 'bg-gradient-to-r from-macaron-blue to-macaron-pink text-white rounded-full px-8 py-3 shadow-soft hover:shadow-lg hover:scale-105',
      pink: 'bg-gradient-to-r from-macaron-pink to-macaron-peach text-white rounded-full px-8 py-3 shadow-soft-pink hover:shadow-lg hover:scale-105',
      yellow: 'bg-gradient-to-r from-macaron-yellow to-macaron-cream text-slate-700 rounded-full px-8 py-3 shadow-soft-yellow hover:shadow-lg hover:scale-105',
      mint: 'bg-gradient-to-r from-macaron-mint to-macaron-blue text-white rounded-full px-8 py-3 shadow-soft-mint hover:shadow-lg hover:scale-105',
      secondary: 'bg-white border-3 border-macaron-blue text-macaron-blue rounded-full px-8 py-3 shadow-soft hover:shadow-lg hover:scale-105 hover:bg-macaron-blue hover:text-white',
      ghost: 'bg-transparent text-macaron-blue hover:bg-macaron-blue/10 rounded-full px-6 py-2',
      destructive: 'bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg hover:scale-105',
    };

    const sizes = {
      default: 'h-12 px-6 py-3 text-base',
      sm: 'h-10 px-5 py-2 text-sm rounded-full',
      lg: 'h-14 px-10 py-4 text-lg rounded-full',
      icon: 'h-12 w-12 rounded-full',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
