import SkillsContent from "../components/skills/SkillsContent"

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="
        relative
        py-32
        bg-gradient-to-b
        from-[#0f172a]
        to-[#050816]
        overflow-hidden
      "
    >

      <SkillsContent />

    </section>
  )
}

export default SkillsSection