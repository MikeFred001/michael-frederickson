import React from 'react';
import Project from './Project';
import Typography from './common/Typography';
import projects from '../data/projects.json';

export default function Projects() {

  return (
    <div className='PROJECTS w-full pb-10'>
      <Typography className='text-[6rem] text-shadow-red2 font-semibold mb-10'>Projects</Typography>
      <div className='flex flex-col gap-[10rem]'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

