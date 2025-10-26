import { Metadata } from 'next';
import { ServiceMenu } from '@/components/sections/ServiceMenu';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Services - Sanitahairbraiding | Professional Hair Braiding in Katy, Texas',
  description: 'Explore our professional hair braiding services in Katy, Texas including box braids, goddess braids, cornrows, faux locs, and boho braids. Expert styling and premium quality.',
  keywords: 'hair braiding services, box braids, goddess braids, cornrows, faux locs, boho braids, professional braiding, Katy Texas',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServiceMenu />
      <Testimonials />
    </div>
  );
}
