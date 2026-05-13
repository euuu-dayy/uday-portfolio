import { useState } from "react"

import axios from "axios"
import API_BASE_URL from "../../services/api"

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response = await axios.post(
        `${API_BASE_URL}/api/contact`,
        formData
      )

      setSuccess(response.data.message)

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })

    } catch (error) {

      setSuccess("Failed to send message.")

    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-8
      "
    >

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="
            bg-black/20
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            outline-none
            focus:border-primary
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="
            bg-black/20
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            outline-none
            focus:border-primary
          "
        />

      </div>

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        className="
          w-full
          mt-6
          bg-black/20
          border
          border-white/10
          rounded-xl
          px-5
          py-4
          outline-none
          focus:border-primary
        "
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="
          w-full
          mt-6
          bg-black/20
          border
          border-white/10
          rounded-xl
          px-5
          py-4
          outline-none
          focus:border-primary
          resize-none
        "
      />

      <button
        disabled={loading}
        className="
          mt-8
          bg-primary
          text-black
          px-8
          py-4
          rounded-full
          font-semibold
          hover:scale-105
          transition
          disabled:opacity-50
        "
      >

        {
          loading ? "Sending..." : "Send Message"
        }

      </button>

      {
        success && (
          <p className="mt-6 text-primary">
            {success}
          </p>
        )
      }

    </form>
  )
}

export default ContactForm