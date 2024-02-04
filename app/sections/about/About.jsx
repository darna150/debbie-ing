import React from 'react';
import Image from 'next/image';
import { ThinLine } from '@/app/components/ui/Lines';
import aboutImage from '../../../public/debbie-drawing.png';

const About = () => {
  return (
    <section className='bg-black text-white' id='company1'>
      <div className='container mx-auto py-16 px-5'>
        <div className='sticky top-0 h-fit z-10'>
          <Image
            src={aboutImage}
            width={700}
            height={700}
            alt='Drawing of Debbie'
            placeholder='blur'
            className='w-full max-w-[500px] mx-auto mb-8'
          />
        </div>
        <div className='relative z-20 bg-black'>
          <ThinLine color='bg-white' />
          <h2 className='text-xl md:text-2xl font-bold leading-1 text-white/75'>
            Origin Story
          </h2>
          <div className='text-xl md:text-2xl mt-4'>
            <p>
              In a world where innovation reigns supreme, there&apos;s a
              development communicator with a knack for sparking change.
              She&apos;s all about creativity, startups, and the latest in tech,
              armed with a degree and a boatload of experience in shaping ideas
              and spreading messages.
            </p>
            <p>
              This hero isn&apos;t just words and ideas—she&apos;s a wizard with
              software like Adobe Creative Suite, crafting visions that come to
              life. But what sets them apart isn&apos;t just their skills;
              it&apos;s their laser focus on perfection and their knack for
              bringing together people from different sectors, making amazing
              things happen.
            </p>
            <p>
              Her goal isn&apos;t just a job—it&apos;s a mission to make the
              world better, bit by bit, leaving behind a trail of awesome
              projects that bring big changes to people&apos;s lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
