'use client';
import { useState } from 'react';
import SplitText from './ui/SplitText';
import { motion } from 'framer-motion';
import { fadeIn } from './animation/motion';

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hol@justdebbie.ing');
    setIsCopied(true);
  };

  return (
    <footer className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6 sm:gap-8'>
        <h2
          className='text-[1.5rem] sm:text-5xl md:text-6xl font-bold tracking-tighter leading-none overflow-hidden'
          aria-label='Ready when you are'
        >
          <SplitText>Ready when you are. </SplitText>
          <motion.span
            variants={fadeIn}
            initial='initial'
            whileInView='animate'
            delay={0.8}
            viewport={{ once: true }}
            className='inline-block overflow-hidden pb-4 -mb-4 pr-1 -mr-1'
          >
            💪
          </motion.span>
        </h2>

        <motion.button
          className='
          text-sm sm:text-xl py-2 px-4 sm:py-4 sm:px-6 flex gap-12 bg-neutral-100 rounded-md sm:rounded-2xl
          relative group transition-all
          hover:bg-neutral-200 hover:scale-[1.05]
          '
          variants={fadeIn}
          initial='initial'
          whileInView='animate'
          delay={0.8}
          viewport={{ once: true }}
          onClick={copyEmail}
          onMouseLeave={() => setIsCopied(false)}
          onBlur={() => setIsCopied(false)}
        >
          <div>Email</div>
          <div className='text-neutral-500 font-medium'>hol@justdebbie.ing</div>

          <span
            className={`tooltiptext 
            absolute z-10 bg-white drop-shadow-md rounded-md bottom-[140%] md:bottom-[120%] left-1/2 -translate-x-1/2 
            text-sm font-medium 
            px-2.5 py-1.5
            invisible group-hover:visible group-focus-visible:visible
            ${isCopied ? 'text-green-600' : 'text-neutral-500'}
          `}
          >
            {isCopied ? 'Copied 🎉' : 'Copy Email'}
          </span>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
