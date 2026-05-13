import AboutContent from "../components/about/AboutContent"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        relative
        py-32
        bg-gradient-to-b
        from-[#050816]
        to-[#0f172a]
        overflow-hidden
      "
    >

      <AboutContent />

    </section>
  )
}

export default AboutSection