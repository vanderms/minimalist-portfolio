import data from "@/data/data.json";

export type Project = typeof data[0];

export function useProjects() {
  const projects = data;
  const getProject = (name: string) => {
    return projects.find((x) => x.name.toLowerCase() === name.toLowerCase());
  };
  return { projects, getProject };
}
