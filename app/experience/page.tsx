import WorkSummary from "@/components/features/experience/WorkSummary";
import { experience } from "@/data/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Take a look at all the incredible companies I have had the opportunity to work for, and the valuable skills that I learned during my employment."
}

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