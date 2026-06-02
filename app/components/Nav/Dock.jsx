'use client';
/* eslint-disable @next/next/no-img-element */

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const dock = {
  data: [
    { image: '/icons/debbie-icon.png', href: '#about' },
    { image: '/icons/true-legacy-icon.svg', href: '#true-legacy' },
    { image: '/icons/missio-icon.svg', href: '#missio' },
    { image: '/icons/bi-icon.svg', href: '#boehringer' },
    { image: '/icons/smc-icon.svg', href: '#sanmiguelcorp' },
    { image: '/icons/jfc-icon.svg', href: '#jfc' },
    { image: '/icons/dost-icon.svg', href: '#dost' },
    { image: '/icons/giz-icon.svg', href: '#giz' },
    { image: '/icons/ce-icon.svg', href: '#chicken-essentials' },
    { image: '/icons/contact-icon.svg', href: '#contact' },
  ],
};

const showDockAnim = {
  initial: { y: '150%', x: '-50%' },
  animate: { y: 0, x: '-50%' },
};

export const Dock = () => {
  const [showDock, setShowDock] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'about', 'true-legacy', 'missio', 'boehringer',
        'sanmiguelcorp', 'jfc', 'dost', 'giz',
        'chicken-essentials', 'contact',
      ];

      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, offsetTop: el.offsetTop } : null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          setCurrentSection(sections[i].id);
          break;
        }
      }

      const header = document.getElementById('header');
      const about = document.getElementById('about');
      if (header && about) {
        if (window.scrollY + window.innerHeight / 2 > header.offsetHeight + about.offsetHeight / 2) {
          setShowDock(true);
        } else {
          setShowDock(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const separatorIndices = [0, 8];

  return (
    <motion.div
      className='
      max-w-[95%] mx-auto h-12
      flex items-center gap-2
      overflow-x-scroll md:overflow-visible snap-x
      border border-neutral-300 bg-white/90 backdrop-blur-md rounded-full
      px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      fixed left-1/2 bottom-3 z-[99]
      '
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      variants={showDockAnim}
      initial='initial'
      animate={showDock ? 'animate' : 'initial'}
      transition={{ duration: 0.4, ease: 'circOut' }}
    >
      {dock.data.map((data, i) => (
        <React.Fragment key={i}>
          <AppIcon
            mouseX={mouseX}
            image={data.image}
            href={data.href}
            currentSection={currentSection}
          />
          {separatorIndices.includes(i) && (
            <div className='relative min-w-[1px] h-6 bg-neutral-300'></div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

const AppIcon = ({ mouseX, image, href, currentSection }) => {
  const ref = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [32, 52, 32]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const isActive = href.slice(1) === currentSection;

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width: isLargeScreen ? width : 'auto' }}
      className='relative aspect-square min-w-8 block'
    >
      <img src={image} alt='' className='w-full h-full object-contain' />
      <span
        className={`absolute left-1/2 -translate-x-1/2 -bottom-2 size-1 rounded-full transition-colors ${
          isActive ? 'bg-neutral-950' : 'bg-transparent'
        }`}
      ></span>
    </motion.a>
  );
};
