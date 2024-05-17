import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';

const GIZ = () => {
  return (
    <>
      <div className='relative giz-container -mb-40' id='giz'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/giz/giz-logo.svg'}
              alt=''
              width={480}
              height={480}
              className='w-full mx-auto max-w-[800px]'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-14 col-span-full z-20 fix-3d -mb-4'></div>
          {/* IMAGE HEADER */}
          <div className='relative z-20 grid md:grid-cols-6 gap-16 fix-3d'>
            <div className='col-span-full'>
              <Image
                src={'/works/giz/giz-header.png'}
                alt=''
                width={1322}
                height={779}
                className='w-full max-w-[1080px] mx-auto'
              />
            </div>
          </div>
          {/* GRADIENT */}
          <div className='relative bg-[#D40E14] w-full h-14 col-span-full z-10 fix-3d -mt-14'></div>
        </div>
      </div>
      <section className='bg-[#D40E14] text-black relative giz-container'>
        <div className='container mx-auto pt-60 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#D40E14] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* GOAL */}
            <div className='col-span-full'>
              <div>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>
                  I embarked on a mission to craft an advocacy video for GIZ, a
                  commendable organization backed by the German government,
                  dedicated to tackling environmental and climate change
                  concerns.
                </h2>
              </div>
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
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>
                  Our central focus was to shed light on the challenges faced by
                  women and to champion gender equality.
                </h2>
                <p className='mt-2 md:mt-4'>
                  The aim was clear: to stir consciousness and spark positive
                  transformations within our society. Employing a blend of
                  captivating narratives and powerful imagery, the video served
                  as a poignant testament to the significance of empowering
                  women in these vital fields.
                </p>
              </div>
            </div>

            <div className='col-span-full'>
              <Image
                src={'/works/giz/collection.png'}
                alt=''
                width={1530}
                height={1290}
                className='w-full'
              />
            </div>

            <div className='col-span-full'>
              <p>
                It became a canvas that artfully showcased GIZ&apos;s unwavering
                commitment to forging a future that embraces inclusivity and
                sustainability.
              </p>
            </div>

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
