import { motion } from "framer-motion"

import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi"

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  live,
  github,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        hover:border-primary/40
        transition-all
        duration-500
      "
    >

      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[250px]
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-6">

          {
            tech.map((item, index) => (
              <span
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-primary/10
                  border
                  border-primary/20
                  text-primary
                  text-sm
                "
              >
                {item}
              </span>
            ))
          }

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={live}
            target="_blank"
            className="
              flex
              items-center
              gap-2
              bg-primary
              text-black
              px-6
              py-3
              rounded-full
              font-semibold
              hover:scale-105
              transition
            "
          >
            <FiExternalLink />

            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            className="
              flex
              items-center
              gap-2
              border
              border-white/20
              px-6
              py-3
              rounded-full
              hover:border-primary
              hover:text-primary
              transition
            "
          >
            <FiGithub />

            GitHub
          </a>

        </div>

      </div>

      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-r
          from-primary/5
          to-secondary/5
          pointer-events-none
        "
      />

    </motion.div>
  )
}

export default ProjectCard