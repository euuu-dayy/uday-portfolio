import { motion } from "framer-motion"

import ProjectCard from "./ProjectCard"

import pdfchat from "../../assets/projects/pdfchat.png"
import aidb from "../../assets/projects/aidb.png"
import farmfleet from "../../assets/projects/farmfleet.png"

const projects = [
  {
    title: "PDFChat AI",

    description:
      "AI-powered document chat system that enables intelligent question-answering over uploaded PDF documents using Groq LLaMA 3.3 integration.",

    image: pdfchat,

    tech: [
      "React",
      "Spring Boot",
      "Groq AI",
      "MySQL",
      "PDFBox",
    ],

    live: "#",

    github: "#",
  },

  {
    title: "AI DB Assistant",

    description:
      "Natural language to SQL query platform powered by AI, enabling intelligent enterprise database querying with real-time generated SQL execution.",

    image: aidb,

    tech: [
      "React",
      "Tailwind",
      "Groq AI",
      "Spring Boot",
      "Docker",
    ],

    live: "#",

    github: "#",
  },

  {
    title: "FarmFleet",

    description:
      "Role-based farm equipment rental management system with JWT authentication, booking lifecycle management, and scalable dashboard architecture.",

    image: farmfleet,

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind",
    ],

    live: "#",

    github: "#",
  },
]

const ProjectsContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <p className="text-primary tracking-widest mb-4">
          FEATURED PROJECTS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Some Things I’ve Built
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          A collection of modern full stack and AI-powered
          applications focused on scalability, performance,
          and user experience.
        </p>

      </motion.div>

      {/* Projects */}

      <div className="grid lg:grid-cols-2 gap-10">

        {
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))
        }

      </div>

    </div>
  )
}

export default ProjectsContent