'use client';

import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// TYPES
// ============================================
interface StaticParticleProps {
  position: [number, number, number];
  color: string;
  scale: number;
  distort?: number;
  opacity?: number;
  emissiveIntensity?: number;
}

interface StaticSceneProps {
  className?: string;
  opacity?: number;
  showDelay?: number;
}

// ============================================
// 3D STATIC PARTICLE COMPONENT
// ============================================
function StaticParticle({ 
  position, 
  color, 
  scale, 
  distort = 0.15, 
  opacity = 0.5,
  emissiveIntensity = 0.08 
}: StaticParticleProps) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        distort={distort}
        roughness={0.3}
        metalness={0.6}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

// ============================================
// STATIC SCENE WITH PARTICLES
// ============================================
export function StaticScene({ 
  className = "", 
  opacity = 0.3,
  showDelay = 0 
}: StaticSceneProps) {
  const particles = useMemo(() => [
    // ========== الكرات الصغيرة (7 كرات) ==========
    { position: [-2.5, 1.5, -3], color: '#8B9467', scale: 0.25, distort: 0.15, opacity: 0.5, emissiveIntensity: 0.08 },
    { position: [3, -1, -4], color: '#A09E95', scale: 0.2, distort: 0.12, opacity: 0.45, emissiveIntensity: 0.08 },
    { position: [0, 2.5, -5], color: '#EFEFEA', scale: 0.3, distort: 0.18, opacity: 0.55, emissiveIntensity: 0.08 },
    { position: [-1.5, -1.5, -2], color: '#8B9467', scale: 0.18, distort: 0.1, opacity: 0.4, emissiveIntensity: 0.08 },
    { position: [2, 1.2, -3.5], color: '#605F5A', scale: 0.15, distort: 0.08, opacity: 0.35, emissiveIntensity: 0.08 },
    { position: [-0.5, 0.8, -4], color: '#EFEFEA', scale: 0.28, distort: 0.16, opacity: 0.5, emissiveIntensity: 0.08 },
    { position: [1.2, -1.2, -2.5], color: '#8B9467', scale: 0.22, distort: 0.14, opacity: 0.45, emissiveIntensity: 0.08 },
    
    // ========== الكرات الكبيرة (3 كرات) ==========
    // كرة كبيرة 1 - الجهة اليسرى السفلية
    { 
      position: [-4, -2, -6], 
      color: '#8B9467', 
      scale: 0.7, 
      distort: 0.25, 
      opacity: 0.35,
      emissiveIntensity: 0.12
    },
    // كرة كبيرة 2 - الجهة اليمنى العليا
    { 
      position: [4.5, 2.5, -7], 
      color: '#A09E95', 
      scale: 0.8, 
      distort: 0.28, 
      opacity: 0.3,
      emissiveIntensity: 0.1
    },
    // كرة كبيرة 3 - المنتصف للخلف
    { 
      position: [0, -1.5, -8], 
      color: '#EFEFEA', 
      scale: 0.9, 
      distort: 0.3, 
      opacity: 0.25,
      emissiveIntensity: 0.15
    },
  ], []);

  return (
    <AnimatePresence>
      <motion.div 
        className={`absolute inset-0 z-0 pointer-events-none ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{ duration: 0.8, delay: showDelay }}
      >
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true, preserveDrawingBuffer: false }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#8B9467" />
          <pointLight position={[-5, -3, -2]} intensity={0.5} color="#EFEFEA" />
          <pointLight position={[0, 4, -3]} intensity={0.6} color="#A09E95" />
          <pointLight position={[0, 0, -5]} intensity={0.7} color="#8B9467" />
          <Environment preset="city" background={false} />
          
          {particles.map((p, i) => (
            <StaticParticle 
              key={i} 
              position={p.position}
              color={p.color}
              scale={p.scale}
              distort={p.distort}
              opacity={p.opacity}
              emissiveIntensity={p.emissiveIntensity}
            />
          ))}
          
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.2} 
            scale={10} 
            blur={2.5} 
            far={4} 
            resolution={1024}
          />
        </Canvas>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================
// DEFAULT EXPORT
// ============================================
interface StaticParticlesWrapperProps {
  showContent: boolean;
  opacity?: number;
  showDelay?: number;
}

export default function StaticParticlesWrapper({ 
  showContent, 
  opacity = 0.3,
  showDelay = 0 
}: StaticParticlesWrapperProps) {
  if (!showContent) return null;

  return (
    <StaticScene opacity={opacity} showDelay={showDelay} />
  );
}