import WaveSVG from '../svg/WaveSVG';
import ArrowRightSVG from '../svg/ArrowRightSVG';
import BarbellSVG from '../svg/BarbellSVG';
import EmailSVG from '../svg/EmailSVG';

const IconText = ({ icon, children }) => {
  const iconComponents = {
    wave: <WaveSVG />,
    arrowRight: <ArrowRightSVG />,
    barbell: <BarbellSVG />,
    email: <EmailSVG />,
  };

  // Check if the requested icon exists in the mapping, if not, default to a placeholder or null
  const selectedIcon = iconComponents[icon] || null;

  return (
    <div className='flex gap-1 md:gap-2 items-center text-neutral-400 mb-4'>
      {selectedIcon === null ? null : (
        <div className='w-3.5 md:w-5'>{selectedIcon}</div>
      )}
      <span className='text-sm md:text-xl font-semibold leading-1'>
        {children}
      </span>
    </div>
  );
};

export default IconText;
