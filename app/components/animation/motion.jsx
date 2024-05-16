'use client';
import { motion } from 'framer-motion';
export const fadeUp = {
  initial: {
    opacity: 0,
    y: '100%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'circOut', delay: 0.1 },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'circOut' },
  },
};

export const imageFade = {
  initial: {
    opacity: 0,
    y: '20%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'circOut', delay: 0.1 },
  },
};

export const MotionFade = ({ children, image }) => {
  return (
    <motion.div
      variants={image ? imageFade : fadeIn}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      className='w-full'
    >
      {children}
    </motion.div>
  );
};
