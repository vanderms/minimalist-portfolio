import { Project } from "@/hooks/use-projects";
import { ActionLink } from "../buttons/action-link";

export const ProjectCoverSection: React.FC<{ project: Project }> = ({ project }) => {
  const thumbnail = (viewport: string) =>
    `/assets/detail/${viewport}/image-${project!.name.toLowerCase()}-hero.jpg`;

  return (
    <section className="mt-10">
      <div className="container grid grid-cols-1">
        <picture className={`relative w-full pb-[45.0160772%]`}>
          <source media="(min-width: 74rem)" srcSet={thumbnail("desktop")} />
          <source media="(min-width: 45rem)" srcSet={thumbnail("tablet")} />
          <img
            alt="thumbnail"
            src={thumbnail("mobile")}
            className="absolute inset-0 object-contain object-center"
          />
        </picture>
        <header className="mt-10 py-6 border-y border-neutral-150">
          <h1 className="title-md text-neutral-800">{project.name}</h1>
          <div className="mt-6">
            {project.description.map((paragraph, i) => (
              <p key={i} className="body-sm text-neutral-500 xl:body-md">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="body-sm text-primary text-[0.8125rem] font-bold">
                {tag} {i < project.tags.length - 1 ? "/ " : ""}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <ActionLink to={project.preview} router={false} type="secondary" blank={true}>
              VISIT WEBSITE
            </ActionLink>
          </div>
        </header>
      </div>
    </section>
  );
};
