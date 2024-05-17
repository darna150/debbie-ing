import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';
import VideoLocal from '../../ui/VideoLocal';

const Kemin = () => {
  return (
    <>
      <div className='relative kemin-container' id='kemin'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/kemin/kemin-logo.svg'}
              alt=''
              width={1160}
              height={364}
              className='w-4/5 mx-auto'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-14 col-span-full z-20 fix-3d'></div>
          {/* IMAGE HEADER */}
          <div className='relative bg-white z-20 grid md:grid-cols-6 gap-16 fix-3d'>
            <div className='col-span-full'>
              <VimeoVideo
                videoID='947281816'
                title='SIDEPANEL FULL'
                background={true}
                aspectRatio='aspect-[1200/362]'
              />
            </div>
          </div>
        </div>
      </div>
      <section className='bg-white text-black relative kemin-container'>
        <div className='container mx-auto pt-20 px-5'>
          {/* CONTENT */}
          <div className='relative bg-white z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* Intro  */}
            <div className='col-span-full m-auto'>
              <p className='w-full md:text-4xl !font-bold'>
                Amidst the glitz and glamor of Dubai&apos;s bustling landscape,
                I found myself at the heart of a pivotal moment in the global
                launch of Kemin Industries&apos; revolutionary product,
                Enterosure.
              </p>
            </div>

            <div className='col-span-full'>
              <VimeoVideo videoID='925741081' title='Kemin Enterosure Launch' />
            </div>

            <div className='col-span-full'>
              <p>
                The battlefield for this endeavor was expansive, spanning from
                animated bumpers that set the tone to captivating titles that
                drew the audience in.
              </p>
              <div className='flex flex-col sm:flex-row gap-8 sm:w-3/4 mx-auto mt-16'>
                <div className='sm:w-1/2'>
                  {/* <VideoLocal src='/works/kemin/KEMIN_PANEL1.mp4' /> */}
                  <VimeoVideo
                    videoID='947281801'
                    title='SIDEPANEL LEFT'
                    background={true}
                    aspectRatio='aspect-[541/701]'
                  />
                </div>
                <div className='sm:w-1/2'>
                  {/* <VideoLocal src='/works/kemin/KEMIN_PANEL2.mp4' /> */}
                  <VimeoVideo
                    videoID='947281776'
                    title='SIDEPANEL RIGHT'
                    background={true}
                    aspectRatio='aspect-[541/701]'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-full'>
              <ThickLine color='bg-black' />
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-[#D43020]'>
                  Each design element was meticulously crafted to encapsulate
                  the essence of Enterosure.
                </h2>
                <p className='mt-2 md:mt-4'>
                  Collaborating closely with a dedicated team, our collective
                  efforts harmonized to orchestrate a visually impactful launch.
                  The culmination of our work wasn&apos;t just a display of
                  creativity but a strategic fusion of artistry and purpose.
                </p>
              </div>
            </div>

            <div className='col-span-full'>
              <VimeoVideo videoID='947284511' title='Kemin Short 1' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kemin;
