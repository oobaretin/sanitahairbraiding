'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/booking/BookingProvider';
import { 
  HeartIcon, 
  UserGroupIcon, 
  SparklesIcon,
  ShieldCheckIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: HeartIcon,
    title: 'Passion for Beauty',
    description: 'We believe every client deserves to feel beautiful and confident in their own skin.'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Team',
    description: 'Our skilled professionals have years of experience in hair braiding and styling.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Quality',
    description: 'We use only the highest quality hair extensions and professional-grade products.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safe & Clean',
    description: 'Our salon maintains the highest standards of cleanliness and safety protocols.'
  }
];

const galleryImages = [
  {
    id: 1,
    src: '/images/hero-slide-1.png',
    alt: 'Beautiful Hair Braiding Work - Box Braids'
  },
  {
    id: 2,
    src: '/images/hero-slide-2.png',
    alt: 'Professional Hair Styling - Boho Braids'
  },
  {
    id: 3,
    src: '/images/hero-slide-3.png',
    alt: 'Expert Braiding Services - Goddess Braids'
  },
  {
    id: 4,
    src: '/images/hero-slide-4.png',
    alt: 'Stunning Hair Transformations - Faux Locs'
  },
  {
    id: 5,
    src: '/images/hero-slide-5.png',
    alt: 'Premium Hair Care - Cornrows'
  }
];

export const About: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = () => {
    setIsGalleryOpen(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-boldonse font-normal text-4xl md:text-5xl text-secondary-900 mb-6">
              About Sanitahairbraiding
            </h2>
            
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              At Sanitahairbraiding, we are committed to delivering premium hair braiding services 
              designed to enhance and celebrate your individual beauty. We prioritize quality, innovation, 
              and customer satisfaction to ensure every service meets the highest standards of excellence.
            </p>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              We are Professional Braiders with more than 15 Years in Service. Our happiness is 
              the customer happiness. Every appointment is an opportunity to create something 
              beautiful that reflects your unique style and personality, backed by years of 
              expertise and genuine care for our clients. We specialize in accommodating 
              last-minute appointments and providing exceptional service for the whole family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg">
                  Book Your Appointment
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={openGallery}>
                View Gallery
              </Button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-secondary-600 font-medium">Years Experience</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-accent-600 mb-2">500+</div>
                <div className="text-secondary-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-boldonse font-normal text-3xl text-secondary-900 mb-4">
              Why Choose Us
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-lg text-secondary-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeGallery}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                    <h2 className="font-boldonse font-normal text-2xl text-secondary-900">
                      Our Work Gallery
                    </h2>
                    <button
                      onClick={closeGallery}
                      className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200"
                    >
                      <XMarkIcon className="w-6 h-6 text-secondary-500" />
                    </button>
                  </div>

                  {/* Image Display */}
                  <div className="relative">
                    <div className="aspect-[4/3] bg-secondary-100 flex items-center justify-center">
                      <img
                        src={galleryImages[currentImageIndex].src}
                        alt={galleryImages[currentImageIndex].alt}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          console.error('Gallery image failed to load:', galleryImages[currentImageIndex].src);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-700 hover:text-secondary-800 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-700 hover:text-secondary-800 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="p-6 border-t border-secondary-200">
                    <div className="flex justify-center space-x-3 overflow-x-auto">
                      {galleryImages.map((image, index) => (
                        <button
                          key={image.id}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === currentImageIndex
                              ? 'border-primary-500 shadow-lg'
                              : 'border-secondary-200 hover:border-secondary-300'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                    
                    {/* Image Counter */}
                    <div className="text-center mt-4">
                      <span className="text-secondary-600 text-sm">
                        {currentImageIndex + 1} of {galleryImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
