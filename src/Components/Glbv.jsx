// src/Components/Glbv.jsx
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 3D Model Loader Component
function Model({ url, scale = 1 }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[scale, scale, scale]} />;
}

// Main Viewer Component
export default function Glbv() {
  const [isDragging, setIsDragging] = useState(false);

  // Lock scroll when user is dragging the 3D model
  useEffect(() => {
    document.body.style.overflow = isDragging ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDragging]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center py-20 px-6 text-white relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-2xl z-0"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10 text-center drop-shadow-md">
        Take a Closer Look
      </h1>

      {/* Subtext */}
      <p className="mb-8 text-gray-300 text-sm italic z-10">
        Drag to rotate, pinch to zoom
      </p>

      {/* 3D Viewer Panel */}
      <div
        className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 flex flex-col justify-center items-center shadow-2xl border border-white/20 z-10 transition-all duration-500 hover:scale-[1.01]"
        data-aos="zoom-in"
      >
        <Canvas
          camera={{ position: [0, 1, 3], fov: 60 }}
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "1rem",
            touchAction: "none",
          }}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Model url="/images/16pro.glb" scale={0.1} />
          <OrbitControls
            enableZoom
            enableRotate
            enablePan={false}
            dampingFactor={0.08}
            enableDamping
            autoRotate
            autoRotateSpeed={1.2}
          />
        </Canvas>

        {/* Label below the canvas */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide drop-shadow-lg">
            The All-New <span className="text-purple-400">iPhone 16 Pro</span>
          </h2>
          <p className="mt-1 text-sm text-gray-300 italic">
            Innovation redefined in every detail.
          </p>
        </div>
      </div>
    </div>
  );
}