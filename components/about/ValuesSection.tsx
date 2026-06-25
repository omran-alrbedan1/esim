'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Shield, Globe, Zap, HeadphonesIcon, Sparkles } from 'lucide-react';
import { valueCardVariants } from './variants';

const iconMap = [Shield, Globe, Zap, HeadphonesIcon];

export function ValuesSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const shouldReduceMotion = useReducedMotion();
  const values = t.raw('values.items') as Array<{ title: string; description: string }>;

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${isRTL ? 'text-right' : ''}`}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary-surface/30 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/3 h-40 w-40 rounded-full bg-primary-mid/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-brand/5 blur-3xl" />

      <div className="container mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={14} />
            {t('values.title')}
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-heading tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            What We Stand For
          </motion.h2>
          <motion.div
            className="h-[3px] w-16 bg-gradient-to-r from-primary to-brand mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const IconComponent = iconMap[i % iconMap.length];
            return (
              <motion.div
                key={i}
                custom={i}
                variants={valueCardVariants(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={shouldReduceMotion ? {} : "hover"}
                className="group relative bg-white rounded-[24px] p-7 shadow-sm border border-primary-border/60 overflow-hidden cursor-default"
              >
                <motion.div
                  className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(122,57,179,0.03), rgba(255,139,119,0.02))',
                  }}
                />

                <motion.div
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-brand to-primary-soft origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                />

                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-surface group-hover:bg-primary/10 transition-colors duration-300">
                    <IconComponent size={22} className="text-primary" />
                  </div>

                  <h3 className="text-[17px] font-bold text-primary-heading mb-2 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
