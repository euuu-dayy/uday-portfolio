import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Particles from "./Particles"

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">

      <Canvas camera={{ position: [0, 0, 1] }}>

        <ambientLight intensity={0.5} />

        <Particles />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />

      </Canvas>

    </div>
  )
}

export default HeroCanvas