import React from "react";
import { FaReact,FaVuejs, FaLaravel } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";


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
        title: "Account Manager, Renewal By Andersen Long Island",
        location: "Farmingdale, NY",
        description: "Starting from entry level, I worked my way up to Account Manager, where I was functioning as the last point of contact between our in home customers and our sales representatives who went out for consultations.  I frequently received awards for leading the office in various performance metrics.",
        icon: React.createElement(BsPersonWorkspace),
        date:"2016-2018"
    },
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
    },

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
    },{
        title:"Threads Clone",
        description:"A pared down version of the new hit social media site.",
        tags:["React","Next.js","Tailwind","TypeScript","Shadcn-UI","Clerk JS","Mongo DB"],
        imageUrl: '/threadsclone.png',
        siteURL: "https://threadz-eosin.vercel.app/",
        githubURL:"https://github.com/agordon123/threadz"
    },
    {
        title:"Learning Management System",
        description:"NextJS 13 project, creating a Udemy like page for learning and creating courses ",
        tags:["Next.JS","Prisma","PlanetScale","Tailwind","App Router","TypeScript","Server Actions","Zod Resolver","shadcn-ui"],
        imageUrl:"/LearningManagementSystem.png",
        siteUrl:"https://lms-smokey-project.vercel.app",
        githubUrl:"https://github.com/agordon123/lms-project.git"
    }

] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Prisma",
    "Redux",
    "shacn-ui",
    "AI development tools",
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

export const SecondarySkillsData = [] as const;