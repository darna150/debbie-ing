import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';

import header from '../../../../public/works/dost-pcaard/dost-pcaard-header.png';
import content from '../../../../public/works/dost-pcaard/content.png';
import debbieYes from '../../../../public/debbie/debbie-yes.png';

const DOST_PCAARD = () => {
  return (
    <>
      <div className='relative dost-pcaard-container' id='dost-pcaard'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/dost-pcaard/dost-pcaard-logo.svg'}
              alt=''
              width={480}
              height={480}
              className='w-2/5 mx-auto max-w-[300px]'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-40 col-span-full z-20 fix-3d -mb-24'></div>
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
          <div className='relative bg-[#0097D7] w-full h-16 md:h-40 col-span-full z-10 fix-3d -mt-16 md:-mt-40'></div>
        </div>
      </div>

      <section className='bg-[#0097D7] text-black relative dost-pcaard-container -mt-16 md:-mt-40'>
        <div className='container mx-auto pt-12 md:pt-32 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#0097D7] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* GOAL */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>
                  Summoned by the esteemed DOST-PCAARRD, a formidable task
                  awaited my stewardship: the creation of an animated opus
                  christened the Agribusiness Master Class.
                </h2>
                <p className='mt-2 md:mt-4'>
                  This calling held a lofty aim—to unravel the labyrinth of
                  intricate agricultural wisdom and reforge it into a tapestry
                  of comprehension, tailored expressly for mid-level managers in
                  the fertile fields of agriculture.
                </p>
              </div>
            </div>

            {/* VIDEO */}
            <div className='col-span-full'>
              <div className='w-full my-16'>
                <VimeoVideo
                  videoID='925741540'
                  title='Agribusiness Masterclass'
                />
              </div>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <p className=''>
                  The mission was resolute: arm these guardians of the harvest
                  with the treasury of knowledge and skills, forging a path
                  where informed decisions breed innovation in the realm of
                  agribusiness.
                </p>
                <h2 className='text-4xl md:text-5xl font-bold text-white mt-2 md:mt-4'>
                  Thus, the power of animation became my beacon, a tool wielded
                  to dismantle complexity and fashion it into an accessible
                  mosaic of enlightenment.
                </h2>
              </div>
            </div>

            {/* CONTENT */}
            <div className='col-span-full'>
              <Image
                src={content}
                alt=''
                className='w-full md:max-w-[70%]'
                placeholder='blur'
              />
              <div className='flex flex-col gap-3 md:gap-10 px-3 md:px-10'>
                <div className='w-full max-w-[80%] md:max-w-[60%]'>
                  <VimeoVideo
                    videoID='945696727'
                    title='Video 1'
                    background={true}
                  />
                </div>
                <div className='w-full max-w-[80%] md:max-w-[60%] ml-auto'>
                  <VimeoVideo
                    videoID='945696442'
                    title='Video 2'
                    background={true}
                  />
                </div>
                <div className='w-full max-w-[80%] md:max-w-[60%]'>
                  <VimeoVideo
                    videoID='945696647'
                    title='Video 3'
                    background={true}
                  />
                </div>
                <div className='w-full max-w-[80%] md:max-w-[60%] ml-auto'>
                  <VimeoVideo
                    videoID='945696578'
                    title='Video 4'
                    background={true}
                  />
                </div>
                <div className='w-full max-w-[80%] md:max-w-[60%]'>
                  <VimeoVideo
                    videoID='945696542'
                    title='Video 5'
                    background={true}
                  />
                </div>
              </div>
            </div>

            {/* OUTRO */}

            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='md:max-w-[85%] mx-auto mt-12 flex flex-col-reverse md:flex-row gap-y-12 gap-x-20 items-center'>
                <p className='w-full md:w-8/12'>
                  With each stroke of creativity, I orchestrated the symphony of
                  visuals, rendering even the most cryptic concepts into a
                  vibrant and comprehensible spectacle.
                </p>
                <div className='w-full md:w-4/12'>
                  <Image
                    src={debbieYes}
                    alt=''
                    className='w-full max-w-[150px] md:max-w-[300px] m-auto'
                    placeholder='blur'
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

export default DOST_PCAARD;
