import React, { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import * as THREE from 'three';
import musemBgImg from '../assets/museumImg1.webp';
import logo from '../assets/logo.svg';
import { Center, Bounds, useBounds, useGLTF, useTexture } from "@react-three/drei";


const MINERALS = [
  { 
    id: "calcite", 
    title: "Кальцит", 
    url: "/models/calcite.glb",
    description:
      "Кальцит — один из самых распространённых минералов. Основной компонент известняка и мрамора. Обладает высокой реакцией с кислотами."
 },
  { 
    id: "galenite", 
    title: "Галенит", 
    url: "/models/galenite.glb",
    description:
      "Галенит — главный источник свинца. Отличается металлическим блеском и кубической кристаллической формой."
  },
  { 
    id: "hematite", 
    title: "Гематит", 
    url: "/models/gematite.glb",
    description:
      "Гематит — железная руда с характерным красноватым цветом порошка. Используется в металлургии и пигментах."
  },
  { 
    id: "fluorite", 
    title: "Флюорит", 
    url: "/models/fluorite.glb", 
    description:
    "Флюорит — минерал с широкой цветовой гаммой от фиолетового до зелёного. Используется в металлургии, химической промышленности и как декоративный камень. Обладает характерной кубической кристаллической формой."
  },
  { 
    id: "qwartz", 
    title: "Кварц", 
    url: "/models/qwartz.glb", 
    description:
    "Кварц — один из самых распространённых минералов земной коры. Образует прозрачные, молочные и окрашенные разновидности. Используется в электронике, оптике и ювелирном деле."
  },
  { 
    id: "aragonite", 
    title: "Арагонит", 
    url: "/models/aragonite.glb", 
    description:
    "Арагонит — полиморф кальцита с игольчатой или столбчатой структурой кристаллов. Часто встречается в морских отложениях и раковинах организмов."
  }
];


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


function Rock({ url, title }) {
  const { scene } = useGLTF(url);
  const pivotRef = useRef();
  const bounds = useBounds();

  useEffect(() => {
    if (!pivotRef.current) return;
    bounds.refresh(pivotRef.current).fit(); // 👈 auto zoom/position to model
  }, [url, bounds]);

  useFrame((_, delta) => {
    if (pivotRef.current) pivotRef.current.rotation.x += delta * 0.6;
  });

  return (
    <>
      <group ref={pivotRef} scale={1.8}>
        <Center>
          <primitive object={scene} />
        </Center>
      </group>

      {/* Title fixed (screen-space), но "привязан" к этому компоненту */}
      <Html transform={false} center>
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: 26,
            fontWeight: 600,
            textShadow: "0 4px 12px rgba(0,0,0,0.6)",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
        </div>
      </Html>
    </>
  );
}


function Loader() {
    return (
        <Html center style={{ color: "white", fontSize: 14 }}>
            Loading 3D...
        </Html>
    )
}

export default function MineralViewer() {
  const [selectedId, setSelectedId] = React.useState(MINERALS[0].id);
  const selected = MINERALS.find((m) => m.id === selectedId);

  return (
    <div style={{ margin: "0 auto", height: 520, width: "100%", overflow: "hidden", position: "relative" }}>
      
      {/* MINI LIST (DOM overlay) */}
      <div
        style={{
          position: "absolute",
          left: 16,
          top: 16,
          zIndex: 20,
          display: "flex",
          gap: 8,
          padding: 8,
          borderRadius: 12,
          background: "rgba(0,10,25,0.55)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {MINERALS.map((m) => {
          const active = m.id === selectedId;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedId(m.id)}
              style={{
                cursor: "pointer",
                borderRadius: 10,
                padding: "8px 10px",
                border: active ? "1px solid rgba(255,255,255,0.55)" : "1px solid rgba(255,255,255,0.18)",
                background: active ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.15)",
                color: "white",
                fontSize: 13,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {m.title}
            </button>
          );
        })}
      </div>
      {/* SIDE INFO PANEL */}
<div
  style={{
    position: "absolute",
    right: 15,
    top: 150,
    width: 260,
    zIndex: 20,
    padding: 16,
    borderRadius: 14,
    background: "rgba(0,10,25,0.6)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
  }}
>
  <div style={{ fontSize: 20, fontWeight: 600 }}>
    {selected.title}
  </div>

  <div
    style={{
      fontSize: 13,
      lineHeight: 1.5,
      opacity: 0.85
    }}
  >
    {selected.description}
  </div>
</div>


      {/* LOGO */}
      <img
        src={logo}
        alt="IGN logo"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 90,
          opacity: 0.9,
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      <Canvas
        shadows
        camera={{ position: [0, 0.8, 3], fov: 50 }}
        gl={{ antialias: true, toneMappingExposure: 0.85, toneMapping: THREE.ACESFilmicToneMapping }}
      >
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
          <shadowMaterial opacity={0.25} />
        </mesh>

        <Suspense fallback={<Loader />}>
          <MuseumBackground />
          <FullscreenTint />
          <Environment preset="studio" intensity={0.6} />

          <Bounds fit clip observe margin={1.2}>
            <Rock key={selected.url} url={selected.url} title={selected.title} />
          </Bounds>
        </Suspense>

        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}
