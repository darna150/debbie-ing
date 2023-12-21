import IconText from './ui/IconText';
import { ThickLine } from './ui/Lines';
import { SplitText } from './ui/SplitText';

const Header = () => {
  return (
    <header className='container mx-auto my-10'>
      <ThickLine />
      <IconText icon='wave'>My name is Debbie Melgarejo, but call me</IconText>
      <h1 className='overflow-hidden text-clamp-9xl font-bold tracking-tighter leading-none'>
        <SplitText>Hello CodeSandbox Lorem Ipsum Dolor Sit Amet</SplitText>
      </h1>
    </header>
  );
};

export default Header;
