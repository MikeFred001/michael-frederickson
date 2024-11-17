import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Typography from './common/Typography';

export default function ContactButton({ size, icon, label }: { size?: number, icon: any, label: string; }) {
  return (
    <div className='flex flex-col gap-1 items-center'>
      <Link href=''>
        <div
          className='CONTACT-BUTTON flex justify-center items-center whitespace-pre bg-mred border-2 border-gray-200 outline outline-[5px] outline-black rounded-full p-6 transition-all duration-300 hover:bg-red hover:outline-[8px]'
          style={{ width: size, height: size }}
        >
          <FontAwesomeIcon icon={icon} size='4x' className='m-2 text-white' />
        </div>
      </Link>
      <Typography className='text-[1.15rem] font-semibold'>
        {label}
      </Typography>
    </div>
  );
}
