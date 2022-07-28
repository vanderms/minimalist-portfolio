import { ProjectCoverSection } from "@/components/sections/project-cover";
import { useProjects } from "@/hooks/use-projects";
import { useParams } from "react-router-dom";
import { NotFound } from "./not-found";
import { ProjectBackgroundSection } from "@/components/sections/project-bakground";
import { ProjectPreviewSection } from "@/components/sections/project-preview";

export function PortfolioSinglePage() {
  const params = useParams();
  const { getProject } = useProjects();
  const project = getProject(params.project ?? "");

  const thumbnail = (viewport: string) =>
    `/assets/detail/${viewport}/image-${project!.name.toLowerCase()}-hero@2x.jpg`;

  if (!project) {
    return <NotFound />;
  }

  return (
    <main>
      <div
        className={`mt-10 container grid grid-cols-1 md:mt-[5.875rem] 
        xl:grid-cols-[21.875rem,39.6875rem] xl:justify-between 
      `}
      >
        <picture
          className={`relative w-full pb-[45.0160772%] md:pb-[44.9927431%] 
            xl:pb-[45.045045%] xl:col-start-1 xl:col-span-2`}
        >
          <source media="(min-width: 74rem)" srcSet={thumbnail("desktop")} />
          <source media="(min-width: 45rem)" srcSet={thumbnail("tablet")} />
          <img
            alt="thumbnail"
            src={thumbnail("mobile")}
            className="absolute inset-0 object-contain object-center"
          />
        </picture>
        <ProjectCoverSection project={project} />
        <ProjectBackgroundSection project={project} />
        <ProjectPreviewSection project={project}/>
      </div>
    </main>
  );
}
