import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function SparkPlug() {
  const meshRef = useRef()
  const { scene } = useGLTF('/spark_plug.glb')

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
  })

  return <primitive ref={meshRef} object={scene} scale={120} position={[-1, 0, 0]} />
}

export default function Model() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#FF6B00" intensity={3} distance={50} />
      <SparkPlug />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}