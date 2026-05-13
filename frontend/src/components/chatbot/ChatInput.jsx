import { useState } from "react"

const ChatInput = ({ onSend, loading }) => {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.trim()) return

    onSend(input)

    setInput("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col sm:flex-row
        gap-3
        md:gap-4
        pt-4
        border-t
        border-white/10
        "
    >

      <input
        type="text"
        placeholder="Ask something about Uday..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="
          flex-1
          bg-white/5
          border
          border-white/10
          rounded-full
          px-6
          py-4
          outline-none
          focus:border-primary
          text-white
          text-sm md:text-base
        "
      />

      <button
        disabled={loading}
        className="
          bg-primary
          text-black
          px-5 md:px-8
          rounded-full
          font-semibold
          hover:scale-105
          transition
          disabled:opacity-50
        "
      >
        {
          loading ? "..." : "Send"
        }
      </button>

    </form>
  )
}

export default ChatInput