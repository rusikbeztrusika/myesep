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
// Only locations with a confirmed 2026 maslikhat act are listed here.
const SIMPLIFIED_CITY_RATE_RULES = {
  "астана": { rate: 0.03, source: "ставка для Астаны на 2026 по справочнику" },
  "алматы": { rate: 0.03, source: "ставка для Алматы на 2026 по справочнику" },
  "шымкент": { rate: 0.02, source: "ставка для Шымкента на 2026 по справочнику" },
  "актобе": { rate: 0.03, source: "ставка для Актобе на 2026 по справочнику" },
  "караганда": { rate: 0.02, source: "ставка для Караганды на 2026 по справочнику" },
  "кокшетау": { rate: 0.03, source: "ставка для Кокшетау на 2026 по справочнику" },
  "кызылорда": { rate: 0.02, source: "ставка для Кызылорды на 2026 по справочнику" },
  "семей": { rate: 0.02, source: "ставка для Семея на 2026 по справочнику" },
  "усть каменогорск": { rate: 0.02, source: "ставка для Усть-Каменогорска на 2026 по справочнику" },
  "жезказган": { rate: 0.03, source: "ставка для Жезказгана на 2026 по справочнику" },
  "сатпаев": { rate: 0.03, source: "ставка для Сатпаева на 2026 по справочнику" },
  "кентау": { rate: 0.02, source: "ставка для Кентау на 2026 по справочнику" },
  "косшы": { rate: 0.02, source: "ставка для Косшы на 2026 по справочнику" },
  "степногорск": { rate: 0.02, source: "ставка для Степногорска на 2026 по справочнику" },
  "нуринский район": { rate: 0.02, source: "ставка для Нуринского района на 2026 по справочнику" },
  "каркаралинский район": { rate: 0.02, source: "ставка для Каркаралинского района на 2026 по справочнику" },
  "ерейментауский район": { rate: 0.02, source: "ставка для Ерейментауского района на 2026 по справочнику" },
  "биржан сал": { rate: 0.02, source: "ставка для района Биржан сал на 2026 по справочнику" },
  "созакский район": { rate: 0.02, source: "ставка для Созакского района на 2026 по справочнику" },
  "келесский район": { rate: 0.02, source: "ставка для Келесского района на 2026 по справочнику" },
  "мактааральский район": { rate: 0.02, source: "ставка для Мактааральского района на 2026 по справочнику" },
  "успенский район": { rate: 0.03, source: "ставка для Успенского района на 2026 по справочнику" },
  "железинский район": { rate: 0.03, source: "ставка для Железинского района на 2026 по справочнику" }
};
const SIMPLIFIED_CITY_RATE_ALIASES = {
  "нур султан": "астана",
  "нурсултан": "астана",
  "устькаменогорск": "усть каменогорск",
  "оскемен": "усть каменогорск",
  "өскемен": "усть каменогорск",
  "көкшетау": "кокшетау",
  "жезказган": "жезказган",
  "жезқазған": "жезказган",
  "сатпаев город": "сатпаев",
  "косшы город": "косшы",
  "нуринский": "нуринский район",
  "каркаралинский": "каркаралинский район",
  "ерейментауский": "ерейментауский район",
  "созакский": "созакский район",
  "келесский": "келесский район",
  "мактааральский": "мактааральский район",
  "успенский": "успенский район",
  "железинский": "железинский район",
  "район биржан сал": "биржан сал"
};
const SELF_SOCIAL_COMPONENT_RATE = 0.01;
const IPN_RATE_SAMOZANYATY = 0;
const SELF_IPN_RATE = IPN_RATE_SAMOZANYATY;
const OPVR_RATE = 0.035;
const EMPLOYEE_VOSMS_RATE = 0.02;
const EMPLOYEE_OOSMS_RATE = 0.03;
const EMPLOYEE_IPN_RATE = 0.10;
const VOSMS_BASE = MZP_2026 * VOSMS_BASE_FACTOR;
const SIMPLIFIED_LIMIT_ANNUAL = MRP_2026 * SIMPLIFIED_LIMIT_ANNUAL_MRP;
const VYCHET_30MRP = 30 * MRP;
const OUR_SOC_TAX = 2 * MRP;
const OUR_EMPLOYEE_SOC_TAX = MRP;
const OPV_MAX_BASE = MZP_2026 * 50;
const OPV_MAX_AMOUNT = OPV_MAX_BASE * OPV_RATE;
const EMPLOYEE_VOSMS_MAX_AMOUNT = MZP_2026 * 20 * EMPLOYEE_VOSMS_RATE;
const EMPLOYEE_OOSMS_MAX_AMOUNT = MZP_2026 * 40 * EMPLOYEE_OOSMS_RATE;
const EMPLOYEE_OPVR_MAX_AMOUNT = OPV_MAX_BASE * OPVR_RATE;
const EMPLOYEE_SO_MIN_BASE = MZP_2026;
const EMPLOYEE_SO_MAX_BASE = MZP_2026 * 7;
const EMPLOYEE_OPVR_EXEMPT_BEFORE_BIRTHDATE = "1975-01-01";
const OUR_COMING_SOON_REASON = "ОУР скоро появится. Пока режим в разработке — рекомендуем использовать Упрощёнку (910) или Самозанятого.";

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

const MONTHS = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
const MONTHS_PREPOSITIONAL = ["январе", "феврале", "марте", "апреле", "мае", "июне", "июле", "августе", "сентябре", "октябре", "ноябре", "декабре"];
const MONTHS_ACCUSATIVE = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const LANDING_SELF_ACTIVITY_SOURCE_URL = "https://adilet.zan.kz/rus/docs/P2500000994";
const LANDING_SIMPLIFIED_ACTIVITY_SOURCE_URL = "https://zhts.kgd.gov.kz/ru/news/kakie-vidy-deyatelnosti-s-2026-goda-lishatsya-prava-na-uproshchennuyu-deklaraciyu-postanovlenie";
const LANDING_SELF_ACTIVITY_OPTIONS = [
  { id: "taxi", label: "Такси", status: "allowed" },
  { id: "courier", label: "Курьер / доставка", status: "allowed" },
  { id: "food_delivery", label: "Доставка еды", status: "allowed" },
  { id: "rent", label: "Аренда жилья", status: "allowed" },
  { id: "photo", label: "Фотограф", status: "allowed" },
  { id: "translation", label: "Переводы", status: "allowed" },
  { id: "education", label: "Обучение", status: "allowed" },
  { id: "cleaning", label: "Уборка", status: "allowed" },
  { id: "repair", label: "Ремонт техники", status: "allowed" },
  { id: "beauty", label: "Бьюти-услуги", status: "allowed" },
  { id: "other_check", label: "Другое / не уверен", status: "needs_check" },
  { id: "not_in_list", label: "Нет в перечне", status: "blocked" }
];
const SIMPLIFIED_ACTIVITY_OPTIONS = [
  { id: "retail_services", label: "Розница / услуги населению", status: "allowed" },
  { id: "it_creative", label: "IT / дизайн / обучение / бьюти", status: "allowed" },
  { id: "housing_rent", label: "Аренда жилья", status: "allowed" },
  { id: "delivery_transport_food", label: "Доставка / транспорт / общепит", status: "allowed" },
  { id: "trade_property_med", label: "Опт / коммерческая аренда / медицина", status: "needs_check" },
  { id: "other_check", label: "Другое / нужно проверить", status: "needs_check" },
  { id: "consulting_finance", label: "Консалтинг / бухучёт / финансы", status: "blocked" },
  { id: "construction_special", label: "Строительство / подакцизка / майнинг / рынок", status: "blocked" }
];
const CRM_INCOME_SOURCE = "crm";
const CRM_SALE_STATUSES = [
  { id: "draft", label: "Новая" },
  { id: "sent", label: "Выставлено" },
  { id: "cancelled", label: "Отменено" }
];

const LEGACY_DEADLINE_IDS_2026 = {
  "fno910-report-h2-prev": 1,
  "fno910-payment-h2-prev": 2,
  "payroll-11-prev": 21,
  "payroll-0": 15,
  "payroll-1": 16,
  "fno220-prev": 3,
  "payroll-2": 4,
  "fno200-q1": 17,
  "payroll-3": 5,
  "payroll-4": 6,
  "payroll-5": 9,
  "fno200-q2": 18,
  "fno910-report-h1": 7,
  "fno910-payment-h1": 8,
  "payroll-6": 10,
  "payroll-7": 11,
  "payroll-8": 12,
  "fno200-q3": 19,
  "payroll-9": 13,
  "payroll-10": 14,
  "fno200-q4": 20
};

const GENERATED_DEADLINE_SUFFIXES = {
  "fno910-report-h2-prev": 1,
  "fno910-payment-h2-prev": 2,
  "fno220-prev": 3,
  "fno910-report-h1": 4,
  "fno910-payment-h1": 5,
  "fno910-report-h2": 6,
  "fno910-payment-h2": 7,
  "payroll-11-prev": 9,
  "payroll-0": 10,
  "payroll-1": 11,
  "payroll-2": 12,
  "payroll-3": 13,
  "payroll-4": 14,
  "payroll-5": 15,
  "payroll-6": 16,
  "payroll-7": 17,
  "payroll-8": 18,
  "payroll-9": 19,
  "payroll-10": 20,
  "payroll-11": 21,
  "fno200-q1": 30,
  "fno200-q2": 31,
  "fno200-q3": 32,
  "fno200-q4": 33
};

function shiftDeadlineToNextBusinessDay(dateInput) {
  const sourceDate = dateInput instanceof Date ? new Date(dateInput.getTime()) : new Date(dateInput);
  if (Number.isNaN(sourceDate.getTime())) {
    return null;
  }

  while (sourceDate.getDay() === 0 || sourceDate.getDay() === 6) {
    sourceDate.setDate(sourceDate.getDate() + 1);
  }

  return sourceDate;
}

function formatDeadlineIsoDate(year, monthIndex, day) {
  const date = shiftDeadlineToNextBusinessDay(new Date(year, monthIndex, day));
  if (!date) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getDeadlineBaseYear() {
  return new Date().getFullYear();
}

function getGeneratedDeadlineId(baseYear, key, dateString) {
  if (baseYear === 2026 && Object.prototype.hasOwnProperty.call(LEGACY_DEADLINE_IDS_2026, key)) {
    return LEGACY_DEADLINE_IDS_2026[key];
  }

  const suffix = GENERATED_DEADLINE_SUFFIXES[key] || 99;
  return Number(dateString.replace(/-/g, "")) * 100 + suffix;
}

function createGeneratedDeadline(baseYear, key, payload) {
  const dateString = String(payload.date || "").trim();
  return {
    id: getGeneratedDeadlineId(baseYear, key, dateString),
    generatedKey: key,
    baseYear,
    ...payload
  };
}

function generateDeadlinesForYear(baseYear) {
  const rows = [
    createGeneratedDeadline(baseYear, "fno910-report-h2-prev", {
      date: formatDeadlineIsoDate(baseYear, 1, 15),
      title: `Сдача ФНО 910 за 2-е полугодие ${baseYear - 1}`,
      type: "report",
      regime: "simplified"
    }),
    createGeneratedDeadline(baseYear, "fno910-payment-h2-prev", {
      date: formatDeadlineIsoDate(baseYear, 1, 25),
      title: "Уплата налогов по ФНО 910",
      type: "payment",
      regime: "simplified"
    }),
    createGeneratedDeadline(baseYear, "payroll-11-prev", {
      date: formatDeadlineIsoDate(baseYear, 0, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[11]} ${baseYear - 1}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-0", {
      date: formatDeadlineIsoDate(baseYear, 1, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[0]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-1", {
      date: formatDeadlineIsoDate(baseYear, 2, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[1]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "fno220-prev", {
      date: formatDeadlineIsoDate(baseYear, 2, 31),
      title: `Декларация ИПН (220.00) за ${baseYear - 1}`,
      type: "report",
      regime: "our"
    }),
    createGeneratedDeadline(baseYear, "payroll-2", {
      date: formatDeadlineIsoDate(baseYear, 3, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[2]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "fno200-q1", {
      date: formatDeadlineIsoDate(baseYear, 4, 15),
      title: `Сдача ФНО 200.00 за 1 квартал ${baseYear}`,
      type: "report",
      regime: "employees",
      code: "fno200",
      quarter: 1,
      reportYear: baseYear
    }),
    createGeneratedDeadline(baseYear, "payroll-3", {
      date: formatDeadlineIsoDate(baseYear, 4, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[3]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-4", {
      date: formatDeadlineIsoDate(baseYear, 5, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[4]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-5", {
      date: formatDeadlineIsoDate(baseYear, 6, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[5]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "fno200-q2", {
      date: formatDeadlineIsoDate(baseYear, 7, 15),
      title: `Сдача ФНО 200.00 за 2 квартал ${baseYear}`,
      type: "report",
      regime: "employees",
      code: "fno200",
      quarter: 2,
      reportYear: baseYear
    }),
    createGeneratedDeadline(baseYear, "fno910-report-h1", {
      date: formatDeadlineIsoDate(baseYear, 7, 15),
      title: `Сдача ФНО 910 за 1-е полугодие ${baseYear}`,
      type: "report",
      regime: "simplified"
    }),
    createGeneratedDeadline(baseYear, "fno910-payment-h1", {
      date: formatDeadlineIsoDate(baseYear, 7, 25),
      title: "Уплата налогов по ФНО 910",
      type: "payment",
      regime: "simplified"
    }),
    createGeneratedDeadline(baseYear, "payroll-6", {
      date: formatDeadlineIsoDate(baseYear, 7, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[6]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-7", {
      date: formatDeadlineIsoDate(baseYear, 8, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[7]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-8", {
      date: formatDeadlineIsoDate(baseYear, 9, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[8]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "fno200-q3", {
      date: formatDeadlineIsoDate(baseYear, 10, 15),
      title: `Сдача ФНО 200.00 за 3 квартал ${baseYear}`,
      type: "report",
      regime: "employees",
      code: "fno200",
      quarter: 3,
      reportYear: baseYear
    }),
    createGeneratedDeadline(baseYear, "payroll-9", {
      date: formatDeadlineIsoDate(baseYear, 10, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[9]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "payroll-10", {
      date: formatDeadlineIsoDate(baseYear, 11, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[10]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "fno200-q4", {
      date: formatDeadlineIsoDate(baseYear + 1, 1, 15),
      title: `Сдача ФНО 200.00 за 4 квартал ${baseYear}`,
      type: "report",
      regime: "employees",
      code: "fno200",
      quarter: 4,
      reportYear: baseYear
    }),
    createGeneratedDeadline(baseYear, "payroll-11", {
      date: formatDeadlineIsoDate(baseYear + 1, 0, 25),
      title: `Уплата ОПВ, ОПВР, СО, ВОСМС за ${MONTHS_ACCUSATIVE[11]}`,
      type: "payment",
      regime: "all"
    }),
    createGeneratedDeadline(baseYear, "fno910-report-h2", {
      date: formatDeadlineIsoDate(baseYear + 1, 1, 15),
      title: `Сдача ФНО 910 за 2-е полугодие ${baseYear}`,
      type: "report",
      regime: "simplified"
    }),
    createGeneratedDeadline(baseYear, "fno910-payment-h2", {
      date: formatDeadlineIsoDate(baseYear + 1, 1, 25),
      title: "Уплата налогов по ФНО 910",
      type: "payment",
      regime: "simplified"
    })
  ];

  return rows.sort((a, b) => new Date(a.date) - new Date(b.date) || a.id - b.id);
}

const DEADLINES = generateDeadlinesForYear(getDeadlineBaseYear());
const DEADLINES_2026 = DEADLINES;

const STORAGE_KEY = "myesep_state_v1";
const ONBOARDING_TOUR_STORAGE_KEY = "onboardingTourDone";
const ONBOARDING_TOUR_FORCE_STORAGE_KEY = "onboardingTourForceOnce";
const ONBOARDING_ACCOUNT_METADATA_KEY = "myesep_onboarding";
const PROFILE_SETTINGS_METADATA_KEY = "profile_settings";
const OWNER_EMAIL_STORAGE_KEY = "myesep_owner_email_v1";
const HIDE_AMOUNTS_STORAGE_KEY = "hideAmounts";
const PROFILE_DEFAULT_NAME_PLACEHOLDERS = new Set(["ИП Сарсенов А."]);
const PROFILE_DEFAULT_CITY_PLACEHOLDERS = new Set(["Алматы"]);
const PROFILE_DEFAULT_ACTIVITY_PLACEHOLDERS = new Set(["IT-услуги"]);


let supabaseClient = null;
let eventCounter = 0;
let taxProfileUpsertTimer = null;
let pendingTaxProfileUpsert = null;
let taxProfileUpsertInFlight = false;
let lastTaxProfileUpsertKey = "";

const TRIAL_DAYS = 30;
const FREE_INCOME_MONTH_LIMIT = 5;
const PRO_PRICE_MONTHLY = 1990;
const PRO_PRICE_MONTHLY_LABEL = `${PRO_PRICE_MONTHLY.toLocaleString("ru-RU")} ₸/мес`;
const PRO_AFTER_TRIAL_TOOLTIP = `затем ${PRO_PRICE_MONTHLY_LABEL}`;
const ONBOARDING_FLOW_VERSION = 5;
const ONBOARDING_STEPS_TOTAL = 1;
const KAZAKHSTAN_CITIES = [
  "Алматы",
  "Астана",
  "Шымкент",
  "Актау",
  "Актобе",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Конаев",
  "Костанай",
  "Кызылорда",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Туркестан",
  "Уральск",
  "Усть-Каменогорск"
];
const SETTINGS_PROFILE_CITIES = [
  "Алматы",
  "Астана",
  "Шымкент",
  "Кокшетау",
  "Караганда",
  "Актобе",
  "Кызылорда",
  "Усть-Каменогорск",
  "Семей",
  "Жезказган",
  "Сатпаев",
  "Кентау",
  "Косшы",
  "Степногорск",
  "Нуринский район",
  "Каркаралинский район",
  "Ерейментауский район",
  "Биржан сал",
  "Созакский район",
  "Келесский район",
  "Мактааральский район",
  "Успенский район",
  "Железинский район"
];
const SETTINGS_PROFILE_CITY_POPULAR = ["Алматы", "Астана", "Шымкент"];
const BUSINESS_ACTIVITY_OPTIONS = SIMPLIFIED_ACTIVITY_OPTIONS.map((option) => option.label);
const PRO_FEATURES = {
  deadline_reminders: "Напоминания по срокам",
  unlimited_income_ops: "Безлимитные операции доходов",
  exports: "Экспорт CSV/Excel",
  advanced_analytics: "Расширенная аналитика"
};
const PRO_FEATURE_ICONS = {
  deadline_reminders: "bell",
  unlimited_income_ops: "infinity",
  exports: "file-down",
  advanced_analytics: "bar-chart-3"
};
const PRO_FEATURE_INFO = {
  deadline_reminders: {
    title: "Напоминания по срокам",
    text: "Сервис заранее напомнит о налоговых датах за 7, 3, 1 день и в день платежа. Так вы не пропустите срок и избежите штрафов."
  },
  unlimited_income_ops: {
    title: "Безлимитные операции доходов",
    text: "Добавляйте сколько угодно поступлений без ограничений Trial. Это удобно для бизнеса с частыми продажами и переводами."
  },
  exports: {
    title: "Экспорт CSV/Excel",
    text: "Выгружайте операции и расчеты в CSV/Excel для бухгалтера, архива и быстрой сверки с банком."
  },
  advanced_analytics: {
    title: "Расширенная аналитика",
    text: "Смотрите прогноз по налоговой нагрузке, риску выхода за лимит режима и принимайте решения заранее."
  }
};

const ONBOARDING_TOUR_STEPS = [
  {
    target: "month-income",
    icon: "wallet",
    title: "Доход за месяц",
    text: "Здесь будет сумма дохода за текущий месяц. Когда добавите реальные поступления, карточка обновится автоматически."
  },
  {
    target: "tax-load",
    icon: "receipt",
    title: "Платежи за месяц",
    text: "Здесь сервис показывает сумму к оплате за текущий месяц. Нажмите на карточку, чтобы открыть расшифровку платежей."
  },
  {
    target: "next-deadline",
    icon: "calendar",
    title: "Ближайший срок под рукой",
    text: "Здесь всегда видно ближайшую дату оплаты. Отсюда можно сразу перейти в календарь сроков и не пропустить платёж.",
    actionLabel: "Добавить доход",
    finalAction: "open_income"
  }
];

const ONBOARDING_TOUR_INCOME_STEPS = [
  {
    target: "income-form",
    icon: "wallet",
    title: "Добавляйте доходы здесь",
    text: "Укажите сумму, дату и категорию. После сохранения операция сразу попадёт в журнал, а расчёты обновятся автоматически.",
    actionLabel: "Понятно"
  }
];

const ONBOARDING_TOUR_SWIPE_THRESHOLD = 72;
const ONBOARDING_TOUR_PAGES = ["dashboard", "income"];
const PROFILE_DEFAULT_IIN_PLACEHOLDERS = new Set(["831204350124", "831204350125"]);

const INCOME_CATEGORY_PRESETS = [
  "Услуги",
  "Продажи товаров",
  "Маркетплейсы",
  "Подписки / абонплата",
  "Аренда",
  "Комиссии",
  "Прочие доходы"
];

const INCOME_CATEGORY_CUSTOM_VALUE = "__custom__";


const KNOWLEDGE_TOPICS = {
  all: "Все темы",
  reports: "ФНО и отчетность",
  contributions: "ОПВ / СО / ВОСМС",
  taxes: "ИПН и налоги",
  regimes: "Режимы и лимиты",
  payments: "Оплата и реквизиты"
};

const KNOWLEDGE_MODES = Object.freeze({
  hub: "hub",
  articles: "articles",
  faq: "faq"
});

const KNOWLEDGE_MODE_LABELS = Object.freeze({
  [KNOWLEDGE_MODES.hub]: "Хаб",
  [KNOWLEDGE_MODES.articles]: "Справочник",
  [KNOWLEDGE_MODES.faq]: "FAQ"
});

const KNOWLEDGE_HOME_CARDS = [
  {
    id: "contributions",
    section: "contributions",
    mode: KNOWLEDGE_MODES.articles,
    icon: "piggy-bank",
    iconColor: "#4DB8A0",
    title: "ОПВ, СО, ОПВР, ВОСМС",
    description: "Как считать и когда платить взносы"
  },
  {
    id: "regimes",
    section: "regimes",
    mode: KNOWLEDGE_MODES.articles,
    icon: "sliders-horizontal",
    iconColor: "#6366F1",
    title: "Режимы и лимиты",
    description: "Упрощёнка, ОУР, Самозанятый — условия и ограничения"
  },
  {
    id: "calendar",
    section: "calendar",
    mode: KNOWLEDGE_MODES.articles,
    icon: "calendar-clock",
    iconColor: "#F59E0B",
    title: "Сроки и календарь",
    description: "Когда и что платить, чтобы не было штрафов"
  },
  {
    id: "employees",
    section: "employees",
    mode: KNOWLEDGE_MODES.articles,
    icon: "users",
    iconColor: "#3B82F6",
    title: "Сотрудники",
    description: "Налоги за работников, ГПХ, трудовой договор"
  },
  {
    id: "penalties",
    section: "penalties",
    mode: KNOWLEDGE_MODES.articles,
    icon: "triangle-alert",
    iconColor: "#EF4444",
    title: "Штрафы и риски",
    description: "Что будет если просрочить или не сдать декларацию"
  },
  {
    id: "faq",
    section: "all",
    mode: KNOWLEDGE_MODES.faq,
    icon: "circle-help",
    iconColor: "#8B5CF6",
    title: "Частые вопросы",
    description: "Короткие ответы на популярные вопросы ИП"
  }
];

const KNOWLEDGE_ARTICLE_DETAILS = Object.freeze({
  opv: {
    fullName: "Обязательные пенсионные взносы",
    definition: "Ваши накопления на старость. Эти деньги идут на ваш личный пенсионный счёт в ЕНПФ — вы копите пенсию себе, не государству.",
    amount: `${fmt(IP_MIN_OPV)}/мес`,
    basis: `от минимума 1 МЗП (${fmt(RATES.MZP)})`
  },
  so: {
    fullName: "Социальные отчисления",
    definition: "Ваша социальная страховка. Из этих денег оплачиваются больничные, декретные, пособия по потере работы. Платите сейчас — получаете поддержку, если что-то случится.",
    amount: `${fmt(IP_MIN_SO)}/мес`,
    basis: `от минимума 1 МЗП (${fmt(RATES.MZP)})`
  },
  opvr: {
    fullName: "Обязательные пенсионные взносы работодателя",
    definition: "Дополнительный пенсионный взнос, который вы платите за себя ЗА СВОЙ СЧЁТ. В отличие от ОПВ, ОПВР не удерживается из дохода — это ваши дополнительные расходы как ИП.",
    amount: `${fmt(IP_MIN_OPVR)}/мес`,
    basis: `от минимума 1 МЗП (${fmt(RATES.MZP)})`
  },
  vosms: {
    fullName: "Взносы на обязательное социальное медицинское страхование",
    definition: "Ваш «полис» бесплатной медицины. Платите ВОСМС — получаете доступ к бесплатным анализам, приёмам врачей, операциям в рамках ОСМС. Не платите — доступ теряете.",
    amount: `${fmt(RATES.VOSMS)}/мес`,
    basis: "фиксированная сумма для всех ИП"
  },
  "ipn-910": {
    fullName: "Индивидуальный подоходный налог"
  },
  socialTax: {
    fullName: "Социальный налог"
  }
});

const KNOWLEDGE_CATALOG_SECTIONS = [
  {
    id: "start",
    title: "Старт ИП и регистрация",
    description: "Базовые шаги для запуска без штрафов в первый месяц.",
    articleTopic: "regimes",
    topics: [
      "Как выбрать режим на старте",
      "Какие коды ОКЭД выбрать",
      "Нужна ли онлайн-касса",
      "Как открыть ИП в eGov",
      "Какие сроки появляются сразу",
      "Первые платежи после регистрации"
    ]
  },
  {
    id: "regimes",
    title: "Режимы и лимиты",
    description: "Самозанятый, упрощенка, ОУР и переход между ними.",
    articleTopic: "regimes",
    topics: [
      "Лимит по самозанятому",
      "Лимит по упрощенке (910)",
      "Когда переходить на ОУР",
      "Как сменить режим без ошибок",
      "Риски при превышении лимита",
      "Как выбрать режим по доходу"
    ]
  },
  {
    id: "reports",
    title: "ФНО и отчеты",
    description: "Ключевые формы и дедлайны подачи отчетности.",
    articleTopic: "reports",
    topics: [
      "ФНО 910: сроки и подготовка",
      "ФНО 220: годовая декларация",
      "Частые ошибки в отчетах",
      "Как исправить отправленный отчет",
      "Что делать при просрочке ФНО",
      "Чек-лист перед отправкой"
    ]
  },
  {
    id: "contributions",
    title: "ОПВ, СО, ОПВР, ВОСМС",
    description: "Взносы и отчисления: как считать и когда платить.",
    articleTopic: "contributions",
    topics: [
      "ОПВ: база и ограничения",
      "СО: расчет и период",
      "ОПВР: когда обязателен",
      "ВОСМС: фикс и проверка",
      "Как сверять суммы в сервисах",
      "Разница между взносами и налогом"
    ]
  },
  {
    id: "taxes",
    title: "ИПН и налоги",
    description: "Расчет налога по режимам и сверка итоговой суммы.",
    articleTopic: "taxes",
    topics: [
      "ИПН на упрощенке: ставка",
      "ИПН на ОУР: база",
      "Налоговая нагрузка по сценарию",
      "Почему сумма в разных экранах отличается",
      "Как считать налог при нестабильном доходе",
      "Как учесть полугодовой платеж"
    ]
  },
  {
    id: "payments",
    title: "Оплата и реквизиты",
    description: "Куда платить, как не ошибиться в КБК и периоде.",
    articleTopic: "payments",
    topics: [
      "Платеж через Kaspi и e-Salyq",
      "Как проверить КБК",
      "Что писать в назначении платежа",
      "Как проверить, что платеж дошел",
      "Что делать при ошибочном платеже",
      "Как хранить квитанции"
    ]
  },
  {
    id: "income",
    title: "Доходы и учет",
    description: "Организация учета поступлений без бухгалтера.",
    articleTopic: "taxes",
    topics: [
      "Как вести доходы по категориям",
      "Как учитывать переводы и возвраты",
      "Чек по доходам перед дедлайном",
      "Месячный и годовой учет",
      "Экспорт в таблицу для бухгалтера",
      "Контроль чистого денежного потока"
    ]
  },
  {
    id: "calendar",
    title: "Календарь сроков",
    description: "Как не пропускать обязательства и управлять напоминаниями.",
    articleTopic: "payments",
    topics: [
      "Что значит «требует внимания»",
      "Как работает чеклист по сроку",
      "Напоминания за 7/3/1 день",
      "Напоминание в день срока",
      "Когда срок переносится",
      "Как закрывать обязательства"
    ]
  },
  {
    id: "penalties",
    title: "Штрафы и риски",
    description: "Типовые причины штрафов и как их предотвращать.",
    articleTopic: "payments",
    topics: [
      "Штраф за просрочку: от чего зависит",
      "Что делать при уведомлении о нарушении",
      "Как снизить риск просрочки",
      "Ошибки в назначении платежа",
      "Как действовать при блокировке",
      "Проверка статуса обязательств"
    ]
  },
  {
    id: "employees",
    title: "Если есть сотрудники",
    description: "Минимальный набор обязательств работодателя.",
    articleTopic: "contributions",
    topics: [
      "Какие взносы платит работодатель",
      "Сроки платежей по сотрудникам",
      "Как считать отчисления с зарплаты",
      "Типовые ошибки при выплатах",
      "Кадровые документы на старте",
      "Чеклист месяца для работодателя"
    ]
  },
  {
    id: "close",
    title: "Пауза и закрытие ИП",
    description: "Как корректно остановить деятельность или закрыть ИП.",
    articleTopic: "regimes",
    topics: [
      "Когда можно приостановить деятельность",
      "Какие обязательства закрыть перед паузой",
      "Закрытие ИП: пошагово",
      "Что делать с долгами и переплатой",
      "Проверка перед окончательным закрытием",
      "Сроки хранения документов"
    ]
  },
  {
    id: "digital",
    title: "Сервисы и интеграции",
    description: "Практика работы с eGov, e-Salyq и уведомлениями.",
    articleTopic: "reports",
    topics: [
      "Вход через ЭЦП и проблемы доступа",
      "Синхронизация данных между сервисами",
      "Как подключить Telegram-бота",
      "Как проверить отправку уведомления",
      "Где смотреть историю действий",
      "Резервный сценарий при сбое"
    ]
  }
];

const KNOWLEDGE_FAQ_ITEMS = [
  { id: "faq-regime-start", topic: "regimes", question: "Какой режим выбрать, если доход пока нестабильный?", answer: "Начните с режима, где проще исполнение обязательств и ниже риск штрафа. Проверяйте расчет на 2-3 сценариях дохода и меняйте режим до превышения лимита.", tags: ["режим", "старт", "лимит"] },
  { id: "faq-910-deadline", topic: "reports", question: "Когда сдавать ФНО 910?", answer: "Обычно 2 раза в год: до 15 февраля и до 15 августа. Для форм на 2026 год используйте новый КНП ИСНА и перед отправкой сверяйте актуальные сроки.", tags: ["фно 910", "срок", "отчет"] },
  { id: "faq-220-deadline", topic: "reports", question: "Когда подается ФНО 220 на ОУР?", answer: "Годовая декларация обычно подается до конца марта за предыдущий год. Проверяйте календарь сроков по своему статусу.", tags: ["фно 220", "оур", "годовой отчет"] },
  { id: "faq-opv-base", topic: "contributions", question: "От какой суммы считать ОПВ?", answer: "ОПВ считается от базы дохода по правилам вашего режима и ограничений. Внутри сервиса используйте расчет из карточки «Из чего состоит сумма».", tags: ["опв", "база", "взносы"] },
  { id: "faq-so-formula", topic: "contributions", question: "Почему СО отличается от ОПВ?", answer: "Потому что формула и база расчета отличаются. СО и ОПВ — это разные обязательные платежи с разной логикой начисления.", tags: ["со", "опв", "формула"] },
  { id: "faq-vosms-fixed", topic: "contributions", question: "ВОСМС всегда одинаковый?", answer: "Часто он фиксированный в пределах периода, но нормативы могут обновляться. Сверяйте сумму с актуальными правилами.", tags: ["восмс", "фикс", "ставка"] },
  { id: "faq-ipn-why-diff", topic: "taxes", question: "Почему сумма налога на главной и в сценарии может отличаться?", answer: "В карточках может показываться разная логика периода и включения отдельных платежей (например, ИПН с оплатой раз в полгода). Смотрите подпись под суммой.", tags: ["ипн", "сценарий", "разница сумм"] },
  { id: "faq-limit-exceed", topic: "regimes", question: "Что будет, если превысить лимит режима?", answer: "Появится риск доначислений и необходимости смены режима. Лучше заранее отслеживать прогресс лимита и переключаться вовремя.", tags: ["лимит", "превышение", "режим"] },
  { id: "faq-payment-date", topic: "payments", question: "До какого числа платить налоги и взносы?", answer: "Чаще всего до 25 числа следующего месяца, но есть исключения. Проверяйте конкретный срок в календаре обязательств.", tags: ["оплата", "срок", "25 число"] },
  { id: "faq-kbk-check", topic: "payments", question: "Как не ошибиться с КБК?", answer: "Перед оплатой сверяйте КБК, период и назначение. Сохраняйте квитанцию сразу после платежа.", tags: ["кбк", "реквизиты", "ошибка"] },
  { id: "faq-wrong-payment", topic: "payments", question: "Что делать, если платеж ушел не туда?", answer: "Подайте уточнение платежа по процедуре, доступной в официальных сервисах. Чем раньше это сделать, тем быстрее исправится статус.", tags: ["ошибочный платеж", "уточнение", "квитанция"] },
  { id: "faq-self-employed-limit", topic: "regimes", question: "Когда самозанятый становится невыгодным?", answer: "Когда доход растет и выходит за лимиты/условия режима. В этот момент сравнивайте альтернативы на калькуляторе.", tags: ["самозанятый", "лимит", "выгода"] },
  { id: "faq-our-expenses", topic: "taxes", question: "Почему на ОУР важно учитывать расходы?", answer: "На ОУР налоговая база зависит от финансового результата. Корректный учет расходов влияет на итоговую сумму налога.", tags: ["оур", "расходы", "налоговая база"] },
  { id: "faq-report-errors", topic: "reports", question: "Что чаще всего ломает отправку ФНО?", answer: "Неверный период, несоответствие сумм, пропущенные поля и технические ошибки подписи/доступа.", tags: ["фно", "ошибка отправки", "проверка"] },
  { id: "faq-late-report", topic: "reports", question: "Если отчет отправлен позже срока — что делать?", answer: "Сдайте как можно быстрее, зафиксируйте отправку и проверьте уведомления по начислениям/штрафам.", tags: ["просрочка", "отчет", "штраф"] },
  { id: "faq-employees-minimum", topic: "contributions", question: "Какие обязательства появляются при найме сотрудника?", answer: "Появляются дополнительные платежи и отчетность как у работодателя. Нужен отдельный ежемесячный чеклист.", tags: ["сотрудники", "работодатель", "взносы"] },
  { id: "faq-close-ip", topic: "regimes", question: "Можно ли просто перестать работать без закрытия ИП?", answer: "Нет, обязательства могут оставаться активными. Лучше официально приостановить деятельность или закрыть ИП по процедуре.", tags: ["закрытие ип", "приостановка", "обязательства"] },
  { id: "faq-documents-storage", topic: "payments", question: "Сколько хранить квитанции и подтверждения оплат?", answer: "Храните документы весь срок, который требуется регламентом и для безопасной сверки при проверках.", tags: ["квитанции", "документы", "хранение"] },
  { id: "faq-opvr-vs-opv", topic: "contributions", question: "Что такое ОПВР и чем отличается от ОПВ?", answer: "ОПВ — это 10% от базы, которые идут на ваш пенсионный счёт в ЕНПФ. ОПВР — дополнительный взнос 3,5%, который вы платите за свой счёт как работодатель (даже за себя). Оба идут на пенсию, но ОПВР — это дополнительная нагрузка сверх ОПВ. С 2026 года ставка ОПВР выросла с 2,5% до 3,5%.", tags: ["опвр", "опв", "пенсия"] },
  { id: "faq-no-income-social-payments", topic: "contributions", question: "Нужно ли платить соцплатежи, если дохода не было?", answer: "На упрощёнке при нулевом доходе обязательный платёж за себя — только ВОСМС 5 950 ₸ в месяц. ОПВ, ОПВР и СО при отсутствии дохода можно не платить. Если вы официально приостановили деятельность через e-Salyq, обязанность по уплате также приостанавливается.", tags: ["без дохода", "соцплатежи", "восмс"] },
  { id: "faq-rates-2026", topic: "contributions", question: "Как изменились ставки в 2026 году?", answer: "Основные изменения: ОПВР вырос с 2,5% до 3,5%. Базовый налоговый вычет для работников увеличен с 14 МРП до 30 МРП. МРП теперь 4 325 ₸ (был 3 932 ₸). МЗП не изменилась — 85 000 ₸. Введена прогрессивная шкала ИПН для физлиц: 10% до 8 500 МРП в год, 15% сверх этого. Для ИП на упрощёнке ставка с оборота осталась прежней — 4%.", tags: ["2026", "ставки", "опвр"] },
  { id: "faq-vosms-missed", topic: "contributions", question: "Что будет, если не платить ВОСМС?", answer: "Вы теряете доступ к бесплатной медицине по системе ОСМС. Это значит: платные анализы, консультации и процедуры. Скорая помощь и экстренная медицина по-прежнему бесплатны для всех, но плановое лечение — только за деньги. Восстановить доступ можно, погасив задолженность.", tags: ["восмс", "осмс", "задолженность"] },
  { id: "faq-kgd-debt-check", topic: "payments", question: "Как проверить задолженность перед КГД?", answer: "Через приложение e-Salyq Business → раздел «Задолженность». Или на сайте kgd.gov.kz в кабинете налогоплательщика по ИИН. Также можно проверить через Kaspi.kz → Платежи → Налоги → ввести ИИН. Рекомендуем проверять ежемесячно после оплаты взносов.", tags: ["кгд", "задолженность", "проверка"] },
  { id: "faq-regime-notice-march", topic: "regimes", question: "Нужно ли подавать уведомление о режиме до 1 марта?", answer: "Да. Если вы работали на упрощёнке в 2025 году и хотите остаться на ней в 2026 — необходимо подать уведомление о применении налогового режима до 1 марта 2026 года через Кабинет налогоплательщика. Без уведомления вас автоматически переведут на общеустановленный режим (ОУР).", tags: ["режим", "уведомление", "1 марта"] }
];

const FEEDBACK_CATEGORIES = [
  { id: "bug", label: "Баг", hint: "Что-то сломалось или работает не так", icon: "bug", iconColor: "#EF4444", iconBg: "#FEE2E2" },
  { id: "proposal", label: "Предложение", hint: "Идея, как сделать сервис лучше", icon: "lightbulb", iconColor: "#3B82F6", iconBg: "#E0F2FE" },
  { id: "tax_question", label: "Вопрос по налогам", hint: "Помощь с режимом, платежом или сроком", icon: "calculator", iconColor: "#4DB8A0", iconBg: "#E8F5F1" },
  { id: "other", label: "Другое", hint: "Любой вопрос или пожелание", icon: "message-circle", iconColor: "#6B7280", iconBg: "#F3F4F6" }
];
const KNOWLEDGE_ARTICLES = [
  {
    id: "fno-910",
    topic: "reports",
    title: "ФНО 910 (упрощенка)",
    summary: "Полугодовая форма для ИП на режиме 910.",
    practical: "Сдавайте 2 раза в год: до 15 февраля и 15 августа.",
    when: "15.02 и 15.08",
    formula: "По данным доходов и расчетам обязательных платежей за период.",
    where: "knp.kgd.gov.kz -> Новый КНП ИСНА -> ФНО 910.00",
    needs: ["ИИН/БИН и ЭЦП", "Доходы за период", "Суммы платежей"],
    note: "Это практичная шпаргалка. Для форм на 2026 год используйте новый КНП ИСНА.",
    search: ["фно", "910", "упрощенка", "декларация"]
  },
  {
    id: "fno-220",
    topic: "reports",
    title: "ФНО 220.00 (ОУР)",
    summary: "Годовая декларация ИПН для ИП на ОУР.",
    practical: "Закройте доходы и расходы заранее, чтобы отправить без спешки.",
    when: "Обычно до 31 марта",
    formula: "На базе годового налогового результата по ОУР.",
    where: "cabinet.kgd.gov.kz -> Декларации -> ФНО 220.00",
    needs: ["Доходы/расходы за год", "Подтверждающие документы", "ЭЦП"],
    note: "Сроки и требования могут обновляться, проверяйте официальный кабинет.",
    search: ["220", "оур", "ипн", "годовая"]
  },
  {
    id: "opv",
    topic: "contributions",
    title: "ОПВ",
    summary: "Пенсионные взносы, в модели сервиса 10% от базы.",
    practical: "Откладывайте ОПВ сразу при поступлении оплаты от клиента.",
    when: "Ежемесячно, обычно до 25 числа следующего месяца",
    formula: "В модели сервиса: 10% от базы с учетом минимального и максимального лимита.",
    where: "e-Salyq Business или банк (Kaspi/Halyk)",
    needs: ["Сумма дохода", "КБК/назначение", "Подтверждение платежа"],
    note: "Ставки и пределы меняются, перед оплатой сверяйте актуальные правила.",
    search: ["опв", "пенсионные", "10"]
  },
  {
    id: "so",
    topic: "contributions",
    title: "СО",
    summary: "Социальные отчисления, в модели сервиса 5%.",
    practical: "Считайте вместе с ОПВ, чтобы не делать двойную ручную проверку.",
    when: "Ежемесячно, обычно до 25 числа",
    formula: "В модели сервиса: (доход - ОПВ) * 5%.",
    where: "e-Salyq Business / банковские платежи",
    needs: ["Доход месяца", "Сумма ОПВ", "Реквизиты платежа"],
    note: "Проверяйте расчет под ваш режим и фактический статус.",
    search: ["со", "социальные", "5%"]
  },
  {
    id: "opvr",
    topic: "contributions",
    title: "ОПВР",
    summary: "Дополнительный пенсионный взнос работодателя, в модели сервиса 3.5% от базы.",
    practical: "Добавляйте ОПВР в ежемесячный набор платежей вместе с ОПВ и СО.",
    when: "Ежемесячно, обычно до 25 числа",
    formula: "В модели сервиса: 3.5% от базы с учетом минимального и максимального лимита.",
    where: "e-Salyq Business / банковские платежи",
    needs: ["Доход месяца", "База для расчёта", "Реквизиты платежа"],
    note: "Проверяйте ставку и базу в официальных сервисах перед оплатой.",
    search: ["опвр", "работодателя", "3.5%", "пенсионные"]
  },
  {
    id: "vosms",
    topic: "contributions",
    title: "ВОСМС",
    summary: "Медицинский взнос, в текущей модели сервиса фиксированный.",
    practical: "Включите напоминание и платите в один день с ОПВ/СО.",
    when: "Ежемесячно, обычно до 25 числа",
    formula: `В модели сервиса фиксировано: ${new Intl.NumberFormat("ru-KZ").format(RATES.VOSMS)} ₸.`,
    where: "e-Salyq Business / Kaspi / Halyk",
    needs: ["Сумма", "Реквизиты", "Чек оплаты"],
    note: "Фактическая сумма может обновляться регуляторно.",
    search: ["восмс", "осмс", "медицина"]
  },
  {
    id: "ipn-910",
    topic: "taxes",
    title: "ИПН на режиме 910",
    summary: "ИПН учитывается в структуре налога по упрощенке.",
    practical: "При скачках дохода сверяйте ИПН ежемесячно, а не только в конце периода.",
    when: "В рамках расчетов за период",
    formula: "В модели сервиса: доход * ставка региона (2-6%) ежемесячно.",
    where: "Калькулятор режимов + сверка в e-Salyq",
    needs: ["Доход периода", "Выбранный режим 910"],
    note: "Модель дает ориентир, финальную сумму сверяйте официально.",
    search: ["ипн", "910", "2-6%"]
  },
  {
    id: "esp-self",
    topic: "taxes",
    title: "СНР для самозанятого",
    summary: "Режим для самозанятых через специальное мобильное приложение.",
    practical: "Проверьте, что ваш вид деятельности входит в разрешённый перечень и что вы не зарегистрированы как ИП.",
    when: "Ежемесячно",
    formula: "В модели сервиса: 4% от дохода (ОПВ 1% + ОПВР 1% + СО 1% + ВОСМС 1%).",
    where: "e-Salyq Business / банк / специальное мобильное приложение",
    needs: ["Доход за месяц", "Разрешённый вид деятельности", "Подтверждение оплаты"],
    note: "Это уже не ЕСП. С 2026 года для самозанятых используется отдельный СНР через мобильное приложение.",
    search: ["самозанятый", "снр", "есп", "4%"]
  },
  {
    id: "limit-910",
    topic: "regimes",
    title: "Лимит режима 910",
    summary: "Упрощенка имеет годовой лимит дохода.",
    practical: "Следите за прогрессом лимита каждый месяц через дашборд.",
    when: "Постоянно в течение года",
    formula: `Лимит в модели: ${new Intl.NumberFormat("ru-KZ").format(SIMPLIFIED_LIMIT_ANNUAL)} ₸/год.`,
    where: "Главная -> Прогресс до лимита режима",
    needs: ["Доходы с начала года", "Текущий темп дохода"],
    note: "При превышении лимита нужна смена налогового режима.",
    search: ["лимит", "910", "2 595 000 000", "2595000000"]
  },
  {
    id: "payment-check",
    topic: "payments",
    title: "Платеж без ошибок: быстрый чек",
    summary: "Мини-шпаргалка перед отправкой любого платежа.",
    practical: "Перед оплатой проверьте КБК, период и назначение - это экономит дни на уточнениях.",
    when: "Перед каждым платежом",
    formula: "Сумма из дашборда -> сверка в официальном сервисе -> оплата.",
    where: "e-Salyq Business / кабинет КГД / банк",
    needs: ["КБК", "Период", "Сумма", "Квитанция"],
    note: "Если платеж ушел не туда, обычно потребуется процедура уточнения.",
    search: ["кбк", "оплата", "назначение", "реквизиты"]
  }
];

const KNOWLEDGE_ARTICLE_REGIMES = Object.freeze({
  "fno-910": "simplified",
  "fno-220": "our",
  "ipn-910": "simplified",
  "esp-self": "self",
  "limit-910": "simplified"
});

const FNO910_DECLARATION_TYPE_OPTIONS = Object.freeze([
  {
    id: "regular",
    label: "Очередная",
    knpValues: Object.freeze(["NEXT_PRIORITY"]),
    note: "Сейчас можно скачать только обычную форму без сценария исправления и допформы."
  }
]);

function getDefaultKnowledgeFilters() {
  return {
    query: "",
    topic: "all",
    mode: KNOWLEDGE_MODES.articles,
    section: "all"
  };
}

function getDefaultReportsState() {
  return {
    fno910PeriodKey: "",
    fno200PeriodKey: "",
    activeReportSection: "fno910",
    fno910DeclarationType: "regular",
    fno910NoticeNumber: "",
    fno910NoticeDate: "",
    fno910ResponsibleName: "",
    fno910DeclarationDate: ""
  };
}

function normalizeFno910PeriodKey(value) {
  const normalized = String(value || "").trim().toUpperCase();
  return /^\d{4}-H[12]$/.test(normalized) ? normalized : "";
}

function normalizeFno200PeriodKey(value) {
  const normalized = String(value || "").trim().toUpperCase();
  return /^\d{4}-Q[1-4]$/.test(normalized) ? normalized : "";
}

function normalizeReportsActiveSection(value) {
  return String(value || "").trim() === "fno200" ? "fno200" : "fno910";
}

function normalizeFno910DeclarationType(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return FNO910_DECLARATION_TYPE_OPTIONS.some((option) => option.id === normalized) ? normalized : "regular";
}

function normalizeFno910NoticeNumber(value) {
  return String(value || "").trim().slice(0, 64);
}

function normalizeFno910ResponsibleName(value) {
  return String(value || "").trim().slice(0, 255);
}

function normalizeFno910DeclarationDate(value) {
  return normalizeEmployeeDateValue(value, "");
}

function getFno910DeclarationTypeMeta(type = "regular") {
  return FNO910_DECLARATION_TYPE_OPTIONS.find((option) => option.id === normalizeFno910DeclarationType(type))
    || FNO910_DECLARATION_TYPE_OPTIONS[0];
}

function normalizeReportsState(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  const base = getDefaultReportsState();
  return {
    ...base,
    fno910PeriodKey: normalizeFno910PeriodKey(source.fno910PeriodKey || base.fno910PeriodKey),
    fno200PeriodKey: normalizeFno200PeriodKey(source.fno200PeriodKey || base.fno200PeriodKey),
    activeReportSection: normalizeReportsActiveSection(source.activeReportSection || base.activeReportSection),
    fno910DeclarationType: normalizeFno910DeclarationType(source.fno910DeclarationType || base.fno910DeclarationType),
    fno910NoticeNumber: normalizeFno910NoticeNumber(source.fno910NoticeNumber || base.fno910NoticeNumber),
    fno910NoticeDate: normalizeFno910DeclarationDate(source.fno910NoticeDate || base.fno910NoticeDate),
    fno910ResponsibleName: normalizeFno910ResponsibleName(source.fno910ResponsibleName || base.fno910ResponsibleName),
    fno910DeclarationDate: normalizeFno910DeclarationDate(source.fno910DeclarationDate || base.fno910DeclarationDate)
  };
}

function getFno910ReviewFields(reports = state.reports, profile = state.profile, referenceDate = new Date()) {
  const safeReports = normalizeReportsState(reports);
  const safeProfile = sanitizeProfile(profile);
  const todayIso = normalizeFno910DeclarationDate(referenceDate) || normalizeEmployeeDateValue(new Date(), "");
  const declarationTypeMeta = getFno910DeclarationTypeMeta(safeReports.fno910DeclarationType);
  return {
    declarationType: declarationTypeMeta.id,
    declarationTypeLabel: declarationTypeMeta.label,
    declarationTypeNote: declarationTypeMeta.note,
    declarationTypeKnpValues: [...declarationTypeMeta.knpValues],
    noticeNumber: safeReports.fno910NoticeNumber,
    noticeDate: safeReports.fno910NoticeDate,
    responsibleName: safeReports.fno910ResponsibleName || String(safeProfile.name || "").trim(),
    declarationDate: safeReports.fno910DeclarationDate || todayIso
  };
}

function normalizeKnowledgeTopic(value) {
  return Object.prototype.hasOwnProperty.call(KNOWLEDGE_TOPICS, value) ? value : "all";
}

function normalizeKnowledgeMode(value) {
  return Object.prototype.hasOwnProperty.call(KNOWLEDGE_MODE_LABELS, value) ? value : KNOWLEDGE_MODES.articles;
}

function normalizeKnowledgeSection(value) {
  if (value === "all") return "all";
  return KNOWLEDGE_CATALOG_SECTIONS.some((section) => section.id === value) ? value : "all";
}

function getKnowledgeSectionById(sectionId) {
  if (!sectionId || sectionId === "all") return null;
  return KNOWLEDGE_CATALOG_SECTIONS.find((section) => section.id === sectionId) || null;
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
  return PRO_FEATURES[featureKey] || "Pro-функция";
}

function getPaywallReasonText(featureKey) {
  if (featureKey === "deadline_reminders") {
    return "Авто-напоминания за 7, 3, 1 день и в день срока помогают не пропускать обязательные шаги.";
  }

  if (featureKey === "unlimited_income_ops") {
    return `В Trial доступно до ${FREE_INCOME_MONTH_LIMIT} операций доходов. В Pro лимит снят.`;
  }

  if (featureKey === "exports") {
    return "Экспорт CSV/Excel ускоряет передачу данных бухгалтеру и подготовку отчетности.";
  }

  if (featureKey === "advanced_analytics") {
    return "Расширенная аналитика показывает риск по лимиту заранее, чтобы вы не выходили за рамки режима.";
  }

  return "Эта функция доступна в Pro.";
}

function getPaywallValueContext(featureKey) {
  if (featureKey === "deadline_reminders") {
    return {
      title: "Снижаете риск просрочек и штрафов",
      text: "Сервис напомнит о сроках заранее и подскажет, что именно нужно сделать по каждому обязательству."
    };
  }

  if (featureKey === "unlimited_income_ops") {
    return {
      title: "Ведёте учёт без ограничений",
      text: "Добавляйте сколько угодно операций в месяц и не теряйте данные, когда бизнес растет."
    };
  }

  if (featureKey === "exports") {
    return {
      title: "Отдаёте данные в бухгалтерию за минуту",
      text: "Экспортируйте операции в удобный файл и сокращайте ручную работу перед отчетными датами."
    };
  }

  if (featureKey === "advanced_analytics") {
    return {
      title: "Видите риски по режиму заранее",
      text: "Прогноз по лимиту помогает вовремя скорректировать стратегию и не платить лишнего."
    };
  }

  return {
    title: "Контроль налогов без лишней рутины",
    text: "Все налоги, сроки и риски — в одном месте."
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

function formatDaysRu(days) {
  const value = Math.abs(Number(days) || 0);
  const last = value % 10;
  const lastTwo = value % 100;

  if (last === 1 && lastTwo !== 11) return `${value} день`;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return `${value} дня`;
  return `${value} дней`;
}

function hasUsedFreeProTrial(subscription = state.subscription) {
  const source = normalizeSubscription(subscription);
  return Boolean(String(source.proStartedAt || "").trim() || String(source.lastExpiredPlanExpiry || "").trim());
}

function refreshSubscriptionState() {
  state.subscription = normalizeSubscription(state.subscription);

  let changed = false;

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

  state.isPro = state.subscription.plan === "pro" && state.subscription.status === "active";

  if (changed) {
    saveState();
  }
}

function isProActive() {
  refreshSubscriptionState();
  return state.subscription.plan === "pro" && state.subscription.status === "active";
}

function isTrialActive() {
  refreshSubscriptionState();
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
    stepLabel.textContent = `Шаг ${safeStep} из 2`;
  }

  if (prevBtn) {
    prevBtn.disabled = safeStep === 1;
  }

  if (nextBtn) {
    nextBtn.textContent = safeStep === 1 ? "Подробнее" : "Свернуть";
  }
}

function renderProModal(featureKey = "") {
  const titleEl = document.getElementById("proModalTitle");
  const priceEl = document.getElementById("proModalPrice");
  const statusEl = document.getElementById("proModalStatus");
  const reasonEl = document.getElementById("proModalReason");
  const ctaEl = document.getElementById("proModalCta");
  const cancelBtnEl = document.getElementById("proModalCancelBtn");
  const ctaMetaEl = document.getElementById("proModalCtaMeta");
  const subnoteEl = document.getElementById("proModalSubnote");
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
  const freeTrialAlreadyUsed = hasUsedFreeProTrial(state.subscription) && !proActive;
  const isMobileCompact = isMobileViewport() && !proActive;

  const desktopListCopy = [
    "Напоминания за 7, 3, 1 день и в день срока",
    "Неограниченное количество операций доходов.",
    "Экспорт CSV / Excel для отчётов и бухгалтера",
    "Прогноз лимита режима и риск-подсветка"
  ];
  const mobileListCopy = [
    "Напоминания о сроках",
    "Безлимит по операциям дохода",
    "Экспорт CSV / Excel",
    "Аналитика и риск-подсветка"
  ];
  const activeListCopy = isMobileCompact ? mobileListCopy : desktopListCopy;
  listTextNodes.forEach((node, index) => {
    if (node && activeListCopy[index]) {
      node.textContent = activeListCopy[index];
    }
  });



  titleEl.textContent = `Pro — ${PRO_PRICE_MONTHLY_LABEL}`;
  if (priceEl) {
    priceEl.hidden = proActive;
    if (!proActive) {
      priceEl.textContent = "30 дней бесплатно";
      priceEl.setAttribute("title", PRO_AFTER_TRIAL_TOOLTIP);
    }
  }

  if (focusCardEl) {
    focusCardEl.classList.toggle("hidden", proActive);
  }

  if (proofEl) {
    proofEl.classList.toggle("hidden", proActive);
  }
  if (modalCardEl) {
    modalCardEl.classList.toggle("pro-mobile-compact", isMobileCompact);
    modalCardEl.classList.remove("is-step-1", "is-step-2");
  }
  if (mobileStepperEl) {
    mobileStepperEl.classList.add("hidden");
  }
  if (cancelBtnEl) {
    cancelBtnEl.hidden = !proActive;
  }

  if (proActive) {
    titleEl.textContent = "Пробный Pro активен";
    statusEl.innerHTML = `<span class="pro-status-badge active">Осталось ${formatDaysRu(proDaysLeft)}</span>`;


    statusEl.className = "pro-status active";
    ctaEl.textContent = "Все функции уже доступны";
    ctaEl.disabled = true;
    ctaEl.removeAttribute("title");
    if (ctaMetaEl) {
      ctaMetaEl.hidden = true;
      ctaMetaEl.textContent = "";
    }
    if (subnoteEl) {
      subnoteEl.hidden = false;
      subnoteEl.textContent = state.subscription.planExpiry
        ? `Пробный доступ активен до ${formatDateDayMonthLong(state.subscription.planExpiry)}.`
        : `Пробный доступ уже активен.`;
    }
  } else if (freeTrialAlreadyUsed) {
    statusEl.innerHTML = `<span class="pro-status-badge trial">Ваш план: Trial</span>`;
    statusEl.className = "pro-status trial";
    ctaEl.textContent = "Пробный период уже использован";
    ctaEl.disabled = true;
    ctaEl.removeAttribute("title");
    if (ctaMetaEl) {
      ctaMetaEl.hidden = true;
      ctaMetaEl.textContent = "";
    }
    if (subnoteEl) {
      subnoteEl.hidden = false;
      subnoteEl.textContent = "Тариф Pro — 1 990 ₸/мес · Без карты на старте";
    }
  } else {
    statusEl.innerHTML = `<span class="pro-status-badge trial">Ваш план: Trial</span>`;
    statusEl.className = "pro-status trial";
    ctaEl.textContent = "Активировать 30 дней бесплатно";
    ctaEl.disabled = false;
    ctaEl.setAttribute("title", PRO_AFTER_TRIAL_TOOLTIP);
    if (ctaMetaEl) {
      ctaMetaEl.textContent = "";
      ctaMetaEl.hidden = true;
    }
    if (subnoteEl) {
      subnoteEl.hidden = false;
      subnoteEl.textContent = "После 30 дней бесплатного периода · Без карты на старте";
    }
  }

  if (featureKey) {
    reasonEl.textContent = `${getFeatureTitle(featureKey)}: ${getPaywallReasonText(featureKey)}`;
  } else if (proActive) {
    reasonEl.textContent = "Поздравляем! Напоминания, экспорт и аналитика уже доступны в вашем аккаунте.";
  } else if (freeTrialAlreadyUsed) {
    reasonEl.textContent = "30 дней бесплатного Pro уже были активированы для этого аккаунта.";
  } else if (isMobileCompact) {
    reasonEl.textContent = "Полный доступ на 30 дней без карты и обязательств.";
  } else {
    reasonEl.textContent = "Получите полный доступ на 30 дней — без карты, без обязательств.";
  }

  const context = getPaywallValueContext(featureKey);
  if (focusTitleEl) focusTitleEl.textContent = context.title;
  if (focusTextEl) {
    focusTextEl.textContent = isMobileCompact ? "Все налоги, сроки и риски — в одном месте." : context.text;
  }
}
function requireFeature(featureKey, source = "") {
  if (canUseFeature(featureKey)) {
    return true;
  }

  state.paywallFeature = featureKey;
  saveState();
  renderProModal(featureKey);
  openModal(els.proModal);
  trackEvent("paywall_shown", { feature: featureKey, source });
  return false;
}

function activateProDemo(source = "manual") {
  if (hasUsedFreeProTrial(state.subscription) && !isProActive()) {
    showAppToast("Пробный Pro на 30 дней уже использован");
    if (els.proModal) {
      closeModal(els.proModal);
    }
    if (els.betaAccessModal) {
      closeModal(els.betaAccessModal);
    }
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
  showAppToast("Pro активирован на 30 дней: доступны напоминания, экспорт и аналитика.");
  trackEvent("upgrade_pro", { mode: "beta_free", source });
}
function ensureTrialIfNeeded() {
  refreshSubscriptionState();
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

  if (isProActive()) {
    bannerEl.className = "sidebar-beta-banner hidden";
    bannerEl.innerHTML = "";
    return;
  }

  // For the basic plan, keep only a calm entry point to the pricing page.
  bannerEl.className = "sidebar-beta-banner sidebar-beta-banner-compact";
  bannerEl.innerHTML = `
    <button type="button" class="beta-banner-btn" data-action="open-pro">Открыть тарифы</button>
  `;
}

function showBetaAccessModal(mode = "limit") {
  if (!els.betaAccessModal || !els.betaAccessTitle || !els.betaAccessText || !els.betaAccessPrimary) {
    return;
  }

  if (mode === "owner_only") {
    els.betaAccessTitle.textContent = "Доступ ограничен";
    els.betaAccessText.textContent = "Pro-режим доступен только для основного аккаунта владельца.";
    els.betaAccessPrimary.textContent = "Понятно";
    els.betaAccessPrimary.dataset.action = "close-beta-modal";
    els.betaAccessPrimary.removeAttribute("title");
  } else if (mode === "expired") {
    els.betaAccessTitle.textContent = "Пробный Pro завершён";
    els.betaAccessText.textContent = "30 дней Pro закончились. Сейчас доступна Trial-версия. Оплата подписки скоро будет доступна.";
    els.betaAccessPrimary.textContent = "Понятно";
    els.betaAccessPrimary.dataset.action = "close-beta-modal";
    els.betaAccessPrimary.removeAttribute("title");
  } else if (!hasUsedFreeProTrial(state.subscription)) {
    els.betaAccessTitle.textContent = "Лимит бесплатной версии";
    els.betaAccessText.textContent = "Вы добавили 5 операций — это лимит бесплатной версии. Активируйте 30 дней Pro бесплатно чтобы продолжить.";
    els.betaAccessPrimary.textContent = "Активировать бесплатно";
    els.betaAccessPrimary.dataset.action = "activate-beta-pro";
    els.betaAccessPrimary.setAttribute("title", PRO_AFTER_TRIAL_TOOLTIP);
  } else {
    els.betaAccessTitle.textContent = "Лимит бесплатной версии";
    els.betaAccessText.textContent = `Вы добавили ${FREE_INCOME_MONTH_LIMIT} операций — это лимит Trial. Пробный Pro на 30 дней уже использован.`;
    els.betaAccessPrimary.textContent = "Понятно";
    els.betaAccessPrimary.dataset.action = "close-beta-modal";
    els.betaAccessPrimary.removeAttribute("title");
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
  const header = ["Дата", "Категория", "Комментарий", "Сумма"];

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

function getDefaultCrmFilters() {
  return {
    query: "",
    status: "all"
  };
}

function normalizeCrmTab(value) {
  const allowed = ["overview", "sales", "clients"];
  const safe = String(value || "").trim().toLowerCase();
  return allowed.includes(safe) ? safe : "overview";
}

function normalizeCrmSalesPanel(value) {
  const allowed = ["sale", "payment"];
  const safe = String(value || "").trim().toLowerCase();
  return allowed.includes(safe) ? safe : "";
}

function normalizeCrmFilterStatus(value) {
  const allowed = ["all", "waiting", "overdue", "partial", "paid", "draft", "sent", "cancelled"];
  return allowed.includes(String(value || "").trim()) ? String(value || "").trim() : "all";
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
    timeframe: "year"
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
  return allowed.includes(value) ? value : "year";
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

function ensureCrmOwnerBinding() {
  if (!state.isLoggedIn) {
    return;
  }

  const fallbackEmail = normalizeEmail(
    state.userEmail
      || (state.onboarding && state.onboarding.userEmail)
      || ""
  );

  if (fallbackEmail && !normalizeEmail(state.userEmail)) {
    state.userEmail = fallbackEmail;
  }

  if (!getConfiguredOwnerEmails().length && !getStoredOwnerEmail() && fallbackEmail) {
    setStoredOwnerEmail(fallbackEmail);
  }
}

function isOwnerProAccount(email = state.userEmail) {
  let currentEmail = normalizeEmail(email);
  if (!currentEmail) {
    currentEmail = normalizeEmail(state.userEmail);
  }
  if (!currentEmail) {
    return false;
  }

  const configuredOwners = getConfiguredOwnerEmails();
  if (configuredOwners.length > 0) {
    return configuredOwners.includes(currentEmail);
  }

  const storedOwner = getStoredOwnerEmail();
  if (!storedOwner) {
    setStoredOwnerEmail(currentEmail);
    return true;
  }
  return Boolean(storedOwner && storedOwner === currentEmail);
}

function createDefaultOnboarding() {
  return {
    version: ONBOARDING_FLOW_VERSION,
    completed: false,
    step: 1,
    regime: "simplified",
    hasEmployees: "",
    income: 0,
    userEmail: "",
    userId: ""
  };
}

function createDefaultProfile() {
  return {
    name: "",
    iin: "",
    city: "",
    activity: "",
    selfActivity: "",
    hasEmployees: "",
    simplifiedRate: "",
    simplifiedRateMode: "auto",
    selfSocialIncomeBase: "",
    deadlineTrackingFrom: ""
  };
}

function normalizeSelfActivityChoice(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return LANDING_SELF_ACTIVITY_OPTIONS.some((option) => option.id === raw) ? raw : "";
}

function normalizeHasEmployeesPreference(value) {
  if (value === true || value === 1 || value === "1") return "yes";
  const normalized = String(value || "").trim().toLowerCase();
  if (["yes", "true", "да"].includes(normalized)) return "yes";
  if (["no", "false", "нет"].includes(normalized)) return "no";
  return "";
}

function normalizeSimplifiedRateMode(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return normalized === "manual" ? "manual" : "auto";
}

function sanitizeProfile(raw) {
  const base = createDefaultProfile();
  const source = raw && typeof raw === "object" ? raw : {};
  const next = {
    ...base,
    ...source
  };

  next.name = String(next.name || "").trim();
  next.iin = String(next.iin || "").trim();
  next.city = String(next.city || "").trim();
  next.activity = String(next.activity || "").trim();
  next.selfActivity = normalizeSelfActivityChoice(next.selfActivity);
  next.hasEmployees = normalizeHasEmployeesPreference(next.hasEmployees);
  const hasExplicitSimplifiedRateMode = Object.prototype.hasOwnProperty.call(source, "simplifiedRateMode");
  const normalizedSimplifiedRate = normalizeProfileSimplifiedRate(next.simplifiedRate);
  next.simplifiedRateMode = hasExplicitSimplifiedRateMode
    ? normalizeSimplifiedRateMode(next.simplifiedRateMode)
    : (normalizedSimplifiedRate !== "" && normalizedSimplifiedRate !== IPN_RATE_910 ? "manual" : "auto");
  next.simplifiedRate = normalizedSimplifiedRate;
  next.selfSocialIncomeBase = "";
  next.deadlineTrackingFrom = String(next.deadlineTrackingFrom || "").trim();

  if (next.simplifiedRateMode === "auto") {
    next.simplifiedRate = "";
  }

  if (PROFILE_DEFAULT_NAME_PLACEHOLDERS.has(next.name)) {
    next.name = "";
    if (PROFILE_DEFAULT_CITY_PLACEHOLDERS.has(next.city)) {
      next.city = "";
    }
    if (PROFILE_DEFAULT_ACTIVITY_PLACEHOLDERS.has(next.activity)) {
      next.activity = "";
    }
  }

  if (PROFILE_DEFAULT_IIN_PLACEHOLDERS.has(next.iin)) {
    next.iin = "";
  }

  return next;
}

function hasEmployeeFeatureEnabled(regime = state.regime, profile = state.profile, employees = state.employees) {
  if (regime === "self") {
    return false;
  }

  return normalizeEmployeeEntries(employees).some((employee) => !employee.archived);
}

function canAccessEmployeesSection(regime = state.regime) {
  return regime !== "self";
}

function canAccessCrmSection(email = state.userEmail) {
  return Boolean(state.isLoggedIn);
}

function normalizeSubscriptionByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeSubscription(value);
    return acc;
  }, {});
}

function normalizeIncomeEntries(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((row) => row && typeof row === "object")
    .map((row) => ({
      id: Number(row.id || 0) || 0,
      amount: normalizeIncome(row.amount),
      date: String(row.date || "").trim(),
      category: String(row.category || "").trim(),
      comment: String(row.comment || "").trim() === "Добавлено из онбординга"
        ? "Добавлено при первой настройке"
        : String(row.comment || "").trim(),
      source: String(row.source || "").trim(),
      sourceId: String(row.sourceId || row.source_id || "").trim()
    }))
    .filter((row) => row.id > 0 && row.amount >= 0 && row.date);
}

function getKazakhstanPhoneNationalDigits(value) {
  const raw = String(value || "");
  const compactRaw = raw.replace(/\s+/g, "");
  const digits = raw.replace(/\D/g, "");
  if (!digits) {
    return "";
  }

  if (compactRaw.startsWith("+7")) {
    return digits.slice(1, 11);
  }

  if (digits.startsWith("8")) {
    return digits.slice(1, 11);
  }

  if (digits.length > 10 && digits.startsWith("7")) {
    return digits.slice(1, 11);
  }

  return digits.slice(0, 10);
}

function formatKazakhstanPhone(value) {
  const raw = String(value || "");
  const compactRaw = raw.replace(/\s+/g, "");
  const digits = raw.replace(/\D/g, "");
  if (!digits) {
    return "";
  }

  if (compactRaw === "+7") {
    return "+7";
  }

  const nationalDigits = getKazakhstanPhoneNationalDigits(raw);
  if (!nationalDigits) {
    return compactRaw.startsWith("+7") || digits.startsWith("8") ? "+7" : "";
  }

  let formatted = "+7";
  if (nationalDigits.length > 0) {
    formatted += ` ${nationalDigits.slice(0, 3)}`;
  }
  if (nationalDigits.length > 3) {
    formatted += ` ${nationalDigits.slice(3, 6)}`;
  }
  if (nationalDigits.length > 6) {
    formatted += ` ${nationalDigits.slice(6, 8)}`;
  }
  if (nationalDigits.length > 8) {
    formatted += ` ${nationalDigits.slice(8, 10)}`;
  }
  return formatted;
}

function normalizeCrmCustomerContact(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  if (/[^0-9+\s()-]/.test(raw)) {
    return raw;
  }

  const digits = raw.replace(/\D/g, "");
  if (!digits) {
    return raw;
  }

  const formatted = formatKazakhstanPhone(raw);
  if (formatted === "+7") {
    return "";
  }

  return formatted || raw;
}

function normalizeCrmCustomers(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((row) => row && typeof row === "object")
    .map((row) => ({
      id: Number(row.id || 0) || 0,
      name: String(row.name || "").trim(),
      contact: normalizeCrmCustomerContact(row.contact),
      note: String(row.note || "").trim(),
      createdAt: String(row.createdAt || row.created_at || "").trim() || new Date().toISOString()
    }))
    .filter((row) => row.id > 0 && row.name);
}

function normalizeCrmSaleStatus(raw) {
  const safe = String(raw || "").trim().toLowerCase();
  if (safe === "paid") return "paid";
  return CRM_SALE_STATUSES.some((item) => item.id === safe) ? safe : "draft";
}

function normalizeCrmSales(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((row) => row && typeof row === "object")
    .map((row) => ({
      id: Number(row.id || 0) || 0,
      customerId: Number(row.customerId || row.customer_id || 0) || 0,
      title: String(row.title || "").trim(),
      amount: normalizeIncome(row.amount),
      date: String(row.date || row.saleDate || row.sale_date || "").trim(),
      dueDate: normalizeEmployeeDateValue(row.dueDate || row.due_date || "", ""),
      status: normalizeCrmSaleStatus(row.status),
      note: String(row.note || "").trim(),
      linkedIncomeId: Number(row.linkedIncomeId || row.linked_income_id || 0) || 0,
      createdAt: String(row.createdAt || row.created_at || "").trim() || new Date().toISOString(),
      updatedAt: String(row.updatedAt || row.updated_at || "").trim() || new Date().toISOString()
    }))
    .filter((row) => row.id > 0 && row.amount >= 0 && row.date);
}

function normalizeCrmPayments(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((row) => row && typeof row === "object")
    .map((row) => ({
      id: Number(row.id || 0) || 0,
      saleId: Number(row.saleId || row.sale_id || 0) || 0,
      amount: normalizeIncome(row.amount),
      date: String(row.date || row.paymentDate || row.payment_date || "").trim(),
      note: String(row.note || "").trim(),
      linkedIncomeId: Number(row.linkedIncomeId || row.linked_income_id || 0) || 0,
      createdAt: String(row.createdAt || row.created_at || "").trim() || new Date().toISOString(),
      updatedAt: String(row.updatedAt || row.updated_at || "").trim() || new Date().toISOString()
    }))
    .filter((row) => row.id > 0 && row.saleId > 0 && row.amount > 0 && row.date);
}

function normalizeCrmCustomersByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeCrmCustomers(value);
    return acc;
  }, {});
}

function normalizeCrmSalesByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeCrmSales(value);
    return acc;
  }, {});
}

function normalizeCrmPaymentsByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeCrmPayments(value);
    return acc;
  }, {});
}

function isCrmIncomeEntry(row) {
  return String(row && row.source || "").trim() === CRM_INCOME_SOURCE;
}

function normalizeEmployeesView(raw) {
  const view = String(raw || "").trim();
  if (view === "archive") return "archive";
  if (view === "review") return "review";
  return "active";
}

function compareDashboardMonthKeys(a, b) {
  const first = parseDashboardMonthKey(a);
  const second = parseDashboardMonthKey(b);
  if (!first && !second) return 0;
  if (!first) return 1;
  if (!second) return -1;
  return first.getTime() - second.getTime();
}

function normalizeEmployeeDateValue(rawValue, fallbackValue = "") {
  const source = String(rawValue || "").trim();
  const directMatch = source.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (directMatch) {
    const normalized = `${directMatch[1]}-${directMatch[2]}-${directMatch[3]}`;
    const year = Number(directMatch[1]);
    const month = Number(directMatch[2]);
    const day = Number(directMatch[3]);
    const parsed = new Date(year, month - 1, day);
    if (!Number.isNaN(parsed.getTime()) && parsed.getFullYear() === year && parsed.getMonth() === month - 1 && parsed.getDate() === day) {
      return normalized;
    }
  }

  const parsedDate = new Date(source);
  if (!Number.isNaN(parsedDate.getTime())) {
    return `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, "0")}-${String(parsedDate.getDate()).padStart(2, "0")}`;
  }

  const fallback = String(fallbackValue || "").trim();
  if (!fallback) return "";
  return normalizeEmployeeDateValue(fallback, "");
}

function parseEmployeeDateValue(rawValue) {
  const normalized = normalizeEmployeeDateValue(rawValue, "");
  if (!normalized) return null;
  const [year, month, day] = normalized.split("-").map((item) => Number(item));
  const parsed = new Date(year, month - 1, day);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed;
}

function compareEmployeeDateValues(a, b) {
  const first = parseEmployeeDateValue(a);
  const second = parseEmployeeDateValue(b);
  if (!first && !second) return 0;
  if (!first) return 1;
  if (!second) return -1;
  return first.getTime() - second.getTime();
}

function getMonthStartDateValue(monthKey) {
  const dateObj = parseDashboardMonthKey(monthKey);
  return dateObj
    ? `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}-01`
    : "";
}

function getMonthEndDateValue(monthKey) {
  const dateObj = parseDashboardMonthKey(monthKey);
  if (!dateObj) return "";
  const lastDay = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);
  return `${lastDay.getFullYear()}-${String(lastDay.getMonth() + 1).padStart(2, "0")}-${String(lastDay.getDate()).padStart(2, "0")}`;
}

function getEmployeeStartDateFallback() {
  return getMonthStartDateValue(getEmployeeStartMonthFallback()) || normalizeEmployeeDateValue(new Date(), "");
}

function normalizeEmployeeStartDate(rawValue, fallbackValue = "") {
  const source = String(rawValue || "").trim();
  if (/^\d{4}-\d{2}$/.test(source)) {
    const monthKey = normalizeEmployeeStartMonth(source, "");
    return monthKey ? getMonthStartDateValue(monthKey) : "";
  }

  const directDate = normalizeEmployeeDateValue(rawValue, "");
  if (directDate) {
    return directDate;
  }

  const monthKey = normalizeEmployeeStartMonth(rawValue, "");
  if (monthKey) {
    return getMonthStartDateValue(monthKey);
  }

  const fallbackDate = normalizeEmployeeDateValue(fallbackValue, "");
  if (fallbackDate) {
    return fallbackDate;
  }

  const fallbackMonth = normalizeEmployeeStartMonth(fallbackValue, "");
  if (fallbackMonth) {
    return getMonthStartDateValue(fallbackMonth);
  }

  return "";
}

function normalizeEmployeeEndDate(rawValue, fallbackValue = "") {
  const source = String(rawValue || "").trim();
  if (/^\d{4}-\d{2}$/.test(source)) {
    const monthKey = normalizeEmployeeEndMonth(source);
    return monthKey ? getMonthEndDateValue(monthKey) : "";
  }

  const directDate = normalizeEmployeeDateValue(rawValue, "");
  if (directDate) {
    return directDate;
  }

  const monthKey = normalizeEmployeeEndMonth(rawValue);
  if (monthKey) {
    return getMonthEndDateValue(monthKey);
  }

  const fallbackDate = normalizeEmployeeDateValue(fallbackValue, "");
  if (fallbackDate) {
    return fallbackDate;
  }

  const fallbackMonth = normalizeEmployeeEndMonth(fallbackValue);
  if (fallbackMonth) {
    return getMonthEndDateValue(fallbackMonth);
  }

  return "";
}

function normalizeEmployeeEndMonth(rawValue) {
  const source = String(rawValue || "").trim();
  if (!source) return "";
  return normalizeEmployeeStartMonth(source, "");
}

function normalizeEmployeeIin(rawValue) {
  return String(rawValue || "").replace(/\D/g, "").slice(0, 12);
}

function normalizeEmployeeBirthDate(rawValue) {
  const source = String(rawValue || "").trim();
  if (!source) return "";

  const directMatch = source.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (directMatch) {
    const normalized = `${directMatch[1]}-${directMatch[2]}-${directMatch[3]}`;
    const year = Number(directMatch[1]);
    const month = Number(directMatch[2]);
    const day = Number(directMatch[3]);
    const parsed = new Date(year, month - 1, day);
    if (!Number.isNaN(parsed.getTime()) && parsed.getFullYear() === year && parsed.getMonth() === month - 1 && parsed.getDate() === day) {
      return normalized;
    }
  }

  const parsedDate = new Date(source);
  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, "0")}-${String(parsedDate.getDate()).padStart(2, "0")}`;
}

function getEmployeeIinChecksum(value, weights) {
  return value
    .slice(0, 11)
    .split("")
    .reduce((sum, digit, index) => sum + Number(digit || 0) * Number(weights[index] || 0), 0) % 11;
}

function isValidEmployeeIin(rawValue) {
  const iin = normalizeEmployeeIin(rawValue);
  if (iin.length !== 12) return false;
  const firstChecksum = getEmployeeIinChecksum(iin, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  let checksum = firstChecksum;
  if (checksum === 10) {
    checksum = getEmployeeIinChecksum(iin, [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2]);
  }
  if (checksum === 10) return false;
  return checksum === Number(iin[11]);
}

function getEmployeeBirthDateFromIin(rawValue) {
  const iin = normalizeEmployeeIin(rawValue);
  if (!isValidEmployeeIin(iin)) {
    return "";
  }

  const yy = Number(iin.slice(0, 2));
  const mm = Number(iin.slice(2, 4));
  const dd = Number(iin.slice(4, 6));
  const centuryDigit = Number(iin[6]);
  const centuryMap = {
    1: 1800,
    2: 1800,
    3: 1900,
    4: 1900,
    5: 2000,
    6: 2000,
    7: 2100,
    8: 2100,
    9: 2200,
    0: 2200
  };
  const baseYear = centuryMap[centuryDigit];
  if (!baseYear) {
    return "";
  }

  const fullYear = baseYear + yy;
  const parsedDate = new Date(fullYear, mm - 1, dd);
  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }
  if (parsedDate.getFullYear() !== fullYear || parsedDate.getMonth() !== mm - 1 || parsedDate.getDate() !== dd) {
    return "";
  }

  return `${fullYear}-${String(mm).padStart(2, "0")}-${String(dd).padStart(2, "0")}`;
}

function getEmployeeGenderFromIin(rawValue) {
  const iin = normalizeEmployeeIin(rawValue);
  if (!isValidEmployeeIin(iin)) {
    return "";
  }

  const genderDigit = Number(iin[6]);
  if (!Number.isFinite(genderDigit)) {
    return "";
  }

  return genderDigit % 2 === 0 ? "female" : "male";
}

function getRetirementAgeByGender(gender) {
  if (gender === "female") return 61;
  if (gender === "male") return 63;
  return null;
}

function getAgeOnDate(birthDate, referenceDate = new Date()) {
  const normalizedBirthDate = normalizeEmployeeBirthDate(birthDate);
  if (!normalizedBirthDate) {
    return null;
  }

  const [year, month, day] = normalizedBirthDate.split("-").map((item) => Number(item));
  const safeReference = referenceDate instanceof Date && !Number.isNaN(referenceDate.getTime())
    ? referenceDate
    : new Date();
  let age = safeReference.getFullYear() - year;
  const monthDelta = safeReference.getMonth() + 1 - month;
  const dayDelta = safeReference.getDate() - day;
  if (monthDelta < 0 || (monthDelta === 0 && dayDelta < 0)) {
    age -= 1;
  }
  return age;
}

function isEmployeeAtRetirementAgeByIin(rawValue, referenceDate = new Date()) {
  const birthDate = getEmployeeBirthDateFromIin(rawValue);
  const gender = getEmployeeGenderFromIin(rawValue);
  const retirementAge = getRetirementAgeByGender(gender);
  const age = getAgeOnDate(birthDate, referenceDate);
  if (!birthDate || !retirementAge || age === null) {
    return false;
  }
  return age >= retirementAge;
}

function formatEmployeeBirthDateLabel(birthDate) {
  const normalized = normalizeEmployeeBirthDate(birthDate);
  if (!normalized) return "";
  return new Date(`${normalized}T00:00:00`).toLocaleDateString("ru-KZ");
}

function getEmployeeBirthDate(employee) {
  if (!employee || typeof employee !== "object") {
    return "";
  }

  return normalizeEmployeeBirthDate(employee.birthDate) || getEmployeeBirthDateFromIin(employee.iin);
}

function hasValidEmployeeIin(employee) {
  if (!employee || typeof employee !== "object") {
    return false;
  }

  const iin = normalizeEmployeeIin(employee.iin);
  return iin.length === 12 && isValidEmployeeIin(iin);
}

function isEmployeeExemptFromOpvrByBirthDate(employee) {
  const birthDate = getEmployeeBirthDate(employee);
  if (!birthDate) {
    return false;
  }
  return birthDate < EMPLOYEE_OPVR_EXEMPT_BEFORE_BIRTHDATE;
}

function normalizeEmployeeSalaryHistory(raw, startMonth, fallbackSalary = 0, endMonth = "") {
  const normalizedStartMonth = normalizeEmployeeStartMonth(startMonth, getEmployeeStartMonthFallback());
  const normalizedEndMonth = normalizeEmployeeEndMonth(endMonth);
  const source = Array.isArray(raw) ? raw : [];
  const byMonth = new Map();

  source
    .filter((row) => row && typeof row === "object")
    .forEach((row) => {
      const month = normalizeEmployeeStartMonth(
        row.month || row.startMonth || row.effectiveMonth || row.effective_month || row.date || "",
        normalizedStartMonth || getEmployeeStartMonthFallback()
      );
      const salary = normalizeIncome(row.salary ?? row.amount ?? row.value ?? 0);
      if (!month || salary <= 0) return;
      byMonth.set(month, { month, salary });
    });

  let rows = Array.from(byMonth.values()).sort((a, b) => compareDashboardMonthKeys(a.month, b.month));
  if (normalizedEndMonth) {
    rows = rows.filter((row) => compareDashboardMonthKeys(row.month, normalizedEndMonth) <= 0);
  }
  const safeFallbackSalary = normalizeIncome(fallbackSalary);

  if (rows.length === 0 && safeFallbackSalary > 0) {
    const baselineMonth = normalizedStartMonth || getEmployeeStartMonthFallback();
    if (baselineMonth && (!normalizedEndMonth || compareDashboardMonthKeys(baselineMonth, normalizedEndMonth) <= 0)) {
      rows = [{ month: baselineMonth, salary: safeFallbackSalary }];
    }
  }

  if (rows.length > 0 && normalizedStartMonth && compareDashboardMonthKeys(rows[0].month, normalizedStartMonth) > 0) {
    if (!normalizedEndMonth || compareDashboardMonthKeys(normalizedStartMonth, normalizedEndMonth) <= 0) {
      rows.unshift({
        month: normalizedStartMonth,
        salary: safeFallbackSalary > 0 ? safeFallbackSalary : rows[0].salary
      });
    }
  }

  return rows;
}

function normalizeEmployeeMonthlyAccruals(raw, startMonth, endMonth = "") {
  const normalizedStartMonth = normalizeEmployeeStartMonth(startMonth, getEmployeeStartMonthFallback());
  const normalizedEndMonth = normalizeEmployeeEndMonth(endMonth);
  const source = Array.isArray(raw) ? raw : [];
  const byMonth = new Map();

  source
    .filter((row) => row && typeof row === "object")
    .forEach((row) => {
      const month = normalizeEmployeeStartMonth(
        row.month || row.period || row.periodMonth || row.period_month || "",
        ""
      );
      const amount = normalizeIncome(row.amount ?? row.salary ?? row.value ?? 0);
      if (!month || amount <= 0) return;
      if (normalizedStartMonth && compareDashboardMonthKeys(month, normalizedStartMonth) < 0) return;
      if (normalizedEndMonth && compareDashboardMonthKeys(month, normalizedEndMonth) > 0) return;
      byMonth.set(month, { month, amount });
    });

  return Array.from(byMonth.values()).sort((a, b) => compareDashboardMonthKeys(a.month, b.month));
}

function normalizeEmployeeEntries(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((row) => row && typeof row === "object")
    .map((row) => {
      const startDateRaw = normalizeEmployeeStartDate(
        row.startDate || row.start_date || row.hireDate || row.hire_date || row.hiredFrom || row.startMonth || row.start_month || "",
        getEmployeeStartDateFallback()
      );
      const startMonth = normalizeEmployeeStartMonth(startDateRaw, getEmployeeStartMonthFallback());
      const startDate = startDateRaw || getMonthStartDateValue(startMonth) || getEmployeeStartDateFallback();

      const endDateRaw = normalizeEmployeeEndDate(
        row.endDate || row.end_date || row.dismissedAt || row.dismissed_at || row.endMonth || row.end_month || "",
        ""
      );
      const safeEndDate = endDateRaw && compareEmployeeDateValues(endDateRaw, startDate) < 0
        ? startDate
        : endDateRaw;
      const endMonth = safeEndDate ? normalizeEmployeeEndMonth(safeEndDate) : "";
      const salaryHistory = normalizeEmployeeSalaryHistory(
        row.salaryHistory || row.salary_history || row.salaryChanges || row.salary_changes,
        startMonth,
        row.salary,
        endMonth
      );
      const latestSalary = salaryHistory.length > 0
        ? normalizeIncome(salaryHistory[salaryHistory.length - 1].salary)
        : normalizeIncome(row.salary);
      const iin = normalizeEmployeeIin(row.iin || row.IIN || row.bin || "");
      const birthDate = normalizeEmployeeBirthDate(row.birthDate || row.birth_date || "") || getEmployeeBirthDateFromIin(iin);

      return {
        id: Number(row.id || 0) || 0,
        name: String(row.name || "").trim(),
        iin,
        birthDate,
        salary: latestSalary,
        startDate,
        endDate: safeEndDate,
        startMonth,
        endMonth,
        salaryHistory,
        monthlyAccruals: normalizeEmployeeMonthlyAccruals(
          row.monthlyAccruals || row.monthly_accruals || row.monthlyPayroll || row.monthly_payroll || row.monthlyOverrides || row.monthly_overrides,
          startMonth,
          endMonth
        ),
        archived: row.archived === true || row.archived === "true" || row.archived === 1 || String(row.status || "").trim() === "archived",
        contractType: String(row.contractType || "").trim() === "gph" ? "gph" : "labor",
        isResident: !(row.isResident === false || row.isResident === "false" || row.isResident === 0),
        isEaeuCitizen: row.isEaeuCitizen === true || row.isEaeuCitizen === "true" || row.is_eaeu_citizen === true || row.is_eaeu_citizen === "true" || row.eaeuCitizen === true || row.eaeuCitizen === "true" || row.eaeu === true || row.eaeu === "true" || row.eaes === true || row.eaes === "true" || row.isEaesCitizen === true || row.isEaesCitizen === "true",
        hasResidencePermit: row.hasResidencePermit === true || row.hasResidencePermit === "true" || row.has_residence_permit === true || row.has_residence_permit === "true" || row.hasPermanentResidence === true || row.hasPermanentResidence === "true" || row.has_permanent_residence === true || row.has_permanent_residence === "true" || row.hasResidenceCard === true || row.hasResidenceCard === "true" || row.residencePermit === true || row.residencePermit === "true",
        isPensioner: row.isPensioner === true || row.isPensioner === "true" || row.is_pensioner === true || row.is_pensioner === "true" || row.pensioner === true || row.pensioner === "true" || row.pensioner === 1,
        hasDisabilityExemption: row.hasDisabilityExemption === true || row.hasDisabilityExemption === "true" || row.has_disability_exemption === true || row.has_disability_exemption === "true" || row.disabilityExemption === true || row.disabilityExemption === "true" || row.disability_exemption === 1,
        opvByApplication: row.opvByApplication === true || row.opvByApplication === "true" || row.opv_by_application === true || row.opv_by_application === "true" || row.withholdOpvByApplication === true || row.withholdOpvByApplication === "true" || row.withhold_opv_by_application === 1,
        applyStandardDeduction: !(
          row.applyStandardDeduction === false
          || row.applyStandardDeduction === "false"
          || row.apply_standard_deduction === false
          || row.apply_standard_deduction === "false"
          || row.useStandardDeduction === false
          || row.useStandardDeduction === "false"
          || row.use_standard_deduction === false
          || row.use_standard_deduction === "false"
        )
      };
    })
    .filter((row) => row.id > 0 && row.name && row.salary > 0);
}

function normalizeEmployeesByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeEmployeeEntries(value);
    return acc;
  }, {});
}

function normalizeIncomesByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeIncomeEntries(value);
    return acc;
  }, {});
}

function normalizeProfileByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = sanitizeProfile(value);
    return acc;
  }, {});
}

function getAuthMetadataDisplayName(user) {
  const metadata = user && user.user_metadata && typeof user.user_metadata === "object"
    ? user.user_metadata
    : {};
  return String(metadata.full_name || metadata.name || "").trim();
}

function getAuthProfileSettings(user) {
  const metadata = user && user.user_metadata && typeof user.user_metadata === "object"
    ? user.user_metadata
    : {};
  const profileSettings = metadata[PROFILE_SETTINGS_METADATA_KEY] && typeof metadata[PROFILE_SETTINGS_METADATA_KEY] === "object"
    ? metadata[PROFILE_SETTINGS_METADATA_KEY]
    : {};

  return sanitizeProfile({
    name: String(profileSettings.name || metadata.full_name || metadata.name || "").trim(),
    iin: String(profileSettings.iin || "").trim(),
    city: String(profileSettings.city || "").trim(),
    activity: String(profileSettings.activity_type || profileSettings.activity || "").trim(),
    selfActivity: String(profileSettings.self_activity || profileSettings.selfActivity || "").trim(),
    hasEmployees: profileSettings.has_employees ?? profileSettings.hasEmployees ?? "",
    simplifiedRateMode: (() => {
      const explicitMode = normalizeSimplifiedRateMode(profileSettings.ipn_rate_mode ?? profileSettings.simplifiedRateMode ?? "");
      if (profileSettings.ipn_rate_mode !== undefined || profileSettings.simplifiedRateMode !== undefined) {
        return explicitMode;
      }

      const explicitOverride = normalizeProfileSimplifiedRate(
        profileSettings.ipn_rate_override ?? profileSettings.simplifiedRateOverride ?? ""
      );
      if (explicitOverride !== "") {
        return "manual";
      }

      const legacyRate = normalizeProfileSimplifiedRate(profileSettings.ipn_rate ?? profileSettings.simplifiedRate ?? "");
      return legacyRate !== "" && legacyRate !== IPN_RATE_910 ? "manual" : "auto";
    })(),
    simplifiedRate: (() => {
      const explicitOverride = normalizeProfileSimplifiedRate(
        profileSettings.ipn_rate_override ?? profileSettings.simplifiedRate ?? ""
      );
      if (explicitOverride !== "") {
        return explicitOverride;
      }

      const legacyMode = String(profileSettings.ipn_rate_mode || "").trim().toLowerCase();
      const legacyRate = normalizeProfileSimplifiedRate(profileSettings.ipn_rate);
      if (legacyMode === "manual") {
        return legacyRate;
      }

      // Legacy fallback:
      // older saves stored the active rate in ipn_rate even for "auto".
      // Treat non-default values as manual, but keep legacy 4% as auto.
      if (!legacyMode && legacyRate !== "" && legacyRate !== IPN_RATE_910) {
        return legacyRate;
      }

      return "";
    })(),
    selfSocialIncomeBase: profileSettings.self_social_income_base ?? profileSettings.selfSocialIncomeBase ?? "",
    deadlineTrackingFrom: String(profileSettings.deadline_tracking_from || profileSettings.deadlineTrackingFrom || "").trim()
  });
}

function applyAuthProfileDefaults(user) {
  const currentUserId = String(user && user.id ? user.id : state.userId || "").trim();
  const currentEmail = normalizeEmail(user && user.email ? user.email : state.userEmail || "");
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const profileByUser = normalizeProfileByUser(state.profileByUser);
  const authDisplayName = getAuthMetadataDisplayName(user);
  const storedProfile = identityKey ? profileByUser[identityKey] : null;
  const authProfileSettings = getAuthProfileSettings(user);
  const sanitized = sanitizeProfile({
    ...authProfileSettings,
    ...(storedProfile || createDefaultProfile())
  });

  if (!sanitized.name && authDisplayName) {
    sanitized.name = authDisplayName;
  }

  state.profile = sanitized;
  if (identityKey) {
    profileByUser[identityKey] = sanitized;
  }
  state.profileByUser = profileByUser;
}

function applyAuthSubscriptionDefaults(user) {
  const currentUserId = String(user && user.id ? user.id : state.userId || "").trim();
  const currentEmail = normalizeEmail(user && user.email ? user.email : state.userEmail || "");
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const subscriptionByUser = normalizeSubscriptionByUser(state.subscriptionByUser);
  const storedSubscription = identityKey ? subscriptionByUser[identityKey] : null;
  const nextSubscription = normalizeSubscription(storedSubscription || createDefaultSubscription());

  state.subscription = nextSubscription;
  if (identityKey) {
    subscriptionByUser[identityKey] = nextSubscription;
  }
  state.subscriptionByUser = subscriptionByUser;
}

function applyAuthIncomeDefaults(user) {
  const currentUserId = String(user && user.id ? user.id : state.userId || "").trim();
  const currentEmail = normalizeEmail(user && user.email ? user.email : state.userEmail || "");
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const incomesByUser = normalizeIncomesByUser(state.incomesByUser);
  const storedIncomes = identityKey ? incomesByUser[identityKey] : null;
  const nextIncomes = normalizeIncomeEntries(storedIncomes || []);

  state.incomes = nextIncomes;
  if (identityKey) {
    incomesByUser[identityKey] = nextIncomes;
  }
  state.incomesByUser = incomesByUser;
}

function applyAuthEmployeeDefaults(user) {
  const currentUserId = String(user && user.id ? user.id : state.userId || "").trim();
  const currentEmail = normalizeEmail(user && user.email ? user.email : state.userEmail || "");
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const employeesByUser = normalizeEmployeesByUser(state.employeesByUser);
  const storedEmployees = identityKey ? employeesByUser[identityKey] : null;
  const nextEmployees = normalizeEmployeeEntries(storedEmployees || []);

  state.employees = nextEmployees;
  if (identityKey) {
    employeesByUser[identityKey] = nextEmployees;
  }
  state.employeesByUser = employeesByUser;
}

function getCrmSaleStatusMeta(status) {
  const safeStatus = normalizeCrmSaleStatus(status);
  const map = {
    draft: { label: "Новая", className: "crm-status-draft" },
    sent: { label: "Выставлено", className: "crm-status-sent" },
    paid: { label: "Оплачено", className: "crm-status-paid" },
    cancelled: { label: "Отменено", className: "crm-status-cancelled" }
  };
  return map[safeStatus] || map.draft;
}

function getCrmCustomerById(customerId, customers = state.crmCustomers) {
  const id = Number(customerId || 0);
  if (!id) return null;
  return normalizeCrmCustomers(customers).find((row) => row.id === id) || null;
}

function normalizeCrmLookupText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function findCrmCustomerDuplicateByName(name, customers = state.crmCustomers, excludeId = 0) {
  const safeName = normalizeCrmLookupText(name);
  const blockedId = Number(excludeId || 0) || 0;
  if (!safeName) {
    return null;
  }
  return normalizeCrmCustomers(customers).find((row) => row.id !== blockedId && normalizeCrmLookupText(row.name) === safeName) || null;
}

function getNextCollectionId(rows) {
  return Math.max(0, ...((Array.isArray(rows) ? rows : []).map((row) => Number(row && row.id || 0)).filter((id) => Number.isFinite(id)))) + 1;
}

function getCrmSaleById(saleId, sales = state.crmSales) {
  const id = Number(saleId || 0);
  if (!id) return null;
  return normalizeCrmSales(sales).find((row) => row.id === id) || null;
}

function getCrmPaymentsForSale(saleId, payments = state.crmPayments) {
  const id = Number(saleId || 0);
  if (!id) return [];
  return normalizeCrmPayments(payments).filter((row) => Number(row.saleId || 0) === id);
}

function getCrmSalePaidTotal(saleId, payments = state.crmPayments, excludePaymentId = 0) {
  const excludeId = Number(excludePaymentId || 0) || 0;
  return getCrmPaymentsForSale(saleId, payments)
    .filter((row) => Number(row.id || 0) !== excludeId)
    .reduce((sum, row) => sum + Number(row.amount || 0), 0);
}

function getCrmSaleRemainingAmount(sale, payments = state.crmPayments, excludePaymentId = 0) {
  const saleAmount = Number(sale && sale.amount || 0);
  const paidTotal = getCrmSalePaidTotal(sale && sale.id, payments, excludePaymentId);
  return Math.max(0, saleAmount - paidTotal);
}

function isCrmSaleOverdue(sale, payments = state.crmPayments, referenceDate = new Date()) {
  if (!sale || normalizeCrmSaleStatus(sale.status) === "cancelled") {
    return false;
  }
  const dueDate = normalizeEmployeeDateValue(sale.dueDate || "", "");
  if (!dueDate) {
    return false;
  }
  const remaining = getCrmSaleRemainingAmount(sale, payments);
  if (remaining <= 0) {
    return false;
  }
  const today = normalizeEmployeeDateValue(referenceDate, "");
  if (!today) {
    return false;
  }
  return compareEmployeeDateValues(dueDate, today) < 0;
}

function getCrmPaymentStateMeta(sale, payments = state.crmPayments) {
  if (!sale) {
    return { id: "waiting", label: "Ожидает оплату", className: "crm-status-sent" };
  }

  const paidTotal = getCrmSalePaidTotal(sale.id, payments);
  if (normalizeCrmSaleStatus(sale.status) === "cancelled" && paidTotal <= 0) {
    return { id: "cancelled", label: "Отменено", className: "crm-status-cancelled" };
  }
  if (isCrmSaleOverdue(sale, payments)) {
    return { id: "overdue", label: "Просрочено", className: "crm-status-overdue" };
  }
  if (paidTotal <= 0) {
    return { id: "waiting", label: "Ожидает оплату", className: "crm-status-sent" };
  }
  if (paidTotal + 0.5 >= Number(sale.amount || 0)) {
    return { id: "paid", label: "Оплачено", className: "crm-status-paid" };
  }
  return { id: "partial", label: "Частично оплачено", className: "crm-status-partial" };
}

function buildCrmIncomeRow(payment, sales = state.crmSales, customers = state.crmCustomers, incomeId = 0) {
  const sale = getCrmSaleById(payment.saleId, sales);
  const customer = sale ? getCrmCustomerById(sale.customerId, customers) : null;
  const safeTitle = String(sale && sale.title || "").trim() || "Продажа";
  const safeCustomerName = customer ? customer.name : "";
  const commentParts = [];
  if (safeTitle) {
    commentParts.push(`Продажа: ${safeTitle}`);
  }
  if (safeCustomerName && safeCustomerName !== safeTitle) {
    commentParts.push(`Клиент: ${safeCustomerName}`);
  }
  return {
    id: incomeId,
    amount: normalizeIncome(payment.amount),
    date: String(payment.date || "").trim(),
    category: "Оплата",
    comment: commentParts.join(" · "),
    source: CRM_INCOME_SOURCE,
    sourceId: String(payment.id)
  };
}

function migrateLegacyCrmSalesToPayments() {
  const sales = normalizeCrmSales(state.crmSales);
  const payments = normalizeCrmPayments(state.crmPayments);
  const paymentsBySaleId = new Map();
  payments.forEach((row) => {
    const saleId = Number(row.saleId || 0);
    if (!saleId) return;
    const bucket = paymentsBySaleId.get(saleId) || [];
    bucket.push(row);
    paymentsBySaleId.set(saleId, bucket);
  });

  let nextPaymentId = getNextCollectionId(payments);
  let paymentsChanged = false;
  let salesChanged = false;
  const nextPayments = [...payments];
  const nextSales = sales.map((sale) => {
    if (normalizeCrmSaleStatus(sale.status) !== "paid") {
      return sale;
    }

    if ((paymentsBySaleId.get(sale.id) || []).length === 0 && Number(sale.amount || 0) > 0 && String(sale.date || "").trim()) {
      nextPayments.unshift({
        id: nextPaymentId++,
        saleId: sale.id,
        amount: normalizeIncome(sale.amount),
        date: String(sale.date || "").trim(),
        note: String(sale.note || "").trim(),
        linkedIncomeId: Number(sale.linkedIncomeId || 0) || 0,
        createdAt: String(sale.createdAt || "").trim() || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      paymentsChanged = true;
    }

    salesChanged = true;
    return {
      ...sale,
      status: "sent",
      linkedIncomeId: 0,
      updatedAt: new Date().toISOString()
    };
  });

  if (paymentsChanged) {
    state.crmPayments = normalizeCrmPayments(nextPayments);
  }
  if (salesChanged) {
    state.crmSales = normalizeCrmSales(nextSales);
  }
}

function syncCrmSalesWithIncomeJournal() {
  migrateLegacyCrmSalesToPayments();
  const manualIncomes = normalizeIncomeEntries(state.incomes).filter((row) => !isCrmIncomeEntry(row));
  const existingCrmIncomes = normalizeIncomeEntries(state.incomes).filter((row) => isCrmIncomeEntry(row));
  const existingCrmByPaymentId = new Map(existingCrmIncomes.map((row) => [String(row.sourceId || ""), row]));
  let nextIncomeId = Math.max(0, ...manualIncomes.map((row) => Number(row.id || 0)), ...existingCrmIncomes.map((row) => Number(row.id || 0)));

  const generatedCrmIncomes = [];
  const sales = normalizeCrmSales(state.crmSales);
  const saleIds = new Set(sales.map((row) => row.id));
  state.crmSales = sales;
  state.crmPayments = normalizeCrmPayments(state.crmPayments).map((payment) => {
    const hasLinkedSale = saleIds.has(Number(payment.saleId || 0));
    if (!hasLinkedSale) {
      return {
        ...payment,
        linkedIncomeId: 0,
        updatedAt: payment.updatedAt || new Date().toISOString()
      };
    }

    const existingIncome = existingCrmByPaymentId.get(String(payment.id)) || existingCrmIncomes.find((row) => Number(row.id || 0) === Number(payment.linkedIncomeId || 0));
    const incomeId = existingIncome ? Number(existingIncome.id || 0) : ++nextIncomeId;
    generatedCrmIncomes.push(buildCrmIncomeRow(payment, state.crmSales, state.crmCustomers, incomeId));

    return {
      ...payment,
      linkedIncomeId: incomeId,
      updatedAt: new Date().toISOString()
    };
  });

  state.incomes = normalizeIncomeEntries([...generatedCrmIncomes, ...manualIncomes]).sort((left, right) => {
    const timeDiff = new Date(right.date) - new Date(left.date);
    if (timeDiff !== 0) {
      return timeDiff;
    }
    return Number(right.id || 0) - Number(left.id || 0);
  });
}

function notifyCrmManagedIncome() {
  showAppToast("Эта запись создана из CRM. Изменяйте её в разделе CRM.");
}

function applyAuthCrmDefaults(user) {
  const currentUserId = String(user && user.id ? user.id : state.userId || "").trim();
  const currentEmail = normalizeEmail(user && user.email ? user.email : state.userEmail || "");
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const crmCustomersByUser = normalizeCrmCustomersByUser(state.crmCustomersByUser);
  const crmSalesByUser = normalizeCrmSalesByUser(state.crmSalesByUser);
  const crmPaymentsByUser = normalizeCrmPaymentsByUser(state.crmPaymentsByUser);
  const storedCustomers = identityKey ? crmCustomersByUser[identityKey] : null;
  const storedSales = identityKey ? crmSalesByUser[identityKey] : null;
  const storedPayments = identityKey ? crmPaymentsByUser[identityKey] : null;
  const nextCustomers = normalizeCrmCustomers(storedCustomers || []);
  const nextSales = normalizeCrmSales(storedSales || []);
  const nextPayments = normalizeCrmPayments(storedPayments || []);

  state.crmCustomers = nextCustomers;
  state.crmSales = nextSales;
  state.crmPayments = nextPayments;
  if (identityKey) {
    crmCustomersByUser[identityKey] = nextCustomers;
    crmSalesByUser[identityKey] = nextSales;
    crmPaymentsByUser[identityKey] = nextPayments;
  }
  state.crmCustomersByUser = crmCustomersByUser;
  state.crmSalesByUser = crmSalesByUser;
  state.crmPaymentsByUser = crmPaymentsByUser;
  syncCrmSalesWithIncomeJournal();
  if (identityKey) {
    state.crmSalesByUser[identityKey] = normalizeCrmSales(state.crmSales);
    state.crmPaymentsByUser[identityKey] = normalizeCrmPayments(state.crmPayments);
  }
}

function normalizeOnboarding(raw) {
  const base = createDefaultOnboarding();
  const source = raw && typeof raw === "object" ? raw : {};
  const versionInput = Number(source.version);
  const rawVersion = Number.isFinite(versionInput) && versionInput > 0 ? Math.round(versionInput) : base.version;
  const regime = ["self", "simplified", "our"].includes(source.regime) ? source.regime : base.regime;
  const hasEmployees = normalizeHasEmployeesPreference(source.hasEmployees ?? base.hasEmployees) || base.hasEmployees;
  const stepInput = Number(source.step);
  let step = Math.min(ONBOARDING_STEPS_TOTAL, Math.max(1, Math.round(Number.isFinite(stepInput) ? stepInput : base.step)));
  const income = normalizeIncome(source.income ?? base.income);
  const userEmail = normalizeEmail(source.userEmail || base.userEmail);
  const userId = String(source.userId || base.userId || "").trim();
  const completed = source.completed === true || source.completed === 1 || source.completed === "1" || source.completed === "true";

  if (!completed && rawVersion < ONBOARDING_FLOW_VERSION) {
    step = 1;
  }

  const version = Math.max(rawVersion, ONBOARDING_FLOW_VERSION);

  return {
    version,
    completed,
    step,
    regime,
    hasEmployees,
    income,
    userEmail,
    userId
  };
}

function getOnboardingIdentityKey(userId = state.userId, email = state.userEmail) {
  const normalizedUserId = String(userId || "").trim();
  if (normalizedUserId) {
    return `uid:${normalizedUserId}`;
  }

  const normalizedEmail = normalizeEmail(email);
  return normalizedEmail ? `email:${normalizedEmail}` : "";
}

function normalizeOnboardingByUser(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  return Object.entries(raw).reduce((acc, [key, value]) => {
    const safeKey = String(key || "").trim();
    if (!safeKey) return acc;
    acc[safeKey] = normalizeOnboarding(value);
    return acc;
  }, {});
}

function normalizeOnboardingTourPage(page) {
  return ONBOARDING_TOUR_PAGES.includes(page) ? page : "dashboard";
}

function createDefaultOnboardingAccountMeta() {
  return {
    flow: {
      completed: false,
      step: 1,
      regime: "simplified",
      hasEmployees: "",
      income: 0
    },
    tours: ONBOARDING_TOUR_PAGES.reduce((acc, page) => {
      acc[page] = false;
      return acc;
    }, {})
  };
}

function normalizeOnboardingAccountMeta(raw) {
  const base = createDefaultOnboardingAccountMeta();
  const source = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  const flowSource = source.flow && typeof source.flow === "object" ? source.flow : source;
  const toursSource = source.tours && typeof source.tours === "object" ? source.tours : {};
  const regime = ["self", "simplified", "our"].includes(flowSource.regime) ? flowSource.regime : base.flow.regime;
  const hasEmployees = normalizeHasEmployeesPreference(flowSource.hasEmployees ?? base.flow.hasEmployees) || base.flow.hasEmployees;
  const stepInput = Number(flowSource.step);
  const completed = flowSource.completed === true || flowSource.completed === 1 || flowSource.completed === "1" || flowSource.completed === "true";
  let step = completed
    ? ONBOARDING_STEPS_TOTAL
    : Math.min(ONBOARDING_STEPS_TOTAL, Math.max(1, Math.round(Number.isFinite(stepInput) ? stepInput : base.flow.step)));
  const income = normalizeIncome(flowSource.income ?? base.flow.income);

  if (!completed) {
    const versionInput = Number(flowSource.version);
    const rawVersion = Number.isFinite(versionInput) && versionInput > 0 ? Math.round(versionInput) : 0;
    if (rawVersion < ONBOARDING_FLOW_VERSION) {
      step = 1;
    }
  }

  return {
    flow: {
      completed,
      step,
      regime,
      hasEmployees,
      income
    },
    tours: ONBOARDING_TOUR_PAGES.reduce((acc, page) => {
      const value = toursSource[page];
      acc[page] = value === true || value === 1 || value === "1" || value === "true";
      return acc;
    }, {})
  };
}

function getOnboardingAccountMetaFromUser(user) {
  const metadata = user && user.user_metadata && typeof user.user_metadata === "object"
    ? user.user_metadata[ONBOARDING_ACCOUNT_METADATA_KEY]
    : null;
  return normalizeOnboardingAccountMeta(metadata);
}

function getOnboardingTourStorageIdentityKey(userId = state.userId, email = state.userEmail) {
  return getOnboardingIdentityKey(userId, email) || "guest";
}

function getScopedOnboardingTourStorageKey(page = state.page, userId = state.userId, email = state.userEmail) {
  return `${ONBOARDING_TOUR_STORAGE_KEY}:${normalizeOnboardingTourPage(page)}:${getOnboardingTourStorageIdentityKey(userId, email)}`;
}

function getScopedOnboardingTourForceStorageKey(userId = state.userId, email = state.userEmail) {
  return `${ONBOARDING_TOUR_FORCE_STORAGE_KEY}:${getOnboardingTourStorageIdentityKey(userId, email)}`;
}

function setLocalOnboardingTourDone(page, done, userId = state.userId, email = state.userEmail) {
  try {
    const key = getScopedOnboardingTourStorageKey(page, userId, email);
    if (done) {
      localStorage.setItem(key, "true");
    } else {
      localStorage.removeItem(key);
    }
  } catch (_error) {
    // ignore storage errors
  }
}

function getLocalOnboardingTourDone(page, userId = state.userId, email = state.userEmail) {
  try {
    return localStorage.getItem(getScopedOnboardingTourStorageKey(page, userId, email)) === "true";
  } catch (_error) {
    return false;
  }
}

function clearLocalOnboardingTourProgress(userId = state.userId, email = state.userEmail) {
  ONBOARDING_TOUR_PAGES.forEach((page) => {
    setLocalOnboardingTourDone(page, false, userId, email);
  });
  try {
    localStorage.removeItem(getScopedOnboardingTourForceStorageKey(userId, email));
  } catch (_error) {
    // ignore storage errors
  }
}

function syncOnboardingStateFromAccountUser(user) {
  if (!user || typeof user !== "object") {
    return;
  }

  const currentUserId = String(user.id || state.userId || "").trim();
  const currentEmail = normalizeEmail(user.email || state.userEmail || "");
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const remoteMeta = getOnboardingAccountMetaFromUser(user);
  const localTourState = ONBOARDING_TOUR_PAGES.reduce((acc, page) => {
    acc[page] = getLocalOnboardingTourDone(page, currentUserId, currentEmail);
    return acc;
  }, {});
  const mergedTours = ONBOARDING_TOUR_PAGES.reduce((acc, page) => {
    acc[page] = Boolean(remoteMeta.tours[page] || localTourState[page]);
    return acc;
  }, {});

  ONBOARDING_TOUR_PAGES.forEach((page) => {
    setLocalOnboardingTourDone(page, mergedTours[page], currentUserId, currentEmail);
  });

  if (!identityKey) {
    return;
  }

  const onboardingByUser = normalizeOnboardingByUser(state.onboardingByUser);
  const currentSnapshot = getCurrentOnboardingSnapshot();
  const snapshotMatchesCurrentUser =
    (currentSnapshot.userId && currentSnapshot.userId === currentUserId)
    || (!currentSnapshot.userId && currentSnapshot.userEmail === currentEmail);
  const hasStoredOnboardingForUser = Boolean(onboardingByUser[identityKey]);
  const localOnboarding = hasStoredOnboardingForUser
    ? onboardingByUser[identityKey]
    : snapshotMatchesCurrentUser
      ? normalizeOnboarding({
          ...currentSnapshot,
          userEmail: currentEmail,
          userId: currentUserId
        })
      : normalizeOnboarding({
          userEmail: currentEmail,
          userId: currentUserId
        });
  const completed = Boolean(remoteMeta.flow.completed || localOnboarding.completed);

  onboardingByUser[identityKey] = normalizeOnboarding({
    ...localOnboarding,
    version: ONBOARDING_FLOW_VERSION,
    completed,
    step: completed ? ONBOARDING_STEPS_TOTAL : remoteMeta.flow.step,
    regime: remoteMeta.flow.regime || localOnboarding.regime,
    hasEmployees: remoteMeta.flow.hasEmployees || localOnboarding.hasEmployees,
    income: remoteMeta.flow.income ?? localOnboarding.income,
    userEmail: currentEmail,
    userId: currentUserId
  });
  state.onboardingByUser = onboardingByUser;

  if (!remoteMeta.flow.completed && localOnboarding.completed && (hasStoredOnboardingForUser || snapshotMatchesCurrentUser)) {
    void persistOnboardingAccountState({
      flow: {
        completed: true,
        step: ONBOARDING_STEPS_TOTAL,
        regime: localOnboarding.regime,
        hasEmployees: localOnboarding.hasEmployees,
        income: localOnboarding.income
      }
    }, { user });
  }

  const hasTourBackfill = ONBOARDING_TOUR_PAGES.some((page) => localTourState[page] && !remoteMeta.tours[page]);
  if (hasTourBackfill) {
    void persistOnboardingAccountState({
      tours: mergedTours
    }, { user });
  }
}

async function persistOnboardingAccountState(patch = {}, options = {}) {
  if (!state.isLoggedIn || !supabaseClient || !supabaseClient.auth || typeof supabaseClient.auth.updateUser !== "function") {
    return false;
  }

  let user = options.user && typeof options.user === "object" ? options.user : null;
  if (!user && typeof supabaseClient.auth.getUser === "function") {
    try {
      const { data, error } = await supabaseClient.auth.getUser();
      if (!error) {
        user = data && data.user ? data.user : null;
      }
    } catch (_error) {
      user = null;
    }
  }

  if (!user) {
    return false;
  }

  const patchSource = patch && typeof patch === "object" ? patch : {};
  const currentMeta = getOnboardingAccountMetaFromUser(user);
  const nextMeta = normalizeOnboardingAccountMeta({
    flow: {
      ...currentMeta.flow,
      ...(patchSource.flow && typeof patchSource.flow === "object" ? patchSource.flow : {})
    },
    tours: {
      ...currentMeta.tours,
      ...(patchSource.tours && typeof patchSource.tours === "object" ? patchSource.tours : {})
    }
  });
  const currentUserMetadata = user.user_metadata && typeof user.user_metadata === "object" ? user.user_metadata : {};
  const nextUserMetadata = {
    ...currentUserMetadata,
    [ONBOARDING_ACCOUNT_METADATA_KEY]: nextMeta
  };

  try {
    const { data, error } = await supabaseClient.auth.updateUser({ data: nextUserMetadata });
    if (error) {
      return false;
    }
    const updatedUser = data && data.user ? data.user : { ...user, user_metadata: nextUserMetadata };
    syncOnboardingStateFromAccountUser(updatedUser);
    return true;
  } catch (_error) {
    return false;
  }
}

function getCurrentOnboardingSnapshot() {
  return normalizeOnboarding({
    ...state.onboarding,
    userEmail: normalizeEmail(state.userEmail || state.onboarding.userEmail || ""),
    userId: String(state.userId || state.onboarding.userId || "").trim()
  });
}

function seedFreshOnboardingForUser(user, fallbackIncome = state.calcIncome) {
  const userId = String(user && user.id ? user.id : "").trim();
  const userEmail = normalizeEmail(user && user.email ? user.email : "");
  const identityKey = getOnboardingIdentityKey(userId, userEmail);
  const onboardingByUser = normalizeOnboardingByUser(state.onboardingByUser);
  const subscriptionByUser = normalizeSubscriptionByUser(state.subscriptionByUser);
  const incomesByUser = normalizeIncomesByUser(state.incomesByUser);
  const employeesByUser = normalizeEmployeesByUser(state.employeesByUser);
  const freshOnboarding = normalizeOnboarding({
    version: ONBOARDING_FLOW_VERSION,
    completed: false,
    step: 1,
    regime: "simplified",
    hasEmployees: "no",
    income: Math.max(normalizeIncome(fallbackIncome), createDefaultOnboarding().income),
    userEmail,
    userId
  });

  state.onboarding = freshOnboarding;
  if (identityKey) {
    onboardingByUser[identityKey] = freshOnboarding;
  }
  state.onboardingByUser = onboardingByUser;
  clearLocalOnboardingTourProgress(userId, userEmail);
  setOnboardingTourForced(false);
  const profileByUser = normalizeProfileByUser(state.profileByUser);
  const authDisplayName = getAuthMetadataDisplayName(user);
  const freshProfile = sanitizeProfile({
    ...createDefaultProfile(),
    name: authDisplayName
  });
  state.profile = freshProfile;
  if (identityKey) {
    profileByUser[identityKey] = freshProfile;
  }
  state.profileByUser = profileByUser;
  state.subscription = createDefaultSubscription();
  if (identityKey) {
    subscriptionByUser[identityKey] = normalizeSubscription(state.subscription);
  }
  state.subscriptionByUser = subscriptionByUser;
  state.incomes = [];
  if (identityKey) {
    incomesByUser[identityKey] = [];
  }
  state.incomesByUser = incomesByUser;
  state.employees = [];
  if (identityKey) {
    employeesByUser[identityKey] = [];
  }
  state.employeesByUser = employeesByUser;
}

function shouldShowOnboarding() {
  return state.isLoggedIn && !state.onboarding.completed;
}

function prepareOnboardingAfterLogin() {
  const currentEmail = normalizeEmail(state.userEmail);
  const currentUserId = String(state.userId || "").trim();
  const identityKey = getOnboardingIdentityKey(currentUserId, currentEmail);
  const onboarding = normalizeOnboarding(state.onboarding);
  const onboardingByUser = normalizeOnboardingByUser(state.onboardingByUser);
  const currentMatches =
    (onboarding.userId && onboarding.userId === currentUserId)
    || (!onboarding.userId && onboarding.userEmail === currentEmail);
  const onboardingForCurrentUser = (identityKey && onboardingByUser[identityKey]) || (currentMatches ? onboarding : null);
  const completedForCurrentUser = Boolean(onboardingForCurrentUser && onboardingForCurrentUser.completed);

  if (completedForCurrentUser) {
    state.onboarding = {
      ...onboardingForCurrentUser,
      version: ONBOARDING_FLOW_VERSION,
      step: ONBOARDING_STEPS_TOTAL,
      userEmail: currentEmail,
      userId: currentUserId
    };
    if (identityKey) {
      onboardingByUser[identityKey] = normalizeOnboarding(state.onboarding);
    }
    state.onboardingByUser = onboardingByUser;
    return;
  }

  const fallbackIncome = Math.max(
    normalizeIncome(state.calcIncome),
    onboardingForCurrentUser ? onboardingForCurrentUser.income : onboarding.income,
    200000
  );
  state.onboarding = {
    ...(onboardingForCurrentUser || onboarding),
    version: ONBOARDING_FLOW_VERSION,
    completed: false,
    step: 1,
    hasEmployees: onboardingForCurrentUser ? onboardingForCurrentUser.hasEmployees : onboarding.hasEmployees,
    income: fallbackIncome,
    userEmail: currentEmail,
    userId: currentUserId
  };
  if (identityKey) {
    onboardingByUser[identityKey] = normalizeOnboarding(state.onboarding);
  }
  state.onboardingByUser = onboardingByUser;
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
  const normalizeDisconnectBtn = (btn) => {
    if (!(btn instanceof HTMLButtonElement)) {
      return null;
    }
    btn.type = "button";
    btn.dataset.action = "disconnect-reminders-telegram";
    btn.classList.add("reminders-telegram-disconnect");
    if (!String(btn.textContent || "").trim()) {
      btn.textContent = "Отключить";
    }
    return btn;
  };

  const ensureDisconnectBtn = () => {
    if (els.remindersTelegramDisconnectBtn instanceof HTMLButtonElement) {
      return normalizeDisconnectBtn(els.remindersTelegramDisconnectBtn);
    }

    const wrap = document.querySelector("#remindersSetupModal .reminders-telegram-connect-wrap");
    if (!(wrap instanceof HTMLElement)) {
      return null;
    }

    let btn = wrap.querySelector("#remindersTelegramDisconnectBtn");
    if (!(btn instanceof HTMLButtonElement)) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.id = "remindersTelegramDisconnectBtn";
      btn.dataset.action = "disconnect-reminders-telegram";
      btn.className = "reminders-telegram-disconnect hidden";
      btn.textContent = "Отключить";
      wrap.appendChild(btn);
    }

    els.remindersTelegramDisconnectBtn = normalizeDisconnectBtn(btn);
    return els.remindersTelegramDisconnectBtn;
  };

  if (els.remindersTelegramConnectBtn) {
    els.remindersTelegramConnectBtn.classList.toggle("hidden", telegramConnected);
  }

  if (els.remindersTelegramConnectedBadge) {
    els.remindersTelegramConnectedBadge.classList.toggle("hidden", !telegramConnected);
  }

  const disconnectBtn = ensureDisconnectBtn();
  if (disconnectBtn) {
    disconnectBtn.classList.toggle("hidden", !telegramConnected);
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

function normalizeDoneDeadlines(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return [...new Set(raw.map((id) => Number(id)).filter((id) => Number.isFinite(id) && id > 0))];
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
  employees: [],
  crmCustomers: [],
  crmSales: [],
  crmPayments: [],
  reports: getDefaultReportsState(),
  employeesView: "active",
  incomesByUser: {},
  employeesByUser: {},
  crmCustomersByUser: {},
  crmSalesByUser: {},
  crmPaymentsByUser: {},
  doneDeadlines: [],
  deadlineCompletionMeta: {},
  calendarPreServiceApplied: false,
  registrationDate: "",
  profile: createDefaultProfile(),
  profileByUser: {},
  calcIncome: 500000,
  calcExpenses: 0,
  calcPeriod: "month",
  calcTab: "calculate",
  landingPeriod: "month",
  landingBusinessStatus: "has_ip",
  landingActivity: "",
  landingSuggestedRegime: "simplified",
  landingViewedRegime: "",
  landingDeadlineOpenId: null,
  deadlineReminderIds: [],
  deadlineChecklistProgress: {},
  deadlineReminderSettings: {},
  remindersEnabled: false,
  reminders: null,
  subscription: createDefaultSubscription(),
  subscriptionByUser: {},
  paywallFeature: "",
  incomeEditId: null,
  crmCustomerEditId: null,
  crmSaleEditId: null,
  crmPaymentEditId: null,
  crmSaleDraftCustomerId: null,
  crmPaymentDraftSaleId: null,
  crmSelectedCustomerId: null,
  crmTab: "overview",
  crmSalesPanel: "",
  crmCustomerFormOpen: false,
  crmFilters: getDefaultCrmFilters(),
  incomeFilters: getDefaultIncomeFilters(),
  incomeSelectedMonth: null,
  calendarFilters: getDefaultCalendarFilters(),
  assistantMessages: [],
  assistantConversations: [],
  assistantActiveConversationId: null,
  knowledgeFilters: getDefaultKnowledgeFilters(),
  taxPlanner: getDefaultTaxPlanner(),
  onboarding: createDefaultOnboarding(),
  onboardingByUser: {},
  dashboardSelectedMonth: new Date().getMonth(),
  dashboardRecentMonth: null,
  firstIncomeProNudgeSeen: false,
  hideAmounts: false
};

let dashboardDemoMode = false;
let dashboardDemoIncomes = [];
let pendingIncomeDeleteId = null;
let pendingRegimeChange = null;
let employeeSalaryChangeDraft = [];
let employeeSalaryChangeRowSeed = 0;
let employeeMonthlyAccrualDraft = [];
let employeeMonthlyAccrualRowSeed = 0;
let lastRenderedPage = null;
let calculatorInputRenderTimer = null;
let appToastTimer = null;
let crmDataCache = null;
let crmLoading = false;
let crmError = "";
let crmPendingScrollTarget = "";
const CALENDAR_REMINDER_POPOVER_ID = "calendarReminderPopover";
let incomeTrialBannerDismissed = false;
let dashboardKpiSheetData = null;
let mobileTaxPlannerAdvancedOpen = false;
let publicNavStickyBound = false;
let reactiveDotsBound = false;
const onboardingTourState = {
  active: false,
  step: 0,
  swipeStartY: null,
  page: null,
  forceOpen: false
};

const els = {
  publicApp: document.getElementById("publicApp"),
  publicNav: document.querySelector(".public-nav"),
  dashboardApp: document.getElementById("dashboardApp"),
  landingIncome: document.getElementById("landingIncome"),
  landingActivity: document.getElementById("landingActivity"),
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
  employeeModal: document.getElementById("employeeModal"),
  employeeModalTitle: document.getElementById("employeeModalTitle"),
  employeeForm: document.getElementById("employeeForm"),
  employeeEditIdInput: document.getElementById("employeeEditIdInput"),
  employeeNameInput: document.getElementById("employeeNameInput"),
  employeeIinInput: document.getElementById("employeeIinInput"),
  employeeIinHelper: document.getElementById("employeeIinHelper"),
  employeeSpecialCasesDetails: document.getElementById("employeeSpecialCasesDetails"),
  employeeNonresidentFields: document.getElementById("employeeNonresidentFields"),
  employeeSalaryInput: document.getElementById("employeeSalaryInput"),
  employeeStartMonthInput: document.getElementById("employeeStartMonthInput"),
  employeeEndMonthInput: document.getElementById("employeeEndMonthInput"),
  employeeSalaryHistoryList: document.getElementById("employeeSalaryHistoryList"),
  employeeMonthlyAccrualsList: document.getElementById("employeeMonthlyAccrualsList"),
  employeeMonthlyAccrualsDetails: document.getElementById("employeeMonthlyAccrualsDetails"),
  employeeSubmitBtn: document.getElementById("employeeSubmitBtn"),
  remindersSetupModal: document.getElementById("remindersSetupModal"),
  remindersSetupTitle: document.getElementById("remindersSetupTitle"),
  remindersSettingsForm: document.getElementById("remindersSettingsForm"),
  remindersEmailToggle: document.getElementById("remindersEmailToggle"),
  remindersEmailSwitch: document.getElementById("remindersEmailSwitch"),
  remindersEmailFieldWrap: document.getElementById("remindersEmailFieldWrap"),
  remindersSettingsEmail: document.getElementById("remindersSettingsEmail"),
  remindersTelegramConnectBtn: document.getElementById("remindersTelegramConnectBtn"),
  remindersTelegramConnectedBadge: document.getElementById("remindersTelegramConnectedBadge"),
  remindersTelegramDisconnectBtn: document.getElementById("remindersTelegramDisconnectBtn"),
  remindersSettingsHint: document.getElementById("remindersSettingsHint"),
  remindersSettingsSubmit: document.getElementById("remindersSettingsSubmit"),
  remindersSettingsTestBtn: document.getElementById("remindersSettingsTestBtn"),
  remindersSettingsDisableLink: document.getElementById("remindersSettingsDisableLink"),
  taxLoadModal: document.getElementById("taxLoadModal"),
  taxLoadModalTitle: document.getElementById("taxLoadModalTitle"),
  taxLoadModalBody: document.getElementById("taxLoadModalBody"),
  dashboardKpiSheetModal: document.getElementById("dashboardKpiSheetModal"),
  dashboardKpiSheetTitle: document.getElementById("dashboardKpiSheetTitle"),
  dashboardKpiSheetBody: document.getElementById("dashboardKpiSheetBody"),
  incomeEditModal: document.getElementById("incomeEditModal"),
  incomeEditForm: document.getElementById("incomeEditForm"),
  incomeEditIdInput: document.getElementById("incomeEditIdInput"),
  incomeEditDateInput: document.getElementById("incomeEditDateInput"),
  incomeEditAmountInput: document.getElementById("incomeEditAmountInput"),
  incomeEditCategorySelect: document.getElementById("incomeEditCategorySelect"),
  incomeEditCategoryCustomWrap: document.getElementById("incomeEditCategoryCustomWrap"),
  incomeEditCategoryCustomInput: document.getElementById("incomeEditCategoryCustomInput"),
  incomeEditCommentInput: document.getElementById("incomeEditCommentInput"),
  incomeDeleteModal: document.getElementById("incomeDeleteModal"),
  incomeDeleteMessage: document.getElementById("incomeDeleteMessage"),
  pageContent: document.getElementById("pageContent"),
  pageTitle: document.getElementById("pageTitle"),
  amountsVisibilityBtn: document.getElementById("amountsVisibilityBtn"),
  mobileAmountsVisibilityBtn: document.getElementById("mobileAmountsVisibilityBtn"),
  calendarReminderToggle: document.getElementById("calendarReminderToggle"),
  mobileDrawerReminderToggle: document.getElementById("mobileDrawerReminderToggle"),
  headerRegimeStatusValue: document.getElementById("headerRegimeStatusValue"),
  mobileDrawerRegimeValue: document.getElementById("mobileDrawerRegimeValue"),
  sidebarNav: document.getElementById("sidebarNav"),
  accountName: document.getElementById("accountName"),
  planBadge: document.getElementById("planBadge"),
  sidebarBetaBanner: document.getElementById("sidebarBetaBanner"),
  proBtn: document.getElementById("proBtn"),
  betaAccessModal: document.getElementById("betaAccessModal"),
  betaAccessTitle: document.getElementById("betaAccessTitle"),
  betaAccessText: document.getElementById("betaAccessText"),
  betaAccessPrimary: document.getElementById("betaAccessPrimary"),
  featureInfoModal: document.getElementById("featureInfoModal"),
  featureInfoTitle: document.getElementById("featureInfoTitle"),
  featureInfoText: document.getElementById("featureInfoText"),
  regimeHelpModal: document.getElementById("regimeHelpModal"),
  regimeHelpTitle: document.getElementById("regimeHelpTitle"),
  regimeHelpBody: document.getElementById("regimeHelpBody"),
  regimeConfirmModal: document.getElementById("regimeConfirmModal"),
  regimeConfirmTitle: document.getElementById("regimeConfirmTitle"),
  regimeConfirmBody: document.getElementById("regimeConfirmBody"),
  regimeConfirmSubmit: document.getElementById("regimeConfirmSubmit"),
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
  dashboard: "Главная",
  income: "Доходы",
  employees: "Сотрудники",
  crm: "CRM",
  reports: "Отчетность",
  taxes: "Налоги и платежи",
  calendar: "Календарь сроков",
  calculator: "Калькулятор",
  assistant: "E-бухгалтер",
  knowledge: "База знаний РК",
  feedback: "Обратная связь",
  settings: "Настройки"
};

init();

function removeLegacySidebarSubtitle() {
  document.querySelectorAll(".sidebar-brand").forEach((brand) => {
    const logo = brand.querySelector(".logo");
    Array.from(brand.childNodes).forEach((node) => {
      const isWhitespaceText = node.nodeType === Node.TEXT_NODE && !node.textContent.trim();
      if (node === logo || isWhitespaceText) {
        return;
      }
      node.remove();
    });
  });
}

async function init() {
  removeLegacySidebarSubtitle();
  initAnalyticsProviders();
  initSupabase();
  loadState();
  refreshSubscriptionState();
  bindBaseEvents();
  bindPublicNavSticky();
  initReactiveDotsField();
  updateLoginConsentState();
  try {
    renderLandingCards();
  } catch (error) {
    console.error("Landing calculator render failed:", error);
    if (els.landingCards) {
      els.landingCards.innerHTML = '<p class="deadline-empty">Не удалось отрисовать калькулятор. Обновите страницу.</p>';
    }
  }
  try {
    renderLandingDeadlines();
  } catch (error) {
    console.error("Landing deadlines render failed:", error);
    if (els.landingDeadlines) {
      els.landingDeadlines.innerHTML = '<p class="deadline-empty">Не удалось загрузить сроки. Обновите страницу.</p>';
    }
  }
  updateAuthUi();
  if (supabaseClient) {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session && data.session.user) {
      state.isLoggedIn = true;
      state.userEmail = data.session.user.email || state.userEmail;
      state.userId = data.session.user.id || state.userId;
      dashboardDemoMode = false;
      dashboardDemoIncomes = [];
      syncOnboardingStateFromAccountUser(data.session.user);
      prepareOnboardingAfterLogin();
      applyAuthIncomeDefaults(data.session.user);
      applyAuthEmployeeDefaults(data.session.user);
      applyAuthCrmDefaults(data.session.user);
      applyAuthProfileDefaults(data.session.user);
      applyAuthSubscriptionDefaults(data.session.user);
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

function normalizeCalculatorTab(value) {
  return String(value || "").trim() === "compare" ? "compare" : "calculate";
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

function updatePublicNavStickyState() {
  if (!els.publicNav || typeof window === "undefined") {
    return;
  }

  const landingVisible = els.publicApp && !els.publicApp.classList.contains("hidden");
  const isStuck = landingVisible && Number(window.scrollY || 0) > 14;
  els.publicNav.classList.toggle("is-stuck", isStuck);
  if (els.publicApp) {
    els.publicApp.classList.toggle("has-fixed-nav", isStuck);
  }
}

function bindPublicNavSticky() {
  if (publicNavStickyBound || !els.publicNav || typeof window === "undefined") {
    updatePublicNavStickyState();
    return;
  }

  publicNavStickyBound = true;
  const syncPublicNavSticky = () => updatePublicNavStickyState();
  window.addEventListener("scroll", syncPublicNavSticky, { passive: true });
  window.addEventListener("resize", syncPublicNavSticky, { passive: true });
  updatePublicNavStickyState();
}

function initReactiveDotsField() {
  if (reactiveDotsBound || !els.publicApp || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  reactiveDotsBound = true;

  if (
    typeof window.matchMedia === "function"
    && (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || !window.matchMedia("(pointer: fine)").matches
    )
  ) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.className = "public-app-dot-field";
  canvas.setAttribute("aria-hidden", "true");

  els.publicApp.prepend(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }

  els.publicApp.classList.add("has-reactive-dots");

  const state = {
    ctx,
    canvas,
    dpr: 1,
    viewportWidth: 0,
    viewportHeight: 0,
    pointerX: -9999,
    pointerY: -9999,
    pointerStrength: 0,
    targetStrength: 0,
    rafId: 0,
    needsRedraw: true
  };

  const spacing = 28;
  const dotRadius = 1.12;
  const influenceRadius = 110;
  const influenceRadiusSquared = influenceRadius * influenceRadius;
  const maxOffset = 10;
  const settleThreshold = 0.015;

  function scheduleRender() {
    if (!state.rafId) {
      state.rafId = window.requestAnimationFrame(renderFrame);
    }
  }

  function syncCanvasSize() {
    state.viewportWidth = Math.max(window.innerWidth || 0, 1);
    state.viewportHeight = Math.max(window.innerHeight || 0, 1);
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.canvas.width = Math.round(state.viewportWidth * state.dpr);
    state.canvas.height = Math.round(state.viewportHeight * state.dpr);
    state.canvas.style.width = `${state.viewportWidth}px`;
    state.canvas.style.height = `${state.viewportHeight}px`;
    state.needsRedraw = true;
    scheduleRender();
  }

  function handlePointerMove(event) {
    state.pointerX = Number(event.clientX || 0);
    state.pointerY = Number(event.clientY || 0);
    state.targetStrength = 1;
    state.needsRedraw = true;
    scheduleRender();
  }

  function handlePointerLeave() {
    state.targetStrength = 0;
    state.needsRedraw = true;
    scheduleRender();
  }

  function handleViewportShift() {
    state.needsRedraw = true;
    scheduleRender();
  }

  function renderFrame() {
    state.rafId = 0;

    const strengthDelta = state.targetStrength - state.pointerStrength;
    if (Math.abs(strengthDelta) > 0.001) {
      state.pointerStrength += strengthDelta * 0.16;
      if (Math.abs(state.targetStrength - state.pointerStrength) < settleThreshold) {
        state.pointerStrength = state.targetStrength;
      }
      state.needsRedraw = true;
    }

    if (!state.needsRedraw) {
      return;
    }

    state.needsRedraw = false;

    const scrollY = Number(window.scrollY || window.pageYOffset || 0);
    const startColumn = -1;
    const endColumn = Math.ceil(state.viewportWidth / spacing) + 1;
    const startRow = Math.floor(scrollY / spacing) - 1;
    const endRow = Math.ceil((scrollY + state.viewportHeight) / spacing) + 1;
    const strength = state.pointerStrength;

    state.ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    state.ctx.clearRect(0, 0, state.viewportWidth, state.viewportHeight);
    state.ctx.fillStyle = "rgba(152, 171, 198, 0.1)";

    for (let row = startRow; row <= endRow; row += 1) {
      const baseScreenY = row * spacing - scrollY;
      for (let col = startColumn; col <= endColumn; col += 1) {
        const baseX = col * spacing;
        let drawX = baseX;
        let drawY = baseScreenY;

        if (strength > 0.001) {
          const dx = baseX - state.pointerX;
          const dy = baseScreenY - state.pointerY;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < influenceRadiusSquared) {
            const distance = Math.sqrt(distanceSquared) || 1;
            const falloff = 1 - distance / influenceRadius;
            const offset = falloff * falloff * maxOffset * strength;
            drawX += (dx / distance) * offset;
            drawY += (dy / distance) * offset;
          }
        }

        state.ctx.beginPath();
        state.ctx.arc(drawX, drawY, dotRadius, 0, Math.PI * 2);
        state.ctx.fill();
      }
    }

    if (Math.abs(state.targetStrength - state.pointerStrength) > settleThreshold) {
      scheduleRender();
    }
  }

  syncCanvasSize();
  window.addEventListener("resize", syncCanvasSize, { passive: true });
  window.addEventListener("scroll", handleViewportShift, { passive: true });
  window.addEventListener("mousemove", handlePointerMove, { passive: true });
  window.addEventListener("blur", handlePointerLeave);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
      handlePointerLeave();
    }
  });
  document.documentElement.addEventListener("mouseleave", handlePointerLeave);
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
      els.landingIncome.value = formatPlainAmount(els.landingIncome.value);
      renderLandingCards();
      renderLandingDeadlines();
    });
  }

  document.querySelectorAll("[data-page]").forEach((node) => {
    node.addEventListener("click", (event) => {
      if (!state.isLoggedIn) {
        return;
      }
      const target = event.currentTarget;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const nextPage = String(target.dataset.page || "").trim();
      if (!nextPage) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      if (target instanceof HTMLElement) {
        target.blur();
      }
      navigateToPage(nextPage, "direct_nav");
    });
  });
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

function navigateToPage(nextPage, source = "nav") {
  const safeNextPage = String(nextPage || "").trim();
  if (!safeNextPage || !Object.prototype.hasOwnProperty.call(PAGE_TITLES, safeNextPage)) {
    return false;
  }

  if (safeNextPage === "employees" && !canAccessEmployeesSection()) {
    return false;
  }

  if (safeNextPage === "crm") {
    if (!state.isLoggedIn) {
      return false;
    }
    ensureCrmOwnerBinding();
  }

  state.page = safeNextPage;
  if (safeNextPage === "employees") {
    state.employeesView = "active";
  }

  saveState();
  closeMobileDrawer();
  if (els.dashboardApp) {
    els.dashboardApp.classList.remove("sidebar-open");
  }
  if (els.mobileMoreModal) {
    closeModal(els.mobileMoreModal);
  }
  renderDashboard();
  trackEvent("page_open", { page: state.page, source });
  return true;
}

function loadState() {
  const saved = readJson(STORAGE_KEY);
  if (!saved) return;

  state.userId = String(saved.userId || state.userId || "").trim();
  state.userEmail = normalizeEmail(saved.userEmail || state.userEmail || "");
  state.page = Object.prototype.hasOwnProperty.call(PAGE_TITLES, String(saved.page || "").trim())
    ? String(saved.page || "").trim()
    : state.page;
  state.regime = saved.regime || state.regime;
  state.incomes = normalizeIncomeEntries(saved.incomes);
  state.employees = normalizeEmployeeEntries(saved.employees);
  state.crmCustomers = normalizeCrmCustomers(saved.crmCustomers);
  state.crmSales = normalizeCrmSales(saved.crmSales);
  state.crmPayments = normalizeCrmPayments(saved.crmPayments);
  state.reports = normalizeReportsState(saved.reports);
  const savedCrmFilters = saved.crmFilters && typeof saved.crmFilters === "object" ? saved.crmFilters : {};
  state.crmFilters = {
    ...getDefaultCrmFilters(),
    query: String(savedCrmFilters.query || "").trim(),
    status: normalizeCrmFilterStatus(savedCrmFilters.status || "all")
  };
  state.crmTab = normalizeCrmTab(saved.crmTab || state.crmTab);
  state.crmSalesPanel = normalizeCrmSalesPanel(saved.crmSalesPanel || state.crmSalesPanel);
  state.crmCustomerFormOpen = saved.crmCustomerFormOpen === true || saved.crmCustomerFormOpen === "true" || saved.crmCustomerFormOpen === 1;
  state.crmSaleDraftCustomerId = Number(saved.crmSaleDraftCustomerId || 0) || null;
  state.crmPaymentDraftSaleId = Number(saved.crmPaymentDraftSaleId || 0) || null;
  state.crmSelectedCustomerId = Number(saved.crmSelectedCustomerId || 0) || null;
  state.employeesView = normalizeEmployeesView(saved.employeesView || state.employeesView);
  state.incomesByUser = normalizeIncomesByUser(saved.incomesByUser);
  state.employeesByUser = normalizeEmployeesByUser(saved.employeesByUser);
  state.crmCustomersByUser = normalizeCrmCustomersByUser(saved.crmCustomersByUser);
  state.crmSalesByUser = normalizeCrmSalesByUser(saved.crmSalesByUser);
  state.crmPaymentsByUser = normalizeCrmPaymentsByUser(saved.crmPaymentsByUser);
  if (Object.keys(state.incomesByUser).length === 0) {
    const legacyIncomesKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacyIncomesKey && Array.isArray(saved.incomes)) {
      state.incomesByUser[legacyIncomesKey] = normalizeIncomeEntries(saved.incomes);
    }
  }
  if (Object.keys(state.employeesByUser).length === 0) {
    const legacyEmployeesKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacyEmployeesKey && Array.isArray(saved.employees)) {
      state.employeesByUser[legacyEmployeesKey] = normalizeEmployeeEntries(saved.employees);
    }
  }
  if (Object.keys(state.crmCustomersByUser).length === 0) {
    const legacyCrmCustomersKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacyCrmCustomersKey && Array.isArray(saved.crmCustomers)) {
      state.crmCustomersByUser[legacyCrmCustomersKey] = normalizeCrmCustomers(saved.crmCustomers);
    }
  }
  if (Object.keys(state.crmSalesByUser).length === 0) {
    const legacyCrmSalesKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacyCrmSalesKey && Array.isArray(saved.crmSales)) {
      state.crmSalesByUser[legacyCrmSalesKey] = normalizeCrmSales(saved.crmSales);
    }
  }
  if (Object.keys(state.crmPaymentsByUser).length === 0) {
    const legacyCrmPaymentsKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacyCrmPaymentsKey && Array.isArray(saved.crmPayments)) {
      state.crmPaymentsByUser[legacyCrmPaymentsKey] = normalizeCrmPayments(saved.crmPayments);
    }
  }
  state.doneDeadlines = normalizeDoneDeadlines(saved.doneDeadlines);
  state.deadlineCompletionMeta = normalizeDeadlineCompletionMeta(saved.deadlineCompletionMeta);
  state.calendarPreServiceApplied = saved.calendarPreServiceApplied === true || saved.calendarPreServiceApplied === "true" || saved.calendarPreServiceApplied === 1;
  state.registrationDate = String(saved.registrationDate || "").trim();
  state.profile = sanitizeProfile({ ...state.profile, ...(saved.profile || {}) });
  state.employees = normalizeEmployeeEntries(state.employees);
  state.employeesByUser = normalizeEmployeesByUser(state.employeesByUser);
  state.crmCustomers = normalizeCrmCustomers(state.crmCustomers);
  state.crmSales = normalizeCrmSales(state.crmSales);
  state.crmPayments = normalizeCrmPayments(state.crmPayments);
  state.crmCustomersByUser = normalizeCrmCustomersByUser(state.crmCustomersByUser);
  state.crmSalesByUser = normalizeCrmSalesByUser(state.crmSalesByUser);
  state.crmPaymentsByUser = normalizeCrmPaymentsByUser(state.crmPaymentsByUser);
  state.profileByUser = normalizeProfileByUser(saved.profileByUser);
  state.calcTab = normalizeCalculatorTab(saved.calcTab);
  if (Object.keys(state.profileByUser).length === 0) {
    const legacyProfileKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacyProfileKey && saved.profile) {
      state.profileByUser[legacyProfileKey] = sanitizeProfile(saved.profile);
    }
  }
  state.calcIncome = Number(saved.calcIncome || state.calcIncome);
  state.calcExpenses = Number(saved.calcExpenses || state.calcExpenses);
  state.calcPeriod = saved.calcPeriod === "year" ? "year" : "month";
  state.landingPeriod = "month";
  state.landingBusinessStatus = saved.landingBusinessStatus === "no_ip" ? "no_ip" : "has_ip";
  state.landingActivity = LANDING_SELF_ACTIVITY_OPTIONS.some((option) => option.id === String(saved.landingActivity || "").trim())
    ? String(saved.landingActivity || "").trim()
    : "";
  state.landingViewedRegime = ["self", "simplified", "our"].includes(String(saved.landingViewedRegime || "").trim())
    ? String(saved.landingViewedRegime || "").trim()
    : "";
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
  state.subscriptionByUser = normalizeSubscriptionByUser(saved.subscriptionByUser);
  if (!saved.subscription && (saved.plan || saved.planExpiry)) {
    state.subscription = normalizeSubscription({
      ...state.subscription,
      plan: saved.plan || state.subscription.plan,
      planExpiry: saved.planExpiry || state.subscription.planExpiry
    });
  }
  if (Object.keys(state.subscriptionByUser).length === 0) {
    const legacySubscriptionKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), String(saved.userEmail || "").trim());
    if (legacySubscriptionKey && (saved.subscription || saved.plan || saved.planExpiry)) {
      state.subscriptionByUser[legacySubscriptionKey] = normalizeSubscription(state.subscription);
    }
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
  const savedCalendarTimeframe = String(savedCalendarFilters.timeframe || "").trim();
  state.calendarFilters = {
    ...getDefaultCalendarFilters(),
    query: String(savedCalendarFilters.query || "").trim(),
    type: normalizeCalendarType(String(savedCalendarFilters.type || "all")),
    status: normalizeCalendarStatus(String(savedCalendarFilters.status || "all")),
    timeframe: normalizeCalendarTimeframe(savedCalendarTimeframe === "upcoming" ? "year" : (savedCalendarTimeframe || "year"))
  };

  state.assistantMessages = normalizeAssistantMessages(saved.assistantMessages);
  state.assistantConversations = normalizeAssistantConversations(saved.assistantConversations);
  state.assistantActiveConversationId = Number(saved.assistantActiveConversationId || 0) || null;

  const savedKnowledgeFilters = saved.knowledgeFilters && typeof saved.knowledgeFilters === "object" ? saved.knowledgeFilters : {};
  state.knowledgeFilters = {
    ...getDefaultKnowledgeFilters(),
    query: String(savedKnowledgeFilters.query || "").trim(),
    topic: normalizeKnowledgeTopic(String(savedKnowledgeFilters.topic || "all")),
    mode: normalizeKnowledgeMode(String(savedKnowledgeFilters.mode || KNOWLEDGE_MODES.hub)),
    section: normalizeKnowledgeSection(String(savedKnowledgeFilters.section || "all"))
  };

  const taxFallbackIncome = getTaxPlannerFallbackIncome();
  const taxFallbackExpenses = normalizeIncome(state.calcExpenses);
  state.taxPlanner = normalizeTaxPlanner(saved.taxPlanner, taxFallbackIncome, taxFallbackExpenses, 15);

  state.incomeEditId = Number(saved.incomeEditId || 0) || null;
  state.paywallFeature = String(saved.paywallFeature || "");
  state.onboarding = normalizeOnboarding(saved.onboarding);
  state.onboardingByUser = normalizeOnboardingByUser(saved.onboardingByUser);
  if (Object.keys(state.onboardingByUser).length === 0) {
    const legacyOnboardingKey = getOnboardingIdentityKey(String(saved.userId || "").trim(), state.onboarding.userEmail || String(saved.userEmail || "").trim());
    if (legacyOnboardingKey) {
      state.onboardingByUser[legacyOnboardingKey] = normalizeOnboarding(state.onboarding);
    }
  }
  state.firstIncomeProNudgeSeen = saved.firstIncomeProNudgeSeen === true || saved.firstIncomeProNudgeSeen === "true" || saved.firstIncomeProNudgeSeen === 1;
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
  syncCrmSalesWithIncomeJournal();
}

function saveState() {
  const onboardingSnapshot = getCurrentOnboardingSnapshot();
  const onboardingByUser = normalizeOnboardingByUser(state.onboardingByUser);
  const onboardingIdentityKey = getOnboardingIdentityKey();
  const profileByUser = normalizeProfileByUser(state.profileByUser);
  const subscriptionByUser = normalizeSubscriptionByUser(state.subscriptionByUser);
  const incomesByUser = normalizeIncomesByUser(state.incomesByUser);
  const employeesByUser = normalizeEmployeesByUser(state.employeesByUser);
  const crmCustomersByUser = normalizeCrmCustomersByUser(state.crmCustomersByUser);
  const crmSalesByUser = normalizeCrmSalesByUser(state.crmSalesByUser);
  const crmPaymentsByUser = normalizeCrmPaymentsByUser(state.crmPaymentsByUser);
  if (onboardingIdentityKey) {
    onboardingByUser[onboardingIdentityKey] = onboardingSnapshot;
    profileByUser[onboardingIdentityKey] = sanitizeProfile(state.profile);
    subscriptionByUser[onboardingIdentityKey] = normalizeSubscription(state.subscription);
    crmCustomersByUser[onboardingIdentityKey] = normalizeCrmCustomers(state.crmCustomers);
    crmSalesByUser[onboardingIdentityKey] = normalizeCrmSales(state.crmSales);
    crmPaymentsByUser[onboardingIdentityKey] = normalizeCrmPayments(state.crmPayments);
    incomesByUser[onboardingIdentityKey] = normalizeIncomeEntries(state.incomes);
    employeesByUser[onboardingIdentityKey] = normalizeEmployeeEntries(state.employees);
  }
  state.onboarding = onboardingSnapshot;
  state.onboardingByUser = onboardingByUser;
  state.profile = sanitizeProfile(state.profile);
  state.profileByUser = profileByUser;
  state.subscription = normalizeSubscription(state.subscription);
  state.subscriptionByUser = subscriptionByUser;
  state.crmCustomers = normalizeCrmCustomers(state.crmCustomers);
  state.crmSales = normalizeCrmSales(state.crmSales);
  state.crmPayments = normalizeCrmPayments(state.crmPayments);
  state.crmCustomersByUser = crmCustomersByUser;
  state.crmSalesByUser = crmSalesByUser;
  state.crmPaymentsByUser = crmPaymentsByUser;
  state.incomes = normalizeIncomeEntries(state.incomes);
  state.employees = normalizeEmployeeEntries(state.employees);
  state.employeesView = normalizeEmployeesView(state.employeesView);
  state.incomesByUser = incomesByUser;
  state.employeesByUser = employeesByUser;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      isPro: state.isPro,
      userId: state.userId,
      page: state.page,
      regime: state.regime,
      incomes: state.incomes,
      employees: state.employees,
      crmCustomers: state.crmCustomers,
      crmSales: state.crmSales,
      crmPayments: state.crmPayments,
      reports: state.reports,
      crmSaleDraftCustomerId: state.crmSaleDraftCustomerId,
      crmPaymentDraftSaleId: state.crmPaymentDraftSaleId,
      crmSelectedCustomerId: state.crmSelectedCustomerId,
      crmTab: state.crmTab,
      crmSalesPanel: state.crmSalesPanel,
      crmCustomerFormOpen: state.crmCustomerFormOpen,
      crmFilters: state.crmFilters,
      employeesView: state.employeesView,
      incomesByUser: state.incomesByUser,
      employeesByUser: state.employeesByUser,
      crmCustomersByUser: state.crmCustomersByUser,
      crmSalesByUser: state.crmSalesByUser,
      crmPaymentsByUser: state.crmPaymentsByUser,
      doneDeadlines: normalizeDoneDeadlines(state.doneDeadlines),
      deadlineCompletionMeta: state.deadlineCompletionMeta,
      calendarPreServiceApplied: state.calendarPreServiceApplied,
      registrationDate: state.registrationDate,
      profile: state.profile,
      profileByUser: state.profileByUser,
      calcIncome: state.calcIncome,
      calcExpenses: state.calcExpenses,
      calcPeriod: state.calcPeriod,
      calcTab: state.calcTab,
      landingPeriod: state.landingPeriod,
      landingBusinessStatus: state.landingBusinessStatus,
      landingActivity: state.landingActivity,
      landingViewedRegime: state.landingViewedRegime,
      landingDeadlineOpenId: state.landingDeadlineOpenId,
      deadlineReminderIds: state.deadlineReminderIds,
      deadlineChecklistProgress: state.deadlineChecklistProgress,
      deadlineReminderSettings: state.deadlineReminderSettings,
      remindersEnabled: state.remindersEnabled,
      reminders: state.reminders,
      incomeEditId: state.incomeEditId,
      incomeFilters: state.incomeFilters,
      incomeSelectedMonth: state.incomeSelectedMonth,
      assistantMessages: state.assistantMessages,
      assistantConversations: state.assistantConversations,
      assistantActiveConversationId: state.assistantActiveConversationId,
      calendarFilters: state.calendarFilters,
      knowledgeFilters: state.knowledgeFilters,
      taxPlanner: state.taxPlanner,
      subscription: state.subscription,
      subscriptionByUser: state.subscriptionByUser,
      plan: state.subscription.plan,
      planExpiry: state.subscription.planExpiry,
      paywallFeature: state.paywallFeature,
      onboarding: state.onboarding,
      onboardingByUser: state.onboardingByUser,
      firstIncomeProNudgeSeen: state.firstIncomeProNudgeSeen,
      hideAmounts: state.hideAmounts
    })
  );
  localStorage.setItem(HIDE_AMOUNTS_STORAGE_KEY, state.hideAmounts ? "true" : "false");
}

function updateAmountsVisibilityUi() {
  const supportsAmountHide = state.page === "dashboard" || state.page === "income" || state.page === "taxes" || state.page === "reports";
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
  const buttonLabel = hidden ? "Показать суммы" : "Скрыть суммы";
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
    toggleNode.setAttribute("title", enabled ? "Напоминания: включены" : "Напоминания: выключены");

    const switchNode = toggleNode.querySelector(".calendar-reminder-switch");
    if (switchNode) {
      switchNode.setAttribute("aria-checked", enabled ? "true" : "false");
      switchNode.setAttribute("title", enabled ? "Выключить напоминания" : "Включить напоминания");
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

function getProfileDisplayName() {
  const profileName = String(state.profile.name || "").trim();
  if (profileName) {
    return profileName;
  }

  return String(state.userEmail || "Пользователь").trim();
}

function syncMobileDrawerProfile() {
  const profileName = String(state.profile.name || "").trim();
  const fallbackName = String(state.userEmail || "Пользователь").trim();
  const displayName = getProfileDisplayName();
  const initialsSource = profileName || fallbackName;
  const initials = initialsSource
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "ИП";

  if (els.mobileDrawerUserName) {
    els.mobileDrawerUserName.textContent = displayName;
  }

  if (els.mobileDrawerUserEmail) {
    const emailValue = String(state.userEmail || "email@example.com").trim();
    const shouldShowSecondaryEmail = Boolean(profileName) && Boolean(emailValue);
    els.mobileDrawerUserEmail.textContent = shouldShowSecondaryEmail ? emailValue : "";
    els.mobileDrawerUserEmail.hidden = !shouldShowSecondaryEmail;
  }

  if (els.mobileDrawerAvatar) {
    els.mobileDrawerAvatar.textContent = initials;
  }
}

function syncMobileDrawerRegimeTabs() {
  if (els.mobileDrawerRegimeValue) {
    els.mobileDrawerRegimeValue.textContent = regimeLabel(state.regime);
    els.mobileDrawerRegimeValue.dataset.regime = state.regime;
  }
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

function closeMobileDrawerAndThen(callback) {
  if (!isMobileViewport() || !els.mobileDrawer || !els.mobileDrawerOverlay || typeof callback !== "function") {
    callback?.();
    return;
  }

  closeMobileDrawer();
  window.setTimeout(() => {
    callback();
  }, 260);
}

function syncRegimeControlsToState() {
  if (els.headerRegimeStatusValue) {
    els.headerRegimeStatusValue.textContent = regimeLabel(state.regime);
    els.headerRegimeStatusValue.dataset.regime = state.regime;
  }
  syncMobileDrawerRegimeTabs();
}

function hasMeaningfulRegimeSwitchData() {
  const hasSavedIncomes = Array.isArray(state.incomes) && state.incomes.some((row) => normalizeIncome(row.amount) > 0);
  const defaultPlanner = getDefaultTaxPlanner();
  const plannerIncome = normalizeIncome(state.taxPlanner && state.taxPlanner.income);
  const plannerExpenses = normalizeIncome(state.taxPlanner && state.taxPlanner.expenses);
  const plannerReserve = Math.round(Number((state.taxPlanner && state.taxPlanner.reservePct) ?? defaultPlanner.reservePct) || 0);
  const hasPlannerChanges =
    plannerIncome !== defaultPlanner.income
    || plannerExpenses !== defaultPlanner.expenses
    || plannerReserve !== defaultPlanner.reservePct;
  const hasCalculatorChanges =
    normalizeIncome(state.calcIncome) !== 500000
    || normalizeIncome(state.calcExpenses) !== 0
    || state.calcPeriod !== "month";

  return hasSavedIncomes || hasPlannerChanges || hasCalculatorChanges;
}

function openRegimeConfirmModal(requestedRegime, resolved, source = "") {
  if (!els.regimeConfirmModal || !els.regimeConfirmTitle || !els.regimeConfirmBody || !els.regimeConfirmSubmit) {
    return false;
  }

  const targetRegime = resolved && resolved.regime ? resolved.regime : requestedRegime;
  const targetLabel = regimeLabel(targetRegime);
  const isSelfScenario = requestedRegime === "self" && resolved && resolved.showHelpModal && targetRegime === "self";
  const selfActivityStatus = requestedRegime === "self"
    ? getProfileSelfActivityStatus(state.profile && state.profile.selfActivity)
    : { code: "allowed", option: null };
  const hasEmployeesWarning = targetRegime === "self" && normalizeEmployeeEntries(state.employees).length > 0;
  const employeesWarningHtml = hasEmployeesWarning
    ? `
      <article class="regime-help-reason">
        <h4>⚠️ У вас добавлены сотрудники</h4>
        <p>Самозанятый не может иметь наёмных работников. При переключении раздел Сотрудники и связанные расчёты будут скрыты. Данные о сотрудниках сохранятся — они вернутся если переключитесь обратно на Упрощёнку или ОУР.</p>
      </article>
    `
    : "";
  const selfActivityWarningHtml = requestedRegime === "self" && selfActivityStatus.code !== "allowed"
    ? `
      <article class="regime-help-reason">
        <h4>${selfActivityStatus.code === "blocked_activity" ? "⚠️ Направление не подходит" : "Что проверить по деятельности"}</h4>
        <p>${
          selfActivityStatus.code === "blocked_activity"
            ? `Сейчас выбрано направление «${escapeHtml(selfActivityStatus.option ? selfActivityStatus.option.label : "не указано")}». Для него Самозанятый не подходит.`
            : selfActivityStatus.code === "needs_check"
              ? `Сейчас выбрано направление «${escapeHtml(selfActivityStatus.option ? selfActivityStatus.option.label : "не указано")}». Перед использованием Самозанятого проверьте его по полному перечню 40 ОКЭД.`
              : "Самозанятость подходит не для всех видов деятельности. Сначала укажите направление в настройках, чтобы расчёт был честным."
        }</p>
      </article>
    `
    : "";

  pendingRegimeChange = {
    requestedRegime,
    resolved,
    source,
    skipHelpModalAfterConfirm: isSelfScenario
  };

  if (isSelfScenario) {
    els.regimeConfirmTitle.textContent = "Перейти к сценарию самозанятого?";
    els.regimeConfirmBody.innerHTML = `
      <p class="regime-help-lead">По текущему доходу режим самозанятого вам подходит. Мы можем пересчитать суммы и подсказки под этот сценарий.</p>
      <article class="regime-help-reason">
        <h4>Важно перед реальным переходом</h4>
        <p>Если у вас уже есть ИП, сначала нужно прекратить или закрыть его. Сервис не меняет ваш режим автоматически — он только показывает расчёт.</p>
      </article>
      ${selfActivityWarningHtml}
      ${employeesWarningHtml}
    `;
    els.regimeConfirmSubmit.textContent = "Посмотреть сценарий";
  } else {
    els.regimeConfirmTitle.textContent = "Переключить режим?";
    els.regimeConfirmBody.innerHTML = `
      <p class="regime-help-lead">После переключения суммы налогов, сроки и подсказки пересчитаются под режим «${escapeHtml(targetLabel)}».</p>
      <article class="regime-help-reason">
        <h4>Что важно помнить</h4>
        <p>Это не меняет ваш режим в налоговой автоматически — меняется только расчёт внутри сервиса.</p>
      </article>
      ${employeesWarningHtml}
    `;
    els.regimeConfirmSubmit.textContent = "Переключить режим";
  }

  openModal(els.regimeConfirmModal);
  return true;
}

function applyResolvedRegimeChange(requestedRegime, resolved, source = "") {
  if (!resolved || !resolved.regime) {
    syncRegimeControlsToState();
    return;
  }

  state.regime = resolved.regime;
  saveState();
  renderDashboard();
  syncRegimeControlsToState();
  if (resolved.showHelpModal) {
    window.setTimeout(() => {
      openRegimeHelpModal(requestedRegime);
    }, 40);
  }
  trackEvent("regime_change", { regime: state.regime, requestedRegime, source });
}

function requestRegimeChange(nextRegime, source = "header_select") {
  const requestedRegime = String(nextRegime || "").trim();
  if (!["self", "simplified", "our"].includes(requestedRegime)) {
    return;
  }

  if (requestedRegime === "our") {
    syncRegimeControlsToState();
    if (source === "mobile_drawer") {
      closeMobileDrawerAndThen(() => openRegimeHelpModal("our"));
    } else {
      openRegimeHelpModal("our");
    }
    trackEvent("regime_unavailable_open", { regime: "our", source });
    return;
  }

  const resolved = resolveAllowedRegime(requestedRegime);
  const shouldSwitch = state.regime !== resolved.regime;
  const shouldOnlyExplain = !shouldSwitch && resolved.showHelpModal;
  const shouldConfirm = shouldSwitch && hasMeaningfulRegimeSwitchData();

  if (shouldConfirm) {
    syncRegimeControlsToState();
    const openConfirm = () => {
      openRegimeConfirmModal(requestedRegime, resolved, source);
    };

    if (source === "mobile_drawer") {
      closeMobileDrawerAndThen(openConfirm);
    } else {
      openConfirm();
    }
    return;
  }

  if (shouldOnlyExplain) {
    syncRegimeControlsToState();
    if (source === "mobile_drawer") {
      closeMobileDrawerAndThen(() => openRegimeHelpModal(requestedRegime));
    } else {
      openRegimeHelpModal(requestedRegime);
    }
    return;
  }

  if (shouldSwitch) {
    if (source === "mobile_drawer" && resolved.showHelpModal) {
      closeMobileDrawerAndThen(() => applyResolvedRegimeChange(requestedRegime, resolved, source));
      return;
    }
    applyResolvedRegimeChange(requestedRegime, resolved, source);
  } else {
    syncRegimeControlsToState();
  }
}

function isRemindersEmailEnabled() {
  if (!(els.remindersEmailSwitch instanceof HTMLButtonElement)) {
    return true;
  }
  return els.remindersEmailSwitch.getAttribute("aria-checked") === "true";
}

function setRemindersEmailEnabled(enabled) {
  const nextEnabled = Boolean(enabled);
  if (els.remindersEmailToggle) {
    els.remindersEmailToggle.classList.toggle("is-on", nextEnabled);
    els.remindersEmailToggle.classList.toggle("is-off", !nextEnabled);
  }
  if (els.remindersEmailSwitch instanceof HTMLButtonElement) {
    els.remindersEmailSwitch.setAttribute("aria-checked", nextEnabled ? "true" : "false");
    els.remindersEmailSwitch.setAttribute("title", nextEnabled ? "Выключить уведомления на email" : "Включить уведомления на email");
  }
  if (els.remindersEmailFieldWrap) {
    els.remindersEmailFieldWrap.classList.toggle("hidden", !nextEnabled);
  }
  if (els.remindersSettingsEmail instanceof HTMLInputElement) {
    els.remindersSettingsEmail.disabled = !nextEnabled;
    if (!nextEnabled) {
      els.remindersSettingsEmail.classList.remove("is-invalid");
      els.remindersSettingsEmail.removeAttribute("aria-invalid");
    }
  }
}

function syncRemindersSettingsFormState(showError = false) {
  if (!els.remindersSettingsEmail || !els.remindersSettingsSubmit) {
    return false;
  }

  const emailEnabled = isRemindersEmailEnabled();
  const email = emailEnabled ? String(els.remindersSettingsEmail.value || "").trim() : "";
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
    if (emailEnabled) {
      els.remindersSettingsEmail.classList.add("is-invalid");
      els.remindersSettingsEmail.setAttribute("aria-invalid", "true");
    } else {
      els.remindersSettingsEmail.classList.remove("is-invalid");
      els.remindersSettingsEmail.removeAttribute("aria-invalid");
    }
    if (els.remindersSettingsHint) {
      els.remindersSettingsHint.textContent = "Укажите хотя бы Email или подключите Telegram.";
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
    els.remindersSetupTitle.textContent = isEdit ? "Изменить настройки напоминаний" : "Настройка напоминаний";
  }

  if (els.remindersSettingsSubmit) {
    els.remindersSettingsSubmit.textContent = "Сохранить настройки";
  }

  if (els.remindersSettingsDisableLink) {
    els.remindersSettingsDisableLink.classList.toggle("hidden", !Boolean(state.remindersEnabled));
  }

  const storedEmail = state.reminders && typeof state.reminders === "object"
    ? String(state.reminders.email || "").trim()
    : "";
  const currentEmail = storedEmail || (!state.reminders ? getReminderDefaultEmail() : "");
  els.remindersSettingsEmail.value = currentEmail;
  setRemindersEmailEnabled(Boolean(currentEmail));

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

  const title = enabled ? "Напоминание активно" : "Напоминания выключены";
  const text = enabled
    ? `Вы получите уведомление за ${daysLabel} дней до срока`
    : "Включите напоминания чтобы получать уведомления о сроках оплаты";
  const buttonLabel = enabled ? "Настроить →" : "Включить →";

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

function shouldShowFirstIncomeProNudge() {
  refreshSubscriptionState();
  return !isProActive() && !hasUsedFreeProTrial(state.subscription) && !state.firstIncomeProNudgeSeen;
}

function ensureFirstIncomeProNudgeHost() {
  let host = document.getElementById("firstIncomeProNudge");
  if (!host) {
    host = document.createElement("div");
    host.id = "firstIncomeProNudge";
    host.className = "pro-nudge-host hidden";
    document.body.appendChild(host);
  }
  return host;
}

function hideFirstIncomeProNudge() {
  const host = document.getElementById("firstIncomeProNudge");
  if (!host) return;
  host.classList.remove("show");
  host.classList.add("hidden");
}

function showFirstIncomeProNudge() {
  if (!shouldShowFirstIncomeProNudge()) {
    return;
  }

  state.firstIncomeProNudgeSeen = true;
  saveState();

  const host = ensureFirstIncomeProNudgeHost();
  host.innerHTML = `
    <section class="pro-nudge-card" role="status" aria-live="polite" aria-label="Предложение Pro">
      <button type="button" class="pro-nudge-close" data-action="dismiss-first-income-pro-nudge" aria-label="Закрыть предложение">×</button>
      <div class="pro-nudge-eyebrow">30 дней Pro бесплатно</div>
      <h4>Первый доход сохранён</h4>
      <p>Откройте напоминания, экспорт и аналитику сразу. Потом — ${PRO_PRICE_MONTHLY_LABEL}. Без карты на старте.</p>
      <div class="pro-nudge-actions">
        <button type="button" class="btn btn-primary btn-sm" data-action="open-first-income-pro" title="${PRO_AFTER_TRIAL_TOOLTIP}">Получить Pro бесплатно</button>
        <button type="button" class="btn btn-ghost btn-sm" data-action="dismiss-first-income-pro-nudge">Позже</button>
      </div>
    </section>
  `;
  host.classList.remove("hidden");
  requestAnimationFrame(() => {
    host.classList.add("show");
  });
  trackEvent("first_income_pro_nudge_shown");
}

function scrollAppViewportToTop() {
  const mainArea = document.querySelector(".main-area");
  const targets = [
    document.scrollingElement,
    document.documentElement,
    document.body,
    mainArea,
    els.dashboardApp,
    els.pageContent
  ];

  targets.forEach((target) => {
    if (!target) return;

    if (typeof target.scrollTo === "function") {
      try {
        target.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      } catch (_error) {
        // fallback to scrollTop below
      }
    }

    if ("scrollTop" in target) {
      target.scrollTop = 0;
    }
  });

  if (typeof window.scrollTo === "function") {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (_error) {
      window.scrollTo(0, 0);
    }
  }
}

function queueCrmScrollTo(targetId) {
  crmPendingScrollTarget = String(targetId || "").trim();
}

function applyPendingCrmScroll() {
  const targetId = String(crmPendingScrollTarget || "").trim();
  if (!targetId) {
    return;
  }

  crmPendingScrollTarget = "";
  const node = document.getElementById(targetId);
  if (!(node instanceof HTMLElement)) {
    return;
  }

  const scrollFn = () => node.scrollIntoView({ behavior: "smooth", block: "start" });
  if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(scrollFn);
  } else {
    scrollFn();
  }
}

function openCrmIncomeJournal() {
  if (!state.isLoggedIn) {
    return;
  }
  navigateToPage("income", "crm_open_income");
}

function setCrmTab(tab, scrollTarget = "") {
  if (state.page !== "crm") {
    return;
  }
  state.crmTab = normalizeCrmTab(tab);
  if (state.crmTab !== "clients") {
    state.crmSelectedCustomerId = null;
  }
  if (scrollTarget) {
    queueCrmScrollTo(scrollTarget);
  }
  saveState();
  renderDashboard();
}

function setCrmSalesPanel(panel, scrollTarget = "") {
  if (state.page !== "crm") {
    return;
  }
  const nextPanel = normalizeCrmSalesPanel(panel);
  state.crmTab = "sales";
  state.crmSelectedCustomerId = null;
  state.crmSalesPanel = nextPanel;
  if (nextPanel === "sale") {
    state.crmSaleEditId = null;
    state.crmPaymentEditId = null;
    state.crmSaleDraftCustomerId = null;
    state.crmPaymentDraftSaleId = null;
  } else if (nextPanel === "payment") {
    state.crmSaleEditId = null;
    state.crmPaymentEditId = null;
    state.crmSaleDraftCustomerId = null;
    state.crmPaymentDraftSaleId = null;
  } else {
    state.crmSaleEditId = null;
    state.crmPaymentEditId = null;
    state.crmSaleDraftCustomerId = null;
    state.crmPaymentDraftSaleId = null;
  }
  if (scrollTarget) {
    queueCrmScrollTo(scrollTarget);
  }
  saveState();
  renderDashboard();
}

function setCrmCustomerFormOpen(isOpen, scrollTarget = "") {
  if (state.page !== "crm") {
    return;
  }
  state.crmTab = "clients";
  state.crmSelectedCustomerId = null;
  state.crmCustomerFormOpen = Boolean(isOpen);
  if (scrollTarget) {
    queueCrmScrollTo(scrollTarget);
  }
  saveState();
  renderDashboard();
}

function startCrmCustomerEdit(customerId) {
  const safeCustomerId = Number(customerId || 0) || null;
  if (!safeCustomerId || state.page !== "crm") {
    return;
  }
  state.crmTab = "clients";
  state.crmCustomerEditId = safeCustomerId;
  state.crmSelectedCustomerId = null;
  state.crmCustomerFormOpen = true;
  saveState();
  renderDashboard();
  trackEvent("crm_customer_edit_open", { id: safeCustomerId });
}

function openCrmCustomerCard(customerId) {
  const safeCustomerId = Number(customerId || 0) || null;
  if (!safeCustomerId || state.page !== "crm") {
    return;
  }
  state.crmTab = "clients";
  state.crmSelectedCustomerId = safeCustomerId;
  saveState();
  renderDashboard();
  trackEvent("crm_customer_card_open", { id: safeCustomerId });
}

function deleteCrmCustomer(customerId) {
  const safeCustomerId = Number(customerId || 0) || 0;
  if (!safeCustomerId || state.page !== "crm") {
    return;
  }
  const customer = state.crmCustomers.find((row) => row.id === safeCustomerId);
  if (!customer) {
    return;
  }

  const linkedSalesCount = state.crmSales.filter((sale) => Number(sale.customerId || 0) === safeCustomerId).length;
  const confirmText = linkedSalesCount > 0
    ? `Удалить клиента ${customer.name}?\nПродажи останутся в CRM, но будут отвязаны от клиента.`
    : `Удалить клиента ${customer.name}?`;
  if (!window.confirm(confirmText)) {
    return;
  }

  state.crmCustomers = state.crmCustomers.filter((row) => row.id !== safeCustomerId);
  state.crmSales = state.crmSales.map((sale) =>
    Number(sale.customerId || 0) === safeCustomerId
      ? { ...sale, customerId: 0, updatedAt: new Date().toISOString() }
      : sale
  );
  if (state.crmSaleDraftCustomerId === safeCustomerId) {
    state.crmSaleDraftCustomerId = null;
  }
  if (state.crmCustomerEditId === safeCustomerId) {
    state.crmCustomerEditId = null;
  }
  if (state.crmSelectedCustomerId === safeCustomerId) {
    state.crmSelectedCustomerId = null;
  }
  syncCrmSalesWithIncomeJournal();
  saveState();
  renderDashboard();
  showAppToast(
    linkedSalesCount > 0
      ? "Клиент удалён. Продажи сохранены и отвязаны от клиента."
      : "Клиент удалён."
  );
  trackEvent("crm_customer_delete", { id: safeCustomerId, linkedSalesCount });
}

function startCrmSaleEdit(saleId) {
  const safeSaleId = Number(saleId || 0) || null;
  if (!safeSaleId || state.page !== "crm") {
    return;
  }
  state.crmTab = "sales";
  state.crmSelectedCustomerId = null;
  state.crmSalesPanel = "sale";
  state.crmSaleEditId = safeSaleId;
  state.crmPaymentEditId = null;
  state.crmSaleDraftCustomerId = null;
  state.crmPaymentDraftSaleId = null;
  saveState();
  renderDashboard();
  trackEvent("crm_sale_edit_open", { id: safeSaleId });
}

function prefillCrmSale(customerId) {
  const safeCustomerId = Number(customerId || 0) || null;
  if (!safeCustomerId || state.page !== "crm") {
    return;
  }
  state.crmSelectedCustomerId = null;
  state.crmSaleEditId = null;
  state.crmPaymentEditId = null;
  state.crmSaleDraftCustomerId = safeCustomerId;
  saveState();
  renderDashboard();
  trackEvent("crm_sale_prefill", { customerId: safeCustomerId });
}

function closeCrmQuickSale() {
  if (!state.crmSaleDraftCustomerId) {
    return;
  }
  state.crmSaleDraftCustomerId = null;
  saveState();
  renderDashboard();
}

function closeCrmSaleComposer() {
  if (state.page !== "crm") {
    return;
  }
  state.crmSalesPanel = "";
  state.crmSaleEditId = null;
  state.crmSaleDraftCustomerId = null;
  saveState();
  renderDashboard();
}

function closeCrmPaymentComposer() {
  if (state.page !== "crm") {
    return;
  }
  state.crmSalesPanel = "";
  state.crmPaymentEditId = null;
  state.crmPaymentDraftSaleId = null;
  saveState();
  renderDashboard();
}

function closeCrmCustomerComposer() {
  if (state.page !== "crm") {
    return;
  }
  state.crmCustomerFormOpen = false;
  state.crmCustomerEditId = null;
  saveState();
  renderDashboard();
}

function deleteCrmSale(saleId) {
  const safeSaleId = Number(saleId || 0) || 0;
  if (!safeSaleId || state.page !== "crm") {
    return;
  }
  const sale = state.crmSales.find((row) => row.id === safeSaleId);
  if (!sale) {
    return;
  }

  const linkedPaymentsCount = state.crmPayments.filter((row) => Number(row.saleId || 0) === safeSaleId).length;
  const ok = window.confirm(
    linkedPaymentsCount > 0
      ? `Удалить продажу на ${fmt(sale.amount)}?\nВсе связанные оплаты и доходы тоже будут убраны.`
      : `Удалить продажу на ${fmt(sale.amount)}?`
  );
  if (!ok) {
    return;
  }

  const hadLinkedIncome = linkedPaymentsCount > 0 || Boolean(sale.linkedIncomeId);
  state.crmSales = state.crmSales.filter((row) => row.id !== safeSaleId);
  state.crmPayments = state.crmPayments.filter((row) => Number(row.saleId || 0) !== safeSaleId);
  if (state.crmSaleEditId === safeSaleId) {
    state.crmSaleEditId = null;
  }
  if (state.crmPaymentEditId && !state.crmPayments.some((row) => row.id === state.crmPaymentEditId)) {
    state.crmPaymentEditId = null;
  }
  syncCrmSalesWithIncomeJournal();
  saveState();
  renderDashboard();
  showAppToast(hadLinkedIncome ? "Продажа удалена и убрана из доходов." : "Продажа удалена.");
  trackEvent("crm_sale_delete", { id: safeSaleId, hadLinkedIncome, linkedPaymentsCount });
}

function startCrmPaymentEdit(paymentId) {
  const safePaymentId = Number(paymentId || 0) || null;
  if (!safePaymentId || state.page !== "crm") {
    return;
  }
  state.crmTab = "sales";
  state.crmSelectedCustomerId = null;
  state.crmSalesPanel = "payment";
  state.crmPaymentEditId = safePaymentId;
  state.crmSaleDraftCustomerId = null;
  state.crmPaymentDraftSaleId = null;
  saveState();
  renderDashboard();
  trackEvent("crm_payment_edit_open", { id: safePaymentId });
}

function prefillCrmPayment(saleId) {
  const safeSaleId = Number(saleId || 0) || null;
  if (!safeSaleId || state.page !== "crm") {
    return;
  }
  state.crmTab = "sales";
  state.crmSelectedCustomerId = null;
  state.crmSalesPanel = "payment";
  state.crmPaymentDraftSaleId = safeSaleId;
  state.crmPaymentEditId = null;
  saveState();
  renderDashboard();
  trackEvent("crm_payment_prefill", { saleId: safeSaleId });
}

function deleteCrmPayment(paymentId) {
  const safePaymentId = Number(paymentId || 0) || 0;
  if (!safePaymentId || state.page !== "crm") {
    return;
  }
  const payment = state.crmPayments.find((row) => row.id === safePaymentId);
  if (!payment) {
    return;
  }

  const ok = window.confirm(`Удалить оплату на ${fmt(payment.amount)}?\nСвязанный доход тоже будет убран.`);
  if (!ok) {
    return;
  }

  state.crmPayments = state.crmPayments.filter((row) => row.id !== safePaymentId);
  if (state.crmPaymentEditId === safePaymentId) {
    state.crmPaymentEditId = null;
  }
  syncCrmSalesWithIncomeJournal();
  saveState();
  renderDashboard();
  showAppToast("Оплата удалена и убрана из доходов.");
  trackEvent("crm_payment_delete", { id: safePaymentId });
}

function updateAuthUi() {
  if (state.isLoggedIn) {
    els.publicApp.classList.add("hidden");
    els.dashboardApp.classList.remove("hidden");
    updatePublicNavStickyState();
    els.accountName.textContent = getProfileDisplayName();
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
  updatePublicNavStickyState();
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

  if (els.planBadge) {
    if (proActive) {
      els.planBadge.innerHTML = '<span class="plan-badge plan-pro">Pro &#10003;</span>';
    } else if (trialActive) {
      els.planBadge.innerHTML = '<span class="plan-badge plan-trial">Базовый</span>';
    } else {
      els.planBadge.innerHTML = '<span class="plan-badge plan-trial">Базовый</span>';
    }
  }

  if (els.mobileDrawerPlanBadge) {
    if (proActive) {
      els.mobileDrawerPlanBadge.innerHTML = '<span class="plan-badge plan-pro">Pro &#10003;</span>';
    } else if (trialActive) {
      els.mobileDrawerPlanBadge.innerHTML = '<span class="plan-badge plan-trial">Базовый</span>';
    } else {
      els.mobileDrawerPlanBadge.innerHTML = '<span class="plan-badge plan-trial">Базовый</span>';
    }
  }

  if (els.proBtn) {
    els.proBtn.classList.remove("hidden");
    els.proBtn.textContent = proActive ? "Тариф" : "Тарифы";
  }

  if (els.mobileDrawerProBtn) {
    if (proActive) {
      const proDaysLeft = getProDaysLeft(state.subscription);
      els.mobileDrawerProBtn.classList.add("is-active");
      els.mobileDrawerProBtn.innerHTML = `<i class="mobile-drawer-pro-icon" data-lucide="check-circle"></i><span>Подписка активна · ${proDaysLeft} дн.</span>`;
      els.mobileDrawerProBtn.setAttribute("aria-label", `Подписка активна, осталось ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}`);
      els.mobileDrawerProBtn.setAttribute("title", `Осталось ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}`);
    } else {
      els.mobileDrawerProBtn.classList.remove("is-active");
      els.mobileDrawerProBtn.innerHTML = '<i class="mobile-drawer-pro-icon" data-lucide="zap"></i><span>30 дней Pro — бесплатно</span>';
      els.mobileDrawerProBtn.setAttribute("aria-label", `Активировать 30 дней Pro бесплатно, ${PRO_AFTER_TRIAL_TOOLTIP}`);
      els.mobileDrawerProBtn.setAttribute("title", PRO_AFTER_TRIAL_TOOLTIP);
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

  const clickInsideSettingsCity = Boolean(event.target.closest("[data-settings-city-shell]"));
  if (!clickInsideSettingsCity) {
    closeSettingsCitySuggestions();
  }

  const settingsCitySuggestionBtn = event.target.closest("[data-settings-city-option]");
  if (settingsCitySuggestionBtn && state.page === "settings") {
    const cityValue = String(settingsCitySuggestionBtn.dataset.settingsCityOption || "").trim();
    const settingsCityInput = document.getElementById("settingsCityInput");
    if (settingsCityInput instanceof HTMLInputElement) {
      settingsCityInput.value = cityValue;
      settingsCityInput.focus({ preventScroll: true });
      if (typeof settingsCityInput.setSelectionRange === "function") {
        const pos = settingsCityInput.value.length;
        settingsCityInput.setSelectionRange(pos, pos);
      }
      closeSettingsCitySuggestions();
      const settingsForm = settingsCityInput.closest("#settingsForm");
      if (settingsForm instanceof HTMLFormElement) {
        updateSettingsSaveButtonState(settingsForm);
      }
    }
    return;
  }

  const settingsCityInput = event.target.closest("#settingsCityInput");
  if (settingsCityInput instanceof HTMLInputElement && state.page === "settings") {
    renderSettingsCitySuggestions(settingsCityInput);
    return;
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

    if (action === "go-home") {
      if (state.isLoggedIn) {
        state.page = "dashboard";
        saveState();
        closeMobileDrawer();
        if (els.dashboardApp) {
          els.dashboardApp.classList.remove("sidebar-open");
        }
        if (els.mobileMoreModal) {
          closeModal(els.mobileMoreModal);
        }
        renderDashboard();
        scrollAppViewportToTop();
        trackEvent("page_open", { page: "dashboard", source: "logo" });
        return;
      }

      if (els.deadlineModal && !els.deadlineModal.classList.contains("hidden")) {
        state.landingDeadlineOpenId = null;
        saveState();
        closeModal(els.deadlineModal);
      }
      if (els.loginModal && !els.loginModal.classList.contains("hidden")) {
        closeModal(els.loginModal);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      trackEvent("landing_logo_click");
      return;
    }

    if (action === "open-income-page" && state.isLoggedIn) {
      navigateToPage("income", actionEl.dataset.navSource || "income_cta");
      return;
    }

    if (action === "dashboard-recent-month-prev" && state.isLoggedIn && state.page === "dashboard") {
      const { minMonthIndex, maxMonthIndex } = getDashboardVisibleMonthRange();
      const selectedMonthRaw = Number(state.dashboardSelectedMonth);
      const selectedMonth = Number.isFinite(selectedMonthRaw)
        ? Math.min(maxMonthIndex, Math.max(minMonthIndex, Math.trunc(selectedMonthRaw)))
        : maxMonthIndex;
      const prevMonth = Math.max(minMonthIndex, selectedMonth - 1);
      if (prevMonth === selectedMonth) {
        return;
      }
      state.dashboardSelectedMonth = prevMonth;
      renderDashboard();
      trackEvent("dashboard_recent_month_prev", { month: state.dashboardSelectedMonth });
      return;
    }

    if (action === "dashboard-recent-month-next" && state.isLoggedIn && state.page === "dashboard") {
      const { minMonthIndex, maxMonthIndex } = getDashboardVisibleMonthRange();
      const selectedMonthRaw = Number(state.dashboardSelectedMonth);
      const selectedMonth = Number.isFinite(selectedMonthRaw)
        ? Math.min(maxMonthIndex, Math.max(minMonthIndex, Math.trunc(selectedMonthRaw)))
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
      const { minMonthIndex, maxMonthIndex } = getDashboardVisibleMonthRange();
      if (!Number.isFinite(monthIndex)) {
        return;
      }
      state.dashboardSelectedMonth = Math.min(maxMonthIndex, Math.max(minMonthIndex, Math.trunc(monthIndex)));
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

      showAppToast(nextEnabled ? "Напоминания включены" : "Напоминания выключены");
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

    if (action === "toggle-reminders-email") {
      setRemindersEmailEnabled(!isRemindersEmailEnabled());
      syncRemindersSettingsFormState(false);
      return;
    }

    if (action === "close-reminders-settings") {
      if (els.remindersSetupModal) {
        closeModal(els.remindersSetupModal);
      }
      return;
    }

    if (action === "send-reminders-test" && state.isLoggedIn) {
      const testBtn = actionEl instanceof HTMLButtonElement
        ? actionEl
        : (els.remindersSettingsTestBtn instanceof HTMLButtonElement ? els.remindersSettingsTestBtn : null);
      if (testBtn) {
        testBtn.disabled = true;
      }

      void (async () => {
        const supabase = supabaseClient;
        if (!supabase || !supabase.auth || typeof supabase.auth.getUser !== "function" || !supabase.functions || typeof supabase.functions.invoke !== "function") {
          showAppToast("Не удалось отправить тестовое уведомление");
          if (testBtn) {
            testBtn.disabled = false;
          }
          return;
        }

        try {
          let userId = String(state.userId || "").trim();
          const { data: userData } = await supabase.auth.getUser();
          userId = String(userData?.user?.id || state.userId || "").trim();

          const response = await fetch(
            "https://qayvdwitfdqptzgguoyj.supabase.co/functions/v1/send-test-notification",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + (await supabase.auth.getSession())?.data?.session?.access_token
              },
              body: JSON.stringify({ user_id: userId })
            }
          );

          if (!response.ok) {
            showAppToast("Не удалось отправить тестовое уведомление");
            return;
          }

          showAppToast("Тестовое уведомление отправлено ✅");
          trackEvent("calendar_reminders_test_sent", { source: "settings_modal" });
        } catch (_error) {
          showAppToast("Не удалось отправить тестовое уведомление");
        } finally {
          if (testBtn) {
            testBtn.disabled = false;
          }
        }
      })();
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

    if (action === "disconnect-reminders-telegram" && state.isLoggedIn) {
      const current = normalizeGlobalReminders(state.reminders, getReminderDefaultEmail()) || getDefaultGlobalReminders();
      const disconnectBtn = els.remindersTelegramDisconnectBtn;
      if (disconnectBtn) {
        disconnectBtn.disabled = true;
      }

      void (async () => {
        const supabase = supabaseClient;
        if (!supabase || !supabase.auth || typeof supabase.auth.getUser !== "function") {
          showAppToast("Не удалось отключить Telegram");
          if (disconnectBtn) {
            disconnectBtn.disabled = false;
          }
          return;
        }

        try {
          const { data, error } = await supabase.auth.getUser();
          const userId = String(data && data.user && data.user.id ? data.user.id : "").trim();
          if (error || !userId) {
            showAppToast("Не удалось отключить Telegram");
            if (disconnectBtn) {
              disconnectBtn.disabled = false;
            }
            return;
          }

          const { error: updateError } = await supabase
            .from("user_notifications")
            .update({ telegram_chat_id: null })
            .eq("user_id", userId);
          if (updateError) {
            showAppToast("Не удалось отключить Telegram");
            if (disconnectBtn) {
              disconnectBtn.disabled = false;
            }
            return;
          }

          state.reminders = {
            ...current,
            telegram: "",
            telegramConnected: false
          };
          saveState();
          syncRemindersTelegramUi(state.reminders);
          syncRemindersSettingsFormState(false);

          showAppToast("Telegram отключён");
          trackEvent("calendar_reminders_telegram_disconnect", { source: "settings_modal" });
        } catch (_error) {
          showAppToast("Не удалось отключить Telegram");
        } finally {
          if (disconnectBtn) {
            disconnectBtn.disabled = false;
          }
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

      showAppToast("Напоминания выключены");
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

    if (action === "open-employee-modal" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0) || null;
      openEmployeeModal(employeeId);
      return;
    }

    if (action === "close-employee-modal") {
      if (els.employeeModal) {
        closeModal(els.employeeModal);
      }
      return;
    }

    if (action === "close-income-edit-modal") {
      cancelIncomeEdit();
      return;
    }

    if (action === "add-employee-salary-change") {
      const currentRows = readEmployeeSalaryChangeDraftFromDom();
      const fallbackMonth = currentRows.length > 0
        ? shiftDashboardMonthKey(currentRows[currentRows.length - 1].month, 1)
        : shiftDashboardMonthKey(
          normalizeEmployeeStartMonth(els.employeeStartMonthInput && els.employeeStartMonthInput.value, formatDashboardMonthKey(new Date())),
          1
        );
      currentRows.push(createEmployeeSalaryChangeDraftRow(fallbackMonth, normalizeIncome(els.employeeSalaryInput && els.employeeSalaryInput.value) || MZP_2026));
      setEmployeeSalaryChangeDraft(currentRows);
      return;
    }

    if (action === "add-employee-monthly-accrual") {
      const currentRows = readEmployeeMonthlyAccrualDraftFromDom();
      const fallbackMonth = currentRows.length > 0
        ? shiftDashboardMonthKey(currentRows[currentRows.length - 1].month, 1)
        : normalizeEmployeeStartMonth(els.employeeStartMonthInput && els.employeeStartMonthInput.value, formatDashboardMonthKey(new Date()));
      currentRows.push(createEmployeeMonthlyAccrualDraftRow(fallbackMonth, normalizeIncome(els.employeeSalaryInput && els.employeeSalaryInput.value) || MZP_2026));
      setEmployeeMonthlyAccrualDraft(currentRows);
      if (els.employeeMonthlyAccrualsDetails) {
        els.employeeMonthlyAccrualsDetails.open = true;
      }
      return;
    }

    if (action === "remove-employee-salary-change") {
      const rowId = String(actionEl.dataset.rowId || "").trim();
      if (!rowId) return;
      const nextRows = readEmployeeSalaryChangeDraftFromDom().filter((row) => row.uid !== rowId);
      setEmployeeSalaryChangeDraft(nextRows);
      return;
    }

    if (action === "remove-employee-monthly-accrual") {
      const rowId = String(actionEl.dataset.rowId || "").trim();
      if (!rowId) return;
      const nextRows = readEmployeeMonthlyAccrualDraftFromDom().filter((row) => row.uid !== rowId);
      setEmployeeMonthlyAccrualDraft(nextRows);
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

    if (action === "open-unavailable-regime") {
      const regime = String(actionEl.dataset.regime || "").trim();
      const income = Number(actionEl.dataset.income || getSelectedRegimeMonthlyIncome()) || getSelectedRegimeMonthlyIncome();
      openRegimeHelpModal(regime, income);
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
      const allowedPages = new Set(["dashboard", "income", "employees", "crm", "taxes", "calendar", "calculator", "knowledge", "feedback", "settings"]);
      if (!allowedPages.has(nextPage)) {
        return;
      }
      navigateToPage(nextPage, "mobile_more");
      return;
    }

    if (action === "mobile-more-open-pro" && state.isLoggedIn) {
      if (els.mobileMoreModal) {
        closeModal(els.mobileMoreModal);
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
    if (action === "onboarding-complete" && shouldShowOnboarding()) {
      const onboarding = normalizeOnboarding(state.onboarding);
      const resolvedRegime = resolveAllowedRegime(onboarding.regime, 0);
      const reserveSource = state.taxPlanner && Number.isFinite(Number(state.taxPlanner.reservePct))
        ? Number(state.taxPlanner.reservePct)
        : 15;

      state.regime = resolvedRegime.regime;
      state.incomes = [];
      state.calcIncome = 0;
      state.calcExpenses = 0;
      state.taxPlanner = normalizeTaxPlanner(
        {
          ...(state.taxPlanner || {}),
          income: 0,
          expenses: 0,
          reservePct: reserveSource
        },
        0,
        0,
        reserveSource
      );
      dashboardDemoMode = false;
      dashboardDemoIncomes = [];

      state.profile = sanitizeProfile({
        ...state.profile,
        hasEmployees: resolvedRegime.regime === "self" ? "no" : onboarding.hasEmployees
      });

      state.onboarding = {
        ...onboarding,
        version: ONBOARDING_FLOW_VERSION,
        completed: true,
        step: ONBOARDING_STEPS_TOTAL,
        userEmail: normalizeEmail(state.userEmail),
        userId: String(state.userId || "").trim()
      };
      state.page = "dashboard";
      setOnboardingTourForced(true);
      saveState();
      void persistOnboardingAccountState({
        flow: {
          completed: true,
          step: ONBOARDING_STEPS_TOTAL,
          regime: resolvedRegime.regime,
          hasEmployees: resolvedRegime.regime === "self" ? "no" : onboarding.hasEmployees,
          income: 0
        }
      });
      renderDashboard();
      if (resolvedRegime.switched) {
        showAppToast(getRegimeFallbackMessage(resolvedRegime.reason, onboarding.regime));
      }
      trackEvent("onboarding_complete", {
        page: state.page,
        regime: state.regime,
        income: 0,
        savedIncome: false,
        hasEmployees: resolvedRegime.regime === "self" ? "no" : onboarding.hasEmployees
      });
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

    if (action === "dismiss-first-income-pro-nudge") {
      hideFirstIncomeProNudge();
      trackEvent("first_income_pro_nudge_dismiss");
      return;
    }

    if (action === "load-dashboard-demo") {
      dashboardDemoMode = true;
      dashboardDemoIncomes = buildDashboardDemoIncomes();
      state.page = "dashboard";
      saveState();
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

      trackEvent("landing_practical_cta_click", { income: normalizeIncome(els.landingIncome && els.landingIncome.value || 0) });
      return;
    }
    if (action === "open-pro") {
      closeMobileDrawer();
      renderProModal(state.paywallFeature || "");
      openModal(els.proModal);
      trackEvent("open_pro_modal", { feature: state.paywallFeature || "" });
      return;
    }

    if (action === "open-first-income-pro") {
      hideFirstIncomeProNudge();
      state.paywallFeature = "";
      saveState();
      renderProModal("");
      openModal(els.proModal);
      trackEvent("open_pro_modal", { feature: "", source: "first_income_nudge" });
      return;
    }

    if (action === "open-feature-info") {
      const featureKey = String(actionEl.dataset.featureKey || "");
      openFeatureInfoModal(featureKey);
      trackEvent("subscription_feature_info_open", { feature: featureKey || "unknown" });
      return;
    }

    if (action === "close-pro") {
      closeModal(els.proModal);
      return;
    }

    if (action === "close-regime-help") {
      closeModal(els.regimeHelpModal);
      return;
    }

    if (action === "close-regime-confirm") {
      pendingRegimeChange = null;
      syncRegimeControlsToState();
      closeModal(els.regimeConfirmModal);
      return;
    }

    if (action === "confirm-regime-change") {
      const pending = pendingRegimeChange;
      pendingRegimeChange = null;
      closeModal(els.regimeConfirmModal);
      if (!pending) {
        syncRegimeControlsToState();
        return;
      }
      const resolvedForApply = pending.skipHelpModalAfterConfirm
        ? { ...pending.resolved, showHelpModal: false }
        : pending.resolved;
      applyResolvedRegimeChange(pending.requestedRegime, resolvedForApply, pending.source || "confirm_modal");
      if (pending.skipHelpModalAfterConfirm) {
        showAppToast("Вы смотрите сценарий самозанятого");
      }
      return;
    }

    if (action === "confirm-cancel-pro") {
      if (!isProActive()) return;
      const shouldCancel = window.confirm("Точно отключить Pro-подписку сейчас?\nПремиум-функции станут недоступны сразу. Подключить Pro можно снова в любой момент.");
      if (!shouldCancel) return;

      const previousExpiry = String(state.subscription.planExpiry || "").trim();
      state.subscription = normalizeSubscription({
        ...state.subscription,
        plan: "trial",
        status: "trial",
        lastExpiredPlanExpiry: previousExpiry || state.subscription.lastExpiredPlanExpiry || "",
        planExpiry: "",
        trialEndsAt: "",
        expiryNoticePending: false
      });
      refreshSubscriptionState();
      saveState();
      updatePlanUi();
      renderDashboard();
      closeModal(els.proModal);
      showAppToast("Pro отключен. Вы перешли на Trial.");
      trackEvent("pro_cancelled_manual");
      return;
    }

    if (action === "close-feature-info") {
      if (els.featureInfoModal) {
        closeModal(els.featureInfoModal);
      }
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

    if (action === "reset-onboarding-tour") {
      clearLocalOnboardingTourProgress();
      void persistOnboardingAccountState({
        tours: {
          dashboard: false,
          income: false,
          taxes: false,
          calendar: false
        }
      });

      setOnboardingTourForced(true);
      closeOnboardingTour(false, "debug_reset");

      const resetHint = document.getElementById("onboardingTourResetHint");
      if (resetHint) {
        resetHint.textContent = "Сброшено. Тур запущен на Главной.";
      }

      if (state.isLoggedIn) {
        state.page = "dashboard";
        saveState();
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
            resetHint.textContent = "Не удалось запустить тур автоматически. Обновите страницу и нажмите кнопку снова.";
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
        closeIncomeEditModal();
      }
      saveState();
      renderDashboard();
      trackEvent("income_delete", { id });
      return;
    }

    if (action === "edit-employee" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      if (!employeeId) {
        return;
      }

      openEmployeeModal(employeeId);
      return;
    }

    if (action === "employee-quick-add-iin" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      if (!employeeId) {
        return;
      }

      openEmployeeModal(employeeId, { focusField: "iin" });
      trackEvent("employee_quick_add_iin_open", { id: employeeId });
      return;
    }

    if (action === "employee-quick-accrual" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      if (!employeeId) {
        return;
      }

      openEmployeeModal(employeeId, { focusField: "monthlyAccrual", openMonthlyAccruals: true });
      trackEvent("employee_quick_accrual_open", { id: employeeId });
      return;
    }

    if (action === "dismiss-employee" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      const target = state.employees.find((employee) => Number(employee.id || 0) === employeeId);
      if (!target) {
        return;
      }

      if (target.endDate || target.endMonth) {
        openEmployeeModal(employeeId);
        return;
      }

      const suggestedEndDate = normalizeEmployeeEndDate(target.endDate, normalizeEmployeeDateValue(new Date(), ""));
      const confirmed = window.confirm(`Указать дату ухода для ${target.name}: до ${formatEmployeeDateLabel(suggestedEndDate)}? Позже дату можно изменить в редактировании.`);
      if (!confirmed) {
        return;
      }

      target.endDate = suggestedEndDate;
      target.endMonth = normalizeEmployeeEndMonth(suggestedEndDate);
      saveState();
      renderDashboard();
      trackEvent("employee_dismiss", { id: employeeId, endDate: suggestedEndDate, endMonth: target.endMonth });
      return;
    }

    if (action === "archive-employee" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      const target = state.employees.find((employee) => Number(employee.id || 0) === employeeId);
      if (!target) {
        return;
      }

      const confirmed = window.confirm(`Скрыть сотрудника ${target.name} из активных? Он останется в истории и в расчётах по своим месяцам.`);
      if (!confirmed) {
        return;
      }

      target.archived = true;
      state.employeesView = "archive";
      saveState();
      renderDashboard();
      trackEvent("employee_archive", { id: employeeId });
      return;
    }

    if (action === "restore-employee" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      const target = state.employees.find((employee) => Number(employee.id || 0) === employeeId);
      if (!target) {
        return;
      }

      target.archived = false;
      state.employeesView = "active";
      saveState();
      renderDashboard();
      trackEvent("employee_restore", { id: employeeId });
      return;
    }

    if (action === "clear-employee-end-date" && state.isLoggedIn) {
      const employeeId = Number(actionEl.dataset.employeeId || 0);
      const target = state.employees.find((employee) => Number(employee.id || 0) === employeeId);
      if (!target || (!target.endDate && !target.endMonth)) {
        return;
      }

      const confirmed = window.confirm(`Снять дату ухода у ${target.name}? Сотрудник снова будет считаться без даты завершения работы.`);
      if (!confirmed) {
        return;
      }

      target.endDate = "";
      target.endMonth = "";
      saveState();
      renderDashboard();
      trackEvent("employee_clear_end_date", { id: employeeId });
      return;
    }

    if (action === "set-employees-view" && state.isLoggedIn) {
      state.employeesView = normalizeEmployeesView(actionEl.dataset.employeesView || state.employeesView);
      saveState();
      renderDashboard();
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
            ? "Чеклист скопирован. Отправьте его бухгалтеру в Telegram/Email."
            : "Не удалось скопировать автоматически. Выделите текст вручную и отправьте бухгалтеру.";
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
            ? "План напоминаний скопирован. Можно передать команде или бухгалтеру."
            : "Не удалось скопировать план автоматически.";
        }
      });

      trackEvent("deadline_reminder_plan_copy", { id: deadlineId });
      return;
    }

    if (action === "set-fno910-period" && state.isLoggedIn && state.page === "reports") {
      const nextPeriodKey = normalizeFno910PeriodKey(actionEl.dataset.periodKey || "");
      const reportsState = ensureReportsState();
      if (!nextPeriodKey || nextPeriodKey === reportsState.fno910PeriodKey) {
        return;
      }

      state.reports = {
        ...reportsState,
        fno910PeriodKey: nextPeriodKey
      };
      saveState();
      renderDashboard();
      trackEvent("reports_fno910_period_change", { period: nextPeriodKey });
      return;
    }

    if (action === "set-reports-section" && state.isLoggedIn && state.page === "reports") {
      const nextSection = normalizeReportsActiveSection(actionEl.dataset.reportSection || "");
      const changed = setReportsActiveSection(nextSection);
      if (changed) {
        trackEvent("reports_section_change", { section: nextSection });
      }
      return;
    }

    if (action === "set-fno200-period" && state.isLoggedIn && state.page === "reports") {
      const nextPeriodKey = normalizeFno200PeriodKey(actionEl.dataset.periodKey || "");
      const reportsState = ensureReportsState();
      if (!nextPeriodKey || nextPeriodKey === reportsState.fno200PeriodKey) {
        return;
      }

      state.reports = {
        ...reportsState,
        fno200PeriodKey: nextPeriodKey
      };
      saveState();
      renderDashboard();
      trackEvent("reports_fno200_period_change", { period: nextPeriodKey });
      return;
    }

    if (action === "download-fno910-json" && state.isLoggedIn && state.page === "reports") {
      const reportsState = ensureReportsState();
      const model = buildFno910OfficialJsonModel(reportsState.fno910PeriodKey, { reports: reportsState });
      if (!model.readiness.canDownload) {
        const errorMessage = Array.isArray(model.validation && model.validation.errors) && model.validation.errors.length > 0
          ? model.validation.errors[0]
          : "Сначала заполните обязательные данные, чтобы скачать форму 910.";
        showAppToast(errorMessage);
        trackEvent("reports_fno910_json_download", { period: reportsState.fno910PeriodKey || "", downloaded: false, reason: "validation_failed" });
        return;
      }

      const downloaded = downloadFno910OfficialJson(model);
      showAppToast(downloaded
        ? "Форма 910 скачана. Теперь её можно загрузить в кабинет налоговой."
        : "Не удалось скачать форму 910.");
      trackEvent("reports_fno910_json_download", {
        period: reportsState.fno910PeriodKey || "",
        downloaded
      });
      return;
    }

    if (action === "download-fno910-pdf" && state.isLoggedIn && state.page === "reports") {
      const reportsState = ensureReportsState();
      const draft = getFno910Draft(reportsState.fno910PeriodKey);
      const model = buildFno910Model(reportsState.fno910PeriodKey, { reports: reportsState });
      if (String(draft.regime || "").trim() !== "simplified") {
        showAppToast("Печатный черновик 910 доступен только на режиме Упрощёнка (910).");
        trackEvent("reports_fno910_pdf_open", { period: reportsState.fno910PeriodKey || "", opened: false, reason: "wrong_regime" });
        return;
      }
      const opened = downloadFno910DraftPdf(draft, model);
      showAppToast(opened
        ? "Открыли печатный черновик. При необходимости выберите «Сохранить как PDF»."
        : "Не удалось открыть печатный черновик.");
      trackEvent("reports_fno910_pdf_open", { period: reportsState.fno910PeriodKey || "", opened });
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

  if (event.target === els.employeeModal) {
    closeModal(els.employeeModal);
    return;
  }

  if (event.target === els.featureInfoModal) {
    closeModal(els.featureInfoModal);
    return;
  }

  if (event.target === els.regimeHelpModal) {
    closeModal(els.regimeHelpModal);
    return;
  }

  if (event.target === els.regimeConfirmModal) {
    pendingRegimeChange = null;
    syncRegimeControlsToState();
    closeModal(els.regimeConfirmModal);
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

  if (event.target === els.incomeEditModal) {
    cancelIncomeEdit();
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
      if (regime === "our") {
        openRegimeHelpModal("our");
        trackEvent("onboarding_regime_unavailable", { regime });
        return;
      }
      const onboarding = normalizeOnboarding(state.onboarding);
      state.onboarding = {
        ...onboarding,
        regime,
        hasEmployees: regime === "self" ? "no" : onboarding.hasEmployees
      };
      saveState();
      renderDashboard();
      trackEvent("onboarding_regime_select", { regime });
    }
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
  const businessStatusBtn = event.target.closest("[data-landing-business-status]");
  if (businessStatusBtn) {
    state.landingBusinessStatus = businessStatusBtn.dataset.landingBusinessStatus === "no_ip" ? "no_ip" : "has_ip";
    saveState();
    renderLandingCards();
    renderLandingDeadlines();
    trackEvent("landing_business_status_change", { status: state.landingBusinessStatus });
    return;
  }

  const landingViewRegimeBtn = event.target.closest("[data-landing-view-regime]");
  if (landingViewRegimeBtn) {
    const nextRegime = String(landingViewRegimeBtn.dataset.landingViewRegime || "").trim();
    if (!["self", "simplified", "our"].includes(nextRegime)) return;
    if (nextRegime === "our") {
      openRegimeHelpModal("our");
      trackEvent("landing_view_regime_unavailable", { regime: nextRegime });
      return;
    }

    state.landingViewedRegime = nextRegime;
    saveState();
    renderLandingCards();
    trackEvent("landing_view_regime", { regime: state.landingViewedRegime });
    return;
  }

  const presetBtn = event.target.closest("[data-landing-preset]");
  if (presetBtn && els.landingIncome) {
    els.landingIncome.value = formatPlainAmount(presetBtn.dataset.landingPreset);
    renderLandingCards();
    renderLandingDeadlines();
    trackEvent("landing_income_preset", { income: normalizeIncome(els.landingIncome.value) });
    return;
  }

  const stepBtn = event.target.closest("[data-landing-step]");
  if (stepBtn && els.landingIncome) {
    const step = Number(stepBtn.dataset.landingStep || 0);
    const current = normalizeIncome(els.landingIncome.value);
    els.landingIncome.value = formatPlainAmount(current + step);
    renderLandingCards();
    renderLandingDeadlines();
    trackEvent("landing_income_step", { step, income: normalizeIncome(els.landingIncome.value) });
    return;
  }


  const calcTabBtn = event.target.closest("[data-calc-tab]");
  if (calcTabBtn && state.page === "calculator") {
    state.calcTab = normalizeCalculatorTab(calcTabBtn.dataset.calcTab);
    saveState();
    renderCalculatorPage();
    trackEvent("calc_tab_change", { tab: state.calcTab });
    return;
  }

  const simpleCalcAmountBtn = event.target.closest("[data-simple-calc-amount]");
  if (simpleCalcAmountBtn && state.page === "calculator") {
    state.calcIncome = normalizeIncome(simpleCalcAmountBtn.dataset.simpleCalcAmount || 0);
    saveState();
    renderCalculatorPage();
    trackEvent("simple_calc_preset", { income: state.calcIncome });
    return;
  }

  const simpleCalcStepBtn = event.target.closest("[data-simple-calc-step]");
  if (simpleCalcStepBtn && state.page === "calculator") {
    const step = Number(simpleCalcStepBtn.dataset.simpleCalcStep || 0);
    state.calcIncome = normalizeIncome(state.calcIncome + step);
    saveState();
    renderCalculatorPage();
    trackEvent("simple_calc_step", { income: state.calcIncome, step });
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
    state.calendarFilters.timeframe = normalizeCalendarTimeframe(String(calendarTimeframeBtn.dataset.calendarTimeframe || "year"));
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

  if (action === "crm-refresh" && state.isLoggedIn) {
    void fetchCrmData(true);
    return;
  }

  if (action === "crm-retry-access" && state.isLoggedIn) {
    ensureCrmOwnerBinding();
    renderDashboard();
    if (canAccessCrmSection()) {
      void fetchCrmData(true);
    }
    return;
  }

    if (action === "crm-claim-access" && state.isLoggedIn) {
      const currentEmail = normalizeEmail(state.userEmail || "");
      if (currentEmail && !getConfiguredOwnerEmails().length) {
        setStoredOwnerEmail(currentEmail);
        renderDashboard();
      if (canAccessCrmSection()) {
        void fetchCrmData(true);
      }
      }
      return;
    }

    if (action === "crm-open-income" && state.isLoggedIn && state.page === "crm") {
      openCrmIncomeJournal();
      return;
    }

    if (action === "crm-switch-tab" && state.page === "crm") {
      setCrmTab(actionEl.dataset.crmTab || "overview");
      trackEvent("crm_tab_open", { tab: normalizeCrmTab(actionEl.dataset.crmTab || "overview") });
      return;
    }

    if (action === "crm-open-sale-form" && state.page === "crm") {
      setCrmSalesPanel("sale");
      return;
    }

    if (action === "crm-open-payment-form" && state.page === "crm") {
      setCrmSalesPanel("payment");
      return;
    }

    if (action === "crm-open-customer-form" && state.page === "crm") {
      setCrmCustomerFormOpen(true);
      return;
    }

    if (action === "crm-close-sale-form" && state.page === "crm") {
      closeCrmSaleComposer();
      return;
    }

    if (action === "crm-close-payment-form" && state.page === "crm") {
      closeCrmPaymentComposer();
      return;
    }

    if (action === "crm-close-customer-form" && state.page === "crm") {
      closeCrmCustomerComposer();
      return;
    }

    if (action === "crm-edit-customer" && state.page === "crm") {
      startCrmCustomerEdit(actionEl.dataset.customerId);
      return;
    }

    if (action === "crm-open-customer" && state.page === "crm") {
      openCrmCustomerCard(actionEl.dataset.customerId);
      return;
    }

    if (action === "crm-delete-customer" && state.page === "crm") {
      deleteCrmCustomer(actionEl.dataset.customerId);
      return;
    }

    if (action === "crm-edit-sale" && state.page === "crm") {
      startCrmSaleEdit(actionEl.dataset.saleId);
      return;
    }

    if (action === "crm-prefill-sale" && state.page === "crm") {
      prefillCrmSale(actionEl.dataset.customerId);
      return;
    }

    if (action === "crm-delete-sale" && state.page === "crm") {
      deleteCrmSale(actionEl.dataset.saleId);
      return;
    }

    if (action === "crm-edit-payment" && state.page === "crm") {
      startCrmPaymentEdit(actionEl.dataset.paymentId);
      return;
    }

    if (action === "crm-delete-payment" && state.page === "crm") {
      deleteCrmPayment(actionEl.dataset.paymentId);
      return;
    }

  const editCrmCustomerBtn = event.target.closest("[data-edit-crm-customer]");
  if (editCrmCustomerBtn && state.page === "crm") {
    state.crmCustomerEditId = Number(editCrmCustomerBtn.dataset.editCrmCustomer || 0) || null;
    state.crmCustomerFormOpen = true;
    saveState();
    renderDashboard();
    trackEvent("crm_customer_edit_open", { id: state.crmCustomerEditId || 0 });
    return;
  }

  const openCrmCustomerBtn = event.target.closest("[data-open-crm-customer]");
  if (openCrmCustomerBtn && state.page === "crm") {
    state.crmSelectedCustomerId = Number(openCrmCustomerBtn.dataset.openCrmCustomer || 0) || null;
    saveState();
    renderDashboard();
    trackEvent("crm_customer_card_open", { id: state.crmSelectedCustomerId || 0 });
    return;
  }

  const closeCrmCustomerBtn = event.target.closest("[data-close-crm-customer-card]");
  if (closeCrmCustomerBtn && state.page === "crm") {
    state.crmSelectedCustomerId = null;
    saveState();
    renderDashboard();
    trackEvent("crm_customer_card_close");
    return;
  }

  const cancelCrmCustomerEditBtn = event.target.closest("[data-cancel-crm-customer-edit]");
  if (cancelCrmCustomerEditBtn && state.page === "crm") {
    closeCrmCustomerComposer();
    trackEvent("crm_customer_edit_cancel");
    return;
  }

  const deleteCrmCustomerBtn = event.target.closest("[data-delete-crm-customer]");
  if (deleteCrmCustomerBtn && state.page === "crm") {
    const customerId = Number(deleteCrmCustomerBtn.dataset.deleteCrmCustomer || 0);
    const customer = state.crmCustomers.find((row) => row.id === customerId);
    if (!customer) return;

    const linkedSalesCount = state.crmSales.filter((sale) => Number(sale.customerId || 0) === customerId).length;
    const confirmText = linkedSalesCount > 0
      ? `Удалить клиента ${customer.name}?\nПродажи останутся в CRM, но будут отвязаны от клиента.`
      : `Удалить клиента ${customer.name}?`;
    if (!window.confirm(confirmText)) {
      return;
    }

    state.crmCustomers = state.crmCustomers.filter((row) => row.id !== customerId);
    state.crmSales = state.crmSales.map((sale) =>
      Number(sale.customerId || 0) === customerId
        ? { ...sale, customerId: 0, updatedAt: new Date().toISOString() }
        : sale
    );
    if (state.crmCustomerEditId === customerId) {
      state.crmCustomerEditId = null;
    }
    if (state.crmSelectedCustomerId === customerId) {
      state.crmSelectedCustomerId = null;
    }
    syncCrmSalesWithIncomeJournal();
    saveState();
    renderDashboard();
    showAppToast(
      linkedSalesCount > 0
        ? "Клиент удалён. Продажи сохранены и отвязаны от клиента."
        : "Клиент удалён."
    );
    trackEvent("crm_customer_delete", { id: customerId, linkedSalesCount });
    return;
  }

  const editCrmSaleBtn = event.target.closest("[data-edit-crm-sale]");
  if (editCrmSaleBtn && state.page === "crm") {
    startCrmSaleEdit(editCrmSaleBtn.dataset.editCrmSale);
    return;
  }

  const cancelCrmSaleEditBtn = event.target.closest("[data-cancel-crm-sale-edit]");
  if (cancelCrmSaleEditBtn && state.page === "crm") {
    closeCrmSaleComposer();
    trackEvent("crm_sale_edit_cancel");
    return;
  }

  const deleteCrmSaleBtn = event.target.closest("[data-delete-crm-sale]");
  if (deleteCrmSaleBtn && state.page === "crm") {
    const saleId = Number(deleteCrmSaleBtn.dataset.deleteCrmSale || 0);
    const sale = state.crmSales.find((row) => row.id === saleId);
    if (!sale) return;

    const linkedPaymentsCount = state.crmPayments.filter((row) => Number(row.saleId || 0) === saleId).length;
    const ok = window.confirm(
      linkedPaymentsCount > 0
        ? `Удалить продажу на ${fmt(sale.amount)}?\nВсе связанные оплаты и доходы тоже будут убраны.`
        : `Удалить продажу на ${fmt(sale.amount)}?`
    );
    if (!ok) {
      return;
    }

    const hadLinkedIncome = linkedPaymentsCount > 0 || Boolean(sale.linkedIncomeId);
    state.crmSales = state.crmSales.filter((row) => row.id !== saleId);
    state.crmPayments = state.crmPayments.filter((row) => Number(row.saleId || 0) !== saleId);
    if (state.crmSaleEditId === saleId) {
      state.crmSaleEditId = null;
    }
    if (state.crmPaymentEditId && !state.crmPayments.some((row) => row.id === state.crmPaymentEditId)) {
      state.crmPaymentEditId = null;
    }
    syncCrmSalesWithIncomeJournal();
    saveState();
    renderDashboard();
    showAppToast(hadLinkedIncome ? "Продажа удалена и убрана из доходов." : "Продажа удалена.");
    trackEvent("crm_sale_delete", { id: saleId, hadLinkedIncome, linkedPaymentsCount });
    return;
  }

  const editCrmPaymentBtn = event.target.closest("[data-edit-crm-payment]");
  if (editCrmPaymentBtn && state.page === "crm") {
    state.crmPaymentEditId = Number(editCrmPaymentBtn.dataset.editCrmPayment || 0) || null;
    state.crmSalesPanel = "payment";
    state.crmPaymentDraftSaleId = null;
    saveState();
    renderDashboard();
    trackEvent("crm_payment_edit_open", { id: state.crmPaymentEditId || 0 });
    return;
  }

  const cancelCrmPaymentEditBtn = event.target.closest("[data-cancel-crm-payment-edit]");
  if (cancelCrmPaymentEditBtn && state.page === "crm") {
    closeCrmPaymentComposer();
    trackEvent("crm_payment_edit_cancel");
    return;
  }

  const deleteCrmPaymentBtn = event.target.closest("[data-delete-crm-payment]");
  if (deleteCrmPaymentBtn && state.page === "crm") {
    const paymentId = Number(deleteCrmPaymentBtn.dataset.deleteCrmPayment || 0);
    const payment = state.crmPayments.find((row) => row.id === paymentId);
    if (!payment) return;

    const ok = window.confirm(`Удалить оплату на ${fmt(payment.amount)}?\nСвязанный доход тоже будет убран.`);
    if (!ok) {
      return;
    }

    state.crmPayments = state.crmPayments.filter((row) => row.id !== paymentId);
    if (state.crmPaymentEditId === paymentId) {
      state.crmPaymentEditId = null;
    }
    syncCrmSalesWithIncomeJournal();
    saveState();
    renderDashboard();
    showAppToast("Оплата удалена и убрана из доходов.");
    trackEvent("crm_payment_delete", { id: paymentId });
    return;
  }

  if (action === "crm-prefill-payment" && state.page === "crm") {
    prefillCrmPayment(actionEl.dataset.saleId);
    return;
  }

  if (action === "crm-clear-filters" && state.page === "crm") {
    state.crmFilters = getDefaultCrmFilters();
    saveState();
    renderDashboard();
    trackEvent("crm_filters_reset");
    return;
  }

  const pageBtn = event.target.closest("[data-page]");
  if (pageBtn && state.isLoggedIn) {
    if (pageBtn instanceof HTMLElement) {
      pageBtn.blur();
    }
    const nextPage = String(pageBtn.dataset.page || state.page || "").trim();
    navigateToPage(nextPage, "delegated_nav");
    return;
  }

  const knowledgeModeBtn = event.target.closest("[data-knowledge-mode]");
  if (
    knowledgeModeBtn &&
    state.page === "knowledge" &&
    !knowledgeModeBtn.hasAttribute("data-knowledge-section") &&
    !knowledgeModeBtn.hasAttribute("data-knowledge-topic")
  ) {
    const nextMode = normalizeKnowledgeMode(String(knowledgeModeBtn.dataset.knowledgeMode || KNOWLEDGE_MODES.articles));
    state.knowledgeFilters = {
      ...getDefaultKnowledgeFilters(),
      ...(state.knowledgeFilters || {}),
      mode: nextMode
    };
    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_mode_change", { mode: nextMode });
    return;
  }

  const knowledgeSectionBtn = event.target.closest("[data-knowledge-section]");
  if (knowledgeSectionBtn && state.page === "knowledge") {
    const nextSection = normalizeKnowledgeSection(String(knowledgeSectionBtn.dataset.knowledgeSection || "all"));
    const forcedModeRaw = String(knowledgeSectionBtn.dataset.knowledgeMode || "");
    const nextMode = forcedModeRaw ? normalizeKnowledgeMode(forcedModeRaw) : normalizeKnowledgeMode(String((state.knowledgeFilters || {}).mode || KNOWLEDGE_MODES.articles));
    const sectionMeta = getKnowledgeSectionById(nextSection);
    const sectionTopic = sectionMeta && sectionMeta.articleTopic
      ? normalizeKnowledgeTopic(sectionMeta.articleTopic)
      : "all";

    state.knowledgeFilters = {
      ...getDefaultKnowledgeFilters(),
      ...(state.knowledgeFilters || {}),
      mode: nextMode,
      section: nextSection,
      topic: nextMode === KNOWLEDGE_MODES.faq ? "all" : sectionTopic
    };
    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_section_filter", { section: nextSection, mode: nextMode });
    return;
  }

  const knowledgeTopicBtn = event.target.closest("[data-knowledge-topic]");
  if (knowledgeTopicBtn && state.page === "knowledge") {
    state.knowledgeFilters = {
      ...getDefaultKnowledgeFilters(),
      ...(state.knowledgeFilters || {}),
      mode: KNOWLEDGE_MODES.articles,
      section: "all",
      topic: normalizeKnowledgeTopic(String(knowledgeTopicBtn.dataset.knowledgeTopic || "all"))
    };
    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_topic_filter", { topic: state.knowledgeFilters.topic });
    return;
  }

  const resetKnowledgeBtn = event.target.closest("[data-reset-knowledge-filters]");
  if (resetKnowledgeBtn && state.page === "knowledge") {
    const currentMode = normalizeKnowledgeMode(String((state.knowledgeFilters || {}).mode || KNOWLEDGE_MODES.articles));
    state.knowledgeFilters = {
      ...getDefaultKnowledgeFilters(),
      mode: currentMode
    };
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
      const defaultText = copyKnowledgeBtn.dataset.defaultLabel || "Скопировать шпаргалку";
      copyKnowledgeBtn.textContent = ok ? "Скопировано" : "Ошибка копирования";
      window.setTimeout(() => {
        copyKnowledgeBtn.textContent = defaultText;
      }, 1400);
    });

    trackEvent("knowledge_copy", { id: articleId });
    return;
  }

  const incomePresetBtn = event.target.closest("[data-income-preset]");
  if (incomePresetBtn && state.page === "income") {
    applyIncomePresetAmount(incomePresetBtn.dataset.incomePreset);
    return;
  }

  const incomeEditPresetBtn = event.target.closest("[data-income-edit-preset]");
  if (incomeEditPresetBtn && state.page === "income") {
    applyIncomeEditPresetAmount(incomeEditPresetBtn.dataset.incomeEditPreset);
    return;
  }

  const editBtn = event.target.closest("[data-edit-income]");
  if (editBtn && state.page === "income") {
    startIncomeEdit(editBtn.dataset.editIncome);
    return;
  }

  const incomeMonthPrevBtn = event.target.closest("[data-action=\"income-month-prev\"]");
  if (incomeMonthPrevBtn && state.page === "income") {
    shiftIncomeJournalMonth(-1);
    return;
  }

  const incomeMonthNextBtn = event.target.closest("[data-action=\"income-month-next\"]");
  if (incomeMonthNextBtn && state.page === "income") {
    shiftIncomeJournalMonth(1);
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
    requestIncomeDelete(deleteBtn.dataset.deleteIncome);
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

    if (name === "income" || name === "expenses") {
      return normalizeIncome(raw);
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

  const reportsReviewInput = event.target.closest("#reportsFno910ReviewForm [data-reports-fno910-field]");
  if (reportsReviewInput instanceof HTMLInputElement || reportsReviewInput instanceof HTMLSelectElement || reportsReviewInput instanceof HTMLTextAreaElement) {
    if (state.page !== "reports") {
      return;
    }
    const field = String(reportsReviewInput.dataset.reportsFno910Field || "").trim();
    if (field) {
      updateReportsFno910Field(field, reportsReviewInput.value);
    }
    return;
  }

  const amountInput = event.target.closest("input[data-amount-input]");
  if (amountInput instanceof HTMLInputElement) {
    amountInput.value = formatPlainAmount(amountInput.value);
  }

  const employeeIinInput = event.target.closest("#employeeIinInput");
  if (employeeIinInput instanceof HTMLInputElement) {
    updateEmployeeIinHelper();
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
    return;
  }

  const onboardingProfileActivityInput = event.target.closest("#onboardingProfileActivity");
  if (onboardingProfileActivityInput && shouldShowOnboarding()) {
    const activity = normalizeSettingsActivity(onboardingProfileActivityInput.value || "");
    if (state.profile.activity !== activity) {
      state.profile = { ...state.profile, activity };
      saveState();
      renderDashboard();
    }
    return;
  }

  const settingsCityInput = event.target.closest("#settingsCityInput");
  if (settingsCityInput instanceof HTMLInputElement && state.page === "settings") {
    renderSettingsCitySuggestions(settingsCityInput);
    const settingsForm = settingsCityInput.closest("#settingsForm");
    if (settingsForm instanceof HTMLFormElement) {
      updateSettingsSaveButtonState(settingsForm);
    }
    return;
  }

  const settingsForm = event.target.closest("#settingsForm");
  if (settingsForm && state.page === "settings") {
    updateSettingsSaveButtonState(settingsForm);
    return;
  }

  const crmQueryInput = event.target.closest('#crmFilterForm input[name="query"]');
  if (crmQueryInput && state.page === "crm") {
    const query = String(crmQueryInput.value || "");
    const currentFilters = {
      ...getDefaultCrmFilters(),
      ...(state.crmFilters || {})
    };

    if (currentFilters.query === query) {
      return;
    }

    const selectionStart = typeof crmQueryInput.selectionStart === "number" ? crmQueryInput.selectionStart : query.length;
    const selectionEnd = typeof crmQueryInput.selectionEnd === "number" ? crmQueryInput.selectionEnd : selectionStart;
    state.crmFilters = {
      ...currentFilters,
      query
    };
    saveState();
    renderDashboard();

    const nextInput = document.querySelector('#crmFilterForm input[name="query"]');
    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus({ preventScroll: true });
      const nextStart = Math.min(selectionStart, nextInput.value.length);
      const nextEnd = Math.min(selectionEnd, nextInput.value.length);
      nextInput.setSelectionRange(nextStart, nextEnd);
    }
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

  const reportsReviewInput = event.target.closest("#reportsFno910ReviewForm [data-reports-fno910-field]");
  if (reportsReviewInput instanceof HTMLInputElement || reportsReviewInput instanceof HTMLSelectElement || reportsReviewInput instanceof HTMLTextAreaElement) {
    if (state.page !== "reports") {
      return;
    }
    const field = String(reportsReviewInput.dataset.reportsFno910Field || "").trim();
    if (field) {
      updateReportsFno910Field(field, reportsReviewInput.value);
    }
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
    const activity = normalizeSettingsActivity(onboardingProfileActivitySelect.value || "");
    if (state.profile.activity !== activity) {
      state.profile = { ...state.profile, activity };
      saveState();
      renderDashboard();
    }
    return;
  }

  const landingActivitySelect = event.target.closest("#landingActivitySelect");
  if (landingActivitySelect instanceof HTMLSelectElement) {
    const nextActivity = LANDING_SELF_ACTIVITY_OPTIONS.some((option) => option.id === String(landingActivitySelect.value || "").trim())
      ? String(landingActivitySelect.value || "").trim()
      : "";
    if (state.landingActivity !== nextActivity) {
      state.landingActivity = nextActivity;
      saveState();
      renderLandingCards();
      renderLandingDeadlines();
      trackEvent("landing_activity_change", { activity: state.landingActivity });
    }
    return;
  }

  const settingsCityInput = event.target.closest("#settingsCityInput");
  if (settingsCityInput instanceof HTMLInputElement && state.page === "settings") {
    const settingsForm = settingsCityInput.closest("#settingsForm");
    if (settingsForm instanceof HTMLFormElement) {
      updateSettingsSaveButtonState(settingsForm);
    }
    return;
  }
  const settingsForm = event.target.closest("#settingsForm");
  if (settingsForm && state.page === "settings") {
    updateSettingsSaveButtonState(settingsForm);
    return;
  }

  const incomeEditCategorySelect = event.target.closest("#incomeEditCategorySelect");
  if (incomeEditCategorySelect instanceof HTMLSelectElement && state.page === "income") {
    syncIncomeEditCategoryMode(true);
    return;
  }

  const crmStatusSelect = event.target.closest('#crmFilterForm select[name="status"]');
  if (crmStatusSelect && state.page === "crm") {
    const status = normalizeCrmFilterStatus(crmStatusSelect.value || "all");
    const currentFilters = {
      ...getDefaultCrmFilters(),
      ...(state.crmFilters || {})
    };
    if (currentFilters.status === status) {
      return;
    }
    state.crmFilters = {
      ...currentFilters,
      status
    };
    saveState();
    renderDashboard();
    trackEvent("crm_filter_status", { status });
    return;
  }

  const remindersSettingsInput = event.target.closest("#remindersSettingsForm input");
  if (remindersSettingsInput) {
    syncRemindersSettingsFormState(false);
    return;
  }

  const employeeResidentInput = event.target.closest('#employeeForm input[name="isResident"]');
  if (employeeResidentInput instanceof HTMLInputElement) {
    syncEmployeeNonresidentFieldsVisibility();
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

  const settingsCityInput = event.target.closest("#settingsCityInput");
  if (settingsCityInput instanceof HTMLInputElement && state.page === "settings") {
    window.setTimeout(() => {
      const activeElement = document.activeElement;
      if (!(activeElement instanceof Element) || !activeElement.closest("[data-settings-city-shell]")) {
        closeSettingsCitySuggestions();
      }
    }, 0);
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
      setLoginStatus("Подтвердите согласие с Пользовательским соглашением и Политикой конфиденциальности.", true);
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
      setFeedbackStatus("Опишите запрос подробнее (минимум 10 символов).", "error");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultSubmitLabel = submitBtn instanceof HTMLButtonElement
      ? submitBtn.innerHTML
      : "Отправить";

    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Отправляем...";
    }

    setFeedbackStatus("Отправляем сообщение в Telegram...");

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
      setFeedbackStatus("Сообщение отправлено в Telegram. Ответим в течение 24 часов.", "ok");
      form.reset();

      const defaultCategory = form.querySelector('input[name="category"][value="bug"]');
      if (defaultCategory instanceof HTMLInputElement) {
        defaultCategory.checked = true;
      }
      syncFeedbackCategoryCards(form);

      const replyEmailInput = form.querySelector('input[name="replyEmail"]');
      if (replyEmailInput instanceof HTMLInputElement) {
        replyEmailInput.value = state.userEmail || "";
      }

      trackEvent("feedback_submit", { category });
    } catch (error) {
      setFeedbackStatus(error.message || "Не удалось отправить форму. Попробуйте позже.", "error");
      trackEvent("feedback_submit_error", { category });
    } finally {
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = defaultSubmitLabel;
        if (window.lucide && typeof window.lucide.createIcons === "function") {
          window.lucide.createIcons();
        }
      }
    }

    return;
  }

  if (event.target.id === "crmCustomerForm" || event.target.id === "crmCustomerFormInner") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const editId = Number(formData.get("editId") || 0);
    const name = String(formData.get("name") || "").trim();
    const contact = normalizeCrmCustomerContact(formData.get("contact") || "");
    const note = String(formData.get("note") || "").trim();

    if (!name) {
      showAppToast("Введите имя клиента");
      return;
    }

    const duplicateCustomer = findCrmCustomerDuplicateByName(name, state.crmCustomers, editId);
    if (duplicateCustomer) {
      const duplicateContact = duplicateCustomer.contact ? ` (${duplicateCustomer.contact})` : "";
      const confirmText = `Клиент "${duplicateCustomer.name}" уже есть в CRM${duplicateContact}.\nДобавить ещё одного клиента с таким именем?`;
      if (!window.confirm(confirmText)) {
        showAppToast("Проверьте существующего клиента перед созданием дубля.");
        return;
      }
    }

    const existingCustomer = editId > 0
      ? state.crmCustomers.find((row) => row.id === editId)
      : null;
    const payload = {
      id: editId > 0 ? editId : getNextCollectionId(state.crmCustomers),
      name,
      contact,
      note,
      createdAt: existingCustomer ? existingCustomer.createdAt : new Date().toISOString()
    };

    if (existingCustomer) {
      Object.assign(existingCustomer, payload);
    } else {
      state.crmCustomers.unshift(payload);
    }

    state.crmCustomers = normalizeCrmCustomers(state.crmCustomers);
    state.crmCustomerEditId = null;
    state.crmCustomerFormOpen = false;
    syncCrmSalesWithIncomeJournal();
    saveState();
    renderDashboard();
    showAppToast(existingCustomer ? "Клиент обновлён." : "Клиент добавлен.");
    trackEvent(existingCustomer ? "crm_customer_edit_save" : "crm_customer_add", {
      id: payload.id
    });
    return;
  }

  if (
    event.target.id === "crmSaleForm"
    || event.target.id === "crmSaleFormInner"
    || event.target.id === "crmQuickSaleFormInner"
  ) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const editId = Number(formData.get("editId") || 0);
    const titleInput = String(formData.get("title") || "").trim();
    const amount = normalizeIncome(formData.get("amount") || 0);
    const date = String(formData.get("date") || "").trim();
    const dueDate = normalizeEmployeeDateValue(formData.get("dueDate") || "", "");
    const status = normalizeCrmSaleStatus(formData.get("status") || "draft");
    const customerId = Number(formData.get("customerId") || 0) || 0;
    const note = String(formData.get("note") || "").trim();
    const customer = customerId > 0 ? getCrmCustomerById(customerId, state.crmCustomers) : null;
    const title = titleInput || (customer ? `Продажа · ${customer.name}` : "Продажа");

    if (amount <= 0) {
      showAppToast("Укажите сумму продажи");
      return;
    }

    if (!date) {
      showAppToast("Укажите дату продажи");
      return;
    }

    if (dueDate && compareEmployeeDateValues(dueDate, date) < 0) {
      showAppToast("Срок оплаты не может быть раньше даты сделки.");
      return;
    }

    const existingSale = editId > 0
      ? state.crmSales.find((row) => row.id === editId)
      : null;
    const alreadyPaid = editId > 0 ? getCrmSalePaidTotal(editId, state.crmPayments) : 0;
    if (alreadyPaid > 0 && amount < alreadyPaid) {
      showAppToast("Сумма продажи не может быть меньше уже внесённых оплат.");
      return;
    }
    if (status === "cancelled" && alreadyPaid > 0) {
      showAppToast("Нельзя отменить продажу, по которой уже есть оплаты. Сначала удалите оплаты.");
      return;
    }

    const payload = {
      id: editId > 0 ? editId : getNextCollectionId(state.crmSales),
      customerId,
      title,
      amount,
      date,
      dueDate,
      status,
      note,
      linkedIncomeId: existingSale ? Number(existingSale.linkedIncomeId || 0) : 0,
      createdAt: existingSale ? existingSale.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (existingSale) {
      Object.assign(existingSale, payload);
    } else {
      state.crmSales.unshift(payload);
    }

    state.crmSales = normalizeCrmSales(state.crmSales);
    state.crmSaleEditId = null;
    state.crmSaleDraftCustomerId = null;
    state.crmSalesPanel = "";
    syncCrmSalesWithIncomeJournal();
    saveState();
    renderDashboard();

    showAppToast(existingSale ? "Продажа обновлена." : "Продажа добавлена.");

    trackEvent(existingSale ? "crm_sale_edit_save" : "crm_sale_add", {
      id: payload.id,
      status
    });
    return;
  }

  if (event.target.id === "crmPaymentForm" || event.target.id === "crmPaymentFormInner") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const editId = Number(formData.get("editId") || 0);
    const saleId = Number(formData.get("saleId") || 0) || 0;
    const amount = normalizeIncome(formData.get("amount") || 0);
    const date = String(formData.get("date") || "").trim();
    const note = String(formData.get("note") || "").trim();
    const sale = getCrmSaleById(saleId, state.crmSales);

    if (!sale) {
      showAppToast("Сначала выберите продажу");
      return;
    }

    if (normalizeCrmSaleStatus(sale.status) === "cancelled") {
      showAppToast("Нельзя добавить оплату к отменённой продаже.");
      return;
    }

    if (amount <= 0) {
      showAppToast("Укажите сумму оплаты");
      return;
    }

    if (!date) {
      showAppToast("Укажите дату оплаты");
      return;
    }

    const existingPayment = editId > 0
      ? state.crmPayments.find((row) => row.id === editId)
      : null;
    const payload = {
      id: editId > 0 ? editId : getNextCollectionId(state.crmPayments),
      saleId,
      amount,
      date,
      note,
      linkedIncomeId: existingPayment ? Number(existingPayment.linkedIncomeId || 0) : 0,
      createdAt: existingPayment ? existingPayment.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (existingPayment) {
      Object.assign(existingPayment, payload);
    } else {
      state.crmPayments.unshift(payload);
    }

    state.crmPayments = normalizeCrmPayments(state.crmPayments);
    state.crmPaymentEditId = null;
    state.crmPaymentDraftSaleId = null;
    state.crmSalesPanel = "";
    syncCrmSalesWithIncomeJournal();
    saveState();
    renderDashboard();
    showAppToast(existingPayment ? "Оплата обновлена и синхронизирована с доходами." : "Оплата добавлена и сразу попала в доходы.");
    trackEvent(existingPayment ? "crm_payment_edit_save" : "crm_payment_add", {
      id: payload.id,
      saleId
    });
    return;
  }

  if (event.target.id === "employeeForm") {
    event.preventDefault();

    const formData = new FormData(event.target);
    const editId = Number(formData.get("editId") || 0);
    const isEditingEmployee = editId > 0;
    const name = String(formData.get("name") || "").trim();
    const iin = normalizeEmployeeIin(formData.get("iin") || "");
    const salary = normalizeIncome(formData.get("salary") || 0);
    const startDate = normalizeEmployeeStartDate(formData.get("startDate") || "", getEmployeeStartDateFallback());
    const endDate = normalizeEmployeeEndDate(formData.get("endDate") || "", "");
    const startMonth = normalizeEmployeeStartMonth(startDate, formatDashboardMonthKey(new Date()));
    const endMonth = endDate ? normalizeEmployeeEndMonth(endDate) : "";
    const contractType = String(formData.get("contractType") || "").trim() === "gph" ? "gph" : "labor";
    const isResident = String(formData.get("isResident") || "yes").trim() !== "no";
    const isEaeuCitizen = !isResident && String(formData.get("isEaeuCitizen") || "no").trim() === "yes";
    const hasResidencePermit = !isResident && String(formData.get("hasResidencePermit") || "no").trim() === "yes";
    const isPensioner = String(formData.get("isPensioner") || "no").trim() === "yes";
    const hasDisabilityExemption = String(formData.get("hasDisabilityExemption") || "no").trim() === "yes";
    const opvByApplication = String(formData.get("opvByApplication") || "no").trim() === "yes";
    const applyStandardDeduction = String(formData.get("applyStandardDeduction") || "yes").trim() !== "no";
    const extraChanges = readEmployeeSalaryChangeDraftFromDom();
    const monthlyAccruals = isEditingEmployee ? readEmployeeMonthlyAccrualDraftFromDom() : [];

    if (!name) {
      showAppToast("Введите имя сотрудника");
      els.employeeNameInput?.focus();
      return;
    }

    if (iin && !isValidEmployeeIin(iin)) {
      showAppToast("Проверьте ИИН сотрудника");
      els.employeeIinInput?.focus();
      return;
    }

    if (salary < MZP_2026) {
      showAppToast(`Минимальный оклад — ${fmt(MZP_2026)}`);
      els.employeeSalaryInput?.focus();
      return;
    }

    if (!parseEmployeeDateValue(startDate)) {
      showAppToast("Укажите дату начала работы сотрудника");
      els.employeeStartMonthInput?.focus();
      return;
    }

    if (endDate && compareEmployeeDateValues(endDate, startDate) < 0) {
      showAppToast("Дата окончания не может быть раньше даты начала");
      els.employeeEndMonthInput?.focus();
      return;
    }

    const invalidChange = extraChanges.find((row) => {
      if (!row.month || row.salary < MZP_2026) {
        return true;
      }
      if (compareDashboardMonthKeys(row.month, startMonth) <= 0) {
        return true;
      }
      if (endMonth && compareDashboardMonthKeys(row.month, endMonth) > 0) {
        return true;
      }
      return false;
    });

    if (invalidChange) {
      showAppToast("Проверьте изменения оклада: они должны быть позже старта и не позже месяца окончания");
      return;
    }

    const invalidMonthlyAccrual = monthlyAccruals.find((row) => {
      if (!row.month || row.amount <= 0) {
        return true;
      }
      if (compareDashboardMonthKeys(row.month, startMonth) < 0) {
        return true;
      }
      if (endMonth && compareDashboardMonthKeys(row.month, endMonth) > 0) {
        return true;
      }
      return false;
    });

    if (invalidMonthlyAccrual) {
      showAppToast("Проверьте начисления по месяцам: месяц должен попадать в период работы, а сумма быть больше нуля");
      return;
    }

    const salaryHistory = buildEmployeeSalaryHistory(startMonth, salary, endMonth);
    if (!salaryHistory.length) {
      showAppToast("Не удалось собрать историю оклада");
      return;
    }

    const latestSalary = normalizeIncome(salaryHistory[salaryHistory.length - 1].salary);
    const existingEmployee = editId > 0
      ? state.employees.find((employee) => Number(employee.id || 0) === editId)
      : null;
    const birthDate = getEmployeeBirthDateFromIin(iin);
    const payload = {
      id: editId > 0 ? editId : Math.max(0, ...state.employees.map((employee) => Number(employee.id || 0))) + 1,
      name,
      iin,
      birthDate,
      salary: latestSalary,
      startDate,
      endDate,
      startMonth,
      endMonth,
      salaryHistory,
      monthlyAccruals: normalizeEmployeeMonthlyAccruals(monthlyAccruals, startMonth, endMonth),
      archived: existingEmployee ? Boolean(existingEmployee.archived) : false,
      contractType,
      isResident,
      isEaeuCitizen,
      hasResidencePermit,
      isPensioner,
      hasDisabilityExemption,
      opvByApplication,
      applyStandardDeduction
    };

    if (existingEmployee) {
      Object.assign(existingEmployee, payload);
    } else {
      state.employees.unshift(payload);
    }
    state.profile = sanitizeProfile({
      ...state.profile,
      hasEmployees: "yes"
    });
    saveState();
    if (els.employeeModal) {
      closeModal(els.employeeModal);
    }
    renderDashboard();
    if (!isEditingEmployee) {
      const startDateObj = parseEmployeeDateValue(startDate);
      const endDateObj = parseEmployeeDateValue(endDate);
      const startsMidMonth = Boolean(startDateObj && startDateObj.getDate() !== 1);
      const endsMidMonth = Boolean(endDateObj && endDateObj.getDate() !== new Date(endDateObj.getFullYear(), endDateObj.getMonth() + 1, 0).getDate());
      if (startsMidMonth || endsMidMonth) {
        showAppToast("Если за неполный месяц начислено не по полному окладу, уточните это позже в редактировании сотрудника.");
      }
    }
    trackEvent(existingEmployee ? "employee_edit" : "employee_add", {
      id: payload.id,
      contractType,
      isResident,
      isEaeuCitizen,
      hasResidencePermit,
      hasIin: Boolean(iin),
      salary: latestSalary,
      startDate,
      endDate: endDate || "",
      startMonth,
      endMonth: endMonth || ""
    });
    return;
  }

  if (event.target.id === "incomeForm" || event.target.id === "incomeEditForm") {
    event.preventDefault();
    submitIncomeForm(event.target);
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
      timeframe: normalizeCalendarTimeframe(String(formData.get("timeframe") || state.calendarFilters.timeframe || "year"))
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
      topic: normalizeKnowledgeTopic(String(formData.get("topic") || state.knowledgeFilters.topic || "all")),
      mode: normalizeKnowledgeMode(String(formData.get("mode") || state.knowledgeFilters.mode || KNOWLEDGE_MODES.articles)),
      section: normalizeKnowledgeSection(String(formData.get("section") || state.knowledgeFilters.section || "all"))
    };

    saveState();
    renderKnowledgePage();
    trackEvent("knowledge_filters_apply", { ...state.knowledgeFilters });
    return;
  }
  if (event.target.id === "remindersSettingsForm") {
    event.preventDefault();

    const formData = new FormData(event.target);
    const emailEnabled = isRemindersEmailEnabled();
    const email = emailEnabled ? String(formData.get("email") || "").trim() : "";
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

    if (state.isLoggedIn && supabaseClient) {
      let userId = String(state.userId || "").trim();
      if (!userId && supabaseClient.auth && typeof supabaseClient.auth.getUser === "function") {
        const { data, error } = await supabaseClient.auth.getUser();
        if (!error) {
          userId = String(data && data.user && data.user.id ? data.user.id : "").trim();
        }
      }

      if (userId) {
        const selectedDays = new Set((next.days || []).map((item) => Number(item)));
        const { error: notificationsSaveError } = await supabaseClient
          .from("user_notifications")
          .upsert({
            user_id: userId,
            email: emailEnabled ? (email || null) : null,
            notify_7days: selectedDays.has(7),
            notify_3days: selectedDays.has(3),
            notify_1day: selectedDays.has(1),
            notify_day_of: selectedDays.has(0)
          }, { onConflict: "user_id" });

        if (notificationsSaveError && typeof console !== "undefined") {
          console.warn("Failed to save reminder flags to user_notifications", notificationsSaveError);
        }
      }
    }

    if (state.page === "calendar") {
      renderCalendarPage();
    }
    if (state.landingDeadlineOpenId) {
      renderLandingDeadlineModal(state.landingDeadlineOpenId);
    }

    if (els.remindersSetupModal) {
      closeModal(els.remindersSetupModal);
    }

    showAppToast("Готово — настройки напоминаний сохранены");
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
        els.deadlineModalHint.textContent = "Выберите хотя бы один канал для цепочки -7/-3/-1/сегодня.";
      }
      return;
    }

    if (next.channels.telegram && !next.contacts.telegram) {
      if (els.deadlineModalHint) {
        els.deadlineModalHint.textContent = "Укажите Telegram username или чат ID для канала Telegram.";
      }
      return;
    }


    if (next.channels.email && !next.contacts.email) {
      next.contacts.email = state.userEmail && state.userEmail.includes("@") ? state.userEmail : "";
    }

    if (next.channels.email && !next.contacts.email) {
      if (els.deadlineModalHint) {
        els.deadlineModalHint.textContent = "Добавьте email для отправки цепочки напоминаний.";
      }
      return;
    }

    state.deadlineReminderSettings[key] = next;
    updateDeadlineReminderSubscription(deadlineId);

    saveState();
    renderLandingDeadlines();
    renderLandingDeadlineModal(deadlineId);

    if (els.deadlineModalHint) {
      els.deadlineModalHint.textContent = "Настройки напоминаний сохранены. Цепочка -7/-3/-1/сегодня активна.";
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

    const nextValues = getSettingsFormValues(event.target);
    const profileChanged = hasSettingsProfileChanges(nextValues);
    const regimeChanged = hasSettingsRegimeChange(nextValues);

    if (!profileChanged && !regimeChanged) {
      return;
    }

    if (profileChanged) {
      const nextProfile = { ...nextValues };
      delete nextProfile.regime;

      state.profile = {
        ...state.profile,
        ...nextProfile
      };
      saveState();
      await persistProfileSettingsToSupabase(state.profile);
      updateAuthUi();

      trackEvent("settings_save", {
        simplifiedRate: getSavedSimplifiedIpnRatePercent(state.profile),
        selfSocialIncomeBase: getProfileSelfSocialIncomeBase(state.profile) || 0
      });
    }

    if (regimeChanged) {
      if (profileChanged) {
        updateSettingsSaveButtonState(event.target);
        showAppToast("Настройки профиля сохранены.");
      }
      requestRegimeChange(nextValues.regime, "settings_form");
      return;
    }

    renderDashboard();
    showAppToast("Настройки сохранены. Налоги и соцплатежи пересчитаны.");
  }
}

async function loginWithGoogle() {
  if (!supabaseClient) {
    setLoginStatus("Вход через Google недоступен. Заполните Supabase ключи в config.js.", true);
    return;
  }

  try {
    setLoginStatus("Перенаправляем в Google...");
    const redirectTo = AUTH_REDIRECT_URL;
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });
    if (error) throw error;
    trackEvent("login_google_start");
  } catch (err) {
    setLoginStatus(err.message || "Не удалось начать вход через Google.", true);
  }
}

async function requestPasswordReset() {
  const email = (els.loginEmail && els.loginEmail.value ? els.loginEmail.value : "").trim();

  if (!email) {
    setLoginStatus("Укажите email, чтобы получить ссылку для восстановления.", true);
    return;
  }

  if (!supabaseClient) {
    setLoginStatus("Восстановление недоступно. Заполните Supabase ключи в config.js.", true);
    return;
  }

  try {
    setLoginStatus("Отправляем письмо для восстановления...");
    const redirectTo = AUTH_REDIRECT_URL;
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw error;

    setLoginStatus("Ссылка для восстановления отправлена. Проверьте почту.");
    trackEvent("password_reset_request");
  } catch (err) {
    setLoginStatus(err.message || "Не удалось отправить письмо для восстановления.", true);
  }
}

async function login(email, password) {
  if (!email || !password) {
    setLoginStatus("Заполни email и пароль.", true);
    return;
  }

  if (!supabaseClient) {
    setLoginStatus("Авторизация недоступна. Заполните Supabase ключи в config.js.", true);
    return;
  }

  try {
    setLoginStatus("Проверяем аккаунт...");
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;

    finalizeAuthSession(data.user, email);
    setLoginStatus("Успешный вход.");
    trackEvent("login", { mode: "supabase" });
  } catch (err) {
    setLoginStatus(err.message || "Ошибка авторизации.", true);
  }
}

async function signup(email, password) {
  if (!email || !password) {
    setLoginStatus("Заполни email и пароль.", true);
    return;
  }

  if (!supabaseClient) {
    setLoginStatus("Регистрация недоступна. Заполните Supabase ключи в config.js.", true);
    return;
  }

  try {
    setLoginStatus("Создаем аккаунт...");
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;

    if (data && data.session && data.user) {
      seedFreshOnboardingForUser(data.user);
      finalizeAuthSession(data.user, email);
      setLoginStatus("Аккаунт создан. Вход выполнен.");
      trackEvent("signup", { mode: "supabase_auto_login" });
      return;
    }

    setAuthMode("login", { clearStatus: false });
    setLoginStatus("Аккаунт создан. Подтвердите email и затем войдите.");
    trackEvent("signup", { mode: "supabase_email_confirmation" });
  } catch (err) {
    setLoginStatus(err.message || "Ошибка регистрации.", true);
  }
}

function finalizeAuthSession(user, fallbackEmail = "") {
  state.isLoggedIn = true;
  state.ownerTrialPreview = false;
  state.userEmail = (user && user.email) || fallbackEmail;
  state.userId = (user && user.id) || state.userId;
  dashboardDemoMode = false;
  dashboardDemoIncomes = [];
  syncOnboardingStateFromAccountUser(user);
  prepareOnboardingAfterLogin();
  applyAuthIncomeDefaults(user);
  applyAuthEmployeeDefaults(user);
  applyAuthCrmDefaults(user);
  applyAuthProfileDefaults(user);
  applyAuthSubscriptionDefaults(user);
  ensureOwnerEmailBinding();
  ensureTrialIfNeeded();
  ensureDeadlineTrackingFrom();
  ensureRegistrationDate();
  saveState();

  if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
    document.activeElement.blur();
  }
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
    els.loginSubmitBtn.textContent = nextMode === "signup" ? "Продолжить" : "Войти";
  }

  if (els.loginHelper) {
    const helperText = nextMode === "signup"
      ? "Создайте аккаунт бесплатно. После подтверждения email сможете войти в кабинет."
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
  state.userEmail = "";
  state.userId = "";
  state.incomes = [];
  state.employees = [];
  state.crmCustomers = [];
  state.crmSales = [];
  state.crmPayments = [];
  dashboardDemoMode = false;
  dashboardDemoIncomes = [];
  state.profile = createDefaultProfile();
  state.subscription = createDefaultSubscription();
  state.incomeEditId = null;
  state.crmCustomerEditId = null;
  state.crmSaleEditId = null;
  state.crmPaymentEditId = null;
  state.crmPaymentDraftSaleId = null;
  state.crmSelectedCustomerId = null;
  state.crmFilters = getDefaultCrmFilters();
  lastRenderedPage = null;
  closeOnboardingTour(false, "logout");
  updateAuthUi();
  try {
    renderLandingCards();
    renderLandingDeadlines();
  } catch (error) {
    console.error("Landing rerender after logout failed:", error);
  }
  if (els.publicApp) {
    els.publicApp.classList.add("is-restored");
  }
  if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  } else if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
    window.scrollTo(0, 0);
  }
  saveState();
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
  const activeElement = document.activeElement;
  if (
    node &&
    activeElement instanceof HTMLElement &&
    typeof activeElement.blur === "function" &&
    node.contains(activeElement)
  ) {
    activeElement.blur();
  }
  node.classList.add("hidden");
}

function openFeatureInfoModal(featureKey) {
  const key = String(featureKey || "").trim();
  if (!key || !els.featureInfoModal || !els.featureInfoTitle || !els.featureInfoText) {
    return;
  }

  const fallbackTitle = PRO_FEATURES[key] || "Возможность Pro";
  const info = PRO_FEATURE_INFO[key] || {
    title: fallbackTitle,
    text: "Подробности по этой функции доступны в Pro."
  };

  els.featureInfoTitle.textContent = info.title;
  els.featureInfoText.textContent = info.text;
  openModal(els.featureInfoModal);
}

function openRegimeHelpModal(regime, monthlyIncome = getSelectedRegimeMonthlyIncome()) {
  const safeRegime = String(regime || "").trim();
  if (!els.regimeHelpModal || !els.regimeHelpTitle || !els.regimeHelpBody) {
    return;
  }

  if (safeRegime === "our") {
    els.regimeHelpTitle.textContent = "ОУР скоро появится";
    els.regimeHelpBody.innerHTML = `
      <p class="regime-help-lead">Пока мы делаем упор на Самозанятого и Упрощёнку (910), чтобы расчёты по ним были максимально надёжными.</p>
      <div class="regime-help-reasons">
        <article class="regime-help-reason">
          <h4>Почему пока недоступно</h4>
          <p>Мы ещё дорабатываем ОУР, чтобы расчёты по нему были действительно точными. Пока этот режим может показывать неполную или неточную картину, поэтому мы временно не открываем его в сервисе.</p>
        </article>
        <article class="regime-help-reason">
          <h4>Что использовать сейчас</h4>
          <p>Если вам нужен рабочий сценарий уже сейчас, используйте Упрощёнку (910) или Самозанятого. Эти режимы мы доводим до финального качества в первую очередь.</p>
        </article>
      </div>
    `;
    openModal(els.regimeHelpModal);
    return;
  }

  if (safeRegime !== "self") {
    return;
  }

  const availabilityOptions = getRegimeAvailabilityOptions();
  const reasons = getSelfRegimeRestrictionReasons(monthlyIncome, availabilityOptions);
  const availability = getRegimeAvailability("self", monthlyIncome, availabilityOptions);
  const selfActivityStatus = getProfileSelfActivityStatus(availabilityOptions.selfActivity);
  const hasLimitRestriction = reasons.some((reason) => reason.id === "limit");
  const hasIpRestriction = reasons.some((reason) => reason.id === "ip");
  const hasBlockedActivityRestriction = reasons.some((reason) => reason.id === "activity_blocked");
  const hasActivityAttention = reasons.some((reason) => reason.id === "activity_missing" || reason.id === "activity_check");

  if (!reasons.length && !availability.requiresIpClosure) {
    return;
  }

  if (!hasLimitRestriction && !hasIpRestriction && hasActivityAttention) {
    const activityTitle = selfActivityStatus.code === "needs_check"
      ? "Что проверить для Самозанятого?"
      : "Нужно уточнить направление деятельности";
    const activityLead = selfActivityStatus.code === "needs_check"
      ? "По доходу самозанятость может подойти, но по выбранному направлению нужна дополнительная проверка."
      : "По доходу самозанятость может подойти, но сначала нужно выбрать направление деятельности.";
    const selectedDirectionHtml = selfActivityStatus.option
      ? `<article class="regime-help-reason"><h4>Сейчас выбрано</h4><p>${escapeHtml(selfActivityStatus.option.label)}</p></article>`
      : "";

    els.regimeHelpTitle.textContent = activityTitle;
    els.regimeHelpBody.innerHTML = `
      <p class="regime-help-lead">${activityLead}</p>
      <div class="regime-help-reasons">
        ${selectedDirectionHtml}
        <article class="regime-help-reason">
          <h4>Что сделать</h4>
          <p>Откройте настройки профиля и выберите направление для режима Самозанятый. После этого сервис сможет честно подсказать, подходит ли этот режим именно вам.</p>
        </article>
        <article class="regime-help-reason">
          <h4>Если вы не уверены</h4>
          <p>Сверьтесь с полным перечнем 40 ОКЭД для самозанятых. Пока проверка не сделана, лучше считать Упрощёнку базовым рабочим вариантом.</p>
        </article>
      </div>
      <p class="regime-help-note"><a href="${LANDING_SELF_ACTIVITY_SOURCE_URL}" target="_blank" rel="noopener noreferrer">Открыть полный перечень 40 ОКЭД</a></p>
    `;
    openModal(els.regimeHelpModal);
    return;
  }

  if (hasBlockedActivityRestriction) {
    els.regimeHelpTitle.textContent = "Почему Самозанятый недоступен?";
    els.regimeHelpBody.innerHTML = `
      <p class="regime-help-lead">По выбранному направлению этот режим сейчас не подходит.</p>
      <div class="regime-help-reasons">
        <article class="regime-help-reason">
          <h4>Что выбрано</h4>
          <p>${escapeHtml(selfActivityStatus.option ? selfActivityStatus.option.label : "Направление не указано")}</p>
        </article>
        <article class="regime-help-reason">
          <h4>Почему это важно</h4>
          <p>Самозанятость доступна только для части видов деятельности. Если направления нет в перечне, расчёт по Самозанятому будет вводить в заблуждение.</p>
        </article>
      </div>
      <p class="regime-help-note">Для такого сценария лучше ориентироваться на Упрощёнку (910).</p>
    `;
    openModal(els.regimeHelpModal);
    return;
  }

  if (!hasLimitRestriction && hasIpRestriction && availability.available) {
    els.regimeHelpTitle.textContent = "Самозанятый подходит по доходу";
    els.regimeHelpBody.innerHTML = `
      <p class="regime-help-lead">Ваш текущий доход в пределах лимита самозанятого, поэтому этот режим можно посмотреть уже сейчас.</p>
      <div class="regime-help-reasons">
        ${reasons
          .map((reason) => `
            <article class="regime-help-reason">
              <h4>${escapeHtml(reason.title)}</h4>
              <p>${escapeHtml(reason.text)}</p>
            </article>
          `)
          .join("")}
      </div>
      <p class="regime-help-note">Важно: сейчас вы смотрите расчёт как сценарий. Перед фактическим переходом на самозанятость сначала прекратите ИП — сервис не проверяет это автоматически.</p>
    `;
    openModal(els.regimeHelpModal);
    return;
  }

  els.regimeHelpTitle.textContent = "Почему Самозанятый недоступен?";
  els.regimeHelpBody.innerHTML = `
    <p class="regime-help-lead">Сейчас этот режим нельзя выбрать для вашего профиля. Вот почему:</p>
    <div class="regime-help-reasons">
      ${reasons
        .map((reason) => `
          <article class="regime-help-reason">
            <h4>${escapeHtml(reason.title)}</h4>
            <p>${escapeHtml(reason.text)}</p>
          </article>
        `)
        .join("")}
    </div>
    <p class="regime-help-note">Пока лучше остаться на Упрощёнке (910) — для текущих условий это корректный вариант.</p>
  `;
  openModal(els.regimeHelpModal);
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

function calcIpSocialContribution(declaredIncome, rate = SO_RATE) {
  const safeIncome = Math.max(0, Number(declaredIncome) || 0);
  const minBase = RATES.MZP;
  const maxBase = RATES.MZP * 7;
  const base = Math.max(minBase, Math.min(safeIncome, maxBase));
  return base * rate;
}

function calcIpOpvr(income) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const opvrBaseIncome = safeIncome <= 0 ? RATES.MZP : safeIncome;
  const opvrBaseCapped = Math.min(opvrBaseIncome, RATES.MAX_OPV_BASE);
  return opvrBaseCapped * RATES.OPVR_RATE;
}
function calcSimplified(income, profile = state.profile) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const hasIncome = safeIncome > 0;
  const socialIncomeBase = hasIncome ? resolveIpSelfSocialIncomeBase(safeIncome, profile) : 0;
  const usesCustomSocialIncomeBase = hasIncome && getProfileSelfSocialIncomeBase(profile) !== "";
  const opvBaseCapped = Math.min(socialIncomeBase, RATES.MAX_OPV_BASE);
  const opv = hasIncome ? opvBaseCapped * RATES.OPV_RATE : 0;
  const so = hasIncome ? calcIpSocialContribution(socialIncomeBase, SIMPLIFIED_SO_RATE) : 0;
  const opvr = hasIncome ? calcIpOpvr(socialIncomeBase) : 0;
  const vosms = RATES.VOSMS;
  const ipnRate = getActiveSimplifiedIpnRate();
  const ipn = safeIncome * ipnRate;
  const socTax = 0;
  const total = opv + so + opvr + vosms + ipn + socTax;
  return { opv, so, opvr, vosms, ipn, ipnRate, socTax, total, limit: SIMPLIFIED_LIMIT_ANNUAL, socialIncomeBase, usesCustomSocialIncomeBase };
}

function calcOUR(income, expenses = 0, profile = state.profile) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const safeExpenses = Math.min(Math.max(0, Number(expenses) || 0), safeIncome);
  const hasIncome = safeIncome > 0;
  const socialIncomeBase = hasIncome ? resolveIpSelfSocialIncomeBase(safeIncome, profile) : 0;
  const usesCustomSocialIncomeBase = hasIncome && getProfileSelfSocialIncomeBase(profile) !== "";
  const opvBaseCapped = Math.min(socialIncomeBase, RATES.MAX_OPV_BASE);
  const opv = hasIncome ? opvBaseCapped * RATES.OPV_RATE : 0;
  const so = hasIncome ? calcIpSocialContribution(socialIncomeBase, RATES.OUR_SO_RATE) : 0;
  const opvr = hasIncome ? calcIpOpvr(socialIncomeBase) : 0;
  const vosms = RATES.VOSMS;
  const taxBase = hasIncome ? Math.max(safeIncome - safeExpenses - opv - vosms - VYCHET_30MRP, 0) : 0;
  const ipn = hasIncome ? taxBase * 0.1 : 0;
  const socTax = hasIncome ? OUR_SOC_TAX : 0;
  const total = opv + so + opvr + vosms + ipn + socTax;
  return { opv, so, opvr, vosms, ipn, socTax, total, limit: null, socialIncomeBase, usesCustomSocialIncomeBase };
}

function calcCalculatorOUR(income, expenses = 0) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const safeExpenses = Math.min(Math.max(0, Number(expenses) || 0), safeIncome);
  const opvBaseCapped = Math.min(safeIncome, RATES.MAX_OPV_BASE);
  const opv = opvBaseCapped * RATES.OPV_RATE;
  const so = calcIpSocialContribution(safeIncome, RATES.OUR_SO_RATE);
  const opvr = calcIpOpvr(safeIncome);
  const vosms = RATES.VOSMS;
  const taxBase = Math.max(safeIncome - safeExpenses - opv - vosms - VYCHET_30MRP, 0);
  const ipn = taxBase * 0.1;
  const socTax = OUR_SOC_TAX;
  const total = opv + so + opvr + vosms + ipn + socTax;
  return { opv, so, opvr, vosms, ipn, socTax, total, limit: null };
}

function calcByRegime(regime, income, expenses = 0, profile = state.profile) {
  if (regime === "self") return calcSelfEmployed(income);
  if (regime === "our") return calcOUR(income, expenses, profile);
  return calcSimplified(income, profile);
}

function normalizeTaxRegimeForProfile(regime) {
  if (regime === "self" || regime === "our" || regime === "simplified") {
    return regime;
  }
  return "simplified";
}

function normalizeTaxAmountForProfile(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.round(numeric));
}

function getActiveEmployeesCountForCrm(employees = state.employees) {
  return Array.isArray(employees)
    ? employees.filter((employee) => !employee?.archived).length
    : 0;
}

function getCrmProfileSnapshot(options = {}) {
  const safeProfile = sanitizeProfile(options.profile ?? state.profile);
  const safeSubscription = normalizeSubscription(options.subscription ?? state.subscription);
  const activeEmployeesCount = getActiveEmployeesCountForCrm(options.employees ?? state.employees);
  const hasEmployeesPreference = normalizeHasEmployeesPreference(safeProfile.hasEmployees);

  return {
    user_email: normalizeEmail(options.userEmail ?? state.userEmail) || null,
    full_name: safeProfile.name || null,
    iin: safeProfile.iin || null,
    city: safeProfile.city || null,
    activity_type: safeProfile.activity || null,
    self_activity: safeProfile.selfActivity || null,
    has_employees: hasEmployeesPreference || null,
    employees_count: activeEmployeesCount,
    subscription_plan: safeSubscription.plan || null,
    subscription_status: safeSubscription.status || null,
    plan_expiry: safeSubscription.planExpiry || null,
    last_active_at: new Date().toISOString()
  };
}

function getTaxProfileRow(regime, monthlyIncome, tax) {
  const safeTax = tax && typeof tax === "object" ? tax : {};
  return {
    ...getCrmProfileSnapshot(),
    tax_regime: normalizeTaxRegimeForProfile(regime),
    monthly_income: normalizeTaxAmountForProfile(monthlyIncome),
    opv: normalizeTaxAmountForProfile(safeTax.opv),
    so: normalizeTaxAmountForProfile(safeTax.so),
    opvr: normalizeTaxAmountForProfile(safeTax.opvr),
    vosms: normalizeTaxAmountForProfile(safeTax.vosms),
    ipn: normalizeTaxAmountForProfile(safeTax.ipn),
    total_monthly: normalizeTaxAmountForProfile(safeTax.total),
    updated_at: new Date().toISOString()
  };
}

async function flushTaxProfileUpsert() {
  if (taxProfileUpsertInFlight || !pendingTaxProfileUpsert) {
    return;
  }

  const payload = pendingTaxProfileUpsert;
  pendingTaxProfileUpsert = null;

  if (!state.isLoggedIn || !supabaseClient) {
    return;
  }

  taxProfileUpsertInFlight = true;
  try {
    const supabase = supabaseClient;
    const userIdFromState = String(state.userId || "").trim();
    let userId = userIdFromState;

    if (!userId && supabaseClient.auth && typeof supabaseClient.auth.getUser === "function") {
      const { data, error } = await supabaseClient.auth.getUser();
      if (!error) {
        userId = String(data && data.user && data.user.id ? data.user.id : "").trim();
      }
    }

    if (!userId) {
      return;
    }

    const row = {
      user_id: userId,
      full_name: state.profile?.name || (await supabase.auth.getUser())?.data?.user?.user_metadata?.full_name || (await supabase.auth.getUser())?.data?.user?.user_metadata?.name || "",
      ...payload
    };
    const rowKey = JSON.stringify(row);
    if (rowKey === lastTaxProfileUpsertKey) {
      return;
    }

    const { error } = await supabaseClient
      .from("user_profiles")
      .upsert(row, { onConflict: "user_id" });

    if (!error) {
      lastTaxProfileUpsertKey = rowKey;
    }
  } catch (_error) {
    // keep UI resilient if network/db is temporarily unavailable
  } finally {
    taxProfileUpsertInFlight = false;
    if (pendingTaxProfileUpsert) {
      if (taxProfileUpsertTimer) {
        clearTimeout(taxProfileUpsertTimer);
      }
      taxProfileUpsertTimer = setTimeout(() => {
        taxProfileUpsertTimer = null;
        void flushTaxProfileUpsert();
      }, 120);
    }
  }
}

function queueTaxProfileUpsert(regime, monthlyIncome, tax) {
  if (!state.isLoggedIn || !supabaseClient) {
    return;
  }

  pendingTaxProfileUpsert = getTaxProfileRow(regime, monthlyIncome, tax);

  if (taxProfileUpsertTimer) {
    clearTimeout(taxProfileUpsertTimer);
  }
  taxProfileUpsertTimer = setTimeout(() => {
    taxProfileUpsertTimer = null;
    void flushTaxProfileUpsert();
  }, 350);
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
  return `${new Intl.NumberFormat("ru-KZ").format(Math.round(value || 0))} ₸`;
}

function pluralizeRu(count, one, few, many) {
  const safeCount = Math.abs(Number(count) || 0);
  const mod10 = safeCount % 10;
  const mod100 = safeCount % 100;
  if (mod10 === 1 && mod100 !== 11) {
    return one;
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return few;
  }
  return many;
}

function normalizeIncome(value) {
  if (typeof value === "number") {
    return Math.max(0, Math.round(value || 0));
  }

  const normalizedDigits = String(value ?? "").replace(/[^\d-]/g, "");
  return Math.max(0, Math.round(Number(normalizedDigits) || 0));
}

function formatPlainAmount(value) {
  return new Intl.NumberFormat("ru-RU").format(normalizeIncome(value)).replace(/\u00A0/g, " ");
}

function getLandingPeriodMultiplier() {
  return 1;
}
function annualizeIncome(monthlyIncome) {
  return Math.max(0, Number(monthlyIncome) || 0) * 12;
}

function getCalcPeriodMultiplier() {
  return state.calcPeriod === "year" ? 12 : 1;
}

function getCalcPeriodLabel() {
  return state.calcPeriod === "year" ? "в год" : "в месяц";
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

function normalizeProfileSelfSocialIncomeBase(value) {
  if (value === "" || value === null || value === undefined) {
    return "";
  }

  const numeric = normalizeIncome(value);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return "";
  }

  return Math.max(RATES.MZP, numeric);
}

function getProfileSelfSocialIncomeBase(profile = state.profile) {
  return "";
}

function resolveIpSelfSocialIncomeBase(income, profile = state.profile) {
  const safeIncome = Math.max(0, Number(income) || 0);
  if (safeIncome <= 0) {
    return 0;
  }

  const configuredBase = getProfileSelfSocialIncomeBase(profile);
  const selectedBase = configuredBase === "" ? safeIncome : configuredBase;
  return Math.max(RATES.MZP, selectedBase);
}

function normalizeSimplifiedCityLookup(value) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase("ru-KZ")
    .replace(/ё/g, "е")
    .replace(/қ/g, "к")
    .replace(/ң/g, "н")
    .replace(/ғ/g, "г")
    .replace(/[үұ]/g, "у")
    .replace(/ө/g, "о")
    .replace(/ә/g, "а")
    .replace(/і/g, "и")
    .replace(/һ/g, "х")
    .replace(/й/g, "и")
    .replace(/[-–—]/g, " ")
    .replace(/^г\.\s*/u, "")
    .replace(/^г\s+/u, "")
    .replace(/^город\s+/u, "")
    .replace(/^район\s+/u, "")
    .replace(/\s+/g, " ");

  return String(SIMPLIFIED_CITY_RATE_ALIASES[normalized] || normalized).trim();
}

function getSettingsCitySuggestions(query) {
  const normalizedQuery = normalizeSimplifiedCityLookup(query);
  const popularSet = new Map(
    SETTINGS_PROFILE_CITY_POPULAR.map((name, index) => [normalizeSimplifiedCityLookup(name), index])
  );

  const matches = SETTINGS_PROFILE_CITIES
    .map((name) => {
      const normalizedName = normalizeSimplifiedCityLookup(name);
      const isDistrict = /район/i.test(name);
      return {
        name,
        normalizedName,
        isDistrict,
        startsWith: normalizedName.startsWith(normalizedQuery),
        includes: normalizedName.includes(normalizedQuery),
        priority: popularSet.has(normalizedName) ? popularSet.get(normalizedName) : 999
      };
    })
    .filter((item) => !normalizedQuery || item.includes)
    .sort((a, b) => {
      if (a.startsWith !== b.startsWith) return a.startsWith ? -1 : 1;
      if (a.priority !== b.priority) return a.priority - b.priority;
      if (a.isDistrict !== b.isDistrict) return a.isDistrict ? 1 : -1;
      if (a.name.length !== b.name.length) return a.name.length - b.name.length;
      return a.name.localeCompare(b.name, "ru");
    });

  const cities = matches.filter((item) => !item.isDistrict).map((item) => item.name);
  const districts = matches.filter((item) => item.isDistrict).map((item) => item.name);

  return {
    cities,
    districts,
    empty: cities.length === 0 && districts.length === 0
  };
}

function closeSettingsCitySuggestions() {
  const input = document.getElementById("settingsCityInput");
  const panel = document.getElementById("settingsCitySuggestions");

  if (input instanceof HTMLInputElement) {
    input.setAttribute("aria-expanded", "false");
  }

  if (panel instanceof HTMLElement) {
    panel.hidden = true;
    panel.innerHTML = "";
  }
}

function renderSettingsCitySuggestions(input) {
  if (!(input instanceof HTMLInputElement)) return;

  const panel = document.getElementById("settingsCitySuggestions");
  if (!(panel instanceof HTMLElement)) return;

  const results = getSettingsCitySuggestions(input.value);
  const buildItems = (title, items, typeLabel) => {
    if (!items.length) return "";
    return `
      <div class="settings-city-suggestions-group">
        <div class="settings-city-suggestions-title">${title}</div>
        ${items.map((item) => `
          <button type="button" class="settings-city-suggestion" data-settings-city-option="${escapeHtml(item)}">
            <span>${escapeHtml(item)}</span>
            <small>${typeLabel}</small>
          </button>
        `).join("")}
      </div>
    `;
  };

  let markup = "";

  if (results.empty) {
    markup += '<div class="settings-city-suggestions-empty">В подсказках ничего не нашли. Можно ввести вручную.</div>';
  } else {
    markup += buildItems("Города", results.cities, "Город");
    markup += buildItems("Районы", results.districts, "Район");
  }

  if (!markup.trim()) {
    closeSettingsCitySuggestions();
    return;
  }

  panel.innerHTML = markup;
  panel.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function getSimplifiedCityRateMeta(cityValue) {
  const safeCity = normalizeSimplifiedCityLookup(cityValue);
  return SIMPLIFIED_CITY_RATE_RULES[safeCity] || null;
}

function getSimplifiedIpnRateByCity(cityValue) {
  const cityMeta = getSimplifiedCityRateMeta(cityValue);
  return cityMeta ? cityMeta.rate : IPN_RATE_910;
}

function getSimplifiedIpnRateMeta(profile = state.profile) {
  const safeProfile = profile && typeof profile === "object" ? profile : {};
  const rateMode = normalizeSimplifiedRateMode(safeProfile.simplifiedRateMode);
  const manualRate = normalizeProfileSimplifiedRate(safeProfile.simplifiedRate);
  if (rateMode === "manual" && manualRate !== "" && manualRate > 0) {
    return {
      rate: manualRate,
      source: "ручная ставка",
      sourceShort: "ручная",
      cityMatched: false
    };
  }

  const cityMeta = getSimplifiedCityRateMeta(safeProfile.city);
  if (cityMeta) {
    return {
      rate: cityMeta.rate,
      source: cityMeta.source,
      sourceShort: "авто по справочнику",
      cityMatched: true
    };
  }

  return {
    rate: IPN_RATE_910,
    source: "стандартная ставка 4% — уточните ставку по вашему городу или району",
    sourceShort: "стандарт 4%",
    cityMatched: false
  };
}

function getActiveSimplifiedIpnRate(profile = state.profile) {
  return getSimplifiedIpnRateMeta(profile).rate;
}

function getSavedSimplifiedIpnRatePercent(profile = state.profile) {
  return Number((getActiveSimplifiedIpnRate(profile) * 100).toFixed(2));
}

async function persistProfileSettingsToSupabase(profile = state.profile) {
  if (!state.isLoggedIn || !supabaseClient || !supabaseClient.auth || typeof supabaseClient.auth.getUser !== "function") {
    return false;
  }

  const normalizedProfile = sanitizeProfile(profile);
  const savedIpnRatePercent = getSavedSimplifiedIpnRatePercent(normalizedProfile);
  const simplifiedRateOverride = normalizeProfileSimplifiedRate(normalizedProfile.simplifiedRate);
  const simplifiedRateMode = simplifiedRateOverride === "" ? "auto" : "manual";

  let user = null;
  try {
    const { data, error } = await supabaseClient.auth.getUser();
    if (!error) {
      user = data && data.user ? data.user : null;
    }
  } catch (_error) {
    user = null;
  }

  if (!user) {
    return false;
  }

  const metadata = user.user_metadata && typeof user.user_metadata === "object"
    ? user.user_metadata
    : {};
  const currentProfileSettings = metadata[PROFILE_SETTINGS_METADATA_KEY] && typeof metadata[PROFILE_SETTINGS_METADATA_KEY] === "object"
    ? metadata[PROFILE_SETTINGS_METADATA_KEY]
    : {};
  const nextProfileSettings = {
    ...currentProfileSettings,
    name: normalizedProfile.name || "",
    iin: normalizedProfile.iin || "",
    city: normalizedProfile.city || "",
    activity_type: normalizedProfile.activity || "",
    self_activity: normalizedProfile.selfActivity || "",
    has_employees: normalizedProfile.hasEmployees || "",
    ipn_rate: savedIpnRatePercent,
    ipn_rate_mode: simplifiedRateMode,
    ipn_rate_override: simplifiedRateOverride === "" ? null : Number((simplifiedRateOverride * 100).toFixed(2)),
    self_social_income_base: normalizedProfile.selfSocialIncomeBase === "" ? null : normalizedProfile.selfSocialIncomeBase,
    deadline_tracking_from: normalizedProfile.deadlineTrackingFrom || ""
  };

  let persisted = false;
  try {
    const { error } = await supabaseClient.auth.updateUser({
      data: {
        ...metadata,
        full_name: normalizedProfile.name || metadata.full_name || metadata.name || "",
        [PROFILE_SETTINGS_METADATA_KEY]: nextProfileSettings
      }
    });
    if (!error) {
      persisted = true;
    }
  } catch (_error) {
    // keep settings save resilient even if auth metadata sync is unavailable
  }

  try {
    const userId = String(user.id || state.userId || "").trim();
    if (userId) {
      const { error } = await supabaseClient
        .from("user_profiles")
        .upsert(
          {
            user_id: userId,
            ...getCrmProfileSnapshot({
              profile: normalizedProfile,
              subscription: state.subscription,
              userEmail: user.email || state.userEmail || ""
            }),
            ipn_rate: savedIpnRatePercent,
            updated_at: new Date().toISOString()
          },
          { onConflict: "user_id" }
        );
      if (!error) {
        persisted = true;
      }
    }
  } catch (_error) {
    // ignore schema/network issues and keep local settings working
  }

  return persisted;
}

function getRegimeLimit(regime) {
  if (regime === "self") return SELF_LIMIT_ANNUAL;
  if (regime === "simplified") return SIMPLIFIED_LIMIT_ANNUAL;
  return null;
}

function isIpAccountProfile() {
  const profile = state.profile && typeof state.profile === "object" ? state.profile : {};
  const rawProfileName = String(profile.name || "").trim();
  if (!rawProfileName) {
    return false;
  }

  const normalizedProfileName = ` ${rawProfileName.toLowerCase().replace(/[«»"'()]/g, " ")} `;
  return /\sип(?:\s|$)/i.test(normalizedProfileName);
}

function getSelfRegimeRestrictionReasons(monthlyIncome, options = {}) {
  const safeMonthlyIncome = Math.max(0, Number(monthlyIncome) || 0);
  const disallowSelfForIp = Boolean(options.disallowSelfForIp);
  const selfActivityStatus = getProfileSelfActivityStatus(options.selfActivity);
  const reasons = [];

  if (disallowSelfForIp) {
    reasons.push({
      id: "ip",
      title: "У вас уже есть статус ИП",
      text: "Чтобы перейти на самозанятость, сначала нужно прекратить или закрыть ИП."
    });
  }

  if (safeMonthlyIncome > SELF_LIMIT_MONTHLY) {
    reasons.push({
      id: "limit",
      title: "Доход выше лимита самозанятого",
      text: `Лимит режима — 300 МРП в месяц (${fmt(SELF_LIMIT_MONTHLY)}). При таком доходе самозанятость уже не подходит.`
    });
  }

  if (selfActivityStatus.code === "needs_activity") {
    reasons.push({
      id: "activity_missing",
      title: "Нужно выбрать направление деятельности",
      text: "Самозанятость подходит не для всех направлений. Сначала выберите, чем вы занимаетесь, чтобы расчёт и подсказки были корректными."
    });
  } else if (selfActivityStatus.code === "needs_check") {
    reasons.push({
      id: "activity_check",
      title: "Нужно проверить направление деятельности",
      text: "Для выбранного направления нужен ручной просмотр полного перечня 40 ОКЭД. Без этой проверки режим может оказаться неподходящим."
    });
  } else if (selfActivityStatus.code === "blocked_activity") {
    reasons.push({
      id: "activity_blocked",
      title: "Этот вид деятельности не подходит для самозанятого",
      text: `По выбранному направлению (${selfActivityStatus.option ? selfActivityStatus.option.label : "не указано"}) лучше использовать ИП на Упрощёнке, а не Самозанятого.`
    });
  }

  return reasons;
}

function getRegimeAvailability(regime, monthlyIncome, options = {}) {
  const safeMonthlyIncome = Math.max(0, Number(monthlyIncome) || 0);
  const disallowSelfForIp = Boolean(options.disallowSelfForIp);
  const shouldCheckSimplifiedActivity = Boolean(options.checkSimplifiedActivity);
  const selfActivityStatus = regime === "self"
    ? getProfileSelfActivityStatus(options.selfActivity)
    : { code: "allowed", option: null };
  const simplifiedActivityStatus = regime === "simplified" && shouldCheckSimplifiedActivity
    ? getProfileSimplifiedActivityStatus(options.simplifiedActivity)
    : { code: "allowed", option: null };
  const selfActivityReason = selfActivityStatus.code === "needs_activity"
    ? "Сначала выберите направление деятельности для Самозанятого."
    : selfActivityStatus.code === "needs_check"
      ? "Проверьте, подходит ли ваше направление для Самозанятого."
      : "";
  const simplifiedActivityReason = simplifiedActivityStatus.code === "needs_activity"
    ? "Сначала выберите вид деятельности для Упрощёнки."
    : simplifiedActivityStatus.code === "needs_check"
      ? "Для этого вида деятельности лучше дополнительно проверить ограничения по Упрощёнке."
      : simplifiedActivityStatus.code === "blocked_activity"
        ? "По этому виду деятельности Упрощёнка обычно не подходит. Лучше проверить ограничения и ориентироваться на другой режим."
        : "";

  if (regime === "our") {
    return {
      available: false,
      blocked: true,
      requiresIpClosure: false,
      reason: OUR_COMING_SOON_REASON
    };
  }

  const selfRestrictions = regime === "self"
    ? getSelfRegimeRestrictionReasons(safeMonthlyIncome, { disallowSelfForIp, selfActivity: options.selfActivity })
    : [];

  const hasIpRestriction = selfRestrictions.some((reason) => reason.id === "ip");
  const hasLimitRestriction = selfRestrictions.some((reason) => reason.id === "limit");
  const hasBlockedActivityRestriction = selfRestrictions.some((reason) => reason.id === "activity_blocked");
  const needsActivityAttention = selfRestrictions.some((reason) => reason.id === "activity_missing" || reason.id === "activity_check");

  if (hasLimitRestriction) {
    return {
      available: false,
      blocked: true,
      requiresIpClosure: hasIpRestriction,
      needsActivityAttention,
      activityStatusCode: selfActivityStatus.code,
      reason: `Превышен лимит режима (300 МРП = ${fmt(SELF_LIMIT_MONTHLY)})`
    };
  }

  if (regime === "self" && hasBlockedActivityRestriction) {
    return {
      available: false,
      blocked: true,
      requiresIpClosure: hasIpRestriction,
      needsActivityAttention: false,
      activityStatusCode: selfActivityStatus.code,
      reason: "Выбранное направление не подходит для режима Самозанятый."
    };
  }

  if (regime === "self" && hasIpRestriction) {
    return {
      available: true,
      blocked: false,
      requiresIpClosure: true,
      needsActivityAttention,
      activityStatusCode: selfActivityStatus.code,
      reason: selfActivityReason || "По доходу режим подходит, но перед реальным переходом нужно закрыть ИП."
    };
  }

  const limit = getRegimeLimit(regime);
  if (!limit) {
    return { available: true, blocked: false, requiresIpClosure: false, reason: "", activityStatusCode: regime === "simplified" ? simplifiedActivityStatus.code : selfActivityStatus.code };
  }

  const annualIncome = annualizeIncome(safeMonthlyIncome);
  if (annualIncome <= limit) {
    if (regime === "simplified") {
      return {
        available: true,
        blocked: false,
        requiresIpClosure: false,
        needsActivityAttention: simplifiedActivityStatus.code !== "allowed",
        activityStatusCode: simplifiedActivityStatus.code,
        reason: simplifiedActivityReason
      };
    }

    return {
      available: true,
      blocked: false,
      requiresIpClosure: false,
      needsActivityAttention,
      activityStatusCode: selfActivityStatus.code,
      reason: selfActivityReason
    };
  }

  return {
    available: false,
    blocked: true,
    requiresIpClosure: false,
    needsActivityAttention: regime === "simplified" ? simplifiedActivityStatus.code !== "allowed" : needsActivityAttention,
    activityStatusCode: regime === "simplified" ? simplifiedActivityStatus.code : selfActivityStatus.code,
    reason: `Превышен лимит ${fmt(limit)} в год`
  };
}

function getRegimeAvailabilityOptions() {
  return {
    disallowSelfForIp: isIpAccountProfile(),
    selfActivity: state.profile && state.profile.selfActivity,
    simplifiedActivity: state.profile && state.profile.activity,
    checkSimplifiedActivity: false
  };
}

function getSelectedRegimeMonthlyIncome() {
  const currentMonthIncome = normalizeIncome(getCurrentMonthIncome(state.incomes));
  if (currentMonthIncome > 0) {
    return currentMonthIncome;
  }

  const plannerIncome = normalizeIncome(state.taxPlanner && state.taxPlanner.income);
  if (plannerIncome > 0) {
    return plannerIncome;
  }

  return normalizeIncome(state.calcIncome);
}

function getLandingSelfActivityOption(id) {
  const safeId = String(id || "").trim();
  return LANDING_SELF_ACTIVITY_OPTIONS.find((option) => option.id === safeId) || null;
}

function getProfileSelfActivityOption(id = state.profile && state.profile.selfActivity) {
  return getLandingSelfActivityOption(normalizeSelfActivityChoice(id));
}

function getProfileSelfActivityStatus(id = state.profile && state.profile.selfActivity) {
  const option = getProfileSelfActivityOption(id);

  if (!option) {
    return { code: "needs_activity", option: null };
  }

  if (option.status === "allowed") {
    return { code: "allowed", option };
  }

  if (option.status === "blocked") {
    return { code: "blocked_activity", option };
  }

  return { code: "needs_check", option };
}

function getProfileSimplifiedActivityOption(value = state.profile && state.profile.activity) {
  const normalized = normalizeSettingsActivity(value);
  return SIMPLIFIED_ACTIVITY_OPTIONS.find((option) => option.label === normalized) || null;
}

function getProfileSimplifiedActivityStatus(value = state.profile && state.profile.activity) {
  const option = getProfileSimplifiedActivityOption(value);

  if (!option) {
    return { code: "needs_activity", option: null };
  }

  if (option.status === "allowed") {
    return { code: "allowed", option };
  }

  if (option.status === "blocked") {
    return { code: "blocked_activity", option };
  }

  return { code: "needs_check", option };
}

function getLandingSelfActivityStatus(income) {
  const safeIncome = normalizeIncome(income);

  if (state.landingBusinessStatus === "has_ip") {
    return { code: "has_ip", option: null, shouldShow: false, canRecommendSelf: false };
  }

  if (safeIncome <= 0) {
    return { code: "empty", option: null, shouldShow: false, canRecommendSelf: false };
  }

  if (safeIncome > SELF_LIMIT_MONTHLY) {
    return { code: "over_limit", option: null, shouldShow: false, canRecommendSelf: false };
  }

  const option = getLandingSelfActivityOption(state.landingActivity);
  if (!option) {
    return { code: "needs_activity", option: null, shouldShow: true, canRecommendSelf: true };
  }

  if (option.status === "allowed") {
    return { code: "allowed", option, shouldShow: true, canRecommendSelf: true };
  }

  if (option.status === "blocked") {
    return { code: "blocked_activity", option, shouldShow: true, canRecommendSelf: false };
  }

  return { code: "needs_check", option, shouldShow: true, canRecommendSelf: true };
}

function renderLandingActivitySelector(selfActivityStatus) {
  if (!els.landingActivity) return;

  if (!selfActivityStatus || !selfActivityStatus.shouldShow) {
    els.landingActivity.innerHTML = "";
    return;
  }

  let statusClass = "";
  let statusText = "Выберите направление, чтобы понять, можно ли реально советовать Самозанятого.";

  if (selfActivityStatus.code === "allowed") {
    statusClass = "success";
    statusText = "Подходит для Самозанятого.";
  } else if (selfActivityStatus.code === "needs_check") {
    statusText = "Нужна проверка по полному перечню 40 ОКЭД.";
  } else if (selfActivityStatus.code === "blocked_activity") {
    statusClass = "warning";
    statusText = "Для Самозанятого не подходит.";
  }

  const options = LANDING_SELF_ACTIVITY_OPTIONS
    .map((option) => `
      <option value="${escapeHtml(option.id)}" ${option.id === state.landingActivity ? "selected" : ""}>${escapeHtml(option.label)}</option>
    `)
    .join("");

  els.landingActivity.innerHTML = `
    <div class="landing-activity-card">
      <div class="landing-activity-head">
        <div class="landing-activity-title">Чем вы занимаетесь?</div>
        <p class="landing-activity-note">Нужно, чтобы проверить Самозанятого.</p>
      </div>
      <div class="landing-activity-select-wrap">
        <select id="landingActivitySelect" class="landing-activity-select" aria-label="Направление деятельности">
          <option value="">Выберите направление деятельности</option>
          ${options}
        </select>
      </div>
      <div class="landing-activity-foot ${statusClass}">
        <span>${escapeHtml(statusText)}</span>
        <a href="${LANDING_SELF_ACTIVITY_SOURCE_URL}" target="_blank" rel="noopener noreferrer">Проверить 40 ОКЭД</a>
      </div>
    </div>
  `;
}

function getLandingRecommendationModel(recommendedRow, cheapestRow, income, selfActivityStatus) {
  const hasIp = state.landingBusinessStatus === "has_ip";

  if (!recommendedRow) {
    return {
      tone: "",
      shortText: "Выберите доход.",
      bodyText: "После этого покажем ориентир по режиму и сумме налогов.",
      ctaText: "Зарегистрироваться бесплатно >"
    };
  }

  if (!hasIp) {
    if (selfActivityStatus && selfActivityStatus.code === "needs_activity" && cheapestRow && cheapestRow.id === "self") {
      return {
        tone: "",
        shortText: "Предварительно выгоднее Самозанятый.",
        bodyText: "Нужно уточнить вид деятельности: режим доступен не для всех видов деятельности.",
        ctaText: ""
      };
    }

    if (selfActivityStatus && selfActivityStatus.code === "needs_check" && cheapestRow && cheapestRow.id === "self") {
      return {
        tone: "",
        shortText: "Предварительно выгоднее Самозанятый.",
        bodyText: "Проверьте, входит ли ваш вид деятельности в разрешённый перечень для Самозанятого.",
        ctaText: ""
      };
    }

    if (selfActivityStatus && selfActivityStatus.code === "blocked_activity") {
      return {
        tone: "warning",
        shortText: "Самозанятый не подходит.",
        bodyText: "Этот вид деятельности не входит в разрешённый перечень. Смотрите ИП на Упрощёнке.",
        ctaText: "Сохранить и перейти в личный кабинет →"
      };
    }

    if (recommendedRow.id === "self") {
      return {
        tone: "success",
        shortText: "Подходит Самозанятый.",
        bodyText: "Ваш доход укладывается в лимит, а выбранное направление подходит для Самозанятого.",
        ctaText: "Зарегистрироваться бесплатно >"
      };
    }

    if (recommendedRow.id === "simplified") {
      return {
        tone: income > SELF_LIMIT_MONTHLY ? "warning" : "",
        shortText: "Подходит Упрощёнка.",
        bodyText: income > SELF_LIMIT_MONTHLY
          ? "Доход выше лимита самозанятого, поэтому выгоднее сразу смотреть ИП на Упрощёнке."
          : "При таком доходе Упрощёнка даёт более понятный и практичный сценарий.",
        ctaText: "Сохранить и перейти в личный кабинет →"
      };
    }

    return {
      tone: "",
      shortText: "Сейчас смотрим доступные режимы.",
      bodyText: "ОУР появится позже. Пока сравниваем и рекомендуем только Самозанятого и Упрощёнку, чтобы расчёт оставался надёжным.",
      ctaText: "Сохранить и перейти в личный кабинет →"
    };
  }

  if (recommendedRow.id === "simplified") {
    return {
      tone: "",
      shortText: "Для действующего ИП выгоднее Упрощёнка.",
      bodyText: cheapestRow && cheapestRow.id === "self" && income <= SELF_LIMIT_MONTHLY
        ? "Самозанятость может быть дешевле только после закрытия ИП, поэтому для текущего ИП ориентируйтесь на Упрощёнку."
        : "При таком доходе Упрощёнка даёт меньшую нагрузку, чем ОУР.",
      ctaText: "Сохранить и перейти в личный кабинет →"
    };
  }

  return {
    tone: "",
    shortText: "Сейчас рекомендуем доступные режимы.",
    bodyText: "ОУР появится позже. Пока для действующего ИП рекомендуем ориентироваться на Упрощёнку, чтобы расчёт в сервисе оставался точным.",
    ctaText: "Сохранить и перейти в личный кабинет →"
  };
}

function getLandingUnavailableReason(row) {
  if (!row) return "";
  if (row.id === "our") {
    return "Скоро";
  }
  if (row.id === "self" && String(row.reason || "").includes("300 МРП")) {
    return `Лимит ${fmt(SELF_LIMIT_MONTHLY)}/мес`;
  }
  return String(row.reason || "");
}

function getRegimeFallbackMessage(reason, requestedRegime = "") {
  const requested = String(requestedRegime || "").toLowerCase();
  const safeReason = String(reason || "").toLowerCase();
  if (requested === "our" || safeReason.includes("оур") || safeReason.includes("скоро")) {
    return "ОУР пока недоступен — оставили Упрощёнку.";
  }
  if (safeReason.includes("направлен") || safeReason.includes("вид деятельности")) {
    return "Для этого направления Самозанятый не подходит — оставили Упрощёнку.";
  }
  if (safeReason.includes("ип")) {
    return "Самозанятый недоступен для ИП — переключили на Упрощёнку.";
  }
  if (safeReason.includes("300 мрп")) {
    return "Доход выше лимита Самозанятого — переключили на Упрощёнку.";
  }
  return "Режим Самозанятый недоступен — переключили на Упрощёнку.";
}

function resolveAllowedRegime(nextRegime, monthlyIncome = getSelectedRegimeMonthlyIncome()) {
  const safeRegime = String(nextRegime || "").trim();
  if (!["self", "simplified", "our"].includes(safeRegime)) {
    return { regime: "simplified", switched: false, reason: "", showHelpModal: false };
  }

  if (safeRegime === "our") {
    return { regime: "simplified", switched: true, reason: OUR_COMING_SOON_REASON, showHelpModal: false };
  }

  if (safeRegime !== "self") {
    return { regime: safeRegime, switched: false, reason: "", showHelpModal: false };
  }

  const availability = getRegimeAvailability("self", monthlyIncome, getRegimeAvailabilityOptions());
  if (availability.available) {
    return {
      regime: "self",
      switched: false,
      reason: availability.reason || "",
      showHelpModal: Boolean(availability.requiresIpClosure || availability.needsActivityAttention)
    };
  }

  return {
    regime: "simplified",
    switched: true,
    reason: availability.reason || "",
    showHelpModal: true
  };
}

function syncSelectedRegimeAvailability(options = {}) {
  const previousRegime = state.regime;
  const resolved = resolveAllowedRegime(state.regime, options.monthlyIncome);
  if (resolved.regime === state.regime) {
    return false;
  }

  state.regime = resolved.regime;
  saveState();

  if (options.notify) {
    showAppToast(getRegimeFallbackMessage(resolved.reason, previousRegime));
  }

  return true;
}

function getLandingSelectionModel(viewedRow, recommendedRow, cheapestRow, income, selfActivityStatus) {
  if (!viewedRow || !recommendedRow || viewedRow.id === recommendedRow.id) {
    return getLandingRecommendationModel(recommendedRow, cheapestRow, income, selfActivityStatus);
  }

  const hasIp = state.landingBusinessStatus === "has_ip";
  const recommendedLabel = recommendedRow.label;
  const viewedLabel = viewedRow.label;

  if (hasIp) {
    if (viewedRow.id === "self") {
      return {
        tone: "warning",
        shortText: "Вы смотрите Самозанятого.",
        bodyText: `По сумме этот режим может выглядеть выгоднее, но для действующего ИП нужен переход или закрытие ИП. Для текущего ИП рекомендуем ${recommendedLabel}.`,
        ctaText: "Сохранить и перейти в личный кабинет →"
      };
    }

    return {
      tone: "",
      shortText: `Вы смотрите ${viewedLabel}.`,
      bodyText: `По текущим данным для действующего ИП рекомендуем ${recommendedLabel}.`,
      ctaText: "Сохранить и перейти в личный кабинет →"
    };
  }

  if (viewedRow.id === "self") {
    if (selfActivityStatus && selfActivityStatus.code === "blocked_activity") {
      return {
        tone: "warning",
        shortText: "Вы смотрите Самозанятого.",
        bodyText: `По сумме режим выглядит выгодно, но этот вид деятельности не входит в разрешённый перечень. Рекомендуем ${recommendedLabel}.`,
        ctaText: "Сохранить и перейти в личный кабинет →"
      };
    }

    if (selfActivityStatus && (selfActivityStatus.code === "needs_activity" || selfActivityStatus.code === "needs_check")) {
      return {
        tone: "",
        shortText: "Вы смотрите Самозанятого.",
        bodyText: "По сумме этот режим выглядит выгодно, но сначала уточните вид деятельности, чтобы совет был точным.",
        ctaText: ""
      };
    }
  }

  if (recommendedRow.id === "self") {
    return {
      tone: "",
      shortText: `Вы смотрите ${viewedLabel}.`,
      bodyText: `По текущим данным выгоднее Самозанятый. ${viewedLabel} можно открыть позже, если нужен именно этот режим.`,
      ctaText: viewedRow.id === "self" ? "Зарегистрироваться бесплатно >" : "Сохранить и перейти в личный кабинет →"
    };
  }

  return {
    tone: "",
    shortText: `Вы смотрите ${viewedLabel}.`,
    bodyText: `По текущим данным выгоднее ${recommendedLabel}.`,
    ctaText: "Сохранить и перейти в личный кабинет →"
  };
}

function renderLandingSummary(viewedRow, recommendedRow, income, cheapestRow, selfActivityStatus) {
  if (!els.landingSummary || !viewedRow || !recommendedRow) return;

  if (income <= 0) {
    els.landingSummary.innerHTML = `
      <article class="landing-summary-card">
        <div class="landing-summary-main">
          <small>Итого к уплате в месяц</small>
          <div class="landing-summary-amount">Введите доход</div>
          <p>Доход вводится в месяц. После этого покажем ориентир по налогам и режиму.</p>
        </div>
      </article>
    `;
    return;
  }

  const total = viewedRow.tax;
  const summaryRows = getTaxLines(viewedRow.taxData, viewedRow.id)
    .filter((line) => line.value > 0)
    .map((line) => ({
      label: line.label,
      value: line.value
    }));

  const lines = summaryRows
    .map((row) => `
      <div class="landing-breakdown-row">
        <span class="landing-breakdown-name">${escapeHtml(row.label)}</span>
        <strong class="landing-breakdown-value amount-sensitive">${fmt(row.value)}</strong>
      </div>
    `)
    .join("");
  const breakdownLabel = "Из чего состоит сумма";
  const breakdownSection = lines
    ? `<details class="landing-breakdown-accordion">
        <summary aria-label="${breakdownLabel}">
          <span class="landing-breakdown-label">${breakdownLabel}</span>
          <span class="landing-breakdown-chevron" aria-hidden="true">▼</span>
        </summary>
        <div class="landing-breakdown">
          ${lines}
          <div class="landing-breakdown-row landing-breakdown-total">
            <span>Итого к уплате</span>
            <strong class="amount-sensitive">${fmt(total)}</strong>
          </div>
        </div>
      </details>`
    : "";

  const recommendation = getLandingSelectionModel(viewedRow, recommendedRow, cheapestRow, income, selfActivityStatus);
  const recommendationTone = recommendation.tone;
  const recommendationText = viewedRow.id === recommendedRow.id
    ? `${recommendation.shortText} ${recommendation.bodyText}`
    : `Сейчас вы смотрите ${viewedRow.label}. ${recommendation.shortText} ${recommendation.bodyText}`;

  els.landingSummary.innerHTML = `
    <article class="landing-summary-card">
      <div class="landing-summary-main landing-summary-primary">
        <small>Итого к уплате в месяц</small>
        <div class="landing-summary-amount">${fmt(total)}</div>
      </div>
      <div class="landing-summary-recommendation ${recommendationTone}">
        <div class="landing-summary-recommend-kicker">Рекомендуем режим</div>
        <div class="landing-summary-recommend-title">${escapeHtml(recommendedRow.label)}</div>
        <p class="landing-summary-recommend-text">${escapeHtml(recommendationText)}</p>
      </div>
      ${breakdownSection}
    </article>
  `;
}

function renderLandingCards() {
  if (!els.landingIncome || !els.landingCards) return;

  const income = normalizeIncome(els.landingIncome.value);
  els.landingIncome.value = formatPlainAmount(income);
  const selfActivityStatus = getLandingSelfActivityStatus(income);
  renderLandingActivitySelector(selfActivityStatus);

  const landingIncomeLabel = document.querySelector("label[for=\"landingIncome\"]");
  if (landingIncomeLabel) {
    landingIncomeLabel.textContent = "Доход в месяц (₸)";
  }
  const self = calcSelfEmployed(income);
  const simplified = calcSimplified(income);

  const rows = [
    { id: "self", label: "Самозанятый", tax: self.total, taxData: self },
    { id: "simplified", label: "Упрощенка (910)", tax: simplified.total, taxData: simplified }
  ].map((row) => ({ ...row, ...getRegimeAvailability(row.id, income, { disallowSelfForIp: false }) }));

  const availableRows = rows.filter((row) => row.available).sort((a, b) => a.tax - b.tax);
  const sortedFallback = [...rows].sort((a, b) => a.tax - b.tax);
  const cheapestRow = availableRows[0] || sortedFallback[0];
  const isHasIpMode = state.landingBusinessStatus === "has_ip";
  const recommendedRows = rows
    .filter((row) => {
      if (!row.available) return false;
      if (isHasIpMode && row.id === "self") return false;
      if (!isHasIpMode && row.id === "self" && selfActivityStatus.code === "blocked_activity") return false;
      return true;
    })
    .sort((a, b) => a.tax - b.tax);
  const recommendedRow = recommendedRows[0] || cheapestRow || sortedFallback[0];
  const viewedCandidate = rows.find((row) => row.id === state.landingViewedRegime && row.available);
  const viewedRow = viewedCandidate || recommendedRow;
  state.landingSuggestedRegime = recommendedRow && recommendedRow.id ? recommendedRow.id : "simplified";

  const multiplier = getLandingPeriodMultiplier();
  const periodLabel = "в месяц";

  renderLandingSummary(viewedRow, recommendedRow, income, cheapestRow, selfActivityStatus);

  // Внизу оставляем только Самозанятого и Упрощёнку — без карточки ОУР.
  els.landingCards.innerHTML = rows
    .map((row) => {
      const isRecommended = row.id === recommendedRow.id && income > 0 && row.available;
      const isViewed = row.id === viewedRow.id && income > 0 && row.available;
      const bestClass = isRecommended ? "best" : "";
      const viewedClass = isViewed ? "viewed" : "";
      const unavailableClass = row.available ? "" : "unavailable";
      const amount = fmt(row.tax * multiplier);
      let topNote = "&nbsp;";
      let sideFlag = "";
      let sideFlagClass = "";

      if (!row.available) {
        topNote = "Недоступно";
      } else if (row.id === "self" && isHasIpMode && income <= SELF_LIMIT_MONTHLY) {
        topNote = "Только без ИП";
      } else if (row.id === "self" && selfActivityStatus.code === "blocked_activity") {
        topNote = "Не подходит";
      } else if (row.id === "self" && selfActivityStatus.code === "allowed" && isRecommended) {
        topNote = "Подходит";
      } else if (row.id === "self" && (selfActivityStatus.code === "needs_activity" || selfActivityStatus.code === "needs_check") && isRecommended) {
        topNote = "Предварительно";
      } else if (isRecommended) {
        topNote = isHasIpMode ? "Для ИП" : "Подходит";
      }

      if (row.available) {
        if (isViewed && !isRecommended) {
          sideFlag = "Выбрано";
          sideFlagClass = "is-viewed";
        } else if (isRecommended) {
          sideFlag = "Рекомендуем";
          sideFlagClass = "is-recommended";
        }
      }

      const unavailableText = getLandingUnavailableReason(row);
      const valueBlock = row.available
        ? `<div class="amount">${amount}</div><div class="regime-period">${periodLabel}</div>`
        : `<div class="regime-unavailable-reason">${escapeHtml(unavailableText)}</div>`;
      const selfEmployeesHint = state.landingBusinessStatus === "no_ip" && recommendedRow.id === "self" && row.id === "self" && row.available
        ? '<p class="regime-support-note">Самозанятый не может нанимать сотрудников.</p>'
        : "";
      const topRow = `
        <div class="regime-top-row">
          <div class="regime-top-note">${topNote}</div>
          ${sideFlag ? `<span class="regime-flag ${sideFlagClass}">${sideFlag}</span>` : ""}
        </div>
      `;

      if (row.available) {
        return `
          <button type="button" class="regime-card regime-card-button ${bestClass} ${viewedClass}" data-landing-view-regime="${row.id}" aria-pressed="${isViewed ? "true" : "false"}">
            ${topRow}
            <div class="regime-title">${row.label}</div>
            ${valueBlock}
            ${selfEmployeesHint}
          </button>
        `;
      }

      return `
        <div class="regime-card ${bestClass} ${viewedClass} ${unavailableClass}">
          ${topRow}
          <div class="regime-title">${row.label}</div>
          ${valueBlock}
        </div>
      `;
    })
    .join("");

  document.querySelectorAll("[data-landing-preset]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.landingPreset || 0) === income);
  });

  document.querySelectorAll("[data-landing-business-status]").forEach((button) => {
    button.classList.toggle("active", button.dataset.landingBusinessStatus === state.landingBusinessStatus);
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

function getDeadlinePayrollPeriodDate(row) {
  const deadlineDate = new Date(row && row.date);
  if (Number.isNaN(deadlineDate.getTime())) return null;

  return new Date(deadlineDate.getFullYear(), deadlineDate.getMonth() - 1, 1);
}

function isFno910Deadline(row) {
  if (!row) return false;
  const key = String(row.generatedKey || "").trim().toLowerCase();
  const title = String(row.title || "").trim();
  return key.startsWith("fno910-") || /фно\s*910/i.test(title);
}

function getFno910HalfYearMeta(row) {
  if (!isFno910Deadline(row)) {
    return null;
  }

  const deadlineDate = new Date(row.date);
  if (Number.isNaN(deadlineDate.getTime())) {
    return null;
  }

  const key = String(row.generatedKey || "").trim().toLowerCase();
  const rawTitle = String(row.title || "").trim();
  let half = null;
  let reportYear = deadlineDate.getFullYear();

  if (key.includes("h2-prev")) {
    half = 2;
    reportYear -= 1;
  } else if (key.includes("h1")) {
    half = 1;
  } else if (key.includes("h2")) {
    half = 2;
    reportYear -= 1;
  } else if (/1-?е\s+полугод/i.test(rawTitle)) {
    half = 1;
  } else if (/2-?е\s+полугод/i.test(rawTitle)) {
    half = 2;
    if (deadlineDate.getMonth() <= 1) {
      reportYear -= 1;
    }
  }

  if (!half) {
    return null;
  }

  const startMonth = half === 1 ? 0 : 6;
  const monthDates = Array.from({ length: 6 }, (_, index) => new Date(reportYear, startMonth + index, 1));
  const monthsLabel = `${MONTHS_ACCUSATIVE[startMonth]}, ${MONTHS_ACCUSATIVE[startMonth + 1]}, ${MONTHS_ACCUSATIVE[startMonth + 2]}, ${MONTHS_ACCUSATIVE[startMonth + 3]}, ${MONTHS_ACCUSATIVE[startMonth + 4]}, ${MONTHS_ACCUSATIVE[startMonth + 5]} ${reportYear}`;

  return {
    half,
    reportYear,
    startMonth,
    monthDates,
    halfYearLabel: `${half}-е полугодие ${reportYear}`,
    monthsLabel
  };
}

function getFno910PeriodMeta(periodKey) {
  const normalizedKey = normalizeFno910PeriodKey(periodKey);
  if (!normalizedKey) {
    return null;
  }

  const match = normalizedKey.match(/^(\d{4})-H([12])$/);
  if (!match) {
    return null;
  }

  const reportYear = Number(match[1]);
  const half = Number(match[2]);
  const startMonth = half === 1 ? 0 : 6;
  const monthDates = Array.from({ length: 6 }, (_, index) => new Date(reportYear, startMonth + index, 1));
  const monthsLabel = `${MONTHS_ACCUSATIVE[startMonth]}, ${MONTHS_ACCUSATIVE[startMonth + 1]}, ${MONTHS_ACCUSATIVE[startMonth + 2]}, ${MONTHS_ACCUSATIVE[startMonth + 3]}, ${MONTHS_ACCUSATIVE[startMonth + 4]}, ${MONTHS_ACCUSATIVE[startMonth + 5]} ${reportYear}`;

  return {
    key: normalizedKey,
    half,
    reportYear,
    startMonth,
    monthDates,
    halfYearLabel: `${half}-е полугодие ${reportYear}`,
    monthsLabel
  };
}

function getFno200PeriodMeta(periodKey) {
  const normalizedKey = normalizeFno200PeriodKey(periodKey);
  if (!normalizedKey) {
    return null;
  }

  const match = normalizedKey.match(/^(\d{4})-Q([1-4])$/);
  if (!match) {
    return null;
  }

  const reportYear = Number(match[1]);
  const quarter = Number(match[2]);
  const startMonth = (quarter - 1) * 3;
  const monthDates = Array.from({ length: 3 }, (_, index) => new Date(reportYear, startMonth + index, 1));
  const monthsLabel = `${MONTHS_ACCUSATIVE[startMonth]}, ${MONTHS_ACCUSATIVE[startMonth + 1]}, ${MONTHS_ACCUSATIVE[startMonth + 2]} ${reportYear}`;

  return {
    key: normalizedKey,
    quarter,
    reportYear,
    startMonth,
    monthDates,
    quarterLabel: `${quarter} квартал ${reportYear}`,
    monthsLabel
  };
}

function getFno910PeriodDeadlineRow(periodKey, type = "report") {
  const meta = getFno910PeriodMeta(periodKey);
  if (!meta) {
    return null;
  }

  return DEADLINES_2026.find((row) => {
    if (!row || row.type !== type || row.regime !== "simplified" || !isFno910Deadline(row)) {
      return false;
    }
    const rowMeta = getFno910HalfYearMeta(row);
    return rowMeta && rowMeta.reportYear === meta.reportYear && rowMeta.half === meta.half;
  }) || null;
}

function getDefaultFno910PeriodKey(referenceDate = new Date()) {
  const year = referenceDate.getFullYear();
  const monthIndex = referenceDate.getMonth();
  if (monthIndex <= 5) {
    return `${year - 1}-H2`;
  }
  return `${year}-H1`;
}

function getFno200PeriodDeadlineRow(periodKey) {
  const meta = getFno200PeriodMeta(periodKey);
  if (!meta) {
    return null;
  }

  return DEADLINES_2026.find((row) => {
    if (!row || row.type !== "report" || !isFno200Deadline(row)) {
      return false;
    }
    return Number(row.reportYear || 0) === meta.reportYear && Number(row.quarter || 0) === meta.quarter;
  }) || null;
}

function getDefaultFno200PeriodKey(referenceDate = new Date()) {
  const year = referenceDate.getFullYear();
  const monthIndex = referenceDate.getMonth();
  if (monthIndex <= 2) {
    return `${year - 1}-Q4`;
  }
  if (monthIndex <= 5) {
    return `${year}-Q1`;
  }
  if (monthIndex <= 8) {
    return `${year}-Q2`;
  }
  return `${year}-Q3`;
}

function ensureReportsState() {
  const normalized = normalizeReportsState(state.reports);
  const periodOptions = getFno910PeriodOptions();
  const fno200PeriodOptions = getFno200PeriodOptions();
  const fallbackMeta = periodOptions[periodOptions.length - 1] || getFno910PeriodMeta(getDefaultFno910PeriodKey());
  const fallbackFno200Meta = fno200PeriodOptions[fno200PeriodOptions.length - 1] || getFno200PeriodMeta(getDefaultFno200PeriodKey());
  const selectedMeta = getFno910PeriodMeta(normalized.fno910PeriodKey) || fallbackMeta;
  const selectedFno200Meta = getFno200PeriodMeta(normalized.fno200PeriodKey) || fallbackFno200Meta;
  normalized.fno910PeriodKey = selectedMeta ? selectedMeta.key : getDefaultFno910PeriodKey();
  normalized.fno200PeriodKey = selectedFno200Meta ? selectedFno200Meta.key : getDefaultFno200PeriodKey();
  state.reports = normalized;
  return normalized;
}

function setReportsActiveSection(nextSection, { rerender = true } = {}) {
  const reportsState = ensureReportsState();
  const safeSection = normalizeReportsActiveSection(nextSection);

  if (safeSection === reportsState.activeReportSection) {
    return false;
  }

  state.reports = {
    ...reportsState,
    activeReportSection: safeSection
  };
  saveState();

  if (rerender) {
    renderDashboard();
  }

  return true;
}

function syncReportsSectionUi(activeSection) {
  if (!els.pageContent || state.page !== "reports") {
    return;
  }

  const safeSection = normalizeReportsActiveSection(activeSection);

  els.pageContent.querySelectorAll("[data-report-section]").forEach((button) => {
    const isActive = button instanceof HTMLElement && button.dataset.reportSection === safeSection;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  els.pageContent.querySelectorAll("[data-reports-section-panel]").forEach((panel) => {
    const isActive = panel instanceof HTMLElement && panel.dataset.reportsSectionPanel === safeSection;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

function updateReportsFno910Field(fieldName, rawValue) {
  const safeField = String(fieldName || "").trim();
  if (!safeField || !Object.prototype.hasOwnProperty.call(getDefaultReportsState(), safeField)) {
    return false;
  }

  const current = ensureReportsState();
  const next = normalizeReportsState({
    ...current,
    [safeField]: rawValue
  });

  if (JSON.stringify(next) === JSON.stringify(current)) {
    return false;
  }

  state.reports = next;
  saveState();
  return true;
}

function getFno910PeriodOptions(referenceDate = new Date()) {
  const currentYear = referenceDate.getFullYear();
  const keys = [
    `${currentYear - 1}-H2`,
    `${currentYear}-H1`,
    `${currentYear}-H2`
  ];

  return keys
    .map((key) => getFno910PeriodMeta(key))
    .filter(Boolean)
    .filter((item, index, source) => source.findIndex((candidate) => candidate.key === item.key) === index);
}

function getFno200PeriodOptions(referenceDate = new Date()) {
  const currentYear = referenceDate.getFullYear();
  const keys = [
    `${currentYear - 1}-Q4`,
    `${currentYear}-Q1`,
    `${currentYear}-Q2`,
    `${currentYear}-Q3`,
    `${currentYear}-Q4`
  ];

  return keys
    .map((key) => getFno200PeriodMeta(key))
    .filter(Boolean)
    .filter((item, index, source) => source.findIndex((candidate) => candidate.key === item.key) === index);
}

function isFno910PeriodClosed(meta, referenceDate = new Date()) {
  if (!meta || !Array.isArray(meta.monthDates) || meta.monthDates.length !== 6) {
    return false;
  }

  const lastMonth = meta.monthDates[meta.monthDates.length - 1];
  if (!(lastMonth instanceof Date) || Number.isNaN(lastMonth.getTime())) {
    return false;
  }

  const closedFrom = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 1);
  const safeReference = referenceDate instanceof Date ? referenceDate : new Date(referenceDate);
  if (Number.isNaN(safeReference.getTime())) {
    return false;
  }
  return safeReference.getTime() >= closedFrom.getTime();
}

function getFno910EmployeesForPeriod(monthDates, employees = state.employees) {
  const safeEmployees = normalizeEmployeeEntries(employees);
  const safeMonthDates = Array.isArray(monthDates) ? monthDates.filter((date) => date instanceof Date && !Number.isNaN(date.getTime())) : [];
  if (!safeMonthDates.length) {
    return [];
  }

  return safeEmployees.filter((employee) => safeMonthDates.some((periodDate) => {
    const snapshot = getEmployeePayrollSnapshot(employee, periodDate);
    return snapshot && snapshot.isActive;
  }));
}

function getFno910Draft(periodKey, options = {}) {
  const meta = getFno910PeriodMeta(periodKey) || getFno910PeriodMeta(getDefaultFno910PeriodKey());
  const profile = sanitizeProfile(options.profile ?? state.profile);
  const regime = String(options.regime || state.regime || "").trim();
  const incomes = normalizeIncomeEntries(options.incomes ?? state.incomes);
  const periodEmployees = getFno910EmployeesForPeriod(meta ? meta.monthDates : [], options.employees ?? state.employees);
  const selectedRate = getSimplifiedIpnRateMeta(profile);
  const reportRow = getFno910PeriodDeadlineRow(meta.key, "report");
  const paymentRow = getFno910PeriodDeadlineRow(meta.key, "payment");
  const monthRows = meta.monthDates.map((periodDate) => {
    const income = normalizeIncome(getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth(), incomes));
    const ops = incomes.filter((row) => {
      const date = new Date(row.date);
      return !Number.isNaN(date.getTime()) && date.getFullYear() === periodDate.getFullYear() && date.getMonth() === periodDate.getMonth();
    }).length;
    const monthTax = calcSimplified(income, profile);
    return {
      monthLabel: MONTHS[periodDate.getMonth()],
      monthShortLabel: MONTHS[periodDate.getMonth()],
      income,
      ops,
      ipn: Math.max(0, Math.round(Number(monthTax.ipn || 0)))
    };
  });
  const totalIncome = monthRows.reduce((sum, row) => sum + Number(row.income || 0), 0);
  const totalIpn = monthRows.reduce((sum, row) => sum + Number(row.ipn || 0), 0);
  const hasIncomeEntries = monthRows.some((row) => row.ops > 0);
  const activeEmployeesCount = periodEmployees.length;
  const periodClosed = isFno910PeriodClosed(meta);
  const missingItems = [];
  const readyItems = [];

  if (regime !== "simplified") {
    missingItems.push("ФНО 910 доступна только на режиме Упрощёнка (910).");
  } else {
    readyItems.push("Режим Упрощёнка (910) подтверждён.");
  }

  if (String(profile.name || "").trim()) {
    readyItems.push("ФИО / наименование заполнено.");
  } else {
    missingItems.push("Заполните ФИО или наименование ИП в настройках.");
  }

  if (String(profile.iin || "").trim()) {
    readyItems.push("ИИН / БИН заполнен.");
  } else {
    missingItems.push("Заполните ИИН / БИН в настройках.");
  }

  if (String(profile.city || "").trim()) {
    readyItems.push("Город / район указан.");
  } else {
    missingItems.push("Укажите город или район, чтобы проверить ставку ИПН 910.");
  }

  if (hasIncomeEntries) {
    readyItems.push("Доходы за период найдены в журнале.");
  } else {
    missingItems.push("В журнале нет доходов за это полугодие. Проверьте, нужно ли подать нулевую форму.");
  }

  if (!periodClosed) {
    missingItems.push("Период ещё не завершён. Экспортируйте XML только после окончания полугодия или используйте экран как черновик для сверки.");
  }

  if (activeEmployeesCount > 0) {
    readyItems.push(`Сотрудники в выбранном периоде: ${activeEmployeesCount}. Предпросмотр поможет сверить данные перед ручным заполнением формы.`);
    missingItems.push("Для периодов со сотрудниками XML-черновик 910 пока не формируется автоматически. Используйте экран сверки и заполните разделы по сотрудникам вручную.");
  }

  const statusTone = regime !== "simplified"
    ? "danger"
    : missingItems.length > 0
      ? "warning"
      : "success";

  return {
    meta,
    reportRow,
    paymentRow,
    profile,
    regime,
    cityValue: String(profile.city || "").trim(),
    selectedRate,
    monthRows,
    totalIncome,
    totalIpn,
    hasIncomeEntries,
    periodClosed,
    activeEmployeesCount,
    missingItems,
    readyItems,
    statusTone
  };
}

function roundFno910AverageHeadcount(value) {
  const safeValue = Math.max(0, Number(value) || 0);
  const whole = Math.trunc(safeValue);
  return safeValue - whole >= 0.5 ? whole + 1 : whole;
}

function getFno910EmployeeMonthMetrics(periodDate, employees = state.employees) {
  const safeEmployees = normalizeEmployeeEntries(employees);
  const snapshots = safeEmployees
    .map((employee) => ({
      employee,
      snapshot: getEmployeePayrollSnapshot(employee, periodDate)
    }))
    .filter((item) => item.snapshot && item.snapshot.isActive);

  const count = snapshots.length;
  const payroll = snapshots.reduce((sum, item) => sum + Math.max(0, Math.round(Number(item.snapshot.salary || 0))), 0);

  return {
    count,
    payroll,
    averageSalary: count > 0 ? Math.round(payroll / count) : 0
  };
}

function buildFno910OfficialLineMapping(draft, options = {}) {
  const safeDraft = draft && typeof draft === "object" ? draft : null;
  if (!safeDraft || !safeDraft.meta || !Array.isArray(safeDraft.meta.monthDates)) {
    return {
      sections: [],
      summary: {
        readyCount: 0,
        reviewCount: 0,
        totalCount: 0
      }
    };
  }

  const safeProfile = sanitizeProfile(options.profile ?? safeDraft.profile ?? state.profile);
  const employees = getFno910EmployeesForPeriod(safeDraft.meta.monthDates, options.employees ?? state.employees);
  const ownerMonths = safeDraft.meta.monthDates.map((periodDate) => {
    const income = normalizeIncome(getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth(), options.incomes ?? state.incomes));
    const tax = calcSimplified(income, safeProfile);
    const socialIncomeBase = Math.max(0, Math.round(Number(tax.socialIncomeBase || 0)));
    const opvBase = Number(tax.opv || 0) > 0 ? Math.round(Number(tax.opv || 0) / RATES.OPV_RATE) : 0;
    return {
      monthLabel: MONTHS[periodDate.getMonth()],
      socialIncomeBase,
      socialContribution: Math.max(0, Math.round(Number(tax.so || 0))),
      opvBase,
      opv: Math.max(0, Math.round(Number(tax.opv || 0))),
      opvr: Math.max(0, Math.round(Number(tax.opvr || 0))),
      vosms: Math.max(0, Math.round(Number(tax.vosms || 0)))
    };
  });

  const employeeMonths = safeDraft.meta.monthDates.map((periodDate) => ({
    monthLabel: MONTHS[periodDate.getMonth()],
    ...getFno910EmployeeMonthMetrics(periodDate, employees)
  }));

  const averageHeadcountRaw = employeeMonths.reduce((sum, month) => sum + Number(month.count || 0), 0) / safeDraft.meta.monthDates.length;
  const averageHeadcount = roundFno910AverageHeadcount(averageHeadcountRaw);
  const averageSalaryPerEmployee = Math.round(employeeMonths.reduce((sum, month) => sum + Number(month.averageSalary || 0), 0) / safeDraft.meta.monthDates.length);
  const reviewNote = "Требует сверки с официальным расчетом КГД и заполнения в КНП ИСНА.";
  const readyNote = "Собрано автоматически из данных MyEsep.";

  const sections = [
    {
      id: "taxes",
      title: "Исчисление налогов",
      rows: [
        {
          code: "910.00.001",
          label: "Доход за налоговый период",
          status: "ready",
          value: Math.max(0, Math.round(Number(safeDraft.totalIncome || 0))),
          note: `${readyNote} Источник: журнал доходов.`
        },
        {
          code: "910.00.002",
          label: "Доход по трансфертному ценообразованию",
          status: "review",
          value: null,
          note: "В сервисе отдельно не ведется. Если такой доход был, заполните строку вручную."
        },
        {
          code: "910.00.003",
          label: "Среднесписочная численность работников",
          status: "ready",
          value: averageHeadcount,
          note: employees.length > 0
            ? `${readyNote} Рассчитано как среднее по 6 месяцам с округлением по правилам формы.`
            : "Без сотрудников в базе: строка заполнена нулем."
        },
        {
          code: "910.00.004",
          label: "Среднемесячная зарплата на одного работника",
          status: "ready",
          value: averageSalaryPerEmployee,
          note: employees.length > 0
            ? `${readyNote} Среднее по месячным начислениям сотрудников.`
            : "Без сотрудников в базе: строка заполнена нулем."
        },
        {
          code: "910.00.005",
          label: "Сумма исчисленных налогов",
          status: "review",
          value: null,
          note: `${reviewNote} Формула строки в официальном бланке зависит от актуальных правил КГД.`
        },
        {
          code: "910.00.006",
          label: "Корректировка суммы налогов",
          status: "review",
          value: null,
          note: "Отдельно в сервисе не ведется. Заполняется вручную, если есть основание для корректировки."
        },
        {
          code: "910.00.007",
          label: "Сумма налогов после корректировки",
          status: "review",
          value: null,
          note: `${reviewNote} Рассчитывается по логике официальной формы после строки 910.00.006.`
        },
        {
          code: "910.00.008",
          label: "Индивидуальный подоходный налог к уплате",
          status: "review",
          value: Math.max(0, Math.round(Number(safeDraft.totalIpn || 0))),
          note: `${reviewNote} Это ориентир по расчету MyEsep, а не подтвержденная строка официальной формы.`
        },
        {
          code: "910.00.009",
          label: "Социальный налог к уплате",
          status: "review",
          value: null,
          note: `${reviewNote} Для точной строки нужен полный алгоритм официальной формы 910.00.`
        }
      ]
    },
    {
      id: "owner-social",
      title: "Соцплатежи за ИП",
      rows: [
        {
          code: "910.00.010",
          label: "Доход для исчисления социальных отчислений",
          status: "ready",
          monthValues: ownerMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.socialIncomeBase })),
          total: ownerMonths.reduce((sum, month) => sum + Number(month.socialIncomeBase || 0), 0),
          note: `${readyNote} По месяцам периода.`
        },
        {
          code: "910.00.011",
          label: "Социальные отчисления за ИП",
          status: "ready",
          monthValues: ownerMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.socialContribution })),
          total: ownerMonths.reduce((sum, month) => sum + Number(month.socialContribution || 0), 0),
          note: `${readyNote} По месячным расчетам соцотчислений.`
        },
        {
          code: "910.00.012",
          label: "Доход для исчисления ОПВ",
          status: "ready",
          monthValues: ownerMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.opvBase })),
          total: ownerMonths.reduce((sum, month) => sum + Number(month.opvBase || 0), 0),
          note: `${readyNote} База ограничена правилами ОПВ.`
        },
        {
          code: "910.00.013",
          label: "ОПВ за ИП",
          status: "ready",
          monthValues: ownerMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.opv })),
          total: ownerMonths.reduce((sum, month) => sum + Number(month.opv || 0), 0),
          note: `${readyNote} По месячным расчетам ОПВ.`
        },
        {
          code: "910.00.014",
          label: "ОПВР за ИП",
          status: "ready",
          monthValues: ownerMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.opvr })),
          total: ownerMonths.reduce((sum, month) => sum + Number(month.opvr || 0), 0),
          note: `${readyNote} По месячным расчетам ОПВР.`
        },
        {
          code: "910.00.015",
          label: "Взносы ОСМС за ИП",
          status: "ready",
          monthValues: ownerMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.vosms })),
          total: ownerMonths.reduce((sum, month) => sum + Number(month.vosms || 0), 0),
          note: `${readyNote} По месячным расчетам ОСМС.`
        },
        {
          code: "910.00.016",
          label: "Начисленные доходы физических лиц",
          status: employees.length > 0 ? "review" : "ready",
          monthValues: employeeMonths.map((month) => ({ monthLabel: month.monthLabel, value: month.payroll })),
          total: employeeMonths.reduce((sum, month) => sum + Number(month.payroll || 0), 0),
          note: employees.length > 0
            ? `${reviewNote} В MyEsep показана только предварительная сумма начислений по сотрудникам.`
            : "Без сотрудников и начислений: строка заполнена нулем."
        }
      ]
    },
    {
      id: "employee-unified-payment",
      title: "Единый платеж и доходы работников",
      rows: [
        {
          code: "910.00.017",
          label: "Доходы работников для исчисления единого платежа",
          status: "review",
          value: null,
          note: "В текущем MVP эта часть формы не собирается автоматически."
        },
        {
          code: "910.00.018",
          label: "Сумма единого платежа, подлежащая перечислению",
          status: "review",
          value: null,
          note: "В текущем MVP эта часть формы не собирается автоматически."
        }
      ]
    },
    {
      id: "employee-taxes",
      title: "Налоги и соцплатежи по физлицам",
      rows: [
        {
          code: "910.00.019",
          label: "ИПН с доходов граждан Республики Казахстан",
          status: "review",
          value: null,
          note: "Для точного заполнения нужен отдельный маппинг по сотрудникам и статусам резидентства."
        },
        {
          code: "910.00.020",
          label: "ИПН с доходов иностранцев и лиц без гражданства",
          status: "review",
          value: null,
          note: "Для точного заполнения нужен отдельный маппинг по нерезидентам."
        },
        {
          code: "910.00.021",
          label: "Социальные отчисления, к уплате",
          status: "review",
          value: null,
          note: "Будет подтягиваться из карточек сотрудников на следующем этапе."
        },
        {
          code: "910.00.022",
          label: "ОПВ, к уплате",
          status: "review",
          value: null,
          note: "Будет подтягиваться из карточек сотрудников на следующем этапе."
        },
        {
          code: "910.00.023",
          label: "ОПВР, к уплате",
          status: "review",
          value: null,
          note: "Будет подтягиваться из карточек сотрудников на следующем этапе."
        },
        {
          code: "910.00.024",
          label: "Обязательные профессиональные пенсионные взносы, к уплате",
          status: "review",
          value: null,
          note: "Заполняется только для специальных сценариев и пока не поддерживается автоматически."
        },
        {
          code: "910.00.025",
          label: "Взносы и отчисления на ОСМС, к уплате",
          status: "review",
          value: null,
          note: "Будет подтягиваться из карточек сотрудников на следующем этапе."
        }
      ]
    },
    {
      id: "inventories-and-apparatus",
      title: "Запасы и аппарат акимов",
      rows: [
        {
          code: "910.00.026",
          label: "Сведения о запасах",
          status: "review",
          value: null,
          note: "Подразделы A, B и C пока не собираются автоматически."
        },
        {
          code: "910.00.027",
          label: "Бизнес-идентификационный номер аппарата акимов",
          status: "review",
          value: null,
          note: "Заполняется только для специального сценария и пока не поддерживается автоматически."
        }
      ]
    }
  ];

  const rows = sections.flatMap((section) => Array.isArray(section.rows) ? section.rows : []);
  const readyCount = rows.filter((row) => row.status === "ready").length;
  const reviewCount = rows.filter((row) => row.status !== "ready").length;

  return {
    sections,
    summary: {
      readyCount,
      reviewCount,
      totalCount: rows.length
    }
  };
}

function buildFno910Model(periodKey, options = {}) {
  const reportsState = normalizeReportsState(options.reports || state.reports);
  const formType = "initial";
  const formTypeLabel = "Первичная";
  const draft = getFno910Draft(periodKey, options);
  const totalOperations = draft.monthRows.reduce((sum, row) => sum + Number(row.ops || 0), 0);
  const generatedAt = new Date().toISOString();
  const officialLineMapping = buildFno910OfficialLineMapping(draft, options);

  const model = {
    schemaVersion: "myesep-fno910-draft-v1",
    officialSchema: false,
    officialUploadReady: false,
    formCode: "910.00",
    formType,
    formTypeLabel,
    periodKey: String(draft.meta && draft.meta.key || normalizeFno910PeriodKey(periodKey) || "").trim(),
    taxYear: Number(draft.meta && draft.meta.reportYear || 0),
    half: Number(draft.meta && draft.meta.half || 0),
    periodLabel: String(draft.meta && draft.meta.halfYearLabel || "").trim(),
    monthsLabel: String(draft.meta && draft.meta.monthsLabel || "").trim(),
    taxpayer: {
      name: String(draft.profile && draft.profile.name || "").trim(),
      iinBin: String(draft.profile && draft.profile.iin || "").trim(),
      city: String(draft.cityValue || "").trim(),
      regime: String(draft.regime || "").trim(),
      regimeLabel: regimeLabel(draft.regime),
      simplifiedIpnRate: Number(draft.selectedRate && draft.selectedRate.rate || 0),
      simplifiedIpnRateLabel: formatRatePercent(draft.selectedRate && draft.selectedRate.rate || 0)
    },
    totals: {
      income: Math.max(0, Math.round(Number(draft.totalIncome || 0))),
      ipn: Math.max(0, Math.round(Number(draft.totalIpn || 0))),
      operationsCount: totalOperations,
      activeEmployeesCount: Number(draft.activeEmployeesCount || 0)
    },
    deadlines: {
      reportDate: draft.reportRow ? String(draft.reportRow.date || "").trim() : "",
      reportDateLabel: draft.reportRow ? formatDateShort(draft.reportRow.date) : "",
      paymentDate: draft.paymentRow ? String(draft.paymentRow.date || "").trim() : "",
      paymentDateLabel: draft.paymentRow ? formatDateShort(draft.paymentRow.date) : ""
    },
    months: draft.monthRows.map((row, index) => ({
      monthNumber: Number(draft.meta.startMonth || 0) + index + 1,
      monthLabel: String(row.monthLabel || "").trim(),
      operationsCount: Number(row.ops || 0),
      income: Math.max(0, Math.round(Number(row.income || 0))),
      ipn: Math.max(0, Math.round(Number(row.ipn || 0)))
    })),
    lineItems: [
      {
        code: "income_total",
        label: "Доход за полугодие",
        value: Math.max(0, Math.round(Number(draft.totalIncome || 0)))
      },
      {
        code: "ipn_total",
        label: "Расчетный ИПН",
        value: Math.max(0, Math.round(Number(draft.totalIpn || 0)))
      },
      {
        code: "employee_count",
        label: "Активные сотрудники",
        value: Number(draft.activeEmployeesCount || 0)
      }
    ],
    sections: {
      readyItems: Array.isArray(draft.readyItems) ? [...draft.readyItems] : [],
      missingItems: Array.isArray(draft.missingItems) ? [...draft.missingItems] : []
    },
    officialLineMapping,
    meta: {
      generatedAt,
      generatedAtLabel: getFno910DraftGeneratedAtLabel(generatedAt),
      periodClosed: Boolean(draft.periodClosed),
      source: "MyEsep",
      officialSchemaExpected: "KGD ISNA / Smart Bridge"
    }
  };

  const validation = validateFno910Model(model);
  const readiness = buildFno910SubmissionReadiness(model, validation);

  return {
    ...model,
    validation,
    readiness
  };
}

function validateFno910Model(model) {
  const errors = [];
  const warnings = [];

  if (!model || String(model.formCode || "").trim() !== "910.00") {
    errors.push("Не удалось определить код формы 910.00.");
  }

  if (String(model && model.taxpayer && model.taxpayer.regime || "").trim() !== "simplified") {
    errors.push("XML для ФНО 910 доступен только на режиме Упрощёнка (910).");
  }

  if (!String(model && model.taxpayer && model.taxpayer.name || "").trim()) {
    errors.push("Заполните ФИО или наименование ИП.");
  }

  if (!String(model && model.taxpayer && model.taxpayer.iinBin || "").trim()) {
    errors.push("Заполните ИИН / БИН.");
  }

  if (!String(model && model.periodKey || "").trim()) {
    errors.push("Не удалось определить отчетный период.");
  }

  if (!Array.isArray(model && model.months) || model.months.length !== 6) {
    errors.push("Для XML нужна полная разбивка доходов по 6 месяцам полугодия.");
  }

  if (Number(model && model.totals && model.totals.activeEmployeesCount || 0) > 0) {
    errors.push("Черновой XML 910 пока доступен только для периодов без сотрудников. Используйте экран сверки и заполните разделы по сотрудникам вручную.");
  }

  if (!String(model && model.taxpayer && model.taxpayer.city || "").trim()) {
    warnings.push("Город или район не указан. Перед подачей проверьте ставку ИПН 910 вручную.");
  }

  if (Number(model && model.totals && model.totals.operationsCount || 0) <= 0) {
    warnings.push("Операции за период не найдены. Если нужна нулевая форма, проверьте это вручную.");
  }

  if (!String(model && model.deadlines && model.deadlines.reportDate || "").trim()) {
    warnings.push("Срок сдачи не определён автоматически. Сверьте срок в КНП ИСНА.");
  }

  if (!String(model && model.deadlines && model.deadlines.paymentDate || "").trim()) {
    warnings.push("Срок оплаты не определён автоматически. Сверьте его перед подачей.");
  }

  if (!Boolean(model && model.meta && model.meta.periodClosed)) {
    warnings.push("Период ещё не завершён. Перед экспортом черновика ещё раз проверьте месяцы без операций.");
  }

  return {
    errors,
    warnings,
    canExportDraftXml: errors.length === 0,
    canGenerateOfficialXml: false
  };
}

function buildFno910SubmissionReadiness(model, validation) {
  const safeValidation = validation && typeof validation === "object"
    ? validation
    : { errors: [], warnings: [], canExportDraftXml: false, canGenerateOfficialXml: false };
  const errorCount = Array.isArray(safeValidation.errors) ? safeValidation.errors.length : 0;
  const warningCount = Array.isArray(safeValidation.warnings) ? safeValidation.warnings.length : 0;
  const tone = errorCount > 0 ? "danger" : warningCount > 0 ? "warning" : "success";

  return {
    tone,
    chipLabel: errorCount > 0
      ? "XML не готов"
      : warningCount > 0
        ? "XML как черновик"
        : "XML черновик готов",
    summary: errorCount > 0
      ? "Сначала заполните обязательные данные, чтобы собрать XML-модель формы."
      : warningCount > 0
        ? "XML уже можно выгрузить как черновик, но перед загрузкой в КНП ИСНА нужна доработка под официальную схему КГД."
        : "Базовая XML-модель собрана. Следующий этап — адаптация к официальной схеме КГД / Smart Bridge.",
    canExportDraftXml: Boolean(safeValidation.canExportDraftXml),
    canGenerateOfficialXml: false,
    technicalItems: [
      `Схема: ${String(model && model.schemaVersion || "myesep-fno910-draft-v1").trim()}`,
      `Форма: ${String(model && model.formCode || "910.00").trim()}`,
      `Тип: ${String(model && model.formTypeLabel || "Первичная").trim()}`,
      `Строки 910.00: ${Number(model && model.officialLineMapping && model.officialLineMapping.summary && model.officialLineMapping.summary.readyCount || 0)} автозаполнены, ${Number(model && model.officialLineMapping && model.officialLineMapping.summary && model.officialLineMapping.summary.reviewCount || 0)} требуют сверки.`,
      "Официальная схема КГД / КНП ИСНА пока не подключена."
    ]
  };
}

function normalizeFno910OptionalNumber(value) {
  if (value === null || typeof value === "undefined" || value === "") {
    return null;
  }

  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return null;
  }

  return Math.max(0, Math.round(numeric));
}

function buildFno910MonthValueObject(row) {
  const monthValues = Array.isArray(row && row.monthValues) ? row.monthValues : [];
  const monthKeys = ["I", "II", "III", "IV", "V", "VI"];
  const payload = monthKeys.reduce((acc, key, index) => ({
    ...acc,
    [key]: normalizeFno910OptionalNumber(monthValues[index] && monthValues[index].value)
  }), {});
  payload.total = normalizeFno910OptionalNumber(row && row.total);
  return payload;
}

function createFno910EmptyMonthValueObject() {
  return {
    I: null,
    II: null,
    III: null,
    IV: null,
    V: null,
    VI: null,
    total: null
  };
}

function createFno910EmptyIndividualsValueObject() {
  return {
    ...createFno910EmptyMonthValueObject(),
    A: null,
    B: null,
    C: null,
    D: null,
    E: null
  };
}

function createFno910EmptyInventoryValueObject() {
  return {
    total: null,
    A: null,
    B: null,
    C: null
  };
}

function formatFno910JsonDate(value) {
  const normalized = normalizeFno910DeclarationDate(value);
  return normalized ? formatDate(normalized) : null;
}

function buildFno910OfficialJsonPayload(model, reviewFields) {
  const safeModel = model && typeof model === "object" ? model : null;
  const safeReviewFields = reviewFields && typeof reviewFields === "object"
    ? reviewFields
    : getFno910ReviewFields();
  const lineLookup = getFno910OfficialLineLookup(safeModel && safeModel.officialLineMapping);
  const getLineRow = (code) => lineLookup[String(code || "").trim()] || null;
  const getLineScalarValue = (code) => normalizeFno910OptionalNumber(getLineRow(code) && getLineRow(code).value);
  const getManualValue = (code) => ({
    value: getLineScalarValue(code),
    manual: true
  });
  const declarationDate = formatFno910JsonDate(safeReviewFields.declarationDate);
  const noticeDate = formatFno910JsonDate(safeReviewFields.noticeDate);

  return {
    taxpayerCode: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.iinBin || "").trim(),
    periodType: "HALF_YEAR",
    periodValue: Number(safeModel && safeModel.half || 0),
    fnoYear: Number(safeModel && safeModel.taxYear || 0),
    taxpayerNameRu: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    taxpayerNameKk: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    taxpayerNameQq: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    taxpayerCategories: [],
    taxpayerType: "UL",
    creatorCode: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.iinBin || "").trim(),
    creatorType: "UL",
    creatorNameRu: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    creatorNameKk: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    creatorNameEn: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    creatorNameQq: String(safeModel && safeModel.taxpayer && safeModel.taxpayer.name || "").trim(),
    declarationTypes: [...safeReviewFields.declarationTypeKnpValues],
    ogdCodeByLocation: null,
    ogdCodeByResidence: null,
    currencyCode: "KZT",
    noticeNumber: String(safeReviewFields.noticeNumber || "").trim(),
    noticeDate,
    fnoContent: {
      type: "fno910",
      taxpayerResponsibility: {
        fullNameOfHead: String(safeReviewFields.responsibleName || "").trim(),
        isResponsible: true,
        declarationDate,
        fullNameOfAuthorizedPerson: null,
        fullNameOfEmployeeWhoAcceptedDeclaration: null,
        declarationReceiptDate: null,
        declarationIncomingNumber: null,
        postmarkDate: null
      },
      commonInfo: {
        selectedApplications: [],
        isShowTis: false,
        _5: false,
        _10: ["A"]
      },
      calculatedTax: {
        _001: {
          total: normalizeFno910OptionalNumber(safeModel && safeModel.totals && safeModel.totals.income),
          A: null,
          AI: null,
          AII: null
        },
        _002: null,
        _003: {
          total: getLineScalarValue("910.00.003"),
          A: null,
          B: null
        },
        _004: getLineScalarValue("910.00.004"),
        _005: getLineScalarValue("910.00.005"),
        _006: getManualValue("910.00.006"),
        _007: getLineScalarValue("910.00.007"),
        _008: getManualValue("910.00.008"),
        _009: getManualValue("910.00.009")
      },
      calculatedSocialPaymentForIP: {
        _010: buildFno910MonthValueObject(getLineRow("910.00.010")),
        _011: buildFno910MonthValueObject(getLineRow("910.00.011")),
        _012: buildFno910MonthValueObject(getLineRow("910.00.012")),
        _013: buildFno910MonthValueObject(getLineRow("910.00.013")),
        _014: buildFno910MonthValueObject(getLineRow("910.00.014")),
        _015: buildFno910MonthValueObject(getLineRow("910.00.015"))
      },
      AccruedIncomeForIndividuals: {
        _016: createFno910EmptyIndividualsValueObject()
      },
      calculatedSinglePaymentFromEmployees: {
        _017: createFno910EmptyMonthValueObject(),
        _018: createFno910EmptyMonthValueObject()
      },
      calculatedSocialAndIPNForIndividual: {
        _019: createFno910EmptyMonthValueObject(),
        _020: createFno910EmptyMonthValueObject(),
        _021: createFno910EmptyMonthValueObject(),
        _022: createFno910EmptyMonthValueObject(),
        _023: createFno910EmptyMonthValueObject(),
        _024: createFno910EmptyMonthValueObject(),
        _025: createFno910EmptyMonthValueObject()
      },
      inventoryInfo: {
        _026: createFno910EmptyInventoryValueObject(),
        _027: null
      },
      application_01: [],
      application_02: [],
      application_03: []
    }
  };
}

function validateFno910OfficialJsonModel(model, reviewFields) {
  const errors = [];
  const warnings = [];
  const safeModel = model && typeof model === "object" ? model : {};
  const safeReviewFields = reviewFields && typeof reviewFields === "object" ? reviewFields : getFno910ReviewFields();

  if (String(safeModel.formCode || "").trim() !== "910.00") {
    errors.push("Не удалось определить код формы 910.00.");
  }

  if (String(safeModel.taxpayer && safeModel.taxpayer.regime || "").trim() !== "simplified") {
    errors.push("Скачивание формы 910 доступно только на режиме Упрощёнка (910).");
  }

  if (!String(safeModel.taxpayer && safeModel.taxpayer.name || "").trim()) {
    errors.push("Заполните ФИО или наименование ИП.");
  }

  if (!String(safeModel.taxpayer && safeModel.taxpayer.iinBin || "").trim()) {
    errors.push("Заполните ИИН / БИН.");
  }

  if (!String(safeModel.periodKey || "").trim()) {
    errors.push("Не удалось определить отчётный период.");
  }

  if (!Array.isArray(safeModel.months) || safeModel.months.length !== 6) {
    errors.push("Для скачивания формы нужна полная разбивка по 6 месяцам полугодия.");
  }

  if (Number(safeModel.totals && safeModel.totals.activeEmployeesCount || 0) > 0) {
    errors.push("Первая версия скачивания 910 пока работает только для периодов без сотрудников.");
  }

  if (String(safeReviewFields.declarationType || "").trim() !== "regular") {
    errors.push("Пока поддерживаем только очередную декларацию 910.");
  }

  if (!String(safeReviewFields.responsibleName || "").trim()) {
    errors.push("Укажите ФИО ответственного за подачу.");
  }

  if (!String(safeReviewFields.declarationDate || "").trim()) {
    errors.push("Укажите дату декларации.");
  }

  if (!String(safeModel.taxpayer && safeModel.taxpayer.city || "").trim()) {
    warnings.push("Город или район не указан. Перед загрузкой в КНП проверьте ставку ИПН вручную.");
  }

  if (Number(safeModel.totals && safeModel.totals.operationsCount || 0) <= 0) {
    warnings.push("Доходы за период не найдены. Если нужна нулевая форма, перепроверьте это перед загрузкой.");
  }

  if (!Boolean(safeModel.meta && safeModel.meta.periodClosed)) {
    warnings.push("Период ещё не завершён. Перед скачиванием ещё раз проверьте месяцы без операций.");
  }

  if ((safeReviewFields.noticeNumber && !safeReviewFields.noticeDate) || (!safeReviewFields.noticeNumber && safeReviewFields.noticeDate)) {
    warnings.push("Номер и дата уведомления должны быть заполнены вместе, если вы указываете уведомление.");
  }

  return {
    errors,
    warnings,
    canDownload: errors.length === 0
  };
}

function buildFno910OfficialJsonReadiness(validation) {
  const safeValidation = validation && typeof validation === "object"
    ? validation
    : { errors: [], warnings: [], canDownload: false };
  const errorCount = Array.isArray(safeValidation.errors) ? safeValidation.errors.length : 0;
  const warningCount = Array.isArray(safeValidation.warnings) ? safeValidation.warnings.length : 0;
  const tone = errorCount > 0 ? "danger" : warningCount > 0 ? "warning" : "success";

  return {
    tone,
    chipLabel: errorCount > 0
      ? "Форма не готова"
      : warningCount > 0
        ? "Проверьте перед скачиванием"
        : "Форма готова",
    summary: errorCount > 0
      ? "Сначала заполните обязательные поля, чтобы скачать файл формы."
      : warningCount > 0
        ? "Файл формы можно скачать, но перед загрузкой в кабинет налоговой лучше ещё раз проверить предупреждения."
        : "Файл формы готов. Его можно загрузить в кабинет налоговой через кнопку загрузки файла.",
    canDownload: Boolean(safeValidation.canDownload)
  };
}

function buildFno910OfficialJsonModel(periodKey, options = {}) {
  const reportsState = normalizeReportsState(options.reports || state.reports);
  const baseModel = buildFno910Model(periodKey, { ...options, reports: reportsState });
  const reviewFields = getFno910ReviewFields(reportsState, options.profile ?? state.profile, options.referenceDate || new Date());
  const jsonPayload = buildFno910OfficialJsonPayload(baseModel, reviewFields);
  const validation = validateFno910OfficialJsonModel(baseModel, reviewFields);
  const readiness = buildFno910OfficialJsonReadiness(validation);

  return {
    ...baseModel,
    officialSchema: true,
    officialUploadReady: Boolean(readiness.canDownload),
    uploadFormat: "knp-json",
    reviewFields,
    jsonPayload,
    validation,
    readiness
  };
}

function getFno910JsonFileName(model) {
  if (!model || !Number.isFinite(Number(model.taxYear || 0)) || !Number.isFinite(Number(model.half || 0))) {
    return "MyEsep-FNO-910.json";
  }

  return `MyEsep-FNO-910-${Math.trunc(Number(model.taxYear || 0))}-H${Math.trunc(Number(model.half || 0))}.json`;
}

function serializeFno910OfficialJson(model) {
  const safeModel = model && typeof model === "object" ? model : null;
  if (!safeModel || !safeModel.readiness || !safeModel.readiness.canDownload || !safeModel.jsonPayload) {
    return "";
  }

  return JSON.stringify(safeModel.jsonPayload, null, 2);
}

function downloadFno910OfficialJson(model) {
  const json = serializeFno910OfficialJson(model);
  if (!json || typeof document === "undefined" || typeof window === "undefined" || typeof Blob === "undefined" || typeof URL === "undefined" || typeof URL.createObjectURL !== "function") {
    return false;
  }

  const blob = new Blob([json], { type: "application/json;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getFno910JsonFileName(model);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return true;
}

function getFno910XmlFileName(model) {
  if (!model || !Number.isFinite(Number(model.taxYear || 0)) || !Number.isFinite(Number(model.half || 0))) {
    return "MyEsep-FNO-910-draft.xml";
  }

  return `MyEsep-FNO-910-draft-${Math.trunc(Number(model.taxYear || 0))}-H${Math.trunc(Number(model.half || 0))}.xml`;
}

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function serializeFno910DraftXml(model) {
  const xmlModel = model && typeof model === "object" ? model : null;
  if (!xmlModel || !xmlModel.readiness || !xmlModel.readiness.canExportDraftXml) {
    return "";
  }

  const monthNodes = (Array.isArray(xmlModel.months) ? xmlModel.months : [])
    .map((month) => `    <month number="${escapeXml(month.monthNumber)}" label="${escapeXml(month.monthLabel)}">
      <operationsCount>${escapeXml(month.operationsCount)}</operationsCount>
      <income>${escapeXml(month.income)}</income>
      <ipn>${escapeXml(month.ipn)}</ipn>
    </month>`)
    .join("\n");

  const lineItemNodes = (Array.isArray(xmlModel.lineItems) ? xmlModel.lineItems : [])
    .map((line) => `    <lineItem code="${escapeXml(line.code)}" label="${escapeXml(line.label)}">${escapeXml(line.value)}</lineItem>`)
    .join("\n");

  const readyNodes = (Array.isArray(xmlModel.sections && xmlModel.sections.readyItems) ? xmlModel.sections.readyItems : [])
    .map((item) => `    <item>${escapeXml(item)}</item>`)
    .join("\n");

  const missingNodes = (Array.isArray(xmlModel.sections && xmlModel.sections.missingItems) ? xmlModel.sections.missingItems : [])
    .map((item) => `    <item>${escapeXml(item)}</item>`)
    .join("\n");

  const errorNodes = (Array.isArray(xmlModel.validation && xmlModel.validation.errors) ? xmlModel.validation.errors : [])
    .map((item) => `    <error>${escapeXml(item)}</error>`)
    .join("\n");

  const warningNodes = (Array.isArray(xmlModel.validation && xmlModel.validation.warnings) ? xmlModel.validation.warnings : [])
    .map((item) => `    <warning>${escapeXml(item)}</warning>`)
    .join("\n");

  const officialSectionNodes = (Array.isArray(xmlModel.officialLineMapping && xmlModel.officialLineMapping.sections) ? xmlModel.officialLineMapping.sections : [])
    .map((section) => {
      const rowNodes = (Array.isArray(section.rows) ? section.rows : [])
        .map((row) => {
          const monthValueNodes = Array.isArray(row.monthValues)
            ? row.monthValues
              .map((month) => `        <monthValue label="${escapeXml(month.monthLabel)}">${escapeXml(month.value)}</monthValue>`)
              .join("\n")
            : "";
          return [
            `      <line code="${escapeXml(row.code)}" status="${escapeXml(row.status)}">`,
            `        <label>${escapeXml(row.label)}</label>`,
            row.value === null || typeof row.value === "undefined" ? "" : `        <value>${escapeXml(row.value)}</value>`,
            monthValueNodes ? "        <monthValues>" : "",
            monthValueNodes,
            monthValueNodes ? "        </monthValues>" : "",
            typeof row.total === "undefined" ? "" : `        <total>${escapeXml(row.total)}</total>`,
            `        <note>${escapeXml(row.note)}</note>`,
            "      </line>"
          ].filter(Boolean).join("\n");
        })
        .join("\n");
      return [
        `    <section id="${escapeXml(section.id)}" title="${escapeXml(section.title)}">`,
        rowNodes,
        "    </section>"
      ].join("\n");
    })
    .join("\n");

  return [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<!-- Черновой XML MyEsep для ФНО 910. Не является официальным форматом КГД / КНП ИСНА. -->",
    `<myesepFno910Draft schemaVersion="${escapeXml(xmlModel.schemaVersion)}" officialSchema="false" formCode="${escapeXml(xmlModel.formCode)}">`,
    `  <period key="${escapeXml(xmlModel.periodKey)}" taxYear="${escapeXml(xmlModel.taxYear)}" half="${escapeXml(xmlModel.half)}" label="${escapeXml(xmlModel.periodLabel)}" />`,
    `  <formType code="${escapeXml(xmlModel.formType)}">${escapeXml(xmlModel.formTypeLabel)}</formType>`,
    "  <taxpayer>",
    `    <name>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.name)}</name>`,
    `    <iinBin>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.iinBin)}</iinBin>`,
    `    <city>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.city)}</city>`,
    `    <regime>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.regime)}</regime>`,
    `    <regimeLabel>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.regimeLabel)}</regimeLabel>`,
    `    <simplifiedIpnRate>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.simplifiedIpnRate)}</simplifiedIpnRate>`,
    `    <simplifiedIpnRateLabel>${escapeXml(xmlModel.taxpayer && xmlModel.taxpayer.simplifiedIpnRateLabel)}</simplifiedIpnRateLabel>`,
    "  </taxpayer>",
    "  <totals>",
    `    <income>${escapeXml(xmlModel.totals && xmlModel.totals.income)}</income>`,
    `    <ipn>${escapeXml(xmlModel.totals && xmlModel.totals.ipn)}</ipn>`,
    `    <operationsCount>${escapeXml(xmlModel.totals && xmlModel.totals.operationsCount)}</operationsCount>`,
    `    <activeEmployeesCount>${escapeXml(xmlModel.totals && xmlModel.totals.activeEmployeesCount)}</activeEmployeesCount>`,
    "  </totals>",
    "  <deadlines>",
    `    <reportDate>${escapeXml(xmlModel.deadlines && xmlModel.deadlines.reportDate)}</reportDate>`,
    `    <paymentDate>${escapeXml(xmlModel.deadlines && xmlModel.deadlines.paymentDate)}</paymentDate>`,
    "  </deadlines>",
    "  <lineItems>",
    lineItemNodes,
    "  </lineItems>",
    "  <months>",
    monthNodes,
    "  </months>",
    "  <checks>",
    "    <readyItems>",
    readyNodes,
    "    </readyItems>",
    "    <missingItems>",
    missingNodes,
    "    </missingItems>",
    "  </checks>",
    "  <validation>",
    `    <canExportDraftXml>${escapeXml(Boolean(xmlModel.validation && xmlModel.validation.canExportDraftXml))}</canExportDraftXml>`,
    `    <canGenerateOfficialXml>${escapeXml(Boolean(xmlModel.validation && xmlModel.validation.canGenerateOfficialXml))}</canGenerateOfficialXml>`,
    "    <errors>",
    errorNodes,
    "    </errors>",
    "    <warnings>",
    warningNodes,
    "    </warnings>",
    "  </validation>",
    "  <officialLineMapping>",
    officialSectionNodes,
    "  </officialLineMapping>",
    "  <meta>",
    `    <generatedAt>${escapeXml(xmlModel.meta && xmlModel.meta.generatedAt)}</generatedAt>`,
    `    <generatedAtLabel>${escapeXml(xmlModel.meta && xmlModel.meta.generatedAtLabel)}</generatedAtLabel>`,
    `    <source>${escapeXml(xmlModel.meta && xmlModel.meta.source)}</source>`,
    `    <officialSchemaExpected>${escapeXml(xmlModel.meta && xmlModel.meta.officialSchemaExpected)}</officialSchemaExpected>`,
    "  </meta>",
    "</myesepFno910Draft>"
  ].join("\n");
}

function downloadFno910DraftXml(model) {
  const xml = serializeFno910DraftXml(model);
  if (!xml || typeof document === "undefined" || typeof window === "undefined" || typeof Blob === "undefined" || typeof URL === "undefined" || typeof URL.createObjectURL !== "function") {
    return false;
  }

  const blob = new Blob([xml], { type: "application/xml;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getFno910XmlFileName(model);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return true;
}

function getFno910OfficialLineStatusLabel(status) {
  return String(status || "").trim() === "ready" ? "Заполнено" : "Проверьте";
}

function buildFno910OfficialLineValueMarkup(row) {
  if (!row || typeof row !== "object") {
    return '<span class="amount-sensitive">-</span>';
  }

  if (Array.isArray(row.monthValues) && row.monthValues.length > 0) {
    const monthPills = row.monthValues
      .map((month) => `<span class="reports-line-period-pill">${escapeHtml(month.monthLabel)}: <strong class="amount-sensitive">${fmt(month.value)}</strong></span>`)
      .join("");
    const totalValue = typeof row.total === "undefined"
      ? ""
      : `<strong class="reports-line-total amount-sensitive">Итого: ${fmt(row.total)}</strong>`;
    return `
      <div class="reports-line-periods">
        ${monthPills}
      </div>
      ${totalValue}
    `;
  }

  if (row.value === null || typeof row.value === "undefined") {
    return '<span class="reports-line-empty">Нужно сверить вручную</span>';
  }

  return `<strong class="amount-sensitive">${fmt(row.value)}</strong>`;
}

function buildFno910OfficialLinesMarkup(mapping) {
  const safeMapping = mapping && typeof mapping === "object" ? mapping : { sections: [] };
  const sections = Array.isArray(safeMapping.sections) ? safeMapping.sections : [];
  if (!sections.length) {
    return '<div class="reports-lines-empty">Маппинг строк 910.00 пока не собран.</div>';
  }

  return sections.map((section) => `
    <div class="reports-lines-section">
      <div class="reports-lines-section-head">
        <h5>${escapeHtml(section.title)}</h5>
      </div>
      <div class="reports-lines-list">
        ${(Array.isArray(section.rows) ? section.rows : []).map((row) => `
          <div class="reports-line-row">
            <div class="reports-line-main">
              <div class="reports-line-title-row">
                <span class="reports-line-code">${escapeHtml(row.code)}</span>
                <span class="reports-line-status ${row.status === "ready" ? "success" : "warning"}">${escapeHtml(getFno910OfficialLineStatusLabel(row.status))}</span>
              </div>
              <strong>${escapeHtml(row.label)}</strong>
              <p>${escapeHtml(row.note || "")}</p>
            </div>
            <div class="reports-line-value">
              ${buildFno910OfficialLineValueMarkup(row)}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function getFno910OfficialLineLookup(mapping) {
  const sections = Array.isArray(mapping && mapping.sections) ? mapping.sections : [];
  return sections.reduce((acc, section) => {
    (Array.isArray(section.rows) ? section.rows : []).forEach((row) => {
      if (row && row.code) {
        acc[String(row.code).trim()] = row;
      }
    });
    return acc;
  }, {});
}

function renderFno910BoxCells(value, count = 12) {
  const text = String(value ?? "").replace(/\s+/g, "").slice(-count);
  const chars = Array.from({ length: count }, (_, index) => text[text.length - count + index] || "").slice(-count);
  const normalizedChars = chars.length < count
    ? [...Array.from({ length: count - chars.length }, () => ""), ...chars]
    : chars;

  return `
    <div class="fno910-box-strip">
      ${normalizedChars.map((char) => `<span class="fno910-box-cell${char ? " is-filled" : ""}">${escapeHtml(char)}</span>`).join("")}
    </div>
  `;
}

function buildFno910OfficialLineRowMarkup(row) {
  const safeRow = row && typeof row === "object" ? row : { code: "", label: "", note: "", value: null, status: "review" };
  const statusLabel = getFno910OfficialLineStatusLabel(safeRow.status);
  const valueMarkup = Array.isArray(safeRow.monthValues) && safeRow.monthValues.length > 0
    ? `
      <div class="fno910-month-grid">
        ${safeRow.monthValues.map((month, index) => `
          <div class="fno910-month-item">
            <span class="fno910-month-label">${["I", "II", "III", "IV", "V", "VI"][index] || escapeHtml(month.monthLabel)}</span>
            ${renderFno910BoxCells(month.value, 10)}
          </div>
        `).join("")}
        <div class="fno910-total-item">
          <span>Итого</span>
          ${renderFno910BoxCells(safeRow.total, 12)}
        </div>
      </div>
    `
    : safeRow.value === null || typeof safeRow.value === "undefined"
      ? `<div class="fno910-empty-value">Проверьте вручную</div>`
      : renderFno910BoxCells(safeRow.value, 12);

  return `
    <div class="fno910-line-row">
      <div class="fno910-line-head">
        <span class="fno910-line-code">${escapeHtml(safeRow.code)}</span>
        <span class="fno910-line-chip ${safeRow.status === "ready" ? "success" : "warning"}">${escapeHtml(statusLabel)}</span>
      </div>
      <div class="fno910-line-body">
        <div class="fno910-line-label">
          <strong>${escapeHtml(safeRow.label)}</strong>
          <p>${escapeHtml(safeRow.note || "")}</p>
        </div>
        <div class="fno910-line-value">${valueMarkup}</div>
      </div>
    </div>
  `;
}

function buildFno910OfficialSectionMarkup(title, rows) {
  const safeRows = Array.isArray(rows) ? rows.filter(Boolean) : [];
  return `
    <section class="fno910-section">
      <div class="fno910-section-bar">${escapeHtml(title)}</div>
      <div class="fno910-section-body">
        ${safeRows.map((row) => buildFno910OfficialLineRowMarkup(row)).join("")}
      </div>
    </section>
  `;
}

function buildFno910OfficialPreviewMarkup(draft, model) {
  if (!draft || !draft.meta) {
    return "";
  }

  const lineLookup = getFno910OfficialLineLookup(model && model.officialLineMapping);
  const getLine = (code) => lineLookup[String(code).trim()] || null;
  const statusMeta = getFno910DraftStatusMeta(draft);

  const page1Rows = ["910.00.001", "910.00.002", "910.00.003", "910.00.004", "910.00.005", "910.00.006", "910.00.007", "910.00.008", "910.00.009"].map(getLine);
  const page2Rows = ["910.00.010", "910.00.011", "910.00.012", "910.00.013", "910.00.014", "910.00.015", "910.00.016"].map(getLine);
  const page3Rows = ["910.00.017", "910.00.018", "910.00.019", "910.00.020", "910.00.021", "910.00.022", "910.00.023", "910.00.024", "910.00.025"].map(getLine);
  const page4Rows = ["910.00.026", "910.00.027"].map(getLine);

  return `
    <div class="fno910-official-preview">
      <article class="fno910-page">
        <div class="fno910-page-topline">
          <span>Форма 910.00 стр. 01</span>
          <span class="fno910-page-chip ${statusMeta.tone}">${escapeHtml(statusMeta.label)}</span>
        </div>
        <div class="fno910-title-block">
          <div class="fno910-title">Упрощенная декларация для субъектов малого бизнеса</div>
          <div class="fno910-subtitle">Предварительное заполнение по данным MyEsep для сверки с КНП ИСНА</div>
        </div>
        <div class="fno910-info-grid">
          <div class="fno910-info-field">
            <span>ИИН / БИН</span>
            ${renderFno910BoxCells(String(draft.profile.iin || "").trim(), 12)}
          </div>
          <div class="fno910-info-field">
            <span>Год</span>
            ${renderFno910BoxCells(draft.meta.reportYear, 4)}
          </div>
          <div class="fno910-info-field is-wide">
            <span>ФИО / наименование</span>
            <strong>${escapeHtml(String(draft.profile.name || "Не заполнено").trim() || "Не заполнено")}</strong>
          </div>
          <div class="fno910-info-field">
            <span>Период</span>
            <strong>${escapeHtml(draft.meta.halfYearLabel)}</strong>
          </div>
          <div class="fno910-info-field is-wide">
            <span>Город / район</span>
            <strong>${escapeHtml(String(draft.cityValue || "Не заполнено").trim() || "Не заполнено")}</strong>
          </div>
          <div class="fno910-info-field">
            <span>Ставка ИПН</span>
            <strong>${escapeHtml(formatRatePercent(draft.selectedRate.rate))}</strong>
          </div>
        </div>
        ${buildFno910OfficialSectionMarkup("Раздел I. Исчисление налогов", page1Rows)}
      </article>

      <article class="fno910-page">
        <div class="fno910-page-topline">
          <span>Форма 910.00 стр. 02</span>
          <span>${escapeHtml(draft.meta.monthsLabel)}</span>
        </div>
        ${buildFno910OfficialSectionMarkup("Раздел II. Исчисление социальных платежей за ИП", page2Rows)}
      </article>

      <article class="fno910-page">
        <div class="fno910-page-topline">
          <span>Форма 910.00 стр. 03</span>
          <span>Сотрудники и выплаты физлицам</span>
        </div>
        ${buildFno910OfficialSectionMarkup("Разделы III-IV. Единый платеж, ИПН и соцплатежи физлиц", page3Rows)}
      </article>

      <article class="fno910-page">
        <div class="fno910-page-topline">
          <span>Форма 910.00 стр. 04</span>
          <span>Финальные сведения</span>
        </div>
        ${buildFno910OfficialSectionMarkup("Разделы V-VI. Запасы и аппарат акимов", page4Rows)}
        <div class="fno910-page-footer-note">
          Этот вид нужен для сверки с официальным бланком КГД. Перед подачей всё равно проверьте данные в КНП ИСНА.
        </div>
      </article>
    </div>
  `;
}

function getFno910DraftStatusMeta(draft) {
  const tone = draft && draft.statusTone === "success"
    ? "success"
    : draft && draft.statusTone === "danger"
      ? "danger"
      : "warning";

  return {
    tone,
    label: tone === "success"
      ? "Черновик можно готовить"
      : tone === "danger"
        ? "Недоступно для текущего режима"
        : "Нужно проверить данные",
    note: tone === "success"
      ? "Основные данные собраны. Осталось сверить черновик перед переносом в КНП ИСНА."
      : tone === "danger"
        ? "ФНО 910 работает только для режима Упрощёнка (910)."
        : "Часть данных сервис уже подготовил, но перед сдачей нужно дозаполнить профиль или журнал."
  };
}

function getFno910DraftGeneratedAtLabel(referenceDate = new Date()) {
  const safeDate = referenceDate instanceof Date ? referenceDate : new Date(referenceDate);
  if (Number.isNaN(safeDate.getTime())) {
    return formatDateShort(new Date());
  }

  try {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(safeDate);
  } catch (_error) {
    return formatDateShort(safeDate);
  }
}

function getFno910DraftFileName(draft) {
  if (!draft || !draft.meta) {
    return "MyEsep-FNO-910-draft";
  }

  return `MyEsep-FNO-910-draft-${draft.meta.reportYear}-H${draft.meta.half}`;
}

function buildFno910PreviewSheetMarkup(draft, options = {}) {
  if (!draft || !draft.meta) {
    return "";
  }

  const statusMeta = getFno910DraftStatusMeta(draft);
  const model = options.model || buildFno910Model(draft.meta.key);
  const generatedAtLabel = getFno910DraftGeneratedAtLabel(options.generatedAt || new Date());
  const officialPreviewMarkup = buildFno910OfficialPreviewMarkup(draft, model);

  return `
    <div class="reports-preview-sheet${options.printMode ? " is-print" : ""}">
      <div class="reports-preview-header">
        <div class="reports-preview-header-copy">
          <div class="reports-preview-kicker">Данные для переноса в КНП ИСНА</div>
          <h4>Черновик ФНО 910.00</h4>
          <p>${escapeHtml(draft.meta.halfYearLabel)} · сформировано ${escapeHtml(generatedAtLabel)}</p>
        </div>
        <span class="reports-inline-status ${statusMeta.tone}">${statusMeta.label}</span>
      </div>

      <div class="reports-preview-grid">
        <div class="reports-preview-block">
          <span>ФИО / наименование</span>
          <strong>${escapeHtml(String(draft.profile.name || "Не заполнено").trim() || "Не заполнено")}</strong>
        </div>
        <div class="reports-preview-block">
          <span>ИИН / БИН</span>
          <strong>${escapeHtml(String(draft.profile.iin || "Не заполнено").trim() || "Не заполнено")}</strong>
        </div>
        <div class="reports-preview-block">
          <span>Город / район</span>
          <strong>${escapeHtml(String(draft.cityValue || "Не заполнено").trim() || "Не заполнено")}</strong>
        </div>
        <div class="reports-preview-block">
          <span>Ставка ИПН 910</span>
          <strong>${formatRatePercent(draft.selectedRate.rate)}</strong>
        </div>
        <div class="reports-preview-block">
          <span>Срок сдачи</span>
          <strong>${draft.reportRow ? escapeHtml(formatDateShort(draft.reportRow.date)) : "Проверьте в календаре"}</strong>
        </div>
        <div class="reports-preview-block">
          <span>Срок оплаты</span>
          <strong>${draft.paymentRow ? escapeHtml(formatDateShort(draft.paymentRow.date)) : "Проверьте в календаре"}</strong>
        </div>
        <div class="reports-preview-block">
          <span>Доход за период</span>
          <strong>${fmt(draft.totalIncome)}</strong>
        </div>
        <div class="reports-preview-block">
          <span>Расчётный ИПН MyEsep</span>
          <strong>${fmt(draft.totalIpn)}</strong>
        </div>
      </div>

      <div class="reports-preview-section">
        <div class="reports-preview-section-head">
          <h5>Черновой вид бланка</h5>
          <span>Строки 910.00 и страницы для сверки</span>
        </div>
        ${officialPreviewMarkup}
      </div>

      <div class="reports-preview-footer">
        Перед отправкой в КНП ИСНА сверьте этот черновик с официальной формой 910.00. Этот экран нужен только для проверки и переноса данных.
      </div>
    </div>
  `;
}

function buildFno910PrintDocumentHtml(draft, model) {
  const title = escapeHtml(getFno910DraftFileName(draft));
  const sheetMarkup = buildFno910PreviewSheetMarkup(draft, { printMode: true, generatedAt: new Date(), model });

  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #17305f;
      --muted: #62759f;
      --line: #dce6fb;
      --line-soft: #e8efff;
      --bg-soft: #f7faff;
      --ok: #15803d;
      --ok-bg: #ecfdf5;
      --warn: #b45309;
      --warn-bg: #fff7ed;
      --danger: #b91c1c;
      --danger-bg: #fef2f2;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", "Rubik", Arial, sans-serif;
      color: var(--ink);
      background: #ffffff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .reports-print-root {
      padding: 24px;
    }

    .reports-inline-status {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 7px 11px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
      line-height: 1;
      white-space: nowrap;
    }

    .reports-inline-status.success { background: var(--ok-bg); color: var(--ok); }
    .reports-inline-status.warning { background: var(--warn-bg); color: var(--warn); }
    .reports-inline-status.danger { background: var(--danger-bg); color: var(--danger); }

    .reports-preview-sheet {
      border: 1px solid var(--line);
      border-radius: 22px;
      padding: 24px;
      background: #ffffff;
    }

    .reports-preview-header,
    .reports-preview-section-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .reports-preview-kicker {
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .reports-preview-header h4,
    .reports-preview-section-head h5 {
      margin: 6px 0 0;
      color: var(--ink);
    }

    .reports-preview-header h4 { font-size: 30px; line-height: 1.08; }
    .reports-preview-header p,
    .reports-preview-section-head span {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
    }

    .reports-preview-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-top: 18px;
    }

    .reports-preview-block,
    .reports-preview-section {
      border: 1px solid var(--line-soft);
      border-radius: 16px;
      background: var(--bg-soft);
    }

    .reports-preview-block {
      padding: 14px;
    }

    .reports-preview-block span {
      display: block;
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .reports-preview-block strong {
      display: block;
      margin-top: 8px;
      font-size: 20px;
      line-height: 1.2;
    }

    .reports-preview-section {
      margin-top: 16px;
      padding: 16px;
      background: #ffffff;
    }

    .reports-preview-footer {
      margin-top: 16px;
      padding: 14px 16px;
      border-radius: 14px;
      background: #fff8e1;
      color: #7a6b55;
      font-size: 12px;
      line-height: 1.5;
    }

    .fno910-official-preview {
      display: grid;
      gap: 18px;
      margin-top: 14px;
    }

    .fno910-page {
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 18px;
      background: #ffffff;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .fno910-page + .fno910-page {
      margin-top: 14px;
    }

    .fno910-page-topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
    }

    .fno910-page-chip {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
    }

    .fno910-page-chip.success { background: var(--ok-bg); color: var(--ok); }
    .fno910-page-chip.warning { background: var(--warn-bg); color: var(--warn); }
    .fno910-page-chip.danger { background: var(--danger-bg); color: var(--danger); }

    .fno910-title-block {
      margin-top: 12px;
      text-align: center;
    }

    .fno910-title {
      color: var(--ink);
      font-size: 22px;
      font-weight: 900;
      line-height: 1.15;
      text-transform: uppercase;
    }

    .fno910-subtitle {
      margin-top: 6px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
    }

    .fno910-info-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 16px;
    }

    .fno910-info-field {
      padding: 12px;
      border: 1px solid var(--line-soft);
      border-radius: 16px;
      background: #fff;
    }

    .fno910-info-field.is-wide { grid-column: span 2; }
    .fno910-info-field span {
      display: block;
      margin-bottom: 8px;
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .fno910-info-field strong { display: block; font-size: 15px; }

    .fno910-section { margin-top: 16px; }
    .fno910-section-bar {
      padding: 9px 12px;
      border-radius: 14px 14px 0 0;
      background: #212121;
      color: #fff;
      font-size: 13px;
      font-weight: 800;
    }
    .fno910-section-body {
      border: 1px solid var(--line-soft);
      border-top: 0;
      border-radius: 0 0 16px 16px;
      overflow: hidden;
      background: #fff;
    }
    .fno910-line-row + .fno910-line-row { border-top: 1px solid var(--line-soft); }
    .fno910-line-row { padding: 14px 16px; }
    .fno910-line-head {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .fno910-line-code {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 999px;
      background: #eef3ff;
      color: #35589d;
      font-size: 11px;
      font-weight: 800;
    }
    .fno910-line-chip {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
    }
    .fno910-line-chip.success { background: var(--ok-bg); color: var(--ok); }
    .fno910-line-chip.warning { background: var(--warn-bg); color: var(--warn); }
    .fno910-line-body {
      display: grid;
      grid-template-columns: minmax(0, 1.5fr) minmax(280px, 1fr);
      gap: 14px;
      margin-top: 10px;
    }
    .fno910-line-label strong { display: block; font-size: 15px; }
    .fno910-line-label p {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.45;
    }
    .fno910-line-value {
      padding: 12px;
      border: 1px solid var(--line-soft);
      border-radius: 16px;
      background: var(--bg-soft);
    }
    .fno910-box-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(16px, 1fr));
      gap: 4px;
    }
    .fno910-box-cell {
      min-height: 22px;
      border: 1px solid #cad7f7;
      border-radius: 6px;
      background: #fff;
      color: var(--ink);
      font-size: 11px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fno910-box-cell.is-filled { background: #eef4ff; }
    .fno910-empty-value { color: var(--muted); font-weight: 700; }
    .fno910-month-grid { display: grid; gap: 10px; }
    .fno910-month-item,
    .fno910-total-item {
      display: grid;
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 10px;
      align-items: center;
    }
    .fno910-month-label,
    .fno910-total-item span { color: var(--muted); font-size: 12px; font-weight: 800; }
    .fno910-page-footer-note {
      margin-top: 16px;
      padding: 12px 14px;
      border-radius: 14px;
      background: #fff8e1;
      color: #7a6b55;
      font-size: 12px;
      line-height: 1.5;
    }

    @page {
      size: A4;
      margin: 12mm;
    }

    @media print {
      .reports-print-root {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <div class="reports-print-root">
    ${sheetMarkup}
  </div>
</body>
</html>`;
}

function openPrintDialogFromHtml(title, html) {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return false;
  }

  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";

  const cleanup = () => {
    window.setTimeout(() => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 800);
  };

  document.body.appendChild(iframe);
  const frameWindow = iframe.contentWindow;
  const frameDocument = frameWindow && frameWindow.document;
  if (!frameWindow || !frameDocument) {
    cleanup();
    return false;
  }

  try {
    frameWindow.addEventListener("afterprint", () => cleanup(), { once: true });
  } catch (_error) {
    // ignore listener issues
  }

  frameDocument.open();
  frameDocument.write(html);
  frameDocument.close();
  window.setTimeout(() => {
    try {
      frameWindow.document.title = title;
      frameWindow.focus();
      frameWindow.print();
    } catch (_error) {
      cleanup();
    }
  }, 220);
  window.setTimeout(cleanup, 60000);
  return true;
}

function downloadFno910DraftPdf(draft, model) {
  return openPrintDialogFromHtml(getFno910DraftFileName(draft), buildFno910PrintDocumentHtml(draft, model));
}

function getFno200ReportsModel(periodKey, activeRegime = state.regime) {
  const meta = getFno200PeriodMeta(periodKey) || getFno200PeriodMeta(getDefaultFno200PeriodKey());
  const row = meta ? getFno200PeriodDeadlineRow(meta.key) : null;
  const breakdown = row ? getDeadlineQuarterReportBreakdown(row) : null;
  const safeRegime = String(activeRegime || state.taxRegime || state.regime || "").trim();
  const hasOwner = Boolean(breakdown && breakdown.hasOwnerInReport);
  const employeesCount = Math.max(0, Number(breakdown && breakdown.employeesCount || 0));
  const missingIinCount = Math.max(0, Number(breakdown && breakdown.employeesMissingIinCount || 0));
  const reviewCount = Math.max(0, Number(breakdown && breakdown.employeesNeedingAccrualReviewCount || 0));
  const employeeRows = breakdown && Array.isArray(breakdown.employeeRows) ? breakdown.employeeRows : [];
  let isApplicable = safeRegime === "our" || employeesCount > 0;

  if (safeRegime === "self") {
    isApplicable = false;
  }

  let tone = "warning";
  let chipLabel = "Пока рано";
  let summary = "Сначала проверьте квартальные данные, затем открывайте форму 200 в кабинете налоговой.";
  let hint = "MyEsep показывает, кого и что нужно проверить перед подачей. Скачивание формы 200 добавим отдельным этапом.";

  if (safeRegime === "self") {
    chipLabel = "Не нужна";
    summary = "На самозанятости ФНО 200 не используется. Эта форма появляется у ИП с сотрудниками или на ОУР.";
    hint = "Если позже перейдёте на ИП с сотрудниками или на ОУР, здесь появится квартальная проверка по форме 200.";
  } else if (!isApplicable) {
    chipLabel = "Сейчас не нужна";
    summary = "ФНО 200 нужна только если в выбранном квартале были сотрудники. Пока по данным сервиса их нет.";
    hint = "Если добавите сотрудника и начисления за квартал, здесь сразу появится проверка перед подачей формы.";
  } else if (missingIinCount > 0) {
    tone = "danger";
    chipLabel = "Заполните ИИН";
    summary = `У ${getEmployeesCountLabel(missingIinCount)} не заполнен ИИН. Пока это не исправить, форму 200 готовой считать нельзя.`;
    hint = "Сначала заполните ИИН у сотрудников, потом вернитесь сюда и проверьте квартальные суммы.";
  } else if (reviewCount > 0) {
    chipLabel = "Проверьте месяцы";
    summary = `У ${getEmployeesCountLabel(reviewCount)} есть неполный месяц или нестандартное начисление. Перед подачей форму лучше сверить вручную.`;
    hint = "После проверки начислений откройте форму 200 в кабинете налоговой и перенесите квартальные данные.";
  } else {
    tone = "success";
    chipLabel = "Можно готовить";
    summary = "Квартальные данные собраны. Перед подачей ещё раз сверьте суммы и перенесите форму 200 в кабинет налоговой.";
    hint = "Этот блок показывает, кто попадёт в форму и какие суммы уже собраны по данным сервиса.";
  }

  const readyItems = [];
  if (hasOwner) {
    readyItems.push(`ИП за себя включён в отчёт за ${meta ? meta.quarterLabel : "квартал"}.`);
  }
  if (employeesCount > 0) {
    readyItems.push(`В отчёт попадают ${getEmployeesCountLabel(employeesCount)}.`);
  }
  if (Number(breakdown && breakdown.totalEmployeeSalary || 0) > 0) {
    readyItems.push("Начисления сотрудников за квартал уже собраны по данным сервиса.");
  }
  if (employeesCount > 0 && missingIinCount === 0) {
    readyItems.push("По сотрудникам заполнены ИИН.");
  }
  if (employeesCount > 0 && reviewCount === 0) {
    readyItems.push("Неполных месяцев без проверки не найдено.");
  }
  if (!readyItems.length) {
    readyItems.push("Пока нет данных, которые нужно переносить в форму 200.");
  }

  const missingItems = [];
  if (safeRegime === "self") {
    missingItems.push("Для самозанятого эта форма не требуется.");
  } else if (!isApplicable) {
    missingItems.push("Добавьте сотрудников и начисления, если форма 200 должна появиться.");
  }
  if (missingIinCount > 0) {
    missingItems.push(`Заполните ИИН у ${getEmployeesCountLabel(missingIinCount)}.`);
  }
  if (reviewCount > 0) {
    missingItems.push(`Проверьте неполный месяц у ${getEmployeesCountLabel(reviewCount)}.`);
  }
  if (isApplicable) {
    missingItems.push("Подавать форму всё ещё нужно через кабинет налоговой.");
  }
  if (!missingItems.length) {
    missingItems.push("Критичных пробелов перед проверкой формы не найдено.");
  }

  const scopeLabel = hasOwner && employeesCount > 0
    ? `ИП + ${getEmployeesCountLabel(employeesCount)}`
    : hasOwner
      ? "Только ИП"
      : employeesCount > 0
        ? getEmployeesCountLabel(employeesCount)
        : "Пока пусто";

  const totalAmount = hasOwner
    ? Math.max(0, Math.round(Number(breakdown && breakdown.totalCombinedRemittance || 0)))
    : Math.max(0, Math.round(Number(breakdown && breakdown.totalEmployeeRemittance || 0)));

  return {
    meta,
    row,
    breakdown,
    tone,
    chipLabel,
    summary,
    hint,
    isApplicable,
    hasOwner,
    employeesCount,
    missingIinCount,
    reviewCount,
    totalAmount,
    scopeLabel,
    employeeRows,
    readyItems,
    missingItems
  };
}

function renderReportsPage() {
  const reportsState = ensureReportsState();
  const activeReportSection = normalizeReportsActiveSection(reportsState.activeReportSection);
  const isFno910Section = activeReportSection === "fno910";
  const isFno200Section = activeReportSection === "fno200";
  const periodOptions = getFno910PeriodOptions();
  const fno200PeriodOptions = getFno200PeriodOptions();
  const fallbackMeta = periodOptions[periodOptions.length - 1] || getFno910PeriodMeta(getDefaultFno910PeriodKey());
  const selectedMeta = getFno910PeriodMeta(reportsState.fno910PeriodKey) || fallbackMeta;
  const draft = getFno910Draft(selectedMeta.key);
  const fno910Model = buildFno910OfficialJsonModel(selectedMeta.key, { reports: reportsState });
  const fno200Report = getFno200ReportsModel(reportsState.fno200PeriodKey, state.regime);
  const fno200Meta = fno200Report.meta || getFno200PeriodMeta(getDefaultFno200PeriodKey());
  const fno200DeadlineLabel = fno200Report.row ? formatDateShort(fno200Report.row.date) : "Проверьте в календаре";
  const fno200ReadyItemsHtml = fno200Report.readyItems.length
    ? fno200Report.readyItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>Пока нет подтверждённых данных.</li>";
  const fno200MissingItemsHtml = fno200Report.missingItems.length
    ? fno200Report.missingItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>Критичных пробелов не найдено.</li>";
  const fno200MembersRows = [
    fno200Report.hasOwner
      ? `
        <tr>
          <td>ИП за себя</td>
          <td>${escapeHtml(fno200Report.breakdown && fno200Report.breakdown.ownerRow && fno200Report.breakdown.ownerRow.monthsLabel || (fno200Meta ? fno200Meta.monthsLabel : ""))}</td>
          <td>Готово</td>
        </tr>
      `
      : "",
    ...fno200Report.employeeRows.map((employee) => {
      const statusParts = [
        employee.hasValidIin === false ? "Нет ИИН" : "",
        employee.needsMonthlyAccrualReview ? "Проверить месяц" : ""
      ].filter(Boolean);
      return `
        <tr>
          <td>${escapeHtml(employee.name || "Сотрудник")}</td>
          <td>${escapeHtml(employee.months.map((month) => month.monthLabel).join(", "))}</td>
          <td>${escapeHtml(statusParts.join(" · ") || "Готово")}</td>
        </tr>
      `;
    })
  ].filter(Boolean).join("");
  const reviewFields = fno910Model.reviewFields || getFno910ReviewFields(reportsState, draft.profile);
  const declarationTypeMeta = getFno910DeclarationTypeMeta(reviewFields.declarationType);
  const statusLabel = String(fno910Model.readiness && fno910Model.readiness.chipLabel || "Проверьте форму").trim();
  const statusNote = String(fno910Model.readiness && fno910Model.readiness.summary || "Перед скачиванием проверьте обязательные поля формы.").trim();
  const statusClass = String(fno910Model.readiness && fno910Model.readiness.tone || "warning").trim();
  const officialMappingSummary = fno910Model.officialLineMapping && fno910Model.officialLineMapping.summary
    ? fno910Model.officialLineMapping.summary
    : { readyCount: 0, reviewCount: 0, totalCount: 0 };
  const deadlineLabel = draft.reportRow ? formatDateShort(draft.reportRow.date) : "Проверьте в календаре";
  const paymentLabel = draft.paymentRow ? formatDateShort(draft.paymentRow.date) : "Проверьте в календаре";
  const monthlyRowsHtml = draft.monthRows
    .map((row) => `
      <tr>
        <td>${escapeHtml(row.monthLabel)}</td>
        <td>${row.ops}</td>
        <td><span class="amount-sensitive">${fmt(row.income)}</span></td>
        <td><span class="amount-sensitive">${fmt(row.ipn)}</span></td>
      </tr>
    `)
    .join("");
  const readyItemsHtml = draft.readyItems.length
    ? draft.readyItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : '<li>Пока нет подтверждённых данных.</li>';
  const reviewChecklistItems = Array.from(new Set([
    ...(Array.isArray(draft.missingItems) ? draft.missingItems : []),
    ...(Array.isArray(fno910Model.validation && fno910Model.validation.errors) ? fno910Model.validation.errors : []),
    ...(Array.isArray(fno910Model.validation && fno910Model.validation.warnings) ? fno910Model.validation.warnings : [])
  ]));
  const missingItemsHtml = reviewChecklistItems.length
    ? reviewChecklistItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : '<li>Критичных пробелов не найдено.</li>';
  const officialLinesMarkup = buildFno910OfficialLinesMarkup(fno910Model.officialLineMapping);
  const canDownloadOfficialJson = Boolean(fno910Model.readiness && fno910Model.readiness.canDownload);
  const canOpenDraftPrint = String(draft.regime || "").trim() === "simplified";
  const jsonExportReason = canDownloadOfficialJson
    ? ""
    : (Array.isArray(fno910Model.validation && fno910Model.validation.errors) && fno910Model.validation.errors.length > 0
      ? fno910Model.validation.errors[0]
      : "Форма 910 пока недоступна для скачивания.");
  const printDraftReason = canOpenDraftPrint
    ? ""
    : "Печатный черновик 910 доступен только на режиме Упрощёнка (910).";
  const jsonButtonAttrs = canDownloadOfficialJson ? "" : ` disabled title="${escapeHtml(jsonExportReason)}"`;
  const printButtonAttrs = canOpenDraftPrint ? "" : ` disabled title="${escapeHtml(printDraftReason)}"`;
  const exportHint = canDownloadOfficialJson
    ? "Скачается файл для загрузки в кабинет налоговой. На сайте откройте форму 910.00 и нажмите кнопку загрузки файла."
    : jsonExportReason;

  els.pageContent.innerHTML = `
    <div class="reports-page">
    <div class="reports-top-switch" role="tablist" aria-label="Разделы отчетности">
      <button
        type="button"
        class="reports-top-switch-btn${isFno910Section ? " is-active" : ""}"
        data-action="set-reports-section"
        data-report-section="fno910"
        aria-selected="${isFno910Section}"
      >
        <span class="reports-top-switch-head">
          <span class="reports-top-switch-icon" aria-hidden="true"><i data-lucide="file-text"></i></span>
          <span class="reports-top-switch-title">Форма 910</span>
        </span>
        <span class="reports-top-switch-meta">для ИП на упрощёнке</span>
      </button>
      <button
        type="button"
        class="reports-top-switch-btn${isFno200Section ? " is-active" : ""}"
        data-action="set-reports-section"
        data-report-section="fno200"
        aria-selected="${isFno200Section}"
      >
        <span class="reports-top-switch-head">
          <span class="reports-top-switch-icon" aria-hidden="true"><i data-lucide="users"></i></span>
          <span class="reports-top-switch-title">Форма 200</span>
        </span>
        <span class="reports-top-switch-meta">для ОУР и сотрудников</span>
      </button>
    </div>

    <div
      class="reports-section${isFno910Section ? " is-active" : ""}"
      data-reports-section-panel="fno910"
      ${isFno910Section ? "" : "hidden"}
    >
    <section class="reports-hero-card card">
      <div class="reports-hero-head">
        <div>
          <div class="reports-eyebrow">Отчетность</div>
          <h3>ФНО 910.00</h3>
          <p class="reports-hero-text">Форма собирается из ваших настроек, доходов и текущих расчётов. Перед скачиванием проверьте поля, которые нужно заполнить вручную. Потом загрузите файл в кабинет налоговой.</p>
        </div>
        <span class="reports-status-chip ${statusClass}">${statusLabel}</span>
      </div>

      <div class="reports-period-switch" role="tablist" aria-label="Период ФНО 910">
        ${periodOptions.map((option) => `
          <button
            type="button"
            class="reports-period-btn${option.key === selectedMeta.key ? " is-active" : ""}"
            data-action="set-fno910-period"
            data-period-key="${option.key}"
            aria-selected="${option.key === selectedMeta.key}"
          >
            ${escapeHtml(option.halfYearLabel)}
          </button>
        `).join("")}
      </div>

      <div class="reports-summary-grid">
        <article class="reports-summary-card">
          <span>Срок сдачи</span>
          <strong>${escapeHtml(deadlineLabel)}</strong>
          <small>${escapeHtml(selectedMeta.halfYearLabel)}</small>
        </article>
        <article class="reports-summary-card">
          <span>Срок оплаты</span>
          <strong>${escapeHtml(paymentLabel)}</strong>
          <small>налог по ФНО 910</small>
        </article>
        <article class="reports-summary-card">
          <span>Доход за период</span>
          <strong class="amount-sensitive">${fmt(draft.totalIncome)}</strong>
          <small>${draft.hasIncomeEntries ? "по данным журнала доходов" : "данных пока нет"}</small>
        </article>
        <article class="reports-summary-card">
          <span>Расчетный ИПН</span>
          <strong class="amount-sensitive">${fmt(draft.totalIpn)}</strong>
          <small>${formatRatePercent(draft.selectedRate.rate)} для ${escapeHtml(selectedMeta.halfYearLabel)}</small>
        </article>
      </div>

      <div class="reports-hero-actions">
        <button type="button" class="btn btn-primary" data-action="download-fno910-json"${jsonButtonAttrs}>Скачать форму 910</button>
        <button type="button" class="btn btn-ghost" data-action="download-fno910-pdf"${printButtonAttrs}>Открыть печатный черновик</button>
        <button type="button" class="btn btn-ghost" data-page="income">Открыть доходы</button>
      </div>
      <div class="reports-pdf-hint">${escapeHtml(exportHint)}</div>
    </section>

    <article class="card reports-card mt-16">
      <div class="reports-card-head">
        <h3>Проверить перед подачей</h3>
        <span class="reports-inline-status ${statusClass}">${statusLabel}</span>
      </div>
      <p class="reports-card-note">${escapeHtml(statusNote)}</p>
      <div class="reports-check-grid">
        <div class="reports-check-col">
          <strong>Уже есть</strong>
          <ul class="reports-check-list reports-check-list-ok">${readyItemsHtml}</ul>
        </div>
        <div class="reports-check-col">
          <strong>Нужно проверить</strong>
          <ul class="reports-check-list reports-check-list-missing">${missingItemsHtml}</ul>
        </div>
      </div>
    </article>

    <article class="card reports-card mt-16">
      <div class="reports-card-head">
        <h3>Ручные поля перед скачиванием</h3>
        <span class="reports-inline-status ${statusClass}">${statusLabel}</span>
      </div>
      <p class="reports-card-note">Эти поля не считаются из доходов автоматически. Проверьте их перед скачиванием файла формы.</p>
      <form id="reportsFno910ReviewForm" class="reports-review-form" autocomplete="off">
        <div class="reports-review-grid">
          <label class="reports-review-field">
            <span>Тип декларации</span>
            <select name="fno910DeclarationType" data-reports-fno910-field="fno910DeclarationType">
              ${FNO910_DECLARATION_TYPE_OPTIONS.map((option) => `
                <option value="${escapeHtml(option.id)}"${option.id === reviewFields.declarationType ? " selected" : ""}>${escapeHtml(option.label)}</option>
              `).join("")}
            </select>
            <small>${escapeHtml(declarationTypeMeta.note)}</small>
          </label>

          <label class="reports-review-field">
            <span>ФИО ответственного</span>
            <input
              type="text"
              name="fno910ResponsibleName"
              value="${escapeHtml(reviewFields.responsibleName)}"
              data-reports-fno910-field="fno910ResponsibleName"
              placeholder="Например, Абдурахманов Руслан Маратович"
            />
            <small>Подставляем из профиля, если поле не заполнено вручную.</small>
          </label>

          <label class="reports-review-field">
            <span>Дата декларации</span>
            <input
              type="date"
              name="fno910DeclarationDate"
              value="${escapeHtml(reviewFields.declarationDate)}"
              data-reports-fno910-field="fno910DeclarationDate"
            />
            <small>Эта дата попадёт в файл формы как дата её формирования.</small>
          </label>

          <label class="reports-review-field">
            <span>Номер уведомления</span>
            <input
              type="text"
              name="fno910NoticeNumber"
              value="${escapeHtml(reviewFields.noticeNumber)}"
              data-reports-fno910-field="fno910NoticeNumber"
              placeholder="Если есть уведомление от КГД"
            />
            <small>Оставьте пустым для обычной очередной декларации.</small>
          </label>

          <label class="reports-review-field">
            <span>Дата уведомления</span>
            <input
              type="date"
              name="fno910NoticeDate"
              value="${escapeHtml(reviewFields.noticeDate)}"
              data-reports-fno910-field="fno910NoticeDate"
            />
            <small>Заполняйте вместе с номером уведомления.</small>
          </label>
        </div>
      </form>
      <div class="reports-review-note">Если ошибка в доходах, сотрудниках или ставке ИПН, лучше исправить исходные данные на сайте, а не подменять расчёт вручную в форме.</div>
    </article>

    <details class="card reports-collapse-card mt-16">
      <summary class="reports-collapse-summary">
        <div>
          <strong>Доходы за полугодие</strong>
          <p>${escapeHtml(selectedMeta.monthsLabel)}</p>
        </div>
        <span class="reports-collapse-meta">Открыть</span>
      </summary>
      <div class="reports-collapse-body">
        <div class="table-wrap">
          <table class="table reports-table">
            <thead>
              <tr><th>Месяц</th><th>Операций</th><th>Доход</th><th>ИПН</th></tr>
            </thead>
            <tbody>
              ${monthlyRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </details>

    <details class="card reports-collapse-card mt-16">
      <summary class="reports-collapse-summary">
        <div>
          <strong>Строки 910.00</strong>
          <p>${officialMappingSummary.readyCount} из ${officialMappingSummary.totalCount} строк сервис уже заполнил автоматически</p>
        </div>
        <span class="reports-collapse-meta">Открыть</span>
      </summary>
      <div class="reports-collapse-body">
        <p class="reports-card-note">Здесь видно, какие строки формы MyEsep уже подготовил, а какие нужно проверить вручную перед подачей.</p>
        <div class="reports-lines-wrap">
          ${officialLinesMarkup}
        </div>
      </div>
    </details>

    <details class="card reports-preview-card reports-collapse-card mt-16">
      <summary class="reports-collapse-summary">
        <div>
          <strong>Печатный черновик</strong>
          <p>Открыть полный вид черновика 910 для сверки и печати</p>
        </div>
        <span class="reports-collapse-meta">Открыть</span>
      </summary>
      <div class="reports-collapse-body">
        <div class="reports-preview-card-head">
          <div>
            <h3>Печатный черновик</h3>
            <p class="reports-preview-card-note">Этот экран нужен для проверки и печати. Для официальной подачи всё равно переносите данные в КНП ИСНА.</p>
          </div>
        </div>
        ${buildFno910PreviewSheetMarkup(draft, { model: fno910Model })}
        <div class="reports-pdf-hint">Печатный черновик нужен для проверки, согласования или сохранения в PDF. Официальную подачу всё равно делайте через КНП ИСНА.</div>
      </div>
    </details>
    </div>

    <div
      class="reports-section${isFno200Section ? " is-active" : ""}"
      data-reports-section-panel="fno200"
      ${isFno200Section ? "" : "hidden"}
    >
    <section class="reports-hero-card reports-hero-card-secondary card">
      <div class="reports-hero-head">
        <div>
          <div class="reports-eyebrow">Отчётность по кварталу</div>
          <h3>ФНО 200.00</h3>
          <p class="reports-hero-text">${escapeHtml(
            state.regime === "our"
              ? "Форма собирается по вам и сотрудникам за квартал. Здесь видно, кого сервис включает в отчёт и что ещё нужно проверить перед подачей."
              : "Форма нужна ИП с сотрудниками. Здесь видно, кого сервис включает в отчёт и какие данные ещё нужно проверить перед подачей."
          )}</p>
        </div>
        <span class="reports-status-chip ${escapeHtml(fno200Report.tone)}">${escapeHtml(fno200Report.chipLabel)}</span>
      </div>

      <div class="reports-period-switch" role="tablist" aria-label="Период ФНО 200">
        ${fno200PeriodOptions.map((option) => `
          <button
            type="button"
            class="reports-period-btn${option.key === fno200Meta.key ? " is-active" : ""}"
            data-action="set-fno200-period"
            data-period-key="${option.key}"
            aria-selected="${option.key === fno200Meta.key}"
          >
            ${escapeHtml(option.quarterLabel)}
          </button>
        `).join("")}
      </div>

      <div class="reports-summary-grid">
        <article class="reports-summary-card">
          <span>Срок сдачи</span>
          <strong>${escapeHtml(fno200DeadlineLabel)}</strong>
          <small>${escapeHtml(fno200Meta.quarterLabel)}</small>
        </article>
        <article class="reports-summary-card">
          <span>Кто войдёт в форму</span>
          <strong class="reports-summary-text">${escapeHtml(fno200Report.scopeLabel)}</strong>
          <small>${fno200Report.isApplicable ? "по данным сервиса" : "форма пока не требуется"}</small>
        </article>
        <article class="reports-summary-card">
          <span>Ориентир по суммам</span>
          <strong class="amount-sensitive">${fmt(fno200Report.totalAmount)}</strong>
          <small>${fno200Report.hasOwner ? "за себя и сотрудников" : fno200Report.employeesCount > 0 ? "по сотрудникам" : "данных пока нет"}</small>
        </article>
        <article class="reports-summary-card">
          <span>Нужно проверить</span>
          <strong class="reports-summary-text">${escapeHtml(
            fno200Report.missingIinCount > 0
              ? `${fno200Report.missingIinCount} ИИН`
              : fno200Report.reviewCount > 0
                ? `${fno200Report.reviewCount} мес.`
                : "0"
          )}</strong>
          <small>${fno200Report.missingIinCount > 0 ? "сначала заполните ИИН" : fno200Report.reviewCount > 0 ? "сверьте неполные месяцы" : "критичных пробелов нет"}</small>
        </article>
      </div>

      <div class="reports-hero-actions">
        ${state.regime === "self"
          ? ""
          : `<button type="button" class="btn btn-primary" data-page="employees">${fno200Report.missingIinCount > 0 || fno200Report.reviewCount > 0 ? "Проверить сотрудников" : "Открыть сотрудников"}</button>`}
        ${fno200Report.hasOwner ? '<button type="button" class="btn btn-ghost" data-page="income">Открыть доходы</button>' : ""}
        <button type="button" class="btn btn-ghost" data-page="calendar">Открыть календарь</button>
      </div>
      <div class="reports-pdf-hint">${escapeHtml(fno200Report.hint)}</div>
    </section>

    <article class="card reports-card mt-16">
      <div class="reports-card-head">
        <h3>Проверить перед подачей ФНО 200</h3>
        <span class="reports-inline-status ${escapeHtml(fno200Report.tone)}">${escapeHtml(fno200Report.chipLabel)}</span>
      </div>
      <p class="reports-card-note">${escapeHtml(fno200Report.summary)}</p>
      <div class="reports-check-grid">
        <div class="reports-check-col">
          <strong>Уже есть</strong>
          <ul class="reports-check-list reports-check-list-ok">${fno200ReadyItemsHtml}</ul>
        </div>
        <div class="reports-check-col">
          <strong>Нужно проверить</strong>
          <ul class="reports-check-list reports-check-list-missing">${fno200MissingItemsHtml}</ul>
        </div>
      </div>
    </article>

    <details class="card reports-collapse-card mt-16">
      <summary class="reports-collapse-summary">
        <div>
          <strong>Кто попадёт в форму 200</strong>
          <p>${escapeHtml(fno200Meta.monthsLabel)}</p>
        </div>
        <span class="reports-collapse-meta">Открыть</span>
      </summary>
      <div class="reports-collapse-body">
        <div class="table-wrap">
          <table class="table reports-table">
            <thead>
              <tr><th>Кто</th><th>Месяцы</th><th>Статус</th></tr>
            </thead>
            <tbody>
              ${fno200MembersRows || '<tr><td colspan="3">По выбранному кварталу пока нет данных для формы 200.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </details>
    </div>
    </div>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  els.pageContent.querySelectorAll(".reports-top-switch-btn[data-report-section]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const nextSection = normalizeReportsActiveSection(button.dataset.reportSection || "");
      const changed = setReportsActiveSection(nextSection, { rerender: false });
      syncReportsSectionUi(nextSection);

      if (changed) {
        trackEvent("reports_section_change", { section: nextSection });
      }
    });
  });

  syncReportsSectionUi(activeReportSection);
}

function getFno910PaymentBreakdown(row) {
  const meta = row && row.type === "payment" ? getFno910HalfYearMeta(row) : null;
  if (!meta) {
    return null;
  }

  const months = meta.monthDates.map((periodDate) => {
    const income = normalizeIncome(getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth()));
    const tax = calcSimplified(income, state.profile);
    const ipn = Math.max(0, Math.round(Number(tax.ipn || 0)));
    return {
      periodDate,
      monthLabel: MONTHS[periodDate.getMonth()],
      income,
      ipn,
      ipnRate: Number(tax.ipnRate || 0)
    };
  });

  const totalIncome = months.reduce((sum, month) => sum + Number(month.income || 0), 0);
  const totalIpn = months.reduce((sum, month) => sum + Number(month.ipn || 0), 0);

  return {
    kind: "fno910",
    half: meta.half,
    reportYear: meta.reportYear,
    halfYearLabel: meta.halfYearLabel,
    monthsLabel: meta.monthsLabel,
    months,
    income: totalIncome,
    opv: 0,
    opvr: 0,
    so: 0,
    vosms: 0,
    socTax: 0,
    employeeRows: [],
    employeeWithholdingsTotal: 0,
    employeeEmployerChargesTotal: 0,
    employeeRemittanceTotal: 0,
    employeeEmployerCost: 0,
    employeesNeedingReview: [],
    employeesNeedingReviewCount: 0,
    total: totalIpn,
    totalWithoutVosms: totalIpn,
    grandTotal: totalIpn
  };
}

function isFno200Deadline(row) {
  if (!row || row.type !== "report") return false;
  const code = String(row.code || "").trim().toLowerCase();
  const title = String(row.title || "");
  return code === "fno200" || /фно\s*200(?:\.00)?|200\.00/i.test(title);
}

function getDeadlineQuarterMeta(row) {
  if (!isFno200Deadline(row)) {
    return null;
  }

  const quarter = Math.min(4, Math.max(1, Math.trunc(Number(row.quarter) || 0)));
  const reportYear = Math.trunc(Number(row.reportYear) || 0);
  if (!quarter || !reportYear) {
    return null;
  }

  const startMonth = (quarter - 1) * 3;
  const monthDates = Array.from({ length: 3 }, (_, index) => new Date(reportYear, startMonth + index, 1));
  const quarterLabel = `${quarter} квартал ${reportYear}`;
  const monthsLabel = `${MONTHS_ACCUSATIVE[startMonth]}, ${MONTHS_ACCUSATIVE[startMonth + 1]}, ${MONTHS_ACCUSATIVE[startMonth + 2]} ${reportYear}`;

  return {
    quarter,
    reportYear,
    startMonth,
    monthDates,
    quarterLabel,
    monthsLabel
  };
}

function getDeadlineTrackedPeriodStart(row) {
  if (!row || typeof row !== "object") {
    return null;
  }

  if (row.type === "payment") {
    return getDeadlinePayrollPeriodDate(row);
  }

  if (isFno910Deadline(row)) {
    const meta = getFno910HalfYearMeta(row);
    return meta && Array.isArray(meta.monthDates) && meta.monthDates[0]
      ? new Date(meta.monthDates[0].getFullYear(), meta.monthDates[0].getMonth(), 1)
      : null;
  }

  if (isFno200Deadline(row)) {
    const meta = getDeadlineQuarterMeta(row);
    return meta && Array.isArray(meta.monthDates) && meta.monthDates[0]
      ? new Date(meta.monthDates[0].getFullYear(), meta.monthDates[0].getMonth(), 1)
      : null;
  }

  return null;
}

function getDeadlineQuarterEmployeeRows(row, employees = state.employees) {
  const meta = getDeadlineQuarterMeta(row);
  if (!meta || !hasEmployeeFeatureEnabled()) {
    return [];
  }

  return normalizeEmployeeEntries(employees)
    .map((employee) => {
      const reviewMeta = getEmployeeQuarterAccrualReviewMeta(employee, meta);
      const months = meta.monthDates
        .map((periodDate) => {
          const snapshot = getEmployeePayrollSnapshot(employee, periodDate);
          const salary = Number(snapshot.salary || 0);
          if (!snapshot.isActive || salary <= 0) {
            return null;
          }

          const withholdingsTotal = Number(snapshot.employeeWithholdingsTotal || 0);
          const employerCost = Number(snapshot.employeeEmployerChargesTotal || 0);

          return {
            periodDate,
            monthLabel: MONTHS[periodDate.getMonth()],
            salary,
            withholdingsTotal,
            employerCost,
            remittanceTotal: Number(snapshot.employeeTotalRemittance || 0)
          };
        })
        .filter(Boolean);

      if (!months.length) {
        return null;
      }

      return {
        id: employee.id,
        name: employee.name,
        iin: normalizeEmployeeIin(employee.iin),
        hasValidIin: hasValidEmployeeIin(employee),
        startDate: getEmployeeStartDateValue(employee),
        endDate: getEmployeeEndDateValue(employee),
        startMonth: employee.startMonth,
        endMonth: employee.endMonth,
        contractType: employee.contractType,
        currentSalary: employee.salary,
        needsMonthlyAccrualReview: reviewMeta.needsMonthlyAccrualReview,
        reviewItems: reviewMeta.items,
        reviewSummary: reviewMeta.summary,
        months,
        totalSalary: months.reduce((sum, month) => sum + Number(month.salary || 0), 0),
        totalWithholdings: months.reduce((sum, month) => sum + Number(month.withholdingsTotal || 0), 0),
        totalEmployerCost: months.reduce((sum, month) => sum + Number(month.employerCost || 0), 0),
        totalRemittance: months.reduce((sum, month) => sum + Number(month.remittanceTotal || 0), 0)
      };
    })
    .filter(Boolean);
}

function getDeadlineQuarterOwnerRow(row, activeRegime = state.regime) {
  const meta = getDeadlineQuarterMeta(row);
  const safeRegime = String(activeRegime || state.taxRegime || state.regime || "").trim();
  if (!meta || safeRegime !== "our") {
    return null;
  }

  const months = meta.monthDates.map((periodDate) => {
    const income = normalizeIncome(getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth()));
    const tax = calcOUR(income, state.calcExpenses, state.profile);
    const opv = Math.max(0, Math.round(Number(tax.opv || 0)));
    const opvr = Math.max(0, Math.round(Number(tax.opvr || 0)));
    const so = Math.max(0, Math.round(Number(tax.so || 0)));
    const vosms = Math.max(0, Math.round(Number(tax.vosms || 0)));
    const ipn = Math.max(0, Math.round(Number(tax.ipn || 0)));
    const socTax = Math.max(0, Math.round(Number(tax.socTax || 0)));
    const socialIncomeBase = Math.max(0, Math.round(Number(tax.socialIncomeBase || 0)));
    const socialPaymentsTotal = opv + opvr + so + vosms + socTax;
    const totalRemittance = socialPaymentsTotal + ipn;

    return {
      periodDate,
      monthLabel: MONTHS[periodDate.getMonth()],
      income,
      socialIncomeBase,
      usesCustomSocialIncomeBase: Boolean(tax.usesCustomSocialIncomeBase),
      opv,
      opvr,
      so,
      vosms,
      socTax,
      ipn,
      socialPaymentsTotal,
      totalRemittance
    };
  });

  return {
    id: "owner-self",
    label: "ИП за себя",
    months,
    monthsLabel: months.map((month) => month.monthLabel).join(", "),
    totalIncome: months.reduce((sum, month) => sum + Number(month.income || 0), 0),
    totalSocialIncomeBase: months.reduce((sum, month) => sum + Number(month.socialIncomeBase || 0), 0),
    totalSocialPayments: months.reduce((sum, month) => sum + Number(month.socialPaymentsTotal || 0), 0),
    totalIpn: months.reduce((sum, month) => sum + Number(month.ipn || 0), 0),
    totalRemittance: months.reduce((sum, month) => sum + Number(month.totalRemittance || 0), 0),
    usesCustomSocialIncomeBase: months.some((month) => month.usesCustomSocialIncomeBase)
  };
}

function getDeadlineQuarterReportBreakdown(row) {
  const meta = getDeadlineQuarterMeta(row);
  if (!meta) {
    return null;
  }

  const employeeRows = getDeadlineQuarterEmployeeRows(row);
  const ownerRow = getDeadlineQuarterOwnerRow(row);
  const employeesMissingIin = employeeRows.filter((employee) => !employee.hasValidIin);
  const employeesNeedingAccrualReview = employeeRows.filter((employee) => employee.needsMonthlyAccrualReview);
  const totalEmployeeSalary = employeeRows.reduce((sum, employee) => sum + Number(employee.totalSalary || 0), 0);
  const totalEmployeeWithholdings = employeeRows.reduce((sum, employee) => sum + Number(employee.totalWithholdings || 0), 0);
  const totalEmployeeEmployerCost = employeeRows.reduce((sum, employee) => sum + Number(employee.totalEmployerCost || 0), 0);
  const totalEmployeeRemittance = employeeRows.reduce((sum, employee) => sum + Number(employee.totalRemittance || 0), 0);
  const totalOwnerIncome = ownerRow ? Number(ownerRow.totalIncome || 0) : 0;
  const totalOwnerSocialIncomeBase = ownerRow ? Number(ownerRow.totalSocialIncomeBase || 0) : 0;
  const totalOwnerSocialPayments = ownerRow ? Number(ownerRow.totalSocialPayments || 0) : 0;
  const totalOwnerIpn = ownerRow ? Number(ownerRow.totalIpn || 0) : 0;
  const totalOwnerRemittance = ownerRow ? Number(ownerRow.totalRemittance || 0) : 0;

  return {
    ...meta,
    ownerRow,
    hasOwnerInReport: Boolean(ownerRow),
    employeeRows,
    employeesMissingIin,
    employeesNeedingAccrualReview,
    employeesMissingIinCount: employeesMissingIin.length,
    employeesNeedingAccrualReviewCount: employeesNeedingAccrualReview.length,
    isReadyForSubmission: employeesMissingIin.length === 0,
    employeesCount: employeeRows.length,
    totalSalary: totalEmployeeSalary,
    totalWithholdings: totalEmployeeWithholdings,
    totalEmployerCost: totalEmployeeEmployerCost,
    totalRemittance: totalEmployeeRemittance,
    totalEmployeeSalary,
    totalEmployeeWithholdings,
    totalEmployeeEmployerCost,
    totalEmployeeRemittance,
    totalOwnerIncome,
    totalOwnerSocialIncomeBase,
    totalOwnerSocialPayments,
    totalOwnerIpn,
    totalOwnerRemittance,
    totalCombinedRemittance: totalOwnerRemittance + totalEmployeeRemittance
  };
}

function getDeadlineMissingEmployeeIinRows(row) {
  const breakdown = isFno200Deadline(row) ? getDeadlineQuarterReportBreakdown(row) : null;
  return breakdown && Array.isArray(breakdown.employeesMissingIin)
    ? breakdown.employeesMissingIin
    : [];
}

function isDeadlineBlockedByMissingEmployeeIin(row) {
  return getDeadlineMissingEmployeeIinRows(row).length > 0;
}

function getDeadlineIncomeForChecklist(row) {
  const periodDate = getDeadlinePayrollPeriodDate(row);
  if (!periodDate) return 0;

  return getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth());
}

function getLandingDeadlineChecklist(row, options = {}) {
  const title = String((row && row.title) || "");
  const regime = getDeadlineRegimeForChecklist(row);
  const isPayment = row && row.type === "payment";
  const isFno200Report = Boolean(row && row.type === "report" && isFno200Deadline(row));
  const fno910Meta = isFno910Deadline(row) ? getFno910HalfYearMeta(row) : null;
  const isFno910Report = Boolean(row && row.type === "report" && fno910Meta);
  const isFno910Payment = Boolean(row && row.type === "payment" && fno910Meta);

  if (isFno200Report) {
    const quarterBreakdown = options.quarterReportBreakdown || getDeadlineQuarterReportBreakdown(row);
    const quarterLabel = quarterBreakdown && quarterBreakdown.quarterLabel ? quarterBreakdown.quarterLabel : "отчётный квартал";
    const monthsLabel = quarterBreakdown && quarterBreakdown.monthsLabel ? quarterBreakdown.monthsLabel : "месяцы квартала";
    const ownerRow = quarterBreakdown && quarterBreakdown.ownerRow ? quarterBreakdown.ownerRow : null;
    const employeeRows = quarterBreakdown && Array.isArray(quarterBreakdown.employeeRows) ? quarterBreakdown.employeeRows : [];
    const employeesMissingIin = quarterBreakdown && Array.isArray(quarterBreakdown.employeesMissingIin) ? quarterBreakdown.employeesMissingIin : [];
    const employeesNeedingAccrualReview = quarterBreakdown && Array.isArray(quarterBreakdown.employeesNeedingAccrualReview) ? quarterBreakdown.employeesNeedingAccrualReview : [];
    const hasMissingIin = employeesMissingIin.length > 0;
    const hasAccrualReview = employeesNeedingAccrualReview.length > 0;
    const employeeNameCounts = employeeRows.reduce((acc, employee) => {
      const key = String(employee && employee.name || "").trim();
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const employeePresenceRowsHtml = employeeRows
      .map((employee) => {
        const labelMeta = getQuarterEmployeeChecklistLabelMeta(employee, employeeNameCounts);
        const reviewNote = employee && employee.needsMonthlyAccrualReview && employee.reviewSummary
          ? `уточнить: ${employee.reviewSummary}`
          : employee && employee.needsMonthlyAccrualReview
            ? "уточнить начисление"
            : "";
        const rowNote = [labelMeta.secondary, employee && employee.hasValidIin === false ? "нет ИИН" : "", reviewNote]
          .filter(Boolean)
          .join(" • ");
        return `
          <div class="deadline-payment-row">
            <span class="deadline-payment-label-group">
              <span>${escapeHtml(labelMeta.primary)}</span>
              ${rowNote ? `<small class="deadline-payment-label-note">${escapeHtml(rowNote)}</small>` : ""}
            </span>
            <strong class="deadline-payment-value-text">${escapeHtml(employee.months.map((month) => month.monthLabel).join(", "))}</strong>
          </div>
        `;
      })
      .join("");
    const ownerPresenceHtml = ownerRow
      ? `
        <div class="deadline-step-detail">
          <div class="deadline-payment-summary deadline-step-employee-summary deadline-report-summary">
            <div class="deadline-payment-row">
              <span>ИП в отчете</span>
              <strong class="deadline-payment-value-text">Да</strong>
            </div>
            <div class="deadline-payment-row">
              <span>Месяцы за себя</span>
              <strong class="deadline-payment-value-text">${escapeHtml(ownerRow.monthsLabel || monthsLabel)}</strong>
            </div>
          </div>
          <p class="deadline-step-instruction">Для ОУР форма включает обязательства ИП за себя по месяцам квартала.</p>
        </div>
      `
      : "";
    const employeePresenceInnerHtml = `
      <div class="deadline-payment-summary deadline-step-employee-summary deadline-report-summary">
        ${employeePresenceRowsHtml}
        <div class="deadline-payment-total">
          <span>Сотрудников в отчете</span>
          <strong>${employeeRows.length}</strong>
        </div>
      </div>
    `;
    const employeePresenceHtml = employeeRows.length
      ? `
        <div class="deadline-step-detail">
          ${
            employeeRows.length > 2
              ? `
                <details class="deadline-step-collapse">
                  <summary class="deadline-step-collapse-toggle">
                    <span>Показать сотрудников</span>
                    <strong>${employeeRows.length}</strong>
                  </summary>
                  <div class="deadline-step-collapse-body">
                    ${employeePresenceInnerHtml}
                  </div>
                </details>
              `
              : employeePresenceInnerHtml
          }
          <p class="deadline-step-instruction">В форму должны попасть только сотрудники, у которых были начисления хотя бы в одном месяце квартала.</p>
        </div>
      `
      : '<p class="deadline-step-instruction">В этом квартале сотрудники по данным сервиса не найдены.</p>';
    const preflightBlocks = [
      hasMissingIin
        ? `
          <details class="deadline-step-collapse">
            <summary class="deadline-step-collapse-toggle">
              <span>Нужно дозаполнить ИИН</span>
              <strong>${employeesMissingIin.length}</strong>
            </summary>
            <div class="deadline-step-collapse-body">
              <div class="deadline-payment-summary deadline-step-employee-summary deadline-report-summary">
                ${employeesMissingIin
                  .map((employee) => `
                    <div class="deadline-payment-row">
                      <span>${escapeHtml(employee.name || "Сотрудник")}</span>
                      <strong class="deadline-payment-value-text">Нет ИИН</strong>
                    </div>
                  `)
                  .join("")}
              </div>
              <p class="deadline-step-instruction">Для ФНО 200.05 по каждому сотруднику нужен валидный ИИН. Пока он не заполнен, отчет не считаем готовым к сдаче.</p>
            </div>
          </details>
        `
        : "",
      hasAccrualReview
        ? `
          <details class="deadline-step-collapse">
            <summary class="deadline-step-collapse-toggle">
              <span>Нужно проверить неполный месяц</span>
              <strong>${employeesNeedingAccrualReview.length}</strong>
            </summary>
            <div class="deadline-step-collapse-body">
              <div class="deadline-payment-summary deadline-step-employee-summary deadline-report-summary">
                ${employeesNeedingAccrualReview
                  .map((employee) => `
                    <div class="deadline-payment-row">
                      <span>${escapeHtml(employee.name || "Сотрудник")}</span>
                      <strong class="deadline-payment-value-text">${escapeHtml(employee.reviewSummary || "Уточнить месяц")}</strong>
                    </div>
                  `)
                  .join("")}
              </div>
              <p class="deadline-step-instruction">У этих сотрудников есть месяц приема или ухода внутри квартала без уточнённого начисления. Перед сдачей формы проверьте фактические суммы.</p>
            </div>
          </details>
        `
        : ""
    ].filter(Boolean).join("");
    const quarterTotalsHtml = quarterBreakdown
      ? `
        <div class="deadline-step-detail">
          ${
            ownerRow
              ? `
                <div class="deadline-payment-summary deadline-step-employee-summary">
                  <div class="deadline-payment-row"><span>Доход за себя за квартал</span><strong>${fmt(quarterBreakdown.totalOwnerIncome)}</strong></div>
                  <div class="deadline-payment-row"><span>Соцплатежи за себя</span><strong>${fmt(quarterBreakdown.totalOwnerSocialPayments)}</strong></div>
                  <div class="deadline-payment-row"><span>ИПН за себя</span><strong>${fmt(quarterBreakdown.totalOwnerIpn)}</strong></div>
                  <div class="deadline-payment-total"><span>Итого за себя</span><strong>${fmt(quarterBreakdown.totalOwnerRemittance)}</strong></div>
                </div>
              `
              : ""
          }
          <div class="deadline-payment-summary deadline-step-employee-summary">
            <div class="deadline-payment-row"><span>Начислено сотрудникам за квартал</span><strong>${fmt(quarterBreakdown.totalEmployeeSalary)}</strong></div>
            <div class="deadline-payment-row"><span>Удержания работников</span><strong>${fmt(quarterBreakdown.totalEmployeeWithholdings)}</strong></div>
            <div class="deadline-payment-row"><span>Платежи работодателя</span><strong>${fmt(quarterBreakdown.totalEmployeeEmployerCost)}</strong></div>
            <div class="deadline-payment-total"><span>Итого по сотрудникам</span><strong>${fmt(quarterBreakdown.totalEmployeeRemittance)}</strong></div>
          </div>
          <div class="deadline-payment-summary deadline-step-employee-summary">
            <div class="deadline-payment-total"><span>Итого по данным сервиса</span><strong>${fmt(quarterBreakdown.totalCombinedRemittance)}</strong></div>
          </div>
          <p class="deadline-step-instruction">Это расчетный ориентир по данным сервиса. Сверьте его с фактическими начислениями и ежемесячными платежами за квартал.</p>
        </div>
      `
      : '<p class="deadline-step-instruction">Сверьте начисления и платежи по кварталу перед сдачей формы.</p>';

    const sections = [
      {
        id: "step-1",
        title: "Шаг 1 — Кто попал в отчет",
        items: [ownerRow ? `Проверьте данные за себя и сотрудников, которые должны попасть в ${quarterLabel}.` : `Проверьте сотрудников и месяцы, которые должны попасть в ${quarterLabel}.`],
        instructionHtml: `${ownerPresenceHtml}${preflightBlocks ? `<div class="deadline-step-detail">${preflightBlocks}</div>` : ""}${employeePresenceHtml}`
      },
      {
        id: "step-2",
        title: "Шаг 2 — Что сверить",
        items: [ownerRow ? `Сверьте суммы за себя и обязательства по сотрудникам за ${monthsLabel}.` : `Сверьте начисления и обязательства за ${monthsLabel}.`],
        instructionHtml: quarterTotalsHtml
      },
      {
        id: "step-3",
        title: "Шаг 3 — Где сдать",
        items: [hasMissingIin ? "Сначала заполните ИИН у сотрудников, затем сдайте ФНО 200.00." : hasAccrualReview ? "Сначала уточните неполные месяцы у сотрудников, затем сдайте ФНО 200.00." : ownerRow ? `Подайте ФНО 200.00 с данными за себя и сотрудников до ${formatDateShort(row.date)}.` : `Подайте ФНО 200.00 до ${formatDateShort(row.date)}.`],
        instructionHtml: hasMissingIin
          ? '<p class="deadline-step-instruction">После заполнения ИИН вернитесь сюда, сверьте квартальные суммы и подайте форму в <a class="deadline-step-inline-link" href="https://knp.kgd.gov.kz" target="_blank" rel="noopener noreferrer">КНП ИСНА</a>.</p>'
          : hasAccrualReview
            ? '<p class="deadline-step-instruction">После уточнения неполных месяцев сверьте квартальные суммы и подайте форму в <a class="deadline-step-inline-link" href="https://knp.kgd.gov.kz" target="_blank" rel="noopener noreferrer">КНП ИСНА</a>.</p>'
            : '<p class="deadline-step-instruction">Подайте форму в <a class="deadline-step-inline-link" href="https://knp.kgd.gov.kz" target="_blank" rel="noopener noreferrer">КНП ИСНА</a> и сохраните квитанцию о приёме. Для форм на 2026 год используйте новый кабинет.</p>'
      }
    ];
    return sections;
  }

  if (isFno910Report) {
    return [
      {
        id: "step-1",
        title: "Шаг 1 — Проверка данных",
        items: [`Проверьте доходы и итог налога за ${fno910Meta ? fno910Meta.halfYearLabel : "полугодие"}.`],
        instructionHtml: `<p class="deadline-step-instruction">Сверьте журнал доходов за ${fno910Meta ? fno910Meta.halfYearLabel : "полугодие"} и только после этого отправляйте форму 910 в <a class="deadline-step-inline-link" href="https://knp.kgd.gov.kz" target="_blank" rel="noopener noreferrer">Новом КНП ИСНА</a>.</p>`
      },
      {
        id: "step-2",
        title: "Шаг 2 — ФНО 910",
        items: [`Отправьте форму 910 за ${fno910Meta ? fno910Meta.halfYearLabel : "полугодие"}.`],
        instructionHtml: '<p class="deadline-step-instruction">Заполните и отправьте форму 910 в <a class="deadline-step-inline-link" href="https://knp.kgd.gov.kz" target="_blank" rel="noopener noreferrer">Новом КНП ИСНА</a>. Для форм на 2026 год используйте новый кабинет.</p>'
      }
    ];
  }

  if (isFno910Payment) {
    const paymentBreakdown = options.paymentBreakdown || getFno910PaymentBreakdown(row);
    const paymentAmount = paymentBreakdown ? Math.max(0, Math.round(Number(paymentBreakdown.total || 0))) : 0;
    const monthsHtml = paymentBreakdown && Array.isArray(paymentBreakdown.months) && paymentBreakdown.months.length
      ? `
          <div class="deadline-payment-summary deadline-step-employee-summary deadline-report-summary">
            ${paymentBreakdown.months
              .map((month) => `
                <div class="deadline-payment-row">
                  <span>${escapeHtml(month.monthLabel)}</span>
                  <strong>${fmt(month.ipn)}</strong>
                </div>
              `)
              .join("")}
            <div class="deadline-payment-row"><span>Доход за период</span><strong>${fmt(paymentBreakdown.income)}</strong></div>
            <div class="deadline-payment-total"><span>Итого налог по ФНО 910</span><strong>${fmt(paymentAmount)}</strong></div>
          </div>
        `
      : "";

    return [
      {
        id: "step-1",
        title: "Шаг 1 — Сверьте сумму",
        items: [paymentAmount > 0 ? `Проверьте сумму налога по ФНО 910 за ${fno910Meta ? fno910Meta.halfYearLabel : "полугодие"}. По данным сервиса: ${fmt(paymentAmount)}.` : `Проверьте итоговую сумму налога по ФНО 910 за ${fno910Meta ? fno910Meta.halfYearLabel : "полугодие"} в e-Salyq Business или КНП.`],
        instructionHtml: monthsHtml
          ? `<div class="deadline-step-detail">${monthsHtml}<p class="deadline-step-instruction">Это ориентир по данным журнала доходов за полугодие. Перед оплатой сверьте сумму с принятой формой 910.</p></div>`
          : '<p class="deadline-step-instruction">Если доходы за полугодие в журнале заполнены не полностью, перед оплатой обязательно сверьте сумму с принятой формой 910.</p>'
      },
      {
        id: "step-2",
        title: "Шаг 2 — Оплата",
        items: [`Оплатите налог по ФНО 910 до ${formatDateShort(row.date)}.`],
        instructionHtml: '<p class="deadline-step-instruction">Оплатите налог через банк, e-Salyq Business или Новый КНП ИСНА. После оплаты сохраните квитанцию.</p>'
      }
    ];
  }

  if (!isPayment) {
    return [
      {
        id: "step-1",
        title: "Шаг 1 — Отчётность",
        items: ["Сдайте отчет по текущему сроку и проверьте квитанцию о приеме."]
      }
    ];
  }

  const income = getDeadlineIncomeForChecklist(row);

  if (regime === "self") {
    return [
      {
        id: "step-1",
        title: "Шаг 1 — e-Salyq Business",
        items: ["Все платежи проходят через приложение e-Salyq Business. Если ещё не установили — скачайте:"],
        instructionHtml: `
          <div class="deadline-step-links">
            <a class="deadline-step-store-link" href="https://apps.apple.com/kz/app/e-salyq-business/id1581629395" target="_blank" rel="noopener noreferrer">App Store &rarr;</a>
            <a class="deadline-step-store-link" href="https://play.google.com/store/apps/details?id=dev.amsmirnov.esalyqbusiness" target="_blank" rel="noopener noreferrer">Google Play &rarr;</a>
          </div>
          <p class="deadline-step-instruction">Или оплатите в Kaspi: Платежи -> Штрафы и налоги -> Отчисления самозанятых</p>
        `
      }
    ];
  }

  const tax = regime === "our" ? calcOUR(income, state.calcExpenses) : calcSimplified(income);
  const socTax = Math.round(tax.socTax || 0);
  const hasSocTax = socTax > 0;
  const fallbackStep1Total = Math.round((tax.opv || 0) + (tax.opvr || 0) + (tax.so || 0) + socTax);
  const totalWithoutVosms = Number.isFinite(options.totalWithoutVosms)
    ? Math.max(0, Math.round(options.totalWithoutVosms))
    : fallbackStep1Total;
  const employeeRows = Array.isArray(options.employeeRows)
    ? options.employeeRows.filter((employee) => Number(employee && employee.totalRemittance) > 0)
    : getDeadlineEmployeePaymentRows(row);
  const employeeRemittanceTotal = Number.isFinite(options.employeeRemittanceTotal)
    ? Math.max(0, Math.round(options.employeeRemittanceTotal))
    : employeeRows.reduce((sum, employee) => sum + Number(employee.totalRemittance || 0), 0);
  const employeeEmployerChargesTotal = Number.isFinite(options.employeeEmployerChargesTotal)
    ? Math.max(0, Math.round(options.employeeEmployerChargesTotal))
    : employeeRows.reduce((sum, employee) => sum + Number(employee.employerChargesTotal || 0), 0);
  const employeesNeedingReview = employeeRows.filter((employee) => employee.needsMonthlyAccrualReview);
  const sections = [
    {
      id: "step-1",
      title: hasSocTax ? "Шаг 1 — ОПВ, ОПВР, СО и СН" : "Шаг 1 — ОПВ, ОПВР и СО",
      items: [hasSocTax ? `Оплатите ОПВ, ОПВР, СО и СН. Сумма: ${fmt(totalWithoutVosms)}.` : `Оплатите ОПВ, ОПВР и СО. Сумма: ${fmt(totalWithoutVosms)}.`],
      instructionHtml: '<p class="deadline-step-instruction">Оплатите через мобильное приложение вашего банка (Kaspi, Halyk или любой другой). Раздел: Платежи -> Штрафы и налоги -> Платежи для ИП</p>'
    },
    {
      id: "step-2",
      title: "Шаг 2 — ВОСМС (отдельно)",
      items: [`Оплатите ВОСМС отдельным платежом. Сумма: ${fmt(RATES.VOSMS)} (фиксированная).`],
      instructionHtml: '<p class="deadline-step-instruction">Оплатите через мобильное приложение банка. Kaspi: Платежи -> Штрафы и налоги -> Платежи для ИП -> ВОСМС</p>'
    }
  ];

  if (employeeRemittanceTotal > 0) {
    const employeeRowsHtml = employeeRows
      .map((employee) => `
        <div class="deadline-payment-row">
          <span class="deadline-payment-label-group">
            <span>${escapeHtml(employee.name)}</span>
            ${Number(employee.employerChargesTotal || 0) > 0 ? `<small class="deadline-payment-label-note">из них расходы работодателя: ${fmt(employee.employerChargesTotal)}</small>` : ""}
            ${employee.needsMonthlyAccrualReview ? `<small class="deadline-payment-label-note">проверьте ${escapeHtml(employee.reviewSummary || "месяц начисления")}</small>` : ""}
          </span>
          <strong>${fmt(employee.totalRemittance)}</strong>
        </div>
      `)
      .join("");
    const employeeSummaryInnerHtml = `
      <div class="deadline-payment-summary deadline-step-employee-summary">
        ${employeeRowsHtml}
        <div class="deadline-payment-total"><span>Итого к перечислению за сотрудников</span><strong>${fmt(employeeRemittanceTotal)}</strong></div>
      </div>
    `;
    const employeeSummaryHtml = employeeRows.length > 2
      ? `
        <details class="deadline-step-collapse">
          <summary class="deadline-step-collapse-toggle">
            <span>Показать сотрудников</span>
            <strong>${fmt(employeeRemittanceTotal)}</strong>
          </summary>
          <div class="deadline-step-collapse-body">
            ${employeeSummaryInnerHtml}
          </div>
        </details>
      `
      : employeeSummaryInnerHtml;

    sections.push({
      id: "step-3",
      title: "Шаг 3 — За сотрудников",
      items: [`Перечислите удержания и платежи работодателя за ${getEmployeesCountLabel(employeeRows.length)}. Сумма: ${fmt(employeeRemittanceTotal)}.`],
      instructionHtml: `
        <div class="deadline-step-detail">
          <p class="deadline-step-instruction">Сюда входят удержания работников и платежи работодателя по сотрудникам, которые добавлены в сервис.</p>
          ${employeeEmployerChargesTotal > 0 ? `<p class="deadline-step-instruction">Из них расходы работодателя: ${fmt(employeeEmployerChargesTotal)}.</p>` : ""}
          ${employeesNeedingReview.length > 0 ? `<p class="deadline-step-instruction deadline-step-instruction-warning">У ${employeesNeedingReview.length} ${employeesNeedingReview.length === 1 ? "сотрудника" : "сотрудников"} нужно проверить начисление за неполный месяц, чтобы сумма за сотрудников была точной.</p>` : ""}
          ${employeeSummaryHtml}
        </div>
      `
    });
  }

  return sections;
}

function getLandingDeadlineLiteSteps(row) {
  const sections = getDeadlineChecklistSections(row);

  return sections.slice(0, 3).map((section) => {
    const main = section.items && section.items[0] ? String(section.items[0]) : "Проверьте обязательный шаг по сроку.";
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
      if (!section.locked && progress[taskKey]) {
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
    if (section.locked) {
      return;
    }
    section.items.forEach((_, index) => {
      next[getDeadlineTaskKey(section.id, index)] = true;
    });
  });

  state.deadlineChecklistProgress[key] = next;
}

function syncDeadlineDoneByChecklist(deadlineId, row) {
  const stats = getDeadlineChecklistStats(deadlineId, row);
  const isDone = stats.total > 0 && stats.done >= stats.total;
  const doneSet = new Set(normalizeDoneDeadlines(state.doneDeadlines));
  const exists = doneSet.has(deadlineId);

  if (isDone && !exists) {
    doneSet.add(deadlineId);
  }

  if (!isDone && exists) {
    doneSet.delete(deadlineId);
  }

  state.doneDeadlines = [...doneSet];
}

function getDeadlinePaymentBreakdown(row) {
  if (!row || row.type !== "payment") {
    return null;
  }

  if (isFno910Deadline(row)) {
    return getFno910PaymentBreakdown(row);
  }

  const periodDate = getDeadlinePayrollPeriodDate(row);
  if (!periodDate) {
    return null;
  }

  const income = getIncomeByMonth(periodDate.getFullYear(), periodDate.getMonth());
  const activeRegime = state.taxRegime || state.regime;
  const taxes = calcByRegime(activeRegime, income, state.calcExpenses);

  const opv = Math.round(taxes.opv || 0);
  const opvr = Math.round(taxes.opvr || 0);
  const so = Math.round(taxes.so || 0);
  const vosms = Math.round(taxes.vosms || 0);
  const socTax = Math.round(taxes.socTax || 0);
  const employeeRemittanceSummary = getDeadlineEmployeeRemittanceSummary(row);
  const employeeRows = employeeRemittanceSummary.employeeRows;
  const employeeWithholdingsTotal = Math.round(employeeRemittanceSummary.withholdingsTotal || 0);
  const employeeEmployerChargesTotal = Math.round(employeeRemittanceSummary.employerChargesTotal || 0);
  const employeeRemittanceTotal = Math.round(employeeRemittanceSummary.remittanceTotal || 0);
  const employeesNeedingReview = employeeRows.filter((employee) => employee.needsMonthlyAccrualReview);

  const total = Math.round(getTaxLoadPayNow(activeRegime, taxes));
  const totalWithoutVosms = total - vosms;
  const grandTotal = total + employeeRemittanceTotal;

  return {
    income,
    opv,
    opvr,
    so,
    vosms,
    socTax,
    employeeRows,
    employeeWithholdingsTotal,
    employeeEmployerChargesTotal,
    employeeRemittanceTotal,
    employeeEmployerCost: employeeEmployerChargesTotal,
    employeesNeedingReview,
    employeesNeedingReviewCount: employeesNeedingReview.length,
    total,
    totalWithoutVosms,
    grandTotal
  };
}

function getPaymentBreakdownRowsForDisplay(breakdown, regime = state.regime) {
  if (!breakdown || typeof breakdown !== "object") {
    return [];
  }

  if (breakdown.kind === "fno910") {
    return [
      {
        label: `Налог по ФНО 910${breakdown.halfYearLabel ? ` за ${breakdown.halfYearLabel}` : ""}`,
        value: Number(breakdown.total || 0)
      }
    ];
  }

  const safeRegime = String(regime || state.regime || "").trim();
  const rows = [
    { label: safeRegime === "self" ? "ОПВ (1%)" : "ОПВ", value: Number(breakdown.opv || 0) },
    { label: safeRegime === "self" ? "СО (1%, до 7 МЗП)" : "СО", value: Number(breakdown.so || 0) },
    { label: safeRegime === "self" ? "ОПВР (1%)" : "ОПВР", value: Number(breakdown.opvr || 0) },
    { label: safeRegime === "self" ? "ВОСМС (1%)" : "ВОСМС", value: Number(breakdown.vosms || 0) }
  ];

  if (Number(breakdown.socTax || 0) > 0) {
    rows.push({ label: "Соц. налог", value: Number(breakdown.socTax || 0) });
  }

  if (Number(breakdown.employeeRemittanceTotal || 0) > 0) {
    rows.push({ label: "За сотрудников", value: Number(breakdown.employeeRemittanceTotal || 0) });
  }

  return rows.filter((row) => Number(row.value || 0) > 0);
}

function getNextUpcomingPaymentRow() {
  return getUpcomingDeadlines().find((row) => row.type === "payment") || null;
}

function getUpcomingPaymentSummary(row = getNextUpcomingPaymentRow()) {
  if (!row) {
    return {
      row: null,
      breakdown: null,
      selfTotal: 0,
      employeeRemittanceTotal: 0,
      employeeEmployerChargesTotal: 0,
      total: 0,
      dueLabel: getNextTaxDueDateLabel(),
      title: ""
    };
  }

  const breakdown = getDeadlinePaymentBreakdown(row);
  const selfTotal = Math.max(0, Math.round(Number((breakdown && breakdown.total) || 0)));
  const employeeRemittanceTotal = Math.max(0, Math.round(Number((breakdown && breakdown.employeeRemittanceTotal) || 0)));
  const employeeEmployerChargesTotal = Math.max(0, Math.round(Number((breakdown && breakdown.employeeEmployerChargesTotal) || 0)));
  const total = Math.max(0, Math.round(Number((breakdown && breakdown.grandTotal) || selfTotal + employeeRemittanceTotal)));
  const cardCopy = getLandingDeadlineCardCopy(row);

  return {
    row,
    breakdown,
    selfTotal,
    employeeRemittanceTotal,
    employeeEmployerChargesTotal,
    total,
    dueLabel: formatDateDayMonthLong(row.date),
    title: cardCopy && cardCopy.title ? cardCopy.title : String(row.title || "").trim()
  };
}

function isEmployeePayrollDeadline(row) {
  if (!row || row.type !== "payment") {
    return false;
  }

  const title = String(row.title || "").toLowerCase("ru-KZ");
  return title.includes("опв") && title.includes("опвр") && title.includes("со") && title.includes("восмс");
}

function getDeadlineEmployeePaymentRows(row) {
  if (!isEmployeePayrollDeadline(row)) {
    return [];
  }

  return getEmployeePaymentRowsForPeriod(getDeadlinePayrollPeriodDate(row));
}

function getDeadlineEmployeeRemittanceSummary(row) {
  const employeeRows = getDeadlineEmployeePaymentRows(row);
  return {
    employeeRows,
    withholdingsTotal: employeeRows.reduce((sum, employee) => sum + Number(employee.withholdingsTotal || 0), 0),
    employerChargesTotal: employeeRows.reduce((sum, employee) => sum + Number(employee.employerChargesTotal || 0), 0),
    remittanceTotal: employeeRows.reduce((sum, employee) => sum + Number(employee.totalRemittance || 0), 0)
  };
}

function getDeadlineEmployeeEmployerCost(row) {
  return getDeadlineEmployeeRemittanceSummary(row).employerChargesTotal;
}

function getDeadlineEmployeeRemittanceTotal(row) {
  return getDeadlineEmployeeRemittanceSummary(row).remittanceTotal;
}

function getDeadlineEmployeeRowsNeedingReview(row) {
  return getDeadlineEmployeePaymentRows(row).filter((employee) => employee.needsMonthlyAccrualReview);
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
        label: daysBefore === 0 ? "В день срока" : `За ${daysBefore} ${getLandingDayWord(daysBefore)}`
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
  lines.push(`Срок: ${formatDate(row.date)} (${due.text})`);
  lines.push(`Режим: ${getLandingDeadlineRegimeLabel(row.regime)} · Тип: ${getLandingDeadlineTypeLabel(row.type)}`);
  lines.push(`Каналы напоминаний: ${channels.length ? channels.join(", ") : "не выбраны"}`);
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
  lines.push(`План напоминаний: ${row.title}`);
  lines.push(`Срок: ${formatDate(row.date)}`);
  lines.push(`Каналы: ${channels.length ? channels.join(", ") : "не выбраны"}`);
  lines.push("");

  timeline.forEach((item) => {
    lines.push(`- ${item.label}: ${item.date.toLocaleDateString("ru-KZ")}`);
  });

  return lines.join("\n");
}

function getFeedbackCategoryLabel(category) {
  const match = FEEDBACK_CATEGORIES.find((item) => item.id === category);
  return match ? match.label : "Другое";
}

function setFeedbackStatus(text, tone = "default") {
  const statusEl = document.getElementById("feedbackStatus");
  if (!statusEl) return;

  statusEl.textContent = text;
  statusEl.classList.remove("ok", "error", "is-empty");

  if (tone === "ok") {
    statusEl.classList.add("ok");
  }

  if (tone === "error") {
    statusEl.classList.add("error");
  }

  if (!String(text || "").trim()) {
    statusEl.classList.add("is-empty");
  }
}

function syncFeedbackCategoryCards(scope = document) {
  const root = scope instanceof Element || scope instanceof Document ? scope : document;
  root.querySelectorAll(".feedback-category-option").forEach((option) => {
    const input = option.querySelector('input[name="category"]');
    const card = option.querySelector(".feedback-cat");
    if (!(card instanceof HTMLElement)) return;
    card.classList.toggle("active", Boolean(input && input.checked));
  });
}

async function sendFeedbackToSheets(payload) {
  // Send feedback directly to Telegram bot (token comes from APP_CONFIG)
  const BOT_TOKEN = String(APP_CONFIG.telegramBotToken || "").trim();
  const CHAT_ID = "132614035";
  if (!BOT_TOKEN) {
    throw new Error("Не настроен telegramBotToken в config.js.");
  }
  const categoryLabel = payload.categoryLabel || payload.category || "Без категории";
  const subject = payload.subject || "Без темы";
  const message = payload.message || payload.text || "Без текста";
  const replyEmail = payload.replyEmail || payload.accountEmail || "не указан";
  const text = `📩 Обратная связь MyEsep\n\n📂 Категория: ${categoryLabel}\n📝 Тема: ${subject}\n👤 Email: ${replyEmail}\n💬 Сообщение:\n${message}`;

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text })
  });

  if (!response.ok) {
    throw new Error("Ошибка отправки в Telegram");
  }
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
  if (regime === "simplified") return "Упрощенка (910)";
  if (regime === "our") return "ОУР";
  if (regime === "self") return "Самозанятый";
  if (regime === "employees") return activeRegime === "our" ? "ОУР" : "ИП с сотрудниками";
  if (regime === "all" && activeRegime === "self") return "Ежемесячная уплата соцплатежей";
  return "Для всех ИП";
}

function getLandingDeadlineRegimeNote(regime, activeRegime = state.regime) {
  if (regime === "employees") {
    if (activeRegime === "our") {
      return "Для ОУР форма включает обязательства за себя и, при наличии, по сотрудникам.";
    }
    return "Появляется только если в квартале были сотрудники.";
  }
  if (regime === "all" && activeRegime === "self") {
    return "Сумма зависит от вашего фактического дохода за месяц.";
  }
  return "";
}

function getDeadlineContextLabel(row, activeRegime = state.regime) {
  if (!row) return "";

  if (isFno200Deadline(row)) {
    return activeRegime === "our"
      ? "Квартальная форма за себя и сотрудников"
      : "Квартальная форма по сотрудникам";
  }

  if (isFno910Deadline(row)) {
    const fno910Meta = getFno910HalfYearMeta(row);
    if (row.type === "payment") {
      return fno910Meta ? `Оплата налога за ${fno910Meta.halfYearLabel}` : "Оплата налога по ФНО 910";
    }
    return fno910Meta ? `Полугодовая декларация за ${fno910Meta.halfYearLabel}` : "Полугодовая декларация по упрощенке";
  }

  const regimeLabel = getLandingDeadlineRegimeLabel(row.regime, activeRegime);
  return regimeLabel === "Для всех ИП" ? "" : regimeLabel;
}

function isDeadlineApplicableForRegime(row, activeRegime = state.regime) {
  if (!row || !activeRegime) return false;
  if (row.regime === "employees") {
    if (activeRegime === "self") return false;
    const employeeRows = getDeadlineQuarterEmployeeRows(row);
    const ownerRow = getDeadlineQuarterOwnerRow(row, activeRegime);
    if (activeRegime === "our") {
      return Boolean(ownerRow) || employeeRows.length > 0;
    }
    return employeeRows.length > 0;
  }
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
  return type === "payment" ? "Платеж" : "Отчет";
}

function capitalizeDeadlineMonthLabel(value) {
  return String(value || "").replace(/(^\d+\s)(.)/u, (_match, prefix, letter) => `${prefix}${String(letter || "").toUpperCase()}`);
}

function getLandingDeadlineCardCopy(row) {
  const rawTitle = String((row && row.title) || "").trim();
  const titleParts = splitLandingDeadlineTitle(rawTitle);
  const period = String(titleParts.period || "").trim();
  const fno910Meta = isFno910Deadline(row) ? getFno910HalfYearMeta(row) : null;

  if (/ОПВ.*ОПВР.*СО.*ВОСМС/i.test(rawTitle)) {
    return {
      title: period ? `Платежи за ${period}` : "Обязательные платежи",
      description: "Пенсионные, соцплатежи и медстраховка."
    };
  }

  if (fno910Meta) {
    return {
      title: `ФНО 910 за ${fno910Meta.halfYearLabel}`,
      description: row && row.type === "payment" ? "Оплата налога по полугодию." : "Сдача формы 910."
    };
  }

  if (isFno200Deadline(row)) {
    return {
      title: period ? `ФНО 200.00 за ${period}` : "ФНО 200.00",
      description: state.regime === "our"
        ? "Квартальная отчётность за себя и сотрудников."
        : "Квартальная отчётность по сотрудникам."
    };
  }

  if (/220\.00|декларация ипн/i.test(rawTitle)) {
    return {
      title: "Декларация 220.00",
      description: "Годовая декларация по индивидуальному подоходному налогу."
    };
  }

  return {
    title: titleParts.main || rawTitle || "Налоговый срок",
    description: row && row.type === "payment"
      ? "Обязательный платёж по налоговому календарю."
      : "Срок сдачи отчётности по налоговому календарю."
  };
}

function splitLandingDeadlineTitle(title) {
  const normalized = String(title || "").trim();
  const match = normalized.match(/^(.+?)\s+за\s+(.+)$/i);
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
  if (mod10 === 1 && mod100 !== 11) return "день";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "дня";
  return "дней";
}

function getLandingStepWord(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "шаг";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "шага";
  return "шагов";
}

function getLandingDeadlineDueInfo(dateString) {
  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(dateString);
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  if (Number.isNaN(targetStart.getTime())) {
    return { text: "Дата не определена", tone: "" };
  }

  const diffDays = Math.ceil((targetStart - dayStart) / 86400000);

  if (diffDays < 0) {
    const overdueDays = Math.abs(diffDays);
    return { text: `Просрочено на ${overdueDays} ${getLandingDayWord(overdueDays)}`, tone: "overdue" };
  }

  if (diffDays === 0) return { text: "Сегодня", tone: "urgent" };
  if (diffDays === 1) return { text: "Завтра", tone: "urgent" };
  if (diffDays <= 7) return { text: `Через ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "urgent" };
  if (diffDays <= 14) return { text: `Через ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "soon" };

  return { text: `Через ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "" };
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
  const modalFooter = els.deadlineModal.querySelector(".deadline-modal-footer");
  if (modalFooter) {
    modalFooter.classList.remove("hidden");
  }

  const due = getLandingDeadlineDueInfo(row.date);
  const typeClass = row.type === "payment" ? "payment" : "report";
  const title = splitLandingDeadlineTitle(row.title);
  const quickSteps = getLandingDeadlineLiteSteps(row);
  const quickStepsCount = Math.max(1, quickSteps.length);
  const displayRegime = getDeadlineDisplayRegime();
  const regimeLabelText = getLandingDeadlineRegimeLabel(row.regime, displayRegime);

  els.deadlineModalDate.textContent = `${formatDateShort(row.date)} · ${due.text}`;
  els.deadlineModalTitle.textContent = title.main || row.title;
  els.deadlineModalMeta.innerHTML = `
    <div class="deadline-modal-chip-row">
      <span class="deadline-modal-chip ${typeClass}">${getLandingDeadlineTypeLabel(row.type)}</span>
      <span class="deadline-modal-chip">${escapeHtml(regimeLabelText)}</span>
    </div>
  `;

  els.deadlineModalChecklist.innerHTML = `
    <section class="deadline-lite-card">
      <h4>Что сделать в ${quickStepsCount} ${getLandingStepWord(quickStepsCount)}</h4>
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
  els.deadlineModalSubscribe.innerHTML = "Зарегистрироваться бесплатно";

  els.deadlineModalHint.textContent = "После регистрации откроются полный чеклист и напоминания по срокам.";

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
  const modalFooter = els.deadlineModal.querySelector(".deadline-modal-footer");
  if (modalFooter) {
    modalFooter.classList.add("hidden");
  }

  const due = getLandingDeadlineDueInfo(row.date);
  const isMobileDeadlineCompact = window.innerWidth <= 768;
  const paymentBreakdown = getDeadlinePaymentBreakdown(row);
  const quarterReportBreakdown = isFno200Deadline(row) ? getDeadlineQuarterReportBreakdown(row) : null;
  const totalWithoutVosms = paymentBreakdown
    ? Math.max(0, Math.round(paymentBreakdown.totalWithoutVosms))
    : null;
  const sections = getDeadlineChecklistSections(row, {
    totalWithoutVosms,
    paymentBreakdown,
    employeeRows: paymentBreakdown ? paymentBreakdown.employeeRows : [],
    employeeRemittanceTotal: paymentBreakdown ? paymentBreakdown.employeeRemittanceTotal : 0,
    employeeEmployerChargesTotal: paymentBreakdown ? paymentBreakdown.employeeEmployerChargesTotal : 0,
    quarterReportBreakdown
  });
  const progress = getDeadlineChecklistProgress(row.id);
  const stats = getDeadlineChecklistStats(row.id, row);
  const typeClass = row.type === "payment" ? "payment" : "report";
  const remindersOn = Boolean(state.remindersEnabled);
  const globalReminderChannels = getGlobalReminderChannels(state.reminders);
  const isProgressDone = stats.total > 0 && stats.done >= stats.total;
  const progressLabel = `Выполнено ${stats.done} из ${stats.total} шагов`;
  const progressPct = Math.max(0, Math.min(100, stats.pct || 0));
  const displayRegime = getDeadlineDisplayRegime();
  const regimeLabelText = getLandingDeadlineRegimeLabel(row.regime, displayRegime);
  const regimeNote = getLandingDeadlineRegimeNote(row.regime, displayRegime);
  const quarterWarningParts = [];
  if (quarterReportBreakdown && quarterReportBreakdown.employeesMissingIinCount > 0) {
    quarterWarningParts.push(`заполните ИИН: ${quarterReportBreakdown.employeesMissingIinCount}`);
  }
  if (quarterReportBreakdown && quarterReportBreakdown.employeesNeedingAccrualReviewCount > 0) {
    quarterWarningParts.push(`проверьте неполный месяц: ${quarterReportBreakdown.employeesNeedingAccrualReviewCount}`);
  }
  const quarterCheckSummaryParts = [];
  if (quarterReportBreakdown && quarterReportBreakdown.employeesMissingIinCount > 0) {
    quarterCheckSummaryParts.push(`ИИН: ${quarterReportBreakdown.employeesMissingIinCount}`);
  }
  if (quarterReportBreakdown && quarterReportBreakdown.employeesNeedingAccrualReviewCount > 0) {
    quarterCheckSummaryParts.push(`месяцы: ${quarterReportBreakdown.employeesNeedingAccrualReviewCount}`);
  }
  const channelsText = globalReminderChannels.length ? globalReminderChannels.join(", ") : "каналы не заполнены";
  const reminderInlineNote = remindersOn
    ? ""
    : `<button type="button" class="deadline-modal-note-link" data-action="open-reminders-settings" data-reminders-source="deadline_modal_inline">Напоминания выключены · Настроить</button>`;

  const renderSectionList = (section) =>
    section.items
      .map((item, index) => {
        const taskKey = getDeadlineTaskKey(section.id, index);
        const checked = !section.locked && Boolean(progress[taskKey]);
        const disabled = Boolean(section.locked);

        return `
          <li class="deadline-task-item ${checked ? "done" : ""} ${disabled ? "locked" : ""}">
            <label>
              <input type="checkbox" data-deadline-task="${taskKey}" data-deadline-id="${row.id}" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} />
              <span>${escapeHtml(item)}</span>
            </label>
          </li>
        `;
      })
      .join("");

  els.deadlineModalDate.textContent = `${formatDateLong(row.date)} · ${due.text}`;
  els.deadlineModalTitle.textContent = row.title;
  els.deadlineModalMeta.innerHTML = `
    <div class="deadline-modal-chip-row">
      <span class="deadline-modal-chip ${typeClass}">${getLandingDeadlineTypeLabel(row.type)}</span>
      <span class="deadline-modal-chip">${escapeHtml(regimeLabelText)}</span>
    </div>
    ${reminderInlineNote}
    ${
      paymentBreakdown
        ? (() => {
            if (paymentBreakdown.kind === "fno910") {
              const paymentDetailRows = Array.isArray(paymentBreakdown.months)
                ? paymentBreakdown.months
                    .map((month) => `<div class="deadline-payment-row"><span>${escapeHtml(month.monthLabel)}</span><strong>${fmt(month.ipn)}</strong></div>`)
                    .join("")
                : "";
              return `<section class="deadline-payment-summary deadline-payment-summary-compact" aria-label="Сумма к уплате">
            <h4>Сумма к уплате</h4>
            <div class="deadline-payment-row"><span>Период</span><strong class="deadline-payment-value-text">${escapeHtml(paymentBreakdown.halfYearLabel || "Полугодие")}</strong></div>
            <div class="deadline-payment-row"><span>Доход за период</span><strong>${fmt(paymentBreakdown.income)}</strong></div>
            <div class="deadline-payment-total"><span>Итого налог по ФНО 910</span><strong>${fmt(paymentBreakdown.total)}</strong></div>
            ${paymentDetailRows ? `<details class="deadline-payment-breakdown-toggle"><summary class="deadline-payment-breakdown-summary">Показать месяцы</summary><div class="deadline-payment-breakdown-body">${paymentDetailRows}</div></details>` : ""}
          </section>`;
            }

            const selfPaymentTotal = Math.max(0, Math.round(paymentBreakdown.total || 0));
            const employeeRemittanceTotal = Math.max(0, Math.round(paymentBreakdown.employeeRemittanceTotal || 0));
            const employeeEmployerChargesTotal = Math.max(0, Math.round(paymentBreakdown.employeeEmployerChargesTotal || 0));
            const paymentDetailRows = [
              `<div class="deadline-payment-row"><span>ОПВ</span><strong>${fmt(paymentBreakdown.opv)}</strong></div>`,
              `<div class="deadline-payment-row"><span>ОПВР</span><strong>${fmt(paymentBreakdown.opvr)}</strong></div>`,
              `<div class="deadline-payment-row"><span>СО</span><strong>${fmt(paymentBreakdown.so)}</strong></div>`,
              `<div class="deadline-payment-row"><span>ВОСМС</span><strong>${fmt(paymentBreakdown.vosms)}</strong></div>`,
              paymentBreakdown.socTax > 0 ? `<div class="deadline-payment-row"><span>СН</span><strong>${fmt(paymentBreakdown.socTax)}</strong></div>` : "",
              employeeEmployerChargesTotal > 0 ? `<div class="deadline-payment-row"><span>Из них расходы работодателя</span><strong>${fmt(employeeEmployerChargesTotal)}</strong></div>` : ""
            ].filter(Boolean).join("");

            return `<section class="deadline-payment-summary deadline-payment-summary-compact" aria-label="Сумма к уплате">
            <h4>Сумма к уплате</h4>
            <div class="deadline-payment-row"><span>За себя</span><strong>${fmt(selfPaymentTotal)}</strong></div>
            ${employeeRemittanceTotal > 0 ? `<div class="deadline-payment-row"><span>К перечислению за сотрудников</span><strong>${fmt(employeeRemittanceTotal)}</strong></div>` : ""}
            <div class="deadline-payment-total"><span>Итого</span><strong>${fmt(paymentBreakdown.grandTotal)}</strong></div>
            <details class="deadline-payment-breakdown-toggle">
              <summary class="deadline-payment-breakdown-summary">Показать детализацию</summary>
              <div class="deadline-payment-breakdown-body">
                ${paymentDetailRows}
              </div>
            </details>
          </section>`;
          })()
        : ""
    }
    ${
      !paymentBreakdown && quarterReportBreakdown
        ? `<section class="deadline-payment-summary deadline-report-summary" aria-label="Что это за отчет">
            <h4>Что это за отчет</h4>
            <div class="deadline-payment-row"><span>Период</span><strong class="deadline-payment-value-text">${escapeHtml(quarterReportBreakdown.quarterLabel)}</strong></div>
            ${
              quarterReportBreakdown.hasOwnerInReport
                ? `<div class="deadline-payment-row"><span>ИП в отчете</span><strong class="deadline-payment-value-text">Да</strong></div>`
                : ""
            }
            <div class="deadline-payment-row"><span>Сотрудников в отчете</span><strong>${quarterReportBreakdown.employeesCount}</strong></div>
            ${
              quarterCheckSummaryParts.length > 0
                ? `<div class="deadline-payment-row"><span>Нужно проверить</span><strong class="deadline-payment-value-text">${escapeHtml(quarterCheckSummaryParts.join(", "))}</strong></div>`
                : ""
            }
          </section>`
        : ""
    }
    ${regimeNote && !quarterReportBreakdown ? `<p class="deadline-modal-note">${escapeHtml(regimeNote)}</p>` : ""}
    ${
      quarterReportBreakdown
        ? `<p class="deadline-modal-note">За ${escapeHtml(quarterReportBreakdown.monthsLabel)}. Это квартальная отчетность${quarterReportBreakdown.hasOwnerInReport ? " за себя и по сотрудникам" : " по сотрудникам"}, а не отдельный платеж.</p>`
        : ""
    }
    ${
      quarterReportBreakdown && quarterWarningParts.length > 0
        ? `<p class="deadline-modal-note deadline-modal-note-warning">Перед сдачей нужно: ${escapeHtml(quarterWarningParts.join("; "))}.</p>`
        : ""
    }
    ${
      paymentBreakdown && paymentBreakdown.employeesNeedingReviewCount > 0
        ? `<p class="deadline-modal-note deadline-modal-note-warning">У ${paymentBreakdown.employeesNeedingReviewCount} ${paymentBreakdown.employeesNeedingReviewCount === 1 ? "сотрудника" : "сотрудников"} нужно уточнить начисление за неполный месяц, чтобы сумма платежа за сотрудников была точной.</p>`
        : ""
    }
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
        <summary>Показать инструкцию</summary>
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
            aria-label="Показать ${escapeHtml(section.title)}"
          >
            Шаг ${index + 1}
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
          <button type="button" class="deadline-mobile-step-nav-btn" data-action="deadline-mobile-step-prev" disabled>Назад</button>
          <span class="deadline-mobile-step-counter" data-deadline-step-counter>Шаг 1 из ${sections.length}</span>
          <button type="button" class="deadline-mobile-step-nav-btn" data-action="deadline-mobile-step-next">Далее</button>
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
    ? '<i class="deadline-modal-subscribe-icon" data-lucide="bell" aria-hidden="true"></i><span>Напоминания: Вкл (глобально)</span>'
    : '<i class="deadline-modal-subscribe-icon" data-lucide="bell-off" aria-hidden="true"></i><span>Напоминания: Выкл (настроить)</span>';

  els.deadlineModalHint.textContent = remindersOn
    ? `Напоминания активны для всех сроков. Каналы: ${channelsText}.`
    : "Настройте напоминания один раз — они применятся ко всем срокам.";

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
    counter.textContent = `Шаг ${safeIndex + 1} из ${panels.length}`;
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
    els.landingDeadlines.innerHTML = '<p class="deadline-empty">Сроки скоро появятся.</p>';
    return;
  }

  els.landingDeadlines.innerHTML = rows
    .map((row, index) => {
      const due = getLandingDeadlineDueInfo(row.date);
      const dueToneClass = due.tone ? ` ${due.tone}` : "";
      const cardClass = due.tone === "overdue" || due.tone === "urgent" ? " urgent" : "";
      const dateLabel = capitalizeDeadlineMonthLabel(formatDateDayMonthLong(row.date));
      const mobileDateLabel = `До ${String(formatDateDayMonthLong(row.date) || "").toLowerCase()}`;
      const dateShortLabel = String(formatDateShort(row.date) || "").replace(/\./g, "");
      const { title, description } = getLandingDeadlineCardCopy(row);
      const ctaLabel = "Открыть чеклист";
      const primaryBadge = index === 0 ? '<span class="landing-calendar-kicker">Ближайший срок</span>' : "";

      return `
        <article class="deadline-card landing-calendar-card${cardClass}${index === 0 ? " is-primary" : ""}">
          <div class="landing-calendar-card-head">
            ${primaryBadge}
            <div class="landing-calendar-date-chip" aria-label="${escapeHtml(dateLabel)}">
              <small>До</small>
              <strong>${escapeHtml(dateShortLabel)}</strong>
            </div>
            <div class="landing-calendar-date-mobile">${escapeHtml(mobileDateLabel)}</div>
          </div>
          <p class="landing-calendar-meta${dueToneClass}">${escapeHtml(due.text)}</p>
          <h3 class="deadline-title">${escapeHtml(title)}</h3>
          <p class="landing-calendar-note">${escapeHtml(description)}</p>
          <div class="landing-calendar-card-footer">
            <button type="button" class="landing-calendar-open" data-deadline-expand="${row.id}" aria-label="${ctaLabel}: ${escapeHtml(title)}">
              <span>${ctaLabel}</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}
function getUrgentSidebarDeadlines() {
  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const doneSet = new Set(normalizeDoneDeadlines(state.doneDeadlines));

  return DEADLINES_2026.filter((deadline) => {
    const byRegime = isDeadlineApplicableForRegime(deadline, state.regime);
    if (!byRegime) return false;

    const isDone = doneSet.has(deadline.id);
    if (isDone) return false;

    const byTracking = isDeadlineInTrackingRange(deadline.date, deadline);
    if (!byTracking) return false;

    const target = new Date(deadline.date);
    const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
    if (Number.isNaN(targetStart.getTime())) return false;

    const diffDays = Math.ceil((targetStart - dayStart) / 86400000);
    return diffDays >= 0 && diffDays <= 7;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getUrgentSidebarDeadlineCount() {
  return getUrgentSidebarDeadlines().length;
}

function getDeadlineCountWord(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "срок";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "срока";
  return "сроков";
}

function renderSidebarActive() {
  const hideEmployeesUi = !canAccessEmployeesSection();
  const hideCrmUi = !canAccessCrmSection();

  if (els.dashboardApp) {
    els.dashboardApp.classList.toggle("employees-feature-hidden", hideEmployeesUi);
    els.dashboardApp.classList.toggle("regime-self", state.regime === "self");
  }
  document.body.classList.toggle("employees-feature-hidden", hideEmployeesUi);
  document.body.classList.toggle("regime-self", state.regime === "self");

  document.querySelectorAll("#sidebarNav [data-page], #mobileTabbar [data-page], #mobileDrawer [data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === state.page);
  });

  document.querySelectorAll('#sidebarNav [data-page="employees"], #mobileTabbar [data-page="employees"], #mobileDrawer [data-page="employees"]').forEach((button) => {
    button.hidden = hideEmployeesUi;
    button.setAttribute("aria-hidden", hideEmployeesUi ? "true" : "false");
    button.style.display = hideEmployeesUi ? "none" : "";
  });

  document.querySelectorAll('#sidebarNav [data-page="crm"], #mobileDrawer [data-page="crm"]').forEach((button) => {
    button.hidden = hideCrmUi;
    button.setAttribute("aria-hidden", hideCrmUi ? "true" : "false");
    button.style.display = hideCrmUi ? "none" : "";
  });

  const urgentRows = getUrgentSidebarDeadlines();
  const urgentCount = urgentRows.length;
  const calendarBadge = document.getElementById("sidebarCalendarBadge");
  if (calendarBadge) {
    if (urgentCount > 0) {
      calendarBadge.textContent = String(urgentCount);
      calendarBadge.classList.remove("hidden");
      const nextUrgent = urgentRows[0] || null;
      const nextUrgentText = nextUrgent
        ? ` Ближайший: ${formatDateShort(nextUrgent.date)} - ${nextUrgent.title}.`
        : "";
      const badgeTooltip = `${urgentCount} ${getDeadlineCountWord(urgentCount)} в ближайшие 7 дней.${nextUrgentText}`;
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

function getDashboardMonthKeyFromDateValue(rawValue, fallbackDate = new Date()) {
  const source = String(rawValue || "").trim();
  const directMatch = source.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (directMatch) {
    const directDate = new Date(Number(directMatch[1]), Number(directMatch[2]) - 1, Number(directMatch[3]));
    if (!Number.isNaN(directDate.getTime())) {
      return formatDashboardMonthKey(directDate);
    }
  }

  if (source) {
    const parsedDate = new Date(source);
    if (!Number.isNaN(parsedDate.getTime())) {
      return formatDashboardMonthKey(parsedDate);
    }
  }

  return formatDashboardMonthKey(fallbackDate);
}

function normalizeEmployeeStartMonth(rawValue, fallbackValue = "") {
  const source = String(rawValue || "").trim();
  const directMatch = source.match(/^(\d{4})-(\d{2})/);
  if (directMatch) {
    const normalized = `${directMatch[1]}-${directMatch[2]}`;
    return parseDashboardMonthKey(normalized) ? normalized : "";
  }

  if (source) {
    const parsedDate = new Date(source);
    if (!Number.isNaN(parsedDate.getTime())) {
      return formatDashboardMonthKey(parsedDate);
    }
  }

  const fallback = String(fallbackValue || "").trim();
  if (!fallback) return "";
  const parsedFallback = parseDashboardMonthKey(fallback);
  return parsedFallback ? formatDashboardMonthKey(parsedFallback) : "";
}

function normalizePayrollPeriodDate(periodDate = new Date()) {
  if (periodDate === null || periodDate === "") {
    return null;
  }

  if (periodDate instanceof Date && !Number.isNaN(periodDate.getTime())) {
    return new Date(periodDate.getFullYear(), periodDate.getMonth(), 1);
  }

  const monthDate = parseDashboardMonthKey(periodDate);
  if (monthDate) {
    return monthDate;
  }

  const parsedDate = new Date(periodDate);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return new Date(parsedDate.getFullYear(), parsedDate.getMonth(), 1);
}

function getEmployeeStartMonthFallback() {
  const registrationMonth = getRegistrationMonthStart();
  return formatDashboardMonthKey(registrationMonth || new Date());
}

function getDashboardVisibleMonthRange(referenceDate = new Date()) {
  const safeReference = referenceDate instanceof Date && !Number.isNaN(referenceDate.getTime())
    ? referenceDate
    : new Date();
  const maxMonthIndex = safeReference.getMonth();
  const registrationMonth = getEffectiveTrackingMonthStart();

  if (!registrationMonth) {
    return {
      minMonthIndex: 0,
      maxMonthIndex
    };
  }

  if (registrationMonth.getFullYear() > safeReference.getFullYear()) {
    return {
      minMonthIndex: maxMonthIndex,
      maxMonthIndex
    };
  }

  if (registrationMonth.getFullYear() < safeReference.getFullYear()) {
    return {
      minMonthIndex: 0,
      maxMonthIndex
    };
  }

  return {
    minMonthIndex: Math.min(maxMonthIndex, Math.max(0, registrationMonth.getMonth())),
    maxMonthIndex
  };
}

function shiftDashboardMonthKey(monthKey, delta = 1) {
  const dateObj = parseDashboardMonthKey(monthKey);
  if (!dateObj) {
    return formatDashboardMonthKey(new Date());
  }
  return formatDashboardMonthKey(new Date(dateObj.getFullYear(), dateObj.getMonth() + Number(delta || 0), 1));
}

function getEmployeeStartMonthDate(employee) {
  if (!employee || typeof employee !== "object") {
    return null;
  }

  return parseDashboardMonthKey(normalizeEmployeeStartMonth(employee.startDate || employee.startMonth, getEmployeeStartMonthFallback()));
}

function getEmployeeEndMonthDate(employee) {
  if (!employee || typeof employee !== "object") {
    return null;
  }

  return parseDashboardMonthKey(normalizeEmployeeEndMonth(employee.endDate || employee.endMonth));
}

function getEmployeeStartDateValue(employee) {
  if (!employee || typeof employee !== "object") {
    return "";
  }

  return normalizeEmployeeStartDate(employee.startDate || employee.startMonth, getEmployeeStartDateFallback());
}

function getEmployeeEndDateValue(employee) {
  if (!employee || typeof employee !== "object") {
    return "";
  }

  return normalizeEmployeeEndDate(employee.endDate || employee.endMonth, "");
}

function formatEmployeeDateLabel(dateValue) {
  const dateObj = parseEmployeeDateValue(dateValue);
  if (!dateObj) return "";
  return new Intl.DateTimeFormat("ru-KZ", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(dateObj);
}

function formatEmployeeStartMonthLabel(startMonth) {
  const dateObj = parseDashboardMonthKey(startMonth);
  return dateObj ? formatMonthYearLabel(dateObj) : "";
}

function formatEmployeeEndMonthLabel(endMonth) {
  const dateObj = parseDashboardMonthKey(endMonth);
  return dateObj ? formatMonthYearLabel(dateObj) : "";
}

function getEmployeeSalaryHistoryEntries(employee) {
  if (!employee || typeof employee !== "object") {
    return [];
  }

  return normalizeEmployeeSalaryHistory(employee.salaryHistory, employee.startMonth, employee.salary, employee.endMonth);
}

function getEmployeeMonthlyAccrualEntries(employee) {
  if (!employee || typeof employee !== "object") {
    return [];
  }

  return normalizeEmployeeMonthlyAccruals(employee.monthlyAccruals, employee.startMonth, employee.endMonth);
}

function hasEmployeeMonthlyAccrualForMonth(employee, monthKey) {
  const normalizedMonth = normalizeEmployeeStartMonth(monthKey, "");
  if (!normalizedMonth) {
    return false;
  }

  return getEmployeeMonthlyAccrualEntries(employee).some((entry) => entry.month === normalizedMonth);
}

function isEmployeeDateAtMonthStart(dateValue) {
  const dateObj = parseEmployeeDateValue(dateValue);
  return Boolean(dateObj && dateObj.getDate() === 1);
}

function isEmployeeDateAtMonthEnd(dateValue) {
  const dateObj = parseEmployeeDateValue(dateValue);
  if (!dateObj) {
    return false;
  }

  const lastDay = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate();
  return dateObj.getDate() === lastDay;
}

function getEmployeeCompletenessMeta(employee) {
  const items = [];
  const hasValidIin = hasValidEmployeeIin(employee);
  const startDate = getEmployeeStartDateValue(employee);
  const endDate = getEmployeeEndDateValue(employee);
  const startMonth = normalizeEmployeeStartMonth(startDate || employee?.startMonth, "");
  const endMonth = normalizeEmployeeEndMonth(endDate || employee?.endMonth || "");
  const needsStartMonthAccrual = Boolean(startDate && startMonth && !isEmployeeDateAtMonthStart(startDate) && !hasEmployeeMonthlyAccrualForMonth(employee, startMonth));
  const needsEndMonthAccrual = Boolean(endDate && endMonth && !isEmployeeDateAtMonthEnd(endDate) && !hasEmployeeMonthlyAccrualForMonth(employee, endMonth));
  const needsMonthlyAccrual = needsStartMonthAccrual || needsEndMonthAccrual;

  if (!hasValidIin) {
    items.push({
      tone: "warning",
      text: "Добавьте ИИН для полной точности расчётов и ФНО 200.00."
    });
  }

  if (needsStartMonthAccrual) {
    items.push({
      tone: "notice",
      text: `Проверьте начисление за ${String(formatEmployeeStartMonthLabel(startMonth) || "").toLowerCase()}: сотрудник принят не с начала месяца.`
    });
  }

  if (needsEndMonthAccrual) {
    items.push({
      tone: "notice",
      text: `Проверьте начисление за ${String(formatEmployeeEndMonthLabel(endMonth) || "").toLowerCase()}: сотрудник завершает работу не в последний день месяца.`
    });
  }

  if (!items.length) {
    return {
      tone: "ok",
      badge: "Данные полные",
      needsIin: false,
      needsMonthlyAccrual: false,
      needsStartMonthAccrual: false,
      needsEndMonthAccrual: false,
      items: [{
        tone: "ok",
        text: "Базовых данных достаточно для текущих расчётов."
      }]
    };
  }

  const hasWarnings = items.some((item) => item.tone === "warning");
  return {
    tone: hasWarnings ? "warning" : "notice",
    badge: hasWarnings ? "Есть, что дозаполнить" : "Проверьте месяц",
    needsIin: !hasValidIin,
    needsMonthlyAccrual,
    needsStartMonthAccrual,
    needsEndMonthAccrual,
    items
  };
}

function getEmployeePeriodAccrualReviewMeta(employee, periodDate = new Date()) {
  const periodStart = normalizePayrollPeriodDate(periodDate);
  if (!periodStart) {
    return {
      needsMonthlyAccrualReview: false,
      items: [],
      summary: ""
    };
  }

  const monthKey = formatDashboardMonthKey(periodStart);
  const startDate = getEmployeeStartDateValue(employee);
  const endDate = getEmployeeEndDateValue(employee);
  const startMonth = normalizeEmployeeStartMonth(startDate || employee?.startMonth, "");
  const endMonth = normalizeEmployeeEndMonth(endDate || employee?.endMonth || "");
  const items = [];

  if (startDate && startMonth === monthKey && !isEmployeeDateAtMonthStart(startDate) && !hasEmployeeMonthlyAccrualForMonth(employee, startMonth)) {
    items.push({
      type: "start",
      month: startMonth,
      text: `Проверьте начисление за ${String(formatEmployeeStartMonthLabel(startMonth) || "").toLowerCase()}: сотрудник принят не с начала месяца.`
    });
  }

  if (endDate && endMonth === monthKey && !isEmployeeDateAtMonthEnd(endDate) && !hasEmployeeMonthlyAccrualForMonth(employee, endMonth)) {
    items.push({
      type: "end",
      month: endMonth,
      text: `Проверьте начисление за ${String(formatEmployeeEndMonthLabel(endMonth) || "").toLowerCase()}: сотрудник завершает работу не в последний день месяца.`
    });
  }

  const summary = items
    .map((item) => String(formatEmployeeStartMonthLabel(item.month) || "").toLowerCase())
    .filter(Boolean)
    .filter((value, index, source) => source.indexOf(value) === index)
    .join(", ");

  return {
    needsMonthlyAccrualReview: items.length > 0,
    items,
    summary
  };
}

function getEmployeeQuarterAccrualReviewMeta(employee, quarterMeta) {
  const monthDates = quarterMeta && Array.isArray(quarterMeta.monthDates)
    ? quarterMeta.monthDates
    : [];
  const items = monthDates
    .flatMap((periodDate) => getEmployeePeriodAccrualReviewMeta(employee, periodDate).items)
    .filter(Boolean);
  const summary = items
    .map((item) => String(formatEmployeeStartMonthLabel(item.month) || "").toLowerCase())
    .filter(Boolean)
    .filter((value, index, source) => source.indexOf(value) === index)
    .join(", ");

  return {
    needsMonthlyAccrualReview: items.length > 0,
    items,
    summary
  };
}

function hasEmployeeCompletenessIssues(employee) {
  return getEmployeeCompletenessMeta(employee).tone !== "ok";
}

function compareEmployeesForReview(firstEmployee, secondEmployee) {
  const firstMeta = getEmployeeCompletenessMeta(firstEmployee);
  const secondMeta = getEmployeeCompletenessMeta(secondEmployee);
  const getPriority = (meta) => {
    if (meta.needsIin) return 0;
    if (meta.needsMonthlyAccrual) return 1;
    return 2;
  };

  const priorityDiff = getPriority(firstMeta) - getPriority(secondMeta);
  if (priorityDiff !== 0) {
    return priorityDiff;
  }

  return String(firstEmployee?.name || "").localeCompare(String(secondEmployee?.name || ""), "ru-KZ");
}

function getEmployeeLatestSalary(employee) {
  const history = getEmployeeSalaryHistoryEntries(employee);
  if (history.length > 0) {
    return normalizeIncome(history[history.length - 1].salary);
  }
  return normalizeIncome(employee && employee.salary);
}

function getEmployeeBaseSalaryForPeriod(employee, periodDate = new Date()) {
  const periodStart = normalizePayrollPeriodDate(periodDate);
  const history = getEmployeeSalaryHistoryEntries(employee);
  if (history.length === 0) {
    return normalizeIncome(employee && employee.salary);
  }
  if (!periodStart) {
    return normalizeIncome(history[history.length - 1].salary);
  }

  let activeSalary = normalizeIncome(history[0].salary);
  history.forEach((entry) => {
    const entryDate = parseDashboardMonthKey(entry.month);
    if (entryDate && entryDate.getTime() <= periodStart.getTime()) {
      activeSalary = normalizeIncome(entry.salary);
    }
  });
  return activeSalary;
}

function getEmployeeMonthlyAccrualForPeriod(employee, periodDate = new Date()) {
  const periodStart = normalizePayrollPeriodDate(periodDate);
  if (!periodStart) {
    return { amount: 0, isOverride: false };
  }

  const monthKey = formatDashboardMonthKey(periodStart);
  const row = getEmployeeMonthlyAccrualEntries(employee).find((entry) => entry.month === monthKey);
  return row
    ? { amount: normalizeIncome(row.amount), isOverride: true }
    : { amount: 0, isOverride: false };
}

function getEmployeeSalaryForPeriod(employee, periodDate = new Date()) {
  const baseSalary = getEmployeeBaseSalaryForPeriod(employee, periodDate);
  const accrual = getEmployeeMonthlyAccrualForPeriod(employee, periodDate);
  return accrual.isOverride ? accrual.amount : baseSalary;
}

function isEmployeeActiveForPayrollPeriod(employee, periodDate) {
  const periodStart = normalizePayrollPeriodDate(periodDate);
  if (!periodStart) return true;

  const employeeStartMonth = getEmployeeStartMonthDate(employee);
  const employeeEndMonth = getEmployeeEndMonthDate(employee);
  if (employeeStartMonth && employeeStartMonth.getTime() > periodStart.getTime()) {
    return false;
  }
  if (employeeEndMonth && employeeEndMonth.getTime() < periodStart.getTime()) {
    return false;
  }
  return true;
}

function getEmployeePayrollSnapshot(employee, periodDate = new Date()) {
  const periodStart = normalizePayrollPeriodDate(periodDate);
  const isActive = isEmployeeActiveForPayrollPeriod(employee, periodStart);
  const baseSalary = isActive ? getEmployeeBaseSalaryForPeriod(employee, periodStart) : 0;
  const accrual = isActive ? getEmployeeMonthlyAccrualForPeriod(employee, periodStart) : { amount: 0, isOverride: false };
  const salary = isActive ? (accrual.isOverride ? accrual.amount : baseSalary) : 0;
  const tax = calcEmployeeTaxes(salary, employee);
  const socialTaxEmployee = isActive ? getEmployeeSocialTaxForPeriod(employee, periodStart) : 0;
  const employeeEmployerChargesTotal = Math.max(0, Number(tax.employeeEmployerChargesTotal || 0) + socialTaxEmployee);
  const employerExtraCost = Math.max(0, Number(tax.employerExtraCost || 0) + socialTaxEmployee);
  const employeeTotalRemittance = Math.max(0, Number(tax.employeeWithholdingsTotal || 0) + employeeEmployerChargesTotal);
  return {
    ...tax,
    socialTaxEmployee,
    employeeEmployerChargesTotal,
    employeeTotalRemittance,
    employerExtraCost,
    salary,
    baseSalary,
    usesMonthlyAccrual: Boolean(isActive && accrual.isOverride),
    isActive,
    periodDate: periodStart,
    totalEmployerSpend: salary + employerExtraCost
  };
}

function getEmployeeCardReferencePeriod(employee, view = "active") {
  const currentPeriod = normalizePayrollPeriodDate(new Date());
  const history = getEmployeeSalaryHistoryEntries(employee);
  const latestHistoryMonth = history.length > 0 ? history[history.length - 1].month : "";
  if (currentPeriod && isEmployeeActiveForPayrollPeriod(employee, currentPeriod)) {
    return currentPeriod;
  }
  return getEmployeeEndMonthDate(employee)
    || parseDashboardMonthKey(latestHistoryMonth)
    || getEmployeeStartMonthDate(employee)
    || currentPeriod
    || normalizePayrollPeriodDate(new Date());
}

function getEmployeeStatusMeta(employee, referenceDate = new Date()) {
  const periodStart = normalizePayrollPeriodDate(referenceDate) || normalizePayrollPeriodDate(new Date());
  const startMonth = getEmployeeStartMonthDate(employee);
  const endMonth = getEmployeeEndMonthDate(employee);
  const startDateLabel = formatEmployeeDateLabel(getEmployeeStartDateValue(employee));
  const endDateLabel = formatEmployeeDateLabel(getEmployeeEndDateValue(employee));
  const archived = Boolean(employee && employee.archived);

  if (archived) {
    return { key: "archived", label: "Скрыт из активных" };
  }
  if (startMonth && periodStart && startMonth.getTime() > periodStart.getTime()) {
    return { key: "planned", label: `Старт с ${startDateLabel || formatEmployeeStartMonthLabel(employee.startMonth)}` };
  }
  if (endMonth && periodStart && endMonth.getTime() < periodStart.getTime()) {
    return { key: "dismissed", label: `Работал до ${endDateLabel || formatEmployeeEndMonthLabel(employee.endMonth)}` };
  }
  if (endMonth && periodStart && endMonth.getTime() === periodStart.getTime()) {
    return { key: "finishing", label: `Последний месяц: ${formatEmployeeEndMonthLabel(employee.endMonth)}` };
  }
  return { key: "active", label: "Активен" };
}

function getEmployeePaymentRowsForPeriod(periodDate, employees = state.employees) {
  const periodStart = normalizePayrollPeriodDate(periodDate);
  if (!hasEmployeeFeatureEnabled()) {
    return [];
  }

  return normalizeEmployeeEntries(employees)
    .filter((employee) => !periodStart || isEmployeeActiveForPayrollPeriod(employee, periodStart))
    .map((employee) => {
      const snapshot = getEmployeePayrollSnapshot(employee, periodStart || new Date());
      const reviewMeta = getEmployeePeriodAccrualReviewMeta(employee, periodStart || new Date());
      return {
        id: employee.id,
        name: employee.name,
        startDate: getEmployeeStartDateValue(employee),
        endDate: getEmployeeEndDateValue(employee),
        startMonth: employee.startMonth,
        endMonth: employee.endMonth,
        salary: snapshot.salary,
        withholdingsTotal: Number(snapshot.employeeWithholdingsTotal || 0),
        employerChargesTotal: Number(snapshot.employeeEmployerChargesTotal || 0),
        totalRemittance: Number(snapshot.employeeTotalRemittance || 0),
        employerCost: Number(snapshot.employeeEmployerChargesTotal || 0),
        totalEmployerSpend: snapshot.totalEmployerSpend,
        netSalary: snapshot.netSalary,
        needsMonthlyAccrualReview: reviewMeta.needsMonthlyAccrualReview,
        reviewItems: reviewMeta.items,
        reviewSummary: reviewMeta.summary
      };
    })
    .filter((employee) => Number(employee.totalRemittance || 0) > 0);
}

function getEmployeesRemittanceSummaryForPeriod(periodDate, employees = state.employees) {
  const rows = getEmployeePaymentRowsForPeriod(periodDate, employees);
  return {
    rows,
    withholdingsTotal: rows.reduce((sum, employee) => sum + Number(employee.withholdingsTotal || 0), 0),
    employerChargesTotal: rows.reduce((sum, employee) => sum + Number(employee.employerChargesTotal || 0), 0),
    remittanceTotal: rows.reduce((sum, employee) => sum + Number(employee.totalRemittance || 0), 0),
    needsReviewCount: rows.filter((employee) => employee.needsMonthlyAccrualReview).length
  };
}

function getEmployeesEmployerCostForPeriod(periodDate, employees = state.employees) {
  return getEmployeesRemittanceSummaryForPeriod(periodDate, employees).employerChargesTotal;
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

// Общий дедлайн для оплаты: до 25 числа текущего месяца, если сегодня еще не прошло 25-е,
// иначе до 25 числа следующего месяца.
function getNextDeadline(baseDate = new Date()) {
  const sourceDate = baseDate instanceof Date ? new Date(baseDate) : new Date(baseDate);
  if (Number.isNaN(sourceDate.getTime())) {
    const fallback = new Date();
    return new Date(fallback.getFullYear(), fallback.getMonth(), 25);
  }

  const year = sourceDate.getFullYear();
  const month = sourceDate.getMonth();
  const day = sourceDate.getDate();

  return day <= 25
    ? new Date(year, month, 25)
    : new Date(year, month + 1, 25);
}

function getTaxDueDateLabelByMonth(monthIndex, year = new Date().getFullYear()) {
  const safeMonth = Number.isFinite(Number(monthIndex)) ? Math.min(11, Math.max(0, Math.trunc(Number(monthIndex)))) : new Date().getMonth();
  const safeYear = Number.isFinite(Number(year)) ? Math.trunc(Number(year)) : new Date().getFullYear();
  const matchedDeadline = DEADLINES_2026.find((row) => {
    if (!row || row.type !== "payment" || isFno910Deadline(row)) {
      return false;
    }

    if (!isDeadlineApplicableForRegime(row, state.regime)) {
      return false;
    }

    const periodDate = getDeadlinePayrollPeriodDate(row);
    return Boolean(
      periodDate
      && periodDate.getFullYear() === safeYear
      && periodDate.getMonth() === safeMonth
    );
  });

  const dueDate = matchedDeadline
    ? new Date(matchedDeadline.date)
    : shiftDeadlineToNextBusinessDay(new Date(safeYear, safeMonth + 1, 25));
  return new Intl.DateTimeFormat("ru-KZ", { day: "numeric", month: "long" }).format(dueDate);
}

function getNextTaxDueDateLabel(baseDate = new Date()) {
  return new Intl.DateTimeFormat("ru-KZ", { day: "numeric", month: "long" }).format(getNextDeadline(baseDate));
}

function getBreakdownCountWord(count) {
  const safeCount = Math.abs(Number(count) || 0) % 100;
  const lastDigit = safeCount % 10;
  if (safeCount > 10 && safeCount < 20) return "платежей";
  if (lastDigit === 1) return "платёж";
  if (lastDigit >= 2 && lastDigit <= 4) return "платежа";
  return "платежей";
}

function getTaxActionPlan(regime, tax, income = 0, monthIndex = new Date().getMonth(), year = new Date().getFullYear()) {
  const dueDateLabel = getNextTaxDueDateLabel();
  const payNowTotal = Math.max(0, Math.round(getTaxLoadPayNow(regime, tax)));
  const ipn = Math.max(0, Math.round((tax && tax.ipn) || 0));
  const hasIncome = Number(income || 0) > 0;
  const tone = regime === "self" ? "self" : regime === "our" ? "our" : "simplified";
  const payrollPeriodDate = new Date(year, monthIndex, 1);
  const employeesSummary = regime !== "self"
    ? getEmployeesRemittanceSummaryForPeriod(payrollPeriodDate)
    : { remittanceTotal: 0, employerChargesTotal: 0 };
  const employeesRemittanceTotal = Math.max(0, Math.round(employeesSummary.remittanceTotal || 0));
  const employeesEmployerChargesTotal = Math.max(0, Math.round(employeesSummary.employerChargesTotal || 0));
  const totalPayNowWithEmployees = payNowTotal + employeesRemittanceTotal;
  const pushEmployeesLines = (lines) => {
    if (employeesRemittanceTotal > 0) {
      lines.push(`За сотрудников: удержания и платежи работодателя — ${fmt(employeesRemittanceTotal)}.`);
    }
    if (employeesEmployerChargesTotal > 0) {
      lines.push(`Из них расходы работодателя — ${fmt(employeesEmployerChargesTotal)}.`);
    }
  };

  if (!hasIncome && payNowTotal <= 0 && employeesRemittanceTotal <= 0) {
    return {
      tone,
      badge: `До ${dueDateLabel}`,
      summary: "За этот месяц в журнале пока нет дохода, поэтому точный платёж сейчас не показан.",
      nowTitle: "Сейчас",
      nowText: "Добавьте доход или откройте сценарий в разделе «Налоги».",
      laterTitle: "Потом",
      laterText: "После ввода дохода сервис сразу покажет, что платить и что откладывать.",
      note: "Это полезно, если хотите заранее проверить нагрузку до фактического поступления денег."
    };
  }

  if (regime === "self") {
    const nowLines = [`За себя: ОПВ, ОПВР, СО и ВОСМС — ${fmt(payNowTotal)}.`];

    return {
      tone,
      badge: `До ${dueDateLabel}`,
      summary: `Оплатите соцплатежи за себя и закройте месяц без отдельного ИПН.`,
      nowTitle: "Сейчас",
      nowText: "",
      nowLines,
      laterTitle: "Потом",
      laterText: "Отдельного ИПН нет — после оплаты сохраните квитанцию.",
      note: payNowTotal > 0 ? `Ориентир к оплате сейчас: ${fmt(payNowTotal)}.` : "Когда появится доход, мы автоматически пересчитаем сумму к оплате."
    };
  }

  if (regime === "simplified") {
    if (!hasIncome) {
      const nowLines = [`За себя: ВОСМС — ${fmt(payNowTotal)}.`];
      pushEmployeesLines(nowLines);

      return {
        tone,
        badge: `До ${dueDateLabel}`,
        summary: employeesRemittanceTotal > 0
          ? "При нулевом доходе за себя на упрощёнке обязателен только ВОСМС, а за сотрудников сохраняются ежемесячные перечисления."
          : "При нулевом доходе обязательный платёж за себя на упрощёнке — только ВОСМС.",
        nowTitle: "Сейчас",
        nowText: "",
        nowLines,
        laterTitle: "Потом",
        laterText: "ОПВ, ОПВР, СО и ИПН при нулевом доходе за этот месяц не обязательны.",
        note: employeesRemittanceTotal > 0
          ? `Общий ориентир к оплате сейчас: ${fmt(totalPayNowWithEmployees)}.`
          : "Если деятельность официально приостановлена, обязательные платежи могут не начисляться."
      };
    }

    const nowLines = [`За себя: ОПВ, ОПВР, СО и ВОСМС — ${fmt(payNowTotal)}.`];
    pushEmployeesLines(nowLines);

    return {
      tone,
      badge: `До ${dueDateLabel}`,
      summary: employeesRemittanceTotal > 0
        ? "Сейчас оплатите ежемесячные платежи за себя и за сотрудников, а ИПН по 910 держите отдельным резервом."
        : "Сейчас оплатите ежемесячные соцплатежи ИП, а ИПН по 910 держите отдельным резервом.",
      nowTitle: "Сейчас",
      nowText: "",
      nowLines,
      laterTitle: "Потом",
      laterText: ipn > 0
        ? `ИПН по 910 не платится сейчас — откладывайте около ${fmt(ipn)} в месяц до полугодия.`
        : "ИПН по 910 платится раз в полгода, а не вместе с ежемесячными соцплатежами.",
      note: hasIncome
        ? employeesRemittanceTotal > 0
          ? `Общий ориентир к оплате сейчас: ${fmt(totalPayNowWithEmployees)}. Соцналог на упрощёнке не платится.`
          : "Соцналог на упрощёнке не платится, поэтому сейчас ориентир — только соцплатежи."
        : "При нулевом доходе обязательный платёж за себя — только ВОСМС."
    };
  }

  if (!hasIncome) {
    const nowLines = [`За себя: ВОСМС — ${fmt(payNowTotal)}.`];
    pushEmployeesLines(nowLines);

    return {
      tone,
      badge: `До ${dueDateLabel}`,
      summary: employeesRemittanceTotal > 0
        ? "При нулевом доходе на ОУР за себя обязателен только ВОСМС, а за сотрудников сохраняются ежемесячные перечисления."
        : "При нулевом доходе обязательный платёж за себя на ОУР — только ВОСМС.",
      nowTitle: "Сейчас",
      nowText: "",
      nowLines,
      laterTitle: "Потом",
      laterText: "ОПВ, ОПВР, СО, СН и ИПН при нулевом доходе за этот месяц не обязательны.",
      note: employeesRemittanceTotal > 0
        ? `Общий ориентир к оплате сейчас: ${fmt(totalPayNowWithEmployees)}.`
        : "Если хотите сохранять соцстрахование и пенсионный стаж, можно добровольно платить минимум от 1 МЗП."
    };
  }

  const nowLines = [`За себя: ОПВ, ОПВР, СО, ВОСМС и соцналог — ${fmt(payNowTotal)}.`];
  pushEmployeesLines(nowLines);

  return {
    tone,
    badge: `До ${dueDateLabel}`,
    summary: employeesRemittanceTotal > 0
      ? "Сейчас оплатите ежемесячные обязательные платежи за себя и за сотрудников, а ИПН держите отдельно как резерв."
      : "Сейчас оплатите ежемесячные обязательные платежи по ОУР, а ИПН держите отдельно как резерв.",
    nowTitle: "Сейчас",
    nowText: "",
    nowLines,
    laterTitle: "Потом",
    laterText: ipn > 0
      ? `ИПН сейчас не платится — резервируйте около ${fmt(ipn)} в месяц и регулярно обновляйте расходы.`
      : "ИПН появится после учёта расходов и налоговой базы по ОУР.",
    note: employeesRemittanceTotal > 0
      ? `Общий ориентир к оплате сейчас: ${fmt(totalPayNowWithEmployees)}. По ОУР итоговый ИПН зависит от расходов, поэтому их важно заносить регулярно.`
      : "По ОУР итоговый ИПН зависит от расходов, поэтому их важно заносить регулярно."
  };
}

function getTaxActionPlanForUpcomingPayment(summary, regime = state.regime) {
  if (!summary || !summary.row || !summary.breakdown) {
    return null;
  }

  const safeRegime = String(regime || state.regime || "").trim();
  const tone = safeRegime === "self" ? "self" : safeRegime === "our" ? "our" : "simplified";
  const dueLabel = String(summary.dueLabel || getNextTaxDueDateLabel()).trim();
  const breakdown = summary.breakdown;
  const cardCopy = getLandingDeadlineCardCopy(summary.row);
  const periodTitle = String((cardCopy && cardCopy.title) || summary.title || summary.row.title || "ближайший платёж").trim();
  const paymentRows = getPaymentBreakdownRowsForDisplay(breakdown, safeRegime);
  const selfRows = paymentRows.filter((row) => String(row.label || "").trim() !== "За сотрудников");
  const employeeRemittanceTotal = Math.max(0, Math.round(Number(summary.employeeRemittanceTotal || breakdown.employeeRemittanceTotal || 0)));
  const employeeEmployerChargesTotal = Math.max(0, Math.round(Number(summary.employeeEmployerChargesTotal || breakdown.employeeEmployerChargesTotal || 0)));
  const selfTotal = Math.max(0, Math.round(Number(summary.selfTotal || breakdown.total || 0)));
  const total = Math.max(0, Math.round(Number(summary.total || breakdown.grandTotal || selfTotal + employeeRemittanceTotal)));
  const selfLabels = selfRows.map((row) => String(row.label || "").trim()).filter(Boolean);
  const nowLines = [];

  if (selfRows.length === 1) {
    nowLines.push(`За себя: ${selfRows[0].label} — ${fmt(selfTotal)}.`);
  } else if (selfRows.length > 1) {
    nowLines.push(`За себя: ${selfLabels.join(", ")} — ${fmt(selfTotal)}.`);
  }

  if (employeeRemittanceTotal > 0) {
    nowLines.push(`За сотрудников: удержания и платежи работодателя — ${fmt(employeeRemittanceTotal)}.`);
  }
  if (employeeEmployerChargesTotal > 0) {
    nowLines.push(`Из них расходы работодателя — ${fmt(employeeEmployerChargesTotal)}.`);
  }

  const nearestPeriodText = periodTitle || "Ближайший платёж";

  if (breakdown.kind === "fno910") {
    return {
      tone,
      badge: `До ${dueLabel}`,
      summary: `Сейчас оплатите ближайший налоговый платёж: ${nearestPeriodText}.`,
      nowTitle: "Сейчас",
      nowText: "",
      nowLines: nowLines.length ? nowLines : [`Налог по ФНО 910 — ${fmt(total)}.`],
      laterTitle: "Потом",
      laterText: "Следующий срок смотрите отдельно в блоке «Что скоро платить» и в календаре.",
      note: `Этот блок показывает именно ближайший платёж к оплате: ${fmt(total)}.`
    };
  }

  return {
    tone,
    badge: `До ${dueLabel}`,
    summary: `Сейчас оплатите ближайший платёж: ${nearestPeriodText}.`,
    nowTitle: "Сейчас",
    nowText: "",
    nowLines,
    laterTitle: "Потом",
    laterText: "Следующий расчёт за новый месяц смотрите отдельно в блоке «Что скоро платить» и на главной.",
    note: `Этот блок показывает именно ближайший срок к оплате: ${fmt(total)}.`
  };
}

function renderTaxActionPlan(plan, extraClass = "") {
  if (!plan) return "";
  const toneClass = plan.tone ? `tone-${plan.tone}` : "";
  const className = ["tax-action-plan", toneClass, extraClass].filter(Boolean).join(" ");
  const isTaxesBlock = String(extraClass || "").includes("is-taxes");
  const renderActionText = (mainText, lines) => {
    const lineItems = Array.isArray(lines)
      ? lines.filter((line) => String(line || "").trim())
      : [];

    if (!lineItems.length) {
      return `<strong>${escapeHtml(mainText || "")}</strong>`;
    }

    return `
      <div class="tax-action-plan-lines">
        ${mainText ? `<strong>${escapeHtml(mainText)}</strong>` : ""}
        ${lineItems.map((line) => `<div class="tax-action-plan-line">${escapeHtml(line)}</div>`).join("")}
      </div>
    `;
  };
  const paymentButtonsHtml = isTaxesBlock
    ? `
      <div class="tax-action-plan-payments">
        <a class="tax-pay-btn tax-pay-btn-kaspi" href="https://kaspi.kz" target="_blank" rel="noopener noreferrer" aria-label="Оплатить через Kaspi">
          <span class="tax-pay-btn-logo" aria-hidden="true">
            <img src="./kaspi-logo.png?v=20260407" alt="" width="22" height="22" decoding="async">
          </span>
          <span>Оплатить через Kaspi →</span>
        </a>
        <a class="tax-pay-btn tax-pay-btn-halyk" href="https://homebank.kz" target="_blank" rel="noopener noreferrer" aria-label="Оплатить через Halyk">
          <span class="tax-pay-btn-logo" aria-hidden="true">
            <img src="./halyk-logo.png?v=20260407" alt="" width="22" height="22" decoding="async">
          </span>
          <span>Оплатить через Halyk →</span>
        </a>
      </div>
    `
    : "";
  return `
    <section class="${className}" aria-label="Что делать дальше">
      <div class="tax-action-plan-head">
        <h4>Что делать дальше</h4>
        <span class="tax-action-plan-badge">${escapeHtml(plan.badge || "")}</span>
      </div>
      <p class="tax-action-plan-summary">${escapeHtml(plan.summary || "")}</p>
      <div class="tax-action-plan-grid">
        <div class="tax-action-plan-item">
          <span>${escapeHtml(plan.nowTitle || "Сейчас")}</span>
          ${renderActionText(plan.nowText, plan.nowLines)}
        </div>
        <div class="tax-action-plan-item">
          <span>${escapeHtml(plan.laterTitle || "Потом")}</span>
          ${renderActionText(plan.laterText, plan.laterLines)}
        </div>
      </div>
      ${plan.note ? `<p class="tax-action-plan-note">${escapeHtml(plan.note)}</p>` : ""}
      ${paymentButtonsHtml}
    </section>
  `;
}

function getTaxLoadModalModel(regime, tax, income = 0, monthIndex = new Date().getMonth(), year = new Date().getFullYear()) {
  const opv = Number((tax && tax.opv) || 0);
  const so = Number((tax && tax.so) || 0);
  const opvr = Number((tax && tax.opvr) || 0);
  const vosms = Number((tax && tax.vosms) || 0);
  const ipn = Number((tax && tax.ipn) || 0);
  const socTax = Number((tax && tax.socTax) || 0);
  const payNow = getTaxLoadPayNow(regime, tax);
  const dueDateLabel = getTaxDueDateLabelByMonth(monthIndex, year);
  const periodLabel = `за ${MONTHS_ACCUSATIVE[monthIndex] || "этот месяц"}`;
  const simplifiedIpnRate = Number((tax && tax.ipnRate) || 0) || getActiveSimplifiedIpnRate();

  if (regime === "self") {
    return {
      payNowTitle: `Платить до ${dueDateLabel}`,
      payNowDueDateLabel: dueDateLabel,
      payNowPeriodLabel: periodLabel,
      payNowRows: [
        { label: "ОПВ (1%)", value: opv },
        { label: "ОПВР (1%)", value: opvr },
        { label: "СО (1%, до 7 МЗП)", value: so },
        { label: "ВОСМС (1%)", value: vosms }
      ],
      payNowTotalLabel: "Итого сейчас",
      payNowTotal: payNow,
      payLaterTitle: "",
      payLaterRows: [],
      payLaterNotes: [],
      infoLines: [
        "Самозанятый платит 1% ОПВ, 1% ОПВР, 1% ВОСМС и СО 1% с лимитом до 7 МЗП. ИПН = 0%."
      ]
    };
  }

  if (regime === "simplified") {
    const payNowRows = income <= 0
      ? [
          { label: "ВОСМС (обязательный платёж)", value: vosms }
        ]
      : [
          { label: "ОПВ (10% от базы)", value: opv },
          { label: "СО (5% от базы, до 7 МЗП)", value: so },
          { label: "ОПВР (3.5% от базы, до 50 МЗП)", value: opvr },
          { label: "ВОСМС (5% от 1.4 МЗП)", value: vosms }
        ];

    return {
      payNowTitle: `Платить до ${dueDateLabel}`,
      payNowDueDateLabel: dueDateLabel,
      payNowPeriodLabel: periodLabel,
      payNowRows,
      payNowTotalLabel: "Итого сейчас",
      payNowTotal: payNow,
      payLaterTitle: "Платить в августе (за I полугодие)",
      payLaterRows: [
        { label: `ИПН (${formatRatePercent(simplifiedIpnRate)} от дохода за полугодие)`, value: ipn, suffix: "/мес" }
      ],
      payLaterNotes: [
        `Срок уплаты: до 25 августа ${year}`,
        ...(ipn > 0 ? [`Совет: Откладывайте ~${fmt(ipn)} каждый месяц`] : [])
      ],
      infoLines: income <= 0
        ? [
            `При нулевом доходе обязательный платёж за себя — только ${fmt(vosms)} ВОСМС.`,
            "ОПВ, ОПВР и СО за этот месяц можно не платить."
          ]
        : [
            `${fmt(opv)} (ОПВ) — это ваши деньги. Они копятся на вашем пенсионном счёте, не уходят государству.`,
            `Соц. налог = ${fmt(socTax)} — ИП на упрощёнке освобождены от социального налога.`
          ]
    };
  }

  if (regime === "our" && income <= 0) {
    return {
      payNowTitle: `Платить до ${dueDateLabel}`,
      payNowDueDateLabel: dueDateLabel,
      payNowPeriodLabel: periodLabel,
      payNowRows: [
        { label: "ВОСМС (обязательный платёж)", value: vosms }
      ],
      payNowTotalLabel: "Итого сейчас",
      payNowTotal: payNow,
      payLaterTitle: "",
      payLaterRows: [],
      payLaterNotes: [],
      infoLines: [
        `При нулевом доходе обязательный платёж за себя — только ${fmt(vosms)} ВОСМС.`,
        "ОПВ, ОПВР, СО и СН за этот месяц можно не платить."
      ]
    };
  }

  return {
    payNowTitle: `Платить до ${dueDateLabel}`,
    payNowDueDateLabel: dueDateLabel,
    payNowPeriodLabel: periodLabel,
    payNowRows: [
      { label: "ОПВ (10% от базы)", value: opv },
      { label: "ОПВР (3.5% от базы, до 50 МЗП)", value: opvr },
      { label: "СО (5% от базы, до 7 МЗП)", value: so },
      { label: "ВОСМС (5% от 1.4 МЗП)", value: vosms },
      { label: "СН", value: socTax }
    ],
    payNowTotalLabel: "Итого ежемесячно",
    payNowTotal: payNow,
    payLaterTitle: "Платить по итогам года",
    payLaterRows: [
      { label: "ИПН (10% после вычета 30 МРП)", value: ipn }
    ],
    payLaterNotes: [
      "Срок уплаты: по итогам годовой декларации",
      "Совет: регулярно обновляйте расходы для точного ИПН"
    ],
    infoLines: [
      `${fmt(opv)} (ОПВ) формируют ваши пенсионные накопления.`,
      `СН = ${fmt(socTax)} (2 МРП) — фиксированный платеж для ОУР.`,
      "Храните подтверждённые расходы, чтобы корректно считать налоговую базу ОУР."
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
  const now = new Date();
  const upcomingPaymentSummary = state.page === "dashboard" ? getUpcomingPaymentSummary() : null;
  const useUpcomingPaymentDetails = Boolean(
    upcomingPaymentSummary
    && upcomingPaymentSummary.row
    && upcomingPaymentSummary.breakdown
  );

  let model = getTaxLoadModalModel(state.regime, tax, income, now.getMonth(), now.getFullYear());
  let employeeRows = [];
  let employeesRemittanceTotal = 0;
  let employeesEmployerChargesTotal = 0;
  let totalPayNowAmount = Math.round(model.payNowTotal || 0);
  let opvAmount = Math.round((tax && tax.opv) || 0);
  let modalTitleLabel = "Платить в этом месяце:";

  if (useUpcomingPaymentDetails) {
    const summary = upcomingPaymentSummary;
    const breakdown = summary.breakdown;
    const periodDate = isFno910Deadline(summary.row) ? null : getDeadlinePayrollPeriodDate(summary.row);
    const periodLabel = isFno910Deadline(summary.row)
      ? (breakdown && breakdown.halfYearLabel ? `за ${breakdown.halfYearLabel}` : "")
      : (periodDate ? `за ${MONTHS_ACCUSATIVE[periodDate.getMonth()] || "этот месяц"}` : "");
    const payNowRows = getPaymentBreakdownRowsForDisplay(breakdown, state.regime)
      .filter((row) => String(row.label || "").trim() !== "За сотрудников")
      .map((row) => ({
        label: row.label,
        value: Number(row.value || 0)
      }));

    employeeRows = Array.isArray(breakdown.employeeRows) ? breakdown.employeeRows : [];
    employeesRemittanceTotal = Math.round(summary.employeeRemittanceTotal || 0);
    employeesEmployerChargesTotal = Math.round(summary.employeeEmployerChargesTotal || 0);
    totalPayNowAmount = Math.round(summary.total || 0);
    opvAmount = Math.round(Number(breakdown.opv || 0));
    modalTitleLabel = summary.title ? `${summary.title}:` : "Ближайший платёж:";

    model = {
      payNowTitle: `Платить до ${summary.dueLabel}`,
      payNowDueDateLabel: summary.dueLabel || getNextTaxDueDateLabel(),
      payNowPeriodLabel: periodLabel,
      payNowRows,
      payNowTotalLabel: breakdown.kind === "fno910" ? "Итого к оплате" : "Итого сейчас",
      payNowTotal: Math.round(summary.selfTotal || 0),
      payLaterTitle: "",
      payLaterRows: [],
      payLaterNotes: [],
      infoLines: []
    };
  } else {
    const payrollPeriodDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const employeeSummary = state.regime !== "self"
      ? getEmployeesRemittanceSummaryForPeriod(payrollPeriodDate)
      : { rows: [], remittanceTotal: 0, employerChargesTotal: 0 };
    employeeRows = employeeSummary.rows;
    employeesRemittanceTotal = Math.round(employeeSummary.remittanceTotal || 0);
    employeesEmployerChargesTotal = Math.round(employeeSummary.employerChargesTotal || 0);
    totalPayNowAmount = Math.round(model.payNowTotal || 0) + employeesRemittanceTotal;
  }
  const payNowAmount = Math.round(model.payNowTotal || 0);

  const pensionHighlightHtml = opvAmount > 0
    ? `
      <section class="tax-load-highlight" aria-live="polite">
        <p>${fmt(opvAmount)} из этой суммы — ваши деньги на пенсионном счёте, не уходят государству</p>
      </section>
    `
    : "";
  const isMobileCompact = isMobileViewport();
  const modalCard = els.taxLoadModal.querySelector(".tax-load-modal-card");
  if (modalCard) {
    modalCard.classList.toggle("tax-load-mobile-compact", isMobileCompact);
  }

  els.taxLoadModalTitle.innerHTML = `
    <span class="tax-load-title-label">${escapeHtml(modalTitleLabel)}</span>
    <span class="tax-load-title-amount">${fmt(employeeRows.length > 0 ? totalPayNowAmount : payNowAmount)}</span>
  `;

  const payLaterInnerHtml = model.payLaterTitle
    ? `
      <h4>${escapeHtml(model.payLaterTitle)}</h4>
      ${renderTaxLoadRows(model.payLaterRows)}
      ${model.payLaterNotes.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    `
    : "";

  const infoLines = (model.infoLines || []).filter((line) => {
    const text = String(line || "");
    return !text.includes("(ОПВ)") && !text.includes("Соц. налог =");
  });
  const infoInnerHtml = infoLines.length > 0
    ? `
      <h4>Важно знать</h4>
      ${infoLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    `
    : "";
  const payNowInnerHtml = `
    <h4>${escapeHtml(model.payNowTitle)}</h4>
    <p>${escapeHtml(model.payNowPeriodLabel || "")}</p>
    ${renderTaxLoadRows(model.payNowRows)}
    <div class="tax-load-total">
      <span>${escapeHtml(model.payNowTotalLabel)}</span>
      <strong>${fmt(model.payNowTotal)}</strong>
    </div>
  `;
  const employeePayInnerHtml = employeeRows.length > 0
    ? `
      <h4>Платить за сотрудников до ${escapeHtml(model.payNowDueDateLabel || getNextTaxDueDateLabel())}</h4>
      <p>${escapeHtml(model.payNowPeriodLabel || "")}</p>
      ${employeeRows
        .map((row) => `
          <div class="tax-load-row">
            <span>${escapeHtml(row.name)}</span>
            <strong>${fmt(row.totalRemittance)}</strong>
          </div>
          ${Number(row.employerChargesTotal || 0) > 0 ? `<div class="tax-load-row tax-load-row-sub"><span>Из них расходы работодателя</span><strong>${fmt(row.employerChargesTotal)}</strong></div>` : ""}
        `)
        .join("")}
      <div class="tax-load-total">
        <span>Итого к перечислению за сотрудников</span>
        <strong>${fmt(employeesRemittanceTotal)}</strong>
      </div>
      ${employeesEmployerChargesTotal > 0 ? `<p class="tax-load-subnote">Из них расходы работодателя: ${fmt(employeesEmployerChargesTotal)}.</p>` : ""}
    `
    : "";
  const totalPayNowInnerHtml = employeeRows.length > 0
    ? `
      <div class="tax-load-total tax-load-total-grand">
        <span>Итого всего к уплате</span>
        <strong>${fmt(totalPayNowAmount)}</strong>
      </div>
    `
    : "";

  if (isMobileCompact) {
    const tabs = [
      '<button type="button" class="tax-load-mobile-tab active" data-action="tax-load-mobile-tab" data-tax-load-tab="now" role="tab" aria-selected="true">Сейчас</button>'
    ];
    if (employeePayInnerHtml) {
      tabs.push('<button type="button" class="tax-load-mobile-tab" data-action="tax-load-mobile-tab" data-tax-load-tab="employees" role="tab" aria-selected="false">Сотрудники</button>');
    }
    if (payLaterInnerHtml) {
      tabs.push('<button type="button" class="tax-load-mobile-tab" data-action="tax-load-mobile-tab" data-tax-load-tab="later" role="tab" aria-selected="false">ИПН</button>');
    }
    if (infoInnerHtml) {
      tabs.push('<button type="button" class="tax-load-mobile-tab" data-action="tax-load-mobile-tab" data-tax-load-tab="info" role="tab" aria-selected="false">Важно</button>');
    }

    els.taxLoadModalBody.innerHTML = `
      ${pensionHighlightHtml}
      <div class="tax-load-mobile-tabs" role="tablist" aria-label="Разделы расшифровки">
        ${tabs.join("")}
      </div>
      <div class="tax-load-mobile-panels">
        <section class="tax-load-section tax-load-section-now tax-load-mobile-panel is-active" data-tax-load-panel="now">
          ${payNowInnerHtml}
        </section>
        ${employeePayInnerHtml ? `<section class="tax-load-section tax-load-section-employees tax-load-mobile-panel" data-tax-load-panel="employees">${employeePayInnerHtml}</section>` : ""}
        ${payLaterInnerHtml ? `<section class="tax-load-section tax-load-section-later tax-load-mobile-panel" data-tax-load-panel="later">${payLaterInnerHtml}</section>` : ""}
        ${infoInnerHtml ? `<section class="tax-load-section tax-load-section-info tax-load-mobile-panel" data-tax-load-panel="info">${infoInnerHtml}</section>` : ""}
      </div>
      ${totalPayNowInnerHtml}
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
      ${pensionHighlightHtml}
      ${infoSectionHtml}
      <section class="tax-load-section tax-load-section-now">
        ${payNowInnerHtml}
      </section>
      ${employeePayInnerHtml ? `<section class="tax-load-section tax-load-section-employees">${employeePayInnerHtml}</section>` : ""}
      ${payLaterHtml}
      ${totalPayNowInnerHtml}
    `;
  }

  openModal(els.taxLoadModal);
  trackEvent("open_tax_load_modal", { regime: state.regime, payNow: employeeRows.length > 0 ? totalPayNowAmount : Math.round(model.payNowTotal || 0), total: Math.round(tax.total || 0) });
}

function openDashboardKpiSheet(kpiKey) {
  if (!els.dashboardKpiSheetModal || !els.dashboardKpiSheetTitle || !els.dashboardKpiSheetBody) {
    return;
  }

  const model = dashboardKpiSheetData;
  if (!model) {
    return;
  }

  let title = "Расшифровка";
  let bodyHtml = "";

  if (kpiKey === "income_current") {
    title = "Доход за текущий месяц";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main amount-sensitive">${fmt(model.currentIncome)}</div>
      <div class="kpi-trend ${escapeHtml(model.incomeTrendClass || "flat")}">${escapeHtml(model.incomeTrendText || "Без изменений")}</div>
      <p class="dashboard-kpi-sheet-note">Сумма считается по операциям в журнале доходов за текущий месяц.</p>
    `;
  } else if (kpiKey === "tax_load") {
    title = model.taxLoadTitle || "Заплатить в этом месяце";
    const ipnReserveNote = state.regime === "self"
      ? "Для самозанятого отдельный ИПН не применяется."
      : `ИПН: ${fmt(model.taxLoadIpnReserve || 0)} (откладывать ежемесячно).`;
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main stat-danger amount-sensitive">${fmt(model.taxLoadPayNow || 0)}</div>
      <p class="dashboard-kpi-sheet-note">К уплате до ${escapeHtml(model.taxDueDateLabel || "")}.</p>
      <div class="dashboard-kpi-sheet-list">
        ${(model.taxRows || []).map((row) => `
          <div class="dashboard-kpi-sheet-row">
            <span>${escapeHtml(row.label)}</span>
            <strong class="amount-sensitive">${fmt(row.value || 0)}</strong>
          </div>
        `).join("")}
      </div>
      <p class="dashboard-kpi-sheet-note">${escapeHtml(ipnReserveNote)}</p>
    `;
  } else if (kpiKey === "income_ytd") {
    title = "Доход с начала года";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main amount-sensitive">${fmt(model.totalIncome || 0)}</div>
      <p class="dashboard-kpi-sheet-note">Средний темп: <span class="amount-sensitive">${fmt(model.avgMonthlyIncome || 0)}</span> / мес.</p>
      <p class="dashboard-kpi-sheet-note">Прогноз за год: <span class="amount-sensitive">${fmt(model.annualRunRate || 0)}</span>.</p>
    `;
  } else if (kpiKey === "next_deadline") {
    title = "Ближайший срок";
    bodyHtml = `
      <div class="dashboard-kpi-sheet-main">${escapeHtml(model.nextDeadlineDate || "Нет")}</div>
      <p class="dashboard-kpi-sheet-note">${escapeHtml(model.nextDeadlineTitle || "Все задачи закрыты")}</p>
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
  const doneSet = new Set(normalizeDoneDeadlines(state.doneDeadlines));

  return DEADLINES_2026
    .filter((row) => {
      const dateObj = new Date(row.date);
      const byRegime = isDeadlineApplicableForRegime(row, state.regime);
      const byDate = dateObj >= dayStart;
      const byTracking = isDeadlineInTrackingRange(row.date, row);
      const isDone = doneSet.has(row.id);
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
    { month: currentMonth, day: 10, amount: 190000, category: "Продажи товаров" },
    { month: currentMonth, day: 6, amount: 340000, category: "Комиссии" },
    { month: Math.max(0, currentMonth - 1), day: 22, amount: 260000, category: "Услуги" },
    { month: Math.max(0, currentMonth - 2), day: 14, amount: 180000, category: "Продажи товаров" },
    { month: Math.max(0, currentMonth - 3), day: 8, amount: 220000, category: "Маркетплейс" }
  ];

  return rows.map((row, index) => ({
    id: -(index + 1),
    amount: row.amount,
    date: new Date(year, row.month, row.day).toISOString().slice(0, 10),
    category: row.category,
    comment: "Демо-операция"
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
    return { className: "flat", text: "Без изменений к прошлому месяцу" };
  }

  if (previous <= 0 && current > 0) {
    return {
      className: inverse ? "down" : "up",
      text: inverse ? "Новая налоговая нагрузка" : "Новый поток дохода"
    };
  }

  const pct = Math.max(1, Math.round((Math.abs(delta) / previous) * 100));
  if (delta === 0) {
    return { className: "flat", text: "Без изменений к прошлому месяцу" };
  }

  const sign = delta > 0 ? "+" : "-";
  const good = inverse ? delta < 0 : delta > 0;

  return {
    className: good ? "up" : "down",
    text: `${sign}${pct}% к прошлому месяцу`
  };
}

function getLimitRiskMeta(limitPct, monthsToLimit) {
  if (limitPct === null || limitPct === undefined) {
    return { className: "unknown", label: "Без лимита" };
  }

  if (limitPct >= 90 || (monthsToLimit !== null && monthsToLimit <= 2)) {
    return { className: "high", label: "Высокий риск" };
  }

  if (limitPct >= 70 || (monthsToLimit !== null && monthsToLimit <= 6)) {
    return { className: "medium", label: "Средний риск" };
  }

  return { className: "low", label: "Низкий риск" };
}
function getOnboardingTourStorageKey(page = state.page) {
  return getScopedOnboardingTourStorageKey(page);
}

function getActiveOnboardingTourSteps() {
  if (state.page === "income") {
    if (state.incomeEditId && els.incomeEditModal && !els.incomeEditModal.classList.contains("hidden")) {
      return ONBOARDING_TOUR_INCOME_STEPS.map((step, index) => {
        if (index !== 0) return step;
        return {
          ...step,
          title: "Редактирование операции",
          text: "Редактирование открывается в отдельном поп-апе, чтобы вы не теряли журнал и фильтры на фоне."
        };
      });
    }
    return ONBOARDING_TOUR_INCOME_STEPS;
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
    return localStorage.getItem(getScopedOnboardingTourForceStorageKey()) === "true";
  } catch (_error) {
    return false;
  }
}

function setOnboardingTourForced(enabled) {
  try {
    const key = getScopedOnboardingTourForceStorageKey();
    if (enabled) {
      localStorage.setItem(key, "true");
    } else {
      localStorage.removeItem(key);
    }
  } catch (_error) {
    // ignore storage errors
  }
}

function markOnboardingTourDone(page = state.page) {
  setLocalOnboardingTourDone(page, true);
  void persistOnboardingAccountState({
    tours: {
      [normalizeOnboardingTourPage(page)]: true
    }
  });
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

  if (state.page !== "dashboard" && state.page !== "income") {
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

  return !isOnboardingTourDone("income");
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
  const currentStep = steps[Math.max(0, Math.min(onboardingTourState.step, steps.length - 1))] || null;
  const isLastStep = onboardingTourState.step >= steps.length - 1;
  if (isLastStep) {
    if (currentStep && currentStep.finalAction === "open_income") {
      closeOnboardingTour(true, "complete_open_income");
      navigateToPage("income", "onboarding_tour_cta");
      return;
    }
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
  const actionLabel = step.actionLabel || (isLastStep ? "Начать работу" : "Далее");
  const skipLabel = isMobile ? "Пропустить" : "Пропустить тур";
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
    <article class="onboarding-tour-panel" role="dialog" aria-modal="true" aria-live="polite" aria-label="Знакомство с интерфейсом">
      ${isMobile ? '<div class="onboarding-tour-handle" aria-hidden="true"></div>' : '<div class="onboarding-tour-topbar" aria-hidden="true"></div>'}
      <div class="onboarding-tour-header">
        <span class="onboarding-tour-icon" aria-hidden="true"><i data-lucide="${step.icon}"></i></span>
        <h3>${escapeHtml(step.title)}</h3>
      </div>
      <p class="onboarding-tour-text">${escapeHtml(step.text)}</p>
      <div class="onboarding-tour-footer">
        <div class="onboarding-tour-dots" aria-label="Шаг ${index + 1} из ${steps.length}">${dotsHtml}</div>
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
  const actionEl = event.target && typeof event.target.closest === "function"
    ? event.target.closest("[data-action]")
    : null;
  if (actionEl && actionEl.dataset.action === "go-home" && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    actionEl.click();
    return;
  }

  if (actionEl && actionEl.dataset.action === "open-feature-info" && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    actionEl.click();
    return;
  }

  if (event.key === "Escape" && state.page === "settings") {
    closeSettingsCitySuggestions();
  }

  if (event.key === "Escape" && onboardingTourState.active) {
    event.preventDefault();
    closeOnboardingTour(true, "escape");
    return;
  }

  if (event.key === "Escape" && els.featureInfoModal && !els.featureInfoModal.classList.contains("hidden")) {
    event.preventDefault();
    closeModal(els.featureInfoModal);
    return;
  }

  if (event.key === "Escape" && els.employeeModal && !els.employeeModal.classList.contains("hidden")) {
    event.preventDefault();
    closeModal(els.employeeModal);
    return;
  }

  if (event.key === "Escape" && els.incomeEditModal && !els.incomeEditModal.classList.contains("hidden")) {
    event.preventDefault();
    cancelIncomeEdit();
    return;
  }

  if (event.key === "Escape" && els.regimeHelpModal && !els.regimeHelpModal.classList.contains("hidden")) {
    event.preventDefault();
    closeModal(els.regimeHelpModal);
    return;
  }

  if (event.key === "Escape" && els.regimeConfirmModal && !els.regimeConfirmModal.classList.contains("hidden")) {
    event.preventDefault();
    pendingRegimeChange = null;
    syncRegimeControlsToState();
    closeModal(els.regimeConfirmModal);
    return;
  }

  if (event.key === "Escape" && state.page === "crm" && (state.crmSaleDraftCustomerId || state.crmSalesPanel === "sale" || state.crmSalesPanel === "payment" || state.crmCustomerFormOpen || state.crmCustomerEditId || state.crmSelectedCustomerId)) {
    event.preventDefault();
    if (state.crmSalesPanel === "sale") {
      closeCrmSaleComposer();
    } else if (state.crmSalesPanel === "payment") {
      closeCrmPaymentComposer();
    } else if (state.crmCustomerFormOpen || state.crmCustomerEditId) {
      closeCrmCustomerComposer();
    } else if (state.crmSelectedCustomerId) {
      state.crmSelectedCustomerId = null;
      saveState();
      renderDashboard();
    } else {
      closeCrmQuickSale();
    }
    return;
  }
}
function renderDashboard() {
  const onboardingMode = shouldShowOnboarding();
  const nextViewKey = onboardingMode ? "onboarding" : state.page;
  if (lastRenderedPage !== null && lastRenderedPage !== nextViewKey) {
    scrollAppViewportToTop();
  }

  if (onboardingMode) {
    document.body.classList.add("onboarding-page-active");
    if (els.dashboardApp) {
      els.dashboardApp.classList.add("onboarding-mode");
    }
    if (onboardingTourState.active || getOnboardingTourRoot()) {
      closeOnboardingTour(false, "onboarding_flow");
    }

    lastRenderedPage = "onboarding";
    els.pageTitle.textContent = "Быстрый старт";
    renderSidebarActive();
    els.accountName.textContent = getProfileDisplayName();
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

  syncSelectedRegimeAvailability();

  if (state.page === "employees" && !canAccessEmployeesSection()) {
    state.page = "dashboard";
    saveState();
  }

  if (state.page === "crm" && !state.isLoggedIn) {
    state.page = "dashboard";
    saveState();
  }

  els.pageTitle.textContent = PAGE_TITLES[state.page] || PAGE_TITLES.dashboard;
  renderSidebarActive();
  syncRegimeControlsToState();
  els.accountName.textContent = getProfileDisplayName();
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
    const enteringIncomePage = lastRenderedPage !== "income";
    if (enteringIncomePage) {
      const currentIncomeMonthKey = formatDashboardMonthKey(new Date());
      if (state.incomeSelectedMonth !== currentIncomeMonthKey) {
        state.incomeSelectedMonth = currentIncomeMonthKey;
        saveState();
      }
    }
    lastRenderedPage = "income";
    renderIncomePage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "employees") {
    const enteringEmployeesPage = lastRenderedPage !== "employees";
    if (enteringEmployeesPage && state.employeesView !== "active") {
      state.employeesView = "active";
      saveState();
    }
    lastRenderedPage = "employees";
    renderEmployeesPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "crm") {
    lastRenderedPage = "crm";
    renderCrmPage();
    updateAmountsVisibilityUi();
    return;
  }

  if (state.page === "reports") {
    lastRenderedPage = "reports";
    renderReportsPage();
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

  if (state.page === "assistant") {
    lastRenderedPage = "assistant";
    renderAssistantPage();
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

function calcEmployeeTaxes(salary, employee = {}) {
  const safeSalary = Math.max(0, normalizeIncome(salary));
  const safeEmployee = employee && typeof employee === "object"
    ? employee
    : {
      contractType: employee,
      isResident: arguments.length >= 3 ? arguments[2] : true
    };
  const safeContractType = String(safeEmployee.contractType || "").trim() === "gph" ? "gph" : "labor";
  const resident = !(safeEmployee.isResident === false || safeEmployee.isResident === "false" || safeEmployee.isResident === 0);
  const isEaeuCitizen = safeEmployee.isEaeuCitizen === true || safeEmployee.isEaeuCitizen === "true" || safeEmployee.is_eaeu_citizen === true || safeEmployee.is_eaeu_citizen === "true";
  const hasResidencePermit = safeEmployee.hasResidencePermit === true || safeEmployee.hasResidencePermit === "true" || safeEmployee.has_residence_permit === true || safeEmployee.has_residence_permit === "true" || safeEmployee.hasPermanentResidence === true || safeEmployee.hasPermanentResidence === "true" || safeEmployee.has_permanent_residence === true || safeEmployee.has_permanent_residence === "true";
  const hasResidentLikeSocialRights = !resident && (isEaeuCitizen || hasResidencePermit);
  const isPensioner = Boolean(safeEmployee.isPensioner);
  const hasDisabilityExemption = Boolean(safeEmployee.hasDisabilityExemption);
  const opvByApplication = Boolean(safeEmployee.opvByApplication);
  const applyStandardDeduction = !(
    safeEmployee.applyStandardDeduction === false
    || safeEmployee.applyStandardDeduction === "false"
    || safeEmployee.apply_standard_deduction === false
    || safeEmployee.apply_standard_deduction === "false"
    || safeEmployee.useStandardDeduction === false
    || safeEmployee.useStandardDeduction === "false"
    || safeEmployee.use_standard_deduction === false
    || safeEmployee.use_standard_deduction === "false"
  );
  const standardDeduction = applyStandardDeduction ? VYCHET_30MRP : 0;
  const isExemptFromOpv = isPensioner || (hasDisabilityExemption && !opvByApplication);
  const isExemptFromMedical = isPensioner || hasDisabilityExemption;
  const isExemptFromSocialInsurance = isPensioner;
  const isExemptFromOpvr = isPensioner || hasDisabilityExemption || isEmployeeExemptFromOpvrByBirthDate(safeEmployee);

  if (safeSalary <= 0) {
    return {
      opv: 0,
      ipn: 0,
      vosms: 0,
      opvr: 0,
      so: 0,
      oosms: 0,
      socialTaxEmployee: 0,
      totalDeductions: 0,
      employeeWithholdingsTotal: 0,
      employeeEmployerChargesTotal: 0,
      employeeTotalRemittance: 0,
      netSalary: 0,
      employerExtraCost: 0,
      totalEmployerSpend: 0
    };
  }

  if (!resident) {
    // Нерезидент:
    // - по трудовому договору ИПН удерживается как 10% от дохода без налоговых вычетов;
    // - по ГПХ сохраняем ставку 20%.
    // Если есть ВНЖ / ПМЖ в РК или статус трудящегося ЕАЭС,
    // соцплатежи считаем по тем же базовым правилам, что и у работников РК.
    const opv = hasResidentLikeSocialRights && !isExemptFromOpv
      ? Math.round(Math.min(safeSalary * OPV_RATE, OPV_MAX_AMOUNT))
      : 0;
    const soBase = Math.max(0, safeSalary - opv);
    const so = hasResidentLikeSocialRights && !isExemptFromSocialInsurance
      ? Math.round(Math.min(Math.max(soBase, EMPLOYEE_SO_MIN_BASE), EMPLOYEE_SO_MAX_BASE) * SO_RATE)
      : 0;
    const vosms = hasResidentLikeSocialRights && !isExemptFromMedical
      ? Math.round(Math.min(safeSalary * EMPLOYEE_VOSMS_RATE, EMPLOYEE_VOSMS_MAX_AMOUNT))
      : 0;
    const ipnRate = safeContractType === "labor" ? EMPLOYEE_IPN_RATE : 0.20;
    const ipn = Math.round(safeSalary * ipnRate);
    const totalDeductions = opv + vosms + ipn;
    const employeeWithholdingsTotal = totalDeductions;
    const netSalary = Math.max(0, safeSalary - totalDeductions);

    if (safeContractType === "gph") {
      const employerExtraCost = so;
      const employeeEmployerChargesTotal = employerExtraCost;
      const employeeTotalRemittance = employeeWithholdingsTotal + employeeEmployerChargesTotal;
      return {
        opv,
        ipn,
        vosms,
        opvr: 0,
        so,
        oosms: 0,
        socialTaxEmployee: 0,
        totalDeductions,
        employeeWithholdingsTotal,
        employeeEmployerChargesTotal,
        employeeTotalRemittance,
        netSalary,
        employerExtraCost,
        totalEmployerSpend: safeSalary + employerExtraCost
      };
    }

    const opvr = hasResidentLikeSocialRights && !isExemptFromOpvr
      ? Math.round(Math.min(safeSalary * OPVR_RATE, EMPLOYEE_OPVR_MAX_AMOUNT))
      : 0;
    const oosms = hasResidentLikeSocialRights && !isExemptFromMedical
      ? Math.round(Math.min(safeSalary * EMPLOYEE_OOSMS_RATE, EMPLOYEE_OOSMS_MAX_AMOUNT))
      : 0;
    const employerExtraCost = opvr + so + oosms;
    const employeeEmployerChargesTotal = employerExtraCost;
    const employeeTotalRemittance = employeeWithholdingsTotal + employeeEmployerChargesTotal;
    return {
      opv,
      ipn,
      vosms,
      opvr,
      so,
      oosms,
      socialTaxEmployee: 0,
      totalDeductions,
      employeeWithholdingsTotal,
      employeeEmployerChargesTotal,
      employeeTotalRemittance,
      netSalary,
      employerExtraCost,
      totalEmployerSpend: safeSalary + employerExtraCost
    };
  }

  const opvBaseAmount = Math.round(Math.min(safeSalary * OPV_RATE, OPV_MAX_AMOUNT));
  const opv = isExemptFromOpv ? 0 : opvBaseAmount;
  const soBase = Math.max(0, safeSalary - opv);
  const so = isExemptFromSocialInsurance ? 0 : Math.round(Math.min(Math.max(soBase, EMPLOYEE_SO_MIN_BASE), EMPLOYEE_SO_MAX_BASE) * SO_RATE);
  const vosms = isExemptFromMedical ? 0 : Math.round(Math.min(safeSalary * EMPLOYEE_VOSMS_RATE, EMPLOYEE_VOSMS_MAX_AMOUNT));

  if (safeContractType === "gph") {
    // ГПХ + Резидент: по ИПН база уменьшается на соцвычеты (ОПВ, ВОСМС, СО по ГПХ)
    // и стандартный вычет 30 МРП, если он применяется у этого налогового агента.
    const ipnBase = Math.max(0, safeSalary - opv - vosms - so - standardDeduction);
    const ipn = Math.round(ipnBase * 0.10);
    const totalDeductions = opv + vosms + ipn;
    const employeeWithholdingsTotal = totalDeductions;
    const netSalary = Math.max(0, safeSalary - totalDeductions);
    const employerExtraCost = so;
    const employeeEmployerChargesTotal = employerExtraCost;
    const employeeTotalRemittance = employeeWithholdingsTotal + employeeEmployerChargesTotal;
    return {
      opv,
      ipn,
      vosms,
      opvr: 0,
      so,
      oosms: 0,
      socialTaxEmployee: 0,
      totalDeductions,
      employeeWithholdingsTotal,
      employeeEmployerChargesTotal,
      employeeTotalRemittance,
      netSalary,
      employerExtraCost,
      totalEmployerSpend: safeSalary + employerExtraCost
    };
  }

  // Трудовой договор + Резидент: 2026 правила для работника РК.
  // Из зарплаты удерживаются только ОПВ, ВОСМС и ИПН с вычетом 30 МРП.
  // ОПВР, СО и ООСМС оплачиваются работодателем отдельно.
  const laborOpv = opv;
  const laborVosms = vosms;
  const ipnBase = Math.max(0, safeSalary - laborOpv - laborVosms - standardDeduction);
  const ipn = Math.round(ipnBase * EMPLOYEE_IPN_RATE);
  const opvr = isExemptFromOpvr ? 0 : Math.round(Math.min(safeSalary * OPVR_RATE, EMPLOYEE_OPVR_MAX_AMOUNT));
  const laborSo = so;
  const oosms = isExemptFromMedical ? 0 : Math.round(Math.min(safeSalary * EMPLOYEE_OOSMS_RATE, EMPLOYEE_OOSMS_MAX_AMOUNT));
  const totalDeductions = laborOpv + laborVosms + ipn;
  const employeeWithholdingsTotal = totalDeductions;
  const netSalary = Math.max(0, safeSalary - totalDeductions);
  const employerExtraCost = opvr + laborSo + oosms;
  const employeeEmployerChargesTotal = employerExtraCost;
  const employeeTotalRemittance = employeeWithholdingsTotal + employeeEmployerChargesTotal;

  return {
    opv: laborOpv,
    ipn,
    vosms: laborVosms,
    opvr,
    so: laborSo,
    oosms,
    socialTaxEmployee: 0,
    totalDeductions,
    employeeWithholdingsTotal,
    employeeEmployerChargesTotal,
    employeeTotalRemittance,
    netSalary,
    employerExtraCost,
    totalEmployerSpend: safeSalary + employerExtraCost
  };
}

function getEmployeeSocialTaxForPeriod(employee, periodDate = new Date(), regime = state.taxRegime || state.regime) {
  const safeEmployee = employee && typeof employee === "object" ? employee : {};
  const safeRegime = normalizeTaxRegimeForProfile(regime);
  const contractType = String(safeEmployee.contractType || "").trim() === "gph" ? "gph" : "labor";
  const periodStart = normalizePayrollPeriodDate(periodDate);
  if (safeRegime !== "our" || contractType !== "labor") {
    return 0;
  }
  if (periodStart && !isEmployeeActiveForPayrollPeriod(safeEmployee, periodStart)) {
    return 0;
  }
  return OUR_EMPLOYEE_SOC_TAX;
}

function getEmployeeContractLabel(contractType) {
  return String(contractType || "").trim() === "gph" ? "ГПХ" : "Трудовой договор";
}

function getEmployeeContractShortLabel(contractType) {
  return String(contractType || "").trim() === "gph" ? "ГПХ" : "Трудовой";
}

function getEmployeeSpecialCaseLabels(employee) {
  if (!employee || typeof employee !== "object") {
    return [];
  }

  const labels = [];
  const isResident = !(employee.isResident === false || employee.isResident === "false" || employee.isResident === 0);
  const isEaeuCitizen = employee.isEaeuCitizen === true || employee.isEaeuCitizen === "true" || employee.is_eaeu_citizen === true || employee.is_eaeu_citizen === "true";
  const hasResidencePermit = employee.hasResidencePermit === true || employee.hasResidencePermit === "true" || employee.has_residence_permit === true || employee.has_residence_permit === "true" || employee.hasPermanentResidence === true || employee.hasPermanentResidence === "true" || employee.has_permanent_residence === true || employee.has_permanent_residence === "true";
  if (!isResident && isEaeuCitizen) {
    labels.push("ЕАЭС");
  }
  if (!isResident && hasResidencePermit) {
    labels.push("ВНЖ / ПМЖ в РК");
  }
  if (employee.isPensioner) {
    labels.push("Пенсионер");
  }
  if (employee.hasDisabilityExemption) {
    labels.push("Инвалидность I/II бессрочно");
  }
  if (employee.opvByApplication) {
    labels.push("ОПВ по заявлению");
  }
  if (employee.applyStandardDeduction === false || employee.applyStandardDeduction === "false" || employee.apply_standard_deduction === false || employee.apply_standard_deduction === "false") {
    labels.push("Без вычета ИПН");
  }
  return labels;
}

function getQuarterEmployeeChecklistLabelMeta(employee, nameCounts = {}) {
  const primary = String(employee && employee.name || "").trim();
  const duplicateCount = primary ? Number(nameCounts[primary] || 0) : 0;
  if (!primary) {
    return { primary: "Сотрудник", secondary: "" };
  }

  if (duplicateCount <= 1) {
    return { primary, secondary: "" };
  }

  const details = [];
  const contractLabel = getEmployeeContractShortLabel(employee && employee.contractType);
  if (contractLabel) {
    details.push(contractLabel);
  }

  const currentSalary = Math.max(0, normalizeIncome(employee && employee.currentSalary));
  if (currentSalary > 0) {
    details.push(fmt(currentSalary));
  }

  const startDateLabel = formatEmployeeDateLabel(getEmployeeStartDateValue(employee));
  if (startDateLabel) {
    details.push(`с ${String(startDateLabel).toLowerCase()}`);
  }

  if (!details.length && Number(employee && employee.id)) {
    details.push(`ID ${Number(employee.id)}`);
  }

  return {
    primary,
    secondary: details.join(" • ")
  };
}

// Единый helper для расходов работодателя по сотруднику.
function getEmployeeEmployerCost(employee, periodDate = new Date()) {
  if (!employee || typeof employee !== "object") {
    return 0;
  }

  const tax = getEmployeePayrollSnapshot(employee, periodDate);
  return Math.max(0, Number(tax.employerExtraCost || 0));
}

function getEmployeesCountLabel(count) {
  const safeCount = Math.max(0, Number(count) || 0);
  const mod10 = safeCount % 10;
  const mod100 = safeCount % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${safeCount} сотрудник`;
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${safeCount} сотрудника`;
  }
  return `${safeCount} сотрудников`;
}

function getChangesCountLabel(count) {
  const safeCount = Math.max(0, Number(count) || 0);
  const mod10 = safeCount % 10;
  const mod100 = safeCount % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${safeCount} изменение`;
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${safeCount} изменения`;
  }
  return `${safeCount} изменений`;
}

function getAccrualsCountLabel(count) {
  const safeCount = Math.max(0, Number(count) || 0);
  const mod10 = safeCount % 10;
  const mod100 = safeCount % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${safeCount} начисление`;
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${safeCount} начисления`;
  }
  return `${safeCount} начислений`;
}

function createEmployeeSalaryChangeDraftRow(month = "", salary = MZP_2026) {
  employeeSalaryChangeRowSeed += 1;
  return {
    uid: `salary-change-${employeeSalaryChangeRowSeed}`,
    month: String(month || "").trim()
      ? normalizeEmployeeStartMonth(month, formatDashboardMonthKey(new Date()))
      : "",
    salary: normalizeIncome(salary) || 0
  };
}

function readEmployeeSalaryChangeDraftFromDom() {
  if (!els.employeeSalaryHistoryList) {
    return employeeSalaryChangeDraft.slice();
  }

  const rows = Array.from(els.employeeSalaryHistoryList.querySelectorAll("[data-employee-salary-change-row]"))
    .map((row) => {
      const uid = String(row.getAttribute("data-row-id") || "").trim() || createEmployeeSalaryChangeDraftRow().uid;
      const monthInput = row.querySelector('input[name="salaryHistoryMonth[]"]');
      const salaryInput = row.querySelector('input[name="salaryHistorySalary[]"]');
      return {
        uid,
        month: normalizeEmployeeStartMonth(monthInput && monthInput.value, ""),
        salary: normalizeIncome(salaryInput && salaryInput.value)
      };
    })

  employeeSalaryChangeDraft = rows;
  return rows.slice();
}

function setEmployeeSalaryChangeDraft(rows) {
  employeeSalaryChangeDraft = (Array.isArray(rows) ? rows : [])
    .map((row) => createEmployeeSalaryChangeDraftRow(row.month, row.salary));
  renderEmployeeSalaryChangeDraft();
}

function createEmployeeMonthlyAccrualDraftRow(month = "", amount = MZP_2026) {
  employeeMonthlyAccrualRowSeed += 1;
  return {
    uid: `monthly-accrual-${employeeMonthlyAccrualRowSeed}`,
    month: String(month || "").trim()
      ? normalizeEmployeeStartMonth(month, formatDashboardMonthKey(new Date()))
      : "",
    amount: normalizeIncome(amount) || 0
  };
}

function readEmployeeMonthlyAccrualDraftFromDom() {
  if (!els.employeeMonthlyAccrualsList) {
    return employeeMonthlyAccrualDraft.slice();
  }

  const rows = Array.from(els.employeeMonthlyAccrualsList.querySelectorAll("[data-employee-monthly-accrual-row]"))
    .map((row) => {
      const uid = String(row.getAttribute("data-row-id") || "").trim() || createEmployeeMonthlyAccrualDraftRow().uid;
      const monthInput = row.querySelector('input[name="monthlyAccrualMonth[]"]');
      const amountInput = row.querySelector('input[name="monthlyAccrualAmount[]"]');
      return {
        uid,
        month: normalizeEmployeeStartMonth(monthInput && monthInput.value, ""),
        amount: normalizeIncome(amountInput && amountInput.value)
      };
    });

  employeeMonthlyAccrualDraft = rows;
  return rows.slice();
}

function setEmployeeMonthlyAccrualDraft(rows) {
  employeeMonthlyAccrualDraft = (Array.isArray(rows) ? rows : [])
    .map((row) => createEmployeeMonthlyAccrualDraftRow(row.month, row.amount));
  renderEmployeeMonthlyAccrualDraft();
}

function renderEmployeeSalaryChangeDraft() {
  if (!els.employeeSalaryHistoryList) {
    return;
  }

  if (employeeSalaryChangeDraft.length === 0) {
    els.employeeSalaryHistoryList.innerHTML = `
      <div class="employee-salary-history-empty">
        Пока без изменений. Добавьте месяц и новую сумму.
      </div>
    `;
    return;
  }

  els.employeeSalaryHistoryList.innerHTML = employeeSalaryChangeDraft
    .map((row, index) => `
      <div class="employee-salary-history-row" data-employee-salary-change-row data-row-id="${escapeHtml(row.uid)}">
        <label class="field-label">
          <span>С месяца</span>
          <input type="month" name="salaryHistoryMonth[]" value="${escapeHtml(row.month)}" required />
        </label>
        <label class="field-label">
          <span>Новый оклад</span>
          <input type="text" name="salaryHistorySalary[]" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${row.salary > 0 ? formatPlainAmount(row.salary) : ""}" required />
        </label>
        <button type="button" class="btn btn-ghost btn-xs employee-salary-history-remove" data-action="remove-employee-salary-change" data-row-id="${escapeHtml(row.uid)}">Убрать</button>
      </div>
    `)
    .join("");
}

function renderEmployeeMonthlyAccrualDraft() {
  if (!els.employeeMonthlyAccrualsList) {
    return;
  }

  if (employeeMonthlyAccrualDraft.length === 0) {
    els.employeeMonthlyAccrualsList.innerHTML = `
      <div class="employee-salary-history-empty">
        Пока без начислений по месяцам. Добавьте месяц и фактическую сумму.
      </div>
    `;
    return;
  }

  els.employeeMonthlyAccrualsList.innerHTML = employeeMonthlyAccrualDraft
    .map((row) => `
      <div class="employee-salary-history-row" data-employee-monthly-accrual-row data-row-id="${escapeHtml(row.uid)}">
        <label class="field-label">
          <span>За месяц</span>
          <input type="month" name="monthlyAccrualMonth[]" value="${escapeHtml(row.month)}" required />
        </label>
        <label class="field-label">
          <span>Начислено</span>
          <input type="text" name="monthlyAccrualAmount[]" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${row.amount > 0 ? formatPlainAmount(row.amount) : ""}" required />
        </label>
        <button type="button" class="btn btn-ghost btn-xs employee-salary-history-remove" data-action="remove-employee-monthly-accrual" data-row-id="${escapeHtml(row.uid)}">Убрать</button>
      </div>
    `)
    .join("");
}

function getEmployeeBaseSalary(employee) {
  const history = getEmployeeSalaryHistoryEntries(employee);
  if (history.length > 0) {
    return normalizeIncome(history[0].salary);
  }
  return normalizeIncome(employee && employee.salary);
}

function getEmployeeAdditionalSalaryChanges(employee) {
  return getEmployeeSalaryHistoryEntries(employee).slice(1);
}

function syncEmployeeNonresidentFieldsVisibility() {
  if (!els.employeeForm || !els.employeeNonresidentFields) {
    return;
  }

  const selectedResident = els.employeeForm.querySelector('input[name="isResident"]:checked');
  const isResident = !(selectedResident instanceof HTMLInputElement) || String(selectedResident.value || "yes").trim() !== "no";

  els.employeeNonresidentFields.hidden = isResident;
  els.employeeNonresidentFields.style.display = isResident ? "none" : "";

  if (!isResident && els.employeeSpecialCasesDetails) {
    els.employeeSpecialCasesDetails.open = true;
  }
}

function updateEmployeeIinHelper() {
  if (!els.employeeIinHelper) {
    return;
  }

  const iin = normalizeEmployeeIin(els.employeeIinInput && els.employeeIinInput.value);
  if (els.employeeIinInput && els.employeeIinInput.value !== iin) {
    els.employeeIinInput.value = iin;
  }

  els.employeeIinHelper.classList.remove("is-success", "is-error");

  if (!iin) {
    els.employeeIinHelper.textContent = "Если укажете ИИН, мы автоматически определим дату рождения.";
    return;
  }

  if (iin.length < 12) {
    els.employeeIinHelper.textContent = "Введите 12 цифр ИИН, если хотите заполнить поле.";
    return;
  }

  const birthDate = getEmployeeBirthDateFromIin(iin);
  if (!birthDate) {
    els.employeeIinHelper.textContent = "Проверьте ИИН: не удалось определить дату рождения.";
    els.employeeIinHelper.classList.add("is-error");
    return;
  }

  const retirementHint = isEmployeeAtRetirementAgeByIin(iin)
    ? " По возрасту сотрудник может быть пенсионером — проверьте особые случаи."
    : "";
  els.employeeIinHelper.textContent = `Дата рождения определена по ИИН: ${formatEmployeeBirthDateLabel(birthDate)}.${retirementHint}`;
  els.employeeIinHelper.classList.add("is-success");

  if (retirementHint && els.employeeSpecialCasesDetails) {
    els.employeeSpecialCasesDetails.open = true;
  }
}

function buildEmployeeSalaryHistory(startMonth, baseSalary, endMonth = "") {
  const extraChanges = readEmployeeSalaryChangeDraftFromDom();
  return normalizeEmployeeSalaryHistory(
    [{ month: startMonth, salary: baseSalary }, ...extraChanges],
    startMonth,
    baseSalary,
    endMonth
  );
}

function openEmployeeModal(employeeId = null, options = {}) {
  if (!els.employeeModal || !els.employeeForm) {
    return;
  }

  const employees = normalizeEmployeeEntries(state.employees);
  state.employees = employees;
  const editingEmployee = Number(employeeId || 0) > 0
    ? employees.find((employee) => Number(employee.id || 0) === Number(employeeId))
    : null;

  els.employeeForm.reset();
  if (els.employeeEditIdInput) {
    els.employeeEditIdInput.value = editingEmployee ? String(editingEmployee.id) : "";
  }
  if (els.employeeModalTitle) {
    els.employeeModalTitle.textContent = editingEmployee ? "Редактировать сотрудника" : "Добавить сотрудника";
  }
  if (els.employeeSubmitBtn) {
    els.employeeSubmitBtn.textContent = editingEmployee ? "Сохранить" : "Добавить";
  }
  if (els.employeeSalaryInput) {
    els.employeeSalaryInput.value = formatPlainAmount(editingEmployee ? getEmployeeBaseSalary(editingEmployee) : MZP_2026);
  }
  if (els.employeeStartMonthInput) {
    els.employeeStartMonthInput.value = editingEmployee
      ? getEmployeeStartDateValue(editingEmployee)
      : getEmployeeStartDateFallback();
  }
  if (els.employeeEndMonthInput) {
    els.employeeEndMonthInput.value = editingEmployee
      ? getEmployeeEndDateValue(editingEmployee)
      : "";
  }
  if (els.employeeNameInput) {
    els.employeeNameInput.value = editingEmployee ? editingEmployee.name : "";
  }
  if (els.employeeIinInput) {
    els.employeeIinInput.value = editingEmployee ? normalizeEmployeeIin(editingEmployee.iin) : "";
  }
  const defaultContract = els.employeeForm.querySelector('input[name="contractType"][value="labor"]');
  const defaultResident = els.employeeForm.querySelector('input[name="isResident"][value="yes"]');
  const defaultEaeuCitizen = els.employeeForm.querySelector('input[name="isEaeuCitizen"][value="no"]');
  const defaultResidencePermit = els.employeeForm.querySelector('input[name="hasResidencePermit"][value="no"]');
  const defaultPensioner = els.employeeForm.querySelector('input[name="isPensioner"][value="no"]');
  const defaultDisability = els.employeeForm.querySelector('input[name="hasDisabilityExemption"][value="no"]');
  const defaultOpvByApplication = els.employeeForm.querySelector('input[name="opvByApplication"][value="no"]');
  const defaultApplyStandardDeduction = els.employeeForm.querySelector('input[name="applyStandardDeduction"][value="yes"]');
  const selectedContract = els.employeeForm.querySelector(`input[name="contractType"][value="${editingEmployee ? editingEmployee.contractType : "labor"}"]`);
  const selectedResident = els.employeeForm.querySelector(`input[name="isResident"][value="${editingEmployee && !editingEmployee.isResident ? "no" : "yes"}"]`);
  const selectedEaeuCitizen = els.employeeForm.querySelector(`input[name="isEaeuCitizen"][value="${editingEmployee && editingEmployee.isEaeuCitizen ? "yes" : "no"}"]`);
  const selectedResidencePermit = els.employeeForm.querySelector(`input[name="hasResidencePermit"][value="${editingEmployee && editingEmployee.hasResidencePermit ? "yes" : "no"}"]`);
  const selectedPensioner = els.employeeForm.querySelector(`input[name="isPensioner"][value="${editingEmployee && editingEmployee.isPensioner ? "yes" : "no"}"]`);
  const selectedDisability = els.employeeForm.querySelector(`input[name="hasDisabilityExemption"][value="${editingEmployee && editingEmployee.hasDisabilityExemption ? "yes" : "no"}"]`);
  const selectedOpvByApplication = els.employeeForm.querySelector(`input[name="opvByApplication"][value="${editingEmployee && editingEmployee.opvByApplication ? "yes" : "no"}"]`);
  const selectedApplyStandardDeduction = els.employeeForm.querySelector(`input[name="applyStandardDeduction"][value="${editingEmployee && editingEmployee.applyStandardDeduction === false ? "no" : "yes"}"]`);
  if (defaultContract instanceof HTMLInputElement) {
    defaultContract.checked = !editingEmployee;
  }
  if (defaultResident instanceof HTMLInputElement) {
    defaultResident.checked = !editingEmployee;
  }
  if (defaultEaeuCitizen instanceof HTMLInputElement) {
    defaultEaeuCitizen.checked = !editingEmployee;
  }
  if (defaultResidencePermit instanceof HTMLInputElement) {
    defaultResidencePermit.checked = !editingEmployee;
  }
  if (defaultPensioner instanceof HTMLInputElement) {
    defaultPensioner.checked = !editingEmployee;
  }
  if (defaultDisability instanceof HTMLInputElement) {
    defaultDisability.checked = !editingEmployee;
  }
  if (defaultOpvByApplication instanceof HTMLInputElement) {
    defaultOpvByApplication.checked = !editingEmployee;
  }
  if (defaultApplyStandardDeduction instanceof HTMLInputElement) {
    defaultApplyStandardDeduction.checked = !editingEmployee;
  }
  if (selectedContract instanceof HTMLInputElement) {
    selectedContract.checked = true;
  }
  if (selectedResident instanceof HTMLInputElement) {
    selectedResident.checked = true;
  }
  if (selectedEaeuCitizen instanceof HTMLInputElement) {
    selectedEaeuCitizen.checked = true;
  }
  if (selectedResidencePermit instanceof HTMLInputElement) {
    selectedResidencePermit.checked = true;
  }
  if (selectedPensioner instanceof HTMLInputElement) {
    selectedPensioner.checked = true;
  }
  if (selectedDisability instanceof HTMLInputElement) {
    selectedDisability.checked = true;
  }
  if (selectedOpvByApplication instanceof HTMLInputElement) {
    selectedOpvByApplication.checked = true;
  }
  if (selectedApplyStandardDeduction instanceof HTMLInputElement) {
    selectedApplyStandardDeduction.checked = true;
  }
  setEmployeeSalaryChangeDraft(editingEmployee ? getEmployeeAdditionalSalaryChanges(editingEmployee) : []);
  setEmployeeMonthlyAccrualDraft(editingEmployee ? getEmployeeMonthlyAccrualEntries(editingEmployee) : []);
  if (els.employeeMonthlyAccrualsDetails) {
    els.employeeMonthlyAccrualsDetails.hidden = !editingEmployee;
    els.employeeMonthlyAccrualsDetails.style.display = editingEmployee ? "" : "none";
    els.employeeMonthlyAccrualsDetails.open = Boolean(
      editingEmployee && (
        options.openMonthlyAccruals
        || getEmployeeMonthlyAccrualEntries(editingEmployee).length > 0
      )
    );
  }
  if (els.employeeSpecialCasesDetails) {
    els.employeeSpecialCasesDetails.open = Boolean(
      editingEmployee && (
        options.openSpecialCases
        || !editingEmployee.isResident
        || editingEmployee.isEaeuCitizen
        || editingEmployee.hasResidencePermit
        || editingEmployee.isPensioner
        || editingEmployee.hasDisabilityExemption
        || editingEmployee.opvByApplication
        || editingEmployee.applyStandardDeduction === false
      )
    );
  }
  syncEmployeeNonresidentFieldsVisibility();
  updateEmployeeIinHelper();

  openModal(els.employeeModal);
  window.setTimeout(() => {
    if (options.focusField === "iin") {
      els.employeeIinInput?.focus();
      return;
    }

    if (options.focusField === "monthlyAccrual" && editingEmployee) {
      const addAccrualBtn = els.employeeModal.querySelector('[data-action="add-employee-monthly-accrual"]');
      if (addAccrualBtn instanceof HTMLButtonElement) {
        addAccrualBtn.focus();
        return;
      }
    }

    if (options.focusField === "endDate") {
      els.employeeEndMonthInput?.focus();
      return;
    }

    els.employeeNameInput?.focus();
  }, 40);
}

function renderEmployeesPage() {
  if (state.regime === "self") {
    els.pageContent.innerHTML = `
      <div class="page-employees">
        <div class="page-header employees-page-header">
          <h1>Сотрудники</h1>
        </div>
        <div class="employees-empty card">
          <p>Самозанятые не могут иметь сотрудников. Если у вас появятся сотрудники — перейдите на режим Упрощёнка или ОУР.</p>
          <button type="button" class="btn btn-primary" data-page="settings">Сменить режим</button>
        </div>
      </div>
    `;
    return;
  }

  const employees = normalizeEmployeeEntries(state.employees);
  state.employees = employees;
  state.employeesView = normalizeEmployeesView(state.employeesView);

  const activeEmployees = employees.filter((employee) => !employee.archived);
  const archivedEmployees = employees.filter((employee) => employee.archived);
  const reviewEmployees = activeEmployees
    .filter((employee) => hasEmployeeCompletenessIssues(employee))
    .sort(compareEmployeesForReview);
  const visibleEmployees = state.employeesView === "archive"
    ? archivedEmployees
    : state.employeesView === "review"
      ? reviewEmployees
      : activeEmployees;
  const currentMonthDate = normalizePayrollPeriodDate(new Date()) || new Date();
  const visibleModels = visibleEmployees.map((employee) => {
    const referencePeriod = getEmployeeCardReferencePeriod(employee, state.employeesView);
    return {
      employee,
      referencePeriod,
      snapshot: getEmployeePayrollSnapshot(employee, referencePeriod),
      status: getEmployeeStatusMeta(employee, currentMonthDate),
      salaryHistory: getEmployeeSalaryHistoryEntries(employee)
    };
  });

  const totals = visibleModels.reduce((acc, model) => ({
    fot: acc.fot + Number(model.snapshot.salary || 0),
    net: acc.net + Number(model.snapshot.netSalary || 0),
    employer: acc.employer + Number(model.snapshot.employerExtraCost || 0),
    totalSpend: acc.totalSpend + Number(model.snapshot.totalEmployerSpend || 0)
  }), { fot: 0, net: 0, employer: 0, totalSpend: 0 });

  const hasEmployees = employees.length > 0;
  const hasVisibleEmployees = visibleModels.length > 0;
  const cardsHtml = visibleModels
    .map((model) => {
      const { employee, snapshot, referencePeriod, status, salaryHistory } = model;
      const monthlyAccruals = getEmployeeMonthlyAccrualEntries(employee);
      const salaryChangesCount = Math.max(0, salaryHistory.length - 1);
      const monthlyAccrualsCount = monthlyAccruals.length;
      const specialCaseLabels = getEmployeeSpecialCaseLabels(employee);
      const hasValidIin = hasValidEmployeeIin(employee);
      const completeness = getEmployeeCompletenessMeta(employee);
      const employeeStartDateLabel = formatEmployeeDateLabel(getEmployeeStartDateValue(employee));
      const employeeEndDateLabel = formatEmployeeDateLabel(getEmployeeEndDateValue(employee));
      const showEndMonthChip = Boolean(employee.endDate || employee.endMonth) && String(status.key || "") !== "dismissed";
      const nextPayrollMonthLabel = employee.endMonth
        ? formatEmployeeStartMonthLabel(shiftDashboardMonthKey(employee.endMonth, 1))
        : "";
      const statusNote = status.key === "finishing" && nextPayrollMonthLabel
        ? `С ${nextPayrollMonthLabel} сотрудник больше не будет попадать в активные и в расчёты следующих месяцев.`
        : status.key === "dismissed" && (employee.endDate || employee.endMonth)
          ? `Сотрудник уже завершён и не участвует в расчётах после ${employeeEndDateLabel || formatEmployeeEndMonthLabel(employee.endMonth)}.`
          : "";
      const statusChips = [
        `<span class="employee-status-chip employee-status-chip-${escapeHtml(status.key)}">${escapeHtml(status.label)}</span>`,
        employee.startDate || employee.startMonth ? `<span class="employee-status-chip">Старт: ${escapeHtml(employeeStartDateLabel || formatEmployeeStartMonthLabel(employee.startMonth))}</span>` : "",
        showEndMonthChip ? `<span class="employee-status-chip">До: ${escapeHtml(employeeEndDateLabel || formatEmployeeEndMonthLabel(employee.endMonth))}</span>` : "",
        !hasValidIin ? `<span class="employee-status-chip employee-status-chip-warning">Нет ИИН</span>` : ""
      ].filter(Boolean).join("");
      const completenessActions = [
        !completeness.needsIin ? "" : `<button type="button" class="btn btn-ghost btn-xs" data-action="employee-quick-add-iin" data-employee-id="${employee.id}">Добавить ИИН</button>`,
        !completeness.needsMonthlyAccrual ? "" : `<button type="button" class="btn btn-ghost btn-xs" data-action="employee-quick-accrual" data-employee-id="${employee.id}">Уточнить начисление</button>`
      ].filter(Boolean).join("");
      const completenessHtml = completeness && Array.isArray(completeness.items)
        ? `
          <div class="employee-completeness-card employee-completeness-card-${escapeHtml(completeness.tone)}">
            <div class="employee-completeness-headline">
              <strong>Статус данных</strong>
              <span class="employee-completeness-badge employee-completeness-badge-${escapeHtml(completeness.tone)}">${escapeHtml(completeness.badge)}</span>
            </div>
            <div class="employee-completeness-list">
              ${completeness.items.map((item) => `
                <div class="employee-completeness-item employee-completeness-item-${escapeHtml(item.tone)}">
                  <span class="employee-completeness-dot" aria-hidden="true"></span>
                  <span>${escapeHtml(item.text)}</span>
                </div>
              `).join("")}
            </div>
            ${completenessActions ? `<div class="employee-completeness-actions">${completenessActions}</div>` : ""}
          </div>
        `
        : "";
      const salaryHistoryHtml = salaryHistory
        .map((row) => `
          <div class="employee-history-row">
            <span>С ${escapeHtml(formatEmployeeStartMonthLabel(row.month))}</span>
            <strong class="amount-sensitive">${fmt(row.salary)}</strong>
          </div>
        `)
        .join("");
      const monthlyAccrualsHtml = monthlyAccruals
        .map((row) => `
          <div class="employee-history-row">
            <span>За ${escapeHtml(String(formatEmployeeStartMonthLabel(row.month) || "").toLowerCase())}</span>
            <strong class="amount-sensitive">${fmt(row.amount)}</strong>
          </div>
        `)
        .join("");
      const referenceLabel = formatMonthYearLabel(referencePeriod);
      const actionsHtml = employee.archived
        ? `
          <button type="button" class="btn btn-ghost btn-xs" data-action="edit-employee" data-employee-id="${employee.id}">Редактировать</button>
          ${employee.endDate || employee.endMonth ? `<button type="button" class="btn btn-ghost btn-xs" data-action="clear-employee-end-date" data-employee-id="${employee.id}">Снять дату ухода</button>` : ""}
          <button type="button" class="btn btn-ghost btn-xs" data-action="restore-employee" data-employee-id="${employee.id}">Показать в активных</button>
        `
        : `
          <button type="button" class="btn btn-ghost btn-xs" data-action="edit-employee" data-employee-id="${employee.id}">Редактировать</button>
          <button type="button" class="btn btn-ghost btn-xs" data-action="dismiss-employee" data-employee-id="${employee.id}">${employee.endDate || employee.endMonth ? "Изменить дату ухода" : "Уволить"}</button>
          ${employee.endDate || employee.endMonth ? `<button type="button" class="btn btn-ghost btn-xs" data-action="clear-employee-end-date" data-employee-id="${employee.id}">Снять дату ухода</button>` : ""}
          <button type="button" class="btn btn-ghost btn-xs" data-action="archive-employee" data-employee-id="${employee.id}">Скрыть из активных</button>
        `;

      return `
        <article class="card employee-card">
          <div class="employee-card-head">
            <div class="employee-card-copy">
              <h3>${escapeHtml(employee.name)}</h3>
              <p>${getEmployeeContractLabel(employee.contractType)} · ${employee.isResident ? "Резидент РК" : "Нерезидент"}</p>
              ${specialCaseLabels.length > 0 ? `<p class="employee-card-extra-meta">${escapeHtml(specialCaseLabels.join(" · "))}</p>` : ""}
              <div class="employee-card-statuses">${statusChips}</div>
              ${statusNote ? `<p class="employee-card-status-note">${escapeHtml(statusNote)}</p>` : ""}
            </div>
            <div class="employee-card-actions">
              ${actionsHtml}
            </div>
          </div>
          ${completenessHtml}
          <div class="employee-card-grid">
            <div class="employee-card-metric employee-card-metric-total">
              <span>Всего стоит</span>
              <strong class="amount-sensitive">${fmt(snapshot.totalEmployerSpend)}</strong>
              <small class="employee-card-metric-note">за ${escapeHtml(referenceLabel || "выбранный период")}</small>
            </div>
            <div class="employee-card-metric">
              <span>${snapshot.usesMonthlyAccrual ? "Начислено" : "Оклад"}</span>
              <strong class="amount-sensitive">${fmt(snapshot.usesMonthlyAccrual ? snapshot.salary : snapshot.baseSalary)}</strong>
              ${snapshot.usesMonthlyAccrual ? `<small class="employee-card-metric-note">оклад по графику: ${escapeHtml(fmt(snapshot.baseSalary))}</small>` : ""}
            </div>
            <div class="employee-card-metric">
              <span>На руки</span>
              <strong class="amount-sensitive">${fmt(snapshot.netSalary)}</strong>
            </div>
            <div class="employee-card-metric">
              <span>Расходы работодателя</span>
              <strong class="amount-sensitive">${fmt(snapshot.employerExtraCost)}</strong>
            </div>
          </div>
          <div class="employee-history-card">
            <div class="employee-history-headline">
              <strong>История оклада</strong>
              <span>${salaryChangesCount > 0 ? getChangesCountLabel(salaryChangesCount) : "Без изменений"}</span>
            </div>
            <div class="employee-history-list">
              ${salaryHistoryHtml}
            </div>
          </div>
          ${monthlyAccrualsCount > 0 ? `
            <div class="employee-history-card">
              <div class="employee-history-headline">
                <strong>Начисления по месяцам</strong>
                <span>${getAccrualsCountLabel(monthlyAccrualsCount)}</span>
              </div>
              <div class="employee-history-list">
                ${monthlyAccrualsHtml}
              </div>
            </div>
          ` : ""}
        </article>
      `;
    })
    .join("");

  const emptyTitle = state.employeesView === "archive"
    ? "Скрытых сотрудников пока нет."
    : state.employeesView === "review"
      ? "Сотрудников на проверку сейчас нет."
      : "У вас пока нет активных сотрудников.";
  const emptyText = state.employeesView === "archive"
    ? "Как только вы скроете сотрудника из активных, он появится здесь вместе с историей расчётов."
    : state.employeesView === "review"
      ? "Когда у сотрудника не хватит ИИН или нужно будет уточнить неполный месяц, он появится здесь."
      : "Добавьте сотрудника чтобы считать налоги с учётом зарплатной нагрузки.";
  const summaryTitle = state.employeesView === "archive"
    ? "Сводка по скрытым сотрудникам"
    : state.employeesView === "review"
      ? "Сводка по сотрудникам, которых нужно проверить"
      : "Сводка по сотрудникам в активном списке";
  const summaryText = state.employeesView === "archive"
    ? "Скрытие влияет только на отображение. Суммы здесь показаны по последнему активному месяцу сотрудника."
    : state.employeesView === "review"
      ? "Здесь собраны сотрудники с неполными данными или неуточнённым неполным месяцем."
      : "Для текущих сотрудников суммы показаны за текущий месяц. Для завершённых — за их последний релевантный месяц.";

  els.pageContent.innerHTML = `
    <div class="page-employees">
      <div class="page-header employees-page-header">
        <div class="employees-page-header-copy">
          <h1>Сотрудники</h1>
          <div class="employees-view-switch" role="tablist" aria-label="Фильтр сотрудников">
            <button type="button" class="employees-view-btn${state.employeesView === "active" ? " is-active" : ""}" data-action="set-employees-view" data-employees-view="active" role="tab" aria-selected="${state.employeesView === "active"}">Все (${activeEmployees.length})</button>
            <button type="button" class="employees-view-btn${state.employeesView === "review" ? " is-active" : ""}" data-action="set-employees-view" data-employees-view="review" role="tab" aria-selected="${state.employeesView === "review"}">Нужно проверить (${reviewEmployees.length})</button>
            <button type="button" class="employees-view-btn${state.employeesView === "archive" ? " is-active" : ""}" data-action="set-employees-view" data-employees-view="archive" role="tab" aria-selected="${state.employeesView === "archive"}">Скрытые (${archivedEmployees.length})</button>
          </div>
        </div>
        <button type="button" class="btn btn-primary" id="addEmployeeBtn" data-action="open-employee-modal">+ Добавить сотрудника</button>
      </div>

      <div class="employees-empty card" id="employeesEmpty"${hasEmployees ? ' style="display:none"' : ""}>
        <p>У вас пока нет сотрудников.</p>
        <p>Добавьте сотрудника чтобы считать налоги с учётом зарплатной нагрузки.</p>
        <button type="button" class="btn btn-primary" data-action="open-employee-modal">+ Добавить первого сотрудника</button>
      </div>

      <div class="employees-summary card" id="employeesSummary"${hasEmployees ? "" : ' style="display:none"'}>
        <div class="employees-summary-head">
          <div>
            <h3>${summaryTitle}</h3>
            <p>${summaryText}</p>
          </div>
        </div>
        <div class="employees-summary-grid">
          <div class="employees-summary-item">
            <span>В списке</span>
            <strong>${getEmployeesCountLabel(visibleEmployees.length)}</strong>
          </div>
          <div class="employees-summary-item">
            <span>ФОТ</span>
            <strong class="amount-sensitive">${fmt(totals.fot)}</strong>
          </div>
          <div class="employees-summary-item">
            <span>На руки</span>
            <strong class="amount-sensitive">${fmt(totals.net)}</strong>
          </div>
          <div class="employees-summary-item">
            <span>Расходы работодателя</span>
            <strong class="amount-sensitive">${fmt(totals.employer)}</strong>
          </div>
          <div class="employees-summary-item employees-summary-item-total">
            <span>Всего стоит</span>
            <strong class="amount-sensitive">${fmt(totals.totalSpend)}</strong>
          </div>
        </div>
      </div>

      <div class="employees-empty card"${hasEmployees && !hasVisibleEmployees ? "" : ' style="display:none"'}>
        <p>${emptyTitle}</p>
        <p>${emptyText}</p>
      </div>

      <div class="employees-list" id="employeesList"${hasEmployees && hasVisibleEmployees ? "" : ' style="display:none"'}>
        ${cardsHtml}
      </div>
    </div>
  `;
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
  const nextPaymentSummary = getUpcomingPaymentSummary();
  const hasUpcomingPaymentSummary = Boolean(nextPaymentSummary.row && nextPaymentSummary.breakdown);
  const now = new Date();
  const { minMonthIndex: trackedStartMonthIndex, maxMonthIndex: currentMonthIndex } = getDashboardVisibleMonthRange(now);
  const hasSelectedMonth = state.dashboardSelectedMonth !== null && state.dashboardSelectedMonth !== undefined && state.dashboardSelectedMonth !== "";
  const selectedMonthRaw = hasSelectedMonth ? Number(state.dashboardSelectedMonth) : Number.NaN;
  const selectedMonthIndex = Number.isFinite(selectedMonthRaw)
    ? Math.min(currentMonthIndex, Math.max(trackedStartMonthIndex, Math.trunc(selectedMonthRaw)))
    : currentMonthIndex;
  state.dashboardSelectedMonth = selectedMonthIndex;
  const selectedMonthDate = new Date(now.getFullYear(), selectedMonthIndex, 1);
  const selectedMonthLabel = formatMonthYearLabel(selectedMonthDate);
  const selectedMonthIsCurrent = selectedMonthIndex >= currentMonthIndex;
  const selectedMonthLabelPlain = String(MONTHS_ACCUSATIVE[selectedMonthIndex] || "этот месяц").toLowerCase("ru-KZ");
  const currentMonthLabelPlain = String(MONTHS_ACCUSATIVE[currentMonthIndex] || "этот месяц").toLowerCase("ru-KZ");
  const selectedMonthContextNote = selectedMonthIndex !== currentMonthIndex
    ? `<p class="dashboard-tax-month-context">Данные за ${escapeHtml(selectedMonthLabelPlain)}. Текущий месяц: ${escapeHtml(currentMonthLabelPlain)}.</p>`
    : "";
  const selectedMonthLabelAccusative = MONTHS_ACCUSATIVE[selectedMonthIndex] || "этот месяц";
  const selectedMonthData = monthlyData[selectedMonthIndex] || { income: 0, entries: 0 };
  const selectedIncome = Math.max(0, Number(selectedMonthData.income || 0));
  const selectedMonthHasIncome = selectedIncome > 0;
  const selectedTaxRaw = calcByRegime(state.regime, selectedIncome, state.calcExpenses);
  const selectedTax = selectedTaxRaw;
  const isMobileDashboard = isMobileViewport();
  const visibleMonthIndexes = Array.from(
    { length: currentMonthIndex - trackedStartMonthIndex + 1 },
    (_, offset) => trackedStartMonthIndex + offset
  );
  const monthTabsHtml = visibleMonthIndexes.map((index) => {
    const activeClass = index === selectedMonthIndex ? " active" : "";
    const monthLabel = isMobileDashboard
      ? MONTHS[index]
      : `${String(MONTHS_ACCUSATIVE[index] || MONTHS[index] || "").charAt(0).toUpperCase()}${String(MONTHS_ACCUSATIVE[index] || MONTHS[index] || "").slice(1)}`;
    return `<button type="button" class="dashboard-month-tab${activeClass}" data-action="select-dashboard-month" data-month-index="${index}" data-month-source="tabs">${monthLabel}</button>`;
  }).join("");
  const previousMonthDate = new Date(now.getFullYear(), now.getMonth(), 1);
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);

  const previousIncome = getIncomeByMonth(previousMonthDate.getFullYear(), previousMonthDate.getMonth(), dashboardIncomes);

  const incomeTrend =
    previousIncome <= 0 && currentIncome > 0
      ? {
          className: "up",
          text: `Первый доход в ${MONTHS_PREPOSITIONAL[currentMonthIndex] || "этом месяце"}`
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
      ? "Добавьте доход для прогноза"
      : monthsToLimit > 120
        ? "Лимит режима недостижим при текущем доходе"
        : `При текущем темпе: ~${monthsToLimit} мес.`;
  const riskMeta = getLimitRiskMeta(safeLimitPct, monthsToLimit);
  const hasAdvancedAnalytics = canUseFeature("advanced_analytics");
  const taxLoadPayNow = hasUpcomingPaymentSummary
    ? nextPaymentSummary.selfTotal
    : Math.max(0, Math.round(getTaxLoadPayNow(state.regime, currentTax)));
  const taxLoadTitle = hasUpcomingPaymentSummary
    ? nextPaymentSummary.title
    : `Платёж за ${currentMonthLabelPlain}`;
  const taxLoadIpnReserve = hasUpcomingPaymentSummary && nextPaymentSummary.breakdown && nextPaymentSummary.breakdown.kind === "fno910"
    ? 0
    : Math.max(0, Math.round((currentTax && currentTax.ipn) || 0));
  const taxLoadOpvSavings = hasUpcomingPaymentSummary && nextPaymentSummary.breakdown
    ? Math.max(0, Math.round(Number(nextPaymentSummary.breakdown.opv || 0)))
    : Math.max(0, Math.round((currentTax && currentTax.opv) || 0));
  const canShowEmployeesDashboard = canAccessEmployeesSection();
  const dashboardEmployeePeriod = new Date(now.getFullYear(), currentMonthIndex, 1);
  const dashboardEmployeeSource = normalizeEmployeeEntries(state.employees);
  if (canShowEmployeesDashboard) {
    state.employees = dashboardEmployeeSource;
  }
  const dashboardEmployeeCalcSource = canShowEmployeesDashboard
    ? dashboardEmployeeSource.filter((employee) => isEmployeeActiveForPayrollPeriod(employee, dashboardEmployeePeriod))
    : [];
  const dashboardEmployees = canShowEmployeesDashboard
    ? dashboardEmployeeCalcSource.filter((employee) => !employee.archived)
    : [];
  const dashboardEmployeePaymentSummary = canShowEmployeesDashboard
    ? getEmployeesRemittanceSummaryForPeriod(dashboardEmployeePeriod, dashboardEmployeeCalcSource)
    : { remittanceTotal: 0, employerChargesTotal: 0 };
  const dashboardEmployeesRemittanceTotal = hasUpcomingPaymentSummary
    ? nextPaymentSummary.employeeRemittanceTotal
    : Math.round(dashboardEmployeePaymentSummary.remittanceTotal || 0);
  const dashboardEmployeesEmployerChargesTotal = hasUpcomingPaymentSummary
    ? nextPaymentSummary.employeeEmployerChargesTotal
    : Math.round(dashboardEmployeePaymentSummary.employerChargesTotal || 0);
  const taxLoadTotalWithEmployees = hasUpcomingPaymentSummary
    ? nextPaymentSummary.total
    : taxLoadPayNow + dashboardEmployeesRemittanceTotal;
  const dashboardKpiActionArrow = '<span class="dashboard-kpi-action-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="m9 6 6 6-6 6"></path></svg></span>';
  const incomeKpiActionIcon = '<span class="dashboard-kpi-action-icon dashboard-kpi-action-icon-income" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg></span>';
  const taxLoadHintIcon = '<span class="dashboard-kpi-action-icon dashboard-kpi-action-icon-breakdown" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 4.75h10A1.25 1.25 0 0 1 18.25 6v13.25l-2.25-1.5-2.25 1.5-2.25-1.5-2.25 1.5V6A1.25 1.25 0 0 1 7 4.75Z"></path><path d="M9 9.25h6"></path><path d="M9 12h6"></path><path d="M9 14.75h4"></path></svg></span>';
  const deadlineKpiActionIcon = '<span class="dashboard-kpi-action-icon dashboard-kpi-action-icon-calendar" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M8 3.75v3"></path><path d="M16 3.75v3"></path><path d="M4.75 9.25h14.5"></path><rect x="4.75" y="5.75" width="14.5" height="13.5" rx="2.25"></rect></svg></span>';
  const bars = visibleMonthIndexes
    .map((index) => {
      const row = monthlyData[index] || { income: 0, entries: 0, name: MONTHS[index] };
      const height = Math.max((row.income / maxIncome) * 170, row.income > 0 ? 8 : 4);
      const activeClass = index === selectedMonthIndex ? " is-active" : "";
      const barClass = index === selectedMonthIndex ? " is-active" : " is-muted";
      const monthLabel = MONTHS_ACCUSATIVE[index] || row.name;
      return `
        <div class="chart-item${activeClass}" data-action="select-dashboard-month" data-month-index="${index}" data-month-source="chart" data-value="${fmt(row.income)}" title="Показать налоги за ${monthLabel}">
          <div class="chart-bar${barClass}" style="height:${height}px" title="${row.name}: ${fmt(row.income)}"></div>
          <span>${row.name}</span>
        </div>
      `;
    })
    .join("");

  const deadlineDueText = nextDeadline ? getLandingDeadlineDueInfo(nextDeadline.date).text : "Сроков нет";
  const deadlineDaysLeft = nextDeadline
    ? Math.ceil((new Date(nextDeadline.date).setHours(0, 0, 0, 0) - new Date(new Date().setHours(0, 0, 0, 0))) / 86400000)
    : null;
  const deadlineCardClass = deadlineDaysLeft === null ? "" : deadlineDaysLeft <= 7 ? " urgent" : deadlineDaysLeft < 30 ? " warning" : "";
  const deadlineNoteClass = deadlineDaysLeft === null ? "kpi-note" : deadlineDaysLeft <= 7 ? "kpi-note urgent" : deadlineDaysLeft < 30 ? "kpi-note warning" : "kpi-note";
  const welcomeDeadlineHint = nextDeadline
    ? deadlineDaysLeft < 0
      ? "Есть просроченный срок — добавьте доход чтобы знать сколько платить."
      : deadlineDaysLeft === 0
        ? "Ближайший срок уже сегодня — добавьте доход чтобы знать сколько платить."
        : `До ближайшего срока ${deadlineDaysLeft} ${getLandingDayWord(deadlineDaysLeft)} — добавьте доход чтобы знать сколько платить.`
    : "Добавьте доход чтобы знать сколько платить по ближайшим срокам.";
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
      return `${numeric < 0 ? "-" : ""}${mlnText} млн ₸`;
    }
    return fmt(numeric);
  };
  const getMobileKpiValueSizeClass = (valueText) => {
    const compactLength = String(valueText || "").replace(/\s+/g, "").length;
    if (compactLength >= 12) return " kpi-value-mobile-s";
    if (compactLength >= 9) return " kpi-value-mobile-m";
    return "";
  };
  const incomeKpiTitle = isMobileKpiMode ? "Доход за месяц" : "Доход за этот месяц";
  const incomeYtdKpiTitle = isMobileKpiMode ? "С начала года" : "Доход с начала года";
  const incomeKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(currentIncome) : fmt(currentIncome);
  const taxLoadKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(taxLoadPayNow) : fmt(taxLoadPayNow);
  const taxLoadKpiTotalValueText = dashboardEmployeesRemittanceTotal > 0
    ? (isMobileKpiMode ? formatMobileKpiAmount(taxLoadTotalWithEmployees) : fmt(taxLoadTotalWithEmployees))
    : taxLoadKpiValueText;
  const incomeYtdKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(totalIncome) : fmt(totalIncome);
  const incomeYtdAvgKpiValueText = isMobileKpiMode ? formatMobileKpiAmount(avgMonthlyIncome) : fmt(avgMonthlyIncome);
  const incomeKpiValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(incomeKpiValueText) : "";
  const taxLoadKpiValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(taxLoadKpiValueText) : "";
  const taxLoadKpiTotalValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(taxLoadKpiTotalValueText) : "";
  const incomeYtdKpiValueClass = isMobileKpiMode ? getMobileKpiValueSizeClass(incomeYtdKpiValueText) : "";
  const MONTHS_GENITIVE = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const mobileDeadlineDateLabel = nextDeadline
    ? (() => {
      const dateObj = new Date(nextDeadline.date);
      return `${dateObj.getDate()} ${MONTHS_GENITIVE[dateObj.getMonth()] || ""}`.trim();
    })()
    : "Нет срока";
  const nextDeadlineCardCopy = nextDeadline ? getLandingDeadlineCardCopy(nextDeadline) : null;
  const nextDeadlinePrimaryLabel = nextDeadline
    ? String((nextDeadlineCardCopy && nextDeadlineCardCopy.title) || nextDeadline.title || "").trim()
    : "Все сроки закрыты";
  const nextDeadlineSecondaryLabel = nextDeadline
    ? String((nextDeadlineCardCopy && nextDeadlineCardCopy.description) || "").trim()
    : "";
  const taxLoadDueDateLabel = hasUpcomingPaymentSummary
    ? nextPaymentSummary.dueLabel
    : getNextTaxDueDateLabel();
  const showZeroIncomeVosmsHint = hasUpcomingPaymentSummary
    ? Boolean(
        nextPaymentSummary.breakdown
        && nextPaymentSummary.breakdown.kind !== "fno910"
        && nextPaymentSummary.employeeRemittanceTotal <= 0
        && nextPaymentSummary.selfTotal > 0
        && nextPaymentSummary.selfTotal === Math.round(Number(nextPaymentSummary.breakdown.vosms || 0))
      )
    : (
        (state.regime === "simplified" || state.regime === "our")
        && currentIncome <= 0
        && dashboardEmployeesRemittanceTotal <= 0
        && taxLoadPayNow > 0
        && taxLoadPayNow === Math.round(Number(currentTax.vosms || 0))
      );
  const zeroIncomeVosmsText = `При нулевом доходе обязателен ВОСМС ${fmt(currentTax.vosms || 0)}.`;
  const deadlineIncomeHintMarkup = state.incomes.length === 0
    ? showZeroIncomeVosmsHint
      ? `<div class="stat-sub deadline-income-hint">${zeroIncomeVosmsText}</div>`
      : '<div class="stat-sub deadline-income-hint">добавьте доход чтобы рассчитать сумму</div>'
    : "";
  const taxLoadCardTitle = showZeroIncomeVosmsHint
    ? `Обязательный платёж за ${currentMonthLabelPlain}`
    : taxLoadTitle;
  const taxLoadKpiTitle = showZeroIncomeVosmsHint
    ? taxLoadCardTitle
    : `Оплатить до ${taxLoadDueDateLabel}`;
  const taxLoadKpiPeriodNote = showZeroIncomeVosmsHint
    ? `до ${taxLoadDueDateLabel}`
    : `за ${currentMonthLabelPlain}`;
  const welcomeBannerTitle = showZeroIncomeVosmsHint ? "Доходов за этот месяц пока нет" : "Добро пожаловать!";
  const welcomeBannerLead = showZeroIncomeVosmsHint
    ? `Сейчас обязательный платёж — ВОСМС ${fmt(currentTax.vosms || 0)}. Добавьте доход, чтобы рассчитать остальные платежи.`
    : "Добавьте первый доход, чтобы увидеть свои налоги и прогнозы.";
  const welcomeBannerDeadlineText = showZeroIncomeVosmsHint
    ? nextDeadline
      ? `Ближайший срок — ${mobileDeadlineDateLabel}. Даже без дохода сохраняется обязательный платёж.`
      : zeroIncomeVosmsText
    : welcomeDeadlineHint;
  const kpiActionClass = isMobileKpiMode ? " kpi-card-actionable" : "";
  const incomeKpiActionAttrs = isMobileKpiMode
    ? 'data-action="open-dashboard-kpi-sheet" data-kpi-key="income_current" role="button" tabindex="0" aria-label="Открыть расшифровку дохода за текущий месяц"'
    : "";
  const taxKpiActionAttrs = 'data-action="open-tax-load-modal" role="button" tabindex="0" aria-label="Открыть полную расшифровку налоговой нагрузки"';
  const incomeYtdKpiActionAttrs = isMobileKpiMode
    ? 'data-action="open-dashboard-kpi-sheet" data-kpi-key="income_ytd" role="button" tabindex="0" aria-label="Открыть расшифровку дохода с начала года"'
    : "";
  const deadlineKpiActionAttrs = isMobileKpiMode
    ? 'data-action="open-dashboard-kpi-sheet" data-kpi-key="next_deadline" role="button" tabindex="0" aria-label="Открыть расшифровку ближайшего срока"'
    : "";
  const mobileIncomeYtdKpiMarkup = isMobileKpiMode
    ? `
      <article class="card kpi-card kpi-card-compact-row kpi-card-ytd-row${kpiActionClass}" ${incomeYtdKpiActionAttrs}>
        <div class="kpi-row-main">
          <div class="kpi-row-copy">
            <div class="stat-title">${incomeYtdKpiTitle}</div>
            <div class="kpi-note">темп: <span class="amount-sensitive">${incomeYtdAvgKpiValueText}</span> / мес</div>
          </div>
          <div class="stat-value amount-sensitive${incomeYtdKpiValueClass}">${incomeYtdKpiValueText}</div>
        </div>
        <div class="kpi-mobile-action-row">
          <button type="button" class="kpi-mobile-action-btn" data-action="open-dashboard-kpi-sheet" data-kpi-key="income_ytd" aria-label="Открыть расшифровку дохода с начала года">Подробнее &rarr;</button>
        </div>
      </article>
    `
    : `
      <article class="card kpi-card${kpiActionClass}" ${incomeYtdKpiActionAttrs}>
        <div class="stat-title">${incomeYtdKpiTitle}</div>
        <div class="stat-value amount-sensitive">${fmt(totalIncome)}</div>
        <div class="kpi-note">Средний темп: <span class="amount-sensitive">${fmt(avgMonthlyIncome)}</span> / мес</div>
        <div class="stat-sub">Прогноз за год: <span class="amount-sensitive">${fmt(annualRunRate)}</span></div>
      </article>
    `;
  const mobileDeadlineKpiMarkup = isMobileKpiMode
    ? `
      <article class="card kpi-card deadline${deadlineCardClass} kpi-card-compact-row kpi-card-deadline-row${kpiActionClass}" data-tour-target="next-deadline" ${deadlineKpiActionAttrs}>
        <div class="kpi-row-main">
          <div class="kpi-row-copy">
            <div class="stat-title">Ближайший срок</div>
            <div class="deadline-period-label deadline-period-label-mobile">${nextDeadlinePrimaryLabel}</div>
            ${nextDeadlineSecondaryLabel ? `<div class="stat-sub deadline-mobile-title">${nextDeadlineSecondaryLabel}</div>` : ""}
          </div>
          <div class="kpi-deadline-right">
            <div class="stat-value stat-compact">${mobileDeadlineDateLabel}</div>
          </div>
        </div>
        <div class="kpi-mobile-action-row">
          <button type="button" class="deadline-mobile-calendar-btn" data-action="open-dashboard-deadline-calendar" aria-label="Перейти в календарь сроков">Перейти в календарь</button>
        </div>
      </article>
    `
    : `
      <article class="card kpi-card deadline${deadlineCardClass}${kpiActionClass}" data-tour-target="next-deadline" ${deadlineKpiActionAttrs}>
        <div class="stat-title">Ближайший срок</div>
        <div class="stat-value stat-compact">${nextDeadline ? mobileDeadlineDateLabel : "Нет"}</div>
        <div class="deadline-period-label">${nextDeadlinePrimaryLabel}</div>
        <div class="${deadlineNoteClass}">${deadlineDueText}</div>
        ${nextDeadlineSecondaryLabel ? `<div class="stat-sub">${nextDeadlineSecondaryLabel}</div>` : ""}
        ${deadlineIncomeHintMarkup}
        <div class="kpi-card-footer"><button type="button" class="deadline-desktop-calendar-link dashboard-kpi-action" data-action="open-dashboard-deadline-calendar" aria-label="Перейти на страницу календаря">${deadlineKpiActionIcon}<span>Перейти в календарь</span>${dashboardKpiActionArrow}</button></div>
      </article>
    `;
  const isSimplifiedRegime = state.regime === "simplified";
  const isOurRegime = state.regime === "our";
  const isSelfRegime = state.regime === "self";
  const isSimplifiedZeroIncome = isSimplifiedRegime && Number(currentIncome || 0) <= 0;
  const isOurZeroIncome = isOurRegime && Number(currentIncome || 0) <= 0;
  const taxRowsForKpiSheet = hasUpcomingPaymentSummary
    ? getPaymentBreakdownRowsForDisplay(nextPaymentSummary.breakdown, state.regime)
    : (isSimplifiedZeroIncome || isOurZeroIncome)
      ? [
          { label: "ВОСМС (обязательный платёж)", value: Number(currentTax.vosms || 0) }
        ]
      : [
          { label: isSelfRegime ? "ОПВ (1%)" : "ОПВ", value: Number(currentTax.opv || 0) },
          { label: isSelfRegime ? "СО (1%, до 7 МЗП)" : "СО", value: Number(currentTax.so || 0) },
          { label: isSelfRegime ? "ОПВР (1%)" : "ОПВР", value: Number(currentTax.opvr || 0) },
          { label: isSelfRegime ? "ВОСМС (1%)" : "ВОСМС", value: Number(currentTax.vosms || 0) }
        ];

  if (!hasUpcomingPaymentSummary && isOurRegime && !isOurZeroIncome) {
    taxRowsForKpiSheet.push({
      label: "Соц. налог",
      value: Number(currentTax.socTax || 0)
    });
  }

  dashboardKpiSheetData = {
    currentIncome: Number(currentIncome || 0),
    incomeTrendClass: incomeTrend.className || "flat",
    incomeTrendText: incomeTrend.text || "Без изменений",
    taxLoadTitle: taxLoadKpiTitle,
    taxLoadPayNow: Number(taxLoadPayNow || 0),
    taxLoadIpnReserve: Number(taxLoadIpnReserve || 0),
    taxLoadOpvSavings: Number(taxLoadOpvSavings || 0),
    taxDueDateLabel: taxLoadDueDateLabel,
    taxRows: taxRowsForKpiSheet,
    totalIncome: Number(totalIncome || 0),
    avgMonthlyIncome: Number(avgMonthlyIncome || 0),
    annualRunRate: Number(annualRunRate || 0),
    nextDeadlineDate: nextDeadline ? mobileDeadlineDateLabel : "Нет",
    nextDeadlineTitle: nextDeadline ? nextDeadline.title : "Все задачи закрыты",
    nextDeadlineDueText: deadlineDueText
  };

  const welcomeBannerHtml = showWelcomeBanner
    ? `
      <article class="card dashboard-welcome-banner">
        <div class="dashboard-welcome-main">
          <span class="dashboard-welcome-icon" aria-hidden="true">👋</span>
          <div class="dashboard-welcome-copy">
            <h3>${welcomeBannerTitle}</h3>
            <p>${welcomeBannerLead}</p>
            <p class="dashboard-welcome-deadline">${welcomeBannerDeadlineText}</p>
          </div>
        </div>
        <div class="dashboard-welcome-actions">
          <button
            type="button"
            class="btn btn-primary dashboard-welcome-primary"
            data-action="open-income-page"
            data-page="income"
            data-nav-source="dashboard_welcome_banner"
            aria-label="Перейти к добавлению первого дохода"
          >+ Добавить доход</button>
        </div>
      </article>
    `
    : "";
  const welcomeBannerOutsideKpi = showWelcomeBanner ? welcomeBannerHtml : "";

  const incomeKpiCardMarkup = `
      <article class="card kpi-card kpi-card-income-hero${kpiActionClass}" data-tour-target="month-income" ${incomeKpiActionAttrs}>
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
          ? `<div class="kpi-card-footer"><button type="button" class="income-hero-cta dashboard-kpi-action dashboard-kpi-action-dark" data-action="open-income-page" data-page="income" data-nav-source="dashboard_income_hero" aria-label="Перейти к добавлению дохода">${incomeKpiActionIcon}<span>Добавить доход</span>${dashboardKpiActionArrow}</button></div>`
          : ""}
      </article>
  `;

  const taxLoadKpiCardMarkup = `
      <article class="card kpi-card danger tax-load-kpi${kpiActionClass}" data-tour-target="tax-load" ${taxKpiActionAttrs}>
        <div class="stat-title">${taxLoadKpiTitle}</div>
        <div class="stat-value stat-danger amount-sensitive${dashboardEmployeesRemittanceTotal > 0 ? taxLoadKpiTotalValueClass : taxLoadKpiValueClass}">${dashboardEmployeesRemittanceTotal > 0 ? taxLoadKpiTotalValueText : taxLoadKpiValueText}</div>
        ${dashboardEmployeesRemittanceTotal > 0
          ? `
            <div class="tax-load-monthly-note tax-load-monthly-note-split">
              <span>${taxLoadKpiPeriodNote}</span>
              <span>за себя: ${fmt(taxLoadPayNow)}</span>
              <span>за сотрудников: ${fmt(dashboardEmployeesRemittanceTotal)}</span>
              ${dashboardEmployeesEmployerChargesTotal > 0 ? `<span>из них расходы работодателя: ${fmt(dashboardEmployeesEmployerChargesTotal)}</span>` : ""}
            </div>
          `
          : `<div class="tax-load-monthly-note">${taxLoadKpiPeriodNote}</div>`}
        ${showZeroIncomeVosmsHint
          ? `<div class="tax-load-min-note">При нулевом доходе обязательный платёж — ВОСМС ${fmt(currentTax.vosms || 0)}</div>`
          : ""}
        <div class="kpi-card-footer"><div class="stat-sub tax-load-hint"><span class="tax-load-hint-chip dashboard-kpi-action">${taxLoadHintIcon}<span>Посмотреть состав суммы</span>${dashboardKpiActionArrow}</span></div></div>
      </article>
  `;

  const kpiSectionHtml = `
      <div class="grid grid-3 kpi-grid dashboard-focus-grid">
        ${incomeKpiCardMarkup}
        ${taxLoadKpiCardMarkup}
        ${mobileDeadlineKpiMarkup}
      </div>
    `;

  const chartPlaceholderBars = visibleMonthIndexes.map((index) => `
      <div class="chart-item chart-item-placeholder" aria-hidden="true">
        <div class="chart-bar chart-bar-placeholder" style="height:68px"></div>
        <span>${MONTHS[index]}</span>
      </div>
    `).join("");
  const chartSectionHtml = hasAnyMonthsHistory
    ? `<div class="chart-row">${bars}</div>`
    : `
      <div class="chart-row chart-row-placeholder" aria-label="Плейсхолдер графика">
        ${chartPlaceholderBars}
      </div>
      <p class="chart-placeholder-note">Добавьте первый доход, чтобы увидеть график</p>
    `;

  const taxSectionHtml = (() => {
    const payNowTitle = `Платить до ${getTaxDueDateLabelByMonth(selectedMonthIndex, selectedMonthDate.getFullYear())}`;
    const payNowDueDateLabel = getTaxDueDateLabelByMonth(selectedMonthIndex, selectedMonthDate.getFullYear());
    const payNowSelfTotal = Math.max(0, Math.round(getTaxLoadPayNow(state.regime, selectedTax)));
    const selectedMonthEmployeeSummary = canShowEmployeesDashboard
      ? getEmployeesRemittanceSummaryForPeriod(selectedMonthDate, dashboardEmployeeSource)
      : { remittanceTotal: 0, employerChargesTotal: 0 };
    const payNowEmployeesTotal = Math.max(0, Math.round(selectedMonthEmployeeSummary.remittanceTotal || 0));
    const payNowEmployeesEmployerCharges = Math.max(0, Math.round(selectedMonthEmployeeSummary.employerChargesTotal || 0));
    const payNowTotal = payNowSelfTotal + payNowEmployeesTotal;
    const isSimplifiedRegime = state.regime === "simplified";
    const isOurRegime = state.regime === "our";
    const isSelfRegime = state.regime === "self";
    const isSimplifiedZeroIncome = isSimplifiedRegime && !selectedMonthHasIncome;
    const isOurZeroIncome = isOurRegime && !selectedMonthHasIncome;
    const customSelfSocialBaseHint = !isSelfRegime && selectedTax.usesCustomSocialIncomeBase && Number(selectedTax.socialIncomeBase || 0) > 0
      ? `<p class="dashboard-tax-empty-note">Соцплатежи за себя за ${escapeHtml(selectedMonthLabelPlain)} считаются с базы ${fmt(selectedTax.socialIncomeBase)}.</p>`
      : "";
    const noIncomeHint = selectedMonthHasIncome ? "" : '<p class="dashboard-tax-empty-note">В этом месяце доходов не добавлено</p>';
    const zeroIncomeHint = (!selectedMonthHasIncome && (isSimplifiedRegime || isOurRegime))
      ? `
          <div class="dashboard-hint">
            <i data-lucide="info" style="width:13px;height:13px;color:#F59E0B" aria-hidden="true"></i>
            <span>ОПВ, ОПВР и СО можно не платить за месяц без дохода. Но рекомендуется платить минимум от 1 МЗП, чтобы сохранить соцстрахование и пенсионный стаж.</span>
          </div>
        `
      : "";
    const payNowRows = isSimplifiedZeroIncome
      ? [
          { label: "ВОСМС", value: selectedTax.vosms || 0, note: "обязательный платёж" }
        ]
      : isOurZeroIncome
        ? [
            { label: "ОПВ (10%)", value: 0, note: "нет дохода" },
            { label: "ОПВР (3.5%)", value: 0, note: "нет дохода" },
            { label: "СО (5%)", value: 0, note: "нет дохода" },
            { label: "ВОСМС", value: selectedTax.vosms || 0, note: "обязательный платёж" },
            { label: "СН (2 МРП)", value: 0, note: "нет дохода" }
          ]
      : [
          { label: isSelfRegime ? "ОПВ (1%)" : "ОПВ (10% от базы)", value: selectedTax.opv || 0 },
          { label: isSelfRegime ? "СО (1%, до 7 МЗП)" : "СО (5% от базы, до 7 МЗП)", value: selectedTax.so || 0 },
          { label: isSelfRegime ? "ОПВР (1%)" : "ОПВР (3.5% от базы)", value: selectedTax.opvr || 0 },
          { label: isSelfRegime ? "ВОСМС (1%)" : "ВОСМС", value: selectedTax.vosms || 0 }
        ];

    if (payNowEmployeesTotal > 0) {
      payNowRows.push({
        label: "За сотрудников",
        value: payNowEmployeesTotal,
        note: payNowEmployeesEmployerCharges > 0
          ? `из них расходы работодателя: ${fmt(payNowEmployeesEmployerCharges)}`
          : "к перечислению"
      });
    }

    if (isOurRegime && !isOurZeroIncome) {
      payNowRows.push({
        label: "Соц. налог",
        value: selectedTax.socTax || 0,
        note: isSimplifiedRegime ? "ИП на упрощёнке освобождены" : ""
      });
    }

    const payLaterLabel = isSimplifiedRegime
      ? `ИПН (${formatRatePercent(Number(selectedTax.ipnRate || 0) || getActiveSimplifiedIpnRate())} от дохода)`
      : isOurRegime
        ? "ИПН (10% после вычетов)"
        : "ИПН (0%)";
    const payLaterValue = isSelfRegime ? 0 : Number(selectedTax.ipn || 0);
    const payLaterSuffix = isSelfRegime ? "" : "/мес";
    const payLaterNote = isSimplifiedRegime
      ? "Платится раз в полгода — в феврале и августе. Рекомендуем откладывать эту сумму каждый месяц на отдельный счёт."
      : isOurZeroIncome
        ? "При нулевом доходе ИПН за этот месяц не возникает."
      : isOurRegime
        ? "Платится по итогам года. Рекомендуем ежемесячно резервировать сумму на отдельном счёте."
        : "Для самозанятого ИПН не применяется.";

    return `
      <div class="dashboard-tax-split">
        <section class="dashboard-tax-block dashboard-tax-block-now">
          <h4 class="dashboard-tax-title">${payNowTitle}</h4>
          ${customSelfSocialBaseHint}
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
            <span>Итого к уплате:</span>
            <strong class="amount-sensitive">${fmt(payNowTotal)}</strong>
          </div>
          <p class="dashboard-tax-subnote">за ${escapeHtml(selectedMonthLabelPlain)}</p>
          ${zeroIncomeHint}
        </section>

        ${
          isSelfRegime
            ? ""
            : `
              <div class="dashboard-tax-divider"><span>Не платится сейчас</span></div>

              <section class="dashboard-tax-block dashboard-tax-block-later">
                <h4 class="dashboard-tax-title">Откладывать на ИПН</h4>
                <div class="dashboard-tax-row">
                  <span>${payLaterLabel}</span>
                  <strong class="amount-sensitive">${fmt(payLaterValue)}${payLaterSuffix}</strong>
                </div>
                <p class="dashboard-tax-subnote">${payLaterNote}</p>
              </section>
            `
        }
      </div>
    `;
  })();
  const latestIncomeRows = [...state.incomes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
  const recentSectionHtml = latestIncomeRows.length > 0
    ? `
      <div class="dashboard-recent-compact-list" data-tour-target="recent-income-list">
        ${latestIncomeRows
          .map((row) => {
            const categoryName = String(row.category || "Без категории").trim() || "Без категории";
            const categoryClass = getIncomeCategoryToneClass(categoryName);
            const comment = String(row.comment || "").trim();
            const commentHtml = comment
              ? `<span class="dashboard-recent-compact-comment">${escapeHtml(comment)}</span>`
              : "";
            return `
              <article class="dashboard-recent-compact-row">
                <div class="dashboard-recent-compact-main">
                  <div class="dashboard-recent-compact-top">
                    <span class="dashboard-recent-compact-date">${formatDate(row.date)}</span>
                    <span class="cat-pill ${categoryClass}">${escapeHtml(categoryName)}</span>
                  </div>
                  ${commentHtml}
                </div>
                <strong class="dashboard-recent-compact-amount amount-sensitive">${fmt(row.amount)}</strong>
              </article>
            `;
          })
          .join("")}
      </div>
    `
    : `
      <div class="dashboard-empty-state compact dashboard-recent-empty-month" data-tour-target="recent-income-list">
        <div class="dashboard-recent-empty-icon" aria-hidden="true">📭</div>
        <p>Пока нет поступлений. Добавьте первый доход, чтобы увидеть историю здесь.</p>
      </div>
    `;
  const dashboardEmployeesTotals = dashboardEmployees.reduce((acc, employee) => {
    const tax = getEmployeePayrollSnapshot(employee, dashboardEmployeePeriod);
    return {
      fot: acc.fot + Number(tax.salary || 0),
      employerExtraCost: acc.employerExtraCost + Number(tax.employerExtraCost || 0)
    };
  }, { fot: 0, employerExtraCost: 0 });
  const visibleDashboardEmployees = dashboardEmployees.slice(0, 3);
  const remainingDashboardEmployees = Math.max(0, dashboardEmployees.length - visibleDashboardEmployees.length);
  const employeesSectionHtml = !canShowEmployeesDashboard || dashboardEmployees.length === 0
    ? ""
    : `
      <article class="card dashboard-employees-panel">
        <div class="dashboard-recent-head dashboard-recent-head-compact">
          <div class="dashboard-recent-head-copy">
            <h3>Сотрудники</h3>
            <p>Краткий обзор по тем, кого вы уже добавили. Полный расчёт и редактирование доступны в отдельном разделе.</p>
          </div>
          <div class="dashboard-recent-actions dashboard-employees-actions">
            <button type="button" class="btn btn-ghost" data-page="employees">Открыть раздел</button>
          </div>
        </div>

        <div class="dashboard-employees-summary">
          <div class="dashboard-employees-summary-item">
            <span>Всего</span>
            <strong>${getEmployeesCountLabel(dashboardEmployees.length)}</strong>
          </div>
          <div class="dashboard-employees-summary-item">
            <span>ФОТ в месяц</span>
            <strong class="amount-sensitive">${fmt(dashboardEmployeesTotals.fot)}</strong>
          </div>
          <div class="dashboard-employees-summary-item">
            <span>Расходы работодателя</span>
            <strong class="amount-sensitive">${fmt(dashboardEmployeesTotals.employerExtraCost)}</strong>
          </div>
        </div>

        <div class="dashboard-employees-list">
          ${visibleDashboardEmployees
            .map((employee) => {
              const tax = getEmployeePayrollSnapshot(employee, dashboardEmployeePeriod);
              return `
                <article class="dashboard-employee-row">
                  <div class="dashboard-employee-top">
                    <div class="dashboard-employee-copy">
                      <h4>${escapeHtml(employee.name)}</h4>
                      <p>${getEmployeeContractLabel(employee.contractType)} • ${employee.isResident ? "Резидент РК" : "Нерезидент"}${employee.startDate || employee.startMonth ? ` • Старт: ${escapeHtml(formatEmployeeDateLabel(getEmployeeStartDateValue(employee)) || formatEmployeeStartMonthLabel(employee.startMonth))}` : ""}${employee.endDate || employee.endMonth ? ` • До: ${escapeHtml(formatEmployeeDateLabel(getEmployeeEndDateValue(employee)) || formatEmployeeEndMonthLabel(employee.endMonth))}` : ""}</p>
                    </div>
                    <div class="dashboard-employee-total">
                      <span>Всего стоит</span>
                      <strong class="amount-sensitive">${fmt(tax.totalEmployerSpend)}</strong>
                    </div>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>

        <div class="dashboard-employees-footer">
          ${remainingDashboardEmployees > 0
            ? `<p class="dashboard-employees-more">Ещё ${getEmployeesCountLabel(remainingDashboardEmployees)} в разделе сотрудников.</p>`
            : '<span class="dashboard-employees-more"></span>'}
        </div>
      </article>
    `;
  const selfActivityStatus = state.regime === "self"
    ? getProfileSelfActivityStatus(state.profile && state.profile.selfActivity)
    : { code: "allowed", option: null };
  const selfActivityNoticeHtml = state.regime !== "self" || selfActivityStatus.code === "allowed"
    ? ""
    : `
      <article class="card dashboard-self-activity-card${selfActivityStatus.code === "blocked_activity" ? " is-warning" : ""}">
        <div class="dashboard-self-activity-copy">
          <h3>${selfActivityStatus.code === "blocked_activity" ? "Самозанятый не подходит для этого направления" : "Проверьте направление для Самозанятого"}</h3>
          <p>${
            selfActivityStatus.code === "blocked_activity"
              ? `Сейчас выбрано: ${escapeHtml(selfActivityStatus.option ? selfActivityStatus.option.label : "не указано")}. Для такого направления лучше использовать Упрощёнку (910).`
              : selfActivityStatus.code === "needs_check"
                ? `Сейчас выбрано: ${escapeHtml(selfActivityStatus.option ? selfActivityStatus.option.label : "не указано")}. Проверьте полный перечень 40 ОКЭД, чтобы убедиться, что Самозанятый подходит.`
                : "Самозанятость доступна не для всех видов деятельности. Сначала выберите направление, чтобы расчёты и подсказки были корректными."
          }</p>
        </div>
        <div class="dashboard-self-activity-actions">
          <button type="button" class="btn btn-ghost" data-page="settings">Открыть настройки</button>
          <a class="dashboard-self-activity-link" href="${LANDING_SELF_ACTIVITY_SOURCE_URL}" target="_blank" rel="noopener noreferrer">Полный перечень 40 ОКЭД</a>
        </div>
      </article>
    `;

  els.pageContent.innerHTML = `
    ${kpiSectionHtml}

    ${welcomeBannerOutsideKpi}

    ${selfActivityNoticeHtml}

    <section class="grid grid-2 dashboard-lower-grid mt-16">
      <article class="card taxes-panel dashboard-actions-card">
        <div class="dashboard-actions-head">
          <div>
            <h3>Что платить за ${selectedMonthLabelAccusative}</h3>
            <p>Сразу видно, что оплатить сейчас и что держать в резерве.</p>
          </div>
        </div>
        ${selectedMonthContextNote}
        <div class="dashboard-month-tabs">${monthTabsHtml}</div>
        ${taxSectionHtml}
      </article>

      <div class="dashboard-side-stack">
        ${employeesSectionHtml}
        <article class="card income-table-panel dashboard-recent-panel">
          <div class="dashboard-recent-head dashboard-recent-head-compact">
            <div class="dashboard-recent-head-copy">
              <h3>Последние поступления</h3>
              <p>Показываем 5 последних операций, чтобы быстро проверить, что уже занесено.</p>
            </div>
            <div class="dashboard-recent-actions">
              <button type="button" class="btn btn-ghost" data-page="income">Все поступления</button>
            </div>
          </div>
          ${recentSectionHtml}
        </article>
      </div>
    </section>
  `;

  els.pageContent.querySelectorAll(".income-hero-cta").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      navigateToPage("income", button.dataset.navSource || "dashboard_income_hero");
    });
  });

  els.pageContent.querySelectorAll(".dashboard-lower-grid [data-page]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const nextPage = String(button.dataset.page || "").trim();
      if (!nextPage) {
        return;
      }
      navigateToPage(nextPage, button.dataset.navSource || `dashboard_lower_${nextPage}`);
    });
  });

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
  const regime = onboarding.regime;
  const onboardingAvailabilityOptions = getRegimeAvailabilityOptions();

  state.onboarding = onboarding;

  const onboardingRegimes = [
    {
      id: "self",
      title: "Самозанятый",
      icon: "user-check",
      note: "Без ИП",
      limit: `До ${fmt(SELF_LIMIT_ANNUAL)} в год`
    },
    {
      id: "simplified",
      title: "Упрощенка (910)",
      icon: "percent",
      note: "Для большинства ИП",
      limit: `До ${fmt(SIMPLIFIED_LIMIT_ANNUAL)} в год`
    },
    {
      id: "our",
      title: "ОУР",
      icon: "building-2",
      note: "Скоро",
      limit: "Без лимита"
    }
  ];

  const renderOnboardingRegimeIcon = (iconName) =>
    `<i class="onboarding-regime-icon" data-lucide="${iconName}" width="24" height="24" aria-hidden="true"></i>`;

  const regimeCards = onboardingRegimes
    .map((item) => {
      const activeClass = item.id === regime ? " active" : "";
      const availability = getRegimeAvailability(item.id, 0, onboardingAvailabilityOptions);
      const unavailableClass = availability.available ? "" : " unavailable";
      return `
        <button type="button" class="onboarding-regime-card${activeClass}${unavailableClass}" data-onboarding-regime="${item.id}">
          <strong>
            ${renderOnboardingRegimeIcon(item.icon)}
            <span class="onboarding-regime-title-wrap">
              <span class="onboarding-regime-title-main">${escapeHtml(item.title)}</span>
              <span class="onboarding-regime-title-meta"> — ${escapeHtml(item.note)}</span>
            </span>
          </strong>
          <span class="onboarding-regime-limit">${availability.available ? item.limit : "Пока недоступен"}</span>
        </button>
      `;
    })
    .join("");

  const stepBody = `
    <div class="onboarding-step-body">
      <h3>Шаг 1 из 1. Выберите режим</h3>
      <p>Выберите режим для старта. После этого откроем кабинет и коротко покажем, где доходы, платежи и сроки.</p>
      <div class="onboarding-regime-grid">${regimeCards}</div>
    </div>
    <div class="onboarding-actions">
      <button type="button" class="btn btn-primary" data-action="onboarding-complete">Открыть кабинет</button>
    </div>
  `;

  const stepPills = [
    { index: 1, label: "Режим" }
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
        <h2><span class="onboarding-title-line">Посчитайте налоги</span><span class="onboarding-title-line">за одну минуту</span></h2>
        <p class="onboarding-lead">Выберите режим для старта и перейдите в кабинет. Реальные доходы вы добавите уже внутри сервиса.</p>
        <div class="onboarding-progress" aria-label="Прогресс настройки">${stepPills}</div>
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
    const key = String(row.category || "Без категории").trim() || "Без категории";
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

  if (normalized.includes("аренд")) return "cat-pill-rent";
  if (normalized.includes("оплат")) return "cat-pill-sales";
  if (normalized.includes("продаж") || normalized.includes("товар")) return "cat-pill-sales";
  if (normalized.includes("комисс")) return "cat-pill-commission";
  if (normalized.includes("услуг")) return "cat-pill-services";
  if (normalized.includes("проч") || normalized.includes("друг")) return "cat-pill-other";

  return "cat-pill-other";
}

function getIncomeSourceBadgeMarkup(row) {
  if (!isCrmIncomeEntry(row)) {
    return "";
  }
  return '<span class="income-source-badge">из CRM</span>';
}

function getIncomeExistingCategories(incomes = state.incomes) {
  return [...new Set(incomes.map((row) => String(row.category || "").trim()).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
}

function getIncomeCategoryCatalog(incomes = state.incomes) {
  return [...new Set([...INCOME_CATEGORY_PRESETS, ...getIncomeExistingCategories(incomes)])].sort((a, b) =>
    a.localeCompare(b, "ru")
  );
}

function getIncomeCategoryFieldState(selectedCategory = "") {
  const safeCategory = String(selectedCategory || "").trim();
  const categoryCatalog = getIncomeCategoryCatalog(state.incomes);
  const isKnownCategory = safeCategory && categoryCatalog.includes(safeCategory);
  const selectedCategoryValue = isKnownCategory
    ? safeCategory
    : safeCategory
      ? INCOME_CATEGORY_CUSTOM_VALUE
      : "";
  const customCategoryValue = isKnownCategory ? "" : safeCategory;
  const categoryOptionsMarkup = categoryCatalog
    .map((category) => `<option value="${escapeHtml(category)}" ${selectedCategoryValue === category ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");

  return {
    selectedCategoryValue,
    customCategoryValue,
    categoryOptionsMarkup: `
      <option value="" ${selectedCategoryValue ? "" : "selected"} disabled>Выберите категорию</option>
      ${categoryOptionsMarkup}
      <option value="${INCOME_CATEGORY_CUSTOM_VALUE}" ${selectedCategoryValue === INCOME_CATEGORY_CUSTOM_VALUE ? "selected" : ""}>Другое (ввести вручную)</option>
    `
  };
}

function applyIncomePresetAmount(value) {
  const amountInput = document.getElementById("incomeAmountInput");
  if (!(amountInput instanceof HTMLInputElement)) {
    return false;
  }
  amountInput.value = formatPlainAmount(value || 0);
  amountInput.dispatchEvent(new Event("input", { bubbles: true }));
  amountInput.focus();
  trackEvent("income_preset", { amount: normalizeIncome(amountInput.value) });
  return true;
}

function applyIncomeEditPresetAmount(value) {
  if (!(els.incomeEditAmountInput instanceof HTMLInputElement)) {
    return false;
  }

  els.incomeEditAmountInput.value = formatPlainAmount(value || 0);
  els.incomeEditAmountInput.focus();
  trackEvent("income_edit_preset", { amount: normalizeIncome(els.incomeEditAmountInput.value) });
  return true;
}

function syncIncomeEditCategoryMode(shouldFocus = false) {
  if (!(els.incomeEditCategorySelect instanceof HTMLSelectElement) || !els.incomeEditCategoryCustomWrap || !(els.incomeEditCategoryCustomInput instanceof HTMLInputElement)) {
    return;
  }

  const isCustom = els.incomeEditCategorySelect.value === INCOME_CATEGORY_CUSTOM_VALUE;
  els.incomeEditCategoryCustomWrap.classList.toggle("hidden", !isCustom);
  els.incomeEditCategoryCustomInput.required = isCustom;

  if (!isCustom) {
    els.incomeEditCategoryCustomInput.value = "";
    return;
  }

  if (shouldFocus) {
    els.incomeEditCategoryCustomInput.focus();
  }
}

function closeIncomeEditModal() {
  state.incomeEditId = null;

  if (els.incomeEditForm instanceof HTMLFormElement) {
    els.incomeEditForm.reset();
  }
  if (els.incomeEditCategoryCustomWrap) {
    els.incomeEditCategoryCustomWrap.classList.add("hidden");
  }
  if (els.incomeEditCategoryCustomInput instanceof HTMLInputElement) {
    els.incomeEditCategoryCustomInput.required = false;
    els.incomeEditCategoryCustomInput.value = "";
  }

  if (els.incomeEditModal && !els.incomeEditModal.classList.contains("hidden")) {
    closeModal(els.incomeEditModal);
  }
}

function openIncomeEditModal(row) {
  if (!row || !els.incomeEditModal || !(els.incomeEditForm instanceof HTMLFormElement)) {
    return;
  }

  const categoryFieldState = getIncomeCategoryFieldState(row.category);

  if (els.incomeEditIdInput instanceof HTMLInputElement) {
    els.incomeEditIdInput.value = String(row.id);
  }
  if (els.incomeEditDateInput instanceof HTMLInputElement) {
    els.incomeEditDateInput.value = String(row.date || "");
  }
  if (els.incomeEditAmountInput instanceof HTMLInputElement) {
    els.incomeEditAmountInput.value = formatPlainAmount(row.amount || 0);
  }
  if (els.incomeEditCategorySelect instanceof HTMLSelectElement) {
    els.incomeEditCategorySelect.innerHTML = categoryFieldState.categoryOptionsMarkup;
    els.incomeEditCategorySelect.value = categoryFieldState.selectedCategoryValue;
  }
  if (els.incomeEditCategoryCustomInput instanceof HTMLInputElement) {
    els.incomeEditCategoryCustomInput.value = categoryFieldState.customCategoryValue;
  }
  if (els.incomeEditCommentInput instanceof HTMLInputElement) {
    els.incomeEditCommentInput.value = String(row.comment || "");
  }

  syncIncomeEditCategoryMode(false);
  openModal(els.incomeEditModal);

  window.setTimeout(() => {
    if (els.incomeEditAmountInput instanceof HTMLInputElement) {
      els.incomeEditAmountInput.focus();
      els.incomeEditAmountInput.select();
    }
  }, 30);
}

function submitIncomeForm(form) {
  if (!(form instanceof HTMLFormElement)) {
    return false;
  }

  const formData = new FormData(form);
  const editId = Number(formData.get("editId") || 0);
  const amount = normalizeIncome(formData.get("amount") || 0);
  const date = String(formData.get("date") || "").trim();
  const categorySelect = String(formData.get("categorySelect") || "").trim();
  const categoryCustom = String(formData.get("categoryCustom") || "").trim();
  const category = categorySelect === INCOME_CATEGORY_CUSTOM_VALUE ? categoryCustom : categorySelect;
  const comment = String(formData.get("comment") || "").trim();

  if (!amount || !date || !category) {
    return false;
  }

  const shouldShowProNudgeAfterSave = editId <= 0 && state.incomes.length === 0;

  if (editId > 0) {
    const target = state.incomes.find((item) => item.id === editId);
    if (!target) {
      return false;
    }
    if (isCrmIncomeEntry(target)) {
      notifyCrmManagedIncome();
      trackEvent("income_edit_submit_blocked_crm", { id: editId });
      return false;
    }

    target.amount = amount;
    target.date = date;
    target.category = category;
    target.comment = comment;
    state.incomeEditId = null;
    if (els.incomeEditModal && !els.incomeEditModal.classList.contains("hidden")) {
      closeIncomeEditModal();
    }
    trackEvent("income_edit_save", { id: editId, amount, category });
  } else {
    if (!isProActive()) {
      const totalOps = getIncomeOpsCountTotal();
      if (totalOps >= FREE_INCOME_MONTH_LIMIT) {
        showBetaAccessModal("limit");
        trackEvent("income_add_limit_reached", { limit: FREE_INCOME_MONTH_LIMIT, totalOps });
        return false;
      }
    }

    const nextId = Math.max(0, ...state.incomes.map((x) => x.id)) + 1;
    state.incomes.unshift({ id: nextId, amount, date, category, comment });
    dashboardDemoMode = false;
    dashboardDemoIncomes = [];
    trackEvent("income_add", { amount, category });
  }

  state.incomeSelectedMonth = getDashboardMonthKeyFromDateValue(date, new Date());
  saveState();
  renderDashboard();
  if (shouldShowProNudgeAfterSave) {
    showFirstIncomeProNudge();
  }
  return true;
}

function shiftIncomeJournalMonth(delta) {
  const safeDelta = Number(delta || 0);
  if (!safeDelta || state.page !== "income") {
    return false;
  }

  const currentMonthStart = new Date();
  currentMonthStart.setDate(1);
  currentMonthStart.setHours(0, 0, 0, 0);

  const selectedMonthStart = parseDashboardMonthKey(state.incomeSelectedMonth) || new Date(currentMonthStart);
  const targetMonthStartRaw = new Date(selectedMonthStart.getFullYear(), selectedMonthStart.getMonth() + safeDelta, 1);
  const currentTime = currentMonthStart.getTime();

  if (safeDelta > 0 && selectedMonthStart.getTime() >= currentTime) {
    return false;
  }

  const targetMonthStart = safeDelta > 0 && targetMonthStartRaw.getTime() > currentTime
    ? currentMonthStart
    : targetMonthStartRaw;

  state.incomeSelectedMonth = formatDashboardMonthKey(targetMonthStart);
  saveState();
  renderDashboard();
  trackEvent(safeDelta < 0 ? "income_month_prev" : "income_month_next", { month: state.incomeSelectedMonth });
  return true;
}

function startIncomeEdit(incomeId) {
  const safeIncomeId = Number(incomeId || 0) || null;
  if (!safeIncomeId || state.page !== "income") {
    return;
  }

  const row = state.incomes.find((item) => item.id === safeIncomeId);
  if (!row) {
    return;
  }

  if (isCrmIncomeEntry(row)) {
    notifyCrmManagedIncome();
    trackEvent("income_edit_blocked_crm", { id: safeIncomeId });
    return;
  }

  state.incomeEditId = safeIncomeId;
  openIncomeEditModal(row);
  trackEvent("income_edit_open", { id: safeIncomeId });
}

function cancelIncomeEdit() {
  if (state.page !== "income") {
    return;
  }

  closeIncomeEditModal();
  trackEvent("income_edit_cancel");
}

function requestIncomeDelete(incomeId) {
  const id = Number(incomeId || 0);
  const row = state.incomes.find((item) => item.id === id);
  if (!row) {
    return;
  }

  if (isCrmIncomeEntry(row)) {
    notifyCrmManagedIncome();
    trackEvent("income_delete_blocked_crm", { id });
    return;
  }

  if (!els.incomeDeleteModal || !els.incomeDeleteMessage) {
    const ok = window.confirm(`Удалить запись ${row.category} на ${fmt(row.amount)}?\nЭто действие нельзя отменить.`);
    if (!ok) {
      return;
    }

    state.incomes = state.incomes.filter((item) => item.id !== id);
    if (state.incomeEditId === id) {
      closeIncomeEditModal();
    }
    saveState();
    renderDashboard();
    trackEvent("income_delete", { id });
    return;
  }

  pendingIncomeDeleteId = id;
  els.incomeDeleteMessage.innerHTML = `
    <strong>Удалить запись ${escapeHtml(row.category)} на ${fmt(row.amount)}?</strong>
    <span>Это действие нельзя отменить.</span>
  `;
  openModal(els.incomeDeleteModal);
}

function renderIncomePage() {
  if (state.incomeEditId && (!els.incomeEditModal || els.incomeEditModal.classList.contains("hidden"))) {
    state.incomeEditId = null;
  }

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
  const selectedMonthNameAccusative = MONTHS_ACCUSATIVE[selectedMonthStart.getMonth()] || "этот месяц";
  const incomeSummaryPeriodLabel = selectedMonthStart.getFullYear() === currentMonthStart.getFullYear()
    ? `За ${selectedMonthNameAccusative}`
    : `За ${selectedMonthNameAccusative} ${selectedMonthStart.getFullYear()}`;
  const canGoIncomeNextMonth = selectedMonthStart.getTime() < currentMonthStart.getTime();

  if (state.incomeSelectedMonth !== selectedMonthKey) {
    state.incomeSelectedMonth = selectedMonthKey;
    saveState();
  }

  const existingCategories = getIncomeExistingCategories(state.incomes);

  const selectedMonthRows = state.incomes.filter((row) => {
    const rowDate = new Date(row.date);
    if (Number.isNaN(rowDate.getTime())) return false;
    return rowDate.getFullYear() === selectedMonthStart.getFullYear() && rowDate.getMonth() === selectedMonthStart.getMonth();
  });
  const filteredRows = getSortedIncomes(getFilteredIncomes(selectedMonthRows, filters), filters.sort);
  const hasIncomeEntries = state.incomes.length > 0;
  const monthHasEntries = selectedMonthRows.length > 0;

  const totalIncome = getTotalIncome();
  const opsCount = state.incomes.length;
  const avgCheck = opsCount > 0 ? totalIncome / opsCount : 0;
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
  const MONTHS_DATIVE = ["январю", "февралю", "марту", "апрелю", "маю", "июню", "июлю", "августу", "сентябрю", "октябрю", "ноябрю", "декабрю"];
  const previousMonthLabelDative = MONTHS_DATIVE[previousMonthDate.getMonth()] || "прошлому месяцу";
  let dynamicsClass = "neutral";
  let dynamicsText = `— без изменений к ${previousMonthLabelDative}`;
  if (previousMonthIncome > 0) {
    const diffPct = ((currentMonthIncome - previousMonthIncome) / previousMonthIncome) * 100;
    const roundedPct = Math.round(Math.abs(diffPct));
    if (diffPct > 0.01) {
      dynamicsClass = "up";
      dynamicsText = `↑ +${roundedPct}% к ${previousMonthLabelDative}`;
    } else if (diffPct < -0.01) {
      dynamicsClass = "down";
      dynamicsText = `↓ -${roundedPct}% к ${previousMonthLabelDative}`;
    }
  } else if (currentMonthIncome > 0) {
    dynamicsClass = "up";
    dynamicsText = `↑ новый доход к ${previousMonthLabelDative}`;
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
      return `${numeric < 0 ? "-" : ""}${blnText} млрд ₸`;
    }

    if (abs >= 1000000) {
      const mln = abs / 1000000;
      const digits = mln >= 100 ? 0 : 1;
      const mlnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(mln);
      return `${numeric < 0 ? "-" : ""}${mlnText} млн ₸`;
    }

    return fmt(numeric);
  };

  const categoryOptions = existingCategories
    .map((category) => `<option value="${escapeHtml(category)}" ${filters.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");

  const incomeFormCategoryState = getIncomeCategoryFieldState();
  const isCommentVisibleByDefault = false;
  const categoryFormOptions = incomeFormCategoryState.categoryOptionsMarkup;
  const defaultIncomeDate = new Date().toISOString().slice(0, 10);
  const hasFilteredRows = filteredRows.length > 0;
  const monthEmptyTableMarkup = `
    <tr>
      <td colspan="5" class="empty-row empty-row-month">
        <span>Нет доходов за ${escapeHtml(selectedMonthLabel.toLowerCase())}</span>
        <button type="button" class="btn btn-primary btn-xs" data-action="focus-first-income">Добавить доход</button>
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
                <td>
                  <div class="income-category-cell">
                    <span class="cat-pill ${categoryToneClass}">${escapeHtml(row.category)}</span>
                    ${getIncomeSourceBadgeMarkup(row)}
                  </div>
                </td>
                <td>${escapeHtml(row.comment || "-")}</td>
                <td class="amount-cell"><span class="amount-sensitive">${fmt(row.amount)}</span></td>
                <td class="income-row-actions">
                  <button type="button" class="icon-action-btn icon-edit" data-edit-income="${row.id}" aria-label="Изменить запись" title="Изменить">
                    <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="icon-action-btn icon-delete" data-delete-income="${row.id}" aria-label="Удалить запись" title="Удалить">
                    <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            `;
          })
          .join("") +
        `
          <tr class="income-table-total-row">
            <td colspan="5">Итого: <span class="amount-sensitive">${fmt(filteredTotal)}</span> (${filteredRows.length} операций)</td>
          </tr>
        `
    : monthHasEntries
      ? '<tr><td colspan="5" class="empty-row">Нет операций по выбранным фильтрам.</td></tr>'
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
                  <div class="income-category-cell">
                    <span class="cat-pill ${categoryToneClass}">${escapeHtml(row.category)}</span>
                    ${getIncomeSourceBadgeMarkup(row)}
                  </div>
                  <span class="income-mobile-row-date">${formatDate(row.date)}</span>
                </div>
                ${comment ? `<div class="income-mobile-row-comment">${escapeHtml(comment)}</div>` : ""}
              </div>
              <div class="income-mobile-row-bottom">
                <strong class="income-mobile-row-amount amount-sensitive ${amountSizeClass}" title="${escapeHtml(amountText)}">${amountDisplayText}</strong>
                <div class="income-mobile-row-actions">
                  <button type="button" class="icon-action-btn icon-edit" data-edit-income="${row.id}" aria-label="Изменить запись" title="Изменить">
                    <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="icon-action-btn icon-delete" data-delete-income="${row.id}" aria-label="Удалить запись" title="Удалить">
                    <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </article>
          `;
        })
        .join("")
    : monthHasEntries
      ? '<div class="income-cards-empty">Нет операций по выбранным фильтрам.</div>'
      : `
        <div class="income-cards-empty income-cards-empty-month">
          <p>Нет доходов за ${escapeHtml(selectedMonthLabel.toLowerCase())}</p>
          <button type="button" class="btn btn-primary btn-xs" data-action="focus-first-income">Добавить доход</button>
        </div>
      `;

  const incomeMobileTotalMarkup = hasFilteredRows
    ? `
      <div class="income-mobile-total">
        <strong>Итого: <span class="amount-sensitive">${fmt(filteredTotal)}</span> (${filteredRows.length} операций)</strong>
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
          <h3>Добавьте первый доход</h3>
          <p>После первой операции появятся журнал, фильтры и аналитика по налогам.</p>
          <button type="button" class="btn btn-primary" data-action="focus-first-income">Добавить первый доход</button>
          <p class="income-empty-hint">Подсказка: начните с примерной суммы за этот месяц, потом скорректируйте по факту.</p>
        </div>
      </article>
    `
    }

    ${
      showTrialBanner
        ? `
      <article class="card income-trial-notice" role="status" aria-live="polite">
        <div class="income-trial-main">
          <p class="income-trial-text">У вас осталось <strong>${remainingTrialOps}</strong> ${remainingTrialOps === 1 ? "операция" : remainingTrialOps >= 2 && remainingTrialOps <= 4 ? "операции" : "операций"} в Trial.</p>
          <button type="button" class="income-trial-link" data-action="open-pro" title="${PRO_AFTER_TRIAL_TOOLTIP}">Попробовать Pro 30 дней →</button>
        </div>
        <button type="button" class="income-trial-close" data-action="dismiss-income-trial-banner" aria-label="Закрыть уведомление">×</button>
      </article>
    `
        : ""
    }

    <div class="grid grid-2 income-layout">
      <article class="card income-form-card" data-tour-target="income-form">
        <div class="income-card-head">
          <h3>${hasIncomeEntries ? "Добавить доход" : "Первый доход"}</h3>
        </div>
        <form id="incomeForm" class="stack-form income-form">
          <input type="hidden" name="editId" value="" />
          <div class="form-grid-2">
            <label>Дата<input name="date" type="date" value="${defaultIncomeDate}" required /></label>
            <label>Сумма (₸)
              <input id="incomeAmountInput" name="amount" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="" required />
              <div class="amount-presets" aria-label="Быстрый выбор суммы">
                <button type="button" data-income-preset="50000">50 тыс ₸</button>
                <button type="button" data-income-preset="100000">100 тыс ₸</button>
                <button type="button" data-income-preset="250000">250 тыс ₸</button>
                <button type="button" data-income-preset="500000">500 тыс ₸</button>
              </div>
            </label>
          </div>

          <label>Категория
            <select id="incomeCategorySelect" name="categorySelect" required>
              ${categoryFormOptions}
            </select>
          </label>
          <label id="incomeCategoryCustomWrap" class="hidden">Своя категория
            <input id="incomeCategoryCustomInput" name="categoryCustom" type="text" value="" placeholder="Например: Партнерская выплата" />
          </label>

          ${
            isCommentVisibleByDefault
              ? ""
              : '<button type="button" class="income-comment-toggle" data-action="toggle-income-comment">+ Добавить комментарий</button>'
          }
          <label id="incomeCommentWrap" class="income-comment-wrap ${isCommentVisibleByDefault ? "is-visible" : ""}">Комментарий
            <input id="incomeCommentInput" name="comment" type="text" value="" placeholder="Опционально" />
          </label>

          <div class="income-form-actions">
            <button class="btn btn-primary income-save-btn" type="submit" data-tour-target="income-save">Сохранить операцию</button>
          </div>
        </form>
      </article>

      <article class="card income-summary-card income-summary-card-compact" data-tour-target="income-summary">
        <h3>Итого по доходам</h3>
        <div class="stat-value amount-sensitive">${fmt(totalIncome)}</div>
        <p class="text-muted">Операций в базе: ${opsCount}</p>
        <p class="text-muted">Текущий режим: ${regimeLabel(state.regime)}</p>

        <div class="income-metrics-combined income-metrics-combined-compact">
          <div class="income-metrics-secondary income-metrics-secondary-single">
            <div class="income-metric-inline">
              <small>${escapeHtml(incomeSummaryPeriodLabel)}</small>
              <strong class="amount-sensitive">${fmt(monthTotal)}</strong>
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
          <h3>Журнал доходов</h3>
          <span>Показано ${filteredRows.length} из ${monthOpsCount} · <span class="amount-sensitive">${fmt(filteredTotal)}</span></span>
        </div>
        <div class="income-journal-actions">
          <button class="btn btn-ghost" type="button" data-action="export-income-csv">Экспорт CSV</button>
          ${canExport ? "" : '<span class="lock-hint">Pro</span>'}
        </div>
      </div>

      <div class="income-month-toolbar">
        <div class="income-month-switcher" aria-label="Выбор месяца журнала доходов">
          <button type="button" class="btn btn-ghost btn-xs income-month-nav" data-action="income-month-prev" aria-label="Предыдущий месяц">←</button>
          <strong class="income-month-label">${escapeHtml(selectedMonthLabel)}</strong>
          <button type="button" class="btn btn-ghost btn-xs income-month-nav" data-action="income-month-next" aria-label="Следующий месяц" ${canGoIncomeNextMonth ? "" : "disabled"}>→</button>
        </div>
        <div class="income-month-total">${monthOpsCount} операций · <span class="amount-sensitive">${fmt(monthTotal)}</span></div>
      </div>

      <form id="incomeFilterForm" class="income-filters">
        <label class="income-filter-field income-filter-search">
          <span class="income-filter-label">Поиск</span>
          <div class="income-filter-input-wrap">
            <input name="query" type="text" value="${escapeHtml(filters.query)}" placeholder="Поиск по комментарию, категории, сумме" />
          </div>
        </label>
        <label class="income-filter-field">
          <span class="income-filter-label">Категория</span>
          <div class="income-filter-select-wrap">
            <select name="category">
              <option value="all" ${filters.category === "all" ? "selected" : ""}>Все категории</option>
              ${categoryOptions}
            </select>
          </div>
        </label>
        <label class="income-filter-field">
          <span class="income-filter-label">Сортировка</span>
          <div class="income-filter-select-wrap">
            <select name="sort">
              <option value="date_desc" ${filters.sort === "date_desc" ? "selected" : ""}>Сначала новые</option>
              <option value="date_asc" ${filters.sort === "date_asc" ? "selected" : ""}>Сначала старые</option>
              <option value="amount_desc" ${filters.sort === "amount_desc" ? "selected" : ""}>Сумма по убыванию</option>
              <option value="amount_asc" ${filters.sort === "amount_asc" ? "selected" : ""}>Сумма по возрастанию</option>
            </select>
          </div>
        </label>
        ${
          hasActiveIncomeFilters
            ? '<div class="income-filter-actions"><button class="income-filter-reset-link" type="button" data-reset-income-filters>Сбросить</button></div>'
            : ""
        }
      </form>

      <div class="table-wrap income-table-wrap income-table-desktop">
        <table class="table income-table">
          <thead><tr><th>Дата</th><th>Категория</th><th>Комментарий</th><th>Сумма</th><th></th></tr></thead>
          <tbody>${incomeTableRowsMarkup}</tbody>
        </table>
      </div>

      <div class="income-mobile-list" aria-label="Журнал доходов (мобильная версия)">
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

  els.pageContent.querySelectorAll("[data-income-preset]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      applyIncomePresetAmount(btn.dataset.incomePreset);
    });
  });
  els.pageContent.querySelectorAll('[data-action="income-month-prev"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      shiftIncomeJournalMonth(-1);
    });
  });
  els.pageContent.querySelectorAll('[data-action="income-month-next"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      shiftIncomeJournalMonth(1);
    });
  });
  els.pageContent.querySelectorAll("[data-edit-income]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startIncomeEdit(btn.dataset.editIncome);
    });
  });
  els.pageContent.querySelectorAll("[data-delete-income]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      requestIncomeDelete(btn.dataset.deleteIncome);
    });
  });

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
      return `${numeric < 0 ? "-" : ""}${blnText} млрд ₸`;
    }

    if (abs >= 1000000) {
      const mln = abs / 1000000;
      const digits = mln >= 100 ? 0 : 1;
      const mlnText = new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
      }).format(mln);
      return `${numeric < 0 ? "-" : ""}${mlnText} млн ₸`;
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
  queueTaxProfileUpsert(state.regime, planner.income, scenarioTax);
  const effectiveRate = planner.income > 0 ? (scenarioTax.total / planner.income) * 100 : 0;
  const reserveAmount = scenarioTax.total * (1 + planner.reservePct / 100);
  const nextPaymentSummary = getUpcomingPaymentSummary();
  const hasUpcomingPaymentSummary = Boolean(nextPaymentSummary.row && nextPaymentSummary.breakdown);
  const nextActionPlan = hasUpcomingPaymentSummary
    ? getTaxActionPlanForUpcomingPayment(nextPaymentSummary, state.regime)
    : getTaxActionPlan(state.regime, scenarioTax, planner.income);
  const nextActionHtml = renderTaxActionPlan(nextActionPlan, "is-taxes");
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
  const ipnReserveMonthly = Number(scenarioTax.ipn || 0);
  const ipnReserveDisplay = fmt(ipnReserveMonthly);
  const taxesDeadlineLabel = hasUpcomingPaymentSummary ? nextPaymentSummary.dueLabel : getNextTaxDueDateLabel();
  const reserveMainValue = hasRealJournalIncome
    ? (isMobileTaxesView ? formatMobileTaxKpiAmount(reserveAmount) : fmt(reserveAmount))
    : "нет данных";
  const ytdTaxDisplay = isMobileTaxesView ? formatMobileTaxKpiAmount(ytdTaxTotal) : fmt(ytdTaxTotal);
  const annualForecastDisplay = isMobileTaxesView ? formatMobileTaxKpiAmount(annualForecast) : fmt(annualForecast);
  const scenarioTaxSizeClass = isMobileTaxesView ? getMobileTaxKpiSizeClass(scenarioTaxDisplay) : "";
  const reserveMainSizeClass = hasRealJournalIncome && isMobileTaxesView ? getMobileTaxKpiSizeClass(reserveMainValue) : "";
  const ytdTaxSizeClass = isMobileTaxesView ? getMobileTaxKpiSizeClass(ytdTaxDisplay) : "";

  const getTaxShareColor = (label) => {
    const key = String(label || "").toUpperCase();
    if (key.includes("ОПВР")) return "#74B9FF";
    if (key.includes("ОПВ")) return "#6C5CE7";
    if (key.includes("ВОСМС")) return "#55EFC4";
    if (key.includes("ИПН")) return "#FF7675";
    if (key.includes("СОЦ") || key === "СН" || key.includes("СН")) return "#636E72";
    if (key.startsWith("СО")) return "#FDCB6E";
    return "#6C5CE7";
  };

  const getBreakdownOrder = (label) => {
    const key = String(label || "").toUpperCase();
    if (key.includes("ОПВ")) return 0;
    if (key.startsWith("СО")) return 1;
    if (key.includes("ОПВР")) return 2;
    if (key.includes("ВОСМС")) return 3;
    if (key.includes("ИПН")) return 4;
    return 10;
  };

  const breakdownLines = hasUpcomingPaymentSummary && nextPaymentSummary.breakdown
    ? getPaymentBreakdownRowsForDisplay(nextPaymentSummary.breakdown, state.regime)
        .filter((row) => String(row.label || "").trim() !== "За сотрудников")
        .map((row) => ({
          label: row.label,
          value: row.value,
          color: getTaxShareColor(row.label),
          note: ""
        }))
        .sort((a, b) => getBreakdownOrder(a.label) - getBreakdownOrder(b.label))
    : getTaxLines(scenarioTax, state.regime)
        .filter((line) => Math.round(Number(line.value || 0)) > 0)
        .map((line) => {
          const isIpnReserve = line.label.includes("ИПН");
          return {
            label: isIpnReserve ? "ИПН (резерв/мес)" : line.label,
            value: line.value,
            color: getTaxShareColor(line.label),
            note: isIpnReserve ? "платится раз в полгода" : ""
          };
        })
        .sort((a, b) => getBreakdownOrder(a.label) - getBreakdownOrder(b.label));

  const breakdownTotal = breakdownLines.reduce((sum, line) => sum + Number(line.value || 0), 0);

  const breakdownRows = breakdownLines
    .map(
      (line) => `
        <div class="tax-breakdown-row">
          <div class="tax-breakdown-title">
            <span class="tax-breakdown-dot" style="background:${line.color};"></span>
            <span>${line.label}</span>
          </div>
          <div class="tax-breakdown-track" aria-hidden="true">
            <span style="width:${Math.max(Math.min(breakdownTotal > 0 ? (Number(line.value || 0) / breakdownTotal) * 100 : 0, 100), Number(line.value || 0) > 0 ? 4 : 0)}%; background:${line.color};"></span>
          </div>
          <div class="tax-breakdown-value-wrap">
            <strong class="tax-breakdown-value amount-sensitive">${fmt(line.value)}</strong>
            ${line.note ? `<small class="tax-breakdown-note">${line.note}</small>` : ""}
          </div>
        </div>
      `
    )
    .join("");
  const isCompactBreakdown = breakdownLines.length <= 1;
  const payNowTotal = hasUpcomingPaymentSummary
    ? nextPaymentSummary.selfTotal
    : Math.max(0, Math.round(getTaxLoadPayNow(state.regime, scenarioTax)));
  const canShowEmployeesTaxes = hasEmployeeFeatureEnabled();
  const employeeTaxSummary = canShowEmployeesTaxes
    ? hasUpcomingPaymentSummary && nextPaymentSummary.breakdown
      ? {
          rows: Array.isArray(nextPaymentSummary.breakdown.employeeRows) ? nextPaymentSummary.breakdown.employeeRows : [],
          remittanceTotal: Number(nextPaymentSummary.breakdown.employeeRemittanceTotal || 0),
          employerChargesTotal: Number(nextPaymentSummary.breakdown.employeeEmployerChargesTotal || 0)
        }
      : getEmployeesRemittanceSummaryForPeriod(new Date())
    : { rows: [], remittanceTotal: 0, employerChargesTotal: 0 };
  const employeeTaxRows = Array.isArray(employeeTaxSummary.rows) ? employeeTaxSummary.rows : [];
  const hasEmployeesTaxCard = employeeTaxRows.length > 0;
  const totalEmployeesRemittance = Math.round(employeeTaxSummary.remittanceTotal || 0);
  const totalEmployeesEmployerCharges = Math.round(employeeTaxSummary.employerChargesTotal || 0);
  const employeeTaxRowsNeedingReview = hasUpcomingPaymentSummary && nextPaymentSummary.breakdown
    ? Array.isArray(nextPaymentSummary.breakdown.employeesNeedingReview)
      ? nextPaymentSummary.breakdown.employeesNeedingReview
      : employeeTaxRows.filter((row) => row.needsMonthlyAccrualReview)
    : employeeTaxRows.filter((row) => row.needsMonthlyAccrualReview);
  const kpiEmployeesRemittanceTotal = hasUpcomingPaymentSummary
    ? nextPaymentSummary.employeeRemittanceTotal
    : totalEmployeesRemittance;
  const kpiEmployeesEmployerChargesTotal = hasUpcomingPaymentSummary
    ? nextPaymentSummary.employeeEmployerChargesTotal
    : totalEmployeesEmployerCharges;
  const payNowTotalWithEmployees = hasUpcomingPaymentSummary
    ? nextPaymentSummary.total
    : payNowTotal + totalEmployeesRemittance;
  const payNowDisplayWithEmployees = isMobileTaxesView ? formatMobileTaxKpiAmount(payNowTotalWithEmployees) : fmt(payNowTotalWithEmployees);
  const payNowSizeClassWithEmployees = isMobileTaxesView ? getMobileTaxKpiSizeClass(payNowDisplayWithEmployees) : "";
  const shouldShowIpnReserve = state.regime !== "self" && ipnReserveMonthly > 0;
  const paymentCompositionRows = hasUpcomingPaymentSummary && nextPaymentSummary.breakdown
    ? getPaymentBreakdownRowsForDisplay(nextPaymentSummary.breakdown, state.regime).map((row) => ({
        ...row,
        note: row.label === "За сотрудников" && kpiEmployeesEmployerChargesTotal > 0
          ? `из них расходы работодателя: ${fmt(kpiEmployeesEmployerChargesTotal)}`
          : ""
      }))
    : [
        { label: "За себя", value: payNowTotal, tone: "default", note: "" },
        ...(kpiEmployeesRemittanceTotal > 0
          ? [{
              label: "За сотрудников",
              value: kpiEmployeesRemittanceTotal,
              tone: "default",
              note: kpiEmployeesEmployerChargesTotal > 0 ? `из них расходы работодателя: ${fmt(kpiEmployeesEmployerChargesTotal)}` : ""
            }]
          : []),
        ...(shouldShowIpnReserve
          ? [{
              label: "Резерв ИПН",
              value: ipnReserveMonthly,
              tone: "reserve",
              note: "откладывать"
            }]
          : [])
      ];
  const visiblePaymentCompositionRows = paymentCompositionRows
    .filter((row) => Number(row && row.value || 0) > 0);
  const useCompactTaxesLayout = !isMobileTaxesView && !hasEmployeesTaxCard && visiblePaymentCompositionRows.length === 1;
  const compactCompositionRow = useCompactTaxesLayout ? visiblePaymentCompositionRows[0] : null;
  const compactPaymentPeriodLabel = hasUpcomingPaymentSummary
    ? String(nextPaymentSummary.title || "").trim()
    : "Ближайший платёж";
  const paymentCompositionRowsHtml = visiblePaymentCompositionRows
    .map((row) => `
      <div class="tax-kpi-composition-row${row.tone === "reserve" ? " tax-kpi-composition-row-reserve" : ""}">
        <div class="tax-kpi-composition-copy">
          <span class="tax-kpi-composition-label">${escapeHtml(row.label)}</span>
          ${row.note ? `<small class="tax-kpi-composition-note">${escapeHtml(row.note)}</small>` : ""}
        </div>
        <strong class="tax-kpi-composition-value amount-sensitive">${fmt(row.value)}</strong>
      </div>
    `)
    .join("");
  const taxesKpiHtml = useCompactTaxesLayout
    ? `
      <article class="card tax-kpi-card tax-kpi-card-total tax-kpi-card-total-compact" data-tour-target="taxes-kpi">
        <div class="tax-kpi-total-main">
          <div class="stat-title">Итого к уплате</div>
          <div class="tax-kpi-main amount-sensitive${payNowSizeClassWithEmployees}">${payNowDisplayWithEmployees}</div>
          <div class="tax-kpi-meta">до ${taxesDeadlineLabel}</div>
          <div class="tax-kpi-subtitle tax-kpi-subtitle-inverse">${escapeHtml(compactPaymentPeriodLabel)}</div>
          ${
            compactCompositionRow
              ? `
                <div class="tax-kpi-inline-summary">
                  <div class="tax-kpi-inline-copy">
                    <span class="tax-kpi-inline-caption">Состав платежа</span>
                    <span class="tax-kpi-inline-label">${escapeHtml(compactCompositionRow.label)}</span>
                  </div>
                  <strong class="tax-kpi-inline-value amount-sensitive">${fmt(compactCompositionRow.value)}</strong>
                </div>
              `
              : ""
          }
        </div>
      </article>
    `
    : `
      <article class="card tax-kpi-card tax-kpi-card-total tax-kpi-card-total-combined" data-tour-target="taxes-kpi">
        <div class="tax-kpi-total-shell">
          <div class="tax-kpi-total-main">
            <div class="stat-title">Итого к уплате</div>
            <div class="tax-kpi-main amount-sensitive${payNowSizeClassWithEmployees}">${payNowDisplayWithEmployees}</div>
            <div class="tax-kpi-meta">до ${taxesDeadlineLabel}</div>
          </div>
          <div class="tax-kpi-total-side">
            <div class="tax-kpi-side-title">Состав платежа</div>
            <div class="tax-kpi-composition-list">
              ${paymentCompositionRowsHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  const useBalancedTaxesDesktopLayout = !isMobileTaxesView && !useCompactTaxesLayout;
  const employeeBreakdownSectionHtml = hasEmployeesTaxCard
    ? `
      <div class="tax-breakdown-section tax-breakdown-section-employees">
        <div class="tax-breakdown-section-head">
          <h4>За сотрудников</h4>
          <span>${hasUpcomingPaymentSummary ? `к ближайшему сроку до ${taxesDeadlineLabel}` : "к перечислению в этом месяце"}</span>
        </div>
        <div class="tax-employees-list tax-employees-list-embedded">
          ${employeeTaxRows
            .map(
              (row) => `
                <div class="tax-employees-row">
                  <span class="tax-employees-row-copy">
                    <span>${escapeHtml(row.name)}</span>
                    ${Number(row.employerChargesTotal || 0) > 0 ? `<small class="tax-employees-row-subnote">из них расходы работодателя: ${fmt(row.employerChargesTotal)}</small>` : ""}
                    ${row.needsMonthlyAccrualReview ? `<small>Проверьте ${escapeHtml(row.reviewSummary || "месяц начисления")}</small>` : ""}
                  </span>
                  <strong class="amount-sensitive">${fmt(row.totalRemittance)}</strong>
                </div>
              `
            )
            .join("")}
          <div class="tax-employees-row tax-employees-row-total">
            <span>Итого к перечислению</span>
            <strong class="amount-sensitive">${fmt(totalEmployeesRemittance)}</strong>
          </div>
        </div>
        ${totalEmployeesEmployerCharges > 0 ? `<p class="tax-breakdown-secondary-note">Из них расходы работодателя: ${fmt(totalEmployeesEmployerCharges)}.</p>` : ""}
        ${employeeTaxRowsNeedingReview.length > 0 ? `<p class="tax-breakdown-warning">У ${employeeTaxRowsNeedingReview.length} ${employeeTaxRowsNeedingReview.length === 1 ? "сотрудника" : "сотрудников"} нужно уточнить начисление за неполный месяц, чтобы сумма за сотрудников была точной.</p>` : ""}
      </div>
    `
    : "";
  const nextActionPanelHtml = `
    <article class="card tax-next-action-card">
      ${nextActionHtml}
    </article>
  `;
  const breakdownSelfSectionHtml = hasEmployeesTaxCard
    ? `
      <div class="tax-breakdown-section tax-breakdown-section-self">
        <div class="tax-breakdown-section-head">
          <h4>За себя</h4>
          <span>${hasUpcomingPaymentSummary
            ? `${String(nextPaymentSummary.title || "ближайший платёж").trim().toLowerCase()} · до ${taxesDeadlineLabel}`
            : (state.regime === "self" ? "ежемесячные платежи за себя" : "ежемесячные платежи и резерв ИПН")}</span>
        </div>
        <div class="tax-breakdown-list${isCompactBreakdown ? " tax-breakdown-list-compact" : ""}">${breakdownRows}</div>
      </div>
    `
    : `<div class="tax-breakdown-list${isCompactBreakdown ? " tax-breakdown-list-compact" : ""}">${breakdownRows}</div>`;
  const breakdownPanelHtml = `
    <article class="card tax-breakdown-card${isCompactBreakdown ? " tax-breakdown-card-compact" : ""}">
      <h3>Из чего состоит сумма</h3>
      ${breakdownSelfSectionHtml}
      ${employeeBreakdownSectionHtml}
    </article>
  `;

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
      const cardClass = `${isBest ? " best" : ""}${isCurrent ? " current" : ""}${row.availability.available ? "" : " unavailable"}`;

      let deltaText = suppressBestBadge ? "введите доход для сравнения" : isBest ? "Минимальная нагрузка в сценарии" : "";
      if (row.availability.requiresIpClosure) {
        deltaText = row.availability.reason || "По доходу подходит, но сначала нужно закрыть ИП.";
      } else if (!row.availability.available) {
        deltaText = row.availability.reason || "Недоступно по лимиту";
      }

      const badges = [];
      if (isBest && row.availability.available && !suppressBestBadge) {
        badges.push('<span class="tax-compare-badge best">ВЫГОДНЕЕ</span>');
      }
      if (isCurrent) {
        badges.push('<span class="tax-compare-badge current">ВАШ РЕЖИМ</span>');
      }
      const badgesHtml = badges.length ? `<div class="tax-compare-badges">${badges.join("")}</div>` : "";
      const explainAction = (!row.availability.available || row.availability.requiresIpClosure)
        ? `<button type="button" class="tax-compare-explain" data-action="open-unavailable-regime" data-regime="${row.regimeId}" data-income="${planner.income}">${row.availability.available ? "Важно перед переходом" : "Почему недоступно?"}</button>`
        : "";

      return `
        <article class="tax-compare-card${cardClass}">
          ${badgesHtml}
          <div class="tax-compare-title">${row.name}</div>
          <div class="tax-compare-value amount-sensitive">${row.availability.available ? fmt(row.tax.total) : "Скоро"}</div>
          <div class="tax-compare-context">${row.availability.available ? `при доходе <span class="amount-sensitive">${fmt(planner.income)}</span>/мес` : "режим в разработке"}</div>
          ${deltaText ? `<div class="tax-compare-note">${deltaText}</div>` : ""}
          ${explainAction}
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
        ? `мин. соцплатежи: ${fmt(IP_MIN_SOCIAL_PAYMENTS_TOTAL)}`
        : "мин. соцплатежи"
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
            <span>Доход</span>
            <strong class="amount-sensitive">${fmt(item.income)}</strong>
          </div>
          <div class="tax-forecast-mobile-row">
            <span>Налоги</span>
            <strong class="amount-sensitive">${fmt(item.taxTotal)}</strong>
          </div>
          ${taxNote}
        </article>
      `;
    })
    .join("");

  const upcomingDeadlines = getUpcomingDeadlines();
  const deadlinesPanelTourTarget = upcomingDeadlines.length ? "taxes-deadlines" : "taxes-deadline-focus";
  const nextPaymentDeadlines = upcomingDeadlines.filter((row) => row.type === "payment").slice(0, 3);
  const nextReportDeadlines = upcomingDeadlines.filter((row) => row.type === "report").slice(0, 2);
  const reportFocusTarget = nextPaymentDeadlines.length === 0 ? "taxes-deadline-focus" : "";
  const renderTaxDeadlineItem = (row, index, tourTarget = "") => {
    const employeeRemittanceSummary = getDeadlineEmployeeRemittanceSummary(row);
    const employeeRemittanceTotal = Math.round(employeeRemittanceSummary.remittanceTotal || 0);
    const employeeEmployerChargesTotal = Math.round(employeeRemittanceSummary.employerChargesTotal || 0);
    const quarterReportBreakdown = isFno200Deadline(row) ? getDeadlineQuarterReportBreakdown(row) : null;
    const employeeReviewCount = quarterReportBreakdown
      ? Number(quarterReportBreakdown.employeesNeedingAccrualReviewCount || 0)
      : getDeadlineEmployeeRowsNeedingReview(row).length;
    const contextLabel = getDeadlineContextLabel(row, state.regime);
    const extraLines = [];
    if (employeeRemittanceTotal > 0) {
      extraLines.push(`<small class="tax-deadline-extra">К перечислению за сотрудников: <span class="amount-sensitive">${fmt(employeeRemittanceTotal)}</span></small>`);
      if (employeeEmployerChargesTotal > 0) {
        extraLines.push(`<small class="tax-deadline-extra">Из них расходы работодателя: <span class="amount-sensitive">${fmt(employeeEmployerChargesTotal)}</span></small>`);
      }
    } else if (quarterReportBreakdown && quarterReportBreakdown.employeesCount > 0) {
      extraLines.push(`<small class="tax-deadline-extra">Сотрудников в квартале: <span class="amount-sensitive">${quarterReportBreakdown.employeesCount}</span></small>`);
    }
    if (quarterReportBreakdown && quarterReportBreakdown.hasOwnerInReport) {
      extraLines.push('<small class="tax-deadline-extra">ИП в отчете: <span class="amount-sensitive">да</span></small>');
    }
    if (employeeReviewCount > 0) {
      extraLines.push(`<small class="tax-deadline-extra tax-deadline-extra-warning">Проверьте неполный месяц: <span class="amount-sensitive">${employeeReviewCount}</span></small>`);
    }
    const extraHtml = extraLines.join("");

    return `
      <div class="tax-deadline-item"${index === 0 && tourTarget ? ` data-tour-target="${tourTarget}"` : ""}>
        <div>
          <strong>${formatDateShort(row.date)}</strong>
          <span>${escapeHtml(row.title)}</span>
          ${contextLabel ? `<small class="tax-deadline-context">${escapeHtml(contextLabel)}</small>` : ""}
          ${extraHtml}
        </div>
        <em>${getLandingDeadlineDueInfo(row.date).text}</em>
      </div>
    `;
  };
  const paymentDeadlinesHtml = nextPaymentDeadlines.length
    ? nextPaymentDeadlines
        .map((row, index) => renderTaxDeadlineItem(row, index, "taxes-deadline-focus"))
        .join("")
    : '<p class="text-muted">Ближайших платежей по текущему режиму нет.</p>';
  const reportDeadlinesHtml = nextReportDeadlines.length
    ? nextReportDeadlines
        .map((row, index) => renderTaxDeadlineItem(row, index, reportFocusTarget))
        .join("")
    : "";
  const deadlinesPanelHtml = `
    <article class="card tax-deadlines-panel" data-tour-target="${deadlinesPanelTourTarget}">
      <div class="tax-deadlines-head">
        <h3>Что скоро платить</h3>
        <button class="btn btn-ghost btn-xs" type="button" data-page="calendar">Открыть календарь</button>
      </div>
      <div class="tax-deadline-list">${paymentDeadlinesHtml}</div>
      ${
        reportDeadlinesHtml
          ? `
            <div class="tax-deadline-subsection">
              <h4 class="tax-deadline-subtitle">Что скоро сдавать</h4>
              <div class="tax-deadline-list tax-deadline-list-report">${reportDeadlinesHtml}</div>
            </div>
          `
          : ""
      }
    </article>
  `;
  const isMobileTaxesPlanner = isMobileTaxesView;
  const isOurPlannerRegime = state.regime === "our";
  const incomePresetsHtml = `
    <div class="tax-presets">
      <span>Быстрый доход:</span>
      <button type="button" data-tax-income-preset="200000">200 тыс ₸</button>
      <button type="button" data-tax-income-preset="500000">500 тыс ₸</button>
      <button type="button" data-tax-income-preset="1000000">1 млн ₸</button>
      <button type="button" data-tax-income-preset="2000000">2 млн ₸</button>
    </div>
  `;
  const expensePresetsHtml = `
    <div class="tax-presets${isOurPlannerRegime ? "" : " disabled"}">
      <span>Расходы для ОУР:</span>
      <button type="button" data-tax-expense-ratio="0.2" ${isOurPlannerRegime ? "" : "disabled"}>20%</button>
      <button type="button" data-tax-expense-ratio="0.4" ${isOurPlannerRegime ? "" : "disabled"}>40%</button>
      <button type="button" data-tax-expense-ratio="0.6" ${isOurPlannerRegime ? "" : "disabled"}>60%</button>
    </div>
  `;
  const reservePresetsHtml = `
    <div class="tax-presets">
      <span>Запас резерва:</span>
      <button type="button" data-tax-reserve-preset="10">10%</button>
      <button type="button" data-tax-reserve-preset="15">15%</button>
      <button type="button" data-tax-reserve-preset="20">20%</button>
    </div>
  `;
  const plannerBodyHtml = isMobileTaxesPlanner
    ? `
      <form id="taxPlannerForm" class="tax-planner-form tax-planner-form-mobile">
        <div class="tax-form-grid tax-form-grid-mobile-main">
          <label>Доход в месяц (₸)
            <input name="income" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(planner.income)}" required />
          </label>
        </div>
        ${incomePresetsHtml}
        <button type="button" class="btn btn-ghost btn-xs tax-mobile-reset-btn" data-tax-reset>Сбросить</button>
        <details class="tax-mobile-advanced" ${mobileTaxPlannerAdvancedOpen ? "open" : ""}>
          <summary>
            <span>Доп. параметры</span>
            <small>Расходы ОУР и резерв</small>
          </summary>
          <div class="tax-mobile-advanced-body">
            <label>Запас к резерву (%)
              <input name="reservePct" type="number" min="0" max="50" step="1" value="${planner.reservePct}" />
            </label>
            ${reservePresetsHtml}
            ${
              isOurPlannerRegime
                ? `
                  <label>Расходы для ОУР (₸)
                    <input name="expenses" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(planner.ourExpensesDraft)}" />
                  </label>
                  ${expensePresetsHtml}
                `
                : `
                  <input type="hidden" name="expenses" value="${planner.ourExpensesDraft}" />
                  <p class="tax-input-hint muted tax-mobile-inline-hint">
                    Расходы влияют только на режим ОУР. Переключите режим сверху, чтобы включить этот параметр.
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
          <label>Доход в месяц (₸)
            <input name="income" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(planner.income)}" required />
          </label>
          <label>Расходы для ОУР (₸)
            <input name="expenses" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(planner.ourExpensesDraft)}" ${state.regime === "our" ? "" : "disabled"} />
          </label>
          <label>Запас к резерву (%)
            <input name="reservePct" type="number" min="0" max="50" step="1" value="${planner.reservePct}" />
          </label>        </div>
      </form>

      ${incomePresetsHtml}
      ${expensePresetsHtml}
      ${reservePresetsHtml}
    `;

  els.pageContent.innerHTML = useCompactTaxesLayout
    ? `
      <div class="tax-top-layout tax-top-layout-compact">
        <div class="tax-top-layout-main">
          ${taxesKpiHtml}
          ${nextActionPanelHtml}
        </div>
        ${deadlinesPanelHtml}
      </div>
    `
    : useBalancedTaxesDesktopLayout
      ? `
        <div class="tax-top-layout tax-top-layout-balanced">
          <div class="tax-top-layout-main">
            ${taxesKpiHtml}
            ${nextActionPanelHtml}
            ${breakdownPanelHtml}
          </div>
          <div class="tax-top-layout-main tax-top-layout-side">
            ${deadlinesPanelHtml}
          </div>
        </div>
      `
    : `
      <div class="tax-top-layout">
        ${taxesKpiHtml}
        ${deadlinesPanelHtml}
      </div>

      <div class="tax-columns-grid tax-columns-grid-primary mt-16">
        ${breakdownPanelHtml}
        ${nextActionPanelHtml}
      </div>
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
    return { text: "Выполнено", tone: "done" };
  }

  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(dateString);
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diffDays = Math.ceil((targetStart - dayStart) / 86400000);

  if (diffDays < 0) {
    return { text: `Просрочено на ${Math.abs(diffDays)} ${getLandingDayWord(Math.abs(diffDays))}`, tone: "overdue" };
  }

  if (diffDays === 0) {
    return { text: "Сегодня", tone: "urgent" };
  }

  if (diffDays <= 7) {
    return { text: `Через ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "urgent" };
  }

  if (diffDays <= 21) {
    return { text: `Через ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "soon" };
  }

  return { text: `Через ${diffDays} ${getLandingDayWord(diffDays)}`, tone: "normal" };
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

function getEarliestTrackedIncomeMonthStart(incomes = state.incomes) {
  if (!Array.isArray(incomes) || incomes.length === 0) {
    return null;
  }

  return incomes.reduce((earliest, row) => {
    const incomeDate = toDayStart(row && row.date);
    if (!incomeDate) {
      return earliest;
    }

    const monthStart = new Date(incomeDate.getFullYear(), incomeDate.getMonth(), 1);
    if (!earliest || monthStart < earliest) {
      return monthStart;
    }

    return earliest;
  }, null);
}

function getEffectiveTrackingMonthStart() {
  const registrationMonth = getRegistrationMonthStart();
  const earliestIncomeMonth = getEarliestTrackedIncomeMonthStart();

  if (!registrationMonth) {
    return earliestIncomeMonth;
  }

  if (!earliestIncomeMonth) {
    return registrationMonth;
  }

  return earliestIncomeMonth < registrationMonth ? earliestIncomeMonth : registrationMonth;
}

function isDeadlineBeforeRegistration(dateString, row = null) {
  const trackedPeriodStart = getDeadlineTrackedPeriodStart(row);
  const trackingStart = trackedPeriodStart
    ? (getEffectiveTrackingMonthStart() || getDeadlineTrackingFromDate())
    : (toDayStart(state.registrationDate) || getDeadlineTrackingFromDate());
  const compareDate = trackedPeriodStart || toDayStart(dateString);
  if (!trackingStart || !compareDate) return false;
  return compareDate < trackingStart;
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

  let changed = false;
  if (ensureRegistrationDate()) {
    changed = true;
  }

  const doneSet = new Set(state.doneDeadlines);
  const completionMeta = state.deadlineCompletionMeta && typeof state.deadlineCompletionMeta === "object"
    ? { ...state.deadlineCompletionMeta }
    : {};
  const checklistProgress = state.deadlineChecklistProgress && typeof state.deadlineChecklistProgress === "object"
    ? { ...state.deadlineChecklistProgress }
    : {};

  DEADLINES_2026.forEach((row) => {
    const source = getDeadlineCompletionSource(row.id);
    if (source !== "pre_service") return;

    if (doneSet.has(row.id)) {
      doneSet.delete(row.id);
      changed = true;
    }

    const key = String(row.id);
    if (Object.prototype.hasOwnProperty.call(completionMeta, key)) {
      delete completionMeta[key];
      changed = true;
    }

    if (Object.prototype.hasOwnProperty.call(checklistProgress, key)) {
      delete checklistProgress[key];
      changed = true;
    }
  });

  const nextDone = [...doneSet];
  if (nextDone.length !== state.doneDeadlines.length) {
    state.doneDeadlines = nextDone;
    changed = true;
  }

  if (changed) {
    state.deadlineCompletionMeta = completionMeta;
    state.deadlineChecklistProgress = checklistProgress;
  }

  state.calendarPreServiceApplied = true;

  return changed;
}
function isDeadlineInTrackingRange(dateString, row = null) {
  return !isDeadlineBeforeRegistration(dateString, row);
}
function getCalendarRowsByRegime() {
  const doneSet = new Set(normalizeDoneDeadlines(state.doneDeadlines));
  return DEADLINES_2026
    .filter((row) => isDeadlineApplicableForRegime(row, state.regime))
    .map((row, index) => {
      const done = doneSet.has(row.id);
      const due = getCalendarDueMeta(row.date, done);
      const dateObj = new Date(row.date);
      const isBeforeRegistration = isDeadlineBeforeRegistration(row.date, row);
      const blockedByMissingIin = isDeadlineBlockedByMissingEmployeeIin(row);
      const employeeReviewCount = isFno200Deadline(row)
        ? Number((getDeadlineQuarterReportBreakdown(row)?.employeesNeedingAccrualReviewCount) || 0)
        : isEmployeePayrollDeadline(row)
          ? getDeadlineEmployeeRowsNeedingReview(row).length
          : 0;

      return {
        ...row,
        done,
        due,
        dateObj,
        isBeforeRegistration,
        blockedByMissingIin,
        employeeReviewCount,
        typeLabel: row.type === "payment" ? "Платеж" : "Отчет",
        regimeLabel: getLandingDeadlineRegimeLabel(row.regime, state.regime),
        regimeHint: isBeforeRegistration
          ? "Срок был до регистрации в сервисе. Проверьте вручную."
          : blockedByMissingIin
            ? "Сначала заполните ИИН у сотрудников, чтобы отметить этот отчет как готовый."
            : employeeReviewCount > 0
              ? `Проверьте начисление за неполный месяц у ${employeeReviewCount} ${employeeReviewCount === 1 ? "сотрудника" : "сотрудников"}.`
            : ""
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

    if (filters.status === "done" && !row.done) {
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
  const isMobileCalendar = window.innerWidth <= 960;

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
      return { text: "Было до регистрации", tone: "prereg" };
    }
    return row && row.due ? row.due : { text: "—", tone: "normal" };
  };
  const getCalendarEventTypeTagMarkup = (title) => {
    const normalizedTitle = String(title || "").trim().toLowerCase();
    if (!normalizedTitle) return "";

    // Priority rule: any "Уплата" event is always a payment tag,
    // even if the title also contains "ФНО" or "910".
    if (/уплата|плат[её]ж/.test(normalizedTitle)) {
      return '<span style="display:inline-flex;align-items:center;border-radius:999px;background:#16A34A;color:#FFFFFF;font-size:11px;font-weight:700;padding:4px 8px;white-space:nowrap;">Платёж</span>';
    }

    // Reporting tag is now applied only to events with the word "Сдача".
    if (/сдача/.test(normalizedTitle)) {
      return '<span style="display:inline-flex;align-items:center;border-radius:999px;background:#EA580C;color:#FFFFFF;font-size:11px;font-weight:700;padding:4px 8px;white-space:nowrap;">Отчётность</span>';
    }

    return "";
  };

  const relevantRegimeRows = allRegimeRows.filter((row) => !row.isBeforeRegistration);
  const pendingTotal = relevantRegimeRows.filter((row) => !row.done).length;
  const getCalendarDiffDays = (row) => {
    const dateSource = row && row.dateObj instanceof Date ? row.dateObj : new Date(row && row.date ? row.date : "");
    const rowDayStart = new Date(dateSource.getFullYear(), dateSource.getMonth(), dateSource.getDate());
    if (Number.isNaN(rowDayStart.getTime())) return Number.POSITIVE_INFINITY;
    return Math.ceil((rowDayStart - dayStart) / 86400000);
  };
  const dueStats = relevantRegimeRows.reduce(
    (acc, row) => {
      if (row.done) return acc;
      const diffDays = getCalendarDiffDays(row);
      if (diffDays < 0) {
        acc.overdue += 1;
      } else if (diffDays === 0) {
        acc.today += 1;
      } else if (diffDays <= 7) {
        acc.soon += 1;
      }
      return acc;
    },
    { overdue: 0, today: 0, soon: 0 }
  );
  const overdueTotal = dueStats.overdue;
  const dueTodayTotal = dueStats.today;
  const dueSoonTotal = dueStats.soon;
  const urgentTotal = overdueTotal + dueTodayTotal + dueSoonTotal;
  const focusCandidates = relevantRegimeRows
    .filter((row) => !row.done)
    .map((row) => ({ row, diffDays: getCalendarDiffDays(row) }))
    .filter((item) => Number.isFinite(item.diffDays) && item.diffDays <= 7)
    .sort((a, b) => {
      const aBucket = a.diffDays < 0 ? 0 : 1;
      const bBucket = b.diffDays < 0 ? 0 : 1;
      if (aBucket !== bBucket) return aBucket - bBucket;
      if (aBucket === 0) return Math.abs(a.diffDays) - Math.abs(b.diffDays);
      return a.diffDays - b.diffDays;
    });
  const focusRow = focusCandidates.length > 0 ? focusCandidates[0].row : null;
  const focusTitle = focusRow
    ? `${formatDateShort(focusRow.date)} - ${focusRow.title}`
    : "Критичных сроков сейчас нет";
  const nextPending =
    relevantRegimeRows.find((row) => !row.done && row.dateObj >= dayStart) ||
    relevantRegimeRows.find((row) => !row.done) ||
    null;
  const nextPendingPayment =
    relevantRegimeRows.find((row) => !row.done && row.type === "payment" && row.dateObj >= dayStart) ||
    relevantRegimeRows.find((row) => !row.done && row.type === "payment") ||
    null;
  const nextPaymentSummary = getUpcomingPaymentSummary(nextPendingPayment);
  const nextPaymentTotal = nextPaymentSummary.total;
  const nextPaymentDueLabel = nextPaymentSummary.dueLabel;
  const activeRows = rows.filter((row) => !row.isBeforeRegistration);
  const preregRows = rows.filter((row) => row.isBeforeRegistration);
  const pendingRows = activeRows.filter((row) => !row.done);
  const importantRows = pendingRows.slice(0, 4);
  const importantRowIds = new Set(importantRows.map((row) => row.id));
  const monthRows = activeRows.filter((row) => !importantRowIds.has(row.id));
  const monthGroupsMap = new Map();

  monthRows.forEach((row) => {
    const keyDate = row.dateObj instanceof Date && !Number.isNaN(row.dateObj.getTime()) ? row.dateObj : new Date(row.date);
    const monthKey = `${keyDate.getFullYear()}-${String(keyDate.getMonth() + 1).padStart(2, "0")}`;
    const monthLabel = formatMonthYearLabel(keyDate);
    if (!monthGroupsMap.has(monthKey)) {
      monthGroupsMap.set(monthKey, {
        key: monthKey,
        label: monthLabel,
        date: new Date(keyDate.getFullYear(), keyDate.getMonth(), 1),
        rows: []
      });
    }
    monthGroupsMap.get(monthKey).rows.push(row);
  });

  const monthGroups = Array.from(monthGroupsMap.values()).sort((a, b) => a.date - b.date);
  const summaryCountLabel = pendingTotal > 0
    ? `${pendingTotal} активных ${pendingTotal === 1 ? "срок" : pendingTotal >= 2 && pendingTotal <= 4 ? "срока" : "сроков"}`
    : "Все активные сроки закрыты";
  const payNowHint = nextPaymentTotal > 0
    ? `до ${nextPaymentDueLabel}`
    : "Новых платежей сейчас нет";
  const importantValue = urgentTotal > 0 ? urgentTotal : importantRows.length;
  const importantHint = urgentTotal > 0
    ? focusTitle
    : importantRows.length > 0
      ? "Показываем ближайшие события без лишнего шума"
      : "На сегодня критичных сроков нет";
  let checklistTourAssigned = false;

  const getCalendarEventStatusMarkup = (row) => {
    if (row.isBeforeRegistration) {
      return row.done
        ? '<span class="badge badge-success">Подтверждено</span>'
        : '<span class="badge badge-neutral">Проверьте вручную</span>';
    }
    return row.done
      ? '<span class="badge badge-success">Сделано</span>'
      : '<span class="badge badge-warning">Ожидает</span>';
  };

  const getCalendarMarkButtonLabel = (row) => {
    if (row.isBeforeRegistration) {
      return row.done ? "Снять" : "Подтвердить";
    }
    return row.done ? "Снять" : "Отметить";
  };

  const renderCalendarEventCard = (row, variant = "default") => {
    const eventRegimeLabel = row.regimeLabel === "Для всех ИП" ? "" : row.regimeLabel;
    const eventContextLabel = getDeadlineContextLabel(row, state.regime) || eventRegimeLabel;
    const eventTypeTagMarkup = getCalendarEventTypeTagMarkup(row.title);
    const dueMeta = getCalendarDueBadgeMeta(row);
    const dueTone = dueMeta.tone;
    const dateLabel = row.isBeforeRegistration ? formatDate(row.date) : formatDateShort(row.date);
    const checklistTourTarget = !checklistTourAssigned ? ' data-tour-target="calendar-checklist-btn"' : "";
    checklistTourAssigned = true;
    const cardClasses = `calendar-event-card ${variant === "compact" ? "is-compact" : ""} ${row.done && !row.isBeforeRegistration ? "done" : ""} ${row.isBeforeRegistration ? "prereg" : ""} ${dueTone}`;
    const statusMarkup = getCalendarEventStatusMarkup(row);
    const actionsMarkup = `
      <div class="calendar-event-card-actions">
        <button type="button" class="btn btn-primary btn-xs"${checklistTourTarget} data-deadline-expand="${row.id}">Открыть</button>
        <button type="button" class="btn btn-ghost btn-xs" data-toggle-deadline="${row.id}" ${!row.done && row.blockedByMissingIin ? "disabled title=\"Сначала заполните ИИН у сотрудников\"" : ""}>${getCalendarMarkButtonLabel(row)}</button>
      </div>
    `;

    if (variant === "compact") {
      return `
        <article class="${cardClasses}">
          <div class="calendar-event-card-compact-main">
            <div class="calendar-event-card-meta">
              <span class="calendar-event-card-date">${escapeHtml(dateLabel)}</span>
              ${eventTypeTagMarkup}
            </div>
            <div class="calendar-event-card-main">
              <h4 class="calendar-event-card-title">${escapeHtml(row.title)}</h4>
              ${eventContextLabel ? `<div class="calendar-event-card-sub">${escapeHtml(eventContextLabel)}</div>` : ""}
              ${row.regimeHint ? `<div class="calendar-event-card-note">${escapeHtml(row.regimeHint)}</div>` : ""}
            </div>
            <div class="calendar-event-card-status">${statusMarkup}</div>
          </div>
          <div class="calendar-event-card-compact-side">
            <span class="calendar-due-chip ${dueTone}">${escapeHtml(dueMeta.text)}</span>
            ${actionsMarkup}
          </div>
        </article>
      `;
    }

    return `
      <article class="${cardClasses}">
        <div class="calendar-event-card-top">
          <div class="calendar-event-card-meta">
            <span class="calendar-event-card-date">${escapeHtml(dateLabel)}</span>
            ${eventTypeTagMarkup}
          </div>
          <span class="calendar-due-chip ${dueTone}">${escapeHtml(dueMeta.text)}</span>
        </div>
        <div class="calendar-event-card-main">
          <h4 class="calendar-event-card-title">${escapeHtml(row.title)}</h4>
          ${eventContextLabel ? `<div class="calendar-event-card-sub">${escapeHtml(eventContextLabel)}</div>` : ""}
          ${row.regimeHint ? `<div class="calendar-event-card-note">${escapeHtml(row.regimeHint)}</div>` : ""}
        </div>
        <div class="calendar-event-card-footer">
          <div class="calendar-event-card-status">${statusMarkup}</div>
          ${actionsMarkup}
        </div>
      </article>
    `;
  };

  const importantRowsMarkup = importantRows.length > 0
    ? importantRows.map((row) => renderCalendarEventCard(row)).join("")
    : `
      <div class="calendar-empty-block">
        <strong>На сегодня всё спокойно</strong>
        <span>Критичных сроков сейчас нет. Следующий срок уже показан сверху.</span>
      </div>
    `;

  const monthGroupsMarkup = monthGroups.length > 0
    ? monthGroups
      .map((group) => `
        <section class="calendar-month-group">
          <div class="calendar-month-group-head">
            <h4>${escapeHtml(group.label)}</h4>
            <span class="calendar-month-count">${group.rows.length} ${group.rows.length === 1 ? "событие" : group.rows.length >= 2 && group.rows.length <= 4 ? "события" : "событий"}</span>
          </div>
          <div class="calendar-month-list">
            ${group.rows.map((row) => renderCalendarEventCard(row, "compact")).join("")}
          </div>
        </section>
      `)
      .join("")
    : `
      <div class="calendar-empty-block">
        <strong>Остальные сроки пока не нужны</strong>
        <span>Все актуальные события уже вынесены в блок «Сейчас важно».</span>
      </div>
    `;

  const preregRowsMarkup = preregRows.length > 0
    ? `
      <details class="card mt-16 calendar-archive-card">
        <summary class="calendar-archive-summary">
          <div>
            <strong>Было до регистрации</strong>
            <span>${preregRows.length} ${preregRows.length === 1 ? "событие" : preregRows.length >= 2 && preregRows.length <= 4 ? "события" : "событий"} до подключения сервиса</span>
          </div>
          <span class="calendar-archive-toggle" aria-hidden="true"></span>
        </summary>
        <div class="calendar-archive-content">
          ${preregRows.map((row) => renderCalendarEventCard(row, "compact")).join("")}
        </div>
      </details>
    `
    : "";

  els.pageContent.innerHTML = `
    <article class="card calendar-summary-card" data-tour-target="calendar-overview">
      <div class="calendar-summary-head">
        <h3>${isMobileCalendar ? `Календарь сроков: ${regimeLabel(state.regime)}` : `Календарь сроков по режиму: ${regimeLabel(state.regime)}`}</h3>
        <span class="calendar-summary-chip">${escapeHtml(summaryCountLabel)}</span>
      </div>

      <div class="calendar-kpi-grid">
        <div class="calendar-kpi-item">
          <span>Ближайший срок</span>
          <strong>${nextPending ? formatDateShort(nextPending.date) : "Нет"}</strong>
          <small>${nextPending ? escapeHtml(nextPending.title) : "Все сроки закрыты"}</small>
        </div>
        <div class="calendar-kpi-item">
          <span>К оплате сейчас</span>
          <strong>${fmt(nextPaymentTotal)}</strong>
          <small>${escapeHtml(payNowHint)}</small>
        </div>
        <div class="calendar-kpi-item ${urgentTotal > 0 ? "danger" : "success"}">
          <span>Сейчас важно</span>
          <strong>${importantValue}</strong>
          <small class="calendar-kpi-focus">${escapeHtml(importantHint)}</small>
        </div>
      </div>
    </article>

    ${preregRowsMarkup}

    <article class="card mt-16 calendar-priority-card" data-tour-target="calendar-reminder-entry">
      <div class="calendar-section-head">
        <div>
          <h3>Сейчас важно</h3>
          <p>Показываем ближайшие сроки, которые стоит увидеть в первую очередь.</p>
        </div>
      </div>
      <div class="calendar-priority-grid">
        ${importantRowsMarkup}
      </div>
    </article>

    <article class="card mt-16 calendar-months-card">
      <div class="calendar-section-head">
        <div>
          <h3>Дальше по месяцам</h3>
          <p>Остальные сроки без событий до регистрации, сгруппированные по месяцам.</p>
        </div>
      </div>
      <div class="calendar-month-groups">
        ${monthGroupsMarkup}
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

  bindCalendarDeadlineButtons(els.pageContent);
  syncOnboardingTour();
}

function bindCalendarDeadlineButtons(root = document) {
  if (!root || typeof root.querySelectorAll !== "function") {
    return;
  }

  root.querySelectorAll("[data-toggle-deadline]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement) || button.dataset.deadlineToggleBound === "true") {
      return;
    }

    button.dataset.deadlineToggleBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const id = Number(button.dataset.toggleDeadline || 0);
      if (!Number.isFinite(id) || id <= 0) {
        return;
      }
      toggleDeadlineDone(id);
    });
  });
}

function calcCalculatorSimplified(income) {
  const safeIncome = Math.max(0, Number(income) || 0);
  const hasIncome = safeIncome > 0;
  const opv = hasIncome ? Math.min(Math.max(safeIncome * RATES.OPV_RATE, IP_MIN_OPV), RATES.MAX_OPV_AMOUNT) : 0;
  const opvr = hasIncome ? Math.min(Math.max(safeIncome * RATES.OPVR_RATE, IP_MIN_OPVR), RATES.MAX_OPV_BASE * RATES.OPVR_RATE) : 0;
  const so = hasIncome ? calcIpSocialContribution(safeIncome, SIMPLIFIED_SO_RATE) : 0;
  const vosms = RATES.VOSMS;
  const socTax = 0;
  const ipnRate = getActiveSimplifiedIpnRate();
  const ipn = safeIncome * ipnRate;
  const total = opv + opvr + so + vosms + socTax + ipn;
  return { opv, so, opvr, vosms, ipn, ipnRate, socTax, total, limit: SIMPLIFIED_LIMIT_ANNUAL };
}

function calcCalculatorByRegime(regime, income, expenses = 0) {
  if (regime === "self") return calcSelfEmployed(income);
  if (regime === "our") return calcOUR(income, expenses);
  return calcCalculatorSimplified(income);
}

function getCalculatorSimpleRegimeLabel(regime) {
  if (regime === "self") return "Самозанятый";
  if (regime === "our") return "ОУР";
  return "Упрощёнка (910)";
}

function getCalculatorSimpleRows(regime, tax) {
  if (regime === "self") {
    return [
      { id: "res-opv", labelHtml: "ОПВ (1%)", value: tax.opv },
      { id: "res-opvr", labelHtml: "ОПВР (1%)", value: tax.opvr },
      { id: "res-so", labelHtml: "СО (1%)", value: tax.so },
      { id: "res-vosms", labelHtml: "ВОСМС (1%)", value: tax.vosms },
      { id: "res-ipn", labelHtml: 'ИПН (<span id="res-ipn-rate">0</span>%)', value: tax.ipn }
    ];
  }

  if (regime === "our") {
    return [
      { id: "res-opv", labelHtml: "ОПВ (10%)", value: tax.opv },
      { id: "res-opvr", labelHtml: "ОПВР (3,5%)", value: tax.opvr },
      { id: "res-so", labelHtml: "СО (5%)", value: tax.so },
      { id: "res-vosms", labelHtml: "ВОСМС", value: tax.vosms },
      { id: "res-sn", labelHtml: "СН (2 МРП)", value: tax.socTax },
      { id: "res-ipn", labelHtml: 'ИПН (<span id="res-ipn-rate">10</span>%)', value: tax.ipn }
    ];
  }

  const simplifiedRate = Number(tax.ipnRate || 0) || getActiveSimplifiedIpnRate();
  const isSimplifiedZeroIncome =
    Number(tax.ipn || 0) <= 0 &&
    Number(tax.opv || 0) <= 0 &&
    Number(tax.opvr || 0) <= 0 &&
    Number(tax.so || 0) <= 0 &&
    Number(tax.vosms || 0) > 0;

  if (isSimplifiedZeroIncome) {
    return [
      { id: "res-vosms", labelHtml: "ВОСМС (обязательный платёж)", value: tax.vosms },
      { id: "res-ipn", labelHtml: `ИПН (<span id="res-ipn-rate">${formatRatePercent(simplifiedRate).replace("%", "")}</span>%)`, value: tax.ipn }
    ];
  }

  return [
    { id: "res-opv", labelHtml: "ОПВ (10%)", value: tax.opv },
    { id: "res-opvr", labelHtml: "ОПВР (3,5%)", value: tax.opvr },
    { id: "res-so", labelHtml: "СО (5%)", value: tax.so },
    { id: "res-vosms", labelHtml: "ВОСМС", value: tax.vosms },
    { id: "res-ipn", labelHtml: `ИПН (<span id="res-ipn-rate">${formatRatePercent(simplifiedRate).replace("%", "")}</span>%)`, value: tax.ipn }
  ];
}

function getCalculatorSimpleNote(regime, tax) {
  if (regime === "self") {
    return `Для самозанятого ИПН не начисляется. При таком доходе вы платите только обязательные соцплатежи в месяц.`;
  }

  if (regime === "our") {
    const expensesLabel = state.calcExpenses > 0
      ? `Сейчас в расчёте учтены расходы: ${fmt(state.calcExpenses)} в месяц.`
      : "Если расходов нет, ИПН считается без вычетов.";
    return `На ОУР ИПН зависит от расходов. ${expensesLabel}`;
  }

  return `ИПН на упрощёнке платится за полугодие. При таком доходе за 6 месяцев: <strong id="res-ipn-half">${fmt((tax.ipn || 0) * 6)}</strong>. Срок оплаты — до 25 августа / 25 февраля.`;
}

function getCalculatorCompareTaxLines(tax, regime) {
  if (regime === "self") {
    return [
      { label: "ОПВ (1%)", value: tax.opv },
      { label: "ОПВР (1%)", value: tax.opvr },
      { label: "СО (1%)", value: tax.so },
      { label: "ВОСМС (1%)", value: tax.vosms }
    ];
  }

  if (regime === "simplified") {
    const isSimplifiedZeroIncome =
      Number(tax.ipn || 0) <= 0 &&
      Number(tax.opv || 0) <= 0 &&
      Number(tax.opvr || 0) <= 0 &&
      Number(tax.so || 0) <= 0 &&
      Number(tax.vosms || 0) > 0;

    if (isSimplifiedZeroIncome) {
      return [
        { label: "ВОСМС (обязательный платёж)", value: tax.vosms },
        { label: `ИПН (${formatRatePercent(Number(tax.ipnRate || 0) || getActiveSimplifiedIpnRate())})`, value: tax.ipn }
      ];
    }

    return [
      { label: "ОПВ (10% от базы)", value: tax.opv },
      { label: "ОПВР (3.5% от базы)", value: tax.opvr },
      { label: "СО (5% от базы, до 7 МЗП)", value: tax.so },
      { label: "ВОСМС", value: tax.vosms },
      { label: `ИПН (${formatRatePercent(Number(tax.ipnRate || 0) || getActiveSimplifiedIpnRate())})`, value: tax.ipn }
    ];
  }

  return [
    { label: "ОПВ (10% от базы)", value: tax.opv },
    { label: "ОПВР (3.5% от базы)", value: tax.opvr },
    { label: "СО (5% от базы, до 7 МЗП)", value: tax.so },
    { label: "ВОСМС", value: tax.vosms },
    { label: "СН", value: tax.socTax },
    { label: "ИПН (10%)", value: tax.ipn }
  ];
}

function renderCalculatorTaxBreakdown(tax, regime) {
  return `
    <div>
      ${getCalculatorCompareTaxLines(tax, regime)
        .map((line) => `<div class="tax-row"><span class="text-muted">${escapeHtml(line.label)}</span><strong class="amount-sensitive">${fmt(line.value)}</strong></div>`)
        .join("")}
    </div>
  `;
}

function renderCalculatorPage() {
  const isMobileCalculator = window.innerWidth <= 768;
  const periodMultiplier = getCalcPeriodMultiplier();
  const periodLabel = getCalcPeriodLabel();
  const incomeInputValue = getCalcInputIncome();
  const expensesInputValue = getCalcInputExpenses();
  const simpleIncomeValue = normalizeIncome(state.calcIncome);
  const shouldBlockSelfInCalculator = isIpAccountProfile();

  const rows = [
    { id: "self", label: "Самозанятый", taxData: calcSelfEmployed(state.calcIncome), limitLabel: `${fmt(SELF_LIMIT_ANNUAL)}/год` },
    { id: "simplified", label: "Упрощёнка (910)", taxData: calcCalculatorSimplified(state.calcIncome), limitLabel: `${fmt(SIMPLIFIED_LIMIT_ANNUAL)}/год` },
    { id: "our", label: "ОУР", taxData: calcOUR(state.calcIncome, state.calcExpenses), limitLabel: "Без лимита" }
  ].map((row) => ({
    ...row,
    tax: row.taxData.total,
    ...getRegimeAvailability(row.id, state.calcIncome, { disallowSelfForIp: shouldBlockSelfInCalculator })
  }));

  const availableRows = rows.filter((row) => row.available).sort((a, b) => a.tax - b.tax);
  const fallbackRows = [...rows].sort((a, b) => a.tax - b.tax);
  const bestRow = availableRows[0] || fallbackRows[0];
  const bestId = bestRow.id;
  const currentRow = rows.find((row) => row.id === state.regime) || bestRow;
  const currentTaxDisplay = currentRow.tax * periodMultiplier;
  const selfRow = rows.find((row) => row.id === "self") || bestRow;
  const selfTaxDisplay = selfRow.tax * periodMultiplier;
  const bestTaxDisplay = bestRow.tax * periodMultiplier;
  const switchToSelfSavings = Math.max(currentTaxDisplay - selfTaxDisplay, 0);
  const isSelfUnavailable = !selfRow.available;
  const selfSavingsTitle = isSelfUnavailable
    ? (selfRow.reason || "Режим недоступен при текущем доходе")
    : (isMobileCalculator ? "Экономия к Самозанятому" : "Экономия если перейти на Самозанятый");
  const selfSavingsValue = incomeInputValue > 0 && selfRow.available ? fmt(switchToSelfSavings) : "—";
  const expenseRatio = incomeInputValue > 0 ? expensesInputValue / incomeInputValue : 0;
  const hasIncome = incomeInputValue > 0;
  const monthlyIncomeForHint = normalizeIncome(state.calcIncome);
  const annualIncomeForHint = annualizeIncome(monthlyIncomeForHint);
  const simplifiedWarningThreshold = SIMPLIFIED_LIMIT_ANNUAL * 0.8;
  const ndsThresholdAnnual = MRP_2026 * 10000;
  const simpleTax = calcCalculatorByRegime(state.regime, simpleIncomeValue, state.calcExpenses);
  const simpleRows = getCalculatorSimpleRows(state.regime, simpleTax);
  const simpleRemaining = simpleIncomeValue - Number(simpleTax.total || 0);
  const simpleLoadPercent = simpleIncomeValue > 0 ? ((Number(simpleTax.total || 0) / simpleIncomeValue) * 100).toFixed(1) : "0.0";
  const simpleQuickAmounts = [100000, 300000, 500000, 1000000]
    .map((amount) => {
      const isActive = Math.abs(simpleIncomeValue - amount) <= 1;
      const label = amount >= 1000000 ? "1 млн ₸" : `${Math.round(amount / 1000)} тыс ₸`;
      return `<button type="button" class="${isActive ? "active" : ""}" data-simple-calc-amount="${amount}">${label}</button>`;
    })
    .join("");

  let practicalHintTone = "neutral";
  let practicalHintText = "";

  if (state.regime === "self") {
    if (monthlyIncomeForHint > SELF_LIMIT_MONTHLY) {
      practicalHintTone = "warning";
      practicalHintText = "Вы превышаете лимит Самозанятого (300 МРП). Пора переходить на ИП — Упрощёнка (910) будет выгоднее.";
    } else {
      practicalHintTone = "success";
      practicalHintText = "Ваш доход в пределах лимита — Самозанятый оптимален, открывать ИП нет смысла.";
    }
  } else if (state.regime === "simplified") {
    if (annualIncomeForHint > SIMPLIFIED_LIMIT_ANNUAL) {
      practicalHintTone = "warning";
      practicalHintText = "Лимит Упрощёнки превышен. ОУР появится позже — пока ориентируйтесь на этот расчёт как на базовый сценарий и не переключайте режим в сервисе.";
    } else if (annualIncomeForHint > simplifiedWarningThreshold) {
      practicalHintTone = "warning";
      practicalHintText = "Вы приближаетесь к лимиту Упрощёнки. ОУР появится позже — пока следите за доходом и пользуйтесь текущим расчётом.";
    } else {
      practicalHintTone = "success";
      practicalHintText = "Вы в рамках лимита Упрощёнки. Режим оптимален для вашего уровня дохода.";
    }
  } else {
    practicalHintTone = "neutral";
    practicalHintText = `ОУР без лимита — подходит для высокого дохода. Следите за порогом НДС: ${fmt(ndsThresholdAnnual)}/год.`;
  }

  const incomeLabel = state.calcPeriod === "year" ? "Доход в год (₸)" : "Доход в месяц (₸)";
  const expenseLabel = state.calcPeriod === "year"
    ? (isMobileCalculator ? "Расходы в год (₸) · ОУР" : "Расходы в год (₸) - для ОУР")
    : (isMobileCalculator ? "Расходы в месяц (₸) · ОУР" : "Расходы в месяц (₸) - для ОУР");
  const calcSummaryFoot = isMobileCalculator
    ? `Суммы показаны ${periodLabel}. Это ориентир, финальная сумма зависит от фактических данных.`
    : `Все суммы показаны ${periodLabel}. Это ориентир, финальная сумма зависит от фактических данных и обязательств.`;
  const currentRegimeHint = isMobileCalculator ? `Текущий: ${regimeLabel(state.regime)}` : `Ваш текущий режим (${regimeLabel(state.regime)})`;

  const incomePresets = [100000, 300000, 500000, 1000000]
    .map((presetMonthly) => {
      const displayValue = state.calcPeriod === "year" ? presetMonthly * 12 : presetMonthly;
      const isActive = Math.abs(displayValue - incomeInputValue) <= 1;
      const presetLabelBase = presetMonthly >= 1000000
        ? `${Math.round(presetMonthly / 1000000)} млн ₸`
        : `${Math.round(presetMonthly / 1000)} тыс ₸`;
      const presetLabelYear = presetMonthly >= 1000000
        ? `${Math.round(presetMonthly / 1000000)} млн ×12`
        : `${Math.round(presetMonthly / 1000)} тыс ×12`;
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

  queueTaxProfileUpsert(state.regime, state.calcIncome, calcByRegime(state.regime, state.calcIncome, state.calcExpenses));

  els.pageContent.innerHTML = `
    <div class="calc-tabs" role="tablist" aria-label="Режим работы калькулятора">
      <button type="button" class="calc-tab ${state.calcTab === "calculate" ? "active" : ""}" data-calc-tab="calculate">
        <i data-lucide="calculator" style="width:16px;height:16px"></i>
        <span>Рассчитать налоги</span>
      </button>
      <button type="button" class="calc-tab ${state.calcTab === "compare" ? "active" : ""}" data-calc-tab="compare">
        <i data-lucide="arrow-left-right" style="width:16px;height:16px"></i>
        <span>Сравнить режимы</span>
      </button>
    </div>

    <div class="calc-panel-calculate" style="display:${state.calcTab === "calculate" ? "block" : "none"};">
      <article class="card calc-simple-input">
        <label>Доход в месяц (₸)</label>
        <div class="calc-input-row">
          <button type="button" class="calc-btn-minus" data-simple-calc-step="-10000">−</button>
          <input type="text" id="simpleIncome" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(simpleIncomeValue)}" />
          <button type="button" class="calc-btn-plus" data-simple-calc-step="10000">+</button>
        </div>
        <div class="calc-quick-amounts" role="group" aria-label="Быстрые суммы">
          ${simpleQuickAmounts}
        </div>
      </article>

      <div class="calc-simple-result">
        <div class="calc-result-header">
          <div class="calc-result-regime">
            <i data-lucide="file-text" style="width:16px;height:16px;color:#4DB8A0"></i>
            <span>${escapeHtml(getCalculatorSimpleRegimeLabel(state.regime))}</span>
          </div>
          <div class="calc-result-hint">Режим из ваших настроек</div>
        </div>

        <div class="calc-result-rows">
          ${simpleRows
            .map((row) => `
              <div class="calc-result-row">
                <span class="calc-row-name">${row.labelHtml}</span>
                <span class="calc-row-value amount-sensitive" id="${row.id}">${fmt(row.value)}</span>
              </div>
            `)
            .join("")}
        </div>

        <div class="calc-result-total">
          <div class="calc-total-row">
            <span>Итого налогов и взносов</span>
            <strong id="res-total" class="amount-sensitive">${fmt(simpleTax.total)}</strong>
          </div>
          <div class="calc-total-row remaining">
            <span>Остаётся на руки</span>
            <strong id="res-remaining" class="amount-sensitive">${fmt(simpleRemaining)}</strong>
          </div>
          <div class="calc-total-row tax-load">
            <span>Налоговая нагрузка</span>
            <span id="res-load">${simpleLoadPercent}%</span>
          </div>
        </div>

        <div class="calc-ipn-note">
          <i data-lucide="info" style="width:14px;height:14px;color:#F59E0B;flex-shrink:0"></i>
          <span>${getCalculatorSimpleNote(state.regime, simpleTax)}</span>
        </div>
      </div>
    </div>

    <div class="calc-panel-compare" style="display:${state.calcTab === "compare" ? "block" : "none"};">
      <article class="card calc-control-card">
        <div class="calc-control-head">
          <h3>Параметры расчёта</h3>
          <div class="calc-period-switch" role="group" aria-label="Период расчёта">
            <button type="button" data-calc-period="month" class="${state.calcPeriod === "month" ? "active" : ""}">В месяц</button>
            <button type="button" data-calc-period="year" class="${state.calcPeriod === "year" ? "active" : ""}">В год</button>
          </div>
        </div>

        <div class="grid grid-2 calc-input-grid">
          <label>${incomeLabel}
            <div class="calc-step-input">
              <button type="button" data-calc-step="-10000" aria-label="Уменьшить доход">-</button>
              <input id="calcIncomeInput" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(incomeInputValue)}" />
              <button type="button" data-calc-step="10000" aria-label="Увеличить доход">+</button>
            </div>
            <div class="calc-income-presets" role="group" aria-label="Пресеты дохода">
              ${incomePresets}
            </div>
          </label>

          <label>${expenseLabel}
            <input id="calcExpensesInput" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${formatPlainAmount(expensesInputValue)}" />
            <div class="calc-expense-presets" role="group" aria-label="Пресеты расходов">
              ${expensePresets}
            </div>
          </label>
        </div>
      </article>

      <article class="card mt-16 calc-summary-card">
        <div class="calc-summary-main">
          <div>
            <p class="calc-summary-kicker">ВЫГОДНЕЕ ПО ЦИФРАМ</p>
            <h3>${hasIncome ? bestRow.label : "Введите доход"}</h3>
            <p class="text-muted">
              ${
                hasIncome
                  ? "Минимальная налоговая нагрузка при текущих параметрах."
                  : "Укажите сумму дохода и, при необходимости, расходы для ОУР."
              }
            </p>
          </div>
          <div class="calc-summary-value">${hasIncome ? fmt(bestTaxDisplay) : "—"}</div>
        </div>

        <div class="calc-summary-grid">
          <div class="calc-summary-item">
            <span>${currentRegimeHint}</span>
            <strong>${hasIncome ? fmt(currentTaxDisplay) : "—"}</strong>
          </div>
          <div class="calc-summary-item">
            <span>${selfSavingsTitle}</span>
            <strong>${selfSavingsValue}</strong>
          </div>
        </div>
        <p class="calc-summary-foot">${calcSummaryFoot}</p>
        <div class="calc-practical-hint ${practicalHintTone}">${practicalHintText}</div>
        <div class="compare-disclaimer">
          <i data-lucide="circle-alert" style="width:14px;height:14px;color:#F59E0B;flex-shrink:0"></i>
          <span>Сравнение показывает только стоимость налогов. Учитывайте ограничения: самозанятый — без сотрудников и с лимитом дохода, ОУР — требует учёт расходов.</span>
        </div>
      </article>

      <div class="grid grid-3 mt-16 calc-regime-grid">
        ${rows.map((row) => renderRegimeResultCard(row, bestId, { periodMultiplier, inputIncome: incomeInputValue, bestTax: bestRow.tax, periodLabel })).join("")}
      </div>
    </div>
  `;

  const calcIncomeInput = document.getElementById("calcIncomeInput");
  const calcExpensesInput = document.getElementById("calcExpensesInput");
  const simpleIncomeInput = document.getElementById("simpleIncome");

  const flushCalculatorInputRender = (field) => {
    if (calculatorInputRenderTimer) {
      window.clearTimeout(calculatorInputRenderTimer);
      calculatorInputRenderTimer = null;
    }
    if (state.page === "calculator") {
      renderCalculatorPage();
    }
    if (field) {
      trackEvent("calc_change", { field, period: state.calcPeriod, tab: state.calcTab });
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

  if (simpleIncomeInput) {
    simpleIncomeInput.addEventListener("input", () => {
      state.calcIncome = normalizeIncome(simpleIncomeInput.value);
      saveState();
      scheduleCalculatorInputRender();
    });

    simpleIncomeInput.addEventListener("blur", () => {
      flushCalculatorInputRender("simple_income");
    });
  }

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

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        width: "16",
        height: "16"
      }
    });
  }
}

function renderRegimeResultCard(row, bestId, options = {}) {
  const periodMultiplier = Number(options.periodMultiplier || 1);
  const inputIncome = Number(options.inputIncome || 0);
  const bestTax = Number(options.bestTax || row.tax);
  const periodLabel = options.periodLabel || "в месяц";

  const isBest = row.id === bestId && inputIncome > 0 && row.available;
  const displayTax = row.tax * periodMultiplier;
  const effectiveRate = inputIncome > 0 ? (displayTax / inputIncome) * 100 : 0;

  const limit = getRegimeLimit(row.id);
  const annualIncome = annualizeIncome(state.calcIncome);
  let limitChipText = row.limitLabel;
  let limitChipClass = "ok";

  if (limit) {
    const diff = limit - annualIncome;
    if (diff >= 0) {
      limitChipText = `до лимита: ${fmt(diff)}`;
      limitChipClass = "ok";
    } else {
      limitChipText = `Превышение: ${fmt(Math.abs(diff))} / год`;
      limitChipClass = "over";
    }
  }

  return `
    <article class="card regime-result ${isBest ? "best" : ""} ${row.available ? "" : "unavailable"}">
      ${isBest ? '<span class="badge badge-success top-badge">ВЫГОДНЕЕ</span>' : row.available ? "" : '<span class="badge badge-warning top-badge">Недоступно</span>'}
      <div class="regime-head">
        <h3>${row.label}</h3>
        <span class="regime-limit-chip ${limitChipClass}">${limitChipText}</span>
      </div>
      <div class="stat-value ${isBest ? "" : row.id === "self" ? "stat-danger" : "calc-amount-neutral"} stat-xl">${fmt(displayTax)}</div>
      <p class="text-muted">${periodLabel} · лимит: ${row.limitLabel}</p>

      ${
        row.available
          ? `<div class="regime-meta-row">
               <span class="regime-rate">Нагрузка: ${formatPct(effectiveRate)} от дохода</span>
             </div>
             ${renderCalculatorTaxBreakdown(row.taxData, row.id)}`
          : `<p class="text-muted">${row.reason}. Рассмотрите другой режим.</p>`
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
  if (regime === "self") return "Самозанятый";
  if (regime === "our") return "ОУР";
  if (regime === "simplified") return "Упрощенка";
  return "";
}

function isKnowledgeArticleRelevantForRegime(articleRegime, selectedRegime) {
  if (articleRegime === "all") {
    return true;
  }
  return articleRegime === selectedRegime;
}

function normalizeAssistantAction(raw) {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const type = String(raw.type || "").trim() === "soon" ? "soon" : "page";
  const label = String(raw.label || "").trim();
  if (!label) {
    return null;
  }

  if (type === "soon") {
    return {
      type,
      label,
      message: String(raw.message || "").trim() || label
    };
  }

  const page = String(raw.page || "").trim();
  if (!page || !Object.prototype.hasOwnProperty.call(PAGE_TITLES, page)) {
    return null;
  }

  return {
    type,
    label,
    page
  };
}

function normalizeAssistantMessageText(text) {
  const value = String(text || "").trim();
  if (!value) {
    return "";
  }

  if (value.includes("Сейчас работаю в MVP-режиме")) {
    return "Я E-бухгалтер MyEsep.\n\nСейчас это ранняя версия помощника: уже могу отвечать по вашим доходам, срокам, налогам и CRM. Загрузку фото, документы и более умные действия добавим позже.";
  }

  if (value.includes("Пока я работаю как локальный MVP-чата")) {
    return "Сейчас это ранняя версия E-бухгалтера внутри MyEsep. Я уже могу подсказать сумму к оплате, ближайший срок, доход месяца и состояние CRM. Попробуйте спросить: «Сколько мне платить сейчас?» или «Что у меня ближайшее?»";
  }

  return value;
}

function normalizeAssistantMessages(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((row) => row && typeof row === "object")
    .map((row, index) => ({
      id: Number(row.id || 0) || index + 1,
      role: String(row.role || "").trim() === "user" ? "user" : "assistant",
      text: normalizeAssistantMessageText(row.text),
      actions: Array.isArray(row.actions) ? row.actions.map(normalizeAssistantAction).filter(Boolean) : []
    }))
    .filter((row) => row.text);
}

function getNextAssistantMessageId(messages = state.assistantMessages) {
  return Math.max(0, ...normalizeAssistantMessages(messages).map((row) => Number(row.id || 0))) + 1;
}

function getNextAssistantConversationId(conversations = state.assistantConversations) {
  return Math.max(0, ...normalizeAssistantConversations(conversations).map((row) => Number(row.id || 0))) + 1;
}

function getAssistantConversationTitle(messages, fallback = "Новый диалог") {
  const firstUserMessage = normalizeAssistantMessages(messages).find((row) => row.role === "user" && row.text);
  if (!firstUserMessage) {
    return String(fallback || "Новый диалог").trim() || "Новый диалог";
  }
  const title = firstUserMessage.text.replace(/\s+/g, " ").trim();
  if (!title) {
    return String(fallback || "Новый диалог").trim() || "Новый диалог";
  }
  return title.length > 44 ? `${title.slice(0, 44).trimEnd()}…` : title;
}

function getAssistantConversationPreview(messages) {
  const normalizedMessages = normalizeAssistantMessages(messages);
  const lastMessage = [...normalizedMessages].reverse().find((row) => row.text);
  if (!lastMessage) {
    return "Диалог начнётся с первого вопроса.";
  }
  const preview = lastMessage.text.replace(/\s+/g, " ").trim();
  if (!preview) {
    return "Диалог начнётся с первого вопроса.";
  }
  return preview.length > 42 ? `${preview.slice(0, 42).trimEnd()}…` : preview;
}

function formatAssistantConversationUpdatedLabel(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Недавно";
  }

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterdayStart = new Date(todayStart);
  yesterdayStart.setDate(yesterdayStart.getDate() - 1);
  const targetStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (targetStart.getTime() === todayStart.getTime()) {
    return "Сегодня";
  }

  if (targetStart.getTime() === yesterdayStart.getTime()) {
    return "Вчера";
  }

  return formatDateDayMonthLong(date);
}

function normalizeAssistantConversation(raw, index = 0) {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const messages = normalizeAssistantMessages(raw.messages || raw.assistantMessages);
  const fallbackTimestamp = new Date().toISOString();
  const id = Number(raw.id || 0) || index + 1;
  return {
    id,
    title: getAssistantConversationTitle(messages, String(raw.title || "").trim() || "Новый диалог"),
    createdAt: String(raw.createdAt || raw.updatedAt || fallbackTimestamp),
    updatedAt: String(raw.updatedAt || raw.createdAt || fallbackTimestamp),
    messages
  };
}

function normalizeAssistantConversations(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map((row, index) => normalizeAssistantConversation(row, index))
    .filter(Boolean);
}

function hasAssistantUserMessages(messages) {
  return normalizeAssistantMessages(messages).some((row) => row.role === "user");
}

function renderAssistantMessageText(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function getAssistantQuickPrompts() {
  return [
    "Сколько мне платить сейчас?",
    "Что у меня ближайшее?",
    "Проверь ошибки по данным",
    "Что с CRM?",
    "Можно загрузить фото?"
  ];
}

function getAssistantSnapshot() {
  const now = new Date();
  const planner = getTaxPlannerState();
  const plannerIncome = Math.max(0, normalizeIncome(planner.income || 0));
  const plannerExpenses = Math.max(0, normalizeIncome(planner.expenses || 0));
  const tax = calcByRegime(state.regime, plannerIncome, plannerExpenses);
  const nextPaymentSummary = getUpcomingPaymentSummary();
  const hasUpcomingPaymentSummary = Boolean(nextPaymentSummary.row && nextPaymentSummary.breakdown);
  const payNow = hasUpcomingPaymentSummary
    ? nextPaymentSummary.total
    : Math.max(0, Math.round(getTaxLoadPayNow(state.regime, tax)));
  const nextDeadline = getUpcomingDeadlines()[0] || null;
  const nextDeadlineDue = nextDeadline ? getLandingDeadlineDueInfo(nextDeadline.date) : { text: "Все сроки закрыты" };
  const nextDeadlineDate = nextDeadline ? formatDateDayMonthLong(nextDeadline.date) : "Нет активных сроков";
  const nextDeadlineNote = nextDeadline
    ? `${nextDeadline.title} · ${nextDeadlineDue.text}`
    : "Сейчас все отслеживаемые сроки закрыты.";
  const currentMonthIncome = getIncomeByMonth(now.getFullYear(), now.getMonth(), state.incomes);
  const currentMonthLabel = formatMonthYearLabel(new Date(now.getFullYear(), now.getMonth(), 1));
  const crmSales = normalizeCrmSales(state.crmSales);
  const crmPayments = normalizeCrmPayments(state.crmPayments);
  const waitingSales = crmSales
    .filter((sale) => normalizeCrmSaleStatus(sale.status) !== "cancelled")
    .map((sale) => ({
      sale,
      remaining: getCrmSaleRemainingAmount(sale, crmPayments)
    }))
    .filter((entry) => Number(entry.remaining || 0) > 0);
  const waitingAmount = waitingSales.reduce((sum, entry) => sum + Number(entry.remaining || 0), 0);
  const waitingSalesLabel = waitingSales.length > 0
    ? `${waitingSales.length} ${pluralizeRu(waitingSales.length, "сделка", "сделки", "сделок")} ждут оплаты`
    : "Все сделки закрыты";
  const waitingSalesNote = waitingSales.length > 0
    ? `Нужно получить ещё ${fmt(waitingAmount)} по CRM.`
    : "В CRM сейчас нет открытых остатков по продажам.";
  const payNowValue = payNow > 0 ? fmt(payNow) : plannerIncome > 0 ? fmt(payNow) : "Добавьте доход";
  const dueDateLabel = hasUpcomingPaymentSummary ? nextPaymentSummary.dueLabel : getNextTaxDueDateLabel();
  const payNowNote = payNow > 0
    ? `Ближайший платёж по вашим данным · до ${dueDateLabel}`
    : "Когда в журнале появится доход, здесь будет персональная сумма к оплате.";
  const incomeValue = currentMonthIncome > 0 ? fmt(currentMonthIncome) : "0 ₸";
  const incomeNote = currentMonthIncome > 0
    ? `Доход за ${currentMonthLabel}`
    : `За ${currentMonthLabel.toLowerCase()} пока нет поступлений.`;
  const regimeLabelText = regimeLabel(state.regime);
  const greetingName = getProfileDisplayName();
  const customersCount = normalizeCrmCustomers(state.crmCustomers).length;
  const salesCount = crmSales.length;

  return {
    greetingName,
    regimeLabelText,
    plannerIncome,
    plannerExpenses,
    payNow,
    payNowValue,
    payNowNote,
    dueDateLabel,
    nextDeadline,
    nextDeadlineDate,
    nextDeadlineNote,
    nextDeadlineDue,
    currentMonthIncome,
    currentMonthLabel,
    incomeValue,
    incomeNote,
    waitingSalesCount: waitingSales.length,
    waitingAmount,
    waitingSalesLabel,
    waitingSalesNote,
    customersCount,
    salesCount
  };
}

function createAssistantDefaultMessages(snapshot = getAssistantSnapshot()) {
  return [
    {
      id: 1,
      role: "assistant",
      text: `Я E-бухгалтер MyEsep.\n\nСейчас это ранняя версия помощника: уже могу отвечать по вашим доходам, срокам, налогам и CRM. Загрузку фото, документы и более умные действия добавим позже.`,
      actions: [
        { type: "page", page: "taxes", label: "Открыть налоги" },
        { type: "page", page: "calendar", label: "Открыть календарь" }
      ]
    },
    {
      id: 2,
      role: "assistant",
      text: `На данный момент вижу такой контекст:\n• ближайший срок — ${snapshot.nextDeadlineDate}\n• к оплате сейчас — ${snapshot.payNowValue}\n• доход месяца — ${snapshot.incomeValue}\n• CRM — ${snapshot.waitingSalesLabel.toLowerCase()}`,
      actions: [
        { type: "page", page: "crm", label: "Открыть CRM" },
        { type: "page", page: "income", label: "Открыть доходы" }
      ]
    }
  ];
}

function buildAssistantConversation(messages, overrides = {}) {
  const snapshot = getAssistantSnapshot();
  const normalizedMessages = normalizeAssistantMessages(messages);
  const finalMessages = normalizedMessages.length > 0
    ? normalizedMessages
    : createAssistantDefaultMessages(snapshot);
  const timestamp = new Date().toISOString();

  return {
    id: Number(overrides.id || 0) || getNextAssistantConversationId(),
    title: getAssistantConversationTitle(finalMessages, String(overrides.title || "").trim() || "Новый диалог"),
    createdAt: String(overrides.createdAt || timestamp),
    updatedAt: String(overrides.updatedAt || overrides.createdAt || timestamp),
    messages: finalMessages
  };
}

function ensureAssistantConversationState(snapshot = getAssistantSnapshot()) {
  let conversations = normalizeAssistantConversations(state.assistantConversations);
  let activeConversationId = Number(state.assistantActiveConversationId || 0) || null;
  let changed = false;

  if (conversations.length === 0) {
    const legacyMessages = normalizeAssistantMessages(state.assistantMessages);
    conversations = [buildAssistantConversation(legacyMessages.length > 0 ? legacyMessages : createAssistantDefaultMessages(snapshot), {
      id: 1,
      title: getAssistantConversationTitle(legacyMessages, "Новый диалог")
    })];
    activeConversationId = conversations[0].id;
    changed = true;
  }

  conversations = conversations.map((conversation) => {
    if (Array.isArray(conversation.messages) && conversation.messages.length > 0) {
      return {
        ...conversation,
        title: getAssistantConversationTitle(conversation.messages, conversation.title || "Новый диалог")
      };
    }
    changed = true;
    return buildAssistantConversation(createAssistantDefaultMessages(snapshot), conversation);
  });

  if (!activeConversationId || !conversations.some((conversation) => conversation.id === activeConversationId)) {
    activeConversationId = conversations[0].id;
    changed = true;
  }

  const activeConversation = conversations.find((conversation) => conversation.id === activeConversationId) || conversations[0];
  state.assistantConversations = conversations;
  state.assistantActiveConversationId = activeConversation.id;
  state.assistantMessages = normalizeAssistantMessages(activeConversation.messages);

  if (changed) {
    saveState();
  }

  return {
    conversations,
    activeConversation
  };
}

function setAssistantActiveConversation(conversationId) {
  const { conversations } = ensureAssistantConversationState();
  const targetConversation = conversations.find((conversation) => conversation.id === Number(conversationId || 0));
  if (!targetConversation) {
    return false;
  }

  state.assistantActiveConversationId = targetConversation.id;
  state.assistantMessages = normalizeAssistantMessages(targetConversation.messages);
  saveState();
  return true;
}

function replaceAssistantActiveConversationMessages(messages, options = {}) {
  const { conversations, activeConversation } = ensureAssistantConversationState();
  const updatedConversation = buildAssistantConversation(messages, {
    ...activeConversation,
    title: options.title || getAssistantConversationTitle(messages, activeConversation.title || "Новый диалог"),
    updatedAt: new Date().toISOString()
  });

  state.assistantConversations = [
    updatedConversation,
    ...conversations.filter((conversation) => conversation.id !== updatedConversation.id)
  ];
  state.assistantActiveConversationId = updatedConversation.id;
  state.assistantMessages = normalizeAssistantMessages(updatedConversation.messages);
  saveState();
  return updatedConversation;
}

function resetAssistantMessages() {
  const snapshot = getAssistantSnapshot();
  const { conversations, activeConversation } = ensureAssistantConversationState(snapshot);
  const defaultMessages = createAssistantDefaultMessages(snapshot);

  if (activeConversation && !hasAssistantUserMessages(activeConversation.messages)) {
    replaceAssistantActiveConversationMessages(defaultMessages, { title: "Новый диалог" });
    return;
  }

  const newConversation = buildAssistantConversation(defaultMessages, {
    id: getNextAssistantConversationId(conversations),
    title: "Новый диалог"
  });

  state.assistantConversations = [newConversation, ...conversations];
  state.assistantActiveConversationId = newConversation.id;
  state.assistantMessages = normalizeAssistantMessages(newConversation.messages);
  saveState();
}

function buildAssistantReply(query, snapshot = getAssistantSnapshot()) {
  const normalized = normalizeCrmLookupText(query);
  const wantsPhoto = /(фото|чек|скан|документ|pdf|выписк)/.test(normalized);
  const wantsTaxes = /(сколько|плат|налог|взнос|опв|восмс|ипн)/.test(normalized);
  const wantsDeadline = /(срок|ближайш|календар|когда платить|что у меня ближайшее)/.test(normalized);
  const wantsCrm = /(crm|сделк|оплат|клиент)/.test(normalized);
  const wantsIncome = /(доход|выручк|поступлен)/.test(normalized);
  const wantsErrors = /(ошиб|проверь|что не так|пуст|проверка)/.test(normalized);

  if (wantsPhoto) {
    return {
      text: "Сценарий фото → данные уже заложен в E-бухгалтере, но само распознавание пока не включено. Следующим этапом сюда добавим загрузку тетрадок, чеков, выписок и документов с предложением разнести данные по CRM, доходам и срокам.",
      actions: [
        { type: "soon", label: "Фото → данные скоро", message: "Фото → данные пока в разработке, но этот сценарий уже запланирован для E-бухгалтера." }
      ]
    };
  }

  if (wantsErrors) {
    const issues = [];
    if (snapshot.currentMonthIncome <= 0) {
      issues.push("в журнале доходов за текущий месяц пока пусто");
    }
    if (snapshot.waitingSalesCount > 0) {
      issues.push(`в CRM ${snapshot.waitingSalesCount} ${pluralizeRu(snapshot.waitingSalesCount, "сделка ждёт", "сделки ждут", "сделок ждут")} оплату`);
    }
    if (snapshot.salesCount === 0) {
      issues.push("в CRM ещё нет продаж");
    }

    return {
      text: issues.length > 0
        ? `Сейчас вижу несколько точек внимания: ${issues.join("; ")}. Если хотите, могу быстро направить вас в нужный раздел.`
        : "По базовым данным сейчас критичных пустых мест не вижу: сроки активны, открытых CRM-остатков нет, а ключевые разделы уже заполнены.",
      actions: issues.length > 0
        ? [
            { type: "page", page: snapshot.currentMonthIncome <= 0 ? "income" : "crm", label: snapshot.currentMonthIncome <= 0 ? "Открыть доходы" : "Открыть CRM" },
            { type: "page", page: "calendar", label: "Открыть календарь" }
          ]
        : [{ type: "page", page: "dashboard", label: "Открыть главную" }]
    };
  }

  if (wantsTaxes) {
    return snapshot.plannerIncome > 0
      ? {
          text: `По текущим данным у вас ориентир к оплате ${snapshot.payNowValue} до ${snapshot.dueDateLabel}. Это базовая оценка по режиму ${snapshot.regimeLabelText}. В разделе «Налоги» можно открыть полную расшифровку по каждому платежу.`,
          actions: [{ type: "page", page: "taxes", label: "Открыть налоги" }]
        }
      : {
          text: "Сейчас в журнале нет дохода, поэтому точную сумму к оплате я не показываю. Как только вы добавите доход, здесь появится персональный расчёт и нормальный ответ по налогам.",
          actions: [
            { type: "page", page: "income", label: "+ Добавить доход" },
            { type: "page", page: "taxes", label: "Открыть налоги" }
          ]
        };
  }

  if (wantsDeadline) {
    return snapshot.nextDeadline
      ? {
          text: `Ближайший срок — ${snapshot.nextDeadlineDate}. ${snapshot.nextDeadlineNote}. Если хотите, откройте календарь: там чеклист, напоминания и статус выполнения.`,
          actions: [{ type: "page", page: "calendar", label: "Открыть календарь" }]
        }
      : {
          text: "Сейчас активных ближайших сроков не вижу: все отслеживаемые обязательства закрыты или ещё не наступили.",
          actions: [{ type: "page", page: "calendar", label: "Открыть календарь" }]
        };
  }

  if (wantsCrm) {
    return snapshot.waitingSalesCount > 0
      ? {
          text: `В CRM сейчас ${snapshot.waitingSalesLabel}. ${snapshot.waitingSalesNote} Лучше зайти в CRM и добить оплаты, чтобы картина по доходам и налогам была точнее.`,
          actions: [{ type: "page", page: "crm", label: "Открыть CRM" }]
        }
      : {
          text: `По CRM сейчас спокойно: ${snapshot.waitingSalesLabel.toLowerCase()}. При этом в базе уже ${snapshot.customersCount} ${pluralizeRu(snapshot.customersCount, "клиент", "клиента", "клиентов")} и ${snapshot.salesCount} ${pluralizeRu(snapshot.salesCount, "продажа", "продажи", "продаж")}.`,
          actions: [{ type: "page", page: "crm", label: "Открыть CRM" }]
        };
  }

  if (wantsIncome) {
    return {
      text: snapshot.currentMonthIncome > 0
        ? `За ${snapshot.currentMonthLabel.toLowerCase()} у вас сейчас ${snapshot.incomeValue}. Эти данные уже можно использовать для AI-ответов по налогам, срокам и режиму.`
        : `За ${snapshot.currentMonthLabel.toLowerCase()} поступлений пока нет. Когда добавите хотя бы один доход, я смогу точнее отвечать по сумме к оплате и подсказкам.`,
      actions: [{ type: "page", page: "income", label: "Открыть доходы" }]
    };
  }

  return {
    text: `Сейчас это ранняя версия E-бухгалтера внутри MyEsep. Я уже могу подсказать сумму к оплате, ближайший срок, доход месяца и состояние CRM. Попробуйте спросить: «Сколько мне платить сейчас?» или «Что у меня ближайшее?»`,
    actions: [
      { type: "page", page: "taxes", label: "Налоги" },
      { type: "page", page: "calendar", label: "Календарь" }
    ]
  };
}

function submitAssistantMessage(text, source = "input") {
  const messageText = String(text || "").trim();
  if (!messageText) {
    return false;
  }

  const snapshot = getAssistantSnapshot();
  const { activeConversation } = ensureAssistantConversationState(snapshot);
  const messages = normalizeAssistantMessages(activeConversation ? activeConversation.messages : state.assistantMessages);
  let nextId = getNextAssistantMessageId(messages);
  messages.push({
    id: nextId++,
    role: "user",
    text: messageText,
    actions: []
  });
  const reply = buildAssistantReply(messageText, snapshot);
  messages.push({
    id: nextId,
    role: "assistant",
    text: reply.text,
      actions: Array.isArray(reply.actions) ? reply.actions.map(normalizeAssistantAction).filter(Boolean) : []
  });

  replaceAssistantActiveConversationMessages(messages, {
    title: getAssistantConversationTitle(messages, activeConversation ? activeConversation.title : "Новый диалог")
  });
  renderDashboard();
  trackEvent("assistant_message_submit", { source });
  return true;
}

function renderAssistantPage() {
  const snapshot = getAssistantSnapshot();
  const { conversations, activeConversation } = ensureAssistantConversationState(snapshot);
  const messages = normalizeAssistantMessages(activeConversation ? activeConversation.messages : state.assistantMessages);
  const quickPrompts = getAssistantQuickPrompts();
  const hasUserMessages = messages.some((message) => message.role === "user");
  const sortedConversations = [...conversations].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  const historyMarkup = sortedConversations.map((conversation) => {
    const preview = getAssistantConversationPreview(conversation.messages);
    const meta = formatAssistantConversationUpdatedLabel(conversation.updatedAt || conversation.createdAt);
    const isActive = activeConversation && conversation.id === activeConversation.id;
    return `
      <button type="button" class="assistant-history-item${isActive ? " active" : ""}" data-assistant-conversation="${conversation.id}">
        <span class="assistant-history-item-title">${escapeHtml(conversation.title || "Новый диалог")}</span>
        <span class="assistant-history-item-preview">${escapeHtml(preview)}</span>
        <span class="assistant-history-item-meta">${escapeHtml(meta)}</span>
      </button>
    `;
  }).join("");
  const messageMarkup = messages.map((message) => {
    const actionsMarkup = Array.isArray(message.actions) && message.actions.length > 0
      ? `
        <div class="assistant-message-actions">
          ${message.actions.map((action) => action.type === "soon"
            ? `<button type="button" class="btn btn-ghost btn-xs" data-assistant-soon="${escapeHtml(action.message || action.label)}">${escapeHtml(action.label)}</button>`
            : `<button type="button" class="btn btn-ghost btn-xs" data-page="${escapeHtml(action.page)}">${escapeHtml(action.label)}</button>`).join("")}
        </div>
      `
      : "";
    const inlineSuggestionsMarkup = !hasUserMessages && message.role === "assistant" && Number(message.id) === 1
      ? `
        <div class="assistant-inline-suggestions">
          <div class="assistant-inline-suggestions-title">Быстрые вопросы</div>
          <div class="assistant-inline-chip-list">
            ${quickPrompts.map((prompt) => `<button type="button" class="assistant-inline-chip" data-assistant-prompt="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`).join("")}
          </div>
        </div>
      `
      : "";
    return `
      <div class="assistant-message assistant-message-${message.role}">
        ${message.role === "assistant" ? '<div class="assistant-message-avatar"><i data-lucide="sparkles"></i></div>' : ""}
        <div class="assistant-message-bubble">
          ${message.role === "assistant" ? '<div class="assistant-message-name">E-бухгалтер</div>' : ""}
          <div class="assistant-message-text">${renderAssistantMessageText(message.text)}</div>
          ${actionsMarkup}
          ${inlineSuggestionsMarkup}
        </div>
      </div>
    `;
  }).join("");

  els.pageContent.innerHTML = `
    <section class="assistant-page assistant-user-page assistant-chat-page">
      <div class="assistant-chat-layout">
        <aside class="assistant-history-column">
          <article class="card assistant-panel-card assistant-history-shell">
            <div class="assistant-panel-head assistant-history-head">
              <div>
                <h3>История диалогов</h3>
              </div>
            </div>
            <div class="assistant-history-list">
              ${historyMarkup}
            </div>
          </article>
        </aside>

        <article class="card assistant-chat-shell">
          <div class="assistant-chat-head">
            <div class="assistant-chat-head-copy">
              <h1 class="assistant-title">E-бухгалтер</h1>
              <p class="assistant-subtitle">Спросите про налоги, сроки, доходы или CRM — отвечу по вашим данным в MyEsep.</p>
            </div>
            <button type="button" class="btn btn-ghost btn-xs" data-assistant-reset-thread>Новый диалог</button>
          </div>
          <div class="assistant-thread" id="assistantThread">
            ${messageMarkup}
          </div>
          <form id="assistantComposer" class="assistant-composer">
            <input id="assistantComposerInput" name="message" type="text" autocomplete="off" placeholder="Например: сколько мне платить сейчас?" />
            <button type="submit" class="btn btn-primary">Отправить</button>
          </form>
        </article>
      </div>
    </section>
  `;

  const composer = document.getElementById("assistantComposer");
  if (composer instanceof HTMLFormElement) {
    composer.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = composer.querySelector('input[name="message"]');
      if (!(input instanceof HTMLInputElement)) {
        return;
      }
      const submitted = submitAssistantMessage(input.value, "input");
      if (submitted) {
        input.value = "";
      }
    });
  }

  els.pageContent.querySelectorAll("[data-assistant-prompt]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const prompt = String(button.getAttribute("data-assistant-prompt") || "").trim();
      if (prompt) {
        submitAssistantMessage(prompt, "quick_prompt");
      }
    });
  });

  els.pageContent.querySelectorAll("[data-assistant-reset-thread]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      resetAssistantMessages();
      renderDashboard();
      trackEvent("assistant_thread_reset");
    });
  });

  els.pageContent.querySelectorAll("[data-assistant-conversation]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const conversationId = Number(button.getAttribute("data-assistant-conversation") || 0);
      if (!conversationId) {
        return;
      }
      if (setAssistantActiveConversation(conversationId)) {
        renderDashboard();
        trackEvent("assistant_conversation_open", { conversationId });
      }
    });
  });

  els.pageContent.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const nextPage = String(button.getAttribute("data-page") || "").trim();
      if (!nextPage) {
        return;
      }
      if (button instanceof HTMLElement) {
        button.blur();
      }
      navigateToPage(nextPage, "assistant_page");
    });
  });

  els.pageContent.querySelectorAll("[data-assistant-soon]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const message = String(button.getAttribute("data-assistant-soon") || "Этот сценарий скоро появится.").trim();
      showAppToast(message);
      trackEvent("assistant_soon_click", { message });
    });
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const thread = document.getElementById("assistantThread");
  if (thread instanceof HTMLElement) {
    thread.scrollTop = thread.scrollHeight;
  }
}

function getKnowledgeFno910Personalization() {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const fno910Rows = DEADLINES_2026
    .filter((row) => row.type === "payment" && row.regime === "simplified" && isFno910Deadline(row))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const nextDeadline = fno910Rows.find((row) => new Date(row.date) >= todayStart) || fno910Rows[0] || null;
  const paymentBreakdown = nextDeadline ? getFno910PaymentBreakdown(nextDeadline) : null;
  const deadlineLabel = nextDeadline
    ? new Intl.DateTimeFormat("ru-KZ", { day: "numeric", month: "long" }).format(new Date(nextDeadline.date))
    : "";

  return {
    deadlineLabel,
    amount: Math.max(0, Math.round(Number((paymentBreakdown && paymentBreakdown.total) || 0)))
  };
}

function getFilteredKnowledgeArticles() {
  const filters = {
    ...getDefaultKnowledgeFilters(),
    ...(state.knowledgeFilters || {})
  };

  const query = String(filters.query || "").trim().toLowerCase();
  const section = getKnowledgeSectionById(normalizeKnowledgeSection(String(filters.section || "all")));
  const sectionTopic = section && section.articleTopic ? normalizeKnowledgeTopic(section.articleTopic) : "all";

  return KNOWLEDGE_ARTICLES.filter((article) => {
    if (filters.topic !== "all" && article.topic !== filters.topic) {
      return false;
    }

    if (sectionTopic !== "all" && article.topic !== sectionTopic) {
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

function getFilteredKnowledgeFaqItems() {
  const filters = {
    ...getDefaultKnowledgeFilters(),
    ...(state.knowledgeFilters || {})
  };

  const query = String(filters.query || "").trim().toLowerCase();
  const section = getKnowledgeSectionById(normalizeKnowledgeSection(String(filters.section || "all")));
  const sectionTopic = section && section.articleTopic ? normalizeKnowledgeTopic(section.articleTopic) : "all";

  return KNOWLEDGE_FAQ_ITEMS.filter((item) => {
    if (filters.topic !== "all" && item.topic !== filters.topic) {
      return false;
    }

    if (sectionTopic !== "all" && item.topic !== sectionTopic) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [
      item.question,
      item.answer,
      ...(Array.isArray(item.tags) ? item.tags : [])
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}

function buildKnowledgeCheatsheetText(article) {
  const lines = [];
  lines.push(article.title);
  lines.push(`Тема: ${getKnowledgeTopicLabel(article.topic)}`);
  lines.push(`Когда: ${article.when}`);
  lines.push(`Как считать: ${article.formula}`);
  lines.push(`Где сделать: ${article.where}`);
  lines.push("");
  lines.push("Что нужно:");
  (article.needs || []).forEach((item) => lines.push(`- ${item}`));
  lines.push("");
  lines.push(`Важно: ${article.note}`);
  lines.push("Не юридическая консультация. Практичная шпаргалка для ориентира.");
  return lines.join("\n");
}

function getKnowledgeArticleDetails(article) {
  if (!article || !article.id) {
    return null;
  }
  return KNOWLEDGE_ARTICLE_DETAILS[article.id] || null;
}

function bindKnowledgePageCards(root = els.pageContent) {
  if (!root || typeof root.querySelectorAll !== "function") {
    return;
  }

  root.querySelectorAll("[data-knowledge-section]").forEach((button) => {
    if (!(button instanceof HTMLElement) || button.dataset.knowledgeBound === "true") {
      return;
    }

    button.dataset.knowledgeBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const nextSection = normalizeKnowledgeSection(String(button.getAttribute("data-knowledge-section") || "all"));
      const forcedModeRaw = String(button.getAttribute("data-knowledge-mode") || "");
      const nextMode = forcedModeRaw
        ? normalizeKnowledgeMode(forcedModeRaw)
        : normalizeKnowledgeMode(String((state.knowledgeFilters || {}).mode || KNOWLEDGE_MODES.articles));
      const sectionMeta = getKnowledgeSectionById(nextSection);
      const sectionTopic = sectionMeta && sectionMeta.articleTopic
        ? normalizeKnowledgeTopic(sectionMeta.articleTopic)
        : "all";

      state.knowledgeFilters = {
        ...getDefaultKnowledgeFilters(),
        ...(state.knowledgeFilters || {}),
        mode: nextMode,
        section: nextSection,
        topic: nextMode === KNOWLEDGE_MODES.faq ? "all" : sectionTopic
      };

      saveState();
      renderKnowledgePage();
      trackEvent("knowledge_section_filter", { section: nextSection, mode: nextMode, source: "direct_bind" });
    });
  });
}

function renderKnowledgePage() {
  const mergedFilters = {
    ...getDefaultKnowledgeFilters(),
    ...(state.knowledgeFilters || {})
  };
  const requestedMode = normalizeKnowledgeMode(String(mergedFilters.mode || KNOWLEDGE_MODES.articles));
  const activeMode = requestedMode === KNOWLEDGE_MODES.faq ? KNOWLEDGE_MODES.faq : KNOWLEDGE_MODES.articles;
  const activeTopic = normalizeKnowledgeTopic(String(mergedFilters.topic || "all"));
  const activeSection = normalizeKnowledgeSection(String(mergedFilters.section || "all"));

  state.knowledgeFilters = {
    ...mergedFilters,
    mode: activeMode,
    topic: activeTopic,
    section: activeSection
  };

  const selectedRegime = state.regime === "our" || state.regime === "self" ? state.regime : "simplified";
  const articles = [...getFilteredKnowledgeArticles()].sort((left, right) => {
    const leftRank = isKnowledgeArticleRelevantForRegime(getKnowledgeArticleRegime(left.id), selectedRegime) ? 0 : 1;
    const rightRank = isKnowledgeArticleRelevantForRegime(getKnowledgeArticleRegime(right.id), selectedRegime) ? 0 : 1;
    return leftRank - rightRank;
  });
  const faqItems = getFilteredKnowledgeFaqItems();
  const query = String(state.knowledgeFilters.query || "").trim();
  const selectedSection = getKnowledgeSectionById(activeSection);

  const articleCards = articles
    .map((article) => {
      const articleDetails = getKnowledgeArticleDetails(article);
      const articleRegime = getKnowledgeArticleRegime(article.id);
      const regimeBadgeLabel = getKnowledgeRegimeBadgeLabel(articleRegime);
      const isRelevantForSelectedRegime = isKnowledgeArticleRelevantForRegime(articleRegime, selectedRegime);
      const personalization = article.id === "fno-910" ? getKnowledgeFno910Personalization() : null;
      const needs = (article.needs || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      const personalizationHtml = personalization && personalization.deadlineLabel
        ? `<div class="knowledge-personal-note"><strong>Ваш следующий срок:</strong> ${escapeHtml(personalization.deadlineLabel)} · <strong>Расчетная сумма:</strong> ${fmt(personalization.amount)}</div>`
        : "";
      const fullNameHtml = articleDetails && articleDetails.fullName
        ? `<div class="card-fullname">${escapeHtml(articleDetails.fullName)}</div>`
        : "";
      const definitionHtml = articleDetails && articleDetails.definition
        ? `
          <div class="knowledge-definition">
            <div class="definition-header">
              <i data-lucide="info" style="width:14px;height:14px;color:#2D8C73"></i>
              <span class="definition-label">Что это?</span>
            </div>
            <div class="definition-text">${escapeHtml(articleDetails.definition)}</div>
            <div class="definition-amount">
              <i data-lucide="wallet" style="width:14px;height:14px;color:#5D4E37"></i>
              <div class="amount-content">
                <span class="amount-value">Платить: <strong>${escapeHtml(articleDetails.amount)}</strong></span>
                <span class="amount-basis">${escapeHtml(articleDetails.basis)}</span>
              </div>
            </div>
          </div>
        `
        : "";
      const actionsRowHtml = article.topic === "contributions"
        ? ""
        : `
          <div class="knowledge-actions-row">
            <button type="button" class="btn btn-ghost btn-xs" data-action="copy-knowledge" data-knowledge-id="${article.id}" data-default-label="Скопировать шпаргалку" title="Копирует текст карточки для отправки бухгалтеру или в заметки" aria-label="Копировать шпаргалку">Скопировать шпаргалку</button>
            <button type="button" class="btn btn-ghost btn-xs" data-page="calendar">Открыть календарь</button>
          </div>
        `;

      return `
        <article class="card knowledge-card${isRelevantForSelectedRegime ? "" : " knowledge-card-muted"}">
          <div class="knowledge-card-head">
            <div class="knowledge-card-meta-row">
              <span class="knowledge-topic-chip">${escapeHtml(getKnowledgeTopicLabel(article.topic))}</span>
              ${regimeBadgeLabel ? `<span class="knowledge-regime-chip">${escapeHtml(regimeBadgeLabel)}</span>` : ""}
            </div>
            <h3>${escapeHtml(article.title)}</h3>
            ${fullNameHtml}
            <p>${escapeHtml(article.summary)}</p>
          </div>
          ${personalizationHtml}
          ${definitionHtml}
          <div class="knowledge-practical">
            <strong>Практично:</strong>
            <span>${escapeHtml(article.practical)}</span>
          </div>
          <div class="knowledge-facts">
            <div><span>Когда</span><b>${escapeHtml(article.when)}</b></div>
            <div><span>Как считать</span><b>${escapeHtml(article.formula)}</b></div>
            <div><span>Где сделать</span><b>${escapeHtml(article.where)}</b></div>
          </div>
          <details class="knowledge-details">
            <summary>Открыть мини-чеклист</summary>
            <div class="knowledge-details-body">
              <p><strong>Что подготовить:</strong></p>
              <ul>${needs}</ul>
              <p class="knowledge-note">${escapeHtml(article.note)}</p>
            </div>
          </details>
          ${actionsRowHtml}
        </article>
      `;
    })
    .join("");

  const faqCards = faqItems
    .map((item) => {
      const tags = (item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      return `
        <details class="knowledge-faq-item">
          <summary>${escapeHtml(item.question)}</summary>
          <div class="knowledge-faq-body">
            <p>${escapeHtml(item.answer)}</p>
            <div class="knowledge-faq-tags">${tags}</div>
          </div>
        </details>
      `;
    })
    .join("");

  const topicCards = KNOWLEDGE_HOME_CARDS
    .map((item) => {
      const isActive = item.mode === KNOWLEDGE_MODES.faq
        ? activeMode === KNOWLEDGE_MODES.faq
        : activeMode === KNOWLEDGE_MODES.articles && activeSection === item.section;
      return `
        <button type="button" class="knowledge-topic-card${isActive ? " active" : ""}" data-knowledge-section="${item.section}" data-knowledge-mode="${item.mode}">
          <span class="knowledge-topic-card-icon" aria-hidden="true" style="color:${item.iconColor || "#234175"}"><i data-lucide="${item.icon}"></i></span>
          <div class="knowledge-topic-card-copy">
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.description)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  const selectedSectionHtml = selectedSection && activeMode !== KNOWLEDGE_MODES.faq
    ? `
      <article class="card mt-16 knowledge-section-card">
        <h3>${escapeHtml(selectedSection.title)}</h3>
        <p>${escapeHtml(selectedSection.description)}</p>
        <div class="knowledge-section-topics">
          ${(selectedSection.topics || []).map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}
        </div>
      </article>
    `
    : !selectedSection && query
      ? `
        <article class="card mt-16 knowledge-section-card">
          <h3>Результаты поиска</h3>
          <p>По запросу «${escapeHtml(query)}» показываем подходящие материалы из базы знаний.</p>
        </article>
      `
      : "";
  const contributionsTotalHtml = selectedSection && selectedSection.id === "contributions" && activeMode !== KNOWLEDGE_MODES.faq
    ? `
      <article class="monthly-total">
        <div class="total-left">
          <div class="total-label">
            <i data-lucide="calculator" style="width:14px;height:14px;color:rgba(255,255,255,0.5)"></i>
            <span>ИТОГО В МЕСЯЦ (МИНИМУМ)</span>
          </div>
          <div class="total-value">${fmt(IP_MIN_SOCIAL_PAYMENTS_TOTAL)}</div>
        </div>
        <div class="total-badge">от 1 МЗП</div>
      </article>
    `
    : "";

  const relatedFaqHtml = activeMode !== KNOWLEDGE_MODES.faq && (activeSection !== "all" || Boolean(query)) && faqItems.length > 0
    ? `
      <article class="card mt-16 knowledge-faq-wrap">
        <h3>Связанные вопросы</h3>
        <div class="knowledge-faq-list">
          ${faqCards}
        </div>
      </article>
    `
    : "";

  const contentHtml = activeMode === KNOWLEDGE_MODES.faq
    ? `
      <article class="card mt-16 knowledge-faq-wrap">
        <h3>Частые вопросы</h3>
        <p class="text-muted">Короткие ответы на популярные вопросы ИП.</p>
        <div class="knowledge-faq-list">
          ${faqCards || '<article class="knowledge-empty">По текущему запросу ничего не найдено. Попробуйте другой вопрос или тему.</article>'}
        </div>
      </article>
    `
    : `
      ${selectedSectionHtml}
      ${contributionsTotalHtml}
      <div class="grid grid-2 mt-16 knowledge-grid">
        ${articleCards || '<article class="card knowledge-empty">По этой теме пока ничего не найдено. Попробуйте другой запрос или соседний раздел.</article>'}
      </div>
      ${relatedFaqHtml}
    `;

  els.pageContent.innerHTML = `
    <article class="card knowledge-hero-card knowledge-hero-card-clean">
      <div class="knowledge-hero-copy">
        <h3>База знаний</h3>
        <p>Найдите короткий ответ по налогам, срокам, режимам и платежам.</p>
      </div>
      <form id="knowledgeFilterForm" class="knowledge-search-form knowledge-search-form-hero">
        <input name="query" type="text" value="${escapeHtml(state.knowledgeFilters.query)}" placeholder="Найдите ответ на свой вопрос..." aria-label="Поиск по базе знаний" />
        <input type="hidden" name="topic" value="${escapeHtml(activeTopic)}" />
        <input type="hidden" name="mode" value="${escapeHtml(activeMode)}" />
        <input type="hidden" name="section" value="${escapeHtml(activeSection)}" />
      </form>
    </article>

    <div class="knowledge-topic-grid mt-16">
      ${topicCards}
    </div>

    ${contentHtml}

    <article class="card mt-16 knowledge-disclaimer-card">
      <h3>Важно</h3>
      <p>Это практический ориентир для ИП и самозанятых. Перед оплатой и сдачей отчетности всегда сверяйте данные в официальных сервисах РК.</p>
    </article>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  bindKnowledgePageCards(els.pageContent);
}
function renderFeedbackPage() {
  const categoryCards = FEEDBACK_CATEGORIES
    .map(
      (item, index) => `
        <label class="feedback-category-option">
          <input type="radio" name="category" value="${item.id}" ${index === 0 ? "checked" : ""} />
          <span class="feedback-cat" data-category="${item.id}">
            <span class="feedback-cat-icon" style="background:${item.iconBg};">
              <i data-lucide="${item.icon}" style="width:20px;height:20px;color:${item.iconColor}"></i>
            </span>
            <span class="feedback-cat-content">
              <span class="feedback-cat-title">${item.label}</span>
              <span class="feedback-cat-desc">${item.hint}</span>
            </span>
          </span>
        </label>
      `
    )
    .join("");

  const initialStatus = "";
  const initialStatusClass = " is-empty";

  els.pageContent.innerHTML = `
    <div class="feedback-container">
      <article class="card feedback-hero-card feedback-hero-card-clean">
        <div class="feedback-header">
          <h1 class="feedback-title">Напишите нам</h1>
          <p class="feedback-subtitle">Баг, идея или вопрос — всё дойдёт до нас напрямую</p>
        </div>
      </article>

      <div class="grid mt-10 feedback-grid">
        <article class="card feedback-form-card">
          <form id="feedbackForm" class="stack-form feedback-form">
            <div class="feedback-categories">
              ${categoryCards}
            </div>

            <label class="feedback-field">
              <span>Тема (необязательно)</span>
              <input name="subject" type="text" placeholder="Коротко: что хотите решить" />
            </label>
            <label class="feedback-field">
              <span>Сообщение</span>
              <textarea name="message" rows="6" placeholder="Опишите проблему или идею. Для бага: шаги -> ожидание -> что произошло." required></textarea>
            </label>
            <label class="feedback-field">
              <span>Email для ответа</span>
              <input name="replyEmail" type="email" value="${escapeHtml(state.userEmail || "")}" placeholder="you@email.com" />
            </label>

            <label class="feedback-consent-row">
              <input name="allowContact" type="checkbox" checked />
              <span>Можно связаться со мной для уточнения деталей.</span>
            </label>

            <div class="feedback-submit-area">
              <button type="submit" class="feedback-submit-btn">
                <i data-lucide="send" style="width:16px;height:16px"></i>
                <span>Отправить</span>
              </button>
              <div class="feedback-response-time">
                <i data-lucide="zap" style="width:13px;height:13px;color:#F59E0B"></i>
                <span>Обычно отвечаем в течение нескольких часов в Telegram</span>
              </div>
            </div>
          </form>

          <p id="feedbackStatus" class="status feedback-status${initialStatusClass}" aria-live="polite">${initialStatus}</p>
        </article>
      </div>
    </div>
  `;

  syncFeedbackCategoryCards(els.pageContent);

  els.pageContent.querySelectorAll('.feedback-category-option input[name="category"]').forEach((input) => {
    input.addEventListener("change", () => {
      syncFeedbackCategoryCards(els.pageContent);
    });
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function getCrmRegimeLabel(regime) {
  if (regime === "self") return "Самозанятый";
  if (regime === "our") return "ОУР";
  return "Упрощёнка (910)";
}

function getCrmPlanMeta(plan, status) {
  const safePlan = String(plan || "").trim().toLowerCase();
  const safeStatus = String(status || "").trim().toLowerCase();

  if (safePlan === "pro" || safeStatus === "active") {
    return { label: "Pro", className: "plan-pro" };
  }

  if (safePlan === "trial" || safeStatus === "trial") {
    return { label: "Базовый", className: "plan-trial" };
  }

  return { label: "Неизвестно", className: "plan-trial" };
}

function formatCrmDateTime(value) {
  const source = String(value || "").trim();
  if (!source) return "—";
  const date = new Date(source);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("ru-KZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getCrmUsersSummary(users = []) {
  const safeUsers = Array.isArray(users) ? users : [];
  return safeUsers.reduce((acc, user) => {
    acc.totalUsers += 1;
    if (String(user.tax_regime || "").trim() === "simplified") acc.simplifiedUsers += 1;
    if (String(user.tax_regime || "").trim() === "self") acc.selfUsers += 1;
    if (Number(user.employees_count || 0) > 0 || normalizeHasEmployeesPreference(user.has_employees) === "yes") acc.usersWithEmployees += 1;
    if (String(user.subscription_plan || "").trim() === "pro" || String(user.subscription_status || "").trim() === "active") acc.proUsers += 1;
    return acc;
  }, {
    totalUsers: 0,
    simplifiedUsers: 0,
    selfUsers: 0,
    usersWithEmployees: 0,
    proUsers: 0
  });
}

function getCrmFetchErrorMessage(error) {
  const raw = String(
    (error && error.message)
      || (error && error.context && error.context.message)
      || ""
  ).trim();

  if (!raw) {
    return "Не удалось загрузить CRM-данные. Проверьте Edge Function и SQL-миграции в Supabase.";
  }

  const normalized = raw.toLowerCase();
  if (normalized.includes("failed to fetch") || normalized.includes("networkerror") || normalized.includes("fetch")) {
    return "Не удалось подключиться к CRM в Supabase. Скорее всего, Edge Function `crm-users` ещё не задеплоена или не отвечает.";
  }

  if (normalized.includes("functionsfetcherror") || normalized.includes("edge function")) {
    return "CRM-сервер пока не отвечает. Проверьте deploy Edge Function `crm-users` в Supabase.";
  }

  if (normalized.includes("unauthorized") || normalized.includes("jwt") || normalized.includes("access token")) {
    return "Не удалось авторизовать запрос в CRM. Попробуйте выйти и войти заново.";
  }

  return raw;
}

async function fetchCrmData(force = false) {
  if (!canAccessCrmSection()) {
    return;
  }

  if (crmLoading && !force) {
    return;
  }

  const supabase = supabaseClient;
  if (
    !supabase
    || !supabase.auth
    || typeof supabase.auth.getSession !== "function"
    || !supabase.functions
    || typeof supabase.functions.invoke !== "function"
  ) {
    crmError = "CRM пока недоступна: нет подключения к Supabase.";
    crmLoading = false;
    if (state.page === "crm") {
      renderCrmPage();
    }
    return;
  }

  crmLoading = true;
  crmError = "";
  if (force) {
    crmDataCache = null;
  }

  if (state.page === "crm") {
    renderCrmPage();
  }

  try {
    const sessionData = await supabase.auth.getSession();
    const accessToken = sessionData?.data?.session?.access_token;
    if (!accessToken) {
      throw new Error("Не удалось получить сессию владельца.");
    }

    const { data: payload, error: invokeError } = await supabase.functions.invoke("crm-users", {
      method: "GET"
    });

    if (invokeError) {
      throw invokeError;
    }

    crmDataCache = {
      users: Array.isArray(payload.users) ? payload.users : [],
      owner: payload.owner || null,
      loadedAt: new Date().toISOString()
    };
    crmError = "";
  } catch (error) {
    crmError = getCrmFetchErrorMessage(error);
  } finally {
    crmLoading = false;
    if (state.page === "crm") {
      renderCrmPage();
    }
  }
}

function renderCrmPage() {
  const customers = normalizeCrmCustomers(state.crmCustomers);
  state.crmCustomers = customers;
  syncCrmSalesWithIncomeJournal();
  const sales = normalizeCrmSales(state.crmSales).sort((left, right) => {
    const dateDiff = new Date(right.date) - new Date(left.date);
    if (dateDiff !== 0) return dateDiff;
    return Number(right.id || 0) - Number(left.id || 0);
  });
  state.crmSales = sales;
  const payments = normalizeCrmPayments(state.crmPayments).sort((left, right) => {
    const dateDiff = new Date(right.date) - new Date(left.date);
    if (dateDiff !== 0) return dateDiff;
    return Number(right.id || 0) - Number(left.id || 0);
  });
  state.crmPayments = payments;

  const editingCustomer = state.crmCustomerEditId ? customers.find((row) => row.id === state.crmCustomerEditId) : null;
  const editingSale = state.crmSaleEditId ? sales.find((row) => row.id === state.crmSaleEditId) : null;
  const editingPayment = state.crmPaymentEditId ? payments.find((row) => row.id === state.crmPaymentEditId) : null;
  const draftSaleCustomerId = Number(state.crmSaleDraftCustomerId || 0) || null;
  const draftPaymentSaleId = Number(state.crmPaymentDraftSaleId || 0) || null;
  const selectedCustomer = state.crmSelectedCustomerId ? customers.find((row) => row.id === state.crmSelectedCustomerId) : null;
  const quickSaleCustomer = draftSaleCustomerId ? customers.find((row) => row.id === draftSaleCustomerId) : null;

  if (state.crmCustomerEditId && !editingCustomer) {
    state.crmCustomerEditId = null;
  }
  if (state.crmSaleEditId && !editingSale) {
    state.crmSaleEditId = null;
  }
  if (state.crmPaymentEditId && !editingPayment) {
    state.crmPaymentEditId = null;
  }
  if (state.crmPaymentDraftSaleId && !sales.some((row) => row.id === draftPaymentSaleId)) {
    state.crmPaymentDraftSaleId = null;
  }
  if (state.crmSaleDraftCustomerId && !quickSaleCustomer) {
    state.crmSaleDraftCustomerId = null;
  }
  if (state.crmSelectedCustomerId && !selectedCustomer) {
    state.crmSelectedCustomerId = null;
  }

  const paymentsBySaleId = new Map();
  payments.forEach((payment) => {
    const saleId = Number(payment.saleId || 0);
    if (!saleId) return;
    const bucket = paymentsBySaleId.get(saleId) || [];
    bucket.push(payment);
    paymentsBySaleId.set(saleId, bucket);
  });

  const saleSummaries = new Map();
  sales.forEach((sale) => {
    const salePayments = paymentsBySaleId.get(sale.id) || [];
    const paidTotal = salePayments.reduce((sum, row) => sum + Number(row.amount || 0), 0);
    saleSummaries.set(sale.id, {
      customer: getCrmCustomerById(sale.customerId, customers),
      salePayments,
      paidTotal,
      remaining: Math.max(0, Number(sale.amount || 0) - paidTotal),
      paymentMeta: getCrmPaymentStateMeta(sale, payments)
    });
  });

  const now = new Date();
  const paymentsThisMonth = payments
    .filter((row) => {
      const date = new Date(row.date);
      return !Number.isNaN(date.getTime()) && date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
    });
  const paidThisMonth = paymentsThisMonth.reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const activeSales = sales.filter((sale) => normalizeCrmSaleStatus(sale.status) !== "cancelled");
  const salesTotalAmount = activeSales.reduce((sum, sale) => sum + Number(sale.amount || 0), 0);
  const waitingAmount = sales.reduce((sum, sale) => {
    const summary = saleSummaries.get(sale.id);
    if (!summary || normalizeCrmSaleStatus(sale.status) === "cancelled") {
      return sum;
    }
    return sum + Number(summary.remaining || 0);
  }, 0);

  const selectedSaleCustomerId = editingSale
    ? Number(editingSale.customerId || 0) || 0
    : draftSaleCustomerId || 0;
  const customerOptions = customers
    .map((row) => `<option value="${row.id}" ${row.id === selectedSaleCustomerId ? "selected" : ""}>${escapeHtml(row.name)}</option>`)
    .join("");
  const selectedPaymentSaleId = editingPayment
    ? Number(editingPayment.saleId || 0) || 0
    : Number(state.crmPaymentDraftSaleId || 0) || 0;
  const activeSaleOptions = sales
    .filter((sale) => normalizeCrmSaleStatus(sale.status) !== "cancelled" || (editingPayment && sale.id === Number(editingPayment.saleId || 0)))
    .map((sale) => {
      const summary = saleSummaries.get(sale.id);
      const customer = summary ? summary.customer : null;
      const remainingLabel = summary ? ` · остаток ${fmt(summary.remaining)}` : "";
      const label = [sale.title || "Продажа", customer ? customer.name : "Без клиента"].filter(Boolean).join(" · ");
      return `<option value="${sale.id}" ${sale.id === selectedPaymentSaleId ? "selected" : ""}>${escapeHtml(label + remainingLabel)}</option>`;
    })
    .join("");
  const hasPaymentTargetSales = sales.some((sale) => normalizeCrmSaleStatus(sale.status) !== "cancelled") || Boolean(editingPayment);
  const crmFilters = {
    ...getDefaultCrmFilters(),
    ...(state.crmFilters || {})
  };
  const crmQuery = String(crmFilters.query || "").trim().toLowerCase();
  const crmStatus = normalizeCrmFilterStatus(crmFilters.status || "all");
  const filteredSales = sales.filter((sale) => {
    const summary = saleSummaries.get(sale.id) || {};
    const customer = summary.customer || null;
    const haystack = [
      sale.title,
      sale.note,
      customer ? customer.name : "",
      customer ? customer.contact : "",
      sale.dueDate
    ].join(" ").toLowerCase();
    const queryMatches = !crmQuery || haystack.includes(crmQuery);
    if (!queryMatches) {
      return false;
    }

    if (crmStatus === "all") {
      return true;
    }

    if (["draft", "sent", "cancelled"].includes(crmStatus)) {
      return normalizeCrmSaleStatus(sale.status) === crmStatus;
    }

    return String((summary.paymentMeta || {}).id || "waiting") === crmStatus;
  });
  const filteredSaleIds = new Set(filteredSales.map((row) => row.id));
  const filteredPayments = payments.filter((payment) => {
    if (!filteredSaleIds.has(Number(payment.saleId || 0))) {
      return false;
    }
    if (!crmQuery) {
      return true;
    }
    const sale = getCrmSaleById(payment.saleId, sales);
    const customer = sale ? getCrmCustomerById(sale.customerId, customers) : null;
    const haystack = [
      payment.note,
      sale ? sale.title : "",
      customer ? customer.name : "",
      customer ? customer.contact : ""
    ].join(" ").toLowerCase();
    return haystack.includes(crmQuery);
  });
  const filteredCustomers = customers.filter((customer) => {
    if (!crmQuery && crmStatus === "all") {
      return true;
    }
    const directMatch = !crmQuery || [customer.name, customer.contact, customer.note].join(" ").toLowerCase().includes(crmQuery);
    const linkedSales = sales.filter((sale) => Number(sale.customerId || 0) === customer.id);
    const linkedVisible = linkedSales.some((sale) => filteredSaleIds.has(sale.id));
    return directMatch && (crmStatus === "all" ? true : linkedVisible || linkedSales.length === 0);
  });
  const customersWithSalesCount = customers.filter((customer) => sales.some((sale) => Number(sale.customerId || 0) === customer.id)).length;
  const customersWithoutSalesCount = Math.max(0, customers.length - customersWithSalesCount);
  const totalCustomerPaid = payments.reduce((sum, row) => sum + Number(row.amount || 0), 0);

  const customerRows = filteredCustomers.length > 0
    ? filteredCustomers.map((customer) => {
        const linkedSales = sales.filter((sale) => Number(sale.customerId || 0) === customer.id);
        const paidTotal = linkedSales.reduce((sum, sale) => sum + Number((saleSummaries.get(sale.id) || {}).paidTotal || 0), 0);
        const lastSale = linkedSales.length > 0
          ? linkedSales.slice().sort((left, right) => new Date(right.date) - new Date(left.date))[0]
          : null;
        const isActive = selectedCustomer && customer.id === selectedCustomer.id;
        return `
          <tr>
            <td>
              <div class="crm-user-cell">
                <strong>${escapeHtml(customer.name)}</strong>
                <small>${escapeHtml(customer.contact || "Контакт не указан")}</small>
              </div>
            </td>
            <td>
              <div class="crm-customer-sales-cell">
                <strong>${linkedSales.length}</strong>
                <small>${lastSale ? `последняя ${formatDate(lastSale.date)}` : "Продаж пока нет"}</small>
              </div>
            </td>
            <td>${fmt(paidTotal)}</td>
            <td class="income-row-actions">
              <button type="button" class="btn btn-ghost btn-xs crm-row-action-sale" data-action="crm-prefill-sale" data-customer-id="${customer.id}" aria-label="Добавить продажу" title="Добавить продажу">
                <i data-lucide="plus" class="income-action-icon" aria-hidden="true"></i>
                <span>Продажа</span>
              </button>
              <button type="button" class="icon-action-btn ${isActive ? "icon-view-active" : "icon-view"}" data-action="crm-open-customer" data-customer-id="${customer.id}" data-open-crm-customer="${customer.id}" aria-label="Открыть карточку клиента" title="Карточка клиента">
                <i data-lucide="eye" class="income-action-icon" aria-hidden="true"></i>
              </button>
              <button type="button" class="icon-action-btn icon-edit" data-action="crm-edit-customer" data-customer-id="${customer.id}" data-edit-crm-customer="${customer.id}" aria-label="Изменить клиента" title="Изменить">
                <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
              </button>
              <button type="button" class="icon-action-btn icon-delete" data-action="crm-delete-customer" data-customer-id="${customer.id}" data-delete-crm-customer="${customer.id}" aria-label="Удалить клиента" title="Удалить">
                <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        `;
      }).join("")
    : `
      <tr>
        <td colspan="4" class="crm-empty-cell">${crmQuery || crmStatus !== "all" ? "По текущим фильтрам клиенты не найдены." : "Пока нет клиентов. Добавьте первого клиента, и потом сможете привязывать к нему продажи."}</td>
      </tr>
    `;

  const salesRows = filteredSales.length > 0
    ? filteredSales.map((sale) => {
        const summary = saleSummaries.get(sale.id) || {};
        const customer = summary.customer || null;
        const stageMeta = getCrmSaleStatusMeta(sale.status);
        const paymentMeta = summary.paymentMeta || getCrmPaymentStateMeta(sale, payments);
        const paidTotal = Number(summary.paidTotal || 0);
        const remaining = Number(summary.remaining || 0);
        const salePayments = Array.isArray(summary.salePayments) ? summary.salePayments : [];
        const canAddPayment = remaining > 0 && normalizeCrmSaleStatus(sale.status) !== "cancelled";
        return `
          <tr>
            <td>
              <div class="crm-user-cell">
                <strong>${escapeHtml(sale.title || "Продажа")}</strong>
                <small>${escapeHtml(customer ? customer.name : "Без клиента")} · ${escapeHtml(stageMeta.label)}${sale.dueDate ? ` · срок ${formatDate(sale.dueDate)}` : ""}</small>
              </div>
            </td>
            <td><span class="crm-status-badge ${paymentMeta.className}">${escapeHtml(paymentMeta.label)}</span></td>
            <td>${formatDate(sale.date)}</td>
            <td>${fmt(sale.amount)}</td>
            <td>${fmt(paidTotal)}</td>
            <td>${fmt(remaining)}</td>
            <td>${salePayments.length > 0 ? `<span class="crm-sync-badge">${salePayments.length} ${pluralizeRu(salePayments.length, "оплата", "оплаты", "оплат")}</span>` : '<span class="crm-sync-badge crm-sync-badge-muted">Нет оплат</span>'}</td>
            <td class="income-row-actions">
              ${canAddPayment ? `
                <button type="button" class="btn btn-ghost btn-xs crm-row-action-payment" data-action="crm-prefill-payment" data-sale-id="${sale.id}" aria-label="Добавить оплату по продаже" title="Добавить оплату">
                  <i data-lucide="wallet" class="income-action-icon" aria-hidden="true"></i>
                  <span>Оплата</span>
                </button>
              ` : ""}
              <button type="button" class="icon-action-btn icon-edit" data-action="crm-edit-sale" data-sale-id="${sale.id}" data-edit-crm-sale="${sale.id}" aria-label="Изменить продажу" title="Изменить">
                <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
              </button>
              <button type="button" class="icon-action-btn icon-delete" data-action="crm-delete-sale" data-sale-id="${sale.id}" data-delete-crm-sale="${sale.id}" aria-label="Удалить продажу" title="Удалить">
                <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        `;
      }).join("")
    : `
      <tr>
        <td colspan="8" class="crm-empty-cell">${crmQuery || crmStatus !== "all" ? "По текущим фильтрам продажи не найдены." : "Пока нет продаж. Сначала добавьте сделку, а потом сможете вносить оплаты и синхронизировать их с «Доходами»."}</td>
      </tr>
    `;

  const paymentRows = filteredPayments.length > 0
    ? filteredPayments.map((payment) => {
        const sale = getCrmSaleById(payment.saleId, sales);
        const customer = sale ? getCrmCustomerById(sale.customerId, customers) : null;
        return `
          <tr>
            <td>
              <div class="crm-user-cell">
                <strong>${escapeHtml(customer ? customer.name : "Без клиента")}</strong>
                <small>${escapeHtml(sale ? sale.title : "Продажа удалена")}</small>
              </div>
            </td>
            <td>${formatDate(payment.date)}</td>
            <td>${fmt(payment.amount)}</td>
            <td>${payment.linkedIncomeId ? '<span class="crm-sync-badge">В доходах</span>' : '<span class="crm-sync-badge crm-sync-badge-muted">Не в доходах</span>'}</td>
            <td class="income-row-actions">
              <button type="button" class="icon-action-btn icon-edit" data-action="crm-edit-payment" data-payment-id="${payment.id}" data-edit-crm-payment="${payment.id}" aria-label="Изменить оплату" title="Изменить">
                <i data-lucide="pencil" class="income-action-icon" aria-hidden="true"></i>
              </button>
              <button type="button" class="icon-action-btn icon-delete" data-action="crm-delete-payment" data-payment-id="${payment.id}" data-delete-crm-payment="${payment.id}" aria-label="Удалить оплату" title="Удалить">
                <i data-lucide="trash-2" class="income-action-icon" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        `;
      }).join("")
    : `
      <tr>
        <td colspan="5" class="crm-empty-cell">${crmQuery || crmStatus !== "all" ? "По текущим фильтрам оплаты не найдены." : "Пока нет оплат. Как только добавите первую оплату, она сразу появится в «Доходах» и пересчитает налоги."}</td>
      </tr>
    `;

  const waitingSales = sales
    .filter((sale) => normalizeCrmSaleStatus(sale.status) !== "cancelled")
    .map((sale) => ({
      sale,
      summary: saleSummaries.get(sale.id) || {}
    }))
    .filter(({ summary }) => Number(summary.remaining || 0) > 0)
    .sort((left, right) => {
      const leftOverdue = String((left.summary.paymentMeta || {}).id || "") === "overdue";
      const rightOverdue = String((right.summary.paymentMeta || {}).id || "") === "overdue";
      if (leftOverdue !== rightOverdue) {
        return leftOverdue ? -1 : 1;
      }
      const leftDate = new Date(left.sale.dueDate || left.sale.date);
      const rightDate = new Date(right.sale.dueDate || right.sale.date);
      return leftDate - rightDate;
    });
  const waitingListMarkup = waitingSales.length > 0
    ? waitingSales.map(({ sale, summary }) => {
        const customer = summary.customer || null;
        const paymentMeta = summary.paymentMeta || getCrmPaymentStateMeta(sale, payments);
        return `
          <div class="crm-waiting-item">
            <div class="crm-waiting-main">
              <div class="crm-user-cell">
                <strong>${escapeHtml(sale.title || "Продажа")}</strong>
                <small>${escapeHtml(customer ? customer.name : "Без клиента")} · сделка ${formatDate(sale.date)}${sale.dueDate ? ` · срок оплаты ${formatDate(sale.dueDate)}` : ""}</small>
              </div>
              <div class="crm-waiting-amount">
                <span>Осталось</span>
                <strong>${fmt(summary.remaining || 0)}</strong>
              </div>
            </div>
            <div class="crm-waiting-meta-row">
              <span class="crm-status-badge ${paymentMeta.className}">${escapeHtml(paymentMeta.label)}</span>
              <span>Сумма сделки: <strong>${fmt(sale.amount)}</strong></span>
              <span>Уже оплачено: <strong>${fmt(summary.paidTotal || 0)}</strong></span>
            </div>
            <div class="crm-waiting-actions">
              <button type="button" class="btn btn-primary btn-xs" data-action="crm-prefill-payment" data-sale-id="${sale.id}">Добавить оплату</button>
            </div>
          </div>
        `;
      }).join("")
    : "";
  const waitingSalesLabel = `${waitingSales.length} ${pluralizeRu(waitingSales.length, "сделка", "сделки", "сделок")}`;
  const waitingSalesNote = waitingSales.length === 0
    ? "Сейчас все оплаты закрыты."
    : `На сумму ${fmt(waitingAmount)}`;
  const overdueSalesCount = waitingSales.filter(({ summary }) => String((summary.paymentMeta || {}).id || "") === "overdue").length;
  const recentCrmActivity = [
    ...sales.map((sale) => {
      const summary = saleSummaries.get(sale.id) || {};
      const customer = summary.customer || null;
      return {
        type: "sale",
        id: sale.id,
        icon: "briefcase",
        badge: "Продажа",
        title: sale.title || "Продажа",
        note: `${customer ? customer.name : "Без клиента"} · ${sale.dueDate ? `срок ${formatDate(sale.dueDate)}` : `сделка ${formatDate(sale.date)}`}`,
        amountLabel: fmt(sale.amount),
        date: sale.date
      };
    }),
    ...payments.map((payment) => {
      const sale = getCrmSaleById(payment.saleId, sales);
      const customer = sale ? getCrmCustomerById(sale.customerId, customers) : null;
      return {
        type: "payment",
        id: payment.id,
        icon: "wallet",
        badge: "Оплата",
        title: customer ? customer.name : (sale ? sale.title : "Оплата"),
        note: `${sale ? sale.title : "Продажа удалена"} · ${payment.linkedIncomeId ? "уже в доходах" : "попадёт в доходы"}`,
        amountLabel: fmt(payment.amount),
        date: payment.date
      };
    })
  ]
    .sort((left, right) => new Date(right.date) - new Date(left.date) || Number(right.id || 0) - Number(left.id || 0))
    .slice(0, 6);
  const recentActivityMarkup = recentCrmActivity.length > 0
    ? recentCrmActivity.map((item) => `
        <div class="crm-activity-item">
          <div class="crm-activity-main">
            <span class="crm-activity-icon crm-activity-icon-${item.type}">
              <i data-lucide="${item.icon}" class="crm-activity-icon-svg" aria-hidden="true"></i>
            </span>
            <div class="crm-activity-copy">
              <div class="crm-activity-topline">
                <strong>${escapeHtml(item.title)}</strong>
                <span class="crm-activity-badge">${escapeHtml(item.badge)}</span>
              </div>
              <small>${escapeHtml(item.note)}</small>
            </div>
          </div>
          <div class="crm-activity-meta">
            <strong>${escapeHtml(item.amountLabel)}</strong>
            <span>${formatDate(item.date)}</span>
          </div>
        </div>
      `).join("")
    : "";
  const customerCardMarkup = selectedCustomer ? (() => {
    const linkedSales = sales.filter((sale) => Number(sale.customerId || 0) === selectedCustomer.id);
    const linkedSaleIds = new Set(linkedSales.map((row) => row.id));
    const linkedPayments = payments.filter((payment) => linkedSaleIds.has(Number(payment.saleId || 0)));
    const paidTotal = linkedPayments.reduce((sum, row) => sum + Number(row.amount || 0), 0);
    const waitingTotal = linkedSales.reduce((sum, sale) => sum + Number((saleSummaries.get(sale.id) || {}).remaining || 0), 0);
    const lastPayment = linkedPayments.length > 0
      ? linkedPayments.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0]
      : null;
    const customerSalesRows = linkedSales.length > 0
      ? linkedSales.map((sale) => {
          const summary = saleSummaries.get(sale.id) || {};
          const paymentMeta = summary.paymentMeta || getCrmPaymentStateMeta(sale, payments);
          return `
            <tr>
              <td>
                <div class="crm-user-cell">
                  <strong>${escapeHtml(sale.title || "Продажа")}</strong>
                  <small>${formatDate(sale.date)}${sale.dueDate ? ` · срок ${formatDate(sale.dueDate)}` : ""}</small>
                </div>
              </td>
              <td><span class="crm-status-badge ${paymentMeta.className}">${escapeHtml(paymentMeta.label)}</span></td>
              <td>${fmt(sale.amount)}</td>
              <td>${fmt(summary.paidTotal || 0)}</td>
              <td>${fmt(summary.remaining || 0)}</td>
            </tr>
          `;
        }).join("")
      : `
        <tr>
          <td colspan="5" class="crm-empty-cell">У этого клиента пока нет продаж.</td>
        </tr>
      `;

    return `
      <div class="crm-modal-backdrop" data-crm-customer-backdrop>
        <article id="crmCustomerCard" class="card crm-table-card crm-customer-card crm-customer-modal" role="dialog" aria-modal="true" aria-labelledby="crmCustomerCardTitle">
          <div class="crm-table-head">
            <div>
              <h3 id="crmCustomerCardTitle">Карточка клиента</h3>
              <p class="muted">История продаж, оплат и остатка по клиенту в одном месте.</p>
            </div>
            <button type="button" class="btn btn-ghost btn-xs" data-close-crm-customer-card>Закрыть</button>
          </div>
          <div class="crm-customer-card-grid">
            <div class="crm-customer-summary">
              <div class="crm-user-cell">
                <strong>${escapeHtml(selectedCustomer.name)}</strong>
                <small>${escapeHtml(selectedCustomer.contact || "Контакт не указан")}</small>
              </div>
              ${selectedCustomer.note ? `<p class="crm-customer-note">${escapeHtml(selectedCustomer.note)}</p>` : ""}
            </div>
            <div class="crm-customer-metrics">
              <div class="crm-customer-metric">
                <span>Продажи</span>
                <strong>${linkedSales.length}</strong>
              </div>
              <div class="crm-customer-metric">
                <span>Оплаты</span>
                <strong>${linkedPayments.length}</strong>
              </div>
              <div class="crm-customer-metric">
                <span>Оплачено</span>
                <strong>${fmt(paidTotal)}</strong>
              </div>
              <div class="crm-customer-metric">
                <span>Осталось</span>
                <strong>${fmt(waitingTotal)}</strong>
              </div>
            </div>
          </div>
          <div class="crm-customer-meta-row">
            <span class="crm-sync-badge ${lastPayment ? "" : "crm-sync-badge-muted"}">${lastPayment ? `Последняя оплата: ${formatDate(lastPayment.date)}` : "Оплат пока не было"}</span>
            <button type="button" class="btn btn-primary btn-xs" data-action="crm-prefill-sale" data-customer-id="${selectedCustomer.id}">Добавить продажу</button>
            <button type="button" class="btn btn-ghost btn-xs" data-action="crm-edit-customer" data-customer-id="${selectedCustomer.id}">Изменить клиента</button>
          </div>
          <div class="table-wrap crm-table-wrap">
            <table class="table crm-table">
              <thead>
                <tr>
                  <th>Продажа</th>
                  <th>Статус</th>
                  <th>Сумма</th>
                  <th>Оплачено</th>
                  <th>Остаток</th>
                </tr>
              </thead>
              <tbody>${customerSalesRows}</tbody>
            </table>
          </div>
        </article>
      </div>
    `;
  })() : "";

  let crmTab = normalizeCrmTab(state.crmTab || "overview");
  if (state.crmTab !== crmTab) {
    state.crmTab = crmTab;
  }
  const effectiveSalesPanel = editingSale
    ? "sale"
    : (editingPayment || draftPaymentSaleId)
      ? "payment"
      : normalizeCrmSalesPanel(state.crmSalesPanel);
  const isCustomerFormOpen = Boolean(editingCustomer) || Boolean(state.crmCustomerFormOpen);
  const crmSetupSteps = [
    { id: "client", label: "Клиент", done: customers.length > 0 },
    { id: "sale", label: "Продажа", done: sales.length > 0 },
    { id: "payment", label: "Оплата", done: payments.length > 0 }
  ];
  const crmSetupCompletedCount = crmSetupSteps.filter((step) => step.done).length;
  const crmSetupProgressPercent = Math.round((crmSetupCompletedCount / crmSetupSteps.length) * 100);
  const showCrmStartGuide = payments.length === 0 && customers.length === 0 && sales.length === 0;
  const showCrmSetupProgress = payments.length === 0 && !showCrmStartGuide;
  let crmNextStepAction = "crm-open-payment-form";
  let crmNextStepLabel = "Добавить оплату";
  let crmNextStepTitle = "Остался последний шаг";
  let crmNextStepDescription = "Отметьте первую оплату, и она сразу попадёт в доходы.";
  let crmNextStepIcon = "wallet";
  let crmNextStepHint = "После оплаты сумма появится в доходах и налогах.";

  if (customers.length === 0) {
    crmNextStepAction = "crm-open-customer-form";
    crmNextStepLabel = "Добавить клиента";
    crmNextStepTitle = "Начните с клиента";
    crmNextStepDescription = "Сначала сохраните клиента, чтобы потом было проще привязать к нему продажу.";
    crmNextStepIcon = "user-plus";
    crmNextStepHint = "Достаточно имени, телефон можно добавить позже.";
  } else if (sales.length === 0) {
    crmNextStepAction = "crm-open-sale-form";
    crmNextStepLabel = "Добавить продажу";
    crmNextStepTitle = "Следующий шаг — продажа";
    crmNextStepDescription = "Клиент уже есть. Теперь добавьте первую продажу и сумму, которую вам должны оплатить.";
    crmNextStepIcon = "briefcase";
    crmNextStepHint = "Продажа сама не влияет на налоги, пока нет оплаты.";
  }

  const crmNavButtonsMarkup = `
    <button type="button" class="btn crm-nav-action crm-nav-tab${crmTab === "overview" ? " is-active" : ""}" data-action="crm-switch-tab" data-crm-tab="overview">Обзор</button>
    <button type="button" class="btn crm-nav-action crm-nav-tab${crmTab === "clients" ? " is-active" : ""}" data-action="crm-switch-tab" data-crm-tab="clients">Клиенты</button>
    <button type="button" class="btn crm-nav-action crm-nav-tab${crmTab === "sales" ? " is-active" : ""}" data-action="crm-switch-tab" data-crm-tab="sales">Продажи и оплаты</button>
  `;

  const crmOverviewMarkup = `
    <div class="crm-section-stack">
      ${showCrmStartGuide ? `
        <article class="card crm-start-card">
          <div class="crm-start-head">
            <div>
              <h3>С чего начать</h3>
              <p class="muted">Здесь всего три шага: клиент, продажа, оплата. Когда отмечаете оплату, MyEsep сам отправляет её в доходы.</p>
            </div>
          </div>
          <div class="crm-start-grid">
            <article class="crm-start-step">
              <div class="crm-start-step-top">
                <span class="crm-start-step-number">1</span>
                <span class="crm-start-step-icon">
                  <i data-lucide="user-plus" class="crm-start-step-icon-svg" aria-hidden="true"></i>
                </span>
              </div>
              <div class="crm-start-step-copy">
                <h4>Клиент</h4>
                <p>Сохраняете имя и телефон. Потом клиента легко выбрать в продаже.</p>
              </div>
              <div class="crm-start-step-meta">Пока клиентов нет</div>
              <button type="button" class="btn btn-primary btn-sm crm-step-btn" data-action="crm-open-customer-form">Добавить клиента</button>
            </article>
            <article class="crm-start-step">
              <div class="crm-start-step-top">
                <span class="crm-start-step-number">2</span>
                <span class="crm-start-step-icon">
                  <i data-lucide="briefcase" class="crm-start-step-icon-svg" aria-hidden="true"></i>
                </span>
              </div>
              <div class="crm-start-step-copy">
                <h4>Продажа</h4>
                <p>Фиксируете сумму и срок оплаты. Налоги пока не меняются.</p>
              </div>
              <div class="crm-start-step-meta">Пока продаж нет</div>
              <button type="button" class="btn btn-primary btn-sm crm-step-btn" data-action="crm-open-sale-form">Добавить продажу</button>
            </article>
            <article class="crm-start-step">
              <div class="crm-start-step-top">
                <span class="crm-start-step-number">3</span>
                <span class="crm-start-step-icon">
                  <i data-lucide="wallet" class="crm-start-step-icon-svg" aria-hidden="true"></i>
                </span>
              </div>
              <div class="crm-start-step-copy">
                <h4>Оплата</h4>
                <p>Как только деньги пришли, отмечаете оплату. Она сразу появляется в доходах.</p>
              </div>
              <div class="crm-start-step-meta">Поступлений в этом месяце пока нет</div>
              <button type="button" class="btn btn-primary btn-sm crm-step-btn" data-action="crm-open-payment-form">Добавить оплату</button>
            </article>
          </div>
        </article>
      ` : showCrmSetupProgress ? `
        <article class="card crm-progress-card">
          <div class="crm-progress-head">
            <div class="crm-progress-main">
              <span class="crm-progress-kicker">CRM почти готова</span>
              <h3>${escapeHtml(crmNextStepTitle)}</h3>
              <p class="muted">${escapeHtml(crmNextStepDescription)}</p>
              <div class="crm-progress-track" aria-hidden="true">
                <span style="width: ${crmSetupProgressPercent}%"></span>
              </div>
              <div class="crm-progress-pills" aria-label="Прогресс настройки CRM">
                ${crmSetupSteps.map((step, index) => `
                  <span class="crm-progress-pill ${step.done ? "is-done" : "is-pending"}">
                    ${index + 1}. ${escapeHtml(step.label)}
                  </span>
                `).join("")}
              </div>
            </div>
            <div class="crm-progress-action-panel">
              <span class="crm-progress-badge">${crmSetupCompletedCount}/3</span>
              <span class="crm-progress-action-icon">
                <i data-lucide="${crmNextStepIcon}" class="crm-progress-action-icon-svg" aria-hidden="true"></i>
              </span>
              <button type="button" class="btn btn-primary btn-sm" data-action="${crmNextStepAction}">${escapeHtml(crmNextStepLabel)}</button>
              <small>${escapeHtml(crmNextStepHint)}</small>
            </div>
          </div>
        </article>
      ` : ""}

      <div class="grid crm-metrics-grid crm-metrics-grid-simple">
        <article class="card crm-metric-card crm-metric-card-clients">
          <div class="crm-metric-head">
            <span class="crm-metric-icon">
              <i data-lucide="users" class="crm-metric-icon-svg" aria-hidden="true"></i>
            </span>
            <span class="crm-metric-label">Клиенты</span>
          </div>
          <strong class="crm-metric-value">${customers.length}</strong>
          <span class="crm-metric-note">База клиентов CRM</span>
        </article>
        <article class="card crm-metric-card crm-metric-card-waiting">
          <div class="crm-metric-head">
            <span class="crm-metric-icon">
              <i data-lucide="clock" class="crm-metric-icon-svg" aria-hidden="true"></i>
            </span>
            <span class="crm-metric-label">Ждут оплаты</span>
          </div>
          <strong class="crm-metric-value">${escapeHtml(waitingSalesLabel)}</strong>
          <span class="crm-metric-note">${escapeHtml(waitingSalesNote)}</span>
        </article>
        <article class="card crm-metric-card crm-metric-card-paid">
          <div class="crm-metric-head">
            <span class="crm-metric-icon">
              <i data-lucide="credit-card" class="crm-metric-icon-svg" aria-hidden="true"></i>
            </span>
            <span class="crm-metric-label">Оплаты в этом месяце</span>
          </div>
          <strong class="crm-metric-value">${fmt(paidThisMonth)}</strong>
          <span class="crm-metric-note">Эти деньги уже попали в доходы</span>
        </article>
      </div>

      ${waitingSales.length > 0 || recentCrmActivity.length > 0 ? `
        <div class="crm-overview-grid crm-overview-grid-simple">
          ${waitingSales.length > 0 ? `
            <article class="card crm-table-card crm-focus-card">
              <div class="crm-table-head crm-focus-head">
                <div>
                  <h3>Ждут оплаты</h3>
                  <p class="muted">${overdueSalesCount > 0 ? `Есть просрочки: ${overdueSalesCount}. Остальные продажи можно закрыть по сроку.` : "Здесь только продажи, по которым ещё не пришла полная оплата."}</p>
                </div>
                <span class="crm-section-badge">К действию</span>
              </div>
              <div class="crm-waiting-list">
                ${waitingListMarkup}
              </div>
            </article>
          ` : ""}
          ${recentCrmActivity.length > 0 ? `
            <article class="card crm-table-card crm-focus-card">
              <div class="crm-table-head crm-focus-head">
                <div>
                  <h3>Последняя активность</h3>
                  <p class="muted">Здесь видно, что происходило недавно: продажи и оплаты в одном списке.</p>
                </div>
                <span class="crm-section-badge crm-section-badge-muted">История</span>
              </div>
              <div class="crm-activity-list">
                ${recentActivityMarkup}
              </div>
            </article>
          ` : ""}
        </div>
      ` : ""}
    </div>
  `;

  const saleModalMarkup = effectiveSalesPanel === "sale" ? `
    <div class="crm-modal-backdrop" data-crm-sale-backdrop>
      <article id="crmSaleModal" class="card crm-table-card crm-sale-modal" role="dialog" aria-modal="true" aria-labelledby="crmSaleModalTitle">
        <div class="income-card-head">
          <div>
            <h3 id="crmSaleModalTitle">${editingSale ? "Редактировать продажу" : "Добавить продажу"}</h3>
            <p class="muted crm-head-note">Продажа сама не влияет на налоги. В доходы попадают только оплаты.</p>
          </div>
          <div class="crm-form-head-actions">
            ${editingSale ? '<span class="income-edit-chip">режим редактирования</span>' : ""}
            <button type="button" class="btn btn-ghost btn-xs" data-action="crm-close-sale-form">Закрыть</button>
          </div>
        </div>
        <form id="crmSaleFormInner" class="stack-form">
          <input type="hidden" name="editId" value="${editingSale ? editingSale.id : ""}" />
          <div class="form-grid-2">
            <label>Клиент
              <select name="customerId">
                <option value="0">Без клиента</option>
                ${customerOptions}
              </select>
            </label>
            <label>Сумма сделки (₸)
              <input name="amount" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${editingSale ? formatPlainAmount(editingSale.amount) : ""}" required />
            </label>
          </div>
          <div class="form-grid-2">
            <label>Дата сделки
              <input name="date" type="date" value="${editingSale ? editingSale.date : new Date().toISOString().slice(0, 10)}" required />
            </label>
            <label>Название продажи
              <input name="title" type="text" value="${escapeHtml(editingSale ? editingSale.title : "")}" placeholder="Необязательно, можно оставить пустым" />
            </label>
          </div>
          <p class="crm-inline-note">Можно сохранить продажу без клиента, но с клиентом проще смотреть историю сделок и оплат.</p>
          <details class="crm-advanced-fields">
            <summary>Дополнительно</summary>
            <div class="crm-advanced-fields-grid">
              <label>Срок оплаты
                <input name="dueDate" type="date" value="${editingSale ? escapeHtml(editingSale.dueDate || "") : ""}" />
              </label>
              ${editingSale ? `
                <label>Статус сделки
                  <select name="status">
                    ${CRM_SALE_STATUSES.map((item) => `<option value="${item.id}" ${(editingSale ? normalizeCrmSaleStatus(editingSale.status) : "draft") === item.id ? "selected" : ""}>${escapeHtml(item.label)}</option>`).join("")}
                  </select>
                </label>
              ` : ""}
              <label class="crm-advanced-fields-full">Комментарий
                <input name="note" type="text" value="${escapeHtml(editingSale ? editingSale.note : "")}" placeholder="Например, продажа по договору" />
              </label>
            </div>
          </details>
          <div class="income-form-actions">
            <button type="submit" class="btn btn-primary">${editingSale ? "Сохранить продажу" : "Добавить продажу"}</button>
            ${editingSale ? '<button type="button" class="btn btn-ghost" data-cancel-crm-sale-edit>Отмена</button>' : '<button type="button" class="btn btn-ghost" data-action="crm-close-sale-form">Отмена</button>'}
          </div>
        </form>
      </article>
    </div>
  ` : "";

  const quickSaleModalMarkup = quickSaleCustomer && !editingSale && effectiveSalesPanel !== "sale" ? `
    <div class="crm-modal-backdrop" data-crm-quick-sale-backdrop>
      <article id="crmQuickSaleModal" class="card crm-table-card crm-quick-sale-modal" role="dialog" aria-modal="true" aria-labelledby="crmQuickSaleTitle">
        <div class="crm-table-head">
          <div>
            <h3 id="crmQuickSaleTitle">Быстрая продажа</h3>
            <p class="muted">Клиент уже выбран. Введите сумму и сохраните продажу.</p>
          </div>
          <button type="button" class="btn btn-ghost btn-xs" data-action="crm-close-quick-sale">Закрыть</button>
        </div>
        <form id="crmQuickSaleFormInner" class="stack-form">
          <input type="hidden" name="editId" value="" />
          <input type="hidden" name="customerId" value="${quickSaleCustomer.id}" />
          <div class="crm-quick-sale-customer">
            <span class="crm-quick-sale-label">Клиент</span>
            <strong>${escapeHtml(quickSaleCustomer.name)}</strong>
            <small>${escapeHtml(quickSaleCustomer.contact || "Контакт не указан")}</small>
          </div>
          <div class="form-grid-2">
            <label>Сумма продажи (₸)
              <input name="amount" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input required />
            </label>
            <label>Дата продажи
              <input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" required />
            </label>
          </div>
          <label>Название продажи
            <input name="title" type="text" value="" placeholder="Необязательно" />
          </label>
          <details class="crm-advanced-fields">
            <summary>Дополнительно</summary>
            <div class="crm-advanced-fields-grid">
              <label>Срок оплаты
                <input name="dueDate" type="date" value="" />
              </label>
              <label class="crm-advanced-fields-full">Комментарий
                <input name="note" type="text" value="" placeholder="Например, предоплата за заказ" />
              </label>
            </div>
          </details>
          <div class="income-form-actions">
            <button type="submit" class="btn btn-primary">Сохранить продажу</button>
            <button type="button" class="btn btn-ghost" data-action="crm-close-quick-sale">Отмена</button>
          </div>
        </form>
      </article>
    </div>
  ` : "";

  const paymentModalMarkup = effectiveSalesPanel === "payment" ? `
    <div class="crm-modal-backdrop" data-crm-payment-backdrop>
      <article id="crmPaymentForm" class="card crm-form-card crm-payment-modal" role="dialog" aria-modal="true" aria-labelledby="crmPaymentModalTitle">
        <div class="income-card-head">
          <div>
            <h3 id="crmPaymentModalTitle">${editingPayment ? "Редактировать оплату" : "Добавить оплату"}</h3>
            <p class="muted crm-head-note">Оплата сразу попадает в доходы и пересчитывает налоги.</p>
          </div>
          <div class="crm-form-head-actions">
            ${editingPayment ? '<span class="income-edit-chip">режим редактирования</span>' : ""}
            <button type="button" class="btn btn-ghost btn-xs" data-action="crm-close-payment-form">Закрыть</button>
          </div>
        </div>
        <form id="crmPaymentFormInner" class="stack-form">
          <input type="hidden" name="editId" value="${editingPayment ? editingPayment.id : ""}" />
          <label>Продажа
            <select name="saleId" ${hasPaymentTargetSales ? "" : "disabled"}>
              <option value="0">${hasPaymentTargetSales ? "Выберите продажу" : "Сначала добавьте продажу"}</option>
              ${activeSaleOptions}
            </select>
          </label>
          <div class="form-grid-2">
            <label>Сумма оплаты (₸)
              <input name="amount" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" data-amount-input value="${editingPayment ? formatPlainAmount(editingPayment.amount) : ""}" ${hasPaymentTargetSales ? "" : "disabled"} required />
            </label>
            <label>Дата оплаты
              <input name="date" type="date" value="${editingPayment ? editingPayment.date : new Date().toISOString().slice(0, 10)}" ${hasPaymentTargetSales ? "" : "disabled"} required />
            </label>
          </div>
          <label>Комментарий
            <input name="note" type="text" value="${escapeHtml(editingPayment ? editingPayment.note : "")}" placeholder="Например, аванс или доплата" ${hasPaymentTargetSales ? "" : "disabled"} />
          </label>
          <p class="crm-inline-note">${hasPaymentTargetSales ? "Если по одной продаже деньги пришли частями, добавляйте каждую оплату отдельно." : "Сначала добавьте хотя бы одну продажу. После этого здесь можно будет фиксировать оплаты."}</p>
          <div class="income-form-actions">
            <button type="submit" class="btn btn-primary" ${hasPaymentTargetSales ? "" : "disabled"}>${editingPayment ? "Сохранить оплату" : hasPaymentTargetSales ? "Добавить оплату" : "Сначала добавьте продажу"}</button>
            ${editingPayment ? '<button type="button" class="btn btn-ghost" data-cancel-crm-payment-edit>Отмена</button>' : '<button type="button" class="btn btn-ghost" data-action="crm-close-payment-form">Отмена</button>'}
          </div>
        </form>
      </article>
    </div>
  ` : "";

  const crmSalesMarkup = `
    <div class="crm-section-stack">
      <article class="card crm-workspace-card">
        <div class="crm-workspace-head">
          <div>
            <h3>Продажи и оплаты</h3>
            <p class="muted">Продажа показывает, сколько вам должны. Оплата фиксирует поступившие деньги и отправляет их в доходы.</p>
          </div>
          <div class="crm-toolbar">
            <button type="button" class="btn btn-primary btn-sm crm-toolbar-btn" data-action="crm-open-sale-form">
              <i data-lucide="plus" class="crm-action-icon" aria-hidden="true"></i>
              <span>Добавить продажу</span>
            </button>
            <button type="button" class="btn btn-ghost btn-sm crm-toolbar-btn" data-action="crm-open-payment-form">
              <i data-lucide="wallet" class="crm-action-icon" aria-hidden="true"></i>
              <span>Добавить оплату</span>
            </button>
          </div>
        </div>
      </article>

      <div class="crm-sales-summary-grid">
        <article class="crm-sales-summary-item">
          <span class="crm-sales-summary-icon">
            <i data-lucide="briefcase" class="crm-sales-summary-icon-svg" aria-hidden="true"></i>
          </span>
          <div>
            <span>Активных продаж</span>
            <strong>${activeSales.length}</strong>
            <small>${fmt(salesTotalAmount)}</small>
          </div>
        </article>
        <article class="crm-sales-summary-item crm-sales-summary-item-warning">
          <span class="crm-sales-summary-icon">
            <i data-lucide="clock" class="crm-sales-summary-icon-svg" aria-hidden="true"></i>
          </span>
          <div>
            <span>Ждут оплаты</span>
            <strong>${waitingSales.length}</strong>
            <small>${fmt(waitingAmount)}</small>
          </div>
        </article>
        <article class="crm-sales-summary-item crm-sales-summary-item-success">
          <span class="crm-sales-summary-icon">
            <i data-lucide="credit-card" class="crm-sales-summary-icon-svg" aria-hidden="true"></i>
          </span>
          <div>
            <span>Оплачено за месяц</span>
            <strong>${fmt(paidThisMonth)}</strong>
            <small>${paymentsThisMonth.length} ${pluralizeRu(paymentsThisMonth.length, "оплата", "оплаты", "оплат")}</small>
          </div>
        </article>
      </div>

      <article class="card crm-table-card crm-table-card-primary">
        <div class="crm-table-head crm-focus-head">
          <div>
            <h3>Все продажи</h3>
            <p class="muted">Сумма сделки, оплачено и остаток по каждой продаже.</p>
          </div>
          <span class="crm-section-badge crm-section-badge-muted">${filteredSales.length} из ${sales.length}</span>
        </div>
        <form id="crmFilterForm" class="crm-filter-bar" onsubmit="return false;">
          <label class="crm-filter-field crm-filter-search">
            <span class="crm-filter-label">Поиск</span>
            <span class="crm-filter-input-wrap">
              <i data-lucide="search" class="crm-filter-icon" aria-hidden="true"></i>
              <input name="query" type="text" value="${escapeHtml(crmFilters.query)}" placeholder="По клиенту или продаже" aria-label="Поиск по клиенту или продаже" />
            </span>
          </label>
          <label class="crm-filter-field crm-filter-select">
            <span class="crm-filter-label">Статус</span>
            <span class="crm-filter-select-wrap">
              <select name="status" aria-label="Фильтр по статусу продаж">
                <option value="all" ${crmStatus === "all" ? "selected" : ""}>Все продажи</option>
                <option value="waiting" ${crmStatus === "waiting" ? "selected" : ""}>Ждут оплату</option>
                <option value="overdue" ${crmStatus === "overdue" ? "selected" : ""}>Просрочено</option>
                <option value="partial" ${crmStatus === "partial" ? "selected" : ""}>Частично оплачено</option>
                <option value="paid" ${crmStatus === "paid" ? "selected" : ""}>Оплачено</option>
                <option value="draft" ${crmStatus === "draft" ? "selected" : ""}>Новая</option>
                <option value="sent" ${crmStatus === "sent" ? "selected" : ""}>Выставлено</option>
                <option value="cancelled" ${crmStatus === "cancelled" ? "selected" : ""}>Отменено</option>
              </select>
            </span>
          </label>
          <button type="button" class="btn btn-ghost btn-xs crm-filter-reset" data-action="crm-clear-filters">Сбросить</button>
        </form>
        <div class="table-wrap crm-table-wrap">
          <table class="table crm-table">
            <thead>
              <tr>
                <th>Продажа</th>
                <th>Статус оплаты</th>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Оплачено</th>
                <th>Остаток</th>
                <th>Поступления</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>${salesRows}</tbody>
          </table>
        </div>
      </article>

      <article class="card crm-table-card crm-table-card-secondary">
        <div class="crm-table-head crm-focus-head">
          <div>
            <h3>Оплаты</h3>
            <p class="muted">Каждая оплата — отдельное поступление денег и отдельная запись в «Доходах».</p>
          </div>
          <div class="crm-table-head-actions">
            <span class="crm-section-badge crm-section-badge-muted">${filteredPayments.length}</span>
            <button type="button" class="btn btn-ghost btn-xs" data-action="crm-open-income">Посмотреть в доходах</button>
          </div>
        </div>
        <div class="table-wrap crm-table-wrap">
          <table class="table crm-table">
            <thead>
              <tr>
                <th>Клиент / продажа</th>
                <th>Дата</th>
                <th>Сумма</th>
                <th>В доходах</th>
                <th></th>
              </tr>
            </thead>
            <tbody>${paymentRows}</tbody>
          </table>
        </div>
      </article>
    </div>
  `;

  const customerFormModalMarkup = isCustomerFormOpen ? `
    <div class="crm-modal-backdrop" data-crm-customer-form-backdrop>
      <article id="crmCustomerForm" class="card crm-form-card crm-customer-form-modal" role="dialog" aria-modal="true" aria-labelledby="crmCustomerModalTitle">
        <div class="income-card-head">
          <div>
            <h3 id="crmCustomerModalTitle">${editingCustomer ? "Редактировать клиента" : "Добавить клиента"}</h3>
            <p class="muted crm-head-note">Сохраните имя и контакт. Потом клиента можно быстро выбрать при продаже.</p>
          </div>
          <div class="crm-form-head-actions">
            ${editingCustomer ? '<span class="income-edit-chip">режим редактирования</span>' : ""}
            <button type="button" class="btn btn-ghost btn-xs" data-action="crm-close-customer-form">Закрыть</button>
          </div>
        </div>
        <form id="crmCustomerFormInner" class="stack-form crm-customer-form">
          <input type="hidden" name="editId" value="${editingCustomer ? editingCustomer.id : ""}" />
          <div class="form-grid-2">
            <label>Имя клиента
              <input name="name" type="text" value="${escapeHtml(editingCustomer ? editingCustomer.name : "")}" placeholder="Например, ТОО Асыл" required />
            </label>
            <label>Телефон / WhatsApp
              <input name="contact" type="tel" inputmode="tel" autocomplete="tel" maxlength="16" value="${escapeHtml(editingCustomer ? editingCustomer.contact : "")}" placeholder="+7 777 123 45 67" data-kz-phone-input />
            </label>
          </div>
          <label>Комментарий
            <input name="note" type="text" value="${escapeHtml(editingCustomer ? editingCustomer.note : "")}" placeholder="Например, постоянный клиент" />
          </label>
          <div class="income-form-actions">
            <button type="submit" class="btn btn-primary">${editingCustomer ? "Сохранить клиента" : "Добавить клиента"}</button>
            ${editingCustomer ? '<button type="button" class="btn btn-ghost" data-cancel-crm-customer-edit>Отмена</button>' : '<button type="button" class="btn btn-ghost" data-action="crm-close-customer-form">Отмена</button>'}
          </div>
        </form>
      </article>
    </div>
  ` : "";

  const crmClientsMarkup = `
    <div class="crm-section-stack">
      <article class="card crm-workspace-card">
        <div class="crm-workspace-head">
          <div>
            <h3>Клиенты</h3>
            <p class="muted">Это база клиентов: имя, контакт и история продаж. Отсюда удобно начинать новую сделку.</p>
          </div>
          <div class="crm-toolbar">
            <button type="button" class="btn btn-primary btn-sm crm-toolbar-btn" data-action="crm-open-customer-form">
              <i data-lucide="user-plus" class="crm-action-icon" aria-hidden="true"></i>
              <span>Добавить клиента</span>
            </button>
          </div>
        </div>
      </article>

      <div class="crm-sales-summary-grid">
        <article class="crm-sales-summary-item">
          <span class="crm-sales-summary-icon">
            <i data-lucide="users" class="crm-sales-summary-icon-svg" aria-hidden="true"></i>
          </span>
          <div>
            <span>Клиентов в базе</span>
            <strong>${customers.length}</strong>
            <small>${filteredCustomers.length === customers.length ? "Показываем всех" : `в списке ${filteredCustomers.length}`}</small>
          </div>
        </article>
        <article class="crm-sales-summary-item crm-sales-summary-item-warning">
          <span class="crm-sales-summary-icon">
            <i data-lucide="briefcase" class="crm-sales-summary-icon-svg" aria-hidden="true"></i>
          </span>
          <div>
            <span>Уже с продажами</span>
            <strong>${customersWithSalesCount}</strong>
            <small>без продаж ${customersWithoutSalesCount}</small>
          </div>
        </article>
        <article class="crm-sales-summary-item crm-sales-summary-item-success">
          <span class="crm-sales-summary-icon">
            <i data-lucide="credit-card" class="crm-sales-summary-icon-svg" aria-hidden="true"></i>
          </span>
          <div>
            <span>Оплачено клиентами</span>
            <strong>${fmt(totalCustomerPaid)}</strong>
            <small>${payments.length} ${pluralizeRu(payments.length, "оплата", "оплаты", "оплат")}</small>
          </div>
        </article>
      </div>

      <article class="card crm-table-card crm-table-card-secondary">
        <div class="crm-table-head crm-focus-head">
          <div>
            <h3>Клиенты</h3>
            <p class="muted">Откройте карточку клиента, чтобы посмотреть его продажи и остаток к оплате.</p>
          </div>
          <span class="crm-section-badge crm-section-badge-muted">${filteredCustomers.length}</span>
        </div>
        <div class="table-wrap crm-table-wrap">
          <table class="table crm-table">
            <thead>
              <tr>
                <th>Клиент</th>
                <th>Продажи</th>
                <th>Оплачено</th>
                <th></th>
              </tr>
            </thead>
            <tbody>${customerRows}</tbody>
          </table>
        </div>
      </article>
    </div>
  `;

  const crmBodyMarkup = crmTab === "sales"
    ? crmSalesMarkup
    : crmTab === "clients"
      ? crmClientsMarkup
      : crmOverviewMarkup;

  els.pageContent.innerHTML = `
    <section class="crm-page crm-user-page">
      <div class="crm-nav-row crm-tabs" role="navigation" aria-label="Разделы CRM">
        ${crmNavButtonsMarkup}
      </div>

      ${crmBodyMarkup}
      ${saleModalMarkup}
      ${quickSaleModalMarkup}
      ${paymentModalMarkup}
      ${customerFormModalMarkup}
      ${customerCardMarkup}
    </section>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
  const crmPrimaryInput = els.pageContent.querySelector('#crmSaleFormInner [name="amount"], #crmQuickSaleFormInner [name="amount"], #crmPaymentFormInner [name="amount"], #crmCustomerFormInner [name="name"]');
  if (crmPrimaryInput instanceof HTMLInputElement) {
    window.requestAnimationFrame(() => {
      crmPrimaryInput.focus();
      crmPrimaryInput.select();
    });
  }
  els.pageContent.querySelectorAll("[data-crm-tab]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCrmTab(btn.dataset.crmTab || "overview");
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-open-sale-form"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCrmSalesPanel("sale");
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-open-payment-form"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCrmSalesPanel("payment");
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-open-customer-form"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCrmCustomerFormOpen(true);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-prefill-sale"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      prefillCrmSale(btn.dataset.customerId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-close-quick-sale"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeCrmQuickSale();
    });
  });
  const quickSaleBackdrop = els.pageContent.querySelector("[data-crm-quick-sale-backdrop]");
  if (quickSaleBackdrop instanceof HTMLElement) {
    quickSaleBackdrop.addEventListener("click", (event) => {
      if (event.target !== quickSaleBackdrop) {
        return;
      }
      closeCrmQuickSale();
    });
  }
  els.pageContent.querySelectorAll(".crm-quick-sale-modal").forEach((panel) => {
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-close-sale-form"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeCrmSaleComposer();
    });
  });
  const saleBackdrop = els.pageContent.querySelector("[data-crm-sale-backdrop]");
  if (saleBackdrop instanceof HTMLElement) {
    saleBackdrop.addEventListener("click", (event) => {
      if (event.target !== saleBackdrop) {
        return;
      }
      closeCrmSaleComposer();
    });
  }
  els.pageContent.querySelectorAll(".crm-sale-modal").forEach((panel) => {
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  const paymentBackdrop = els.pageContent.querySelector("[data-crm-payment-backdrop]");
  if (paymentBackdrop instanceof HTMLElement) {
    paymentBackdrop.addEventListener("click", (event) => {
      if (event.target !== paymentBackdrop) {
        return;
      }
      closeCrmPaymentComposer();
    });
  }
  els.pageContent.querySelectorAll(".crm-payment-modal").forEach((panel) => {
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  const customerFormBackdrop = els.pageContent.querySelector("[data-crm-customer-form-backdrop]");
  if (customerFormBackdrop instanceof HTMLElement) {
    customerFormBackdrop.addEventListener("click", (event) => {
      if (event.target !== customerFormBackdrop) {
        return;
      }
      closeCrmCustomerComposer();
    });
  }
  els.pageContent.querySelectorAll(".crm-customer-form-modal").forEach((panel) => {
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-close-payment-form"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeCrmPaymentComposer();
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-close-customer-form"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeCrmCustomerComposer();
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-open-customer"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openCrmCustomerCard(btn.dataset.customerId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-edit-customer"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startCrmCustomerEdit(btn.dataset.customerId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-delete-customer"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      deleteCrmCustomer(btn.dataset.customerId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-edit-sale"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startCrmSaleEdit(btn.dataset.saleId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-delete-sale"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      deleteCrmSale(btn.dataset.saleId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-edit-payment"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startCrmPaymentEdit(btn.dataset.paymentId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-prefill-payment"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      prefillCrmPayment(btn.dataset.saleId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-delete-payment"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      deleteCrmPayment(btn.dataset.paymentId);
    });
  });
  els.pageContent.querySelectorAll('[data-action="crm-open-income"]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openCrmIncomeJournal();
    });
  });
  els.pageContent.querySelectorAll('[data-close-crm-customer-card]').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      state.crmSelectedCustomerId = null;
      saveState();
      renderDashboard();
    });
  });
  els.pageContent.querySelectorAll('[data-crm-customer-backdrop]').forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target !== backdrop) {
        return;
      }
      state.crmSelectedCustomerId = null;
      saveState();
      renderDashboard();
    });
  });
  els.pageContent.querySelectorAll(".crm-customer-modal").forEach((panel) => {
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  setupKazakhstanPhoneInputs(els.pageContent);
  applyPendingCrmScroll();
}

function getKazakhstanPhoneEditableDigitsCount(value, fullValue = value) {
  const digitsBeforeCaret = String(value || "").replace(/\D/g, "");
  const compactFullValue = String(fullValue || "").replace(/\s+/g, "");
  const fullDigits = String(fullValue || "").replace(/\D/g, "");
  if (!digitsBeforeCaret) {
    return 0;
  }

  if (compactFullValue.startsWith("+7")) {
    return Math.max(0, Math.min(10, digitsBeforeCaret.length - 1));
  }

  if (fullDigits.startsWith("8")) {
    return Math.max(0, Math.min(10, digitsBeforeCaret.length - 1));
  }

  if (fullDigits.length > 10 && fullDigits.startsWith("7")) {
    return Math.max(0, Math.min(10, digitsBeforeCaret.length - 1));
  }

  return Math.min(10, digitsBeforeCaret.length);
}

function getKazakhstanPhoneCaretPosition(formattedValue, nationalDigitsCount) {
  const formatted = String(formattedValue || "");
  if (!formatted) {
    return 0;
  }

  if (nationalDigitsCount <= 0) {
    return formatted.length;
  }

  let seenNationalDigits = 0;
  for (let index = 0; index < formatted.length; index += 1) {
    const char = formatted[index];
    const isCountryDigit = formatted.startsWith("+7") && index === 1;
    if (!/\d/.test(char) || isCountryDigit) {
      continue;
    }
    seenNationalDigits += 1;
    if (seenNationalDigits >= nationalDigitsCount) {
      return index + 1;
    }
  }

  return formatted.length;
}

function syncKazakhstanPhoneInputValue(input) {
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const rawValue = String(input.value || "");
  const selectionStart = Number.isFinite(input.selectionStart) ? input.selectionStart : rawValue.length;
  const nationalDigitsBeforeCaret = getKazakhstanPhoneEditableDigitsCount(rawValue.slice(0, selectionStart), rawValue);
  const formattedValue = formatKazakhstanPhone(rawValue);
  input.value = formattedValue === "+7" ? "+7" : formattedValue;

  if (document.activeElement === input && typeof input.setSelectionRange === "function") {
    const caretPosition = getKazakhstanPhoneCaretPosition(input.value, nationalDigitsBeforeCaret);
    input.setSelectionRange(caretPosition, caretPosition);
  }
}

function setupKazakhstanPhoneInputs(root = document) {
  if (!root || typeof root.querySelectorAll !== "function") {
    return;
  }

  root.querySelectorAll("[data-kz-phone-input]").forEach((input) => {
    if (!(input instanceof HTMLInputElement) || input.dataset.kzPhoneBound === "true") {
      return;
    }

    input.dataset.kzPhoneBound = "true";
    const initialValue = formatKazakhstanPhone(input.value);
    input.value = initialValue === "+7" ? "" : initialValue;
    input.addEventListener("input", () => {
      syncKazakhstanPhoneInputValue(input);
    });
    input.addEventListener("blur", () => {
      const formattedValue = formatKazakhstanPhone(input.value);
      input.value = formattedValue === "+7" ? "" : formattedValue;
    });
  });
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
  if (normalized.includes("it") || normalized.includes("айти") || normalized.includes("дизайн") || normalized.includes("обуч") || normalized.includes("репет") || normalized.includes("красот") || normalized.includes("салон") || normalized.includes("бьюти") || normalized.includes("здоров")) return "IT / дизайн / обучение / бьюти";
  if (normalized.includes("рознич") || normalized.includes("услуг")) return "Розница / услуги населению";
  if (normalized.includes("оптов")) return "Опт / коммерческая аренда / медицина";
  if (normalized.includes("аренда жилья") || (normalized.includes("аренд") && normalized.includes("жил"))) return "Аренда жилья";
  if (normalized.includes("аренд") && normalized.includes("коммер")) return "Опт / коммерческая аренда / медицина";
  if (normalized.includes("аренд")) return "Другое / нужно проверить";
  if (normalized.includes("транспорт") || normalized.includes("перевоз") || normalized.includes("каф") || normalized.includes("еда") || normalized.includes("достав")) return "Доставка / транспорт / общепит";
  if (normalized.includes("мед")) return "Опт / коммерческая аренда / медицина";
  if (normalized.includes("консалт") || normalized.includes("маркет") || normalized.includes("бух") || normalized.includes("аудит") || normalized.includes("финанс") || normalized.includes("страх") || normalized.includes("ломб")) return "Консалтинг / бухучёт / финансы";
  if (normalized.includes("майнинг") || normalized.includes("недроп") || normalized.includes("подакц") || normalized.includes("нефт") || normalized.includes("металл") || normalized.includes("лом") || normalized.includes("строит") || normalized.includes("ремонт") || normalized.includes("рын")) return "Строительство / подакцизка / майнинг / рынок";
  if (normalized.includes("сель")) return "Другое / нужно проверить";

  return "Другое / нужно проверить";
}

function updateSettingsIpnVisibility(regime = state.regime) {
  const ipnField = document.querySelector(".ipn-910-setting");
  if (!(ipnField instanceof HTMLElement)) {
    return;
  }

  ipnField.style.display = regime === "our" || regime === "self" ? "none" : "";
}

function getSettingsFormValues(form) {
  if (!(form instanceof HTMLFormElement)) {
    return {
      regime: ["self", "simplified", "our"].includes(state.regime) ? state.regime : "simplified",
      name: String(state.profile.name || "").trim(),
      iin: String(state.profile.iin || "").trim(),
      city: String(state.profile.city || "").trim(),
      activity: normalizeSettingsActivity(state.profile.activity),
      selfActivity: normalizeSelfActivityChoice(state.profile.selfActivity),
      hasEmployees: normalizeHasEmployeesPreference(state.profile.hasEmployees),
      simplifiedRateMode: normalizeSimplifiedRateMode(state.profile.simplifiedRateMode),
      simplifiedRate: normalizeProfileSimplifiedRate(state.profile.simplifiedRate),
      selfSocialIncomeBase: getProfileSelfSocialIncomeBase(state.profile)
    };
  }

  const fd = new FormData(form);
  const iinInput = form.querySelector('#settingsIinInput');
  const hasEmployeesField = form.querySelector('[name="hasEmployees"]');
  const activityField = form.querySelector('[name="activity"]');
  const selfActivityField = form.querySelector('[name="selfActivity"]');
  const simplifiedRateField = form.querySelector('[name="simplifiedRate"]');
  const rawRegimeValue = String(fd.get("regime") || state.regime || "simplified").trim();
  const nextRegime = ["self", "simplified", "our"].includes(rawRegimeValue) ? rawRegimeValue : (["self", "simplified", "our"].includes(state.regime) ? state.regime : "simplified");
  const rawSimplifiedRateValue = simplifiedRateField ? String(fd.get("simplifiedRate") || "") : "";
  const simplifiedRateMode = rawSimplifiedRateValue === "auto" ? "auto" : "manual";
  let iin = String(fd.get("iin") || "").trim();

  if (iinInput instanceof HTMLInputElement) {
    const full = String(iinInput.dataset.full || "").trim();
    const revealed = iinInput.dataset.revealed === "true";
    iin = revealed ? String(iinInput.value || "").trim() : (full || iin);
  }

  return {
    regime: nextRegime,
    name: String(fd.get("name") || "").trim(),
    iin,
    city: String(fd.get("city") || "").trim(),
    activity: activityField
      ? normalizeSettingsActivity(fd.get("activity"))
      : normalizeSettingsActivity(state.profile.activity),
    hasEmployees: hasEmployeesField
      ? normalizeHasEmployeesPreference(fd.get("hasEmployees"))
      : normalizeHasEmployeesPreference(state.profile.hasEmployees),
    selfActivity: selfActivityField
      ? normalizeSelfActivityChoice(fd.get("selfActivity"))
      : normalizeSelfActivityChoice(state.profile.selfActivity),
    simplifiedRateMode,
    simplifiedRate: simplifiedRateField
      ? (simplifiedRateMode === "manual" ? normalizeProfileSimplifiedRate(rawSimplifiedRateValue) : "")
      : normalizeProfileSimplifiedRate(state.profile.simplifiedRate),
    selfSocialIncomeBase: ""
  };
}

function hasSettingsRegimeChange(nextValues) {
  const nextRegime = String(nextValues.regime || state.regime || "simplified").trim();
  const currentRegime = String(state.regime || "simplified").trim();
  return nextRegime !== currentRegime;
}

function hasSettingsProfileChanges(nextValues) {
  return (
    String(nextValues.name || "") !== String(state.profile.name || "") ||
    String(nextValues.iin || "") !== String(state.profile.iin || "") ||
    String(nextValues.city || "") !== String(state.profile.city || "") ||
    String(nextValues.activity || "") !== normalizeSettingsActivity(state.profile.activity) ||
    normalizeSelfActivityChoice(nextValues.selfActivity) !== normalizeSelfActivityChoice(state.profile.selfActivity) ||
    normalizeHasEmployeesPreference(nextValues.hasEmployees) !== normalizeHasEmployeesPreference(state.profile.hasEmployees) ||
    normalizeSimplifiedRateMode(nextValues.simplifiedRateMode) !== normalizeSimplifiedRateMode(state.profile.simplifiedRateMode) ||
    normalizeProfileSimplifiedRate(nextValues.simplifiedRate) !== normalizeProfileSimplifiedRate(state.profile.simplifiedRate) ||
    normalizeProfileSelfSocialIncomeBase(nextValues.selfSocialIncomeBase) !== normalizeProfileSelfSocialIncomeBase(state.profile.selfSocialIncomeBase)
  );
}

function updateSettingsSaveButtonState(form) {
  if (!(form instanceof HTMLFormElement)) return;

  const saveBtn = form.querySelector('[data-action="save-settings"]');
  if (!(saveBtn instanceof HTMLButtonElement)) return;

  const nextValues = getSettingsFormValues(form);
  const changed = hasSettingsProfileChanges(nextValues) || hasSettingsRegimeChange(nextValues);
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

  const proActive = isProActive();
  const proDaysLeft = proActive ? getProDaysLeft(state.subscription) : 0;
  const trialActive = isTrialActive();
  const planLabel = proActive ? `Pro (${proDaysLeft} дн.)` : trialActive ? "Базовый" : "Базовый";
  const planTone = proActive ? "active" : "trial";
  const planHint = proActive
    ? `Pro активен. До окончания пробного периода ${proDaysLeft} ${getLandingDayWord(proDaysLeft)}.`
    : "Базовый тариф: расчет и учет. Pro: напоминания, расширенная аналитика и экспорт.";
  const maskedIin = maskSettingsIin(state.profile.iin);
  const settingsCityValue = String(state.profile.city || "").trim();
  const isSelfRegime = state.regime === "self";
  const profileRateMode = normalizeSimplifiedRateMode(state.profile.simplifiedRateMode);
  const profileRateOverride = normalizeProfileSimplifiedRate(state.profile.simplifiedRate);
  const simplifiedRateMeta = getSimplifiedIpnRateMeta(state.profile);
  const activeSimplifiedRate = simplifiedRateMeta.rate;
  const simplifiedRateSource = simplifiedRateMeta.source;
  const cityAutoRateOptionLabel = simplifiedRateMeta.cityMatched
    ? `Авто — ${formatRatePercent(simplifiedRateMeta.rate)} для ${escapeHtml(settingsCityValue)}`
    : "Авто — 4% (уточните ставку)";
  const settingsSimplifiedRateOptions = [
    `<option value="auto" ${profileRateMode === "auto" ? "selected" : ""}>${cityAutoRateOptionLabel}</option>`,
    `<option value="0.02" ${profileRateMode === "manual" && profileRateOverride === 0.02 ? "selected" : ""}>2% (пониженная)</option>`,
    `<option value="0.03" ${profileRateMode === "manual" && profileRateOverride === 0.03 ? "selected" : ""}>3% (пониженная)</option>`,
    `<option value="0.04" ${profileRateMode === "manual" && profileRateOverride === 0.04 ? "selected" : ""}>4% (стандарт)</option>`,
    `<option value="0.05" ${profileRateMode === "manual" && profileRateOverride === 0.05 ? "selected" : ""}>5%</option>`,
    `<option value="0.06" ${profileRateMode === "manual" && profileRateOverride === 0.06 ? "selected" : ""}>6%</option>`
  ].join("");
  const settingsRegimeOptions = [
    `<option value="simplified" ${state.regime === "simplified" ? "selected" : ""}>Упрощенка (910)</option>`,
    `<option value="self" ${state.regime === "self" ? "selected" : ""}>Самозанятый</option>`,
    `<option value="our" ${state.regime === "our" ? "selected" : ""}>ОУР (скоро)</option>`
  ].join("");
  const normalizedSelfActivity = normalizeSelfActivityChoice(state.profile.selfActivity);
  const profileSelfActivityStatus = getProfileSelfActivityStatus(normalizedSelfActivity);
  const selfActivityOptions = [
    `<option value="" ${normalizedSelfActivity ? "" : "selected"}>Не выбрано</option>`,
    ...LANDING_SELF_ACTIVITY_OPTIONS.map(
      (option) => `<option value="${option.id}" ${normalizedSelfActivity === option.id ? "selected" : ""}>${escapeHtml(option.label)}</option>`
    )
  ].join("");
  const selfActivityHint = profileSelfActivityStatus.code === "allowed"
    ? "По выбранному направлению Самозанятый выглядит допустимым вариантом."
    : profileSelfActivityStatus.code === "blocked_activity"
      ? "По этому направлению Самозанятый не подходит. Лучше ориентироваться на Упрощёнку (910)."
      : profileSelfActivityStatus.code === "needs_check"
        ? "Для этого направления откройте полный перечень 40 ОКЭД и проверьте, подходит ли Самозанятый."
        : "Нужно только для режима Самозанятый. Так сервис сможет честно подсказать, подходит ли вам этот режим.";
  const selfActivityHintTone = profileSelfActivityStatus.code === "allowed"
    ? "is-success"
    : profileSelfActivityStatus.code === "blocked_activity"
      ? "is-warning"
      : "";
  const settingsRatesTitle = isSelfRegime ? "Ставки самозанятого" : "Ставки 2026";
  const settingsRatesRowsHtml = isSelfRegime
    ? `
        <tr><td>МРП</td><td>${fmt(RATES.MRP)}</td></tr>
        <tr><td>ОПВ</td><td>1%</td></tr>
        <tr><td>ОПВР</td><td>1%</td></tr>
        <tr><td>СО</td><td>1%</td></tr>
        <tr><td>ВОСМС</td><td>1%</td></tr>
        <tr><td>Лимит самозанятого</td><td>${fmt(SELF_LIMIT_MONTHLY)}/мес · ${fmt(SELF_LIMIT_ANNUAL)}/год</td></tr>
      `
    : `
        <tr><td>МРП</td><td>${fmt(RATES.MRP)}</td></tr>
        <tr><td>МЗП</td><td>${fmt(RATES.MZP)}</td></tr>
        <tr><td>ОПВ</td><td>10%</td></tr>
        <tr><td>ОПВР</td><td>3,5%</td></tr>
        <tr><td>СО (упрощёнка 910)</td><td>5%</td></tr>
        <tr><td>ИПН (упрощёнка 910)</td><td>${formatRatePercent(activeSimplifiedRate)} · ${simplifiedRateSource}</td></tr>
        <tr><td>ВОСМС</td><td>${fmt(RATES.VOSMS)}/мес</td></tr>
        <tr><td>Лимит упрощёнки</td><td>${fmt(SIMPLIFIED_LIMIT_ANNUAL)}/год</td></tr>
        <tr><td>Лимит самозанятого</td><td>${fmt(SELF_LIMIT_MONTHLY)}/мес · ${fmt(SELF_LIMIT_ANNUAL)}/год</td></tr>
      `;

  const featureRows = Object.entries(PRO_FEATURES)
    .map(([key, label]) => {
      const enabled = canUseFeature(key);
      const icon = PRO_FEATURE_ICONS[key] || "sparkles";
      return `
        <li
          class="feature-row ${proActive ? "is-pro-active" : ""}"
          data-action="open-feature-info"
          data-feature-key="${key}"
          role="button"
          tabindex="0"
          title="Нажмите, чтобы узнать подробнее"
        >
          <span class="feature-label">
            <i class="feature-icon" data-lucide="${icon}" aria-hidden="true"></i>
            <span>${label}</span>
          </span>
          <b class="feature-state ${enabled ? "enabled" : "locked"}">${enabled ? "Доступно" : "Недоступно"}</b>
        </li>
      `;
    })
    .join("");

  els.pageContent.innerHTML = `
    <div class="grid grid-2">
      <article class="card">
        <h3>${isSelfRegime ? "Профиль самозанятого" : "Профиль ИП"}</h3>
        <form id="settingsForm" class="stack-form">
          <div class="settings-regime-setting">
            <label>Налоговый режим
              <select name="regime">
                ${settingsRegimeOptions}
              </select>
            </label>
            <div class="settings-hint">
              <i data-lucide="info" style="width:13px;height:13px;color:#F59E0B;flex-shrink:0;margin-top:1px" aria-hidden="true"></i>
              <span>Меняйте режим только если действительно переходите на другой сценарий работы. После сохранения сервис пересчитает налоги, сроки, подсказки и обновит доступные поля ниже.</span>
            </div>
          </div>
          <label>${isSelfRegime ? "Имя" : "ФИО / Наименование"}<input name="name" type="text" value="${escapeHtml(state.profile.name)}" placeholder="${isSelfRegime ? "Введите ваше имя" : "Введите ваше имя или название ИП"}" /></label>
          <label>${isSelfRegime ? "ИИН" : "БИН/ИИН"}
            <input id="settingsIinInput" name="iin" type="text" value="${escapeHtml(maskedIin)}" data-full="${escapeHtml(state.profile.iin)}" data-masked="${escapeHtml(maskedIin)}" data-revealed="false" autocomplete="off" placeholder="${isSelfRegime ? "Введите ИИН" : "Введите БИН/ИИН"}" />
          </label>
          <label>Город / район
            <div class="settings-city-field" data-settings-city-shell>
              <input id="settingsCityInput" name="city" type="text" value="${escapeHtml(settingsCityValue)}" placeholder="Например: Алматы или Нуринский район" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-controls="settingsCitySuggestions" />
              <div id="settingsCitySuggestions" class="settings-city-suggestions" role="listbox" aria-label="Подсказки по городу или району" hidden></div>
            </div>
          </label>
          <div class="settings-self-activity-setting" ${isSelfRegime ? "" : 'style="display:none"'}>
            <label>Направление для Самозанятого
              <select name="selfActivity">
                ${selfActivityOptions}
              </select>
            </label>
            <div class="settings-hint ${selfActivityHintTone}">
              <i data-lucide="info" style="width:13px;height:13px;color:#F59E0B;flex-shrink:0;margin-top:1px" aria-hidden="true"></i>
              <span>${escapeHtml(selfActivityHint)} <a href="${LANDING_SELF_ACTIVITY_SOURCE_URL}" target="_blank" rel="noopener noreferrer">Полный перечень 40 ОКЭД</a></span>
            </div>
          </div>
          <div class="ipn-910-setting" ${(state.regime === "our" || isSelfRegime) ? 'style="display:none"' : ""}>
            <label>Ставка ИПН 910
              <select name="simplifiedRate">
                ${settingsSimplifiedRateOptions}
              </select>
            </label>
            <div class="settings-hint">
              <i data-lucide="info" style="width:13px;height:13px;color:#F59E0B;flex-shrink:0;margin-top:1px" aria-hidden="true"></i>
              <span>${profileRateMode === "manual" && profileRateOverride !== ""
                ? `Сейчас используется ручная ставка ${formatRatePercent(activeSimplifiedRate)}. Если убрать ручную настройку, сервис попробует взять ставку по городу или району из справочника.`
                : simplifiedRateMeta.cityMatched
                  ? `Сейчас авто применяет ${formatRatePercent(activeSimplifiedRate)} для ${escapeHtml(settingsCityValue)} по нашему справочнику. После смены города или района всё равно перепроверьте ставку в e-Salyq Business.`
                  : "Если ставка в вашем городе или районе отличается от 4%, выберите её вручную или проверьте в e-Salyq Business."}</span>
            </div>
          </div>
          <div class="settings-form-actions">
            <button type="submit" class="btn btn-primary" data-action="save-settings" disabled>Сохранить</button>
          </div>
        </form>
      </article>

      <article class="card">
        <h3>${settingsRatesTitle}</h3>
        <table class="table">
          <tbody>
            ${settingsRatesRowsHtml}
          </tbody>
        </table>
      </article>
    </div>

    <article class="card mt-16 subscription-card">
      <div class="subscription-head">
        <h3>Тариф и подписка</h3>
        <span class="subscription-badge ${planTone}">${planLabel}</span>
      </div>
      <p class="text-muted">${planHint}</p>
      <ul class="feature-list">
        ${featureRows}
      </ul>
      <div class="subscription-actions">
        <button type="button" class="btn btn-primary" data-action="open-pro">Открыть тарифы</button>
        <a href="#" class="subscription-manage-link" data-action="open-pro">Управление подпиской</a>
        <button type="button" class="tour-restart-btn" data-action="reset-onboarding-tour">Показать тур ещё раз</button>
      </div>
    </article>

    <div class="settings-legal-inline mt-16" aria-label="Документы">
      <span class="settings-legal-label">Документы</span>
      <div class="settings-legal-links-inline">
        <a class="settings-legal-link-minimal" href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">
          <i data-lucide="shield-check" aria-hidden="true"></i>
          <span>Политика конфиденциальности</span>
        </a>
        <a class="settings-legal-link-minimal" href="/terms-of-service.html" target="_blank" rel="noopener noreferrer">
          <i data-lucide="file-text" aria-hidden="true"></i>
          <span>Пользовательское соглашение</span>
        </a>
      </div>
    </div>
  `;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const settingsForm = document.getElementById("settingsForm");
  if (settingsForm instanceof HTMLFormElement) {
    updateSettingsSaveButtonState(settingsForm);
  }
  updateSettingsIpnVisibility(state.regime);
}

function getTaxLines(tax, regime) {
  if (regime === "self") {
    return [
      { label: "ОПВ (1%)", value: tax.opv },
      { label: "ОПВР (1%)", value: tax.opvr },
      { label: "СО (1%, до 7 МЗП)", value: tax.so },
      { label: "ВОСМС (1%)", value: tax.vosms }
    ];
  }

  const isZeroIncomeScenario =
    Number(tax.ipn || 0) <= 0 &&
    Number(tax.opv || 0) <= 0 &&
    Number(tax.opvr || 0) <= 0 &&
    Number(tax.so || 0) <= 0 &&
    Number(tax.vosms || 0) > 0 &&
    Number(tax.socTax || 0) <= 0;

  if (regime === "simplified") {
    if (isZeroIncomeScenario) {
      return [
        { label: "ВОСМС (обязательный платёж)", value: tax.vosms },
        { label: `ИПН (${formatRatePercent(Number(tax.ipnRate || 0) || getActiveSimplifiedIpnRate())})`, value: tax.ipn }
      ];
    }

    const isMinimumScenario =
      Number(tax.ipn || 0) <= 0 &&
      Math.round(Number(tax.opv || 0)) === IP_MIN_OPV &&
      Math.round(Number(tax.opvr || 0)) === IP_MIN_OPVR &&
      Math.round(Number(tax.so || 0)) === IP_MIN_SO;

    return [
      { label: isMinimumScenario ? "ОПВ (10% от МЗП, минимум)" : "ОПВ (10% от базы)", value: tax.opv },
      { label: "СО (5% от базы, до 7 МЗП)", value: tax.so },
      { label: isMinimumScenario ? "ОПВР (3.5% от МЗП, минимум)" : "ОПВР (3.5% от базы, до 50 МЗП)", value: tax.opvr },
      { label: "ВОСМС", value: tax.vosms },
      { label: `ИПН (${formatRatePercent(Number(tax.ipnRate || 0) || getActiveSimplifiedIpnRate())})`, value: tax.ipn },
      { label: "Соц. налог", value: tax.socTax }
    ];
  }

  if (isZeroIncomeScenario) {
    return [
      { label: "ВОСМС (обязательный платёж)", value: tax.vosms },
      { label: "ИПН (10%)", value: tax.ipn }
    ];
  }

  return [
    { label: "ОПВ (10% от базы)", value: tax.opv },
    { label: "ОПВР (3.5% от базы, до 50 МЗП)", value: tax.opvr },
    { label: "СО (5% от базы, до 7 МЗП)", value: tax.so },
    { label: "ВОСМС", value: tax.vosms },
    { label: "СН", value: tax.socTax },
    { label: "ИПН (10%)", value: tax.ipn }
  ];
}

function renderTaxBreakdown(tax, regime, options = {}) {
  const lines = getTaxLines(tax, regime);
  const showIpnPeriodNote = Boolean(options && options.ipnPeriodNote);

  return `
    <div>
      ${lines
        .map((line) => {
          const isIpn = showIpnPeriodNote && String(line.label || "").includes("ИПН");
          const baseLabel = escapeHtml(line.label);
          const labelHtml = isIpn
            ? `${baseLabel} <span class="tax-row-note">платится раз в полгода</span>`
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

  const doneSet = new Set(normalizeDoneDeadlines(state.doneDeadlines));
  const isDone = doneSet.has(id);
  if (!isDone && isDeadlineBlockedByMissingEmployeeIin(row)) {
    showAppToast("Сначала заполните ИИН у сотрудников, чтобы отметить ФНО 200.00 как готовую.");
    return;
  }

  if (isDone) {
    doneSet.delete(id);
    markAllDeadlineTasks(id, row, false);
  } else {
    doneSet.add(id);
    markAllDeadlineTasks(id, row, true);
  }

  state.doneDeadlines = [...doneSet];
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
  if (regime === "self") return "Самозанятый";
  if (regime === "our") return "ОУР";
  return "Упрощенка (910)";
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("ru-KZ");
}

function formatDateShort(dateString) {
  return new Date(dateString).toLocaleDateString("ru-KZ", { day: "numeric", month: "short" });
}

function formatDateDayMonthLong(dateString) {
  return new Date(dateString).toLocaleDateString("ru-KZ", { day: "numeric", month: "long" });
}

function formatDateLong(dateString) {
  return new Date(dateString).toLocaleDateString("ru-KZ", { day: "numeric", month: "long", year: "numeric" });
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






















































































































































































































































































































































































































































