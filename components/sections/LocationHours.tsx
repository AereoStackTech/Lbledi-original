'use client';

import React, { useState } from 'react';
import { Check, Clock, Compass, Copy, ExternalLink, MapPin, Phone } from 'lucide-react';
import { UI_COPY, WEEKLY_SCHEDULE } from '@/data/beldi-menu';
import {
  LBLEDI_GOOGLE_MAPS_URL,
  LBLEDI_PHONE_DISPLAY,
  LBLEDI_PHONE_TEL,
  LBLEDI_PLUS_CODE,
} from '@/lib/whatsapp-beldi';
import { useLanguage } from '@/components/context/LanguageContext';

export default function LocationHours() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyPlusCode = async () => {
    try {
      await navigator.clipboard.writeText(LBLEDI_PLUS_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; ignore silently.
    }
  };

  return (
    <section
      id="acces"
      className="border-b border-terracotta-clay/12 bg-parchment-stone/45 py-14 sm:py-18"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-terracotta-clay">
            {UI_COPY.location.eyebrow[lang]}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink-espresso text-balance">
            {UI_COPY.location.title[lang]}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {UI_COPY.location.subtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Safi Plus Code & Landmarks Guide */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-terracotta-clay/15 bg-parchment-cream p-6 sm:p-8">
            <div>
              {/* Plus Code Visual Card */}
              <div className="rounded-xl border border-terracotta-clay/15 bg-parchment-stone/60 p-5 zellige-hairline">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-ink-muted">
                      {UI_COPY.location.plusCodeLabel[lang]}
                    </p>
                    <p
                      dir="ltr"
                      className="font-mono text-xl sm:text-2xl font-semibold tracking-tight text-ink-espresso tabular-nums"
                    >
                      {LBLEDI_PLUS_CODE}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPlusCode}
                    className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-terracotta-clay/25 bg-parchment-cream px-4 py-2 text-xs font-semibold text-ink-espresso whitespace-nowrap shrink-0 transition-colors hover:bg-parchment-stone cursor-pointer"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-olive-beldi" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4 text-terracotta-clay" aria-hidden="true" />
                    )}
                    <span>
                      {copied
                        ? UI_COPY.location.copiedCode[lang]
                        : UI_COPY.location.copyCode[lang]}
                    </span>
                  </button>
                </div>
              </div>

              {/* Dedicated Neighborhood Landmarks Slot */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink-espresso">
                  <Compass className="h-4 w-4 text-terracotta-clay shrink-0" aria-hidden="true" />
                  <h3>{UI_COPY.location.landmarksTitle[lang]}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {UI_COPY.location.landmarksPlaceholder[lang]}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-terracotta-clay/12 flex flex-wrap items-center gap-3.5">
              <a
                href={LBLEDI_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-terracotta-clay px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{UI_COPY.location.openMapsBtn[lang]}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-85" aria-hidden="true" />
              </a>

              <a
                href={LBLEDI_PHONE_TEL}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-terracotta-clay/25 bg-parchment-cream px-4 py-2.5 text-sm font-semibold text-ink-espresso whitespace-nowrap shrink-0 transition-colors hover:bg-parchment-stone"
              >
                <Phone className="h-4 w-4 shrink-0 text-olive-beldi" aria-hidden="true" />
                <span>{UI_COPY.location.callGuideBtn[lang]}</span>
                <span dir="ltr" className="text-xs text-ink-muted tabular-nums hidden sm:inline">
                  ({LBLEDI_PHONE_DISPLAY})
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Hours Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-terracotta-clay/15 bg-parchment-cream p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-olive-beldi shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold text-ink-espresso">
                  {UI_COPY.location.hoursTitle[lang]}
                </h3>
              </div>

              <div className="mt-6 divide-y divide-terracotta-clay/12">
                {WEEKLY_SCHEDULE.map((row) => (
                  <div
                    key={row.day.fr}
                    className="py-3.5 first:pt-0 last:pb-0 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink-espresso">
                        {row.day[lang]}
                      </span>
                      <span className="text-xs text-ink-muted">·</span>
                      <span
                        className={`text-xs font-medium ${
                          row.isConfirmed ? 'text-olive-beldi' : 'text-ink-muted'
                        }`}
                      >
                        {row.isConfirmed
                          ? UI_COPY.location.confirmedTag[lang]
                          : UI_COPY.location.pendingTag[lang]}
                      </span>
                    </div>
                    <span
                      className={`text-sm tabular-nums ${
                        row.isConfirmed
                          ? 'font-semibold text-olive-beldi'
                          : 'text-ink-muted'
                      }`}
                    >
                      {row.hours[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-5 border-t border-terracotta-clay/12 text-xs leading-relaxed text-ink-muted">
              {UI_COPY.location.hoursNotice[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
