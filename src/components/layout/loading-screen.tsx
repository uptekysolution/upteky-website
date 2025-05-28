"use client";

import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { UptekyLogo } from '@/components/upteky-logo';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#2d3436] to-[#000000] transition-opacity duration-500 ease-in-out",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <UptekyLogo className="h-12 w-auto mb-6 text-primary" />
      <Loader className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
