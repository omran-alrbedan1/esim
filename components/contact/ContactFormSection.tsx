'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactFormSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
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
      if (res.ok) { setStatus('success'); (e.target as HTMLFormElement).reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  const infoItems = [
    { icon: Mail, key: 'email', value: t('info.email') },
    { icon: Phone, key: 'phone', value: t('info.phone') },
    { icon: MapPin, key: 'address', value: t('info.address') },
  ];

  return (
    <section id="contact-form" className="py-28 bg-[#F7F5FB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Form */}
          <div>
            <p className="text-purple-600 text-xs font-bold tracking-[0.18em] uppercase mb-4">{t('tag')}</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight text-[#20142C] mb-6"
              dangerouslySetInnerHTML={{ __html: t.raw('title') }}
            />
            <p className="text-[#7A6B85] leading-relaxed mb-10">{t('subtitle')}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#7A6B85] mb-2">
                  {t('form.name')}
                </label>
                <input
                  id="name" name="name" required
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-4 py-3 bg-white border border-[#E8E0F0] rounded-xl text-sm text-[#20142C] placeholder:text-[#B0A3BC] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#7A6B85] mb-2">
                  {t('form.email')}
                </label>
                <input
                  id="email" name="email" type="email" required
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-white border border-[#E8E0F0] rounded-xl text-sm text-[#20142C] placeholder:text-[#B0A3BC] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#7A6B85] mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message" name="message" rows={5} required
                  placeholder={t('form.messagePlaceholder')}
                  className="w-full px-4 py-3 bg-white border border-[#E8E0F0] rounded-xl text-sm text-[#20142C] placeholder:text-[#B0A3BC] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                {t('form.submit')} <Send size={15} />
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-xl px-4 py-3"
                >
                  <CheckCircle size={16} /> {t('form.success')}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3"
                >
                  {t('form.error')}
                </motion.p>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-white border border-[#E8E0F0] rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#20142C] mb-6">{t('info.title')}</h3>
              <div className="space-y-5">
                {infoItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-purple-600 shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#7A6B85] mb-0.5">
                          {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                        </p>
                        <p className="text-sm text-[#20142C]">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E0F0]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A6B85] mb-4">{t('social.title')}</p>
                <div className="flex gap-3">
                  {[
                    { label: t('social.facebook'), href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                    { label: t('social.instagram'), href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                    { label: t('social.linkedin'), href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-[#F0E9FF] flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
