import { motion } from "framer-motion"

import ContactForm from "./ContactForm"

const ContactContent = () => {

  return (

    <div
      className="
        w-full
        max-w-5xl
        mx-auto
      "
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="
          text-center
          mb-12
        "
      >

        <p
          className="
            text-primary
            tracking-widest
            mb-4
            text-sm
          "
        >
          CONTACT
        </p>

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
          "
        >
          Let's Work Together
        </h2>

        <p
          className="
            mt-6
            text-gray-400
            text-sm
            sm:text-base
            max-w-2xl
            mx-auto
          "
        >
          Interested in working together,
          collaborating on projects,
          or discussing opportunities?
          Feel free to reach out.
        </p>

      </motion.div>

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
          delay: 0.2,
        }}

        viewport={{
          once: true,
        }}
      >

        <ContactForm />

      </motion.div>

    </div>
  )
}

export default ContactContent