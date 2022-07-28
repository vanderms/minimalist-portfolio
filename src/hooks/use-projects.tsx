import data from "@/data/data.json";

export function useProjects() {
  const projects = data;
  const getProject = (name: string) => {
    const project = projects.find((x) => x.name === name);
    if (project) {
      return project;
    }
    throw Error("Project not found");
  };
  return { projects, getProject };
}
