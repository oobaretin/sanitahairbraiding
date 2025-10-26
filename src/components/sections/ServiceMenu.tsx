'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';

// Complete service data structure with 10 main categories
const SERVICE_DATA = {
  "Box Braids": {
    starting: 180,
    subcategories: {
      "Small Box Braids": [
        { name: "Small Box Braids - Shoulder Length", duration: "6-8 hours", price: 180 },
        { name: "Small Box Braids - Mid Back", duration: "7-9 hours", price: 200 },
        { name: "Small Box Braids - Waist Length", duration: "8-10 hours", price: 220 },
      ],
      "Medium Box Braids": [
        { name: "Medium Box Braids - Shoulder Length", duration: "5-7 hours", price: 200 },
        { name: "Medium Box Braids - Mid Back", duration: "6-8 hours", price: 220 },
        { name: "Medium Box Braids - Waist Length", duration: "7-9 hours", price: 240 },
      ],
      "Large Box Braids": [
        { name: "Large Box Braids - Shoulder Length", duration: "4-6 hours", price: 220 },
        { name: "Large Box Braids - Mid Back", duration: "5-7 hours", price: 240 },
        { name: "Large Box Braids - Waist Length", duration: "6-8 hours", price: 260 },
      ]
    }
  },
  "Boho Braids": {
    starting: 200,
    subcategories: {
      "Boho Box Braids": [
        { name: "Boho Box Braids - Small", duration: "6-8 hours", price: 200 },
        { name: "Boho Box Braids - Medium", duration: "5-7 hours", price: 220 },
        { name: "Boho Box Braids - Large", duration: "4-6 hours", price: 240 },
      ],
      "Boho Twist Braids": [
        { name: "Boho Twist Braids - Small", duration: "5-7 hours", price: 180 },
        { name: "Boho Twist Braids - Medium", duration: "4-6 hours", price: 200 },
        { name: "Boho Twist Braids - Large", duration: "3-5 hours", price: 220 },
      ]
    }
  },
  "Goddess Braids": {
    starting: 220,
    subcategories: {
      "Goddess Box Braids": [
        { name: "Goddess Box Braids - Small", duration: "7-9 hours", price: 220 },
        { name: "Goddess Box Braids - Medium", duration: "6-8 hours", price: 250 },
        { name: "Goddess Box Braids - Large", duration: "5-7 hours", price: 280 },
      ],
      "Goddess Twist Braids": [
        { name: "Goddess Twist Braids - Small", duration: "6-8 hours", price: 200 },
        { name: "Goddess Twist Braids - Medium", duration: "5-7 hours", price: 230 },
        { name: "Goddess Twist Braids - Large", duration: "4-6 hours", price: 260 },
      ]
    }
  },
  "Cornrows": {
    starting: 80,
    subcategories: {
      "Simple Cornrows": [
        { name: "Simple Cornrows - Basic", duration: "1-2 hours", price: 80 },
        { name: "Simple Cornrows - With Design", duration: "2-3 hours", price: 120 },
      ],
      "Complex Cornrows": [
        { name: "Complex Cornrows - Geometric", duration: "3-4 hours", price: 160 },
        { name: "Complex Cornrows - Artistic", duration: "4-5 hours", price: 200 },
      ]
    }
  },
  "Faux Locs": {
    starting: 250,
    subcategories: {
      "Faux Locs - Small": [
        { name: "Faux Locs Small - Shoulder Length", duration: "8-10 hours", price: 250 },
        { name: "Faux Locs Small - Mid Back", duration: "9-11 hours", price: 280 },
        { name: "Faux Locs Small - Waist Length", duration: "10-12 hours", price: 320 },
      ],
      "Faux Locs - Medium": [
        { name: "Faux Locs Medium - Shoulder Length", duration: "7-9 hours", price: 280 },
        { name: "Faux Locs Medium - Mid Back", duration: "8-10 hours", price: 320 },
        { name: "Faux Locs Medium - Waist Length", duration: "9-11 hours", price: 360 },
      ]
    }
  },
  "Twist Braids": {
    starting: 100,
    subcategories: {
      "Two Strand Twists": [
        { name: "Two Strand Twists - Small", duration: "3-4 hours", price: 100 },
        { name: "Two Strand Twists - Medium", duration: "2-3 hours", price: 120 },
        { name: "Two Strand Twists - Large", duration: "2-3 hours", price: 140 },
      ],
      "Flat Twists": [
        { name: "Flat Twists - Simple", duration: "2-3 hours", price: 80 },
        { name: "Flat Twists - Complex", duration: "3-4 hours", price: 120 },
      ]
    }
  },
  "Knotless Braids": {
    starting: 130,
    subcategories: {
      "Knotless Box Braids": [
        { name: "Knotless Box Braids - Small", duration: "4-6 hours", price: 130 },
        { name: "Knotless Box Braids - Medium", duration: "3-5 hours", price: 150 },
        { name: "Knotless Box Braids - Large", duration: "3-4 hours", price: 170 },
      ],
      "Knotless Twist Braids": [
        { name: "Knotless Twist Braids - Small", duration: "3-4 hours", price: 120 },
        { name: "Knotless Twist Braids - Medium", duration: "2-3 hours", price: 140 },
        { name: "Knotless Twist Braids - Large", duration: "2-3 hours", price: 160 },
      ]
    }
  },
  "Men's Braids": {
    starting: 60,
    subcategories: {
      "Men's Cornrows": [
        { name: "Men's Cornrows - Simple", duration: "1-2 hours", price: 60 },
        { name: "Men's Cornrows - Design", duration: "2-3 hours", price: 100 },
      ],
      "Men's Box Braids": [
        { name: "Men's Box Braids - Small", duration: "2-3 hours", price: 80 },
        { name: "Men's Box Braids - Medium", duration: "1-2 hours", price: 100 },
      ]
    }
  },
  "Children's Braids": {
    starting: 50,
    subcategories: {
      "Children's Cornrows": [
        { name: "Children's Cornrows - Simple", duration: "1-2 hours", price: 50 },
        { name: "Children's Cornrows - Design", duration: "2-3 hours", price: 80 },
      ],
      "Children's Box Braids": [
        { name: "Children's Box Braids - Small", duration: "2-3 hours", price: 70 },
        { name: "Children's Box Braids - Medium", duration: "1-2 hours", price: 90 },
      ]
    }
  },
  "Hair Maintenance": {
    starting: 40,
    subcategories: {
      "Touch-ups": [
        { name: "Box Braids Touch-up", duration: "1-2 hours", price: 40 },
        { name: "Cornrows Touch-up", duration: "30-45 min", price: 30 },
        { name: "Twist Braids Touch-up", duration: "1 hour", price: 35 },
      ],
      "Styling": [
        { name: "Braids Styling", duration: "30-60 min", price: 25 },
        { name: "Updo Styling", duration: "1-2 hours", price: 50 },
      ]
    }
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
                        <div className="space-y-4">
                          {Object.entries(categoryData.subcategories).map(([subcategoryName, variations], subIndex) => (
                            <div key={subcategoryName} className="border border-secondary-200 rounded-lg overflow-hidden">
                              {/* Subcategory Header */}
                              <button
                                onClick={() => toggleSubcategory(subcategoryName)}
                                className="w-full px-4 py-3 text-left bg-secondary-50 hover:bg-secondary-100 transition-colors duration-200 flex items-center justify-between"
                              >
                                <h4 className="font-semibold text-lg text-secondary-900">
                                  {subcategoryName}
                                </h4>
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
                                      {variations.map((variation, variationIndex) => (
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
                                            <button
                                              onClick={() => handleBookingClick(categoryName, variation.name, variation.price)}
                                              className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                                            >
                                              Book Now
                                            </button>
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
