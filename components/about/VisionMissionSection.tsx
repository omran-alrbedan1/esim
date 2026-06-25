'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { FRAMES } from '@/constants/images';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function MissionContent({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="text-center px-6 pt-24 pb-10 md:px-12 md:pb-12 h-full flex flex-col justify-center relative z-10">
      <h3 className="text-[22px] md:text-[24px] font-bold text-primary mb-4 tracking-tight leading-snug">
        {t('mission.heading')}
      </h3>
      <p className="text-text-primary text-sm md:text-base leading-relaxed font-normal max-w-[460px] mx-auto">
        {t('mission.body_simple')}
      </p>
    </div>
  );
}

function VisionContent({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="text-center px-6 pt-22 pb-10 md:px-12 md:pb-12 h-full flex flex-col justify-center relative z-10">
      <h3 className="text-[22px] md:text-[24px] font-bold text-primary mb-4 tracking-tight leading-snug">
        {t('vision.heading')}
      </h3>
      <p className="text-text-primary text-sm md:text-base leading-relaxed font-normal max-w-[460px] mx-auto">
        {t('vision.body_simple')}
      </p>
    </div>
  );
}

export function VisionMissionSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className={` -my-32 flex items-center justify-center min-h-screen ${isRTL ? 'text-right' : ''}`}>
      <div className="container mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 items-start">

          {/* Mission Card */}
     {/* Mission Card */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={cardVariants}
  className="relative w-full aspect-[540/330] shadow-soft"
>
  {/* Background Frame Image */}
  <Image
    src={FRAMES.frame4}
    alt="Mission Background Frame"
    fill
    className="object-contain scale-y-150 md:scale-y-100"
    priority
  />
  
  {/* Mission Title */}
  <div className="absolute -top-[15px] md:top-10 left-1/2 -translate-x-1/2 z-20 px-9 py-1.5 rounded-[14px]">
    <span className="text-[15px] font-bold text-black uppercase tracking-wide block">
      {t('mission.title')}
    </span>
  </div>

  {/* Mission Content */}
  <MissionContent t={t} />
</motion.div>

          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: 0.1 }}
            className="relative w-full aspect-[540/330] shadow-soft"
          >
            {/* Background Frame Image */}
            <Image
              src={FRAMES.frame4}
              alt="Vision Background Frame"
              fill
              className="object-contain scale-y-150 md:scale-y-100"
              priority
            />
            
            {/* Vision Title */}
            <div className="absolute -top-[15px] md:top-10 left-1/2 -translate-x-1/2 z-20 px-9 py-1.5 rounded-[14px]">
              <span className="text-[15px] font-bold text-black uppercase tracking-wide block">
                {t('vision.title')}
              </span>
            </div>

            {/* Vision Content */}
            <VisionContent t={t} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}