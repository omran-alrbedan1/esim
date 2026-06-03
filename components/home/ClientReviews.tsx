'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { HOME_IMAGES } from '@/constants/images';
import { useTranslations, useLocale } from 'next-intl';
import {
  clientReviewsContainerVariants,
  clientReviewsItemVariants,
  clientReviewsTextVariants,
  clientReviewsButtonVariants,
  clientReviewsAvatarVariants,
  clientReviewsDotsVariants,
  clientReviewsWheelRollingVariants,
} from '@/constants/variants';

export default function ClientReviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [direction, setDirection] = useState(0);
  const t = useTranslations('home.clientReviews');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  const reviews = [
    {
      text: t('reviews.0.text'),
      name: t('reviews.0.name'),
      date: t('reviews.0.date'),
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: t('reviews.1.text'),
      name: t('reviews.1.name'),
      date: t('reviews.1.date'),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: t('reviews.2.text'),
      name: t('reviews.2.name'),
      date: t('reviews.2.date'),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const handlePrev = () => {
    setDirection(-1);
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const textVariants = clientReviewsTextVariants(direction);

  return (
    <section
      ref={sectionRef}
      className="relative bg-theme-blob-3 md:pb-24 md:pt-36 md:px-6  lg:px-12 w-full text-center overflow-hidden"
    >
      <motion.div
        className="relative z-10"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.div
          variants={clientReviewsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={clientReviewsItemVariants}
            className="flex flex-col items-center mb-3 mt-8"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.25em] font-bold text-[#8C936E] uppercase"
            >
              {t('tag')}
            </motion.span>
          </motion.div>

          <motion.h2
            variants={clientReviewsItemVariants}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 sm:mb-16 text-gray-900"
          >
            {t('title')}
          </motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`lg:col-span-7 flex flex-col justify-center max-w-xl lg:max-w-none mx-auto lg:mx-0 z-10 ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <div className="relative min-h-30 sm:min-h-35 mb-6 sm:mb-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={activeReview}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed absolute w-full"
                  >
                    &ldquo;{reviews[activeReview].text}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className={`flex items-center gap-3 mt-12 md:mt-0 sm:gap-4 mb-6 sm:mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <motion.div
                  key={activeReview}
                  variants={clientReviewsAvatarVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-md cursor-pointer"
                >
                  <img
                    src={reviews[activeReview].avatar}
                    alt={reviews[activeReview].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<div class="w-full h-full bg-[#8C936E] flex items-center justify-center text-white font-bold text-lg">${reviews[activeReview].name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </motion.div>
                <motion.div
                  key={`name-${activeReview}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="font-bold text-gray-900 text-sm sm:text-base leading-tight"
                  >
                    {reviews[activeReview].name}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-[11px] sm:text-xs text-gray-400 font-semibold mt-0.5"
                  >
                    {reviews[activeReview].date}
                  </motion.p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <motion.button
                  onClick={handlePrev}
                  variants={clientReviewsButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#8C936E] border border-gray-200/60 shadow-sm flex items-center justify-center text-gray-600 hover:text-white font-bold text-sm transition-colors duration-200"
                  aria-label={t('previous')}
                >
                  {isRTL ? '→' : '←'}
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  variants={clientReviewsButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#8C936E] border border-gray-200/60 shadow-sm flex items-center justify-center text-gray-600 hover:text-white font-bold text-sm transition-colors duration-200"
                  aria-label={t('next')}
                >
                  {isRTL ? '←' : '→'}
                </motion.button>
              </motion.div>
            </div>

            {/* Professional Wheel Rolling Animation - Like a car wheel */}
            <motion.div
              variants={clientReviewsWheelRollingVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover="hover"
              className="lg:col-span-5 flex justify-center items-center h-70 sm:h-80 md:h-100 order-first lg:order-last mt-8 lg:mt-0"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-45 sm:w-55 md:w-72.5 aspect-square rounded-full shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* Trail effect - dust/wind trail behind the rolling image */}
                <motion.div
                  className="absolute left-full top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-[#8C936E]/0 via-[#8C936E]/30 to-[#8C936E]/0 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
                
                {/* Rotation rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-[#8C936E]/30 z-0"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.div
                  className="absolute -inset-8 rounded-full border border-[#8C936E]/15 z-0"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <Image
                  src={HOME_IMAGES.clientReviews}
                  alt={t('imageAlt')}
                  fill
                  className="object-cover relative z-10"
                />
                
                {/* Speed lines effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-2 mt-12"
          >
            {reviews.map((_, idx) => (
              <motion.button
                key={idx}
                custom={idx}
                variants={clientReviewsDotsVariants(idx)}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                onClick={() => {
                  setDirection(idx > activeReview ? 1 : -1);
                  setActiveReview(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeReview
                    ? 'bg-[#8C936E] w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={t('goToReview', { index: idx + 1 })}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}