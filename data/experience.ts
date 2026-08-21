import { WorkExperience } from "./resume"

export const experience: WorkExperience[] = [
    {
        title: "Application Developer Intern",
        employer: "Westinghouse Electric Corporation",
        startDate: new Date("5-18-2026"),
        endDate: new Date("8-21-2026"),
        workType: "Full-Time",
        accomplishments: [
            "Created a full stack application with C# .NET and Angular",
            "Redesigned and improved UI components of an existing to improve usability and consistency",
            "Resolved bugs across multiple existing applications to improve reliability and functionality"
        ],
    },
    {
        title: "Student Grader",
        employer: "Grove City College",
        startDate: new Date("1-1-2025"),
        endDate: new Date("5-1-2026"),
        workType: "Part-Time",
        accomplishments: [
            "Used automatic and manual testing to confirm student work met instructor requirements",
            "Graded student projects and homework within a week of original the due date",
            "Provided students with meaningful feedback on academic progress"
        ],
    },
    {
        title: "Quality Assurance Intern",
        employer: "Smith Micro Software",
        startDate: new Date("5-1-2025"),
        endDate: new Date("8-1-2025"),
        workType: "Full-Time",
        accomplishments: [
            "Executed Spira test sets to ensure proper app functionality fo millions of users",
            "Document irregularities between app behaviour and expected behavior in Jira",
            "Validated three new features worked as intended",
        ]
    },
    {
        title: "Bank Teller",
        employer: "Mars Bank",
        startDate: new Date("5-1-2023"),
        endDate: new Date("8-1-2023"),
        workType: "Part-Time",
        accomplishments: [
            "Learned bank systems and procedures on the job",
            "Processed withdrawals, deposits, and cashed checks for customers"
        ]
    }
]