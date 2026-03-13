# MyEsep.kz — Полный снимок состояния проекта

Дата снимка: 2026-03-09
Проект: MVP/Prototype для ИП и самозанятых Казахстана
Формат: static SPA (vanilla JS, без build step)

---

## 1. Что это за проект (в двух словах)

MyEsep.kz — это веб-приложение, которое помогает ИП/самозанятым в РК:
- понимать налоговую нагрузку по режимам,
- не пропускать сроки,
- вести учет доходов,
- быстро ориентироваться по практическим налоговым вопросам.

Текущее позиционирование в продукте:
- не юридическая консультация,
- практичная шпаргалка + рабочий дашборд.

---

## 2. Текущий статус (важное)

### 2.1. Что уже реализовано
- Лендинг + быстрый калькулятор режимов.
- Авторизация (demo always, Supabase optional).
- Кабинет с разделами:
  - Дашборд
  - Доходы
  - Налоги и платежи
  - Календарь сроков
  - Калькулятор режимов
  - База знаний РК
  - Настройки
- Freemium/Pro-механика (локальная demo-логика):
  - paywall на часть функций,
  - Trial 30 дней,
  - Pro 1 990 ₸/мес (демо-активация без реальной оплаты).
- Чеклисты по срокам + умные напоминания (цепочка -7/-3/-1/в день).
- Передача чеклиста бухгалтеру (копирование в буфер).
- Новый раздел “База знаний РК” с короткими карточками.

### 2.2. Последнее большое изменение
- Добавлен раздел **База знаний РК** с фильтрами/поиском/карточками и копированием шпаргалки.
- Обновлены версии ассетов в HTML:
  - `styles.css?v=20260309-enterprise-34`
  - `app.js?v=20260309-enterprise-34`

Если визуально “ничего не изменилось”, почти всегда решается hard reload (Ctrl+F5).

---

## 3. Стек и запуск

### 3.1. Стек
- `index.html` — разметка и модалки.
- `styles.css` — все стили (лендинг + кабинет + модалки + knowledge).
- `app.js` — вся бизнес-логика и рендер.
- `config.js` — runtime config.
- `@supabase/supabase-js@2` подключается через CDN (в `index.html`).

### 3.2. Build/infra
- Build pipeline нет.
- SSR нет.
- Backend как обязательная часть — отсутствует.
- Данные пользователя хранятся локально в браузере (localStorage), кроме optional auth session через Supabase.

### 3.3. Запуск локально
- Открыть `index.html` в браузере.
- Для Supabase заполнить `config.js`:
  - `supabaseUrl`
  - `supabaseAnonKey`
- Если ключи пустые, работает demo-login.

---

## 4. Структура репозитория

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `config.example.js`
- `README.md`
- `PROJECT_SNAPSHOT_2026-03-09.md` (старый краткий снимок)
- `PROJECT_HANDOFF_FULL_2026-03-09.md` (этот файл)
- `app.js.bak_freemium_20260309`
- `app.js.bak_before_knowledge_20260309`

Размеры (приблизительно):
- `app.js` ~152 KB
- `styles.css` ~87 KB
- `index.html` ~20 KB

---

## 5. Карта ключевых точек в коде

### 5.1. Главные константы и состояние (`app.js`)
- `RATES` — `app.js:19`
- `DEADLINES_2026` — `app.js:30`
- `PRO_FEATURES` — `app.js:58`
- `KNOWLEDGE_TOPICS` — `app.js:66`
- `KNOWLEDGE_ARTICLES` — `app.js:75`
- `state` — `app.js:661`
- `PAGE_TITLES` — `app.js:722`

### 5.2. Инициализация
- `init()` — `app.js` (после PAGE_TITLES)
- `bindBaseEvents()` — `app.js:781`
- `initSupabase()` — `app.js:803`
- `loadState()` — `app.js:816`
- `saveState()` — `app.js:882`

### 5.3. Роутинг/рендер
- `renderDashboard()` — `app.js:2479` (router по `state.page`)
- Страницы:
  - `renderDashboardPage()` — `app.js:2518`
  - `renderIncomePage()` — `app.js:2733`
  - `renderTaxesPage()` — `app.js:2933`
  - `renderCalendarPage()` — `app.js:3239`
  - `renderCalculatorPage()` — `app.js:3397`
  - `renderKnowledgePage()` — `app.js:3648`
  - `renderSettingsPage()` — `app.js:3751`

### 5.4. Лендинг + дедлайны
- `renderLandingCards()` — `app.js:1896`
- `renderLandingDeadlines()` — `app.js:2317`
- `renderLandingDeadlineModal()` — `app.js:2199`

### 5.5. Freemium/Pro
- `renderProModal()` — `app.js:332`
- `requireFeature()` — `app.js:397`
- `activateProDemo()` — `app.js:410`
- `ensureTrialIfNeeded()` — `app.js:423`

### 5.6. События
- `handleGlobalClick()` — `app.js:939`
- `handleGlobalChange()` — `app.js:1404`
- `handleGlobalSubmit()` — блок с формами (`app.js` рядом с `loginForm`, `incomeForm`, `calendarFilterForm`, `knowledgeFilterForm`, и т.д.)
- `trackEvent()` — `app.js:3902`

---

## 6. Навигация в HTML

### 6.1. Корневые контейнеры
- Public: `#publicApp` (`index.html:14`)
- Dashboard: `#dashboardApp` (`index.html:201`)

### 6.2. Sidebar pages (`index.html`)
- `dashboard`, `income`, `taxes`, `calendar`, `calculator`, `knowledge`, `settings`

### 6.3. Mobile tabbar (`index.html`)
- `dashboard`, `income`, `calendar`, `knowledge`, `calculator`, `settings`

### 6.4. Модалки
- `#loginModal`
- `#proModal`
- `#deadlineModal`

---

## 7. Данные и вычисления

### 7.1. Налоговые модели (ориентировочные)
- `calcSelfEmployed()`
- `calcSimplified()`
- `calcOUR()`
- `calcByRegime()`

Текущие ставки в коде (`RATES`):
- `MRP: 3932`
- `MZP: 85000`
- `OPV_RATE: 0.1`
- `SO_RATE: 0.035`
- `VOSMS: 5950`
- `MAX_OPV_BASE: 850000`

Важно: это не юридический источник, а продуктовая модель для оценки.

### 7.2. Дедлайны
- Источник: `DEADLINES_2026` (захардкоженный массив)
- Логика:
  - фильтрация по режиму,
  - дедлайн-статусы (сегодня/завтра/через X дней),
  - done-статус,
  - чеклист прогресс.

### 7.3. База знаний
- `KNOWLEDGE_TOPICS` + `KNOWLEDGE_ARTICLES` (в `app.js`)
- Темы:
  - Все темы
  - ФНО и отчетность
  - ОПВ/СО/ВОСМС
  - ИПН и налоги
  - Режимы и лимиты
  - Оплата и реквизиты
- Каждая карточка содержит:
  - summary
  - practical
  - when
  - formula
  - where
  - needs[]
  - note
  - search[]

---

## 8. State-модель (важно для передачи)

`state` включает:
- auth/session:
  - `isLoggedIn`, `userEmail`
- UI navigation:
  - `page`, `regime`
- data:
  - `incomes[]`, `doneDeadlines[]`
- profile:
  - `profile.{name,iin,city,activity}`
- calculator:
  - `calcIncome`, `calcExpenses`, `calcPeriod`
- landing:
  - `landingPeriod`, `landingDeadlineOpenId`
- reminders/checklists:
  - `deadlineReminderIds[]`
  - `deadlineChecklistProgress{}`
  - `deadlineReminderSettings{}`
- subscription/paywall:
  - `subscription{plan,status,trialStartedAt,trialEndsAt,proStartedAt}`
  - `paywallFeature`
  - `isPro`
- page-specific filters:
  - `incomeEditId`
  - `incomeFilters{query,category,period,sort}`
  - `calendarFilters{query,type,status,timeframe}`
  - `knowledgeFilters{query,topic}`
  - `taxPlanner{income,expenses,reservePct}`

---

## 9. Persistence

### 9.1. localStorage keys
- `myesep_state_v1` — основной state
- `myesep_auth_v1` — auth/session fallback

### 9.2. Что сохраняется
- Практически весь state, включая фильтры, чеклисты, напоминания и выбранные страницы.

---

## 10. Freemium/Paywall логика

### 10.1. Pro-фичи
`PRO_FEATURES`:
- `deadline_reminders`
- `unlimited_income_ops`
- `exports`
- `advanced_analytics`

### 10.2. Где реально есть блокировки
- Лимит операций доходов в Free (`FREE_INCOME_MONTH_LIMIT = 30`)
- Экспорт CSV
- Умные напоминания по срокам
- Расширенная аналитика риска в dashboard

### 10.3. Trial/Pro
- Trial: `TRIAL_DAYS = 30`
- Цена: `PRO_PRICE_MONTHLY = 1990`
- `activateProDemo()` — демо-перевод в Pro без реальной оплаты

---

## 11. Текущий функционал по страницам

### 11.1. Public лендинг
- Hero, trust cards, быстрый расчет налогов
- Карточки режимов
- Блок ближайших сроков
- FAQ
- CTA на login/demo

### 11.2. Dashboard
- KPI: доход месяца, налоги месяца, доход YTD, ближайший срок
- График доходов по месяцам
- Разбивка налогов
- Прогресс до лимита + риск
- Последние поступления

### 11.3. Доходы
- Добавление/редактирование операции
- Пресеты сумм
- Фильтры + сортировка
- Таблица операций
- Удаление
- Экспорт CSV (gated)

### 11.4. Налоги и платежи
- Планировщик сценариев
- KPI по нагрузке/резерву/эффективной ставке
- Сравнение режимов
- Прогноз по месяцам
- Ближайшие сроки

### 11.5. Календарь сроков
- KPI по срокам
- Фильтры: период/тип/статус/поиск
- Таблица сроков
- Отметка “Сделано”
- Быстрый переход в чеклист

### 11.6. Калькулятор режимов
- Режим “в месяц / в год”
- Доход + расходы (ОУР)
- Автовыбор выгодного режима
- Сравнение налогов

### 11.7. База знаний РК (новое)
- Карточки-памятки (короткие ответы)
- Фильтр по теме
- Поиск
- Mini-checklist внутри карточек (`details/summary`)
- Кнопка “Скопировать шпаргалку”

### 11.8. Настройки
- Профиль
- Таблица базовых ставок/лимитов
- Инфо по подписке

---

## 12. Напоминания и чеклисты (дедлайны)

В `deadline modal`:
- Чекбоксы задач (что сделать / куда зайти / какие данные нужны)
- Прогресс по шагам
- Подписка на напоминания
- Каналы: Telegram / WhatsApp / Email
- Таймлайн цепочки (-7, -3, -1, 0)
- Кнопки:
  - сохранить каналы,
  - копировать план,
  - передать бухгалтеру.

---

## 13. Аналитика событий

`trackEvent()` пишет в console и опционально шлет в:
- Google Analytics (`gtag`) при `googleTagId`
- Plausible при `plausibleDomain`

Ключевые события уже есть:
- auth: `visit`, `login`, `logout`
- monetization: `paywall_shown`, `trial_started`, `upgrade_pro`
- navigation: `page_open`
- calculator/tax planner events
- income filter/add/edit/delete/export events
- calendar/deadline/checklist/reminder events
- knowledge events: `knowledge_topic_filter`, `knowledge_filters_apply`, `knowledge_copy`

---

## 14. Ограничения и риски

1. Нет backend-слоя для реальных уведомлений (Telegram/WhatsApp/Email) — сейчас это UX + локальные настройки.
2. Нет real billing (Stripe/Kaspi/Halyk интеграций), только demo paywall.
3. Справочник/сроки и ставки местами hardcoded.
4. Нет CI, тестов и линтера.
5. Нет серверной синхронизации данных пользователя (все локально).
6. Налоговые расчеты — ориентировочные, нужно явно поддерживать актуальность правил.

---

## 15. Что лучше делать следующим шагом

### Шаг 1 (продуктовый минимум)
- Вынести ставки/сроки/knowledge-данные в отдельные JSON-файлы.
- Добавить timestamp “Обновлено: DD.MM.YYYY”.

### Шаг 2 (технический минимум)
- Мини smoke-check:
  - boot app,
  - открыть все страницы,
  - создать/редактировать/удалить доход,
  - открыть дедлайн modal,
  - применить filters knowledge/calendar/income.

### Шаг 3 (монетизация)
- После первых пользователей подключить реальную оплату.
- До оплаты: валидировать ценность по usage событий.

### Шаг 4 (реальная ценность подписки)
- Настоящие отправки напоминаний (backend + jobs + webhook).
- Права доступа по планам на сервере, а не только в UI.

---

## 16. Быстрый handoff prompt для другого ИИ

Скопируй и отдай новому ИИ:

```text
Прочитай файл PROJECT_HANDOFF_FULL_2026-03-09.md в корне проекта.
Контекст: это static SPA MyEsep.kz (index.html, styles.css, app.js).

Твоя задача:
1) не ломая текущий дизайн, провести стабилизационный pass,
2) проверить и улучшить раздел "База знаний РК",
3) добавить безопасную структуру данных для knowledge/deadlines/rates (в отдельные JSON),
4) сохранить совместимость с текущим state/localStorage.

Ограничения:
- сохранить текущие UX-сценарии,
- не удалять freemium/paywall механику,
- не менять публичные тексты без необходимости,
- все изменения описать списком с путями файлов.
```

---

## 17. Релизные маркеры на момент снимка

- `index.html` подключает:
  - `styles.css?v=20260309-enterprise-34`
  - `app.js?v=20260309-enterprise-34`
- CDN Supabase подключен.
- `config.js` по умолчанию пустой (demo auth работает).

---

## 18. Важный дисклеймер продукта

Приложение предназначено для ориентировочных расчетов и практической навигации по рутине ИП/самозанятых. Это не юридическая консультация и не заменяет проверку данных в официальных сервисах РК.


