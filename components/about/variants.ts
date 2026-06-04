import type { Variants } from 'framer-motion';
import { cubicBezier } from 'framer-motion';

export const aboutContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const aboutTextVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
    },
  },
};

export const aboutVideoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
      delay: 0.2,
    },
  },
};

export const aboutBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.1,
    },
  },
};

export const aboutStoryImageVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
    },
  },
};

export const aboutStatCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 * index,
      ease: 'easeOut' as const,
    },
  }),
};

export const aboutStatValueVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
};
