import Image from 'next/image';
import { ThickLine, ThinLine } from '../../ui/Lines';

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
              width={556}
              height={501}
              className='w-3/5 mx-auto'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-14 col-span-full z-20 fix-3d'></div>
          {/* IMAGE HEADER */}
          <div className='relative bg-white z-20 grid md:grid-cols-6 gap-16 pb-10 fix-3d'>
            <div className='col-span-full'>
              <Image
                src={'/works/nutrichunks/chunky.gif'}
                alt=''
                width={760}
                height={570}
                className='w-full max-w-[500px] m-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <section className='bg-[#EA1B3B] text-white relative jfc-container'>
        <div className='container mx-auto pt-20 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#EA1B3B] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* Intro  */}
            <div className='col-span-full max-w-[85%] m-auto'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20 items-center'>
                <p className='w-full md:w-8/12'>
                  I led a team of creative minds and tech wizards to build an
                  awesome 3D website for Jollibee Foods Corporation.
                </p>
                <div className='w-full md:w-4/12'>
                  <Image
                    src={'/debbie/debbie-pumped.png'}
                    alt=''
                    width={832}
                    height={960}
                    className='w-full max-w-[300px] m-auto'
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
                It invited people to explore JFC&apos;s history in a fun,
                interactive way. We designed it like a universe with different
                Jollibee brands as floating islands.
              </p>
              <div className='w-full my-16'>
                <Image
                  src={'/works/jfc/JFC-placeholder.png'}
                  alt=''
                  width={1395}
                  height={844}
                  className='w-full md:w-4/5 m-auto'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='flex flex-col md:flex-row gap-y-12 gap-x-20 mt-12'>
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
                    src={'/works/nutrichunks/MOCK-UP-PHONE_1.png'}
                    alt=''
                    width={602}
                    height={1229}
                    className='w-full md:w-3/5 m-auto'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <Image
                src={'/works/boehringer/LAPTOP_MOCK.png'}
                alt=''
                width={1684}
                height={1123}
                className='w-full max-w-[1080px] mx-auto'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JFC;
