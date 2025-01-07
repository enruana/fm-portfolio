import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export function Scene3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ height: '400px' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <mesh
        ref={meshRef}
        rotation={[0, Math.PI / 4, 0]}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
