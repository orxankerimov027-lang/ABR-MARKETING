import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await resend.emails.send({
      from: process.env.MAIL_FROM || 'no-reply@aimarket.az',
      to: process.env.TO_EMAIL || 'info@aimarket.az',
      subject: 'Новое сообщение с формы',
      html: `
        <h2>Новое сообщение</h2>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Сообщение:</b> ${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
