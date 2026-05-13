import {
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi"

const ContactInfo = () => {
  return (
    <div>

      <p className="text-primary tracking-widest mb-4">
        CONTACT
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Let's build something amazing together.
      </h2>

      <p className="text-gray-400 mt-8 leading-relaxed">
        Open to full stack development opportunities,
        AI-focused projects, and modern web application development.
      </p>

      {/* Contact Cards */}

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">
          <FiMail className="text-primary text-2xl" />

          <span className="text-gray-300">
            udaykaple5@gmail.com
          </span>
        </div>

        <a
          href="https://www.linkedin.com/in/udaykaple22/"
          target="_blank"
          className="flex items-center gap-4 hover:text-primary transition"
        >
          <FiLinkedin className="text-2xl" />

          <span>
            LinkedIn
          </span>
        </a>

        <a
          href="https://github.com/euuu-dayy/"
          target="_blank"
          className="flex items-center gap-4 hover:text-primary transition"
        >
          <FiGithub className="text-2xl" />

          <span>
            GitHub
          </span>
        </a>

      </div>

    </div>
  )
}

export default ContactInfo