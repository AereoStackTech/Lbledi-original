'use client';

import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { UI_COPY } from '@/data/beldi-menu';
import { LBLEDI_PHONE_TEL } from '@/lib/whatsapp-beldi';
import { useLanguage } from '@/components/context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#menu', label: UI_COPY.nav.menu[lang] },
    { href: '#specialites', label: UI_COPY.nav.specialites[lang] },
    { href: '#acces', label: UI_COPY.nav.acces[lang] },
    { href: '#contact', label: UI_COPY.nav.contact[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-terracotta-clay/12 bg-parchment-cream/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-tight text-terracotta-clay whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
        >
          {UI_COPY.brand.name}
        </a>

        {/* Zone 2: Clean single-line anchor links + quiet language link */}
        <nav
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Navigation principale'}
          className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-espresso"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 text-ink-muted hover:text-terracotta-clay transition-colors underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
          <span aria-hidden="true" className="text-terracotta-clay/25">
            |
          </span>
          <button
            type="button"
            onClick={toggleLang}
            className="whitespace-nowrap shrink-0 py-1 text-sm font-semibold text-olive-beldi hover:text-terracotta-clay transition-colors cursor-pointer"
            aria-label={lang === 'fr' ? 'Passer en arabe' : 'Passer en français'}
          >
            {lang === 'fr' ? 'العربية' : 'Français'}
          </button>
        </nav>

        {/* Zone 3: Single Primary Action (+ compact mobile menu toggle) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={LBLEDI_PHONE_TEL}
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-terracotta-clay px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{UI_COPY.nav.callCta[lang]}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-terracotta-clay/20 text-ink-espresso hover:bg-parchment-stone transition-colors cursor-pointer"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Compact Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-terracotta-clay/12 bg-parchment-cream px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center rounded-md px-2 text-base font-medium text-ink-espresso hover:bg-parchment-stone hover:text-terracotta-clay transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-terracotta-clay/12 flex items-center justify-between">
              <span className="text-xs text-ink-muted">
                {lang === 'fr' ? 'Langue d’affichage' : 'لغة العرض'}
              </span>
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  setMobileOpen(false);
                }}
                className="min-h-[40px] px-3 rounded-md bg-parchment-stone text-sm font-semibold text-olive-beldi cursor-pointer"
              >
                {lang === 'fr' ? 'العربية' : 'Français'}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
