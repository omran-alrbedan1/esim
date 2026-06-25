'use client';

import { ChevronRight, Globe, Rocket, Wifi, Infinity as InfinityIcon } from 'lucide-react';
import Image from 'next/image';
import { DEVICE_SUPPORT_IMAGES, FRAMES } from '@/constants/images';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroItemFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const iconStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.4 },
  },
};

const iconItem: Variants = {
  hidden: { opacity: 0, y: 20, rotate: 360, scale: 0.3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 1,
    },
  },
};

const floatingText: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  float: {
    y: [0, -6, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
  },
};

export default function DeviceSupportHero() {
  return (
    <section className="w-full px-4 mt-12 py-12 sm:px-6 lg:px-8 lg:py-20 text-[#1A0B2E]">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 items-stretch">
          <FeatureCard />
          <GraphicCard />
        </div>
      </div>
    </section>
  );
}

export function FeatureCard() {
  const t = useTranslations('deviceSupport.hero');

  return (
    <motion.div
      className="flex flex-col justify-between rounded-[36px] bg-[#FAF4FF] border border-[#F1E7FC] p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(107,68,143,0.02)]"
      variants={heroStagger}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-4">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-[#1A0B2E] sm:text-4xl lg:text-[42px] lg:leading-[1.15]"
          variants={heroItem}
        >
          {t('titleLine1')} <br />
          <span className="bg-gradient-to-r from-[#9A42E4] to-[#6A25A5] bg-clip-text text-transparent">
            {t('titleLine2')}
          </span>
        </motion.h1>

        <motion.div
          className="h-[3px] w-12 rounded-full bg-[#FF4D80]"
          variants={heroItemFast}
          initial="hidden"
          animate="visible"
        />

        <motion.p
          className="pt-2 text-sm leading-relaxed text-[#544665] sm:text-base opacity-90"
          variants={heroItemFast}
        >
          {t('description')}
        </motion.p>
      </div>

      <motion.div
        className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#EFE5FA] bg-white p-1.5 shadow-sm max-w-max"
        variants={heroItem}
      >
        <Link
          href="/supported-devices"
          className="button button-dark bg-[#1A0B2E] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.97]"
        >
          {t('primaryCta')}
        </Link>

        <Link
          href="/support"
          className="group flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#1A0B2E] transition hover:opacity-70"
        >
          <span>{t('secondaryCta')}</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ChevronRight size={14} />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function GraphicCard() {
  const t = useTranslations('deviceSupport.hero');

  return (
    <div className="relative min-h-[440px] md:min-h-full overflow-hidden rounded-[40px] text-white flex items-center justify-center">

      <Image
        src={FRAMES.frame1}
        alt={t('backgroundAlt')}
        fill
        sizes="(max-w-md) 100vw, 500px"
        className="object-contain"
        priority
      />

      <motion.div
        className="w-full h-auto aspect-square flex items-center relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] select-none pointer-events-none z-10"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={DEVICE_SUPPORT_IMAGES.hero}
          alt={t('imageAlt')}
          height={250}
          width={250}
          sizes="(max-w-md) 50vw, 350px"
          className="object-contain mx-auto"
        />

        <motion.div
          variants={floatingText}
          initial="hidden"
          animate={["visible", "float"]}
          className="absolute top-[22%] left-[12%] bg-white text-[#1A0B2E] px-5 py-2 rounded-[20px] shadow-lg max-w-[210px] pointer-events-auto"
        >
          <p className="text-[13px] font-medium leading-snug">
            {t('floatingPrefix')} <span className="text-[#9A42E4] font-bold">{t('floatingHighlight')}</span>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, rotate: -20 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-6 right-4 z-20 p-3 rounded-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <Globe size={24} className="text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-2 z-20 flex flex-col gap-3"
        variants={iconStagger}
        initial="hidden"
        animate="visible"
      >
        {[
          { icon: <Rocket size={18} />, hoverRotate: 45 },
          { icon: <Wifi size={18} />, hoverRotate: 0 },
          { icon: <InfinityIcon size={18} />, hoverRotate: 180 },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={iconItem}
            whileHover={{
              scale: 1.2,
              rotate: item.hoverRotate,
              backgroundColor: "#9A42E4",
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#1A0B2E]/90 backdrop-blur-sm border border-white/10 text-white shadow-lg cursor-pointer transition-colors duration-200"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9A42E4]/0 via-[#9A42E4]/20 to-[#FF4D80]/0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.22 }}
            />
            {item.icon}
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
