import IconText from './ui/IconText';
import SplitText from './ui/SplitText';

const Header = () => {
  return (
    <header className='container mx-auto my-6 md:my-10' id='header'>
      <IconText>
        👋🏻 Hey, I&apos;m Debbie, your creative curator, serving up vibes, just
      </IconText>
      <h1
        className='text-[52px] md:text-9xl font-bold tracking-tighter leading-none overflow-visible'
        aria-label='Debbie'
      >
        <SplitText>debbie-ing</SplitText>
      </h1>
    </header>
  );
};

export default Header;
