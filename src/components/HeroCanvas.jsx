import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function MorphingSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    const scale = 1.5 + Math.sin(time * 1.5) * 0.3;
    meshRef.current.scale.set(scale, scale, scale);
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        color="#5484ff" 
        wireframe={true} 
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div style={{ width: '100%', height: '450px' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <MorphingSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}