import React from 'react';
import IconText from '../ui/IconText';
import { ThinLine } from '../ui/Lines';

const Skills = () => {
  return (
    <>
      <ThinLine />
      <IconText icon={'barbell'}>Superpowers</IconText>
      <ul className='text-2xl md:text-4xl leading-none font-bold flex flex-col gap-1 tracking-tight'>
        <li>Creative Direction,</li>
        <li>Content Development,</li>
        <li>& Strategic Execution</li>
      </ul>
    </>
  );
};

export default Skills;
