# Project Snapshot (2026-03-09)

## 1) Product Direction
- Working product: web app for IP/self-employed users in Kazakhstan.
- Core promise: explain how much to pay, what deadline is next, and what exactly to do.
- Current go-to-market assumption: free launch + TikTok traffic validation, monetization later.

## 2) Current Tech State
- Stack: static SPA (`index.html`, `styles.css`, `app.js`) with optional Supabase auth.
- Local persistence: `localStorage` (`myesep_state_v1`) + session key (`myesep_auth_v1`).
- App version references in HTML: `enterprise-21` cache-busting for CSS/JS.
- No build pipeline currently (vanilla files).

## 3) What Is Implemented

### Public Landing
- Hero + trust cards + quick tax calculator.
- Mode comparison for regimes (self/simplified/OUR).
- Deadline cards with CTA "Что делать по этому сроку".
- Deadline popup modal with checklist and reminder toggle state.

### Auth
- Login modal with demo-login flow.
- Optional Supabase sign-in when keys are provided.

### Dashboard Area
- Pages: `Дашборд`, `Доходы`, `Налоги`, `Календарь`, `Калькулятор`, `Настройки`.
- KPI cards with trend badges.
- Progress to regime limit with risk label.
- Income chart with current-month highlight and hover values.
- Recent income table with category chips.

### Income Page (V2)
- Add/Edit income in the same form.
- Quick amount presets (50k/100k/250k/500k).
- Summary metrics:
  - total income
  - average check
  - last 30 days income
  - top category
- Journal filters:
  - search
  - category
  - period (all/30d/90d/ytd)
  - sort (date/amount asc/desc)
- Row actions: edit + delete with confirm.

## 4) Important Functional Notes
- Tax calculations are marked as ориентировочные (not legal advice).
- Main business logic is in `app.js`; no server-side validation yet.
- Many UI decisions are already tuned for desktop + mobile breakpoints.

## 5) Known Risks / Gaps
- No automated tests/lint/build checks currently.
- Browser console/runtime errors can still happen unnoticed without CI.
- Data is local only; user can lose data if storage is cleared.
- No production billing, no real notification delivery backend yet.
- No strict legal/compliance layer for tax updates (manual update required).

## 6) Next Priority Plan (Recommended)
1. Stabilization pass:
   - add minimal smoke tests for key render paths
   - add global UI error boundary/fallback per page
   - add validation/error states for income form/filters
2. Product trust upgrades:
   - "last updated" stamp for tax rules
   - clearer disclaimer + source links in tax sections
3. Pre-launch analytics:
   - event map for funnel (visit -> calculator use -> modal open -> login)
   - dashboard for conversion from TikTok traffic
4. Monetization-ready architecture:
   - feature gating object (free/pro)
   - payment integration placeholder flow (without forcing paywall yet)

## 7) Rebrand Status
- Current brand in UI: `MyEsep` / `MyEsep.kz`.
- Naming alternatives were discussed but not applied yet.
- Rebrand can be done quickly by:
  - logo/title replacements in `index.html`
  - text tokens in `app.js`
  - small style token pass in `styles.css`

## 8) Quick Resume Prompt (for next sessions)
- "Continue from PROJECT_SNAPSHOT_2026-03-09.md. First do stabilization pass for income page and dashboard, then prepare launch analytics events."


