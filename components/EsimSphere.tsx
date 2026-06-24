'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

function mulberry32(seed: number) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.05;
    }
  });

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#d4b0ff'),
        metalness: 0.0,
        roughness: 0.05,
        clearcoat: 1,
        clearcoatRoughness: 0.2,
        transparent: true,
        opacity: 0.18,
        side: THREE.FrontSide,
        depthWrite: false,
        envMapIntensity: 2,
      }),
    [],
  );

  const innerGlowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#a855f7'),
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide,
      }),
    [],
  );

  const { positions, colors } = useMemo(() => {
    const rng = mulberry32(42);
    const pos: number[] = [];
    const col: number[] = [];
    const numFilaments = 3000;

    for (let i = 0; i < numFilaments; i++) {
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);

      const segments = 4 + Math.floor(rng() * 8);
      const endRadius = 1.3 + rng() * 0.5;
      const startRadius = 0.1 + rng() * 0.15;

      const twist = (rng() - 0.5) * 2;
      const wobble = 0.15 + rng() * 0.3;

      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const r = startRadius + (endRadius - startRadius) * t;

        const curve = Math.sin(t * Math.PI) * wobble;
        const tOffset = theta + twist * t * Math.PI;
        const pOffset = phi + twist * t * 0.5;

        const cx = curve * Math.sin(pOffset) * Math.cos(tOffset + 0.5);
        const cy = curve * Math.cos(pOffset) + 0.1;
        const cz = curve * Math.sin(pOffset) * Math.sin(tOffset + 0.5);

        const x = r * Math.sin(phi) * Math.cos(theta) + cx;
        const y = r * Math.cos(phi) + cy + 0.2;
        const z = r * Math.sin(phi) * Math.sin(theta) + cz;

        pos.push(x, y, z);

        const dist = Math.sqrt(x * x + y * y + z * z) / 2;
        const rCol = 0.6 + dist * 0.4;
        const gCol = 0.15 + dist * 0.15;
        const bCol = 0.5 + dist * 0.5;
        col.push(rCol, gCol, bCol);
      }
    }

    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(col),
    };
  }, []);

  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  const pointsMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.035,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    [],
  );

  const coreMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#ffffff'),
      }),
    [],
  );

  const baseMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0a0a0a'),
        metalness: 0.9,
        roughness: 0.25,
        envMapIntensity: 1,
      }),
    [],
  );

  const baseRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1a1a1a'),
        metalness: 0.7,
        roughness: 0.5,
      }),
    [],
  );

  return (
    <group ref={groupRef}>
      <mesh material={glassMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      <mesh material={innerGlowMaterial}>
        <sphereGeometry args={[1.95, 32, 32]} />
      </mesh>

      <points geometry={pointsGeometry} material={pointsMaterial} />

      <mesh position={[0, -1.85, 0]} material={coreMaterial}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>

      <mesh position={[0, -1.95, 0]} material={baseMaterial}>
        <cylinderGeometry args={[0.5, 0.7, 0.12, 32]} />
      </mesh>

      <mesh position={[0, -1.98, 0]} material={baseRingMaterial}>
        <torusGeometry args={[0.6, 0.04, 16, 32]} />
      </mesh>

      <pointLight position={[0, -1.6, 0]} color="#c084fc" intensity={4} distance={5} decay={2} />
      <pointLight position={[0, 0, 2.5]} color="#7c3aed" intensity={0.6} distance={6} decay={2} />
      <ambientLight intensity={0.3} />
    </group>
  );
}

export function EsimSphere() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 38, near: 0.1, far: 10 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
