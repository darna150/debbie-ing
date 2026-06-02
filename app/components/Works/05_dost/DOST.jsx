import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';
import { ScrollFadeIn } from '../../animation/motion';

import header from '../../../../public/works/dost/dost-header.png';
import snap1 from '../../../../public/works/dost/DOST-SNAP-1.png';
import snap2 from '../../../../public/works/dost/DOST-SNAP-2.png';
import snap3 from '../../../../public/works/dost/DOST-SNAP-3.png';

const DOST = () => {
  return (
    <>
      <div className='relative dost-container' id='dost'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/dost/dost-logo.svg'}
              alt=''
              width={480}
              height={480}
              className='w-2/5 mx-auto max-w-[300px]'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-14 col-span-full z-20 fix-3d -mb-8'></div>
          {/* IMAGE HEADER */}
          <div className='relative z-20 grid md:grid-cols-6 gap-16 fix-3d'>
            <div className='col-span-full'>
              <Image
                src={header}
                alt=''
                className='w-full max-w-[1080px] mx-auto'
                placeholder='blur'
              />
            </div>
          </div>
          {/* GRADIENT */}
          <div className='relative bg-[#48C4D3] w-full h-16 md:h-40 col-span-full z-10 fix-3d -mt-16 md:-mt-40'></div>
        </div>
      </div>
      <section className='bg-[#48C4D3] text-black relative dost-container -mt-16 md:-mt-40'>
        <div className='container mx-auto pt-32 md:pt-60 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#48C4D3] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* Intro  */}
            <ScrollFadeIn className='col-span-full m-auto'>
              <p className='w-full'>
                Science communication often struggles with accessibility.
              </p>
            </ScrollFadeIn>

            {/* GOAL */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>
                  We translated complexity into real stories, real applications,
                  and tangible impact.
                </h2>
                <p className='mt-2 md:mt-4'>
                  Science communication often struggles with accessibility.
                </p>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <VimeoVideo
                videoID='925739821'
                title='DOST Science for Change Program Culminating Event'
              />
            </div>

            <div className='relative col-span-full'>
              <div className='relative flex flex-col md:flex-row gap-y-12 gap-x-20'>
                <ScrollFadeIn className='w-full md:w-7/12 md:sticky md:top-0'>
                  <p>
                    Curiosity expands when science feels relatable.
                  </p>
                </ScrollFadeIn>
                <div className='w-full md:w-5/12 flex flex-col gap-4 md:gap-8'>
                  <Image
                    src={snap1}
                    alt=''
                    placeholder='blur'
                    className='w-full h-auto'
                  />
                  <Image
                    src={snap2}
                    alt=''
                    placeholder='blur'
                    className='w-full h-auto'
                  />
                  <Image
                    src={snap3}
                    alt=''
                    placeholder='blur'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DOST;
