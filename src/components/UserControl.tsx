import {
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  Link,
  Show,
} from "@chakra-ui/react";
import React from "react";
import { FiMail } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

const UserControl = () => {
  return (
    <HStack
      paddingX="4"
      paddingY="4"
      justifyContent="space-between"
      color="gray.400"
    >
      <Button
        variant={"unstyled"}
        _hover={{
          color: "blue.300",
        }}
      >
        <FiMail color="gray400" size="28px" />
      </Button>
      <Button
        variant={"unstyled"}
        _hover={{
          color: "blue.300",
        }}
      >
        <MdNotificationsNone size="34px" fontWeight="bold" />
      </Button>

      <Link>
        <HStack
          _hover={{
            color: "blue.300",
            filter: "brightness(1.1)",
            transition: "all 0.25s ease-in-out",
          }}
        >
          <Show above="lg">
            <Text>duckode</Text>
          </Show>

          <Box borderRadius="100rem" border="transparent 2px solid">
            <Avatar src="https://bit.ly/dan-abramov" size="sm" />
          </Box>
        </HStack>
      </Link>
    </HStack>
  );
};

export default UserControl;
