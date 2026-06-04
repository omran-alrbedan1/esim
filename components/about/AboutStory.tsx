"use client";

import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { aboutTextVariants, aboutStoryImageVariants, aboutBadgeVariants } from './variants';

export default function AboutStory() {
  const t = useTranslations('about');


  return (
    <motion.section
      className="w-full py-20 md:py-28 bg-[#F9F9F9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div variants={aboutBadgeVariants} initial="hidden">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-theme-brand mb-3 inline-block">
                {t('story.title')}
              </h3>
            </motion.div>
            <motion.h2
              variants={aboutTextVariants}
              initial="hidden"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-theme-strong mb-4"
            >
              {t('story.heading')}
            </motion.h2>
            <motion.p
              variants={aboutTextVariants}
              initial="hidden"
              className="text-sm text-theme-muted leading-relaxed mb-6"
            >
              {t('story.body')}
            </motion.p>
          </div>

          <motion.div
            variants={aboutStoryImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-2xl overflow-hidden shadow-lg relative h-64 sm:h-80 lg:h-96"
          >
            <Image src="/images/home/about-sample.jpg" alt={t('story.heading')} fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
