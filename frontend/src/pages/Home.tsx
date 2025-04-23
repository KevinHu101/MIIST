import * as React from "react";
import SpinningCube from "../components/three/SpinningCube";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Hello from Home!</h1>
      <SpinningCube backgroundColor="#0f0f0f" />
    </div>
  );
};

export default Home;