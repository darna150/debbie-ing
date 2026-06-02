'use client';
import React from 'react';
import IconText from '../ui/IconText';
import { ThinLine } from '../ui/Lines';
import { fadeUp } from '../animation/motion';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, skill: 'Creative Direction' },
  { id: 2, skill: 'Content Development' },
  { id: 3, skill: 'Strategic Execution' },
  { id: 4, skill: 'Digital Strategy' },
];

const Skills = () => {
  return (
    <>
      <ThinLine />
      <IconText icon={'barbell'}>Superpowers</IconText>
      <ul className='text-2xl md:text-4xl leading-none font-bold flex flex-col gap-1 tracking-tight'>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeUp}
            initial='initial'
            animate='animate'
          >
            {index !== skills.length - 1
              ? `${skill.skill},`
              : `& ${skill.skill}`}
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
