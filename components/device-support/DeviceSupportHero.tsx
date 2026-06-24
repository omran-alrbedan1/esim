'use client';

import { ChevronRight, Globe, Rocket, Wifi, Infinity } from 'lucide-react';
import Image from 'next/image';
import { DEVICE_SUPPORT_IMAGES, FRAMES } from '@/constants/images'; 
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function DeviceSupportHero() {
  return (
    <section className="w-full px-4 mt-12 py-12 sm:px-6 lg:px-8 lg:py-20 text-[#1A0B2E]">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 items-stretch">
          <FeatureCard />
          <GraphicCard />
        </div>
      </div>
    </section>
  );
}

export function FeatureCard() {
  return (
    <div className="flex flex-col justify-between rounded-[36px] bg-[#FAF4FF] border border-[#F1E7FC] p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(107,68,143,0.02)]">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-[#1A0B2E] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
          Does Your Device <br />
          <span className="bg-gradient-to-r from-[#9A42E4] to-[#6A25A5] bg-clip-text text-transparent">
            Support eSIM?
          </span>
        </h1>
        
        {/* Short Accent Bar */}
        <div className="h-[3px] w-12 rounded-full bg-[#FF4D80]" />
        
        <p className="pt-2 text-sm leading-relaxed text-[#544665] sm:text-base opacity-90">
          Before purchasing any eSIM plan, make sure your device supports eSIM technology and is carrier-unlocked. Most modern smartphones support eSIM, but compatibility may vary depending on the device model and country of purchase.
        </p>
      </div>

      {/* Styled Multi-Button Capsule Assembly */}
      <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#EFE5FA] bg-white p-1.5 shadow-sm max-w-max">
        <Link
          href="/supported-devices"
          className="button button-dark bg-[#1A0B2E] text-white px-5 py-2.5 rounded-full text-sm font-medium transition hover:opacity-90"
        >
          View Supported Devices
        </Link>
        
        <Link
          href="/support"
          className="group flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#1A0B2E] transition hover:opacity-70"
        >
          <span>Learn More</span>
          <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export function GraphicCard() {
  return (
    <div className="relative min-h-[440px] md:min-h-full overflow-hidden rounded-[40px] text-white flex items-center justify-center">
      
      {/* Background Image Asset */}
      <Image
        src={FRAMES.frame1}
        alt="Background Card Pattern"
        fill
        sizes="(max-w-md) 100vw, 500px"
        className="object-contain"
        priority
      />

      {/* 3D Glass Sphere Core Graphic / Device Graphic */}
      <div className="w-full h-auto aspect-square flex items-center relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] select-none pointer-events-none z-10">
        <Image
          src={DEVICE_SUPPORT_IMAGES.hero}
          alt="eSIM Device Verification Graphic"
          height={250}
          width={250}
          sizes="(max-w-md) 50vw, 350px"
          className="object-contain mx-auto "
        />
        
        {/* Floating Text Overlay over the Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="absolute top-[22%] left-[12%] bg-white text-[#1A0B2E] px-5 py-2 rounded-[20px] shadow-lg max-w-[210px] pointer-events-auto"
        >
          <p className="text-[13px] font-medium leading-snug">
            Check Your <span className="text-[#9A42E4] font-bold">Device!</span>
          </p>
        </motion.div>
      </div>

      {/* --- TOP RIGHT CORNER ICON --- */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="absolute top-6 right-4 z-20 p-3 rounded-2xl"
      >
        <div className="relative">
          <Globe size={24} className="text-primary" />
        </div>
      </motion.div>

      {/* --- BOTTOM LEFT / BORDER ICONS --- */}
      <motion.div 
        className="absolute bottom-6 left-2 z-20 flex flex-col gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.5 
            }
          }
        }}
      >
        {[
          { icon: <Rocket size={18} className="transform rotate-45" /> },
          { icon: <Wifi size={18} /> },
          { icon: <Infinity size={18} /> }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { 
                opacity: 0, 
                y: 20, 
                rotate: 360, 
                scale: 0.3
              },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotate: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 120, 
                  damping: 20, 
                  mass: 1.2, 
                  duration: 1.8, 
                  ease: "easeOut" 
                }
              }
            }}
            whileHover={{
              scale: 1.15,
              rotate: 15,
              backgroundColor: "#9A42E4",
              transition: { type: "spring", stiffness: 300, damping: 12 }
            }}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#1A0B2E]/90 backdrop-blur-sm border border-white/10 text-white shadow-lg group transition-colors duration-200"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9A42E4]/0 via-[#9A42E4]/20 to-[#FF4D80]/0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            />
            {item.icon}
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}