'use client';
import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';
import { ThinLine } from '../ui/Lines';
import { fadeUp } from '../animation/motion';
import { motion } from 'framer-motion';

const Email = () => {
  return (
    <>
      <ThinLine />
      <IconText icon={'email'}>Email</IconText>
      <Link
        href={'mailto:hol@justdebbie.ing'}
        className='text-2xl md:text-4xl font-bold tracking-tight hover:text-purple-500'
      >
        <motion.span
          variants={fadeUp}
          initial='initial'
          whileInView='animate'
          className='inline-block'
        >
          hol@justdebbie.ing
        </motion.span>
      </Link>
    </>
  );
};

export default Email;
