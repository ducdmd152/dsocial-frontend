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
import useFetchUsers, { UserQuery } from "../hooks/useFetchUsers";
import SearchUsers from "./SearchUsers";
import { useState } from "react";
import MemberList from "./MemberList";

const MemberBlock = () => {
  const [userQuery, setUserQuery] = useState<UserQuery>({
    sort: "id",
    order: "asc",
  } as UserQuery);

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

        <SearchUsers
          onSearch={(searchText: string) =>
            setUserQuery({ ...userQuery, searchText })
          }
        />

        <MemberList userQuery={userQuery} />
      </AsideBlock>
    </Box>
  );
};

export default MemberBlock;
