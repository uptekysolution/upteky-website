'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// --- Component Interfaces ---
interface ScrollStackProps {
  children: React.ReactNode;
  /** A number that determines how much scroll distance is required for the animation. Higher is slower. */
  scrollSpeed?: number;
  className?: string;
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
}

// --- Child Component (Card Wrapper) ---
export const ScrollStackItem = ({ children, className = '' }: ScrollStackItemProps) => (
  <div
    className={`scroll-stack-card absolute top-0 left-0 h-full w-full ${className}`.trim()}
  >
    {children}
  </div>
);

// --- Main Component ---
const ScrollStack = ({ children, scrollSpeed = 300, className = '' }: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use a GSAP context for safe cleanup
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
      const cardCount = cards.length;

      if (cardCount < 2) return;

      // Set initial z-index for correct visual stacking
      cards.forEach((card, index) => {
        gsap.set(card, { zIndex: cardCount - index });
      });

      // Main timeline for the entire stack animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: wrapperRef.current, // Pin the sticky wrapper
          scrub: 1,
          start: 'top top',
          // Calculate the total scroll distance needed
          end: `+=${(cardCount - 1) * scrollSpeed}`,
        },
      });

      // Animate each card (except the last one which stays in place)
      cards.slice(0, -1).forEach((card, index) => {
        tl.to(
          card,
          {
            // Move the card off-screen upwards
            yPercent: -105,
            ease: 'power1.inOut',
          },
          // Stagger the start time of each animation
          index * (1 / (cardCount - 1))
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, [children, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container relative ${className}`.trim()}
    >
      <div
        ref={wrapperRef}
        className="scroll-stack-cards-wrapper sticky top-0 h-screen w-full overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;