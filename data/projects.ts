import { Project } from "./resume";

export const projects: Project[] = [
    {
        name: "CustomMade Games",
        type: "Personal",
        group_size: 1,
        startDate: new Date("1-1-2026"),
        accomplishments: [
            "Published a working website on a custom domain",
            "Utilized CI/CD to automatically update the live site with new builds",
            "Refactored code to improve lighthouse performance metrics",
            "Integrated Google Analytics to gather user interaction data"
        ]
    },
    {
        name: "GarageHub",
        type: "Academic",
        group_size: 4,
        startDate: new Date("9-1-2025"),
        endDate: new Date("5-1-2026"),
        accomplishments: [
            "Designed and developed a custom application for a non-profit organization",
            "Integrated slack for application authorization",
            "Created a mobile app, desktop admin portal, and backend API",
            "Managed a linuz VM running the backend API"
        ]
    },
    {
        name: "Where is My Movie?",
        type: "Academic",
        group_size: 2,
        startDate: new Date(),
        endDate: new Date(),
        accomplishments: [
            "Created a working android app using jetpack compose",
            "Integrated data from multiple API sources for movie info and streaming availability",
            "Leveraged local caching to reduce API usage",
            "Managed a local database to store user data",
            "Processed user data to recommend streaming services"
        ]
    },
    {
        name: "Portfolio Website",
        type: "Personal",
        group_size: 1,
        startDate: new Date("1-1-2024"),
        accomplishments: [
            "Learned Next.js frontend development",
            "Used github actions CI/CD to automatically publish new builds",
        ]
    },
    {
        name: "Student Scheduler",
        type: "Academic",
        group_size: 4,
        startDate: new Date("1-1-2025"),
        endDate: new Date("5-1-2025"),
        accomplishments: [
            "Submitted team assignments on time",
            "Created a github repository and configured branch rules",
            "Used github for version control and collaboration",
            "Created a responsive web app using react and typescript",
            "Built a backend api using java and spring boot"
        ]
    },
    {
        name: "OurGCC",
        type: "Academic",
        group_size: 2,
        startDate: new Date("10-1-2024"),
        endDate: new Date("12-1-2024"),
        accomplishments: [
            "Created a working native iOS App using Swift and SwiftUI",
            "Stored app data in a remote database",
            "Created a custom API to interface with the app",
        ]
    },
    {
        name: "Boxed Up Games",
        type: "Personal",
        group_size: 1,
        startDate: new Date("8-1-2024"),
        endDate: new Date("12-1-2025"),
        accomplishments: [
            "Taught myself Electron to create a cross-platform desktop app",
            "Created a locally-hosted live multiplayer game with SocketIO and Express",
            "Published game to gamejolt.com"
        ]
    },
    {
        name: "Space Miner",
        type: "Academic",
        group_size: 2,
        startDate: new Date("3-1-2022"),
        endDate: new Date("5-1-2022"),
        accomplishments: [
            "Learned git/github for collaboration",
            "Learned how to use Java Swing libraries to create a simple game",
        ]
    }
]