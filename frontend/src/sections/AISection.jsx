import AIContent from "../components/chatbot/AIContent"

const AISection = () => {

  return (
    <section
      id="ai"
      className="
        relative
        py-20
        px-4
        sm:px-6
        bg-gradient-to-b
        from-[#0f172a]
        to-[#050816]
        overflow-hidden
      "
    >

      <div className="max-w-5xl mx-auto">
        <AIContent />
      </div>

    </section>
  )
}

export default AISection