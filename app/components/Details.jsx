import WorkHistory from './grid-items/WorkHistory';
import Skills from './grid-items/Skills';
import Email from './grid-items/Email';

const Work = () => {
  return (
    <div className='container mx-auto mt-10 mb-14'>
      <div className='grid md:grid-cols-12 gap-10 auto-rows-auto'>
        <div className='col-span-full md:col-span-6 md:row-span-2'>
          <WorkHistory />
        </div>
        <div className='col-span-full md:col-span-6'>
          <Skills />
        </div>
        <div className='col-span-full md:col-span-6'>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Work;
