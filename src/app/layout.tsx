import type { Metadata } from 'next';

import { Providers } from '@/lib/providers';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description:
    'A modern Next.js starter template with TypeScript, Tailwind CSS, and more',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Next.js Starter Template',
    description:
      'A modern Next.js starter template with TypeScript, Tailwind CSS, and more',
    siteName: 'Next.js Starter Template',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Starter Template',
    description:
      'A modern Next.js starter template with TypeScript, Tailwind CSS, and more',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
