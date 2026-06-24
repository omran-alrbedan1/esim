'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Headphones, Plus, X } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cardReveal, fadeUp, fadeUpReduced, springSoft, staggerParent, viewportOnce } from './motion';

export function HomeFaq() {
  const t = useTranslations('home');
  const faqs = t.raw('faq.items') as Array<{ q: string; a: string }>;
  const shouldReduceMotion = useReducedMotion();
  const revealVariant = shouldReduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section className="relative px-4 pb-24 pt-32 text-text-primary sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-2 text-center"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-primary-ink sm:text-[38px]">
          {t('faq.title')}
        </h2>
        <p className="text-sm text-primary-muted sm:text-base">{t('faq.description')}</p>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 grid max-w-[1140px] items-start gap-4 md:grid-cols-2"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {faqs.map(({ q, a }, index) => (
          <motion.details
            className="group overflow-hidden rounded-[20px] border border-primary/10 bg-primary-surface/50 px-6 py-4 shadow-[0_4px_16px_rgba(122,57,179,0.02)] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] open:bg-primary-surface/80"
            key={q}
            variants={shouldReduceMotion ? fadeUpReduced : cardReveal}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    transform: 'translate3d(0, -4px, 0)',
                    boxShadow: '0 18px 42px rgba(122,57,179,0.1)',
                  }
            }
            transition={{ ...springSoft, delay: shouldReduceMotion ? 0 : index * 0.025 }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold text-primary-deep select-none [&::-webkit-details-marker]:hidden">
              <span>{q}</span>
              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-open:rotate-90">
                <Plus size={15} strokeWidth={2.5} className="absolute inset-0 m-auto scale-100 opacity-100 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:scale-70 group-open:opacity-0" />
                <X size={15} strokeWidth={2.5} className="absolute inset-0 m-auto scale-70 opacity-0 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:scale-100 group-open:opacity-100" />
              </div>
            </summary>
            <p className="mt-3 border-t border-primary/5 pt-2 text-[14px] font-normal leading-[22px] text-primary-copy">
              {a}
            </p>
          </motion.details>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <Link
          href="/contact"
          className='button button-dark'
        >
          <Headphones size={16} className="text-white" />
          <span className="text-white">{t('faq.cta')}</span>
          <span className="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
