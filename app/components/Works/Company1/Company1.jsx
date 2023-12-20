import Image from 'next/image';
import { ThickLine, ThinLine } from '../../ui/Lines';
import EyebrowHeadingParagraph from '../../ui/EyebrowHeadingParagraph';
import Campaigns from './Campaigns';

const Company1 = () => {
  return (
    <>
      <section className='bg-black text-white' id='company1'>
        <div className='container mx-auto pt-20 px-5'>
          {/* HEADER */}
          <div
            className='sticky top-20 h-fit z-10'
            style={{ containerType: 'inline-size' }}
          >
            <h2 className='text-[15cqw] leading-none text-center font-bold'>
              Company 1
            </h2>
          </div>
          {/* CONTENT */}
          <div className='relative z-20 bg-black mt-20 grid md:grid-cols-6 md:gap-y-40 gap-20 pb-20'>
            {/* IMAGE WITH PARAGRAPH */}
            <div className='col-span-full'>
              <Image
                src={'/works/company1/picsum.jpeg'}
                alt=''
                width={1365}
                height={601}
                className='w-full mb-20'
              />
              <ThickLine color='bg-white' />
              <p className='text-clamp-5xl leading-none font-bold'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, et.
              </p>
            </div>

            {/* EYEBROW HEADING PARAGRAPH */}
            <div className='col-span-full md:col-span-3'>
              <EyebrowHeadingParagraph
                color='bg-white'
                eyebrow='Eyebrow Heading'
                heading='Heading 1'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                placeat laborum velit blanditiis nesciunt fuga saepe
                necessitatibus libero, omnis corrupti.
              </EyebrowHeadingParagraph>
            </div>
            <div className='col-span-full md:col-span-3'>
              <EyebrowHeadingParagraph
                color='bg-white'
                eyebrow='Eyebrow Heading'
                heading='Heading 1'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                placeat laborum velit blanditiis nesciunt fuga saepe
                necessitatibus libero, omnis corrupti.
              </EyebrowHeadingParagraph>
            </div>

            <Campaigns />
          </div>
        </div>
      </section>
    </>
  );
};

export default Company1;
