import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { UserQuery } from "../../hooks/useFetchUsers";
import AsideBlock from "./AsideBlock";
import MemberList from "./MemberList";
import SearchUsers from "./SearchUsers";

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
