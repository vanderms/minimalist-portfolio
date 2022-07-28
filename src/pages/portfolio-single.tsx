import { ProjectCoverSection } from "@/components/sections/project-cover";
import { useProjects } from "@/hooks/use-projects";
import { useParams } from "react-router-dom";
import { NotFound } from "./not-found";

export function PortfolioSinglePage() {
  const params = useParams();
  const { getProject } = useProjects();

  const project = getProject(params.project ?? "");

  if (!project) {
    return <NotFound />;
  }

  return (
    <main>
      <ProjectCoverSection project={project} />
    </main>
  );
}
