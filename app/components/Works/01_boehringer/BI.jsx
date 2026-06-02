import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';
import { ScrollFadeIn } from '../../animation/motion';

import logo from '../../../../public/works/boehringer/BI_LOGO.png';
import header from '../../../../public/works/boehringer/BI_HEADER.png';
import ig_ad from '../../../../public//works/boehringer/BI_IG_AD.png';
import tick from '../../../../public//works/boehringer/BI_TICK.png';
import debbie_thinking from '../../../../public//debbie/debbie-thinking.png';
import vid_moockup from '../../../../public//works/boehringer/BI_VID_MockUp.jpg';

const BI = () => {
  return (
    <>
      <section
        className='bg-[#113661] text-white relative boehringer-container'
        id='boehringer'
      >
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={logo}
              alt=''
              placeholder='blur'
              className='w-full max-w-[500px] mx-auto'
            />
          </div>
          <div className='relative bg-gradient-to-t from-[#113661] w-full h-14 col-span-full z-20 fix-3d'></div>
          {/* CONTENT */}
          <div className='relative bg-[#113661] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* IMAGE WITH PARAGRAPH */}
            <div className='col-span-full'>
              <Image
                src={header}
                alt=''
                placeholder='blur'
                className='w-full'
              />
              <ScrollFadeIn>
                <p className='text-white !font-bold mt-6'>
                  Misinformation moves fast. Especially when fear and uncertainty
                  are high and everyone suddenly becomes a source.
                </p>
              </ScrollFadeIn>
            </div>
            {/* GOAL */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  The real challenge was trust.
                </h2>
                <p className='mt-2 md:mt-4'>
                  People were overwhelmed and skeptical. Polished messaging
                  often felt distant from their reality.
                </p>
              </ScrollFadeIn>
            </div>
            <div className='col-span-full'>
              <div className='grid md:grid-cols-3 md:grid-rows-2 gap-y-16 gap-x-8 md:max-w-[75%] m-auto'>
                <div className='md:row-span-2'>
                  <Image
                    src={ig_ad}
                    alt=''
                    placeholder='blur'
                    className='max-w-[300px] w-full md:max-w-none mx-auto md:h-full object-contain'
                  />
                </div>
                <div className='md:col-span-2 md:row-span-2'>
                  <Image
                    src={tick}
                    alt=''
                    placeholder='blur'
                    className='w-full md:w-auto md:h-full object-contain'
                  />
                </div>
              </div>
            </div>
            <ScrollFadeIn className='col-span-full'>
                <p>
                  We focused on presence. Real‑time conversations. Live broadcasts.
                Open responses. Experts showing up as humans.
                </p>
              </ScrollFadeIn>
            {/* MISSION */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='my-16'>
                <VimeoVideo
                  videoID='925738739'
                  title='Boehringer Ingelheim XPERT Series'
                />
              </div>
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  Credibility grows through consistency and proximity.
                </h2>
                <p className='mt-2 md:mt-4'>
                  Misinformation moves fast. Especially when fear and
                  uncertainty are high and everyone suddenly becomes a source.
                </p>
              </ScrollFadeIn>
            </div>
            <div className='col-span-full'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20 items-center'>
                <ScrollFadeIn className='w-full md:w-8/12'>
                  <p>
                    The real challenge was trust. People were overwhelmed and
                    skeptical. Polished messaging often felt distant from their
                    reality.
                  </p>
                </ScrollFadeIn>
                <div className='w-full md:w-4/12'>
                  <Image
                    src={debbie_thinking}
                    alt=''
                    placeholder='blur'
                    className='w-full max-w-[150px] md:max-w-[300px] m-auto'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <VimeoVideo videoID='925738673' title='Ben En Biko' />
            </div>

            <ScrollFadeIn className='col-span-full'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20'>
                <div className='w-full md:w-6/12'>
                  <p>
                    We focused on presence. Real‑time conversations. Live
                    broadcasts. Open responses. Experts showing up as humans.
                  </p>
                </div>
                <div className='w-full md:w-6/12'>
                  <Image
                    src={vid_moockup}
                    alt=''
                    placeholder='blur'
                    className='w-full'
                  />
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default BI;
