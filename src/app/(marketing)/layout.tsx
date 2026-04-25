import { Suspense } from 'react';
import type { Metadata } from 'next';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mercantia.pro';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mercantia — Portal B2B de pedidos para comerciales',
  description:
    'Catálogo, stock, pedidos y garantías en un solo lugar. Tus representantes trabajan desde el móvil, la oficina recibe todo estructurado y el Excel desaparece.',
  keywords: [
    'portal B2B',
    'pedidos comerciales',
    'software representantes',
    'CRM B2B',
    'gestión pedidos',
    'catálogo online',
    'fabricantes',
    'distribuidores',
  ],
  authors: [{ name: 'Mercantia' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Mercantia',
    title: 'Mercantia — Portal B2B de pedidos para comerciales',
    description:
      'Reemplaza WhatsApp, email y Excel con un portal profesional para tus representantes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mercantia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercantia — Portal B2B de pedidos',
    description: 'Catálogo, stock, pedidos y garantías en un solo lugar.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans bg-bg text-ink leading-normal overflow-x-hidden min-h-screen">
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      {children}
    </div>
  );
}
