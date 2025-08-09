export const config = { runtime: 'edge' };

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Заполните имя, email и сообщение' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await resend.emails.send({
      from: 'AI Market <info@aimarket.az>', // домен должен быть подтверждён в Resend
      to: process.env.TO_EMAIL as string,
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
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('RESEND ERROR:', err?.message || err);
    return new Response(JSON.stringify({ error: 'Ошибка при отправке письма' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
