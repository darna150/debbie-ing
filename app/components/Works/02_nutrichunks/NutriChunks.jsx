import Image from 'next/image';
import { ThickLine } from '../../ui/Lines';
import VimeoVideo from '../../ui/VimeoVideo';
import { ScrollFadeIn } from '../../animation/motion';

import logo from '../../../../public/works/nutrichunks/smc-logo.svg';
import header from '../../../../public/works/nutrichunks/nutrichunks-header.png';
import mockup1 from '../../../../public/works/nutrichunks/MOCK-UP-WEBSITE_1.png';
import mockup2 from '../../../../public/works/nutrichunks/MOCK-UP-WEBSITE_2.png';
import mockup3 from '../../../../public/works/nutrichunks/MOCK-UP-WEBSITE-3.png';
import chunkyMotor from '../../../../public/works/nutrichunks/CHUNKY_MOTOR.png';
import mockupAd1 from '../../../../public/works/nutrichunks/MOCK-UP-PHONE_1.png';
import mockupAd2 from '../../../../public/works/nutrichunks/MOCK-UP-IG_AD.png';

const NutriChunks = () => {
  return (
    <>
      <div className='relative nutrichunks-container' id='sanmiguelcorp'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={logo}
              alt=''
              width={556}
              height={501}
              className='w-3/5 max-w-[300px] mx-auto'
            />
          </div>
          {/* GRADIENT */}
          <div className='relative bg-gradient-to-t from-white w-full h-32 col-span-full z-20 fix-3d -mb-24'></div>
          {/* IMAGE HEADER */}
          <div className='relative z-20 grid md:grid-cols-6 gap-16 fix-3d'>
            <div className='col-span-full bg-smc-header md:bg-smc-header-md'>
              <Image
                src={header}
                alt=''
                className='w-full max-w-[1080px] m-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <section className='bg-[#27449E] text-white relative nutrichunks-container -mt-8 md:-mt-24'>
        <div className='container mx-auto pt-12 md:pt-32 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#27449E] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* TEXT LEFT IMAGE RIGHT  */}
            <ScrollFadeIn className='col-span-full'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20'>
                <p className='w-full md:w-6/12'>
                  Pet food sits in a deeply emotional category. Owners are not
                  only buying nutrition. They are caring for a relationship.
                </p>
                <div className='w-full md:w-6/12'>
                  <Image
                    src={mockup3}
                    alt=''
                    className='w-full'
                    placeholder='blur'
                  />
                </div>
              </div>
            </ScrollFadeIn>

            {/* E-commerce */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <ScrollFadeIn className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  We shifted the brand toward participation.
                </h2>
                <p className='mt-2 md:mt-12'>
                  Everyday routines, shared experiences, and long‑term
                  connection.
                </p>
              </ScrollFadeIn>
            </div>
            <div className='col-span-full'>
              <div className='flex flex-col gap-4 md:gap-12'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
                  <div className='h-fit w-full md:w-9/12'>
                    <Image
                      src={mockup1}
                      alt=''
                      className='w-full'
                      placeholder='blur'
                    />
                  </div>
                  <div className='h-fit w-3/12 aspect-square ml-auto -mt-20 md:mt-auto'>
                    <Image
                      src={chunkyMotor}
                      alt=''
                      className='w-full'
                      placeholder='blur'
                    />
                  </div>
                </div>
                <div className='h-fit w-full md:w-9/12 ml-auto'>
                  <Image
                    src={mockup2}
                    alt=''
                    className='w-full'
                    placeholder='blur'
                  />
                </div>
              </div>
            </div>

            {/* TEXT LEFT IMAGE RIGHT  */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='flex flex-col md:flex-row gap-y-12 gap-x-20 mt-12'>
                <ScrollFadeIn className='w-full md:w-6/12'>
                  <h2 className='text-4xl md:text-5xl font-bold mb-8'>
                    When people feel recognized, loyalty becomes natural.
                  </h2>
                  <p>
                    Pet food sits in a deeply emotional category. Owners are
                    not only buying nutrition. They are caring for a
                    relationship.
                  </p>
                </ScrollFadeIn>
                <div className='w-full md:w-6/12'>
                  <Image
                    src={mockupAd1}
                    alt=''
                    className='w-full md:w-3/5 m-auto max-w-[300px]'
                    placeholder='blur'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <ScrollFadeIn>
                <p>
                  When people feel recognized, loyalty becomes natural.
                </p>
              </ScrollFadeIn>
              <div className='w-full my-16'>
                <Image
                  src={mockupAd2}
                  alt=''
                  className='w-full md:w-4/5 m-auto'
                  placeholder='blur'
                />
              </div>
              <div className='w-full my-16'>
                <VimeoVideo
                  videoID='925741617'
                  title='Nutri Chunks Listo Ganado'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NutriChunks;
