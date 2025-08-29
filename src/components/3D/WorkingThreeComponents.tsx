import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const AnimatedSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#60a5fa"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
};

export const FloatingParticles = ({ count = 500 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

export const AnimatedTorus = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
};

export const WaveGeometry = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current && ref.current.geometry.attributes.position) {
      const positions = ref.current.geometry.attributes.position;
      const array = positions.array as Float32Array;
      
      for (let i = 0; i < array.length; i += 3) {
        const x = array[i];
        const z = array[i + 2];
        array[i + 1] = Math.sin(x * 2 + state.clock.elapsedTime * 2) * 
                       Math.cos(z * 2 + state.clock.elapsedTime * 2) * 0.3;
      }
      
      positions.needsUpdate = true;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <planeGeometry args={[8, 8, 32, 32]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
};
