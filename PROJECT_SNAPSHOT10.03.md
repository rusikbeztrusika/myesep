# PROJECT_SNAPSHOT10.03

Дата среза: 2026-03-10
Проект: **MyEsep.kz**
Формат: SPA без сборщика (`index.html` + `styles.css` + `app.js`)
Рабочая папка: `C:\Users\Ruslan\Desktop\Новая папка (2)`

## 1) Что реализовано (актуально на сейчас)

### 1.1 Лендинг + быстрый калькулятор
- Блок быстрого расчета налогов на лендинге (`index.html:47`).
- Переключатель периода `В месяц / В год` влияет на отображаемые суммы, при этом ввод дохода остается **месячным**.
- Добавлены явные пояснения по периоду:
  - подсказка под вводом (`index.html:70`),
  - контекст в summary (`app.js:2247`),
  - подписи breakdown с периодом (`app.js:2235`).
- В карточках режимов:
  - выгодный режим выделяется,
  - для **недоступного режима** сумма скрыта, показывается только причина (`app.js:2290-2292`).
- CTA в блоке калькулятора: `Сохранить и перейти в личный кабинет →` (`index.html:89`).

### 1.2 Онбординг после регистрации (3 шага)
- Логика онбординга реализована в state и рендере:
  - default onboarding: `app.js:618`,
  - проверка показа: `app.js:651`,
  - страница онбординга: `app.js:3221`.
- Поток: выбор режима → ввод дохода → просмотр расчета.

### 1.3 Авторизация и кабинет
- Инициализация Supabase: `app.js:915`.
- Сохранение/загрузка пользовательского состояния: `app.js:928`, `app.js:995`.
- Обновление auth UI: `app.js:1024`.
- Структура приложений:
  - публичная часть: `index.html:14` (`publicApp`),
  - кабинет: `index.html:204` (`dashboardApp`),
  - точка рендера страниц кабинета: `index.html:256` (`pageContent`).

### 1.4 Главная (dashboard) и ключевые фиксы
- Рендер главной: `app.js:3071`.
- Тренд-логика вынесена в `buildTrend` (`app.js:2974`), включен безопасный сценарий для `previous = 0`.
- Цветовая индикация ближайшего срока для зоны `< 30 дней` реализована через warning-классы в dashboard логике (`app.js:3127-3128`) и стилях (`styles.css:3250`).

### 1.5 Доходы + пустые состояния
- Рендер страницы доходов: `app.js:3422`.
- Фильтрация/сортировка/поиск: `app.js:3380`, `app.js:3400`.
- Форма добавления/редактирования, пустое состояние и первый доход: в `renderIncomePage`.

### 1.6 Календарь сроков и дедлайны
- Набор дедлайнов 2026: `DEADLINES_2026` (`app.js:32`), включая ежемесячные платежи до конца 2026.
- Логика дедлайнов в кабинете: `getUpcomingDeadlines` (`app.js:2950`), `renderCalendarPage` (`app.js:3982`).
- Модалка дедлайна с чеклистом и напоминаниями: `renderLandingDeadlineModal` (`app.js:2679`).
- Лента дедлайнов на лендинге:
  - рендер: `app.js:2850`,
  - фильтрация по режиму (на основе предложенного режима калькулятора),
  - прогресс `0/7 шагов` убран с публичных карточек.

### 1.7 База знаний
- Рендер: `app.js:4434`.
- Фильтрация материалов: `app.js:4384`.
- Генерация шпаргалки: `app.js:4418`.

### 1.8 Обратная связь (Feedback)
- Страница обратной связи: `app.js:4554`.
- Категории: баг / предложение / вопрос по налогам / другое (`app.js:91-94`).
- Отправка в Google Sheets через webhook:
  - получение URL: `app.js:2575`,
  - submit обработка: `app.js:1758`.
- В правой колонке добавлены:
  - SLA `Отвечаем в течение 24 часов` (`app.js:4634`),
  - Telegram контакт `@myesep` (`app.js:4635`).

### 1.9 FAQ и финальный CTA лендинга
- FAQ секция: `index.html:156`.
- Добавлен 5-й вопрос по безопасности данных (`index.html:178-181`).
- Финальный CTA обновлен:
  - кнопка: `Начать считать налоги бесплатно →` (`index.html:193`),
  - подпись: `Без карты. Доступ за 2 минуты.` (`index.html:194`),
  - тег: `30 дней Pro бесплатно` (`index.html:198`).

### 1.10 Валюта
- Обозначение валюты приведено к символу `₸` в `index.html` и `app.js`.
- Форматер сумм: `fmt` (`app.js:2149`).

---

## 2) Структура файлов

```text
C:\Users\Ruslan\Desktop\Новая папка (2)
├─ index.html
├─ styles.css
├─ app.js
├─ config.js
├─ config.example.js
├─ README.md
├─ PROJECT_SNAPSHOT.md
├─ PROJECT_SNAPSHOT_2026-03-09.md
├─ PROJECT_HANDOFF_FULL_2026-03-09.md
├─ app.js.bak_before_knowledge_20260309
└─ app.js.bak_freemium_20260309
```

Назначение:
- `index.html` — структура лендинга/кабинета и модалки.
- `styles.css` — единый файл стилей (лендинг + кабинет).
- `app.js` — весь state, бизнес-логика, обработчики, рендер.
- `config.js` — runtime-конфиг (Supabase, webhook, analytics).
- `config.example.js` — шаблон для заполнения.

---

## 3) Ключевые функции с номерами строк

| Модуль | Функция | Линия | Назначение |
|---|---|---:|---|
| Init | `init` | `app.js:852` | Инициализация приложения |
| Auth | `initSupabase` | `app.js:915` | Подключение Supabase |
| State | `loadState` / `saveState` | `app.js:928` / `app.js:995` | Персист state в `localStorage` |
| UI | `updateAuthUi` | `app.js:1024` | Состояние входа/кабинета |
| Events | `handleGlobalClick` | `app.js:1057` | Главный click-router действий |
| Events | `handleGlobalSubmit` | `app.js:1758` | Submit форм (feedback, income, login, reminders) |
| Tax Core | `calcSelfEmployed` | `app.js:2118` | Расчет самозанятого |
| Tax Core | `calcSimplified` | `app.js:2123` | Расчет упрощенки (910) |
| Tax Core | `calcOUR` | `app.js:2133` | Расчет ОУР |
| Tax Core | `calcByRegime` | `app.js:2143` | Унифицированный вход расчета |
| Tax Core | `fmt` | `app.js:2149` | Формат суммы с `₸` |
| Landing | `renderLandingSummary` | `app.js:2213` | Summary карточка в quick-calc |
| Landing | `renderLandingCards` | `app.js:2254` | Сравнение режимов на лендинге |
| Landing | `renderLandingDeadlines` | `app.js:2850` | Карточки ближайших сроков на лендинге |
| Deadlines | `renderLandingDeadlineModal` | `app.js:2679` | Модалка срока + чеклист + напоминания |
| Dashboard | `renderDashboardPage` | `app.js:3071` | Главная страница кабинета |
| Dashboard | `buildTrend` | `app.js:2974` | Безопасный расчет тренда |
| Onboarding | `createDefaultOnboarding` | `app.js:618` | Дефолт структуры онбординга |
| Onboarding | `shouldShowOnboarding` | `app.js:651` | Условие показа онбординга |
| Onboarding | `renderOnboardingPage` | `app.js:3221` | UI/логика онбординга |
| Income | `renderIncomePage` | `app.js:3422` | Журнал доходов + форма + фильтры |
| Taxes | `renderTaxesPage` | `app.js:3678` | Налоги и планирование |
| Calendar | `renderCalendarPage` | `app.js:3982` | Календарь сроков |
| Calculator | `renderCalculatorPage` | `app.js:4138` | Полный калькулятор режимов |
| Knowledge | `renderKnowledgePage` | `app.js:4434` | База знаний |
| Feedback | `renderFeedbackPage` | `app.js:4554` | Страница обратной связи |
| Settings | `renderSettingsPage` | `app.js:4642` | Профиль/подписка/ставки |

---

## 4) State-модель (ядро)

Источник: `app.js:776-807`.

```js
state = {
  isLoggedIn,
  userEmail,
  page,
  isPro,
  regime,                 // self | simplified | our
  incomes,
  doneDeadlines,
  profile: { name, iin, city, activity },

  calcIncome,
  calcExpenses,
  calcPeriod,             // month | year

  landingPeriod,          // month | year
  landingSuggestedRegime, // режим для лендинг-дедлайнов
  landingDeadlineOpenId,

  deadlineReminderIds,
  deadlineChecklistProgress,
  deadlineReminderSettings,

  subscription,
  paywallFeature,

  incomeEditId,
  incomeFilters,
  calendarFilters,
  knowledgeFilters,
  taxPlanner,

  onboarding
}
```

Связанные нормализаторы/default-фабрики:
- `getDefaultIncomeFilters` (`app.js:543`)
- `getDefaultCalendarFilters` (`app.js:561`)
- `getDefaultKnowledgeFilters` (`app.js:224`)
- `getDefaultTaxPlanner` (`app.js:585`)
- `normalizeTaxPlanner` (`app.js:593`)
- `normalizeDeadlineReminderSettings` (`app.js:708`)
- `normalizeOnboarding` (`app.js:629`)

---

## 5) Интеграции и конфиг

Файл: `config.example.js` / `config.js`.

Поля:
- `supabaseUrl`
- `supabaseAnonKey` (publishable key)
- `feedbackWebhookUrl` (Google Apps Script Web App)
- `analytics.googleTagId`
- `analytics.plausibleDomain`

Замечание:
- `config.js` сейчас заполнен локальными значениями Supabase URL/ключа.
- Для репозитория лучше хранить `config.js` вне коммита и использовать шаблон `config.example.js`.

---

## 6) Что важно знать перед продолжением

1. `app.js` — монолит ~4.8k строк; при правках легко зацепить соседнюю логику.
2. Автотестов нет; нужен ручной smoke после любого UI/расчетного изменения.
3. В этой среде команды `node`/`git` могут быть недоступны из терминала (раньше возвращали `command not found`).
4. Критично держать файлы в UTF-8.
   - Не использовать `Set-Content` без явной кодировки.
   - Безопасный способ: `System.IO.File::ReadAllText/WriteAllText(..., UTF8Encoding(false))`.

---

## 7) Что делать следующим шагом (рекомендуемый план)

### P1 — QA после последней серии правок (обязательно)
- Проверить лендинг quick-calc:
  - корректность периода `В месяц/В год`,
  - отсутствует сумма у недоступного режима,
  - зеленая подсветка выгодного режима,
  - `₸` отображается везде без `?`.
- Проверить FAQ/финальный CTA блок:
  - 5 вопросов,
  - новый текст кнопки/подписи/тегов.
- Проверить ленту дедлайнов на лендинге:
  - фильтрация по режиму,
  - без `0/7 шагов`.

### P2 — Закрыть продуктовые риски
- Добавить явный legal/accuracy дисклеймер в модалку входа и калькулятор (коротко, но заметно).
- Привести тексты валюты к единому стилю (`₸` vs `тенге`) по всей системе.
- Проверить mobile-верстку FAQ + финального CTA на 320/375/390 px.

### P3 — Техдолг
- Разбить `app.js` минимум на модули:
  - `tax-engine`,
  - `landing`,
  - `calendar/deadlines`,
  - `knowledge`,
  - `feedback`.
- Добавить smoke-тесты (Playwright) на критические сценарии.

---

## 8) Быстрый handoff-чеклист для нового ИИ

1. Прочитать этот файл полностью.
2. Открыть функции по порядку:
   - `init` (`app.js:852`),
   - `state` (`app.js:776`),
   - `handleGlobalClick` (`app.js:1057`),
   - `renderLandingCards` (`app.js:2254`),
   - `renderLandingDeadlines` (`app.js:2850`),
   - `renderFeedbackPage` (`app.js:4554`).
3. Перед новыми правками сделать мини-smoke по P1.
4. Любые текстовые замены делать только с UTF-8-safe записью.
