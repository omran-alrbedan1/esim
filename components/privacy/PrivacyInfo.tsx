"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Settings, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface PrivacySectionProps {
  title: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  children: React.ReactNode;
  delay?: number;
}

const PrivacySection = ({ 
  title, 
  icon, 
  isHighlighted = false, 
  children, 
  delay = 0 
}: PrivacySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`policy-copy max-w-[980px] mx-auto mb-5 p-6 md:p-8 ${
        isHighlighted 
          ? "bg-[#F3EFFF] border border-[#E2D9FC] rounded-3xl shadow-soft" 
          : "bg-transparent border-none"
      }`}
    >
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
        className={` mb-3 flex font-bold items-center gap-3 text-lg ${
          isHighlighted ? "text-[#FF6F00]" : ""
        }`}
      >
        <span className="flex items-center ">{icon}</span>
        {title}
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-primary-copy text-base leading-relaxed"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const PrivacyInfo = () => {
  const t = useTranslations('privacy');
  const sections = [
    {
      id: "collect",
      icon: <Database size={22} className="text-primary-heading" />,
      isHighlighted: false,
    },
    {
      id: "use",
      icon: <Settings size={22} className="text-primary-heading" />,
      isHighlighted: false,
    },
    {
      id: "protection",
      icon: <ShieldCheck size={22} className="text-[#FF6F00]" />,
      isHighlighted: true,
    },
  ];

  return (
    <div className="max-w-[840px] mx-auto px-4 sm:px-6 py-10 md:py-12 font-sans">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-primary-copy text-base sm:text-lg leading-relaxed mb-12 pb-8 border-b border-[#F0EAF8]"
      >
        {t('intro')}
      </motion.p>

      {sections.map((section, index) => (
        <PrivacySection
          key={section.id}
          title={t(`sections.${section.id}.title`)}
          icon={section.icon}
          isHighlighted={section.isHighlighted}
          delay={0.3 + index * 0.12}
        >
          <p>{t(`sections.${section.id}.body`)}</p>
        </PrivacySection>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 p-6 md:p-8"
      >
        <h2 className="text-xl sm:text-2xl md:text-[1.6rem] font-bold text-primary-heading mb-3 flex items-center gap-3">
          <Mail size={22} className="text-primary-heading" /> {t('contact.heading')}
        </h2>
        
        <p className="text-primary-copy text-base mb-3">
          {t('contact.text')}
        </p>
        
        <a
          href="mailto:support@netosim.net"
          className="text-primary-heading font-semibold text-base sm:text-lg underline inline-flex items-center gap-1 hover:text-primary transition-colors"
        >
          support@netosim.net
          <ArrowUpRight size={16} className="-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  );
};

export default PrivacyInfo;