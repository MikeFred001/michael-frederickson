import React from 'react';
import Typography from './common/Typography';

export default function TechStack({ techStack }: { techStack: string[]; }) {
  return (
    <div className='TECH-STACK flex relative px-2 pb-[6px] pt-[9px] text-[1.3rem]'>
      <div>
        <Typography className='pr-8 text-white font-semibold'>Tech Stack</Typography>
      </div>
      <div>
        <Typography className='flex-1 whitespace-pre font-semibold'>{techStack.join('   •   ')}</Typography>
      </div>
    </div>
  );
}
