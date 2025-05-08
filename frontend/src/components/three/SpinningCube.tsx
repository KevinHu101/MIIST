// SpinningCube.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useColorMode } from "@chakra-ui/react";

const SpinningCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { colorMode } = useColorMode(); // 👈 Get light or dark

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Clean up any old canvas
    while (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(
      colorMode === "light" ? "#e5e5e5" : "#0f0f0f"
    ); // 👈 set based on mode

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [colorMode]); // 👈 re-run effect when color mode changes

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
};

export default SpinningCube;
