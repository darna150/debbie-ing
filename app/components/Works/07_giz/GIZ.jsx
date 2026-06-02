import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';
import { ScrollFadeIn } from '../../animation/motion';

import header from '../../../../public/works/giz/giz-header.png';
import collection from '../../../../public/works/giz/collection.png';

const GIZ = () => {
  return (
    <>
      <div className='relative giz-container' id='giz'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/giz/giz-logo.svg'}
              alt=''
              width={480}
              height={480}
              className='w-[90%] mx-auto max-w-[600px]'
            />
          </div>
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
        </div>
      </div>
      <section className='bg-[#D40E14] text-black relative giz-container -mt-16 md:-mt-40'>
        <div className='container mx-auto pt-40 md:pt-60 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#D40E14] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* GOAL */}
            <div className='col-span-full'>
              <ScrollFadeIn>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>
                  Advocacy can be loud and still fail to connect.
                </h2>
              </ScrollFadeIn>
              <ThickLine color='bg-white' />
            </div>

            <div className='col-span-full'>
              <VimeoVideo
                videoID='925740123'
                title='Climate Information System - GIZ'
              />
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>
                  Human stories led. Institutional voice stepped back.
                </h2>
                <p className='mt-2 md:mt-4'>
                  Advocacy can be loud and still fail to connect.
                </p>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <Image
                src={collection}
                alt=''
                placeholder='blur'
                className='w-full'
              />
            </div>

            <ScrollFadeIn className='col-span-full'>
              <p>
                Empathy creates attention.
              </p>
            </ScrollFadeIn>

            <div className='col-span-full'>
              <VimeoVideo videoID='925740071' title='GIZ Highlights' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GIZ;
