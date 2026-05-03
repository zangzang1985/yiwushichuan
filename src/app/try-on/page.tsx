'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shirt, ArrowLeft, History, Zap, Check, Sparkles, Camera, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGame, TryOnResult } from '@/contexts/GameContext';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/ImageUpload';
import { Progress } from '@/components/ui/progress';

export default function TryOn() {
  const {
    user,
    personImage,
    clothingImage,
    isGenerating,
    history,
    setPersonImage,
    setClothingImage,
    setIsGenerating,
    addToHistory,
  } = useGame();
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleGenerate = async () => {
    if (!personImage || !clothingImage) {
      toast({
        title: 'Missing images',
        description: 'Please upload both your photo and the clothing image.',
        type: 'destructive',
      });
      return;
    }

    if (user && !user.isSubscribed && user.freeTriesRemaining <= 0) {
      toast({
        title: 'Free trial ended',
        description: 'Please subscribe to continue using VirtualTryOn.',
        type: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setResultImage(null);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 8;
      });
    }, 800);

    try {
      console.log('[TryOn] Calling API...');

      const response = await fetch('/api/try-on', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personImage,
          clothingImage,
        }),
      });

      clearInterval(progressInterval);
      setProgress(100);

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Generation failed');
      }

      console.log('[TryOn] API call successful');

      const result: TryOnResult = {
        id: Date.now().toString(),
        personImage,
        clothingImage,
        resultImage: data.resultUrl,
        clothingType: 'top',
        createdAt: new Date(),
      };

      addToHistory(result);
      setResultImage(data.resultUrl);

      toast({
        title: 'Try-on complete! ✨',
        description: 'Your virtual try-on result is ready.',
      });
    } catch (error) {
      clearInterval(progressInterval);
      console.error('[TryOn] Error:', error);

      let errorMessage = 'Failed to generate try-on. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: 'Generation failed',
        description: errorMessage,
        type: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTryAnother = () => {
    setClothingImage(null);
    setResultImage(null);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-soft opacity-80" />

      <div className="absolute top-20 left-10 w-16 h-16 bg-macaron-pink/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-60 right-20 w-20 h-20 bg-macaron-yellow/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-macaron-mint/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

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
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-600">
              {user.isSubscribed ? (
                <span className="flex items-center gap-2 bg-gradient-to-r from-macaron-mint to-macaron-blue text-white px-4 py-1.5 rounded-full shadow-soft-mint">
                  <Sparkles className="h-4 w-4" />
                  Premium
                </span>
              ) : (
                <span className="bg-macaron-yellow/50 text-slate-700 px-4 py-1.5 rounded-full font-bold">
                  {user.freeTriesRemaining} free tries left 🎁
                </span>
              )}
            </span>
            <Button variant="ghost" asChild className="font-bold hover:bg-macaron-pink/10">
              <Link href="/history">
                <History className="h-5 w-5 mr-2 text-macaron-pink" />
                History
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-10">
        {!resultImage ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-black mb-3 text-macaron-blue">Create Your Perfect Look ✨</h1>
              <p className="text-lg text-slate-500 font-medium">Upload your photo and clothing to see the magic happen!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-macaron-pink to-macaron-peach text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-soft-pink">
                  📸 Your Photo
                </div>
                <ImageUpload
                  label="Your Photo"
                  image={personImage}
                  onImageSelect={setPersonImage}
                />
              </div>
              <div className="relative">
                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-macaron-blue to-macaron-mint text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-soft">
                  👗 Clothing
                </div>
                <ImageUpload
                  label="Clothing Image"
                  image={clothingImage}
                  onImageSelect={setClothingImage}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="text-center pb-2 bg-gradient-to-r from-macaron-pink/10 to-macaron-blue/10">
                <Sparkles className="h-8 w-8 text-macaron-pink mx-auto mb-2 animate-wiggle" />
                <CardTitle className="text-2xl font-black text-slate-700">Your Try-On Result 🌟</CardTitle>
                <CardDescription className="text-slate-500 font-medium">
                  Here's how the clothing looks on you!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-2xl overflow-hidden border-3 border-macaron-blue/20 shadow-soft">
                  <img
                    src={resultImage}
                    alt="Try-on result"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleTryAnother} size="lg" className="font-bold">
                    Try Another Clothing 🎨
                  </Button>
                  <Button variant="secondary" size="lg" asChild className="font-bold">
                    <Link href="/history">View History 📚</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!resultImage && (personImage || clothingImage) && (
          <div className="mt-10 text-center">
            {isGenerating ? (
              <Card className="max-w-md mx-auto border-2 border-macaron-blue/20">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-center flex items-center justify-center gap-2 text-slate-700 font-black">
                    <Zap className="h-6 w-6 animate-pulse text-macaron-yellow" />
                    Generating Magic... ✨
                  </CardTitle>
                  <CardDescription className="text-slate-500 font-medium">
                    This usually takes 10-20 seconds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-macaron-pink/20 via-macaron-blue/20 to-macaron-mint/20 rounded-full p-1">
                    <Progress value={progress} className="w-full h-3 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Button onClick={handleGenerate} size="lg" className="text-lg font-bold shadow-soft-pink hover:shadow-lg">
                <Zap className="h-5 w-5 mr-2" />
                Generate Try-On ✨
              </Button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
