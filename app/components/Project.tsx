import Typography from "./common/Typography";
import ProjectCard from "./ProjectCard";

export default function Project({ project }: { project: IProjectProps }) {
  return (
    <div className="PROJECT flex flex-wrap">
      <Typography className="w-full text-[3.25rem] font-semibold leading-none">
        {project.title}
      </Typography>
      <Typography className="mb-2 w-full text-[2.25rem] font-semibold leading-none text-mred">
        {project.subtitle}
      </Typography>
      <div className="flex gap-10">
        <ProjectCard
          imageUrl={project.imageUrl}
          videoUrl={project.videoUrl}
          techStack={project.techStack}
        />
        <Typography className="text-justify text-[1.5rem] font-semibold leading-[1.4]">
          {project.description}
        </Typography>
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
