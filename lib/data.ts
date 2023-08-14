import React from "react";
import { FaReact,FaVuejs, FaLaravel } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "B.S. in Computer Proramming and Information Systems",
        location:"SUNY Farmingdale, NY",
        description:
            "Graduated in in 2022 with a 3.31 Cumulative GPA, 3.87 in my major. Returned as an adult student in 2019." ,
        icon: React.createElement(LuGraduationCap),
        date: "2022",
    },
    {
        title: "Lead Front-End Developer, MNC Consulting LLC (Internship)",
        location: "Brooklyn, NY",
        description:
            "Learning React on my own, working with Google Firebase, built a Real Estate website as both the project manager, and trainer of new interns.",
        icon: React.createElement(FaReact),
        date: "2022-2023 (12 months)",
    },
    {
        title: "Full-Stack Developer",
        location: "DIAM International, Melville, NY",
        description:
            "Inherited a Nuxt2 w/ Laravel API and MySQL database, and built on the work of my predecessor, adding new features, and fixing bugs.",
        icon: React.createElement(FaVuejs),
        date: "July 2022-December 2022",
    },
    {
        title: "Freelance Web Developer",
        location: "Long Island, NY",
        description: "Creating Projects both for myself and for clients, using React(with TS), Next.js, Laravel/InertiaJS (using Vue3 as a UI) and Tailwind CSS.",
        icon: React.createElement(FaLaravel),
        date: "December 2022-Present",
    }
] as const;

export const projectsData = [
    {
        title: "Car Showcase",
        description:
            "A Next 13 TypeScript Project, using the Imagin Studio API to display cars, and their details.",
        tags: ["React", "Next.js", "Tailwind", "TypeScript","Imagin Studio API"],
        imageUrl: '/carshowcase.png',
        siteURL: "https://car-showcase-theta-six.vercel.app/",
        githubURL: "https://github.com/agordon123/carshowcase2"
    },

] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "PostgreSQL / MYSQL",
    "MongoDB",
    "Framer Motion",
    "Laravel",
    "Inertia.js",
    "Vue.js",
    "Nuxt.js",
    "PHP",
    "Docker",
    "Google Firebase",
    "Android Development w/ Java",
    "Java 16",
    ".NET Core",
    "C#",
    "Python",
] as const;