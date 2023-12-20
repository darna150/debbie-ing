import React from 'react';
import IconText from '../ui/IconText';
import { ThinLine } from '../ui/Lines';

const Skills = () => {
  return (
    <>
      <ThinLine />
      <IconText icon={'barbell'}>I do</IconText>
      <ul className='text-clamp-5xl leading-none font-bold flex flex-col gap-1 tracking-tight'>
        <li>Art direction,</li>
        <li>content design,</li>
        <li>& strategy</li>
      </ul>
    </>
  );
};

export default Skills;
