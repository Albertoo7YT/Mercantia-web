import type { Metadata } from 'next';
import { Manrope, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mercantia.app';

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
    description:
      'Catálogo, stock, pedidos y garantías en un solo lugar.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-bg text-ink leading-normal overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
