// pages/api/contact.ts
export const config = { runtime: 'edge' };

const json = (data: any, init?: ResponseInit) =>
  new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { name, email, phone, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return json({ error: 'Заполните имя, email и сообщение' }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL;
    const MAIL_FROM = process.env.MAIL_FROM || 'AI Market <info@aimarket.az>';

    // Dev-fallback: если нет ключей — не падаем, а отвечаем успехом
    const isProdReady = !!(RESEND_API_KEY && TO_EMAIL);
    if (!isProdReady) {
      return json({
        ok: true,
        dev: true,
        note:
          'Resend не сконфигурирован. В .env.local добавьте RESEND_API_KEY, TO_EMAIL и MAIL_FROM, затем перезапустите dev.',
        echo: { name, email, phone, service, budget, message },
      });
    }

    // Отправка через REST API Resend (совместимо с Edge/Workers)
    const payload = {
      from: MAIL_FROM,
      to: [TO_EMAIL],
      subject: `Новая заявка с сайта — ${name}`,
      reply_to: email,
      text: [
        `Имя: ${name}`,
        `Email: ${email}`,
        phone ? `Телефон: ${phone}` : null,
        service ? `Услуга: ${service}` : null,
        budget ? `Бюджет: ${budget}` : null,
        '',
        'Сообщение:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    };

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      return json(
        {
          ok: false,
          error: 'Не удалось отправить письмо через Resend',
          status: r.status,
          body: errText,
        },
        { status: 502 }
      );
    }

    const data = await r.json().catch(() => ({}));
    return json({ ok: true, id: data?.id || null });
  } catch (e: any) {
    return json({ error: 'Server error', details: String(e?.message || e) }, { status: 500 });
  }
}
