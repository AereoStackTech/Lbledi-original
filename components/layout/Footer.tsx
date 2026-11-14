import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import {
  LBLEDI_GOOGLE_MAPS_URL,
  LBLEDI_PHONE_DISPLAY,
  LBLEDI_PHONE_TEL,
  LBLEDI_PLUS_CODE,
} from '@/lib/whatsapp-beldi';

export default function Footer() {
  return (
    <footer className="border-t border-terracotta-clay/15 bg-parchment-stone/65 text-ink-espresso">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5 space-y-2.5">
            <p className="font-display text-xl font-semibold text-terracotta-clay">
              Lbledi original
            </p>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              Restaurant marocain — Cuisine Beldia, Ftour matinal, tajines mijotés et couscous du vendredi à Safi.
            </p>
            <p className="text-xs text-ink-muted/85" dir="rtl">
              البلدي الأصيل · فطور بلدي ومطبخ مغربي منزلي بآسفي
            </p>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <p className="font-semibold text-ink-espresso">Coordonnées à Safi</p>
            <a
              href={LBLEDI_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink-muted hover:text-terracotta-clay transition-colors"
            >
              <MapPin className="h-4 w-4 shrink-0 text-terracotta-clay" aria-hidden="true" />
              <span>{LBLEDI_PLUS_CODE}, Maroc</span>
            </a>
            <a
              href={LBLEDI_PHONE_TEL}
              className="flex items-center gap-2 text-ink-muted hover:text-terracotta-clay transition-colors tabular-nums"
            >
              <Phone className="h-4 w-4 shrink-0 text-olive-beldi" aria-hidden="true" />
              <span dir="ltr">{LBLEDI_PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="md:col-span-3 space-y-2 text-sm">
            <p className="font-semibold text-ink-espresso">Navigation</p>
            <ul className="space-y-1.5 text-ink-muted">
              <li>
                <a href="#specialites" className="hover:text-terracotta-clay transition-colors">
                  Spécialités Beldia
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-terracotta-clay transition-colors">
                  La Carte & Tarifs
                </a>
              </li>
              <li>
                <a href="#acces" className="hover:text-terracotta-clay transition-colors">
                  Accès & Horaires
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-terracotta-clay transition-colors">
                  Réservation WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-terracotta-clay/12 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-ink-muted">
          <p className="max-w-2xl leading-relaxed">
            Aperçu vitrine : les exemples de plats, tarifs indicatifs en MAD, repères de quartier et horaires complets de la semaine restent à confirmer avec le propriétaire.
          </p>
          <p className="whitespace-nowrap shrink-0 font-medium text-ink-espresso/80">
            Conçu par AereoStack
          </p>
        </div>
      </div>
    </footer>
  );
}
