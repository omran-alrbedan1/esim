'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ABOUT_IMAGES } from '@/constants/images';

export default function AboutMission() {
  const t = useTranslations('about');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const textRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: 64,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <motion.section
      className="py-20 px-4 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        {/* Mission Section - Image Left, Text Right */}
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={itemVariants}
        >
          {/* Image - Left Side */}
          <motion.div
            className="relative h-[420px] "
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={ABOUT_IMAGES.mission}
              alt={t('mission.title')}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Text - Right Side */}
          <motion.div variants={textVariants}>
            <h3 className="mb-4 text-3xl md:text-4xl font-bold text-theme-strong">
              {t('mission.title')}
            </h3>
            <motion.div
              className="h-px bg-theme-brand mb-6 rounded-full"
              variants={lineVariants}
            />
            <p className="text-base md:text-lg leading-relaxed text-theme-muted">
              {t('mission.body')}
            </p>
          </motion.div>
        </motion.div>

        {/* Vision Section - Text Left, Image Right */}
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={itemVariants}
        >
          {/* Text - Left Side */}
          <motion.div variants={textRightVariants}>
            <h3 className="mb-4 text-3xl md:text-4xl font-bold text-theme-strong">
              {t('vision.title')}
            </h3>
            <motion.div
              className="h-px bg-theme-brand mb-6 rounded-full"
              variants={lineVariants}
            />
            <p className="text-base md:text-lg leading-relaxed text-theme-muted">
              {t('vision.body')}
            </p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="relative h-[380px]"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={ABOUT_IMAGES.vision}
              alt={t('vision.title')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}