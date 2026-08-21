import { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Resume",
    description: "If for some reason you dont already have my resume, here it is. This is my tailored resume highlighting my recent work experience and top projects."
}

export default function ResumePage(){

    return <div>
        <h1>My Resume</h1>
        <iframe 
            src="/resume_current.pdf"
            className="w-full aspect-[19/22]"
        />
    </div>
}