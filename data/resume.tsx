export interface Education {
    school: string,
    degree: "Bachelors" | "Masters",
    startDate: Date,
    endDate?: Date,
    overallGpa: number,
    majorGpa: number,
    major: string,
    minors: string[]
    courses: string[]
}

export interface Skill {
    name: string,
    proficiency: number
}

export interface ResumeItem {
    startDate: Date;
    endDate?: Date;
    accomplishments: string[];
    languagesUsed?: string[];
    technologiesUsed?: string[];
    otherSkillsUsed?: string[];
}

export interface Project extends ResumeItem {
    name: string,
    description?: string,
    type: "Personal" | "Academic",
    group_size: number,
}

export interface WorkExperience extends ResumeItem {
    title: string,
    employer: string,
    workType: "Part-Time" | "Full-Time" | "Seasonal" |"Contract"
}