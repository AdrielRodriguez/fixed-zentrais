'use client';

import { useEffect, useState } from 'react';

export default function TechScrollWheel() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? Math.min((scrollTop / maxScroll) * 100, 100) : 0;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the position of the scroll indicator ball (moves from top to bottom)
  const ballPosition = scrollProgress * 0.64; // 0-64px range (80px height - 16px for ball space)

  return (
    <div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2"
    >
      {/* Scroll Wheel Container */}
      <div 
        className="relative w-16 h-20 flex items-center justify-center"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Outer Frame - Pink (Media color) */}
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: 'rgba(244, 114, 182, 0.4)',
            background: 'rgba(244, 114, 182, 0.05)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            boxShadow: '0 0 20px rgba(244, 114, 182, 0.2), inset 0 0 20px rgba(244, 114, 182, 0.1)',
          }}
        />

        {/* Middle Frame - Pink */}
        <div
          className="absolute w-12 h-16 rounded-full border"
          style={{
            borderColor: 'rgba(244, 114, 182, 0.5)',
            background: 'transparent',
            boxShadow: '0 0 15px rgba(244, 114, 182, 0.3), inset 0 0 15px rgba(244, 114, 182, 0.1)',
          }}
        />

        {/* Inner Frame - Pink */}
        <div
          className="absolute w-8 h-12 rounded-full border"
          style={{
            borderColor: 'rgba(244, 114, 182, 0.6)',
            background: 'transparent',
            boxShadow: '0 0 10px rgba(244, 114, 182, 0.4)',
          }}
        />

        {/* Smallest Frame - Pink */}
        <div
          className="absolute w-5 h-8 rounded-full border"
          style={{
            borderColor: 'rgba(244, 114, 182, 0.5)',
            background: 'transparent',
            boxShadow: '0 0 8px rgba(244, 114, 182, 0.3)',
          }}
        />

        {/* Scroll Indicator Ball - Moves with scroll */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full transition-all duration-100 ease-out"
          style={{
            background: 'rgba(244, 114, 182, 0.9)',
            boxShadow: '0 0 12px rgba(244, 114, 182, 0.8), 0 0 24px rgba(244, 114, 182, 0.4)',
            top: `${8 + ballPosition}px`,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  );
}
