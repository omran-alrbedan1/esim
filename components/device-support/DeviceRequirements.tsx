'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

const sectionStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const sectionItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function DeviceRequirements() {
  const t = useTranslations('deviceSupport.requirements');
  const requirements = [0, 1, 2, 3].map((index) => ({
    number: String(index + 1),
    title: t(`items.${index}.title`),
    copy: t(`items.${index}.copy`),
  }));

  return (
    <motion.section
      className="mx-auto mt-16 max-w-[1180px]"
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="mx-auto max-w-2xl text-center" variants={sectionItem}>
        <motion.span
          className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8b35c8] inline-block"
          variants={sectionItem}
        >
          {t('eyebrow')}
        </motion.span>
        <motion.h2
          className="mt-2 text-3xl font-extrabold tracking-tight"
          variants={sectionItem}
        >
          {t('title')}
        </motion.h2>
        <motion.div
          className="mx-auto mt-4 h-0.5 w-14 bg-[#ff8b77]"
          variants={sectionItem}
        />
      </motion.div>
      <motion.div
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        variants={sectionStagger}
      >
        {requirements.map(({ number, title, copy }) => (
          <motion.article
            key={title}
            className="relative rounded-[22px] border border-[#cbaee6] bg-[#f4e9fb] p-5 pt-9 text-center shadow-[0_12px_30px_rgba(80,42,126,0.08)]"
            variants={cardItem}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(80,42,126,0.15)',
              borderColor: '#9A42E4',
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="absolute left-1/2 top-0 grid h-10 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-[#a977d0] bg-white text-sm font-extrabold text-[#684086]"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            >
              {number}
            </motion.span>
            <motion.h3 className="font-extrabold text-[#684086]">{title}</motion.h3>
            <motion.p className="mt-2 text-sm leading-6 text-[#6d5c86]">{copy}</motion.p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
