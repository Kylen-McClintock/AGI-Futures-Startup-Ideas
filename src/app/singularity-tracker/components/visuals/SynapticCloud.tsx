'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Inner log extracted to ensure `useFrame` only runs inside <Canvas> boundaries
function CloudParticles({ particleCount, themeHex }: { particleCount: number, themeHex: string }) {
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const sz = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2; 
      
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.2;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      const z = r * Math.cos(phi) * 1.5;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      sz[i] = Math.random() * 0.05 + 0.01;
    }
    return [pos, sz];
  }, [particleCount]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;

      const material = pointsRef.current.material as THREE.PointsMaterial;
      if (material) {
         material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} sizes={sizes}>
      <PointMaterial
        transparent
        color={themeHex}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}

export function SynapticCloud({ metricValue, themeHex = "#21de9a" }: { metricValue: number | string, themeHex?: string }) {
  const valueRaw = typeof metricValue === 'number' ? metricValue : parseFloat(metricValue as string) || 50;
  
  const particleCount = Math.min(Math.floor(valueRaw * 100), 10000); 

  return (
    <div className="w-full h-full relative cursor-move">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} gl={{ antialias: false, alpha: true }}>
        <ambientLight intensity={0.5} />
        
        <CloudParticles particleCount={particleCount} themeHex={themeHex} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
       <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest pointer-events-none" style={{ color: `${themeHex}80` }}>
         [ Synaptic Volumetric Point Cloud : {particleCount} Rendered Matrices ]
      </div>
    </div>
  );
}
