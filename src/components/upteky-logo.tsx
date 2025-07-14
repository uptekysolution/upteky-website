import type React from 'react';
import Image from 'next/image';

interface UptekyLogoProps extends React.HTMLAttributes<HTMLImageElement> {
  // Add any specific props if needed
}

export function UptekyLogo({ className, ...props }: UptekyLogoProps) {
  return (
    <Image
      src="/assets/Upteky Logo.png" // Changed filename to the new PNG file
      alt="Upteky AI Solutions Logo" // Added alt text for accessibility
      width={175} // Initial width based on SVG viewBox, adjust as needed
      height={50} // Initial height based on SVG viewBox, adjust as needed
      className={className} // Apply parent class for sizing
      priority // Consider if this logo is critical for LCP
      {...props}
    />
  );
}
