import React from 'react';
import IconText from '../ui/IconText';

const Skills = () => {
  return (
    <>
      <div className='bg-black w-full mb-5 h-[1px]'>{/* LINE */}</div>
      <IconText icon={'barbell'}>I do</IconText>
      <ul className='text-5xl font-bold flex flex-col gap-1 tracking-tight'>
        <li>Art direction,</li>
        <li>content design,</li>
        <li>& strategy</li>
      </ul>
    </>
  );
};

export default Skills;
