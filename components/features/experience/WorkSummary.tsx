import { WorkExperience } from "@/data/resume";

interface Props {
    work: WorkExperience
}

export default function WorkSummary({ work }: Props){
    return (
        <div className="border rounded-xl px-5 pb-4">
            <h2>{ work.title }</h2>
            <p>{ work.employer } | { work.workType }</p>
            <p>{ work.startDate.toLocaleString('default', { month: 'long', year: 'numeric' }) } - { work.endDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present' }</p>
            <p>Accomplishments:</p>
            <ul>
                { work.accomplishments.map( (a,i) => <li key={i}>{a}</li>) }
            </ul>
        </div>
    )
}