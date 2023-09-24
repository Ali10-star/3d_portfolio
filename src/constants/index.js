import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  csharp,
  dotnet,
  git,
  figma,
  docker,
  mysql,
  a_star,
  reactiveplayer,
  carcat,
  gaming,
  sumz,
  django,
  postgres,
  sass,
  python,
  nextjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://www.linkedin.com/in/ali-arous/",
    title: "LinkedIn",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Django Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
];

const experiences = [
  {
    title: ".NET Core Developer",
    company_name: "Nimas Technology, Lebanon (Remotely)",
    icon: "",
    iconBg: "#383E56",
    date: "June 2022 - May 2023",
    points: [
      "Planned, developed, tested, deployed, and maintained web applications.",
      "Analyzed current and past company projects and improved an older project with modern features of .NET Core",
      "Reduced the read times of queries from 0.35 seconds down to 0.3 seconds using query optimization techniques.",
      "Worked on a microservices project. And applied coding best-practices and design patterns for improving the design of an older project.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Freelance",
    icon: "",
    iconBg: "#383E56",
    date: "June 2023 - ",
    points: [
      "Currently working on personal projects and gaining valuable knowledge.",
      "Primary tech used: React, Next.js, Django",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Catalogue",
    description:
      "Web-based platform that allows users to search for different car models, with filtering capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carcat,
    source_code_link: "https://github.com/Ali10-star/car-showcase-catalogue",
    deploy_link: "https://car-showcase-catalogue.vercel.app",
  },
  {
    name: "Reactive Music Player",
    description:
      "Web-based music player app with a clean and minimal design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: reactiveplayer,
    source_code_link: "https://github.com/Ali10-star/reactive-player",
    deploy_link: "https://reactive-player.web.app/",
  },
  {
    name: "Ignite Gaming Catalogue",
    description:
      "Webapp for finding information about video games on different platforms with a modern design and searching functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: gaming,
    source_code_link: "https://github.com/Ali10-star/ignite-game-catalogue",
    deploy_link: "https://ignite-game-catalogue.web.app/",
  },
  {
    name: "Sumz AI Article Summarizer",
    description:
      "A simple frontend for an AI article summarizing tool, using ChatGPT-4 to give concise summaries of articles or webpages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "openai-api",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/Ali10-star/AI-Article-Summarizer",
    deploy_link: "https://ai-article-summarizer.web.app/",
  },
  {
    name: "CPManager",
    description:
      "API for college graduation year project, built with .NET Core, for managing the process of creating teams, participating in the ICPC programming contests within the university.",
    tags: [
      {
        name: ".NET-core",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: "https://placehold.co/600x400?text=CPManager",
    source_code_link: "https://github.com/omar944/cpmanager",
    deploy_link: "",
  },
  {
    name: "Help Me Study",
    description:
      "API for college project, built with Django & the Django Rest Framework, for finding courses and tutors in many different topics, with a very simple recommendation system.",
    tags: [
      {
        name: "api",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "django-rest-framework",
        color: "pink-text-gradient",
      },
    ],
    image: "https://placehold.co/600x400?text=Help%20Me\nStudy",
    source_code_link: "https://github.com/omar944/api-project",
    deploy_link: "",
  },
  {
    name: "A-Star Photo Editor",
    description:
      "Simple photo editing app for quick editing, mainly for applying filters. Includes functionality to extract a color palette from an image, display image tag data, and export in JPG or PNG format.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "cross-platform",
        color: "pink-text-gradient",
      },
    ],
    image: a_star,
    source_code_link: "https://github.com/Ali10-star/A-Star-Photo-Editor",
    deploy_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };