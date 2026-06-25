'use client';

import { FRAMES } from '@/constants/images';
import { motion, useReducedMotion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { bottomCardVariants, circleBottomRightVariants, circleTopLeftVariants, fadeUpVariants, imageCardVariants, staggerContainerVariants, topCardVariants } from './variants';
import { Quote } from 'lucide-react';

function AnimatedStat({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (val) => setCount(Math.floor(val)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <>
      <motion.span
        ref={ref}
        className="text-2xl md:text-3xl font-bold text-primary mb-0.5 tabular-nums"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        +{count}
      </motion.span>
      <span className="text-xs font-semibold text-text-muted">{label}</span>
    </>
  );
}

export function StorySection() {
  const ref = useRef(null);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('about');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pb-16 md:py-24 relative" ref={ref}>
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary-soft/20 to-transparent blur-3xl"
          animate={shouldReduceMotion ? {} : { x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 h-48 w-48 rounded-full bg-gradient-to-tl from-brand/10 to-transparent blur-3xl"
          animate={shouldReduceMotion ? {} : { x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="container mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 relative">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
          className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}
        >
          <motion.span
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            — {t('story.tag')} —
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-heading tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('story.featured_heading')}
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('story.featured_body')}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-primary via-brand to-primary-soft mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-8 shadow-sm border border-primary-border relative overflow-hidden group"
        >
          {/* Gradient border sweep on hover */}
          <motion.div
            className="absolute inset-0 rounded-[32px] md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(122,57,179,0.03), rgba(255,139,119,0.03))',
            }}
          />

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
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Quote size={24} className="text-white/60 mb-3" />
                <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide">
                  {t('story.airport_text')}
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-3 right-3 w-20 h-20 rounded-full bg-white/5 border border-white/10"
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
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
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatedStat target={20} label={t('story.stat_languages')} />
                </motion.div>

                <motion.div
                  className="sm:col-span-2 bg-primary-surface rounded-[24px] p-6 md:p-8 flex items-center h-full relative overflow-hidden"
                  variants={topCardVariants}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.02,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-bl from-primary-mid/10 to-transparent blur-xl" />
                  <p className={`text-sm md:text-base text-primary-heading font-medium leading-relaxed relative ${isRTL ? 'text-right' : ''}`}>
                    {t('story.conviction_text')}
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <motion.div
                  className="order-2 sm:order-1 sm:col-span-2 bg-primary-surface rounded-[24px] p-6 md:p-8 flex items-center h-full relative overflow-hidden"
                  variants={bottomCardVariants}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.02,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="absolute bottom-0 left-0 h-20 w-20 -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-brand/10 to-transparent blur-xl" />
                  <p className={`text-sm md:text-base text-primary-heading font-medium leading-relaxed relative ${isRTL ? 'text-right' : ''}`}>
                    {t('story.unacceptable_text')}
                  </p>
                </motion.div>

                <motion.div
                  className="order-1 sm:order-2 sm:col-span-1 aspect-square rounded-full bg-primary-surface flex flex-col justify-center items-center text-center p-4 max-w-[160px] sm:max-w-none mx-auto w-full"
                  variants={circleBottomRightVariants}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.1,
                    rotate: -5,
                    backgroundColor: "#E8D9F9",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatedStat target={150} label={t('story.stat_partners')} />
                </motion.div>
              </div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
