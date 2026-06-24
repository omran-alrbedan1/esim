'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Globe2 } from 'lucide-react';

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('contact');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "25%"]), { stiffness: 120, damping: 35 });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.7], [1, 0]), { stiffness: 120, damping: 35 });

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-[#16022B] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_30%,rgba(139,92,246,0.12),transparent),radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(104,64,134,0.15),transparent)]" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <motion.div
          style={{ y: textY, opacity }}
          className={`max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {showContent && (
            <>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold tracking-[0.18em] uppercase mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
              >
                <Globe2 size={12} /> {t('tag')}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-tight text-white mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw('title') }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base md:text-lg leading-relaxed max-w-xl text-white/60 mb-8"
              >
                {t('subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
                >
                  {t('cta_primary')} <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-sm transition-all">
                  {t('cta_secondary')}
                </button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
