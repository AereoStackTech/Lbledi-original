'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, MessageCircle, Utensils } from 'lucide-react';
import heroFtourImg from '@/src/assets/images/hero_ftour_beldi_1794672388684.jpg';
import { UI_COPY } from '@/data/beldi-menu';
import { buildDirectWhatsAppUrl } from '@/lib/whatsapp-beldi';
import { useLanguage } from '@/components/context/LanguageContext';

export default function HeroSection() {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden border-b border-terracotta-clay/12">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8">
        {/* 2-Column Editorial Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-olive-beldi tracking-wide pb-3 border-b border-terracotta-clay/15">
              {UI_COPY.hero.kicker[lang]}
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.1rem,3.6vw,3.35rem)] font-semibold leading-[1.13] tracking-tight text-ink-espresso text-balance">
              {UI_COPY.hero.headline[lang]}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-muted max-w-xl">
              {UI_COPY.hero.subheadline[lang]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={buildDirectWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-whatsapp px-6 py-3 text-sm sm:text-base font-semibold text-white whitespace-nowrap shrink-0 shadow-xs transition-colors hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{UI_COPY.hero.primaryCta[lang]}</span>
              </a>

              <a
                href="#menu"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-terracotta-clay/25 bg-parchment-cream px-5 py-3 text-sm sm:text-base font-semibold text-ink-espresso whitespace-nowrap shrink-0 transition-colors hover:bg-parchment-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay focus-visible:ring-offset-2"
              >
                <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                <ArrowDownRight className="h-4 w-4 shrink-0 text-terracotta-clay" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[390px] w-full overflow-hidden rounded-xl border border-terracotta-clay/15 bg-parchment-stone">
              {!imgError ? (
                <Image
                  src={heroFtourImg}
                  alt={
                    lang === 'ar'
                      ? 'مائدة فطور بلدي مغربي تقليدي مع المسمن والحرشة والشاي بالنعناع في آسفي'
                      : "Table de Ftour Beldi marocain traditionnel avec msemen, harcha, huile d'olive, miel, amlou et thé à la menthe"
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center zellige-hairline">
                  <Utensils className="h-10 w-10 text-terracotta-clay/70" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold text-ink-espresso">
                    {UI_COPY.brand.name}
                  </p>
                  <p className="text-sm text-ink-muted">{UI_COPY.hero.imageCaption[lang]}</p>
                </div>
              )}
            </div>
            <p className="mt-2.5 text-xs text-ink-muted">
              {UI_COPY.hero.imageCaption[lang]}
            </p>
          </div>
        </div>

        {/* Full-Width 3-Column Trust Strip */}
        <div className="mt-12 border-t border-terracotta-clay/15 pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-terracotta-clay/12">
            {UI_COPY.hero.trustStrip.map((item, idx) => (
              <div
                key={item.index}
                className={
                  idx === 0
                    ? 'md:pe-8'
                    : idx === 1
                    ? 'md:px-8'
                    : 'md:ps-8'
                }
              >
                <p className="text-sm font-semibold text-ink-espresso">
                  <span className="font-mono text-xs text-terracotta-clay me-2 tabular-nums">
                    {item.index}
                  </span>
                  {item.title[lang]}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {item.detail[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
