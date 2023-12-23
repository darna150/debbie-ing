'use client';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ThickLine, ThinLine } from '../../ui/Lines';

// Custom hook to generate refs
const useRefs = (count) => {
  const refs = Array.from({ length: count }, () => useRef(null));
  return refs;
};

const Campaigns = () => {
  const socialContentRef = useRef(null);
  const productLaunchesRef = useRef(null);
  const socialAssetsRef = useRef(null);
  const emailsRef = useRef(null);
  const printAndDigitalRef = useRef(null);
  const moreRef = useRef(null);

  // const socialContentView = useInView(socialContentRef);
  const socialContentView = useInView(socialContentRef, {
    margin: '-50% 0px -50% 0px',
  });
  const productLaunchesView = useInView(productLaunchesRef, {
    margin: '-50% 0px -50% 0px',
  });
  const socialAssetsView = useInView(socialAssetsRef, {
    margin: '-50% 0px -50% 0px',
  });
  const emailsView = useInView(emailsRef, {
    margin: '-50% 0px -50% 0px',
  });
  const printAndDigitalView = useInView(printAndDigitalRef, {
    margin: '-50% 0px -50% 0px',
  });
  const moreView = useInView(moreRef, {
    margin: '-50% 0px -50% 0px',
  });

  // const { inView: socialContentView } = useInView({
  //   ref: socialContentRef,
  //   threshold: 0.5, // Adjust threshold as needed
  // });

  // useEffect(() => {
  //   console.log('Element is in view: ', socialContentView);
  // }, [socialContentView]);

  return (
    <div className='col-span-full md:grid md:grid-cols-12 gap-10'>
      <div className='col-span-full'>
        <ThickLine color='bg-white' />
      </div>
      <div className='col-span-full sticky top-0 md:col-span-4 bg-black/[85%] h-fit backdrop-blur-xl py-5'>
        <h3 className='text-2xl md:text-3xl leading-none font-bold text-neutral-600 '>
          <span className='text-white'>I worked on</span>{' '}
          <span
            className={`${
              socialContentView ? 'text-red-500' : null
            } transition-colors duration-500`}
          >
            social content,
          </span>{' '}
          <span
            className={`${
              productLaunchesView ? 'text-green-500' : null
            } transition-colors duration-500`}
          >
            product launches,
          </span>{' '}
          <span
            className={`${
              socialAssetsView ? 'text-pink-500' : null
            } transition-colors duration-500`}
          >
            social assets,
          </span>{' '}
          <span
            className={`${
              emailsView ? 'text-blue-500' : null
            } transition-colors duration-500`}
          >
            emails,
          </span>{' '}
          <span
            className={`${
              printAndDigitalView ? 'text-lime-500' : null
            } transition-colors duration-500`}
          >
            print & digital ads,
          </span>{' '}
          <span
            className={`${
              moreView ? 'text-purple-500' : null
            } transition-colors duration-500`}
          >
            out-of-home and more.
          </span>
        </h3>
      </div>
      <div className='col-span-full md:col-span-8'>
        {/* THIS WILL BE HARD CODED IN THE FUTURE PLS DO NOT MAP */}
        <div
          ref={socialContentRef}
          className='h-[50rem] w-full bg-red-500 text-red-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'
        >
          Social Content
        </div>
        <div
          ref={productLaunchesRef}
          className='h-[50rem] w-full bg-green-500 text-green-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'
        >
          product launches
        </div>
        <div
          ref={socialAssetsRef}
          className='h-[50rem] w-full bg-pink-500 text-pink-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'
        >
          social assets
        </div>
        <div
          ref={emailsRef}
          className='h-[50rem] w-full bg-blue-500 text-blue-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'
        >
          emails
        </div>
        <div
          ref={printAndDigitalRef}
          className='h-[50rem] w-full bg-lime-500 text-lime-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'
        >
          print & digital ads
        </div>
        <div
          ref={moreRef}
          className='h-[50rem] w-full bg-purple-500 text-purple-950 text-clamp-5xl leading-none flex items-center justify-center uppercase'
        >
          out-of-home and more
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
