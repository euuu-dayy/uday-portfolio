import { useState } from "react"

import axios from "axios"

import API_BASE_URL from "../../services/api"

const ResumeModal = ({ closeModal }) => {

  const [password, setPassword] =
    useState("")

  const [resumeLink, setResumeLink] =
    useState("")

  const [message, setMessage] =
    useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(
        `${API_BASE_URL}/api/resume/update`,
        {
          password,
          resumeLink,
        }
      )

      setMessage(response.data.message)

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Something went wrong"
      )
    }
  }

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/70
        flex
        items-center
        justify-center
        z-[100]
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-[#0f172a]
          border
          border-white/10
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-3xl font-bold mb-8">
          Update Resume
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              px-5
              py-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              outline-none
              focus:border-primary
            "
          />

          <input
            type="text"
            placeholder="Google Drive Resume Link"
            value={resumeLink}
            onChange={(e) =>
              setResumeLink(e.target.value)
            }
            className="
              w-full
              px-5
              py-4
              rounded-xl
              bg-black/20
              border
              border-white/10
              outline-none
              focus:border-primary
            "
          />

          <button
            className="
              w-full
              bg-primary
              text-black
              py-4
              rounded-xl
              font-semibold
            "
          >
            Update Resume
          </button>

        </form>

        {
          message && (
            <p className="mt-6 text-primary">
              {message}
            </p>
          )
        }

        <button
          onClick={closeModal}
          className="
            mt-6
            text-gray-400
            hover:text-white
          "
        >
          Close
        </button>

      </div>

    </div>
  )
}

export default ResumeModal