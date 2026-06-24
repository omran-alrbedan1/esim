//@ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Wallet, 
  Smartphone, 
  Network, 
  QrCode, 
  Percent, 
  MapPin 
} from 'lucide-react';

const iconMap = [Wallet, Smartphone, Network, QrCode, Percent, MapPin];

const positions = [
  'lg:top-[13%] lg:left-[9%]',
  'lg:top-[13%] lg:right-[9%]',
  'lg:top-[44%] lg:left-[5%]',
  'lg:top-[44%] lg:right-[5%]',
  'lg:bottom-[13%] lg:left-[9%]',
  'lg:bottom-[13%] lg:right-[9%]',
];

const paths = [
  "M 460 258 L 320 258 L 320 162",
  "M 740 258 L 880 258 L 880 162",
  "M 460 325 L 425 325",
  "M 740 325 L 775 325",
  "M 460 392 L 320 392 L 320 488",
  "M 740 392 L 880 392 L 880 488",
];

const dots = [
  { cx: 320, cy: 162 },
  { cx: 880, cy: 162 },
  { cx: 425, cy: 325 },
  { cx: 775, cy: 325 },
  { cx: 320, cy: 488 },
  { cx: 880, cy: 488 },
];

const rise = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const centerCircleVariant = {
  initial: { opacity: 0, scale: 0.75 },
  whileInView: { opacity: 1, scale: 1 },
};

export function HomeHow() {
  const t = useTranslations('home');
  const features = t.raw('how.features') as Array<{title: string; description: string}>;

  return (
    <section className="relative overflow-hidden bg-page-bg-alt px-4 py-14 text-primary-heading sm:px-6 sm:py-16 lg:min-h-[880px] lg:px-8">
      
      {/* Structural Headers */}
      <motion.div className="mx-auto mb-10 max-w-4xl text-center sm:mb-16 lg:mb-4" {...rise}>
        <h2 className="mb-3 text-2xl font-extrabold uppercase tracking-wide text-primary-heading sm:text-3xl md:text-4xl">
          {t('how.title')}
        </h2>
        <p className="mx-auto max-w-3xl text-sm md:text-[15px] text-primary-muted font-normal leading-relaxed">
          {t('how.subtitle')}
        </p>
      </motion.div>

      {/* Main Core Ecosystem Map Container */}
      <motion.div 
        className="relative mx-auto mt-8 flex h-auto max-w-[1200px] flex-col gap-4 sm:gap-6 lg:mt-12 lg:block lg:h-[650px]"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.15 }}
      >
        
        {/* Central Core Circle Component */}
        <motion.div 
          variants={centerCircleVariant}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[300px] w-[300px] items-center justify-center rounded-full border border-primary-border bg-white p-4 shadow-[0_10px_30px_rgba(122,57,179,0.05)]"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary-mid to-primary text-center text-white shadow-[inset_0_4px_12px_rgba(255,255,255,0.25)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
              {t('how.centerSubtitle')}
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight mt-1">
              {t('how.centerTitle')}
            </h3>
          </div>
        </motion.div>

        {/* Feature Pill Nodes List */}
        {features.map((feat, index) => {
          const IconComponent = iconMap[index];
          
          const lineDuration = 0.6;
          const individualDelay = 0.5 + (index * 0.45); 
          const cardDelay = individualDelay + (lineDuration * 0.75);

          return (
            <motion.div
              key={feat.title}
              className={`z-20 flex w-full items-center gap-3 rounded-3xl border border-primary-border-soft bg-primary-surface-strong p-3 transition-all duration-300 hover:shadow-md sm:gap-3.5 sm:rounded-full sm:p-2 sm:pr-5 lg:absolute lg:w-[360px] ${positions[index]}`}
              variants={{
                initial: { opacity: 0, scale: 0.85, y: 15 },
                whileInView: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: cardDelay, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-deep text-white shadow-sm sm:h-14 sm:w-14">
                  <IconComponent size={22} strokeWidth={1.8} />
                </div>
                
                <div className="flex flex-col pr-1">
                  <h4 className="text-[14px] font-bold text-primary-dark">
                    {feat.title}
                  </h4>
                  <p className="text-[11px] leading-[15px] text-primary-muted mt-0.5">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* SVG Decorative Network Spoke Connectors */}
        <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 650" xmlns="http://www.w3.org/2000/svg">
          {features.map((_, index) => {
            const individualDelay = 0.5 + (index * 0.45);
            const lineDuration = 0.6;

            return (
              <g key={`spoke-${index}`}>
                <motion.path 
                  d={paths[index]} 
                  fill="none" 
                  stroke="var(--primary-line-soft)" 
                  strokeWidth="1.5"
                  variants={{
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 }
                  }}
                  transition={{ 
                    duration: lineDuration, 
                    delay: individualDelay, 
                    ease: "easeInOut"
                  }}
                />
                <motion.circle 
                  cx={dots[index].cx} 
                  cy={dots[index].cy} 
                  r="3.5" 
                  fill="var(--primary-mid)"
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 }
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: individualDelay + lineDuration 
                  }}
                />
              </g>
            );
          })}
        </svg>

      </motion.div>
    </section>
  );
}
