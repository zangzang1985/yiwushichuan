'use client';

import React from 'react';
import { GameProvider } from '@/contexts/GameContext';
import { ToastProvider } from '@/hooks/use-toast';

interface ClientProviderProps {
  children: React.ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  return (
    <GameProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </GameProvider>
  );
}
