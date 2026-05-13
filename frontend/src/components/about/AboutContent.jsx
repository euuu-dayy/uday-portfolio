import { motion } from "framer-motion"

import StatsCard from "./StatsCard"
import TechBadge from "./TechBadge"

const techStack = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Spring Boot",
  "Tailwind CSS",
  "Three.js",
  "Groq AI",
]

const AboutContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-primary tracking-widest mb-4">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building modern and scalable applications with clean architecture.
          </h2>

          <p className="text-gray-300 mt-8 leading-relaxed text-lg">

            I'm a Full Stack Developer focused on creating
            scalable backend systems, modern frontend experiences,
            and AI-powered applications.

            I enjoy building performant applications with
            clean UI, smooth animations, and production-grade architecture.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            {
              techStack.map((tech, index) => (
                <TechBadge
                  key={index}
                  tech={tech}
                />
              ))
            }

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          <StatsCard
            number="4+"
            title="Major Projects"
          />

          <StatsCard
            number="AI"
            title="Integrated Applications"
          />

          <StatsCard
            number="Full Stack"
            title="Development Experience"
          />

          <StatsCard
            number="Modern"
            title="UI/UX Focused"
          />

        </motion.div>

      </div>

    </div>
  )
}

export default AboutContent