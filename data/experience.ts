import { WorkExperience } from "./resume"

export const experience: WorkExperience[] = [
    {
        title: "Application Developer Intern",
        employer: "Westinghouse Electric Corporation",
        startDate: new Date("5-18-2026"),
        endDate: new Date("8-21-2026"),
        workType: "Full-Time",
        accomplishments: [
            "Brushed up knowledge of C# and .NET",
            "Learned Angular development and best practices",
            "Oversaw the development of a full stack application using C# .NET and Angular",
            "Made visual improvements to three existing applications"
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
            "Learned systems and procedures related to the job within a week.",
            "Executed manual regression test sets to ensure proper app functionality for millions of users",
            "Validated three new features worked as intended",
            "Documented irregularities between app behavior and expected behavior on Jira"
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