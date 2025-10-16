import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Sanitahairbraiding | Book Your Appointment in Katy, Texas',
  description: 'Contact Sanitahairbraiding in Katy, Texas to book your hair braiding appointment. Professional hair styling services. Call (832) 757-4333 or send us a message.',
  keywords: 'contact sanitahairbraiding, book appointment, hair braiding salon contact, professional hair services, Katy Texas',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
