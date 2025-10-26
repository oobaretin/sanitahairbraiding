'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';
import { SALON_DATA, SALON_INFO } from '@/data/salonData';

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
          {Object.entries(SALON_DATA).map(([categoryName, categoryData], index) => (
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
