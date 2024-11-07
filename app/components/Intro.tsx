import Typography from './common/Typography';

export default function Intro() {
  return (
    <div className='INTRO h-screen flex flex-col justify-center gap-3'>
      <div className='flex flex-col self-center'>
        <Typography className='text-6xl'>Hi, I'm Mike.</Typography>
        <Typography className='text-6xl'>I'm a Web Developer</Typography>
      </div>
      <div className='h-1 bg-red-400 w-[90vw]' />
    </div>
  );
}
