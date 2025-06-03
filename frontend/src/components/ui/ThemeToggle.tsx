import * as React from "react"
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {FC} from "react"

const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconSize = 10;

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === "light" ? <MoonIcon boxSize={iconSize} /> : <SunIcon boxSize={iconSize}/>}
      onClick={toggleColorMode}
      variant="ghost"
      color={colorMode === "light" ? "gray.400" : "white"}
      _hover={{
        bg: colorMode === "light" ? "gray.700" : "gray.700", // background on hover
        color: colorMode === "light" ? "teal.500" : "yellow.300", // icon color on hover
      }}
    />
  );
};

export default ThemeToggle;