
import type React from 'react';

interface UptekyLogoProps extends React.SVGProps<SVGSVGElement> {
  // Add any specific props if needed
}

export function UptekyLogo({ className, ...props }: UptekyLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175 50" // Adjusted viewBox for better proportions based on image
      className={className}
      aria-label="Upteky Logo"
      {...props}
    >
      <style>
        {`
          .upteky-font {
            font-family: var(--font-inter), Inter, Arial, sans-serif; /* Using Inter from theme */
            font-size: 30px; /* Adjusted font size */
            font-weight: 600; /* Semi-bold, closer to image */
            letter-spacing: -0.35px; /* Fine-tuned letter spacing */
          }
        `}
      </style>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="upteky-font"
        fill="currentColor" // Main text color will be inherited (e.g., text-primary)
      >
        Upt<tspan dy="0.02em">e</tspan>ky {/* Slight dy adjustment for 'e' can fine-tune baseline alignment */}
      </text>
      {/* Orange accent mark as a filled path (parallelogram shape) */}
      {/* Coordinates are estimated to place the accent above the 'e' character */}
      {/* Based on viewBox="0 0 175 50", text-anchor="middle", font-size="30px" */}
      {/* 'e' is the 4th char in "Uptéky". Center of text is roughly x=87.5. 'e' center around x=93-96. */}
      {/* y="50%" (25) is middle. Top of 'e' approx y=25 - (30*0.3 for x-height) = 16. Accent above. */}
      <path
        d="M91.5 13.5 L90 10 L97 8 L98.5 11.5 Z" // Path for the orange accent (slanted rectangle/parallelogram)
        fill="hsl(var(--accent))" // Use accent color from CSS variables
      />
    </svg>
  );
}
