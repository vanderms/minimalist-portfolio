import { useId } from "react";
import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "../cards/project-card";

export function ProjectsListSection() {
  const id = useId();
  const { projects } = useProjects();

  return (
    <section aria-labelledby={id} className="mt-10 md:mt-24">
      <div className="container">
        <h1 id={id} className="sr-only">
          PORTFOLIO
        </h1>
        <ul className="flex flex-col gap-[4.5rem] items-center xl:gap-20">
          {projects.map((project, i) => (
            <li key={project.name} className={`${i % 2 === 1? 'self-end': 'self-start' }`}>
              <ProjectCard inverse={i % 2 === 1} project={project.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
