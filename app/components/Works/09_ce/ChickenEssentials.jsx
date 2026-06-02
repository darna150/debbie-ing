import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';
import { ScrollFadeIn } from '../../animation/motion';

import header from '../../../../public/works/chicken-essentials/header.png';
import debbieDirector from '../../../../public/debbie/debbie-director.png';
import collection from '../../../../public/works/chicken-essentials/collection.png';

const ChickenEssentials = () => {
  return (
    <>
      <section
        className='bg-white text-black relative chicken-essentials-container'
        id='chicken-essentials'
      >
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/chicken-essentials/ce-logo.svg'}
              alt=''
              width={871}
              height={259}
              className='w-3/5 max-w-[500px] mx-auto'
            />
          </div>
          <div className='relative bg-gradient-to-t from-white w-full h-14 col-span-full z-20 fix-3d'></div>
          {/* CONTENT */}
          <div className='relative bg-white z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* IMAGE WITH PARAGRAPH */}
            <div className='col-span-full'>
              <Image
                src={header}
                alt=''
                placeholder='blur'
                className='w-full'
              />
              <ScrollFadeIn>
                <p className='text-black !font-bold mt-6'>
                  Protein, nutrition, and poultry are often discussed in
                  technical language. The opportunity was to translate these
                  ideas into everyday relevance.
                </p>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#D00200]'>
                  We built content systems that helped farmers, distributors,
                  and consumers understand quality, health, and value in
                  practical ways.
                </h2>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <div className='md:max-w-[85%] mx-auto mt-12 flex flex-col-reverse md:flex-row gap-y-12 gap-x-20 items-center'>
                <ScrollFadeIn className='w-full md:w-8/12'>
                  <p>
                    Education became the foundation of trust. When people
                    understand what they are buying and why it matters, they
                    stay loyal.
                  </p>
                </ScrollFadeIn>
                <div className='w-full md:w-4/12'>
                  <Image
                    src={debbieDirector}
                    alt=''
                    className='w-full max-w-[150px] md:max-w-[300px] m-auto'
                    placeholder='blur'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#D00200]'>
                  Education became the foundation of trust.
                </h2>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <Image
                src={collection}
                alt=''
                className='w-full'
                placeholder='blur'
              />
            </div>

            <ScrollFadeIn className='col-span-full'>
              <p>
                When people understand what they are buying and why it matters,
                they stay loyal.
              </p>
            </ScrollFadeIn>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#D00200]'>
                  Chicken Essentials: Building a Category Through Education
                </h2>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <VimeoVideo
                whiteBG={true}
                videoID='925739533'
                title='Alagang Mapagmahal - Chicken Essentials Highlights'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChickenEssentials;
