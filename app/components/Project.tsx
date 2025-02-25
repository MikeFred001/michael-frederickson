import Typography from "./common/Typography";
import ProjectCard from "./ProjectCard";
import ProjectTitles from "./ProjectTitles";
import ProjectButton from "./common/ProjectButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

export default function Project({ project }: { project: IProjectProps }) {
  return (
    <div className="PROJECT flex flex-wrap lg:max-h-[37rem] lg:w-[74rem]">
      <ProjectTitles title={project.title} subtitle={project.subtitle} />
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-10">
        <ProjectCard
          imageUrl={project.imageUrl}
          videoUrl={project.videoUrl}
          techStack={project.techStack}
        />
        <div className="flex flex-col-reverse gap-2 lg:h-full lg:flex-col lg:justify-between">
          <Typography className="px-1 text-justify text-[1rem] font-semibold leading-[1.35] lg:px-0 lg:text-[1.5rem]">
            {project.description}
          </Typography>
          <div className="flex gap-2">
            {project.demoLink && (
              <ProjectButton
                icon={faComputer}
                text="Try the Demo"
                href={project.demoLink}
              />
            )}
            {project.githubLink && (
              <ProjectButton
                icon={faGithub}
                text="See the GitHub"
                href={project.githubLink}
              />
            )}
          </div>
        </div>
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
  githubLink?: string;
  demoLink?: string;
}
