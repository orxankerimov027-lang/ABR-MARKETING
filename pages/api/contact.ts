// Работает на Cloudflare Pages (Workers) благодаря nodejs_compat; Node API не используем.
export const config = {
  api: {
    bodyParser: false, // мы читаем FormData вручную
  },
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    // Превращаем ReadableStream в FormData
    // В Pages/Workers у req.body — ReadableStream; в Node — уже парсится, но мы унифицируем через Request
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers as any,
      body: req, // прокидываем поток
    });

    const form = await (request as any).formData();
    const data = Object.fromEntries(form.entries()) as Record<string, string>;

    const to = 'info@aimarket.az';
    const from = process.env.MAIL_FROM || 'no-reply@aimarket.az';
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    const html = `
      <h2>Новая заявка с сайта AI Market AZ</h2>
      <p><b>Имя:</b> ${escapeHTML(data.name || '')}</p>
      <p><b>Email:</b> ${escapeHTML(data.email || '')}</p>
      <p><b>Телефон:</b> ${escapeHTML(data.phone || '')}</p>
      <p><b>Услуга:</b> ${escapeHTML(data.service || '')}</p>
      <p><b>Бюджет:</b> ${escapeHTML(data.budget || '')}</p>
      <p><b>Сообщение:</b><br/>${escapeHTML(data.message || '').replace(/\n/g, '<br/>')}</p>
    `;

    if (!RESEND_API_KEY) {
      res.status(500).json({ ok: false, error: 'RESEND_API_KEY not set' });
      return;
    }

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject: 'Новая заявка — AI Market AZ',
        html,
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      res.status(500).json({ ok: false, error: text });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unexpected error' });
  }
}

function escapeHTML(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
