'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollFadeIn = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '40vh 1'],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
