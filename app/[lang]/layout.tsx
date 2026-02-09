import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

import { Locale, i18n } from '@/i18n.config';
import './globals.css';

export const metadata: Metadata = {
  title: 'Facundo Masino - Desarrollador Frontend',
  description:
    'Desarrolador Frontend, apasionado por la música y la programación. Actualmente estudiando la carrera Técnico Universitario en Programación en la UTN FRGP.',
  keywords:
    'Facundo Masino, Desarrollador, Desarrolador Web, Frontend developer, Web Developer, Remote Web Dev, Desarrollador Web Argentina, Remote Work, Trabajo remoto',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://analytics.google.com" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-5Q3ZDL0G1Y" />
      <Analytics />
    </html>
  );
}
