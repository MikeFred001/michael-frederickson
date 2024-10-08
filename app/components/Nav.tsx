import Link from 'next/link';
import Typography from './common/Typography';

export default function Nav() {
  return (
    <nav className='NAV flex justify-between w-[16rem] bg-green-300'>
      <Link href='#home'>
        <Typography>Home</Typography>
      </Link>
      <Link href='#about'>
        <Typography>About</Typography>
      </Link>
      <Link href='#projects'>
        <Typography>Projects</Typography>
      </Link>
      <Link href='#contact'>
        <Typography>Contact</Typography>
      </Link>
    </nav>
  );
}
