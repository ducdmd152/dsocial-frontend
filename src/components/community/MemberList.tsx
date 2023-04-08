import {
  Avatar,
  HStack,
  List,
  ListItem,
  Show,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import useFetchUsers, { UserQuery } from "../../hooks/useFetchUsers";

const MemberList = ({ userQuery }: { userQuery: UserQuery }) => {
  const { users, isLoading, error } = useFetchUsers(userQuery);
  if (error) return null;

  const skeletons = [1, 2, 3, 4, 5, 6, 7];
  if (isLoading)
    return (
      <List
        paddingTop={{
          base: 6,
          lg: 10,
        }}
        maxHeight="calc(100vh - 270px)"
        overflow="auto"
      >
        {skeletons.map((skeleton) => (
          <ListItem marginBottom={6} key={skeleton}>
            <HStack justifyContent="space-between">
              <SkeletonCircle size="10" />
              <Show above="sm">
                <SkeletonText
                  textAlign="left"
                  fontSize="16"
                  noOfLines={1}
                  skeletonHeight="4"
                  width="20"
                />
                <BsThreeDotsVertical color="primary" size="16px" />
              </Show>
            </HStack>
          </ListItem>
        ))}
      </List>
    );

  return (
    <List
      paddingTop={{
        base: 6,
        lg: 10,
      }}
      maxHeight="calc(100vh - 270px)"
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
  );
};

export default MemberList;
