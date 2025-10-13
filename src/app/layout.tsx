import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Braids by Shisha - Professional Hair Braiding Services in Katy, Texas',
  description: 'Transform your look with expert hair braiding services at Braids by Shisha. Located in Katy, Texas. Book your appointment today for stunning braids that last.',
  keywords: 'hair braiding, braids, Katy Texas, hair salon, professional braiding, protective styles',
  authors: [{ name: 'Braids by Shisha' }],
  creator: 'Braids by Shisha',
  publisher: 'Braids by Shisha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.braidsbyshisha.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Braids by Shisha - Professional Hair Braiding Services',
    description: 'Transform your look with expert hair braiding services at Braids by Shisha. Located in Katy, Texas.',
    url: 'https://www.braidsbyshisha.com',
    siteName: 'Braids by Shisha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Braids by Shisha - Professional Hair Braiding',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braids by Shisha - Professional Hair Braiding Services',
    description: 'Transform your look with expert hair braiding services at Braids by Shisha. Located in Katy, Texas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BookingProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
