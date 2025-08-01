
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Upteky AI Solutions',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 bg-background text-foreground">
      <div className="max-w-md w-full">
        <div className="mb-6 sm:mb-8">
          <AlertTriangle className="h-20 w-20 sm:h-24 sm:w-24 text-accent mx-auto animate-pulse" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-accent mb-3 sm:mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
          The page you're looking for doesn't exist or has been moved.
          Don't worry, let's get you back on track.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-semibold"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Go to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
