import { motion } from "framer-motion"

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        bg-[#050816]
        flex
        items-center
        justify-center
        z-[99999]
      "
    >

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1,
        }}

        className="
          text-5xl
          font-extrabold
          text-primary
        "
      >
        DEV.UDAY KAPLE
      </motion.h1>

    </motion.div>
  )
}

export default Loader