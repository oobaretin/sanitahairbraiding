'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
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
    description: 'We use only the highest quality hair extensions and professional-grade products.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safe & Clean',
    description: 'Our salon maintains the highest standards of cleanliness and safety protocols.'
  }
];

export const About: React.FC = () => {
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
              <Button size="lg">
                Meet Our Team
              </Button>
              <Button variant="outline" size="lg">
                Our Story
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
    </section>
  );
};
