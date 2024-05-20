'use client';
import React from 'react';
import { motion } from 'framer-motion';

const goUp = {
  initial: {
    y: '105%',
  },
  animate: {
    y: 0,
  },
};

const SplitText = ({ children }) => {
  const splitText = children.split('');

  return (
    <>
      {splitText.map((char, index) => (
        <span
          key={index}
          className='inline-block overflow-hidden pb-4 -mb-4 pr-1 -mr-1'
        >
          <motion.span
            className='inline-block'
            variants={goUp}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.6, delay: index * 0.02, ease: 'circOut' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </>
  );
};

export default SplitText;
