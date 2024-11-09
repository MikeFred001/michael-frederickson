import Link from 'next/link';
import Typography from './common/Typography';

export default function Nav({ activeSection }: { activeSection: string; }) {
  const defaultStyle = 'hover:scale-110 transition-all duration-300';
  const activeStyle = 'text-mred text-shadow-black1';

  return (
    <nav className='NAV flex justify-between text-[2rem] w-[23rem] font-semibold'>
      <Link href='#home'>
        <Typography className={`${defaultStyle} ${activeSection === 'home' ? activeStyle : ''}`}>
          Home
        </Typography>
      </Link>
      <Link href='#about'>
        <Typography className={`${defaultStyle} ${activeSection === 'about' ? activeStyle : ''}`}>About</Typography>
      </Link>
      <Link href='#projects'>
        <Typography className={`${defaultStyle} ${activeSection === 'projects' ? activeStyle : ''}`}>Projects</Typography>
      </Link>
      <Link href='#contact'>
        <Typography className={`${defaultStyle} ${activeSection === 'contact' ? activeStyle : ''}`}>Contact</Typography>
      </Link>
    </nav>
  );
}
