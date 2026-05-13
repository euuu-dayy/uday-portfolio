import { useState } from "react"

import { motion } from "framer-motion"

import ChatInput from "./ChatInput"
import ChatWindow from "./ChatWindow"

import axios from "axios"

import API_BASE_URL from "../../services/api"

const AIContent = () => {

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        message:
          "Hi, I'm Uday's AI assistant. Ask me anything about his skills, projects, or experience.",
      },
    ])

  const [loading, setLoading] =
    useState(false)

  const handleSend = async (
    question
  ) => {

    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        message: question,
      },
    ]

    setMessages(updatedMessages)

    try {

      setLoading(true)

      const response =
        await axios.post(
          `${API_BASE_URL}/api/ai/chat`,
          {
            question,
          }
        )

      setMessages([
        ...updatedMessages,
        {
          sender: "ai",
          message:
            response.data.reply,
        },
      ])

    } catch (error) {

      setMessages([
        ...updatedMessages,
        {
          sender: "ai",
          message:
            "Something went wrong while connecting to AI service.",
        },
      ])

    } finally {

      setLoading(false)
    }
  }

  return (

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
        w-full
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-4
        sm:p-6
        md:p-8
        h-[620px]
        sm:h-[680px]
        flex
        flex-col
        overflow-hidden
      "
    >

      {/* Heading */}

      <div
        className="
          mb-6
          md:mb-10
          text-center
        "
      >

        <p
          className="
            text-primary
            tracking-widest
            mb-3
            text-sm
          "
        >
          AI RESUME ASSISTANT
        </p>

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
          "
        >
          Ask AI About Me
        </h2>

        <p
          className="
            text-gray-400
            mt-4
            text-sm
            sm:text-base
            max-w-2xl
            mx-auto
          "
        >
          An AI assistant trained
          on my resume and
          projects.
        </p>

      </div>

      {/* CHAT */}

      <ChatWindow
        messages={messages}
      />

      <ChatInput
        onSend={handleSend}
        loading={loading}
      />

    </motion.div>
  )
}

export default AIContent