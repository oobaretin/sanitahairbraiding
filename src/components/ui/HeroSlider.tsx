'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  {
    id: 1,
    src: '/images/hero-slide-1.png?v=1',
    alt: 'Sanitahairbraiding - Beautiful Hair Braiding Work'
  },
  {
    id: 2,
    src: '/images/hero-slide-2.png?v=1',
    alt: 'Sanitahairbraiding - Professional Hair Styling'
  },
  {
    id: 3,
    src: '/images/hero-slide-3.png?v=1',
    alt: 'Sanitahairbraiding - Expert Braiding Services'
  },
  {
    id: 4,
    src: '/images/hero-slide-4.png?v=1',
    alt: 'Sanitahairbraiding - Stunning Hair Transformations'
  },
  {
    id: 5,
    src: '/images/hero-slide-5.png?v=1',
    alt: 'Sanitahairbraiding - Premium Hair Care'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
      {/* Static border container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center">
          {/* Static decorative border */}
          <div className="absolute inset-0 border-4 border-white/20 rounded-2xl z-20" />
        </div>
      </div>

      {/* Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image container with proper positioning */}
            <div className="relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center">
              <img
                src={heroImages[currentIndex].src}
                alt={heroImages[currentIndex].alt}
                className="w-full h-full object-contain object-center rounded-2xl shadow-2xl"
                onError={(e) => {
                  console.error('❌ Image failed to load:', heroImages[currentIndex].src);
                  console.error('Error details:', e);
                  // Hide the image and show fallback background
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('✅ Image loaded successfully:', heroImages[currentIndex].src);
                }}
              />
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl z-10" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};
