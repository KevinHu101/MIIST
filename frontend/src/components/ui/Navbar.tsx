import { Box, Link as ChakraLink, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="gray.800"
      px={8}
      py={6}
      color="white"
    >
      <Flex align="center">
        {/* <Heading size="2xl">MIIST</Heading> */}
        <RouterLink to={"/"}>
          <Image
            src="/miist-logo.png"
            alt="MIIST Logo"
            width={"20vw"}
            filter={"invert(1)"}
          ></Image>
        </RouterLink>
        <Spacer />
        <Flex gap={10} align="center">
          <ChakraLink
            as={RouterLink}
            to="/"
            fontWeight="medium"
            fontSize="2rem"
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/about"
            fontWeight="medium"
            fontSize="2rem"
          >
            About
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/contact"
            fontWeight="medium"
            fontSize="2rem"
          >
            Contact
          </ChakraLink>
          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
