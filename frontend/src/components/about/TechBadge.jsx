const TechBadge = ({ tech }) => {
  return (
    <div
      className="
        px-5
        py-2
        rounded-full
        bg-primary/10
        border border-primary/20
        text-primary
        text-sm
        font-medium
        hover:scale-105
        transition
      "
    >
      {tech}
    </div>
  )
}

export default TechBadge