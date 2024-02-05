import Image from 'next/image';
import { ThickLine, ThinLine } from '../../ui/Lines';

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
              src={'/works/boehringer/BI_LOGO.png'}
              alt=''
              width={871}
              height={259}
              className='w-full max-w-[500px] mx-auto'
            />
          </div>
          <div className='relative bg-gradient-to-t from-[#113661] w-full h-20 col-span-full z-20 fix-3d'></div>
          {/* CONTENT */}
          <div className='relative bg-[#113661] z-20 grid md:grid-cols-6 gap-20 pb-20 fix-3d'>
            {/* IMAGE WITH PARAGRAPH */}
            <div className='col-span-full'>
              <Image
                src={'/works/company1/picsum.jpeg'}
                alt=''
                width={1365}
                height={601}
                className='w-full'
              />
              <p className='!text-white !font-bold mt-6 mb-0 md:mb-12'>
                As the Frontline brand grappled with the challenge of countering
                misinformation about veterinary products, I found myself at the
                helm, guiding a team of creatives towards a solution.{' '}
              </p>
            </div>
            {/* GOAL */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <div className='mt-12'>
                <h2 className='text-3xl md:text-7xl font-bold'>
                  Our goal was clear:
                </h2>
                <p className='mt-2 md:mt-6'>
                  devise a digital strategy that could effectively combat the
                  inaccuracies circulating in the public sphere.
                </p>
              </div>
            </div>
            <div className='col-span-full'>
              <div className='flex flex-col md:flex-row gap-20'>
                <div className='h-fit w-full md:w-2/5'>
                  <Image
                    src={'/works/boehringer/BI_FB_AD.png'}
                    alt=''
                    width={413}
                    height={842}
                    className='w-full'
                  />
                </div>
                <div className='h-fit w-full md:w-3/5 aspect-square'>
                  <Image
                    src={'/works/boehringer/BI_TICK.png'}
                    alt=''
                    width={869}
                    height={869}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-full'>
              <p>
                Our brainstorming sessions crackled with energy as we conceived
                an ingenious plan. We envisioned leveraging the power of live
                social media broadcasts, transforming them into a stage where
                experts could shine.
              </p>
            </div>
            {/* MISSION */}
            <div className='col-span-full'>
              <ThickLine color='bg-white' />
              <Image
                src={'/works/boehringer/LAPTOP_MOCK.png'}
                alt=''
                width={1684}
                height={1123}
                className='w-full max-w-[1080px] mx-auto'
              />
              <div className='mt-12'>
                <h2 className='text-3xl md:text-7xl font-bold'>
                  Their mission?
                </h2>
                <p className='mt-2 md:mt-6'>
                  To demystify the technical intricacies surrounding pet care,
                  offering invaluable insights and cutting through the
                  confusion.
                </p>
              </div>
            </div>
            <div className='col-span-full md:mt-12'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20'>
                <p className='w-full md:w-5/12'>
                  With determination, we set out to create a new narrative. It
                  wasn’t just about selling products; it was about empowering
                  and educating pet owners. These live broadcasts became our
                  canvas, where experts unpacked complex medical jargon,
                  offering a digestible version for the curious public.
                </p>
                <div className='w-full md:w-7/12'>
                  <Image
                    src={'/works/boehringer/BI_VID_MockUp.jpg'}
                    alt=''
                    width={832}
                    height={960}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
            {/* Video Highlight */}
            <div className='col-span-full bg-[#69B9D3] aspect-video flex items-center justify-center md:mt-12'>
              <p className='text-3xl font-bold'>VIDEO HIGHLIGHT</p>
            </div>

            <div className='col-span-full md:mt-12'>
              <p>
                In addition, my involvement in crafting a compelling short film,
                &quot;Ben en Biko vs. Da 3 Marites,&quot; became a pivotal
                endeavor in our mission to tackle widespread misconceptions in
                pet healthcare. This cinematic venture aimed to deliver a potent
                message wrapped in humor and relatability, a story that
                resonated deeply with pet owners.
              </p>
              <p>
                As the project unfolded, we meticulously carved a narrative that
                went beyond entertainment. It was a tale that tugged at
                heartstrings while imparting a crucial lesson: true love for
                one&apos;s pet extends to prioritizing regular visits to the
                vet.
              </p>
            </div>
            <div className='col-span-full md:mt-12'>
              <div className='flex flex-col-reverse md:flex-row gap-y-12 gap-x-20'>
                <p className='w-full md:w-5/12'>
                  &quot;Ben en Biko vs. Da 3 Marites&quot; wasn&apos;t just a
                  short film; it was a vehicle for dispelling myths. Through a
                  blend of wit and charm, it artfully dismantled misconceptions
                  that lingered in the minds of pet owners. The storyline was a
                  tapestry woven with care, threading the importance of
                  professional veterinary care into every scene.
                </p>
                <div className='w-full md:w-7/12'>
                  <Image
                    src={'/works/boehringer/BI_VID_MockUp.jpg'}
                    alt=''
                    width={832}
                    height={960}
                    className='w-full'
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

export default BI;
