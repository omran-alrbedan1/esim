"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

const RefundHero = () => {
  const t = useTranslations('refund');
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-[28px] sm:rounded-[40px] hero-bg p-5 sm:p-8 md:p-12 text-center text-white shadow-[0_20px_50px_rgba(125,71,165,0.15)] relative overflow-hidden"
      style={{
        maxWidth: 980,
        margin: "0 auto",
        background: "linear-gradient(to bottom right, #684086, #A256DA)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        {/* Eyebrow with decorative lines */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-[1px] w-3 sm:w-4 bg-white/40" />
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80">
            {t('hero.eyebrow')}
          </span>
          <div className="h-[1px] w-3 sm:w-4 bg-white/40" />
        </div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight leading-tight break-words"
          dangerouslySetInnerHTML={{ __html: t.raw('hero.heading') }}
        />

        {/* Decorative line */}
        <div className="my-3 sm:my-4 h-[3px] w-10 sm:w-12 rounded-full bg-gradient-to-r from-hero-accent to-brand-mid" />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl px-2 break-words"
        >
          {t('hero.description')}
        </motion.p>

        {/* Notice box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-6 sm:mt-8 flex items-start gap-2 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md px-3 sm:px-5 py-2.5 sm:py-3 shadow-inner w-full max-w-2xl"
        >
          <div className="flex-shrink-0 mt-0.5 grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-white text-primary">
            <Info size={13} strokeWidth={3} />
          </div>
          <p className="text-[10px] sm:text-[11px] font-medium leading-normal text-white/95 text-left">
            {t('hero.notice')}
          </p>
        </motion.div>

        {/* NET NOVA GROUP LTD badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 sm:mt-8 flex items-center gap-2"
        >
          <div className="h-[1px] w-6 sm:w-8 bg-white/20" />
          <span className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.15em] text-white/60">
            {t('hero.badge')}
          </span>
          <div className="h-[1px] w-6 sm:w-8 bg-white/20" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RefundHero;
