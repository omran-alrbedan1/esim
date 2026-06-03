'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
        }),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="mt-12 grid gap-12 md:grid-cols-2">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('form.name')}</label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('form.email')}</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('form.message')}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <button type="submit" className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700">
          {t('form.submit')}
        </button>

        {status === 'success' && <p className="text-sm text-green-600">{t('form.success')}</p>}
        {status === 'error' && <p className="text-sm text-red-600">{t('form.error')}</p>}
      </form>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">{t('info.title')}</h2>
        <p className="mt-4 text-sm text-gray-600">{t('info.email')}</p>
      </div>
    </div>
  );
}