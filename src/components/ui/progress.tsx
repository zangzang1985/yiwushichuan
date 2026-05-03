'use client';

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative h-3 w-full overflow-hidden rounded-full bg-macaron-blue/20', className)}
      {...props}
    >
      <div
        className="h-full bg-gradient-to-r from-macaron-pink via-macaron-blue to-macaron-mint transition-all duration-300 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  )
);
Progress.displayName = 'Progress';
