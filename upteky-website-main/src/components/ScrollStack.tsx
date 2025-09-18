'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStackItem = ({ children, className = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${className}`.trim()}>{children}</div>
);

const ScrollStack = ({ children, className = '' }: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cardsContainer = cardsRef.current;
    
    if (!container || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll('.scroll-stack-card');
    const cardCount = cards.length;

    // Set initial positions for stacked cards
    gsap.set(cards, {
      y: (index: number) => index * 20, // 20px vertical offset between cards
      x: (index: number) => index * 10, // 10px horizontal offset for stacking effect
      scale: (index: number) => 1 - (index * 0.05), // Scale reduction for depth
      zIndex: (index: number) => cardCount - index, // Higher z-index for cards on top
      transformOrigin: 'center top'
    });

    // Create ScrollTrigger for the stacked animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      end: 'bottom 20%',
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSteps = cardCount - 1;
        
        cards.forEach((card, index) => {
          if (index === 0) return; // First card stays in place
          
          const stepProgress = Math.min(progress * totalSteps, index);
          const clampedProgress = Math.max(0, Math.min(1, stepProgress - (index - 1)));
          
          // Calculate final position with stacking offset
          const finalY = index * 20;
          const finalX = index * 10;
          const finalScale = 1 - (index * 0.05);
          
          // Animate to final position
          gsap.to(card, {
            y: finalY * clampedProgress,
            x: finalX * clampedProgress,
            scale: 1 - (1 - finalScale) * clampedProgress,
            duration: 0.1,
            ease: "none"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`.trim()}>
      <div ref={cardsRef} className="scroll-stack-cards">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
