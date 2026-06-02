'use client';
import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';
import { ThinLine } from '../ui/Lines';
import { motion } from 'framer-motion';
import { fadeUp } from '../animation/motion';

const works = [
  { id: 1, link: '#true-legacy', work: 'True Legacy Homes' },
  { id: 2, link: '#missio', work: 'Missio' },
  { id: 3, link: '#boehringer', work: 'Frontline' },
  { id: 4, link: '#sanmiguelcorp', work: 'Nutri Chunks' },
  { id: 5, link: '#jfc', work: 'Jollibee' },
  { id: 6, link: '#dost', work: 'DOST' },
  { id: 7, link: '#giz', work: 'GIZ' },
  { id: 8, link: '#chicken-essentials', work: 'Chicken Essentials' },
];

const workColors = [
  'hover:text-[#00AA9F]',
  'hover:text-[#20A851]',
  'hover:text-[#113661]',
  'hover:text-[#27449E]',
  'hover:text-[#EA1B3B]',
  'hover:text-[#4BC5D4]',
  'hover:text-[#D40E14]',
  'hover:text-[#C47B2B]',
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
