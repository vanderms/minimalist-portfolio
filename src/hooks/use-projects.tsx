import data from "@/data/data.json";

type DataProject = typeof data[0];

export interface Project extends DataProject {
  prev: string;
  next: string;
}

export function useProjects() {
  const projects: Project[] = data.map((project, index) => ({
    ...project,
    prev: index === 0 ? data[data.length - 1].name : data[index - 1].name,
    next: index === data.length - 1 ? data[0].name : data[index + 1].name,
  }));

  const getProject = (name: string) => {
    return projects.find((x) => x.name.toLowerCase() === name.toLowerCase());
  };
  return { projects, getProject };
}
