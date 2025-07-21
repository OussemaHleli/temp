import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Text, Float } from '@react-three/drei'
import * as THREE from 'three'

// Animated Globe Component
const AnimatedGlobe = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe={true}
          transparent={true}
          opacity={0.6}
        />
      </Sphere>
      <Sphere args={[1.3, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#22c55e"
          transparent={true}
          opacity={0.3}
        />
      </Sphere>
    </Float>
  )
}

// Floating Documents
const FloatingDocument = ({ position, rotation, color }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
      meshRef.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Box ref={meshRef} args={[0.8, 1, 0.05]} position={position} rotation={rotation}>
      <meshStandardMaterial color={color} />
    </Box>
  )
}

// Hand Animation Component
const AnimatedHand = ({ position }) => {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.2
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Palm */}
      <Box args={[0.3, 0.5, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
      {/* Fingers */}
      <Box args={[0.05, 0.3, 0.08]} position={[-0.1, 0.3, 0]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
      <Box args={[0.05, 0.35, 0.08]} position={[-0.03, 0.35, 0]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
      <Box args={[0.05, 0.33, 0.08]} position={[0.04, 0.33, 0]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
      <Box args={[0.05, 0.28, 0.08]} position={[0.11, 0.28, 0]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
      {/* Thumb */}
      <Box args={[0.05, 0.2, 0.08]} position={[0.15, 0.05, 0]} rotation={[0, 0, 0.5]}>
        <meshStandardMaterial color="#fbbf24" />
      </Box>
    </group>
  )
}

// Main 3D Scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
      
      {/* Main Globe */}
      <AnimatedGlobe />
      
      {/* Floating Documents */}
      <FloatingDocument 
        position={[-3, 1, -2]} 
        rotation={[0.2, 0.3, 0.1]} 
        color="#ef4444" 
      />
      <FloatingDocument 
        position={[3, -1, -1]} 
        rotation={[-0.1, -0.2, -0.1]} 
        color="#8b5cf6" 
      />
      <FloatingDocument 
        position={[2, 2, 1]} 
        rotation={[0.3, -0.1, 0.2]} 
        color="#06b6d4" 
      />
      
      {/* Animated Hands */}
      <AnimatedHand position={[-2.5, -1.5, 1]} />
      <AnimatedHand position={[2.5, -1.5, 1]} />
      
      {/* 3D Text */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text
          position={[0, -3, 0]}
          fontSize={0.5}
          color="#1f2937"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Poppins-Bold.woff"
        >
          LangViz
        </Text>
      </Float>
    </>
  )
}

const HeroScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default HeroScene
