import React from "react";
import { Box, Flex, Heading, Spacer, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <Box bg="gray.800" px={8} py={6} color="white">
      <Flex align="center"  >
        <Heading size="2xl">MIIST</Heading>
        <Spacer />
        <Flex gap={10} align="center">
          <ChakraLink as={RouterLink} to="/" fontWeight="medium" fontSize="2rem" >
            Home
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/about" fontWeight="medium" fontSize="2rem">
            About
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/contact" fontWeight="medium" fontSize="2rem">
            Contact
          </ChakraLink>
          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
