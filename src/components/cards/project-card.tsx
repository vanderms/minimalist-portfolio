import { useProjects } from "@/hooks/use-projects";
import { ActionLink } from "../buttons/action-link";

export const ProjectCard: React.FC<{ inverse: boolean; project: string }> = (props) => {
  const { getProject } = useProjects();

  const project = getProject(props.project);

  const thumbnail = (viewport: string) =>
    `/assets/portfolio/${viewport}/image-portfolio-${project!.name.toLowerCase()}@2x.jpg`;

  return (
    <article
      className={`grid grid-cols-1 gap-8
      ${
        props.inverse
          ? "md:grid-cols-[281fr,339fr] xl:grid-cols-[21.875rem,33.75rem]"
          : "md:grid-cols-[339fr,281fr] xl:grid-cols-[33.75rem,21.875rem]"
      } md:gap-[4.3125rem] md:items-center xl:gap-[7.8125rem]
    `}
    >
      <picture
        className={`relative w-full pb-[92.6045016%] ${
          props.inverse ? "md:order-1" : ""
        } md:pb-[92.6253687%] xl:pb-[92.5925926%]`}
      >
        <source media="(min-width: 74rem)" srcSet={thumbnail("desktop")} />
        <source media="(min-width: 45rem)" srcSet={thumbnail("tablet")} />
        <img
          alt="thumbnail"
          src={thumbnail("mobile")}
          className="absolute inset-0 object-contain object-center"
        />
      </picture>
      <header className="py-6 border-y border-neutral-150 md:pt-8 md:pb-[3.125rem] xl:py-0 xl:flex xl:flex-col xl:justify-center xl:h-full">
        <h2 className="title-md text-neutral-800">{project!.name}</h2>
        <div className="mt-6 md:mt-[1.75rem]">
          {project!.description.map((paragraph, i) => (
            <p key={i} className="body-sm text-neutral-500 xl:body-md">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-6">
          <ActionLink
            to={`/portfolio/${project!.name.toLowerCase()}`}
            router={true}
            type="secondary"
          >
            VIEW PROJECT
          </ActionLink>
        </div>
      </header>
    </article>
  );
};
