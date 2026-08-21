import { Project } from "./resume";

export const projects: Project[] = [
    {
        name: "CustomMade Games",
        type: "Personal",
        group_size: 1,
        startDate: new Date("1-1-2026"),
        accomplishments: [
            "Designed, developed and deployed a browser-based game gneeration platform using Next.js and React",
            "Deploied automated CI/CD pipeline using Github Actions",
            "Improved lighthouse performance schore to a minimum of 90 of all categories",
            "Developed resuable React components shared across application features"
        ]
    },
    {
        name: "GarageHub",
        type: "Academic",
        group_size: 4,
        startDate: new Date("9-1-2025"),
        endDate: new Date("5-1-2026"),
        accomplishments: [
            "Gathered requirements from stakeholders and translated them into application features",
            "Developed a full-stack web and mobile application used by a local non-profit organization of 12+ volunteers to support opperations",
            "Developed web and mobile application features based on stakeholder feedback",
            "Integrated Slack authentication to streamline volunteer access and account management"
        ]
    },
    {
        name: "Where is My Movie?",
        type: "Academic",
        group_size: 2,
        startDate: new Date(),
        endDate: new Date(),
        accomplishments: [
            "Developed an Angroid app using Jetpack compose",
            "Integrated data from multiple API sources for movie info and streaming availability",
            "Reduced API requests through local caching",
            "Managed a local database to store favorite modives, movies to watch, and user preferences",
            "Processed streaming data and user data to recommend streaming service"
        ]
    },
    {
        name: "Portfolio Website",
        type: "Personal",
        group_size: 1,
        startDate: new Date("1-1-2024"),
        accomplishments: [
            "Designed and developed a responsive portfolio website using Next.js and React",
            "Implemented automated CI/CD with GitHub Actions to publish new builds",
            "Designed reusable components and layouts to maintain a consistent site structure",
            "Implemented responsive styling and accessibility features for desktop and mobile users"
        ]
    },
    {
        name: "Student Scheduler",
        type: "Academic",
        group_size: 4,
        startDate: new Date("1-1-2025"),
        endDate: new Date("5-1-2025"),
        accomplishments: [
            "Developed a responsive scheduling web application using React and TypeScript",
            "Built a REST API using Java and Spring Boot",
            "Established GitHub repository structure and branch protection rules for a four-person development team",
            "Collaborated through GitHub pull requests and version control workflows"
        ]
    },
    {
        name: "OurGCC",
        type: "Academic",
        group_size: 2,
        startDate: new Date("10-1-2024"),
        endDate: new Date("12-1-2024"),
        accomplishments: [
            "Created a working native iOS application using Swift and SwiftUI",
            "Designed and implemented a custom API for communication between the application and backend",
            "Integrated remote database storage for application data"
        ]
    },
    {
        name: "Boxed Up Games",
        type: "Personal",
        group_size: 1,
        startDate: new Date("8-1-2024"),
        endDate: new Date("12-1-2025"),
        accomplishments: [
            "Independently learned Electron to develop a cross-platform desktop application",
            "Developed a locally hosted multiplayer game using Express and Socket.IO",
            "Published the completed game to Game Jolt"
        ]
    },
    {
        name: "Space Miner",
        type: "Academic",
        group_size: 2,
        startDate: new Date("3-1-2022"),
        endDate: new Date("5-1-2022"),
        accomplishments: [
            "Developed a Java desktop game using Java Swing",
            "Collaborated with a two-person team using Git and Github",
        ]
    }
]