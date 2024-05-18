import IconText from './ui/IconText';
import SplitText from './ui/SplitText';

const Header = () => {
  return (
    <header className='container mx-auto my-10' id='header'>
      <IconText>
        👋🏻 Hey, I&apos;m Debbie, here to sprinkle some creativity and fun in
        your day— all while just
      </IconText>
      <h1
        className='text-[3.25rem] sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none overflow-hidden'
        aria-label='Debbie'
      >
        <SplitText>debbie-ing</SplitText>
      </h1>
    </header>
  );
};

export default Header;
