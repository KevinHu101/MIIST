import React from "react";
import { Box, Flex, Heading, Spacer, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={6} py={4} color="white">
      <Flex align="center">
        <Heading size="md">MIIST</Heading>
        <Spacer />
        <Flex gap={4}>
          <Link as={RouterLink} to="/" fontWeight="medium">
            Home
          </Link>
          <Link as={RouterLink} to="/about" fontWeight="medium">
            About
          </Link>
          <Button colorScheme="teal" size="sm">
            Sign In
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
