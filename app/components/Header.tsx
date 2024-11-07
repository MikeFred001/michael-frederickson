import Nav from './Nav';
import Logo from './Logo';

export default function Header() {
  return (
    <div id="home" className='HEADER fixed top-0 right-0 w-full flex justify-between items-center p-4 z-10'>
      <Logo width={100} height={85} />
      <Nav />
    </div>
  );
}
