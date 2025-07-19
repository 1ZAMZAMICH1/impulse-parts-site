import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

function RotatingGlobe() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <meshStandardMaterial color="#ff9900" wireframe emissive="#ff9900" emissiveIntensity={0.2} />
    </Sphere>
  );
}

export default function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <RotatingGlobe />
    </Canvas>
  );
}