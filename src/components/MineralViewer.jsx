import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import * as THREE from 'three';
import musemBgImg from '../assets/museumImg1.webp';
import logo from '../assets/logo.svg';
import { useGLTF, useTexture } from "@react-three/drei";

function SpinningGem() {
    const meshRef = useRef();

    useFrame((_, delta) => {
        if (meshRef.current) meshRef.current.rotation.y += delta * 0.6; 
    });

    return (
        <mesh ref={meshRef} castShadow receiveShadow>
            <icosahedronGeometry args={[1, 0]}/>
            <meshStandardMaterial
              color={"#caa6ff"}
              roughness={0.25}
              metalness={0.2}
              envMapIntensity={1.2}
            />
        </mesh>
    );
}

function MuseumBackground() {
  const bg = useTexture(musemBgImg)
  bg.colorSpace = THREE.SRGBColorSpace
  return <primitive attach="background" object={bg} />
}

function FullscreenTint() {
  return (
    <Html fullscreen zIndexRange={[0, 1]} style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,8,21,0.7),rgba(0,8,21,0.45))",
        }}
      />
    </Html>
  )
}


function Rock() {
  const { scene } = useGLTF("/models/Rock2.glb");

  const ref = useRef()

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.4 // speed
    }
  })

  return <primitive ref={ref} object={scene} scale={0.5} style={{  index: 2 }} />;
}

function Loader() {
    return (
        <Html center style={{ color: "white", fontSize: 14 }}>
            Loading 3D...
        </Html>
    )
}

export default function MineralViewer() {
    return (
        <div style={{ margin: '0 auto', height: 520, width: "100%", overflow: "hidden", position: 'relative' }}>
            <img
                src={logo}
                alt="IGN logo"
                style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 90,
                    opacity: 0.9,
                    zIndex: 10,
                    pointerEvents: "none"
                }}
            />
            <Canvas
              shadows
              camera={{ position: [0, 0.8, 3], fov: 50 }}
              gl={{ antialias: true, toneMappingExposure: 0.85, toneMapping: THREE.ACESFilmicToneMapping }}
            >
                {/* <color attach="background" args={["#1b1b1b"]} /> */}

                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[3, 5, 4]}
                  intensity={1.5}
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                />

                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <shadowMaterial opacity={0.25}/>
                </mesh>

                <Suspense fallback={<Loader />}>
                    <MuseumBackground />
                    <FullscreenTint />
                    {/* optional: keep Environment for nicer lighting/reflections */}
                    <Environment preset="studio" intensity={0.6} />
                    <Rock style={{ zIndex: 1000 }}/>
                    
                </Suspense>

                <OrbitControls enableDamping/>
            </Canvas>

        </div>
    )
}