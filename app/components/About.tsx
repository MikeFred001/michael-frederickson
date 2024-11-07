import React from 'react';
import Typography from './common/Typography';
import ScalableImage from './common/ScalableImage';

export default function About() {
  return (
    <div className='ABOUT flex w-full justify-center bg-gray-200'>
      <div className='flex gap-4 p-12 lg:px-40 bg-red-300'>
        <div className='flex flex-col gap-2'>
          <Typography className='text-6xl'>About</Typography>
          <Typography className='max-w-[30rem] text-[1.3rem]'>
            Hi, I'm Mike. I'm a software engineer, people person, and lifetime nerd. I specialize in building responsive, custom web apps using tech like React, Next.js, PostgreSQL, and more.
            I made the leap into tech in 2020 because I simply like creating cool stuff. Especially when it works well and looks good.
            Most recently I worked at Vital Time Tech where I helped build everything from
            complex social media platforms to inventory and workflow management systems.
            My background in office environments also gave me valuable skills in teamwork, communication, and time management.
            I'm a fast learner and I'm always excited to take on new challenges, whether it's frontend or full-stack development.
            If you're looking for a dedicated engineer who values quality and enjoys working with people, feel free to connect.
            Check out some of my projects below!
          </Typography>
        </div>
        <ScalableImage
          src="/about1.png"
          alt="Nerdy programmer guy"
          containerClassName='maxw-[32rem]'
          width={300}
        />
      </div>
    </div>
  );
}
