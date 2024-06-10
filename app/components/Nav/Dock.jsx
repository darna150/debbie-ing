'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';

import debbie from '../../../public/icons/debbie-icon.png';
import bi from '../../../public/icons/bi-icon.svg';
import jfc from '../../../public/icons/jfc-icon.svg';
import smc from '../../../public/icons/smc-icon.svg';
import kemin from '../../../public/icons/kemin-icon.svg';
import dost from '../../../public/icons/dost-icon.svg';
import dost_pcaard from '../../../public/icons/dost-pcaard-icon.svg';
import giz from '../../../public/icons/giz-icon.svg';
import searca from '../../../public/icons/searca-icon.svg';
import ce from '../../../public/icons/ce-icon.svg';
import contact from '../../../public/icons/contact-icon.svg';

const dock = {
  data: [
    {
      image: debbie,
      href: '#about',
    },
    {
      image: bi,
      href: '#boehringer',
    },
    {
      image: smc,
      href: '#sanmiguelcorp',
    },
    {
      image: jfc,
      href: '#jfc',
    },
    // {
    //   image: kemin,
    //   href: '#kemin',
    // },
    {
      image: dost,
      href: '#dost',
    },
    {
      image: dost_pcaard,
      href: '#dost-pcaard',
    },
    {
      image: giz,
      href: '#giz',
    },
    {
      image: searca,
      href: '#searca',
    },
    {
      image: ce,
      href: '#chicken-essentials',
    },
    {
      image: contact,
      href: '#contact',
    },
  ],
};

const showDockAnim = {
  initial: {
    y: '150%',
    x: '-50%',
  },
  animate: {
    y: 0,
  },
};

export const Dock = () => {
  const [showDock, setShowDock] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', offsetTop: document.getElementById('about').offsetTop },
        {
          id: 'boehringer',
          offsetTop: document.getElementById('boehringer').offsetTop,
        },
        {
          id: 'sanmiguelcorp',
          offsetTop: document.getElementById('sanmiguelcorp').offsetTop,
        },
        { id: 'jfc', offsetTop: document.getElementById('jfc').offsetTop },
        // { id: 'kemin', offsetTop: document.getElementById('kemin').offsetTop },
        { id: 'dost', offsetTop: document.getElementById('dost').offsetTop },
        {
          id: 'dost-pcaard',
          offsetTop: document.getElementById('dost-pcaard').offsetTop,
        },
        { id: 'giz', offsetTop: document.getElementById('giz').offsetTop },
        {
          id: 'searca',
          offsetTop: document.getElementById('searca').offsetTop,
        },
        {
          id: 'chicken-essentials',
          offsetTop: document.getElementById('chicken-essentials').offsetTop,
        },
        {
          id: 'contact',
          offsetTop: document.getElementById('contact').offsetTop,
        },
        // Add other sections as needed
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          setCurrentSection(sections[i].id);
          break;
        }
      }

      const headerHeight = document.getElementById('header').offsetHeight;
      const aboutHeight = document.getElementById('about').offsetHeight;
      // const scrollPosition = window.scrollY;

      if (
        window.scrollY + window.innerHeight / 2 >
        headerHeight + aboutHeight / 2
      ) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the indices where you want the separators
  const separatorIndices = [0, 8];

  return (
    <motion.div
      className='
      max-w-[95%] 
      mx-auto h-16 
      flex items-end gap-4 
      overflow-x-scroll md:overflow-visible snap-x
    bg-neutral-200/40 backdrop-blur-sm rounded-2xl 
      px-4 py-3 
      fixed left-1/2 bottom-2 z-[99]
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
          {/* Conditionally render a separator */}
          {separatorIndices.includes(i) && (
            <div className='relative min-w-[1px] h-full bg-neutral-500'></div>
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

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 75, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const isActive = href.slice(1) === currentSection;

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width: isLargeScreen ? width : 'auto' }}
      className='relative aspect-square min-w-10 block drop-shadow-[0_2px_1px_rgba(0,0,0,0.2)]'
    >
      <Image src={image} alt='' />
      <span
        className={`absolute left-1/2 -translate-x-1/2 -bottom-2 size-1 rounded-full ${
          isActive ? 'bg-neutral-900/50' : 'bg-transparent'
        }`}
      ></span>
    </motion.a>
  );
};
