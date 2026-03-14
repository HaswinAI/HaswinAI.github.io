/* eslint-disable no-unused-vars */
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, Suspense } from 'react';

const generateSpherePoints = (count, radius) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

const ParticleSystem = () => {
  const [points] = useState(() => generateSpherePoints(300, 1.5));

  // No animation for better performance, just static particles
  return (
    <Points positions={points} stride={3} frustumCulled={true}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.001} // Even smaller particles for better performance
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15} // Reduce opacity for better performance
      />
    </Points>
  );
};

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 2.5], fov: 75 }}
          dpr={[1, 1.5]}
          gl={{
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
            antialias: false,
            alpha: true
          }}
          performance={{ min: 0.5 }}
          frameloop="demand"
          eventPrefix="client"
        >
          <ParticleSystem />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ParticlesBackground;