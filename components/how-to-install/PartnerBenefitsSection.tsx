"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  Banknote, 
  Layout, 
  Code, 
  Headphones, 
  Rocket,
  ArrowRight,
  Image,
  Gauge,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PartnerBenefitsSection = () => {
  const t = useTranslations('howToInstall.benefits');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <Users size={18} className="text-primary" />,
      title: t('items.manager.title'),
    },
    {
      icon: <Banknote size={18} className="text-primary" />,
      title: t('items.payouts.title'),
    },
    {
      icon: <Layout size={18} className="text-primary" />,
      title: t('items.assets.title'),
    },
    {
      icon: <Code size={18} className="text-primary" />,
      title: t('items.api.title'),
    },
    {
      icon: <Headphones size={18} className="text-primary" />,
      title: t('items.support.title'),
    },
    {
      icon: <Rocket size={18} className="text-primary" />,
      title: t('items.early.title'),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full  px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-page overflow-hidden">
      <div className="mx-auto max-w-[1180px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center items-center w-full min-h-[400px]">
            <div className="relative w-full max-w-[420px] aspect-[4/4] border-2 border-primary-border rounded-[42px] p-6 flex flex-col justify-center gap-4 bg-surface-soft/30 backdrop-blur-sm">
              
              <motion.div 
                initial={{ opacity: 0, x: -30, rotate: -8 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: -6 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-[105%] -ml-[5%] bg-white p-4 rounded-2xl border border-primary-border-soft shadow-soft flex items-center gap-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-surface flex items-center justify-center text-primary flex-shrink-0">
                  <Image size={20} strokeWidth={2} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-black text-primary-heading uppercase tracking-wider">
                    {t('features.banner.label')}
                  </h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">
                    {t('features.banner.description')}
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Custom Dashboard */}
              <motion.div 
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 3 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-[105%] ml-[5%] bg-white p-4 rounded-2xl border border-primary-border-soft shadow-soft flex items-center justify-between gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                <div className="text-left order-1">
                  <h4 className="text-xs font-black text-primary-heading uppercase tracking-wider">
                    {t('features.dashboard.label')}
                  </h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">
                    {t('features.dashboard.description')}
                  </p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand-soft flex items-center justify-center text-brand-strong flex-shrink-0 order-2">
                  <Gauge size={20} strokeWidth={2} />
                </div>
              </motion.div>

              {/* Card 3: Instant Support */}
              <motion.div 
                initial={{ opacity: 0, x: -30, rotate: -4 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-[105%] -ml-[2%] bg-white p-4 rounded-2xl border border-primary-border-soft shadow-soft flex items-center gap-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-surface flex items-center justify-center text-primary flex-shrink-0">
                  <MessageCircle size={20} strokeWidth={2} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-black text-primary-heading uppercase tracking-wider">
                    {t('features.support.label')}
                  </h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">
                    {t('features.support.description')}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Side: Typography & Core Checklist aligned with image_407e99.png */}
          <div className="order-1 lg:order-2 lg:col-span-7 text-left flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3 text-start">
              <span className="text-xs font-bold text-center  uppercase tracking-[0.2em] text-primary-dark">
                — {t('label')} —
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-primary-heading leading-[1.15] tracking-tight max-w-xl md:text-start">
              {t('title')}
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[3.5px] w-24 rounded-full bg-gradient-to-r from-primary to-brand-strong mt-5 mb-6 origin-left "
            />

            <p className="text-text-muted text-[15px] sm:text-base leading-relaxed max-w-xl mb-8 font-normal opacity-90 text-center md:text-start">
              {t('description')}
            </p>

            {/* Structured Value Check items stack */}
            <div className="flex flex-col gap-4 max-w-xl">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3.5 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-surface border border-primary-border-soft flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    {benefit.icon}
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-primary-heading tracking-tight group-hover:text-primary transition-colors duration-200">
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Inline Trigger Action Link */}
            <div className="mt-10">
              <Link
                href="/partner/apply"
                className="button-light button group inline-flex items-center gap-2 shadow-soft"
              >
                {t('cta')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
};

export default PartnerBenefitsSection;