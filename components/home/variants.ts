import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 20,
    },
  },
};

export const phoneVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0, rotateY: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 24,
      delay: 0.4,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { x: -50, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18,
      delay: 0.7,
    },
  },
};

export const waffleVariants: Variants = {
  hidden: { x: 50, opacity: 0, rotate: 15, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 20,
      delay: 0.8,
    },
  },
};

export const sushiVariants: Variants = {
  hidden: { y: 60, opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: -6,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 22,
      delay: 0.9,
    },
  },
};

export const buttonHoverVariants: Variants = {
  hover: { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 15 } },
  tap: { scale: 0.97 },
};

export const scrollIndicatorVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.1, duration: 0.5, ease: 'easeOut' },
  },
};

// ─── WhyChooseUs Variants ───────────────────────────────────────

export const whyChooseUsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const whyChooseUsHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const whyChooseUsFeatureCardVariants = (isRTL: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isRTL ? -60 : 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export const whyChooseUsIconContainerVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.4,
    },
  },
};

export const whyChooseUsLineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

// ─── 3D Hover & Float Variants ─────────────────────────────────

export const card3DHoverVariants: Variants = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -10,
    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
    transition: { type: 'spring', stiffness: 300, damping: 18 },
  },
};

export const iconFloatVariants: Variants = {
  rest: { y: 0 },
  float: {
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const iconPulseVariants: Variants = {
  rest: { scale: 1 },
  pulse: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
