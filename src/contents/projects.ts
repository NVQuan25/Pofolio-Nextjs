import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Motorbike Service Center",
    description:
      "A web-based platform for motorbike maintenance booking and management with role-based flows for customers, technicians, and admins.",
    technologies: [
      "Next.js 15",
      "React.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    githubLink: "",
    demoLink: "https://motorbike-system.vercel.app/",
    image: "/projects/motorbike-service.png",
  },
  {
    title: "YouTube Clone",
    description:
      "A video-sharing platform replicating YouTube’s core features including video playback, uploads, and interactions.",
    technologies: ["React.js", "Redux", "MUI", "JavaScript"],
    githubLink: "https://github.com/NVQuan25/youtube-clone",
    demoLink: "https://youtube-clone-sigma-sandy.vercel.app",
    image: "/projects/youtube-clone.png",
  },
  {
    title: "E-commerce Platform - COSOVO",
    description:
      "A full-stack e-commerce platform for selling electronics with QR payment integration (Casso).",
    technologies: [
      "React.js",
      "TypeScript",
      "Golang",
      "PostgreSQL",
      "Docker",
      "VietQR",
      "Casso Webhook",
    ],
    githubLink: "",
    demoLink: "https://cosovo.vn",
    image: "/projects/cosovo-ecommerce.png",
  },
  {
    title: "E-commerce Platform - SaigonTech",
    description:
      "Wholesale e-commerce platform for electronics with product management and order placement.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Golang",
      "PostgreSQL",
      "Docker",
      "VPS",
    ],
    githubLink: "",
    demoLink: "https://saigonglobaltech.com",
    image: "/projects/saigontech-ecommerce.png",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills and projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/NVQuan25/Portfolio",
    demoLink: "",
    image: "/projects/portfolio.png",
  },
];
