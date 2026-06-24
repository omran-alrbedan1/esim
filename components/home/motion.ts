import type { Variants } from 'framer-motion';

export const premiumEase = [0.16, 1, 0.3, 1] as const;
export const softEase = [0.22, 1, 0.36, 1] as const;

export const springSoft = {
  type: 'spring',
  stiffness: 120,
  damping: 22,
  mass: 0.9,
} as const;

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: '-80px',
} as const;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    transform: 'translate3d(0, 28px, 0) scale(0.985)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'translate3d(0, 0px, 0) scale(1)',
    transition: {
      duration: 0.78,
      ease: premiumEase,
    },
  },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.24, ease: premiumEase },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.08,
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    transform: 'translate3d(0, 22px, 0) scale(0.97)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'translate3d(0, 0px, 0) scale(1)',
    transition: springSoft,
  },
};
