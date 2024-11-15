import React from 'react';
import Typography from './common/Typography';
import ScalableImage from './common/ScalableImage';
import TechStack from './TechStack';

export default function ProjectCard({ videoUrl, imageUrl, techStack }: IProjectCardProps) {
  return (
    <div className='PROJECT-CARD relative flex flex-col rounded-lg overflow-hidden w-[45rem] bg-gray-300 shadow-custom1 flex-shrink-0'>
      <div className='absolute w-[6.5rem] h-[6.5rem] rotate-[345deg] bottom-0 left-0 bg-gray-600 -translate-x-2 translate-y-5' />
      {videoUrl &&
        <video
          className='scale-[1.01]'
          src={videoUrl}
          controls
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      }
      {imageUrl && <ScalableImage src={imageUrl} className='scale-[1.01]' alt='Project image' />}
      <TechStack techStack={techStack} />
    </div>
  );
}

interface IProjectCardProps {
  videoUrl?: string;
  imageUrl?: string;
  techStack: string[];
}
