"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 140;

function createParticlePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const t = (i + 0.5) / count;
    const hashA = Math.abs(Math.sin((i + 1) * 12.9898) * 43758.5453) % 1;
    const hashB = Math.abs(Math.sin((i + 1) * 78.233) * 24634.6345) % 1;
    const radius = 2.4 + hashA * 4.2;
    const y = (1 - 2 * t) * 3.2 + (hashB - 0.5) * 0.6;
    const radialScale = Math.sqrt(Math.max(0.15, 1 - Math.pow(1 - 2 * t, 2)));
    const theta = goldenAngle * i + hashB * 0.8;

    positions[i * 3] = Math.cos(theta) * radius * radialScale;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(theta) * radius * radialScale - 0.6;
  }

  return positions;
}

function HeroCrystalCluster({
  compact,
  active,
}: {
  compact: boolean;
  active: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringOneRef = useRef<THREE.Mesh>(null);
  const ringTwoRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(
    () => createParticlePositions(compact ? 54 : PARTICLE_COUNT),
    [compact],
  );
  const torusSegments = compact ? 48 : 96;

  useFrame((state, delta) => {
    if (!active) return;
    const dt = Math.min(delta, 0.05);
    const t = state.clock.getElapsedTime();
    const px = compact ? 0 : THREE.MathUtils.clamp(state.pointer.x, -1, 1);
    const py = compact ? 0 : THREE.MathUtils.clamp(state.pointer.y, -1, 1);
    const baseX = state.viewport.width > 8.5 ? 0.95 : 0;

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        baseX + px * 0.35,
        0.06,
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        Math.sin(t * 0.85) * 0.22 + py * 0.2,
        0.06,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        px * 0.55 + Math.sin(t * 0.25) * 0.18,
        0.06,
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -py * 0.38 + Math.cos(t * 0.2) * 0.1,
        0.06,
      );
    }

    if (outerRef.current) {
      outerRef.current.rotation.y += dt * 0.18;
      outerRef.current.rotation.x += dt * 0.08;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= dt * 0.34;
      innerRef.current.rotation.z += dt * 0.22;
    }

    if (ringOneRef.current) {
      ringOneRef.current.rotation.z += dt * 0.3;
      ringOneRef.current.rotation.x += dt * 0.12;
    }

    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.y -= dt * 0.26;
      ringTwoRef.current.rotation.z -= dt * 0.14;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.03 + px * 0.08;
      pointsRef.current.rotation.x = py * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        position={[4, 3, 4]}
        intensity={40}
        distance={20}
        color="#8b5cf6"
      />
      <pointLight
        position={[-4, -2.5, 3]}
        intensity={32}
        distance={20}
        color="#06b6d4"
      />
      <pointLight
        position={[1.5, 4, -2.5]}
        intensity={30}
        distance={20}
        color="#ec4899"
      />

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#c4b5fd"
          size={compact ? 0.055 : 0.045}
          transparent
          opacity={0.72}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <group ref={groupRef}>
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.65, 1]} />
          <meshBasicMaterial
            color="#a78bfa"
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>

        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.92, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.7}
            roughness={0.2}
            emissive="#6d28d9"
            emissiveIntensity={0.45}
            flatShading
          />
        </mesh>

        <mesh ref={ringOneRef} rotation={[Math.PI / 3.2, 0.45, 0]}>
          <torusGeometry args={[2.12, 0.02, 12, torusSegments]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={0.7}
            metalness={0.65}
            roughness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>

        <mesh ref={ringTwoRef} rotation={[-Math.PI / 3.4, -0.5, 0.6]}>
          <torusGeometry args={[2.46, 0.017, 12, torusSegments]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#db2777"
            emissiveIntensity={0.65}
            metalness={0.65}
            roughness={0.2}
            transparent
            opacity={0.78}
          />
        </mesh>
      </group>
    </>
  );
}

export function HeroScene3D({
  compact = false,
  active = true,
}: {
  compact?: boolean;
  active?: boolean;
}) {
  const eventSource =
    !compact && typeof document !== "undefined"
      ? document.documentElement
      : undefined;

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      dpr={compact ? [1, 1.25] : [1, 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{
        antialias: !compact,
        alpha: true,
        powerPreference: compact ? "low-power" : "high-performance",
      }}
      eventSource={eventSource}
      eventPrefix="client"
      style={{ width: "100%", height: "100%" }}
    >
      <HeroCrystalCluster compact={compact} active={active} />
    </Canvas>
  );
}

export default HeroScene3D;
