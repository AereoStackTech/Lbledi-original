export type InquiryType = 'table-ftour' | 'table-dejeuner' | 'commande-couscous';

export interface BeldiInquiryPayload {
  guestName: string;
  inquiryType: InquiryType;
  guests: string;
  preferredTime: string;
  notes?: string;
}

export const LBLEDI_PHONE_DISPLAY = '+212 6 56 26 00 18';
export const LBLEDI_PHONE_TEL = 'tel:+212656260018';
export const LBLEDI_WHATSAPP_NUMBER = '212656260018';
export const LBLEDI_PLUS_CODE = '7QJC+CCJ, Safi 20160';
export const LBLEDI_GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=7QJC%2BCCJ+Safi+20160+Morocco';

const INQUIRY_LABELS_FR: Record<InquiryType, string> = {
  'table-ftour': 'Table pour Ftour Beldi',
  'table-dejeuner': 'Table pour Déjeuner Marocain',
  'commande-couscous': 'Pré-commande Couscous / Plat Familial',
};

const INQUIRY_LABELS_AR: Record<InquiryType, string> = {
  'table-ftour': 'طاولة للفطور البلدي',
  'table-dejeuner': 'طاولة للغداء المغربي',
  'commande-couscous': 'طلب مسبق للكسكس أو طبق عائلي',
};

export function buildBeldiWhatsAppMessage(
  payload: BeldiInquiryPayload,
  lang: 'fr' | 'ar' = 'fr'
): string {
  const cleanName = payload.guestName.trim() || (lang === 'ar' ? 'ضيف كريم' : 'Client');
  const cleanGuests = payload.guests.trim() || (lang === 'ar' ? '2 أشخاص' : '2 personnes');
  const cleanTime = payload.preferredTime.trim() || (lang === 'ar' ? 'اليوم صباحاً' : "Aujourd'hui");
  const cleanNotes = payload.notes?.trim();

  if (lang === 'ar') {
    const lines = [
      `السلام عليكم، مطعم البلدي الأصيل (Lbledi original) :`,
      `أرغب في التواصل معكم بخصوص :`,
      `• الطلب : ${INQUIRY_LABELS_AR[payload.inquiryType]}`,
      `• الاسم : ${cleanName}`,
      `• عدد الأشخاص : ${cleanGuests}`,
      `• اليوم / التوقيت المفضل : ${cleanTime}`,
    ];
    if (cleanNotes) {
      lines.push(`• ملاحظة : ${cleanNotes}`);
    }
    return lines.join('\n');
  }

  const lines = [
    `Salam / Bonjour Lbledi original,`,
    `Je souhaite vous contacter pour :`,
    `• Demande : ${INQUIRY_LABELS_FR[payload.inquiryType]}`,
    `• Nom : ${cleanName}`,
    `• Nombre de personnes : ${cleanGuests}`,
    `• Jour / Heure souhaités : ${cleanTime}`,
  ];
  if (cleanNotes) {
    lines.push(`• Précision : ${cleanNotes}`);
  }
  return lines.join('\n');
}

export function buildBeldiWhatsAppUrl(
  payload: BeldiInquiryPayload,
  lang: 'fr' | 'ar' = 'fr'
): string {
  const message = buildBeldiWhatsAppMessage(payload, lang);
  return `https://wa.me/${LBLEDI_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildDishWhatsAppUrl(dishName: string, lang: 'fr' | 'ar' = 'fr'): string {
  const message =
    lang === 'ar'
      ? `السلام عليكم Lbledi original، أود الاستفسار أو الطلب المسبق لـ : ${dishName}`
      : `Salam / Bonjour Lbledi original, je souhaite me renseigner ou pré-commander : ${dishName}`;
  return `https://wa.me/${LBLEDI_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildDirectWhatsAppUrl(lang: 'fr' | 'ar' = 'fr'): string {
  const message =
    lang === 'ar'
      ? `السلام عليكم Lbledi original، أود حجز طاولة أو الاستفسار عن الأطباق المتوفرة اليوم في آسفي.`
      : `Salam / Bonjour Lbledi original, je souhaite réserver une table ou connaître les plats disponibles aujourd'hui à Safi.`;
  return `https://wa.me/${LBLEDI_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
