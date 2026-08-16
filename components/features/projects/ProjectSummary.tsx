import { Project } from "@/data/resume";
import { useMemo } from "react";

interface Props {
    project: Project
}

export default function ProjectSummary({ project }: Props){

    const groupDetails = useMemo( () => {
        if (project.group_size == 1){
            return "Individual"
        }
        return `${project.group_size-1} ${project.group_size == 2 ? 'Partner' : 'Partners' }`

    }, [ project ])

    return (
        <div className="border rounded-xl px-5 pb-4">
            <h2>{project.name}</h2>
            <p>{ project.type } Project, { groupDetails }</p>
            <p className="text-sm">{project.startDate.toLocaleString('default', { month: 'long', year: 'numeric'})} - {project.endDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? "Present"}</p>
            <p>Accomplishments:</p>
            <ul>
                {
                    project.accomplishments.map( (accomplishment, i) => <li key={i}>{ accomplishment }</li>)
                }
            </ul>
        </div>
    )
}