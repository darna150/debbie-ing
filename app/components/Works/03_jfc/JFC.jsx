import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';

import header from '../../../../public/works/jfc/jfc-header.png';
import debbiePumped from '../../../../public/debbie/debbie-pumped.png';

const JFC = () => {
  return (
    <>
      <div className='relative jfc-container' id='jfc'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/jfc/jfc-logo.svg'}
              alt=''
              width={500}
              height={87}
              className='w-3/4 max-w-[600px] mx-auto'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-32 col-span-full z-20 fix-3d -mb-24'></div>
          {/* IMAGE HEADER */}
          <div className='relative z-20 grid md:grid-cols-6 gap-16 fix-3d'>
            <div className='col-span-full bg-jfc-header md:bg-jfc-header-md'>
              <Image
                src={header}
                alt=''
                className='w-full max-w-[1080px] m-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <section className='bg-[#EA1B3B] text-white relative jfc-container -mt-8 md:-mt-24'>
        <div className='container mx-auto pt-12 md:pt-32 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#EA1B3B] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* Intro  */}
            <div className='col-span-full md:max-w-[85%] m-auto'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20 items-center'>
                <p className='w-full md:w-8/12'>
                  I led a team of creative minds and tech wizards to build an
                  awesome 3D website for Jollibee Foods Corporation.
                </p>
                <div className='w-full md:w-4/12'>
                  <Image
                    src={debbiePumped}
                    alt=''
                    placeholder='blur'
                    className='w-full max-w-[150px] md:max-w-[300px] m-auto'
                  />
                </div>
              </div>
            </div>

            {/* Website */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  <span className='text-2xl md:text-3xl font-medium block mb-4'>
                    Picture a digital world bursting with joy and unity,
                    showcasing JFC&apos;s journey.
                  </span>
                  This website wasn&apos;t just a site—it was an adventure.
                </h2>
              </div>
              <div className='mt-16'>
                <VimeoVideo videoID='925740654' title='JFC Universe' />
              </div>
            </div>

            <div className='col-span-full'>
              <p>
                It invited people to explore JFC&apos;s history in a fun,
                interactive way. We designed it like a universe with different
                Jollibee brands as floating islands.
              </p>
              <div className='grid md:grid-cols-2 gap-4 mt-16'>
                <div>
                  <VimeoVideo
                    videoID='925740708'
                    title='JFC Universe - Chapter 1'
                    background={true}
                  />
                </div>
                <div>
                  <VimeoVideo
                    videoID='925740746'
                    title='JFC Universe - Chapter 2'
                    background={true}
                  />
                </div>
                <div>
                  <VimeoVideo
                    videoID='925740802'
                    title='JFC Universe - Chapter 3'
                    background={true}
                  />
                </div>
                <div>
                  <VimeoVideo
                    videoID='925740825'
                    title='JFC Universe - Chapter 4'
                    background={true}
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='flex flex-col md:flex-row gap-y-12 mt-12'>
                <div className='w-full md:w-6/12'>
                  <h2 className='text-4xl md:text-5xl font-bold mb-8'>
                    Our goal was simple:
                  </h2>
                  <p>
                    make learning about Jollibee&apos;s past engaging and fun.
                    We wanted people to connect with the moments that shaped the
                    company.
                  </p>
                </div>
                <div className='w-full md:w-6/12'>
                  <Image
                    src={'/works/jfc/joy-waving.gif'}
                    alt=''
                    width={800}
                    height={800}
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

export default JFC;
