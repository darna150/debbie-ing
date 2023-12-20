import React from 'react';
import IconText from '../ui/IconText';
import Link from 'next/link';
import { ThinLine } from '../ui/Lines';

const WorkHistory = () => {
  return (
    <>
      <ThinLine />
      <IconText icon='arrowRight'>I&apos;ve worked at</IconText>
      <ul className='text-clamp-5xl leading-none font-bold flex flex-col gap-1 tracking-tight'>
        <li>
          <Link href={'#company1'} className='hover:text-blue-500'>
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
