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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
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
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl z-20" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary-700 hover:text-primary-800 backdrop-blur-sm rounded-full p-2 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary-700 hover:text-primary-800 backdrop-blur-sm rounded-full p-2 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 shadow-lg ${
              index === currentIndex 
                ? 'bg-white scale-125 shadow-xl' 
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 shadow-lg">
        <span className="text-primary-700 text-xs sm:text-sm font-semibold">
          {currentIndex + 1} / {heroImages.length}
        </span>
      </div>
    </div>
  );
};
