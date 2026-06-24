'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { fadeUp, fadeUpReduced, premiumEase, staggerParent, viewportOnce } from './motion';

export function HomeTrustedBrands() {
  const t = useTranslations('home');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const brands = t.raw('trustedBrands.brands') as string[];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#70428E] px-4 pt-8 pb-14 text-white sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1180px]"
        variants={shouldReduceMotion ? fadeUpReduced : fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Title */}
        <p className="mb-6 text-center text-[13px] font-normal tracking-wide text-white/40">
          {t('trustedBrands.title')}
        </p>

        {/* Brands Container with smooth GPU-accelerated scaleX animation */}
        <motion.div
          className="overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ 
            duration: 0.9, // Slightly increased for a premium, smooth feel
            ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (easeOutExpo)
            delay: 0.1
          }}
          style={{ 
            originX: isRTL ? 1 : 0 // Correct way to pass transform origin to Framer Motion
          }}
        >
          {/* Brands List */}
          <motion.div
            className={`flex items-center justify-between gap-x-4 text-[15px] font-semibold text-white sm:text-base ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {brands.map((brand) => (
              <motion.span
                key={brand}
                className="whitespace-nowrap rounded-full px-2 py-1 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/5"
                variants={shouldReduceMotion ? fadeUpReduced : {
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.58, ease: premiumEase },
                  },
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -2, opacity: 1 }}
                transition={{ duration: 0.24, ease: premiumEase }}
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}