import IconText from './ui/IconText';

const Header = () => {
  return (
    <header className='container mx-auto'>
      <div className='bg-black w-full mb-5 h-1'>{/* LINE */}</div>
      <IconText icon='wave'>My name is Debbie Melgarejo, but call me</IconText>
      <h1 className='text-9xl font-bold tracking-tighter'>Debbie</h1>
    </header>
  );
};

export default Header;
