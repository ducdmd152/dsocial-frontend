import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Flex, HStack, Heading, Text } from "@chakra-ui/layout";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import authService from "../services/auth-service";

const Register = () => {
  let authenticated = sessionStorage.getItem("user");
  if (authenticated) {
    useEffect(() => {
      setTimeout(() => window.location.replace("/community"), 100);
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [registerStatus, setRegisterStatus] = useState("");

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const onSubmit = (data: FieldValues) => {
    const checkLogin = async () => {
      const { username, password, passwordAgain } = data;
      if (username.length == 0 || password.length == 0) {
        setRegisterStatus("All fields are required.");
        return;
      }

      if (password !== passwordAgain) {
        setRegisterStatus("Password is not matched with the confirm.");
        return;
      }

      let res = await authService.register(username, password);
      if (res) {
        window.location.replace("/community");
      } else {
        setRegisterStatus("Fail to register, try again.");
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
          <Heading mb={6}>Register</Heading>

          <Input
            placeholder="Username"
            {...register("username", { required: true })}
            type="text"
            variant="filled"
            mb={3}
          />

          <Input
            {...register("password", { required: true })}
            placeholder="Password"
            type="password"
            variant="filled"
            mb={3}
          />

          <Input
            {...register("passwordAgain", { required: true })}
            placeholder="Confirm password"
            type="password"
            variant="filled"
            mb={3}
          />

          <Text color="tomato" fontStyle="italic" mt={0} mb={2}>
            {registerStatus}
          </Text>
          <Button colorScheme="teal" mt={3} mb={8} type="submit">
            Register
          </Button>

          <HStack color="gray.400" marginX="auto">
            <Text>Already have an account?</Text>
            <Button
              color="gray.500"
              fontWeight="500"
              variant={"link"}
              onClick={() => window.location.replace("/login")}
            >
              Login
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
        </Flex>
      </form>
    </Flex>
  );
};

export default Register;
