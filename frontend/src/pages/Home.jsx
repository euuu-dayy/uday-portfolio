import Navbar from "../components/navbar/Navbar"

import HeroSection from "../sections/HeroSection"
import AboutSection from "../sections/AboutSection"
import SkillsSection from "../sections/SkillsSection"
import ProjectsSection from "../sections/ProjectsSection"
import AISection from "../sections/AISection"
import ContactSection from "../sections/ContactSection"
import ScrollProgress from "../components/common/ScrollProgress"
import CustomCursor from "../components/common/CustomCursor"

const Home = () => {
  return (
    <div className="bg-dark text-white overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AISection />
      <ContactSection />
    </div>
  )
}

export default Home