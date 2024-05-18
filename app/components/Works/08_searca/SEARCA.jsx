import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';

const SEARCA = () => {
  return (
    <>
      <div className='relative searca-container' id='searca'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/searca/searca-logo.svg'}
              alt=''
              width={1411}
              height={314}
              className='w-3/5 mx-auto max-w-[600px]'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-40 col-span-full z-20 fix-3d -mb-24'></div>
          {/* IMAGE HEADER */}
          <div className='relative z-20 grid md:grid-cols-6 gap-16 fix-3d'>
            <div className='col-span-full'>
              <Image
                src={'/works/searca/searca-header.png'}
                alt=''
                width={1080}
                height={600}
                className='w-full max-w-[1080px] mx-auto'
              />
            </div>
          </div>
          {/* GRADIENT */}
          <div className='relative bg-[#096936] w-full h-8 md:h-24 col-span-full z-10 fix-3d -mt-8 md:-mt-24'></div>
        </div>
      </div>
      <section className='bg-[#096936] text-white relative searca-container -mt-8 md:-mt-24'>
        <div className='container mx-auto pt-12 md:pt-32 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#096936] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            <div className='col-span-full'>
              <p className='text-white !font-bold'>
                In the bustling world of virtual production, I found myself at
                the forefront of the Youth in Agri Talk show&apos;s pilot
                episode for SEARCA.
              </p>
            </div>

            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  Embracing the challenge with enthusiasm, my mission was clear:
                </h2>
                <p className='mt-2 md:mt-4'>
                  to craft an engaging narrative that would make agriculture
                  come alive for basic education students, sparking their
                  curiosity and enthusiasm for the agricultural realm.
                </p>
              </div>
            </div>

            {/* Video Highlight */}
            <div className='col-span-full'>
              <VimeoVideo videoID='925741649' title='Youth in Agri Talk Show' />
            </div>

            <div className='col-span-full'>
              <p>
                Within the confines of Blink Creative Studio&apos;s green screen
                studio, I took on the role of a visual storyteller. With
                meticulous attention to detail, I helped weave together
                captivating backgrounds, seamlessly integrated bumpers, and
                carefully curated visual elements.
              </p>
              <div className='w-full flex flex-col sm:flex-row my-16 gap-4'>
                <div className='sm:w-1/2'>
                  <Image
                    src={'/works/searca/greenscreen-1.png'}
                    alt=''
                    width={740}
                    height={415}
                    className='w-full'
                  />
                </div>
                <div className='sm:w-1/2'>
                  <Image
                    src={'/works/searca/greenscreen-2.png'}
                    alt=''
                    width={740}
                    height={415}
                    className='w-full'
                  />
                </div>
              </div>
              <ThickLine color='bg-white' />
            </div>

            <div className='col-span-full'>
              <Image
                src={'/works/searca/SEARCA_MOCKUP.png'}
                alt=''
                width={1496}
                height={731}
                className='w-full'
              />
            </div>

            <div className='col-span-full'>
              <p>
                The result was a tapestry that not only elevated the overall
                production value of the talk show but also transformed it into
                an immersive platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEARCA;
