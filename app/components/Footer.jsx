'use client';
import { useState, useEffect } from 'react';
import { useAnimate, useInView, stagger } from 'framer-motion';
import SplitText from './ui/SplitText';

const Footer = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    margin: '0px 0px -40% 0px',
  });
  useEffect(() => {
    if (isInView) {
      animate([
        ['.startAnim', { opacity: 1 }],
        [
          '.splitSpan',
          { y: ['105%', '0%'] },
          { delay: stagger(0.02) },
          { ease: 'circOut' },
        ],
        [
          ['.fadeIn-span', '.fadeIn-button'],
          { opacity: [0, 1] },
          { ease: 'circOut' },
          { duration: '0.1' },
        ],
      ]);
    }
  }, [isInView, animate]);

  // Copy email button
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hol@justdebbie.ing');
    setIsCopied(true);
  };

  return (
    <footer
      className='h-screen flex items-center justify-center'
      ref={scope}
      id='contact'
    >
      <div className='flex flex-col items-center gap-6 sm:gap-8 opacity-0 startAnim'>
        <h2
          className='text-center text-[2rem] sm:text-5xl md:text-6xl font-bold tracking-tighter leading-none overflow-hidden'
          aria-label='Ready when you are'
        >
          <SplitText animateOnce={false}>Ready, when you are. </SplitText>
          <span className='inline-block overflow-hidden pb-4 -mb-4 pr-1 -mr-1 fadeIn-span'>
            💪
          </span>
        </h2>

        <button
          className='
           sm:text-xl py-2 px-4 sm:py-4 sm:px-6 flex gap-12 bg-neutral-100 rounded-md sm:rounded-2xl
          relative group transition-all
          hover:bg-neutral-200 hover:scale-[1.05]
          fadeIn-button
          '
          onClick={copyEmail}
          onMouseLeave={() => setIsCopied(false)}
          onBlur={() => setIsCopied(false)}
        >
          <div>Email</div>
          <div className='text-neutral-500 font-medium'>hol@justdebbie.ing</div>

          <span
            className={`tooltiptext transform-gpu
            absolute z-10 bg-white drop-shadow-md rounded-md bottom-[140%] md:bottom-[120%] left-1/2 -translate-x-1/2 
            text-sm font-medium 
            px-2.5 py-1.5
            invisible group-hover:visible group-focus-visible:visible
            ${isCopied ? 'text-green-600' : 'text-neutral-500'}
          `}
          >
            {isCopied ? 'Copied 🎉' : 'Copy Email'}
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
