import { Service, Testimonial, GalleryImage, BusinessHours, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic African box braids with premium synthetic or human hair extensions. Perfect for protective styling and low maintenance.',
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
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Trendy boho-style braids with loose, natural waves and effortless beauty for a free-spirited look.',
    price: 140,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Boho hair extensions included',
      'Custom wave pattern',
      'Natural styling techniques',
      'Maintenance guide included'
    ],
    popular: true,
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Traditional African cornrow braids in various patterns and designs for a timeless, cultural look.',
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
    id: 'twist-braids',
    name: 'Twist Braids',
    description: 'Stylish twist braids that offer a modern alternative to traditional braids with a sleek finish.',
    price: 100,
    duration: '3-4 hours',
    category: 'braids',
    features: [
      'Premium twist hair included',
      'Custom sizing options',
      'Protective styling benefits',
      'Maintenance instructions'
    ],
  },
  {
    id: 'knotless-braids',
    name: 'Knotless Braids',
    description: 'Modern knotless braids that are gentler on your scalp and edges, providing a more natural look and feel.',
    price: 130,
    duration: '4-6 hours',
    category: 'braids',
    features: [
      'Gentle on scalp and edges',
      'Natural-looking finish',
      'Premium hair extensions included',
      'Long-lasting results'
    ],
    popular: true,
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
    name: 'Emmanuella',
    service: 'Hair Braiding',
    rating: 5,
    comment: 'Adja was amazing! My mom and I went to get our hair braided. Not only is her work amazing, her hospitality and overall vibe is awesome! We will be booking with her again!',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'John Long',
    service: 'Men\'s Braids',
    rating: 5,
    comment: 'My go to for men\'s Braids. Aja is the most skilled stylist I\'ve ever had braid my hair. She\'s fast and thorough. Im very impressed with how long my braids last, while not being as painful as others. And she will make availability for you when you need her. I highly recommend!',
    date: '2023-10-15',
  },
  {
    id: '3',
    name: 'Dani M',
    service: 'Children\'s Braids',
    rating: 5,
    comment: 'She is amazing! I had two stylists cancel at the last minute on back to school weekend. I called her and she made room to braid my daughter\'s hair the same day! She is such a blessing and is so friendly and welcoming. Her personality is wonderful.',
    date: '2023-08-20',
  },
  {
    id: '4',
    name: 'Jasmin Thompson',
    service: 'Box Braids',
    rating: 5,
    comment: 'She is absolutely Amazing! Did a great job on the braids and the touch up as well. Price was very reasonable and the quality was excellent.',
    date: '2024-01-10',
  },
  {
    id: '5',
    name: 'Laura Johnson',
    service: 'Box Braids',
    rating: 5,
    comment: 'I\'ve been going to Sanou for my box braids for the last few years. She always does a beautiful job with my braids, I have never been disappointed. I have not gone to anyone else since I found her. She\'s sweet and polite, on time, and professional.',
    date: '2023-09-15',
  },
  {
    id: '6',
    name: 'Tiffany Potter',
    service: 'Children\'s Braids',
    rating: 5,
    comment: 'Sanou (Sanita) is amazing! I am new to the area and based on her great reviews I decided to try her out for my daughter\'s braids (even though it\'s a 30 minute drive to her house). She really is the best! Our experience was even better than expected.',
    date: '2023-08-25',
  },
  {
    id: '7',
    name: 'Melodie Rabet',
    service: 'Knotless Braids',
    rating: 5,
    comment: 'I love Sanita hair braiding the place is so clean with a calm and friendly atmosphere…I usually do knotless braid and I loved them!!! Adja is so nice and professional… I always love my hair and I will most definitely be back!!!',
    date: '2023-11-20',
  },
  {
    id: '8',
    name: 'Cristi Pryor',
    service: 'Box Braids',
    rating: 5,
    comment: 'Found her website on Google. Loved her positive reviews and quality work. Decided to give her a call the next day for an appointment. Thank God on a Saturday she had room for me. She was also very helpful with the braid style and idea I wanted.',
    date: '2023-07-30',
  },
  {
    id: '9',
    name: 'Lenda Bazemore-Williams',
    service: 'Children\'s Braids',
    rating: 5,
    comment: 'I have been coming to get my daughters hair braided for just a short while and I love it. She\'s very kind, friendly and patient. If you want great professional service definitely come see her. She\'s worth your time in money.',
    date: '2023-08-10',
  },
  {
    id: '10',
    name: 'Cynthia Boon',
    service: 'Box Braids',
    rating: 5,
    comment: 'AJ has braided my hair several times. She is always professional, punctual and her work is very neat! I can\'t recommend her enough. If you need a good stylist to do your hair and also have good conversation, reach out to her.',
    date: '2023-09-05',
  },
  {
    id: '11',
    name: 'Lenae Casias',
    service: 'Family Braiding',
    rating: 5,
    comment: 'Sanou is always very accommodating, she braided both mine and my daughter\'s hair on very short notice even on a Sunday anything we need. She is very professional, caring and so sweet. Her work is always perfect fast and exactly what we wanted.',
    date: '2023-08-15',
  },
  {
    id: '12',
    name: 'Callie Johnson',
    service: 'Box Braids',
    rating: 5,
    comment: 'Sanita is the only person I let braid my hair! She does a awesome job and never disappoint me! She is fast and handles your hair with great care! I highly recommend!',
    date: '2023-09-20',
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
  {
    id: '7',
    src: '/images/gallery/boho-braids-1.jpg',
    alt: 'Trendy boho braids',
    category: 'boho-braids',
    featured: true,
  },
  {
    id: '8',
    src: '/images/gallery/twist-braids-1.jpg',
    alt: 'Sleek twist braids',
    category: 'twist-braids',
  },
];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Tuesday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '8:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '8:00 PM' },
  { day: 'Sunday', open: '10:00 AM', close: '7:00 PM' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/sanitahairbraiding',
    icon: 'instagram',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/sanitahairbraiding',
    icon: 'facebook',
  },
  {
    platform: 'TikTok',
    url: 'https://tiktok.com/@sanitahairbraiding',
    icon: 'tiktok',
  },
];

export const contactInfo = {
  phone: '(832) 757-4333',
  email: 'info@sanitahairbraiding.com',
  address: '5303 S Mason Rd, Katy, TX 77450',
  location: 'Located in: The Brodie at Cinco Ranch Apartments',
  hours: businessHours,
};