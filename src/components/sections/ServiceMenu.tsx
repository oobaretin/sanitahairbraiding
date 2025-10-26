'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';

// Service data structure based on the salon service menu
const SERVICE_DATA = {
  "Box Braids": {
    starting: 180,
    variations: [
      { name: "Small Box Braids", duration: "6-8 hours", price: 180 },
      { name: "Medium Box Braids", duration: "5-7 hours", price: 200 },
      { name: "Large Box Braids", duration: "4-6 hours", price: 220 },
      { name: "Jumbo Box Braids", duration: "3-5 hours", price: 240 },
    ]
  },
  "Boho Braids": {
    starting: 200,
    variations: [
      { name: "Boho Braids Small", duration: "6-8 hours", price: 200 },
      { name: "Boho Braids Medium", duration: "5-7 hours", price: 220 },
      { name: "Boho Braids Large", duration: "4-6 hours", price: 240 },
    ]
  },
  "Goddess Braids": {
    starting: 220,
    variations: [
      { name: "Goddess Braids Small", duration: "7-9 hours", price: 220 },
      { name: "Goddess Braids Medium", duration: "6-8 hours", price: 250 },
      { name: "Goddess Braids Large", duration: "5-7 hours", price: 280 },
    ]
  },
  "Cornrows": {
    starting: 80,
    variations: [
      { name: "Simple Cornrows", duration: "1-2 hours", price: 80 },
      { name: "Design Cornrows", duration: "2-3 hours", price: 120 },
      { name: "Complex Cornrows", duration: "3-4 hours", price: 160 },
    ]
  },
  "Faux Locs": {
    starting: 250,
    variations: [
      { name: "Faux Locs Small", duration: "8-10 hours", price: 250 },
      { name: "Faux Locs Medium", duration: "7-9 hours", price: 280 },
      { name: "Faux Locs Large", duration: "6-8 hours", price: 320 },
    ]
  },
  "Twist Braids": {
    starting: 100,
    variations: [
      { name: "Twist Braids Small", duration: "3-4 hours", price: 100 },
      { name: "Twist Braids Medium", duration: "2-3 hours", price: 120 },
      { name: "Twist Braids Large", duration: "2-3 hours", price: 140 },
    ]
  },
  "Knotless Braids": {
    starting: 130,
    variations: [
      { name: "Knotless Braids Small", duration: "4-6 hours", price: 130 },
      { name: "Knotless Braids Medium", duration: "3-5 hours", price: 150 },
      { name: "Knotless Braids Large", duration: "3-4 hours", price: 170 },
    ]
  },
  "Men's Braids": {
    starting: 60,
    variations: [
      { name: "Men's Cornrows", duration: "1-2 hours", price: 60 },
      { name: "Men's Box Braids", duration: "2-3 hours", price: 80 },
      { name: "Men's Fade with Braids", duration: "2-3 hours", price: 100 },
    ]
  },
  "Children's Braids": {
    starting: 50,
    variations: [
      { name: "Children's Cornrows", duration: "1-2 hours", price: 50 },
      { name: "Children's Box Braids", duration: "2-3 hours", price: 70 },
      { name: "Children's Ponytails", duration: "1 hour", price: 40 },
    ]
  }
};

const SALON_INFO = {
  name: "Sanitahairbraiding",
  phone: "(832) 757-4333",
  email: "info@sanitahairbraiding.com",
  address: "5303 S Mason Rd, Katy, TX 77450",
  location: "Located in: The Brodie at Cinco Ranch Apartments",
  bookingUrl: "#",
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 8:00 PM",
    sunday: "10:00 AM - 7:00 PM"
  }
};

export const ServiceMenu: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleBookingClick = (serviceName: string, variationName: string, price: number) => {
    openBookingModal(`${serviceName} - ${variationName}`);
  };

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-boldonse font-normal text-4xl md:text-5xl text-secondary-900 mb-4">
            Service Menu
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional hair braiding services with transparent pricing. 
            Click on any service to see detailed options and pricing.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(SERVICE_DATA).map(([categoryName, categoryData], index) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryName)}
                  className="w-full px-6 py-4 text-left hover:bg-secondary-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <h3 className="font-boldonse font-normal text-2xl text-secondary-900 mr-4">
                      {categoryName}
                    </h3>
                    <span className="text-lg text-primary-600 font-semibold">
                      Starting at ${categoryData.starting}
                    </span>
                  </div>
                  {expandedCategory === categoryName ? (
                    <ChevronUpIcon className="w-6 h-6 text-secondary-500" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6 text-secondary-500" />
                  )}
                </button>

                {/* Category Content */}
                <AnimatePresence>
                  {expandedCategory === categoryName && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-secondary-200"
                    >
                      <div className="p-6">
                        <div className="grid gap-4">
                          {categoryData.variations.map((variation, variationIndex) => (
                            <motion.div
                              key={variationIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: variationIndex * 0.1 }}
                              className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
                            >
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg text-secondary-900 mb-1">
                                  {variation.name}
                                </h4>
                                <div className="flex items-center text-secondary-600">
                                  <ClockIcon className="w-4 h-4 mr-2" />
                                  <span className="text-sm">{variation.duration}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-primary-600">
                                  ${variation.price}
                                </span>
                                <button
                                  onClick={() => handleBookingClick(categoryName, variation.name, variation.price)}
                                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                                >
                                  Book Now
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="font-boldonse font-normal text-3xl text-secondary-900 mb-4">
              Ready to Book?
            </h3>
            <p className="text-lg text-secondary-600">
              Contact us directly or use our booking system to schedule your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-lg text-secondary-900 mb-2">Call Us</h4>
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {SALON_INFO.phone}
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-lg text-secondary-900 mb-2">Visit Us</h4>
              <p className="text-secondary-600 text-sm">
                {SALON_INFO.address}
              </p>
              <p className="text-secondary-500 text-xs mt-1">
                {SALON_INFO.location}
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-lg text-secondary-900 mb-2">Hours</h4>
              <div className="text-secondary-600 text-sm space-y-1">
                <p>Mon-Fri: {SALON_INFO.hours.weekdays}</p>
                <p>Sat: {SALON_INFO.hours.saturday}</p>
                <p>Sun: {SALON_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => openBookingModal('general')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200"
            >
              Book Your Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
