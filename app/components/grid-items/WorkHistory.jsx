import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';

const WorkHistory = () => {
  return (
    <>
      <div className='bg-black w-full mb-5 h-[1px]'>{/* LINE */}</div>
      <IconText icon='arrowRight'>I&apos;ve worked at</IconText>
      <ul className='text-5xl font-bold flex flex-col gap-1 tracking-tight'>
        <li>
          <Link href={'/'} className='hover:text-blue-500'>
            Company 1
          </Link>
          ,
        </li>
        <li>
          <Link href={'/'} className='hover:text-blue-500'>
            Company 2
          </Link>
          ,
        </li>
        <li>
          <Link href={'/'} className='hover:text-blue-500'>
            Company 3
          </Link>
          ,
        </li>
        <li>
          <Link href={'/'} className='hover:text-blue-500'>
            Company 4
          </Link>
          ,
        </li>
        <li>
          &{' '}
          <Link href={'/'} className='hover:text-blue-500'>
            Company 5
          </Link>
        </li>
      </ul>
    </>
  );
};

export default WorkHistory;
