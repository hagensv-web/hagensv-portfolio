import ProjectSummary from "@/components/features/projects/ProjectSummary";
import { projects } from "@/data/projects";

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