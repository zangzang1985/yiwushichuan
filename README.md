# Virtual Try-On AI Tool

A web-based virtual clothing fitting tool built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Easy to Use**: Upload any photo of yourself and any clothing image
- ⚡ **Fast Results**: Get your try-on preview in seconds
- 📸 **History**: Save and view your past try-on results
- 🔄 **Reusable Person Image**: Upload your photo once and try multiple clothes
- 💰 **Subscription Model**: Free trial with premium upgrade option

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI**: React 19 + Tailwind CSS 4 + shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm

### Installation

1. Install pnpm globally:
```bash
npm install -g pnpm
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── login/            # Login/Signup page
│   ├── try-on/           # Main try-on page
│   ├── history/          # History page
│   └── pricing/          # Pricing page
├── components/
│   ├── ui/               # shadcn/ui components
│   └── ImageUpload.tsx   # Image upload component
├── contexts/
│   └── GameContext.tsx   # Global state management
├── hooks/
│   └── use-toast.ts      # Toast hook
└── lib/
    └── utils.ts          # Utility functions
```

## Usage

1. **Sign Up/Login**: Create an account or login
2. **Upload Your Photo**: Upload any picture of yourself
3. **Upload Clothing**: Upload an image of the clothing you want to try
4. **Generate**: Click "Generate Try-On" to see the result
5. **Try More**: Keep your photo and try different clothes!

## License

MIT
