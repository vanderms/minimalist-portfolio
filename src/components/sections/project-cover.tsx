import { Project } from "@/hooks/use-projects";
import { ActionLink } from "../buttons/action-link";
import { useId } from "react";

export const ProjectCoverSection: React.FC<{ project: Project }> = ({ project }) => {
  const id = useId();

  return (
    <section
      aria-labelledby={id}
      className={`mt-10 py-6 border-y border-neutral-150 grid grid-cols-1 gap-6
      md:grid-cols-2  md:gap-y-4 md:gap-x-16 xl:grid-cols-1 xl:py-12 xl:mt-[7.1875rem]
      xl:row-start-2 xl:row-span-2 xl:h-max
    `}
    >
      <h1 id={id} className="title-md text-neutral-800">
        {project.name}
      </h1>
      <div className="md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-4 xl:col-start-auto xl:row-start-auto xl:row-span-auto xl:col-span-auto">
        {project.description.map((paragraph, i) => (
          <p key={i} className="body-sm text-neutral-500 xl:body-md">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="">
        {project.tags.map((tag, i) => (
          <span key={i} className="body-sm text-primary text-[0.8125rem] font-bold">
            {tag} {i < project.tags.length - 1 ? "/ " : ""}
          </span>
        ))}
      </div>
      <div className="">
        <ActionLink to={project.preview} router={false} type="secondary" blank={true}>
          VISIT WEBSITE
        </ActionLink>
      </div>
    </section>
  );
};
