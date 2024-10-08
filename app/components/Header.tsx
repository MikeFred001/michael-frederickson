import Nav from './Nav';
import Logo from './Logo';

export default function Header() {
  return (
    <div className='HEADER flex justify-between items-center p-4 bg-red-300'>
      <Logo height={100} width={100} />
      <Nav />
    </div>
  );
}
