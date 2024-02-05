import IconText from './ui/IconText';
import SplitText from './ui/SplitText';

const Header = () => {
  return (
    <header className='container mx-auto my-10'>
      <IconText icon='wave'>
        My name is Debbie, I live on the second floor
      </IconText>
      <h1
        className='text-clamp-9xl font-bold tracking-tighter leading-none'
        aria-label='Debbie'
      >
        <SplitText>debbie.ing</SplitText>
      </h1>
    </header>
  );
};

export default Header;
