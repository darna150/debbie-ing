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
        href={'mailto:dvmelgarejo@up.edu.ph'}
        className='text-2xl md:text-4xl font-bold tracking-tight hover:text-purple-500'
      >
        dvmelgarejo@up.edu.ph
      </Link>
    </>
  );
};

export default Email;
