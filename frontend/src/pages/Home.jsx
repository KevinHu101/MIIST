import React from "react";
import SpinningCube from "../components/three/SpinningCube";

const Home = () => {
  return (
    <div style={{ padding: "2rem", background: "#f0f0f0", minHeight: "100vh" }}>
      <h1>Hello from Home!</h1>
      <SpinningCube backgroundColor="#ffffff" />
    </div>
  );
};

export default Home;
