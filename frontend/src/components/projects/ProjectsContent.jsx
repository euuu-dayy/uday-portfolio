import { motion } from "framer-motion"

import ProjectCard from "./ProjectCard"

import pdfchat from "../../assets/projects/pdfchat.png"
import aidb from "../../assets/projects/aidb.png"
import farmfleet from "../../assets/projects/farmfleet.png"
import notavailable from "../../assets/projects/notavailable.png"

const projects = [
  

  {
  title: "AI DB Assistant",

  description:
    "AI-powered natural language to SQL platform that generates and executes intelligent SQL queries using Groq LLaMA 3.3 with real-time result visualization.",

  image: aidb,

  tech: [
    "React",
    "Tailwind",
    "Spring Boot",
    "Groq AI",
    "MySQL",
    "Docker",
    "Rest API" //Java, Spring Boot, React.js, Groq AI (LLaMA 3.3), MySQL, REST API
  ],

  live: "https://ai-db-assistant-frontend.vercel.app/",

  github: "https://github.com/euuu-dayy/ai-db-assistant-frontend",
},

{
  title: "FarmFleet",

  description:
    "Role-based farm equipment rental management system with JWT authentication, booking lifecycle management, revenue tracking, and real-time dashboards.",

  image: farmfleet,

  tech: [
    "React",
    "Spring Boot",
    "MySQL",
    "JWT",
    "Tailwind",
  ],

  live: "https://farmfleet-equipment-rental.netlify.app/",

  github: "#",
},

{
  title: "PDFChat AI",

  description:
    "AI-powered PDF document chat system enabling intelligent question-answering over uploaded PDFs using Groq LLaMA 3.3 integration.",

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
  title: "OTP Notification System",

  description:
    "Microservices-based OTP notification platform using Apache Kafka and Redis for asynchronous real-time OTP delivery and scalable event-driven communication.",

  image: notavailable,

  tech: [
    "Spring Boot",
    "Kafka",
    "Redis",
    "MySQL",
    "Docker",
    "GitHub Actions",
  ],

  live: "#",

  github: "https://github.com/euuu-dayy/Microservices_Project",
}
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