'use client';

import { HOME_IMAGES } from '@/constants/images';
import { motion, useReducedMotion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { premiumEase } from './motion';

export function HomeHero() {
  const params = useParams();
  const locale = params.locale || 'en';
  const shouldReduceMotion = useReducedMotion();

  // State to track if the user is on a mobile screen
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    // Check on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine which image to use based on Language AND Device
  let heroImage;
  if (locale === 'ar') {
    heroImage = isMobile ? HOME_IMAGES.hero_arabic_mobile : HOME_IMAGES.hero_arabic;
  } else {
    heroImage = isMobile ? HOME_IMAGES.hero_english_mobile : HOME_IMAGES.hero_english;
  }

  return (
    <motion.section
      className="relative min-h-[100svh] w-full overflow-hidden pb-20 pt-5 text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.035 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 1.15, ease: premiumEase }}
    >
      <motion.div
        className="absolute inset-0 bg-hero-overlay -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: shouldReduceMotion ? 0 : 0.1, ease: premiumEase }}
      />
      <motion.div
        className="pointer-events-none absolute inset-x-[12%] bottom-10 h-24 rounded-full bg-hero-highlight/15 blur-3xl"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translate3d(0, 18px, 0) scale(0.92)' }}
        animate={{ opacity: 1, transform: 'translate3d(0, 0px, 0) scale(1)' }}
        transition={{ duration: 1, delay: shouldReduceMotion ? 0 : 0.35, ease: premiumEase }}
      />
    </motion.section>
  );
}
