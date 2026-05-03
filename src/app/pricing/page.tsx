'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Shirt, Check, ArrowLeft, Zap, Star, Sparkles, Crown } from 'lucide-react';
import Link from 'next/link';
import { useGame } from '@/contexts/GameContext';
import { useToast } from '@/hooks/use-toast';

export default function Pricing() {
  const { user, setUser } = useGame();
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (user) {
      setUser({
        ...user,
        isSubscribed: true,
      });
      toast({
        title: 'Welcome to Premium! 🎉',
        description: 'You now have unlimited try-ons.',
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90" />

      <div className="absolute top-20 left-10 w-24 h-24 bg-macaron-pink/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-60 right-20 w-32 h-32 bg-macaron-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-macaron-yellow/40 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-40 w-28 h-28 bg-macaron-mint/30 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />

      <header className="relative z-10 bg-white/70 backdrop-blur-md border-b border-white/30 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-macaron-blue/10">
              <Link href="/">
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
          <Button variant="ghost" asChild className="font-bold hover:bg-macaron-pink/10">
            <Link href="/try-on">Try Now ✨</Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6 shadow-soft">
            <Sparkles className="h-4 w-4 text-macaron-pink" />
            <span className="text-sm font-bold text-slate-600">Simple & Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-macaron-blue">Choose Your Plan 💜</h1>
          <p className="text-xl text-slate-500 font-medium">
            Start free, upgrade when you're ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-macaron-blue/20 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-macaron-blue to-macaron-mint rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-black text-slate-700">Free</CardTitle>
              <CardDescription className="text-slate-500 font-medium">Perfect to get started</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-black text-slate-700">$0</span>
                <span className="text-slate-400 font-medium">/forever</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 bg-macaron-blue/5 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-blue to-macaron-mint rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-slate-600">5 free try-ons</span>
              </div>
              <div className="flex items-center gap-3 bg-macaron-pink/5 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-pink to-macaron-peach rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-slate-600">Save your history</span>
              </div>
              <div className="flex items-center gap-3 bg-macaron-yellow/5 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-yellow to-macaron-cream rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-slate-700" />
                </div>
                <span className="font-medium text-slate-600">All clothing types supported</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full text-base font-bold" asChild>
                <Link href="/login">Get Started 🎀</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-3 border-macaron-pink/40 relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-soft-pink">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-macaron-pink to-macaron-blue text-white px-6 py-2 rounded-b-full text-sm font-bold flex items-center gap-2 shadow-lg">
              <Crown className="h-4 w-4" />
              Most Popular ⭐
            </div>
            <CardHeader className="text-center pb-2 pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-macaron-pink to-macaron-peach rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft-pink animate-wiggle">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-black text-slate-700">Premium</CardTitle>
              <CardDescription className="text-slate-500 font-medium">For fashion enthusiasts</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-black text-macaron-blue">$9.99</span>
                <span className="text-slate-400 font-medium">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-macaron-yellow/20 to-macaron-cream/20 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-yellow to-macaron-cream rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-slate-700" />
                </div>
                <span className="font-bold text-slate-700">Unlimited try-ons ⚡</span>
              </div>
              <div className="flex items-center gap-3 bg-macaron-mint/10 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-mint to-macaron-blue rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-slate-600">Save unlimited history</span>
              </div>
              <div className="flex items-center gap-3 bg-macaron-pink/5 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-pink to-macaron-peach rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-slate-600">Priority processing</span>
              </div>
              <div className="flex items-center gap-3 bg-macaron-blue/5 rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-macaron-blue to-macaron-mint rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-slate-600">Early access to new features</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg font-bold shadow-soft-pink hover:shadow-lg" onClick={handleSubscribe}>
                {user?.isSubscribed ? 'You are Premium! 🎉' : 'Subscribe Now ✨'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
