'use client';

import Image from 'next/image';
import { HOME_IMAGES } from '@/constants/images';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
  innovativeShopContentContainerVariants,
  innovativeShopTextItemVariants,
  innovativeShopCinematicPhoneVariants, 
  innovativeShopCircleVariants,
  innovativeShopStarVariants,
} from '@/constants/variants';

export default function InnovativeShop() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home.innovativeShop');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  const textItemVariants = innovativeShopTextItemVariants(isRTL);

  return (
    <section
      ref={sectionRef}
      className="bg-theme-blob-3 py-20 lg:py-28 px-6 sm:px-8 lg:px-12 w-full overflow-hidden relative min-h-[500px] flex items-center"
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10"
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center text-left max-w-xl lg:max-w-none mx-auto lg:mx-0"
          variants={innovativeShopContentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, margin: "-20%" }}
        >
          <motion.h2
            variants={textItemVariants}
            className="text-4xl sm:text-5xl text-start font-bold text-gray-900 leading-tight mb-6 tracking-tight"
          >
            {t('title')}
          </motion.h2>

          <motion.p
            variants={textItemVariants}
            className="text-sm sm:text-base text-gray-500 text-start font-medium leading-relaxed mb-10 max-w-md"
          >
            {t.rich('description', {
              bold: (chunks) => <span className="font-bold text-theme-brand">{chunks}</span>,
            })}
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('googlePlay')}
              className="transition-shadow hover:shadow-lg rounded-xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt={t('googlePlay')}
                className="h-12 w-auto"
              />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('appStore')}
              className="transition-shadow hover:shadow-lg rounded-xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt={t('appStore')}
                className="h-12 w-auto"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6 relative w-full flex justify-center items-center h-[500px] sm:h-[600px]">
          
          <motion.div
            className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] bg-[#e8ebdf] rounded-full z-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.02),0_20px_35px_-12px_rgba(0,0,0,0.1)] border-16 border-white"
            variants={innovativeShopCircleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-20%" }}
          />

          <motion.div
            className="absolute top-16 right-10 sm:right-16 text-[#7d8866] z-10"
            variants={innovativeShopStarVariants(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-20%" }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-10 sm:left-16 text-[#7d8866] z-10"
            variants={innovativeShopStarVariants(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-20%" }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-1/3 left-5 sm:left-8 text-[#a6b08a] z-10"
            variants={innovativeShopStarVariants(3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:false, margin: "-20%" }}
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </motion.div>

          <motion.div
            className="relative w-[220px] sm:w-[270px] aspect-[9/18.5] rounded-[40px] overflow-hidden will-change-transform"
            variants={innovativeShopCinematicPhoneVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
          >
            <Image
              src={HOME_IMAGES.innovativeShop}
              alt={t('title')}
              width={270}
              height={555}
              className="w-full h-full object-cover object-top select-none"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}