# PROJECT_SNAPSHOT

Дата среза: 2026-03-10  
Проект: **MyEsep.kz**  
Тип: статический SPA-прототип (HTML/CSS/vanilla JS), без сборщика.

## 1. Что реализовано (текущее состояние)

### 1.1 Лендинг и вход
- Публичный лендинг с калькулятором режимов, дедлайнами и FAQ.
- Модалки: вход, Pro, дедлайн-чеклист.
- Демо-вход работает всегда.
- Опциональный Supabase (если заполнен `config.js`).

### 1.2 Кабинет и навигация
- Боковое меню с группами: **Учет / Планирование / Справка**.
- Название страницы `Дашборд` заменено на `Главная`.
- Бренд в сайдбаре: `MyEsep.kz`, с акцентом на `.kz`.
- Страницы: `dashboard`, `income`, `taxes`, `calendar`, `calculator`, `knowledge`, `settings`.

### 1.3 Доходы
- CRUD операций дохода.
- Фильтры по поиску/категории/периоду/сортировке.
- Категория через выпадающий список + режим `Другое (ввести вручную)`.
- Экспорт CSV (feature-gated).

### 1.4 Налоги/калькуляция
- Расчеты для режимов: `self`, `simplified (910)`, `our`.
- KPI, разбивка обязательств, прогнозы и сравнение режимов.
- Tax planner (`income`, `expenses`, `reservePct`) в state.

### 1.5 Календарь и дедлайны
- Список дедлайнов, фильтры и статусы.
- Чеклист по дедлайну с сохранением прогресса по шагам.
- В модалке дедлайна реализовано:
- блок **Сумма к уплате** (ОПВ/СО/ВОСМС/Итого);
- явный прогресс: **"Выполнено X из Y шагов"** + progress bar;
- переключатель напоминаний в виде toggle;
- каналы Telegram/WhatsApp/Email + формат WhatsApp;
- подпись под Email: **"Из профиля · Изменить"**;
- кнопка **"Открыть e-Salyq Business →"**.

### 1.6 База знаний (последние изменения)
- Топик-фильтр карточек.
- Поиск работает **в реальном времени** при вводе (кнопка `Применить` убрана).
- Добавлены бейджи режима на карточках (например, `Упрощенка`, `ОУР`).
- Нерелевантные карточки для выбранного режима приглушаются и сортируются ниже.
- Для `ФНО 910` добавлена персонализация:
- ближайший срок;
- расчетная сумма (ориентир по модели).
- Кнопка `Скопировать шпаргалку` получила tooltip с пояснением.

### 1.7 Freemium
- Модель подписки: `free / trial / pro`.
- Gating функций через `requireFeature/canUseFeature`.
- Trial lifecycle в state.

### 1.8 Техническое
- Состояние хранится в `localStorage`.
- Инициализированы аналитические хуки (`gtag`, `plausible`) при наличии конфигурации.
- Версии ассетов (cache-busting): `enterprise-45`.

## 2. Структура файлов

Корень: `C:\Users\Ruslan\Desktop\Новая папка (2)`

- `index.html` — layout лендинга/кабинета + контейнеры для рендера + модалки.
- `styles.css` — все стили приложения.
- `app.js` — вся бизнес-логика, state, обработчики событий, рендер.
- `config.js` — runtime-конфиг (Supabase/analytics).
- `config.example.js` — шаблон конфига.
- `README.md` — краткий запуск.
- `PROJECT_SNAPSHOT.md` — этот актуальный handoff.
- `PROJECT_HANDOFF_FULL_2026-03-09.md` — старый расширенный handoff.
- `PROJECT_SNAPSHOT_2026-03-09.md` — старый snapshot.
- `app.js.bak_*` — резервные копии прошлых итераций.

## 3. Ключевые HTML-якоря (index.html)

- `publicApp` — строка `14`
- `dashboardApp` — строка `201`
- `sidebarNav` — строка `208`
- `pageTitle` — строка `240`
- `regimeSelect` — строка `242`
- `pageContent` — строка `252`
- `mobileTabbar` — строка `255`
- `loginModal` — строка `265`
- `proModal` — строка `298`
- `deadlineModal` — строка `339`
- CSS version (`enterprise-45`) — строка `11`
- JS version (`enterprise-45`) — строка `362`

## 4. State-модель

Источник: `app.js:701-730`.

```js
state = {
  isLoggedIn,
  userEmail,
  page,
  isPro,
  regime, // self | simplified | our
  incomes,
  doneDeadlines,
  profile: { name, iin, city, activity },
  calcIncome,
  calcExpenses,
  calcPeriod, // month | year
  landingPeriod, // month | year
  landingDeadlineOpenId,
  deadlineReminderIds,
  deadlineChecklistProgress,
  deadlineReminderSettings,
  subscription, // plan/status/trial/pro dates
  paywallFeature,
  incomeEditId,
  incomeFilters,
  calendarFilters,
  knowledgeFilters,
  taxPlanner
}
```

Связанные default/normalizers:
- `getDefaultIncomeFilters` — `app.js:535`
- `getDefaultCalendarFilters` — `app.js:553`
- `getDefaultKnowledgeFilters` — `app.js:216`
- `getDefaultTaxPlanner` — `app.js:577`
- `normalizeTaxPlanner` — `app.js:585`
- `normalizeDeadlineReminderSettings` — `app.js:633`

## 5. Ключевые функции с номерами строк

### 5.1 Инициализация и инфраструктура
- `init` — `app.js:774`
- `bindBaseEvents` — `app.js:821`
- `loadState` — `app.js:857`
- `saveState` — `app.js:923`
- `trackEvent` — `app.js:4239`

### 5.2 Глобальные обработчики
- `handleGlobalClick` — `app.js:984`
- `handleGlobalInput` (real-time knowledge search) — `app.js:1463`
- `handleGlobalChange` — `app.js:1506`
- `handleGlobalSubmit` — `app.js:1568`

### 5.3 Налоговый движок
- `calcSelfEmployed` — `app.js:1872`
- `calcSimplified` — `app.js:1877`
- `calcOUR` — `app.js:1887`
- `calcByRegime` — `app.js:1897`

### 5.4 Дедлайны/чеклисты/напоминания
- `getDeadlineReminderSettings` — `app.js:666`
- `updateDeadlineReminderSubscription` — `app.js:684`
- `getDeadlineChecklistStats` — `app.js:2114`
- `formatWhatsappContact` — `app.js:2216`
- `getReminderTimeline` — `app.js:2242`
- `buildDeadlineHandoffText` — `app.js:2279`
- `buildReminderPlanText` — `app.js:2305`
- `renderLandingDeadlineModal` — `app.js:2391`
- `renderLandingDeadlines` — `app.js:2562`
- `getUpcomingDeadlines` — `app.js:2656`

### 5.5 Роутинг и рендер страниц
- `renderDashboard` — `app.js:2724`
- `renderDashboardPage` — `app.js:2763`
- `renderIncomePage` — `app.js:2978`
- `getTaxPlannerState` — `app.js:3198`
- `renderTaxesPage` — `app.js:3211`
- `renderCalendarPage` — `app.js:3515`
- `renderCalculatorPage` — `app.js:3671`
- `renderKnowledgePage` — `app.js:3967`
- `renderSettingsPage` — `app.js:4087`

### 5.6 База знаний (детали)
- `KNOWLEDGE_ARTICLES` — `app.js:88`
- `KNOWLEDGE_ARTICLE_REGIMES` — `app.js:208`
- `getKnowledgeFno910Personalization` — `app.js:3894`
- `getFilteredKnowledgeArticles` — `app.js:3917`

## 6. Ключевые CSS-точки

- Sidebar бренд/логотип:
- `.sidebar-brand` — `styles.css:1283`
- `.sidebar-brand .logo span` — `styles.css:1293`
- База знаний:
- `.knowledge-search-form` — `styles.css:5002`
- `.knowledge-filter-actions` — `styles.css:5036`
- `.knowledge-card` — `styles.css:5046`
- `.knowledge-card-meta-row` — `styles.css:5074`
- `.knowledge-regime-chip` — `styles.css:5082`
- `.knowledge-personal-note` — `styles.css:5095`
- `.knowledge-card-muted` — `styles.css:5110`

## 7. Известные риски/долги

1. `app.js` монолитный (4k+ строк), высокая связность.
2. Нет автоматических unit/integration тестов.
3. Reminder-каналы пока UI/state-level (без реальной отправки на backend-воркеры).
4. В проекте нет линтера и CI-проверок.
5. Любые правки по UI требуют ручного smoke QA (desktop + mobile).

## 8. Что делать следующим шагом (приоритет)

### P1 (сразу)
- Полный smoke QA всех экранов и ключевых сценариев после последних правок:
- `knowledge`: real-time поиск, бейджи режимов, tooltip, персонализация `ФНО 910`;
- `deadlineModal`: сумма к уплате, progress bar, toggle, WhatsApp auto-format, ссылка e-Salyq;
- `income`: dropdown категории + custom category.

### P2
- Вынести Knowledge в отдельный модуль (`knowledgeModel`, `knowledgeRenderer`, `knowledgeHandlers`), чтобы снизить риск регрессий и упростить доработки персонализации.

### P3
- Добавить минимальные unit-тесты на налоговые формулы (`calcSelfEmployed/calcSimplified/calcOUR`) и на форматирование/валидацию WhatsApp.

## 9. Быстрый handoff для нового ИИ

1. Сначала прочитать этот файл (`PROJECT_SNAPSHOT.md`).
2. Затем открыть `app.js` в порядке:
- `state` (`701+`),
- глобальные handlers (`984+`, `1463+`, `1568+`),
- `renderDashboard` (`2724+`),
- `renderLandingDeadlineModal` (`2391+`),
- `renderKnowledgePage` (`3967+`).
3. Перед код-изменениями сделать smoke-check по чеклисту из раздела **8 / P1**.
4. Любые крупные изменения делать только после фиксации базового pass/fail smoke-результата.

---

Примечание по кодировке: файлы в UTF-8; если терминал иногда показывает кракозябры, проверять итог в браузере и в самом файле, а не по выводу терминала.
