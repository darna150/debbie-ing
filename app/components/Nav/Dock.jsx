'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
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
    {
      image: kemin,
      href: '#kemin',
    },
    {
      image: dost,
      href: '#dost',
    },
    {
      image: dost_pcaard,
      href: '#dost_pcaard',
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
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById('header').offsetHeight;
      const aboutHeight = document.getElementById('about').offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > headerHeight + aboutHeight / 2) {
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

  return (
    <motion.div
      className='mx-auto flex h-16 items-end gap-4 rounded-2xl 
    bg-neutral-200/40 backdrop-blur-sm
    px-4 pb-3 
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
        <AppIcon mouseX={mouseX} key={i} image={data.image} href={data.href} />
      ))}
    </motion.div>
  );
};

const AppIcon = ({ mouseX, image, href }) => {
  const ref = useRef(null);

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

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width }}
      className='aspect-square w-10 block drop-shadow-[0_2px_1px_rgba(0,0,0,0.2)]'
    >
      <Image src={image} alt='' />
    </motion.a>
  );
};
