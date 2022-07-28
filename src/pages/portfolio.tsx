import { CallToActionSection } from "@/components/sections/call-to-action";
import { ProjectsListSection } from "@/components/sections/projects-list";

export function PortfolioPage() {
  return (
    <main>
      <ProjectsListSection />
      <CallToActionSection />
    </main>
  );
}
