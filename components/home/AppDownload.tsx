'use client';

import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useRef } from 'react';
import {
  Download,
  Users,
  UserCheck,
  Star,
} from 'lucide-react';
import { AppDownloadcardVariants } from '@/constants/variants';

const iconMap = {
  'App Downloads': Download,
  'Happy Clients': Users,
  'Active Accounts': UserCheck,
  'Total App Rates': Star,
  'تحميل التطبيق': Download,
  'عميل سعيد': Users,
  'حساب نشط': UserCheck,
  'تقييم للتطبيق': Star,
};

export default function AppDownload() {
  const t = useTranslations('home.appDownload');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  const stats = t.raw('stats') as Array<{
    value: string;
    label: string;
  }>;



  return (
    <section ref={sectionRef} className="w-full bg-theme-blob-3 text-[#111111] font-sans relative overflow-hidden">
      <motion.div 
        className="pt-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-[36px] font-bold text-center text-[#1A1E16] tracking-tight mb-24"
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.label as keyof typeof iconMap] || Download;
            return (
              <motion.div
                key={idx}
                custom={idx}
                //@ts-ignore
                variants={AppDownloadcardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative rounded-2xl bg-white p-7 pt-9 pb-9 shadow-[0_20px_50px_rgba(0,0,0,0.02)] text-left rtl:text-right"
              >
                <div className={`absolute top-0 -translate-y-1/2 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#919970] text-white border-[4px] border-white shadow-sm ${
                  isRTL ? 'left-6' : 'right-6'
                }`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <span className="text-[32px] font-bold text-[#111111] block leading-none">
                  {stat.value}
                </span>
                
                <p className="mt-2 text-[12px] font-medium text-[#666666]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}