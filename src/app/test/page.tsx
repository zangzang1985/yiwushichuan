'use client';

import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Test Page</span>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Test Page
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          This is a test page to check if the components are working correctly.
        </p>
      </section>
    </div>
  );
}
