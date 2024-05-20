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
                  Amidst the bustling aspirations of Chicken Essentials Phils.,
                  Inc. to broaden their business horizons, an intriguing task
                  landed on my desk.
                </p>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#D00200]'>
                  <span className='text-2xl md:text-3xl font-medium block mb-4 text-black/90'>
                    It was no ordinary assignment but a grand opportunity:
                  </span>
                  to craft an audiovisual masterpiece that would illuminate the
                  company&apos;s prowess to potential investors.
                </h2>
              </ScrollFadeIn>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <div className='md:max-w-[85%] mx-auto mt-12 flex flex-col-reverse md:flex-row gap-y-12 gap-x-20 items-center'>
                <ScrollFadeIn className='w-full md:w-8/12'>
                  <p>
                    Entrusted with this vital mission, I, together with a
                    skillful production team embarked on a journey to
                    encapsulate the very essence of Chicken Essentials Phils.,
                    Inc.
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
                  <span className='text-2xl md:text-3xl font-medium block mb-4 text-black/90'>
                    What made this company stand out wasn&apos;t just their
                    products but something deeper
                  </span>
                  <span className='text-black'>—</span>a genuine, empathetic
                  approach towards customers, employees, and Filipino families.
                  This wasn&apos;t just a feature; it was their greatest
                  strength, and it begged to be unveiled to the world.
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
                With each frame meticulously crafted, the audiovisual
                presentation began to take shape. It wasn&apos;t merely a
                sequence of images and words; it was a narrative, a story that
                resonated with warmth and sincerity.
              </p>
            </ScrollFadeIn>

            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#D00200]'>
                  Through carefully chosen visuals and evocative storytelling,
                  the video came alive, breathing the very spirit of Chicken
                  Essentials Phils., Inc.
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
