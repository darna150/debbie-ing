import Image from 'next/image';
import { ThinLine } from '@/app/components/ui/Lines';
import { ScrollFadeIn } from '@/app/components/animation/motion';

const About = () => {
  return (
    <section className='bg-black text-white' id='about'>
      <div className='container mx-auto py-16 px-5'>
        <div className='sticky top-0 h-fit z-10'>
          <Image
            src={'/debbie/debbie_blink.gif'}
            width={400}
            height={400}
            alt='Drawing of Debbie'
            loading='lazy'
            className='w-full max-w-[400px] mx-auto z-10'
          />
        </div>
        <div className='relative bg-gradient-to-t from-[black] w-full h-12 col-span-full z-20 fix-3d'></div>
        <div className='relative z-20 bg-black fix-3d'>
          <ThinLine color='bg-white' />
          <ScrollFadeIn>
            <h2 className='text-2xl md:text-3xl font-bold leading-1 text-white'>
              Origin Story
            </h2>
            <div className='text-xl md:text-2xl font-medium text-white/75 mt-6'>
              <p>
                I&apos;ve spent my career working with organizations trying to do something
                meaningful. Sometimes that means launching products. Sometimes shifting
                behavior. Sometimes rebuilding trust.
              </p>
              <p>
                I&apos;ve collaborated with startups, global brands, public institutions,
                and mission‑driven teams across Southeast Asia and the US. The common
                thread is always the same: understanding people first, then designing
                around how they actually think, scroll, and decide.
              </p>
              <p>
                I&apos;m drawn to projects where creativity and structure meet. Where
                storytelling is backed by insight. Where design is paired with data.
                Where strategy still leaves room for instinct.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
