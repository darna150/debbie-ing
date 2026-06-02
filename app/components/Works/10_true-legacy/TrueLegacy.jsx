/* eslint-disable @next/next/no-img-element */
import { ScrollFadeIn } from '../../animation/motion';
import { ThickLine } from '../../ui/Lines';

const LOGO_SVG = '/works/true-legacy/true-legacy-homes.svg';

const FigmaCrop = ({ viewBox, className, ariaLabel }) => (
  <svg
    viewBox={viewBox}
    className={className}
    role={ariaLabel ? 'img' : 'presentation'}
    aria-label={ariaLabel}
  >
    <image href={LOGO_SVG} width='1566' height='4067' />
  </svg>
);

const TrueLegacy = () => {
  return (
    <section
      className='bg-[#F3F3F3] text-[#0D0D0D] relative true-legacy-container'
      id='true-legacy'
    >
      <div className='mx-auto max-w-[1080px] px-5 md:px-[30px] pt-3 md:pt-8 pb-4 md:pb-16'>
        <h2 className='sr-only'>
          True Legacy Homes: Building Trust in Life Transitions
        </h2>

        <div className='sticky top-3 md:top-8 h-fit z-10 max-w-[250px] md:max-w-[430px] mx-auto'>
          <FigmaCrop
            viewBox='300 0 966 300'
            className='block w-full'
            ariaLabel='True Legacy Homes logo'
          />
        </div>

        <div className='relative bg-gradient-to-t from-[#F3F3F3] w-full h-5 md:h-8 z-20 fix-3d' />

        <div className='relative bg-[#F3F3F3] z-20 fix-3d mx-auto space-y-6 md:space-y-10'>

          <h2 className='text-[22px] md:text-[44px] font-bold text-center text-[#00AA9F] leading-tight'>
            Building Trust in Life Transitions
          </h2>

          <ScrollFadeIn>
            <div
              className='relative w-[calc(100%+6px)] md:w-full -mx-[3px] md:mx-0'
              style={{ aspectRatio: '466 / 230' }}
            >
              <img
                src='/works/true-legacy/tlh-top-left.png'
                alt=''
                aria-hidden='true'
                className='absolute rounded-md md:rounded-xl drop-shadow-md'
                style={{ left: '0%', top: '19.5%', width: '40.5%' }}
              />
              <img
                src='/works/true-legacy/tlh-top-right.jpg'
                alt=''
                aria-hidden='true'
                className='absolute rounded-md md:rounded-xl drop-shadow-md'
                style={{ left: '59.4%', top: '19%', width: '40.6%' }}
              />
              <img
                src='/works/true-legacy/tlh-top-center.jpg'
                alt='True Legacy Homes ad campaigns'
                className='absolute rounded-md md:rounded-xl drop-shadow-lg z-10'
                style={{ left: '26%', top: '0%', width: '47.6%' }}
              />
            </div>
          </ScrollFadeIn>

          <div className='space-y-5'>
            <p className='!text-[14px] md:!text-2xl !leading-[16px] md:!leading-8 !font-normal !text-[#0D0D0D]'>
              Estate sales and inherited homes sit in a space most brands avoid.
              Emotion and logistics collide, and families are expected to make
              fast decisions in the middle of uncertainty.
            </p>
            <ScrollFadeIn>
              <h2 className='text-[28px] md:text-[56px] font-bold leading-[1.18] text-[#00AA9F]'>
                As a digital project manager and designer, I owned both
                structure and execution.
              </h2>
            </ScrollFadeIn>
          </div>

          <div className='!mt-0 grid grid-cols-[30%_1fr] gap-[12%] items-center'>
            <ScrollFadeIn className='self-center'>
              <p className='!text-[14px] md:!text-2xl !leading-[16px] md:!leading-8 !font-normal !text-[#0D0D0D]'>
                I coordinated cross-functional teams across paid media, SEO,
                CRM, and operations, ensuring that creative and performance
                stayed aligned. Timelines, dependencies, and stakeholder
                expectations all needed to move in sync.
              </p>
            </ScrollFadeIn>
            <img
              src='/works/true-legacy/tlh-mid-final.png'
              alt='Estate sales holiday campaign'
              className='w-full rounded-md md:rounded-xl'
            />
          </div>

          <ThickLine color='bg-[#0D0D0D]' />

          <div className='grid grid-cols-2 gap-4 md:gap-14 items-start'>

            <div
              className='relative w-full mt-1'
              style={{ aspectRatio: '208 / 289' }}
            >
              <img
                src='/works/true-legacy/tlh-bottom-left.png'
                alt=''
                aria-hidden='true'
                className='absolute rounded-md md:rounded-xl drop-shadow-md'
                style={{ left: '0%', top: '0%', width: '83%' }}
              />
              <img
                src='/works/true-legacy/tlh-bottom-right.png'
                alt='True Legacy Homes content campaigns'
                className='absolute rounded-md md:rounded-xl drop-shadow-lg z-10'
                style={{ left: '19%', top: '45%', width: '83%' }}
              />
            </div>

            <div className='flex flex-col'>
              <ScrollFadeIn>
                <div className='space-y-4 md:space-y-8'>
                  <p className='!text-[14px] md:!text-2xl !leading-[14px] md:!leading-8 !font-normal !text-[#0D0D0D]'>
                    At the same time, I led the design and development of content
                    and digital assets. The work focused on clarity, empathy, and
                    real-world usefulness. Messaging was shaped around hesitation
                    points, search behavior, and the emotional reality of life
                    transitions.
                  </p>
                  <p className='!text-[14px] md:!text-2xl !leading-[14px] md:!leading-8 !font-normal !text-[#0D0D0D]'>
                    Over time, the brand shifted from being a service to being a
                    trusted guide. That shift influenced lead quality, internal
                    alignment, and long-term brand credibility.
                  </p>
                </div>
              </ScrollFadeIn>
              <div className='mt-5 md:mt-8'>
                <h2 className='text-[28px] md:text-[56px] font-bold leading-[1.1] text-[#00AA9F]'>
                  Clarity reduces hesitation.
                </h2>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrueLegacy;
