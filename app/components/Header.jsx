import IconText from './ui/IconText';
import { ThickLine } from './ui/Lines';
const Header = () => {
  return (
    <header className='container mx-auto my-10'>
      <ThickLine />
      <IconText icon='wave'>My name is Debbie Melgarejo, but call me</IconText>
      <h1 className='text-clamp-9xl font-bold tracking-tighter leading-none'>
        Debbie
      </h1>
    </header>
  );
};

export default Header;
