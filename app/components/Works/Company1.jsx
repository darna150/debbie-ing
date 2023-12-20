import React from 'react';
import Image from 'next/image';
import { ThickLine, ThinLine } from '../ui/Lines';
import EyebrowHeadingParagraph from '../ui/EyebrowHeadingParagraph';

const Company1 = () => {
  return (
    <>
      <section className='bg-black text-white' id='company1'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div
            className='sticky top-20 h-fit z-10'
            style={{ containerType: 'inline-size' }}
          >
            <h2 className='text-[15cqw] leading-none text-center font-bold'>
              Company 1
            </h2>
          </div>
          {/* CONTENT */}
          <div className='relative z-20 bg-black mt-20 grid md:grid-cols-6 md:gap-y-40 gap-20 pb-20'>
            {/* IMAGE WITH PARAGRAPH */}
            <div className='col-span-full'>
              <Image
                src={'/works/company1/company.webp'}
                alt=''
                width={1365}
                height={601}
                className='w-full mb-20'
              />
              <ThickLine color='bg-white' />
              <p className='text-clamp-5xl leading-none font-bold'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, et.
              </p>
            </div>

            {/* EYEBROW HEADING PARAGRAPH */}
            <div className='col-span-full md:col-span-3'>
              <EyebrowHeadingParagraph
                color='bg-white'
                eyebrow='Eyebrow Heading'
                heading='Heading 1'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                placeat laborum velit blanditiis nesciunt fuga saepe
                necessitatibus libero, omnis corrupti.
              </EyebrowHeadingParagraph>
            </div>
            <div className='col-span-full md:col-span-3'>
              <EyebrowHeadingParagraph
                color='bg-white'
                eyebrow='Eyebrow Heading'
                heading='Heading 1'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                placeat laborum velit blanditiis nesciunt fuga saepe
                necessitatibus libero, omnis corrupti.
              </EyebrowHeadingParagraph>
            </div>

            <div className='col-span-full md:grid md:grid-cols-12 gap-10'>
              <div className='col-span-full'>
                <ThickLine color='bg-white' />
              </div>
              <div className='col-span-full sticky top-0 md:col-span-4 bg-black/90 backdrop-blur-xl py-5'>
                <h3 className='text-2xl md:text-3xl leading-none font-bold mb-4 sticky top-10 text-neutral-600'>
                  <span className='text-white'>I worked on</span>{' '}
                  <span className=''>site content,</span>{' '}
                  <span className=''>product launches,</span>{' '}
                  <span className=''>social assets,</span>{' '}
                  <span className=''>emails,</span>{' '}
                  <span className=''>print & digital ads,</span>{' '}
                  <span className=''>out-of-home and more.</span>
                </h3>
              </div>
              <div className='col-span-full md:col-span-8'>
                <div className='h-[50rem] w-full bg-red-500 text-red-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'>
                  Social Content
                </div>
                <div className='h-[50rem] w-full bg-green-500 text-green-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'>
                  product launches
                </div>
                <div className='h-[50rem] w-full bg-blue-500 text-blue-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'>
                  emails
                </div>
                <div className='h-[50rem] w-full bg-lime-500 text-lime-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'>
                  print & digital ads
                </div>
                <div className='h-[50rem] w-full bg-purple-500 text-purple-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'>
                  out-of-home and more
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company1;
