'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ReactCountryFlag from 'react-country-flag';
import { useState } from 'react';
import { destinations } from './data';
import { HOME_IMAGES } from '@/constants/images';
import { cardReveal, fadeUp, fadeUpReduced, premiumEase, springSoft, staggerParent, viewportOnce } from './motion';

export function HomeDestinations() {
  const t = useTranslations('home');
  const shouldReduceMotion = useReducedMotion();
  const revealVariant = shouldReduceMotion ? fadeUpReduced : fadeUp;
  const tabs = [t('destinations.tabLocal'), t('destinations.tabRegional'), t('destinations.tabGlobal')];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden bg-page-bg px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
      <motion.div
        className="pointer-events-none right-0 top-0 z-0 hidden h-auto max-w-[500px] select-none opacity-70 md:absolute md:block md:-mr-44 md:-mt-14 md:w-[45%]"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translate3d(32px, -16px, 0) scale(0.96)' }}
        whileInView={{ opacity: 0.7, transform: 'translate3d(0px, 0px, 0) scale(1)' }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: premiumEase }}
      >
        <Image 
          src={HOME_IMAGES.world} 
          alt="World Map Graphic" 
          width={500}
          height={320}
          className="w-full h-auto object-contain opacity-50"
        />
      </motion.div>
      
      <motion.div
        className="mx-auto mb-8 max-w-[1180px] text-center"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="mb-4 text-2xl font-extrabold tracking-wide text-text-primary sm:text-3xl md:text-4xl">
          {t('destinations.title')}
        </h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-text-muted font-normal leading-relaxed">
          {t('destinations.description')}
        </p>
      </motion.div>

      <motion.div 
        className="mx-auto mb-10 flex w-full max-w-md items-center justify-center rounded-full bg-primary-soft/30 p-1.5 sm:mb-14 sm:max-w-max" 
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            transition={springSoft}
            className={`relative flex-1 cursor-pointer rounded-full px-3 py-2.5 text-xs font-semibold transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-none sm:px-8 sm:text-sm ${
              activeTab === tab
                ? 'bg-primary-dark text-white shadow-[0_12px_26px_rgba(57,11,89,0.18)]'
                : 'text-text-muted hover:text-primary-dark'
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="mx-auto mb-6 flex max-w-[1180px] flex-col justify-between gap-4 sm:flex-row sm:items-end"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div>
          <h3 className="text-base font-bold uppercase tracking-wide text-text-primary">
            {t('destinations.gridTitle')}
          </h3>
          <p className="text-xs text-text-muted mt-1">
            {t('destinations.gridDesc')}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder={t('destinations.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-line bg-white pl-11 pr-4 py-2 text-sm text-text-primary placeholder-text-muted outline-none transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:-translate-y-0.5 focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </motion.div>

      {/* eSIM Items Grid Matrix Layout */}
      <motion.div
        className="mx-auto grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {filteredDestinations.map((item, index) => (
          <motion.article
            className="group relative flex min-h-16 cursor-pointer items-center gap-3 overflow-hidden rounded-[28px] border border-primary/20 bg-white/60 px-4 py-4 pr-24 shadow-[0_16px_44px_rgba(122,57,179,0.05)] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:gap-4 sm:rounded-[40px]"
            key={`${item.code}-${index}`}
            variants={shouldReduceMotion ? fadeUpReduced : cardReveal}
            whileHover={shouldReduceMotion ? undefined : {
              transform: 'translate3d(0, -6px, 0) scale(1.01)',
              boxShadow: '0 24px 54px rgba(122,57,179,0.13)',
            }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={springSoft}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
            {/* Country Flag */}
            <div className="shrink-0">
              <ReactCountryFlag
                countryCode={item.code}
                svg
                style={{
                  width: '34px',
                  height: '24px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
            </div>

            {/* Country Name */}
            <strong className="block flex-grow text-md font-semibold tracking-[-0.03em] text-text-primary">
              {item.name}
            </strong>

            {/* Price Badge with Polygon Shape */}
            <div
              className="absolute -right-5 -top-2 flex h-[45px] min-w-24 items-center bg-primary px-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
              style={{
                clipPath: 'polygon(0% 0%, 300% 70%, 50% 100%, 10% 80%, 0% 50%)',
                padding: '0 20px 0 30px',
              }}
            >
              <b className="text-md font-semibold mr-4 mt-2 text-white">{item.price}</b>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
