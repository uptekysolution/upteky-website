
"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  targetValueString: string;
  isVisible: boolean;
  duration?: number;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetValueString,
  isVisible,
  duration = 1500, // Default duration 1.5 seconds
  className,
}) => {
  const [currentDisplay, setCurrentDisplay] = useState('');
  const requestRef = useRef<number>();
  
  const [numericTarget, setNumericTarget] = useState(0);
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    let p = "";
    let s = "";
    let numStr = targetValueString;

    // Extract prefix (e.g., "₹")
    if (targetValueString.startsWith("₹")) {
      p = "₹";
      numStr = targetValueString.substring(1);
    }

    // Extract suffix (e.g., "%")
    // Ensure to check numStr for suffix, not targetValueString if prefix was stripped
    if (numStr.endsWith("%")) {
      s = "%";
      numStr = numStr.substring(0, numStr.length - 1);
    }

    // Remove commas and parse the number
    const finalNumeric = parseInt(numStr.replace(/,/g, ''), 10);

    setPrefix(p);
    setSuffix(s);
    setNumericTarget(isNaN(finalNumeric) ? 0 : finalNumeric);
    
    // Set initial display based on visibility (will be updated by animation effect)
    setCurrentDisplay(p + (isNaN(finalNumeric) ? '0' : '0') + s);

  }, [targetValueString]);

  useEffect(() => {
    if (isVisible) {
      let currentAnimatedValue = 0; 
      setCurrentDisplay(prefix + Math.floor(currentAnimatedValue).toLocaleString() + suffix); // Start from 0

      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        currentAnimatedValue = progress * numericTarget;
        
        setCurrentDisplay(prefix + Math.floor(currentAnimatedValue).toLocaleString() + suffix);

        if (progress < 1) {
          requestRef.current = requestAnimationFrame(animate);
        } else {
          setCurrentDisplay(prefix + numericTarget.toLocaleString() + suffix); // Ensure final value
        }
      };
      requestRef.current = requestAnimationFrame(animate);
    } else {
      // If not visible, display the final target value directly (or 0 if target is 0)
      const displayVal = numericTarget === 0 ? '0' : numericTarget.toLocaleString();
      setCurrentDisplay(prefix + displayVal + suffix);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, numericTarget, prefix, suffix, duration]);

  return <span className={className}>{currentDisplay}</span>;
};

export default AnimatedNumber;
