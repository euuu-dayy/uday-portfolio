import { Points, PointMaterial } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as random from "maath/random/dist/maath-random.esm"

const Particles = () => {

  const ref = useRef()

  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(5000), {
      radius: 1.5,
    })
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#00d9ff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default Particles