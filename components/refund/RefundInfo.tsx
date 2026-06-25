"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShieldCheck, 
  XCircle, 
  Mail, 
  ArrowUpRight, 
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useTranslations } from "next-intl";

interface RefundSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
  isHighlighted?: boolean;
}

const RefundSection = ({ 
  title, 
  icon, 
  children, 
  delay = 0,
  isHighlighted = false
}: RefundSectionProps) => {
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
          ? "bg-primary-surface-soft border border-primary-border rounded-3xl shadow-soft" 
          : "bg-transparent border-none"
      }`}
    >
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
        className=" md:text-[1.6rem] font-bold mb-3 flex items-center gap-3 text-primary-heading"
      >
        <span className="flex items-center">{icon}</span>
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

const RefundInfo = () => {
  const t = useTranslations('refund');
  const sections = [
    {
      id: "eligibility",
      icon: <CheckCircle2 size={22} className="text-primary" />,
    },
    {
      id: "non-refundable",
      icon: <XCircle size={22} className="text-brand" />,
      isHighlighted: true,
    },
    {
      id: "requests",
      icon: <Clock size={22} className="text-primary" />,
    },
  ];

  return (
    <div className="max-w-[840px] mx-auto px-4 sm:px-6 py-10 md:py-12 font-sans">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-primary-copy text-base sm:text-lg leading-relaxed mb-12 pb-8 border-b border-primary-border-soft"
      >
        <p className="flex items-start gap-3">
          <ShieldCheck size={24} className="text-primary flex-shrink-0 mt-1" />
          <span>
            {t('intro')}
          </span>
        </p>
      </motion.div>

      {/* Main Content Sections */}
      {sections.map((section, index) => (
        <RefundSection
          key={section.id}
          title={t(`sections.${section.id}.title`)}
          icon={section.icon}
          delay={0.3 + index * 0.12}
          isHighlighted={section.isHighlighted}
        >
          <p>{t(`sections.${section.id}.body`)}</p>
        </RefundSection>
      ))}

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 p-6 md:p-8 bg-primary-surface-soft border border-primary-border rounded-3xl shadow-soft"
      >
        <h2 className="text-xl sm:text-2xl md:text-[1.6rem] font-bold text-primary-heading mb-3 flex items-center gap-3">
          <Mail size={22} className="text-primary" /> {t('contact.heading')}
        </h2>
        
        <p className="text-primary-copy text-base mb-3">
          {t('contact.text')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <a
            href="mailto:support@netesim.net"
            className="text-primary-heading font-semibold text-base sm:text-lg underline inline-flex items-center gap-1 hover:text-primary transition-colors"
          >
            support@netesim.net
            <ArrowUpRight size={16} className="-translate-y-0.5" />
          </a>
          
          <div className="flex items-center gap-2 text-sm text-primary-muted bg-white/60 px-3 py-1.5 rounded-full border border-primary-border-soft">
            <AlertCircle size={14} />
            <span>{t('contact.response_time')}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RefundInfo;
