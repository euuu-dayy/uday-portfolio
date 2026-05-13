import { motion } from "framer-motion"

import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

const ContactContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <ContactInfo />

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <ContactForm />

        </motion.div>

      </div>

    </div>
  )
}

export default ContactContent