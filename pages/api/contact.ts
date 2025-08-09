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

    if (!RESEND_API_KEY || !TO_EMAIL) {
      // Нет переменных окружения на проде
      return json({ error: 'Email сервис не настроен' }, { status: 500 });
    }

    // Отправляем письмо через REST API Resend (это работает в Workers)
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AI Market <info@aimarket.az>', // домен должен быть подтвержден в Resend
        to: [TO_EMAIL],
        subject: 'Новая заявка с сайта',
        html: `
          <h2>Новая заявка</h2>
          <p><b>Имя:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Телефон:</b> ${phone || '-'}</p>
          <p><b>Услуга:</b> ${service || '-'}</p>
          <p><b>Бюджет:</b> ${budget || '-'}</p>
          <p><b>Сообщение:</b><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
        `,
      }),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      return json({ error: `Ошибка Resend (${r.status}): ${errText}` }, { status: 502 });
    }

    const data = await r.json();
    return json({ ok: true, id: data?.id || null }, { status: 200 });
  } catch (e: any) {
    return json({ error: e?.message || 'Ошибка при отправке письма' }, { status: 500 });
  }
}
