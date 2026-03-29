
import type { Metadata } from 'next';
import { EB_Garamond, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
});

const faviconUrl = 'https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_BLU.png?alt=media&token=8d820be4-9e68-4e73-b80f-72a50fb16f00';

export const metadata: Metadata = {
  title: {
    template: '%s | Taylor Your Leadership Coaching',
    default: 'Taylor Your Leadership Coaching',
  },
  description: 'Guiding you through life\'s transitions with professional coaching and support.',
  icons: {
    icon: [{ url: faviconUrl, sizes: 'any' }],
    shortcut: [{ url: faviconUrl }],
    apple: [{ url: faviconUrl }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Taylor Your Leadership Coaching',
    title: 'Taylor Your Leadership Coaching',
    description: 'Guiding you through life\'s transitions with professional coaching and support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taylor Your Leadership Coaching',
    description: 'Guiding you through life\'s transitions with professional coaching and support.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", ptSans.variable, ebGaramond.variable)}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
