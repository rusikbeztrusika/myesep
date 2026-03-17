const DEFAULT_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: "",
  feedbackWebhookUrl: "",
  ownerProEmails: [],
  analytics: {
    googleTagId: "",
    plausibleDomain: "",
    yandexMetrikaId: ""
  }
};

const APP_CONFIG = {
  ...DEFAULT_CONFIG,
  ...(window.APP_CONFIG || {}),
  analytics: {
    ...DEFAULT_CONFIG.analytics,
    ...((window.APP_CONFIG && window.APP_CONFIG.analytics) || {})
  }
};
const AUTH_REDIRECT_URL = "https://myesep.kz";

const MRP_2026 = 4325;
const MZP_2026 = 85000;
const MRP = MRP_2026;
const MZP = MZP_2026;
const OPV_RATE = 0.10;
const SO_RATE = 0.05;
const OUR_SO_RATE = SO_RATE;
const VOSMS_BASE_FACTOR = 1.4;
const VOSMS_RATE = 0.05;
const SELF_LIMIT_MONTHLY_MRP = 300;
const SELF_LIMIT_ANNUAL_MRP = 3600;
const SIMPLIFIED_LIMIT_ANNUAL_MRP = 600000;
const SIMPLIFIED_SO_RATE = SO_RATE;
const IPN_RATE_910 = 0.04;
const IPN_RATE_910_ASTANA = 0.03;
const IPN_RATE_910_MIN = 0.02;
const IPN_RATE_910_MAX = 0.06;
const SELF_SOCIAL_COMPONENT_RATE = 0.01;
const IPN_RATE_SAMOZANYATY = 0;
const SELF_IPN_RATE = IPN_RATE_SAMOZANYATY;
const OPVR_RATE = 0.035;
const VOSMS_BASE = MZP_2026 * VOSMS_BASE_FACTOR;
const SIMPLIFIED_LIMIT_ANNUAL = MRP_2026 * SIMPLIFIED_LIMIT_ANNUAL_MRP;
const VYCHET_30MRP = 30 * MRP;
const OUR_SOC_TAX = 2 * MRP;
const OPV_MAX_BASE = MZP_2026 * 50;
const OPV_MAX_AMOUNT = OPV_MAX_BASE * OPV_RATE;

const RATES = {
  MRP,
  MZP,
  OPV_RATE,
  SO_RATE,
  OUR_SO_RATE,
  OPVR_RATE,
  VOSMS: Math.round(VOSMS_BASE * VOSMS_RATE),
  MAX_OPV_BASE: OPV_MAX_BASE,
  MAX_OPV_AMOUNT: OPV_MAX_AMOUNT
};
const SELF_LIMIT_MONTHLY = RATES.MRP * SELF_LIMIT_MONTHLY_MRP;
const SELF_LIMIT_ANNUAL = RATES.MRP * SELF_LIMIT_ANNUAL_MRP;
const IP_MIN_OPV = Math.round(RATES.MZP * RATES.OPV_RATE);
const IP_MIN_OPVR = Math.round(RATES.MZP * RATES.OPVR_RATE);
const IP_MIN_SO = Math.round(RATES.MZP * SO_RATE);
const IP_MIN_VOSMS = Math.round(RATES.VOSMS);
const IP_MIN_SOCIAL_PAYMENTS_TOTAL = IP_MIN_OPV + IP_MIN_OPVR + IP_MIN_SO + IP_MIN_VOSMS;

const MONTHS = ["РЇРЅРІ", "Р¤РµРІ", "РњР°СЂ", "РђРїСЂ", "РњР°Р№", "РСЋРЅ", "РСЋР»", "РђРІРі", "РЎРµРЅ", "РћРєС‚", "РќРѕСЏ", "Р”РµРє"];
const MONTHS_PREPOSITIONAL = ["СЏРЅРІР°СЂРµ", "С„РµРІСЂР°Р»Рµ", "РјР°СЂС‚Рµ", "Р°РїСЂРµР»Рµ", "РјР°Рµ", "РёСЋРЅРµ", "РёСЋР»Рµ", "Р°РІРіСѓСЃС‚Рµ", "СЃРµРЅС‚СЏР±СЂРµ", "РѕРєС‚СЏР±СЂРµ", "РЅРѕСЏР±СЂРµ", "РґРµРєР°Р±СЂРµ"];
const MONTHS_ACCUSATIVE = ["СЏРЅРІР°СЂСЊ", "С„РµРІСЂР°Р»СЊ", "РјР°СЂС‚", "Р°РїСЂРµР»СЊ", "РјР°Р№", "РёСЋРЅСЊ", "РёСЋР»СЊ", "Р°РІРіСѓСЃС‚", "СЃРµРЅС‚СЏР±СЂСЊ", "РѕРєС‚СЏР±СЂСЊ", "РЅРѕСЏР±СЂСЊ", "РґРµРєР°Р±СЂСЊ"];

const DEADLINES_2026 = [
  { id: 1, date: "2026-02-15", title: "РЎРґР°С‡Р° Р¤РќРћ 910 Р·Р° 2-Рµ РїРѕР»СѓРіРѕРґРёРµ 2025", type: "report", regime: "simplified" },
  { id: 2, date: "2026-02-25", title: "РЈРїР»Р°С‚Р° РЅР°Р»РѕРіРѕРІ РїРѕ Р¤РќРћ 910", type: "payment", regime: "simplified" },
  { id: 15, date: "2026-02-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° СЏРЅРІР°СЂСЊ", type: "payment", regime: "all" },
  { id: 16, date: "2026-03-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° С„РµРІСЂР°Р»СЊ", type: "payment", regime: "all" },
  { id: 3, date: "2026-03-31", title: "Р”РµРєР»Р°СЂР°С†РёСЏ РРџРќ (220.00) Р·Р° 2025", type: "report", regime: "our" },
  { id: 4, date: "2026-04-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° РјР°СЂС‚", type: "payment", regime: "all" },
  { id: 5, date: "2026-05-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° Р°РїСЂРµР»СЊ", type: "payment", regime: "all" },
  { id: 6, date: "2026-06-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° РјР°Р№", type: "payment", regime: "all" },
  { id: 9, date: "2026-07-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° РёСЋРЅСЊ", type: "payment", regime: "all" },
  { id: 7, date: "2026-08-15", title: "РЎРґР°С‡Р° Р¤РќРћ 910 Р·Р° 1-Рµ РїРѕР»СѓРіРѕРґРёРµ 2026", type: "report", regime: "simplified" },
  { id: 8, date: "2026-08-25", title: "РЈРїР»Р°С‚Р° РЅР°Р»РѕРіРѕРІ РїРѕ Р¤РќРћ 910", type: "payment", regime: "simplified" },
  { id: 10, date: "2026-08-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° РёСЋР»СЊ", type: "payment", regime: "all" },
  { id: 11, date: "2026-09-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° Р°РІРіСѓСЃС‚", type: "payment", regime: "all" },
  { id: 12, date: "2026-10-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° СЃРµРЅС‚СЏР±СЂСЊ", type: "payment", regime: "all" },
  { id: 13, date: "2026-11-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° РѕРєС‚СЏР±СЂСЊ", type: "payment", regime: "all" },
  { id: 14, date: "2026-12-25", title: "РЈРїР»Р°С‚Р° РћРџР’, РћРџР’Р , РЎРћ, Р’РћРЎРњРЎ Р·Р° РЅРѕСЏР±СЂСЊ", type: "payment", regime: "all" }
];

const STORAGE_KEY = "myesep_state_v1";
const ONBOARDING_TOUR_STORAGE_KEY = "onboardingTourDone";
const ONBOARDING_TOUR_FORCE_STORAGE_KEY = "onboardingTourForceOnce";
const ONBOARDING_TOUR_INCOME_STORAGE_KEY = "onboardingTourIncomeDone";
const ONBOARDING_TOUR_TAXES_STORAGE_KEY = "onboardingTourTaxesDone";
const ONBOARDING_TOUR_CALENDAR_STORAGE_KEY = "onboardingTourCalendarDone";
const OWNER_EMAIL_STORAGE_KEY = "myesep_owner_email_v1";
const HIDE_AMOUNTS_STORAGE_KEY = "hideAmounts";


let supabaseClient = null;
let eventCounter = 0;

const TRIAL_DAYS = 30;
const FREE_INCOME_MONTH_LIMIT = 5;
const PRO_PRICE_MONTHLY = 1990;
const ONBOARDING_FLOW_VERSION = 3;
const ONBOARDING_STEPS_TOTAL = 4;
const KAZAKHSTAN_CITIES = [
  "РђР»РјР°С‚С‹",
  "РђСЃС‚Р°РЅР°",
  "РЁС‹РјРєРµРЅС‚",
  "РђРєС‚Р°Сѓ",
  "РђРєС‚РѕР±Рµ",
  "РђС‚С‹СЂР°Сѓ",
  "Р–РµР·РєР°Р·РіР°РЅ",
  "РљР°СЂР°РіР°РЅРґР°",
  "РљРѕРєС€РµС‚Р°Сѓ",
  "РљРѕРЅР°РµРІ",
  "РљРѕСЃС‚Р°РЅР°Р№",
  "РљС‹Р·С‹Р»РѕСЂРґР°",
  "РџР°РІР»РѕРґР°СЂ",
  "РџРµС‚СЂРѕРїР°РІР»РѕРІСЃРє",
  "РЎРµРјРµР№",
  "РўР°Р»РґС‹РєРѕСЂРіР°РЅ",
  "РўР°СЂР°Р·",
  "РўСѓСЂРєРµСЃС‚Р°РЅ",
  "РЈСЂР°Р»СЊСЃРє",
  "РЈСЃС‚СЊ-РљР°РјРµРЅРѕРіРѕСЂСЃРє"
];
const SETTINGS_PROFILE_CITIES = [
  "РђР»РјР°С‚С‹",
  "РђСЃС‚Р°РЅР°",
  "РЁС‹РјРєРµРЅС‚",
  "РљР°СЂР°РіР°РЅРґР°",
  "РђРєС‚РѕР±Рµ",
  "РўР°СЂР°Р·",
  "РџР°РІР»РѕРґР°СЂ",
  "РЈСЃС‚СЊ-РљР°РјРµРЅРѕРіРѕСЂСЃРє",
  "РЎРµРјРµР№",
  "РђС‚С‹СЂР°Сѓ",
  "РљРѕСЃС‚Р°РЅР°Р№",
  "РљС‹Р·С‹Р»РѕСЂРґР°",
  "РЈСЂР°Р»СЊСЃРє",
  "РџРµС‚СЂРѕРїР°РІР»РѕРІСЃРє",
  "РђРєС‚Р°Сѓ",
  "РўРµРјРёСЂС‚Р°Сѓ",
  "Р”СЂСѓРіРѕР№ РіРѕСЂРѕРґ"
];
const BUSINESS_ACTIVITY_OPTIONS = [
  "Р РѕР·РЅРёС‡РЅР°СЏ С‚РѕСЂРіРѕРІР»СЏ",
  "РћРїС‚РѕРІР°СЏ С‚РѕСЂРіРѕРІР»СЏ",
  "РЈСЃР»СѓРіРё РЅР°СЃРµР»РµРЅРёСЋ",
  "IT Рё РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёРµ",
  "РЎС‚СЂРѕРёС‚РµР»СЊСЃС‚РІРѕ Рё СЂРµРјРѕРЅС‚",
  "РўСЂР°РЅСЃРїРѕСЂС‚ Рё РїРµСЂРµРІРѕР·РєРё",
  "РђСЂРµРЅРґР° РЅРµРґРІРёР¶РёРјРѕСЃС‚Рё",
  "РћР±С‰РµСЃС‚РІРµРЅРЅРѕРµ РїРёС‚Р°РЅРёРµ (РєР°С„Рµ, РґРѕСЃС‚Р°РІРєР°)",
  "РљСЂР°СЃРѕС‚Р° Рё Р·РґРѕСЂРѕРІСЊРµ (СЃР°Р»РѕРЅ, РјР°СЃСЃР°Р¶)",
  "РћР±СЂР°Р·РѕРІР°РЅРёРµ Рё СЂРµРїРµС‚РёС‚РѕСЂСЃС‚РІРѕ",
  "РњРµРґРёС†РёРЅСЃРєРёРµ СѓСЃР»СѓРіРё",
  "РЎРµР»СЊСЃРєРѕРµ С…РѕР·СЏР№СЃС‚РІРѕ",
  "Р”СЂСѓРіРѕРµ"
];
const PRO_FEATURES = {
  deadline_reminders: "РќР°РїРѕРјРёРЅР°РЅРёСЏ РїРѕ СЃСЂРѕРєР°Рј",
  unlimited_income_ops: "Р‘РµР·Р»РёРјРёС‚РЅС‹Рµ РѕРїРµСЂР°С†РёРё РґРѕС…РѕРґРѕРІ",
  exports: "Р­РєСЃРїРѕСЂС‚ CSV/Excel",
  advanced_analytics: "Р Р°СЃС€РёСЂРµРЅРЅР°СЏ Р°РЅР°Р»РёС‚РёРєР°"
};

const ONBOARDING_TOUR_STEPS = [
  {
    target: "tax-load",
    icon: "trending-up",
    title: "Р’Р°С€Рё РЅР°Р»РѕРіРё РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ",
    text: "Р—РґРµСЃСЊ РІСЃРµРіРґР° РІРёРґРЅРѕ СЃРєРѕР»СЊРєРѕ РЅСѓР¶РЅРѕ Р·Р°РїР»Р°С‚РёС‚СЊ РІ СЌС‚РѕРј РјРµСЃСЏС†Рµ. РќР°Р¶РјРёС‚Рµ РЅР° РєР°СЂС‚РѕС‡РєСѓ С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ РёР· С‡РµРіРѕ СЃРєР»Р°РґС‹РІР°РµС‚СЃСЏ СЃСѓРјРјР°."
  },
  {
    target: "income-chart",
    icon: "plus-circle",
    title: "Р”РѕР±Р°РІР»СЏР№С‚Рµ РґРѕС…РѕРґС‹",
    text: "Р’РЅРѕСЃРёС‚Рµ РґРѕС…РѕРґС‹ СЃСЋРґР° вЂ” СЃРёСЃС‚РµРјР° СЃР°РјР° РїРµСЂРµСЃС‡РёС‚Р°РµС‚ РЅР°Р»РѕРіРё. Р§РµРј С‚РѕС‡РЅРµРµ РґР°РЅРЅС‹Рµ, С‚РµРј С‚РѕС‡РЅРµРµ СЂР°СЃС‡С‘С‚."
  },
  {
    target: "next-deadline",
    icon: "calendar",
    title: "РќРµ РїСЂРѕРїСѓСЃС‚РёС‚Рµ СЃСЂРѕРє РѕРїР»Р°С‚С‹",
    text: "Р—РґРµСЃСЊ РІСЃРµРіРґР° РІРёРґРµРЅ СЃР»РµРґСѓСЋС‰РёР№ РЅР°Р»РѕРіРѕРІС‹Р№ СЃСЂРѕРє. Р—Р°Р№РґРёС‚Рµ РІ РљР°Р»РµРЅРґР°СЂСЊ С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ РІСЃРµ РґР°С‚С‹ РЅР° РіРѕРґ РІРїРµСЂС‘Рґ."
  },
  {
    target: "header-reminders",
    icon: "bell",
    title: "Р’РєР»СЋС‡РёС‚Рµ РЅР°РїРѕРјРёРЅР°РЅРёСЏ",
    text: "РџРµСЂРµРєР»СЋС‡РёС‚Рµ С‚СѓРјР±Р»РµСЂ В«РќР°РїРѕРјРёРЅР°РЅРёСЏВ», С‡С‚РѕР±С‹ РїРѕР»СѓС‡Р°С‚СЊ СѓРІРµРґРѕРјР»РµРЅРёСЏ Рѕ СЃСЂРѕРєР°С… РѕРїР»Р°С‚С‹ Рё РЅРёС‡РµРіРѕ РЅРµ РїСЂРѕРїСѓСЃС‚РёС‚СЊ."
  }
];

const ONBOARDING_TOUR_INCOME_STEPS = [
  {
    target: "income-form",
    icon: "plus-circle",
    title: "Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІСѓСЋ РѕРїРµСЂР°С†РёСЋ",
    text: "РЈРєР°Р¶РёС‚Рµ РґР°С‚Сѓ, СЃСѓРјРјСѓ Рё РєР°С‚РµРіРѕСЂРёСЋ РґРѕС…РѕРґР°. РџРѕСЃР»Рµ СЃРѕС…СЂР°РЅРµРЅРёСЏ Р·Р°РїРёСЃСЊ СЃСЂР°Р·Сѓ РїРѕРїР°РґРµС‚ РІ Р¶СѓСЂРЅР°Р»."
  },
  {
    target: "income-summary",
    icon: "wallet",
    title: "РЎРІРѕРґРєР° РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё",
    text: "Р—РґРµСЃСЊ РІРёРґРµРЅ РѕР±С‰РёР№ РґРѕС…РѕРґ, СЃСЂРµРґРЅРёР№ С‡РµРє Рё С‚РѕРї-РєР°С‚РµРіРѕСЂРёСЏ РїРѕ РїРѕСЃС‚СѓРїР»РµРЅРёСЏРј."
  },
  {
    target: "income-save",
    icon: "check-circle",
    title: "РЎРѕС…СЂР°РЅРёС‚Рµ РґРѕС…РѕРґ",
    text: "РќР°Р¶РјРёС‚Рµ СЌС‚Сѓ РєРЅРѕРїРєСѓ, С‡С‚РѕР±С‹ РґРѕР±Р°РІРёС‚СЊ РѕРїРµСЂР°С†РёСЋ. РќР°Р»РѕРіРё Рё РїСЂРѕРіРЅРѕР·С‹ РїРµСЂРµСЃС‡РёС‚Р°СЋС‚СЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё."
  }
];
const ONBOARDING_TOUR_TAXES_STEPS = [
  {
    target: "taxes-kpi",
    icon: "receipt",
    title: "РќР°Р»РѕРіРё РїРѕРґ РєРѕРЅС‚СЂРѕР»РµРј",
    text: "Р—РґРµСЃСЊ РІРёРґРЅР° РёС‚РѕРіРѕРІР°СЏ РЅР°РіСЂСѓР·РєР°, СЌС„С„РµРєС‚РёРІРЅР°СЏ СЃС‚Р°РІРєР° Рё СЂРµРєРѕРјРµРЅРґСѓРµРјС‹Р№ СЂРµР·РµСЂРІ РїРѕ РІР°С€РµРјСѓ СЃС†РµРЅР°СЂРёСЋ."
  },
  {
    target: "taxes-planner",
    icon: "sliders-horizontal",
    title: "РџР»Р°РЅРёСЂСѓР№С‚Рµ Р·Р°СЂР°РЅРµРµ",
    text: "РњРµРЅСЏР№С‚Рµ РґРѕС…РѕРґ Рё СЂР°СЃС…РѕРґС‹, С‡С‚РѕР±С‹ СЃСЂР°Р·Сѓ РІРёРґРµС‚СЊ РєР°Рє РјРµРЅСЏСЋС‚СЃСЏ РЅР°Р»РѕРіРё Рё РєР°РєРѕР№ СЂРµР¶РёРј РІС‹РіРѕРґРЅРµРµ."
  },
  {
    target: "taxes-deadline-focus",
    icon: "calendar",
    title: "РќРµ РїСЂРѕРїСѓСЃС‚РёС‚Рµ СЃСЂРѕРє",
    text: "Р—РґРµСЃСЊ РїРѕРєР°Р·Р°РЅРѕ С‡С‚Рѕ СЃРєРѕСЂРѕ РїР»Р°С‚РёС‚СЊ. РџРѕР»РЅС‹Р№ СЃРїРёСЃРѕРє РґР°С‚ РґРѕСЃС‚СѓРїРµРЅ РІ РљР°Р»РµРЅРґР°СЂРµ СЃСЂРѕРєРѕРІ."
  }
];
const ONBOARDING_TOUR_CALENDAR_STEPS = [
  {
    target: "calendar-overview",
    icon: "calendar",
    title: "РЎСЂРѕРєРё РїРѕРґ СЂСѓРєРѕР№",
    text: "Р—РґРµСЃСЊ РІРёРґРЅС‹ Р±Р»РёР¶Р°Р№С€РёРµ СЃСЂРѕРєРё, СЃРєРѕР»СЊРєРѕ Р·Р°РґР°С‡ РѕР¶РёРґР°СЋС‚ Рё С‡С‚Рѕ СѓР¶Рµ Р·Р°РєСЂС‹С‚Рѕ."
  },
  {
    target: "calendar-checklist-btn",
    icon: "check-circle",
    title: "РћС‚РєСЂС‹РІР°Р№С‚Рµ С‡РµРєР»РёСЃС‚ РїРѕ СЃСЂРѕРєСѓ",
    text: 'РќР°Р¶РјРёС‚Рµ "Р§РµРєР»РёСЃС‚", С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ С€Р°РіРё: С‡С‚Рѕ СЃРґРµР»Р°С‚СЊ, РєСѓРґР° Р·Р°Р№С‚Рё Рё РєР°РєРёРµ РґР°РЅРЅС‹Рµ РїРѕРґРіРѕС‚РѕРІРёС‚СЊ.'
  },
  {
    target: "calendar-reminder-entry",
    icon: "bell",
    title: "Р’РєР»СЋС‡Р°Р№С‚Рµ РЅР°РїРѕРјРёРЅР°РЅРёСЏ",
    text: "Р’РЅСѓС‚СЂРё С‡РµРєР»РёСЃС‚Р° РјРѕР¶РЅРѕ РІРєР»СЋС‡РёС‚СЊ РЅР°РїРѕРјРёРЅР°РЅРёСЏ РѕР± СѓРїР»Р°С‚Рµ РЅР°Р»РѕРіРѕРІ Р·Р° 7, 3, 1 РґРµРЅСЊ Рё РІ РґРµРЅСЊ СЃСЂРѕРєР°."
  }
];

const ONBOARDING_TOUR_SWIPE_THRESHOLD = 72;
const PROFILE_DEFAULT_IIN_PLACEHOLDERS = new Set(["831204350124", "831204350125"]);

const INCOME_CATEGORY_PRESETS = [
  "РЈСЃР»СѓРіРё",
  "РџСЂРѕРґР°Р¶Рё С‚РѕРІР°СЂРѕРІ",
  "РњР°СЂРєРµС‚РїР»РµР№СЃС‹",
  "РџРѕРґРїРёСЃРєРё / Р°Р±РѕРЅРїР»Р°С‚Р°",
  "РђСЂРµРЅРґР°",
  "РљРѕРјРёСЃСЃРёРё",
  "РџСЂРѕС‡РёРµ РґРѕС…РѕРґС‹"
];

const INCOME_CATEGORY_CUSTOM_VALUE = "__custom__";


const KNOWLEDGE_TOPICS = {
  all: "Р’СЃРµ С‚РµРјС‹",
  reports: "Р¤РќРћ Рё РѕС‚С‡РµС‚РЅРѕСЃС‚СЊ",
  contributions: "РћРџР’ / РЎРћ / Р’РћРЎРњРЎ",
  taxes: "РРџРќ Рё РЅР°Р»РѕРіРё",
  regimes: "Р РµР¶РёРјС‹ Рё Р»РёРјРёС‚С‹",
  payments: "РћРїР»Р°С‚Р° Рё СЂРµРєРІРёР·РёС‚С‹"
};

const FEEDBACK_CATEGORIES = [
  { id: "bug", label: "Р‘Р°Рі", hint: "РћРїРёС€РёС‚Рµ С‡С‚Рѕ СЃР»РѕРјР°Р»РѕСЃСЊ Рё РєР°Рє СЌС‚Рѕ РІРѕСЃРїСЂРѕРёР·РІРµСЃС‚Рё." },
  { id: "proposal", label: "РџСЂРµРґР»РѕР¶РµРЅРёРµ", hint: "Р§С‚Рѕ РґРѕР±Р°РІРёС‚СЊ РёР»Рё СѓР»СѓС‡С€РёС‚СЊ." },
  { id: "tax_question", label: "Р’РѕРїСЂРѕСЃ РїРѕ РЅР°Р»РѕРіР°Рј", hint: "РќСѓР¶РЅР° РїРѕРјРѕС‰СЊ СЃ СЂРµР¶РёРјРѕРј, РїР»Р°С‚РµР¶РѕРј РёР»Рё СЃСЂРѕРєРѕРј." },
  { id: "other", label: "Р”СЂСѓРіРѕРµ", hint: "Р›СЋР±РѕР№ РґСЂСѓРіРѕР№ РІРѕРїСЂРѕСЃ РёР»Рё РїРѕР¶РµР»Р°РЅРёРµ." }
];
const KNOWLEDGE_ARTICLES = [
  {
    id: "fno-910",
    topic: "reports",
    title: "Р¤РќРћ 910 (СѓРїСЂРѕС‰РµРЅРєР°)",
    summary: "РџРѕР»СѓРіРѕРґРѕРІР°СЏ С„РѕСЂРјР° РґР»СЏ РРџ РЅР° СЂРµР¶РёРјРµ 910.",
    practical: "РЎРґР°РІР°Р№С‚Рµ 2 СЂР°Р·Р° РІ РіРѕРґ: РґРѕ 15 С„РµРІСЂР°Р»СЏ Рё 15 Р°РІРіСѓСЃС‚Р°.",
    when: "15.02 Рё 15.08",
    formula: "РџРѕ РґР°РЅРЅС‹Рј РґРѕС…РѕРґРѕРІ Рё СЂР°СЃС‡РµС‚Р°Рј РѕР±СЏР·Р°С‚РµР»СЊРЅС‹С… РїР»Р°С‚РµР¶РµР№ Р·Р° РїРµСЂРёРѕРґ.",
    where: "cabinet.kgd.gov.kz -> РќР°Р»РѕРіРѕРІР°СЏ РѕС‚С‡РµС‚РЅРѕСЃС‚СЊ -> Р¤РќРћ 910",
    needs: ["РРРќ/Р‘РРќ Рё Р­Р¦Рџ", "Р”РѕС…РѕРґС‹ Р·Р° РїРµСЂРёРѕРґ", "РЎСѓРјРјС‹ РїР»Р°С‚РµР¶РµР№"],
    note: "Р­С‚Рѕ РїСЂР°РєС‚РёС‡РЅР°СЏ С€РїР°СЂРіР°Р»РєР°, РїРµСЂРµРґ РѕС‚РїСЂР°РІРєРѕР№ СЃРІРµСЂСЏР№С‚Рµ С„РѕСЂРјСѓ РІ РљР“Р”.",
    search: ["С„РЅРѕ", "910", "СѓРїСЂРѕС‰РµРЅРєР°", "РґРµРєР»Р°СЂР°С†РёСЏ"]
  },
  {
    id: "fno-220",
    topic: "reports",
    title: "Р¤РќРћ 220.00 (РћРЈР )",
    summary: "Р“РѕРґРѕРІР°СЏ РґРµРєР»Р°СЂР°С†РёСЏ РРџРќ РґР»СЏ РРџ РЅР° РћРЈР .",
    practical: "Р—Р°РєСЂРѕР№С‚Рµ РґРѕС…РѕРґС‹ Рё СЂР°СЃС…РѕРґС‹ Р·Р°СЂР°РЅРµРµ, С‡С‚РѕР±С‹ РѕС‚РїСЂР°РІРёС‚СЊ Р±РµР· СЃРїРµС€РєРё.",
    when: "РћР±С‹С‡РЅРѕ РґРѕ 31 РјР°СЂС‚Р°",
    formula: "РќР° Р±Р°Р·Рµ РіРѕРґРѕРІРѕРіРѕ РЅР°Р»РѕРіРѕРІРѕРіРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р° РїРѕ РћРЈР .",
    where: "cabinet.kgd.gov.kz -> Р”РµРєР»Р°СЂР°С†РёРё -> Р¤РќРћ 220.00",
    needs: ["Р”РѕС…РѕРґС‹/СЂР°СЃС…РѕРґС‹ Р·Р° РіРѕРґ", "РџРѕРґС‚РІРµСЂР¶РґР°СЋС‰РёРµ РґРѕРєСѓРјРµРЅС‚С‹", "Р­Р¦Рџ"],
    note: "РЎСЂРѕРєРё Рё С‚СЂРµР±РѕРІР°РЅРёСЏ РјРѕРіСѓС‚ РѕР±РЅРѕРІР»СЏС‚СЊСЃСЏ, РїСЂРѕРІРµСЂСЏР№С‚Рµ РѕС„РёС†РёР°Р»СЊРЅС‹Р№ РєР°Р±РёРЅРµС‚.",
    search: ["220", "РѕСѓСЂ", "РёРїРЅ", "РіРѕРґРѕРІР°СЏ"]
  },
  {
    id: "opv",
    topic: "contributions",
    title: "РћРџР’",
    summary: "РџРµРЅСЃРёРѕРЅРЅС‹Рµ РІР·РЅРѕСЃС‹, РІ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР° 10% РѕС‚ Р±Р°Р·С‹.",
    practical: "РћС‚РєР»Р°РґС‹РІР°Р№С‚Рµ РћРџР’ СЃСЂР°Р·Сѓ РїСЂРё РїРѕСЃС‚СѓРїР»РµРЅРёРё РѕРїР»Р°С‚С‹ РѕС‚ РєР»РёРµРЅС‚Р°.",
    when: "Р•Р¶РµРјРµСЃСЏС‡РЅРѕ, РѕР±С‹С‡РЅРѕ РґРѕ 25 С‡РёСЃР»Р° СЃР»РµРґСѓСЋС‰РµРіРѕ РјРµСЃСЏС†Р°",
    formula: "Р’ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР°: 10% РѕС‚ РґРѕС…РѕРґР° СЃ СѓС‡РµС‚РѕРј Р»РёРјРёС‚Р° Р±Р°Р·С‹.",
    where: "e-Salyq Business РёР»Рё Р±Р°РЅРє (Kaspi/Halyk)",
    needs: ["РЎСѓРјРјР° РґРѕС…РѕРґР°", "РљР‘Рљ/РЅР°Р·РЅР°С‡РµРЅРёРµ", "РџРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РїР»Р°С‚РµР¶Р°"],
    note: "РЎС‚Р°РІРєРё Рё РїСЂРµРґРµР»С‹ РјРµРЅСЏСЋС‚СЃСЏ, РїРµСЂРµРґ РѕРїР»Р°С‚РѕР№ СЃРІРµСЂСЏР№С‚Рµ Р°РєС‚СѓР°Р»СЊРЅС‹Рµ РїСЂР°РІРёР»Р°.",
    search: ["РѕРїРІ", "РїРµРЅСЃРёРѕРЅРЅС‹Рµ", "10"]
  },
  {
    id: "so",
    topic: "contributions",
    title: "РЎРћ",
    summary: "РЎРѕС†РёР°Р»СЊРЅС‹Рµ РѕС‚С‡РёСЃР»РµРЅРёСЏ, РІ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР° 5%.",
    practical: "РЎС‡РёС‚Р°Р№С‚Рµ РІРјРµСЃС‚Рµ СЃ РћРџР’, С‡С‚РѕР±С‹ РЅРµ РґРµР»Р°С‚СЊ РґРІРѕР№РЅСѓСЋ СЂСѓС‡РЅСѓСЋ РїСЂРѕРІРµСЂРєСѓ.",
    when: "Р•Р¶РµРјРµСЃСЏС‡РЅРѕ, РѕР±С‹С‡РЅРѕ РґРѕ 25 С‡РёСЃР»Р°",
    formula: "Р’ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР°: (РґРѕС…РѕРґ - РћРџР’) * 5%.",
    where: "e-Salyq Business / Р±Р°РЅРєРѕРІСЃРєРёРµ РїР»Р°С‚РµР¶Рё",
    needs: ["Р”РѕС…РѕРґ РјРµСЃСЏС†Р°", "РЎСѓРјРјР° РћРџР’", "Р РµРєРІРёР·РёС‚С‹ РїР»Р°С‚РµР¶Р°"],
    note: "РџСЂРѕРІРµСЂСЏР№С‚Рµ СЂР°СЃС‡РµС‚ РїРѕРґ РІР°С€ СЂРµР¶РёРј Рё С„Р°РєС‚РёС‡РµСЃРєРёР№ СЃС‚Р°С‚СѓСЃ.",
    search: ["СЃРѕ", "СЃРѕС†РёР°Р»СЊРЅС‹Рµ", "5%"]
  },
  {
    id: "vosms",
    topic: "contributions",
    title: "Р’РћРЎРњРЎ",
    summary: "РњРµРґРёС†РёРЅСЃРєРёР№ РІР·РЅРѕСЃ, РІ С‚РµРєСѓС‰РµР№ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР° С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹Р№.",
    practical: "Р’РєР»СЋС‡РёС‚Рµ РЅР°РїРѕРјРёРЅР°РЅРёРµ Рё РїР»Р°С‚РёС‚Рµ РІ РѕРґРёРЅ РґРµРЅСЊ СЃ РћРџР’/РЎРћ.",
    when: "Р•Р¶РµРјРµСЃСЏС‡РЅРѕ, РѕР±С‹С‡РЅРѕ РґРѕ 25 С‡РёСЃР»Р°",
    formula: `Р’ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР° С„РёРєСЃРёСЂРѕРІР°РЅРѕ: ${new Intl.NumberFormat("ru-KZ").format(RATES.VOSMS)} в‚ё.`,
    where: "e-Salyq Business / Kaspi / Halyk",
    needs: ["РЎСѓРјРјР°", "Р РµРєРІРёР·РёС‚С‹", "Р§РµРє РѕРїР»Р°С‚С‹"],
    note: "Р¤Р°РєС‚РёС‡РµСЃРєР°СЏ СЃСѓРјРјР° РјРѕР¶РµС‚ РѕР±РЅРѕРІР»СЏС‚СЊСЃСЏ СЂРµРіСѓР»СЏС‚РѕСЂРЅРѕ.",
    search: ["РІРѕСЃРјСЃ", "РѕСЃРјСЃ", "РјРµРґРёС†РёРЅР°"]
  },
  {
    id: "ipn-910",
    topic: "taxes",
    title: "РРџРќ РЅР° СЂРµР¶РёРјРµ 910",
    summary: "РРџРќ СѓС‡РёС‚С‹РІР°РµС‚СЃСЏ РІ СЃС‚СЂСѓРєС‚СѓСЂРµ РЅР°Р»РѕРіР° РїРѕ СѓРїСЂРѕС‰РµРЅРєРµ.",
    practical: "РџСЂРё СЃРєР°С‡РєР°С… РґРѕС…РѕРґР° СЃРІРµСЂСЏР№С‚Рµ РРџРќ РµР¶РµРјРµСЃСЏС‡РЅРѕ, Р° РЅРµ С‚РѕР»СЊРєРѕ РІ РєРѕРЅС†Рµ РїРµСЂРёРѕРґР°.",
    when: "Р’ СЂР°РјРєР°С… СЂР°СЃС‡РµС‚РѕРІ Р·Р° РїРµСЂРёРѕРґ",
    formula: "Р’ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР°: РґРѕС…РѕРґ * СЃС‚Р°РІРєР° СЂРµРіРёРѕРЅР° (2-6%) РµР¶РµРјРµСЃСЏС‡РЅРѕ.",
    where: "РљР°Р»СЊРєСѓР»СЏС‚РѕСЂ СЂРµР¶РёРјРѕРІ + СЃРІРµСЂРєР° РІ e-Salyq",
    needs: ["Р”РѕС…РѕРґ РїРµСЂРёРѕРґР°", "Р’С‹Р±СЂР°РЅРЅС‹Р№ СЂРµР¶РёРј 910"],
    note: "РњРѕРґРµР»СЊ РґР°РµС‚ РѕСЂРёРµРЅС‚РёСЂ, С„РёРЅР°Р»СЊРЅСѓСЋ СЃСѓРјРјСѓ СЃРІРµСЂСЏР№С‚Рµ РѕС„РёС†РёР°Р»СЊРЅРѕ.",
    search: ["РёРїРЅ", "910", "2-6%"]
  },
  {
    id: "esp-self",
    topic: "taxes",
    title: "Р•РЎРџ РґР»СЏ СЃР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ",
    summary: "Р¤РёРєСЃРёСЂРѕРІР°РЅРЅС‹Р№ РµР¶РµРјРµСЃСЏС‡РЅС‹Р№ РїР»Р°С‚РµР¶ РґР»СЏ СЃР°РјРѕР·Р°РЅСЏС‚С‹С… РІ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР°.",
    practical: "РџСЂРѕРІРµСЂСЊС‚Рµ, С‡С‚Рѕ РІР°С€ РІРёРґ РґРµСЏС‚РµР»СЊРЅРѕСЃС‚Рё РїРѕРґС…РѕРґРёС‚ РїРѕРґ СЌС‚РѕС‚ СЂРµР¶РёРј.",
    when: "Р•Р¶РµРјРµСЃСЏС‡РЅРѕ",
    formula: `Р’ РјРѕРґРµР»Рё СЃРµСЂРІРёСЃР°: ${new Intl.NumberFormat("ru-KZ").format(RATES.MRP)} в‚ё.`,
    where: "e-Salyq Business / Р±Р°РЅРє",
    needs: ["РЎС‚Р°С‚СѓСЃ СЃР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ", "РЎСѓРјРјР° РїР»Р°С‚РµР¶Р°", "РџРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РѕРїР»Р°С‚С‹"],
    note: "РџСЂРё СЂРѕСЃС‚Рµ РґРѕС…РѕРґР° РІРѕР·РјРѕР¶РЅРѕ РІС‹РіРѕРґРЅРµРµ РїРµСЂРµР№С‚Рё РЅР° РґСЂСѓРіРѕР№ СЂРµР¶РёРј.",
    search: ["РµСЃРї", "СЃР°РјРѕР·Р°РЅСЏС‚С‹Р№", String(RATES.MRP)]
  },
  {
    id: "limit-910",
    topic: "regimes",
    title: "Р›РёРјРёС‚ СЂРµР¶РёРјР° 910",
    summary: "РЈРїСЂРѕС‰РµРЅРєР° РёРјРµРµС‚ РіРѕРґРѕРІРѕР№ Р»РёРјРёС‚ РґРѕС…РѕРґР°.",
    practical: "РЎР»РµРґРёС‚Рµ Р·Р° РїСЂРѕРіСЂРµСЃСЃРѕРј Р»РёРјРёС‚Р° РєР°Р¶РґС‹Р№ РјРµСЃСЏС† С‡РµСЂРµР· РґР°С€Р±РѕСЂРґ.",
    when: "РџРѕСЃС‚РѕСЏРЅРЅРѕ РІ С‚РµС‡РµРЅРёРµ РіРѕРґР°",
    formula: `Р›РёРјРёС‚ РІ РјРѕРґРµР»Рё: ${new Intl.NumberFormat("ru-KZ").format(SIMPLIFIED_LIMIT_ANNUAL)} в‚ё/РіРѕРґ.`,
    where: "Р“Р»Р°РІРЅР°СЏ -> РџСЂРѕРіСЂРµСЃСЃ РґРѕ Р»РёРјРёС‚Р° СЂРµР¶РёРјР°",
    needs: ["Р”РѕС…РѕРґС‹ СЃ РЅР°С‡Р°Р»Р° РіРѕРґР°", "РўРµРєСѓС‰РёР№ С‚РµРјРї РґРѕС…РѕРґР°"],
    note: "РџСЂРё РїСЂРµРІС‹С€РµРЅРёРё Р»РёРјРёС‚Р° РЅСѓР¶РЅР° СЃРјРµРЅР° РЅР°Р»РѕРіРѕРІРѕРіРѕ СЂРµР¶РёРјР°.",
    search: ["Р»РёРјРёС‚", "910", "2 595 000 000", "2595000000"]
  },
  {
    id: "payment-check",
    topic: "payments",
    title: "РџР»Р°С‚РµР¶ Р±РµР· РѕС€РёР±РѕРє: Р±С‹СЃС‚СЂС‹Р№ С‡РµРє",
    summary: "РњРёРЅРё-С€РїР°СЂРіР°Р»РєР° РїРµСЂРµРґ РѕС‚РїСЂР°РІРєРѕР№ Р»СЋР±РѕРіРѕ РїР»Р°С‚РµР¶Р°.",
    practical: "РџРµСЂРµРґ РѕРїР»Р°С‚РѕР№ РїСЂРѕРІРµСЂСЊС‚Рµ РљР‘Рљ, РїРµСЂРёРѕРґ Рё РЅР°Р·РЅР°С‡РµРЅРёРµ - СЌС‚Рѕ СЌРєРѕРЅРѕРјРёС‚ РґРЅРё РЅР° СѓС‚РѕС‡РЅРµРЅРёСЏС….",
    when: "РџРµСЂРµРґ РєР°Р¶РґС‹Рј РїР»Р°С‚РµР¶РѕРј",
    formula: "РЎСѓРјРјР° РёР· РґР°С€Р±РѕСЂРґР° -> СЃРІРµСЂРєР° РІ РѕС„РёС†РёР°Р»СЊРЅРѕРј СЃРµСЂРІРёСЃРµ -> РѕРїР»Р°С‚Р°.",
    where: "e-Salyq Business / РєР°Р±РёРЅРµС‚ РљР“Р” / Р±Р°РЅРє",
    needs: ["РљР‘Рљ", "РџРµСЂРёРѕРґ", "РЎСѓРјРјР°", "РљРІРёС‚Р°РЅС†РёСЏ"],
    note: "Р•СЃР»Рё РїР»Р°С‚РµР¶ СѓС€РµР» РЅРµ С‚СѓРґР°, РѕР±С‹С‡РЅРѕ РїРѕС‚СЂРµР±СѓРµС‚СЃСЏ РїСЂРѕС†РµРґСѓСЂР° СѓС‚РѕС‡РЅРµРЅРёСЏ.",
    search: ["РєР±Рє", "РѕРїР»Р°С‚Р°", "РЅР°Р·РЅР°С‡РµРЅРёРµ", "СЂРµРєРІРёР·РёС‚С‹"]
  }
];

const KNOWLEDGE_ARTICLE_REGIMES = Object.freeze({
  "fno-910": "simplified",
  "fno-220": "our",
  "ipn-910": "simplified",
  "esp-self": "self",
  "limit-910": "simplified"
});

function getDefaultKnowledgeFilters() {
  return {
    query: "",
    topic: "all"
  };
}

function normalizeKnowledgeTopic(value) {
  return Object.prototype.hasOwnProperty.call(KNOWLEDGE_TOPICS, value) ? value : "all";
}

function createDefaultSubscription() {
  return {
    plan: "trial",
    status: "trial",
    trialStartedAt: "",
    trialEndsAt: "",
    proStartedAt: "",
    planExpiry: "",
    expiryNoticePending: false,
    lastExpiredPlanExpiry: ""
  };
}

function normalizeSubscription(raw) {
  const base = createDefaultSubscription();
  const next = raw && typeof raw === "object" ? { ...base, ...raw } : { ...base };

  const allowedPlans = ["trial", "pro", "free"];
  const allowedStatuses = ["free", "trialing", "trial", "active", "expired"];

  let plan = String(next.plan || "").trim().toLowerCase();
  if (!allowedPlans.includes(plan)) {
    plan = "trial";
  }
  if (plan === "free") {
    plan = "trial";
  }
  next.plan = plan;

  let status = String(next.status || "").trim().toLowerCase();
  if (!allowedStatuses.includes(status)) {
    status = next.plan === "pro" ? "active" : "trial";
  }
  if (next.plan === "pro") {
    status = "active";
  } else {
    status = "trial";
  }
  next.status = status;

  next.trialStartedAt = String(next.trialStartedAt || "");
  next.trialEndsAt = String(next.trialEndsAt || "");
  next.proStartedAt = String(next.proStartedAt || "");
  next.planExpiry = String(next.planExpiry || next.trialEndsAt || "");
  next.expiryNoticePending = Boolean(next.expiryNoticePending);
  next.lastExpiredPlanExpiry = String(next.lastExpiredPlanExpiry || "");

  if (next.plan !== "pro") {
    next.planExpiry = "";
  }

  return next;
}

function getFeatureTitle(featureKey) {
  return PRO_FEATURES[featureKey] || "Pro-С„СѓРЅРєС†РёСЏ";
}

function getPaywallReasonText(featureKey) {
  if (featureKey === "deadline_reminders") {
    return "РђРІС‚Рѕ-РЅР°РїРѕРјРёРЅР°РЅРёСЏ Р·Р° 7, 3, 1 РґРµРЅСЊ Рё РІ РґРµРЅСЊ СЃСЂРѕРєР° РїРѕРјРѕРіР°СЋС‚ РЅРµ РїСЂРѕРїСѓСЃРєР°С‚СЊ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рµ С€Р°РіРё.";
  }

  if (featureKey === "unlimited_income_ops") {
    return `Р’ Trial РґРѕСЃС‚СѓРїРЅРѕ РґРѕ ${FREE_INCOME_MONTH_LIMIT} РѕРїРµСЂР°С†РёР№ РґРѕС…РѕРґРѕРІ. Р’ Pro Р»РёРјРёС‚ СЃРЅСЏС‚.`;
  }

  if (featureKey === "exports") {
    return "Р­РєСЃРїРѕСЂС‚ CSV/Excel СѓСЃРєРѕСЂСЏРµС‚ РїРµСЂРµРґР°С‡Сѓ РґР°РЅРЅС‹С… Р±СѓС…РіР°Р»С‚РµСЂСѓ Рё РїРѕРґРіРѕС‚РѕРІРєСѓ РѕС‚С‡РµС‚РЅРѕСЃС‚Рё.";
  }

  if (featureKey === "advanced_analytics") {
    return "Р Р°СЃС€РёСЂРµРЅРЅР°СЏ Р°РЅР°Р»РёС‚РёРєР° РїРѕРєР°Р·С‹РІР°РµС‚ СЂРёСЃРє РїРѕ Р»РёРјРёС‚Сѓ Р·Р°СЂР°РЅРµРµ, С‡С‚РѕР±С‹ РІС‹ РЅРµ РІС‹С…РѕРґРёР»Рё Р·Р° СЂР°РјРєРё СЂРµР¶РёРјР°.";
  }

  return "Р­С‚Р° С„СѓРЅРєС†РёСЏ РґРѕСЃС‚СѓРїРЅР° РІ Pro.";
}

function getPaywallValueContext(featureKey) {
  if (featureKey === "deadline_reminders") {
    return {
      title: "РЎРЅРёР¶Р°РµС‚Рµ СЂРёСЃРє РїСЂРѕСЃСЂРѕС‡РµРє Рё С€С‚СЂР°С„РѕРІ",
      text: "РЎРµСЂРІРёСЃ РЅР°РїРѕРјРЅРёС‚ Рѕ СЃСЂРѕРєР°С… Р·Р°СЂР°РЅРµРµ Рё РїРѕРґСЃРєР°Р¶РµС‚, С‡С‚Рѕ РёРјРµРЅРЅРѕ РЅСѓР¶РЅРѕ СЃРґРµР»Р°С‚СЊ РїРѕ РєР°Р¶РґРѕРјСѓ РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІСѓ."
    };
  }

  if (featureKey === "unlimited_income_ops") {
    return {
      title: "Р’РµРґС‘С‚Рµ СѓС‡С‘С‚ Р±РµР· РѕРіСЂР°РЅРёС‡РµРЅРёР№",
      text: "Р”РѕР±Р°РІР»СЏР№С‚Рµ СЃРєРѕР»СЊРєРѕ СѓРіРѕРґРЅРѕ РѕРїРµСЂР°С†РёР№ РІ РјРµСЃСЏС† Рё РЅРµ С‚РµСЂСЏР№С‚Рµ РґР°РЅРЅС‹Рµ, РєРѕРіРґР° Р±РёР·РЅРµСЃ СЂР°СЃС‚РµС‚."
    };
  }

  if (featureKey === "exports") {
    return {
      title: "РћС‚РґР°С‘С‚Рµ РґР°РЅРЅС‹Рµ РІ Р±СѓС…РіР°Р»С‚РµСЂРёСЋ Р·Р° РјРёРЅСѓС‚Сѓ",
      text: "Р­РєСЃРїРѕСЂС‚РёСЂСѓР№С‚Рµ РѕРїРµСЂР°С†РёРё РІ СѓРґРѕР±РЅС‹Р№ С„Р°Р№Р» Рё СЃРѕРєСЂР°С‰Р°Р№С‚Рµ СЂСѓС‡РЅСѓСЋ СЂР°Р±РѕС‚Сѓ РїРµСЂРµРґ РѕС‚С‡РµС‚РЅС‹РјРё РґР°С‚Р°РјРё."
    };
  }

  if (featureKey === "advanced_analytics") {
    return {
      title: "Р’РёРґРёС‚Рµ СЂРёСЃРєРё РїРѕ СЂРµР¶РёРјСѓ Р·Р°СЂР°РЅРµРµ",
      text: "РџСЂРѕРіРЅРѕР· РїРѕ Р»РёРјРёС‚Сѓ РїРѕРјРѕРіР°РµС‚ РІРѕРІСЂРµРјСЏ СЃРєРѕСЂСЂРµРєС‚РёСЂРѕРІР°С‚СЊ СЃС‚СЂР°С‚РµРіРёСЋ Рё РЅРµ РїР»Р°С‚РёС‚СЊ Р»РёС€РЅРµРіРѕ."
    };
  }

  return {
    title: "РљРѕРЅС‚СЂРѕР»СЊ РЅР°Р»РѕРіРѕРІ Р±РµР· Р»РёС€РЅРµР№ СЂСѓС‚РёРЅС‹",
    text: "Р’СЃРµ РЅР°Р»РѕРіРё, СЃСЂРѕРєРё Рё СЂРёСЃРєРё вЂ” РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ."
  };
}

function getDaysLeft(dateString) {
  if (!dateString) return 0;
  const target = new Date(dateString);
  if (Number.isNaN(target.getTime())) return 0;

  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.max(0, Math.ceil((targetStart - dayStart) / 86400000));
}

function getProDaysLeft(subscription = state.subscription) {
  const expiry = String((subscription && subscription.planExpiry) || "").trim();
  if (!expiry) {
    return TRIAL_DAYS;
  }

  return Math.max(1, getDaysLeft(expiry));
}

function refreshSubscriptionState() {
  state.subscription = normalizeSubscription(state.subscription);

  let changed = false;
  const ownerAccount = isOwnerProAccount();

  if (ownerAccount) {
    const proActive = state.subscription.plan === "pro" && state.subscription.status === "active";

    if (proActive) {
      let proStart = new Date(state.subscription.proStartedAt || "");
      if (Number.isNaN(proStart.getTime())) {
        proStart = new Date();
        state.subscription.proStartedAt = proStart.toISOString();
        changed = true;
      }

      if (!state.subscription.planExpiry) {
        const expiry = new Date(proStart);
        expiry.setDate(expiry.getDate() + TRIAL_DAYS);
        state.subscription.planExpiry = expiry.toISOString();
        changed = true;
      }

      if (getDaysLeft(state.subscription.planExpiry) <= 0) {
        state.subscription.plan = "trial";
        state.subscription.status = "trial";
        state.subscription.lastExpiredPlanExpiry = state.subscription.planExpiry || state.subscription.lastExpiredPlanExpiry;
        state.subscription.planExpiry = "";
        state.subscription.trialEndsAt = "";
        state.subscription.expiryNoticePending = true;
        changed = true;
      }
    } else if (state.subscription.plan !== "trial" || state.subscription.status !== "trial" || state.subscription.planExpiry) {
      state.subscription.plan = "trial";
      state.subscription.status = "trial";
      state.subscription.planExpiry = "";
      state.subscription.trialEndsAt = "";
      changed = true;
    }
  } else {
    if (state.subscription.plan !== "trial" || state.subscription.status !== "trial" || state.subscription.planExpiry) {
      state.subscription.plan = "trial";
      state.subscription.status = "trial";
      state.subscription.planExpiry = "";
      state.subscription.trialEndsAt = "";
      state.subscription.expiryNoticePending = false;
      changed = true;
    }
  }

  state.isPro = state.subscription.plan === "pro" && state.subscription.status === "active";

  if (changed) {
    saveState();
  }
}

function isProActive() {
  refreshSubscriptionState();
  if (isOwnerProAccount() && state.ownerTrialPreview) {
    return false;
  }
  return state.subscription.plan === "pro" && state.subscription.status === "active";
}

function isTrialActive() {
  refreshSubscriptionState();
  if (isOwnerProAccount() && state.ownerTrialPreview) {
    return true;
  }
  return state.subscription.plan === "trial";
}

function canUseFeature(featureKey) {
  if (!(featureKey in PRO_FEATURES)) return true;
  return isProActive();
}

let proModalMobileStep = 1;

function setProModalMobileStep(step = 1) {
  const modalCard = document.querySelector("#proModal .pro-modal-card");
  const stepper = document.getElementById("proMobileStepper");
  const stepLabel = document.getElementById("proMobileStepLabel");
  const prevBtn = stepper ? stepper.querySelector("[data-action='pro-mobile-prev']") : null;
  const nextBtn = stepper ? stepper.querySelector("[data-action='pro-mobile-next']") : null;

  if (!modalCard || !stepper || !modalCard.classList.contains("pro-mobile-compact")) {
    return;
  }

  const safeStep = step === 2 ? 2 : 1;
  proModalMobileStep = safeStep;

  modalCard.classList.toggle("is-step-1", safeStep === 1);
  modalCard.classList.toggle("is-step-2", safeStep === 2);

  if (stepLabel) {
    stepLabel.textContent = `РЁР°Рі ${safeStep} РёР· 2`;
  }

  if (prevBtn) {
    prevBtn.disabled = safeStep === 1;
  }

  if (nextBtn) {
    nextBtn.textContent = safeStep === 1 ? "РџРѕРґСЂРѕР±РЅРµРµ" : "РЎРІРµСЂРЅСѓС‚СЊ";
  }
}

function renderProModal(featureKey = "") {
  const titleEl = document.getElementById("proModalTitle");
  const priceEl = document.getElementById("proModalPrice");
  const statusEl = document.getElementById("proModalStatus");
  const reasonEl = document.getElementById("proModalReason");
  const ctaEl = document.getElementById("proModalCta");
  const ctaMetaEl = document.getElementById("proModalCtaMeta");
  const focusCardEl = document.getElementById("proFocusCard");
  const focusTitleEl = document.getElementById("proFocusTitle");
  const focusTextEl = document.getElementById("proFocusText");
  const proofEl = document.getElementById("proProof");
  const modalCardEl = document.querySelector("#proModal .pro-modal-card");
  const mobileStepperEl = document.getElementById("proMobileStepper");
  const listTextNodes = [...document.querySelectorAll("#proModal .pro-list li span:last-child")];

  if (!titleEl || !statusEl || !reasonEl || !ctaEl) return;

  refreshSubscriptionState();
  const proActive = isProActive();
  const proDaysLeft = proActive ? getProDaysLeft(state.subscription) : 0;
  const isMobileCompact = isMobileViewport() && !proActive;

  const desktopListCopy = [
    "РќР°РїРѕРјРёРЅР°РЅРёСЏ Р·Р° 7, 3, 1 РґРµРЅСЊ Рё РІ РґРµРЅСЊ СЃСЂРѕРєР°",
    "РќРµРѕРіСЂР°РЅРёС‡РµРЅРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ РѕРїРµСЂР°С†РёР№ РґРѕС…РѕРґРѕРІ.",
    "Р­РєСЃРїРѕСЂС‚ CSV / Excel РґР»СЏ РѕС‚С‡С‘С‚РѕРІ Рё Р±СѓС…РіР°Р»С‚РµСЂР°",
    "РџСЂРѕРіРЅРѕР· Р»РёРјРёС‚Р° СЂРµР¶РёРјР° Рё СЂРёСЃРє-РїРѕРґСЃРІРµС‚РєР°"
  ];
  const mobileListCopy = [
    "РќР°РїРѕРјРёРЅР°РЅРёСЏ Рѕ СЃСЂРѕРєР°С…",
    "Р‘РµР·Р»РёРјРёС‚ РїРѕ РѕРїРµСЂР°С†РёСЏРј РґРѕС…РѕРґР°",
    "Р­РєСЃРїРѕСЂС‚ CSV / Excel",
    "РђРЅР°Р»РёС‚РёРєР° Рё СЂРёСЃРє-РїРѕРґСЃРІРµС‚РєР°"
  ];
  const activeListCopy = isMobileCompact ? mobileListCopy : desktopListCopy;
  listTextNodes.forEach((node, index) => {
    if (node && activeListCopy[index]) {
      node.textContent = activeListCopy[index];
    }
  });



  titleEl.textContent = "MyEsep Pro";
  if (priceEl) {
    priceEl.textContent = "30 РґРЅРµР№ Р±РµСЃРїР»Р°С‚РЅРѕ";
  }

  if (focusCardEl) {
    focusCardEl.classList.toggle("hidden", proActive);
  }

  if (proofEl) {
    proofEl.classList.toggle("hidden", proActive);
  }
  if (modalCardEl) {
    modalCardEl.classList.toggle("pro-mobile-compact", isMobileCompact);
    if (!isMobileCompact) {
      modalCardEl.classList.remove("is-step-1", "is-step-2");
    }
  }
  if (mobileStepperEl) {
    mobileStepperEl.classList.toggle("hidden", !isMobileCompact);
  }

  if (proActive) {
    statusEl.textContent = `Р’Р°С€ РїР»Р°РЅ: Pro Р°РєС‚РёРІРµРЅ (${proDaysLeft} РґРЅ.)`;


    statusEl.className = "pro-status active";
    ctaEl.textContent = "Pro СѓР¶Рµ Р°РєС‚РёРІРµРЅ";
    ctaEl.disabled = true;
    if (ctaMetaEl) {
      ctaMetaEl.hidden = false;
      ctaMetaEl.textContent = `Р”Рѕ РѕРєРѕРЅС‡Р°РЅРёСЏ РїСЂРѕР±РЅРѕРіРѕ Pro РѕСЃС‚Р°Р»РѕСЃСЊ ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}.`;
    }


  } else {
    statusEl.innerHTML = `<span class="pro-status-badge trial">Р’Р°С€ РїР»Р°РЅ: Trial</span>`;
    statusEl.className = "pro-status trial";
    ctaEl.textContent = "РђРєС‚РёРІРёСЂРѕРІР°С‚СЊ 30 РґРЅРµР№ Р±РµСЃРїР»Р°С‚РЅРѕ";
    ctaEl.disabled = false;
    if (ctaMetaEl) {
      ctaMetaEl.textContent = "";
      ctaMetaEl.hidden = true;
    }
  }

  if (featureKey) {
    reasonEl.textContent = `${getFeatureTitle(featureKey)}: ${getPaywallReasonText(featureKey)}`;
  } else if (proActive) {
    reasonEl.textContent = "Р”РѕСЃС‚СѓРї Р°РєС‚РёРІРµРЅ: РЅР°РїРѕРјРёРЅР°РЅРёСЏ, СЌРєСЃРїРѕСЂС‚ Рё Р°РЅР°Р»РёС‚РёРєР° СѓР¶Рµ СЂР°Р±РѕС‚Р°СЋС‚ РІ РІР°С€РµРј Р°РєРєР°СѓРЅС‚Рµ.";
  } else if (isMobileCompact) {
    reasonEl.textContent = "РџРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РЅР° 30 РґРЅРµР№ Р±РµР· РєР°СЂС‚С‹ Рё РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІ.";
  } else {
    reasonEl.textContent = "РџРѕР»СѓС‡РёС‚Рµ РїРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РЅР° 30 РґРЅРµР№ вЂ” Р±РµР· РєР°СЂС‚С‹, Р±РµР· РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІ.";
  }

  const context = getPaywallValueContext(featureKey);
  if (focusTitleEl) focusTitleEl.textContent = context.title;
  if (focusTextEl) {
    focusTextEl.textContent = isMobileCompact ? "Р’СЃРµ РЅР°Р»РѕРіРё, СЃСЂРѕРєРё Рё СЂРёСЃРєРё вЂ” РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ." : context.text;
  }
  if (isMobileCompact) {
    setProModalMobileStep(1);
  }
}
function requireFeature(featureKey, source = "") {
  if (canUseFeature(featureKey)) {
    return true;
  }

  if (!isOwnerProAccount()) {
    showBetaAccessModal("owner_only");
    trackEvent("paywall_owner_only", { feature: featureKey, source });
    return false;
  }

  state.paywallFeature = featureKey;
  saveState();
  renderProModal(featureKey);
  openModal(els.proModal);
  trackEvent("paywall_shown", { feature: featureKey, source });
  return false;
}

function activateProDemo(source = "manual") {
  if (!isOwnerProAccount()) {
    showBetaAccessModal("owner_only");
    return;
  }

  if (state.ownerTrialPreview) {
    state.ownerTrialPreview = false;
    state.paywallFeature = "";
    updatePlanUi();
    updateCalendarReminderToggleUi();
    closeModal(els.proModal);
    if (els.betaAccessModal) {
      closeModal(els.betaAccessModal);
    }
    renderDashboard();
    trackEvent("owner_trial_preview_exit", { source });
    return;
  }

  const start = new Date();
  const expiry = new Date(start);
  expiry.setDate(expiry.getDate() + TRIAL_DAYS);

  state.subscription = {
    ...normalizeSubscription(state.subscription),
    plan: "pro",
    status: "active",
    proStartedAt: start.toISOString(),
    planExpiry: expiry.toISOString(),
    trialEndsAt: "",
    expiryNoticePending: false
  };

  state.paywallFeature = "";
  refreshSubscriptionState();
  saveState();
  updatePlanUi();
  updateCalendarReminderToggleUi();
  closeModal(els.proModal);
  if (els.betaAccessModal) {
    closeModal(els.betaAccessModal);
  }
  renderDashboard();
  trackEvent("upgrade_pro", { mode: "beta_free", source });
}
function ensureTrialIfNeeded() {
  if (isOwnerProAccount()) {
    refreshSubscriptionState();
    return;
  }

  if (state.subscription.plan !== "trial" || state.subscription.status !== "trial" || state.subscription.planExpiry) {
    state.subscription.plan = "trial";
    state.subscription.status = "trial";
    state.subscription.planExpiry = "";
    state.subscription.trialEndsAt = "";
    state.subscription.expiryNoticePending = false;
    saveState();
  }
}

function getIncomeOpsCountForMonth(dateString) {
  const base = new Date(dateString);
  if (Number.isNaN(base.getTime())) return 0;

  return state.incomes.filter((row) => {
    const date = new Date(row.date);
    return date.getFullYear() === base.getFullYear() && date.getMonth() === base.getMonth();
  }).length;
}


function getIncomeOpsCountTotal() {
  return Array.isArray(state.incomes) ? state.incomes.length : 0;
}

function getBetaProBannerTone(daysLeft) {
  if (daysLeft > 14) return "pro-green";
  if (daysLeft >= 7) return "pro-yellow";
  return "pro-red";
}

function renderSidebarBetaBanner() {
  const bannerEl = els.sidebarBetaBanner;
  if (!bannerEl) return;

  const ownerAccount = isOwnerProAccount();
  const proActive = isProActive();

  if (ownerAccount && proActive) {
    const proDaysLeft = getProDaysLeft(state.subscription);
    const tone = getBetaProBannerTone(proDaysLeft);
    bannerEl.className = `sidebar-beta-banner pro ${tone}`;
    bannerEl.innerHTML = `<div class="beta-banner-text">Pro Р°РєС‚РёРІРµРЅ вЂ” РѕСЃС‚Р°Р»РѕСЃСЊ ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}</div>`;
    return;
  }

  bannerEl.className = "sidebar-beta-banner";
  bannerEl.innerHTML = `
    <div class="beta-banner-text">Trial: РґРѕ ${FREE_INCOME_MONTH_LIMIT} РѕРїРµСЂР°С†РёР№ РґРѕС…РѕРґРѕРІ.</div>
  `;
}

function showBetaAccessModal(mode = "limit") {
  if (!els.betaAccessModal || !els.betaAccessTitle || !els.betaAccessText || !els.betaAccessPrimary) {
    return;
  }

  if (mode === "owner_only") {
    els.betaAccessTitle.textContent = "Р”РѕСЃС‚СѓРї РѕРіСЂР°РЅРёС‡РµРЅ";
    els.betaAccessText.textContent = "Pro-СЂРµР¶РёРј РґРѕСЃС‚СѓРїРµРЅ С‚РѕР»СЊРєРѕ РґР»СЏ РѕСЃРЅРѕРІРЅРѕРіРѕ Р°РєРєР°СѓРЅС‚Р° РІР»Р°РґРµР»СЊС†Р°.";
    els.betaAccessPrimary.textContent = "РџРѕРЅСЏС‚РЅРѕ";
    els.betaAccessPrimary.dataset.action = "close-beta-modal";
  } else if (mode === "expired") {
    els.betaAccessTitle.textContent = "Р‘РµС‚Р°-РїРµСЂРёРѕРґ Р·Р°РІРµСЂС€С‘РЅ";
    els.betaAccessText.textContent = "Р‘РµС‚Р°-РїРµСЂРёРѕРґ Р·Р°РІРµСЂС€С‘РЅ. РЎРїР°СЃРёР±Рѕ! РЎРєРѕСЂРѕ РѕС‚РєСЂРѕРµРј РїРѕРґРїРёСЃРєСѓ.";
    els.betaAccessPrimary.textContent = "РџРѕРЅСЏС‚РЅРѕ";
    els.betaAccessPrimary.dataset.action = "close-beta-modal";
  } else if (isOwnerProAccount()) {
    els.betaAccessTitle.textContent = "Р›РёРјРёС‚ Р±РµСЃРїР»Р°С‚РЅРѕР№ РІРµСЂСЃРёРё";
    els.betaAccessText.textContent = "Р’С‹ РґРѕР±Р°РІРёР»Рё 5 РѕРїРµСЂР°С†РёР№ вЂ” СЌС‚Рѕ Р»РёРјРёС‚ Р±РµСЃРїР»Р°С‚РЅРѕР№ РІРµСЂСЃРёРё. РђРєС‚РёРІРёСЂСѓР№С‚Рµ 30 РґРЅРµР№ Pro Р±РµСЃРїР»Р°С‚РЅРѕ С‡С‚РѕР±С‹ РїСЂРѕРґРѕР»Р¶РёС‚СЊ.";
    els.betaAccessPrimary.textContent = "РђРєС‚РёРІРёСЂРѕРІР°С‚СЊ Р±РµСЃРїР»Р°С‚РЅРѕ";
    els.betaAccessPrimary.dataset.action = "activate-beta-pro";
  } else {
    els.betaAccessTitle.textContent = "Р›РёРјРёС‚ Р±РµСЃРїР»Р°С‚РЅРѕР№ РІРµСЂСЃРёРё";
    els.betaAccessText.textContent = `Р’С‹ РґРѕР±Р°РІРёР»Рё ${FREE_INCOME_MONTH_LIMIT} РѕРїРµСЂР°С†РёР№ вЂ” СЌС‚Рѕ Р»РёРјРёС‚ Trial.`;
    els.betaAccessPrimary.textContent = "РџРѕРЅСЏС‚РЅРѕ";
    els.betaAccessPrimary.dataset.action = "close-beta-modal";
  }

  openModal(els.betaAccessModal);
}

function exportIncomesCsv() {
  const filters = {
    ...getDefaultIncomeFilters(),
    ...(state.incomeFilters || {})
  };

  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const savedMonthStart = parseDashboardMonthKey(state.incomeSelectedMonth);
  const exportMonthStart = savedMonthStart && savedMonthStart.getTime() <= currentMonthStart.getTime() ? savedMonthStart : currentMonthStart;
  const monthRows = state.incomes.filter((row) => {
    const rowDate = new Date(row.date);
    return rowDate.getFullYear() === exportMonthStart.getFullYear() && rowDate.getMonth() === exportMonthStart.getMonth();
  });
  const rows = getSortedIncomes(getFilteredIncomes(monthRows, filters), filters.sort);
  const header = ["Р”Р°С‚Р°", "РљР°С‚РµРіРѕСЂРёСЏ", "РљРѕРјРјРµРЅС‚Р°СЂРёР№", "РЎСѓРјРјР°"];

  const csvRows = [
    header.join(";"),
    ...rows.map((row, index) => {
      const cells = [
        formatDate(row.date),
        String(row.category || ""),
        String(row.comment || ""),
        String(Math.round(row.amount || 0))
      ].map((value) => `"${String(value).replaceAll('"', '""')}"`);

      return cells.join(";");
    })
  ];

  const blob = new Blob([`\ufeff${csvRows.join("\n")}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `myesep-income-${today}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getDefaultIncomeFilters() {
  return {
    query: "",
    category: "all",
    sort: "date_desc"
  };
}

function normalizeIncomeFilterSort(value) {
  const allowed = ["date_desc", "date_asc", "amount_desc", "amount_asc"];
  return allowed.includes(value) ? value : "date_desc";
}

function getDefaultCalendarFilters() {
  return {
    query: "",
    type: "all",
    status: "all",
    timeframe: "upcoming"
  };
}

function normalizeCalendarType(value) {
  const allowed = ["all", "payment", "report"];
  return allowed.includes(value) ? value : "all";
}

function normalizeCalendarStatus(value) {
  const allowed = ["all", "pending", "done"];
  return allowed.includes(value) ? value : "all";
}

function normalizeCalendarTimeframe(value) {
  const allowed = ["upcoming", "year", "all"];
  return allowed.includes(value) ? value : "upcoming";
}

function getDefaultTaxPlanner() {
  return {
    income: 500000,
    expenses: 0,
    reservePct: 15
  };
}

function normalizeTaxPlanner(raw, fallbackIncome = 0, fallbackExpenses = 0, fallbackReservePct = 15) {
  const source = raw && typeof raw === "object" ? raw : {};

  const incomeInput = Number(source.income ?? fallbackIncome);
  const income = Math.max(0, Math.round(Number.isFinite(incomeInput) ? incomeInput : 0));

  const maxExpenses = Math.round(income * 0.95);
  const expensesInput = Number(source.expenses ?? fallbackExpenses);
  const expenses = Math.min(Math.max(0, Math.round(Number.isFinite(expensesInput) ? expensesInput : 0)), maxExpenses);

  const reserveInput = Number(source.reservePct ?? fallbackReservePct);
  const reservePct = Math.min(50, Math.max(0, Math.round(Number.isFinite(reserveInput) ? reserveInput : 15)));

  return {
    income,
    expenses,
    reservePct
  };
}


function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function getConfiguredOwnerEmails() {
  const source = Array.isArray(APP_CONFIG.ownerProEmails) ? APP_CONFIG.ownerProEmails : [];
  return [...new Set(source.map((value) => normalizeEmail(value)).filter(Boolean))];
}

function getStoredOwnerEmail() {
  try {
    return normalizeEmail(localStorage.getItem(OWNER_EMAIL_STORAGE_KEY));
  } catch (error) {
    return "";
  }
}

function setStoredOwnerEmail(email) {
  try {
    if (email) {
      localStorage.setItem(OWNER_EMAIL_STORAGE_KEY, email);
    }
  } catch (error) {
    // ignore storage errors in private mode
  }
}

function ensureOwnerEmailBinding() {
  const configuredOwners = getConfiguredOwnerEmails();
  if (configuredOwners.length > 0) {
    return;
  }

  const storedOwner = getStoredOwnerEmail();
  if (storedOwner) {
    return;
  }

  const currentEmail = normalizeEmail(state.userEmail);
  if (currentEmail) {
    setStoredOwnerEmail(currentEmail);
  }
}

function isOwnerProAccount(email = state.userEmail) {
  const currentEmail = normalizeEmail(email);
  if (!currentEmail) {
    return false;
  }

  const configuredOwners = getConfiguredOwnerEmails();
  if (configuredOwners.length > 0) {
    return configuredOwners.includes(currentEmail);
  }

  const storedOwner = getStoredOwnerEmail();
  return Boolean(storedOwner && storedOwner === currentEmail);
}

function createDefaultOnboarding() {
  return {
    version: ONBOARDING_FLOW_VERSION,
    completed: false,
    step: 1,
    regime: "simplified",
    income: 400000,
    userEmail: ""
  };
}

function normalizeOnboarding(raw) {
  const base = createDefaultOnboarding();
  const source = raw && typeof raw === "object" ? raw : {};
  const versionInput = Number(source.version);
  const rawVersion = Number.isFinite(versionInput) && versionInput > 0 ? Math.round(versionInput) : base.version;
  const regime = ["self", "simplified", "our"].includes(source.regime) ? source.regime : base.regime;
  const stepInput = Number(source.step);
  let step = Math.min(ONBOARDING_STEPS_TOTAL, Math.max(1, Math.round(Number.isFinite(stepInput) ? stepInput : base.step)));
  const income = normalizeIncome(source.income ?? base.income);
  const userEmail = normalizeEmail(source.userEmail || base.userEmail);
  const completed = source.completed === true || source.completed === 1 || source.completed === "1" || source.completed === "true";

  if (!completed && rawVersion < ONBOARDING_FLOW_VERSION && step >= 2) {
    step = Math.min(ONBOARDING_STEPS_TOTAL, step + 1);
  }

  const version = Math.max(rawVersion, ONBOARDING_FLOW_VERSION);

  return {
    version,
    completed,
    step,
    regime,
    income,
    userEmail
  };
}

function shouldShowOnboarding() {
  return state.isLoggedIn && !state.onboarding.completed;
}

function prepareOnboardingAfterLogin() {
  const currentEmail = normalizeEmail(state.userEmail);
  const onboarding = normalizeOnboarding(state.onboarding);
  const completedForCurrentUser = onboarding.completed && onboarding.userEmail === currentEmail;

  if (completedForCurrentUser) {
    state.onboarding = {
      ...onboarding,
      version: ONBOARDING_FLOW_VERSION,
      step: ONBOARDING_STEPS_TOTAL,
      userEmail: currentEmail
    };
    return;
  }

  const fallbackIncome = Math.max(normalizeIncome(state.calcIncome), onboarding.income, 200000);
  state.onboarding = {
    ...onboarding,
    version: ONBOARDING_FLOW_VERSION,
    completed: false,
    step: 1,
    income: fallbackIncome,
    userEmail: currentEmail
  };
}

const REMINDER_LEAD_DAYS = [7, 3, 1, 0];
function getReminderDefaultEmail() {
  const profileEmail = state && typeof state.user === "object" ? String(state.user.email || "").trim() : "";
  if (profileEmail) return profileEmail;
  return String(state.userEmail || "").trim();
}

function getDefaultGlobalReminders() {
  return {
    email: getReminderDefaultEmail(),
    telegram: "",
    telegramConnected: false,
    days: [...REMINDER_LEAD_DAYS],
    enabled: true
  };
}

function normalizeGlobalReminders(raw, fallbackEmail = "") {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const email = String(raw.email || fallbackEmail || "").trim();
  const telegram = String(raw.telegram || "").trim();
  const telegramConnected = raw.telegramConnected === true || raw.telegramConnected === "true" || raw.telegramConnected === 1 || raw.telegramConnected === "1" || Boolean(telegram);
  const sourceDays = Array.isArray(raw.days) ? raw.days : REMINDER_LEAD_DAYS;
  const days = [...new Set(sourceDays.map((item) => Number(item)).filter((item) => Number.isFinite(item) && REMINDER_LEAD_DAYS.includes(item)))].sort((a, b) => b - a);
  const hasEnabled = Object.prototype.hasOwnProperty.call(raw, "enabled");
  const enabled = hasEnabled
    ? (raw.enabled === true || raw.enabled === "true" || raw.enabled === 1 || raw.enabled === "1")
    : true;

  return {
    email,
    telegram,
    telegramConnected,
    days: days.length > 0 ? days : [...REMINDER_LEAD_DAYS],
    enabled
  };
}

function getGlobalReminderChannels(reminders) {
  const channels = [];
  if (reminders && String(reminders.email || "").trim()) channels.push("Email");
  if (reminders && (Boolean(reminders.telegramConnected) || String(reminders.telegram || "").trim())) channels.push("Telegram");
  return channels;
}

function getReminderTelegramStartId() {
  const directId = String(state.userId || "").trim();
  if (directId) {
    return directId;
  }

  const nestedId = state && state.user && typeof state.user === "object" ? String(state.user.id || "").trim() : "";
  if (nestedId) {
    return nestedId;
  }

  const email = String(state.userEmail || "").trim();
  return email || "guest";
}

function syncRemindersTelegramUi(model = null) {
  const normalized = model || normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();
  const telegramConnected = Boolean(normalized.telegramConnected || normalized.telegram);

  if (els.remindersTelegramConnectBtn) {
    els.remindersTelegramConnectBtn.classList.toggle("hidden", telegramConnected);
  }

  if (els.remindersTelegramConnectedBadge) {
    els.remindersTelegramConnectedBadge.classList.toggle("hidden", !telegramConnected);
  }
}
function normalizeDeadlineCompletionMeta(raw) {
  if (!raw || typeof raw !== "object") return {};

  const normalized = {};

  Object.entries(raw).forEach(([deadlineId, value]) => {
    const id = Number(deadlineId);
    if (!Number.isFinite(id) || id <= 0 || !value || typeof value !== "object") return;

    const source = String(value.source || "").trim();
    if (source !== "manual" && source !== "pre_service") return;

    normalized[String(id)] = { source };
  });

  return normalized;
}
function normalizeDeadlineChecklistProgress(raw) {
  if (!raw || typeof raw !== "object") return {};

  const normalized = {};

  Object.entries(raw).forEach(([deadlineId, value]) => {
    const id = Number(deadlineId);
    if (!Number.isFinite(id) || id <= 0 || !value || typeof value !== "object") return;

    const next = {};
    Object.entries(value).forEach(([taskKey, checked]) => {
      if (!taskKey) return;
      if (Boolean(checked)) {
        next[String(taskKey)] = true;
      }
    });

    if (Object.keys(next).length > 0) {
      normalized[String(id)] = next;
    }
  });

  return normalized;
}

function normalizeDeadlineReminderSettings(raw, fallbackEmail = "") {
  if (!raw || typeof raw !== "object") return {};

  const normalized = {};

  Object.entries(raw).forEach(([deadlineId, value]) => {
    const id = Number(deadlineId);
    if (!Number.isFinite(id) || id <= 0 || !value || typeof value !== "object") return;

    const channels = value.channels && typeof value.channels === "object" ? value.channels : {};
    const leadDaysSource = Array.isArray(value.leadDays) ? value.leadDays : REMINDER_LEAD_DAYS;

    const leadDays = [...new Set(leadDaysSource.map((item) => Number(item)).filter((item) => Number.isFinite(item) && item >= 0 && item <= 30))]
      .sort((a, b) => b - a);

    normalized[String(id)] = {
      channels: {
        telegram: Boolean(channels.telegram),
        email: Boolean(channels.email)
      },
      contacts: {
        telegram: String(value.contacts && value.contacts.telegram ? value.contacts.telegram : "").trim(),
        email: String(value.contacts && value.contacts.email ? value.contacts.email : fallbackEmail).trim()
      },
      leadDays: leadDays.length > 0 ? leadDays : [...REMINDER_LEAD_DAYS]
    };
  });

  return normalized;
}

function getDeadlineReminderSettings(deadlineId) {
  const key = String(deadlineId);
  const fallbackEmail = state.userEmail && state.userEmail.includes("@") ? state.userEmail : "";
  const source = state.deadlineReminderSettings[key] || {};
  const normalizedMap = normalizeDeadlineReminderSettings({ [key]: source }, fallbackEmail);
  const normalized = normalizedMap[key] || {
    channels: { telegram: false, email: true },
    contacts: { telegram: "", email: fallbackEmail },
    leadDays: [...REMINDER_LEAD_DAYS]
  };

  if (!state.deadlineReminderSettings[key]) {
    state.deadlineReminderSettings[key] = normalized;
  }

  return normalized;
}

function updateDeadlineReminderSubscription(deadlineId) {
  const hasSettings = state.deadlineReminderSettings[String(deadlineId)];
  if (!hasSettings) return;

  const channels = hasSettings.channels || {};
  const enabled = Boolean(channels.telegram || channels.email);
  const exists = state.deadlineReminderIds.includes(deadlineId);

  if (enabled && !exists) {
    state.deadlineReminderIds.push(deadlineId);
  }

  if (!enabled && exists) {
    state.deadlineReminderIds = state.deadlineReminderIds.filter((id) => id !== deadlineId);
  }
}

const state = {
  isLoggedIn: false,
  userEmail: "",
  userId: "",
  page: "dashboard",
  isPro: false,
  ownerTrialPreview: false,
  regime: "simplified",
  incomes: [],
  doneDeadlines: [],
  deadlineCompletionMeta: {},
  calendarPreServiceApplied: false,
  registrationDate: "",
  profile: {
    name: "РРџ РЎР°СЂСЃРµРЅРѕРІ Рђ.",
    iin: "",
    city: "РђР»РјР°С‚С‹",
    activity: "IT-СѓСЃР»СѓРіРё",
    simplifiedRate: "",
    deadlineTrackingFrom: ""
  },
  calcIncome: 500000,
  calcExpenses: 0,
  calcPeriod: "month",
  landingPeriod: "month",
  landingSuggestedRegime: "simplified",
  landingDeadlineOpenId: null,
  deadlineReminderIds: [],
  deadlineChecklistProgress: {},
  deadlineReminderSettings: {},
  remindersEnabled: false,
  reminders: null,
  subscription: createDefaultSubscription(),
  paywallFeature: "",
  incomeEditId: null,
  incomeFilters: getDefaultIncomeFilters(),
  incomeSelectedMonth: null,
  calendarFilters: getDefaultCalendarFilters(),
  knowledgeFilters: getDefaultKnowledgeFilters(),
  taxPlanner: getDefaultTaxPlanner(),
  onboarding: createDefaultOnboarding(),
  dashboardSelectedMonth: new Date().getMonth(),
  dashboardRecentMonth: null,
  hideAmounts: false
};

let dashboardDemoMode = false;
let dashboardDemoIncomes = [];
let pendingIncomeDeleteId = null;
let lastRenderedPage = null;
let calculatorInputRenderTimer = null;
let appToastTimer = null;
const CALENDAR_REMINDER_POPOVER_ID = "calendarReminderPopover";
let incomeTrialBannerDismissed = false;
let dashboardKpiSheetData = null;
let mobileTaxPlannerAdvancedOpen = false;
const onboardingTourState = {
  active: false,
  step: 0,
  swipeStartY: null,
  page: null,
  forceOpen: false
};

const els = {
  publicApp: document.getElementById("publicApp"),
  dashboardApp: document.getElementById("dashboardApp"),
  landingIncome: document.getElementById("landingIncome"),
  landingCards: document.getElementById("landingCards"),
  landingSummary: document.getElementById("landingSummary"),
  landingDeadlines: document.getElementById("landingDeadlines"),
  loginModal: document.getElementById("loginModal"),
  loginForm: document.getElementById("loginForm"),
  loginEmail: document.getElementById("loginEmail"),
  loginPassword: document.getElementById("loginPassword"),
  loginLegalConsentWrap: document.getElementById("loginLegalConsentWrap"),
  loginLegalConsent: document.getElementById("loginLegalConsent"),
  loginAuthMode: document.getElementById("loginAuthMode"),
  loginSubmitBtn: document.getElementById("loginSubmitBtn"),
  loginHelper: document.getElementById("loginHelper"),
  loginStatus: document.getElementById("loginStatus"),
  proModal: document.getElementById("proModal"),
  deadlineModal: document.getElementById("deadlineModal"),
  deadlineModalDate: document.getElementById("deadlineModalDate"),
  deadlineModalTitle: document.getElementById("deadlineModalTitle"),
  deadlineModalMeta: document.getElementById("deadlineModalMeta"),
  deadlineModalChecklist: document.getElementById("deadlineModalChecklist"),
  deadlineModalSubscribe: document.getElementById("deadlineModalSubscribe"),
  deadlineModalHint: document.getElementById("deadlineModalHint"),
  deadlineModalReminderPanel: document.getElementById("deadlineModalReminderPanel"),
  remindersSetupModal: document.getElementById("remindersSetupModal"),
  remindersSetupTitle: document.getElementById("remindersSetupTitle"),
  remindersSettingsForm: document.getElementById("remindersSettingsForm"),
  remindersSettingsEmail: document.getElementById("remindersSettingsEmail"),
  remindersTelegramConnectBtn: document.getElementById("remindersTelegramConnectBtn"),
  remindersTelegramConnectedBadge: document.getElementById("remindersTelegramConnectedBadge"),
  remindersSettingsHint: document.getElementById("remindersSettingsHint"),
  remindersSettingsSubmit: document.getElementById("remindersSettingsSubmit"),
  remindersSettingsDisableLink: document.getElementById("remindersSettingsDisableLink"),
  taxLoadModal: document.getElementById("taxLoadModal"),
  taxLoadModalTitle: document.getElementById("taxLoadModalTitle"),
  taxLoadModalBody: document.getElementById("taxLoadModalBody"),
  dashboardKpiSheetModal: document.getElementById("dashboardKpiSheetModal"),
  dashboardKpiSheetTitle: document.getElementById("dashboardKpiSheetTitle"),
  dashboardKpiSheetBody: document.getElementById("dashboardKpiSheetBody"),
  incomeDeleteModal: document.getElementById("incomeDeleteModal"),
  incomeDeleteMessage: document.getElementById("incomeDeleteMessage"),
  pageContent: document.getElementById("pageContent"),
  pageTitle: document.getElementById("pageTitle"),
  amountsVisibilityBtn: document.getElementById("amountsVisibilityBtn"),
  mobileAmountsVisibilityBtn: document.getElementById("mobileAmountsVisibilityBtn"),
  calendarReminderToggle: document.getElementById("calendarReminderToggle"),
  mobileDrawerReminderToggle: document.getElementById("mobileDrawerReminderToggle"),
  regimeSelect: document.getElementById("regimeSelect"),
  sidebarNav: document.getElementById("sidebarNav"),
  accountName: document.getElementById("accountName"),
  planBadge: document.getElementById("planBadge"),
  sidebarBetaBanner: document.getElementById("sidebarBetaBanner"),
  proBtn: document.getElementById("proBtn"),
  betaAccessModal: document.getElementById("betaAccessModal"),
  betaAccessTitle: document.getElementById("betaAccessTitle"),
  betaAccessText: document.getElementById("betaAccessText"),
  betaAccessPrimary: document.getElementById("betaAccessPrimary"),
  mobileMoreModal: document.getElementById("mobileMoreModal"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  mobileDrawerOverlay: document.getElementById("mobileDrawerOverlay"),
  mobileDrawerUserName: document.getElementById("mobileDrawerUserName"),
  mobileDrawerUserEmail: document.getElementById("mobileDrawerUserEmail"),
  mobileDrawerPlanBadge: document.getElementById("mobileDrawerPlanBadge"),
  mobileDrawerAvatar: document.getElementById("mobileDrawerAvatar"),
  mobileDrawerProBtn: document.getElementById("mobileDrawerProBtn")
};

const PAGE_TITLES = {
  dashboard: "Р“Р»Р°РІРЅР°СЏ",
  income: "Р”РѕС…РѕРґС‹",
  taxes: "РќР°Р»РѕРіРё Рё РїР»Р°С‚РµР¶Рё",
  calendar: "РљР°Р»РµРЅРґР°СЂСЊ СЃСЂРѕРєРѕРІ",
  calculator: "РљР°Р»СЊРєСѓР»СЏС‚РѕСЂ СЂРµР¶РёРјРѕРІ",
  knowledge: "Р‘Р°Р·Р° Р·РЅР°РЅРёР№ Р Рљ",
  feedback: "РћР±СЂР°С‚РЅР°СЏ СЃРІСЏР·СЊ",
  settings: "РќР°СЃС‚СЂРѕР№РєРё"
};

init();

async function init() {
  initAnalyticsProviders();
  initSupabase();
  loadState();
  refreshSubscriptionState();
  bindBaseEvents();
  updateLoginConsentState();
  try {
    renderLandingCards();
  } catch (error) {
    console.error("Landing calculator render failed:", error);
    if (els.landingCards) {
      els.landingCards.innerHTML = '<p class="deadline-empty">РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚СЂРёСЃРѕРІР°С‚СЊ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ. РћР±РЅРѕРІРёС‚Рµ СЃС‚СЂР°РЅРёС†Сѓ.</p>';
    }
  }
  try {
    renderLandingDeadlines();
  } catch (error) {
    console.error("Landing deadlines render failed:", error);
    if (els.landingDeadlines) {
      els.landingDeadlines.innerHTML = '<p class="deadline-empty">РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ СЃСЂРѕРєРё. РћР±РЅРѕРІРёС‚Рµ СЃС‚СЂР°РЅРёС†Сѓ.</p>';
    }
  }
  updateAuthUi();
  if (supabaseClient) {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session && data.session.user) {
      state.isLoggedIn = true;
      state.userEmail = data.session.user.email || state.userEmail;
      state.userId = data.session.user.id || state.userId;
      prepareOnboardingAfterLogin();
      ensureOwnerEmailBinding();
      ensureTrialIfNeeded();
      ensureDeadlineTrackingFrom();
      ensureRegistrationDate();
      saveState();
      clearAuthHashAfterRedirect();
      updateAuthUi();
      renderDashboard();
    }
  }

  logOpvDebugExample(22543233);
  trackEvent("visit");
}

function clearAuthHashAfterRedirect() {
  if (!window.location || !window.history || typeof window.history.replaceState !== "function") {
    return;
  }

  const rawHash = String(window.location.hash || "");
  if (!rawHash) {
    return;
  }

  const hash = rawHash.startsWith("#") ? rawHash.slice(1) : rawHash;
  const authHashMarkers = [
    "access_token=",
    "refresh_token=",
    "expires_in=",
    "token_type=",
    "type=recovery",
    "type=signup",
    "error=",
    "error_description="
  ];

  if (!authHashMarkers.some((marker) => hash.includes(marker))) {
    return;
  }

  window.history.replaceState(null, "", window.location.pathname);
}

function bindBaseEvents() {
  document.addEventListener("click", handleGlobalClick);
  document.addEventListener("submit", handleGlobalSubmit);
  document.addEventListener("input", handleGlobalInput);
  document.addEventListener("change", handleGlobalChange);
  document.addEventListener("focusout", handleGlobalFocusOut, true);
  document.addEventListener("toggle", handleGlobalToggle, true);
  document.addEventListener("keydown", handleGlobalKeyDown);
  if (els.landingIncome) {
    els.landingIncome.addEventListener("input", () => {
      els.landingIncome.value = String(normalizeIncome(els.landingIncome.value));
      renderLandingCards();
      renderLandingDeadlines();
    });
  }

  if (els.regimeSelect) {
    els.regimeSelect.addEventListener("change", (event) => {
      state.regime = event.target.value;
      saveState();
      renderDashboard();
      trackEvent("regime_change", { regime: state.regime });
    });
  }
}

function initSupabase() {
  if (!(window.supabase && APP_CONFIG.supabaseUrl && APP_CONFIG.supabaseAnonKey)) {
    return;
  }

  supabaseClient = window.supabase.createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  });
}

function loadState() {
  const saved = readJson(STORAGE_KEY);
  if (!saved) return;

  state.userId = String(saved.userId || state.userId || "").trim();
  state.regime = saved.regime || state.regime;
  state.incomes = Array.isArray(saved.incomes) ? saved.incomes : state.incomes;
  state.doneDeadlines = Array.isArray(saved.doneDeadlines) ? saved.doneDeadlines : [];
  state.deadlineCompletionMeta = normalizeDeadlineCompletionMeta(saved.deadlineCompletionMeta);
  state.calendarPreServiceApplied = saved.calendarPreServiceApplied === true || saved.calendarPreServiceApplied === "true" || saved.calendarPreServiceApplied === 1;
  state.registrationDate = String(saved.registrationDate || "").trim();
  state.profile = { ...state.profile, ...(saved.profile || {}) };
  state.profile.simplifiedRate = normalizeProfileSimplifiedRate(state.profile.simplifiedRate);
  const profileIin = String(state.profile.iin || "").trim();
  if (PROFILE_DEFAULT_IIN_PLACEHOLDERS.has(profileIin)) {
    state.profile.iin = "";
  }
  state.calcIncome = Number(saved.calcIncome || state.calcIncome);
  state.calcExpenses = Number(saved.calcExpenses || state.calcExpenses);
  state.calcPeriod = saved.calcPeriod === "year" ? "year" : "month";
  state.landingPeriod = saved.landingPeriod === "year" ? "year" : state.landingPeriod;
  state.landingDeadlineOpenId = Number(saved.landingDeadlineOpenId || 0) || null;
  state.deadlineReminderIds = Array.isArray(saved.deadlineReminderIds)
    ? saved.deadlineReminderIds.map((id) => Number(id)).filter((id) => Number.isFinite(id) && id > 0)
    : [];
  state.deadlineChecklistProgress = normalizeDeadlineChecklistProgress(saved.deadlineChecklistProgress);
  state.deadlineReminderSettings = normalizeDeadlineReminderSettings(saved.deadlineReminderSettings, state.userEmail || "");
  state.reminders = normalizeGlobalReminders(saved.reminders, state.userEmail || "");
  const hasSavedRemindersEnabled = Object.prototype.hasOwnProperty.call(saved, "remindersEnabled");
  const savedRemindersEnabled = saved.remindersEnabled === true || saved.remindersEnabled === "true" || saved.remindersEnabled === 1;
  const hasModelEnabled = state.reminders && Object.prototype.hasOwnProperty.call(state.reminders, "enabled");
  state.remindersEnabled = hasModelEnabled
    ? Boolean(state.reminders.enabled)
    : (hasSavedRemindersEnabled ? savedRemindersEnabled : Boolean(state.reminders));
  if (state.remindersEnabled && !state.reminders) {
    state.reminders = getDefaultGlobalReminders();
  }
  if (state.reminders) {
    state.reminders = {
      ...state.reminders,
      enabled: Boolean(state.remindersEnabled)
    };
  }

  Object.keys(state.deadlineReminderSettings).forEach((id) => {
    updateDeadlineReminderSubscription(Number(id));
  });

  state.deadlineReminderIds = [...new Set(state.deadlineReminderIds.map((id) => Number(id)).filter((id) => Number.isFinite(id) && id > 0))];

  state.subscription = normalizeSubscription(saved.subscription);
  if (!saved.subscription && (saved.plan || saved.planExpiry)) {
    state.subscription = normalizeSubscription({
      ...state.subscription,
      plan: saved.plan || state.subscription.plan,
      planExpiry: saved.planExpiry || state.subscription.planExpiry
    });
  }

  const savedFilters = saved.incomeFilters && typeof saved.incomeFilters === "object" ? saved.incomeFilters : {};
  state.incomeSelectedMonth = String(saved.incomeSelectedMonth || "").trim() || null;
  state.incomeFilters = {
    ...getDefaultIncomeFilters(),
    query: String(savedFilters.query || "").trim(),
    category: String(savedFilters.category || "all"),
    sort: normalizeIncomeFilterSort(String(savedFilters.sort || "date_desc"))
  };

  const savedCalendarFilters = saved.calendarFilters && typeof saved.calendarFilters === "object" ? saved.calendarFilters : {};
  state.calendarFilters = {
    ...getDefaultCalendarFilters(),
    query: String(savedCalendarFilters.query || "").trim(),
    type: normalizeCalendarType(String(savedCalendarFilters.type || "all")),
    status: normalizeCalendarStatus(String(savedCalendarFilters.status || "all")),
    timeframe: normalizeCalendarTimeframe(String(savedCalendarFilters.timeframe || "upcoming"))
  };

  const savedKnowledgeFilters = saved.knowledgeFilters && typeof saved.knowledgeFilters === "object" ? saved.knowledgeFilters : {};
  state.knowledgeFilters = {
    ...getDefaultKnowledgeFilters(),
    query: String(savedKnowledgeFilters.query || "").trim(),
    topic: normalizeKnowledgeTopic(String(savedKnowledgeFilters.topic || "all"))
  };

  const taxFallbackIncome = getTaxPlannerFallbackIncome();
  const taxFallbackExpenses = normalizeIncome(state.calcExpenses);
  state.taxPlanner = normalizeTaxPlanner(saved.taxPlanner, taxFallbackIncome, taxFallbackExpenses, 15);

  state.incomeEditId = Number(saved.incomeEditId || 0) || null;
  state.paywallFeature = String(saved.paywallFeature || "");
  state.onboarding = normalizeOnboarding(saved.onboarding);
  let hideAmountsStored = "";
  try {
    hideAmountsStored = String(localStorage.getItem(HIDE_AMOUNTS_STORAGE_KEY) || "");
  } catch (_error) {
    hideAmountsStored = "";
  }
  if (hideAmountsStored === "true" || hideAmountsStored === "false") {
    state.hideAmounts = hideAmountsStored === "true";
  } else {
    state.hideAmounts = saved.hideAmounts === true || saved.hideAmounts === "true" || saved.hideAmounts === 1;
  }

  refreshSubscriptionState();
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      isPro: state.isPro,
      userId: state.userId,
      regime: state.regime,
      incomes: state.incomes,
      doneDeadlines: state.doneDeadlines,
      deadlineCompletionMeta: state.deadlineCompletionMeta,
      calendarPreServiceApplied: state.calendarPreServiceApplied,
      registrationDate: state.registrationDate,
      profile: state.profile,
      calcIncome: state.calcIncome,
      calcExpenses: state.calcExpenses,
      calcPeriod: state.calcPeriod,
      landingPeriod: state.landingPeriod,
      landingDeadlineOpenId: state.landingDeadlineOpenId,
      deadlineReminderIds: state.deadlineReminderIds,
      deadlineChecklistProgress: state.deadlineChecklistProgress,
      deadlineReminderSettings: state.deadlineReminderSettings,
      remindersEnabled: state.remindersEnabled,
      reminders: state.reminders,
      incomeEditId: state.incomeEditId,
      incomeFilters: state.incomeFilters,
      incomeSelectedMonth: state.incomeSelectedMonth,
      calendarFilters: state.calendarFilters,
      knowledgeFilters: state.knowledgeFilters,
      taxPlanner: state.taxPlanner,
      subscription: state.subscription,
      plan: state.subscription.plan,
      planExpiry: state.subscription.planExpiry,
      paywallFeature: state.paywallFeature,
      onboarding: state.onboarding,
      hideAmounts: state.hideAmounts
    })
  );
  localStorage.setItem(HIDE_AMOUNTS_STORAGE_KEY, state.hideAmounts ? "true" : "false");
}

function updateAmountsVisibilityUi() {
  const supportsAmountHide = state.page === "dashboard" || state.page === "income" || state.page === "taxes";
  const isSupportedPage = state.isLoggedIn && !shouldShowOnboarding() && supportsAmountHide;
  const hidden = Boolean(isSupportedPage && state.hideAmounts);

  if (els.dashboardApp) {
    els.dashboardApp.classList.toggle("amounts-hidden", hidden);
  }

  const visibilityButtons = [els.amountsVisibilityBtn, els.mobileAmountsVisibilityBtn].filter(Boolean);
  if (visibilityButtons.length === 0) {
    return;
  }

  visibilityButtons.forEach((button) => {
    button.classList.toggle("hidden", !isSupportedPage);
  });

  if (!isSupportedPage) {
    return;
  }

  const iconName = hidden ? "eye-off" : "eye";
  const buttonLabel = hidden ? "РџРѕРєР°Р·Р°С‚СЊ СЃСѓРјРјС‹" : "РЎРєСЂС‹С‚СЊ СЃСѓРјРјС‹";
  visibilityButtons.forEach((button) => {
    button.setAttribute("aria-label", buttonLabel);
    button.setAttribute("title", buttonLabel);
    button.innerHTML = `<i class="nav-icon amount-visibility-icon" data-lucide="${iconName}"></i>`;
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "18",
        height: "18"
      }
    });
  }
}

function updateCalendarReminderToggleUi() {
  const toggleNodes = [els.calendarReminderToggle, els.mobileDrawerReminderToggle].filter(Boolean);
  if (toggleNodes.length === 0) {
    return;
  }

  const visible = state.isLoggedIn;
  toggleNodes.forEach((toggleNode) => {
    toggleNode.classList.toggle("hidden", !visible);
  });

  if (!visible) {
    return;
  }

  const remindersModel = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail());
  const enabled = remindersModel ? Boolean(remindersModel.enabled ?? state.remindersEnabled) : Boolean(state.remindersEnabled);
  state.remindersEnabled = enabled;
  if (remindersModel && remindersModel.enabled !== enabled) {
    state.reminders = {
      ...remindersModel,
      enabled
    };
  }

  toggleNodes.forEach((toggleNode) => {
    toggleNode.classList.toggle("is-on", enabled);
    toggleNode.classList.toggle("is-off", !enabled);
    toggleNode.setAttribute("title", enabled ? "РќР°РїРѕРјРёРЅР°РЅРёСЏ: РІРєР»СЋС‡РµРЅС‹" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ: РІС‹РєР»СЋС‡РµРЅС‹");

    const switchNode = toggleNode.querySelector(".calendar-reminder-switch");
    if (switchNode) {
      switchNode.setAttribute("aria-checked", enabled ? "true" : "false");
      switchNode.setAttribute("title", enabled ? "Р’С‹РєР»СЋС‡РёС‚СЊ РЅР°РїРѕРјРёРЅР°РЅРёСЏ" : "Р’РєР»СЋС‡РёС‚СЊ РЅР°РїРѕРјРёРЅР°РЅРёСЏ");
    }
  });
}

function updateMobileHeaderState() {
  if (!els.dashboardApp) {
    return;
  }

  const showRegimeOnMobile = Boolean(state.isLoggedIn && state.page === "settings");
  els.dashboardApp.classList.toggle("mobile-show-regime", showRegimeOnMobile);
}

function isMobileViewport() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.innerWidth <= 768;
}

function syncMobileDrawerProfile() {
  const profileName = String(state.profile.name || "").trim();
  const fallbackName = String(state.userEmail || "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ").trim();
  const displayName = profileName || fallbackName;
  const initialsSource = profileName || fallbackName;
  const initials = initialsSource
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "РРџ";

  if (els.mobileDrawerUserName) {
    els.mobileDrawerUserName.textContent = displayName;
  }

  if (els.mobileDrawerUserEmail) {
    els.mobileDrawerUserEmail.textContent = state.userEmail || "email@example.com";
  }

  if (els.mobileDrawerAvatar) {
    els.mobileDrawerAvatar.textContent = initials;
  }
}

function syncMobileDrawerRegimeTabs() {
  const regimeButtons = document.querySelectorAll('#mobileDrawer [data-action="mobile-drawer-set-regime"]');
  if (!regimeButtons.length) {
    return;
  }

  const allowedRegimes = new Set(["self", "simplified", "our"]);
  const activeRegime = allowedRegimes.has(state.regime) ? state.regime : "simplified";

  regimeButtons.forEach((button) => {
    const buttonRegime = String(button.dataset.regime || "").trim();
    const isActive = buttonRegime === activeRegime;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function openMobileDrawer() {
  if (!isMobileViewport() || !els.mobileDrawer || !els.mobileDrawerOverlay) {
    return;
  }

  syncMobileDrawerProfile();
  syncMobileDrawerRegimeTabs();
  updatePlanUi();
  updateCalendarReminderToggleUi();
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "18",
        height: "18"
      }
    });
  }

  els.mobileDrawer.classList.remove("hidden");
  els.mobileDrawerOverlay.classList.remove("hidden");
  requestAnimationFrame(() => {
    els.mobileDrawer.classList.add("is-open");
    els.mobileDrawerOverlay.classList.add("is-visible");
  });
}

function closeMobileDrawer() {
  if (!els.mobileDrawer || !els.mobileDrawerOverlay) {
    return;
  }

  els.mobileDrawer.classList.remove("is-open");
  els.mobileDrawerOverlay.classList.remove("is-visible");

  window.setTimeout(() => {
    els.mobileDrawer.classList.add("hidden");
    els.mobileDrawerOverlay.classList.add("hidden");
  }, 250);
}

function syncRemindersSettingsFormState(showError = false) {
  if (!els.remindersSettingsEmail || !els.remindersSettingsSubmit) {
    return false;
  }

  const email = String(els.remindersSettingsEmail.value || "").trim();
  const remindersModel = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();
  const telegramConnected = Boolean(remindersModel.telegramConnected || remindersModel.telegram);
  const hasChannel = Boolean(email || telegramConnected);

  els.remindersSettingsSubmit.disabled = !hasChannel;

  if (hasChannel || !showError) {
    els.remindersSettingsEmail.classList.remove("is-invalid");
    els.remindersSettingsEmail.removeAttribute("aria-invalid");
    if (els.remindersSettingsHint) {
      els.remindersSettingsHint.textContent = "";
    }
  }

  if (!hasChannel && showError) {
    els.remindersSettingsEmail.classList.add("is-invalid");
    els.remindersSettingsEmail.setAttribute("aria-invalid", "true");
    if (els.remindersSettingsHint) {
      els.remindersSettingsHint.textContent = "РЈРєР°Р¶РёС‚Рµ С…РѕС‚СЏ Р±С‹ Email РёР»Рё РїРѕРґРєР»СЋС‡РёС‚Рµ Telegram.";
    }
  }

  return hasChannel;
}
function openRemindersSettingsModal() {
  if (!els.remindersSetupModal || !els.remindersSettingsForm || !els.remindersSettingsEmail) {
    return;
  }

  const isEdit = Boolean(state.reminders);
  const model = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();

  if (els.remindersSetupTitle) {
    els.remindersSetupTitle.textContent = isEdit ? "РР·РјРµРЅРёС‚СЊ РЅР°СЃС‚СЂРѕР№РєРё РЅР°РїРѕРјРёРЅР°РЅРёР№" : "РќР°СЃС‚СЂРѕР№РєР° РЅР°РїРѕРјРёРЅР°РЅРёР№";
  }

  if (els.remindersSettingsSubmit) {
    els.remindersSettingsSubmit.textContent = "РЎРѕС…СЂР°РЅРёС‚СЊ РЅР°СЃС‚СЂРѕР№РєРё";
  }

  if (els.remindersSettingsDisableLink) {
    els.remindersSettingsDisableLink.classList.toggle("hidden", !Boolean(state.remindersEnabled));
  }

  els.remindersSettingsEmail.value = model.email || getReminderDefaultEmail();

  const daySet = new Set((model.days || REMINDER_LEAD_DAYS).map((x) => Number(x)));
  els.remindersSettingsForm.querySelectorAll('input[name="days"]').forEach((input) => {
    const day = Number(input.value || 0);
    input.checked = daySet.has(day);
  });

  syncRemindersTelegramUi(model);
  syncRemindersSettingsFormState(false);

  openModal(els.remindersSetupModal);
}
function closeCalendarReminderPopover() {
  const node = document.getElementById(CALENDAR_REMINDER_POPOVER_ID);
  if (node && node.parentElement) {
    node.parentElement.removeChild(node);
  }
  document.querySelectorAll(".calendar-reminder-row-btn.is-open").forEach((btn) => {
    btn.classList.remove("is-open");
  });
}
function formatReminderDaysForPopover(daysInput) {
  const days = Array.isArray(daysInput)
    ? daysInput.map((value) => Number(value)).filter((value) => Number.isFinite(value))
    : [];
  const uniquePositiveDays = [...new Set(days.filter((value) => value > 0))].sort((a, b) => b - a);
  if (uniquePositiveDays.length > 0) {
    return uniquePositiveDays.join(", ");
  }
  const uniqueAny = [...new Set(days)].sort((a, b) => b - a);
  return uniqueAny.length > 0 ? uniqueAny.join(", ") : "7, 3, 1";
}
function positionCalendarReminderPopover(anchorEl, popoverEl) {
  if (!(anchorEl instanceof HTMLElement) || !(popoverEl instanceof HTMLElement)) {
    return;
  }
  const anchorRect = anchorEl.getBoundingClientRect();
  const margin = 10;
  const popoverWidth = popoverEl.offsetWidth || 240;
  const popoverHeight = popoverEl.offsetHeight || 140;

  let left = anchorRect.right - popoverWidth;
  const maxLeft = Math.max(margin, window.innerWidth - popoverWidth - margin);
  left = Math.min(Math.max(margin, left), maxLeft);

  let top = anchorRect.bottom + 8;
  const maxTop = window.innerHeight - popoverHeight - margin;
  if (top > maxTop) {
    const topAbove = anchorRect.top - popoverHeight - 8;
    top = topAbove >= margin ? topAbove : Math.max(margin, maxTop);
  }

  popoverEl.style.left = `${Math.round(left)}px`;
  popoverEl.style.top = `${Math.round(top)}px`;
}
function openCalendarReminderPopover(anchorEl) {
  if (!(anchorEl instanceof HTMLElement)) {
    return;
  }
  const anchorId = String(anchorEl.dataset.calendarReminderInfo || "");
  const existing = document.getElementById(CALENDAR_REMINDER_POPOVER_ID);
  if (existing && existing.dataset.anchorId === anchorId) {
    closeCalendarReminderPopover();
    return;
  }

  closeCalendarReminderPopover();

  const remindersModel = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail());
  const enabled = remindersModel
    ? Boolean(remindersModel.enabled ?? state.remindersEnabled)
    : Boolean(state.remindersEnabled);
  const daysLabel = formatReminderDaysForPopover(remindersModel && remindersModel.days);

  const title = enabled ? "РќР°РїРѕРјРёРЅР°РЅРёРµ Р°РєС‚РёРІРЅРѕ" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹";
  const text = enabled
    ? `Р’С‹ РїРѕР»СѓС‡РёС‚Рµ СѓРІРµРґРѕРјР»РµРЅРёРµ Р·Р° ${daysLabel} РґРЅРµР№ РґРѕ СЃСЂРѕРєР°`
    : "Р’РєР»СЋС‡РёС‚Рµ РЅР°РїРѕРјРёРЅР°РЅРёСЏ С‡С‚РѕР±С‹ РїРѕР»СѓС‡Р°С‚СЊ СѓРІРµРґРѕРјР»РµРЅРёСЏ Рѕ СЃСЂРѕРєР°С… РѕРїР»Р°С‚С‹";
  const buttonLabel = enabled ? "РќР°СЃС‚СЂРѕРёС‚СЊ в†’" : "Р’РєР»СЋС‡РёС‚СЊ в†’";

  const popover = document.createElement("div");
  popover.id = CALENDAR_REMINDER_POPOVER_ID;
  popover.className = "calendar-reminder-popover";
  popover.dataset.anchorId = anchorId;
  popover.innerHTML = `
    <h4 class="calendar-reminder-popover-title">${escapeHtml(title)}</h4>
    <p class="calendar-reminder-popover-text">${escapeHtml(text)}</p>
    <button type="button" class="calendar-reminder-popover-btn" data-action="open-reminders-settings" data-reminders-source="calendar_row_popover">${escapeHtml(buttonLabel)}</button>
  `;

  document.body.appendChild(popover);
  anchorEl.classList.add("is-open");

  requestAnimationFrame(() => {
    positionCalendarReminderPopover(anchorEl, popover);
  });
}
function showAppToast(message) {
  const text = String(message || "").trim();
  if (!text) {
    return;
  }

  let host = document.getElementById("appToastHost");
  if (!host) {
    host = document.createElement("div");
    host.id = "appToastHost";
    host.className = "app-toast-host";
    document.body.appendChild(host);
  }

  const toast = document.createElement("div");
  toast.className = "app-toast";
  toast.textContent = text;

  host.innerHTML = "";
  host.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  if (appToastTimer) {
    clearTimeout(appToastTimer);
  }

  appToastTimer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 220);
  }, 2800);
}
function updateAuthUi() {
  if (state.isLoggedIn) {
    els.publicApp.classList.add("hidden");
    els.dashboardApp.classList.remove("hidden");
    els.accountName.textContent = state.profile.name || state.userEmail;
    syncMobileDrawerProfile();
    syncMobileDrawerRegimeTabs();
    updatePlanUi();
    updateCalendarReminderToggleUi();
    updateMobileHeaderState();
    updateAmountsVisibilityUi();
    return;
  }

  document.body.classList.remove("onboarding-page-active");
  els.publicApp.classList.remove("hidden");
  els.dashboardApp.classList.add("hidden");
  els.dashboardApp.classList.remove("sidebar-open");
  closeMobileDrawer();
  updateCalendarReminderToggleUi();
  updateMobileHeaderState();
  updateAmountsVisibilityUi();
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function updatePlanUi() {
  refreshSubscriptionState();

  const proActive = isProActive();
  const trialActive = isTrialActive();
  const ownerAccount = isOwnerProAccount();

  if (els.planBadge) {
    if (proActive) {
      els.planBadge.innerHTML = '<span class="plan-badge plan-pro">Pro &#10003;</span>';
    } else if (trialActive) {
      els.planBadge.innerHTML = '<span class="plan-badge plan-trial">Trial</span>';
    } else {
      els.planBadge.innerHTML = '<span class="plan-badge plan-trial">Trial</span>';
    }
  }

  if (els.mobileDrawerPlanBadge) {
    if (proActive) {
      els.mobileDrawerPlanBadge.innerHTML = '<span class="plan-badge plan-pro">Pro &#10003;</span>';
    } else if (trialActive) {
      els.mobileDrawerPlanBadge.innerHTML = '<span class="plan-badge plan-trial">Trial</span>';
    } else {
      els.mobileDrawerPlanBadge.innerHTML = '<span class="plan-badge plan-trial">Trial</span>';
    }
  }

  if (els.proBtn) {
    els.proBtn.classList.toggle("hidden", !ownerAccount);
    if (ownerAccount) {
      els.proBtn.textContent = proActive ? "РўР°СЂРёС„" : "РўР°СЂРёС„С‹";
    }
  }

  if (els.mobileDrawerProBtn) {
    if (proActive) {
      const proDaysLeft = getProDaysLeft(state.subscription);
      els.mobileDrawerProBtn.classList.add("is-active");
      els.mobileDrawerProBtn.innerHTML = `<i class="mobile-drawer-pro-icon" data-lucide="check-circle"></i><span>РџРѕРґРїРёСЃРєР° Р°РєС‚РёРІРЅР° В· ${proDaysLeft} РґРЅ.</span>`;
      els.mobileDrawerProBtn.setAttribute("aria-label", `РџРѕРґРїРёСЃРєР° Р°РєС‚РёРІРЅР°, РѕСЃС‚Р°Р»РѕСЃСЊ ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}`);
      els.mobileDrawerProBtn.setAttribute("title", `РћСЃС‚Р°Р»РѕСЃСЊ ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}`);
    } else {
      els.mobileDrawerProBtn.classList.remove("is-active");
      els.mobileDrawerProBtn.innerHTML = '<i class="mobile-drawer-pro-icon" data-lucide="zap"></i><span>30 РґРЅРµР№ Pro вЂ” Р±РµСЃРїР»Р°С‚РЅРѕ</span>';
      els.mobileDrawerProBtn.setAttribute("aria-label", "РђРєС‚РёРІРёСЂРѕРІР°С‚СЊ 30 РґРЅРµР№ Pro Р±РµСЃРїР»Р°С‚РЅРѕ");
      els.mobileDrawerProBtn.setAttribute("title", "РђРєС‚РёРІРёСЂРѕРІР°С‚СЊ 30 РґРЅРµР№ Pro Р±РµСЃРїР»Р°С‚РЅРѕ");
    }
  }

  renderSidebarBetaBanner();

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "16",
        height: "16"
      }
    });
  }

  if (state.isLoggedIn && state.subscription.expiryNoticePending) {
    showBetaAccessModal("expired");
    state.subscription.expiryNoticePending = false;
    saveState();
  }
}

function handleGlobalClick(event) {
  const clickInsideReminderPopover = Boolean(event.target.closest(`#${CALENDAR_REMINDER_POPOVER_ID}`));
  const clickReminderInfoButton = Boolean(event.target.closest("[data-calendar-reminder-info]"));
  if (!clickInsideReminderPopover && !clickReminderInfoButton) {
    closeCalendarReminderPopover();
  }

  const loginModeBtn = event.target.closest("[data-login-mode]");
  if (loginModeBtn) {
    const mode = loginModeBtn.dataset.loginMode === "signup" ? "signup" : "login";
    setAuthMode(mode);
    trackEvent("auth_mode_switch", { mode });
    return;
  }

  const settingsIinInput = event.target.closest("#settingsIinInput");
  if (settingsIinInput instanceof HTMLInputElement && state.page === "settings") {
    revealSettingsIinInput(settingsIinInput);
    const settingsForm = settingsIinInput.closest("#settingsForm");
    if (settingsForm instanceof HTMLFormElement) {
      updateSettingsSaveButtonState(settingsForm);
    }
    return;
  }

  const actionEl = event.target.closest("[data-action]");
  if (actionEl) {
    if (actionEl instanceof HTMLAnchorElement) {
      event.preventDefault();
    }

    const action = actionEl.dataset.action;

    if (action === "dashboard-recent-month-prev" && state.isLoggedIn && state.page === "dashboard") {
      const maxMonthIndex = new Date().getMonth();
      const selectedMonthRaw = Number(state.dashboardSelectedMonth);
      const selectedMonth = Number.isFinite(selectedMonthRaw)
        ? Math.min(maxMonthIndex, Math.max(0, Math.trunc(selectedMonthRaw)))
        : maxMonthIndex;
      const prevMonth = Math.max(0, selectedMonth - 1);
      if (prevMonth === selectedMonth) {
        return;
      }
      state.dashboardSelectedMonth = prevMonth;
      renderDashboard();
      trackEvent("dashboard_recent_month_prev", { month: state.dashboardSelectedMonth });
      return;
    }

    if (action === "dashboard-recent-month-next" && state.isLoggedIn && state.page === "dashboard") {
      const maxMonthIndex = new Date().getMonth();
      const selectedMonthRaw = Number(state.dashboardSelectedMonth);
      const selectedMonth = Number.isFinite(selectedMonthRaw)
        ? Math.min(maxMonthIndex, Math.max(0, Math.trunc(selectedMonthRaw)))
        : maxMonthIndex;
      if (selectedMonth >= maxMonthIndex) {
        return;
      }
      state.dashboardSelectedMonth = Math.min(maxMonthIndex, selectedMonth + 1);
      renderDashboard();
      trackEvent("dashboard_recent_month_next", { month: state.dashboardSelectedMonth });
      return;
    }

    if (action === "select-dashboard-month" && state.isLoggedIn && state.page === "dashboard") {
      const monthIndex = Number(actionEl.dataset.monthIndex);
      const maxMonthIndex = new Date().getMonth();
      if (!Number.isFinite(monthIndex)) {
        return;
      }
      state.dashboardSelectedMonth = Math.min(maxMonthIndex, Math.max(0, Math.trunc(monthIndex)));
      renderDashboard();
      trackEvent("dashboard_month_select", { month: state.dashboardSelectedMonth, source: actionEl.dataset.monthSource || "unknown" });
      return;
    }

    if (action === "toggle-hide-amounts" && state.isLoggedIn) {
      state.hideAmounts = !state.hideAmounts;
      saveState();
      updateAmountsVisibilityUi();
      trackEvent("toggle_hide_amounts", { hidden: state.hideAmounts, page: state.page });
      return;
    }

    if (action === "toggle-calendar-reminders" && state.isLoggedIn) {
      if (!state.reminders) {
        openRemindersSettingsModal();
        trackEvent("calendar_reminders_modal_open", { source: "header_toggle", firstSetup: true });
        return;
      }

      const current = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();
      const nextEnabled = !Boolean(current.enabled ?? state.remindersEnabled);
      state.reminders = {
        ...current,
        enabled: nextEnabled
      };
      state.remindersEnabled = nextEnabled;
      saveState();
      updateCalendarReminderToggleUi();

      if (state.page === "calendar") {
        renderCalendarPage();
      }
      if (state.landingDeadlineOpenId) {
        renderLandingDeadlineModal(state.landingDeadlineOpenId);
      }

      showAppToast(nextEnabled ? "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІРєР»СЋС‡РµРЅС‹" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹");
      trackEvent("calendar_reminders_toggle", { source: "header_switch", enabled: nextEnabled });
      return;
    }

    if (action === "open-reminders-settings" && state.isLoggedIn) {
      closeMobileDrawer();
      closeCalendarReminderPopover();
      openRemindersSettingsModal();
      trackEvent("calendar_reminders_modal_open", { source: actionEl.dataset.remindersSource || "header_settings" });
      return;
    }

    if (action === "close-reminders-settings") {
      if (els.remindersSetupModal) {
        closeModal(els.remindersSetupModal);
      }
      return;
    }

    if (action === "connect-reminders-telegram" && state.isLoggedIn) {
      const current = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();

      void (async () => {
        const supabase = supabaseClient;
        if (!supabase || !supabase.auth || typeof supabase.auth.getUser !== "function") {
          showAppToast("Не удалось открыть Telegram");
          return;
        }

        try {
          const { data, error } = await supabase.auth.getUser();
          const userId = String(data && data.user && data.user.id ? data.user.id : "").trim();
          if (error || !userId) {
            showAppToast("Не удалось открыть Telegram");
            return;
          }

          const url = `https://t.me/myesep_bot?start=${userId}`;
          if (typeof window !== "undefined" && typeof window.open === "function") {
            window.open(url, "_blank");
          }

          state.reminders = {
            ...current,
            telegramConnected: true
          };
          saveState();
          syncRemindersTelegramUi(state.reminders);
          syncRemindersSettingsFormState(false);

          showAppToast("Telegram подключён");
          trackEvent("calendar_reminders_telegram_connect", { source: "settings_modal" });
        } catch (_error) {
          showAppToast("Не удалось открыть Telegram");
        }
      })();
      return;
    }

    if (action === "disable-reminders" && state.isLoggedIn) {
      state.remindersEnabled = false;
      if (state.reminders) {
        state.reminders = {
          ...state.reminders,
          enabled: false
        };
      }
      saveState();
      updateCalendarReminderToggleUi();

      if (state.page === "calendar") {
        renderCalendarPage();
      }
      if (state.landingDeadlineOpenId) {
        renderLandingDeadlineModal(state.landingDeadlineOpenId);
      }

      if (els.remindersSetupModal) {
        closeModal(els.remindersSetupModal);
      }

      showAppToast("РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹");
      trackEvent("calendar_reminders_disabled", { source: "settings_modal" });
      return;
    }
    if (action === "onboarding-tour-next" && onboardingTourState.active) {
      advanceOnboardingTourStep("button");
      return;
    }

    if (action === "onboarding-tour-skip" && onboardingTourState.active) {
      closeOnboardingTour(true, "skip");
      return;
    }

    if (action === "open-login" || action === "open-signup") {
      if (els.deadlineModal && !els.deadlineModal.classList.contains("hidden")) {
        state.landingDeadlineOpenId = null;
        saveState();
        closeModal(els.deadlineModal);
      }
      const authMode = action === "open-signup" ? "signup" : "login";
      setAuthMode(authMode);
      openModal(els.loginModal);
      trackEvent(authMode === "signup" ? "open_signup_modal" : "open_login_modal");
      return;
    }

    if (action === "close-login") {
      closeModal(els.loginModal);
      return;
    }

    if (action === "toggle-sidebar" && state.isLoggedIn) {
      if (els.dashboardApp) {
        els.dashboardApp.classList.toggle("sidebar-open");
      }
      renderSidebarActive();
      return;
    }

    if (action === "close-sidebar" && state.isLoggedIn) {
      if (els.dashboardApp) {
        els.dashboardApp.classList.remove("sidebar-open");
      }
      return;
    }

    if (action === "open-mobile-drawer" && state.isLoggedIn) {
      openMobileDrawer();
      return;
    }

    if (action === "mobile-drawer-set-regime" && state.isLoggedIn) {
      const nextRegime = String(actionEl.dataset.regime || "").trim();
      if (!["self", "simplified", "our"].includes(nextRegime)) {
        return;
      }

      if (state.regime === nextRegime) {
        syncMobileDrawerRegimeTabs();
        return;
      }

      state.regime = nextRegime;
      saveState();
      renderDashboard();
      syncMobileDrawerRegimeTabs();
      trackEvent("regime_change", { regime: state.regime, source: "mobile_drawer" });
      return;
    }

    if (action === "close-mobile-drawer") {
      closeMobileDrawer();
      return;
    }

    if (action === "open-dashboard-deadline-calendar" && state.isLoggedIn) {
      state.page = "calendar";
      closeMobileDrawer();
      if (els.dashboardApp) {
        els.dashboardApp.classList.remove("sidebar-open");
      }
      if (els.dashboardKpiSheetModal) {
        closeModal(els.dashboardKpiSheetModal);
      }
      renderDashboard();
      trackEvent("page_open", { page: state.page, source: "dashboard_deadline_kpi" });
      return;
    }

    if (action === "open-dashboard-kpi-sheet" && state.isLoggedIn && state.page === "dashboard") {
      const kpiKey = String(actionEl.dataset.kpiKey || "");
      if (!isMobileViewport()) {
        if (kpiKey === "tax_load") {
          openTaxLoadModal();
        }
        return;
      }

      openDashboardKpiSheet(kpiKey);
      trackEvent("dashboard_kpi_sheet_open", { key: kpiKey });
      return;
    }

    if (action === "deadline-mobile-step") {
      const stepIndex = Number(actionEl.dataset.stepIndex);
      if (!Number.isFinite(stepIndex)) return;
      setDeadlineMobileStep(stepIndex);
      return;
    }

    if (action === "deadline-mobile-step-prev") {
      if (!els.deadlineModalChecklist) return;
      const current = Number(els.deadlineModalChecklist.dataset.activeStep || "0");
      setDeadlineMobileStep(current - 1);
      return;
    }

    if (action === "deadline-mobile-step-next") {
      if (!els.deadlineModalChecklist) return;
      const current = Number(els.deadlineModalChecklist.dataset.activeStep || "0");
      setDeadlineMobileStep(current + 1);
      return;
    }

    if (action === "close-dashboard-kpi-sheet") {
      if (els.dashboardKpiSheetModal) {
        closeModal(els.dashboardKpiSheetModal);
      }
      return;
    }

    if (action === "open-mobile-more" && state.isLoggedIn) {
      if (els.mobileMoreModal) {
        openModal(els.mobileMoreModal);
      }
      return;
    }

    if (action === "close-mobile-more") {
      if (els.mobileMoreModal) {
        closeModal(els.mobileMoreModal);
      }
      return;
    }

    if (action === "mobile-open-page" && state.isLoggedIn) {
      const nextPage = String(actionEl.dataset.mobilePage || "").trim();
      const allowedPages = new Set(["dashboard", "income", "taxes", "calendar", "calculator", "knowledge", "feedback", "settings"]);
      if (!allowedPages.has(nextPage)) {
        return;
      }

      state.page = nextPage;
      if (els.mobileMoreModal) {
        closeModal(els.mobileMoreModal);
      }
      if (els.dashboardApp) {
        els.dashboardApp.classList.remove("sidebar-open");
      }
      renderDashboard();
      trackEvent("page_open", { page: state.page, source: "mobile_more" });
      return;
    }

    if (action === "mobile-more-open-pro" && state.isLoggedIn) {
      if (els.mobileMoreModal) {
        closeModal(els.mobileMoreModal);
      }

      if (!isOwnerProAccount()) {
        showBetaAccessModal("owner_only");
        return;
      }

      renderProModal(state.paywallFeature || "");
      openModal(els.proModal);
      trackEvent("open_pro_modal", { feature: state.paywallFeature || "", source: "mobile_more" });
      return;
    }

    if (action === "mobile-more-logout" && state.isLoggedIn) {
      if (els.mobileMoreModal) {
        closeModal(els.mobileMoreModal);
      }
      logout();
      return;
    }

    if (action === "login-google") {
      loginWithGoogle();
      return;
    }

    if (action === "forgot-password") {
      requestPasswordReset();
      return;
    }
    if (action === "onboarding-next" && shouldShowOnboarding()) {
      const onboarding = normalizeOnboarding(state.onboarding);

      if (onboarding.step === 2) {
        const nameInput = document.getElementById("onboardingProfileName");
        const cityInput = document.getElementById("onboardingProfileCity");
        const activityInput = document.getElementById("onboardingProfileActivity");

        const name = String(nameInput && typeof nameInput.value === "string" ? nameInput.value : state.profile.name || "").trim();
        if (!name) {
          if (nameInput && typeof nameInput.focus === "function") {
            nameInput.focus();
          }
          trackEvent("onboarding_profile_required");
          return;
        }

        const city = String(cityInput && typeof cityInput.value === "string" ? cityInput.value : state.profile.city || "").trim();
        const activity = String(activityInput && typeof activityInput.value === "string" ? activityInput.value : state.profile.activity || "").trim();

        state.profile = {
          ...state.profile,
          name,
          city,
          activity
        };
      }

      const nextStep = Math.min(ONBOARDING_STEPS_TOTAL, onboarding.step + 1);
      state.onboarding = { ...onboarding, step: nextStep };
      saveState();
      renderDashboard();
      trackEvent("onboarding_next", { step: nextStep });
      return;
    }

    if (action === "onboarding-back" && shouldShowOnboarding()) {
      const onboarding = normalizeOnboarding(state.onboarding);
      const nextStep = Math.max(1, onboarding.step - 1);
      state.onboarding = { ...onboarding, step: nextStep };
      saveState();
      renderDashboard();
      trackEvent("onboarding_back", { step: nextStep });
      return;
    }

    if ((action === "onboarding-complete" || action === "onboarding-complete-income") && shouldShowOnboarding()) {
      const onboarding = normalizeOnboarding(state.onboarding);
      const income = Math.max(0, onboarding.income);
      const shouldSaveFirstIncome = action === "onboarding-complete-income";
      const draftExpenses = onboarding.regime === "our" ? normalizeIncome(income * 0.3) : 0;
      const reserveSource = state.taxPlanner && Number.isFinite(Number(state.taxPlanner.reservePct))
        ? Number(state.taxPlanner.reservePct)
        : 15;

      state.regime = onboarding.regime;
      state.calcIncome = income;
      state.calcExpenses = onboarding.regime === "our" ? draftExpenses : 0;
      state.taxPlanner = normalizeTaxPlanner(
        {
          ...(state.taxPlanner || {}),
          income,
          expenses: draftExpenses,
          reservePct: reserveSource
        },
        income,
        draftExpenses,
        reserveSource
      );

      if (shouldSaveFirstIncome && income > 0) {
        const today = new Date().toISOString().slice(0, 10);
        const nextId = Math.max(0, ...state.incomes.map((x) => x.id)) + 1;
        state.incomes.unshift({
          id: nextId,
          amount: income,
          date: today,
          category: "РџРµСЂРІС‹Р№ РґРѕС…РѕРґ",
          comment: "Р”РѕР±Р°РІР»РµРЅРѕ РёР· РѕРЅР±РѕСЂРґРёРЅРіР°"
        });
        dashboardDemoMode = false;
        dashboardDemoIncomes = [];
      }

      state.onboarding = { ...onboarding, version: ONBOARDING_FLOW_VERSION, completed: true, step: ONBOARDING_STEPS_TOTAL, userEmail: normalizeEmail(state.userEmail) };
      state.page = "dashboard";
      setOnboardingTourForced(true);
      saveState();
      renderDashboard();
      trackEvent("onboarding_complete", { page: state.page, regime: state.regime, income, savedIncome: shouldSaveFirstIncome });
      return;
    }

    if (action === "focus-first-income") {
      const form = document.getElementById("incomeForm");
      const amountInput = document.getElementById("incomeAmountInput");

      if (form && typeof form.scrollIntoView === "function") {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (amountInput) {
        amountInput.focus();
      }

      trackEvent("income_empty_focus_form");
      return;
    }

    if (action === "toggle-income-comment" && state.page === "income") {
      const commentWrap = document.getElementById("incomeCommentWrap");
      const commentInput = document.getElementById("incomeCommentInput");
      const toggleBtn = event.target.closest("[data-action=\"toggle-income-comment\"]");

      if (commentWrap) {
        commentWrap.classList.add("is-visible");
      }

      if (toggleBtn) {
        toggleBtn.classList.add("hidden");
      }

      if (commentInput) {
        commentInput.focus();
      }

      trackEvent("income_comment_show");
      return;
    }

    if (action === "dismiss-income-trial-banner" && state.page === "income") {
      incomeTrialBannerDismissed = true;
      renderDashboard();
      trackEvent("income_trial_banner_dismiss");
      return;
    }

    if (action === "load-dashboard-demo") {
      dashboardDemoMode = true;
      dashboardDemoIncomes = buildDashboardDemoIncomes();
      state.page = "dashboard";
      renderDashboard();
      trackEvent("dashboard_demo_preview", { rows: dashboardDemoIncomes.length });
      return;
    }

    if (action === "scroll-landing-signup") {
      if (els.deadlineModal && !els.deadlineModal.classList.contains("hidden")) {
        state.landingDeadlineOpenId = null;
        saveState();
        closeModal(els.deadlineModal);
      }

      setAuthMode("signup");
      openModal(els.loginModal);
      if (els.loginEmail) {
        els.loginEmail.focus();
      }

      trackEvent("landing_practical_cta_click", { income: Number(els.landingIncome && els.landingIncome.value || 0) || 0 });
      return;
    }
    if (action === "open-pro") {
      closeMobileDrawer();
      if (!isOwnerProAccount()) {
        showBetaAccessModal("owner_only");
        return;
      }

      renderProModal(state.paywallFeature || "");
      openModal(els.proModal);
      trackEvent("open_pro_modal", { feature: state.paywallFeature || "" });
      return;
    }

    if (action === "close-pro") {
      closeModal(els.proModal);
      return;
    }

    if (action === "pro-mobile-next") {
      if (proModalMobileStep === 1) {
        setProModalMobileStep(2);
      } else {
        setProModalMobileStep(1);
      }
      return;
    }

    if (action === "pro-mobile-prev") {
      setProModalMobileStep(1);
      return;
    }

    if (action === "activate-beta-pro") {
      activateProDemo("beta_banner");
      return;
    }

    if (action === "close-beta-modal") {
      if (els.betaAccessModal) {
        closeModal(els.betaAccessModal);
      }
      return;
    }

    if (action === "simulate-owner-trial") {
      if (!isOwnerProAccount()) {
        return;
      }

      state.ownerTrialPreview = !state.ownerTrialPreview;
      updatePlanUi();
      updateCalendarReminderToggleUi();
      renderDashboard();
      trackEvent("owner_trial_preview_toggle", { enabled: state.ownerTrialPreview });
      return;
    }

    if (action === "reset-onboarding-tour") {
      try {
        localStorage.removeItem(ONBOARDING_TOUR_STORAGE_KEY);
        localStorage.removeItem(ONBOARDING_TOUR_INCOME_STORAGE_KEY);
        localStorage.removeItem(ONBOARDING_TOUR_TAXES_STORAGE_KEY);
        localStorage.removeItem(ONBOARDING_TOUR_CALENDAR_STORAGE_KEY);
      } catch (_error) {
        // ignore storage errors
      }

      setOnboardingTourForced(true);
      closeOnboardingTour(false, "debug_reset");

      const resetHint = document.getElementById("onboardingTourResetHint");
      if (resetHint) {
        resetHint.textContent = "РЎР±СЂРѕС€РµРЅРѕ. РўСѓСЂ Р·Р°РїСѓС‰РµРЅ РЅР° Р“Р»Р°РІРЅРѕР№.";
      }

      if (state.isLoggedIn) {
        state.page = "dashboard";
        renderDashboard();
        startOnboardingTour("dashboard", true);
        setTimeout(() => {
          if (!getOnboardingTourRoot()) {
            onboardingTourState.forceOpen = true;
            onboardingTourState.active = true;
            onboardingTourState.page = "dashboard";
            onboardingTourState.step = 0;
            onboardingTourState.swipeStartY = null;
            renderOnboardingTour();
          }

          if (!getOnboardingTourRoot() && resetHint) {
            resetHint.textContent = "РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РїСѓСЃС‚РёС‚СЊ С‚СѓСЂ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё. РћР±РЅРѕРІРёС‚Рµ СЃС‚СЂР°РЅРёС†Сѓ Рё РЅР°Р¶РјРёС‚Рµ РєРЅРѕРїРєСѓ СЃРЅРѕРІР°.";
          }
        }, 260);
      }

      trackEvent("onboarding_tour_reset");
      return;
    }
    if (action === "open-tax-load-modal") {
      if (els.dashboardKpiSheetModal) {
        closeModal(els.dashboardKpiSheetModal);
      }
      openTaxLoadModal();
      return;
    }

    if (action === "close-tax-load-modal") {
      closeModal(els.taxLoadModal);
      return;
    }

    if (action === "tax-load-mobile-tab") {
      setTaxLoadMobileTab(actionEl.dataset.taxLoadTab || "now");
      return;
    }

    if (action === "cancel-income-delete") {
      pendingIncomeDeleteId = null;
      if (els.incomeDeleteModal) {
        closeModal(els.incomeDeleteModal);
      }
      trackEvent("income_delete_cancel");
      return;
    }

    if (action === "confirm-income-delete") {
      const id = Number(pendingIncomeDeleteId || 0);
      const row = state.incomes.find((item) => item.id === id);

      pendingIncomeDeleteId = null;
      if (els.incomeDeleteModal) {
        closeModal(els.incomeDeleteModal);
      }

      if (!row) {
        return;
      }

      state.incomes = state.incomes.filter((item) => item.id !== id);
      if (state.incomeEditId === id) {
        state.incomeEditId = null;
      }
      saveState();
      renderDashboard();
      trackEvent("income_delete", { id });
      return;
    }

    if (action === "close-deadline-modal") {
      state.landingDeadlineOpenId = null;
      saveState();
      closeModal(els.deadlineModal);
      return;
    }

    if (action === "open-settings-from-deadline") {
      if (state.isLoggedIn) {
        state.page = "settings";
      }
      state.landingDeadlineOpenId = null;
      saveState();
      if (state.isLoggedIn) {
        renderDashboard();
      }
      closeModal(els.deadlineModal);
      trackEvent("deadline_open_settings");
      return;
    }

    if (action === "upgrade-pro") {
      activateProDemo("pro_modal");
      return;
    }

    if (action === "export-income-csv") {
      if (!requireFeature("exports", "income_page")) return;
      exportIncomesCsv();
      trackEvent("income_export_csv");
      return;
    }

    if (action === "copy-deadline-handoff") {
      const deadlineId = Number(actionEl.dataset.deadlineHandoff || state.landingDeadlineOpenId || 0);
      const row = DEADLINES_2026.find((item) => item.id === deadlineId);
      if (!row) return;

      const textToCopy = buildDeadlineHandoffText(row);
      copyTextToClipboard(textToCopy).then((ok) => {
        if (els.deadlineModalHint) {
          els.deadlineModalHint.textContent = ok
            ? "Р§РµРєР»РёСЃС‚ СЃРєРѕРїРёСЂРѕРІР°РЅ. РћС‚РїСЂР°РІСЊС‚Рµ РµРіРѕ Р±СѓС…РіР°Р»С‚РµСЂСѓ РІ Telegram/Email."
            : "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРєРѕРїРёСЂРѕРІР°С‚СЊ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё. Р’С‹РґРµР»РёС‚Рµ С‚РµРєСЃС‚ РІСЂСѓС‡РЅСѓСЋ Рё РѕС‚РїСЂР°РІСЊС‚Рµ Р±СѓС…РіР°Р»С‚РµСЂСѓ.";
        }
      });

      trackEvent("deadline_handoff_copy", { id: deadlineId });
      return;
    }

    if (action === "copy-reminder-plan") {
      const deadlineId = Number(actionEl.dataset.deadlineReminderPlan || state.landingDeadlineOpenId || 0);
      const row = DEADLINES_2026.find((item) => item.id === deadlineId);
      if (!row) return;

      const settings = getDeadlineReminderSettings(deadlineId);
      const textToCopy = buildReminderPlanText(row, settings);
      copyTextToClipboard(textToCopy).then((ok) => {
        if (els.deadlineModalHint) {
          els.deadlineModalHint.textContent = ok
            ? "РџР»Р°РЅ РЅР°РїРѕРјРёРЅР°РЅРёР№ СЃРєРѕРїРёСЂРѕРІР°РЅ. РњРѕР¶РЅРѕ РїРµСЂРµРґР°С‚СЊ РєРѕРјР°РЅРґРµ РёР»Рё Р±СѓС…РіР°Р»С‚РµСЂСѓ."
            : "РќРµ СѓРґР°Р»РѕСЃСЊ СЃРєРѕРїРёСЂРѕРІР°С‚СЊ РїР»Р°РЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё.";
        }
      });

      trackEvent("deadline_reminder_plan_copy", { id: deadlineId });
      return;
    }

    if (action === "logout") {
      closeMobileDrawer();
      logout();
      return;
    }
  }

  if (event.target === els.loginModal) {
    closeModal(els.loginModal);
    return;
  }

  if (event.target === els.proModal) {
    closeModal(els.proModal);
    return;
  }

  if (event.target === els.deadlineModal) {
    state.landingDeadlineOpenId = null;
    saveState();
    closeModal(els.deadlineModal);
    return;
  }

  if (event.target === els.taxLoadModal) {
    closeModal(els.taxLoadModal);
    return;
  }

  if (event.target === els.dashboardKpiSheetModal) {
    closeModal(els.dashboardKpiSheetModal);
    return;
  }

  if (event.target === els.mobileDrawerOverlay) {
    closeMobileDrawer();
    return;
  }

  if (event.target === els.incomeDeleteModal) {
    pendingIncomeDeleteId = null;
    closeModal(els.incomeDeleteModal);
    return;
  }

  if (event.target === els.betaAccessModal) {
    closeModal(els.betaAccessModal);
    return;
  }

  if (event.target === els.remindersSetupModal) {
    closeModal(els.remindersSetupModal);
    return;
  }

  if (event.target === els.mobileMoreModal) {
    closeModal(els.mobileMoreModal);
    return;
  }

  const onboardingRegimeBtn = event.target.closest("[data-onboarding-regime]");
  if (onboardingRegimeBtn && shouldShowOnboarding()) {
    const regime = String(onboardingRegimeBtn.dataset.onboardingRegime || "");
    if (["self", "simplified", "our"].includes(regime)) {
      state.onboarding = { ...normalizeOnboarding(state.onboarding), regime };
      saveState();
      renderDashboard();
      trackEvent("onboarding_regime_select", { regime });
    }
    return;
  }

  const onboardingIncomePresetBtn = event.target.closest("[data-onboarding-income-preset]");
  if (onboardingIncomePresetBtn && shouldShowOnboarding()) {
    const income = normalizeIncome(onboardingIncomePresetBtn.dataset.onboardingIncomePreset || 0);
    state.onboarding = { ...normalizeOnboarding(state.onboarding), income };
    saveState();
    renderDashboard();
    trackEvent("onboarding_income_preset", { income });
    return;
  }

  const onboardingIncomeStepBtn = event.target.closest("[data-onboarding-income-step]");
  if (onboardingIncomeStepBtn && shouldShowOnboarding()) {
    const step = Number(onboardingIncomeStepBtn.dataset.onboardingIncomeStep || 0);
    const onboarding = normalizeOnboarding(state.onboarding);
    const income = normalizeIncome(onboarding.income + step);
    state.onboarding = { ...onboarding, income };
    saveState();
    renderDashboard();
    trackEvent("onboarding_income_step", { step, income });
    return;
  }
  const reminderLeadBtn = event.target.closest("[data-reminder-lead]");
  if (reminderLeadBtn) {
    if (!requireFeature("deadline_reminders", "deadline_reminder_timeline")) return;

    const deadlineId = Number(reminderLeadBtn.dataset.deadlineId || 0);
    const leadDays = Number(reminderLeadBtn.dataset.reminderLead || 0);
    if (!deadlineId || !Number.isFinite(leadDays)) return;

    const key = String(deadlineId);
    const settings = getDeadlineReminderSettings(deadlineId);
    const current = new Set((settings.leadDays || []).map((x) => Number(x)).filter((x) => Number.isFinite(x)));

    if (current.has(leadDays) && current.size > 1) {
      current.delete(leadDays);
    } else {
      current.add(leadDays);
    }

    settings.leadDays = [...current].sort((a, b) => b - a);
    state.deadlineReminderSettings[key] = settings;
    updateDeadlineReminderSubscription(deadlineId);
    saveState();
    renderLandingDeadlineModal(deadlineId);

    trackEvent("deadline_reminder_timeline_toggle", { id: deadlineId, leadDays, enabled: current.has(leadDays) });
    return;
  }
  const periodBtn = event.target.closest("[data-landing-period]");
  if (periodBtn) {
    state.landingPeriod = periodBtn.dataset.landingPeriod === "year" ? "year" : "month";
    saveState();
    renderLandingCards();
    renderLandingDeadlines();
    trackEvent("landing_period_change", { period: state.landingPeriod });
    return;
  }

  const presetBtn = event.target.closest("[data-landing-preset]");
  if (presetBtn && els.landingIncome) {
    els.landingIncome.value = String(normalizeIncome(presetBtn.dataset.landingPreset));
    renderLandingCards();
    renderLandingDeadlines();
    trackEvent("landing_income_preset", { income: Number(els.landingIncome.value) || 0 });
    return;
  }

  const stepBtn = event.target.closest("[data-landing-step]");
  if (stepBtn && els.landingIncome) {
    const step = Number(stepBtn.dataset.landingStep || 0);
    const current = normalizeIncome(els.landingIncome.value);
    els.landingIncome.value = String(normalizeIncome(current + step));
    renderLandingCards();
    renderLandingDeadlines();
    trackEvent("landing_income_step", { step, income: Number(els.landingIncome.value) || 0 });
    return;
  }


  const calcPeriodBtn = event.target.closest("[data-calc-period]");
  if (calcPeriodBtn && state.page === "calculator") {
    state.calcPeriod = calcPeriodBtn.dataset.calcPeriod === "year" ? "year" : "month";
    saveState();
    renderCalculatorPage();
    trackEvent("calc_period_change", { period: state.calcPeriod });
    return;
  }

  const calcPresetBtn = event.target.closest("[data-calc-preset]");
  if (calcPresetBtn && state.page === "calculator") {
    const presetMonthly = normalizeIncome(calcPresetBtn.dataset.calcPreset || 0);
    const multiplier = getCalcPeriodMultiplier();
    const inputValue = state.calcPeriod === "year" ? presetMonthly * 12 : presetMonthly;
    state.calcIncome = normalizeIncome(inputValue) / multiplier;
    saveState();
    renderCalculatorPage();
    trackEvent("calc_income_preset", { income: state.calcIncome, period: state.calcPeriod });
    return;
  }

  const calcStepBtn = event.target.closest("[data-calc-step]");
  if (calcStepBtn && state.page === "calculator") {
    const stepBase = Number(calcStepBtn.dataset.calcStep || 0);
    const step = state.calcPeriod === "year" ? stepBase * 12 : stepBase;
    const currentInput = getCalcInputIncome();
    const nextInput = normalizeIncome(currentInput + step);
    state.calcIncome = toCalcStorageValue(nextInput);
    saveState();
    renderCalculatorPage();
    trackEvent("calc_income_step", { step, income: state.calcIncome, period: state.calcPeriod });
    return;
  }

  const calcExpensePresetBtn = event.target.closest("[data-calc-expense-ratio]");
  if (calcExpensePresetBtn && state.page === "calculator") {
    const ratio = Math.min(Math.max(Number(calcExpensePresetBtn.dataset.calcExpenseRatio || 0), 0), 1);
    const baseIncome = getCalcInputIncome();
    const nextExpensesInput = normalizeIncome(baseIncome * ratio);
    state.calcExpenses = toCalcStorageValue(nextExpensesInput);
    saveState();
    renderCalculatorPage();
    trackEvent("calc_expense_ratio", { ratio, expenses: state.calcExpenses, period: state.calcPeriod });
    return;
  }

  const taxIncomePresetBtn = event.target.closest("[data-tax-income-preset]");
  if (taxIncomePresetBtn && state.page === "taxes") {
    const income = normalizeIncome(taxIncomePresetBtn.dataset.taxIncomePreset || 0);
    state.taxPlanner = normalizeTaxPlanner({ ...state.taxPlanner, income }, income, state.taxPlanner.expenses, state.taxPlanner.reservePct);
    saveState();
    renderTaxesPage();
    trackEvent("tax_income_preset", { income, regime: state.regime });
    return;
  }

  const taxExpenseRatioBtn = event.target.closest("[data-tax-expense-ratio]");
  if (taxExpenseRatioBtn && state.page === "taxes") {
    const ratio = Math.min(Math.max(Number(taxExpenseRatioBtn.dataset.taxExpenseRatio || 0), 0), 0.95);
    const income = normalizeIncome(state.taxPlanner.income || getTaxPlannerFallbackIncome());
    const expenses = normalizeIncome(income * ratio);
    state.taxPlanner = normalizeTaxPlanner({ ...state.taxPlanner, income, expenses }, income, expenses, state.taxPlanner.reservePct);
    saveState();
    renderTaxesPage();
    trackEvent("tax_expense_ratio", { ratio, regime: state.regime });
    return;
  }

  const taxReservePresetBtn = event.target.closest("[data-tax-reserve-preset]");
  if (taxReservePresetBtn && state.page === "taxes") {
    const reservePct = Math.min(Math.max(Number(taxReservePresetBtn.dataset.taxReservePreset || 15), 0), 50);
    state.taxPlanner = normalizeTaxPlanner({ ...state.taxPlanner, reservePct }, state.taxPlanner.income, state.taxPlanner.expenses, reservePct);
    saveState();
    renderTaxesPage();
    trackEvent("tax_reserve_preset", { reservePct, regime: state.regime });
    return;
  }

  const taxResetBtn = event.target.closest("[data-tax-reset]");
  if (taxResetBtn && state.page === "taxes") {
    const baseIncome = getTaxPlannerFallbackIncome();
    const baseExpenses = normalizeIncome(state.calcExpenses);
    state.taxPlanner = normalizeTaxPlanner({}, baseIncome, baseExpenses, 15);
    saveState();
    renderTaxesPage();
    trackEvent("tax_planner_reset", { regime: state.regime });
    return;
  }
  const calendarTypeBtn = event.target.closest("[data-calendar-type]");
  if (calendarTypeBtn && state.page === "calendar") {
    state.calendarFilters.type = normalizeCalendarType(String(calendarTypeBtn.dataset.calendarType || "all"));
    saveState();
    renderCalendarPage();
    trackEvent("calendar_filter_type", { type: state.calendarFilters.type });
    return;
  }

  const calendarStatusBtn = event.target.closest("[data-calendar-status]");
  if (calendarStatusBtn && state.page === "calendar") {
    state.calendarFilters.status = normalizeCalendarStatus(String(calendarStatusBtn.dataset.calendarStatus || "all"));
    saveState();
    renderCalendarPage();
    trackEvent("calendar_filter_status", { status: state.calendarFilters.status });
    return;
  }

  const calendarTimeframeBtn = event.target.closest("[data-calendar-timeframe]");
  if (calendarTimeframeBtn && state.page === "calendar") {
    state.calendarFilters.timeframe = normalizeCalendarTimeframe(String(calendarTimeframeBtn.dataset.calendarTimeframe || "upcoming"));
    saveState();
    renderCalendarPage();
    trackEvent("calendar_filter_timeframe", { timeframe: state.calendarFilters.timeframe });
    return;
  }

  const calendarResetBtn = event.target.closest("[data-reset-calendar-filters]");
  if (calendarResetBtn && state.page === "calendar") {
    state.calendarFilters = getDefaultCalendarFilters();
    saveState();
    renderCalendarPage();
    trackEvent("calendar_filters_reset");
    return;
  }

  const calendarMarkVisibleBtn = event.target.closest("[data-calendar-mark-visible]");
  if (calendarMarkVisibleBtn && state.page === "calendar") {
    const visibleRows = getFilteredCalendarRows();
    const idsToMark = visibleRows.filter((row) => !row.done && !row.isBeforeRegistration).map((row) => row.id);
    if (idsToMark.length > 0) {
      const set = new Set(state.doneDeadlines);
      idsToMark.forEach((id) => {
        markDeadlineManuallyTouched(id);
        set.add(id);
        const row = DEADLINES_2026.find((item) => item.id === id);
        if (row) {
          markAllDeadlineTasks(id, row, true);
        }
      });
      state.doneDeadlines = [...set];
      saveState();
      renderCalendarPage();
      renderLandingDeadlines();
      trackEvent("calendar_mark_visible_done", { count: idsToMark.length });
    }
    return;
  }
  const reminderInfoBtn = event.target.closest("[data-calendar-reminder-info]");
  if (reminderInfoBtn && state.page === "calendar") {
    openCalendarReminderPopover(reminderInfoBtn);
    const remindersModel = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail());
    const enabled = remindersModel
      ? Boolean(remindersModel.enabled ?? state.remindersEnabled)
      : Boolean(state.remindersEnabled);
    trackEvent("calendar_reminder_row_info", { enabled });
    return;
  }
  const subscribeBtn = event.target.closest("[data-deadline-subscribe]");
  if (subscribeBtn) {
    if (!requireFeature("deadline_reminders", "landing_deadline_modal")) return;

    const deadlineId = Number(subscribeBtn.dataset.deadlineSubscribe || 0);
    if (deadlineId > 0) {
      const hasReminder = state.deadlineReminderIds.includes(deadlineId);

      if (hasReminder) {
        state.deadlineReminderIds = state.deadlineReminderIds.filter((id) => id !== deadlineId);
      } else {
        const settings = getDeadlineReminderSettings(deadlineId);
        if (!(settings.channels.telegram || settings.channels.email)) {
          settings.channels.email = true;
        }
        state.deadlineReminderSettings[String(deadlineId)] = settings;
        state.deadlineReminderIds = [...state.deadlineReminderIds, deadlineId];
      }

      state.landingDeadlineOpenId = deadlineId;
      saveState();
      renderLandingDeadlines();
      renderLandingDeadlineModal(deadlineId);
      trackEvent("landing_deadline_reminder_toggle", { id: deadlineId, enabled: !hasReminder });
    }
    return;
  }

  const expandBtn = event.target.closest("[data-deadline-expand]");
  if (expandBtn) {
    const deadlineId = Number(expandBtn.dataset.deadlineExpand || 0);
    if (deadlineId > 0) {
      state.landingDeadlineOpenId = deadlineId;
      saveState();
      renderLandingDeadlines();
      renderLandingDeadlineModal(deadlineId);
      openModal(els.deadlineModal);
      trackEvent("landing_deadline_expand", { id: deadlineId, open: true });
    }
    return;
  }

  const pageBtn = event.target.closest("[data-page]");
  if (pageBtn && state.isLoggedIn) {
    state.page = pageBtn.dataset.page;
    closeMobileDrawer();
    if (els.dashboardApp) {
      els.dashboardApp.classList.remove("sidebar-open");
    }
    if (els.mobileMoreModal) {
      closeModal(els.mobileMoreModal);
    }
    renderDashboard();
    trackEvent("page_open", { page: state.page });
    return;
  }

  const knowledgeTopicBtn = event.target.closest("[data-knowledge-topic]");
  if (knowledgeTopicBtn && state.page === "knowledge") {
    state.knowledgeFilters = {
      ...getDefaultKnowledgeFilters(),
      ...(state.knowledgeFilters || {}),
      topic: normalizeKnowledgeTopic(String(knowledgeTopicBtn.dataset.knowledgeTopic || "all"))
    };
    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_topic_filter", { topic: state.knowledgeFilters.topic });
    return;
  }

  const resetKnowledgeBtn = event.target.closest("[data-reset-knowledge-filters]");
  if (resetKnowledgeBtn && state.page === "knowledge") {
    state.knowledgeFilters = getDefaultKnowledgeFilters();
    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_filters_reset");
    return;
  }

  const copyKnowledgeBtn = event.target.closest("[data-action=\"copy-knowledge\"]");
  if (copyKnowledgeBtn && state.page === "knowledge") {
    const articleId = String(copyKnowledgeBtn.dataset.knowledgeId || "");
    const article = KNOWLEDGE_ARTICLES.find((item) => item.id === articleId);
    if (!article) return;

    copyTextToClipboard(buildKnowledgeCheatsheetText(article)).then((ok) => {
      const defaultText = copyKnowledgeBtn.dataset.defaultLabel || "РЎРєРѕРїРёСЂРѕРІР°С‚СЊ С€РїР°СЂРіР°Р»РєСѓ";
      copyKnowledgeBtn.textContent = ok ? "РЎРєРѕРїРёСЂРѕРІР°РЅРѕ" : "РћС€РёР±РєР° РєРѕРїРёСЂРѕРІР°РЅРёСЏ";
      window.setTimeout(() => {
        copyKnowledgeBtn.textContent = defaultText;
      }, 1400);
    });

    trackEvent("knowledge_copy", { id: articleId });
    return;
  }

  const incomePresetBtn = event.target.closest("[data-income-preset]");
  if (incomePresetBtn && state.page === "income") {
    const amountInput = document.getElementById("incomeAmountInput");
    if (amountInput) {
      amountInput.value = String(normalizeIncome(incomePresetBtn.dataset.incomePreset || 0));
      amountInput.focus();
      trackEvent("income_preset", { amount: Number(amountInput.value) || 0 });
    }
    return;
  }

  const editBtn = event.target.closest("[data-edit-income]");
  if (editBtn && state.page === "income") {
    state.incomeEditId = Number(editBtn.dataset.editIncome || 0) || null;
    saveState();
    renderDashboard();
    trackEvent("income_edit_open", { id: state.incomeEditId });
    return;
  }

  const cancelEditBtn = event.target.closest("[data-cancel-income-edit]");
  if (cancelEditBtn && state.page === "income") {
    state.incomeEditId = null;
    saveState();
    renderDashboard();
    trackEvent("income_edit_cancel");
    return;
  }

  const incomeMonthPrevBtn = event.target.closest("[data-action=\"income-month-prev\"]");
  if (incomeMonthPrevBtn && state.page === "income") {
    const currentMonthStart = new Date();
    currentMonthStart.setDate(1);
    const selectedMonthStart = parseDashboardMonthKey(state.incomeSelectedMonth) || new Date(currentMonthStart);
    const prevMonthStart = new Date(selectedMonthStart.getFullYear(), selectedMonthStart.getMonth() - 1, 1);
    state.incomeSelectedMonth = formatDashboardMonthKey(prevMonthStart);
    saveState();
    renderDashboard();
    trackEvent("income_month_prev", { month: state.incomeSelectedMonth });
    return;
  }

  const incomeMonthNextBtn = event.target.closest("[data-action=\"income-month-next\"]");
  if (incomeMonthNextBtn && state.page === "income") {
    const currentMonthStart = new Date();
    currentMonthStart.setDate(1);
    const selectedMonthStart = parseDashboardMonthKey(state.incomeSelectedMonth) || new Date(currentMonthStart);
    const selectedTime = selectedMonthStart.getTime();
    const currentTime = currentMonthStart.getTime();
    if (selectedTime >= currentTime) {
      return;
    }
    const nextMonthStartRaw = new Date(selectedMonthStart.getFullYear(), selectedMonthStart.getMonth() + 1, 1);
    const nextMonthStart = nextMonthStartRaw.getTime() > currentTime ? currentMonthStart : nextMonthStartRaw;
    state.incomeSelectedMonth = formatDashboardMonthKey(nextMonthStart);
    saveState();
    renderDashboard();
    trackEvent("income_month_next", { month: state.incomeSelectedMonth });
    return;
  }

  const resetFiltersBtn = event.target.closest("[data-reset-income-filters]");
  if (resetFiltersBtn && state.page === "income") {
    state.incomeFilters = getDefaultIncomeFilters();
    saveState();
    renderDashboard();
    trackEvent("income_filters_reset");
    return;
  }

  const deleteBtn = event.target.closest("[data-delete-income]");
  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.deleteIncome);
    const row = state.incomes.find((item) => item.id === id);
    if (!row) return;

    if (!els.incomeDeleteModal || !els.incomeDeleteMessage) {
      const ok = window.confirm(`РЈРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ ${row.category} РЅР° ${fmt(row.amount)}?\nР­С‚Рѕ РґРµР№СЃС‚РІРёРµ РЅРµР»СЊР·СЏ РѕС‚РјРµРЅРёС‚СЊ.`);
      if (!ok) return;

      state.incomes = state.incomes.filter((item) => item.id !== id);
      if (state.incomeEditId === id) {
        state.incomeEditId = null;
      }
      saveState();
      renderDashboard();
      trackEvent("income_delete", { id });
      return;
    }

    pendingIncomeDeleteId = id;
    els.incomeDeleteMessage.innerHTML = `
      <strong>РЈРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ ${escapeHtml(row.category)} РЅР° ${fmt(row.amount)}?</strong>
      <span>Р­С‚Рѕ РґРµР№СЃС‚РІРёРµ РЅРµР»СЊР·СЏ РѕС‚РјРµРЅРёС‚СЊ.</span>
    `;
    openModal(els.incomeDeleteModal);
    return;
  }

  const deadlineBtn = event.target.closest("[data-toggle-deadline]");
  if (deadlineBtn) {
    const id = Number(deadlineBtn.dataset.toggleDeadline);
    toggleDeadlineDone(id);
  }
}


function syncTaxPlannerFromForm(form) {
  if (!(form instanceof HTMLFormElement)) {
    return false;
  }

  const fallbackIncome = getTaxPlannerFallbackIncome();
  const fallbackExpenses = normalizeIncome(state.calcExpenses);
  const formData = new FormData(form);

  const readField = (name, fallbackValue) => {
    const raw = formData.get(name);
    if (raw === null || raw === "") {
      return fallbackValue;
    }

    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : fallbackValue;
  };

  const current = normalizeTaxPlanner(state.taxPlanner, fallbackIncome, fallbackExpenses, 15);
  const next = normalizeTaxPlanner(
    {
      income: readField("income", fallbackIncome),
      expenses: readField("expenses", fallbackExpenses),
      reservePct: readField("reservePct", 15)
    },
    fallbackIncome,
    fallbackExpenses,
    15
  );

  state.taxPlanner = next;

  return current.income !== next.income || current.expenses !== next.expenses || current.reservePct !== next.reservePct;
}

function handleGlobalInput(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const loginFormInput = event.target.closest("#loginForm input");
  if (loginFormInput) {
    updateLoginConsentState();
    return;
  }

  const onboardingProfileNameInput = event.target.closest("#onboardingProfileName");
  if (onboardingProfileNameInput && shouldShowOnboarding()) {
    const name = String(onboardingProfileNameInput.value || "").trim();
    if (state.profile.name !== name) {
      state.profile = { ...state.profile, name };
      saveState();
    }

    if (normalizeOnboarding(state.onboarding).step === 2) {
      const nextBtn = document.querySelector('.onboarding-actions [data-action="onboarding-next"]');
      if (nextBtn instanceof HTMLButtonElement) {
        nextBtn.disabled = name.length === 0;
      }
    }
    return;
  }

  const onboardingProfileActivityInput = event.target.closest("#onboardingProfileActivity");
  if (onboardingProfileActivityInput && shouldShowOnboarding()) {
    const activity = String(onboardingProfileActivityInput.value || "").trim();
    if (state.profile.activity !== activity) {
      state.profile = { ...state.profile, activity };
      saveState();
    }
    return;
  }

  const onboardingIncomeInput = event.target.closest("#onboardingIncomeInput");
  if (onboardingIncomeInput && shouldShowOnboarding()) {
    const income = normalizeIncome(onboardingIncomeInput.value);
    const onboarding = normalizeOnboarding(state.onboarding);
    if (onboarding.income !== income) {
      state.onboarding = { ...onboarding, income };
      saveState();
    }
    return;
  }

  const settingsForm = event.target.closest("#settingsForm");
  if (settingsForm && state.page === "settings") {
    updateSettingsSaveButtonState(settingsForm);
    return;
  }

  const remindersSettingsInput = event.target.closest("#remindersSettingsForm input");
  if (remindersSettingsInput) {
    syncRemindersSettingsFormState(false);
    return;
  }

  const taxPlannerForm = event.target.closest("#taxPlannerForm");
  if (taxPlannerForm && state.page === "taxes") {
    const changed = syncTaxPlannerFromForm(taxPlannerForm);
    if (changed) {
      saveState();
      renderTaxesPage();
      const field = event.target instanceof HTMLInputElement ? event.target.name || "unknown" : "unknown";
      trackEvent("tax_planner_change", { field, regime: state.regime });
    }
    return;
  }

  const knowledgeQueryInput = event.target.closest('#knowledgeFilterForm input[name="query"]');
  if (!knowledgeQueryInput || state.page !== "knowledge") {
    return;
  }

  const query = String(knowledgeQueryInput.value || "");
  const currentFilters = {
    ...getDefaultKnowledgeFilters(),
    ...(state.knowledgeFilters || {})
  };

  if (currentFilters.query === query) {
    return;
  }

  const selectionStart = typeof knowledgeQueryInput.selectionStart === "number"
    ? knowledgeQueryInput.selectionStart
    : query.length;
  const selectionEnd = typeof knowledgeQueryInput.selectionEnd === "number"
    ? knowledgeQueryInput.selectionEnd
    : selectionStart;

  state.knowledgeFilters = {
    ...currentFilters,
    query
  };
  saveState();
  renderKnowledgePage();

  const nextInput = document.querySelector('#knowledgeFilterForm input[name="query"]');
  if (nextInput instanceof HTMLInputElement) {
    nextInput.focus({ preventScroll: true });
    const nextStart = Math.min(selectionStart, nextInput.value.length);
    const nextEnd = Math.min(selectionEnd, nextInput.value.length);
    nextInput.setSelectionRange(nextStart, nextEnd);
  }
}

function handleGlobalChange(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const loginFormInput = event.target.closest("#loginForm input");
  if (loginFormInput) {
    updateLoginConsentState();
    return;
  }
  const onboardingProfileCitySelect = event.target.closest("#onboardingProfileCity");
  if (onboardingProfileCitySelect && shouldShowOnboarding()) {
    const city = String(onboardingProfileCitySelect.value || "").trim();
    if (state.profile.city !== city) {
      state.profile = { ...state.profile, city };
      saveState();
    }
    return;
  }

  const onboardingProfileActivitySelect = event.target.closest("#onboardingProfileActivity");
  if (onboardingProfileActivitySelect && shouldShowOnboarding()) {
    const activity = String(onboardingProfileActivitySelect.value || "").trim();
    if (state.profile.activity !== activity) {
      state.profile = { ...state.profile, activity };
      saveState();
    }
    return;
  }
  const settingsForm = event.target.closest("#settingsForm");
  if (settingsForm && state.page === "settings") {
    updateSettingsSaveButtonState(settingsForm);
    return;
  }

  const remindersSettingsInput = event.target.closest("#remindersSettingsForm input");
  if (remindersSettingsInput) {
    syncRemindersSettingsFormState(false);
    return;
  }

  const taskInput = event.target.closest('input[data-deadline-task]');
  if (!taskInput) {
    return;
  }

  const deadlineId = Number(taskInput.dataset.deadlineId || 0);
  const taskKey = String(taskInput.dataset.deadlineTask || "").trim();
  if (!deadlineId || !taskKey) {
    return;
  }

  const key = String(deadlineId);
  const prev = state.deadlineChecklistProgress[key] && typeof state.deadlineChecklistProgress[key] === "object"
    ? { ...state.deadlineChecklistProgress[key] }
    : {};

  if (taskInput.checked) {
    prev[taskKey] = true;
  } else {
    delete prev[taskKey];
  }

  if (Object.keys(prev).length > 0) {
    state.deadlineChecklistProgress[key] = prev;
  } else {
    delete state.deadlineChecklistProgress[key];
  }

  const row = DEADLINES_2026.find((item) => item.id === deadlineId);
  if (row) {
    syncDeadlineDoneByChecklist(deadlineId, row);
  }
  markDeadlineManuallyTouched(deadlineId);

  saveState();
  renderLandingDeadlineModal(deadlineId);
  renderLandingDeadlines();

  if (state.isLoggedIn && state.page === "calendar") {
    renderCalendarPage();
  }

  trackEvent("deadline_checklist_toggle", { id: deadlineId, task: taskKey, done: taskInput.checked });
}

function handleGlobalFocusOut(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const settingsIinInput = event.target.closest("#settingsIinInput");
  if (!(settingsIinInput instanceof HTMLInputElement) || state.page !== "settings") {
    return;
  }

  concealSettingsIinInput(settingsIinInput);
  const settingsForm = settingsIinInput.closest("#settingsForm");
  if (settingsForm instanceof HTMLFormElement) {
    updateSettingsSaveButtonState(settingsForm);
  }
}

function handleGlobalToggle(event) {
  const details = event.target;
  if (!details || details.tagName !== "DETAILS" || !details.classList.contains("faq-item") || !details.open) {
    return;
  }

  document.querySelectorAll(".faq-item[open]").forEach((node) => {
    if (node !== details) {
      node.open = false;
    }
  });
}

async function handleGlobalSubmit(event) {
  if (event.target.id === "loginForm") {
    event.preventDefault();
    const email = (els.loginEmail.value || "").trim();
    const password = (els.loginPassword.value || "").trim();
    const mode = els.loginAuthMode && els.loginAuthMode.value === "signup" ? "signup" : "login";
    const legalAccepted = Boolean(els.loginLegalConsent && els.loginLegalConsent.checked);

    if (mode === "signup" && !legalAccepted) {
      setLoginStatus("РџРѕРґС‚РІРµСЂРґРёС‚Рµ СЃРѕРіР»Р°СЃРёРµ СЃ РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј Рё РџРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё.", true);
      updateLoginConsentState();
      return;
    }

    if (mode === "signup") {
      await signup(email, password);
    } else {
      await login(email, password);
    }
    return;
  }

  if (event.target.id === "feedbackForm") {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const category = String(formData.get("category") || "other").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const allowContact = formData.get("allowContact") === "on";
    const replyEmail = String(formData.get("replyEmail") || state.userEmail || "").trim();

    if (message.length < 10) {
      setFeedbackStatus("РћРїРёС€РёС‚Рµ Р·Р°РїСЂРѕСЃ РїРѕРґСЂРѕР±РЅРµРµ (РјРёРЅРёРјСѓРј 10 СЃРёРјРІРѕР»РѕРІ).", "error");
      return;
    }

    if (!getFeedbackWebhookUrl()) {
      setFeedbackStatus("РљР°РЅР°Р» РЅРµ РЅР°СЃС‚СЂРѕРµРЅ: РґРѕР±Р°РІСЊС‚Рµ feedbackWebhookUrl РІ config.js.", "error");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultSubmitLabel = submitBtn && submitBtn.textContent ? submitBtn.textContent : "РћС‚РїСЂР°РІРёС‚СЊ РІ РїРѕРґРґРµСЂР¶РєСѓ";

    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
      submitBtn.textContent = "РћС‚РїСЂР°РІР»СЏРµРј...";
    }

    setFeedbackStatus("РћС‚РїСЂР°РІР»СЏРµРј СЃРѕРѕР±С‰РµРЅРёРµ РІ Google Sheets...");

    const payload = {
      submittedAt: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      app: APP_CONFIG.appName || "MyEsep",
      accountEmail: state.userEmail || "",
      replyEmail,
      allowContact,
      category,
      categoryLabel: getFeedbackCategoryLabel(category),
      subject,
      message,
      regime: state.regime,
      page: state.page,
      incomesCount: Array.isArray(state.incomes) ? state.incomes.length : 0
    };

    try {
      await sendFeedbackToSheets(payload);
      setFeedbackStatus("РЎРїР°СЃРёР±Рѕ! РЎРѕРѕР±С‰РµРЅРёРµ РѕС‚РїСЂР°РІР»РµРЅРѕ. РњС‹ РїРѕР»СѓС‡РёР»Рё РµРіРѕ РІ С‚Р°Р±Р»РёС†Сѓ.", "ok");
      form.reset();

      const defaultCategory = form.querySelector('input[name="category"][value="bug"]');
      if (defaultCategory instanceof HTMLInputElement) {
        defaultCategory.checked = true;
      }

      const replyEmailInput = form.querySelector('input[name="replyEmail"]');
      if (replyEmailInput instanceof HTMLInputElement) {
        replyEmailInput.value = state.userEmail || "";
      }

      trackEvent("feedback_submit", { category });
    } catch (error) {
      setFeedbackStatus(error.message || "РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РїСЂР°РІРёС‚СЊ С„РѕСЂРјСѓ. РџРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ.", "error");
      trackEvent("feedback_submit_error", { category });
    } finally {
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultSubmitLabel;
      }
    }

    return;
  }

  if (event.target.id === "incomeForm") {
    event.preventDefault();
    const formData = new FormData(event.target);

    const editId = Number(formData.get("editId") || 0);
    const amount = Number(formData.get("amount") || 0);
    const date = String(formData.get("date") || "").trim();
    const categorySelect = String(formData.get("categorySelect") || "").trim();
    const categoryCustom = String(formData.get("categoryCustom") || "").trim();
    const category = categorySelect === INCOME_CATEGORY_CUSTOM_VALUE ? categoryCustom : categorySelect;
    const comment = String(formData.get("comment") || "").trim();

    if (!amount || !date || !category) {
      return;
    }

    if (editId > 0) {
      const target = state.incomes.find((item) => item.id === editId);
      if (!target) return;

      target.amount = amount;
      target.date = date;
      target.category = category;
      target.comment = comment;
      state.incomeEditId = null;
      trackEvent("income_edit_save", { id: editId, amount, category });
    } else {
      if (!isProActive()) {
        const totalOps = getIncomeOpsCountTotal();
        if (totalOps >= FREE_INCOME_MONTH_LIMIT) {
          showBetaAccessModal("limit");
          trackEvent("income_add_limit_reached", { limit: FREE_INCOME_MONTH_LIMIT, totalOps });
          return;
        }
      }

      const nextId = Math.max(0, ...state.incomes.map((x) => x.id)) + 1;
      state.incomes.unshift({ id: nextId, amount, date, category, comment });
      dashboardDemoMode = false;
      dashboardDemoIncomes = [];
      trackEvent("income_add", { amount, category });
    }

    saveState();
    renderDashboard();
    return;
  }

  if (event.target.id === "incomeFilterForm") {
    event.preventDefault();
    const formData = new FormData(event.target);

    state.incomeFilters = {
      ...getDefaultIncomeFilters(),
      ...(state.incomeFilters || {}),
      query: String(formData.get("query") || "").trim(),
      category: String(formData.get("category") || "all"),
      sort: normalizeIncomeFilterSort(String(formData.get("sort") || "date_desc"))
    };

    saveState();
    renderDashboard();
    trackEvent("income_filters_apply", { ...state.incomeFilters });
    return;
  }

  if (event.target.id === "calendarFilterForm") {
    event.preventDefault();
    const formData = new FormData(event.target);

    state.calendarFilters = {
      ...getDefaultCalendarFilters(),
      query: String(formData.get("query") || "").trim(),
      type: normalizeCalendarType(String(formData.get("type") || state.calendarFilters.type || "all")),
      status: normalizeCalendarStatus(String(formData.get("status") || state.calendarFilters.status || "all")),
      timeframe: normalizeCalendarTimeframe(String(formData.get("timeframe") || state.calendarFilters.timeframe || "upcoming"))
    };

    saveState();
    renderCalendarPage();
    trackEvent("calendar_filters_apply", { ...state.calendarFilters });
    return;
  }

  if (event.target.id === "knowledgeFilterForm") {
    event.preventDefault();
    const formData = new FormData(event.target);

    state.knowledgeFilters = {
      ...getDefaultKnowledgeFilters(),
      query: String(formData.get("query") || "").trim(),
      topic: normalizeKnowledgeTopic(String(formData.get("topic") || state.knowledgeFilters.topic || "all"))
    };

    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_filters_apply", { ...state.knowledgeFilters });
    return;
  }
  if (event.target.id === "remindersSettingsForm") {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = String(formData.get("email") || "").trim();
    const current = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();
    const telegramConnected = Boolean(current.telegramConnected || current.telegram);
    const days = [...new Set(formData.getAll("days").map((item) => Number(item)).filter((item) => Number.isFinite(item) && REMINDER_LEAD_DAYS.includes(item)))].sort((a, b) => b - a);

    if (!email && !telegramConnected) {
      syncRemindersSettingsFormState(true);
      return;
    }

    const next = normalizeGlobalReminders({
      email,
      telegram: current.telegram || "",
      telegramConnected,
      days: days.length > 0 ? days : [...REMINDER_LEAD_DAYS],
      enabled: true
    }, "") || {
      email,
      telegram: current.telegram || "",
      telegramConnected,
      days: days.length > 0 ? days : [...REMINDER_LEAD_DAYS],
      enabled: true
    };

    syncRemindersSettingsFormState(false);

    state.reminders = next;
    state.remindersEnabled = true;
    saveState();
    updateCalendarReminderToggleUi();

    if (state.page === "calendar") {
      renderCalendarPage();
    }
    if (state.landingDeadlineOpenId) {
      renderLandingDeadlineModal(state.landingDeadlineOpenId);
    }

    if (els.remindersSetupModal) {
      closeModal(els.remindersSetupModal);
    }

    showAppToast("Р“РѕС‚РѕРІРѕ вЂ” РЅР°СЃС‚СЂРѕР№РєРё РЅР°РїРѕРјРёРЅР°РЅРёР№ СЃРѕС…СЂР°РЅРµРЅС‹");
    trackEvent("calendar_reminders_save", {
      hasEmail: Boolean(next.email),
      hasTelegram: Boolean(next.telegramConnected || next.telegram),
      days: next.days.join(",")
    });
    return;
  }
  if (event.target.id === "deadlineReminderForm") {
    event.preventDefault();

    if (!requireFeature("deadline_reminders", "deadline_reminder_form")) {
      return;
    }

    const formData = new FormData(event.target);
    const deadlineId = Number(formData.get("deadlineId") || 0);
    const row = DEADLINES_2026.find((item) => item.id === deadlineId);
    if (!row) {
      return;
    }

    const key = String(deadlineId);
    const current = getDeadlineReminderSettings(deadlineId);

    const next = {
      channels: {
        telegram: formData.get("channelTelegram") === "on",
        email: formData.get("channelEmail") === "on"
      },
      contacts: {
        telegram: String(formData.get("contactTelegram") || "").trim(),
        email: String(formData.get("contactEmail") || "").trim()
      },
      leadDays: [...current.leadDays]
    };

    if (!(next.channels.telegram || next.channels.email)) {
      if (els.deadlineModalHint) {
        els.deadlineModalHint.textContent = "Р’С‹Р±РµСЂРёС‚Рµ С…РѕС‚СЏ Р±С‹ РѕРґРёРЅ РєР°РЅР°Р» РґР»СЏ С†РµРїРѕС‡РєРё -7/-3/-1/СЃРµРіРѕРґРЅСЏ.";
      }
      return;
    }

    if (next.channels.telegram && !next.contacts.telegram) {
      if (els.deadlineModalHint) {
        els.deadlineModalHint.textContent = "РЈРєР°Р¶РёС‚Рµ Telegram username РёР»Рё С‡Р°С‚ ID РґР»СЏ РєР°РЅР°Р»Р° Telegram.";
      }
      return;
    }


    if (next.channels.email && !next.contacts.email) {
      next.contacts.email = state.userEmail && state.userEmail.includes("@") ? state.userEmail : "";
    }

    if (next.channels.email && !next.contacts.email) {
      if (els.deadlineModalHint) {
        els.deadlineModalHint.textContent = "Р”РѕР±Р°РІСЊС‚Рµ email РґР»СЏ РѕС‚РїСЂР°РІРєРё С†РµРїРѕС‡РєРё РЅР°РїРѕРјРёРЅР°РЅРёР№.";
      }
      return;
    }

    state.deadlineReminderSettings[key] = next;
    updateDeadlineReminderSubscription(deadlineId);

    saveState();
    renderLandingDeadlines();
    renderLandingDeadlineModal(deadlineId);

    if (els.deadlineModalHint) {
      els.deadlineModalHint.textContent = "РќР°СЃС‚СЂРѕР№РєРё РЅР°РїРѕРјРёРЅР°РЅРёР№ СЃРѕС…СЂР°РЅРµРЅС‹. Р¦РµРїРѕС‡РєР° -7/-3/-1/СЃРµРіРѕРґРЅСЏ Р°РєС‚РёРІРЅР°.";
    }

    trackEvent("deadline_reminder_settings_save", {
      id: deadlineId,
      telegram: next.channels.telegram,
      email: next.channels.email
    });

    return;
  }
  if (event.target.id === "taxPlannerForm") {
    event.preventDefault();
    syncTaxPlannerFromForm(event.target);
    saveState();
    renderTaxesPage();
    trackEvent("tax_planner_apply", { ...state.taxPlanner, regime: state.regime });
    return;
  }
  if (event.target.id === "settingsForm") {
    event.preventDefault();

    const nextProfile = getSettingsFormValues(event.target);
    if (!hasSettingsProfileChanges(nextProfile)) {
      return;
    }

    state.profile = {
      ...state.profile,
      ...nextProfile
    };
    saveState();
    updateAuthUi();
    renderDashboard();
    trackEvent("settings_save");
  }
}

async function loginWithGoogle() {
  if (!supabaseClient) {
    setLoginStatus("Р’С…РѕРґ С‡РµСЂРµР· Google РЅРµРґРѕСЃС‚СѓРїРµРЅ. Р—Р°РїРѕР»РЅРёС‚Рµ Supabase РєР»СЋС‡Рё РІ config.js.", true);
    return;
  }

  try {
    setLoginStatus("РџРµСЂРµРЅР°РїСЂР°РІР»СЏРµРј РІ Google...");
    const redirectTo = AUTH_REDIRECT_URL;
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });
    if (error) throw error;
    trackEvent("login_google_start");
  } catch (err) {
    setLoginStatus(err.message || "РќРµ СѓРґР°Р»РѕСЃСЊ РЅР°С‡Р°С‚СЊ РІС…РѕРґ С‡РµСЂРµР· Google.", true);
  }
}

async function requestPasswordReset() {
  const email = (els.loginEmail && els.loginEmail.value ? els.loginEmail.value : "").trim();

  if (!email) {
    setLoginStatus("РЈРєР°Р¶РёС‚Рµ email, С‡С‚РѕР±С‹ РїРѕР»СѓС‡РёС‚СЊ СЃСЃС‹Р»РєСѓ РґР»СЏ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ.", true);
    return;
  }

  if (!supabaseClient) {
    setLoginStatus("Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РЅРµРґРѕСЃС‚СѓРїРЅРѕ. Р—Р°РїРѕР»РЅРёС‚Рµ Supabase РєР»СЋС‡Рё РІ config.js.", true);
    return;
  }

  try {
    setLoginStatus("РћС‚РїСЂР°РІР»СЏРµРј РїРёСЃСЊРјРѕ РґР»СЏ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ...");
    const redirectTo = AUTH_REDIRECT_URL;
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw error;

    setLoginStatus("РЎСЃС‹Р»РєР° РґР»СЏ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ РѕС‚РїСЂР°РІР»РµРЅР°. РџСЂРѕРІРµСЂСЊС‚Рµ РїРѕС‡С‚Сѓ.");
    trackEvent("password_reset_request");
  } catch (err) {
    setLoginStatus(err.message || "РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РїСЂР°РІРёС‚СЊ РїРёСЃСЊРјРѕ РґР»СЏ РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ.", true);
  }
}

async function login(email, password) {
  if (!email || !password) {
    setLoginStatus("Р—Р°РїРѕР»РЅРё email Рё РїР°СЂРѕР»СЊ.", true);
    return;
  }

  if (!supabaseClient) {
    setLoginStatus("РђРІС‚РѕСЂРёР·Р°С†РёСЏ РЅРµРґРѕСЃС‚СѓРїРЅР°. Р—Р°РїРѕР»РЅРёС‚Рµ Supabase РєР»СЋС‡Рё РІ config.js.", true);
    return;
  }

  try {
    setLoginStatus("РџСЂРѕРІРµСЂСЏРµРј Р°РєРєР°СѓРЅС‚...");
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;

    finalizeAuthSession(data.user, email);
    setLoginStatus("РЈСЃРїРµС€РЅС‹Р№ РІС…РѕРґ.");
    trackEvent("login", { mode: "supabase" });
  } catch (err) {
    setLoginStatus(err.message || "РћС€РёР±РєР° Р°РІС‚РѕСЂРёР·Р°С†РёРё.", true);
  }
}

async function signup(email, password) {
  if (!email || !password) {
    setLoginStatus("Р—Р°РїРѕР»РЅРё email Рё РїР°СЂРѕР»СЊ.", true);
    return;
  }

  if (!supabaseClient) {
    setLoginStatus("Р РµРіРёСЃС‚СЂР°С†РёСЏ РЅРµРґРѕСЃС‚СѓРїРЅР°. Р—Р°РїРѕР»РЅРёС‚Рµ Supabase РєР»СЋС‡Рё РІ config.js.", true);
    return;
  }

  try {
    setLoginStatus("РЎРѕР·РґР°РµРј Р°РєРєР°СѓРЅС‚...");
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;

    if (data && data.session && data.user) {
      finalizeAuthSession(data.user, email);
      setLoginStatus("РђРєРєР°СѓРЅС‚ СЃРѕР·РґР°РЅ. Р’С…РѕРґ РІС‹РїРѕР»РЅРµРЅ.");
      trackEvent("signup", { mode: "supabase_auto_login" });
      return;
    }

    setAuthMode("login", { clearStatus: false });
    setLoginStatus("РђРєРєР°СѓРЅС‚ СЃРѕР·РґР°РЅ. РџРѕРґС‚РІРµСЂРґРёС‚Рµ email Рё Р·Р°С‚РµРј РІРѕР№РґРёС‚Рµ.");
    trackEvent("signup", { mode: "supabase_email_confirmation" });
  } catch (err) {
    setLoginStatus(err.message || "РћС€РёР±РєР° СЂРµРіРёСЃС‚СЂР°С†РёРё.", true);
  }
}

function finalizeAuthSession(user, fallbackEmail = "") {
  state.isLoggedIn = true;
  state.ownerTrialPreview = false;
  state.userEmail = (user && user.email) || fallbackEmail;
  state.userId = (user && user.id) || state.userId;
  prepareOnboardingAfterLogin();
  ensureOwnerEmailBinding();
  ensureTrialIfNeeded();
  ensureDeadlineTrackingFrom();
  ensureRegistrationDate();
  saveState();

  closeModal(els.loginModal);
  updateAuthUi();
  renderDashboard();
}

function updateLoginConsentState() {
  const isSignupMode = Boolean(els.loginAuthMode && els.loginAuthMode.value === "signup");

  if (els.loginLegalConsentWrap) {
    els.loginLegalConsentWrap.classList.toggle("hidden", !isSignupMode);
  }

  if (els.loginLegalConsent) {
    els.loginLegalConsent.required = isSignupMode;
    els.loginLegalConsent.setAttribute("aria-required", isSignupMode ? "true" : "false");
  }

  if (els.loginSubmitBtn) {
    const canSubmit = !isSignupMode || Boolean(els.loginLegalConsent && els.loginLegalConsent.checked);
    els.loginSubmitBtn.disabled = !canSubmit;
    els.loginSubmitBtn.setAttribute("aria-disabled", canSubmit ? "false" : "true");
  }
}

function setAuthMode(mode, options = {}) {
  const nextMode = mode === "signup" ? "signup" : "login";
  const clearStatus = options.clearStatus !== false;

  if (els.loginAuthMode) {
    els.loginAuthMode.value = nextMode;
  }

  if (els.loginSubmitBtn) {
    els.loginSubmitBtn.textContent = nextMode === "signup" ? "РџСЂРѕРґРѕР»Р¶РёС‚СЊ" : "Р’РѕР№С‚Рё";
  }

  if (els.loginHelper) {
    const helperText = nextMode === "signup"
      ? "РЎРѕР·РґР°Р№С‚Рµ Р°РєРєР°СѓРЅС‚ Р±РµСЃРїР»Р°С‚РЅРѕ. РџРѕСЃР»Рµ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ email СЃРјРѕР¶РµС‚Рµ РІРѕР№С‚Рё РІ РєР°Р±РёРЅРµС‚."
      : "";
    els.loginHelper.textContent = helperText;
    els.loginHelper.hidden = !helperText;
  }

  const forgotPasswordBtn = document.querySelector("[data-action='forgot-password']");
  if (forgotPasswordBtn) {
    forgotPasswordBtn.hidden = nextMode !== "login";
  }
  document.querySelectorAll("[data-login-mode]").forEach((btn) => {
    const isActive = btn.dataset.loginMode === nextMode;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (clearStatus) {
    setLoginStatus("");
  }

  updateLoginConsentState();
}
async function logout() {
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch (_err) {
      // ignore
    }
  }

  state.isLoggedIn = false;
  state.ownerTrialPreview = false;
  lastRenderedPage = null;
  closeOnboardingTour(false, "logout");
  updateAuthUi();
  trackEvent("logout");
}

function setLoginStatus(text, isError = false) {
  els.loginStatus.textContent = text;
  els.loginStatus.style.color = isError ? "#b91c1c" : "#6b7280";
}

function openModal(node) {
  node.classList.remove("hidden");
}

function closeModal(node) {
  node.classList.add("hidden");
}

function calcSelfEmployed(income) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const opv = safeIncome * SELF_SOCIAL_COMPONENT_RATE;
  const opvr = safeIncome * SELF_SOCIAL_COMPONENT_RATE;
  const soBaseCap = RATES.MZP * 7;
  const soBase = Math.min(safeIncome, soBaseCap);
  const so = soBase * SELF_SOCIAL_COMPONENT_RATE;
  const vosms = safeIncome * SELF_SOCIAL_COMPONENT_RATE;
  const ipn = safeIncome * SELF_IPN_RATE;
  const total = opv + opvr + so + vosms + ipn;
  return { esp: total, opv, so, opvr, vosms, ipn, socTax: 0, total, limit: SELF_LIMIT_ANNUAL };
}

function calcSocialContributionWithCap(income, opv, rate = SO_RATE) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const safeOpv = Math.max(0, Number(opv) || 0);
  const soBaseCap = RATES.MZP * 7;
  const soBase = Math.min(safeIncome, soBaseCap);
  const deductibleOpv = Math.min(safeOpv, soBase * RATES.OPV_RATE);
  const soMinimum = RATES.MZP * rate;
  const soMaximum = soBaseCap * rate;
  const soRaw = Math.max((soBase - deductibleOpv) * rate, soMinimum);
  return Math.min(soRaw, soMaximum);
}

function calcIpOpvr(income) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const opvrBaseIncome = safeIncome <= 0 ? RATES.MZP : safeIncome;
  const opvrBaseCapped = Math.min(opvrBaseIncome, RATES.MAX_OPV_BASE);
  return opvrBaseCapped * RATES.OPVR_RATE;
}
function calcSimplified(income) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const opvBaseIncome = safeIncome <= 0 ? RATES.MZP : safeIncome;
  const opvBaseCapped = Math.min(opvBaseIncome, RATES.MAX_OPV_BASE);
  const opv = opvBaseCapped * RATES.OPV_RATE;
  const so = calcSocialContributionWithCap(safeIncome, opv, SIMPLIFIED_SO_RATE);
  const opvr = calcIpOpvr(safeIncome);
  const vosms = RATES.VOSMS;
  const ipnRate = getActiveSimplifiedIpnRate();
  const ipn = safeIncome * ipnRate;
  const socTax = 0;
  const total = opv + so + opvr + vosms + ipn + socTax;
  return { opv, so, opvr, vosms, ipn, ipnRate, socTax, total, limit: SIMPLIFIED_LIMIT_ANNUAL };
}

function calcOUR(income, expenses = 0) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const safeExpenses = Math.min(Math.max(0, Number(expenses) || 0), safeIncome);
  const opvBaseCapped = Math.min(safeIncome, RATES.MAX_OPV_BASE);
  const opv = opvBaseCapped * RATES.OPV_RATE;
  const so = calcSocialContributionWithCap(safeIncome, opv, RATES.OUR_SO_RATE);
  const opvr = calcIpOpvr(safeIncome);
  const vosms = RATES.VOSMS;
  const taxBase = Math.max(safeIncome - safeExpenses - opv - vosms - VYCHET_30MRP, 0);
  const ipn = taxBase * 0.1;
  const socTax = OUR_SOC_TAX;
  const total = opv + so + opvr + vosms + ipn + socTax;
  return { opv, so, opvr, vosms, ipn, socTax, total, limit: null };
}

function calcByRegime(regime, income, expenses = 0) {
  if (regime === "self") return calcSelfEmployed(income);
  if (regime === "our") return calcOUR(income, expenses);
  return calcSimplified(income);
}

function logOpvDebugExample(income = 22543233) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const usedBase = Math.min(safeIncome, RATES.MAX_OPV_BASE);
  const opv = usedBase * RATES.OPV_RATE;

  if (typeof window !== "undefined") {
    if (window.__myesepOpvDebugLogged) {
      return;
    }
    window.__myesepOpvDebugLogged = true;
  }

  console.info(
    `[OPV debug] income=${fmt(safeIncome)}, used base=${fmt(usedBase)}, rate=${Math.round(RATES.OPV_RATE * 100)}%, OPV=${fmt(opv)}. ` +
      `Max base=${fmt(RATES.MAX_OPV_BASE)} (50 MZP), max OPV=${fmt(RATES.MAX_OPV_AMOUNT)}.`
  );
}

function fmt(value) {
  return `${new Intl.NumberFormat("ru-KZ").format(Math.round(value || 0))} в‚ё`;
}

function normalizeIncome(value) {
  return Math.max(0, Math.round(Number(value) || 0));
}

function getLandingPeriodMultiplier() {
  return state.landingPeriod === "year" ? 12 : 1;
}
function annualizeIncome(monthlyIncome) {
  return Math.max(0, Number(monthlyIncome) || 0) * 12;
}

function getCalcPeriodMultiplier() {
  return state.calcPeriod === "year" ? 12 : 1;
}

function getCalcPeriodLabel() {
  return state.calcPeriod === "year" ? "РІ РіРѕРґ" : "РІ РјРµСЃСЏС†";
}

function getCalcInputIncome() {
  return normalizeIncome(state.calcIncome * getCalcPeriodMultiplier());
}

function getCalcInputExpenses() {
  return normalizeIncome(state.calcExpenses * getCalcPeriodMultiplier());
}

function toCalcStorageValue(inputValue) {
  const multiplier = getCalcPeriodMultiplier();
  return normalizeIncome(inputValue) / multiplier;
}

function formatPct(value) {
  if (!Number.isFinite(value)) return "0%";
  return `${Math.max(0, value).toFixed(1)}%`;
}

function formatRatePercent(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "0%";
  const pct = numeric * 100;
  return Number.isInteger(pct) ? `${pct}%` : `${pct.toFixed(1).replace(/\.0$/, "")}%`;
}

function normalizeProfileSimplifiedRate(value) {
  if (value === "" || value === null || value === undefined || value === "auto") {
    return "";
  }

  const numeric = Number(String(value).replace(",", "."));
  if (!Number.isFinite(numeric)) return "";

  const asRate = numeric > 1 ? numeric / 100 : numeric;
  if (asRate < IPN_RATE_910_MIN || asRate > IPN_RATE_910_MAX) {
    return "";
  }

  return Number(asRate.toFixed(4));
}

function getSimplifiedIpnRateByCity(cityValue) {
  const normalizedCity = String(cityValue || "").trim().toLowerCase();
  if (!normalizedCity) return IPN_RATE_910;
  if (normalizedCity.includes("Р°СЃС‚Р°РЅР°") || normalizedCity.includes("astana")) {
    return IPN_RATE_910_ASTANA;
  }
  return IPN_RATE_910;
}

function getActiveSimplifiedIpnRate(profile = state.profile) {
  const safeProfile = profile && typeof profile === "object" ? profile : {};
  const manualRate = normalizeProfileSimplifiedRate(safeProfile.simplifiedRate);
  if (manualRate !== "") return manualRate;
  return getSimplifiedIpnRateByCity(safeProfile.city);
}

function getRegimeLimit(regime) {
  if (regime === "self") return SELF_LIMIT_ANNUAL;
  if (regime === "simplified") return SIMPLIFIED_LIMIT_ANNUAL;
  return null;
}

function isIpAccountProfile() {
  const profile = state.profile && typeof state.profile === "object" ? state.profile : {};
  const profileName = String(profile.name || "").toLowerCase();
  const iinDigits = String(profile.iin || "").replace(/\D/g, "");
  return profileName.includes("РёРї") || iinDigits.length === 12;
}

function getRegimeAvailability(regime, monthlyIncome, options = {}) {
  const safeMonthlyIncome = Math.max(0, Number(monthlyIncome) || 0);
  const disallowSelfForIp = Boolean(options.disallowSelfForIp);

  if (regime === "self" && disallowSelfForIp) {
    return {
      available: false,
      reason: "Р”РѕСЃС‚СѓРїРЅРѕ С‚РѕР»СЊРєРѕ Р±РµР· СЃС‚Р°С‚СѓСЃР° РРџ (РЅСѓР¶РЅРѕ РїСЂРµРєСЂР°С‚РёС‚СЊ РРџ)"
    };
  }

  if (regime === "self" && safeMonthlyIncome > SELF_LIMIT_MONTHLY) {
    return {
      available: false,
      reason: `РџСЂРµРІС‹С€РµРЅ Р»РёРјРёС‚ СЂРµР¶РёРјР° (300 РњР Рџ = ${fmt(SELF_LIMIT_MONTHLY)})`
    };
  }

  const limit = getRegimeLimit(regime);
  if (!limit) {
    return { available: true, reason: "" };
  }

  const annualIncome = annualizeIncome(safeMonthlyIncome);
  if (annualIncome <= limit) {
    return { available: true, reason: "" };
  }

  return {
    available: false,
    reason: `РџСЂРµРІС‹С€РµРЅ Р»РёРјРёС‚ ${fmt(limit)} РІ РіРѕРґ`
  };
}

function renderLandingSummary(bestRow, secondRow, multiplier, periodLabel, income) {
  if (!els.landingSummary || !bestRow) return;

  if (income <= 0) {
    els.landingSummary.innerHTML = `
      <article class="landing-summary-card">
        <div class="landing-summary-main">
          <small>РС‚РѕРі Рє СѓРїР»Р°С‚Рµ</small>
          <div class="landing-summary-amount">Р’РІРµРґРёС‚Рµ РґРѕС…РѕРґ</div>
          <p>Р”РѕС…РѕРґ РІРІРѕРґРёС‚СЃСЏ РІ РјРµСЃСЏС†. РџРµСЂРµРєР»СЋС‡Р°С‚РµР»СЊ СЃРІРµСЂС…Сѓ РїРѕРєР°Р·С‹РІР°РµС‚ РЅР°Р»РѕРіРё РІ РјРµСЃСЏС† РёР»Рё РІ РіРѕРґ.</p>
        </div>
      </article>
    `;
    return;
  }

  const total = bestRow.tax * multiplier;
  const savingBase = Math.max((secondRow?.tax || 0) - bestRow.tax, 0);
  const savings = savingBase * multiplier;
  const summaryRows = getTaxLines(bestRow.taxData, bestRow.id)
    .filter((line) => line.value > 0)
    .slice(0, 4)
    .map((line) => ({
      label: `${line.label} ${periodLabel}`,
      value: line.value * multiplier
    }));

  if (bestRow.id === "simplified") {
    const simplifiedIpnRate = Number(bestRow.taxData && bestRow.taxData.ipnRate) || getActiveSimplifiedIpnRate();
    summaryRows.push({
      label: `РРџРќ (${formatRatePercent(simplifiedIpnRate)}) ${periodLabel}`,
      value: Number(bestRow.taxData && bestRow.taxData.ipn || 0) * multiplier
    });
  }

  const lines = summaryRows
    .map((row) => `<span><b>${row.label}:</b> ${fmt(row.value)}</span>`)
    .join("");
  const shouldCollapseBreakdown = typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(max-width: 768px)").matches;
  const breakdownSection = lines
    ? `<details class="landing-breakdown-accordion"${shouldCollapseBreakdown ? "" : " open"}>
        <summary>
          <span class="landing-breakdown-label">РР· С‡РµРіРѕ СЃРѕСЃС‚РѕРёС‚ СЃСѓРјРјР°</span>
          <span class="landing-breakdown-meta">${summaryRows.length} СЃС‚СЂРѕРє</span>
        </summary>
        <div class="landing-breakdown">${lines}</div>
      </details>`
    : "";
  const savingsPeriodSuffix = state.landingPeriod === "year" ? "/РіРѕРґ" : "/РјРµСЃ";
  const summaryChips = `
    <div class="landing-summary-chips">
      <span class="landing-summary-chip">${bestRow.label}</span>
      ${savings > 0 ? `<span class="landing-summary-chip is-save">Р­РєРѕРЅРѕРјРёСЏ ${fmt(savings)}${savingsPeriodSuffix}</span>` : ""}
    </div>
  `;

  const isSelfIncomeWithinLimit = income <= SELF_LIMIT_MONTHLY;
  const landingHintTone = isSelfIncomeWithinLimit ? "success" : "warning";
  const landingHintShortText = isSelfIncomeWithinLimit
    ? "РџРѕРґС…РѕРґРёС‚ РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№."
    : "Р”РѕС…РѕРґ РІС‹С€Рµ Р»РёРјРёС‚Р° РЎР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ.";
  const landingHintText = isSelfIncomeWithinLimit
    ? "Р’Р°Рј РїРѕРґС…РѕРґРёС‚ РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№ вЂ” РЅРёРєР°РєРѕРіРѕ РРџ, РјРёРЅРёРјСѓРј РЅР°Р»РѕРіРѕРІ."
    : "Р’Р°С€ РґРѕС…РѕРґ РІС‹С€Рµ Р»РёРјРёС‚Р° РЎР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ вЂ” РІС‹РіРѕРґРЅРµРµ РѕС‚РєСЂС‹С‚СЊ РРџ РЅР° РЈРїСЂРѕС‰С‘РЅРєРµ.";
  const landingHintCtaText = isSelfIncomeWithinLimit
    ? "Р—Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°С‚СЊСЃСЏ Р±РµСЃРїР»Р°С‚РЅРѕ >"
    : "РЎРѕС…СЂР°РЅРёС‚СЊ Рё РїРµСЂРµР№С‚Рё РІ Р»РёС‡РЅС‹Р№ РєР°Р±РёРЅРµС‚ в†’";

  els.landingSummary.innerHTML = `
    <article class="landing-summary-card">
      <div class="landing-summary-main">
        <small>РС‚РѕРіРѕ Рє СѓРїР»Р°С‚Рµ ${periodLabel}</small>
        <div class="landing-summary-amount">${fmt(total)}</div>
        ${summaryChips}
        <div class="landing-practical-hint ${landingHintTone}">
          <div class="landing-practical-copy">
            <span class="landing-practical-line">${landingHintShortText}</span>
            <details class="landing-practical-more">
              <summary>РџРѕРґСЂРѕР±РЅРµРµ</summary>
              <p>${landingHintText}</p>
            </details>
          </div>
          <button type="button" class="landing-practical-cta" data-action="scroll-landing-signup">${landingHintCtaText}</button>
        </div>
      </div>
      ${breakdownSection}
    </article>
  `;
}

function renderLandingCards() {
  if (!els.landingIncome || !els.landingCards) return;

  const income = normalizeIncome(els.landingIncome.value);
  els.landingIncome.value = String(income);

  const landingIncomeLabel = document.querySelector("label[for=\"landingIncome\"]");
  if (landingIncomeLabel) {
    landingIncomeLabel.textContent = state.landingPeriod === "year"
      ? "Р”РѕС…РѕРґ РІ РјРµСЃСЏС† (в‚ё) в†’ РїРѕРєР°Р· Р·Р° РіРѕРґ"
      : "Р”РѕС…РѕРґ РІ РјРµСЃСЏС† (в‚ё)";
  }
  const self = calcSelfEmployed(income);
  const simplified = calcSimplified(income);
  const our = calcOUR(income, 0);

  const rows = [
    { id: "self", label: "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№", tax: self.total, taxData: self },
    { id: "simplified", label: "РЈРїСЂРѕС‰РµРЅРєР° (910)", tax: simplified.total, taxData: simplified },
    { id: "our", label: "РћРЈР ", tax: our.total, taxData: our }
  ].map((row) => ({ ...row, ...getRegimeAvailability(row.id, income) }));

  const availableRows = rows.filter((row) => row.available).sort((a, b) => a.tax - b.tax);
  const sortedFallback = [...rows].sort((a, b) => a.tax - b.tax);
  const bestRow = availableRows[0] || sortedFallback[0];
  const secondRow = availableRows[1] || null;
  state.landingSuggestedRegime = bestRow && bestRow.id ? bestRow.id : "simplified";

  const multiplier = getLandingPeriodMultiplier();
  const periodLabel = state.landingPeriod === "year" ? "РІ РіРѕРґ" : "РІ РјРµСЃСЏС†";

  renderLandingSummary(bestRow, secondRow, multiplier, periodLabel, income);

  els.landingCards.innerHTML = rows
    .map((row, index) => {
      const isBest = row.id === bestRow.id && income > 0 && row.available;
      const bestClass = isBest ? "best" : "";
      const unavailableClass = row.available ? "" : "unavailable";
      const amount = fmt(row.tax * multiplier);
      const savings = isBest && secondRow ? Math.max((secondRow.tax - row.tax) * multiplier, 0) : 0;
      const savingsText = savings > 0 ? `Р­РєРѕРЅРѕРјРёСЏ ${fmt(savings)}` : "РњРёРЅРёРјР°Р»СЊРЅР°СЏ РЅР°РіСЂСѓР·РєР°";

      const valueBlock = row.available
        ? `<div class="amount">${amount}</div><div class="regime-period">${periodLabel}</div><div class="regime-save">${isBest ? savingsText : "&nbsp;"}</div>`
        : `<div class="regime-unavailable-reason">${row.reason}</div>`;

      return `
        <div class="regime-card ${bestClass} ${unavailableClass}">
          <div class="regime-top-note">${isBest ? "Р’Р«Р“РћР”РќР•Р•" : row.available ? "&nbsp;" : "РќРµРґРѕСЃС‚СѓРїРЅРѕ"}</div>
          <div class="regime-title">${row.label}</div>
          ${valueBlock}
        </div>
      `;
    })
    .join("");

  document.querySelectorAll("[data-landing-period]").forEach((button) => {
    button.classList.toggle("active", button.dataset.landingPeriod === state.landingPeriod);
  });

  document.querySelectorAll("[data-landing-preset]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.landingPreset || 0) === income);
  });
}
function getDeadlineRegimeForChecklist(row) {
  const currentRegime = state.taxRegime || state.regime;
  if (!row) return currentRegime;
  if (row.regime === "all") return currentRegime;
  if (row.regime === "self" || row.regime === "simplified" || row.regime === "our") {
    return row.regime;
  }
  return currentRegime;
}

function getDeadlineIncomeForChecklist(row) {
  const deadlineDate = new Date(row && row.date);
  if (Number.isNaN(deadlineDate.getTime())) return 0;

  const periodDate = new Date(deadlineDate.getFullYear(), deadlineDate.getMonth() - 1, 1);
  return getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth());
}

function getLandingDeadlineChecklist(row, options = {}) {
  const title = String((row && row.title) || "");
  const regime = getDeadlineRegimeForChecklist(row);
  const isPayment = row && row.type === "payment";
  const isFno910Report = Boolean(row && row.type === "report" && /С„РЅРѕ\s*910/i.test(title));

  if (isFno910Report) {
    return [
      {
        id: "step-1",
        title: "РЁР°Рі 1 вЂ” Р¤РќРћ 910",
        items: ["Р—Р°РїРѕР»РЅРёС‚Рµ Рё РѕС‚РїСЂР°РІСЊС‚Рµ С„РѕСЂРјСѓ 910."],
        instructionHtml: '<p class="deadline-step-instruction">Р—Р°РїРѕР»РЅРёС‚Рµ Рё РѕС‚РїСЂР°РІСЊС‚Рµ С„РѕСЂРјСѓ 910 РІ <a class="deadline-step-inline-link" href="https://cabinet.kgd.gov.kz" target="_blank" rel="noopener noreferrer">РљР°Р±РёРЅРµС‚Рµ РЅР°Р»РѕРіРѕРїР»Р°С‚РµР»СЊС‰РёРєР°</a>.</p>'
      }
    ];
  }

  if (!isPayment) {
    return [
      {
        id: "step-1",
        title: "РЁР°Рі 1 вЂ” РћС‚С‡С‘С‚РЅРѕСЃС‚СЊ",
        items: ["РЎРґР°Р№С‚Рµ РѕС‚С‡РµС‚ РїРѕ С‚РµРєСѓС‰РµРјСѓ СЃСЂРѕРєСѓ Рё РїСЂРѕРІРµСЂСЊС‚Рµ РєРІРёС‚Р°РЅС†РёСЋ Рѕ РїСЂРёРµРјРµ."]
      }
    ];
  }

  const income = getDeadlineIncomeForChecklist(row);
  const hasIncome = income > 0;

  if (regime === "self") {
    return [
      {
        id: "step-1",
        title: "РЁР°Рі 1 вЂ” e-Salyq Business",
        items: ["Р’СЃРµ РїР»Р°С‚РµР¶Рё РїСЂРѕС…РѕРґСЏС‚ С‡РµСЂРµР· РїСЂРёР»РѕР¶РµРЅРёРµ e-Salyq Business. Р•СЃР»Рё РµС‰С‘ РЅРµ СѓСЃС‚Р°РЅРѕРІРёР»Рё вЂ” СЃРєР°С‡Р°Р№С‚Рµ:"],
        instructionHtml: `
          <div class="deadline-step-links">
            <a class="deadline-step-store-link" href="https://apps.apple.com/kz/app/e-salyq-business/id1581629395" target="_blank" rel="noopener noreferrer">App Store &rarr;</a>
            <a class="deadline-step-store-link" href="https://play.google.com/store/apps/details?id=dev.amsmirnov.esalyqbusiness" target="_blank" rel="noopener noreferrer">Google Play &rarr;</a>
          </div>
          <p class="deadline-step-instruction">РР»Рё РѕРїР»Р°С‚РёС‚Рµ РІ Kaspi: РџР»Р°С‚РµР¶Рё -> РЁС‚СЂР°С„С‹ Рё РЅР°Р»РѕРіРё -> РћС‚С‡РёСЃР»РµРЅРёСЏ СЃР°РјРѕР·Р°РЅСЏС‚С‹С…</p>
        `
      }
    ];
  }

  const tax = regime === "our" ? calcOUR(income, state.calcExpenses) : calcSimplified(income);
  const fallbackStep1Total = Math.round((tax.opv || 0) + (tax.opvr || 0) + (tax.so || 0));
  const totalWithoutVosms = Number.isFinite(options.totalWithoutVosms)
    ? Math.max(0, Math.round(options.totalWithoutVosms))
    : fallbackStep1Total;
  const incomeSourceLabel = hasIncome
    ? "РѕС‚ СЂРµР°Р»СЊРЅРѕРіРѕ РґРѕС…РѕРґР° РёР· Р¶СѓСЂРЅР°Р»Р°"
    : `РѕС‚ РјРёРЅРёРјР°Р»СЊРЅРѕР№ Р±Р°Р·С‹ (РћРџР’ ${fmt(IP_MIN_OPV)} + РћРџР’Р  ${fmt(IP_MIN_OPVR)} + РЎРћ ${fmt(IP_MIN_SO)})`;

  return [
    {
      id: "step-1",
      title: "РЁР°Рі 1 вЂ” Р‘Р°РЅРє",
      items: [`РћРїР»Р°С‚РёС‚Рµ РћРџР’ + РћРџР’Р  + РЎРћ. РЎСѓРјРјР°: РћРџР’ + РћРџР’Р  + РЎРћ = ${fmt(totalWithoutVosms)} (${incomeSourceLabel}).`],
      instructionHtml: '<p class="deadline-step-instruction">РћРїР»Р°С‚РёС‚Рµ С‡РµСЂРµР· РјРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ РІР°С€РµРіРѕ Р±Р°РЅРєР° (Kaspi, Halyk РёР»Рё Р»СЋР±РѕР№ РґСЂСѓРіРѕР№). Р Р°Р·РґРµР»: РџР»Р°С‚РµР¶Рё -> РЁС‚СЂР°С„С‹ Рё РЅР°Р»РѕРіРё -> РџР»Р°С‚РµР¶Рё РґР»СЏ РРџ</p>'
    },
    {
      id: "step-2",
      title: "РЁР°Рі 2 вЂ” Р’РћРЎРњРЎ",
      items: [`РћРїР»Р°С‚РёС‚Рµ Р’РћРЎРњРЎ. РЎСѓРјРјР°: ${fmt(RATES.VOSMS)} (С„РёРєСЃРёСЂРѕРІР°РЅРЅР°СЏ).`],
      instructionHtml: '<p class="deadline-step-instruction">РћРїР»Р°С‚РёС‚Рµ С‡РµСЂРµР· РјРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ Р±Р°РЅРєР°. Kaspi: РџР»Р°С‚РµР¶Рё -> РЁС‚СЂР°С„С‹ Рё РЅР°Р»РѕРіРё -> РџР»Р°С‚РµР¶Рё РґР»СЏ РРџ -> Р’РћРЎРњРЎ</p>'
    }
  ];
}

function getLandingDeadlineLiteSteps(row) {
  const sections = getDeadlineChecklistSections(row);

  return sections.slice(0, 3).map((section) => {
    const main = section.items && section.items[0] ? String(section.items[0]) : "РџСЂРѕРІРµСЂСЊС‚Рµ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Р№ С€Р°Рі РїРѕ СЃСЂРѕРєСѓ.";
    return `${section.title}. ${main}`;
  });
}

function getDeadlineChecklistSections(row, options = {}) {
  return getLandingDeadlineChecklist(row, options);
}

function getDeadlineTaskKey(sectionId, index) {
  return `${sectionId}:${index}`;
}

function getDeadlineChecklistProgress(deadlineId) {
  const key = String(deadlineId);
  const source = state.deadlineChecklistProgress[key];

  if (!source || typeof source !== "object") {
    return {};
  }

  return source;
}

function getDeadlineChecklistStats(deadlineId, row) {
  const sections = getDeadlineChecklistSections(row);
  const progress = getDeadlineChecklistProgress(deadlineId);

  let total = 0;
  let done = 0;

  sections.forEach((section) => {
    section.items.forEach((_, index) => {
      total += 1;
      const taskKey = getDeadlineTaskKey(section.id, index);
      if (progress[taskKey]) {
        done += 1;
      }
    });
  });

  return {
    total,
    done,
    pct: total > 0 ? Math.round((done / total) * 100) : 0
  };
}

function markAllDeadlineTasks(deadlineId, row, checked) {
  const key = String(deadlineId);

  if (!checked) {
    delete state.deadlineChecklistProgress[key];
    return;
  }

  const next = {};
  getDeadlineChecklistSections(row).forEach((section) => {
    section.items.forEach((_, index) => {
      next[getDeadlineTaskKey(section.id, index)] = true;
    });
  });

  state.deadlineChecklistProgress[key] = next;
}

function syncDeadlineDoneByChecklist(deadlineId, row) {
  const stats = getDeadlineChecklistStats(deadlineId, row);
  const isDone = stats.total > 0 && stats.done >= stats.total;
  const exists = state.doneDeadlines.includes(deadlineId);

  if (isDone && !exists) {
    state.doneDeadlines.push(deadlineId);
  }

  if (!isDone && exists) {
    state.doneDeadlines = state.doneDeadlines.filter((id) => id !== deadlineId);
  }
}

function getDeadlinePaymentBreakdown(row) {
  if (!row || row.type !== "payment") {
    return null;
  }

  const deadlineDate = new Date(row.date);
  if (Number.isNaN(deadlineDate.getTime())) {
    return null;
  }

  const periodDate = new Date(deadlineDate.getFullYear(), deadlineDate.getMonth() - 1, 1);
  const income = getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth());
  const activeRegime = state.taxRegime || state.regime;
  const taxes = calcByRegime(activeRegime, income, state.calcExpenses);

  const opv = Math.round(taxes.opv || 0);
  const opvr = Math.round(taxes.opvr || 0);
  const so = Math.round(taxes.so || 0);
  const vosms = Math.round(taxes.vosms || 0);

  const total = opv + opvr + so + vosms;
  const totalWithoutVosms = total - vosms;

  return {
    income,
    opv,
    opvr,
    so,
    vosms,
    total,
    totalWithoutVosms
  };
}

function getReminderTimeline(dateString, leadDays = REMINDER_LEAD_DAYS) {
  const target = new Date(dateString);

  return [...leadDays]
    .sort((a, b) => b - a)
    .map((daysBefore) => {
      const date = new Date(target);
      date.setDate(target.getDate() - daysBefore);

      const today = new Date();
      const dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const reminderDayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      let tone = "upcoming";
      if (reminderDayStart.getTime() < dayStart.getTime()) {
        tone = "past";
      } else if (reminderDayStart.getTime() === dayStart.getTime()) {
        tone = "today";
      }

      return {
        daysBefore,
        date,
        tone,
        label: daysBefore === 0 ? "Р’ РґРµРЅСЊ СЃСЂРѕРєР°" : `Р—Р° ${daysBefore} ${getLandingDayWord(daysBefore)}`
      };
    });
}

function getReminderChannelLabels(settings) {
  const labels = [];
  if (settings.channels.telegram) labels.push("Telegram");
  if (settings.channels.email) labels.push("Email");
  return labels;
}

function buildDeadlineHandoffText(row) {
  const due = getLandingDeadlineDueInfo(row.date);
  const settings = getDeadlineReminderSettings(row.id);
  const channels = getReminderChannelLabels(settings);
  const sections = getDeadlineChecklistSections(row);
  const progress = getDeadlineChecklistProgress(row.id);

  const lines = [];
  lines.push(`${row.title}`);
  lines.push(`РЎСЂРѕРє: ${formatDate(row.date)} (${due.text})`);
  lines.push(`Р РµР¶РёРј: ${getLandingDeadlineRegimeLabel(row.regime)} В· РўРёРї: ${getLandingDeadlineTypeLabel(row.type)}`);
  lines.push(`РљР°РЅР°Р»С‹ РЅР°РїРѕРјРёРЅР°РЅРёР№: ${channels.length ? channels.join(", ") : "РЅРµ РІС‹Р±СЂР°РЅС‹"}`);
  lines.push("");

  sections.forEach((section) => {
    lines.push(`${section.title}:`);
    section.items.forEach((item, index) => {
      const key = getDeadlineTaskKey(section.id, index);
      lines.push(`- ${progress[key] ? "[x]" : "[ ]"} ${item}`);
    });
    lines.push("");
  });

  return lines.join("\n").trim();
}

function buildReminderPlanText(row, settings) {
  const timeline = getReminderTimeline(row.date, settings.leadDays);
  const channels = getReminderChannelLabels(settings);

  const lines = [];
  lines.push(`РџР»Р°РЅ РЅР°РїРѕРјРёРЅР°РЅРёР№: ${row.title}`);
  lines.push(`РЎСЂРѕРє: ${formatDate(row.date)}`);
  lines.push(`РљР°РЅР°Р»С‹: ${channels.length ? channels.join(", ") : "РЅРµ РІС‹Р±СЂР°РЅС‹"}`);
  lines.push("");

  timeline.forEach((item) => {
    lines.push(`- ${item.label}: ${item.date.toLocaleDateString("ru-KZ")}`);
  });

  return lines.join("\n");
}

function getFeedbackCategoryLabel(category) {
  const match = FEEDBACK_CATEGORIES.find((item) => item.id === category);
  return match ? match.label : "Р”СЂСѓРіРѕРµ";
}

function getFeedbackWebhookUrl() {
  return String(APP_CONFIG.feedbackWebhookUrl || "").trim();
}

function setFeedbackStatus(text, tone = "default") {
  const statusEl = document.getElementById("feedbackStatus");
  if (!statusEl) return;

  statusEl.textContent = text;
  statusEl.classList.remove("ok", "error");

  if (tone === "ok") {
    statusEl.classList.add("ok");
  }

  if (tone === "error") {
    statusEl.classList.add("error");
  }
}

async function sendFeedbackToSheets(payload) {
  const webhookUrl = getFeedbackWebhookUrl();
  if (!webhookUrl) {
    throw new Error("РќРµ РЅР°СЃС‚СЂРѕРµРЅ feedbackWebhookUrl РІ config.js.");
  }

  await fetch(webhookUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  });
}
async function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (_error) {
    // fallback below
  }

  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "readonly");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return Boolean(copied);
  } catch (_error) {
    return false;
  }
}

function getLandingDeadlineRegimeLabel(regime, activeRegime = state.regime) {
  if (regime === "simplified") return "РЈРїСЂРѕС‰РµРЅРєР° (910)";
  if (regime === "our") return "РћРЈР ";
  if (regime === "self") return "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№";
  if (regime === "all" && activeRegime === "self") return "Р•Р¶РµРјРµСЃСЏС‡РЅР°СЏ СѓРїР»Р°С‚Р° СЃРѕС†РїР»Р°С‚РµР¶РµР№";
  return "Р”Р»СЏ РІСЃРµС… РРџ";
}

function getLandingDeadlineRegimeNote(regime, activeRegime = state.regime) {
  if (regime === "all" && activeRegime === "self") {
    return "РЎСѓРјРјР° Р·Р°РІРёСЃРёС‚ РѕС‚ РІР°С€РµРіРѕ С„Р°РєС‚РёС‡РµСЃРєРѕРіРѕ РґРѕС…РѕРґР° Р·Р° РјРµСЃСЏС†.";
  }
  return "";
}

function isDeadlineApplicableForRegime(row, activeRegime = state.regime) {
  if (!row || !activeRegime) return false;
  if (row.regime === activeRegime) return true;
  if (row.regime !== "all") return false;

  if (activeRegime === "self") {
    return row.type === "payment";
  }

  return true;
}

function getDeadlineDisplayRegime() {
  if (state.isLoggedIn) return state.regime;
  return ["self", "simplified", "our"].includes(state.landingSuggestedRegime)
    ? state.landingSuggestedRegime
    : "simplified";
}

function getLandingDeadlineTypeLabel(type) {
  return type === "payment" ? "РџР»Р°С‚РµР¶" : "РћС‚С‡РµС‚";
}

function splitLandingDeadlineTitle(title) {
  const normalized = String(title || "").trim();
  const match = normalized.match(/^(.+?)\s+Р·Р°\s+(.+)$/i);
  if (!match) return { main: normalized, period: "" };
  return {
    main: String(match[1] || "").trim(),
    period: String(match[2] || "").trim()
  };
}

function getLandingDeadlinePeriodLabel(dateString, fallback = "") {
  const dateObj = new Date(dateString);
  if (Number.isNaN(dateObj.getTime())) return String(fallback || "").trim();
  return new Intl.DateTimeFormat("ru-KZ", { month: "long" }).format(dateObj);
}

function getLandingDayWord(days) {
  const mod10 = days % 10;
  const mod100 = days % 100;
  if (mod10 === 1 && mod100 !== 11) return "РґРµРЅСЊ";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "РґРЅСЏ";
  return "РґРЅРµР№";
}

function getLandingDeadlineDueInfo(dateString) {
  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(dateString);
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  if (Number.isNaN(targetStart.getTime())) {
    return { text: "Р”Р°С‚Р° РЅРµ РѕРїСЂРµРґРµР»РµРЅР°", tone: "" };
  }

  const diffDays = Math.ceil((targetStart - dayStart) / 86400000);

  if (diffDays < 0) {
    const overdueDays = Math.abs(diffDays);
    return { text: `РџСЂРѕСЃСЂРѕС‡РµРЅРѕ РЅР° ${overdueDays} ${getLandingDayWord(overdueDays)}`, tone: "overdue" };
  }

  if (diffDays === 0) return { text: "РЎРµРіРѕРґРЅСЏ", tone: "urgent" };
  if (diffDays === 1) return { text: "Р—Р°РІС‚СЂР°", tone: "urgent" };
  if (diffDays <= 7) return { text: `Р§РµСЂРµР· ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "urgent" };
  if (diffDays <= 14) return { text: `Р§РµСЂРµР· ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "soon" };

  return { text: `Р§РµСЂРµР· ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "" };
}

function renderLandingDeadlineLiteModal(row) {
  if (
    !els.deadlineModal ||
    !els.deadlineModalDate ||
    !els.deadlineModalTitle ||
    !els.deadlineModalMeta ||
    !els.deadlineModalChecklist ||
    !els.deadlineModalSubscribe ||
    !els.deadlineModalHint
  ) {
    return;
  }

  const modalCard = els.deadlineModal.querySelector(".deadline-modal-card");
  if (modalCard) {
    modalCard.classList.add("landing-lite");
  }

  const due = getLandingDeadlineDueInfo(row.date);
  const typeClass = row.type === "payment" ? "payment" : "report";
  const title = splitLandingDeadlineTitle(row.title);
  const periodLabel = getLandingDeadlinePeriodLabel(row.date, title.period);
  const quickSteps = getLandingDeadlineLiteSteps(row);
  const displayRegime = getDeadlineDisplayRegime();
  const regimeLabelText = getLandingDeadlineRegimeLabel(row.regime, displayRegime);
  const regimeNote = getLandingDeadlineRegimeNote(row.regime, displayRegime);

  els.deadlineModalDate.textContent = `${formatDateShort(row.date)} В· ${due.text}`;
  els.deadlineModalTitle.textContent = title.main || row.title;
  els.deadlineModalMeta.innerHTML = `
    <div class="deadline-modal-chip-row">
      <span class="deadline-modal-chip ${typeClass}">${getLandingDeadlineTypeLabel(row.type)}</span>
      <span class="deadline-modal-chip">${escapeHtml(regimeLabelText)}</span>
      ${periodLabel ? `<span class="deadline-modal-chip">РџРµСЂРёРѕРґ: ${escapeHtml(periodLabel)}</span>` : ""}
    </div>
    ${regimeNote ? `<p class="deadline-modal-note">${escapeHtml(regimeNote)}</p>` : ""}
  `;

  els.deadlineModalChecklist.innerHTML = `
    <section class="deadline-lite-card">
      <h4>Р§С‚Рѕ СЃРґРµР»Р°С‚СЊ РІ 3 С€Р°РіР°</h4>
      <ol class="deadline-lite-steps">
        ${quickSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
    </section>
  `;

  els.deadlineModalSubscribe.removeAttribute("data-deadline-subscribe");
  els.deadlineModalSubscribe.setAttribute("data-action", "open-signup");
  els.deadlineModalSubscribe.classList.remove("subscribed", "locked");
  els.deadlineModalSubscribe.classList.add("landing-cta");
  els.deadlineModalSubscribe.removeAttribute("role");
  els.deadlineModalSubscribe.removeAttribute("aria-checked");
  els.deadlineModalSubscribe.removeAttribute("aria-pressed");
  els.deadlineModalSubscribe.innerHTML = "Р—Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°С‚СЊСЃСЏ Р±РµСЃРїР»Р°С‚РЅРѕ";

  els.deadlineModalHint.textContent = "РџРѕСЃР»Рµ СЂРµРіРёСЃС‚СЂР°С†РёРё РѕС‚РєСЂРѕСЋС‚СЃСЏ РїРѕР»РЅС‹Р№ С‡РµРєР»РёСЃС‚ Рё РЅР°РїРѕРјРёРЅР°РЅРёСЏ РїРѕ СЃСЂРѕРєР°Рј.";

  if (els.deadlineModalReminderPanel) {
    els.deadlineModalReminderPanel.innerHTML = "";
    els.deadlineModalReminderPanel.classList.add("hidden");
  }
}
function renderLandingDeadlineModal(deadlineId) {
  if (
    !els.deadlineModal ||
    !els.deadlineModalDate ||
    !els.deadlineModalTitle ||
    !els.deadlineModalMeta ||
    !els.deadlineModalChecklist ||
    !els.deadlineModalSubscribe ||
    !els.deadlineModalHint
  ) {
    return;
  }

  const row = DEADLINES_2026.find((item) => item.id === deadlineId);
  if (!row) return;

  if (!state.isLoggedIn) {
    renderLandingDeadlineLiteModal(row);
    return;
  }

  const modalCard = els.deadlineModal.querySelector(".deadline-modal-card");
  if (modalCard) {
    modalCard.classList.remove("landing-lite");
  }

  const due = getLandingDeadlineDueInfo(row.date);
  const isMobileDeadlineCompact = window.innerWidth <= 768;
  const paymentBreakdown = getDeadlinePaymentBreakdown(row);
  const totalWithoutVosms = paymentBreakdown
    ? Math.max(0, Math.round(paymentBreakdown.totalWithoutVosms))
    : null;
  const sections = getDeadlineChecklistSections(row, { totalWithoutVosms });
  const progress = getDeadlineChecklistProgress(row.id);
  const stats = getDeadlineChecklistStats(row.id, row);
  const typeClass = row.type === "payment" ? "payment" : "report";
  const remindersOn = Boolean(state.remindersEnabled);
  const globalReminderChannels = getGlobalReminderChannels(state.reminders);
  const isProgressDone = stats.total > 0 && stats.done >= stats.total;
  const progressLabel = `Р’С‹РїРѕР»РЅРµРЅРѕ ${stats.done} РёР· ${stats.total} С€Р°РіРѕРІ`;
  const progressPct = Math.max(0, Math.min(100, stats.pct || 0));
  const displayRegime = getDeadlineDisplayRegime();
  const regimeLabelText = getLandingDeadlineRegimeLabel(row.regime, displayRegime);
  const regimeNote = getLandingDeadlineRegimeNote(row.regime, displayRegime);

  const renderSectionList = (section) =>
    section.items
      .map((item, index) => {
        const taskKey = getDeadlineTaskKey(section.id, index);
        const checked = Boolean(progress[taskKey]);

        return `
          <li class="deadline-task-item ${checked ? "done" : ""}">
            <label>
              <input type="checkbox" data-deadline-task="${taskKey}" data-deadline-id="${row.id}" ${checked ? "checked" : ""} />
              <span>${escapeHtml(item)}</span>
            </label>
          </li>
        `;
      })
      .join("");

  els.deadlineModalDate.textContent = `${formatDateShort(row.date)} В· ${due.text}`;
  els.deadlineModalTitle.textContent = row.title;
  els.deadlineModalMeta.innerHTML = `
    ${
      paymentBreakdown
        ? `<section class="deadline-payment-summary" aria-label="РЎСѓРјРјР° Рє СѓРїР»Р°С‚Рµ">
            <h4>РЎСѓРјРјР° Рє СѓРїР»Р°С‚Рµ</h4>
            <div class="deadline-payment-row"><span>РћРџР’</span><strong>${fmt(paymentBreakdown.opv)}</strong></div>
            <div class="deadline-payment-row"><span>РћРџР’Р </span><strong>${fmt(paymentBreakdown.opvr)}</strong></div>
            <div class="deadline-payment-row"><span>РЎРћ</span><strong>${fmt(paymentBreakdown.so)}</strong></div>
            <div class="deadline-payment-row"><span>Р’РћРЎРњРЎ</span><strong>${fmt(paymentBreakdown.vosms)}</strong></div>
            <div class="deadline-payment-total"><span>РС‚РѕРіРѕ</span><strong>${fmt(paymentBreakdown.total)}</strong></div>
          </section>`
        : ""
    }
    <div class="deadline-modal-chip-row">
      <span class="deadline-modal-chip ${typeClass}">${getLandingDeadlineTypeLabel(row.type)}</span>
      <span class="deadline-modal-chip">${escapeHtml(regimeLabelText)}</span>
    </div>
    ${regimeNote ? `<p class="deadline-modal-note">${escapeHtml(regimeNote)}</p>` : ""}
    ${
      stats.total > 0
        ? `<div class="deadline-modal-progress ${isProgressDone ? "done" : ""}">
            <div class="deadline-modal-progress-head">
              <span>${progressLabel}</span>
              <strong>${progressPct}%</strong>
            </div>
            <div class="deadline-modal-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progressPct}" aria-label="${progressLabel}">
              <span style="width:${progressPct}%"></span>
            </div>
          </div>`
        : ""
    }
  `;

  const renderSectionInstruction = (section) => {
    if (!section.instructionHtml) return "";
    if (!isMobileDeadlineCompact) return section.instructionHtml;
    return `
      <details class="deadline-mobile-instruction">
        <summary>РџРѕРєР°Р·Р°С‚СЊ РёРЅСЃС‚СЂСѓРєС†РёСЋ</summary>
        <div class="deadline-mobile-instruction-body">${section.instructionHtml}</div>
      </details>
    `;
  };

  if (isMobileDeadlineCompact && sections.length > 1) {
    const tabsHtml = sections
      .map(
        (section, index) => `
          <button
            type="button"
            class="deadline-mobile-step-tab ${index === 0 ? "active" : ""}"
            data-action="deadline-mobile-step"
            data-step-index="${index}"
            aria-pressed="${index === 0 ? "true" : "false"}"
            aria-label="РџРѕРєР°Р·Р°С‚СЊ ${escapeHtml(section.title)}"
          >
            РЁР°Рі ${index + 1}
          </button>
        `
      )
      .join("");

    const panelsHtml = sections
      .map(
        (section, index) => `
          <section class="deadline-modal-col deadline-mobile-step-panel ${index === 0 ? "is-active" : ""}" data-deadline-step-panel="${index}">
            <h4>${section.title}</h4>
            <ul>${renderSectionList(section)}</ul>
            ${renderSectionInstruction(section)}
          </section>
        `
      )
      .join("");

    els.deadlineModalChecklist.innerHTML = `
      <div class="deadline-mobile-steps-shell">
        <div class="deadline-mobile-step-tabs">${tabsHtml}</div>
        ${panelsHtml}
        <div class="deadline-mobile-step-nav">
          <button type="button" class="deadline-mobile-step-nav-btn" data-action="deadline-mobile-step-prev" disabled>РќР°Р·Р°Рґ</button>
          <span class="deadline-mobile-step-counter" data-deadline-step-counter>РЁР°Рі 1 РёР· ${sections.length}</span>
          <button type="button" class="deadline-mobile-step-nav-btn" data-action="deadline-mobile-step-next">Р”Р°Р»РµРµ</button>
        </div>
      </div>
    `;
    els.deadlineModalChecklist.dataset.activeStep = "0";
  } else {
    els.deadlineModalChecklist.innerHTML = sections
      .map(
        (section) => `
          <section class="deadline-modal-col">
            <h4>${section.title}</h4>
            <ul>${renderSectionList(section)}</ul>
            ${renderSectionInstruction(section)}
          </section>
        `
      )
      .join("");
  }

  els.deadlineModalSubscribe.removeAttribute("data-deadline-subscribe");
  els.deadlineModalSubscribe.dataset.action = "open-reminders-settings";
  els.deadlineModalSubscribe.classList.remove("landing-cta", "locked");
  els.deadlineModalSubscribe.classList.toggle("subscribed", remindersOn);
  els.deadlineModalSubscribe.removeAttribute("role");
  els.deadlineModalSubscribe.removeAttribute("aria-checked");
  els.deadlineModalSubscribe.setAttribute("aria-pressed", "false");
  els.deadlineModalSubscribe.innerHTML = remindersOn
    ? '<i class="deadline-modal-subscribe-icon" data-lucide="bell" aria-hidden="true"></i><span>РќР°РїРѕРјРёРЅР°РЅРёСЏ: Р’РєР» (РіР»РѕР±Р°Р»СЊРЅРѕ)</span>'
    : '<i class="deadline-modal-subscribe-icon" data-lucide="bell-off" aria-hidden="true"></i><span>РќР°РїРѕРјРёРЅР°РЅРёСЏ: Р’С‹РєР» (РЅР°СЃС‚СЂРѕРёС‚СЊ)</span>';

  const channelsText = globalReminderChannels.length ? globalReminderChannels.join(", ") : "РєР°РЅР°Р»С‹ РЅРµ Р·Р°РїРѕР»РЅРµРЅС‹";
  els.deadlineModalHint.textContent = remindersOn
    ? `РќР°РїРѕРјРёРЅР°РЅРёСЏ Р°РєС‚РёРІРЅС‹ РґР»СЏ РІСЃРµС… СЃСЂРѕРєРѕРІ. РљР°РЅР°Р»С‹: ${channelsText}.`
    : "РќР°СЃС‚СЂРѕР№С‚Рµ РЅР°РїРѕРјРёРЅР°РЅРёСЏ РѕРґРёРЅ СЂР°Р· вЂ” РѕРЅРё РїСЂРёРјРµРЅСЏС‚СЃСЏ РєРѕ РІСЃРµРј СЃСЂРѕРєР°Рј.";

  if (els.deadlineModalReminderPanel) {
    els.deadlineModalReminderPanel.innerHTML = "";
    els.deadlineModalReminderPanel.classList.add("hidden");
  }

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function setDeadlineMobileStep(stepIndex) {
  if (!els.deadlineModalChecklist) return;

  const panels = [...els.deadlineModalChecklist.querySelectorAll("[data-deadline-step-panel]")];
  if (!panels.length) return;

  const tabs = [...els.deadlineModalChecklist.querySelectorAll("[data-action='deadline-mobile-step']")];
  const prevBtn = els.deadlineModalChecklist.querySelector("[data-action='deadline-mobile-step-prev']");
  const nextBtn = els.deadlineModalChecklist.querySelector("[data-action='deadline-mobile-step-next']");
  const counter = els.deadlineModalChecklist.querySelector("[data-deadline-step-counter]");

  const maxIndex = panels.length - 1;
  const safeIndex = Math.max(0, Math.min(maxIndex, Number(stepIndex) || 0));

  panels.forEach((panel, index) => {
    panel.classList.toggle("is-active", index === safeIndex);
  });

  tabs.forEach((tab, index) => {
    const isActive = index === safeIndex;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (counter) {
    counter.textContent = `РЁР°Рі ${safeIndex + 1} РёР· ${panels.length}`;
  }
  if (prevBtn) {
    prevBtn.disabled = safeIndex === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = safeIndex >= maxIndex;
  }

  els.deadlineModalChecklist.dataset.activeStep = String(safeIndex);
}
function renderLandingDeadlines() {
  if (!els.landingDeadlines) return;

  const landingRegime = ["self", "simplified", "our"].includes(state.landingSuggestedRegime)
    ? state.landingSuggestedRegime
    : "simplified";
  const byRegime = (row) => isDeadlineApplicableForRegime(row, landingRegime);

  const upcoming = DEADLINES_2026
    .filter((row) => new Date(row.date) >= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))
    .filter(byRegime)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const source =
    upcoming.length > 0
      ? upcoming
      : [...DEADLINES_2026].filter(byRegime).sort((a, b) => new Date(a.date) - new Date(b.date));
  const rows = source.slice(0, 3);

  if (!rows.length) {
    els.landingDeadlines.innerHTML = '<p class="deadline-empty">РЎСЂРѕРєРё СЃРєРѕСЂРѕ РїРѕСЏРІСЏС‚СЃСЏ.</p>';
    return;
  }

  els.landingDeadlines.innerHTML = rows
    .map((row, index) => {
      const typeClass = row.type === "payment" ? "payment" : "report";
      const due = getLandingDeadlineDueInfo(row.date);
      const dueClass = due.tone ? ` ${due.tone}` : "";
      const isFirstCard = index === 0;
      const cardClass = isFirstCard ? " next-up" : due.tone === "overdue" ? " urgent" : "";
      const title = splitLandingDeadlineTitle(row.title);
      const periodLabel = getLandingDeadlinePeriodLabel(row.date, title.period);
      const regimeLabelText = getLandingDeadlineRegimeLabel(row.regime, landingRegime);
      const regimeNote = getLandingDeadlineRegimeNote(row.regime, landingRegime);
      const ctaLabel = state.isLoggedIn ? "РћС‚РєСЂС‹С‚СЊ С‡РµРєР»РёСЃС‚" : "РџРѕРєР°Р·Р°С‚СЊ 3 С€Р°РіР°";

      return `
        <article class="deadline-card ${typeClass}${cardClass}">
          <div class="deadline-top">
            <div class="deadline-date">${formatDateShort(row.date)}</div>
            <div class="deadline-due${dueClass}">${due.text}</div>
          </div>
          <h3 class="deadline-title">${escapeHtml(title.main)}</h3>
          ${periodLabel ? `<p class="deadline-period">РџРµСЂРёРѕРґ: ${escapeHtml(periodLabel)}</p>` : ""}
          <div class="deadline-meta">
            <span class="deadline-type">${getLandingDeadlineTypeLabel(row.type)}</span>
            <span class="deadline-regime">${escapeHtml(regimeLabelText)}</span>
          </div>
          ${regimeNote ? `<p class="deadline-period deadline-regime-note">${escapeHtml(regimeNote)}</p>` : ""}
          <div class="deadline-card-actions">
            <button type="button" class="deadline-open-btn" data-deadline-expand="${row.id}" aria-label="${ctaLabel}">
              <span class="deadline-open-btn-label">${ctaLabel}</span>
              <span class="deadline-open-icon" aria-hidden="true">></span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}
function getUrgentSidebarDeadlineCount() {
  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return DEADLINES_2026.filter((deadline) => {
    const byRegime = isDeadlineApplicableForRegime(deadline, state.regime);
    if (!byRegime) return false;

    const isDone = state.doneDeadlines.includes(deadline.id);
    if (isDone) return false;

    const byTracking = isDeadlineInTrackingRange(deadline.date);
    if (!byTracking) return false;

    const target = new Date(deadline.date);
    const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
    if (Number.isNaN(targetStart.getTime())) return false;

    const diffDays = Math.ceil((targetStart - dayStart) / 86400000);
    return diffDays >= 0 && diffDays <= 7;
  }).length;
}

function getDeadlineCountWord(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "СЃСЂРѕРє";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "СЃСЂРѕРєР°";
  return "СЃСЂРѕРєРѕРІ";
}

function renderSidebarActive() {
  document.querySelectorAll("#sidebarNav [data-page], #mobileTabbar [data-page], #mobileDrawer [data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === state.page);
  });

  const urgentCount = getUrgentSidebarDeadlineCount();
  const calendarBadge = document.getElementById("sidebarCalendarBadge");
  if (calendarBadge) {
    if (urgentCount > 0) {
      calendarBadge.textContent = String(urgentCount);
      calendarBadge.classList.remove("hidden");
      const badgeTooltip = `${urgentCount} ${getDeadlineCountWord(urgentCount)} РІ Р±Р»РёР¶Р°Р№С€РёРµ 7 РґРЅРµР№`;
      calendarBadge.title = badgeTooltip;
      calendarBadge.setAttribute("aria-label", badgeTooltip);
    } else {
      calendarBadge.textContent = "";
      calendarBadge.classList.add("hidden");
      calendarBadge.removeAttribute("title");
      calendarBadge.removeAttribute("aria-label");
    }
  }

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "18",
        height: "18"
      }
    });
  }
}

function getTotalIncome(incomes = state.incomes) {
  return incomes.reduce((sum, row) => sum + Number(row.amount || 0), 0);
}

function getCurrentMonthIncome(incomes = state.incomes) {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  return incomes
    .filter((row) => {
      const dateObj = new Date(row.date);
      return dateObj.getMonth() === month && dateObj.getFullYear() === year;
    })
    .reduce((sum, row) => sum + Number(row.amount || 0), 0);
}

function getCurrentTax(incomes = state.incomes) {
  const income = getCurrentMonthIncome(incomes);
  return calcByRegime(state.regime, income, state.calcExpenses);
}

function formatDashboardMonthKey(dateObj) {
  if (!(dateObj instanceof Date) || Number.isNaN(dateObj.getTime())) {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }
  return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}`;
}

function parseDashboardMonthKey(monthKey) {
  const match = String(monthKey || "").trim().match(/^(\d{4})-(\d{2})$/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 0 || month > 11) return null;
  return new Date(year, month, 1);
}

function formatMonthYearLabel(dateObj) {
  if (!(dateObj instanceof Date) || Number.isNaN(dateObj.getTime())) return "";
  const raw = new Intl.DateTimeFormat("ru-KZ", { month: "long", year: "numeric" }).format(dateObj);
  return raw ? `${raw.charAt(0).toUpperCase()}${raw.slice(1)}` : "";
}

function getTaxLoadPayNow(regime, tax) {
  const opv = Number((tax && tax.opv) || 0);
  const so = Number((tax && tax.so) || 0);
  const opvr = Number((tax && tax.opvr) || 0);
  const vosms = Number((tax && tax.vosms) || 0);
  const socTax = Number((tax && tax.socTax) || 0);

  if (regime === "our") {
    return opv + so + opvr + vosms + socTax;
  }

  return opv + so + opvr + vosms;
}

function getTaxDueDateLabelByMonth(monthIndex, year = new Date().getFullYear()) {
  const safeMonth = Number.isFinite(Number(monthIndex)) ? Math.min(11, Math.max(0, Math.trunc(Number(monthIndex)))) : new Date().getMonth();
  const dueDate = new Date(year, safeMonth + 1, 25);
  return new Intl.DateTimeFormat("ru-KZ", { day: "numeric", month: "long" }).format(dueDate);
}

function getNextTaxDueDateLabel() {
  const now = new Date();
  return getTaxDueDateLabelByMonth(now.getMonth(), now.getFullYear());
}

function getTaxLoadModalModel(regime, tax, income = 0) {
  const opv = Number((tax && tax.opv) || 0);
  const so = Number((tax && tax.so) || 0);
  const opvr = Number((tax && tax.opvr) || 0);
  const vosms = Number((tax && tax.vosms) || 0);
  const ipn = Number((tax && tax.ipn) || 0);
  const socTax = Number((tax && tax.socTax) || 0);
  const payNow = getTaxLoadPayNow(regime, tax);
  const dueDateLabel = getNextTaxDueDateLabel();
  const currentYear = new Date().getFullYear();
  const simplifiedIpnRate = Number((tax && tax.ipnRate) || 0) || getActiveSimplifiedIpnRate();

  if (regime === "self") {
    return {
      payNowTitle: `РџР»Р°С‚РёС‚СЊ РґРѕ ${dueDateLabel}`,
      payNowRows: [
        { label: "РћРџР’ (1%)", value: opv },
        { label: "РћРџР’Р  (1%)", value: opvr },
        { label: "РЎРћ (1%, РґРѕ 7 РњР—Рџ)", value: so },
        { label: "Р’РћРЎРњРЎ (1%)", value: vosms }
      ],
      payNowTotalLabel: "РС‚РѕРіРѕ СЃРµР№С‡Р°СЃ",
      payNowTotal: payNow,
      payLaterTitle: "",
      payLaterRows: [],
      payLaterNotes: [],
      infoLines: [
        "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№ РїР»Р°С‚РёС‚ 1% РћРџР’, 1% РћРџР’Р , 1% Р’РћРЎРњРЎ Рё РЎРћ 1% СЃ Р»РёРјРёС‚РѕРј РґРѕ 7 РњР—Рџ. РРџРќ = 0%."
      ]
    };
  }

  if (regime === "simplified") {
    return {
      payNowTitle: `РџР»Р°С‚РёС‚СЊ РґРѕ ${dueDateLabel}`,
      payNowRows: [
        { label: income <= 0 ? "РћРџР’ (10% РѕС‚ РњР—Рџ, РјРёРЅРёРјСѓРј)" : "РћРџР’ (10% РѕС‚ РґРѕС…РѕРґР°)", value: opv },
        { label: "РЎРћ (5% РѕС‚ РґРѕС…РѕРґР° - РћРџР’)", value: so },
        { label: income <= 0 ? "РћРџР’Р  (3.5% РѕС‚ РњР—Рџ, РјРёРЅРёРјСѓРј)" : "РћРџР’Р  (3.5% РѕС‚ РґРѕС…РѕРґР°, РґРѕ 50 РњР—Рџ)", value: opvr },
        { label: "Р’РћРЎРњРЎ (5% РѕС‚ 1.4 РњР—Рџ)", value: vosms }
      ],
      payNowTotalLabel: "РС‚РѕРіРѕ СЃРµР№С‡Р°СЃ",
      payNowTotal: payNow,
      payLaterTitle: "РџР»Р°С‚РёС‚СЊ РІ Р°РІРіСѓСЃС‚Рµ (Р·Р° I РїРѕР»СѓРіРѕРґРёРµ)",
      payLaterRows: [
        { label: `РРџРќ (${formatRatePercent(simplifiedIpnRate)} РѕС‚ РґРѕС…РѕРґР° Р·Р° РїРѕР»СѓРіРѕРґРёРµ)`, value: ipn, suffix: "/РјРµСЃ" }
      ],
      payLaterNotes: [
        `РЎСЂРѕРє СѓРїР»Р°С‚С‹: РґРѕ 25 Р°РІРіСѓСЃС‚Р° ${currentYear}`,
        ...(ipn > 0 ? [`РЎРѕРІРµС‚: РћС‚РєР»Р°РґС‹РІР°Р№С‚Рµ ~${fmt(ipn)} РєР°Р¶РґС‹Р№ РјРµСЃСЏС†`] : [])
      ],
      infoLines: [
        `${fmt(opv)} (РћРџР’) вЂ” СЌС‚Рѕ РІР°С€Рё РґРµРЅСЊРіРё. РћРЅРё РєРѕРїСЏС‚СЃСЏ РЅР° РІР°С€РµРј РїРµРЅСЃРёРѕРЅРЅРѕРј СЃС‡С‘С‚Рµ, РЅРµ СѓС…РѕРґСЏС‚ РіРѕСЃСѓРґР°СЂСЃС‚РІСѓ.`,
        `РЎРѕС†. РЅР°Р»РѕРі = ${fmt(socTax)} вЂ” РРџ РЅР° СѓРїСЂРѕС‰С‘РЅРєРµ РѕСЃРІРѕР±РѕР¶РґРµРЅС‹ РѕС‚ СЃРѕС†РёР°Р»СЊРЅРѕРіРѕ РЅР°Р»РѕРіР°.`
      ]
    };
  }

  return {
    payNowTitle: "РџР»Р°С‚РёС‚СЊ РµР¶РµРјРµСЃСЏС‡РЅРѕ",
    payNowRows: [
      { label: "РћРџР’ (10% РѕС‚ РґРѕС…РѕРґР°)", value: opv },
      { label: "РћРџР’Р  (3.5% РѕС‚ РґРѕС…РѕРґР°, РґРѕ 50 РњР—Рџ)", value: opvr },
      { label: "РЎРћ (5% РѕС‚ РґРѕС…РѕРґР° - РћРџР’)", value: so },
      { label: "Р’РћРЎРњРЎ (5% РѕС‚ 1.4 РњР—Рџ)", value: vosms },
      { label: "РЎРќ", value: socTax }
    ],
    payNowTotalLabel: "РС‚РѕРіРѕ РµР¶РµРјРµСЃСЏС‡РЅРѕ",
    payNowTotal: payNow,
    payLaterTitle: "РџР»Р°С‚РёС‚СЊ РїРѕ РёС‚РѕРіР°Рј РіРѕРґР°",
    payLaterRows: [
      { label: "РРџРќ (10% РїРѕСЃР»Рµ РІС‹С‡РµС‚Р° 30 РњР Рџ)", value: ipn }
    ],
    payLaterNotes: [
      "РЎСЂРѕРє СѓРїР»Р°С‚С‹: РїРѕ РёС‚РѕРіР°Рј РіРѕРґРѕРІРѕР№ РґРµРєР»Р°СЂР°С†РёРё",
      "РЎРѕРІРµС‚: СЂРµРіСѓР»СЏСЂРЅРѕ РѕР±РЅРѕРІР»СЏР№С‚Рµ СЂР°СЃС…РѕРґС‹ РґР»СЏ С‚РѕС‡РЅРѕРіРѕ РРџРќ"
    ],
    infoLines: [
      `${fmt(opv)} (РћРџР’) С„РѕСЂРјРёСЂСѓСЋС‚ РІР°С€Рё РїРµРЅСЃРёРѕРЅРЅС‹Рµ РЅР°РєРѕРїР»РµРЅРёСЏ.`,
      `РЎРќ = ${fmt(socTax)} (2 РњР Рџ) вЂ” С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹Р№ РїР»Р°С‚РµР¶ РґР»СЏ РћРЈР .`,
      "РҐСЂР°РЅРёС‚Рµ РїРѕРґС‚РІРµСЂР¶РґС‘РЅРЅС‹Рµ СЂР°СЃС…РѕРґС‹, С‡С‚РѕР±С‹ РєРѕСЂСЂРµРєС‚РЅРѕ СЃС‡РёС‚Р°С‚СЊ РЅР°Р»РѕРіРѕРІСѓСЋ Р±Р°Р·Сѓ РћРЈР ."
    ]
  };
}

function renderTaxLoadRows(rows) {
  return rows
    .map((row) => {
      const value = Number(row.value || 0);
      const suffix = row.suffix || "";
      return `<div class="tax-load-row"><span>${escapeHtml(row.label)}</span><strong>${fmt(value)}${suffix}</strong></div>`;
    })
    .join("");
}

function setTaxLoadMobileTab(tabKey) {
  if (!els.taxLoadModalBody) return;
  const tabs = [...els.taxLoadModalBody.querySelectorAll("[data-action='tax-load-mobile-tab']")];
  const panels = [...els.taxLoadModalBody.querySelectorAll("[data-tax-load-panel]")];
  if (!tabs.length || !panels.length) return;

  const normalized = String(tabKey || "").trim();
  const fallback = tabs[0]?.dataset.taxLoadTab || "now";
  const activeKey = tabs.some((tab) => String(tab.dataset.taxLoadTab) === normalized) ? normalized : fallback;

  tabs.forEach((tab) => {
    const isActive = String(tab.dataset.taxLoadTab) === activeKey;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", String(panel.dataset.taxLoadPanel) === activeKey);
  });
}

function openTaxLoadModal() {
  if (!els.taxLoadModal || !els.taxLoadModalTitle || !els.taxLoadModalBody) {
    return;
  }

  const sourceIncomes = state.page === "dashboard" ? getDashboardIncomesForView() : state.incomes;
  const income = getCurrentMonthIncome(sourceIncomes);
  const tax = calcByRegime(state.regime, income, state.calcExpenses);
  const model = getTaxLoadModalModel(state.regime, tax, income);
  const payNowAmount = Math.round(model.payNowTotal || 0);
  const opvAmount = Math.round((tax && tax.opv) || 0);
  const isMobileCompact = isMobileViewport();
  const modalCard = els.taxLoadModal.querySelector(".tax-load-modal-card");
  if (modalCard) {
    modalCard.classList.toggle("tax-load-mobile-compact", isMobileCompact);
  }

  els.taxLoadModalTitle.textContent = `РџР»Р°С‚РёС‚СЊ РІ СЌС‚РѕРј РјРµСЃСЏС†Рµ: ${fmt(payNowAmount)}`;

  const payLaterInnerHtml = model.payLaterTitle
    ? `
      <h4>${escapeHtml(model.payLaterTitle)}</h4>
      ${renderTaxLoadRows(model.payLaterRows)}
      ${model.payLaterNotes.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    `
    : "";

  const infoLines = (model.infoLines || []).filter((line) => !String(line).includes("(РћРџР’)"));
  const infoInnerHtml = infoLines.length > 0
    ? `
      <h4>Р’Р°Р¶РЅРѕ Р·РЅР°С‚СЊ</h4>
      ${infoLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    `
    : "";
  const payNowInnerHtml = `
    <h4>${escapeHtml(model.payNowTitle)}</h4>
    ${renderTaxLoadRows(model.payNowRows)}
    <div class="tax-load-total">
      <span>${escapeHtml(model.payNowTotalLabel)}</span>
      <strong>${fmt(model.payNowTotal)}</strong>
    </div>
  `;

  if (isMobileCompact) {
    const tabs = [
      '<button type="button" class="tax-load-mobile-tab active" data-action="tax-load-mobile-tab" data-tax-load-tab="now" role="tab" aria-selected="true">РЎРµР№С‡Р°СЃ</button>'
    ];
    if (payLaterInnerHtml) {
      tabs.push('<button type="button" class="tax-load-mobile-tab" data-action="tax-load-mobile-tab" data-tax-load-tab="later" role="tab" aria-selected="false">РРџРќ</button>');
    }
    if (infoInnerHtml) {
      tabs.push('<button type="button" class="tax-load-mobile-tab" data-action="tax-load-mobile-tab" data-tax-load-tab="info" role="tab" aria-selected="false">Р’Р°Р¶РЅРѕ</button>');
    }

    els.taxLoadModalBody.innerHTML = `
      <section class="tax-load-highlight" aria-live="polite">
        <p>${fmt(opvAmount)} РёР· СЌС‚РѕР№ СЃСѓРјРјС‹ вЂ” РІР°С€Рё РґРµРЅСЊРіРё РЅР° РїРµРЅСЃРёРѕРЅРЅРѕРј СЃС‡С‘С‚Рµ, РЅРµ СѓС…РѕРґСЏС‚ РіРѕСЃСѓРґР°СЂСЃС‚РІСѓ</p>
      </section>
      <div class="tax-load-mobile-tabs" role="tablist" aria-label="Р Р°Р·РґРµР»С‹ СЂР°СЃС€РёС„СЂРѕРІРєРё">
        ${tabs.join("")}
      </div>
      <div class="tax-load-mobile-panels">
        <section class="tax-load-section tax-load-section-now tax-load-mobile-panel is-active" data-tax-load-panel="now">
          ${payNowInnerHtml}
        </section>
        ${payLaterInnerHtml ? `<section class="tax-load-section tax-load-section-later tax-load-mobile-panel" data-tax-load-panel="later">${payLaterInnerHtml}</section>` : ""}
        ${infoInnerHtml ? `<section class="tax-load-section tax-load-section-info tax-load-mobile-panel" data-tax-load-panel="info">${infoInnerHtml}</section>` : ""}
      </div>
    `;
    setTaxLoadMobileTab("now");
  } else {
    const payLaterHtml = payLaterInnerHtml
      ? `
        <section class="tax-load-section tax-load-section-later">
          ${payLaterInnerHtml}
        </section>
      `
      : "";
    const infoSectionHtml = infoInnerHtml
      ? `
        <section class="tax-load-section tax-load-section-info">
          ${infoInnerHtml}
        </section>
      `
      : "";

    els.taxLoadModalBody.innerHTML = `
      <section class="tax-load-highlight" aria-live="polite">
        <p>${fmt(opvAmount)} РёР· СЌС‚РѕР№ СЃСѓРјРјС‹ вЂ” РІР°С€Рё РґРµРЅСЊРіРё РЅР° РїРµРЅСЃРёРѕРЅРЅРѕРј СЃС‡С‘С‚Рµ, РЅРµ СѓС…РѕРґСЏС‚ РіРѕСЃСѓРґР°СЂСЃС‚РІСѓ</p>
      </section>
      ${infoSectionHtml}
      <section class="tax-load-section tax-load-section-now">
        ${payNowInnerHtml}
      </section>
      ${payLaterHtml}
    `;
  }

  openModal(els.taxLoadModal);
  trackEvent("open_tax_load_modal", { regime: state.regime, payNow: Math.round(model.payNowTotal || 0), total: Math.round(tax.total || 0) });
}

function openDashboardKpiSheet(kpiKey) {
  if (!els.dashboardKpiSheetModal || !els.dashboardKpiSheetTitle || !els.dashboardKpiSheetBody) {
    return;
  }

  const model = dashboardKpiSheetData;
  if (!model) {
    return;
  }

  let title = "Р Р°СЃС€РёС„СЂРѕРІРєР°";
  let bodyHtml = "";

  if (kpiKey === "income_current") {
    title = "Р”РѕС…РѕРґ Р·Р° С‚РµРєСѓС‰РёР№ РјРµСЃСЏС†";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main amount-sensitive">${fmt(model.currentIncome)}</div>
      <div class="kpi-trend ${escapeHtml(model.incomeTrendClass || "flat")}">${escapeHtml(model.incomeTrendText || "Р‘РµР· РёР·РјРµРЅРµРЅРёР№")}</div>
      <p class="dashboard-kpi-sheet-note">РЎСѓРјРјР° СЃС‡РёС‚Р°РµС‚СЃСЏ РїРѕ РѕРїРµСЂР°С†РёСЏРј РІ Р¶СѓСЂРЅР°Р»Рµ РґРѕС…РѕРґРѕРІ Р·Р° С‚РµРєСѓС‰РёР№ РјРµСЃСЏС†.</p>
    `;
  } else if (kpiKey === "tax_load") {
    title = model.taxLoadTitle || "Р—Р°РїР»Р°С‚РёС‚СЊ РІ СЌС‚РѕРј РјРµСЃСЏС†Рµ";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main stat-danger amount-sensitive">${fmt(model.taxLoadPayNow || 0)}</div>
      <p class="dashboard-kpi-sheet-note">Рљ СѓРїР»Р°С‚Рµ РґРѕ ${escapeHtml(model.taxDueDateLabel || "")}.</p>
      <div class="dashboard-kpi-sheet-list">
        ${(model.taxRows || []).map((row) => `
          <div class="dashboard-kpi-sheet-row">
            <span>${escapeHtml(row.label)}</span>
            <strong class="amount-sensitive">${fmt(row.value || 0)}</strong>
          </div>
        `).join("")}
      </div>
      <p class="dashboard-kpi-sheet-note">РРџРќ: <span class="amount-sensitive">${fmt(model.taxLoadIpnReserve || 0)}</span> (РѕС‚РєР»Р°РґС‹РІР°С‚СЊ РµР¶РµРјРµСЃСЏС‡РЅРѕ).</p>
    `;
  } else if (kpiKey === "income_ytd") {
    title = "Р”РѕС…РѕРґ СЃ РЅР°С‡Р°Р»Р° РіРѕРґР°";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main amount-sensitive">${fmt(model.totalIncome || 0)}</div>
      <p class="dashboard-kpi-sheet-note">РЎСЂРµРґРЅРёР№ С‚РµРјРї: <span class="amount-sensitive">${fmt(model.avgMonthlyIncome || 0)}</span> / РјРµСЃ.</p>
      <p class="dashboard-kpi-sheet-note">РџСЂРѕРіРЅРѕР· Р·Р° РіРѕРґ: <span class="amount-sensitive">${fmt(model.annualRunRate || 0)}</span>.</p>
    `;
  } else if (kpiKey === "next_deadline") {
    title = "Р‘Р»РёР¶Р°Р№С€РёР№ СЃСЂРѕРє";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main">${escapeHtml(model.nextDeadlineDate || "РќРµС‚")}</div>
      <p class="dashboard-kpi-sheet-note">${escapeHtml(model.nextDeadlineTitle || "Р’СЃРµ Р·Р°РґР°С‡Рё Р·Р°РєСЂС‹С‚С‹")}</p>
      <p class="dashboard-kpi-sheet-note">${escapeHtml(model.nextDeadlineDueText || "")}</p>
    `;
  }

  els.dashboardKpiSheetTitle.textContent = title;
  els.dashboardKpiSheetBody.innerHTML = bodyHtml;
  openModal(els.dashboardKpiSheetModal);
}

function getMonthlyData(incomes = state.incomes) {
  const year = new Date().getFullYear();
  const buckets = Array.from({ length: 12 }, (_, index) => ({
    name: MONTHS[index],
    income: 0,
    entries: 0
  }));

  incomes.forEach((row) => {
    const date = new Date(row.date);
    if (date.getFullYear() !== year) return;

    const monthIndex = date.getMonth();
    if (monthIndex >= 0 && monthIndex < 12) {
      buckets[monthIndex].income += Number(row.amount || 0);
      buckets[monthIndex].entries += 1;
    }
  });

  return buckets;
}

function getUpcomingDeadlines() {
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);

  return DEADLINES_2026
    .filter((row) => {
      const dateObj = new Date(row.date);
      const byRegime = isDeadlineApplicableForRegime(row, state.regime);
      const byDate = dateObj >= dayStart;
      const byTracking = isDeadlineInTrackingRange(row.date);
      const isDone = state.doneDeadlines.includes(row.id);
      return byRegime && byDate && byTracking && !isDone;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getIncomeByMonth(year, monthIndex, incomes = state.incomes) {
  return incomes
    .filter((row) => {
      const dateObj = new Date(row.date);
      return dateObj.getFullYear() === year && dateObj.getMonth() === monthIndex;
    })
    .reduce((sum, row) => sum + Number(row.amount || 0), 0);
}

function buildDashboardDemoIncomes() {
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth();
  const rows = [
    { month: currentMonth, day: 10, amount: 190000, category: "РџСЂРѕРґР°Р¶Рё С‚РѕРІР°СЂРѕРІ" },
    { month: currentMonth, day: 6, amount: 340000, category: "РљРѕРјРёСЃСЃРёРё" },
    { month: Math.max(0, currentMonth - 1), day: 22, amount: 260000, category: "РЈСЃР»СѓРіРё" },
    { month: Math.max(0, currentMonth - 2), day: 14, amount: 180000, category: "РџСЂРѕРґР°Р¶Рё С‚РѕРІР°СЂРѕРІ" },
    { month: Math.max(0, currentMonth - 3), day: 8, amount: 220000, category: "РњР°СЂРєРµС‚РїР»РµР№СЃ" }
  ];

  return rows.map((row, index) => ({
    id: -(index + 1),
    amount: row.amount,
    date: new Date(year, row.month, row.day).toISOString().slice(0, 10),
    category: row.category,
    comment: "Р”РµРјРѕ-РѕРїРµСЂР°С†РёСЏ"
  }));
}

function getDashboardIncomesForView() {
  if (state.incomes.length > 0) {
    return state.incomes;
  }

  if (!dashboardDemoMode) {
    return [];
  }

  if (dashboardDemoIncomes.length === 0) {
    dashboardDemoIncomes = buildDashboardDemoIncomes();
  }

  return dashboardDemoIncomes;
}

function buildTrend(current, previous, inverse = false) {
  const delta = current - previous;

  if (previous <= 0 && current <= 0) {
    return { className: "flat", text: "Р‘РµР· РёР·РјРµРЅРµРЅРёР№ Рє РїСЂРѕС€Р»РѕРјСѓ РјРµСЃСЏС†Сѓ" };
  }

  if (previous <= 0 && current > 0) {
    return {
      className: inverse ? "down" : "up",
      text: inverse ? "РќРѕРІР°СЏ РЅР°Р»РѕРіРѕРІР°СЏ РЅР°РіСЂСѓР·РєР°" : "РќРѕРІС‹Р№ РїРѕС‚РѕРє РґРѕС…РѕРґР°"
    };
  }

  const pct = Math.max(1, Math.round((Math.abs(delta) / previous) * 100));
  if (delta === 0) {
    return { className: "flat", text: "Р‘РµР· РёР·РјРµРЅРµРЅРёР№ Рє РїСЂРѕС€Р»РѕРјСѓ РјРµСЃСЏС†Сѓ" };
  }

  const sign = delta > 0 ? "+" : "-";
  const good = inverse ? delta < 0 : delta > 0;

  return {
    className: good ? "up" : "down",
    text: `${sign}${pct}% Рє РїСЂРѕС€Р»РѕРјСѓ РјРµСЃСЏС†Сѓ`
  };
}

function getLimitRiskMeta(limitPct, monthsToLimit) {
  if (limitPct === null || limitPct === undefined) {
    return { className: "unknown", label: "Р‘РµР· Р»РёРјРёС‚Р°" };
  }

  if (limitPct >= 90 || (monthsToLimit !== null && monthsToLimit <= 2)) {
    return { className: "high", label: "Р’С‹СЃРѕРєРёР№ СЂРёСЃРє" };
  }

  if (limitPct >= 70 || (monthsToLimit !== null && monthsToLimit <= 6)) {
    return { className: "medium", label: "РЎСЂРµРґРЅРёР№ СЂРёСЃРє" };
  }

  return { className: "low", label: "РќРёР·РєРёР№ СЂРёСЃРє" };
}
function getOnboardingTourStorageKey(page = state.page) {
  if (page === "income") {
    return ONBOARDING_TOUR_INCOME_STORAGE_KEY;
  }

  if (page === "taxes") {
    return ONBOARDING_TOUR_TAXES_STORAGE_KEY;
  }

  if (page === "calendar") {
    return ONBOARDING_TOUR_CALENDAR_STORAGE_KEY;
  }

  return ONBOARDING_TOUR_STORAGE_KEY;
}

function getActiveOnboardingTourSteps() {
  if (state.page === "income") {
    if (state.incomeEditId) {
      return ONBOARDING_TOUR_INCOME_STEPS.map((step, index) => {
        if (index !== 0) return step;
        return {
          ...step,
          title: "Р¤РѕСЂРјР° РѕРїРµСЂР°С†РёРё",
          text: "Р—РґРµСЃСЊ РјРѕР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ РЅРѕРІСѓСЋ РѕРїРµСЂР°С†РёСЋ РёР»Рё РѕС‚СЂРµРґР°РєС‚РёСЂРѕРІР°С‚СЊ С‚РµРєСѓС‰СѓСЋ. РџРѕСЃР»Рµ СЃРѕС…СЂР°РЅРµРЅРёСЏ Р·Р°РїРёСЃСЊ СЃСЂР°Р·Сѓ РїРѕРїР°РґРµС‚ РІ Р¶СѓСЂРЅР°Р»."
        };
      });
    }
    return ONBOARDING_TOUR_INCOME_STEPS;
  }

  if (state.page === "taxes") {
    return ONBOARDING_TOUR_TAXES_STEPS;
  }

  if (state.page === "calendar") {
    return ONBOARDING_TOUR_CALENDAR_STEPS;
  }

  return ONBOARDING_TOUR_STEPS;
}

function isOnboardingTourDone(page = state.page) {
  try {
    return localStorage.getItem(getOnboardingTourStorageKey(page)) === "true";
  } catch (_error) {
    return false;
  }
}

function isOnboardingTourForced() {
  try {
    return localStorage.getItem(ONBOARDING_TOUR_FORCE_STORAGE_KEY) === "true";
  } catch (_error) {
    return false;
  }
}

function setOnboardingTourForced(enabled) {
  try {
    if (enabled) {
      localStorage.setItem(ONBOARDING_TOUR_FORCE_STORAGE_KEY, "true");
    } else {
      localStorage.removeItem(ONBOARDING_TOUR_FORCE_STORAGE_KEY);
    }
  } catch (_error) {
    // ignore storage errors
  }
}

function markOnboardingTourDone(page = state.page) {
  try {
    localStorage.setItem(getOnboardingTourStorageKey(page), "true");
  } catch (_error) {
    // ignore storage errors
  }
}

function startOnboardingTour(page = "dashboard", forceOpen = false) {
  if (!state.isLoggedIn) {
    return;
  }

  if (page) {
    state.page = page;
  }

  if (forceOpen) {
    setOnboardingTourForced(true);
  }
  onboardingTourState.forceOpen = Boolean(forceOpen) || onboardingTourState.forceOpen;

  onboardingTourState.active = true;
  onboardingTourState.page = state.page;
  onboardingTourState.step = 0;
  onboardingTourState.swipeStartY = null;

  const trySync = (attempt = 0) => {
    syncOnboardingTour();
    if (getOnboardingTourRoot() || attempt >= 4) {
      return;
    }
    setTimeout(() => trySync(attempt + 1), 90);
  };

  requestAnimationFrame(() => {
    trySync(0);
  });
}

function shouldShowOnboardingTour() {
  if (!state.isLoggedIn || shouldShowOnboarding()) {
    return false;
  }

  if (state.page !== "dashboard" && state.page !== "income" && state.page !== "taxes" && state.page !== "calendar") {
    return false;
  }

  const forced = onboardingTourState.forceOpen || isOnboardingTourForced();

  if (state.page === "dashboard") {
    if ((state.incomes || []).length > 0 && !forced) {
      return false;
    }

    return forced || !isOnboardingTourDone("dashboard");
  }

  if (state.page === "income") {
    return !isOnboardingTourDone("income");
  }

  if (state.page === "taxes") {
    return !isOnboardingTourDone("taxes");
  }

  return !isOnboardingTourDone("calendar");
}

function getOnboardingTourRoot() {
  return document.getElementById("onboardingTourRoot");
}

function clearOnboardingTourHighlight() {
  document.querySelectorAll("[data-tour-highlight='true']").forEach((node) => {
    node.classList.remove("onboarding-tour-highlight");
    node.removeAttribute("data-tour-highlight");
    if (node instanceof HTMLElement) {
      node.style.zIndex = "";
    }
  });
}

function ensureOnboardingTourTargetVisible(node) {
  if (!node || typeof node.getBoundingClientRect !== "function") {
    return;
  }

  const rect = node.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
  const margin = 32;
  const isVerticallyVisible = rect.top >= margin && rect.bottom <= viewportHeight - margin;
  const isHorizontallyVisible = rect.left >= margin && rect.right <= viewportWidth - margin;

  if ((!isVerticallyVisible || !isHorizontallyVisible) && typeof node.scrollIntoView === "function") {
    node.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
}

function resolveOnboardingTourStep() {
  const steps = getActiveOnboardingTourSteps();
  const start = Math.max(0, Math.min(onboardingTourState.step, steps.length - 1));

  for (let index = start; index < steps.length; index += 1) {
    const step = steps[index];
    const targetNode = document.querySelector(`[data-tour-target="${step.target}"]`);
    if (targetNode) {
      onboardingTourState.step = index;
      return { index, step, targetNode, steps };
    }
  }

  return null;
}

function closeOnboardingTour(markDone = false, reason = "close") {
  const root = getOnboardingTourRoot();
  if (root) {
    root.remove();
  }

  clearOnboardingTourHighlight();
  document.body.classList.remove("onboarding-tour-active");

  const donePage = onboardingTourState.page || state.page;

  onboardingTourState.active = false;
  onboardingTourState.step = 0;
  onboardingTourState.swipeStartY = null;
  onboardingTourState.page = null;
  if (markDone) {
    onboardingTourState.forceOpen = false;
  }

  if (markDone) {
    markOnboardingTourDone(donePage);
    if (donePage === "dashboard") {
      setOnboardingTourForced(false);
    }
    trackEvent("onboarding_tour_done", { reason, page: donePage });
  }
}

function advanceOnboardingTourStep(reason = "next") {
  if (!onboardingTourState.active) {
    return;
  }

  const steps = getActiveOnboardingTourSteps();
  const isLastStep = onboardingTourState.step >= steps.length - 1;
  if (isLastStep) {
    closeOnboardingTour(true, "complete");
    return;
  }

  onboardingTourState.step += 1;
  trackEvent("onboarding_tour_step", { step: onboardingTourState.step + 1, reason, page: state.page });
  renderOnboardingTour();
}

function onOnboardingTourTouchStart(event) {
  const touch = event.changedTouches && event.changedTouches[0];
  onboardingTourState.swipeStartY = touch ? touch.clientY : null;
}

function onOnboardingTourTouchEnd(event) {
  const touch = event.changedTouches && event.changedTouches[0];
  if (!touch || onboardingTourState.swipeStartY === null) {
    onboardingTourState.swipeStartY = null;
    return;
  }

  const delta = touch.clientY - onboardingTourState.swipeStartY;
  onboardingTourState.swipeStartY = null;

  if (delta > ONBOARDING_TOUR_SWIPE_THRESHOLD) {
    advanceOnboardingTourStep("swipe");
  }
}

function applyOnboardingTourInlineLayout(root, isMobile) {
  if (!root) return;

  const overlay = root.querySelector(".onboarding-tour-overlay");
  const panel = root.querySelector(".onboarding-tour-panel");
  if (!overlay || !panel) return;

  Object.assign(root.style, {
    position: "static",
    inset: "auto",
    zIndex: "auto",
    pointerEvents: "none"
  });

  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    zIndex: "12010",
    pointerEvents: "auto"
  });

  Object.assign(panel.style, {
    position: "fixed",
    zIndex: "2147483647",
    pointerEvents: "auto"
  });

  if (isMobile) {
    Object.assign(panel.style, {
      left: "12px",
      right: "12px",
      bottom: "calc(12px + env(safe-area-inset-bottom))",
      top: "",
      width: "auto",
      minHeight: "0",
      maxHeight: "min(66vh, 560px)",
      transform: ""
    });
  } else {
    Object.assign(panel.style, {
      width: "calc(100vw - 32px)",
      maxWidth: "480px",
      minHeight: "",
      maxHeight: "",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      right: "",
      bottom: ""
    });
  }
}

function renderOnboardingTour() {
  const canShowByRules = shouldShowOnboardingTour();
  if (!canShowByRules && !onboardingTourState.forceOpen) {
    closeOnboardingTour(false, "hidden");
    return;
  }

  let resolved = resolveOnboardingTourStep();
  if (!resolved && !onboardingTourState.forceOpen) {
    closeOnboardingTour(true, "missing_targets");
    return;
  }

  const steps = getActiveOnboardingTourSteps();
  if (!resolved) {
    const fallbackIndex = Math.max(0, Math.min(onboardingTourState.step, steps.length - 1));
    resolved = {
      index: fallbackIndex,
      step: steps[fallbackIndex] || ONBOARDING_TOUR_STEPS[0],
      targetNode: null
    };
  }

  const { index, step, targetNode } = resolved;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isLastStep = index === steps.length - 1;
  const actionLabel = isLastStep ? "РќР°С‡Р°С‚СЊ СЂР°Р±РѕС‚Сѓ" : "Р”Р°Р»РµРµ";
  const skipLabel = isMobile ? "РџСЂРѕРїСѓСЃС‚РёС‚СЊ" : "РџСЂРѕРїСѓСЃС‚РёС‚СЊ С‚СѓСЂ";
  const dotsHtml = steps
    .map((_, dotIndex) => `<span class="onboarding-tour-dot${dotIndex === index ? " active" : ""}" aria-hidden="true"></span>`)
    .join("");

  clearOnboardingTourHighlight();
  if (targetNode) {
    ensureOnboardingTourTargetVisible(targetNode);
    targetNode.classList.add("onboarding-tour-highlight");
    targetNode.setAttribute("data-tour-highlight", "true");
    targetNode.style.zIndex = "12020";
  }

  let root = getOnboardingTourRoot();
  if (!root) {
    root = document.createElement("div");
    root.id = "onboardingTourRoot";
    document.body.appendChild(root);
  }

  root.className = `onboarding-tour-root ${isMobile ? "mobile" : "desktop"}`;
  root.innerHTML = `
    <div class="onboarding-tour-overlay" data-action="onboarding-tour-skip"></div>
    <article class="onboarding-tour-panel" role="dialog" aria-modal="true" aria-live="polite" aria-label="РћРЅР±РѕСЂРґРёРЅРі РїРѕ РёРЅС‚РµСЂС„РµР№СЃСѓ">
      ${isMobile ? '<div class="onboarding-tour-handle" aria-hidden="true"></div>' : '<div class="onboarding-tour-topbar" aria-hidden="true"></div>'}
      <div class="onboarding-tour-header">
        <span class="onboarding-tour-icon" aria-hidden="true"><i data-lucide="${step.icon}"></i></span>
        <h3>${escapeHtml(step.title)}</h3>
      </div>
      <p class="onboarding-tour-text">${escapeHtml(step.text)}</p>
      <div class="onboarding-tour-footer">
        <div class="onboarding-tour-dots" aria-label="РЁР°Рі ${index + 1} РёР· ${steps.length}">${dotsHtml}</div>
        <button type="button" class="btn btn-primary onboarding-tour-next" data-action="onboarding-tour-next">${actionLabel}</button>
        <button type="button" class="onboarding-tour-skip" data-action="onboarding-tour-skip">${skipLabel}</button>
      </div>
    </article>
  `;

  applyOnboardingTourInlineLayout(root, isMobile);

  document.body.classList.add("onboarding-tour-active");

  const panel = root.querySelector(".onboarding-tour-panel");
  if (panel && isMobile) {
    panel.addEventListener("touchstart", onOnboardingTourTouchStart, { passive: true });
    panel.addEventListener("touchend", onOnboardingTourTouchEnd, { passive: true });
  }

  onboardingTourState.active = true;
  onboardingTourState.page = state.page;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "22",
        height: "22"
      }
    });
  }
}

function syncOnboardingTour() {
  const shouldShow = shouldShowOnboardingTour() || onboardingTourState.forceOpen;
  const pageChanged = onboardingTourState.page && onboardingTourState.page !== state.page;

  if (shouldShow) {
    if (!onboardingTourState.active || pageChanged) {
      onboardingTourState.active = true;
      onboardingTourState.page = state.page;
      onboardingTourState.step = 0;
      onboardingTourState.swipeStartY = null;
      trackEvent("onboarding_tour_start", { step: 1, page: state.page });
    }
    renderOnboardingTour();
    return;
  }

  if (onboardingTourState.active || getOnboardingTourRoot()) {
    closeOnboardingTour(false, "sync_hide");
  }
}
function handleGlobalKeyDown(event) {
  if (event.key === "Escape" && onboardingTourState.active) {
    event.preventDefault();
    closeOnboardingTour(true, "escape");
  }
}
function renderDashboard() {
  if (shouldShowOnboarding()) {
    document.body.classList.add("onboarding-page-active");
    if (els.dashboardApp) {
      els.dashboardApp.classList.add("onboarding-mode");
    }
    if (onboardingTourState.active || getOnboardingTourRoot()) {
      closeOnboardingTour(false, "onboarding_flow");
    }

    lastRenderedPage = "onboarding";
    els.pageTitle.textContent = "Р‘С‹СЃС‚СЂС‹Р№ СЃС‚Р°СЂС‚";
    renderSidebarActive();
    els.accountName.textContent = state.profile.name || state.userEmail;
    updatePlanUi();
    updateCalendarReminderToggleUi();
    updateMobileHeaderState();
    renderOnboardingPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (els.dashboardApp) {
    els.dashboardApp.classList.remove("onboarding-mode");
  }
  document.body.classList.remove("onboarding-page-active");

  els.pageTitle.textContent = PAGE_TITLES[state.page] || PAGE_TITLES.dashboard;
  renderSidebarActive();
  els.regimeSelect.value = state.regime;
  syncMobileDrawerRegimeTabs();
  els.accountName.textContent = state.profile.name || state.userEmail;
  updatePlanUi();
  updateCalendarReminderToggleUi();
  updateMobileHeaderState();

  if (state.page !== "dashboard" && state.page !== "income" && state.page !== "taxes" && state.page !== "calendar" && (onboardingTourState.active || getOnboardingTourRoot())) {
    closeOnboardingTour(false, "page_change");
  }

  if (state.page === "dashboard") {
    const enteringDashboardPage = lastRenderedPage !== "dashboard";
    if (enteringDashboardPage) {
      state.dashboardSelectedMonth = new Date().getMonth();
      state.dashboardRecentMonth = null;
    }
    lastRenderedPage = "dashboard";
    renderDashboardPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "income") {
    lastRenderedPage = "income";
    renderIncomePage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "taxes") {
    const enteringTaxesPage = lastRenderedPage !== "taxes";
    if (enteringTaxesPage) {
      const synced = syncTaxPlannerIncomeFromJournalOnOpen();
      if (synced) {
        saveState();
      }
    }

    lastRenderedPage = "taxes";
    renderTaxesPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "calendar") {
    lastRenderedPage = "calendar";
    renderCalendarPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "calculator") {
    lastRenderedPage = "calculator";
    renderCalculatorPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "knowledge") {
    lastRenderedPage = "knowledge";
    renderKnowledgePage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "feedback") {
    lastRenderedPage = "feedback";
    renderFeedbackPage();
    updateAmountsVisibilityUi();
    return;
  }

  lastRenderedPage = "settings";
  renderSettingsPage();
  updateAmountsVisibilityUi();
}

function renderDashboardPage() {
  const dashboardIncomes = getDashboardIncomesForView();
  const showWelcomeBanner = state.incomes.length === 0;

  const monthlyData = getMonthlyData(dashboardIncomes);
  const maxIncome = Math.max(...monthlyData.map((x) => x.income), 1);
  const monthsWithEntriesCount = monthlyData.filter((row) => Number(row.entries || 0) > 0).length;
  const hasAnyMonthsHistory = monthsWithEntriesCount > 0;
  const hasThreeMonthsHistory = monthsWithEntriesCount >= 3;

  const currentIncome = getCurrentMonthIncome(dashboardIncomes);
  const totalIncome = getTotalIncome(dashboardIncomes);
  const currentTax = calcByRegime(state.regime, currentIncome, state.calcExpenses);
  const limit = getRegimeLimit(state.regime);
  const limitPct = limit ? Math.min((totalIncome / limit) * 100, 100) : null;
  const safeLimitPct = limitPct === null ? null : Math.round(limitPct);
  const nextDeadline = getUpcomingDeadlines()[0];
  const now = new Date();
  const currentMonthIndex = now.getMonth();
  const hasSelectedMonth = state.dashboardSelectedMonth !== null && state.dashboardSelectedMonth !== undefined && state.dashboardSelectedMonth !== "";
  const selectedMonthRaw = hasSelectedMonth ? Number(state.dashboardSelectedMonth) : Number.NaN;
  const selectedMonthIndex = Number.isFinite(selectedMonthRaw)
    ? Math.min(currentMonthIndex, Math.max(0, Math.trunc(selectedMonthRaw)))
    : currentMonthIndex;
  state.dashboardSelectedMonth = selectedMonthIndex;
  const selectedMonthDate = new Date(now.getFullYear(), selectedMonthIndex, 1);
  const selectedMonthLabel = formatMonthYearLabel(selectedMonthDate);
  const selectedMonthIsCurrent = selectedMonthIndex >= currentMonthIndex;
  const selectedMonthLabelPlain = String(MONTHS_ACCUSATIVE[selectedMonthIndex] || "СЌС‚РѕС‚ РјРµСЃСЏС†").toLowerCase("ru-KZ");
  const currentMonthLabelPlain = String(MONTHS_ACCUSATIVE[currentMonthIndex] || "СЌС‚РѕС‚ РјРµСЃСЏС†").toLowerCase("ru-KZ");
  const selectedMonthContextNote = selectedMonthIndex !== currentMonthIndex
    ? `<p class="dashboard-tax-month-context">Р”Р°РЅРЅС‹Рµ Р·Р° ${escapeHtml(selectedMonthLabelPlain)}. РўРµРєСѓС‰РёР№ РјРµСЃСЏС†: ${escapeHtml(currentMonthLabelPlain)}.</p>`
    : "";
  const selectedMonthLabelAccusative = MONTHS_ACCUSATIVE[selectedMonthIndex] || "СЌС‚РѕС‚ РјРµСЃСЏС†";
  const selectedMonthData = monthlyData[selectedMonthIndex] || { income: 0, entries: 0 };
  const selectedIncome = Math.max(0, Number(selectedMonthData.income || 0));
  const selectedMonthHasIncome = selectedIncome > 0;
  const selectedTaxRaw = calcByRegime(state.regime, selectedIncome, state.calcExpenses);
  const selectedTax = selectedMonthHasIncome
    ? selectedTaxRaw
    : { opv: 0, so: 0, opvr: 0, vosms: 0, ipn: 0, socTax: 0, total: 0 };
  const monthTabsHtml = Array.from({ length: currentMonthIndex + 1 }, (_, index) => {
    const activeClass = index === selectedMonthIndex ? " active" : "";
    return `<button type="button" class="dashboard-month-tab${activeClass}" data-action="select-dashboard-month" data-month-index="${index}" data-month-source="tabs">${MONTHS[index]}</button>`;
  }).join("");
  const previousMonthDate = new Date(now.getFullYear(), now.getMonth(), 1);
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);

  const previousIncome = getIncomeByMonth(previousMonthDate.getFullYear(), previousMonthDate.getMonth(), dashboardIncomes);

  const incomeTrend =
    previousIncome <= 0 && currentIncome > 0
      ? {
          className: "up",
          text: `РџРµСЂРІС‹Р№ РґРѕС…РѕРґ РІ ${MONTHS_PREPOSITIONAL[currentMonthIndex] || "СЌС‚РѕРј РјРµСЃСЏС†Рµ"}`
        }
      : buildTrend(currentIncome, previousIncome, false);
  const monthsPassed = now.getMonth() + 1;
  const avgMonthlyIncome = monthsPassed > 0 ? totalIncome / monthsPassed : 0;
  const annualRunRate = avgMonthlyIncome * 12;

  const remainingToLimit = limit ? Math.max(limit - totalIncome, 0) : null;
  const monthlyPaceIncome = currentIncome > 0 ? currentIncome : previousIncome > 0 ? previousIncome : avgMonthlyIncome;
  const monthsToLimit = limit && monthlyPaceIncome > 0 ? Math.ceil(remainingToLimit / monthlyPaceIncome) : null;
  const progressEtaText =
    totalIncome <= 0 || monthlyPaceIncome <= 0 || monthsToLimit === null
      ? "Р”РѕР±Р°РІСЊС‚Рµ РґРѕС…РѕРґ РґР»СЏ РїСЂРѕРіРЅРѕР·Р°"
      : monthsToLimit > 120
        ? "Р›РёРјРёС‚ СЂРµР¶РёРјР° РЅРµРґРѕСЃС‚РёР¶РёРј РїСЂРё С‚РµРєСѓС‰РµРј РґРѕС…РѕРґРµ"
        : `РџСЂРё С‚РµРєСѓС‰РµРј С‚РµРјРїРµ: ~${monthsToLimit} РјРµСЃ.`;
  const riskMeta = getLimitRiskMeta(safeLimitPct, monthsToLimit);
  const hasAdvancedAnalytics = canUseFeature("advanced_analytics");
  const taxLoadPayNow = Math.max(0, Math.round(Number(currentTax.opv || 0) + Number(currentTax.so || 0) + Number(currentTax.opvr || 0) + Number(currentTax.vosms || 0)));
  const taxLoadMonthLabel = String(MONTHS_PREPOSITIONAL[currentMonthIndex] || "СЌС‚РѕРј РјРµСЃСЏС†Рµ").toLocaleUpperCase("ru-KZ");
  const taxLoadTitle = `Р—РђРџР›РђРўРРўР¬ Р’ ${taxLoadMonthLabel}`;
  const taxLoadIpnReserve = Math.max(0, Math.round((currentTax && currentTax.ipn) || 0));
  const taxLoadOpvSavings = Math.max(0, Math.round((currentTax && currentTax.opv) || 0));
  const infoHintIcon = '<span class="inline-info-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M12 10v6"></path><path d="M12 7h.01"></path></svg></span>';
  const bars = monthlyData
    .map((row, index) => {
      const height = Math.max((row.income / maxIncome) * 170, row.income > 0 ? 8 : 4);
      const activeClass = index === selectedMonthIndex ? " is-active" : "";
      const barClass = index === selectedMonthIndex ? " is-active" : " is-muted";
      const monthLabel = MONTHS_ACCUSATIVE[index] || row.name;
      return `
        <div class="chart-item${activeClass}" data-action="select-dashboard-month" data-month-index="${index}" data-month-source="chart" title="РџРѕРєР°Р·Р°С‚СЊ РЅР°Р»РѕРіРё Р·Р° ${monthLabel}">
          <div class="chart-bar${barClass}" style="height:${height}px" title="${row.name}: ${fmt(row.income)}" data-value="${fmt(row.income)}"></div>
          <span>${row.name}</span>
        </div>
      `;
    })
    .join("");

  const deadlineDueText = nextDeadline ? getLandingDeadlineDueInfo(nextDeadline.date).text : "РЎСЂРѕРєРѕРІ РЅРµС‚";
  const deadlineDaysLeft = nextDeadline
    ? Math.ceil((new Date(nextDeadline.date).setHours(0, 0, 0, 0) - new Date(new Date().setHours(0, 0, 0, 0))) / 86400000)
    : null;
  const deadlineCardClass = deadlineDaysLeft === null ? "" : deadlineDaysLeft <= 7 ? " urgent" : deadlineDaysLeft < 30 ? " warning" : "";
  const deadlineNoteClass = deadlineDaysLeft === null ? "kpi-note" : deadlineDaysLeft <= 7 ? "kpi-note urgent" : deadlineDaysLeft < 30 ? "kpi-note warning" : "kpi-note";
  const welcomeDeadlineHint = nextDeadline
    ? deadlineDaysLeft < 0
      ? "Р•СЃС‚СЊ РїСЂРѕСЃСЂРѕС‡РµРЅРЅС‹Р№ СЃСЂРѕРє вЂ” РґРѕР±Р°РІСЊС‚Рµ РґРѕС…РѕРґ С‡С‚РѕР±С‹ Р·РЅР°С‚СЊ СЃРєРѕР»СЊРєРѕ РїР»Р°С‚РёС‚СЊ."
      : deadlineDaysLeft === 0
        ? "Р‘Р»РёР¶Р°Р№С€РёР№ СЃСЂРѕРє СѓР¶Рµ СЃРµРіРѕРґРЅСЏ вЂ” РґРѕР±Р°РІСЊС‚Рµ РґРѕС…РѕРґ С‡С‚РѕР±С‹ Р·РЅР°С‚СЊ СЃРєРѕР»СЊРєРѕ РїР»Р°С‚РёС‚СЊ."
        : `Р”Рѕ Р±Р»РёР¶Р°Р№С€РµРіРѕ СЃСЂРѕРєР° ${deadlineDaysLeft} ${getLandingDayWord(deadlineDaysLeft)} вЂ” РґРѕР±Р°РІСЊС‚Рµ РґРѕС…РѕРґ С‡С‚РѕР±С‹ Р·РЅР°С‚СЊ СЃРєРѕР»СЊРєРѕ РїР»Р°С‚РёС‚СЊ.`
    : "Р”РѕР±Р°РІСЊС‚Рµ РґРѕС…РѕРґ С‡С‚РѕР±С‹ Р·РЅР°С‚СЊ СЃРєРѕР»СЊРєРѕ РїР»Р°С‚РёС‚СЊ РїРѕ Р±Р»РёР¶Р°Р№С€РёРј СЃСЂРѕРєР°Рј.";
  const deadlineIncomeHint = state.incomes.length === 0
    ? '<div class="stat-sub deadline-income-hint">РґРѕР±Р°РІСЊС‚Рµ РґРѕС…РѕРґ С‡С‚РѕР±С‹ СЂР°СЃСЃС‡РёС‚Р°С‚СЊ СЃСѓРјРјСѓ</div>'
    : "";
  const isMobileKpiMode = isMobileViewport();
  const formatMobileKpiAmount = (value) => {
    const numeric = Number(value || 0);
    const abs = Math.abs(numeric);
    if (abs >= 1000000) {
      const mln = abs / 1000000;
      const digits = mln >= 100 ? 0 : 1;
      const mlnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(mln);
      return `${numeric < 0 ? "-" : ""}${mlnText} РјР»РЅ в‚ё`;
    }
    return fmt(numeric);
  };
  const getMobileKpiValueSizeClass = (valueText) => {
    const compactLength = String(valueText || "").replace(/\s+/g, "").length;
    if (compactLength >= 12) return " kpi-value-mobile-s";
    if (compactLength >= 9) return " kpi-value-mobile-m";
    return "";
  };
  const incomeKpiTitle = isMobileKpiMode ? "Р”РѕС…РѕРґ Р·Р° РјРµСЃСЏС†" : "Р”РѕС…РѕРґ Р·Р° С‚РµРєСѓС‰РёР№ РјРµСЃСЏС†";
  const incomeYtdKpiTitle = isMobileKpiMode ? "РЎ РЅР°С‡Р°Р»Р° РіРѕРґР°" : "Р”РѕС…РѕРґ СЃ РЅР°С‡Р°Р»Р° РіРѕРґР°";
  const incomeKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(currentIncome) : fmt(currentIncome);
  const taxLoadKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(taxLoadPayNow) : fmt(taxLoadPayNow);
  const incomeYtdKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(totalIncome) : fmt(totalIncome);
  const incomeYtdAvgKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(avgMonthlyIncome) : fmt(avgMonthlyIncome);
  const incomeKpiValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(incomeKpiValueText) : "";
  const taxLoadKpiValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(taxLoadKpiValueText) : "";
  const incomeYtdKpiValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(incomeYtdKpiValueText) : "";
  const mobileDeadlineTitle = (() => {
    if (!nextDeadline) return "РІСЃРµ Р·Р°РґР°С‡Рё Р·Р°РєСЂС‹С‚С‹";
    const source = String(nextDeadline.title || "").trim();
    return source || "РІСЃРµ Р·Р°РґР°С‡Рё Р·Р°РєСЂС‹С‚С‹";
  })();
  const MONTHS_GENITIVE = ["СЏРЅРІР°СЂСЏ", "С„РµРІСЂР°Р»СЏ", "РјР°СЂС‚Р°", "Р°РїСЂРµР»СЏ", "РјР°СЏ", "РёСЋРЅСЏ", "РёСЋР»СЏ", "Р°РІРіСѓСЃС‚Р°", "СЃРµРЅС‚СЏР±СЂСЏ", "РѕРєС‚СЏР±СЂСЏ", "РЅРѕСЏР±СЂСЏ", "РґРµРєР°Р±СЂСЏ"];
  const mobileDeadlineDateLabel = nextDeadline
    ? (() => {
      const dateObj = new Date(nextDeadline.date);
      return `${dateObj.getDate()} ${MONTHS_GENITIVE[dateObj.getMonth()] || ""}`.trim();
    })()
    : "РќРµС‚ СЃСЂРѕРєР°";
  const taxLoadDueDateLabel = getNextTaxDueDateLabel();
  const kpiActionClass = isMobileKpiMode ? " kpi-card-actionable" : "";
  const incomeKpiActionAttrs = isMobileKpiMode
    ? 'data-action="open-dashboard-kpi-sheet" data-kpi-key="income_current" role="button" tabindex="0" aria-label="РћС‚РєСЂС‹С‚СЊ СЂР°СЃС€РёС„СЂРѕРІРєСѓ РґРѕС…РѕРґР° Р·Р° С‚РµРєСѓС‰РёР№ РјРµСЃСЏС†"'
    : "";
  const taxKpiActionAttrs = 'data-action="open-tax-load-modal" role="button" tabindex="0" aria-label="РћС‚РєСЂС‹С‚СЊ РїРѕР»РЅСѓСЋ СЂР°СЃС€РёС„СЂРѕРІРєСѓ РЅР°Р»РѕРіРѕРІРѕР№ РЅР°РіСЂСѓР·РєРё"';
  const incomeYtdKpiActionAttrs = isMobileKpiMode
    ? 'data-action="open-dashboard-kpi-sheet" data-kpi-key="income_ytd" role="button" tabindex="0" aria-label="РћС‚РєСЂС‹С‚СЊ СЂР°СЃС€РёС„СЂРѕРІРєСѓ РґРѕС…РѕРґР° СЃ РЅР°С‡Р°Р»Р° РіРѕРґР°"'
    : "";
  const deadlineKpiActionAttrs = isMobileKpiMode
    ? 'data-action="open-dashboard-kpi-sheet" data-kpi-key="next_deadline" role="button" tabindex="0" aria-label="РћС‚РєСЂС‹С‚СЊ СЂР°СЃС€РёС„СЂРѕРІРєСѓ Р±Р»РёР¶Р°Р№С€РµРіРѕ СЃСЂРѕРєР°"'
    : "";
  const mobileIncomeYtdKpiMarkup = isMobileKpiMode
    ? `
      <article class="card kpi-card kpi-card-compact-row kpi-card-ytd-row${kpiActionClass}" ${incomeYtdKpiActionAttrs}>
        <div class="kpi-row-main">
          <div class="kpi-row-copy">
            <div class="stat-title">${incomeYtdKpiTitle}</div>
            <div class="kpi-note">С‚РµРјРї: <span class="amount-sensitive">${incomeYtdAvgKpiValueText}</span> / РјРµСЃ</div>
          </div>
          <div class="stat-value amount-sensitive${incomeYtdKpiValueClass}">${incomeYtdKpiValueText}</div>
        </div>
        <div class="kpi-mobile-action-row">
          <button type="button" class="kpi-mobile-action-btn" data-action="open-dashboard-kpi-sheet" data-kpi-key="income_ytd" aria-label="РћС‚РєСЂС‹С‚СЊ СЂР°СЃС€РёС„СЂРѕРІРєСѓ РґРѕС…РѕРґР° СЃ РЅР°С‡Р°Р»Р° РіРѕРґР°">РџРѕРґСЂРѕР±РЅРµРµ &rarr;</button>
        </div>
      </article>
    `
    : `
      <article class="card kpi-card${kpiActionClass}" ${incomeYtdKpiActionAttrs}>
        <div class="stat-title">${incomeYtdKpiTitle}</div>
        <div class="stat-value amount-sensitive">${fmt(totalIncome)}</div>
        <div class="kpi-note">РЎСЂРµРґРЅРёР№ С‚РµРјРї: <span class="amount-sensitive">${fmt(avgMonthlyIncome)}</span> / РјРµСЃ</div>
        <div class="stat-sub">РџСЂРѕРіРЅРѕР· Р·Р° РіРѕРґ: <span class="amount-sensitive">${fmt(annualRunRate)}</span></div>
      </article>
    `;
  const mobileDeadlineKpiMarkup = isMobileKpiMode
    ? `
      <article class="card kpi-card deadline${deadlineCardClass} kpi-card-compact-row kpi-card-deadline-row${kpiActionClass}" data-tour-target="next-deadline" ${deadlineKpiActionAttrs}>
        <div class="kpi-row-main">
          <div class="kpi-row-copy">
            <div class="stat-title">Р‘Р»РёР¶Р°Р№С€РёР№ СЃСЂРѕРє</div>
            <div class="stat-sub deadline-mobile-title">${mobileDeadlineTitle}</div>
          </div>
          <div class="kpi-deadline-right">
            <div class="stat-value stat-compact">${mobileDeadlineDateLabel}</div>
          </div>
        </div>
        <div class="kpi-mobile-action-row">
          <button type="button" class="deadline-mobile-calendar-btn" data-action="open-dashboard-deadline-calendar" aria-label="РџРµСЂРµР№С‚Рё РІ РєР°Р»РµРЅРґР°СЂСЊ СЃСЂРѕРєРѕРІ">РџРµСЂРµР№С‚Рё РІ РєР°Р»РµРЅРґР°СЂСЊ&nbsp;&rarr;</button>
        </div>
      </article>
    `
    : `
      <article class="card kpi-card deadline${deadlineCardClass}${kpiActionClass}" data-tour-target="next-deadline" ${deadlineKpiActionAttrs}>
        <div class="stat-title">Р‘Р»РёР¶Р°Р№С€РёР№ СЃСЂРѕРє</div>
        <div class="stat-value stat-compact">${nextDeadline ? mobileDeadlineDateLabel : "РќРµС‚"}</div>
        <div class="${deadlineNoteClass}">${deadlineDueText}</div>
        <div class="stat-sub">${nextDeadline ? nextDeadline.title : "РІСЃРµ Р·Р°РґР°С‡Рё Р·Р°РєСЂС‹С‚С‹"}</div>
        ${deadlineIncomeHint}
        <button type="button" class="deadline-desktop-calendar-link" data-action="open-dashboard-deadline-calendar" aria-label="РџРµСЂРµР№С‚Рё РЅР° СЃС‚СЂР°РЅРёС†Сѓ РєР°Р»РµРЅРґР°СЂСЏ">РџРµСЂРµР№С‚Рё РІ РєР°Р»РµРЅРґР°СЂСЊ&nbsp;&rarr;</button>
      </article>
    `;
  const isSimplifiedRegime = state.regime === "simplified";
  const isOurRegime = state.regime === "our";
  const isSelfRegime = state.regime === "self";
  const taxRowsForKpiSheet = [
    { label: isSelfRegime ? "РћРџР’ (1%)" : "РћРџР’", value: Number(currentTax.opv || 0) },
    { label: isSelfRegime ? "РЎРћ (1%, РґРѕ 7 РњР—Рџ)" : "РЎРћ", value: Number(currentTax.so || 0) },
    { label: isSelfRegime ? "РћРџР’Р  (1%)" : "РћРџР’Р ", value: Number(currentTax.opvr || 0) },
    { label: isSelfRegime ? "Р’РћРЎРњРЎ (1%)" : "Р’РћРЎРњРЎ", value: Number(currentTax.vosms || 0) }
  ];

  if (isSimplifiedRegime || isOurRegime) {
    taxRowsForKpiSheet.push({
      label: "РЎРѕС†. РЅР°Р»РѕРі",
      value: Number(currentTax.socTax || 0)
    });
  }

  dashboardKpiSheetData = {
    currentIncome: Number(currentIncome || 0),
    incomeTrendClass: incomeTrend.className || "flat",
    incomeTrendText: incomeTrend.text || "Р‘РµР· РёР·РјРµРЅРµРЅРёР№",
    taxLoadTitle,
    taxLoadPayNow: Number(taxLoadPayNow || 0),
    taxLoadIpnReserve: Number(taxLoadIpnReserve || 0),
    taxLoadOpvSavings: Number(taxLoadOpvSavings || 0),
    taxDueDateLabel: taxLoadDueDateLabel,
    taxRows: taxRowsForKpiSheet,
    totalIncome: Number(totalIncome || 0),
    avgMonthlyIncome: Number(avgMonthlyIncome || 0),
    annualRunRate: Number(annualRunRate || 0),
    nextDeadlineDate: nextDeadline ? mobileDeadlineDateLabel : "РќРµС‚",
    nextDeadlineTitle: nextDeadline ? nextDeadline.title : "Р’СЃРµ Р·Р°РґР°С‡Рё Р·Р°РєСЂС‹С‚С‹",
    nextDeadlineDueText: deadlineDueText
  };

  const welcomeBannerHtml = showWelcomeBanner
    ? `
      <article class="card dashboard-welcome-banner">
        <div class="dashboard-welcome-main">
          <span class="dashboard-welcome-icon" aria-hidden="true">рџ‘‹</span>
          <div class="dashboard-welcome-copy">
            <h3>Р”РѕР±СЂРѕ РїРѕР¶Р°Р»РѕРІР°С‚СЊ!</h3>
            <p>Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІС‹Р№ РґРѕС…РѕРґ, С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ СЃРІРѕРё РЅР°Р»РѕРіРё Рё РїСЂРѕРіРЅРѕР·С‹.</p>
            <p class="dashboard-welcome-deadline">${welcomeDeadlineHint}</p>
          </div>
        </div>
        <div class="dashboard-welcome-actions">
          <button type="button" class="btn btn-primary dashboard-welcome-primary" data-page="income">+ Р”РѕР±Р°РІРёС‚СЊ РґРѕС…РѕРґ</button>
          <button type="button" class="btn btn-ghost dashboard-welcome-secondary" data-action="load-dashboard-demo">РџРѕСЃРјРѕС‚СЂРµС‚СЊ РґРµРјРѕ</button>
        </div>
      </article>
    `
    : "";
  const shouldSplitMobileKpiForWelcome = isMobileKpiMode && showWelcomeBanner;
  const welcomeBannerOutsideKpi = showWelcomeBanner && !shouldSplitMobileKpiForWelcome ? welcomeBannerHtml : "";

  const incomeKpiCardMarkup = `
      <article class="card kpi-card kpi-card-income-hero${kpiActionClass}" ${incomeKpiActionAttrs}>
        <div class="income-hero-head">
          <div class="stat-title">${incomeKpiTitle}</div>
          <span class="income-hero-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V9h1.5A2.5 2.5 0 0 1 23 11.5v5a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 16.5z"></path>
              <circle cx="18.5" cy="13.5" r="1"></circle>
            </svg>
          </span>
        </div>
        <div class="stat-value amount-sensitive${incomeKpiValueClass}">${incomeKpiValueText}</div>
        ${hasThreeMonthsHistory
          ? `<div class="income-hero-meta"><div class="kpi-trend ${incomeTrend.className}">${incomeTrend.text}</div></div>`
          : ""}
        ${!isMobileKpiMode
          ? '<button type="button" class="income-hero-cta" data-page="income" aria-label="РџРµСЂРµР№С‚Рё Рє РґРѕР±Р°РІР»РµРЅРёСЋ РґРѕС…РѕРґР°">+ Р”РѕР±Р°РІРёС‚СЊ РґРѕС…РѕРґ</button>'
          : ""}
      </article>
  `;

  const taxLoadKpiCardMarkup = `
      <article class="card kpi-card danger tax-load-kpi${kpiActionClass}" data-tour-target="tax-load" ${taxKpiActionAttrs}>
        <div class="stat-title">${taxLoadTitle}</div>
        <div class="stat-value stat-danger amount-sensitive${taxLoadKpiValueClass}">${taxLoadKpiValueText}</div>
        <div class="tax-load-monthly-note">Р•Р¶РµРјРµСЃСЏС‡РЅРѕ</div>
        <div class="stat-sub tax-load-hint">${infoHintIcon}РќР°Р¶РјРёС‚Рµ РґР»СЏ СЂР°СЃС€РёС„СЂРѕРІРєРё</div>
      </article>
  `;

  const kpiSectionHtml = shouldSplitMobileKpiForWelcome
    ? `
      <div class="grid grid-4 kpi-grid kpi-grid-mobile-primary">
        ${incomeKpiCardMarkup}
        ${taxLoadKpiCardMarkup}
      </div>
      <div class="kpi-grid-mobile-welcome">
        ${welcomeBannerHtml}
      </div>
      <div class="grid grid-4 kpi-grid kpi-grid-mobile-secondary">
        ${mobileIncomeYtdKpiMarkup}
        ${mobileDeadlineKpiMarkup}
      </div>
    `
    : `
      <div class="grid grid-4 kpi-grid">
        ${incomeKpiCardMarkup}
        ${taxLoadKpiCardMarkup}
        ${mobileIncomeYtdKpiMarkup}
        ${mobileDeadlineKpiMarkup}
      </div>
    `;

  const chartPlaceholderBars = Array.from({ length: 12 }, (_, index) => `
      <div class="chart-item chart-item-placeholder" aria-hidden="true">
        <div class="chart-bar chart-bar-placeholder" style="height:68px"></div>
        <span>${MONTHS[index]}</span>
      </div>
    `).join("");
  const chartSectionHtml = hasAnyMonthsHistory
    ? `<div class="chart-row">${bars}</div>`
    : `
      <div class="chart-row chart-row-placeholder" aria-label="РџР»РµР№СЃС…РѕР»РґРµСЂ РіСЂР°С„РёРєР°">
        ${chartPlaceholderBars}
      </div>
      <p class="chart-placeholder-note">Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІС‹Р№ РґРѕС…РѕРґ, С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ РіСЂР°С„РёРє</p>
    `;

  const taxSectionHtml = (() => {
    const payNowTitle = `РџР»Р°С‚РёС‚СЊ РІ ${MONTHS_PREPOSITIONAL[selectedMonthIndex] || "СЌС‚РѕРј РјРµСЃСЏС†Рµ"}`;
    const payNowDueDateLabel = getTaxDueDateLabelByMonth(selectedMonthIndex, now.getFullYear());
    const payNowTotal = Math.max(0, Math.round(getTaxLoadPayNow(state.regime, selectedTax)));
    const isSimplifiedRegime = state.regime === "simplified";
    const isOurRegime = state.regime === "our";
    const isSelfRegime = state.regime === "self";
    const noIncomeHint = selectedMonthHasIncome ? "" : '<p class="dashboard-tax-empty-note">Р’ СЌС‚РѕРј РјРµСЃСЏС†Рµ РґРѕС…РѕРґРѕРІ РЅРµ РґРѕР±Р°РІР»РµРЅРѕ</p>';
    const payNowRows = [
      { label: isSelfRegime ? "РћРџР’ (1%)" : "РћРџР’ (10%)", value: selectedTax.opv || 0 },
      { label: isSelfRegime ? "РЎРћ (1%, РґРѕ 7 РњР—Рџ)" : "РЎРћ (5%)", value: selectedTax.so || 0 },
      { label: isSelfRegime ? "РћРџР’Р  (1%)" : "РћРџР’Р  (3.5%)", value: selectedTax.opvr || 0 },
      { label: isSelfRegime ? "Р’РћРЎРњРЎ (1%)" : "Р’РћРЎРњРЎ", value: selectedTax.vosms || 0 }
    ];

    if (isSimplifiedRegime || isOurRegime) {
      payNowRows.push({
        label: "РЎРѕС†. РЅР°Р»РѕРі",
        value: selectedTax.socTax || 0,
        note: isSimplifiedRegime ? "РРџ РЅР° СѓРїСЂРѕС‰С‘РЅРєРµ РѕСЃРІРѕР±РѕР¶РґРµРЅС‹" : ""
      });
    }

    const payLaterLabel = isSimplifiedRegime
      ? `РРџРќ (${formatRatePercent(Number(selectedTax.ipnRate || 0) || getActiveSimplifiedIpnRate())} РѕС‚ РґРѕС…РѕРґР°)`
      : isOurRegime
        ? "РРџРќ (10% РїРѕСЃР»Рµ РІС‹С‡РµС‚РѕРІ)"
        : "РРџРќ (0%)";
    const payLaterValue = isSelfRegime ? 0 : Number(selectedTax.ipn || 0);
    const payLaterSuffix = isSelfRegime ? "" : "/РјРµСЃ";
    const payLaterNote = isSimplifiedRegime
      ? "РџР»Р°С‚РёС‚СЃСЏ СЂР°Р· РІ РїРѕР»РіРѕРґР° вЂ” РІ С„РµРІСЂР°Р»Рµ Рё Р°РІРіСѓСЃС‚Рµ. Р РµРєРѕРјРµРЅРґСѓРµРј РѕС‚РєР»Р°РґС‹РІР°С‚СЊ СЌС‚Сѓ СЃСѓРјРјСѓ РєР°Р¶РґС‹Р№ РјРµСЃСЏС† РЅР° РѕС‚РґРµР»СЊРЅС‹Р№ СЃС‡С‘С‚."
      : isOurRegime
        ? "РџР»Р°С‚РёС‚СЃСЏ РїРѕ РёС‚РѕРіР°Рј РіРѕРґР°. Р РµРєРѕРјРµРЅРґСѓРµРј РµР¶РµРјРµСЃСЏС‡РЅРѕ СЂРµР·РµСЂРІРёСЂРѕРІР°С‚СЊ СЃСѓРјРјСѓ РЅР° РѕС‚РґРµР»СЊРЅРѕРј СЃС‡С‘С‚Рµ."
        : "Р”Р»СЏ СЃР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ РРџРќ РЅРµ РїСЂРёРјРµРЅСЏРµС‚СЃСЏ.";

    return `
      <div class="dashboard-tax-split">
        <section class="dashboard-tax-block dashboard-tax-block-now">
          <h4 class="dashboard-tax-title">${payNowTitle}</h4>
          ${noIncomeHint}
          ${payNowRows
            .map((row) => `
              <div class="dashboard-tax-row">
                <span>${escapeHtml(row.label)}${row.note ? ` <small class="dashboard-tax-row-note">${escapeHtml(row.note)}</small>` : ""}</span>
                <strong class="amount-sensitive">${fmt(row.value)}</strong>
              </div>
            `)
            .join("")}
          <div class="dashboard-tax-total">
            <span>РС‚РѕРіРѕ Рє СѓРїР»Р°С‚Рµ:</span>
            <strong class="amount-sensitive">${fmt(payNowTotal)}</strong>
          </div>
          <p class="dashboard-tax-subnote">РЎСЂРѕРє вЂ” РґРѕ ${payNowDueDateLabel}</p>
        </section>

        <div class="dashboard-tax-divider"><span>РќРµ РїР»Р°С‚РёС‚СЃСЏ СЃРµР№С‡Р°СЃ</span></div>

        <section class="dashboard-tax-block dashboard-tax-block-later">
          <h4 class="dashboard-tax-title">РћС‚РєР»Р°РґС‹РІР°С‚СЊ РЅР° РРџРќ</h4>
          <div class="dashboard-tax-row">
            <span>${payLaterLabel}</span>
            <strong class="amount-sensitive">${fmt(payLaterValue)}${payLaterSuffix}</strong>
          </div>
          <p class="dashboard-tax-subnote">${payLaterNote}</p>
        </section>
      </div>
    `;
  })();
  const recentMonthRows = state.incomes
    .filter((row) => {
      const dateObj = new Date(row.date);
      return dateObj.getFullYear() === selectedMonthDate.getFullYear() && dateObj.getMonth() === selectedMonthDate.getMonth();
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentMonthOperationsCount = recentMonthRows.length;
  const recentMonthTotal = recentMonthRows.reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const recentMonthAverageCheck = recentMonthOperationsCount > 0 ? recentMonthTotal / recentMonthOperationsCount : 0;
  const recentMonthLargestOperation = recentMonthOperationsCount > 0
    ? recentMonthRows.reduce((max, row) => Math.max(max, Number(row.amount || 0)), 0)
    : 0;
  const topCategoryPalette = ["#6C5CE7", "#4A90E2", "#48BB78", "#ED8936"];
  const topCategories = (() => {
    if (recentMonthTotal <= 0) return [];
    const buckets = new Map();
    recentMonthRows.forEach((row) => {
      const name = String(row.category || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё").trim() || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё";
      const amount = Math.max(0, Number(row.amount || 0));
      buckets.set(name, (buckets.get(name) || 0) + amount);
    });

    return [...buckets.entries()]
      .map(([name, amount], index) => ({
        name,
        amount,
        percent: recentMonthTotal > 0 ? (amount / recentMonthTotal) * 100 : 0,
        color: topCategoryPalette[index % topCategoryPalette.length]
      }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 4)
      .map((row, index) => ({ ...row, color: topCategoryPalette[index % topCategoryPalette.length] }));
  })();

  const topCategoriesHtml = topCategories.length > 0
    ? topCategories
      .map((row) => {
        const percentLabel = row.percent >= 10 ? row.percent.toFixed(0) : row.percent.toFixed(1);
        const width = Math.max(8, Math.min(100, row.percent));
        return `
          <li class="dashboard-top-category-item">
            <div class="dashboard-top-category-head">
              <span>${escapeHtml(row.name)}</span>
              <strong>${percentLabel}%</strong>
            </div>
            <div class="dashboard-top-category-bar"><span style="width:${width}%;background:${row.color};"></span></div>
          </li>
        `;
      })
      .join("")
    : '<li class="dashboard-recent-empty-small">РќРµС‚ РґР°РЅРЅС‹С… РїРѕ РєР°С‚РµРіРѕСЂРёСЏРј Р·Р° РІС‹Р±СЂР°РЅРЅС‹Р№ РјРµСЃСЏС†.</li>';

  const recentMonthSwitcherHtml = `
    <div class="dashboard-month-switcher" aria-label="Р’С‹Р±РѕСЂ РјРµСЃСЏС†Р° РїРѕСЃС‚СѓРїР»РµРЅРёР№">
      <button type="button" class="dashboard-month-nav" data-action="dashboard-recent-month-prev" aria-label="РџСЂРµРґС‹РґСѓС‰РёР№ РјРµСЃСЏС†" ${selectedMonthIndex <= 0 ? "disabled" : ""}>&larr;</button>
      <span class="dashboard-month-switcher-label">${escapeHtml(selectedMonthLabel)}</span>
      <button type="button" class="dashboard-month-nav" data-action="dashboard-recent-month-next" aria-label="РЎР»РµРґСѓСЋС‰РёР№ РјРµСЃСЏС†" ${selectedMonthIsCurrent ? "disabled" : ""}>&rarr;</button>
    </div>
  `;
  const recentMobileCardsHtml = recentMonthRows
    .map((row) => {
      const categoryName = String(row.category || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё").trim() || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё";
      const categoryClass = getIncomeCategoryToneClass(categoryName);
      const comment = String(row.comment || "").trim();
      const commentHtml = comment ? `<span class="dashboard-recent-mobile-comment">${escapeHtml(comment)}</span>` : "";

      return `
        <article class="dashboard-recent-mobile-item">
          <div class="dashboard-recent-mobile-head">
            <strong class="dashboard-recent-mobile-amount amount-sensitive">${fmt(row.amount)}</strong>
            <span class="cat-pill ${categoryClass}">${escapeHtml(categoryName)}</span>
          </div>
          <div class="dashboard-recent-mobile-meta">
            <span class="dashboard-recent-mobile-date">${formatDate(row.date)}</span>
            ${commentHtml}
          </div>
        </article>
      `;
    })
    .join("");

  const recentSectionHtml = recentMonthOperationsCount > 0
    ? `
      <div class="dashboard-recent-layout">
        <div class="dashboard-recent-main">
          ${
            isMobileKpiMode
              ? `<div class="dashboard-recent-mobile-list">${recentMobileCardsHtml}</div>`
              : `<div class="table-wrap dashboard-recent-table-wrap">
                  <table class="table dashboard-table">
                    <thead><tr><th>Р”Р°С‚Р°</th><th>РљР°С‚РµРіРѕСЂРёСЏ</th><th>РЎСѓРјРјР°</th></tr></thead>
                    <tbody>
                      ${recentMonthRows
                        .map((row) => {
                          const categoryName = String(row.category || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё").trim() || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё";
                          const categoryClass = getIncomeCategoryToneClass(categoryName);
                          return `<tr><td>${formatDate(row.date)}</td><td><span class="cat-pill ${categoryClass}">${escapeHtml(categoryName)}</span></td><td><span class="amount-sensitive">${fmt(row.amount)}</span></td></tr>`;
                        })
                        .join("")}
                    </tbody>
                  </table>
                </div>`
          }
        </div>
        <aside class="dashboard-recent-side">
          <section class="dashboard-recent-side-card">
            <h4>РўРѕРї РєР°С‚РµРіРѕСЂРёР№</h4>
            <ul class="dashboard-top-categories">${topCategoriesHtml}</ul>
          </section>
          <section class="dashboard-recent-side-card">
            <h4>РЎС‚Р°С‚РёСЃС‚РёРєР° РјРµСЃСЏС†Р°</h4>
            <div class="dashboard-recent-stat-row"><span>РЎСЂРµРґРЅРёР№ С‡РµРє</span><strong class="amount-sensitive">${fmt(recentMonthAverageCheck)}</strong></div>
            <div class="dashboard-recent-stat-row"><span>РљСЂСѓРїРЅРµР№С€Р°СЏ РѕРїРµСЂР°С†РёСЏ</span><strong class="amount-sensitive">${fmt(recentMonthLargestOperation)}</strong></div>
            <div class="dashboard-recent-stat-row"><span>РљРѕР»РёС‡РµСЃС‚РІРѕ РѕРїРµСЂР°С†РёР№</span><strong>${recentMonthOperationsCount}</strong></div>
          </section>
          <button type="button" class="btn btn-primary dashboard-recent-all-btn" data-page="income">Р’СЃРµ РѕРїРµСЂР°С†РёРё &rarr;</button>
        </aside>
      </div>
    `
    : `
      <div class="dashboard-recent-layout">
        <div class="dashboard-recent-main">
          <div class="dashboard-empty-state compact dashboard-recent-empty-month">
            <div class="dashboard-recent-empty-icon" aria-hidden="true">рџ“­</div>
            <p>РќРµС‚ РїРѕСЃС‚СѓРїР»РµРЅРёР№ Р·Р° СЌС‚РѕС‚ РјРµСЃСЏС†</p>
          </div>
        </div>
        <aside class="dashboard-recent-side">
          <section class="dashboard-recent-side-card">
            <h4>РўРѕРї РєР°С‚РµРіРѕСЂРёР№</h4>
            <p class="dashboard-recent-empty-small">РќРµС‚ РґР°РЅРЅС‹С… РїРѕ РєР°С‚РµРіРѕСЂРёСЏРј Р·Р° РІС‹Р±СЂР°РЅРЅС‹Р№ РјРµСЃСЏС†.</p>
          </section>
          <section class="dashboard-recent-side-card">
            <h4>РЎС‚Р°С‚РёСЃС‚РёРєР° РјРµСЃСЏС†Р°</h4>
            <div class="dashboard-recent-stat-row"><span>РЎСЂРµРґРЅРёР№ С‡РµРє</span><strong class="amount-sensitive">${fmt(0)}</strong></div>
            <div class="dashboard-recent-stat-row"><span>РљСЂСѓРїРЅРµР№С€Р°СЏ РѕРїРµСЂР°С†РёСЏ</span><strong class="amount-sensitive">${fmt(0)}</strong></div>
            <div class="dashboard-recent-stat-row"><span>РљРѕР»РёС‡РµСЃС‚РІРѕ РѕРїРµСЂР°С†РёР№</span><strong>0</strong></div>
          </section>
          <button type="button" class="btn btn-primary dashboard-recent-all-btn" data-page="income">Р’СЃРµ РѕРїРµСЂР°С†РёРё &rarr;</button>
        </aside>
      </div>
    `;

  els.pageContent.innerHTML = `
    ${kpiSectionHtml}

    ${welcomeBannerOutsideKpi}

    <div class="grid grid-2 mt-16 dashboard-main-grid">
      <div class="dashboard-left-column">
        <article class="card chart-panel chart-panel-stretch" data-tour-target="income-chart">
          <h3>Р”РѕС…РѕРґС‹ РїРѕ РјРµСЃСЏС†Р°Рј</h3>
          <div class="chart-flex-area">
            ${chartSectionHtml}
          </div>
        </article>
        <article class="card progress-card progress-card-compact">
          <div class="progress-card-head">
            <h3>РџСЂРѕРіСЂРµСЃСЃ РґРѕ Р»РёРјРёС‚Р° СЂРµР¶РёРјР°</h3>
            <span class="limit-risk ${riskMeta.className}">${riskMeta.label}</span>
          </div>
          ${
            limit
              ? `
              <p class="text-muted progress-meta"><span class="amount-sensitive">${fmt(totalIncome)}</span> РёР· <span class="amount-sensitive">${fmt(limit)}</span> (${safeLimitPct}%)</p>
              <div class="progress"><span style="width:${limitPct}%;"></span></div>
              ${
                hasAdvancedAnalytics
                  ? `<div class="progress-eta">
                      <span>РћСЃС‚Р°Р»РѕСЃСЊ: <b class="amount-sensitive">${fmt(remainingToLimit)}</b></span>
                      <span>${progressEtaText}</span>
                    </div>`
                  : `<div class="feature-lock-inline">
                      <p>РџСЂРѕРіРЅРѕР· РїРѕ С‚РµРјРїСѓ Рё СЂРёСЃРєСѓ РґРѕСЃС‚СѓРїРµРЅ РІ Pro.</p>
                      <button type="button" class="btn btn-ghost btn-xs" data-action="open-pro">РћС‚РєСЂС‹С‚СЊ С‚Р°СЂРёС„С‹</button>
                    </div>`
              }
            `
              : "<p class=\"text-muted\">Р”Р»СЏ РћРЈР  Р»РёРјРёС‚ РЅРµ РїСЂРёРјРµРЅСЏРµС‚СЃСЏ.</p>"
          }
          <p class="text-muted mt-10">Р РµР¶РёРј: ${regimeLabel(state.regime)}</p>
        </article>
      </div>
      <article class="card taxes-panel">
        <h3>Р Р°Р·Р±РёРІРєР° РЅР°Р»РѕРіРѕРІ Р·Р° ${selectedMonthLabelAccusative}</h3>
        ${selectedMonthContextNote}
        <div class="dashboard-month-tabs">${monthTabsHtml}</div>
        ${taxSectionHtml}
      </article>
    </div>
    <article class="card income-table-panel mt-16">
      <div class="dashboard-recent-head">
        <h3>РџРѕСЃР»РµРґРЅРёРµ РїРѕСЃС‚СѓРїР»РµРЅРёСЏ</h3>
        ${recentMonthSwitcherHtml}
      </div>
      ${recentSectionHtml}
    </article>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "16",
        height: "16"
      }
    });
  }

  syncOnboardingTour();
}

function renderOnboardingPage() {
  const onboarding = normalizeOnboarding(state.onboarding);
  const step = onboarding.step;
  const income = onboarding.income;
  const regime = onboarding.regime;
  const taxes = calcByRegime(regime, income, 0);
  const availability = getRegimeAvailability(regime, income);
  const effectiveRate = income > 0 ? (taxes.total / income) * 100 : 0;

  const profileName = String((state.profile && state.profile.name) || "").trim();
  const profileCity = String((state.profile && state.profile.city) || "").trim();
  const profileActivity = String((state.profile && state.profile.activity) || "").trim();

  state.onboarding = onboarding;

  const cityOptions = KAZAKHSTAN_CITIES.map((city) => {
    const selected = profileCity === city ? " selected" : "";
    const safeCity = escapeHtml(city);
    return `<option value="${safeCity}"${selected}>${safeCity}</option>`;
  }).join("");
  const onboardingActivityValue = String(profileActivity || "").trim();
  const onboardingActivityOptions = [
    `<option value="" ${onboardingActivityValue ? "" : "selected"}>РќРµ РІС‹Р±СЂР°РЅРѕ</option>`,
    ...BUSINESS_ACTIVITY_OPTIONS.map((option) => {
      const safeOption = escapeHtml(option);
      const selected = onboardingActivityValue === option ? " selected" : "";
      return `<option value="${safeOption}"${selected}>${safeOption}</option>`;
    })
  ];
  if (onboardingActivityValue && !BUSINESS_ACTIVITY_OPTIONS.includes(onboardingActivityValue)) {
    onboardingActivityOptions.unshift(
      `<option value="${escapeHtml(onboardingActivityValue)}" selected>${escapeHtml(onboardingActivityValue)}</option>`
    );
  }

  const onboardingRegimes = [
    {
      id: "self",
      title: "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№",
      icon: "user-check",
      note: "Р¤РёРєСЃРёСЂРѕРІР°РЅРЅС‹Р№ РµР¶РµРјРµСЃСЏС‡РЅС‹Р№ РїР»Р°С‚РµР¶ (Р•РЎРџ).",
      limit: `${fmt(SELF_LIMIT_ANNUAL)}/РіРѕРґ`
    },
    {
      id: "simplified",
      title: "РЈРїСЂРѕС‰РµРЅРєР° (910)",
      icon: "percent",
      note: "Р”Р»СЏ Р±РѕР»СЊС€РёРЅСЃС‚РІР° РРџ РЅР° СЃС‚Р°СЂС‚Рµ.",
      limit: `${fmt(SIMPLIFIED_LIMIT_ANNUAL)}/РіРѕРґ`
    },
    {
      id: "our",
      title: "РћРЈР ",
      icon: "building-2",
      note: "РџРѕРґС…РѕРґРёС‚, РµСЃР»Рё РІР°Р¶РЅС‹ РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅС‹Рµ СЂР°СЃС…РѕРґС‹.",
      limit: "Р±РµР· Р»РёРјРёС‚Р°"
    }
  ];

  const renderOnboardingRegimeIcon = (iconName) =>
    `<i class="onboarding-regime-icon" data-lucide="${iconName}" width="24" height="24" aria-hidden="true"></i>`;

  const regimeCards = onboardingRegimes
    .map((item) => {
      const activeClass = item.id === regime ? " active" : "";
      return `
        <button type="button" class="onboarding-regime-card${activeClass}" data-onboarding-regime="${item.id}">
          <strong>${renderOnboardingRegimeIcon(item.icon)}${item.title}</strong>
          <span class="onboarding-regime-note">${item.note}</span>
          <span class="onboarding-regime-limit">Р›РёРјРёС‚ РґРѕС…РѕРґР°: ${item.limit}</span>
        </button>
      `;
    })
    .join("");

  let stepBody = "";

  if (step === 1) {
    stepBody = `
      <div class="onboarding-step-body">
        <h3>РЁР°Рі 1. Р’С‹Р±РµСЂРёС‚Рµ СЂРµР¶РёРј</h3>
        <p>Р­С‚Рѕ РјРѕР¶РЅРѕ РёР·РјРµРЅРёС‚СЊ РїРѕР·Р¶Рµ РІ РѕРґРёРЅ РєР»РёРє.</p>
        <div class="onboarding-regime-grid">${regimeCards}</div>
        <p class="onboarding-regime-hint">РќРµ Р·РЅР°РµС‚Рµ РєР°РєРѕР№ РІС‹Р±СЂР°С‚СЊ? РњС‹ РїРѕРґСЃРєР°Р¶РµРј РїРѕСЃР»Рµ РІРІРѕРґР° РґРѕС…РѕРґР°.</p>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-primary" data-action="onboarding-next">Р”Р°Р»СЊС€Рµ</button>
      </div>
    `;
  } else if (step === 2) {
    stepBody = `
      <div class="onboarding-step-body">
        <h3>РЁР°Рі 2. Р Р°СЃСЃРєР°Р¶РёС‚Рµ Рѕ СЃРµР±Рµ</h3>
        <p>Р­С‚Рё РґР°РЅРЅС‹Рµ РЅСѓР¶РЅС‹ РґР»СЏ РїРµСЂСЃРѕРЅР°Р»РёР·Р°С†РёРё РєР°Р±РёРЅРµС‚Р°. РџРѕР·Р¶Рµ РёС… РјРѕР¶РЅРѕ РёР·РјРµРЅРёС‚СЊ РІ РЅР°СЃС‚СЂРѕР№РєР°С….</p>
        <div class="onboarding-profile-grid">
          <label class="onboarding-field onboarding-field-full" for="onboardingProfileName">
            <span>РќР°Р·РІР°РЅРёРµ РРџ РёР»Рё РІР°С€Рµ РёРјСЏ *</span>
            <input id="onboardingProfileName" type="text" value="${escapeHtml(profileName)}" placeholder="РќР°РїСЂРёРјРµСЂ, РРџ РђС…РјРµС‚РѕРІ" required />
          </label>
          <label class="onboarding-field" for="onboardingProfileCity">
            <span>Р“РѕСЂРѕРґ (РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅРѕ)</span>
            <select id="onboardingProfileCity">
              <option value="">РќРµ РІС‹Р±СЂР°РЅРѕ</option>
              ${cityOptions}
            </select>
          </label>
          <label class="onboarding-field" for="onboardingProfileActivity">
            <span>Р’РёРґ РґРµСЏС‚РµР»СЊРЅРѕСЃС‚Рё (РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅРѕ)</span>
            <select id="onboardingProfileActivity">
              ${onboardingActivityOptions.join("")}
            </select>
          </label>
        </div>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" data-action="onboarding-back">РќР°Р·Р°Рґ</button>
        <button type="button" class="btn btn-primary" data-action="onboarding-next" ${profileName ? "" : "disabled"}>Р”Р°Р»СЊС€Рµ</button>
      </div>
    `;
  } else if (step === 3) {
    stepBody = `
      <div class="onboarding-step-body">
        <h3>РЁР°Рі 3. Р’РІРµРґРёС‚Рµ РїСЂРёРјРµСЂРЅС‹Р№ РґРѕС…РѕРґ</h3>
        <p>Р‘РµСЂРёС‚Рµ РѕСЂРёРµРЅС‚РёСЂ Р·Р° РјРµСЃСЏС†. РўРѕС‡РЅСѓСЋ СЃСѓРјРјСѓ РґРѕР±Р°РІРёС‚Рµ РїРѕР·Р¶Рµ РІ Р¶СѓСЂРЅР°Р»Рµ.</p>
        <label class="onboarding-input-label" for="onboardingIncomeInput">Р”РѕС…РѕРґ РІ РјРµСЃСЏС† (в‚ё)</label>
        <div class="onboarding-income-control">
          <button type="button" class="step-btn" data-onboarding-income-step="-50000">-</button>
          <input id="onboardingIncomeInput" type="number" min="0" step="1" value="${income}" />
          <button type="button" class="step-btn" data-onboarding-income-step="50000">+</button>
        </div>
        <div class="onboarding-income-presets">
          <button type="button" data-onboarding-income-preset="200000">200 С‚С‹СЃ в‚ё</button>
          <button type="button" data-onboarding-income-preset="400000">400 С‚С‹СЃ в‚ё</button>
          <button type="button" data-onboarding-income-preset="700000">700 С‚С‹СЃ в‚ё</button>
          <button type="button" data-onboarding-income-preset="1000000">1 РјР»РЅ в‚ё</button>
        </div>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" data-action="onboarding-back">РќР°Р·Р°Рґ</button>
        <button type="button" class="btn btn-primary" data-action="onboarding-next" ${income > 0 ? "" : "disabled"}>РџРѕРєР°Р·Р°С‚СЊ РЅР°Р»РѕРіРё</button>
      </div>
    `;
  } else {
    const availabilityHint = availability.available ? "" : `<p class="onboarding-warning">${escapeHtml(availability.reason)}</p>`;
    const regimeComparisonRows = onboardingRegimes.map((item) => {
      const rowTaxes = calcByRegime(item.id, income, 0);
      const rowAvailability = getRegimeAvailability(item.id, income);
      return {
        ...item,
        taxes: rowTaxes,
        available: rowAvailability.available,
        reason: rowAvailability.reason
      };
    });
    const bestRegime = regimeComparisonRows
      .filter((row) => row.available)
      .sort((a, b) => a.taxes.total - b.taxes.total)[0];
    const bestRegimeId = bestRegime ? bestRegime.id : "";
    const regimeComparisonCards = regimeComparisonRows
      .map((item) => {
        const activeClass = item.id === regime ? " active" : "";
        const unavailableClass = item.available ? "" : " unavailable";
        const badge = item.id === bestRegimeId ? '<span class="onboarding-regime-badge onboarding-regime-badge-best">Р’С‹РіРѕРґРЅРµРµ</span>' : "";
        const meta = item.available
          ? '<span class="onboarding-regime-limit">Рљ СѓРїР»Р°С‚Рµ РІ РјРµСЃСЏС†</span>'
          : `<span class="onboarding-regime-note onboarding-regime-note-muted">${escapeHtml(item.reason || "Р РµР¶РёРј РЅРµРґРѕСЃС‚СѓРїРµРЅ РїСЂРё С‚РµРєСѓС‰РµРј РґРѕС…РѕРґРµ")}</span>`;
        return `
          <article class="onboarding-regime-card onboarding-regime-card-readonly${activeClass}${unavailableClass}">
            ${badge}
            <strong>${renderOnboardingRegimeIcon(item.icon)}${item.title}</strong>
            <span class="onboarding-regime-tax">${fmt(item.taxes.total)}</span>
            ${meta}
          </article>
        `;
      })
      .join("");
    const monthlyLines = regime === "self"
      ? [
          { label: "РћРџР’ (1%)", value: taxes.opv },
          { label: "РЎРћ (1%, РґРѕ 7 РњР—Рџ)", value: taxes.so },
          { label: "РћРџР’Р  (1%)", value: taxes.opvr },
          { label: "Р’РћРЎРњРЎ (1%)", value: taxes.vosms }
        ]
      : regime === "simplified"
        ? [
            { label: "РћРџР’ (10%)", value: taxes.opv },
            { label: "РЎРћ (5%)", value: taxes.so },
            { label: "РћРџР’Р  (3.5% РѕС‚ РґРѕС…РѕРґР°, РґРѕ 50 РњР—Рџ)", value: taxes.opvr },
            { label: "Р’РћРЎРњРЎ", value: taxes.vosms }
          ]
        : [
            { label: "РћРџР’ (10%)", value: taxes.opv },
            { label: "РЎРћ (5%)", value: taxes.so },
            { label: "РћРџР’Р  (3.5% РѕС‚ РґРѕС…РѕРґР°, РґРѕ 50 РњР—Рџ)", value: taxes.opvr },
            { label: "Р’РћРЎРњРЎ", value: taxes.vosms },
            { label: "РЎРќ", value: taxes.socTax }
          ];
    const periodicTitle = regime === "our" ? "РџР»Р°С‚РёС‚СЊ РїРѕ РёС‚РѕРіР°Рј РіРѕРґР°" : "РџР»Р°С‚РёС‚СЊ СЂР°Р· РІ РїРѕР»РіРѕРґР°";
    const periodicLines = regime === "self"
      ? []
      : regime === "simplified"
        ? [{ label: `РРџРќ (${formatRatePercent(Number(taxes.ipnRate || 0) || getActiveSimplifiedIpnRate())})`, value: taxes.ipn }]
        : [{ label: "РРџРќ (10%)", value: taxes.ipn }];
    const socialTaxHint = regime === "simplified" ? '<p class="onboarding-tax-note-muted">РЎРѕС†. РЅР°Р»РѕРі: РѕСЃРІРѕР±РѕР¶РґРµРЅС‹</p>' : "";

    stepBody = `
      <div class="onboarding-step-body">
        <h3>РЁР°Рі 4. Р’РѕС‚ РІР°С€Рё РЅР°Р»РѕРіРё</h3>
        <p>РћС†РµРЅРєР° РґР»СЏ СЂРµР¶РёРјР° <b>${regimeLabel(regime)}</b> РїСЂРё РґРѕС…РѕРґРµ <b>${fmt(income)}</b>.</p>
        <div class="onboarding-regime-grid onboarding-regime-grid-review">${regimeComparisonCards}</div>
        <article class="onboarding-tax-card">
          <small>Рљ СѓРїР»Р°С‚Рµ РІ РјРµСЃСЏС†</small>
          <strong>${fmt(taxes.total)}</strong>
          <span class="onboarding-tax-subtitle">РўРѕС‡РЅР°СЏ СЃСѓРјРјР° Р·Р°РІРёСЃРёС‚ РѕС‚ С„Р°РєС‚РёС‡РµСЃРєРёС… РґР°РЅРЅС‹С…</span>
          <span>Р­С„С„РµРєС‚РёРІРЅР°СЏ СЃС‚Р°РІРєР°: ${formatPct(effectiveRate)}</span>
          ${availabilityHint}
        </article>
        <div class="onboarding-tax-breakdown">
          <div class="onboarding-tax-groups">
            <section class="onboarding-tax-group">
              <h4>РџР»Р°С‚РёС‚СЊ РµР¶РµРјРµСЃСЏС‡РЅРѕ</h4>
              ${monthlyLines.map((line) => `<div class="tax-row"><span class="text-muted">${line.label}</span><strong class="amount-sensitive">${fmt(line.value)}</strong></div>`).join("")}
            </section>
            ${
              periodicLines.length
                ? `<section class="onboarding-tax-group">
                     <h4>${periodicTitle}</h4>
                     ${periodicLines.map((line) => `<div class="tax-row"><span class="text-muted">${line.label}</span><strong class="amount-sensitive">${fmt(line.value)}</strong></div>`).join("")}
                   </section>`
                : ""
            }
          </div>
          ${socialTaxHint}
        </div>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" data-action="onboarding-back">РќР°Р·Р°Рґ</button>
        <button type="button" class="btn btn-primary" data-action="onboarding-complete-income">РЎРѕС…СЂР°РЅРёС‚СЊ Рё РїРµСЂРµР№С‚Рё РІ РєР°Р±РёРЅРµС‚</button>
        <button type="button" class="btn btn-ghost" data-action="onboarding-complete">РћС‚РєСЂС‹С‚СЊ Р±РµР· СЃРѕС…СЂР°РЅРµРЅРёСЏ</button>
      </div>
    `;
  }

  const stepPills = [
    { index: 1, label: "Р РµР¶РёРј" },
    { index: 2, label: "РџСЂРѕС„РёР»СЊ" },
    { index: 3, label: "Р”РѕС…РѕРґ" },
    { index: 4, label: "РќР°Р»РѕРіРё" }
  ]
    .map((item) => {
      const isDone = item.index < step;
      const isActive = item.index === step;
      const className = isDone ? " done" : isActive ? " active" : " upcoming";
      const label = isDone
        ? `<span class="onboarding-step-check" aria-hidden="true">&#10003;</span>${item.label}`
        : `${item.index}. ${item.label}`;
      return `<span class="onboarding-step-pill${className}">${label}</span>`;
    })
    .join("");

  els.pageContent.innerHTML = `
    <section class="onboarding-shell">
      <article class="card onboarding-card onboarding-step-${step}">
        <p class="onboarding-kicker">РџРµСЂРІС‹Р№ Р·Р°РїСѓСЃРє</p>
        <h2>РЈР·РЅР°Р№С‚Рµ СЃРєРѕР»СЊРєРѕ РїР»Р°С‚РёС‚СЊ РЅР°Р»РѕРіРѕРІ вЂ” Р·Р° 1 РјРёРЅСѓС‚Сѓ</h2>
        <p class="onboarding-lead">Р’С‹Р±РµСЂРёС‚Рµ СЂРµР¶РёРј, Р·Р°РїРѕР»РЅРёС‚Рµ РїСЂРѕС„РёР»СЊ, СѓРєР°Р¶РёС‚Рµ РїСЂРёРјРµСЂРЅС‹Р№ РґРѕС…РѕРґ Рё СЃСЂР°Р·Сѓ СѓРІРёРґРёС‚Рµ РѕСЂРёРµРЅС‚РёСЂ РїРѕ РЅР°Р»РѕРіР°Рј.</p>
        <div class="onboarding-progress" aria-label="РџСЂРѕРіСЂРµСЃСЃ РѕРЅР±РѕСЂРґРёРЅРіР°">${stepPills}</div>
        ${stepBody}
      </article>
    </section>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function getTopIncomeCategory(rows) {
  const sums = new Map();

  rows.forEach((row) => {
    const key = String(row.category || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё").trim() || "Р‘РµР· РєР°С‚РµРіРѕСЂРёРё";
    sums.set(key, (sums.get(key) || 0) + Number(row.amount || 0));
  });

  const top = [...sums.entries()].sort((a, b) => b[1] - a[1])[0];
  if (!top) return { name: "-", amount: 0 };

  return { name: top[0], amount: top[1] };
}

function getIncomePeriodStart(period) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (period === "30d") {
    start.setDate(start.getDate() - 30);
    return start;
  }

  if (period === "90d") {
    start.setDate(start.getDate() - 90);
    return start;
  }

  if (period === "ytd") {
    return new Date(now.getFullYear(), 0, 1);
  }

  return null;
}

function getFilteredIncomes(rows, filters) {
  const query = String(filters.query || "").trim().toLowerCase();
  const category = String(filters.category || "all");

  return rows.filter((row) => {
    const byCategory = category === "all" ? true : row.category === category;

    if (!query) {
      return byCategory;
    }

    const haystack = `${row.date} ${row.category} ${row.comment || ""} ${row.amount}`.toLowerCase();
    return byCategory && haystack.includes(query);
  });
}

function getSortedIncomes(rows, sort) {
  const normalized = normalizeIncomeFilterSort(sort);
  const sorted = [...rows];

  if (normalized === "amount_desc") {
    sorted.sort((a, b) => b.amount - a.amount);
    return sorted;
  }

  if (normalized === "amount_asc") {
    sorted.sort((a, b) => a.amount - b.amount);
    return sorted;
  }

  if (normalized === "date_asc") {
    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    return sorted;
  }

  sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  return sorted;
}

function getIncomeCategoryToneClass(category) {
  const normalized = String(category || "").trim().toLowerCase();

  if (normalized.includes("Р°СЂРµРЅРґ")) return "cat-pill-rent";
  if (normalized.includes("РїСЂРѕРґР°Р¶") || normalized.includes("С‚РѕРІР°СЂ")) return "cat-pill-sales";
  if (normalized.includes("РєРѕРјРёСЃСЃ")) return "cat-pill-commission";
  if (normalized.includes("СѓСЃР»СѓРі")) return "cat-pill-services";
  if (normalized.includes("РїСЂРѕС‡") || normalized.includes("РґСЂСѓРі")) return "cat-pill-other";

  return "cat-pill-other";
}

function renderIncomePage() {
  const filters = {
    ...getDefaultIncomeFilters(),
    ...(state.incomeFilters || {})
  };
  const defaultIncomeFilters = getDefaultIncomeFilters();
  const hasActiveIncomeFilters = Boolean(String(filters.query || "").trim())
    || filters.category !== defaultIncomeFilters.category
    || filters.sort !== defaultIncomeFilters.sort;

  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const savedMonthStart = parseDashboardMonthKey(state.incomeSelectedMonth);
  const selectedMonthStart = savedMonthStart && savedMonthStart.getTime() <= currentMonthStart.getTime() ? savedMonthStart : currentMonthStart;
  const selectedMonthKey = formatDashboardMonthKey(selectedMonthStart);
  const selectedMonthLabel = formatMonthYearLabel(selectedMonthStart);
  const canGoIncomeNextMonth = selectedMonthStart.getTime() < currentMonthStart.getTime();

  if (state.incomeSelectedMonth !== selectedMonthKey) {
    state.incomeSelectedMonth = selectedMonthKey;
    saveState();
  }

  const existingCategories = [...new Set(state.incomes.map((row) => String(row.category || "").trim()).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
  const categoryCatalog = [...new Set([...INCOME_CATEGORY_PRESETS, ...existingCategories])].sort((a, b) => a.localeCompare(b, "ru"));

  const selectedMonthRows = state.incomes.filter((row) => {
    const rowDate = new Date(row.date);
    if (Number.isNaN(rowDate.getTime())) return false;
    return rowDate.getFullYear() === selectedMonthStart.getFullYear() && rowDate.getMonth() === selectedMonthStart.getMonth();
  });
  const filteredRows = getSortedIncomes(getFilteredIncomes(selectedMonthRows, filters), filters.sort);
  const editingIncome = state.incomeEditId ? state.incomes.find((row) => row.id === state.incomeEditId) : null;
  const hasIncomeEntries = state.incomes.length > 0;
  const monthHasEntries = selectedMonthRows.length > 0;

  if (state.incomeEditId && !editingIncome) {
    state.incomeEditId = null;
    saveState();
  }

  const totalIncome = getTotalIncome();
  const opsCount = state.incomes.length;
  const avgCheck = opsCount > 0 ? totalIncome / opsCount : 0;
  const last30Start = getIncomePeriodStart("30d");
  const last30Income = state.incomes
    .filter((row) => (last30Start ? new Date(row.date) >= last30Start : true))
    .reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const topCategory = getTopIncomeCategory(state.incomes);
  const monthTotal = selectedMonthRows.reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const monthOpsCount = selectedMonthRows.length;
  const filteredTotal = filteredRows.reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const maxVisibleAmount = filteredRows.length > 0 ? Math.max(...filteredRows.map((row) => Number(row.amount || 0))) : 0;

  const totalOps = getIncomeOpsCountTotal();
  const canExport = canUseFeature("exports");
  const remainingTrialOps = Math.max(0, FREE_INCOME_MONTH_LIMIT - totalOps);
  const showTrialBanner = !isProActive() && !incomeTrialBannerDismissed && remainingTrialOps <= 2;
  const previousMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const previousMonthIncome = getIncomeByMonth(previousMonthDate.getFullYear(), previousMonthDate.getMonth(), state.incomes);
  const currentMonthIncome = getCurrentMonthIncome(state.incomes);
  const MONTHS_DATIVE = ["СЏРЅРІР°СЂСЋ", "С„РµРІСЂР°Р»СЋ", "РјР°СЂС‚Сѓ", "Р°РїСЂРµР»СЋ", "РјР°СЋ", "РёСЋРЅСЋ", "РёСЋР»СЋ", "Р°РІРіСѓСЃС‚Сѓ", "СЃРµРЅС‚СЏР±СЂСЋ", "РѕРєС‚СЏР±СЂСЋ", "РЅРѕСЏР±СЂСЋ", "РґРµРєР°Р±СЂСЋ"];
  const previousMonthLabelDative = MONTHS_DATIVE[previousMonthDate.getMonth()] || "РїСЂРѕС€Р»РѕРјСѓ РјРµСЃСЏС†Сѓ";
  let dynamicsClass = "neutral";
  let dynamicsText = `вЂ” Р±РµР· РёР·РјРµРЅРµРЅРёР№ Рє ${previousMonthLabelDative}`;
  if (previousMonthIncome > 0) {
    const diffPct = ((currentMonthIncome - previousMonthIncome) / previousMonthIncome) * 100;
    const roundedPct = Math.round(Math.abs(diffPct));
    if (diffPct > 0.01) {
      dynamicsClass = "up";
      dynamicsText = `в†‘ +${roundedPct}% Рє ${previousMonthLabelDative}`;
    } else if (diffPct < -0.01) {
      dynamicsClass = "down";
      dynamicsText = `в†“ -${roundedPct}% Рє ${previousMonthLabelDative}`;
    }
  } else if (currentMonthIncome > 0) {
    dynamicsClass = "up";
    dynamicsText = `в†‘ РЅРѕРІС‹Р№ РґРѕС…РѕРґ Рє ${previousMonthLabelDative}`;
  }

  const formatIncomeMobileAmount = (value) => {
    const numeric = Number(value || 0);
    const abs = Math.abs(numeric);

    if (abs >= 1000000000) {
      const bln = abs / 1000000000;
      const digits = bln >= 100 ? 0 : 1;
      const blnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(bln);
      return `${numeric < 0 ? "-" : ""}${blnText} РјР»СЂРґ в‚ё`;
    }

    if (abs >= 1000000) {
      const mln = abs / 1000000;
      const digits = mln >= 100 ? 0 : 1;
      const mlnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(mln);
      return `${numeric < 0 ? "-" : ""}${mlnText} РјР»РЅ в‚ё`;
    }

    return fmt(numeric);
  };

  const categoryOptions = existingCategories
    .map((category) => `<option value="${escapeHtml(category)}" ${filters.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");

  const editingCategory = editingIncome ? String(editingIncome.category || "").trim() : "";
  const editingComment = editingIncome ? String(editingIncome.comment || "") : "";
  const isCommentVisibleByDefault = editingComment.trim().length > 0;
  const selectedCategoryValue = editingCategory && categoryCatalog.includes(editingCategory) ? editingCategory : "";
  const categoryFormOptions = categoryCatalog
    .map((category) => `<option value="${escapeHtml(category)}" ${selectedCategoryValue === category ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");
  const defaultIncomeDate = editingIncome ? editingIncome.date : new Date().toISOString().slice(0, 10);
  const hasFilteredRows = filteredRows.length > 0;
  const monthEmptyTableMarkup = `
    <tr>
      <td colspan="5" class="empty-row empty-row-month">
        <span>РќРµС‚ РґРѕС…РѕРґРѕРІ Р·Р° ${escapeHtml(selectedMonthLabel.toLowerCase())}</span>
        <button type="button" class="btn btn-primary btn-xs" data-action="focus-first-income">Р”РѕР±Р°РІРёС‚СЊ РґРѕС…РѕРґ</button>
      </td>
    </tr>
  `;
  const incomeTableRowsMarkup = hasFilteredRows
    ?
        filteredRows
          .map((row) => {
            const amount = Number(row.amount || 0);
            const rowClass = amount === maxVisibleAmount ? "income-row-max" : "";
            const categoryToneClass = getIncomeCategoryToneClass(row.category);

            return `
              <tr class="${rowClass}">
                <td>${formatDate(row.date)}</td>
                <td><span class="cat-pill ${categoryToneClass}">${escapeHtml(row.category)}</span></td>
                <td>${escapeHtml(row.comment || "-")}</td>
                <td class="amount-cell"><span class="amount-sensitive">${fmt(row.amount)}</span></td>
                <td class="income-row-actions">
                  <button type="button" class="icon-action-btn icon-edit" data-edit-income="${row.id}" aria-label="РР·РјРµРЅРёС‚СЊ Р·Р°РїРёСЃСЊ" title="РР·РјРµРЅРёС‚СЊ">
                    <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="icon-action-btn icon-delete" data-delete-income="${row.id}" aria-label="РЈРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ" title="РЈРґР°Р»РёС‚СЊ">
                    <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            `;
          })
          .join("") +
        `
          <tr class="income-table-total-row">
            <td colspan="5">РС‚РѕРіРѕ: <span class="amount-sensitive">${fmt(filteredTotal)}</span> (${filteredRows.length} РѕРїРµСЂР°С†РёР№)</td>
          </tr>
        `
    : monthHasEntries
      ? '<tr><td colspan="5" class="empty-row">РќРµС‚ РѕРїРµСЂР°С†РёР№ РїРѕ РІС‹Р±СЂР°РЅРЅС‹Рј С„РёР»СЊС‚СЂР°Рј.</td></tr>'
      : monthEmptyTableMarkup;

  const incomeCardsMarkup = hasFilteredRows
    ? filteredRows
        .map((row) => {
          const amount = Number(row.amount || 0);
          const rowClass = amount === maxVisibleAmount ? "income-mobile-row-max" : "";
          const categoryToneClass = getIncomeCategoryToneClass(row.category);
          const comment = String(row.comment || "").trim();
          const amountText = fmt(row.amount);
          const compactLength = amountText.replace(/\s+/g, "").length;
          const useCompactAmount = compactLength >= 13;
          const amountDisplayText = useCompactAmount ? formatIncomeMobileAmount(row.amount) : amountText;
          const amountSizeClass = useCompactAmount
            ? "income-mobile-row-amount-s"
            : compactLength >= 11
              ? "income-mobile-row-amount-m"
              : "";

          return `
            <article class="income-mobile-row ${rowClass}">
              <div class="income-mobile-row-main">
                <div class="income-mobile-row-top">
                  <span class="cat-pill ${categoryToneClass}">${escapeHtml(row.category)}</span>
                  <span class="income-mobile-row-date">${formatDate(row.date)}</span>
                </div>
                ${comment ? `<div class="income-mobile-row-comment">${escapeHtml(comment)}</div>` : ""}
              </div>
              <div class="income-mobile-row-bottom">
                <strong class="income-mobile-row-amount amount-sensitive ${amountSizeClass}" title="${escapeHtml(amountText)}">${amountDisplayText}</strong>
                <div class="income-mobile-row-actions">
                  <button type="button" class="icon-action-btn icon-edit" data-edit-income="${row.id}" aria-label="РР·РјРµРЅРёС‚СЊ Р·Р°РїРёСЃСЊ" title="РР·РјРµРЅРёС‚СЊ">
                    <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="icon-action-btn icon-delete" data-delete-income="${row.id}" aria-label="РЈРґР°Р»РёС‚СЊ Р·Р°РїРёСЃСЊ" title="РЈРґР°Р»РёС‚СЊ">
                    <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </article>
          `;
        })
        .join("")
    : monthHasEntries
      ? '<div class="income-cards-empty">РќРµС‚ РѕРїРµСЂР°С†РёР№ РїРѕ РІС‹Р±СЂР°РЅРЅС‹Рј С„РёР»СЊС‚СЂР°Рј.</div>'
      : `
        <div class="income-cards-empty income-cards-empty-month">
          <p>РќРµС‚ РґРѕС…РѕРґРѕРІ Р·Р° ${escapeHtml(selectedMonthLabel.toLowerCase())}</p>
          <button type="button" class="btn btn-primary btn-xs" data-action="focus-first-income">Р”РѕР±Р°РІРёС‚СЊ РґРѕС…РѕРґ</button>
        </div>
      `;

  const incomeMobileTotalMarkup = hasFilteredRows
    ? `
      <div class="income-mobile-total">
        <strong>РС‚РѕРіРѕ: <span class="amount-sensitive">${fmt(filteredTotal)}</span> (${filteredRows.length} РѕРїРµСЂР°С†РёР№)</strong>
      </div>
    `
    : "";

  els.pageContent.innerHTML = `
    ${
      hasIncomeEntries
        ? ""
        : `
      <article class="card income-empty-state">
        <div class="income-empty-body">
          <h3>Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІС‹Р№ РґРѕС…РѕРґ</h3>
          <p>РџРѕСЃР»Рµ РїРµСЂРІРѕР№ РѕРїРµСЂР°С†РёРё РїРѕСЏРІСЏС‚СЃСЏ Р¶СѓСЂРЅР°Р», С„РёР»СЊС‚СЂС‹ Рё Р°РЅР°Р»РёС‚РёРєР° РїРѕ РЅР°Р»РѕРіР°Рј.</p>
          <button type="button" class="btn btn-primary" data-action="focus-first-income">Р”РѕР±Р°РІРёС‚СЊ РїРµСЂРІС‹Р№ РґРѕС…РѕРґ</button>
          <p class="income-empty-hint">РџРѕРґСЃРєР°Р·РєР°: РЅР°С‡РЅРёС‚Рµ СЃ РїСЂРёРјРµСЂРЅРѕР№ СЃСѓРјРјС‹ Р·Р° СЌС‚РѕС‚ РјРµСЃСЏС†, РїРѕС‚РѕРј СЃРєРѕСЂСЂРµРєС‚РёСЂСѓР№С‚Рµ РїРѕ С„Р°РєС‚Сѓ.</p>
        </div>
      </article>
    `
    }

    ${
      showTrialBanner
        ? `
      <article class="card income-trial-notice" role="status" aria-live="polite">
        <div class="income-trial-main">
          <p class="income-trial-text">РЈ РІР°СЃ РѕСЃС‚Р°Р»РѕСЃСЊ <strong>${remainingTrialOps}</strong> ${remainingTrialOps === 1 ? "РѕРїРµСЂР°С†РёСЏ" : remainingTrialOps >= 2 && remainingTrialOps <= 4 ? "РѕРїРµСЂР°С†РёРё" : "РѕРїРµСЂР°С†РёР№"} РІ Trial.</p>
          <button type="button" class="income-trial-link" data-action="open-pro">РџРѕРїСЂРѕР±РѕРІР°С‚СЊ Pro 30 РґРЅРµР№ в†’</button>
        </div>
        <button type="button" class="income-trial-close" data-action="dismiss-income-trial-banner" aria-label="Р—Р°РєСЂС‹С‚СЊ СѓРІРµРґРѕРјР»РµРЅРёРµ">Г—</button>
      </article>
    `
        : ""
    }

    <div class="grid grid-2 income-layout">
      <article class="card income-form-card" data-tour-target="income-form">
        <div class="income-card-head">
          <h3>${editingIncome ? "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РѕРїРµСЂР°С†РёСЋ" : hasIncomeEntries ? "Р”РѕР±Р°РІРёС‚СЊ РґРѕС…РѕРґ" : "РџРµСЂРІС‹Р№ РґРѕС…РѕРґ"}</h3>
          ${editingIncome ? '<span class="income-edit-chip">СЂРµР¶РёРј СЂРµРґР°РєС‚РёСЂРѕРІР°РЅРёСЏ</span>' : ""}
        </div>
        <form id="incomeForm" class="stack-form income-form">
          <input type="hidden" name="editId" value="${editingIncome ? editingIncome.id : ""}" />
          <div class="form-grid-2">
            <label>Р”Р°С‚Р°<input name="date" type="date" value="${defaultIncomeDate}" required /></label>
            <label>РЎСѓРјРјР° (в‚ё)
              <input id="incomeAmountInput" name="amount" type="number" min="0" step="1" value="${editingIncome ? Math.round(editingIncome.amount) : ""}" required />
              <div class="amount-presets" aria-label="Р‘С‹СЃС‚СЂС‹Р№ РІС‹Р±РѕСЂ СЃСѓРјРјС‹">
                <button type="button" data-income-preset="50000">50 С‚С‹СЃ в‚ё</button>
                <button type="button" data-income-preset="100000">100 С‚С‹СЃ в‚ё</button>
                <button type="button" data-income-preset="250000">250 С‚С‹СЃ в‚ё</button>
                <button type="button" data-income-preset="500000">500 С‚С‹СЃ в‚ё</button>
              </div>
            </label>
          </div>

          <label>РљР°С‚РµРіРѕСЂРёСЏ
            <select id="incomeCategorySelect" name="categorySelect" required>
              <option value="" ${selectedCategoryValue ? "" : "selected"} disabled>Р’С‹Р±РµСЂРёС‚Рµ РєР°С‚РµРіРѕСЂРёСЋ</option>
              ${categoryFormOptions}
              <option value="${INCOME_CATEGORY_CUSTOM_VALUE}">Р”СЂСѓРіРѕРµ (РІРІРµСЃС‚Рё РІСЂСѓС‡РЅСѓСЋ)</option>
            </select>
          </label>
          <label id="incomeCategoryCustomWrap" class="hidden">РЎРІРѕСЏ РєР°С‚РµРіРѕСЂРёСЏ
            <input id="incomeCategoryCustomInput" name="categoryCustom" type="text" value="" placeholder="РќР°РїСЂРёРјРµСЂ: РџР°СЂС‚РЅРµСЂСЃРєР°СЏ РІС‹РїР»Р°С‚Р°" />
          </label>

          ${
            isCommentVisibleByDefault
              ? ""
              : '<button type="button" class="income-comment-toggle" data-action="toggle-income-comment">+ Р”РѕР±Р°РІРёС‚СЊ РєРѕРјРјРµРЅС‚Р°СЂРёР№</button>'
          }
          <label id="incomeCommentWrap" class="income-comment-wrap ${isCommentVisibleByDefault ? "is-visible" : ""}">РљРѕРјРјРµРЅС‚Р°СЂРёР№
            <input id="incomeCommentInput" name="comment" type="text" value="${escapeHtml(editingComment)}" placeholder="РћРїС†РёРѕРЅР°Р»СЊРЅРѕ" />
          </label>

          <div class="income-form-actions">
            <button class="btn btn-primary income-save-btn" type="submit" data-tour-target="income-save">${editingIncome ? "РЎРѕС…СЂР°РЅРёС‚СЊ РёР·РјРµРЅРµРЅРёСЏ" : "РЎРѕС…СЂР°РЅРёС‚СЊ РѕРїРµСЂР°С†РёСЋ"}</button>
            ${editingIncome ? '<button type="button" class="btn btn-ghost" data-cancel-income-edit>РћС‚РјРµРЅРёС‚СЊ</button>' : ""}
          </div>
        </form>
      </article>

      <article class="card income-summary-card" data-tour-target="income-summary">
        <h3>РС‚РѕРіРѕ РїРѕ РґРѕС…РѕРґР°Рј</h3>
        <div class="stat-value amount-sensitive">${fmt(totalIncome)}</div>
        <p class="text-muted">РћРїРµСЂР°С†РёР№ РІ Р±Р°Р·Рµ: ${opsCount}</p>
        <p class="text-muted">РўРµРєСѓС‰РёР№ СЂРµР¶РёРј: ${regimeLabel(state.regime)}</p>

        <div class="income-metrics-combined">
          <div class="income-metrics-main">
            <div class="income-metric-main">
              <small>РЎСЂРµРґРЅРёР№ С‡РµРє</small>
              <strong class="amount-sensitive">${fmt(avgCheck)}</strong>
            </div>
            <div class="income-metric-main">
              <small>РўРѕРї-РєР°С‚РµРіРѕСЂРёСЏ</small>
              <strong>${escapeHtml(topCategory.name)}</strong>
              <span class="amount-sensitive">${fmt(topCategory.amount)}</span>
            </div>
          </div>
          <div class="income-metrics-secondary">
            <div class="income-metric-inline">
              <small>Р—Р° 30 РґРЅРµР№</small>
              <strong class="amount-sensitive">${fmt(last30Income)}</strong>
            </div>
            <div class="income-metric-inline income-dynamics ${dynamicsClass}">
              <small>Р”РёРЅР°РјРёРєР°</small>
              <strong>${escapeHtml(dynamicsText)}</strong>
            </div>
          </div>
        </div>
      </article>
    </div>

    ${
      hasIncomeEntries
        ? `
    <article class="card mt-16 income-journal-card">
      <div class="income-journal-head">
        <div>
          <h3>Р–СѓСЂРЅР°Р» РґРѕС…РѕРґРѕРІ</h3>
          <span>РџРѕРєР°Р·Р°РЅРѕ ${filteredRows.length} РёР· ${monthOpsCount} В· <span class="amount-sensitive">${fmt(filteredTotal)}</span></span>
        </div>
        <div class="income-journal-actions">
          <button class="btn btn-ghost" type="button" data-action="export-income-csv">Р­РєСЃРїРѕСЂС‚ CSV</button>
          ${canExport ? "" : '<span class="lock-hint">Pro</span>'}
        </div>
      </div>

      <div class="income-month-toolbar">
        <div class="income-month-switcher" aria-label="Р’С‹Р±РѕСЂ РјРµСЃСЏС†Р° Р¶СѓСЂРЅР°Р»Р° РґРѕС…РѕРґРѕРІ">
          <button type="button" class="btn btn-ghost btn-xs income-month-nav" data-action="income-month-prev" aria-label="РџСЂРµРґС‹РґСѓС‰РёР№ РјРµСЃСЏС†">в†ђ</button>
          <strong class="income-month-label">${escapeHtml(selectedMonthLabel)}</strong>
          <button type="button" class="btn btn-ghost btn-xs income-month-nav" data-action="income-month-next" aria-label="РЎР»РµРґСѓСЋС‰РёР№ РјРµСЃСЏС†" ${canGoIncomeNextMonth ? "" : "disabled"}>в†’</button>
        </div>
        <div class="income-month-total">${monthOpsCount} РѕРїРµСЂР°С†РёР№ В· <span class="amount-sensitive">${fmt(monthTotal)}</span></div>
      </div>

      <form id="incomeFilterForm" class="income-filters">
        <label class="income-filter-field income-filter-search">
          <span class="income-filter-label">РџРѕРёСЃРє</span>
          <div class="income-filter-input-wrap">
            <input name="query" type="text" value="${escapeHtml(filters.query)}" placeholder="РџРѕРёСЃРє РїРѕ РєРѕРјРјРµРЅС‚Р°СЂРёСЋ, РєР°С‚РµРіРѕСЂРёРё, СЃСѓРјРјРµ" />
          </div>
        </label>
        <label class="income-filter-field">
          <span class="income-filter-label">РљР°С‚РµРіРѕСЂРёСЏ</span>
          <div class="income-filter-select-wrap">
            <select name="category">
              <option value="all" ${filters.category === "all" ? "selected" : ""}>Р’СЃРµ РєР°С‚РµРіРѕСЂРёРё</option>
              ${categoryOptions}
            </select>
          </div>
        </label>
        <label class="income-filter-field">
          <span class="income-filter-label">РЎРѕСЂС‚РёСЂРѕРІРєР°</span>
          <div class="income-filter-select-wrap">
            <select name="sort">
              <option value="date_desc" ${filters.sort === "date_desc" ? "selected" : ""}>РЎРЅР°С‡Р°Р»Р° РЅРѕРІС‹Рµ</option>
              <option value="date_asc" ${filters.sort === "date_asc" ? "selected" : ""}>РЎРЅР°С‡Р°Р»Р° СЃС‚Р°СЂС‹Рµ</option>
              <option value="amount_desc" ${filters.sort === "amount_desc" ? "selected" : ""}>РЎСѓРјРјР° РїРѕ СѓР±С‹РІР°РЅРёСЋ</option>
              <option value="amount_asc" ${filters.sort === "amount_asc" ? "selected" : ""}>РЎСѓРјРјР° РїРѕ РІРѕР·СЂР°СЃС‚Р°РЅРёСЋ</option>
            </select>
          </div>
        </label>
        ${
          hasActiveIncomeFilters
            ? '<div class="income-filter-actions"><button class="income-filter-reset-link" type="button" data-reset-income-filters>РЎР±СЂРѕСЃРёС‚СЊ</button></div>'
            : ""
        }
      </form>

      <div class="table-wrap income-table-wrap income-table-desktop">
        <table class="table income-table">
          <thead><tr><th>Р”Р°С‚Р°</th><th>РљР°С‚РµРіРѕСЂРёСЏ</th><th>РљРѕРјРјРµРЅС‚Р°СЂРёР№</th><th>РЎСѓРјРјР°</th><th></th></tr></thead>
          <tbody>${incomeTableRowsMarkup}</tbody>
        </table>
      </div>

      <div class="income-mobile-list" aria-label="Р–СѓСЂРЅР°Р» РґРѕС…РѕРґРѕРІ (РјРѕР±РёР»СЊРЅР°СЏ РІРµСЂСЃРёСЏ)">
        ${incomeCardsMarkup}
      </div>
      ${incomeMobileTotalMarkup}
    </article>
    `
        : ""
    }
  `;

  const incomeCategorySelect = document.getElementById("incomeCategorySelect");
  const incomeCategoryCustomWrap = document.getElementById("incomeCategoryCustomWrap");
  const incomeCategoryCustomInput = document.getElementById("incomeCategoryCustomInput");

  if (incomeCategorySelect && incomeCategoryCustomWrap && incomeCategoryCustomInput) {
    const syncCategoryMode = (shouldFocus = false) => {
      const isCustom = incomeCategorySelect.value === INCOME_CATEGORY_CUSTOM_VALUE;
      incomeCategoryCustomWrap.classList.toggle("hidden", !isCustom);
      incomeCategoryCustomInput.required = isCustom;

      if (!isCustom) {
        incomeCategoryCustomInput.value = "";
        return;
      }

      if (shouldFocus) {
        incomeCategoryCustomInput.focus();
      }
    };

    incomeCategorySelect.addEventListener("change", () => syncCategoryMode(true));
    syncCategoryMode(false);
  }

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  syncOnboardingTour();
}

function getAverageIncomeLastThreeMonths(incomes = state.incomes) {
  const now = new Date();
  let total = 0;

  for (let offset = 1; offset <= 3; offset += 1) {
    const monthDate = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    total += getIncomeByMonth(monthDate.getFullYear(), monthDate.getMonth(), incomes);
  }

  return normalizeIncome(total / 3);
}

function getTaxPlannerInitialIncome(incomes = state.incomes) {
  const currentMonthIncome = normalizeIncome(getCurrentMonthIncome(incomes));
  if (currentMonthIncome > 0) {
    return currentMonthIncome;
  }

  const avgLastThreeMonths = getAverageIncomeLastThreeMonths(incomes);
  if (avgLastThreeMonths > 0) {
    return avgLastThreeMonths;
  }

  return 0;
}

function getTaxPlannerFallbackIncome() {
  return getTaxPlannerInitialIncome(state.incomes);
}

function syncTaxPlannerIncomeFromJournalOnOpen() {
  const initialIncome = getTaxPlannerInitialIncome(state.incomes);
  const fallbackExpenses = normalizeIncome(state.calcExpenses);
  const currentPlanner = normalizeTaxPlanner(state.taxPlanner, initialIncome, fallbackExpenses, 15);

  const nextPlanner = normalizeTaxPlanner(
    {
      ...currentPlanner,
      income: initialIncome
    },
    initialIncome,
    currentPlanner.expenses,
    currentPlanner.reservePct
  );

  const changed = currentPlanner.income !== nextPlanner.income || currentPlanner.expenses !== nextPlanner.expenses || currentPlanner.reservePct !== nextPlanner.reservePct;
  state.taxPlanner = nextPlanner;
  return changed;
}

function getTaxPlannerState() {
  const fallbackIncome = getTaxPlannerFallbackIncome();
  const fallbackExpenses = normalizeIncome(state.calcExpenses);
  const planner = normalizeTaxPlanner(state.taxPlanner, fallbackIncome, fallbackExpenses, 15);

  return {
    income: planner.income,
    expenses: state.regime === "our" ? planner.expenses : 0,
    reservePct: planner.reservePct,
    ourExpensesDraft: planner.expenses
  };
}

function renderTaxesPage() {
  const monthlyData = getMonthlyData();
  const planner = getTaxPlannerState();
  const getForecastMonthLabel = (index) => {
    const raw = String(MONTHS_ACCUSATIVE[index] || MONTHS[index] || "").trim();
    if (!raw) return "";
    return `${raw.charAt(0).toUpperCase()}${raw.slice(1)}`;
  };
  const isMobileTaxesView = isMobileViewport();
  const formatMobileTaxKpiAmount = (value) => {
    const numeric = Number(value || 0);
    const abs = Math.abs(numeric);

    if (abs >= 1000000000) {
      const bln = abs / 1000000000;
      const digits = bln >= 100 ? 0 : 1;
      const blnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(bln);
      return `${numeric < 0 ? "-" : ""}${blnText} РјР»СЂРґ в‚ё`;
    }

    if (abs >= 1000000) {
      const mln = abs / 1000000;
      const digits = mln >= 100 ? 0 : 1;
      const mlnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(mln);
      return `${numeric < 0 ? "-" : ""}${mlnText} РјР»РЅ в‚ё`;
    }

    return fmt(numeric);
  };
  const getMobileTaxKpiSizeClass = (valueText) => {
    const compactLength = String(valueText || "").replace(/\s+/g, "").length;
    if (compactLength >= 12) return " tax-kpi-value-mobile-s";
    if (compactLength >= 9) return " tax-kpi-value-mobile-m";
    return "";
  };

  const scenarioTax = calcByRegime(state.regime, planner.income, planner.expenses);
  const effectiveRate = planner.income > 0 ? (scenarioTax.total / planner.income) * 100 : 0;
  const reserveAmount = scenarioTax.total * (1 + planner.reservePct / 100);
  const realJournalIncome = monthlyData.reduce((sum, row) => sum + Number(row.income || 0), 0);
  const hasRealJournalIncome = realJournalIncome > 0;

  const now = new Date();
  const monthsPassed = now.getMonth() + 1;
  const expenseRatio = planner.income > 0 ? Math.min(planner.ourExpensesDraft / planner.income, 0.95) : 0;

  const ytdRowsWithEntries = monthlyData.slice(0, monthsPassed).filter((row) => (row.entries || 0) > 0);
  const hasRealYtdData = ytdRowsWithEntries.length > 0;

  const ytdTaxTotal = hasRealYtdData
    ? ytdRowsWithEntries.reduce((sum, row) => {
        const rowExpenses = state.regime === "our" ? normalizeIncome(row.income * expenseRatio) : 0;
        return sum + calcByRegime(state.regime, row.income, rowExpenses).total;
      }, 0)
    : 0;

  const avgRealMonthlyIncome = hasRealYtdData
    ? ytdRowsWithEntries.reduce((sum, row) => sum + row.income, 0) / ytdRowsWithEntries.length
    : 0;
  const avgRealMonthlyExpenses = state.regime === "our" ? normalizeIncome(avgRealMonthlyIncome * expenseRatio) : 0;
  const annualForecast = hasRealYtdData ? calcByRegime(state.regime, avgRealMonthlyIncome, avgRealMonthlyExpenses).total * 12 : 0;
  const scenarioTaxDisplay = isMobileTaxesView ? formatMobileTaxKpiAmount(scenarioTax.total) : fmt(scenarioTax.total);
  const reserveMainValue = hasRealJournalIncome
    ? (isMobileTaxesView ? formatMobileTaxKpiAmount(reserveAmount) : fmt(reserveAmount))
    : "РЅРµС‚ РґР°РЅРЅС‹С…";
  const ytdTaxDisplay = isMobileTaxesView ? formatMobileTaxKpiAmount(ytdTaxTotal) : fmt(ytdTaxTotal);
  const annualForecastDisplay = isMobileTaxesView ? formatMobileTaxKpiAmount(annualForecast) : fmt(annualForecast);
  const scenarioTaxSizeClass = isMobileTaxesView ? getMobileTaxKpiSizeClass(scenarioTaxDisplay) : "";
  const reserveMainSizeClass = hasRealJournalIncome && isMobileTaxesView ? getMobileTaxKpiSizeClass(reserveMainValue) : "";
  const ytdTaxSizeClass = isMobileTaxesView ? getMobileTaxKpiSizeClass(ytdTaxDisplay) : "";

  const getTaxShareColor = (label) => {
    const key = String(label || "").toUpperCase();
    if (key.includes("РћРџР’Р ")) return "#74B9FF";
    if (key.includes("РћРџР’")) return "#6C5CE7";
    if (key.includes("Р’РћРЎРњРЎ")) return "#55EFC4";
    if (key.includes("РРџРќ")) return "#FF7675";
    if (key.includes("РЎРћР¦") || key === "РЎРќ" || key.includes("РЎРќ")) return "#636E72";
    if (key.startsWith("РЎРћ")) return "#FDCB6E";
    return "#6C5CE7";
  };

  const breakdownRows = getTaxLines(scenarioTax, state.regime).map((line) => {
    const share = scenarioTax.total > 0 ? (line.value / scenarioTax.total) * 100 : 0;
    const width = line.value > 0 ? Math.max(share, 5) : 0;
    const color = getTaxShareColor(line.label);

    return `
      <div class="tax-share-row">
        <div class="tax-share-head">
          <span>${line.label}</span>
          <strong class="amount-sensitive">${fmt(line.value)}</strong>
        </div>
        <div class="tax-share-track"><span style="width:${Math.min(width, 100)}%; background:${color};"></span></div>
      </div>
    `;
  });

  const compareRows = ["self", "simplified", "our"].map((regimeId) => {
    const expenses = regimeId === "our" ? planner.ourExpensesDraft : 0;
    const tax = calcByRegime(regimeId, planner.income, expenses);
    const availability = getRegimeAvailability(regimeId, planner.income, { disallowSelfForIp: isIpAccountProfile() });

    return {
      regimeId,
      name: regimeLabel(regimeId),
      tax,
      availability
    };
  });

  const allCompareZero = compareRows.every((row) => Math.round(Number(row.tax.total || 0)) === 0);
  const compareNeedsIncome = planner.income <= 0;
  const suppressBestBadge = compareNeedsIncome || allCompareZero;
  const bestAvailable = suppressBestBadge
    ? null
    : ([...compareRows]
        .filter((row) => row.availability.available)
        .sort((a, b) => a.tax.total - b.tax.total)[0] || compareRows[0]);

  const compareCards = compareRows
    .map((row) => {
      const isBest = !!bestAvailable && row.regimeId === bestAvailable.regimeId;
      const isCurrent = row.regimeId === state.regime;
      const delta = bestAvailable ? row.tax.total - bestAvailable.tax.total : 0;
      const cardClass = `${isBest ? " best" : ""}${isCurrent ? " current" : ""}${row.availability.available ? "" : " unavailable"}`;

      let deltaText = suppressBestBadge ? "РІРІРµРґРёС‚Рµ РґРѕС…РѕРґ РґР»СЏ СЃСЂР°РІРЅРµРЅРёСЏ" : isBest ? "РњРёРЅРёРјР°Р»СЊРЅР°СЏ РЅР°РіСЂСѓР·РєР° РІ СЃС†РµРЅР°СЂРёРё" : `+${fmt(Math.max(delta, 0))} Рє Р»СѓС‡С€РµРјСѓ`;
      if (!row.availability.available) {
        deltaText = row.availability.reason || "РќРµРґРѕСЃС‚СѓРїРЅРѕ РїРѕ Р»РёРјРёС‚Сѓ";
      }

      const badges = [];
      if (isBest && row.availability.available && !suppressBestBadge) {
        badges.push('<span class="tax-compare-badge best">Р’Р«Р“РћР”РќР•Р•</span>');
      }
      if (isCurrent) {
        badges.push('<span class="tax-compare-badge current">Р’РђРЁ Р Р•Р–РРњ</span>');
      }
      const badgesHtml = badges.length ? `<div class="tax-compare-badges">${badges.join("")}</div>` : "";

      return `
        <article class="tax-compare-card${cardClass}">
          ${badgesHtml}
          <div class="tax-compare-title">${row.name}</div>
          <div class="tax-compare-value amount-sensitive">${fmt(row.tax.total)}</div>
          <div class="tax-compare-context">РїСЂРё РґРѕС…РѕРґРµ <span class="amount-sensitive">${fmt(planner.income)}</span>/РјРµСЃ</div>
          <div class="tax-compare-note">${deltaText}</div>
        </article>
      `;
    })
    .join("");

  const forecastItems = monthlyData.map((row, index) => {
    const rowExpenses = state.regime === "our" ? normalizeIncome(row.income * expenseRatio) : 0;
    const rowTax = calcByRegime(state.regime, row.income, rowExpenses);
    const rate = row.income > 0 ? `${((rowTax.total / row.income) * 100).toFixed(1)}%` : "-";
    const isCurrent = index === now.getMonth();
    const isZeroIncome = Number(row.income || 0) <= 0;
    const taxNoteText = isZeroIncome
      ? state.regime === "simplified"
        ? `РјРёРЅ. СЃРѕС†РїР»Р°С‚РµР¶Рё: ${fmt(IP_MIN_SOCIAL_PAYMENTS_TOTAL)}`
        : "РјРёРЅ. СЃРѕС†РїР»Р°С‚РµР¶Рё"
      : "";

    return {
      monthShort: row.name,
      monthLong: getForecastMonthLabel(index),
      income: Number(row.income || 0),
      taxTotal: Number(rowTax.total || 0),
      rate,
      isCurrent,
      taxNoteText
    };
  });

  const forecastRows = forecastItems
    .map((item) => {
      const currentClass = item.isCurrent ? ' class="current"' : "";
      const taxNote = item.taxNoteText ? `<small class="tax-forecast-tax-note">${escapeHtml(item.taxNoteText)}</small>` : "";
      return `<tr${currentClass}><td>${item.monthShort}</td><td><span class="amount-sensitive">${fmt(item.income)}</span></td><td><span class="amount-sensitive">${fmt(item.taxTotal)}</span>${taxNote}</td><td>${item.rate}</td></tr>`;
    })
    .join("");

  const forecastMobileCards = forecastItems
    .map((item) => {
      const currentClass = item.isCurrent ? " current" : "";
      const taxNote = item.taxNoteText ? `<small class="tax-forecast-tax-note">${escapeHtml(item.taxNoteText)}</small>` : "";
      return `
        <article class="tax-forecast-mobile-card${currentClass}">
          <div class="tax-forecast-mobile-head">
            <strong>${item.monthLong}</strong>
            <span class="tax-forecast-mobile-rate">${item.rate}</span>
          </div>
          <div class="tax-forecast-mobile-row">
            <span>Р”РѕС…РѕРґ</span>
            <strong class="amount-sensitive">${fmt(item.income)}</strong>
          </div>
          <div class="tax-forecast-mobile-row">
            <span>РќР°Р»РѕРіРё</span>
            <strong class="amount-sensitive">${fmt(item.taxTotal)}</strong>
          </div>
          ${taxNote}
        </article>
      `;
    })
    .join("");

  const nextDeadlines = getUpcomingDeadlines().slice(0, 3);
  const deadlinesPanelTourTarget = nextDeadlines.length ? "taxes-deadlines" : "taxes-deadline-focus";
  const deadlinesHtml = nextDeadlines.length
    ? nextDeadlines
        .map(
          (row, index) => `
            <div class="tax-deadline-item"${index === 0 ? ' data-tour-target="taxes-deadline-focus"' : ""}>
              <div>
                <strong>${formatDateShort(row.date)}</strong>
                <span>${escapeHtml(row.title)}</span>
              </div>
              <em>${getLandingDeadlineDueInfo(row.date).text}</em>
            </div>
          `
        )
        .join("")
    : '<p class="text-muted">Р‘Р»РёР¶Р°Р№С€РёС… РѕР±СЏР·Р°С‚РµР»СЊРЅС‹С… СЃСЂРѕРєРѕРІ РїРѕ С‚РµРєСѓС‰РµРјСѓ СЂРµР¶РёРјСѓ РЅРµС‚.</p>';
  const isMobileTaxesPlanner = isMobileTaxesView;
  const isOurPlannerRegime = state.regime === "our";
  const incomePresetsHtml = `
    <div class="tax-presets">
      <span>Р‘С‹СЃС‚СЂС‹Р№ РґРѕС…РѕРґ:</span>
      <button type="button" data-tax-income-preset="200000">200 С‚С‹СЃ в‚ё</button>
      <button type="button" data-tax-income-preset="500000">500 С‚С‹СЃ в‚ё</button>
      <button type="button" data-tax-income-preset="1000000">1 РјР»РЅ в‚ё</button>
      <button type="button" data-tax-income-preset="2000000">2 РјР»РЅ в‚ё</button>
    </div>
  `;
  const expensePresetsHtml = `
    <div class="tax-presets${isOurPlannerRegime ? "" : " disabled"}">
      <span>Р Р°СЃС…РѕРґС‹ РґР»СЏ РћРЈР :</span>
      <button type="button" data-tax-expense-ratio="0.2" ${isOurPlannerRegime ? "" : "disabled"}>20%</button>
      <button type="button" data-tax-expense-ratio="0.4" ${isOurPlannerRegime ? "" : "disabled"}>40%</button>
      <button type="button" data-tax-expense-ratio="0.6" ${isOurPlannerRegime ? "" : "disabled"}>60%</button>
    </div>
  `;
  const reservePresetsHtml = `
    <div class="tax-presets">
      <span>Р—Р°РїР°СЃ СЂРµР·РµСЂРІР°:</span>
      <button type="button" data-tax-reserve-preset="10">10%</button>
      <button type="button" data-tax-reserve-preset="15">15%</button>
      <button type="button" data-tax-reserve-preset="20">20%</button>
    </div>
  `;
  const plannerBodyHtml = isMobileTaxesPlanner
    ? `
      <form id="taxPlannerForm" class="tax-planner-form tax-planner-form-mobile">
        <div class="tax-form-grid tax-form-grid-mobile-main">
          <label>Р”РѕС…РѕРґ РІ РјРµСЃСЏС† (в‚ё)
            <input name="income" type="number" min="0" step="1" value="${planner.income}" required />
          </label>
        </div>
        ${incomePresetsHtml}
        <button type="button" class="btn btn-ghost btn-xs tax-mobile-reset-btn" data-tax-reset>РЎР±СЂРѕСЃРёС‚СЊ</button>
        <details class="tax-mobile-advanced" ${mobileTaxPlannerAdvancedOpen ? "open" : ""}>
          <summary>
            <span>Р”РѕРї. РїР°СЂР°РјРµС‚СЂС‹</span>
            <small>Р Р°СЃС…РѕРґС‹ РћРЈР  Рё СЂРµР·РµСЂРІ</small>
          </summary>
          <div class="tax-mobile-advanced-body">
            <label>Р—Р°РїР°СЃ Рє СЂРµР·РµСЂРІСѓ (%)
              <input name="reservePct" type="number" min="0" max="50" step="1" value="${planner.reservePct}" />
            </label>
            ${reservePresetsHtml}
            ${
              isOurPlannerRegime
                ? `
                  <label>Р Р°СЃС…РѕРґС‹ РґР»СЏ РћРЈР  (в‚ё)
                    <input name="expenses" type="number" min="0" step="1" value="${planner.ourExpensesDraft}" />
                  </label>
                  ${expensePresetsHtml}
                `
                : `
                  <input type="hidden" name="expenses" value="${planner.ourExpensesDraft}" />
                  <p class="tax-input-hint muted tax-mobile-inline-hint">
                    Р Р°СЃС…РѕРґС‹ РІР»РёСЏСЋС‚ С‚РѕР»СЊРєРѕ РЅР° СЂРµР¶РёРј РћРЈР . РџРµСЂРµРєР»СЋС‡РёС‚Рµ СЂРµР¶РёРј СЃРІРµСЂС…Сѓ, С‡С‚РѕР±С‹ РІРєР»СЋС‡РёС‚СЊ СЌС‚РѕС‚ РїР°СЂР°РјРµС‚СЂ.
                  </p>
                `
            }
          </div>
        </details>
      </form>
    `
    : `
      <form id="taxPlannerForm" class="tax-planner-form">
        <div class="tax-form-grid">
          <label>Р”РѕС…РѕРґ РІ РјРµСЃСЏС† (в‚ё)
            <input name="income" type="number" min="0" step="1" value="${planner.income}" required />
          </label>
          <label>Р Р°СЃС…РѕРґС‹ РґР»СЏ РћРЈР  (в‚ё)
            <input name="expenses" type="number" min="0" step="1" value="${planner.ourExpensesDraft}" ${state.regime === "our" ? "" : "disabled"} />
          </label>
          <label>Р—Р°РїР°СЃ Рє СЂРµР·РµСЂРІСѓ (%)
            <input name="reservePct" type="number" min="0" max="50" step="1" value="${planner.reservePct}" />
          </label>        </div>
      </form>

      ${incomePresetsHtml}
      ${expensePresetsHtml}
      ${reservePresetsHtml}
    `;

  els.pageContent.innerHTML = `
    <div class="grid grid-4 tax-kpi-grid">
      <article class="card tax-kpi-card tax-kpi-card-hero" data-tour-target="taxes-kpi">
        <div class="stat-title">РќР°Р»РѕРі РІ СЃС†РµРЅР°СЂРёРё</div>
        <div class="tax-kpi-main amount-sensitive${scenarioTaxSizeClass}">${scenarioTaxDisplay}</div>
        <div class="tax-kpi-meta">${state.regime === "our" ? "СЃ СѓС‡РµС‚РѕРј СЂР°СЃС…РѕРґРѕРІ" : "РІРєР»СЋС‡Р°СЏ РРџРќ (40 000 в‚ё вЂ” РїР»Р°С‚РёС‚СЃСЏ СЂР°Р· РІ РїРѕР»РіРѕРґР°)"}</div>
      </article>
      <article class="card tax-kpi-card">
        <div class="stat-title">Р­С„С„РµРєС‚РёРІРЅР°СЏ СЃС‚Р°РІРєР°</div>
        <div class="tax-kpi-main">${formatPct(effectiveRate)}</div>
        <div class="tax-kpi-meta">РґРѕР»СЏ РЅР°Р»РѕРіРѕРІ РѕС‚ РґРѕС…РѕРґР°</div>
      </article>
      <article class="card tax-kpi-card">
        <div class="stat-title">Р РµРєРѕРјРµРЅРґСѓРµРјС‹Р№ СЂРµР·РµСЂРІ</div>
        <div class="tax-kpi-main amount-sensitive${hasRealJournalIncome ? "" : " is-empty"}${reserveMainSizeClass}">${reserveMainValue}</div>
        <div class="tax-kpi-subtitle">РЎРєРѕР»СЊРєРѕ РѕС‚Р»РѕР¶РёС‚СЊ С‡С‚РѕР±С‹ РїРѕРєСЂС‹С‚СЊ РЅР°Р»РѕРіРё СЃ Р·Р°РїР°СЃРѕРј</div>
      </article>
      <article class="card tax-kpi-card">
        <div class="stat-title">РќР°Р»РѕРіРё СЃ РЅР°С‡Р°Р»Р° РіРѕРґР°</div>
        <div class="tax-kpi-main amount-sensitive${ytdTaxSizeClass}">${ytdTaxDisplay}</div>
        <div class="tax-kpi-meta">${hasRealYtdData ? `${isMobileTaxesView ? "РїСЂРѕРіРЅРѕР·: " : "РїСЂРѕРіРЅРѕР· РЅР° 12 РјРµСЃ: "}<span class="amount-sensitive">${annualForecastDisplay}</span>` : "РЅРµС‚ РґР°РЅРЅС‹С…"}</div>
      </article>
    </div>

    <article class="card mt-16 tax-planner-card" data-tour-target="taxes-planner">
      <div class="tax-planner-head">
        <div>
          <h3>РџР»Р°РЅРёСЂРѕРІС‰РёРє РЅР°Р»РѕРіРѕРІ</h3>
          <p>РР·РјРµРЅРёС‚Рµ СЃС†РµРЅР°СЂРёР№ Рё СЃСЂР°Р·Сѓ СѓРІРёРґРёС‚Рµ РЅР°РіСЂСѓР·РєСѓ, СЂРµР·РµСЂРІ Рё РІС‹РіРѕРґРЅС‹Р№ СЂРµР¶РёРј.</p>
        </div>
        ${isMobileTaxesPlanner ? "" : '<button type="button" class="btn btn-ghost btn-xs" data-tax-reset>РЎР±СЂРѕСЃРёС‚СЊ</button>'}
      </div>
      ${plannerBodyHtml}

      <p class="tax-input-hint ${state.regime === "our" ? "" : "muted"}">
        ${
          state.regime === "our"
            ? "Р”Р»СЏ РћРЈР  СѓС‡РёС‚С‹РІР°РµРј СЂР°СЃС…РѕРґС‹ РІ СЃС†РµРЅР°СЂРёРё Рё РїРµСЂРµСЃС‡РёС‚С‹РІР°РµРј РРџРќ РїРѕ РЅР°Р»РѕРіРѕРІРѕР№ Р±Р°Р·Рµ."
            : "Р Р°СЃС…РѕРґС‹ РІР»РёСЏСЋС‚ С‚РѕР»СЊРєРѕ РЅР° СЂРµР¶РёРј РћРЈР . РџРµСЂРµРєР»СЋС‡РёС‚Рµ СЂРµР¶РёРј СЃРІРµСЂС…Сѓ, С‡С‚РѕР±С‹ РІРєР»СЋС‡РёС‚СЊ СЌС‚РѕС‚ РїР°СЂР°РјРµС‚СЂ."
        }
      </p>
    </article>

    <div class="grid grid-2 mt-16">
      <article class="card tax-breakdown-card">
        <h3>РЎС‚СЂСѓРєС‚СѓСЂР° РЅР°Р»РѕРіРѕРІРѕР№ РЅР°РіСЂСѓР·РєРё</h3>
        <div class="tax-share-list">${breakdownRows.join("")}</div>
      </article>

      <article class="card tax-compare-panel">
        <h3>РЎСЂР°РІРЅРµРЅРёРµ СЂРµР¶РёРјРѕРІ РґР»СЏ РІР°С€РµРіРѕ СЃС†РµРЅР°СЂРёСЏ</h3>
        <div class="tax-compare-grid">${compareCards}</div>
      </article>
    </div>

    <article class="card mt-16 tax-forecast-panel">
      <h3>РџРѕРјРµСЃСЏС‡РЅС‹Р№ РїСЂРѕРіРЅРѕР·</h3>
      <p class="text-muted">Р”РѕС…РѕРґ Р±РµСЂРµС‚СЃСЏ РёР· Р¶СѓСЂРЅР°Р»Р°, РЅР°Р»РѕРіРё РїРµСЂРµСЃС‡РёС‚С‹РІР°СЋС‚СЃСЏ РІ С‚РµРєСѓС‰РµРј СЂРµР¶РёРјРµ ${regimeLabel(state.regime)}.</p>
      <div class="table-wrap tax-forecast-table-wrap">
        <table class="table tax-forecast-table">
          <thead><tr><th>РњРµСЃСЏС†</th><th>Р”РѕС…РѕРґ</th><th>РќР°Р»РѕРіРё</th><th>Р­С„С„. СЃС‚Р°РІРєР°</th></tr></thead>
          <tbody>${forecastRows}</tbody>
        </table>
      </div>
      <div class="tax-forecast-mobile-list" aria-label="РџРѕРјРµСЃСЏС‡РЅС‹Р№ РїСЂРѕРіРЅРѕР· (РјРѕР±РёР»СЊРЅР°СЏ РІРµСЂСЃРёСЏ)">
        ${forecastMobileCards}
      </div>
    </article>

    <article class="card mt-16 tax-deadlines-panel" data-tour-target="${deadlinesPanelTourTarget}">
      <div class="tax-deadlines-head">
        <h3>Р§С‚Рѕ СЃРєРѕСЂРѕ РїР»Р°С‚РёС‚СЊ</h3>
        <button class="btn btn-ghost btn-xs" type="button" data-page="calendar">РћС‚РєСЂС‹С‚СЊ РєР°Р»РµРЅРґР°СЂСЊ</button>
      </div>
      <div class="tax-deadline-list">${deadlinesHtml}</div>
    </article>
  `;

  if (isMobileTaxesPlanner) {
    const mobileAdvancedEl = document.querySelector(".tax-mobile-advanced");
    if (mobileAdvancedEl instanceof HTMLDetailsElement) {
      mobileTaxPlannerAdvancedOpen = mobileAdvancedEl.open;
      mobileAdvancedEl.addEventListener("toggle", () => {
        mobileTaxPlannerAdvancedOpen = mobileAdvancedEl.open;
      });
    }
  } else {
    mobileTaxPlannerAdvancedOpen = false;
  }

  syncOnboardingTour();
}
function getCalendarDueMeta(dateString, done) {
  if (done) {
    return { text: "Р’С‹РїРѕР»РЅРµРЅРѕ", tone: "done" };
  }

  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(dateString);
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diffDays = Math.ceil((targetStart - dayStart) / 86400000);

  if (diffDays < 0) {
    return { text: `РџСЂРѕСЃСЂРѕС‡РµРЅРѕ РЅР° ${Math.abs(diffDays)} ${getLandingDayWord(Math.abs(diffDays))}`, tone: "overdue" };
  }

  if (diffDays === 0) {
    return { text: "РЎРµРіРѕРґРЅСЏ", tone: "urgent" };
  }

  if (diffDays <= 7) {
    return { text: `Р§РµСЂРµР· ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "urgent" };
  }

  if (diffDays <= 21) {
    return { text: `Р§РµСЂРµР· ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "soon" };
  }

  return { text: `Р§РµСЂРµР· ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "normal" };
}

function toDayStart(value) {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getDeadlineTrackingFromDate() {
  const raw = state.profile && typeof state.profile === "object"
    ? String(state.profile.deadlineTrackingFrom || "").trim()
    : "";
  return raw ? toDayStart(raw) : null;
}

function ensureDeadlineTrackingFrom() {
  if (!state.isLoggedIn) return false;
  if (getDeadlineTrackingFromDate()) return false;

  const hasIncomeHistory = Array.isArray(state.incomes) && state.incomes.length > 0;
  const hasDeadlineHistory = Array.isArray(state.doneDeadlines) && state.doneDeadlines.length > 0;
  if (hasIncomeHistory || hasDeadlineHistory) {
    return false;
  }

  const todayStart = toDayStart(new Date());
  if (!todayStart) return false;

  state.profile = {
    ...state.profile,
    deadlineTrackingFrom: todayStart.toISOString()
  };
  return true;
}

function ensureRegistrationDate() {
  if (!state.isLoggedIn) return false;

  const current = toDayStart(state.registrationDate);
  if (current) {
    const normalized = current.toISOString();
    if (state.registrationDate !== normalized) {
      state.registrationDate = normalized;
      return true;
    }
    return false;
  }

  const fallback = getDeadlineTrackingFromDate() || toDayStart(new Date());
  if (!fallback) return false;

  state.registrationDate = fallback.toISOString();
  return true;
}

function getRegistrationMonthStart() {
  const registration = toDayStart(state.registrationDate) || getDeadlineTrackingFromDate();
  if (!registration) return null;
  return new Date(registration.getFullYear(), registration.getMonth(), 1);
}

function isDeadlineBeforeRegistration(dateString) {
  const registration = toDayStart(state.registrationDate) || getDeadlineTrackingFromDate();
  const deadlineDate = toDayStart(dateString);
  if (!registration || !deadlineDate) return false;
  return deadlineDate < registration;
}

function getDeadlineCompletionSource(deadlineId) {
  const key = String(Number(deadlineId) || 0);
  if (!key || key === "0") return "";
  const meta = state.deadlineCompletionMeta && typeof state.deadlineCompletionMeta === "object"
    ? state.deadlineCompletionMeta[key]
    : null;
  return meta && typeof meta === "object" ? String(meta.source || "") : "";
}

function setDeadlineCompletionSource(deadlineId, source) {
  const id = Number(deadlineId);
  if (!Number.isFinite(id) || id <= 0) return;
  if (source !== "manual" && source !== "pre_service") return;

  const key = String(id);
  const prev = state.deadlineCompletionMeta[key] && typeof state.deadlineCompletionMeta[key] === "object"
    ? state.deadlineCompletionMeta[key]
    : {};

  state.deadlineCompletionMeta[key] = {
    ...prev,
    source
  };
}

function markDeadlineManuallyTouched(deadlineId) {
  setDeadlineCompletionSource(deadlineId, "manual");
}

function applyPreServiceDeadlineCompletions() {
  if (!state.isLoggedIn) return false;
  if (state.calendarPreServiceApplied) return false;

  let changed = false;
  const hasLegacyManualHistory =
    Object.keys(state.deadlineCompletionMeta || {}).length === 0 &&
    ((Array.isArray(state.doneDeadlines) && state.doneDeadlines.length > 0) || Object.keys(state.deadlineChecklistProgress || {}).length > 0);
  if (hasLegacyManualHistory) {
    state.calendarPreServiceApplied = true;
    return true;
  }

  if (ensureRegistrationDate()) {
    changed = true;
  }

  const monthStart = getRegistrationMonthStart();
  if (!monthStart) {
    state.calendarPreServiceApplied = true;
    return changed;
  }

  const doneSet = new Set(state.doneDeadlines);

  DEADLINES_2026.forEach((row) => {
    const deadlineDate = toDayStart(row.date);
    if (!deadlineDate || deadlineDate >= monthStart) return;

    const source = getDeadlineCompletionSource(row.id);
    if (source === "manual") return;

    if (!doneSet.has(row.id)) {
      doneSet.add(row.id);
      changed = true;
    }

    if (source !== "pre_service") {
      setDeadlineCompletionSource(row.id, "pre_service");
      changed = true;
    }
  });

  const nextDone = [...doneSet];
  if (nextDone.length !== state.doneDeadlines.length) {
    state.doneDeadlines = nextDone;
    changed = true;
  }

  state.calendarPreServiceApplied = true;
  changed = true;

  return changed;
}
function isDeadlineInTrackingRange(dateString) {
  const trackingFrom = getDeadlineTrackingFromDate();
  if (!trackingFrom) return true;

  const targetStart = toDayStart(dateString);
  if (!targetStart) return false;
  return targetStart >= trackingFrom;
}
function getCalendarRowsByRegime() {
  return DEADLINES_2026
    .filter((row) => isDeadlineApplicableForRegime(row, state.regime) && isDeadlineInTrackingRange(row.date))
    .map((row, index) => {
      const done = state.doneDeadlines.includes(row.id);
      const due = getCalendarDueMeta(row.date, done);
      const dateObj = new Date(row.date);
      const isBeforeRegistration = isDeadlineBeforeRegistration(row.date);

      return {
        ...row,
        done,
        due,
        dateObj,
        isBeforeRegistration,
        typeLabel: row.type === "payment" ? "РџР»Р°С‚РµР¶" : "РћС‚С‡РµС‚",
        regimeLabel: getLandingDeadlineRegimeLabel(row.regime, state.regime),
        regimeHint: getLandingDeadlineRegimeNote(row.regime, state.regime)
      };
    })
    .sort((a, b) => a.dateObj - b.dateObj);
}

function getFilteredCalendarRows() {
  const filters = {
    ...getDefaultCalendarFilters(),
    ...(state.calendarFilters || {})
  };

  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return getCalendarRowsByRegime().filter((row) => {
    if (filters.timeframe === "upcoming" && row.dateObj < dayStart) {
      return false;
    }

    if (filters.timeframe === "year" && row.dateObj.getFullYear() !== now.getFullYear()) {
      return false;
    }

    if (filters.type !== "all" && row.type !== filters.type) {
      return false;
    }

    if (filters.status === "pending" && (row.done || row.isBeforeRegistration)) {
      return false;
    }

    if (filters.status === "done" && (!row.done || row.isBeforeRegistration)) {
      return false;
    }

    if (filters.query) {
      const query = filters.query.toLowerCase();
      const haystack = `${row.title} ${row.typeLabel} ${row.regimeLabel}`.toLowerCase();
      if (!haystack.includes(query)) {
        return false;
      }
    }

    return true;
  });
}

function renderCalendarPage() {
  closeCalendarReminderPopover();
  const isMobileCalendar = window.innerWidth <= 768;

  state.calendarFilters = {
    ...getDefaultCalendarFilters(),
    ...(state.calendarFilters || {})
  };

  updateCalendarReminderToggleUi();

  if (applyPreServiceDeadlineCompletions()) {
    saveState();
  }

  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const rows = getFilteredCalendarRows();
  const allRegimeRows = getCalendarRowsByRegime();

  const getCalendarDueBadgeMeta = (row) => {
    if (row && row.isBeforeRegistration) {
      return { text: "РЈР¶Рµ РїСЂРѕС€Р»Рѕ", tone: "prereg" };
    }
    return row && row.due ? row.due : { text: "вЂ”", tone: "normal" };
  };

  const relevantRegimeRows = allRegimeRows.filter((row) => !row.isBeforeRegistration);
  const pendingTotal = relevantRegimeRows.filter((row) => !row.done).length;
  const doneTotal = relevantRegimeRows.filter((row) => row.done).length;
  const dueStats = relevantRegimeRows.reduce(
    (acc, row) => {
      if (row.done) return acc;
      const tone = getCalendarDueBadgeMeta(row).tone;
      if (tone === "overdue") acc.overdue += 1;
      if (tone === "urgent") acc.soon += 1;
      return acc;
    },
    { overdue: 0, soon: 0 }
  );
  const overdueTotal = dueStats.overdue;
  const dueSoonTotal = dueStats.soon;
  const urgentTotal = overdueTotal + dueSoonTotal;
  const urgentHint = urgentTotal > 0
    ? `РїСЂРѕСЃСЂРѕС‡РµРЅРѕ: ${overdueTotal} вЂў СЃРµРіРѕРґРЅСЏ/РґРѕ 7 РґРЅРµР№: ${dueSoonTotal}`
    : "РЅРµС‚ РєСЂРёС‚РёС‡РЅС‹С… СЃСЂРѕРєРѕРІ";

  const nextPending =
    relevantRegimeRows.find((row) => !row.done && row.dateObj >= dayStart) ||
    relevantRegimeRows.find((row) => !row.done) ||
    null;

  const visiblePending = rows.filter((row) => !row.done && !row.isBeforeRegistration).length;

  const timeframeButtons = [
    { id: "upcoming", label: "Р‘Р»РёР¶Р°Р№С€РёРµ" },
    { id: "year", label: "Р­С‚РѕС‚ РіРѕРґ" },
    { id: "all", label: "Р’СЃРµ" }
  ]
    .map(
      (item) =>
        `<button type="button" class="${state.calendarFilters.timeframe === item.id ? "active" : ""}" data-calendar-timeframe="${item.id}">${item.label}</button>`
    )
    .join("");

  const typeButtons = [
    { id: "all", label: "Р’СЃРµ С‚РёРїС‹" },
    { id: "payment", label: "РџР»Р°С‚РµР¶Рё" },
    { id: "report", label: "РћС‚С‡РµС‚С‹" }
  ]
    .map(
      (item) =>
        `<button type="button" class="${state.calendarFilters.type === item.id ? "active" : ""}" data-calendar-type="${item.id}">${item.label}</button>`
    )
    .join("");

  const statusButtons = [
    { id: "all", label: "Р’СЃРµ" },
    { id: "pending", label: "РћР¶РёРґР°СЋС‚" },
    { id: "done", label: "РЎРґРµР»Р°РЅРѕ" }
  ]
    .map(
      (item) =>
        `<button type="button" class="${state.calendarFilters.status === item.id ? "active" : ""}" data-calendar-status="${item.id}">${item.label}</button>`
    )
    .join("");

  const tableRows = rows
    .map((row, index) => {
      const completionSource = getDeadlineCompletionSource(row.id);
      const statusBadge = row.isBeforeRegistration
        ? '<span class="badge badge-neutral">РћС‚РјРµС‚СЊС‚Рµ РµСЃР»Рё РѕРїР»Р°С‡РёРІР°Р»Рё</span>'
        : row.done
          ? completionSource === "pre_service"
            ? '<span class="badge badge-neutral">Р’С‹РїРѕР»РЅРµРЅРѕ РІРЅРµ СЃРµСЂРІРёСЃР°</span>'
            : '<span class="badge badge-success">РЎРґРµР»Р°РЅРѕ</span>'
          : '<span class="badge badge-warning">РћР¶РёРґР°РµС‚</span>';

      const typeTone = row.type === "payment" ? "payment" : "report";
      const dueMeta = getCalendarDueBadgeMeta(row);
      const dueTone = dueMeta.tone;
      const checklistStats = getDeadlineChecklistStats(row.id, row);
      const checklistTourTarget = index === 0 ? ' data-tour-target="calendar-checklist-btn"' : '';

      return `
        <tr class="calendar-row ${row.done && !row.isBeforeRegistration ? "done" : ""} ${row.isBeforeRegistration ? "prereg" : ""} ${dueTone}">
          <td class="calendar-date-cell">${formatDate(row.date)}</td>
          <td>
            <div class="calendar-event-title">${escapeHtml(row.title)}</div>
            <div class="calendar-event-sub">${escapeHtml(row.regimeLabel)}</div>
            ${row.regimeHint ? `<div class="calendar-event-sub calendar-event-note">${escapeHtml(row.regimeHint)}</div>` : ""}
          </td>
          <td><span class="calendar-type-chip ${typeTone}">${row.typeLabel}</span></td>
          <td><span class="calendar-due-chip ${dueTone}">${dueMeta.text}</span></td>
          <td>${statusBadge}</td>
          <td class="calendar-actions-cell">
            <button type="button" class="calendar-reminder-row-btn ${state.remindersEnabled ? "on" : "off"}" data-calendar-reminder-info="${row.id}" title="${state.remindersEnabled ? "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІРєР»СЋС‡РµРЅС‹ РіР»РѕР±Р°Р»СЊРЅРѕ" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹"}" aria-label="${state.remindersEnabled ? "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІРєР»СЋС‡РµРЅС‹ РіР»РѕР±Р°Р»СЊРЅРѕ" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹"}"><i class="calendar-reminder-row-icon" data-lucide="bell" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-ghost btn-xs"${checklistTourTarget} data-deadline-expand="${row.id}">Р§РµРєР»РёСЃС‚ ${checklistStats.done}/${checklistStats.total}</button>
            <button type="button" class="btn btn-ghost btn-xs" data-toggle-deadline="${row.id}">${row.done ? "РЎРЅСЏС‚СЊ" : "РћС‚РјРµС‚РёС‚СЊ"}</button>
          </td>
        </tr>
      `;
    })
    .join("");

  const mobileRows = rows
    .map((row, index) => {
      const completionSource = getDeadlineCompletionSource(row.id);
      const statusBadge = row.isBeforeRegistration
        ? '<span class="badge badge-neutral">РћС‚РјРµС‚СЊС‚Рµ РµСЃР»Рё РѕРїР»Р°С‡РёРІР°Р»Рё</span>'
        : row.done
          ? completionSource === "pre_service"
            ? '<span class="badge badge-neutral">Р’С‹РїРѕР»РЅРµРЅРѕ РІРЅРµ СЃРµСЂРІРёСЃР°</span>'
            : '<span class="badge badge-success">РЎРґРµР»Р°РЅРѕ</span>'
          : '<span class="badge badge-warning">РћР¶РёРґР°РµС‚</span>';

      const typeTone = row.type === "payment" ? "payment" : "report";
      const dueMeta = getCalendarDueBadgeMeta(row);
      const dueTone = dueMeta.tone;
      const checklistStats = getDeadlineChecklistStats(row.id, row);
      const checklistTourTarget = index === 0 ? ' data-tour-target="calendar-checklist-btn"' : "";

      return `
        <article class="calendar-mobile-row ${row.done && !row.isBeforeRegistration ? "done" : ""} ${row.isBeforeRegistration ? "prereg" : ""}">
          <div class="calendar-mobile-row-head">
            <span class="calendar-mobile-date">${formatDate(row.date)}</span>
            <span class="calendar-due-chip ${dueTone}">${dueMeta.text}</span>
          </div>
          <div class="calendar-mobile-title">${escapeHtml(row.title)}</div>
          <div class="calendar-mobile-sub">${escapeHtml(row.regimeLabel)}</div>
          ${row.regimeHint ? `<div class="calendar-mobile-note">${escapeHtml(row.regimeHint)}</div>` : ""}
          <div class="calendar-mobile-meta">
            <span class="calendar-type-chip ${typeTone}">${row.typeLabel}</span>
            ${statusBadge}
          </div>
          <div class="calendar-mobile-actions">
            <button type="button" class="calendar-reminder-row-btn ${state.remindersEnabled ? "on" : "off"}" data-calendar-reminder-info="${row.id}" title="${state.remindersEnabled ? "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІРєР»СЋС‡РµРЅС‹ РіР»РѕР±Р°Р»СЊРЅРѕ" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹"}" aria-label="${state.remindersEnabled ? "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІРєР»СЋС‡РµРЅС‹ РіР»РѕР±Р°Р»СЊРЅРѕ" : "РќР°РїРѕРјРёРЅР°РЅРёСЏ РІС‹РєР»СЋС‡РµРЅС‹"}"><i class="calendar-reminder-row-icon" data-lucide="bell" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-ghost btn-xs calendar-mobile-action-btn"${checklistTourTarget} data-deadline-expand="${row.id}">Р§РµРєР»РёСЃС‚ ${checklistStats.done}/${checklistStats.total}</button>
            <button type="button" class="btn btn-ghost btn-xs calendar-mobile-action-btn" data-toggle-deadline="${row.id}">${row.done ? "РЎРЅСЏС‚СЊ" : "РћС‚РјРµС‚РёС‚СЊ"}</button>
          </div>
        </article>
      `;
    })
    .join("");

  els.pageContent.innerHTML = `
    <article class="card calendar-summary-card" data-tour-target="calendar-overview">
      <div class="calendar-summary-head">
        <h3>${isMobileCalendar ? `РљР°Р»РµРЅРґР°СЂСЊ СЃСЂРѕРєРѕРІ: ${regimeLabel(state.regime)}` : `РљР°Р»РµРЅРґР°СЂСЊ СЃСЂРѕРєРѕРІ РїРѕ СЂРµР¶РёРјСѓ: ${regimeLabel(state.regime)}`}</h3>
        <span class="calendar-summary-chip">${isMobileCalendar ? `${rows.length} СЃРѕР±С‹С‚РёР№` : `${rows.length} Р·Р°РїРёСЃРµР№ РІ С‚РµРєСѓС‰РµРј С„РёР»СЊС‚СЂРµ`}</span>
      </div>

      <div class="calendar-kpi-grid">
        <div class="calendar-kpi-item">
          <span>РЎР»РµРґСѓСЋС‰РёР№ СЃСЂРѕРє</span>
          <strong>${nextPending ? formatDateShort(nextPending.date) : "РќРµС‚"}</strong>
          <small>${nextPending ? escapeHtml(nextPending.title) : "Р’СЃРµ СЃСЂРѕРєРё Р·Р°РєСЂС‹С‚С‹"}</small>
        </div>
        <div class="calendar-kpi-item">
          <span>РћР¶РёРґР°СЋС‚</span>
          <strong>${pendingTotal}</strong>
          <small>РїРѕ С‚РµРєСѓС‰РµРјСѓ СЂРµР¶РёРјСѓ</small>
        </div>
        <div class="calendar-kpi-item">
          <span>РЎРґРµР»Р°РЅРѕ</span>
          <strong>${doneTotal}</strong>
          <small>Р·Р°РєСЂС‹С‚С‹Рµ РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІР°</small>
        </div>
        <div class="calendar-kpi-item danger">
          <span>РўСЂРµР±СѓСЋС‚ РІРЅРёРјР°РЅРёСЏ</span>
          <strong>${urgentTotal}</strong>
          <small>${urgentHint}</small>
        </div>
      </div>
    </article>

    <article class="card mt-16 calendar-filter-card ${isMobileCalendar ? "calendar-filter-card-mobile" : ""}">
      <div class="calendar-filter-groups">
        <div class="calendar-filter-group">
          <p>РџРµСЂРёРѕРґ</p>
          <div class="calendar-chip-group">${timeframeButtons}</div>
        </div>
        <div class="calendar-filter-group">
          <p>РўРёРї</p>
          <div class="calendar-chip-group">${typeButtons}</div>
        </div>
        <div class="calendar-filter-group">
          <p>РЎС‚Р°С‚СѓСЃ</p>
          <div class="calendar-chip-group">${statusButtons}</div>
        </div>
      </div>

      <form id="calendarFilterForm" class="calendar-search-form ${isMobileCalendar ? "calendar-search-form-mobile-compact" : ""}">
        <label>
          РџРѕРёСЃРє СЃРѕР±С‹С‚РёСЏ
          <input name="query" type="text" value="${escapeHtml(state.calendarFilters.query)}" placeholder="Р¤РќРћ, РћРџР’, РРџРќ..." />
        </label>
        <input type="hidden" name="type" value="${state.calendarFilters.type}" />
        <input type="hidden" name="status" value="${state.calendarFilters.status}" />
        <input type="hidden" name="timeframe" value="${state.calendarFilters.timeframe}" />
        <div class="calendar-filter-actions">
          <button class="btn btn-ghost" type="button" data-reset-calendar-filters>РЎР±СЂРѕСЃРёС‚СЊ</button>
          <button class="btn btn-ghost" type="button" data-calendar-mark-visible ${visiblePending > 0 ? "" : "disabled"}>${isMobileCalendar ? "РћС‚РјРµС‚РёС‚СЊ" : "РћС‚РјРµС‚РёС‚СЊ РІРёРґРёРјС‹Рµ"}</button>
        </div>
      </form>
    </article>

    <article class="card mt-16 calendar-table-card" data-tour-target="calendar-reminder-entry">
      <div class="table-wrap calendar-table-wrap-desktop">
        <table class="table calendar-table">
          <thead><tr><th>Р”Р°С‚Р°</th><th>РЎРѕР±С‹С‚РёРµ</th><th>РўРёРї</th><th>РљРѕРіРґР°</th><th>РЎС‚Р°С‚СѓСЃ</th><th></th></tr></thead>
          <tbody>
            ${
              tableRows ||
              '<tr><td colspan="6" class="empty-row">РџРѕ С‚РµРєСѓС‰РёРј С„РёР»СЊС‚СЂР°Рј СЃРѕР±С‹С‚РёР№ РЅРµ РЅР°Р№РґРµРЅРѕ.</td></tr>'
            }
          </tbody>
        </table>
      </div>
      <div class="calendar-mobile-list" aria-label="РЎСЂРѕРєРё РѕРїР»Р°С‚С‹ (РјРѕР±РёР»СЊРЅР°СЏ РІРµСЂСЃРёСЏ)">
        ${
          mobileRows ||
          '<div class="calendar-mobile-empty">РџРѕ С‚РµРєСѓС‰РёРј С„РёР»СЊС‚СЂР°Рј СЃРѕР±С‹С‚РёР№ РЅРµ РЅР°Р№РґРµРЅРѕ.</div>'
        }
      </div>
    </article>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "16",
        height: "16"
      }
    });
  }

  syncOnboardingTour();
}

function renderCalculatorPage() {
  const isMobileCalculator = window.innerWidth <= 768;
  const periodMultiplier = getCalcPeriodMultiplier();
  const periodLabel = getCalcPeriodLabel();
  const incomeInputValue = getCalcInputIncome();
  const expensesInputValue = getCalcInputExpenses();
  const shouldBlockSelfInCalculator = state.regime === "simplified" || state.regime === "our";

  const rows = [
    { id: "self", label: "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№", taxData: calcSelfEmployed(state.calcIncome), limitLabel: `${fmt(SELF_LIMIT_ANNUAL)}/РіРѕРґ` },
    { id: "simplified", label: "РЈРїСЂРѕС‰РµРЅРєР° (910)", taxData: calcSimplified(state.calcIncome), limitLabel: `${fmt(SIMPLIFIED_LIMIT_ANNUAL)}/РіРѕРґ` },
    { id: "our", label: "РћРЈР ", taxData: calcOUR(state.calcIncome, state.calcExpenses), limitLabel: "Р‘РµР· Р»РёРјРёС‚Р°" }
  ].map((row) => ({
    ...row,
    tax: row.taxData.total,
    ...getRegimeAvailability(row.id, state.calcIncome, { disallowSelfForIp: shouldBlockSelfInCalculator })
  }));

  const availableRows = rows.filter((row) => row.available).sort((a, b) => a.tax - b.tax);
  const fallbackRows = [...rows].sort((a, b) => a.tax - b.tax);
  const bestRow = availableRows[0] || fallbackRows[0];
  const secondRow = availableRows[1] || fallbackRows.find((row) => row.id !== bestRow.id) || null;
  const bestId = bestRow.id;

  const bestTaxDisplay = bestRow.tax * periodMultiplier;
  const currentRow = rows.find((row) => row.id === state.regime) || bestRow;
  const currentTaxDisplay = currentRow.tax * periodMultiplier;
  const selfRow = rows.find((row) => row.id === "self") || bestRow;
  const selfTaxDisplay = selfRow.tax * periodMultiplier;
  const switchToSelfSavings = Math.max(currentTaxDisplay - selfTaxDisplay, 0);
  const isSelfUnavailable = !selfRow.available;
  const selfSavingsTitle = isSelfUnavailable
    ? (selfRow.reason || "Р РµР¶РёРј РЅРµРґРѕСЃС‚СѓРїРµРЅ РїСЂРё С‚РµРєСѓС‰РµРј РґРѕС…РѕРґРµ")
    : (isMobileCalculator ? "Р­РєРѕРЅРѕРјРёСЏ Рє РЎР°РјРѕР·Р°РЅСЏС‚РѕРјСѓ" : "Р­РєРѕРЅРѕРјРёСЏ РµСЃР»Рё РїРµСЂРµР№С‚Рё РЅР° РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№");
  const selfSavingsValue = incomeInputValue > 0 && selfRow.available ? fmt(switchToSelfSavings) : "вЂ”";

  const incomeLabel = state.calcPeriod === "year" ? "Р”РѕС…РѕРґ РІ РіРѕРґ (в‚ё)" : "Р”РѕС…РѕРґ РІ РјРµСЃСЏС† (в‚ё)";
  const expenseLabel = state.calcPeriod === "year"
    ? (isMobileCalculator ? "Р Р°СЃС…РѕРґС‹ РІ РіРѕРґ (в‚ё) В· РћРЈР " : "Р Р°СЃС…РѕРґС‹ РІ РіРѕРґ (в‚ё) - РґР»СЏ РћРЈР ")
    : (isMobileCalculator ? "Р Р°СЃС…РѕРґС‹ РІ РјРµСЃСЏС† (в‚ё) В· РћРЈР " : "Р Р°СЃС…РѕРґС‹ РІ РјРµСЃСЏС† (в‚ё) - РґР»СЏ РћРЈР ");
  const calcSummaryFoot = isMobileCalculator
    ? `РЎСѓРјРјС‹ РїРѕРєР°Р·Р°РЅС‹ ${periodLabel}. Р­С‚Рѕ РѕСЂРёРµРЅС‚РёСЂ, С„РёРЅР°Р»СЊРЅР°СЏ СЃСѓРјРјР° Р·Р°РІРёСЃРёС‚ РѕС‚ С„Р°РєС‚РёС‡РµСЃРєРёС… РґР°РЅРЅС‹С….`
    : `Р’СЃРµ СЃСѓРјРјС‹ РїРѕРєР°Р·Р°РЅС‹ ${periodLabel}. Р­С‚Рѕ РѕСЂРёРµРЅС‚РёСЂ, С„РёРЅР°Р»СЊРЅР°СЏ СЃСѓРјРјР° Р·Р°РІРёСЃРёС‚ РѕС‚ С„Р°РєС‚РёС‡РµСЃРєРёС… РґР°РЅРЅС‹С… Рё РѕР±СЏР·Р°С‚РµР»СЊСЃС‚РІ.`;
  const currentRegimeHint = isMobileCalculator ? `РўРµРєСѓС‰РёР№: ${regimeLabel(state.regime)}` : `Р’Р°С€ С‚РµРєСѓС‰РёР№ СЂРµР¶РёРј (${regimeLabel(state.regime)})`;
  const expenseRatio = incomeInputValue > 0 ? expensesInputValue / incomeInputValue : 0;
  const hasIncome = incomeInputValue > 0;
  const monthlyIncomeForHint = normalizeIncome(state.calcIncome);
  const annualIncomeForHint = annualizeIncome(monthlyIncomeForHint);
  const simplifiedWarningThreshold = SIMPLIFIED_LIMIT_ANNUAL * 0.8;
  const ndsThresholdAnnual = MRP_2026 * 10000;

  let practicalHintTone = "neutral";
  let practicalHintText = "";

  if (state.regime === "self") {
    if (monthlyIncomeForHint > SELF_LIMIT_MONTHLY) {
      practicalHintTone = "warning";
      practicalHintText = "Р’С‹ РїСЂРµРІС‹С€Р°РµС‚Рµ Р»РёРјРёС‚ РЎР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ (300 РњР Рџ). РџРѕСЂР° РїРµСЂРµС…РѕРґРёС‚СЊ РЅР° РРџ вЂ” РЈРїСЂРѕС‰С‘РЅРєР° (910) Р±СѓРґРµС‚ РІС‹РіРѕРґРЅРµРµ.";
    } else {
      practicalHintTone = "success";
      practicalHintText = "Р’Р°С€ РґРѕС…РѕРґ РІ РїСЂРµРґРµР»Р°С… Р»РёРјРёС‚Р° вЂ” РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№ РѕРїС‚РёРјР°Р»РµРЅ, РѕС‚РєСЂС‹РІР°С‚СЊ РРџ РЅРµС‚ СЃРјС‹СЃР»Р°.";
    }
  } else if (state.regime === "simplified") {
    if (annualIncomeForHint > SIMPLIFIED_LIMIT_ANNUAL) {
      practicalHintTone = "warning";
      practicalHintText = "Р›РёРјРёС‚ РЈРїСЂРѕС‰С‘РЅРєРё РїСЂРµРІС‹С€РµРЅ. Р Р°СЃСЃРјРѕС‚СЂРёС‚Рµ РїРµСЂРµС…РѕРґ РЅР° РћРЈР .";
    } else if (annualIncomeForHint > simplifiedWarningThreshold) {
      practicalHintTone = "warning";
      practicalHintText = "Р’С‹ РїСЂРёР±Р»РёР¶Р°РµС‚РµСЃСЊ Рє Р»РёРјРёС‚Сѓ СЂРµР¶РёРјР°. Р Р°СЃСЃРјРѕС‚СЂРёС‚Рµ РїРµСЂРµС…РѕРґ РЅР° РћРЈР .";
    } else {
      practicalHintTone = "success";
      practicalHintText = "Р’С‹ РІ СЂР°РјРєР°С… Р»РёРјРёС‚Р° РЈРїСЂРѕС‰С‘РЅРєРё. Р РµР¶РёРј РѕРїС‚РёРјР°Р»РµРЅ РґР»СЏ РІР°С€РµРіРѕ СѓСЂРѕРІРЅСЏ РґРѕС…РѕРґР°.";
    }
  } else {
    practicalHintTone = "neutral";
    practicalHintText = `РћРЈР  Р±РµР· Р»РёРјРёС‚Р° вЂ” РїРѕРґС…РѕРґРёС‚ РґР»СЏ РІС‹СЃРѕРєРѕРіРѕ РґРѕС…РѕРґР°. РЎР»РµРґРёС‚Рµ Р·Р° РїРѕСЂРѕРіРѕРј РќР”РЎ: ${fmt(ndsThresholdAnnual)}/РіРѕРґ.`;
  }

  const incomePresets = [100000, 300000, 500000, 1000000]
    .map((presetMonthly) => {
      const displayValue = state.calcPeriod === "year" ? presetMonthly * 12 : presetMonthly;
      const isActive = Math.abs(displayValue - incomeInputValue) <= 1;
      const presetLabelBase = presetMonthly >= 1000000
        ? `${Math.round(presetMonthly / 1000000)} РјР»РЅ в‚ё`
        : `${Math.round(presetMonthly / 1000)} С‚С‹СЃ в‚ё`;
      const presetLabelYear = presetMonthly >= 1000000
        ? `${Math.round(presetMonthly / 1000000)} РјР»РЅ Г—12`
        : `${Math.round(presetMonthly / 1000)} С‚С‹СЃ Г—12`;
      const label = state.calcPeriod === "year" ? presetLabelYear : presetLabelBase;
      return `<button type="button" class="${isActive ? "active" : ""}" data-calc-preset="${presetMonthly}">${label}</button>`;
    })
    .join("");

  const expensePresets = [
    { ratio: 0, label: "0%" },
    { ratio: 0.2, label: "20%" },
    { ratio: 0.4, label: "40%" }
  ]
    .map((preset) => {
      const isActive = Math.abs(expenseRatio - preset.ratio) < 0.03;
      return `<button type="button" class="${isActive ? "active" : ""}" data-calc-expense-ratio="${preset.ratio}">${preset.label}</button>`;
    })
    .join("");

  els.pageContent.innerHTML = `
    <article class="card calc-control-card">
      <div class="calc-control-head">
        <h3>РџР°СЂР°РјРµС‚СЂС‹ СЂР°СЃС‡РµС‚Р°</h3>
        <div class="calc-period-switch" role="group" aria-label="РџРµСЂРёРѕРґ СЂР°СЃС‡РµС‚Р°">
          <button type="button" data-calc-period="month" class="${state.calcPeriod === "month" ? "active" : ""}">Р’ РјРµСЃСЏС†</button>
          <button type="button" data-calc-period="year" class="${state.calcPeriod === "year" ? "active" : ""}">Р’ РіРѕРґ</button>
        </div>
      </div>

      <div class="grid grid-2 calc-input-grid">
        <label>${incomeLabel}
          <div class="calc-step-input">
            <button type="button" data-calc-step="-10000" aria-label="РЈРјРµРЅСЊС€РёС‚СЊ РґРѕС…РѕРґ">-</button>
            <input id="calcIncomeInput" type="number" value="${incomeInputValue}" min="0" step="1" />
            <button type="button" data-calc-step="10000" aria-label="РЈРІРµР»РёС‡РёС‚СЊ РґРѕС…РѕРґ">+</button>
          </div>
          <div class="calc-income-presets" role="group" aria-label="РџСЂРµСЃРµС‚С‹ РґРѕС…РѕРґР°">
            ${incomePresets}
          </div>
        </label>

        <label>${expenseLabel}
          <input id="calcExpensesInput" type="number" value="${expensesInputValue}" min="0" step="1" />
          <div class="calc-expense-presets" role="group" aria-label="РџСЂРµСЃРµС‚С‹ СЂР°СЃС…РѕРґРѕРІ">
            ${expensePresets}
          </div>
        </label>
      </div>
    </article>

    <article class="card mt-16 calc-summary-card">
      <div class="calc-summary-main">
        <div>
          <p class="calc-summary-kicker">Р РµРєРѕРјРµРЅРґР°С†РёСЏ</p>
          <h3>${hasIncome ? bestRow.label : "Р’РІРµРґРёС‚Рµ РґРѕС…РѕРґ"}</h3>
          <p class="text-muted">
            ${
              hasIncome
                ? `РњРёРЅРёРјР°Р»СЊРЅР°СЏ РЅР°Р»РѕРіРѕРІР°СЏ РЅР°РіСЂСѓР·РєР° РїСЂРё С‚РµРєСѓС‰РёС… РїР°СЂР°РјРµС‚СЂР°С….`
                : "РЈРєР°Р¶РёС‚Рµ СЃСѓРјРјСѓ РґРѕС…РѕРґР° Рё, РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё, СЂР°СЃС…РѕРґС‹ РґР»СЏ РћРЈР ."
            }
          </p>
        </div>
        <div class="calc-summary-value">${hasIncome ? fmt(bestTaxDisplay) : "вЂ”"}</div>
      </div>

      <div class="calc-summary-grid">
        <div class="calc-summary-item">
          <span>${currentRegimeHint}</span>
          <strong>${hasIncome ? fmt(currentTaxDisplay) : "вЂ”"}</strong>
        </div>
        <div class="calc-summary-item">
          <span>${selfSavingsTitle}</span>
          <strong>${selfSavingsValue}</strong>
        </div>
      </div>
      <p class="calc-summary-foot">${calcSummaryFoot}</p>
      <div class="calc-practical-hint ${practicalHintTone}">${practicalHintText}</div>
    </article>

    <div class="grid grid-3 mt-16 calc-regime-grid">
      ${rows.map((row) => renderRegimeResultCard(row, bestId, { periodMultiplier, inputIncome: incomeInputValue, bestTax: bestRow.tax, periodLabel })).join("")}
    </div>
  `;

  const calcIncomeInput = document.getElementById("calcIncomeInput");
  const calcExpensesInput = document.getElementById("calcExpensesInput");

  const flushCalculatorInputRender = (field) => {
    if (calculatorInputRenderTimer) {
      window.clearTimeout(calculatorInputRenderTimer);
      calculatorInputRenderTimer = null;
    }
    if (state.page === "calculator") {
      renderCalculatorPage();
    }
    if (field) {
      trackEvent("calc_change", { field, period: state.calcPeriod });
    }
  };

  const scheduleCalculatorInputRender = () => {
    if (calculatorInputRenderTimer) {
      window.clearTimeout(calculatorInputRenderTimer);
    }
    calculatorInputRenderTimer = window.setTimeout(() => {
      calculatorInputRenderTimer = null;
      if (state.page === "calculator") {
        renderCalculatorPage();
      }
    }, 260);
  };

  if (calcIncomeInput) {
    calcIncomeInput.addEventListener("input", () => {
      state.calcIncome = toCalcStorageValue(calcIncomeInput.value);
      saveState();
      scheduleCalculatorInputRender();
    });

    calcIncomeInput.addEventListener("blur", () => {
      flushCalculatorInputRender("income");
    });
  }

  if (calcExpensesInput) {
    calcExpensesInput.addEventListener("input", () => {
      state.calcExpenses = toCalcStorageValue(calcExpensesInput.value);
      saveState();
      scheduleCalculatorInputRender();
    });

    calcExpensesInput.addEventListener("blur", () => {
      flushCalculatorInputRender("expenses");
    });
  }
}
function renderRegimeResultCard(row, bestId, options = {}) {
  const periodMultiplier = Number(options.periodMultiplier || 1);
  const inputIncome = Number(options.inputIncome || 0);
  const bestTax = Number(options.bestTax || row.tax);
  const periodLabel = options.periodLabel || "РІ РјРµСЃСЏС†";

  const isBest = row.id === bestId && inputIncome > 0 && row.available;
  const displayTax = row.tax * periodMultiplier;
  const deltaToBest = Math.max(displayTax - bestTax * periodMultiplier, 0);
  const effectiveRate = inputIncome > 0 ? (displayTax / inputIncome) * 100 : 0;

  const limit = getRegimeLimit(row.id);
  const annualIncome = annualizeIncome(state.calcIncome);
  let limitChipText = row.limitLabel;
  let limitChipClass = "ok";

  if (limit) {
    const diff = limit - annualIncome;
    if (diff >= 0) {
      limitChipText = `РґРѕ Р»РёРјРёС‚Р°: ${fmt(diff)}`;
      limitChipClass = "ok";
    } else {
      limitChipText = `РџСЂРµРІС‹С€РµРЅРёРµ: ${fmt(Math.abs(diff))} / РіРѕРґ`;
      limitChipClass = "over";
    }
  }

  return `
    <article class="card regime-result ${isBest ? "best" : ""} ${row.available ? "" : "unavailable"}">
      ${isBest ? '<span class="badge badge-success top-badge">Р’Р«Р“РћР”РќР•Р•</span>' : row.available ? "" : '<span class="badge badge-warning top-badge">РќРµРґРѕСЃС‚СѓРїРЅРѕ</span>'}
      <div class="regime-head">
        <h3>${row.label}</h3>
        <span class="regime-limit-chip ${limitChipClass}">${limitChipText}</span>
      </div>
      <div class="stat-value ${isBest ? "" : row.id === "self" ? "stat-danger" : "calc-amount-neutral"} stat-xl">${fmt(displayTax)}</div>
      <p class="text-muted">${periodLabel} В· Р»РёРјРёС‚: ${row.limitLabel}</p>

      ${
        row.available
          ? `<div class="regime-meta-row">
               <span class="regime-rate">РќР°РіСЂСѓР·РєР°: ${formatPct(effectiveRate)} РѕС‚ РґРѕС…РѕРґР°</span>
               ${!isBest && deltaToBest > 0 ? `<span class="regime-delta">+${fmt(deltaToBest)} Рє Р»СѓС‡С€РµРјСѓ</span>` : ""}
             </div>
             ${renderTaxBreakdown(row.taxData, row.id)}`
          : `<p class="text-muted">${row.reason}. Р Р°СЃСЃРјРѕС‚СЂРёС‚Рµ РґСЂСѓРіРѕР№ СЂРµР¶РёРј.</p>`
      }
    </article>
  `;
}

function getKnowledgeTopicLabel(topicId) {
  return KNOWLEDGE_TOPICS[topicId] || KNOWLEDGE_TOPICS.all;
}

function getKnowledgeArticleRegime(articleId) {
  const value = KNOWLEDGE_ARTICLE_REGIMES[String(articleId)] || "all";
  if (value === "self" || value === "our" || value === "simplified") {
    return value;
  }
  return "all";
}

function getKnowledgeRegimeBadgeLabel(regime) {
  if (regime === "self") return "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№";
  if (regime === "our") return "РћРЈР ";
  if (regime === "simplified") return "РЈРїСЂРѕС‰РµРЅРєР°";
  return "";
}

function isKnowledgeArticleRelevantForRegime(articleRegime, selectedRegime) {
  if (articleRegime === "all") {
    return true;
  }
  return articleRegime === selectedRegime;
}

function getKnowledgeFno910Personalization() {
  const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const fno910Rows = DEADLINES_2026
    .filter((row) => row.type === "report" && row.regime === "simplified" && String(row.title || "").includes("910"))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const nextDeadline = fno910Rows.find((row) => new Date(row.date) >= today) || fno910Rows[0] || null;

  const planner = getTaxPlannerState();
  const monthlyIncome = Math.max(0, normalizeIncome(planner.income || getTaxPlannerFallbackIncome()));
  const estimatedHalfYearAmount = monthlyIncome * 6 * getActiveSimplifiedIpnRate();
  const deadlineLabel = nextDeadline
    ? new Intl.DateTimeFormat("ru-KZ", { day: "numeric", month: "long" }).format(new Date(nextDeadline.date))
    : "";

  return {
    deadlineLabel,
    amount: estimatedHalfYearAmount
  };
}

function getFilteredKnowledgeArticles() {
  const filters = {
    ...getDefaultKnowledgeFilters(),
    ...(state.knowledgeFilters || {})
  };

  const query = String(filters.query || "").trim().toLowerCase();

  return KNOWLEDGE_ARTICLES.filter((article) => {
    if (filters.topic !== "all" && article.topic !== filters.topic) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [
      article.title,
      article.summary,
      article.practical,
      article.when,
      article.formula,
      article.where,
      ...(Array.isArray(article.needs) ? article.needs : []),
      ...(Array.isArray(article.search) ? article.search : [])
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}

function buildKnowledgeCheatsheetText(article) {
  const lines = [];
  lines.push(article.title);
  lines.push(`РўРµРјР°: ${getKnowledgeTopicLabel(article.topic)}`);
  lines.push(`РљРѕРіРґР°: ${article.when}`);
  lines.push(`РљР°Рє СЃС‡РёС‚Р°С‚СЊ: ${article.formula}`);
  lines.push(`Р“РґРµ СЃРґРµР»Р°С‚СЊ: ${article.where}`);
  lines.push("");
  lines.push("Р§С‚Рѕ РЅСѓР¶РЅРѕ:");
  (article.needs || []).forEach((item) => lines.push(`- ${item}`));
  lines.push("");
  lines.push(`Р’Р°Р¶РЅРѕ: ${article.note}`);
  lines.push("РќРµ СЋСЂРёРґРёС‡РµСЃРєР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ. РџСЂР°РєС‚РёС‡РЅР°СЏ С€РїР°СЂРіР°Р»РєР° РґР»СЏ РѕСЂРёРµРЅС‚РёСЂР°.");
  return lines.join("\n");
}

function renderKnowledgePage() {
  state.knowledgeFilters = {
    ...getDefaultKnowledgeFilters(),
    ...(state.knowledgeFilters || {})
  };

  const selectedRegime = state.regime === "our" || state.regime === "self" ? state.regime : "simplified";
  const articles = [...getFilteredKnowledgeArticles()].sort((left, right) => {
    const leftRank = isKnowledgeArticleRelevantForRegime(getKnowledgeArticleRegime(left.id), selectedRegime) ? 0 : 1;
    const rightRank = isKnowledgeArticleRelevantForRegime(getKnowledgeArticleRegime(right.id), selectedRegime) ? 0 : 1;
    return leftRank - rightRank;
  });
  const totalArticles = KNOWLEDGE_ARTICLES.length;
  const activeTopic = normalizeKnowledgeTopic(String(state.knowledgeFilters.topic || "all"));

  const topicButtons = Object.entries(KNOWLEDGE_TOPICS)
    .map(
      ([id, label]) =>
        `<button type="button" class="${activeTopic === id ? "active" : ""}" data-knowledge-topic="${id}">${label}</button>`
    )
    .join("");

  const cards = articles
    .map((article) => {
      const articleRegime = getKnowledgeArticleRegime(article.id);
      const regimeBadgeLabel = getKnowledgeRegimeBadgeLabel(articleRegime);
      const isRelevantForSelectedRegime = isKnowledgeArticleRelevantForRegime(articleRegime, selectedRegime);
      const personalization = article.id === "fno-910" ? getKnowledgeFno910Personalization() : null;
      const needs = (article.needs || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      const personalizationHtml = personalization && personalization.deadlineLabel
        ? `<div class="knowledge-personal-note"><strong>Р’Р°С€ СЃР»РµРґСѓСЋС‰РёР№ СЃСЂРѕРє:</strong> ${escapeHtml(personalization.deadlineLabel)} В· <strong>Р Р°СЃС‡РµС‚РЅР°СЏ СЃСѓРјРјР°:</strong> ${fmt(personalization.amount)}</div>`
        : "";

      return `
        <article class="card knowledge-card${isRelevantForSelectedRegime ? "" : " knowledge-card-muted"}">
          <div class="knowledge-card-head">
            <div class="knowledge-card-meta-row">
              <span class="knowledge-topic-chip">${escapeHtml(getKnowledgeTopicLabel(article.topic))}</span>
              ${regimeBadgeLabel ? `<span class="knowledge-regime-chip">${escapeHtml(regimeBadgeLabel)}</span>` : ""}
            </div>
            <h3>${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.summary)}</p>
          </div>

          ${personalizationHtml}

          <div class="knowledge-practical">
            <strong>РџСЂР°РєС‚РёС‡РЅРѕ:</strong>
            <span>${escapeHtml(article.practical)}</span>
          </div>

          <div class="knowledge-facts">
            <div>
              <span>РљРѕРіРґР°</span>
              <b>${escapeHtml(article.when)}</b>
            </div>
            <div>
              <span>РљР°Рє СЃС‡РёС‚Р°С‚СЊ</span>
              <b>${escapeHtml(article.formula)}</b>
            </div>
            <div>
              <span>Р“РґРµ СЃРґРµР»Р°С‚СЊ</span>
              <b>${escapeHtml(article.where)}</b>
            </div>
          </div>

          <details class="knowledge-details">
            <summary>РћС‚РєСЂС‹С‚СЊ РјРёРЅРё-С‡РµРєР»РёСЃС‚</summary>
            <div class="knowledge-details-body">
              <p><strong>Р§С‚Рѕ РїРѕРґРіРѕС‚РѕРІРёС‚СЊ:</strong></p>
              <ul>${needs}</ul>
              <p class="knowledge-note">${escapeHtml(article.note)}</p>
            </div>
          </details>

          <div class="knowledge-actions-row">
            <button type="button" class="btn btn-ghost btn-xs" data-action="copy-knowledge" data-knowledge-id="${article.id}" data-default-label="РЎРєРѕРїРёСЂРѕРІР°С‚СЊ С€РїР°СЂРіР°Р»РєСѓ" title="РљРѕРїРёСЂСѓРµС‚ С‚РµРєСЃС‚ РєР°СЂС‚РѕС‡РєРё РґР»СЏ РѕС‚РїСЂР°РІРєРё Р±СѓС…РіР°Р»С‚РµСЂСѓ РёР»Рё РІ Р·Р°РјРµС‚РєРё" aria-label="РљРѕРїРёСЂРѕРІР°С‚СЊ С‚РµРєСЃС‚ РєР°СЂС‚РѕС‡РєРё РґР»СЏ РѕС‚РїСЂР°РІРєРё Р±СѓС…РіР°Р»С‚РµСЂСѓ РёР»Рё РІ Р·Р°РјРµС‚РєРё">РЎРєРѕРїРёСЂРѕРІР°С‚СЊ С€РїР°СЂРіР°Р»РєСѓ</button>
            <button type="button" class="btn btn-ghost btn-xs" data-page="calendar">РћС‚РєСЂС‹С‚СЊ РєР°Р»РµРЅРґР°СЂСЊ</button>
          </div>
        </article>
      `;
    })
    .join("");

  els.pageContent.innerHTML = `
    <article class="card knowledge-hero-card">
      <div>
        <h3>Р‘Р°Р·Р° Р·РЅР°РЅРёР№ РїРѕ Р Рљ</h3>
        <p>РџРѕРЅСЏС‚РЅС‹Рµ РѕС‚РІРµС‚С‹ РєРѕСЂРѕС‚РєРѕ: Р¤РќРћ, РћРџР’, РЎРћ, Р’РћРЎРњРЎ Рё РєР»СЋС‡РµРІС‹Рµ РЅР°Р»РѕРіРё Р±РµР· РїРµСЂРµРіСЂСѓР·Р° СЋСЂРёРґРёС‡РµСЃРєРёРј СЏР·С‹РєРѕРј.</p>
      </div>
      <div class="knowledge-hero-meta">
        <span>${articles.length} РёР· ${totalArticles} РєР°СЂС‚РѕС‡РµРє</span>
        <small>Р¤РѕСЂРјР°С‚: РїСЂР°РєС‚РёС‡РЅР°СЏ С€РїР°СЂРіР°Р»РєР°, РЅРµ СЋСЂРёРґРёС‡РµСЃРєР°СЏ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ</small>
      </div>
    </article>

    <article class="card mt-16 knowledge-filter-card">
      <div class="knowledge-chip-group">${topicButtons}</div>
      <form id="knowledgeFilterForm" class="knowledge-search-form">
        <label>
          РџРѕРёСЃРє РїРѕ Р±Р°Р·Рµ
          <input name="query" type="text" value="${escapeHtml(state.knowledgeFilters.query)}" placeholder="Р¤РќРћ, РћРџР’, РРџРќ, Р»РёРјРёС‚..." />
        </label>
        <input type="hidden" name="topic" value="${escapeHtml(activeTopic)}" />
        <div class="knowledge-filter-actions">
          <button class="btn btn-ghost" type="button" data-reset-knowledge-filters>РЎР±СЂРѕСЃРёС‚СЊ</button>
        </div>
      </form>
    </article>

    <div class="grid grid-2 mt-16 knowledge-grid">
      ${cards || '<article class="card knowledge-empty">РљР°СЂС‚РѕС‡РєРё РїРѕ С‚РµРєСѓС‰РµРјСѓ С„РёР»СЊС‚СЂСѓ РЅРµ РЅР°Р№РґРµРЅС‹. РџРѕРїСЂРѕР±СѓР№С‚Рµ СѓР±СЂР°С‚СЊ С„РёР»СЊС‚СЂ С‚РµРјС‹ РёР»Рё РїРѕРёСЃРє.</article>'}
    </div>

    <article class="card mt-16 knowledge-disclaimer-card">
      <h3>Р’Р°Р¶РЅРѕ</h3>
      <p>Р­С‚Р° Р±Р°Р·Р° Р·РЅР°РЅРёР№ РґР°РµС‚ РїСЂР°РєС‚РёС‡РЅС‹Р№ РѕСЂРёРµРЅС‚РёСЂ РґР»СЏ РРџ Рё СЃР°РјРѕР·Р°РЅСЏС‚С‹С…. РџРµСЂРµРґ СЃРґР°С‡РµР№ РѕС‚С‡РµС‚РЅРѕСЃС‚Рё Рё РѕРїР»Р°С‚РѕР№ РЅР°Р»РѕРіРѕРІ РІСЃРµРіРґР° СЃРІРµСЂСЏР№С‚Рµ РёС‚РѕРі РІ РѕС„РёС†РёР°Р»СЊРЅС‹С… СЃРµСЂРІРёСЃР°С… Р Рљ.</p>
    </article>
  `;
}
function renderFeedbackPage() {
  const webhookConfigured = Boolean(getFeedbackWebhookUrl());

  const categoryCards = FEEDBACK_CATEGORIES
    .map(
      (item, index) => `
        <label class="feedback-category-option">
          <input type="radio" name="category" value="${item.id}" ${index === 0 ? "checked" : ""} />
          <span class="feedback-category-body">
            <b>${item.label}</b>
            <small>${item.hint}</small>
          </span>
        </label>
      `
    )
    .join("");

  const initialStatus = webhookConfigured
    ? "РЎРѕРѕР±С‰РµРЅРёСЏ РѕС‚РїСЂР°РІР»СЏСЋС‚СЃСЏ РІ Google Sheets Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё."
    : "Р”РѕР±Р°РІСЊС‚Рµ feedbackWebhookUrl РІ config.js, С‡С‚РѕР±С‹ РІРєР»СЋС‡РёС‚СЊ РѕС‚РїСЂР°РІРєСѓ РІ Google Sheets.";

  const initialStatusClass = webhookConfigured ? "" : " error";

  els.pageContent.innerHTML = `
    <article class="card feedback-hero-card">
      <div>
        
        <h3>РћР±СЂР°С‚РЅР°СЏ СЃРІСЏР·СЊ</h3>
        <p class="text-muted">Р’С‹Р±РµСЂРёС‚Рµ РєР°С‚РµРіРѕСЂРёСЋ, РѕРїРёС€РёС‚Рµ СЃРёС‚СѓР°С†РёСЋ Рё РѕС‚РїСЂР°РІСЊС‚Рµ С„РѕСЂРјСѓ. Р—Р°СЏРІРєР° СЃСЂР°Р·Сѓ РїРѕРїР°РґС‘С‚ Рє РЅР°Рј вЂ” РѕС‚РІРµС‚РёРј РІ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ.</p>
      </div>
      <div class="feedback-hero-chips">
        <span>Р‘Р°РіРё</span>
        <span>РРґРµРё</span>
        <span>Р’РѕРїСЂРѕСЃС‹ РїРѕ РЅР°Р»РѕРіР°Рј</span>
      </div>
    </article>

    <div class="grid grid-2 mt-16 feedback-grid">
      <article class="card feedback-form-card">
        <h3>Р§РµРј РјРѕР¶РµРј РїРѕРјРѕС‡СЊ?</h3>
        <form id="feedbackForm" class="stack-form feedback-form">
          <div class="feedback-category-grid">
            ${categoryCards}
          </div>

          <label>РўРµРјР° (РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅРѕ)<input name="subject" type="text" placeholder="РљРѕСЂРѕС‚РєРѕ: С‡С‚Рѕ С…РѕС‚РёС‚Рµ СЂРµС€РёС‚СЊ" /></label>
          <label>РЎРѕРѕР±С‰РµРЅРёРµ<textarea name="message" rows="6" placeholder="РћРїРёС€РёС‚Рµ РїСЂРѕР±Р»РµРјСѓ РёР»Рё РёРґРµСЋ. Р”Р»СЏ Р±Р°РіР°: С€Р°РіРё -> РѕР¶РёРґР°РЅРёРµ -> С‡С‚Рѕ РїСЂРѕРёР·РѕС€Р»Рѕ." required></textarea></label>
          <label>Email РґР»СЏ РѕС‚РІРµС‚Р°<input name="replyEmail" type="email" value="${escapeHtml(state.userEmail || "")}" placeholder="you@email.com" /></label>

          <label class="feedback-consent-row">
            <input name="allowContact" type="checkbox" checked />
            <span>РњРѕР¶РЅРѕ СЃРІСЏР·Р°С‚СЊСЃСЏ СЃРѕ РјРЅРѕР№ РґР»СЏ СѓС‚РѕС‡РЅРµРЅРёСЏ РґРµС‚Р°Р»РµР№.</span>
          </label>

          <div class="feedback-actions-row">
            <button type="submit" class="btn btn-primary" ${webhookConfigured ? "" : "disabled"}>РћС‚РїСЂР°РІРёС‚СЊ РІ РїРѕРґРґРµСЂР¶РєСѓ</button>
            <button type="button" class="btn btn-ghost" data-page="knowledge">РћС‚РєСЂС‹С‚СЊ Р±Р°Р·Сѓ Р·РЅР°РЅРёР№</button>
          </div>
        </form>

        <p id="feedbackStatus" class="status feedback-status${initialStatusClass}">${initialStatus}</p>
      </article>

      <div class="feedback-side-stack">
        <article class="card feedback-side-card">
          <h3>Р§С‚Рѕ Р±СѓРґРµС‚ РїРѕСЃР»Рµ РѕС‚РїСЂР°РІРєРё</h3>
          <ul class="feedback-flow-list">
            <li>1. Р—Р°РїСЂРѕСЃ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РїРѕРїР°РґР°РµС‚ РІ Google Sheets.</li>
            <li>2. Р’РёРґРЅС‹ РєР°С‚РµРіРѕСЂРёСЏ, СЂРµР¶РёРј, РґР°С‚Р° Рё РІР°С€ С‚РµРєСЃС‚.</li>
            <li>3. Р•СЃР»Рё email СѓРєР°Р·Р°РЅ, СЃРјРѕР¶РµРј РѕС‚РІРµС‚РёС‚СЊ РЅР°РїСЂСЏРјСѓСЋ.</li>
          </ul>

          <div class="feedback-tip-box">
            <strong>РљР°Рє РЅР°РїРёСЃР°С‚СЊ, С‡С‚РѕР±С‹ Р±С‹СЃС‚СЂРµРµ РїРѕРјРѕС‡СЊ</strong>
            <p>Р”Р»СЏ Р±Р°РіР°: РґРѕР±Р°РІСЊС‚Рµ С€Р°РіРё Рё СЃРєСЂРёРЅС€РѕС‚. Р”Р»СЏ РЅР°Р»РѕРіРѕРІРѕРіРѕ РІРѕРїСЂРѕСЃР°: СѓРєР°Р¶РёС‚Рµ СЂРµР¶РёРј Рё РїРµСЂРёРѕРґ (РјРµСЃСЏС†/РїРѕР»СѓРіРѕРґРёРµ).</p>
          </div>
        </article>

        <article class="card feedback-contact-card">
          <h3>РћРїРµСЂР°С‚РёРІРЅС‹Р№ РѕС‚РІРµС‚</h3>
          <p class="feedback-sla">РћР±С‹С‡РЅРѕ РѕС‚РІРµС‡Р°РµРј РІ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ.</p>
          <a class="feedback-telegram-link" href="https://t.me/myesep" target="_blank" rel="noopener noreferrer">@myesep РІ Telegram</a>
          <p class="feedback-contact-note">Р•СЃР»Рё РІРѕРїСЂРѕСЃ СЃСЂРѕС‡РЅС‹Р№, СѓРґРѕР±РЅРµРµ РІСЃРµРіРѕ РЅР°РїРёСЃР°С‚СЊ РІ Telegram.</p>
        </article>
      </div>
    </div>
  `;
}
function maskSettingsIin(value) {
  const source = String(value || "").trim();
  if (!source) return "";

  if (source.length <= 4) {
    return "*".repeat(source.length);
  }

  const head = source.slice(0, 2);
  const tail = source.slice(-4);
  return `${head}****${tail}`;
}

function normalizeSettingsActivity(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (BUSINESS_ACTIVITY_OPTIONS.includes(raw)) return raw;

  const normalized = raw.toLowerCase();
  if (normalized.includes("it") || normalized.includes("Р°Р№С‚Рё")) return "IT Рё РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёРµ";
  if (normalized.includes("СЂРѕР·РЅРёС‡")) return "Р РѕР·РЅРёС‡РЅР°СЏ С‚РѕСЂРіРѕРІР»СЏ";
  if (normalized.includes("РѕРїС‚РѕРІ")) return "РћРїС‚РѕРІР°СЏ С‚РѕСЂРіРѕРІР»СЏ";
  if (normalized.includes("Р°СЂРµРЅРґ")) return "РђСЂРµРЅРґР° РЅРµРґРІРёР¶РёРјРѕСЃС‚Рё";
  if (normalized.includes("С‚СЂР°РЅСЃРїРѕСЂС‚") || normalized.includes("РїРµСЂРµРІРѕР·")) return "РўСЂР°РЅСЃРїРѕСЂС‚ Рё РїРµСЂРµРІРѕР·РєРё";

  return "Р”СЂСѓРіРѕРµ";
}

function getSettingsFormValues(form) {
  if (!(form instanceof HTMLFormElement)) {
    return {
      name: String(state.profile.name || "").trim(),
      iin: String(state.profile.iin || "").trim(),
      city: String(state.profile.city || "").trim(),
      activity: normalizeSettingsActivity(state.profile.activity),
      simplifiedRate: normalizeProfileSimplifiedRate(state.profile.simplifiedRate)
    };
  }

  const fd = new FormData(form);
  const iinInput = form.querySelector('#settingsIinInput');
  let iin = String(fd.get("iin") || "").trim();

  if (iinInput instanceof HTMLInputElement) {
    const full = String(iinInput.dataset.full || "").trim();
    const revealed = iinInput.dataset.revealed === "true";
    iin = revealed ? String(iinInput.value || "").trim() : (full || iin);
  }

  return {
    name: String(fd.get("name") || "").trim(),
    iin,
    city: String(fd.get("city") || "").trim(),
    activity: normalizeSettingsActivity(fd.get("activity")),
    simplifiedRate: normalizeProfileSimplifiedRate(fd.get("simplifiedRate"))
  };
}

function hasSettingsProfileChanges(nextValues) {
  return (
    String(nextValues.name || "") !== String(state.profile.name || "") ||
    String(nextValues.iin || "") !== String(state.profile.iin || "") ||
    String(nextValues.city || "") !== String(state.profile.city || "") ||
    String(nextValues.activity || "") !== normalizeSettingsActivity(state.profile.activity) ||
    normalizeProfileSimplifiedRate(nextValues.simplifiedRate) !== normalizeProfileSimplifiedRate(state.profile.simplifiedRate)
  );
}

function updateSettingsSaveButtonState(form) {
  if (!(form instanceof HTMLFormElement)) return;

  const saveBtn = form.querySelector('[data-action="save-settings"]');
  if (!(saveBtn instanceof HTMLButtonElement)) return;

  const nextValues = getSettingsFormValues(form);
  const changed = hasSettingsProfileChanges(nextValues);
  saveBtn.disabled = !changed;
}

function revealSettingsIinInput(input) {
  if (!(input instanceof HTMLInputElement)) return;

  const full = String(input.dataset.full || "").trim();
  input.value = full;
  input.dataset.revealed = "true";
  if (typeof input.setSelectionRange === "function") {
    const pos = input.value.length;
    input.setSelectionRange(pos, pos);
  }
}

function concealSettingsIinInput(input) {
  if (!(input instanceof HTMLInputElement)) return;

  const current = String(input.value || "").trim();
  if (input.dataset.revealed === "true") {
    input.dataset.full = current;
  } else if (!input.dataset.full) {
    input.dataset.full = current;
  }

  const masked = maskSettingsIin(input.dataset.full || current);
  input.dataset.masked = masked;
  input.dataset.revealed = "false";
  input.value = masked;
}

function renderSettingsPage() {
  refreshSubscriptionState();

  const ownerAccount = isOwnerProAccount();
  const trialPreviewEnabled = ownerAccount && state.ownerTrialPreview;
  const proActive = isProActive();
  const proDaysLeft = proActive ? getProDaysLeft(state.subscription) : 0;
  const trialActive = isTrialActive();
  const planLabel = proActive ? `Pro (${proDaysLeft} РґРЅ.)` : trialActive ? "Trial" : "Trial";
  const planTone = proActive ? "active" : "trial";
  const planHint = trialPreviewEnabled
    ? "РЎРёРјСѓР»СЏС†РёСЏ Trial РІРєР»СЋС‡РµРЅР° С‚РѕР»СЊРєРѕ РґР»СЏ С‚РµРєСѓС‰РµРіРѕ СЃРµР°РЅСЃР°. РџРѕСЃР»Рµ РїРµСЂРµР·Р°РіСЂСѓР·РєРё СЃС‚СЂР°РЅРёС†С‹ РІРµСЂРЅРµС‚СЃСЏ Pro."
    : proActive
      ? `Pro Р°РєС‚РёРІРµРЅ. Р”Рѕ РѕРєРѕРЅС‡Р°РЅРёСЏ РїСЂРѕР±РЅРѕРіРѕ РїРµСЂРёРѕРґР° ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}.`
      : "Trial: Р±Р°Р·РѕРІС‹Р№ СЂР°СЃС‡РµС‚ Рё СѓС‡РµС‚. Pro: РЅР°РїРѕРјРёРЅР°РЅРёСЏ, СЂР°СЃС€РёСЂРµРЅРЅР°СЏ Р°РЅР°Р»РёС‚РёРєР° Рё СЌРєСЃРїРѕСЂС‚.";
  const maskedIin = maskSettingsIin(state.profile.iin);
  const settingsCityValue = String(state.profile.city || "").trim();
  const profileRateOverride = normalizeProfileSimplifiedRate(state.profile.simplifiedRate);
  const autoSimplifiedRate = getSimplifiedIpnRateByCity(settingsCityValue);
  const activeSimplifiedRate = getActiveSimplifiedIpnRate();
  const simplifiedRateSource = profileRateOverride !== ""
    ? "СЂСѓС‡РЅР°СЏ СЃС‚Р°РІРєР°"
    : autoSimplifiedRate === IPN_RATE_910_ASTANA
      ? "Р°РІС‚Рѕ РїРѕ РіРѕСЂРѕРґСѓ: РђСЃС‚Р°РЅР°"
      : "Р°РІС‚Рѕ РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ";
  const settingsSimplifiedRateOptions = [
    `<option value="auto" ${profileRateOverride === "" ? "selected" : ""}>РђРІС‚Рѕ (${formatRatePercent(autoSimplifiedRate)})</option>`,
    `<option value="0.02" ${profileRateOverride === 0.02 ? "selected" : ""}>2%</option>`,
    `<option value="0.03" ${profileRateOverride === 0.03 ? "selected" : ""}>3%</option>`,
    `<option value="0.04" ${profileRateOverride === 0.04 ? "selected" : ""}>4%</option>`,
    `<option value="0.05" ${profileRateOverride === 0.05 ? "selected" : ""}>5%</option>`,
    `<option value="0.06" ${profileRateOverride === 0.06 ? "selected" : ""}>6%</option>`
  ].join("");
  const settingsCityOptions = [
    `<option value="" ${settingsCityValue ? "" : "selected"}>РќРµ СѓРєР°Р·Р°РЅ</option>`,
    ...SETTINGS_PROFILE_CITIES.map(
      (city) => `<option value="${escapeHtml(city)}" ${settingsCityValue === city ? "selected" : ""}>${escapeHtml(city)}</option>`
    )
  ];
  if (settingsCityValue && !SETTINGS_PROFILE_CITIES.includes(settingsCityValue)) {
    settingsCityOptions.unshift(
      `<option value="${escapeHtml(settingsCityValue)}" selected>${escapeHtml(settingsCityValue)} (С‚РµРєСѓС‰РёР№)</option>`
    );
  }
  const normalizedSettingsActivity = normalizeSettingsActivity(state.profile.activity);
  const settingsActivityOptions = BUSINESS_ACTIVITY_OPTIONS
    .map((option) => `<option value="${escapeHtml(option)}" ${normalizedSettingsActivity === option ? "selected" : ""}>${escapeHtml(option)}</option>`)
    .join("");

  const featureRows = Object.entries(PRO_FEATURES)
    .map(([key, label]) => {
      const enabled = canUseFeature(key);
      return `
        <li>
          <span>${label}</span>
          <b class="feature-state ${enabled ? "enabled" : "locked"}">${enabled ? "Р”РѕСЃС‚СѓРїРЅРѕ" : "РќРµРґРѕСЃС‚СѓРїРЅРѕ"}</b>
        </li>
      `;
    })
    .join("");

  els.pageContent.innerHTML = `
    <div class="grid grid-2">
      <article class="card">
        <h3>РџСЂРѕС„РёР»СЊ РРџ</h3>
        <form id="settingsForm" class="stack-form">
          <label>Р¤РРћ / РќР°РёРјРµРЅРѕРІР°РЅРёРµ<input name="name" type="text" value="${escapeHtml(state.profile.name)}" /></label>
          <label>Р‘РРќ/РРРќ
            <input id="settingsIinInput" name="iin" type="text" value="${escapeHtml(maskedIin)}" data-full="${escapeHtml(state.profile.iin)}" data-masked="${escapeHtml(maskedIin)}" data-revealed="false" autocomplete="off" placeholder="Р’РІРµРґРёС‚Рµ Р‘РРќ/РРРќ" />
          </label>
          <label>Р“РѕСЂРѕРґ
            <select name="city">
              ${settingsCityOptions.join("")}
            </select>
          </label>
          <label>Р’РёРґ РґРµСЏС‚РµР»СЊРЅРѕСЃС‚Рё
            <select name="activity">
              ${settingsActivityOptions}
            </select>
          </label>
          <label>РЎС‚Р°РІРєР° РРџРќ 910
            <select name="simplifiedRate">
              ${settingsSimplifiedRateOptions}
            </select>
          </label>
          <div class="settings-form-actions">
            <button type="submit" class="btn btn-primary" data-action="save-settings" disabled>РЎРѕС…СЂР°РЅРёС‚СЊ</button>
          </div>
        </form>
      </article>

      <article class="card">
        <h3>РЎС‚Р°РІРєРё 2026</h3>
        <table class="table">
          <tbody>
            <tr><td>РњР Рџ</td><td>${fmt(RATES.MRP)}</td></tr>
            <tr><td>РњР—Рџ</td><td>${fmt(RATES.MZP)}</td></tr>
            <tr><td>РћРџР’</td><td>10%</td></tr>
            <tr><td>РЎРћ (СѓРїСЂРѕС‰РµРЅРєР° 910)</td><td>5%</td></tr>
            <tr><td>РЎРћ (РћРЈР )</td><td>5%</td></tr>
            <tr><td>РРџРќ (СѓРїСЂРѕС‰РµРЅРєР° 910)</td><td>${formatRatePercent(activeSimplifiedRate)} В· ${simplifiedRateSource}</td></tr>
            <tr><td>Р’РћРЎРњРЎ</td><td>${fmt(RATES.VOSMS)}/РјРµСЃ</td></tr>
            <tr><td>Р›РёРјРёС‚ СѓРїСЂРѕС‰РµРЅРєРё</td><td>${fmt(SIMPLIFIED_LIMIT_ANNUAL)}/РіРѕРґ</td></tr>
            <tr><td>Р›РёРјРёС‚ СЃР°РјРѕР·Р°РЅСЏС‚РѕРіРѕ</td><td>${fmt(SELF_LIMIT_MONTHLY)}/РјРµСЃ В· ${fmt(SELF_LIMIT_ANNUAL)}/РіРѕРґ</td></tr>
          </tbody>
        </table>
      </article>
    </div>

    <article class="card mt-16 subscription-card">
      <div class="subscription-head">
        <h3>РўР°СЂРёС„ Рё РїРѕРґРїРёСЃРєР°</h3>
        <span class="subscription-badge ${planTone}">${planLabel}</span>
      </div>
      <p class="text-muted">${planHint}</p>
      <ul class="feature-list">
        ${featureRows}
      </ul>
      <div class="subscription-actions">
        ${ownerAccount ? `<button type="button" class="btn btn-ghost" data-action="simulate-owner-trial">${trialPreviewEnabled ? "Р’РµСЂРЅСѓС‚СЊ Pro РІРёРґ" : "РЎРёРјСѓР»РёСЂРѕРІР°С‚СЊ Trial"}</button>` : ""}
        <button type="button" class="btn btn-ghost" data-action="reset-onboarding-tour">РџРѕРєР°Р·Р°С‚СЊ С‚СѓСЂ РµС‰С‘ СЂР°Р·</button>
        <button type="button" class="btn btn-primary" data-action="open-pro">РћС‚РєСЂС‹С‚СЊ С‚Р°СЂРёС„С‹</button>
        <a href="#" class="subscription-manage-link" data-action="open-pro">РЈРїСЂР°РІР»РµРЅРёРµ РїРѕРґРїРёСЃРєРѕР№</a>
        <p id="onboardingTourResetHint" class="text-muted subscription-debug-hint">РЎР±СЂРѕСЃРёС‚ РїРѕРґСЃРєР°Р·РєРё С‚СѓСЂР° РЅР° Р“Р»Р°РІРЅРѕР№ РґР»СЏ РЅРѕРІС‹С… РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№ Р±РµР· РґРѕС…РѕРґРѕРІ.</p>
      </div>
    </article>
  `;

  const settingsForm = document.getElementById("settingsForm");
  if (settingsForm instanceof HTMLFormElement) {
    updateSettingsSaveButtonState(settingsForm);
  }
}

function getTaxLines(tax, regime) {
  if (regime === "self") {
    return [
      { label: "РћРџР’ (1%)", value: tax.opv },
      { label: "РћРџР’Р  (1%)", value: tax.opvr },
      { label: "РЎРћ (1%, РґРѕ 7 РњР—Рџ)", value: tax.so },
      { label: "Р’РћРЎРњРЎ (1%)", value: tax.vosms }
    ];
  }

  if (regime === "simplified") {
    const isMinimumScenario =
      Number(tax.ipn || 0) <= 0 &&
      Math.round(Number(tax.opv || 0)) === IP_MIN_OPV &&
      Math.round(Number(tax.opvr || 0)) === IP_MIN_OPVR &&
      Math.round(Number(tax.so || 0)) === IP_MIN_SO;

    return [
      { label: isMinimumScenario ? "РћРџР’ (10% РѕС‚ РњР—Рџ, РјРёРЅРёРјСѓРј)" : "РћРџР’ (10%)", value: tax.opv },
      { label: "РЎРћ (5%)", value: tax.so },
      { label: isMinimumScenario ? "РћРџР’Р  (3.5% РѕС‚ РњР—Рџ, РјРёРЅРёРјСѓРј)" : "РћРџР’Р  (3.5% РѕС‚ РґРѕС…РѕРґР°, РґРѕ 50 РњР—Рџ)", value: tax.opvr },
      { label: "Р’РћРЎРњРЎ", value: tax.vosms },
      { label: `РРџРќ (${formatRatePercent(Number(tax.ipnRate || 0) || getActiveSimplifiedIpnRate())})`, value: tax.ipn },
      { label: "РЎРѕС†. РЅР°Р»РѕРі", value: tax.socTax }
    ];
  }

  return [
    { label: "РћРџР’ (10%)", value: tax.opv },
    { label: "РћРџР’Р  (3.5% РѕС‚ РґРѕС…РѕРґР°, РґРѕ 50 РњР—Рџ)", value: tax.opvr },
    { label: "РЎРћ (5%)", value: tax.so },
    { label: "Р’РћРЎРњРЎ", value: tax.vosms },
    { label: "РЎРќ", value: tax.socTax },
    { label: "РРџРќ (10%)", value: tax.ipn }
  ];
}

function renderTaxBreakdown(tax, regime, options = {}) {
  const lines = getTaxLines(tax, regime);
  const showIpnPeriodNote = Boolean(options && options.ipnPeriodNote);

  return `
    <div>
      ${lines
        .map((line) => {
          const isIpn = showIpnPeriodNote && String(line.label || "").includes("РРџРќ");
          const baseLabel = escapeHtml(line.label);
          const labelHtml = isIpn
            ? `${baseLabel} <span class="tax-row-note">РїР»Р°С‚РёС‚СЃСЏ СЂР°Р· РІ РїРѕР»РіРѕРґР°</span>`
            : baseLabel;

          return `<div class="tax-row${isIpn ? " tax-row-ipn" : ""}"><span class="text-muted">${labelHtml}</span><strong class="amount-sensitive">${fmt(line.value)}</strong></div>`;
        })
        .join("")}
    </div>
  `;
}
function toggleDeadlineDone(id) {
  const row = DEADLINES_2026.find((item) => item.id === id);
  if (!row) return;

  const isDone = state.doneDeadlines.includes(id);

  if (isDone) {
    state.doneDeadlines = state.doneDeadlines.filter((x) => x !== id);
    markAllDeadlineTasks(id, row, false);
  } else {
    state.doneDeadlines.push(id);
    markAllDeadlineTasks(id, row, true);
  }

  markDeadlineManuallyTouched(id);
  saveState();

  if (state.page === "calendar") {
    renderCalendarPage();
  }

  if (state.landingDeadlineOpenId === id) {
    renderLandingDeadlineModal(id);
  }

  renderLandingDeadlines();
  trackEvent("deadline_toggle", { id, done: !isDone });
}

function regimeLabel(regime) {
  if (regime === "self") return "РЎР°РјРѕР·Р°РЅСЏС‚С‹Р№";
  if (regime === "our") return "РћРЈР ";
  return "РЈРїСЂРѕС‰РµРЅРєР° (910)";
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("ru-KZ");
}

function formatDateShort(dateString) {
  return new Date(dateString).toLocaleDateString("ru-KZ", { day: "numeric", month: "short" });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function trackEvent(name, payload = {}) {
  eventCounter += 1;
  const yandexMetrikaIdRaw = APP_CONFIG.analytics.yandexMetrikaId;
  const yandexMetrikaId = Number(yandexMetrikaIdRaw);

  if (window.gtag && APP_CONFIG.analytics.googleTagId) {
    window.gtag("event", name, payload);
  }

  if (window.plausible && APP_CONFIG.analytics.plausibleDomain) {
    window.plausible(name, { props: payload });
  }

  if (window.ym && Number.isFinite(yandexMetrikaId) && yandexMetrikaId > 0) {
    window.ym(yandexMetrikaId, "reachGoal", name, payload);
    if (name === "page_open" && payload && payload.page) {
      window.ym(yandexMetrikaId, "hit", `/${String(payload.page).trim()}`);
    }
  }

  console.info("[event]", eventCounter, name, payload);
}

function initAnalyticsProviders() {
  if (APP_CONFIG.analytics.googleTagId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(APP_CONFIG.analytics.googleTagId)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", APP_CONFIG.analytics.googleTagId);
  }

  if (APP_CONFIG.analytics.plausibleDomain) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = APP_CONFIG.analytics.plausibleDomain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }

  const yandexMetrikaIdRaw = APP_CONFIG.analytics.yandexMetrikaId;
  const yandexMetrikaId = Number(yandexMetrikaIdRaw);
  if (Number.isFinite(yandexMetrikaId) && yandexMetrikaId > 0) {
    (function loadYandexMetrika(d, w, id) {
      if (w.ym) return;

      const script = d.createElement("script");
      script.async = true;
      script.src = "https://mc.yandex.ru/metrika/tag.js";
      d.head.appendChild(script);

      w.ym = function ymProxy() {
        (w.ym.a = w.ym.a || []).push(arguments);
      };
      w.ym.l = Date.now();
      w.ym(id, "init", {
        ssr: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        ecommerce: "dataLayer",
        referrer: d.referrer,
        url: w.location.href
      });
    })(document, window, yandexMetrikaId);
  }
}

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (_err) {
    return null;
  }
}




















































































































































































































































































































































































































































