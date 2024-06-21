import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Lightformer } from "@react-three/drei";
import Mesh from "@/scene/Mesh";
import Lights from "@/scene/lights/Lights";
import { AgXToneMapping } from "three";

const Scene: React.FC = () => {
    return (
        <Canvas
            gl={{ antialias: false }}
            onCreated={(state) => {
                state.gl.toneMapping = AgXToneMapping;
            }}
        >
            <color attach="background" args={["#1C1429"]} />
            <Mesh />
            <Lights />
            <CameraControls />
        </Canvas>
    );
};

export default Scene;
