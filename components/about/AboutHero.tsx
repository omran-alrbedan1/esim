'use client';

import { ChevronRight, Globe, Rocket, Wifi, Infinity, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { ABOUT_IMAGES, FRAMES } from '@/constants/images';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import {
  fadeUpVariants,
  staggerContainerVariants,
} from './variants'; 

export default function AboutHero() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('about');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`relative w-full px-4 mt-8 py-8 sm:px-6 lg:px-8 lg:py-20 text-primary-heading overflow-hidden ${isRTL ? 'text-right' : ''}`}>
      <div className="mx-auto max-w-[1140px] relative">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 items-stretch">

          {/* Left Column - Text */}
          <motion.div
            className="flex flex-col justify-between rounded-[36px] bg-primary-surface border border-primary-border p-6 sm:p-10 lg:p-12 shadow-soft relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
          >
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-bl from-primary-mid/10 to-transparent blur-2xl" />

            <motion.div
              className="space-y-4 relative"
              variants={staggerContainerVariants}
            >
              <motion.h1
                className="text-3xl font-bold tracking-tight text-primary-heading sm:text-4xl lg:text-[42px] lg:leading-[1.15]"
                variants={fadeUpVariants}
              >
                <span dangerouslySetInnerHTML={{ __html: t.raw('hero.feature_title') }} />
              </motion.h1>

              <motion.div
                className="h-[3px] w-12 rounded-full bg-brand"
                variants={fadeUpVariants}
              />

              <motion.p
                className="pt-2 text-sm leading-relaxed text-text-muted sm:text-base opacity-90"
                variants={fadeUpVariants}
              >
                {t('hero.feature_body')}
              </motion.p>
            </motion.div>

            <motion.div
              className={`mt-8 inline-flex flex-wrap items-center gap-2 rounded-full p-1.5 max-w-max ${isRTL ? 'flex-row-reverse' : ''}`}
              variants={fadeUpVariants}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/plans" className="button-light button">
                  {t('hero.cta_primary')}
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/how-it-works" className="button button-dark">
                  {t('hero.cta_how')}
                </Link>
              </motion.div>

              <motion.div>
                <Link
                  href="/support"
                  className="group flex items-center gap-1 px-4 py-2 text-xs font-bold text-primary-heading transition hover:opacity-70"
                >
                  <span>{t('hero.cta_learn')}</span>
                  <ChevronRight size={14} className={`transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual - KEEP EXACTLY AS ORIGINAL */}
          <motion.div
            className="relative min-h-[440px] md:min-h-full overflow-hidden rounded-[40px] text-white flex items-center justify-center"
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={FRAMES.frame1}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority
            />

            <div className="w-[92%] h-auto aspect-square relative  select-none pointer-events-none z-10">
              <Image
                src={ABOUT_IMAGES.hero}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain"
                priority
              />

              {/* Floating text card */}
              <motion.div
                initial="hidden"
                animate={shouldReduceMotion ? {} : ["visible", "float"]}
                className={`absolute top-[18%] ${isRTL ? 'right-[6%]' : 'left-[6%]'} bg-white/90 backdrop-blur-md text-primary-heading px-5 py-3 rounded-[20px] shadow-lg max-w-[210px] pointer-events-auto border border-white/20`}
              >
                <div className="flex items-start gap-2">
                  <Sparkles size={14} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-[13px] font-medium leading-snug" dangerouslySetInnerHTML={{ __html: t.raw('hero.graphic_floating') }} />
                </div>
              </motion.div>

              {/* Glowing orb behind globe */}
              <motion.div
                className={`absolute top-18 md:top-4 ${isRTL ? 'left-0 md:left-4' : 'right-0 md:right-4'} z-20`}
                initial="hidden"
                animate={shouldReduceMotion ? {} : ["visible", "pulse"]}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-150" />
                  <Globe size={24} className="text-primary" />
                </div>
              </motion.div>
            </div>

            {/* Side icons - staggered with spring - KEEP EXACTLY AS ORIGINAL */}
            <motion.div
              className={`absolute bottom-18 md:bottom-8 ${isRTL ? 'right-2' : 'left-2'} z-20 flex flex-col gap-2`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              {[
                { icon: <Rocket size={18} className="transform rotate-45" />, label: "5G" },
                { icon: <Wifi size={18} /> },
                { icon: <Infinity size={18} /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: shouldReduceMotion ? { opacity: 0, scale: 0.5 } : {
                      opacity: 0,
                      y: -window.innerHeight * 0.6,
                      rotate: 720,
                      scale: 0.3,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 16,
                        mass: 1.2,
                      },
                    },
                  }}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.15,
                    rotate: 15,
                    backgroundColor: "#9A42E4",
                    transition: { type: "spring", stiffness: 300, damping: 12 },
                  }}
                  className="relative flex items-center justify-center w-7 h-7 md:w-11 md:h-11 rounded-full bg-primary-heading/90 backdrop-blur-sm border border-white/10 text-white shadow-lg group transition-colors duration-200 cursor-pointer"
                >
                  <motion.span
                    className="absolute -top-1 -right-1 flex h-3 w-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                  </motion.span>
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}