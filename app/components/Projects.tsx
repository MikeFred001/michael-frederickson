import React, { useEffect, useState, useRef } from 'react';
import Project from './Project';
import Typography from './common/Typography';
import projects from '../data/projects.json';

export default function Projects() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(slideInProject, []);

  return (
    <div className="PROJECTS w-full pb-10">
      <Typography className="text-[6rem] text-shadow-red2 font-semibold mb-10">
        Projects
      </Typography>
      <div className="flex flex-col gap-[12rem]">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`transition-all duration-[700ms] transform ${visibleIndexes.includes(index)
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-[-50px]'
              }`}
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );

  function slideInProject() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }
}


