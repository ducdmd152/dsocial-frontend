import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, HStack, Heading, Text } from "@chakra-ui/layout";

import { Switch } from "@chakra-ui/switch";
import React, { useEffect } from "react";

const Login = () => {
  let authenticated = false;
  if (authenticated) {
    useEffect(() => {
      setTimeout(() => window.location.replace("/community"), 500);
    });
  }

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
        width="400px"
        maxWidth="100%"
      >
        <Heading mb={6}>Login</Heading>
        <Input placeholder="Username" type="text" variant="filled" mb={3} />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Login
        </Button>

        <HStack color="gray.400" marginX="auto">
          <Text>Create a new account?</Text>
          <Button
            color="gray.500"
            fontWeight="500"
            variant={"link"}
            onClick={() => window.location.replace("/register")}
          >
            Register
          </Button>
        </HStack>

        <Button
          mt="3"
          color="gray.400"
          fontWeight="300"
          fontStyle="italic"
          variant={"link"}
          onClick={() => window.location.replace("/community")}
        >
          ---Continue without login---
        </Button>

        {/* <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl> */}
      </Flex>
    </Flex>
  );
};

export default Login;
