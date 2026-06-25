"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  BarChart3, 
  Ticket, 
  Globe, 
  Megaphone, 
  Rocket,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface PartnerFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const PartnerFeature = ({ icon, title, description, delay = 0 }: PartnerFeatureProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group bg-surface rounded-[32px] p-8 md:p-9 border border-primary-border-soft hover:border-primary-border transition-all duration-300 shadow-soft hover:shadow-card flex flex-col items-start text-left"
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-soft border border-brand-mid/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
        <span className="text-brand-strong scale-90">{icon}</span>
      </div>
      
      {/* Content Stack */}
      <div className="flex flex-col flex-grow rtl:text-start">
        <h3 className="text-xl  font-bold text-primary-heading mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-sm sm:text-[15px] leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyPartnerSection = () => {
  const t = useTranslations('howToInstall');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <TrendingUp size={20} strokeWidth={2} />,
      title: t('features.commission.title'),
      description: t('features.commission.description'),
    },
    {
      icon: <BarChart3 size={20} strokeWidth={2} />,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
    },
    {
      icon: <Ticket size={20} strokeWidth={2} />,
      title: t('features.discounts.title'),
      description: t('features.discounts.description'),
    },
    {
      icon: <Globe size={20} strokeWidth={2} />,
      title: t('features.global.title'),
      description: t('features.global.description'),
    },
    {
      icon: <Megaphone size={20} strokeWidth={2} />,
      title: t('features.marketing.title'),
      description: t('features.marketing.description'),
    },
    {
      icon: <Rocket size={20} strokeWidth={2} />,
      title: t('features.scalable.title'),
      description: t('features.scalable.description'),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-gradient-page overflow-hidden">
      <div className="mx-auto max-w-[1180px]">
        
        {/* Header Setup aligned with image_3f8dbe.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-dark">
              — {t('why.label')} —
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-primary-heading leading-[1.15] tracking-tight max-w-3xl mx-auto">
            {t('why.title')}
          </h2>

          {/* Two-tone accent bar below title */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[4px] w-20 mx-auto rounded-full bg-gradient-to-r from-primary to-brand-strong mt-6"
          />

          <p className="text-text-muted text-base sm:text-[17px] mt-6 max-w-2xl mx-auto leading-relaxed opacity-90">
            {t('why.description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <PartnerFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.06}
            />
          ))}
        </div>

        {/* Bottom CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 md:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="button-dark button"
            >
              {t('why.secondaryCta')}
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyPartnerSection;