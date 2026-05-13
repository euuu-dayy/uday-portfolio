const ChatMessage = ({ message, sender }) => {
  return (
    <div
      className={`
        flex
        ${sender === "user" ? "justify-end" : "justify-start"}
      `}
    >

      <div
        className={`
          max-w-[80%]
          px-5
          py-4
          rounded-2xl
          text-sm
          leading-relaxed
          backdrop-blur-lg
          border
          ${sender === "user"
            ? "bg-primary text-black border-primary"
            : "bg-white/5 border-white/10 text-gray-200"
          }
        `}
      >
        {message}
      </div>

    </div>
  )
}

export default ChatMessage