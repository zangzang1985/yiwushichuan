'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shirt, Mail, Lock, User, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { setUser } = useGame();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      id: '1',
      email,
      name: name || email.split('@')[0],
      isSubscribed: false,
      freeTriesRemaining: 5,
    };

    setUser(user);
    toast({
      title: isLogin ? 'Welcome back! 🎉' : 'Account created! 🎊',
      description: 'You can now start trying on clothes.',
    });
    router.push('/try-on');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90" />

      <div className="absolute top-20 left-10 w-24 h-24 bg-macaron-pink/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-macaron-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-macaron-yellow/40 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-40 w-28 h-28 bg-macaron-mint/30 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-soft-pink border-2 border-macaron-pink/20">
          <CardHeader className="text-center pb-2">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-macaron-pink to-macaron-blue rounded-full flex items-center justify-center shadow-soft-pink">
                <Shirt className="h-7 w-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-black text-slate-700">
              {isLogin ? 'Welcome Back! 👋' : 'Join Us Today! ✨'}
            </CardTitle>
            <CardDescription className="text-slate-500 font-medium text-base">
              {isLogin
                ? 'Welcome back! Please enter your details.'
                : 'Create an account to start trying on clothes.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold text-slate-600">Name</Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-macaron-pink" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-12"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold text-slate-600">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-macaron-blue" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-bold text-slate-600">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-macaron-mint" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full text-lg font-bold shadow-soft-pink hover:shadow-lg">
                {isLogin ? 'Login 🎀' : 'Sign Up 🎉'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-base text-slate-600 font-medium">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                {' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-macaron-pink hover:text-macaron-blue font-bold transition-colors"
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </p>
            </div>

            <div className="mt-5 text-center">
              <Button variant="ghost" asChild className="font-bold text-slate-500 hover:text-macaron-pink">
                <Link href="/">
                  <Sparkles className="h-4 w-4 mr-2 text-macaron-yellow" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
