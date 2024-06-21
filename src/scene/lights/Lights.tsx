import React from "react";
import { Environment, Lightformer } from "@react-three/drei";

const Lights: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Environment files="/satara_night_1k.exr" resolution={512}>
                <group rotation={[0, 0, 1]}>
                    <Lightformer
                        form="circle"
                        intensity={10}
                        position={[0, 10, -10]}
                        scale={20}
                        onUpdate={(self) => self.lookAt(0, 0, 0)}
                    />
                    <Lightformer
                        intensity={0.1}
                        onUpdate={(self) => self.lookAt(0, 0, 0)}
                        position={[-5, 1, -1]}
                        rotation-y={Math.PI / 2}
                        scale={[50, 10, 1]}
                    />
                    <Lightformer
                        intensity={0.1}
                        onUpdate={(self) => self.lookAt(0, 0, 0)}
                        position={[10, 1, 0]}
                        rotation-y={-Math.PI / 2}
                        scale={[50, 10, 1]}
                    />
                    <Lightformer
                        color="purple"
                        intensity={0.2}
                        onUpdate={(self) => self.lookAt(0, 0, 0)}
                        position={[0, 1, 0]}
                        scale={[10, 100, 1]}
                    />
                </group>
            </Environment>
        </>
    );
};

export default Lights;
