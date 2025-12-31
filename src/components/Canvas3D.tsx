"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, RoundedBox } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Cubelet({ position, color }: { position: [number, number, number], color: string }) {
    return (
        <RoundedBox args={[0.95, 0.95, 0.95]} radius={0.1} smoothness={4} position={position}>
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
        </RoundedBox>
    );
}

function RubiksCube() {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            const speed = hovered ? 0.8 : 0.4;
            groupRef.current.rotation.y = state.clock.elapsedTime * speed;
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    const cubelets: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                cubelets.push([x, y, z]);
            }
        }
    }

    return (
        <group
            ref={groupRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {cubelets.map((pos, i) => (
                    <Cubelet
                        key={i}
                        position={pos}
                        color={pos[0] === 1 ? "#E86A00" : pos[0] === -1 ? "#C44800" : pos[1] === 1 ? "#FFFEF8" : "#FF8A30"}
                    />
                ))}
            </Float>
        </group>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#E86A00" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C44800" />
            <RubiksCube />
            <Environment preset="studio" />
        </>
    );
}

export default function Canvas3D() {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
