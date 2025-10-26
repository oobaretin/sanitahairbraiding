'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  emailAddress: z.string().email('Please enter a valid email address'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const paymentMethods = [
  { 
    id: 'cash', 
    label: 'Cash', 
    description: 'Pay in person at appointment',
    icon: '💰'
  },
  { 
    id: 'zelle', 
    label: 'Zelle', 
    description: 'Send to: [Your Zelle Info]',
    icon: '/images/zelle-logo1.png'
  },
  { 
    id: 'cashapp', 
    label: 'Cash App', 
    description: 'Send to: [Your Cash App Info]',
    icon: '/images/cashapp.logo1.png'
  }
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      preferredDate: '',
      preferredTime: '',
      paymentMethod: '',
      specialRequests: ''
    }
  });

  const selectedPaymentMethod = watch('paymentMethod');

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Booking submitted:', data);
      
      // Reset form and close modal
      reset();
      onClose();
      
      // Show success message (you could use a toast notification here)
      alert('Appointment booked successfully! We will contact you to confirm.');
      
    } catch (error) {
      console.error('Booking error:', error);
      alert('There was an error booking your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl mx-4"
            >
              <Card className="max-h-[95vh] overflow-y-auto">
                <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-xl sm:text-2xl text-secondary-900">
                      Book Your Service
                    </h2>
                    {selectedService && (
                      <p className="text-secondary-600 mt-1 text-sm sm:text-base truncate">
                        Service: {selectedService}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200 flex-shrink-0 ml-2"
                  >
                    <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500" />
                  </button>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phoneNumber')}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(832) 757-4333"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-600 text-sm mt-1">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('emailAddress')}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                      {errors.emailAddress && (
                        <p className="text-red-600 text-sm mt-1">{errors.emailAddress.message}</p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        {...register('preferredDate')}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <p className="text-sm text-secondary-500 mt-1">mm/dd/yyyy</p>
                      {errors.preferredDate && (
                        <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        {...register('preferredTime')}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>
                      )}
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-3">
                        Preferred Payment Method *
                      </label>
                      <div className="space-y-2 sm:space-y-3">
                        {paymentMethods.map((method) => (
                          <label
                            key={method.id}
                            className={`block cursor-pointer rounded-lg border-2 p-3 sm:p-4 transition-all duration-200 ${
                              selectedPaymentMethod === method.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-secondary-200 hover:border-secondary-300 bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              value={method.id}
                              {...register('paymentMethod')}
                              className="sr-only"
                            />
                            <div className="flex items-center">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0">
                                {method.icon.startsWith('/') ? (
                                  <img 
                                    src={method.icon} 
                                    alt={`${method.label} logo`}
                                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                    onError={(e) => {
                                      console.error('Failed to load image:', method.icon);
                                      e.currentTarget.style.display = 'none';
                                    }}
                                  />
                                ) : (
                                  <span className="text-lg sm:text-xl">{method.icon}</span>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-secondary-900 text-sm sm:text-base">
                                  {method.label}
                                </div>
                                <div className="text-xs sm:text-sm text-secondary-600 truncate">
                                  {method.description}
                                </div>
                              </div>
                              <div className="ml-2 flex-shrink-0">
                                {selectedPaymentMethod === method.id ? (
                                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-500 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                  </div>
                                ) : (
                                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-secondary-300 rounded-full"></div>
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.paymentMethod && (
                        <p className="text-red-600 text-sm mt-2">{errors.paymentMethod.message}</p>
                      )}
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Special Requests or Notes
                      </label>
                      <textarea
                        {...register('specialRequests')}
                        rows={4}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="Any special requests or notes for your appointment..."
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between pt-6 border-t border-secondary-200">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                      
                      <Button
                        type="submit"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Booking...' : 'Book Appointment'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
