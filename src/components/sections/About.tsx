'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/booking/BookingProvider';
import { 
  HeartIcon, 
  UserGroupIcon, 
  SparklesIcon,
  ShieldCheckIcon
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
    description: 'We use only the finest products and techniques to ensure lasting, beautiful results.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trusted Service',
    description: 'Your satisfaction and hair health are our top priorities in every service we provide.'
  }
];

export const About: React.FC = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-boldonse font-normal text-4xl md:text-5xl text-secondary-900 mb-4">
              About Sanitahairbraiding
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We are passionate about creating beautiful, long-lasting hair braiding styles that enhance your natural beauty. 
              Our experienced team is dedicated to providing exceptional service and results that exceed your expectations.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h3 className="font-boldonse font-normal text-3xl text-secondary-900 mb-6">
                Your Hair, Our Passion
              </h3>
              <p className="text-lg text-secondary-700 leading-relaxed mb-8">
                At Sanitahairbraiding, we specialize in creating stunning hair braiding styles that are both 
                beautiful and long-lasting. Our team of experienced professionals is dedicated to providing 
                you with a service that not only meets but exceeds your expectations. We believe that every 
                client deserves to look and feel their absolute best, and we're here to make that happen.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed mb-8">
                From classic box braids to trendy goddess braids, we create styles that are uniquely 
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
                <Link href="/gallery">
                  <Button variant="outline" size="lg">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-secondary-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};