import { Service, Testimonial, GalleryImage, BusinessHours, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic box braids with premium synthetic or human hair extensions. Perfect for protective styling and low maintenance.',
    price: 120,
    duration: '4-6 hours',
    category: 'braids',
    features: [
      'Premium hair extensions included',
      'Scalp protection treatment',
      'Styling tips included',
      '2-week follow-up consultation'
    ],
    popular: true,
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Elegant goddess braids with added curls and waves for a stunning, versatile look.',
    price: 150,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Premium curly hair extensions',
      'Custom curl pattern',
      'Heat protection treatment',
      'Maintenance guide included'
    ],
    popular: true,
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Traditional cornrow braids in various patterns and designs for a timeless look.',
    price: 80,
    duration: '2-3 hours',
    category: 'braids',
    features: [
      'Custom pattern design',
      'Scalp massage included',
      'Protective styling tips',
      'Touch-up recommendations'
    ],
  },
  {
    id: 'faux-locs',
    name: 'Faux Locs',
    description: 'Beautiful faux locs that mimic natural dreadlocks without the commitment.',
    price: 180,
    duration: '6-8 hours',
    category: 'braids',
    features: [
      'Premium loc hair included',
      'Custom length and thickness',
      'Installation care guide',
      '3-week follow-up included'
    ],
  },
  {
    id: 'braid-maintenance',
    name: 'Braid Maintenance',
    description: 'Professional maintenance service to keep your braids looking fresh and healthy.',
    price: 60,
    duration: '2-3 hours',
    category: 'maintenance',
    features: [
      'Scalp cleansing and conditioning',
      'Loose braid repair',
      'Edge touch-ups',
      'Styling refresh'
    ],
  },
  {
    id: 'consultation',
    name: 'Hair Consultation',
    description: 'Personalized consultation to determine the best braiding style for your hair type and lifestyle.',
    price: 25,
    duration: '30 minutes',
    category: 'consultation',
    features: [
      'Hair health assessment',
      'Style recommendations',
      'Maintenance planning',
      'Product recommendations'
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    service: 'Box Braids',
    rating: 5,
    comment: 'Shisha did an amazing job with my box braids! They look so natural and lasted for months. The salon is clean and professional, and she really takes her time to make sure everything is perfect.',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    service: 'Goddess Braids',
    rating: 5,
    comment: 'I\'ve been coming to Shisha for over a year now, and she never disappoints. My goddess braids were absolutely stunning and got so many compliments. Highly recommend!',
    date: '2024-01-10',
  },
  {
    id: '3',
    name: 'Ashley Williams',
    service: 'Faux Locs',
    rating: 5,
    comment: 'The faux locs Shisha created for me were incredible! They looked so natural and lasted for months. She\'s truly an artist and I can\'t wait to go back.',
    date: '2024-01-05',
  },
  {
    id: '4',
    name: 'Jennifer Brown',
    service: 'Braid Maintenance',
    rating: 5,
    comment: 'Regular maintenance with Shisha keeps my braids looking fresh and my scalp healthy. She\'s professional, skilled, and always on time.',
    date: '2023-12-28',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/box-braids-1.jpg',
    alt: 'Beautiful box braids styling',
    category: 'box-braids',
    featured: true,
  },
  {
    id: '2',
    src: '/images/gallery/goddess-braids-1.jpg',
    alt: 'Elegant goddess braids with curls',
    category: 'goddess-braids',
    featured: true,
  },
  {
    id: '3',
    src: '/images/gallery/cornrows-1.jpg',
    alt: 'Traditional cornrow patterns',
    category: 'cornrows',
  },
  {
    id: '4',
    src: '/images/gallery/faux-locs-1.jpg',
    alt: 'Stylish faux locs',
    category: 'faux-locs',
    featured: true,
  },
  {
    id: '5',
    src: '/images/gallery/box-braids-2.jpg',
    alt: 'Medium length box braids',
    category: 'box-braids',
  },
  {
    id: '6',
    src: '/images/gallery/goddess-braids-2.jpg',
    alt: 'Long goddess braids',
    category: 'goddess-braids',
  },
];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '8:30 AM', close: '6:30 PM' },
  { day: 'Saturday', open: '8:30 AM', close: '6:30 PM' },
  { day: 'Sunday', open: 'By Appointment', close: '(with Deposit)' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/braidsbyshisha',
    icon: 'instagram',
  },
  {
    platform: 'Nextdoor',
    url: 'https://nextdoor.com/business/braids-by-shisha',
    icon: 'nextdoor',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/braidsbyshisha',
    icon: 'facebook',
  },
];

export const contactInfo = {
  phone: '(281) 515-1173',
  email: 'info@braidsbyshisha.com',
  address: '5030 Franz Road, Katy, Texas 77493',
  hours: businessHours,
};
