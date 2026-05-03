'use client';

import { Upload, X, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface ImageUploadProps {
  label: string;
  image: string | null;
  onImageSelect: (image: string | null) => void;
}

export function ImageUpload({ label, image, onImageSelect }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onImageSelect(null);
  };

  return (
    <Card className="p-6 border-2 border-macaron-blue/20 shadow-soft">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-black mb-4 text-slate-700">{label}</h3>

        {image ? (
          <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden border-3 border-macaron-blue/30 shadow-soft">
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 p-2 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-full hover:from-red-500 hover:to-pink-500 transition-all shadow-md hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <label className="w-full max-w-xs aspect-square rounded-2xl border-3 border-dashed border-macaron-blue/40 flex flex-col items-center justify-center cursor-pointer hover:border-macaron-pink hover:bg-macaron-pink/5 transition-all duration-300 hover:shadow-soft">
            <div className="w-20 h-20 bg-gradient-to-br from-macaron-blue/20 to-macaron-pink/20 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-10 h-10 text-macaron-blue" />
            </div>
            <span className="text-base font-bold text-slate-500 mb-2">Click to upload</span>
            <span className="text-xs text-slate-400">PNG, JPG, GIF up to 10MB</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>
    </Card>
  );
}
