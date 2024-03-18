import Image from 'next/image';
import { ThickLine, ThinLine } from '../../ui/Lines';

const NutriChunks = () => {
  return (
    <>
      <div className='relative nutrichunks-container' id='sanmiguelcorp'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div className='sticky top-20 h-fit z-10'>
            <Image
              src={'/works/nutrichunks/smc-logo.svg'}
              alt=''
              width={556}
              height={501}
              className='w-3/5 max-w-[300px] mx-auto'
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
      <section className='bg-[#27449E] text-white relative nutrichunks-container'>
        <div className='container mx-auto pt-20 px-5'>
          {/* CONTENT */}
          <div className='relative bg-[#27449E] z-20 grid md:grid-cols-6 gap-16 pb-20 fix-3d'>
            {/* TEXT LEFT IMAGE RIGHT  */}
            <div className='col-span-full'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20'>
                <p className='w-full md:w-6/12'>
                  Our journey began with an intricate process of unraveling the
                  desires and habits of our potential buyers, sculpting a vivid
                  persona that mirrored our target market. This pivotal step
                  paved the way for a tailored approach, using social media as
                  our canvas to weave messages finely tuned to meet their unique
                  needs.
                </p>
                <div className='w-full md:w-6/12'>
                  <Image
                    src={'/works/nutrichunks/MOCK-UP-WEBSITE-3.png'}
                    alt=''
                    width={805}
                    height={839}
                    className='w-full'
                  />
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  <span className='text-2xl md:text-3xl font-medium block mb-4'>
                    Yet, it wasn&apos;t solely about crafting the perfect
                    message
                  </span>
                  —it was about ensuring it reached the right eyes at the right
                  time.
                </h2>
                <p className='mt-2 md:mt-12'>
                  With this in mind, we orchestrated the implementation of a
                  seamless e-commerce infrastructure. This streamlined system
                  guaranteed swift product deliveries within a mere 1 to 2 days,
                  embracing the essence of convenience our customers yearned
                  for.
                </p>
              </div>
            </div>
            <div className='col-span-full'>
              <div className='flex flex-col gap-4 md:gap-12'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
                  <div className='h-fit w-full md:w-9/12'>
                    <Image
                      src={'/works/nutrichunks/MOCK-UP-WEBSITE_1.png'}
                      alt=''
                      width={1115}
                      height={813}
                      className='w-full'
                    />
                  </div>
                  <div className='h-fit w-3/12 aspect-square ml-auto -mt-20 md:mt-auto'>
                    <Image
                      src={'/works/nutrichunks/CHUNKY_MOTOR.png'}
                      alt=''
                      width={376}
                      height={647}
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='h-fit w-full md:w-9/12 ml-auto'>
                  <Image
                    src={'/works/nutrichunks/MOCK-UP-WEBSITE_2.png'}
                    alt=''
                    width={1115}
                    height={814}
                    className='w-full'
                  />
                </div>
              </div>
            </div>

            {/* Loyalty Program */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>
                  But our efforts didn&apos;t cease there.
                </h2>
              </div>
            </div>
            {/* TEXT LEFT IMAGE RIGHT  */}
            <div className='col-span-full'>
              <div className='flex flex-col md:flex-row gap-y-12 gap-x-20'>
                <p className='w-full md:w-6/12'>
                  Understanding the vitality of loyalty in fostering enduring
                  relationships, we unveiled an enchanting rewards program. This
                  initiative not only gratified our customers but also tethered
                  them to the Nutri Chunks brand, fostering a bond beyond mere
                  transactions.
                </p>
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
              <p>
                United, these strategic endeavors weren&apos;t just pieces of a
                puzzle—they were the building blocks that fortified Nutri Chunks
                as the go-to choice for pet owners.
              </p>
              <div className='w-full my-16'>
                <Image
                  src={'/works/nutrichunks/MOCK-UP-FB_AD.png'}
                  alt=''
                  width={1395}
                  height={844}
                  className='w-full md:w-4/5 m-auto'
                />
              </div>
              <p>
                We didn&apos;t just offer a product; we crafted an experience—a
                seamless, gratifying journey that resonated deeply with the
                hearts of our customers.
              </p>
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

export default NutriChunks;
