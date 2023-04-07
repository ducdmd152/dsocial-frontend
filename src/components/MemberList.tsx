import {
  Avatar,
  Box,
  HStack,
  Heading,
  List,
  ListItem,
  VStack,
  Text,
  Spinner,
  Show,
} from "@chakra-ui/react";
import AsideBlock from "./AsideBlock";
import { BsThreeDotsVertical } from "react-icons/bs";
import useFetchUsers from "../hooks/useFetchUsers";
const MemberList = () => {
  const { users, isLoading, error } = useFetchUsers();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box marginTop={4} className="member-list-box">
      <AsideBlock>
        <Heading
          color="gray.500"
          textAlign="left"
          fontSize={{ base: "lg", lg: "2xl" }}
          marginBottom={3}
        >
          Commnunity
        </Heading>

        <List
          paddingTop={{
            base: 6,
            lg: 10,
          }}
          maxHeight="calc(100vh - 240px)"
          overflow="auto"
        >
          {users.map((user) => (
            <ListItem marginBottom={6} key={user.id}>
              <HStack justifyContent="space-between">
                <Avatar src={user.avt} size="md" />
                <Show above="sm">
                  <Text fontSize={16}>{user.username}</Text>
                  <BsThreeDotsVertical color="primary" size="16px" />
                </Show>
              </HStack>
            </ListItem>
          ))}
        </List>
      </AsideBlock>
    </Box>
  );
};

export default MemberList;
