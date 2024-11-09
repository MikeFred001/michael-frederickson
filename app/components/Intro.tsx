import Typography from './common/Typography';

export default function Intro() {
  return (
    <div className='INTRO h-screen flex flex-col justify-center gap-3 font-semibold text-[6rem]'>
      <div className='flex flex-col self-center'>
        <Typography className='leading-none'>
          Hi, I'm <span className='text-mred text-shadow-black2'>Mike</span>
        </Typography>
        <Typography className='leading-none'>
          I'm a Web Developer.
        </Typography>
      </div>
      <div className='h-[5px] -mt-3 bg-mred w-[90vw]' />
    </div>
  );
}
