'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { containerVariants, itemVariants } from '@/constants/variants';

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('about');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const smoothTextY = useSpring(textY, { stiffness: 120, damping: 35 });
  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 35 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getBlobPath = () => {
    if (isMobile) {
      return isRTL
        ? 'M1440,900 L1440,320 L0,900 Z'
        : 'M0,900 L1440,900 L1440,320 Z';
    }
    if (isRTL) {
      return 'M0,900 L0,780 C100,650 250,860 400,700 C550,540 650,780 800,620 C950,460 1080,700 1200,540 C1320,380 1400,500 1440,280 L1440,900 Z';
    }
    return 'M1440,900 L1440,780 C1340,650 1190,860 1040,700 C890,540 790,780 640,620 C490,460 360,700 240,540 C120,380 40,500 0,280 L0,900 Z';
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] w-full overflow-hidden px-6 py-24 md:px-12 lg:px-24 flex flex-col justify-center font-sans bg-white"
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <motion.svg
          initial={{ clipPath: isRTL ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' }}
          animate={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d={getBlobPath()} className="fill-theme-blob-3" />
        </motion.svg>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ y: smoothTextY, opacity: smoothOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-center gap-3 mb-3" variants={itemVariants}>
            <motion.div
              className="w-10 h-[1px] bg-theme-brand/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'right' : 'left' }}
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-theme-brand">
              {t('title')}
            </span>
            <motion.div
              className="w-10 h-[1px] bg-theme-brand/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'left' : 'right' }}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 text-theme-strong"
          >
            {t.rich('title', {
              green: (chunks) => <span className="text-theme-brand">{chunks}</span>
            })}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-medium text-theme-muted"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
