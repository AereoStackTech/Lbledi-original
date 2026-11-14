'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import {
  BELDI_DISHES,
  MENU_CATEGORIES,
  UI_COPY,
} from '@/data/beldi-menu';
import { buildDishWhatsAppUrl } from '@/lib/whatsapp-beldi';
import { useLanguage } from '@/components/context/LanguageContext';

export default function BeldiMenu() {
  const { lang, activeCategory, setActiveCategory } = useLanguage();

  const filteredDishes =
    activeCategory === 'all'
      ? BELDI_DISHES
      : BELDI_DISHES.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="border-b border-terracotta-clay/12 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header & Placeholder Notice */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-terracotta-clay">
              {UI_COPY.menu.eyebrow[lang]}
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink-espresso text-balance">
              {UI_COPY.menu.title[lang]}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md md:text-end">
            {UI_COPY.menu.disclaimer[lang]}
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Controls) */}
        <div
          role="tablist"
          aria-label={lang === 'ar' ? 'أقسام القائمة' : 'Catégories du menu'}
          className="mt-8 flex flex-wrap items-center gap-1.5 rounded-xl border border-terracotta-clay/14 bg-parchment-stone/70 p-1.5 w-fit max-w-full"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`relative min-h-[40px] rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-beldi ${
                  isActive
                    ? 'text-white'
                    : 'text-ink-muted hover:text-ink-espresso'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="beldi-menu-tab"
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-lg bg-olive-beldi shadow-xs"
                  />
                )}
                <span className="relative z-10">{category.label[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredDishes.map((dish) => (
            <article
              key={dish.id}
              className="flex flex-col justify-between rounded-xl border border-terracotta-clay/14 bg-parchment-cream p-5 sm:p-6 transition-colors hover:border-terracotta-clay/30"
            >
              <div>
                <p
                  className={`text-xs font-medium ${
                    dish.isFridaySpecial ? 'text-saffron-warm' : 'text-ink-muted'
                  }`}
                >
                  {dish.availabilityNote[lang]}
                </p>

                <div className="mt-1.5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink-espresso">
                    {dish.name[lang]}
                  </h3>
                  <span className="font-sans text-base font-semibold text-terracotta-clay whitespace-nowrap shrink-0 tabular-nums">
                    {dish.priceMad} {UI_COPY.menu.madUnit[lang]}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {dish.description[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-terracotta-clay/10 flex items-center justify-between gap-3">
                <a
                  href={buildDishWhatsAppUrl(dish.name[lang], lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-2 text-xs sm:text-sm font-semibold text-whatsapp hover:text-whatsapp-hover transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{UI_COPY.menu.preorderCta[lang]}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
