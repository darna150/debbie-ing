import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';
import { ThinLine } from '../ui/Lines';

const Email = () => {
  return (
    <>
      <ThinLine />
      <IconText icon={'email'}>Email</IconText>
      <Link
        href={'/'}
        className='text-3xl md:text-4xl font-bold tracking-tight hover:text-purple-500'
      >
        joshua@email.com
      </Link>
    </>
  );
};

export default Email;
