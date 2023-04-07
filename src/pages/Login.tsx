import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Flex, HStack, Heading, Text } from "@chakra-ui/layout";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect } from "react";
import authService from "../services/auth-service";

const Login = () => {
  let authenticated = sessionStorage.getItem("user");
  if (authenticated) {
    useEffect(() => {
      setTimeout(() => window.location.replace("/community"), 500);
    });
  }

  const { register, handleSubmit } = useForm();

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const onSubmit = (data: FieldValues) => {
    const checkLogin = async () => {
      let res = await authService.login(data.username, data.password);
      if (res) {
        window.location.replace("/community");
      }
    };
    checkLogin();
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            placeholder="Username"
            {...register("username")}
            type="text"
            variant="filled"
            mb={3}
          />
          <Input
            {...register("password")}
            placeholder="**********"
            type="password"
            variant="filled"
            mb={6}
          />
          <Button colorScheme="teal" mb={8} type="submit">
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
      </form>
    </Flex>
  );
};

export default Login;