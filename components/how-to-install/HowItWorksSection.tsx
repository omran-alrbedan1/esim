"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  CheckCircle, 
  Share2, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FRAMES } from '@/constants/images';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  isLast?: boolean;
}

const Step = ({ title, description, delay = 0, isLast = false }: StepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative"
    >
      {/* Card with Frame 5 Image */}
      <div className="relative w-full aspect-[540/230] shadow-soft group ">
        {/* Background Frame Image */}
        <Image
          src={FRAMES.frame5}
          alt="Step Card Frame"
          fill
          className="object-contain scale-[220%]"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 md:px-10 md:py-10 z-10">
          <h3 className="text-md font-bold text-primary-heading -mt-48 md:-mt-32 md:-mt-44 text-center">
            {title}
          </h3>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 md:px-10 md:py-10 z-10">
          <div className="text-center mt-8 md:mt-12">
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-[300px] mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const t = useTranslations('howToInstall.steps');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <FileText size={24} strokeWidth={1.5} />,
      title: t('apply.title'),
      description: t('apply.description'),
    },
    {
      icon: <CheckCircle size={24} strokeWidth={1.5} />,
      title: t('approve.title'),
      description: t('approve.description'),
    },
    {
      icon: <Share2 size={24} strokeWidth={1.5} />,
      title: t('promote.title'),
      description: t('promote.description'),
    },
    {
      icon: <TrendingUp size={24} strokeWidth={1.5} />,
      title: t('earn.title'),
      description: t('earn.description'),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-[1140px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-[42px] font-extrabold text-primary-heading leading-tight">
            {t('title')}
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-16 mx-auto rounded-full bg-brand mt-4"
          />

          <p className="text-text-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-4 gap-y-40 py-12 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={0.2 + index * 0.1}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/partner/apply"
            className="button-light button group inline-flex items-center gap-2"
          >
            {t('cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;