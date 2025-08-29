import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingParticlesProps {
  count?: number;
}

export const FloatingParticles = ({ count = 1000 }: FloatingParticlesProps) => {
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
    if (ref.current) {
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
    <mesh ref={ref} position={[0, 0, 0]}>
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
