import { ThinLine } from './Lines';

const EyebrowHeadingParagraph = (props) => {
  return (
    <>
      <ThinLine color={`${props.color ? props.color : null}`} />
      <span className='text-sm mb-1 block'>{props.eyebrow}</span>
      <h3 className='text-3xl font-bold mb-2'>{props.heading}</h3>
      <p className='text-neutral-400'>{props.children}</p>
    </>
  );
};

export default EyebrowHeadingParagraph;
