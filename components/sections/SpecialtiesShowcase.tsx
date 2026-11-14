'use client';

import React, { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import dishFtourImg from '@/src/assets/images/dish_ftour_msemen_1794672386104.jpg';
import dishTajineImg from '@/src/assets/images/dish_tajine_citron_1794672385988.jpg';
import dishCouscousImg from '@/src/assets/images/dish_couscous_royal_1794672386214.jpg';
import { UI_COPY, type MenuCategoryId } from '@/data/beldi-menu';
import { useLanguage } from '@/components/context/LanguageContext';

const CATEGORY_IMAGES: Record<Exclude<MenuCategoryId, 'all'>, StaticImageData> = {
  ftour: dishFtourImg,
  tajines: dishTajineImg,
  vendredi: dishCouscousImg,
};

export default function SpecialtiesShowcase() {
  const { lang, setActiveCategory } = useLanguage();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleSelectPillar = (category: Exclude<MenuCategoryId, 'all'>) => {
    setActiveCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="specialites"
      className="border-b border-terracotta-clay/12 bg-parchment-stone/45 py-14 sm:py-18"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-terracotta-clay">
            {UI_COPY.specialties.eyebrow[lang]}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink-espresso text-balance">
            {UI_COPY.specialties.title[lang]}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {UI_COPY.specialties.subtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {UI_COPY.specialties.cards.map((card) => {
            const imgSrc = CATEGORY_IMAGES[card.category];
            const hasFailed = failedImages[card.category];

            return (
              <article
                key={card.category}
                className="group flex flex-col overflow-hidden rounded-xl border border-terracotta-clay/14 bg-parchment-cream transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment-stone">
                  {!hasFailed ? (
                    <Image
                      src={imgSrc}
                      alt={card.title[lang]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [card.category]: true }))
                      }
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center zellige-hairline">
                      <UtensilsCrossed className="h-8 w-8 text-terracotta-clay/70" />
                      <span className="font-display text-base font-medium text-ink-espresso">
                        {card.title[lang]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-medium text-olive-beldi">
                    {card.kicker[lang]}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink-espresso">
                    {card.title[lang]}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {card.description[lang]}
                  </p>
                  <div className="mt-5 pt-4 border-t border-terracotta-clay/10">
                    <button
                      type="button"
                      onClick={() => handleSelectPillar(card.category)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-clay hover:text-terracotta-deep transition-colors cursor-pointer"
                    >
                      <span>{UI_COPY.specialties.exploreAction[lang]}</span>
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
