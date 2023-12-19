import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';

const Email = () => {
  return (
    <>
      <div className='bg-black w-full mb-5 h-[1px]'>{/* LINE */}</div>
      <IconText icon={'email'}>Email</IconText>
      <Link
        href={'/'}
        className='text-3xl font-bold tracking-tight hover:text-purple-500'
      >
        debbie@email.com
      </Link>
    </>
  );
};

export default Email;
