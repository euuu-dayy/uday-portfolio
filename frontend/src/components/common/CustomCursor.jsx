import { useEffect, useState } from "react"

const CustomCursor = () => {

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener(
      "mousemove",
      moveCursor
    )

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      )
    }

  }, [])

  return (
    <div
      className="
        hidden
        md:block
        fixed
        w-6
        h-6
        rounded-full
        border
        border-primary
        pointer-events-none
        z-[9999]
        mix-blend-difference
        transition-transform
        duration-75
      "
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    />
  )
}

export default CustomCursor