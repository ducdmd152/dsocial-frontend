import {
  Avatar,
  Box,
  Button,
  HStack,
  Link,
  Show,
  Text,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { HttpUser } from "../../services/user-service";

const UserControl = ({ user }: { user: HttpUser | null }) => {
  if (!user)
    return (
      <HStack
        paddingX="4"
        paddingY="4"
        justifyContent="space-between"
        color="gray.400"
      >
        Login
      </HStack>
    );
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
            <Text>{user.username}</Text>
          </Show>

          <Box borderRadius="100rem" border="transparent 2px solid">
            <Avatar src={user.avt} size="sm" />
          </Box>
        </HStack>
      </Link>
    </HStack>
  );
};

export default UserControl;
