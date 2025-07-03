"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHoverSmall,
} from "@/utils/animations";
const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  Frontend: [
    "React",
    "Next.js",
    "Redux",
    "Bootstrap",
    "MUI",
    "Tailwind CSS",
    "Ant Design",
  ],
  Backend: ["Node.js", "Express.js", "NestJS", "Sequelize", "Prisma", "API"],
  ToolsDevOps: [
    "Git",
    "GitHub",
    "GitLab",
    "Figma",
    "VS Code",
    "Postman",
    "Docker",
    "GitHub Actions",
  ],
};
export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a Fullstack Developer with 1+ year of experience in building
          responsive, high-performance web applications using modern
          technologies. Proficient in JavaScript, TypeScript, React, Next.js,
          and styling with HTML/CSS, Tailwind CSS, and Ant Design. Experienced
          in developing scalable and secure backend systems with Node.js,
          Express.js, NestJS, and working with both SQL (Sequelize) and NoSQL
          (Prisma, MongoDB) databases. Adept at integrating RESTful APIs,
          implementing authentication, and optimizing code for performance and
          maintainability. Familiar with Docker, GitHub Actions, and CI/CD
          workflows. Committed to writing clean, efficient code and
          collaborating with cross-functional teams to deliver impactful
          solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Tech Stack
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          animate="animate"
        >
          {Object.entries(skills).map(([category, techs]) => (
            <motion.div
              key={category}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 dark:bg-dark rounded px-3 py-1 text-sm font-medium shadow text-gray-700 dark:text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Fresher Frontend Developer
            </h3>
            <p className="text-primary mb-2">
              Innorix Corporation • Feb, 2024 - Sep, 2024
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Designed and developed responsive web applications using modern
                JavaScript frameworks.
              </li>
              <li>
                ICollaborated with UI/UX designers to enhance user experience
                and interface functionality.
              </li>
              <li>
                Implemented dynamic user interface capabilities utilizing EJS
                contemplating language.
              </li>
              <li>
                Conducted code reviews to ensure high quality and
                maintainability of code base.
              </li>
              <li>
                Optimized front-end performance to improve load times and user
                engagement.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Freelance Fullstack Developer
            </h3>
            <p className="text-primary mb-2">Freelance • Aug, 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Collaborated with international and local clients to develop and
                optimize front-end solutions.
              </li>
              <li>
                Delivered responsive, user-friendly interfaces utilizing
                Next.js, Ant Design, and Tailwind CSS.
              </li>
              <li>
                Implemented performance optimizations to enhance user experience
                and application speed.
              </li>
              <li>
                Managed project deployments and ensured adherence to best coding
                practices.
              </li>
              <li>
                Participated in client meetings to gather requirements and
                refine project scopes.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Remote Fresher Frontend Developer
            </h3>
            <p className="text-primary mb-2">
              Wisdom Robotics • May, 2025 - Present
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Designed and developed responsive web applications using modern
                Nextjs framework with typescript
              </li>
              <li>Used Figma to design layout for application.</li>
              <li>Used git, gitlab for code management.</li>
              <li>
                Learning some new technologies like : AWS, NestJS,
                Microservices, redis, webhook,…
              </li>
              <li>
                Participated in client meetings to gather requirements and
                refine project scopes.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Information Technology
            </h3>
            <p className="text-primary mb-2">
              Information Of Technology College • 2023 - 2025
            </p>
            <p className="text-secondary">
              Graduated with GPA: 8.6/10. Focused on software engineering and
              web development.
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-4"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of FullStack Developer
            </h3>
            <p className="text-primary mb-2">CyberSoft • 2022 - 2023</p>
            <p className="text-secondary">
              Graduated Front-end with GPA: 8.7/10.
              <br /> Graduated Back-end with GPA: 9.1/10.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
