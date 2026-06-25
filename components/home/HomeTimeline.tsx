//@ts-nocheck
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Download, Globe, PhoneCall, QrCode } from 'lucide-react';
import { cardReveal, fadeUp, fadeUpReduced, premiumEase, springSoft, viewportOnce } from './motion';

const icons = [Globe, Download, QrCode, PhoneCall];

const themes = [
  {
    activeBg: 'var(--primary)',
    badgeBg: 'bg-primary',
    cardTheme: {
      iconBg: 'bg-primary-surface-soft',
      iconText: 'text-primary',
      orbBg: 'bg-gradient-to-br from-primary/30 via-primary-mid/10 to-transparent',
      orbBorder: 'border-primary/20',
      chipBorder: 'border-primary/10',
      chipText: 'text-primary/75',
      topLine: 'bg-[linear-gradient(90deg,var(--primary),transparent)]',
      shadow: 'shadow-[0_20px_55px_rgba(122,57,179,0.08)]',
      hoverShadow: '0 28px 64px rgba(122,57,179,0.14)',
      accentText: 'text-primary/65',
    },
  },
  {
    activeBg: 'var(--brand-strong)',
    badgeBg: 'bg-brand-strong',
    cardTheme: {
      iconBg: 'bg-brand-soft',
      iconText: 'text-brand-strong',
      orbBg: 'bg-gradient-to-br from-brand-strong/30 via-brand-mid/10 to-transparent',
      orbBorder: 'border-brand-strong/20',
      chipBorder: 'border-brand-strong/12',
      chipText: 'text-brand-strong/75',
      topLine: 'bg-[linear-gradient(90deg,var(--brand),transparent)]',
      shadow: 'shadow-[0_20px_55px_rgba(255,107,74,0.07)]',
      hoverShadow: '0 28px 64px rgba(255,107,74,0.14)',
      accentText: 'text-brand-strong/70',
    },
  },
  {
    activeBg: 'var(--primary)',
    badgeBg: 'bg-primary',
    cardTheme: {
      iconBg: 'bg-primary-surface-soft',
      iconText: 'text-primary',
      orbBg: 'bg-gradient-to-br from-primary/30 via-primary-mid/10 to-transparent',
      orbBorder: 'border-primary/20',
      chipBorder: 'border-primary/10',
      chipText: 'text-primary/75',
      topLine: 'bg-[linear-gradient(90deg,var(--primary),transparent)]',
      shadow: 'shadow-[0_20px_55px_rgba(122,57,179,0.08)]',
      hoverShadow: '0 28px 64px rgba(122,57,179,0.14)',
      accentText: 'text-primary/65',
    },
  },
  {
    activeBg: 'var(--brand-strong)',
    badgeBg: 'bg-brand-strong',
    cardTheme: {
      iconBg: 'bg-brand-soft',
      iconText: 'text-brand-strong',
      orbBg: 'bg-gradient-to-br from-brand-strong/30 via-brand-mid/10 to-transparent',
      orbBorder: 'border-brand-strong/20',
      chipBorder: 'border-brand-strong/12',
      chipText: 'text-brand-strong/75',
      topLine: 'bg-[linear-gradient(90deg,var(--brand),transparent)]',
      shadow: 'shadow-[0_20px_55px_rgba(255,107,74,0.07)]',
      hoverShadow: '0 28px 64px rgba(255,107,74,0.14)',
      accentText: 'text-brand-strong/70',
    },
  },
];

const stepKeys = ['step1', 'step2', 'step3', 'step4'];

export function HomeTimeline() {
  const t = useTranslations('home');
  const shouldReduceMotion = useReducedMotion();
  const revealVariant = shouldReduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section className="relative overflow-hidden px-4 py-16 text-text-primary sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        className="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center sm:mb-18"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="rounded-full border border-primary/10 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary shadow-[0_10px_24px_rgba(88,51,134,0.06)] sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.3em]">
          {t('timeline.badge')}
        </span>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:mt-5 sm:text-3xl lg:text-[46px]">
          {t('timeline.title')}
        </h2>
        <p className="mt-3 max-w-[720px] text-[15px] leading-7 text-text-muted sm:mt-4 sm:text-[16px] sm:leading-8 lg:text-[17px]">
          {t('timeline.description')}
        </p>
        <div className="mt-5 h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--brand),var(--primary-soft))] sm:mt-6 sm:w-24" />
      </motion.div>

      <motion.div
        className="relative mx-auto mt-8 max-w-[1160px] sm:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Desktop center line */}
        <svg
          className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-[640px] w-[120px] -translate-x-1/2 lg:block"
          viewBox="0 0 120 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="60" y1="0" x2="60" y2="640" stroke="var(--primary-line)" strokeWidth="2" strokeDasharray="5 5" />
          <motion.line
            x1="60"
            y1="0"
            x2="60"
            y2="640"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1 },
            }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 2.8, ease: premiumEase }}
          />
        </svg>

        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-20">
          {stepKeys.map((key, index) => {
            const IconComponent = icons[index];
            const theme = themes[index];
            const isEven = index % 2 === 1;
            const activationTimeline = [0.15, 0.44, 0.72, 0.96][index];
            const exactTouchTime = activationTimeline * 3.8;
            const stepNumber = index + 1;

            return (
              <div key={key} className="grid grid-cols-[44px_1fr] items-start gap-3 sm:grid-cols-[52px_1fr] sm:gap-4 lg:grid-cols-[1fr_120px_1fr] lg:gap-0">
                {/* Desktop left card */}
                <div className="hidden justify-end pr-8 lg:flex lg:order-1">
                  <TimelineCard
                    theme={theme}
                    isEven={isEven}
                    index={index}
                    activationTimeline={activationTimeline}
                    t={t}
                    keyPrefix={key}
                    IconComponent={IconComponent}
                    side="left"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>

                {/* Timeline node */}
                <div className="relative flex items-center justify-center lg:order-2">
                  <div className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-line bg-white/92 shadow-[0_14px_34px_rgba(122,57,179,0.1)] sm:h-[52px] sm:w-[52px] lg:h-[82px] lg:w-[82px]">
                    <div className="absolute inset-[2px] rounded-full border border-primary/8 sm:inset-[3px]" />
                    <motion.div
                      className="absolute inset-[6px] z-0 rounded-full shadow-[inset_0_8px_24px_rgba(255,255,255,0.25)] sm:inset-[8px]"
                      variants={{
                        hidden: { backgroundColor: 'var(--surface)' },
                        visible: { backgroundColor: theme.activeBg },
                      }}
                      transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : exactTouchTime, ease: premiumEase }}
                    />
                    <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-transparent sm:h-10 sm:w-10 lg:h-[60px] lg:w-[60px]">
                      <motion.div
                        variants={{
                          hidden: { color: theme.activeBg },
                          visible: { color: 'var(--surface)' },
                        }}
                        transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : exactTouchTime, ease: premiumEase }}
                      >
                        <IconComponent size={18} strokeWidth={1.8} className="sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      </motion.div>
                    </div>
                    <motion.span
                      className={`absolute -right-1 -top-1 z-20 flex h-5 w-5 items-center justify-center rounded-full border border-white text-[8px] font-extrabold text-white shadow-[0_10px_22px_rgba(57,11,89,0.16)] sm:h-6 sm:w-6 sm:text-[10px] ${theme.badgeBg}`}
                      variants={{
                        hidden: { scale: 0.85 },
                        visible: { scale: 1 },
                      }}
                      transition={{ duration: 0.2, delay: exactTouchTime + 0.05 }}
                    >
                      {stepNumber}
                    </motion.span>
                  </div>
                </div>

                {/* Mobile card (always visible) + Desktop right card */}
                <div className="lg:order-3 lg:pl-8">
                  {/* Mobile card */}
                  <div className="lg:hidden">
                    <TimelineCard
                      theme={theme}
                      isEven={isEven}
                      index={index}
                      activationTimeline={activationTimeline}
                      t={t}
                      keyPrefix={key}
                      IconComponent={IconComponent}
                      side="mobile"
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>
                  {/* Desktop right card */}
                  <div className="hidden lg:block">
                    <TimelineCard
                      theme={theme}
                      isEven={isEven}
                      index={index}
                      activationTimeline={activationTimeline}
                      t={t}
                      keyPrefix={key}
                      IconComponent={IconComponent}
                      side="right"
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function TimelineCard({
  theme,
  isEven,
  index,
  activationTimeline,
  t,
  keyPrefix,
  IconComponent,
  side,
  shouldReduceMotion,
}: {
  theme: typeof themes[0];
  isEven: boolean;
  index: number;
  activationTimeline: number;
  t: ReturnType<typeof useTranslations>;
  keyPrefix: string;
  IconComponent: React.ElementType;
  side: 'left' | 'right' | 'mobile';
  shouldReduceMotion: boolean | null;
}) {
  const exactTouchTime = activationTimeline * 3.8;

  if (side === 'left' && isEven) return null;
  if (side === 'right' && !isEven) return null;

  return (
    <motion.div
      className={`group relative w-full max-w-full cursor-pointer overflow-hidden rounded-[20px] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(252,247,255,0.92))] p-4 sm:max-w-[470px] sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-6 ${theme.cardTheme.shadow}`}
      variants={shouldReduceMotion ? fadeUpReduced : {
        hidden: {
          ...cardReveal.hidden,
          transform: `translate3d(${side === 'right' ? '30px' : '-30px'}, 18px, 0) scale(0.96)`,
        },
        visible: {
          ...cardReveal.visible,
          transition: { ...springSoft, delay: exactTouchTime * 0.16 + 0.08 },
        },
      }}
      whileHover={shouldReduceMotion ? undefined : {
        transform: 'translate3d(0, -6px, 0) scale(1.018)',
        boxShadow: theme.cardTheme.hoverShadow,
      }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={springSoft}
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${theme.cardTheme.topLine} opacity-85`} />
      <motion.div
        className={`absolute -top-5 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border shadow-inner blur-[0.5px] ${side === 'mobile' ? 'hidden' : ''} ${theme.cardTheme.orbBg} ${theme.cardTheme.orbBorder}`}
        variants={{
          hidden: { scale: 0.85, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
        transition={{ ...springSoft, delay: shouldReduceMotion ? 0 : exactTouchTime * 0.14 + 0.18 }}
      />

      {/* Main Layout Container */}
      <motion.div
        className="relative z-10 flex flex-col items-start gap-3 sm:flex-row sm:gap-4"
        variants={{
          hidden: { opacity: 0, transform: 'translate3d(0, 8px, 0)' },
          visible: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
        }}
        transition={{ duration: 0.42, delay: shouldReduceMotion ? 0 : exactTouchTime * 0.12 + 0.16, ease: premiumEase }}
      >
        {/* Icon wrapper */}
        <div className={`mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:mt-0 sm:h-12 sm:w-12 sm:rounded-2xl ${theme.cardTheme.iconBg} ${theme.cardTheme.iconText}`}>
          <IconComponent size={16} strokeWidth={2} className="sm:h-5 sm:w-5" />
        </div>

        {/* Content container */}
        <div className="w-full min-w-0">
          <h3 className="pr-0 text-[15px] font-semibold tracking-tight text-text-primary sm:pr-16 sm:text-[17px] md:text-[19px]">
            {t(`timeline.${keyPrefix}Title`)}
          </h3>
          <p className="mt-1.5 text-[13px] leading-6 text-primary-muted sm:mt-2 sm:text-[14px] sm:leading-7">
            {t(`timeline.${keyPrefix}Desc`)}
          </p>
          <div className={`mt-3 inline-flex rounded-full border bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] sm:mt-4 sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.18em] ${theme.cardTheme.chipBorder} ${theme.cardTheme.chipText}`}>
            {t(`timeline.${keyPrefix}Chip`)}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}