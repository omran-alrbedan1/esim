'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

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
  metalness?: number;
  roughness?: number;
}

interface StaticParticlesWrapperProps {
  showContent: boolean;
  opacity?: number;
  showDelay?: number;
}

// ============================================
// 3D STATIC PARTICLE COMPONENT مع تحسينات
// ============================================
function StaticParticle({ 
  position, 
  color, 
  scale, 
  distort = 0.2, 
  opacity = 0.7,
  emissiveIntensity = 0.15,
  metalness = 0.7,
  roughness = 0.2
}: StaticParticleProps) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        distort={distort}
        roughness={roughness}
        metalness={metalness}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        transparent
        opacity={opacity}
        toneMapped={true}
      />
    </mesh>
  );
}

// ============================================
// DEFAULT EXPORT
// ============================================
export default function StaticParticlesWrapper({ 
  showContent, 
  opacity = 0.5,
  showDelay = 0 
}: StaticParticlesWrapperProps) {
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    setCanvasReady(true);
  }, []);

  const particles = useMemo(() => [
    // ========== الكرات الصغيرة (7 كرات) مع ألوان متباينة ==========
    { 
      position: [-2.5, 1.5, -3], 
      color: '#8B9467', // لون الزيتوني
      scale: 0.28, 
      distort: 0.18, 
      opacity: 0.8, 
      emissiveIntensity: 0.2,
      metalness: 0.8,
      roughness: 0.15
    },
    { 
      position: [3, -1, -4], 
      color: '#C4A962', // لون ذهبي فاتح
      scale: 0.22, 
      distort: 0.15, 
      opacity: 0.75, 
      emissiveIntensity: 0.18,
      metalness: 0.75,
      roughness: 0.2
    },
    { 
      position: [0, 2.5, -5], 
      color: '#E8E4D9', // لون كريمي
      scale: 0.32, 
      distort: 0.22, 
      opacity: 0.85, 
      emissiveIntensity: 0.22,
      metalness: 0.7,
      roughness: 0.18
    },
    { 
      position: [-1.5, -1.5, -2], 
      color: '#6B7B3E', // لون أخضر زيتوني غامق
      scale: 0.2, 
      distort: 0.12, 
      opacity: 0.7, 
      emissiveIntensity: 0.15,
      metalness: 0.7,
      roughness: 0.25
    },
    { 
      position: [2, 1.2, -3.5], 
      color: '#D4C5A0', // لون بيج
      scale: 0.18, 
      distort: 0.1, 
      opacity: 0.65, 
      emissiveIntensity: 0.12,
      metalness: 0.65,
      roughness: 0.3
    },
    { 
      position: [-0.5, 0.8, -4], 
      color: '#F5F2EA', // لون أبيض دافئ
      scale: 0.3, 
      distort: 0.2, 
      opacity: 0.8, 
      emissiveIntensity: 0.25,
      metalness: 0.85,
      roughness: 0.12
    },
    { 
      position: [1.2, -1.2, -2.5], 
      color: '#8B9467', 
      scale: 0.24, 
      distort: 0.16, 
      opacity: 0.75, 
      emissiveIntensity: 0.18,
      metalness: 0.75,
      roughness: 0.2
    },
    
    // ========== الكرات الكبيرة (3 كرات) مع تباين أقوى ==========
    { 
      position: [-4, -2, -6], 
      color: '#6B7B3E', // أخضر زيتوني غامق
      scale: 0.75, 
      distort: 0.28, 
      opacity: 0.65, 
      emissiveIntensity: 0.28,
      metalness: 0.85,
      roughness: 0.1
    },
    { 
      position: [4.5, 2.5, -7], 
      color: '#C4A962', // ذهبي
      scale: 0.85, 
      distort: 0.32, 
      opacity: 0.6, 
      emissiveIntensity: 0.3,
      metalness: 0.9,
      roughness: 0.08
    },
    { 
      position: [0, -1.5, -8], 
      color: '#E8E4D9', // كريمي
      scale: 0.95, 
      distort: 0.35, 
      opacity: 0.55, 
      emissiveIntensity: 0.35,
      metalness: 0.8,
      roughness: 0.12
    },
  ], []);

  if (!canvasReady || !showContent) return null;

  return (
    <motion.div 
      className="absolute inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity }}
      transition={{ duration: 0.8, delay: showDelay }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          preserveDrawingBuffer: false,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        {/* إضاءة محسنة للتباين */}
        <ambientLight intensity={0.3} />
        
        {/* إضاءة رئيسية من الأمام */}
        <pointLight position={[2, 3, 4]} intensity={1.2} color="#FFFFFF" />
        
        {/* إضاءة ملونة من الخلف للتألق */}
        <pointLight position={[-3, -2, -4]} intensity={0.8} color="#8B9467" />
        <pointLight position={[3, 2, -5]} intensity={0.7} color="#C4A962" />
        
        {/* إضاءة جانبية لإبراز التفاصيل */}
        <pointLight position={[4, 1, 2]} intensity={0.6} color="#E8E4D9" />
        <pointLight position={[-4, 1, 2]} intensity={0.5} color="#6B7B3E" />
        
        {/* إضاءة من الأسفل للتوهج */}
        <pointLight position={[0, -3, 0]} intensity={0.4} color="#F5F2EA" />
        
        {/* إضاءة خلفية قوية للتباين */}
        <pointLight position={[0, 2, -6]} intensity={0.9} color="#FFFFFF" />
        
        {particles.map((p, i) => (
          <StaticParticle 
            key={i} 
            position={p.position}
            color={p.color}
            scale={p.scale}
            distort={p.distort}
            opacity={p.opacity}
            emissiveIntensity={p.emissiveIntensity}
            metalness={p.metalness}
            roughness={p.roughness}
          />
        ))}
        
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.2} 
          scale={12} 
          blur={3} 
          far={5} 
          resolution={1024}
          color="#000000"
        />
      </Canvas>
    </motion.div>
  );
}