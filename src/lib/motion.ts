import type { Variants } from 'framer-motion';

const tooltipVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const navMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'backOut',
    },
  },
};

const slideVariants = (delay: number): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.7,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: 'circOut',
    },
  },
});

export { tooltipVariants, navMenuVariants, slideVariants };
