'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, User, Zap, Check, Sparkles, Heart, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90" />

      <div className="absolute top-20 left-10 w-20 h-20 bg-macaron-pink/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-macaron-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-macaron-yellow/40 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-40 w-28 h-28 bg-macaron-mint/30 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />

      <header className="relative z-10 bg-white/60 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-macaron-pink to-macaron-blue rounded-full flex items-center justify-center shadow-soft-pink">
              <Shirt className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-black text-slate-700">VirtualTryOn</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="font-bold">
              <Link href="/try-on">Try Now</Link>
            </Button>
            <Button asChild className="font-bold">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 mb-8 shadow-soft">
          <Sparkles className="h-4 w-4 text-macaron-pink" />
          <span className="text-sm font-bold text-slate-600">AI-Powered Virtual Try-On</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 text-macaron-blue">
          Try Clothes Virtually
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 font-semibold">
          Upload your photo and any clothing image. Our AI will show you how it looks on you in seconds! ✨
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg font-bold">
            <Link href="/try-on">Start Free Trial 🎀</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="text-lg font-bold">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </section>

      <section id="features" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-slate-700">Why Choose Us? 💜</h2>
        <p className="text-lg text-slate-500 text-center mb-12 max-w-xl mx-auto">Everything you need for the perfect virtual try-on experience</p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:scale-105 transition-all duration-300 border-2 border-macaron-blue/10">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-macaron-pink to-macaron-peach rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft-pink">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-700">Easy to Use 🎉</CardTitle>
              <CardDescription className="text-slate-500 font-medium">No special photos needed. Upload any picture of yourself.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition-all duration-300 border-2 border-macaron-blue/10">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-macaron-blue to-macaron-mint rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-700">Fast Results ⚡</CardTitle>
              <CardDescription className="text-slate-500 font-medium">Get your try-on preview in just 10-20 seconds.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition-all duration-300 border-2 border-macaron-blue/10">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-macaron-yellow to-macaron-cream rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft-yellow">
                <Check className="h-8 w-8 text-slate-700" />
              </div>
              <CardTitle className="text-xl font-black text-slate-700">Buy with Confidence 🛍️</CardTitle>
              <CardDescription className="text-slate-500 font-medium">See how clothes look on you before making a purchase.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="relative z-10 bg-white/60 backdrop-blur-md py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-slate-700">How It Works 🌈</h2>
          <p className="text-lg text-slate-500 text-center mb-12">Three simple steps to your perfect look</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-macaron-pink to-macaron-blue rounded-full flex items-center justify-center mx-auto mb-5 shadow-soft-pink group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <h3 className="text-xl font-black mb-2 text-slate-700">Upload Your Photo 📸</h3>
              <p className="text-slate-500 font-medium">Take or upload any photo of yourself</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-macaron-blue to-macaron-mint rounded-full flex items-center justify-center mx-auto mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <h3 className="text-xl font-black mb-2 text-slate-700">Add Clothing Image 👗</h3>
              <p className="text-slate-500 font-medium">Upload the clothing you want to try</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-macaron-yellow to-macaron-cream rounded-full flex items-center justify-center mx-auto mb-5 shadow-soft-yellow group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black text-slate-700">3</span>
              </div>
              <h3 className="text-xl font-black mb-2 text-slate-700">Get Your Result ✨</h3>
              <p className="text-slate-500 font-medium">See how it looks on you instantly!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="card-macaron max-w-2xl mx-auto p-10">
            <Heart className="h-12 w-12 text-macaron-pink mx-auto mb-4 animate-wiggle" />
            <h2 className="text-3xl font-black mb-4 text-slate-700">Ready to Transform Your Style?</h2>
            <p className="text-lg text-slate-500 mb-8 font-medium">Join thousands of happy users who found their perfect look with VirtualTryOn</p>
            <Button size="lg" asChild className="text-lg font-bold">
              <Link href="/try-on">Get Started Free 💫</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-white/60 backdrop-blur-md border-t border-white/20 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-macaron-pink to-macaron-blue rounded-full flex items-center justify-center">
                <Shirt className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-black text-slate-700">VirtualTryOn</span>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="font-bold text-slate-500 hover:text-macaron-pink transition">Home</Link>
              <Link href="/try-on" className="font-bold text-slate-500 hover:text-macaron-pink transition">Try On</Link>
              <Link href="/pricing" className="font-bold text-slate-500 hover:text-macaron-pink transition">Pricing</Link>
            </div>
          </div>
          <div className="border-t border-macaron-blue/10 mt-6 pt-6 text-center text-sm text-slate-400 font-medium">
            Made with 💜 © 2024 VirtualTryOn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
