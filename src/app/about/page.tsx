import { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'About Us - Sanitahairbraiding | Professional Hair Braiding in Katy, Texas',
  description: 'Learn about Sanitahairbraiding in Katy, Texas, our mission, and our commitment to providing exceptional hair braiding services with premium quality and expert care.',
  keywords: 'about sanitahairbraiding, hair braiding salon, professional braiding, hair styling services, Katy Texas',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Testimonials />
    </div>
  );
}
