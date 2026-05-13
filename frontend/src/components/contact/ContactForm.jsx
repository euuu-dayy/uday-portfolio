import { useState } from "react"

import axios from "axios"

import API_BASE_URL from "../../services/api"

const ContactForm = () => {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      company: "",
      message: "",
    })

  const [loading, setLoading] =
    useState(false)

  const [success, setSuccess] =
    useState("")

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response =
        await axios.post(
          `${API_BASE_URL}/api/contact`,
          formData
        )

      setSuccess(
        response.data.message
      )

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })

    } catch (error) {

      setSuccess(
        "Failed to send message."
      )

    } finally {

      setLoading(false)
    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-4xl
        mx-auto
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-5
        sm:p-8
        overflow-hidden
      "
    >

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        "
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="
            w-full
            bg-black/20
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            focus:border-primary
            text-white
            placeholder:text-gray-400
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
            w-full
            bg-black/20
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            focus:border-primary
            text-white
            placeholder:text-gray-400
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
          mt-5
          bg-black/20
          border
          border-white/10
          rounded-2xl
          px-5
          py-4
          outline-none
          focus:border-primary
          text-white
          placeholder:text-gray-400
        "
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="
          w-full
          mt-5
          bg-black/20
          border
          border-white/10
          rounded-2xl
          px-5
          py-4
          outline-none
          focus:border-primary
          resize-none
          text-white
          placeholder:text-gray-400
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          mt-6
          w-full
          sm:w-auto
          min-w-[180px]
          h-[56px]
          bg-primary
          text-black
          rounded-2xl
          font-semibold
          transition-all
          duration-300
          hover:scale-[1.02]
          active:scale-95
          disabled:opacity-50
          flex
          items-center
          justify-center
          px-8
          text-sm
          sm:text-base
        "
      >

        {
          loading
            ? "Sending..."
            : "Send Message"
        }

      </button>

      {
        success && (

          <p
            className="
              mt-5
              text-primary
              text-sm
              sm:text-base
            "
          >
            {success}
          </p>
        )
      }

    </form>
  )
}

export default ContactForm