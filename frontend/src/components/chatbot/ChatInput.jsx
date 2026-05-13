import { useState } from "react"

const ChatInput = ({
  onSend,
  loading,
}) => {

  const [input, setInput] =
    useState("")

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
        flex
        flex-col
        sm:flex-row
        gap-3
        md:gap-4
        pt-4
        border-t
        border-white/10
      "
    >

      <input
        type="text"
        placeholder="
          Ask something about Uday...
        "
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        className="
          flex-1
          w-full
          bg-white/5
          border
          border-white/10
          rounded-2xl
          px-5
          py-4
          outline-none
          focus:border-primary
          text-white
          text-sm
          md:text-base
          placeholder:text-gray-400
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          sm:w-auto
          min-w-[120px]
          bg-primary
          text-black
          px-6
          py-4
          rounded-2xl
          font-semibold
          transition-all
          duration-300
          hover:scale-[1.03]
          active:scale-95
          disabled:opacity-50
          flex
          items-center
          justify-center
        "
      >

        {
          loading
            ? "Thinking..."
            : "Send"
        }

      </button>

    </form>
  )
}

export default ChatInput