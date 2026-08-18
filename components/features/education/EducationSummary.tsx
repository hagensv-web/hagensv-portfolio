import { Education } from "@/data/resume";

interface Props {
    education: Education
}

export default function EducationSummary({ education }: Props){
    return (
        <div>
            <h2>{ education.school }</h2>
            <p className="text-sm">{ education.startDate.toLocaleDateString('default', { month: 'long', year: 'numeric' }) } - { education.endDate?.toLocaleDateString('default', { month: 'long', year: 'numeric' }) ?? "Present" }</p>
            <p>Major: { education.major }</p>
            <p>Minors: { education.minors.join(", ")}</p>
            <p>GPA: {education.majorGpa} in major, {education.overallGpa} overall</p>
            <p>Relevant Courses:</p>
            <ul>
                { education.courses.map( course => <li key={course}>{course}</li>) }
            </ul>
        </div>
    )
}