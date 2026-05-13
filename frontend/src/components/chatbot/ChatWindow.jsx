import {
  useEffect,
  useRef,
} from "react"

import ChatMessage from "./ChatMessage"

const ChatWindow = ({ messages }) => {

  const containerRef = useRef(null)

  /* AUTO SCROLL INSIDE CHATBOX */

  useEffect(() => {

    if (containerRef.current) {

      containerRef.current.scrollTop =
        containerRef.current.scrollHeight
    }

  }, [messages])

  return (
    <div
      ref={containerRef}
      className="
        flex-1
        overflow-y-auto
        space-y-4
        pr-2
        mb-6
      "
    >

      {
        messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            sender={msg.sender}
          />
        ))
      }

    </div>
  )
}

export default ChatWindow