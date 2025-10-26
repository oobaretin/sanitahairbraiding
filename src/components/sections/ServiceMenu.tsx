'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';
import { SALON_DATA, SALON_INFO } from '@/data/salonData';

export const ServiceMenu: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedSubcategory(null); // Reset subcategory when category changes
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategory(expandedSubcategory === subcategory ? null : subcategory);
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
                      {Object.keys(categoryData).length} Services
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
                        <div className="space-y-4">
                          {Object.entries(categoryData).map(([subcategoryName, subcategoryData], subIndex) => (
                            <div key={subcategoryName} className="border border-secondary-200 rounded-lg overflow-hidden">
                              {/* Subcategory Header */}
                              <button
                                onClick={() => toggleSubcategory(subcategoryName)}
                                className="w-full px-4 py-3 text-left bg-secondary-50 hover:bg-secondary-100 transition-colors duration-200 flex items-center justify-between"
                              >
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg text-secondary-900">
                                    {subcategoryName}
                                  </h4>
                                  <p className="text-sm text-secondary-600 mt-1">
                                    {subcategoryData.description}
                                  </p>
                                  <span className="text-sm text-primary-600 font-medium">
                                    Starting at ${subcategoryData.starting}
                                  </span>
                                </div>
                                {expandedSubcategory === subcategoryName ? (
                                  <ChevronUpIcon className="w-5 h-5 text-secondary-500" />
                                ) : (
                                  <ChevronDownIcon className="w-5 h-5 text-secondary-500" />
                                )}
                              </button>

                              {/* Subcategory Variations */}
                              <AnimatePresence>
                                {expandedSubcategory === subcategoryName && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-secondary-200"
                                  >
                                    <div className="p-4 space-y-3">
                                      {subcategoryData.variations.map((variation: any, variationIndex: number) => (
                                        <motion.div
                                          key={variationIndex}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.3, delay: variationIndex * 0.1 }}
                                          className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-secondary-50 transition-colors duration-200 border border-secondary-100"
                                        >
                                          <div className="flex-1">
                                            <h5 className="font-medium text-secondary-900 mb-1">
                                              {variation.name}
                                            </h5>
                                            <div className="flex items-center text-secondary-600">
                                              <ClockIcon className="w-4 h-4 mr-2" />
                                              <span className="text-sm">{variation.duration}</span>
                                            </div>
                                          </div>
                                          <div className="flex items-center space-x-3">
                                            <span className="text-xl font-bold text-primary-600">
                                              ${variation.price}
                                            </span>
                                            <Link
                                              href="/services"
                                              className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm inline-block"
                                            >
                                              Book Now
                                            </Link>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
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

      </div>
    </section>
  );
};
