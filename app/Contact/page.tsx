'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Отправка...');

    const form = e.target as HTMLFormElement;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      setStatus('Спасибо за сообщение! Мы с вами скоро свяжемся. Для быстрого ответа напишите в WhatsApp или Instagram.');
      form.reset();
    } else {
      setStatus('Ошибка отправки. Попробуйте позже.');
    }
  }

  return (
    <div>
      <h1>Оставить заявку</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ваше имя" required />
        <input type="email" name="email" placeholder="Ваш Email" required />
        <textarea name="message" placeholder="Сообщение" required />
        <button type="submit">Отправить</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
