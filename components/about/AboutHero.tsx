'use client';

import { ChevronRight, Globe, Rocket, Wifi, Infinity } from 'lucide-react';
import Image from 'next/image';
import { ABOUT_IMAGES, FRAMES } from '@/constants/images';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutHero() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('about');

  return (
    <section className={`w-full px-4 mt-12 py-12 sm:px-6 lg:px-8 lg:py-20 text-primary-heading ${isRTL ? 'text-right' : ''}`}>
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 items-stretch">
          <motion.div
            className="flex flex-col justify-between rounded-[36px] bg-primary-surface border border-primary-border p-6 sm:p-10 lg:p-12 shadow-soft"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-3xl font-bold tracking-tight text-primary-heading sm:text-4xl lg:text-[42px] lg:leading-[1.15]"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="hero-gradient-text" dangerouslySetInnerHTML={{ __html: t.raw('hero.feature_title') }} />
              </motion.h1>

              <motion.div
                className="h-[3px] w-12 rounded-full bg-brand"
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: {
                    opacity: 1,
                    scaleX: 1,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              />

              <motion.p
                className="pt-2 text-sm leading-relaxed text-text-muted sm:text-base opacity-90"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {t('hero.feature_body')}
              </motion.p>
            </div>

            <motion.div
              className={`mt-8 inline-flex flex-wrap items-center gap-2 rounded-full p-1.5 max-w-max ${isRTL ? 'flex-row-reverse' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <Link
                href="/plans"
                className="button-light button"
              >
                {t('hero.cta_primary')}
              </Link>

              <Link
                href="/how-it-works"
                className="button button-dark"
              >
                {t('hero.cta_how')}
              </Link>

              <Link
                href="/support"
                className="group flex items-center gap-1 px-4 py-2 text-xs font-bold text-primary-heading transition hover:opacity-70"
              >
                <span>{t('hero.cta_learn')}</span>
                <ChevronRight size={14} className={`transition-transform ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
              </Link>
            </motion.div>
          </motion.div>
          <div className="relative min-h-[440px] md:min-h-full overflow-hidden rounded-[40px] text-white flex items-center justify-center">

            <Image
              src={FRAMES.frame1}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain"
              priority
            />

            <div className="w-[92%] h-auto aspect-square relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] select-none pointer-events-none z-10">
              <Image
                src={ABOUT_IMAGES.hero}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain"
                priority
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className={`absolute top-[18%] ${isRTL ? 'right-[6%]' : 'left-[6%]'} bg-white text-primary-heading px-5 py-3 rounded-[20px] shadow-lg max-w-[210px] pointer-events-auto`}
              >
                <p className="text-[13px] font-medium leading-snug" dangerouslySetInnerHTML={{ __html: t.raw('hero.graphic_floating') }} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className={`absolute top-20  md:top-4 -right-2 md:right-4 z-20 p-3 rounded-2xl`}
              >
              <div className="relative">
                <Globe size={24} className="text-primary" />
              </div>
            </motion.div>

            <motion.div
              className={`absolute bottom-18 md:bottom-8 left-0 md:left-2 z-20 flex flex-col gap-3`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.25,
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
                    hidden: {
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
                        damping: 20,
                        mass: 1.2,
                        duration: 1.8,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 15,
                    backgroundColor: "#9A42E4",
                    transition: { type: "spring", stiffness: 300, damping: 12 },
                  }}
                  className="relative flex items-center justify-center w-7 h-7 md:w-11 md:h-11 rounded-full bg-primary-heading/90 backdrop-blur-sm border border-white/10 text-white shadow-lg group transition-colors duration-200"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-mid/0 via-primary-mid/20 to-brand/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  />
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
