import React from 'react';
import Image from 'next/image';
import Typography from './common/Typography';
import ScalableImage from './common/ScalableImage';

export default function About() {
  return (
    <div className='ABOUT flex flex-col px-12 bg-gray-200'>
      <Typography className='text-6xl'>About</Typography>
      <div className='flex justify-between gap-12'>
        <Typography>
          Hi, I'm Mike. I'm a software engineer, people person, and lifetime nerd. I specialize in building responsive, custom web apps using tech like React, Next.js, PostgreSQL, and more.
          I made the leap into tech in 2020 because I simply like creating cool stuff. Especially when it works well and looks good.
          Most recently I worked at Vital Time Tech where I helped build everything from
          complex social media platforms to inventory and workflow management systems.
          My background in office environments also gave me valuable skills in teamwork, communication, and time management.
          I'm a fast learner and I'm always excited to take on new challenges, whether it's frontend or full-stack development.
          If you're looking for a dedicated engineer who values quality and enjoys working with people, feel free to connect.
          Check out some of my projects below!
        </Typography>
        <ScalableImage
          src="/about1.png"
          alt="Nerdy programmer guy"
          width={100}
          height={300}
        />
      </div>
    </div>
  );
}
