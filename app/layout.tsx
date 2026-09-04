import type { Metadata } from 'next';
import '@fontsource/marcellus';
import '@fontsource-variable/dm-sans';
import './globals.css';

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Revitalization Wellness Consultants LLC',
  description: 'Nurse-led community engagement and community coaching for adults and transition-age youth with developmental disabilities in Fairfax County and Northern Virginia.',
  openGraph: {
    title: 'Revitalization Wellness Consultants LLC',
    description: 'A fuller life, out in the world. Nurse-led community engagement and coaching in Fairfax County and Northern Virginia.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Revitalization Wellness Consultants — A fuller life, out in the world.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revitalization Wellness Consultants LLC',
    description: 'Nurse-led community engagement and coaching in Fairfax County and Northern Virginia.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
