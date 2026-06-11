import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

/**
 * ProgressBar Component
 * Renders a thin, colored bar at the top of the viewport representing page scroll depth.
 * Ideal for long articles or blog views.
 */
export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      } else {
        setScrollProgress(0);
      }
    };

    // Listen to scroll events on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call handler once initially to establish scroll position on load
    handleScroll();

    // Clean up scroll handler on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="progress-bar-container"
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Reading Progress"
    >
      <div 
        className="progress-bar-fill" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
