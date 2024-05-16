import React from 'react';
import Image from 'next/image';
import { ThinLine } from '@/app/components/ui/Lines';

const About = () => {
  return (
    <section className='bg-black text-white'>
      <div className='container mx-auto py-16 px-5'>
        <div className='sticky top-0 h-fit z-10'>
          <Image
            src={'/debbie/debbie_blink.gif'}
            width={400}
            height={400}
            alt='Drawing of Debbie'
            loading='lazy'
            className='w-full max-w-[400px] mx-auto z-10'
          />
        </div>
        <div className='relative bg-gradient-to-t from-[black] w-full h-12 col-span-full z-20 fix-3d'></div>
        <div className='relative z-20 bg-black fix-3d'>
          <ThinLine color='bg-white' />
          <h2 className='text-2xl md:text-3xl font-bold leading-1 text-white'>
            Origin Story
          </h2>
          <div className='text-xl md:text-2xl font-medium text-white/75 mt-6'>
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
