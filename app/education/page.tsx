import EducationSummary from "@/components/features/education/EducationSummary";
import { education } from "@/data/education";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "My education has shaped me into who I am today, take a look at my academic achievements and the courses I took in school."
}

export default function Education(){
    return (
        <div>
            <h1>Education</h1>
            { education.map( e => <EducationSummary key={e.school} education={e} />) }
        </div>
    )
}