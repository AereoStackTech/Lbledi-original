'use client';

import React, { useMemo, useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import { UI_COPY } from '@/data/beldi-menu';
import {
  buildBeldiWhatsAppMessage,
  buildBeldiWhatsAppUrl,
  type InquiryType,
} from '@/lib/whatsapp-beldi';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useLanguage } from '@/components/context/LanguageContext';

export default function WhatsAppInquiry() {
  const { lang } = useLanguage();
  const [guestName, setGuestName] = useState('');
  const [inquiryType, setInquiryType] = useState<InquiryType>('table-ftour');
  const [guests, setGuests] = useState('4 personnes');
  const [preferredTime, setPreferredTime] = useState('Dimanche à 09h30');
  const [notes, setNotes] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  const payload = useMemo(
    () => ({
      guestName,
      inquiryType,
      guests,
      preferredTime,
      notes,
    }),
    [guestName, inquiryType, guests, preferredTime, notes]
  );

  const previewText = useMemo(
    () => buildBeldiWhatsAppMessage(payload, lang),
    [payload, lang]
  );

  const whatsappUrl = useMemo(
    () => buildBeldiWhatsAppUrl(payload, lang),
    [payload, lang]
  );

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(previewText);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch {
      // Ignore if clipboard is unavailable.
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Intro + Live Message Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wide text-terracotta-clay">
                {UI_COPY.inquiry.eyebrow[lang]}
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink-espresso text-balance">
                {UI_COPY.inquiry.title[lang]}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {UI_COPY.inquiry.subtitle[lang]}
              </p>
            </div>

            <div className="rounded-xl border border-terracotta-clay/15 bg-parchment-stone/60 p-5">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-terracotta-clay/12">
                <p className="text-xs font-semibold text-ink-espresso">
                  {UI_COPY.inquiry.previewLabel[lang]}
                </p>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta-clay hover:text-terracotta-deep transition-colors cursor-pointer"
                >
                  {copiedMessage ? (
                    <Check className="h-3.5 w-3.5 text-olive-beldi" aria-hidden="true" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  <span>
                    {copiedMessage
                      ? UI_COPY.inquiry.copiedBtn[lang]
                      : UI_COPY.inquiry.copyBtn[lang]}
                  </span>
                </button>
              </div>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-xs sm:text-sm leading-relaxed text-ink-muted">
                {previewText}
              </pre>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-xl border border-terracotta-clay/15 bg-parchment-cream p-6 sm:p-8">
            <div className="space-y-5">
              {/* Field 1: Name */}
              <div>
                <label
                  htmlFor="beldi-guest-name"
                  className="block text-sm font-semibold text-ink-espresso mb-1.5"
                >
                  {UI_COPY.inquiry.nameLabel[lang]}
                </label>
                <Input
                  id="beldi-guest-name"
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder={UI_COPY.inquiry.namePlaceholder[lang]}
                />
              </div>

              {/* Field 2: Request Type */}
              <div>
                <label
                  htmlFor="beldi-inquiry-type"
                  className="block text-sm font-semibold text-ink-espresso mb-1.5"
                >
                  {UI_COPY.inquiry.typeLabel[lang]}
                </label>
                <Select
                  id="beldi-inquiry-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                >
                  <option value="table-ftour">
                    {UI_COPY.inquiry.types['table-ftour'][lang]}
                  </option>
                  <option value="table-dejeuner">
                    {UI_COPY.inquiry.types['table-dejeuner'][lang]}
                  </option>
                  <option value="commande-couscous">
                    {UI_COPY.inquiry.types['commande-couscous'][lang]}
                  </option>
                </Select>
              </div>

              {/* Field 3: Party Size & Preferred Time */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="beldi-guests"
                    className="block text-sm font-semibold text-ink-espresso mb-1.5"
                  >
                    {UI_COPY.inquiry.guestsLabel[lang]}
                  </label>
                  <Input
                    id="beldi-guests"
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder={UI_COPY.inquiry.guestsPlaceholder[lang]}
                  />
                </div>

                <div>
                  <label
                    htmlFor="beldi-time"
                    className="block text-sm font-semibold text-ink-espresso mb-1.5"
                  >
                    {UI_COPY.inquiry.timeLabel[lang]}
                  </label>
                  <Input
                    id="beldi-time"
                    type="text"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    placeholder={UI_COPY.inquiry.timePlaceholder[lang]}
                  />
                </div>
              </div>

              {/* Optional Precision */}
              <div>
                <label
                  htmlFor="beldi-notes"
                  className="block text-sm font-semibold text-ink-espresso mb-1.5"
                >
                  {UI_COPY.inquiry.notesLabel[lang]}
                </label>
                <Input
                  id="beldi-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={UI_COPY.inquiry.notesPlaceholder[lang]}
                />
              </div>

              {/* Submit Action (Direct wa.me link — zero popup blockers) */}
              <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-whatsapp px-6 py-3 text-sm sm:text-base font-semibold text-white whitespace-nowrap shrink-0 shadow-xs transition-colors hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{UI_COPY.inquiry.submitBtn[lang]}</span>
                </a>

                <p className="text-xs text-ink-muted tabular-nums">
                  {UI_COPY.inquiry.directNote[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
