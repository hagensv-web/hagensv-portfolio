import EducationSummary from "@/components/features/education/EducationSummary";
import { education } from "@/data/education";

export default function Education(){
    return (
        <div>
            <h1>Education</h1>
            { education.map( e => <EducationSummary key={e.school} education={e} />) }
        </div>
    )
}