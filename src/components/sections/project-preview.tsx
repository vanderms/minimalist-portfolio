import { Project } from "@/hooks/use-projects";
import { useId } from "react";

export const ProjectPreviewSection: React.FC<{ project: Project }> = ({ project }) => {
  const id = useId();

  const thumbnailOne = (viewport: string) =>
    `/assets/detail/${viewport}/image-${project!.name.toLowerCase()}-preview-1@2x.jpg`;

  const thumbnailTwo = (viewport: string) =>
    `/assets/detail/${viewport}/image-${project!.name.toLowerCase()}-preview-2@2x.jpg`;

  return (
    <section className="mt-10 grid grid-cols-1 xl:col-start-2">
      <h2 id={id} className="title-sm text-neutral-800">
        Static Previews
      </h2>

      <picture
        className={`relative mt-7 w-full pb-[63.022508%] md:pb-[62.9898403%] 
            xl:pb-[62.992126%]`}
      >
        <source media="(min-width: 74rem)" srcSet={thumbnailOne("desktop")} />
        <source media="(min-width: 45rem)" srcSet={thumbnailOne("tablet")} />
        <img
          alt="thumbnail"
          src={thumbnailOne("mobile")}
          className="absolute inset-0 object-contain object-center"
        />
      </picture>

      <picture
        className={`relative mt-8 w-full pb-[63.022508%] md:pb-[62.9898403%] 
            xl:pb-[62.992126%]`}
      >
        <source media="(min-width: 74rem)" srcSet={thumbnailTwo("desktop")} />
        <source media="(min-width: 45rem)" srcSet={thumbnailTwo("tablet")} />
        <img
          alt="thumbnail"
          src={thumbnailTwo("mobile")}
          className="absolute inset-0 object-contain object-center"
        />
      </picture>
    </section>
  );
};
