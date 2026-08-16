import ProjectSummary from "@/components/features/projects/ProjectSummary";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Learn more about the wide variety of projects I have worked on throughout the years, both in and out of school."
}

export default function ProjectsPage(){
    return (
        <div>
            <h1>Projects</h1>
            <div className="flex flex-col gap-10">
            { projects.map( project => <ProjectSummary key={project.name} project={project} />) }
            </div>
        </div>
    )
}