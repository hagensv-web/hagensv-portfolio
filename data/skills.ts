import { Skill } from "./resume"

export const getProficiencyLabel = (proficiency: number) => {
    if (proficiency <= 0.40){
        return "Novice"
    }
    if (proficiency <= 0.75){
        return "Proficient"
    }
    if (proficiency <= 0.90){
        return "Expert"
    }
    return "Master"
}

export const languages: Skill[] = [
    {name: "Java", proficiency: 0.9},
    {name: "Javascript/Typescript", proficiency: 0.85},
    {name: "HTML & CSS", proficiency: 0.75},
    {name: "C#", proficiency: 0.70},
    {name: "Python", proficiency: 0.60},
    {name: "Scala", proficiency: 0.55},
    {name: "Kotlin", proficiency: 0.50},
    {name: "Swift", proficiency: 0.45},
    {name: "SQL", proficiency: 0.45},
    {name: "C", proficiency: 0.30}
]

export const technologies: Skill[] = [
    {name: "Git/Github", proficiency: 0.85},
    {name: "Linux/Bash", proficiency: 0.75},
    {name: "React", proficiency: 0.75},
    {name: "TailwindCSS", proficiency: 0.70},
    {name: "Jira", proficiency: 0.70},
    {name: "Figma", proficiency: 0.65},
    {name: "Angular", proficiency: 0.60},
    {name: "Junit", proficiency: 0.60},
    // {name: "XCode", proficiency: 0.50},
    {name: "Electron", proficiency: 0.60},
    {name: "Socket.io", proficiency: 0.55},
    // {name: "Java Swing", proficiency: 0.55},
    {name: "Flask", proficiency: 0.50},
    // {name: "Bootstrap", proficiency: 0.45},
    {name: "Wordpress", proficiency: 0.35},
    // {name: "Discord.js", proficiency: 0.30},
]

export const otherSkills: Skill[] = [
    {name: "Learning", proficiency: 0.90},
    {name: "Debugging", proficiency: 0.85},
    {name: "Problem Solving", proficiency: 0.80},
    {name: "Creative Thinking", proficiency: 0.75},
    {name: "Teamwork", proficiency: 0.75},
    {name: "Agile/Scrum", proficiency: 0.70},
    {name: "Communication", proficiency: 0.70},
    {name: "Design", proficiency: 0.70},
    {name: "Manual Regression Testing", proficiency: 0.65},
    {name: "Software Maintainence", proficiency: 0.65},
    {name: "Prompt Engineering", proficiency: 0.60},
    {name: "Customer Service", proficiency: 0.60},
]