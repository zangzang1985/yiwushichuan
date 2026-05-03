'use client';

import * as React from 'react';

export type ToastType = 'default' | 'destructive';

export interface Toast {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: ToastType;
}

export interface ToastContextType {
  toasts: Toast[];
  toast: (toast: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return React.createElement(
    ToastContext.Provider,
    { value: { toasts, toast, dismiss } },
    React.createElement(
      'div',
      {},
      children,
      React.createElement(
        'div',
        { className: 'fixed bottom-4 right-4 z-50 flex flex-col gap-2' },
        toasts.map((toast) => React.createElement(
          'div',
          {
            key: toast.id,
            className: `flex items-center gap-3 rounded-lg border p-4 shadow-lg ${toast.type === 'destructive' ? 'border-red-200 bg-red-50 text-red-900' : 'border-slate-200 bg-white text-slate-900'}`
          },
          React.createElement(
            'div',
            { className: 'flex-1' },
            toast.title && React.createElement('div', { className: 'font-semibold' }, toast.title),
            toast.description && React.createElement('div', { className: 'text-sm opacity-80' }, toast.description)
          ),
          React.createElement(
            'button',
            {
              onClick: () => dismiss(toast.id),
              className: 'text-sm opacity-60 hover:opacity-100'
            },
            '×'
          )
        ))
      )
    )
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
