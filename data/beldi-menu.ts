export type MenuCategoryId = 'all' | 'ftour' | 'tajines' | 'vendredi';

export type Language = 'fr' | 'ar';

export interface LocalizedText {
  fr: string;
  ar: string;
}

export interface BeldiDish {
  id: string;
  category: Exclude<MenuCategoryId, 'all'>;
  name: LocalizedText;
  description: LocalizedText;
  priceMad: number;
  availabilityNote: LocalizedText;
  isFridaySpecial?: boolean;
}

export interface WeeklyScheduleRow {
  day: LocalizedText;
  hours: LocalizedText;
  isConfirmed: boolean;
}

export const MENU_CATEGORIES: { id: MenuCategoryId; label: LocalizedText }[] = [
  { id: 'all', label: { fr: 'Tout', ar: 'الكل' } },
  { id: 'ftour', label: { fr: 'Ftour Beldi', ar: 'فطور بلدي' } },
  { id: 'tajines', label: { fr: 'Tajines & Plats du Jour', ar: 'طواجن وأطباق اليوم' } },
  { id: 'vendredi', label: { fr: 'Spécial Vendredi & Famille', ar: 'خاص بالجمعة والعائلة' } },
];

export const BELDI_DISHES: BeldiDish[] = [
  {
    id: 'ftour-complet',
    category: 'ftour',
    name: {
      fr: 'Formule Ftour Beldi Complet',
      ar: 'صينية الفطور البلدي الكامل',
    },
    description: {
      fr: "Msemen feuilleté, harcha dorée, œufs beldi, huile d'olive, miel, amlou, fromage frais, olives et thé à la menthe.",
      ar: 'مسمن مورق، حرشة ذهبية، بيض بلدي، زيت زيتون، عسل، أملو، جبن طري، زيتون وأتاي بالنعناع.',
    },
    priceMad: 65,
    availabilityNote: {
      fr: 'Service du matin · Exemple indicatif',
      ar: 'خدمة الصباح · مثال استرشادي',
    },
  },
  {
    id: 'msemen-harcha',
    category: 'ftour',
    name: {
      fr: 'Msemen & Harcha Maison',
      ar: 'مسمن وحرشة منزلية',
    },
    description: {
      fr: 'Galettes feuilletées et harcha à la semoule fine cuites à la poêle, servies tièdes avec miel et beurre fermier.',
      ar: 'مسمن مورق وحرشة بالسميد الرقيق تطهى طازجة وتقدم دافئة مع العسل والزبدة البلدية.',
    },
    priceMad: 25,
    availabilityNote: {
      fr: 'Pains chauds · Exemple indicatif',
      ar: 'خبز وفطائر ساخنة · مثال استرشادي',
    },
  },
  {
    id: 'amlou-miel-olive',
    category: 'ftour',
    name: {
      fr: "Amlou, Miel & Huile d'Olive",
      ar: 'أملو، عسل وزيت الزيتون',
    },
    description: {
      fr: "Assiette dégustation du terroir : amlou aux amandes grillées, miel de fleurs, huile d'olive vierge et pain chaud.",
      ar: 'تشكيلة تقليدية من أملو اللوز المحمص، عسل الزهور، زيت الزيتون البكر وخبز الدار الدافئ.',
    },
    priceMad: 35,
    availabilityNote: {
      fr: 'Terroir · Exemple indicatif',
      ar: 'منتجات طبيعية · مثال استرشادي',
    },
  },
  {
    id: 'the-menthe',
    category: 'ftour',
    name: {
      fr: 'Thé à la Menthe',
      ar: 'شاي مغربي بالنعناع',
    },
    description: {
      fr: 'Thé vert gunpowder préparé à la théière traditionnelle avec menthe fraîche et sucre à votre convenance.',
      ar: 'شاي أخضر محضر في البراد التقليدي مع النعناع الطازج حسب الرغبة.',
    },
    priceMad: 15,
    availabilityNote: {
      fr: 'Toute la journée · Exemple indicatif',
      ar: 'طوال اليوم · مثال استرشادي',
    },
  },
  {
    id: 'tajine-poulet-citron',
    category: 'tajines',
    name: {
      fr: 'Tajine Poulet Citron Confit',
      ar: 'طاجين الدجاج بالحامض المصير والزيتون',
    },
    description: {
      fr: 'Poulet mijoté doucement en plat de terre cuite, citrons confits maison, olives vertes, oignons et safran.',
      ar: 'دجاج مطهو على مهل في طاجين الطين مع الحامض المصير والزيتون الأخضر والبصل والزعفران.',
    },
    priceMad: 75,
    availabilityNote: {
      fr: 'Plat du jour · Exemple indicatif',
      ar: 'طبق اليوم · مثال استرشادي',
    },
  },
  {
    id: 'tajine-kefta',
    category: 'tajines',
    name: {
      fr: 'Tajine Kefta aux Œufs',
      ar: 'طاجين الكفتة بالبيض',
    },
    description: {
      fr: 'Boulettes de viande hachée parfumées au cumin et coriandre, sauce tomate mijotée et œufs pochés.',
      ar: 'كفتة متبلة بالكمون والقزبر في صلصة طماطم مطهوة ببطء مع البيض.',
    },
    priceMad: 65,
    availabilityNote: {
      fr: 'Déjeuner · Exemple indicatif',
      ar: 'الغداء · مثال استرشادي',
    },
  },
  {
    id: 'rfissa-traditionnelle',
    category: 'tajines',
    name: {
      fr: 'Rfissa Traditionnelle',
      ar: 'رفيسة تقليدية مغربية',
    },
    description: {
      fr: 'Trid finement découpé, lentilles, fenugrec, oignons fondants et bouillon parfumé au ras el hanout.',
      ar: 'تريد رقيق مع العدس والحلبة والبصل المكرمل ومرق غني بالتوابل المغربية الأصيلة.',
    },
    priceMad: 85,
    availabilityNote: {
      fr: 'Selon disponibilité · Exemple indicatif',
      ar: 'حسب التوفر · مثال استرشادي',
    },
  },
  {
    id: 'couscous-royal',
    category: 'vendredi',
    name: {
      fr: 'Couscous Royal aux Sept Légumes',
      ar: 'كسكس ملكي بالسبع خضار',
    },
    description: {
      fr: 'Semoule roulée à la main, sept légumes de saison, pois chiches, tfaya aux oignons et raisins secs.',
      ar: 'سميد مفتول يدوياً مع سبع خضار موسمية، حمص، وتفاية البصل والزبيب.',
    },
    priceMad: 95,
    availabilityNote: {
      fr: 'Spécial Vendredi · Sur commande',
      ar: 'خاص بيوم الجمعة · حسب الطلب',
    },
    isFridaySpecial: true,
  },
  {
    id: 'plateau-familial',
    category: 'vendredi',
    name: {
      fr: 'Grand Plat Familial (4 à 6 pers.)',
      ar: 'طبق عائلي كبير (4 إلى 6 أشخاص)',
    },
    description: {
      fr: 'Couscous du vendredi ou assortiment beldi préparé en grande gsaa pour vos repas en famille sur place ou à emporter.',
      ar: 'كسكس الجمعة أو تشكيلة بلدية في قصعة كبيرة للجلسات العائلية في المطعم أو للطلب المسبق.',
    },
    priceMad: 260,
    availabilityNote: {
      fr: 'Sur pré-commande WhatsApp · Exemple indicatif',
      ar: 'حجز مسبق عبر واتساب · مثال استرشادي',
    },
    isFridaySpecial: true,
  },
];

export const WEEKLY_SCHEDULE: WeeklyScheduleRow[] = [
  {
    day: { fr: 'Dimanche', ar: 'الأحد' },
    hours: { fr: 'Ouvert dès 09h15', ar: 'مفتوح ابتداءً من 09:15' },
    isConfirmed: true,
  },
  {
    day: { fr: 'Lundi – Jeudi', ar: 'الإثنين – الخميس' },
    hours: { fr: 'Horaires à confirmer (ex. 09h15 – 22h00)', ar: 'أوقات العمل قيد التأكيد' },
    isConfirmed: false,
  },
  {
    day: { fr: 'Vendredi', ar: 'الجمعة' },
    hours: { fr: 'À confirmer · Couscous sur commande', ar: 'قيد التأكيد · الكسكس حسب الطلب' },
    isConfirmed: false,
  },
  {
    day: { fr: 'Samedi', ar: 'السبت' },
    hours: { fr: 'Horaires à confirmer (ex. 09h15 – 22h30)', ar: 'أوقات العمل قيد التأكيد' },
    isConfirmed: false,
  },
];

export const UI_COPY = {
  brand: {
    name: 'Lbledi original',
    tagline: {
      fr: 'Cuisine Beldia & Ftour · Safi',
      ar: 'المطبخ البلدي والفطور · آسفي',
    },
  },
  nav: {
    menu: { fr: 'La Carte Beldia', ar: 'القائمة البلدية' },
    specialites: { fr: 'Spécialités', ar: 'الأطباق المميزة' },
    acces: { fr: 'Accès & Horaires', ar: 'الموقع والأوقات' },
    contact: { fr: 'Réserver', ar: 'حجز' },
    callCta: { fr: 'Appeler', ar: 'اتصل الآن' },
  },
  hero: {
    kicker: {
      fr: 'Cuisine Marocaine Authentique · Dès 09h15 à Safi (Horaires complets à confirmer)',
      ar: 'مطبخ مغربي أصيل · ابتداءً من 09:15 بآسفي (الأوقات الكاملة قيد التأكيد)',
    },
    headline: {
      fr: 'Le Goût Authentique du Ftour Beldi et de la Cuisine Marocaine Maison à Safi.',
      ar: 'المذاق الأصيل للفطور البلدي والمطبخ المغربي المنزلي في قلب آسفي.',
    },
    subheadline: {
      fr: "Pains chauds, huile d'olive, tajines mijotés et couscous traditionnel préparés chaque jour avec des produits du terroir.",
      ar: 'فطائر ساخنة، زيت زيتون، طواجن مطهوة على مهل وكسكس تقليدي يُحضر يومياً بمنتجات طبيعية.',
    },
    primaryCta: {
      fr: 'Réserver / Commander (WhatsApp)',
      ar: 'احجز أو اطلب عبر واتساب',
    },
    secondaryCta: {
      fr: 'Découvrir la Carte',
      ar: 'اكتشف القائمة',
    },
    imageCaption: {
      fr: 'Ftour Beldi matinal · Service sur place à Safi',
      ar: 'فطور بلدي صباحي · استقبال عائلي بآسفي',
    },
    trustStrip: [
      {
        index: '01.',
        title: { fr: 'Ftour Beldi Matinal', ar: 'فطور بلدي صباحي' },
        detail: {
          fr: "Msemen, harcha, amlou, miel & huile d'olive dès 09h15.",
          ar: 'مسمن، حرشة، أملو، عسل وزيت الزيتون ابتداءً من 09:15.',
        },
      },
      {
        index: '02.',
        title: { fr: 'Plats Maison du Jour', ar: 'أطباق منزلية يومية' },
        detail: {
          fr: 'Tajines mijotés en terre cuite & couscous du vendredi.',
          ar: 'طواجن مطهوة في الطين وكسكس الجمعة التقليدي.',
        },
      },
      {
        index: '03.',
        title: { fr: 'Accueil Familial sur Place', ar: 'استقبال عائلي دافئ' },
        detail: {
          fr: 'Réservation de table ou commande directe sur WhatsApp.',
          ar: 'حجز طاولة أو طلب مسبق مباشر عبر واتساب.',
        },
      },
    ],
  },
  specialties: {
    eyebrow: { fr: 'Savoir-faire du Terroir', ar: 'أصالة المطبخ المغربي' },
    title: {
      fr: 'Trois Moments de Table à la Safiote',
      ar: 'ثلاث لحظات أصيلة على المائدة',
    },
    subtitle: {
      fr: 'Une cuisine familiale préparée avec soin, du premier thé du matin au grand plat du vendredi.',
      ar: 'مطبخ عائلي يُحضر بعناية، من شاي الصباح الأول إلى قصعة كسكس الجمعة.',
    },
    cards: [
      {
        category: 'ftour' as const,
        kicker: { fr: 'Dès 09h15', ar: 'ابتداءً من 09:15' },
        title: { fr: 'Ftour Beldi & Pains Chauds', ar: 'فطور بلدي وفطائر ساخنة' },
        description: {
          fr: "Msemen feuilleté, harcha dorée, amlou, miel et huile d'olive servis autour d'une théière de menthe fraîche.",
          ar: 'مسمن مورق، حرشة ذهبية، أملو وعسل وزيت الزيتون مع براد الشاي بالنعناع.',
        },
      },
      {
        category: 'tajines' as const,
        kicker: { fr: 'Déjeuner Maison', ar: 'غداء منزلي' },
        title: { fr: 'Tajines Mijotés en Terre Cuite', ar: 'طواجن مطهوة في الفخار' },
        description: {
          fr: 'Cuisson lente en tajine artisanal de Safi pour révéler les arômes de citron confit, olives et safran.',
          ar: 'طهي بطيء في طاجين آسفي الفخاري لإبراز نكهات الحامض المصير والزيتون والزعفران.',
        },
      },
      {
        category: 'vendredi' as const,
        kicker: { fr: 'Tradition du Vendredi', ar: 'تقليد يوم الجمعة' },
        title: { fr: 'Couscous & Plats de Famille', ar: 'الكسكس والأطباق العائلية' },
        description: {
          fr: 'Couscous aux sept légumes et grands plats familiaux à partager sur place ou à réserver à l’avance.',
          ar: 'كسكس بالسبع خضار وأطباق عائلية كبيرة جاهزة للمشاركة أو الحجز المسبق.',
        },
      },
    ],
    exploreAction: { fr: 'Voir cette catégorie', ar: 'تصفح هذا القسم' },
  },
  menu: {
    eyebrow: { fr: 'La Carte Beldia', ar: 'القائمة البلدية' },
    title: {
      fr: 'Menu & Spécialités Maison',
      ar: 'القائمة والأطباق المنزلية',
    },
    disclaimer: {
      fr: 'Menu et tarifs indicatifs en MAD à confirmer avec le propriétaire.',
      ar: 'ملاحظة: أسماء الأطباق والأسعار بالدرهم استرشادية وقابلة للتأكيد مع صاحب المطعم.',
    },
    preorderCta: {
      fr: 'Pré-commander sur WhatsApp',
      ar: 'اطلب مسبقاً عبر واتساب',
    },
    madUnit: { fr: 'MAD', ar: 'درهم' },
  },
  location: {
    eyebrow: { fr: 'Accès & Horaires', ar: 'الموقع وأوقات العمل' },
    title: {
      fr: 'Nous Trouver Facilement à Safi',
      ar: 'كيف تصل إلينا بسهولة في آسفي',
    },
    subtitle: {
      fr: 'Retrouvez notre adresse précise par Plus Code, nos repères de quartier et notre accueil matinal dès 09h15.',
      ar: 'اعثر على موقعنا بدقة عبر الرمز الإضافي ومعالم الحي، مع استقبالنا الصباحي ابتداءً من 09:15.',
    },
    plusCodeLabel: { fr: 'Plus Code Google Maps', ar: 'الرمز الإضافي على خرائط غوغل' },
    copyCode: { fr: 'Copier le code', ar: 'نسخ الرمز' },
    copiedCode: { fr: 'Copié', ar: 'تم النسخ' },
    landmarksTitle: {
      fr: 'Repères de quartier',
      ar: 'معالم الحي القريبة',
    },
    landmarksPlaceholder: {
      fr: 'Repères de quartier à confirmer avec le propriétaire (ex. avenue principale, mosquée, rond-point ou parking à proximité pour guider les familles).',
      ar: 'معالم الحي قيد التأكيد مع صاحب المطعم (مثال: الشارع الرئيسي، المسجد أو المدار القريب لتسهيل الوصول).',
    },
    openMapsBtn: {
      fr: 'Ouvrir dans Google Maps',
      ar: 'افتح في خرائط غوغل',
    },
    callGuideBtn: {
      fr: 'Appeler pour guidage',
      ar: 'اتصل للتوجيه',
    },
    hoursTitle: { fr: "Horaires d'Ouverture", ar: 'أوقات العمل' },
    hoursNotice: {
      fr: 'Dimanche confirmé dès 09h15 · Horaires complets de la semaine à confirmer avec le propriétaire.',
      ar: 'الأحد مؤكد ابتداءً من 09:15 · أوقات الأسبوع الكاملة قيد التأكيد مع صاحب المطعم.',
    },
    confirmedTag: { fr: 'Confirmé', ar: 'مؤكد' },
    pendingTag: { fr: 'À confirmer', ar: 'قيد التأكيد' },
  },
  inquiry: {
    eyebrow: { fr: 'Réservation & Commandes', ar: 'الحجز والطلبات المسبقة' },
    title: {
      fr: 'Réservez Votre Table ou Couscous sur WhatsApp',
      ar: 'احجز طاولتك أو قصعة الكسكس عبر واتساب',
    },
    subtitle: {
      fr: 'Préparez votre demande en quelques secondes et envoyez-la directement sur le WhatsApp du restaurant sans attente.',
      ar: 'جهّز طلبك في ثوانٍ وأرسله مباشرة إلى واتساب المطعم بدون تعقيدات.',
    },
    nameLabel: { fr: 'Votre Nom', ar: 'الاسم الكامل' },
    namePlaceholder: { fr: 'Ex. Karima Benali', ar: 'مثال: كريمة بنعلي' },
    typeLabel: { fr: 'Type de demande', ar: 'نوع الطلب' },
    types: {
      'table-ftour': { fr: 'Table Ftour Beldi', ar: 'طاولة فطور بلدي' },
      'table-dejeuner': { fr: 'Table Déjeuner Marocain', ar: 'طاولة غداء مغربي' },
      'commande-couscous': {
        fr: 'Commande Couscous Vendredi / Plat à Emporter',
        ar: 'طلب كسكس الجمعة / طبق عائلي',
      },
    },
    guestsLabel: { fr: 'Nombre de personnes', ar: 'عدد الأشخاص' },
    guestsPlaceholder: { fr: 'Ex. 4 personnes', ar: 'مثال: 4 أشخاص' },
    timeLabel: { fr: 'Jour & Heure souhaités', ar: 'اليوم والتوقيت المفضل' },
    timePlaceholder: { fr: 'Ex. Dimanche à 09h45', ar: 'مثال: الأحد على الساعة 09:45' },
    notesLabel: { fr: 'Précision facultative', ar: 'ملاحظة إضافية (اختياري)' },
    notesPlaceholder: {
      fr: 'Ex. Table en famille, sans sucre dans le thé...',
      ar: 'مثال: طاولة عائلية، شاي قليل السكر...',
    },
    previewLabel: { fr: 'Aperçu du message WhatsApp', ar: 'معاينة رسالة واتساب' },
    submitBtn: { fr: 'Envoyer sur WhatsApp', ar: 'إرسال عبر واتساب' },
    copyBtn: { fr: 'Copier le message', ar: 'نسخ الرسالة' },
    copiedBtn: { fr: 'Message copié', ar: 'تم نسخ الرسالة' },
    directNote: {
      fr: 'Réponse directe au +212 6 56 26 00 18',
      ar: 'تواصل مباشر على 18 00 26 56 6 212+',
    },
  },
  footer: {
    locationLine: { fr: '7QJC+CCJ, Safi 20160, Maroc', ar: '7QJC+CCJ، آسفي 20160، المغرب' },
    placeholderNote: {
      fr: 'Certains plats, tarifs indicatifs et horaires hebdomadaires sont présentés à titre de démonstration en attente de confirmation du propriétaire.',
      ar: 'بعض الأطباق والأسعار والأوقات المعروضة استرشادية في انتظار التأكيد النهائي من صاحب المطعم.',
    },
    attribution: {
      fr: 'Vitrine digitale propulsée par AereoStack',
      ar: 'واجهة رقمية من تطوير AereoStack',
    },
  },
};
