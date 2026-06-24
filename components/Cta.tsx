'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Apple, Play } from 'lucide-react';
import { HOME_IMAGES } from '@/constants/images';
import { fadeUp, fadeUpReduced, premiumEase, springSoft, staggerParent, viewportOnce } from './home/motion';

export function Cta() {
  const t = useTranslations('home');
  const shouldReduceMotion = useReducedMotion();
  const revealVariant = shouldReduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section className="relative -mb-40  overflow-hidden bg-[#684086] px-4 py-16 sm:px-6 sm:pb-40 lg:px-8 lg:py-24 lg:pb-56">
      {/* Decorative Orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[8%] top-10 h-6 w-6 rounded-full bg-white/80 blur-[2px]" />
        <div className="absolute right-[30%] top-32 h-8 w-8 rounded-full bg-white/40 blur-[6px]" />
        <div className="absolute bottom-24 left-[5%] h-7 w-7 rounded-full bg-white/90 blur-[1px]" />
        <div className="absolute right-[8%] bottom-12 h-5 w-5 rounded-full bg-white/30 blur-[4px]" />
        <div className="absolute left-[3%] top-1/2 h-10 w-10 rounded-full bg-white/20 blur-[8px]" />
        <div className="absolute right-[5%] top-1/3 h-12 w-12 rounded-full bg-white/10 blur-[10px]" />
      </div>

      {/* Decorative SVG Lines */}
      <svg className="pointer-events-none absolute right-0 top-4 hidden h-auto w-40 text-white/15 sm:block md:w-56" viewBox="0 0 220 80" fill="none">
        <path d="M0 10 H160 L185 35 H220 M30 25 H150 L170 45 H200 M80 45 H140 L155 60 H190" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="220" cy="35" r="3" fill="currentColor" />
        <circle cx="200" cy="45" r="3" fill="currentColor" />
        <circle cx="190" cy="60" r="3" fill="currentColor" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1140px]">
        <motion.div
          className="relative grid items-center gap-12 overflow-hidden rounded-[32px] bg-primary-surface p-6 shadow-[0_24px_64px_rgba(57,11,89,0.16)] sm:rounded-[40px] sm:p-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]"
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          whileHover={shouldReduceMotion ? undefined : { y: -4, boxShadow: '0 30px 72px rgba(57,11,89,0.2)' }}
          transition={springSoft}
        >
          {/* Subtle Background Glow Radial Shadows */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 left-1/4 h-36 w-72 rounded-full bg-white/80 blur-3xl" />

          {/* Left Text Block */}
          <motion.div className="relative z-10 order-2 text-center md:order-1 md:text-left rtl:md:text-right" variants={staggerParent}>
            <motion.h2 variants={revealVariant} className="text-[26px] font-extrabold leading-tight tracking-tight text-primary-ink sm:text-[36px]">
              {t('cta.cardTitle')}
            </motion.h2>
            <motion.p variants={revealVariant} className="mx-auto mt-4 max-w-[540px] text-[14px] font-normal leading-relaxed text-primary-copy md:mx-0">
              {t('cta.cardDesc')}
            </motion.p>

            {/* Check Device Module */}
            <motion.div variants={revealVariant} className="relative z-10 mt-6 inline-flex items-center gap-3 rounded-full border border-primary/5 bg-white p-1.5 pr-4 shadow-[0_4px_12px_rgba(122,57,179,0.04)]">
              <motion.button
                className="button button-dark rounded-full px-4 py-2 text-xs font-semibold"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={springSoft}
              >
                {t('cta.checkDevice')}
              </motion.button>
              <Link href="/device-support" className="group inline-flex items-center gap-1 text-xs font-bold text-primary-ink transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-75">
                <span>{t('cta.learnMore')}</span>
              </Link>
            </motion.div>

            {/* Badges Container */}
            <motion.div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3.5 md:justify-start" variants={staggerParent}>
              <StoreButton shouldReduceMotion={shouldReduceMotion} icon="play" eyebrow={t('cta.getItOn')} label={t('cta.googlePlay')} />
              <StoreButton shouldReduceMotion={shouldReduceMotion} icon="apple" eyebrow={t('cta.downloadOn')} label={t('cta.appStore')} />
            </motion.div>
          </motion.div>

          {/* Right Image Block - INCREASED SIZE ON MOBILE */}
          <div className="relative hidden md:flex order-1 -mb-24 md:mb-0  h-full min-h-[300px] w-full items-center justify-center overflow-visible md:order-2 md:min-h-0">
            <motion.div
              className="relative w-full rtl:mr-24 ltr:-mr-24 max-w-[400px] sm:max-w-[440px] md:absolute md:right-[-20px] md:w-[125%] md:max-w-none lg:right-[-40px]"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src={HOME_IMAGES.decorate}
                alt="Net Sim App Visuals"
                width={580}
                height={360}
                className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(57,11,89,0.12)]"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StoreButton({
  shouldReduceMotion,
  icon,
  eyebrow,
  label,
}: {
  shouldReduceMotion: boolean | null;
  icon: 'play' | 'apple';
  eyebrow: string;
  label: string;
}) {
  const Icon = icon === 'play' ? Play : Apple;

  return (
    <motion.a
      href="#"
      className="flex h-12 w-[156px] items-center gap-2.5 rounded-xl bg-store-bg px-3.5 text-white shadow-[0_14px_28px_rgba(17,17,17,0.18)] transition-shadow duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_38px_rgba(17,17,17,0.26)] sm:h-13 sm:w-[164px]"
      variants={shouldReduceMotion ? fadeUpReduced : fadeUp}
      whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.015 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.965 }}
      transition={springSoft}
    >
      <Icon size={icon === 'play' ? 20 : 22} className="shrink-0 fill-white text-white" />
      <span className={`${icon === 'play' ? 'uppercase tracking-wider' : 'tracking-normal'} text-[9px] font-medium leading-none text-white/70`}>
        {eyebrow} <br />
        <b className={`${icon === 'play' ? 'tracking-normal lowercase first-letter:uppercase' : 'tracking-tight'} text-[13px] font-bold text-white sm:text-[14px]`}>
          {label}
        </b>
      </span>
    </motion.a>
  );
}