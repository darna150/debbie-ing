'use client';
import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';
import { ThinLine } from '../ui/Lines';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation/motion';

const works = [
  { id: 1, link: '#boehringer', work: 'Boehringer Ingelheim Philippines' },
  { id: 2, link: '#sanmiguelcorp', work: 'San Miguel Corporation' },
  { id: 3, link: '#jfc', work: 'Jollibee Foods Corporation' },
  // { id: 4, link: '#kemin', work: 'Kemin Asia Pacific' },
  { id: 5, link: '#dost', work: 'DOST' },
  { id: 6, link: '#dost-pcaard', work: 'DOST-PCAARD' },
  { id: 7, link: '#giz', work: 'GIZ' },
  { id: 8, link: '#searca', work: 'SEARCA' },
  {
    id: 9,
    link: '#chicken-essentials',
    work: 'Chicken Essentials Phils., Inc.',
  },
];

const workColors = [
  'hover:text-[#113661]',
  'hover:text-[#27449E]',
  'hover:text-[#EA1B3B]',
  // 'hover:text-[#D43020]',
  'hover:text-[#4BC5D4]',
  'hover:text-[#0097D7]',
  'hover:text-[#D40E14]',
  'hover:text-[#096936]',
  'hover:text-[#D00200]',
];

const WorkHistory = () => {
  return (
    <>
      <ThinLine />
      <IconText icon='arrowRight'>Mission Accomplished</IconText>
      <ul className='text-2xl md:text-4xl leading-none font-bold flex flex-col gap-1 tracking-tight'>
        {works.map((work, index) => (
          <motion.li
            key={work.id}
            variants={fadeUp}
            initial='initial'
            animate='animate'
          >
            <Link href={`${work.link}`} className={`${workColors[index]}`}>
              {index !== works.length - 1 ? `${work.work},` : `& ${work.work}`}
            </Link>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default WorkHistory;
