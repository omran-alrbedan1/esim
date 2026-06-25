"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Smartphone, Download, Wifi, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const HowToInstallContent = () => {
  const t = useTranslations('howToInstall');

  const steps = [
    {
      id: 1,
      icon: <Download size={24} className="text-primary" />,
      title: t('steps.download.title'),
      description: t('steps.download.description'),
    },
    {
      id: 2,
      icon: <Smartphone size={24} className="text-primary" />,
      title: t('steps.install.title'),
      description: t('steps.install.description'),
    },
    {
      id: 3,
      icon: <Wifi size={24} className="text-primary" />,
      title: t('steps.activate.title'),
      description: t('steps.activate.description'),
    },
  ];

  const benefits = [
    t('benefits.fast'),
    t('benefits.secure'),
    t('benefits.global'),
    t('benefits.easy'),
  ];

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 md:py-16">
      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-heading text-center mb-4">
          {t('steps.title')}
        </h2>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
          {t('steps.subtitle')}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-primary-surface border border-primary-border rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-surface-strong border border-primary-border-soft mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary-heading mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-primary-surface border border-primary-border rounded-3xl p-8 md:p-12 shadow-soft mb-16"
      >
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-heading mb-4">
              {t('benefits.title')}
            </h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 text-text-muted"
                >
                  <CheckCircle size={18} className="text-brand flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-6"
            >
              <Link
                href="/plans"
                className="button-light button inline-flex items-center gap-2"
              >
                {t('benefits.cta')}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          <div className="relative min-h-[200px] md:min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-mid/20 to-brand/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Smartphone size={64} className="text-primary/40 mx-auto mb-4" />
                <p className="text-sm text-text-muted">{t('benefits.visualHint')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center bg-gradient-to-r from-primary-surface to-primary-surface-strong border border-primary-border rounded-3xl p-8 md:p-12 shadow-soft"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-heading mb-3">
          {t('cta.title')}
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-6">
          {t('cta.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/plans" className="button-light button">
            {t('cta.primary')}
          </Link>
          <Link href="/support" className="button-dark button">
            {t('cta.secondary')}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HowToInstallContent;