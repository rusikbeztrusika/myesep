import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req) => {
  const { user_id } = await req.json();
  if (!user_id) return new Response(JSON.stringify({ error: "no user_id" }), { status: 400 });

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  const { data: notif } = await supabase
    .from("user_notifications")
    .select("*")
    .eq("user_id", user_id)
    .single();

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("tax_regime, opv, so, opvr, vosms, full_name")
    .eq("user_id", user_id)
    .single();

  const total = profile ? (profile.opv||0)+(profile.so||0)+(profile.opvr||0)+(profile.vosms||0) : 0;
  const userName = profile?.full_name || "";
  const greeting = userName ? `Привет, ${userName}!` : "Привет!";
  const regimeName = profile?.tax_regime === "simplified" ? "Упрощёнка (910)" : profile?.tax_regime || "Упрощёнка (910)";

  if (notif?.telegram_chat_id) {
    let text = `✅ *Тестовое уведомление от MyEsep.kz*\n\n`;
    text += `${greeting} Так будет выглядеть ваше напоминание.\n\n`;
    text += `🗓 Срок уплаты: *25 апреля*\nРежим: ${regimeName}\n\n`;
    if (total > 0) {
      text += `💰 *Что нужно заплатить:*\n`;
      text += `ОПВ (10%) — ${fmt(profile.opv)} ₸\n`;
      text += `СО (5%) — ${fmt(profile.so)} ₸\n`;
      text += `ОПВР (3.5%) — ${fmt(profile.opvr)} ₸\n`;
      text += `ВОСМС — ${fmt(profile.vosms)} ₸\n`;
      text += `─────────────────\n`;
      text += `*Итого: ${fmt(total)} ₸*\n\n`;
    }
    text += `💳 *Как оплатить через Kaspi:*\n1. Kaspi.kz → Платежи\n2. Найди "Налоги и сборы"\n3. Введи ИИН и оплати\n\n`;
    text += `👉 [Открыть MyEsep.kz](https://myesep.kz)`;

    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: notif.telegram_chat_id, text, parse_mode: "Markdown", disable_web_page_preview: true }),
    });
  }

  if (notif?.email) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "MyEsep.kz <noreply@myesep.kz>",
        to: [notif.email],
        subject: `✅ Тестовое уведомление — MyEsep.kz`,
        html: `<div style="font-family:sans-serif;max-width:480px;margin:32px auto;padding:24px;background:#fff;border-radius:16px">
          <h2 style="color:#1e2a4a">✅ Тестовое уведомление</h2>
          <p style="color:#555">Так будет выглядеть ваше напоминание о налогах.</p>
          <p style="color:#555">${greeting} Уведомления настроены и работают!</p>
          <a href="https://myesep.kz" style="display:inline-block;background:#6c5ce7;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;margin-top:16px">Открыть MyEsep.kz →</a>
        </div>`,
      }),
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});

function fmt(n: number) { return Math.round(n||0).toLocaleString("ru-RU"); }
