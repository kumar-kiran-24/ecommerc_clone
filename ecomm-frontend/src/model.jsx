import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/scene.glb')
  return <primitive object={scene} scale={50}/>
}

export default function ModelViewer() {
  return (
    <section className="model-section">
      <Canvas camera={{ position: [5, 0, 12] }}>
        <ambientLight intensity={100} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </section>
  )
}