import WorkSummary from "@/components/features/experience/WorkSummary";
import { experience } from "@/data/experience";

export default function ExperiencePage(){
    return (
        <div>
            <h1>Experience</h1>
            <div className="flex flex-col gap-5">
            { experience.map( work => <WorkSummary key={work.title} work={work}/>) }
            </div>
        </div>
    )
}