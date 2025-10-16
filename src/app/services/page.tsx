import { Metadata } from 'next';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Services - Sanitahairbraiding | Professional Hair Braiding in Katy, Texas',
  description: 'Explore our professional hair braiding services in Katy, Texas including box braids, goddess braids, cornrows, faux locs, and boho braids. Expert styling and premium quality.',
  keywords: 'hair braiding services, box braids, goddess braids, cornrows, faux locs, boho braids, professional braiding, Katy Texas',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <Testimonials />
    </div>
  );
}
