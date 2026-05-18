/* eslint-disable @next/next/no-img-element */
import { ThickLine } from '../../ui/Lines';
import { ScrollFadeIn } from '../../animation/motion';

const Missio = () => {
  return (
    <section
      className='bg-[#F2F2F2] text-[#0D0D0D] relative missio-container'
      id='missio'
    >
      <div className='container mx-auto pt-10 md:pt-20 px-5'>

        {/* STICKY LOGO */}
        <div className='sticky top-20 h-fit z-10'>
          <img
            src='/works/missio/missio-logo.svg'
            alt='Missio'
            className='w-1/3 max-w-[160px] md:max-w-[240px] mx-auto'
          />
        </div>

        {/* GRADIENT SPACER */}
        <div className='relative bg-gradient-to-t from-[#F2F2F2] w-full h-6 md:h-14 z-20 fix-3d' />

        {/* CONTENT */}
        <div className='relative bg-[#F2F2F2] z-20 fix-3d max-w-[1080px] mx-auto pb-20 space-y-6 md:space-y-12'>

          {/* SUBTITLE + OPENING PARAGRAPH */}
          <div>
            <h2 className='text-2xl md:text-5xl font-bold tracking-tight text-center leading-tight max-w-[620px] mx-auto'>
              Digital Strategy for Mission&#8209;Driven Organizations
            </h2>
            <p className='mt-4 md:mt-8 text-xs md:text-base font-normal text-[#0D0D0D] leading-snug'>
              Many mission-driven organizations have powerful intent but
              fragmented communication. Creativity was never the issue.
              Consistency was.
            </p>
          </div>

          {/* FAN SPREAD — 3 cards */}
          <ScrollFadeIn>
            <div className='relative w-full' style={{ aspectRatio: '1538 / 690' }}>
              {/* Left card */}
              <img
                src='/works/missio/cc-good-friday.png'
                alt=''
                aria-hidden='true'
                className='absolute w-[33.2%] drop-shadow-xl rounded-lg'
                style={{ left: '8.7%', top: '14.2%' }}
              />
              {/* Center card — raised */}
              <img
                src='/works/missio/fbca-if-jesus.svg'
                alt='Missio content campaigns'
                className='absolute w-[33.1%] drop-shadow-2xl rounded-lg z-10'
                style={{ left: '50%', top: '0%', transform: 'translateX(-50%)' }}
              />
              {/* Right card */}
              <img
                src='/works/missio/cc-042025.png'
                alt=''
                aria-hidden='true'
                className='absolute w-[33.4%] drop-shadow-xl rounded-lg'
                style={{ left: '53.4%', top: '14.2%' }}
              />
            </div>
          </ScrollFadeIn>

          {/* SEPARATOR + BODY + PULL QUOTE */}
          <div>
            <ThickLine color='bg-[#0D0D0D]' />
            <ScrollFadeIn>
              <p className='text-xs md:text-base font-normal text-[#0D0D0D] leading-snug'>
                I worked on the day-to-day development of content ecosystems.
                Many mission-driven organizations have powerful intent but
                fragmented communication.
              </p>
              <h2 className='text-3xl md:text-5xl font-bold mt-4 md:mt-6 leading-tight text-[#20A851]'>
                Creativity was never the issue. Consistency was.
              </h2>
            </ScrollFadeIn>
          </div>

          {/* MID — 2-col: image spread left | text right */}
          <div className='grid md:grid-cols-2 gap-8 md:gap-14 items-start'>
            <div className='relative w-full' style={{ aspectRatio: '700 / 600' }}>
              {/* Left/top image */}
              <img
                src='/works/missio/cc-easter.png'
                alt=''
                aria-hidden='true'
                className='absolute w-[58.5%] drop-shadow-xl rounded-lg z-10'
                style={{ left: '0%', top: '2%' }}
              />
              {/* Right/bottom image */}
              <img
                src='/works/missio/cc-rooted-in-prayer.png'
                alt='Missio church content'
                className='absolute w-[58.5%] drop-shadow-2xl rounded-lg z-20'
                style={{ right: '2%', top: '33.5%' }}
              />
            </div>

            <ScrollFadeIn>
              <div className='space-y-4 md:space-y-8'>
                <p className='text-xs md:text-base font-normal text-[#0D0D0D] leading-snug'>
                  I worked on the day-to-day development of content ecosystems.
                  This included editorial planning, platform strategy, writing,
                  visual direction, and workflow design.
                </p>
                <p className='text-xs md:text-base font-normal text-[#0D0D0D] leading-snug'>
                  The goal was to create repeatable systems. Messaging needed to
                  stay grounded and culturally aware while still engaging and
                  modern.
                </p>
              </div>
            </ScrollFadeIn>
          </div>

          {/* SEPARATOR + CLOSING BODY + PULL QUOTE */}
          <div>
            <ThickLine color='bg-[#0D0D0D]' />
            <ScrollFadeIn>
              <p className='text-xs md:text-base font-normal text-[#0D0D0D] leading-snug'>
                This work strengthened client confidence, improved collaboration,
                and created a more intentional digital presence across channels.
              </p>
              <h2 className='text-3xl md:text-5xl font-bold mt-4 md:mt-6 leading-tight text-[#20A851]'>
                Intentional communication compounds impact.
              </h2>
            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Missio;
