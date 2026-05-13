import { motion } from "framer-motion"

const StatsCard = ({ number, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        bg-white/5
        border border-white/10
        backdrop-blur-lg
        rounded-2xl
        p-6
        hover:border-primary
        transition
        duration-300
      "
    >

      <h2 className="text-4xl font-bold text-primary">
        {number}
      </h2>

      <p className="text-gray-300 mt-2">
        {title}
      </p>

    </motion.div>
  )
}

export default StatsCard