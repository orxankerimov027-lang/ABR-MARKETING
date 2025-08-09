import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, budget, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Заполните имя, email и сообщение' });
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

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('RESEND ERROR:', err?.message || err);
    return res.status(500).json({ error: 'Ошибка при отправке письма' });
  }
}
