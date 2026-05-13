import ProjectsContent from "../components/projects/ProjectsContent"

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="
        relative
        py-32
        bg-gradient-to-b
        from-[#050816]
        to-[#0f172a]
        overflow-hidden
      "
    >

      <ProjectsContent />

    </section>
  )
}

export default ProjectsSection