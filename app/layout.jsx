import './globals.css';
import { siteConfig } from '@/data/site';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Swapnil Devkate',
  },
  description: siteConfig.description,
  applicationName: 'Swapnil Devkate Portfolio',
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    'Swapnil Devkate',
    'Swapnil Devkate developer',
    'Swapnil Devkate backend developer',
    'Java developer',
    'Spring Boot developer',
    'backend developer Mumbai',
    'Java Spring Boot developer',
    'Computer Engineering graduate',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: 'Swapnil Devkate',
    title: siteConfig.title,
    description: siteConfig.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
