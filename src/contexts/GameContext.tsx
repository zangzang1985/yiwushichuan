'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface TryOnResult {
  id: string;
  personImage: string;
  clothingImage: string;
  resultImage: string;
  clothingType: 'top' | 'bottom' | 'dress';
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isSubscribed: boolean;
  freeTriesRemaining: number;
}

interface GameContextType {
  user: User | null;
  personImage: string | null;
  clothingImage: string | null;
  isGenerating: boolean;
  history: TryOnResult[];
  setUser: (user: User | null) => void;
  setPersonImage: (image: string | null) => void;
  setClothingImage: (image: string | null) => void;
  setIsGenerating: (generating: boolean) => void;
  addToHistory: (result: TryOnResult) => void;
  removeFromHistory: (id: string) => void;
  clearSession: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [personImage, setPersonImage] = useState<string | null>(null);
  const [clothingImage, setClothingImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<TryOnResult[]>([]);

  const addToHistory = useCallback((result: TryOnResult) => {
    setHistory(prev => [result, ...prev]);
  }, []);

  const removeFromHistory = useCallback((id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearSession = useCallback(() => {
    setPersonImage(null);
    setClothingImage(null);
  }, []);

  return (
    <GameContext.Provider
      value={{
        user,
        personImage,
        clothingImage,
        isGenerating,
        history,
        setUser,
        setPersonImage,
        setClothingImage,
        setIsGenerating,
        addToHistory,
        removeFromHistory,
        clearSession,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
