import Image from 'next/image';
import { ThickLine, ThinLine } from '../../ui/Lines';

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
              <Image
                src={'/works/kemin/KEMIN_FULL_PANEL.gif'}
                alt=''
                width={1200}
                height={300}
                className='w-full'
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
              <p className='w-full md:!text-4xl !font-bold'>
                Amidst the glitz and glamor of Dubai&apos;s bustling landscape,
                I found myself at the heart of a pivotal moment in the global
                launch of Kemin Industries&apos; revolutionary product,
                Enterosure.
              </p>
            </div>

            {/* Website */}
            <div className='col-span-full'>
              <Image
                src={'/works/boehringer/LAPTOP_MOCK.png'}
                alt=''
                width={1684}
                height={1123}
                className='w-full max-w-[1080px] mx-auto'
              />
            </div>

            <div className='col-span-full'>
              <p>
                The battlefield for this endeavor was expansive, spanning from
                animated bumpers that set the tone to captivating titles that
                drew the audience in.
              </p>
              <div className='flex flex-col sm:flex-row gap-8 sm:w-3/4 mx-auto mt-16'>
                <div className='sm:w-1/2'>
                  <Image
                    src={'/works/kemin/KEMIN_PANEL1.gif'}
                    alt=''
                    width={600}
                    height={773}
                    className='w-full h-auto'
                  />
                </div>
                <div className='sm:w-1/2'>
                  <Image
                    src={'/works/kemin/KEMIN_PANEL2.gif'}
                    alt=''
                    width={600}
                    height={773}
                    className='w-full h-auto'
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

            {/* Video Highlight */}
            <div className='col-span-full bg-[#D43020] aspect-video flex items-center justify-center'>
              <p className='text-3xl font-bold !text-white'>VIDEO HIGHLIGHT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kemin;
