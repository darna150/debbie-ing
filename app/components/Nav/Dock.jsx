'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

const images = {
  debbie: debbie,
  bi: bi,
  jfc: jfc,
  smc: smc,
  kemin: kemin,
  dost: dost,
  dost_pcaard: dost_pcaard,
  giz: giz,
  searca: searca,
  ce: ce,
};

const dock = {
  data: [
    {
      image: 'debbie',
      href: '#about',
    },
    {
      image: 'bi',
      href: '#boehringer',
    },
    {
      image: 'jfc',
      href: '#sanmiguelcorp',
    },
    {
      image: 'smc',
      href: '#jfc',
    },
    {
      image: 'kemin',
      href: '#kemin',
    },
    {
      image: 'dost',
      href: '#dost',
    },
    {
      image: 'dost_pcaard',
      href: '#dost',
    },
    {
      image: 'giz',
      href: '#giz',
    },
    {
      image: 'searca',
      href: '#searca',
    },
    {
      image: 'ce',
      href: '#chicken-essentials',
    },
  ],
};

export const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto flex h-16 items-end gap-4 rounded-2xl 
          bg-neutral-200/80 backdrop-blur-sm
          px-4 pb-3 
      fixed left-1/2 -translate-x-1/2 bottom-4 z-[99]
      '
    >
      {dock.data.map((data, i) => (
        <AppIcon
          mouseX={mouseX}
          key={i}
          image={images[data.image]}
          href={data.href}
        />
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
      className='aspect-square w-10 overflow-hidden block drop-shadow-[0_2px_1px_rgba(0,0,0,0.2)]'
    >
      <Image src={image} alt='' />
    </motion.a>
  );
};
