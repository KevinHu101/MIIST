import * as React from "react";
import SpinningCube from "../components/three/SpinningCube";
import "../styles/home.css";
import { Box } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box pt="100px" overflow={"hidden"}>
      <SpinningCube/>
    </Box>
  );
};

export default Home;
