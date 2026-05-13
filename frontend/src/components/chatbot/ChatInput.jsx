import { Send } from "lucide-react"

const ChatInput = ({
  input,
  setInput,
  handleSend,
  loading,
}) => {

  return (

    <form
      onSubmit={handleSend}
      className="
        flex
        flex-col
        sm:flex-row
        gap-3
        pt-4
        border-t
        border-white/10
      "
    >

      <input
        type="text"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        placeholder="
          Ask anything about my resume...
        "
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
          rounded-2xl
          px-6
          py-4
          font-semibold
          transition-all
          duration-300
          hover:scale-[1.03]
          active:scale-95
          disabled:opacity-50
          flex
          items-center
          justify-center
          gap-2
        "
      >

        {
          loading
            ? "Thinking..."
            : (
              <>
                <Send size={18} />
                Send
              </>
            )
        }

      </button>

    </form>
  )
}

export default ChatInput