import type { Metadata } from 'next';
import { Cairo, Lora, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/context/LanguageContext';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lbledi original — Cuisine Beldia & Ftour à Safi',
  description:
    'Vitrine culinaire de Lbledi original à Safi (7QJC+CCJ) : Ftour Beldi matinal dès 09h15, tajines mijotés, couscous du vendredi et réservation directe sur WhatsApp.',
  openGraph: {
    title: 'Lbledi original — Cuisine Beldia & Ftour à Safi',
    description:
      'Vitrine culinaire de Lbledi original à Safi (7QJC+CCJ) : Ftour Beldi matinal dès 09h15, tajines mijotés, couscous du vendredi et réservation directe sur WhatsApp.',
    type: 'website',
    locale: 'fr_MA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lbledi original — Cuisine Beldia & Ftour à Safi',
    description:
      'Vitrine culinaire de Lbledi original à Safi (7QJC+CCJ) : Ftour Beldi matinal dès 09h15, tajines mijotés et réservation directe sur WhatsApp.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${lora.variable} ${plusJakarta.variable} ${cairo.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
