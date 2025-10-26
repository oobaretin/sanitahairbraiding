import { Metadata } from 'next';
import { Gallery } from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery - Sanitahairbraiding | Hair Braiding Portfolio in Katy, Texas',
  description: 'View our stunning hair braiding gallery showcasing box braids, goddess braids, cornrows, faux locs, and more professional styles in Katy, Texas.',
  keywords: 'hair braiding gallery, box braids photos, goddess braids portfolio, cornrows gallery, faux locs pictures, professional braiding Katy Texas',
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery />
    </div>
  );
}
