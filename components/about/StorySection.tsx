'use client';

import { FRAMES } from '@/constants/images';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { bottomCardVariants, circleBottomRightVariants, circleTopLeftVariants, fadeUpVariants, imageCardVariants, staggerContainerVariants, topCardVariants } from './variants';

export function StorySection() {
  const ref = useRef(null);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('about');

  return (
    <section className="py-16 md:py-24 bg-page-bg-alt" ref={ref}>
      <div className="container mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
          className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            — {t('story.tag')} —
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-heading tracking-tight mb-6">
            {t('story.featured_heading')}
          </h2>
          <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
            {t('story.featured_body')}
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary to-brand mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-8 shadow-sm border border-primary-border relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            <motion.div
              className="lg:col-span-5 rounded-[24px] md:rounded-[32px] p-8 md:p-10 text-white flex items-center relative overflow-hidden shadow-inner"
              style={{
                backgroundImage: `url(${FRAMES.frame2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={imageCardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.p
                className="relative z-10 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t('story.airport_text')}
              </motion.p>
            </motion.div>

            <motion.div
              className="lg:col-span-7 flex flex-col gap-6 justify-between"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <motion.div
                  className="sm:col-span-1 aspect-square rounded-full bg-primary-surface flex flex-col justify-center items-center text-center p-4 max-w-[160px] sm:max-w-none mx-auto w-full"
                  variants={circleTopLeftVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="text-2xl md:text-3xl font-bold text-primary mb-0.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    +20
                  </motion.span>
                  <span className="text-xs font-semibold text-text-muted">{t('story.stat_languages')}</span>
                </motion.div>

                <motion.div
                  className="sm:col-span-2 bg-primary-surface rounded-[24px] p-6 md:p-8 flex items-center h-full"
                  variants={topCardVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                >
                  <p className={`text-sm md:text-base text-primary-heading font-medium leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {t('story.conviction_text')}
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <motion.div
                  className="order-2 sm:order-1 sm:col-span-2 bg-primary-surface rounded-[24px] p-6 md:p-8 flex items-center h-full"
                  variants={bottomCardVariants}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                >
                  <p className={`text-sm md:text-base text-primary-heading font-medium leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {t('story.unacceptable_text')}
                  </p>
                </motion.div>

                <motion.div
                  className="order-1 sm:order-2 sm:col-span-1 aspect-square rounded-full bg-primary-surface flex flex-col justify-center items-center text-center p-4 max-w-[160px] sm:max-w-none mx-auto w-full"
                  variants={circleBottomRightVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="text-2xl md:text-3xl font-bold text-primary mb-0.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  >
                    +150
                  </motion.span>
                  <span className="text-xs font-semibold text-text-muted">{t('story.stat_partners')}</span>
                </motion.div>
              </div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
