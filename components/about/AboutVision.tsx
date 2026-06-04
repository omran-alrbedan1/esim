'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { whyChooseUsContainerVariants, whyChooseUsHeaderVariants, aboutVisionCardVariants } from '@/constants/variants';

const VALUE_ICONS = [
  {
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
  {
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
  {
    path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
  {
    path: 'M9 12l2 2 4-5m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
];

export default function AboutVision() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('about');
  const values = t.raw('values.items') as Array<{ title: string; description: string }>;

  return (
    <motion.section
      className="w-full py-20 md:py-28 overflow-hidden bg-theme-blob-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={whyChooseUsHeaderVariants}
        >
          <motion.div className="flex items-center gap-3 mb-2">
            <motion.div
              className="w-8 h-[1px] bg-theme-brand/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'left' : 'right' }}
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-theme-brand">
              {t('values.title')}
            </span>
            <motion.div
              className="w-8 h-[1px] bg-theme-brand/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'right' : 'left' }}
            />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1 text-theme-strong">
            {t('values.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={whyChooseUsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center gap-4"
              variants={aboutVisionCardVariants(index)}
              whileHover={{ y: -4, transition: { type: 'spring' as const, stiffness: 300 } }}
            >
              {/* Icon - Top Center */}
              <motion.div
                className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full ${VALUE_ICONS[index].bg} flex items-center justify-center group-hover:bg-theme-brand group-hover:text-white transition-all duration-500`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' as const, stiffness: 260, damping: 20, delay: 0.3 + 0.2 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={VALUE_ICONS[index].path} />
                </svg>
              </motion.div>

              {/* Content - Below Icon */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
              >
                <h3 className="text-base font-bold mb-1 text-theme-strong group-hover:text-theme-brand transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-theme-muted">
                  {value.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}