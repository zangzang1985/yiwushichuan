'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shirt, ArrowLeft, Trash2, Sparkles, Heart, History as HistoryIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';

export default function History() {
  const { user, history, removeFromHistory } = useGame();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-soft opacity-80" />

      <div className="absolute top-20 left-10 w-20 h-20 bg-macaron-pink/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-60 right-20 w-24 h-24 bg-macaron-yellow/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-macaron-mint/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      <header className="relative z-10 bg-white/70 backdrop-blur-md border-b border-white/30 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-macaron-blue/10">
              <Link href="/try-on">
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-macaron-pink to-macaron-blue rounded-full flex items-center justify-center shadow-soft-pink">
                <Shirt className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black text-slate-700">VirtualTryOn</span>
            </div>
          </div>
          <Button asChild className="font-bold">
            <Link href="/try-on">Try New Outfit ✨</Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-3 text-macaron-blue">Your Try-On History 💜</h1>
          <p className="text-lg text-slate-500 font-medium">All your amazing looks in one place!</p>
        </div>

        {history.length === 0 ? (
          <Card className="max-w-md mx-auto text-center border-2 border-macaron-blue/20">
            <CardHeader className="pb-2">
              <div className="w-20 h-20 bg-gradient-to-br from-macaron-pink to-macaron-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft-pink">
                <Heart className="h-10 w-10 text-white animate-wiggle" />
              </div>
              <CardTitle className="text-2xl font-black text-slate-700">No history yet 💭</CardTitle>
              <CardDescription className="text-slate-500 font-medium">
                Start trying on clothes to see your history here.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="font-bold shadow-soft-pink hover:shadow-lg">
                <Link href="/try-on">Try Now 🌟</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.map((item) => (
              <Card key={item.id} className="overflow-hidden border-2 border-macaron-blue/10 hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-3 bg-gradient-to-r from-macaron-pink/10 to-macaron-blue/10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-black text-slate-700 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-macaron-pink" />
                      {item.clothingType.charAt(0).toUpperCase() + item.clothingType.slice(1)}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromHistory(item.id)}
                      className="h-9 w-9 rounded-full bg-gradient-to-r from-red-100 to-pink-100 hover:from-red-200 hover:to-pink-200 text-red-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <HistoryIcon className="h-3 w-3" />
                    {item.createdAt.toLocaleDateString()} {item.createdAt.toLocaleTimeString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-macaron-blue/10 shadow-soft">
                      <img
                        src={item.personImage}
                        alt="Original"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-macaron-pink/10 shadow-soft-pink">
                      <img
                        src={item.clothingImage}
                        alt="Clothing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-3 aspect-video rounded-xl overflow-hidden border-2 border-macaron-mint/20 shadow-soft-mint">
                    <img
                      src={item.resultImage}
                      alt="Result"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
