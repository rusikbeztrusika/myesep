# MyEsep.kz Prototype MVP

Локальный SPA-прототип в стиле твоего макета из Claude:

- Темный лендинг с быстрым калькулятором режимов.
- После входа: кабинет с сайдбаром и страницами (`Дашборд`, `Доходы`, `Налоги`, `Календарь`, `Калькулятор`, `База знаний`, `Обратная связь`, `Настройки`).
- Вход через Supabase (email + пароль).

## Файлы

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `config.example.js`

## Запуск

1. При необходимости скопируй `config.example.js` в `config.js`.
2. Для Supabase заполни в `config.js`:
   - `supabaseUrl`
   - `supabaseAnonKey`
   - `feedbackWebhookUrl` (URL Google Apps Script Web App для формы обратной связи)
3. Открой `index.html` в браузере или задеплой как статический сайт.

## Важно

Расчеты налогов ориентировочные и не являются официальной консультацией.


## Обратная связь -> Google Sheets

1. Создай Google Apps Script с `doPost(e)`, который пишет строки в Google Sheets.
2. Задеплой как Web App с доступом `Anyone`.
3. Вставь URL вебхука в `config.js` в поле `feedbackWebhookUrl`.
