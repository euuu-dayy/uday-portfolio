import { motion } from "framer-motion"

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        p-8
        hover:border-primary/40
        transition-all
        duration-500
        group
      "
    >

      {/* Glow Effect */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-primary/10
          to-secondary/10
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />

      <div className="relative z-10">

        <h3 className="text-2xl font-bold mb-8 text-primary">
          {title}
        </h3>

        <div className="flex flex-wrap gap-4">

          {
            skills.map((skill, index) => (
              <div
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-black/30
                  border
                  border-white/10
                  text-gray-300
                  hover:border-primary
                  hover:text-primary
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {skill}
              </div>
            ))
          }

        </div>

      </div>

    </motion.div>
  )
}

export default SkillCard