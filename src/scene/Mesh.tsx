import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

const Mesh: React.FC = () => {
    const meshRef = useRef<HTMLInputElement>(null);
    useFrame((_, delta) => {
        meshRef.current.rotation.y += 1 * delta;
    });
    return (
        <mesh ref={meshRef} rotation={[0.2, 0, 0]}>
            <octahedronGeometry args={[2, 0]} />
            <MeshTransmissionMaterial
                backside
                backsideThickness={1}
                samples={16}
                thickness={0.2}
                anisotropicBlur={0.1}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                clearcoat={1}
                envMapIntensity={0.5}
            />
        </mesh>
    );
};

export default Mesh;
