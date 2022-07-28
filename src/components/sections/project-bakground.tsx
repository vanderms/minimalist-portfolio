import { Project } from "@/hooks/use-projects";
import { useId } from "react";

export const ProjectBackgroundSection: React.FC<{ project: Project }> = (props) => {
  const id = useId();
  return (
    <section className="mt-12 md:mt-10 xl:mt-[7.1875rem] xl:col-start-2">
      <h2 id={id} className="title-sm text-neutral-800">
        Project Background
      </h2>
      <p className="mt-7 body-sm text-neutral-500">{props.project.background}</p>
    </section>
  );
};
