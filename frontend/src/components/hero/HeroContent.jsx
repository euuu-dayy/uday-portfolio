import { motion } from "framer-motion"
import useResume from "../../hooks/useResume"

const HeroContent = () => {

   const resumeLink = useResume() 

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

      <div className="max-w-3xl">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-primary text-base md:text-lg mb-4 tracking-widest"
        >
          FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-primary">
            Uday Kaple
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Building scalable backend systems,
          immersive frontend experiences,
          and AI-powered applications using modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >

          <a
            href="#projects"
            className="bg-primary text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href={resumeLink}
            target="_blank"
            className="border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-black transition duration-300"
          >
            Resume
          </a>

        </motion.div>

      </div>

    </div>
  )
}

export default HeroContent