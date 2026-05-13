import { useState } from "react";

import { motion } from "framer-motion";

import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

import axios from "axios";
import API_BASE_URL from "../../services/api";

const AIContent = () => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      message:
        "Hi, I'm Uday's AI assistant. Ask me anything about his skills, projects, or experience.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleSend = async (question) => {
    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        message: question,
      },
    ];

    setMessages(updatedMessages);

    try {
      setLoading(true);

      const response = await axios.post(`${API_BASE_URL}/api/ai/chat`, {
        question,
      });

      setMessages([
        ...updatedMessages,
        {
          sender: "ai",
          message: response.data.reply,
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          sender: "ai",
          message: "Something went wrong while connecting to AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-4
        md:p-8
        h-[640px]
        flex
        flex-col
        "
      >
        {/* Heading */}

        <div className="mb-10 text-center">
          <p className="text-primary tracking-widest mb-4">
            AI RESUME ASSISTANT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Ask AI About Me</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            An AI assistant trained on my resume and projects. Ask anything
            related to my experience, technologies, or applications I've built.
          </p>
        </div>

        {/* Chat */}

        <ChatWindow messages={messages} />

        <ChatInput onSend={handleSend} loading={loading} />
      </motion.div>
    </div>
  );
};

export default AIContent;
