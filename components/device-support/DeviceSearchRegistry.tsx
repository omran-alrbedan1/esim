'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

const iosDevices = [
  'iPad 8th Gen (WiFi+Cellular)',
  'iPad 10th Gen',
  'iPad Pro 11-inch (M4)',
  'iPad Pro 11-inch 4th Gen (WiFi+Cellular)',
  'iPad Pro 11-inch 4th Gen',
  'iPad Pro 11-inch 3rd Gen (WiFi+Cellular)',
  'iPad Pro 11-inch 3rd Gen',
  'iPad mini 5th Gen',
  'iPad mini (6th Gen)',
  'iPad Air 5th Gen (WiFi+Cellular)',
  'iPad Air 3rd Gen',
  'iPad Air 13-inch (M2)',
  'iPad 10th Gen',
  'iPad 8th Gen (WiFi+Cellular)',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
];

const androidDevices = [
  'Samsung Galaxy S24 Ultra',
  'Samsung Galaxy S23',
  'Google Pixel 9 Pro',
  'Google Pixel 8',
  'Xiaomi 14 Pro',
  'Oppo Find X5',
];

const sectionStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const sectionItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const tagStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export function DeviceSearchRegistry() {
  const t = useTranslations('deviceSupport.registry');
  const [activeTab, setActiveTab] = useState<'iOS' | 'Android'>('iOS');
  const [searchQuery, setSearchQuery] = useState('');

  const currentDevices = activeTab === 'iOS' ? iosDevices : androidDevices;

  const filteredDevices = currentDevices.filter((device) =>
    device.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.section
      className="mx-auto mt-16 max-w-[1140px] px-4"
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div className="mx-auto max-w-2xl text-center mb-8" variants={sectionItem}>
        <motion.div className="flex items-center justify-center gap-2 mb-2" variants={sectionItem}>
          <motion.div
            className="h-[1px] w-6 bg-[#9A42E4]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A42E4]">
            {t('eyebrow')}
          </span>
          <motion.div
            className="h-[1px] w-6 bg-[#9A42E4]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <motion.h2
          className="text-3xl font-bold tracking-tight text-[#1A0B2E] sm:text-[36px]"
          variants={sectionItem}
        >
          {t('title')}
        </motion.h2>

        <motion.p
          className="mt-3 text-sm leading-relaxed text-[#756685] max-w-xl mx-auto"
          variants={sectionItem}
        >
          {t('description')}
        </motion.p>

        <motion.div
          className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#9A42E4] to-[#FF4D80]"
          variants={sectionItem}
        />
      </motion.div>

      <motion.div
        className="mx-auto max-w-[940px] rounded-[36px] bg-[#FAF6FF]/60 border border-[#F4EDFD] p-6 sm:p-10 shadow-[0_20px_50px_rgba(154,66,228,0.03)] backdrop-blur-sm"
        variants={sectionItem}
      >
        <div className="mx-auto mb-8 flex w-max rounded-full bg-[#EFE5FA] p-1.5 min-w-[240px] relative">
          <motion.div
            className="absolute rounded-full bg-[#3E1066] shadow-md z-0"
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              width: '50%',
              height: 'calc(100% - 12px)',
              top: 6,
            }}
            animate={{ left: activeTab === 'iOS' ? 6 : 'calc(50% + 3px)' }}
          />
          <button
            onClick={() => setActiveTab('iOS')}
            className={`relative z-10 flex-1 rounded-full py-2.5 text-xs font-bold px-8 transition-colors duration-200 ${
              activeTab === 'iOS'
                ? 'text-white'
                : 'text-[#6D5E80] hover:text-[#3E1066]'
            }`}
          >
            iOS
          </button>
          <button
            onClick={() => setActiveTab('Android')}
            className={`relative z-10 flex-1 rounded-full py-2.5 text-xs font-bold px-8 transition-colors duration-200 ${
              activeTab === 'Android'
                ? 'text-white'
                : 'text-[#6D5E80] hover:text-[#3E1066]'
            }`}
          >
            Android
          </button>
        </div>

        <motion.div
          className="flex min-h-12 items-center gap-3 rounded-full border border-[#DCD0EC] bg-white px-5 focus-within:border-[#9A42E4] focus-within:ring-2 focus-within:ring-[#9A42E4]/10 transition-all"
          variants={sectionItem}
        >
          <motion.div
            animate={searchQuery ? { rotate: [0, -10, 0], scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Search size={16} className="text-[#9C8EB2]" />
          </motion.div>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs font-medium text-[#1A0B2E] outline-none placeholder-[#9C8EB2]"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + searchQuery}
            className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
            variants={tagStagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, idx) => (
                <motion.span
                  key={`${device}-${idx}`}
                  variants={tagItem}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#9A42E4",
                    color: "#ffffff",
                    borderColor: "#9A42E4",
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#F3EBFC] border border-[#EBE0F9] px-4 py-2 text-[11px] font-semibold text-[#4F3D66] shadow-sm cursor-pointer transition-colors duration-150"
                >
                  {device}
                </motion.span>
              ))
            ) : (
              <motion.p
                className="text-xs text-[#756685] mt-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t('empty')}
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
