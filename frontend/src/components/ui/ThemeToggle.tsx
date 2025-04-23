import * as React from "react"
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {FC} from "react"

const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      icon={colorMode === "light" ? <MoonIcon boxSize={40} /> : <SunIcon boxSize={40}/>}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
};

export default ThemeToggle;