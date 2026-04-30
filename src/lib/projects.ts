import { projects } from "@/data/projects"

export async function getProjects() {
  return projects
}

export async function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}