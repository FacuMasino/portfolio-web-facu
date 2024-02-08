import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { Locale, i18n } from '@/i18n.config';
import './globals.css';

export const metadata: Metadata = {
  title: 'Facundo Masino - Desarrollador Frontend',
  description:
    'Desarrolador Frontend, apasionado por la música y la programación. Actualmente estudiando la carrera Técnico Universitario en Programación en la UTN FRGP.',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
