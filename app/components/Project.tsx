import React from 'react';
import Typography from './common/Typography';
import ProjectCard from './ProjectCard';

export default function Project({ project }: { project: IProjectProps; }) {
  return (
    <div className='PROJECT flex flex-wrap'>
      <Typography className='text-[3rem] w-full font-semibold leading-none'>{project.title}</Typography>
      <Typography className='text-[2rem] text-mred w-full font-semibold leading-none mb-2'>{project.subtitle}</Typography>
      <div className='flex gap-10'>
        <ProjectCard imageUrl={project.imageUrl} videoUrl={project.videoUrl} techStack={project.techStack} />
        <Typography className='text-[1.5rem] text-justify leading-[1.4] font-semibold'>{project.description}</Typography>
      </div>
    </div>
  );
}

interface IProjectProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  videoUrl?: string;
  techStack: string[];
  description: string;
  github?: string;
}
