export const runtime = 'edge';

import { Resend } from 'resend';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Инициализация Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const budget = formData.get('budget');
    const message = formData.get('message');

    console.log('📩 Получена заявка:', { name, email, phone, service, budget, message });

    // Отправка письма
    await resend.emails.send({
      from: process.env.MAIL_FROM || 'no-reply@aimarket.az',
      to: 'info@aimarket.az',
      subject: 'Новая заявка с сайта AIMarket.az',
      html: `
        <h2>Новая заявка с формы</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Услуга:</strong> ${service}</p>
        <p><strong>Бюджет:</strong> ${budget}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Ошибка отправки письма:', err);
    return res.status(500).json({ error: 'Ошибка отправки' });
  }
}
