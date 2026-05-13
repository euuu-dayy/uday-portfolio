import { motion } from "framer-motion"

import SkillCard from "./SkillCard"

const skillsData = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Redux",
      "Three.js",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "Microservices",
    ],
  },

  {
    title: "Database & DevOps",
    skills: [
      "MongoDB",
      "MySQL",
      "Docker",
      "Git",
      "GitHub",
      "Postman",
    ],
  },

  {
    title: "AI & Tools",
    skills: [
      "Groq AI",
      "LLaMA 3.3",
      "PDF Processing",
      "AI Chat Systems",
      "Prompt Engineering",
      "OpenAI APIs",
    ],
  },
]

const SkillsContent = () => {
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
          TECH STACK
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Technologies I Work With
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          Focused on building scalable full stack applications,
          modern user experiences, and AI-powered systems
          using modern technologies and clean architecture.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="grid lg:grid-cols-2 gap-8">

        {
          skillsData.map((item, index) => (
            <SkillCard
              key={index}
              title={item.title}
              skills={item.skills}
            />
          ))
        }

      </div>

    </div>
  )
}

export default SkillsContent