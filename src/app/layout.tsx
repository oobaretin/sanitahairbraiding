import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanitahairbraiding - Professional Hair Braiding Services in Katy, Texas',
  description: 'Transform your look with expert hair braiding services at Sanitahairbraiding in Katy, Texas. Professional box braids, boho braids, goddess braids, and more. Book your appointment today for stunning styles that last.',
  keywords: 'hair braiding, box braids, boho braids, goddess braids, faux locs, cornrows, professional braiding, protective styles, hair salon, Katy Texas',
  authors: [{ name: 'Sanitahairbraiding' }],
  creator: 'Sanitahairbraiding',
  publisher: 'Sanitahairbraiding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sanitahairbraiding.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sanitahairbraiding - Professional Hair Braiding Services in Katy, Texas',
    description: 'Transform your look with expert hair braiding services at Sanitahairbraiding in Katy, Texas. Professional box braids, boho braids, goddess braids, and more.',
    url: 'https://www.sanitahairbraiding.com',
    siteName: 'Sanitahairbraiding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanitahairbraiding - Professional Hair Braiding Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanitahairbraiding - Professional Hair Braiding Services in Katy, Texas',
    description: 'Transform your look with expert hair braiding services at Sanitahairbraiding in Katy, Texas. Professional box braids, boho braids, goddess braids, and more.',
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
