import { Box, Heading, Show, baseTheme } from "@chakra-ui/react";
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
    <Box
      marginTop={{
        base: 3,
        sm: 8,
        md: 8,
      }}
      className="member-list-box"
    >
      <AsideBlock
        styleCustom={{
          padding: {
            base: 1,
            md: 3,
            lg: 8,
          },
        }}
      >
        <Show above="sm">
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
        </Show>

        <MemberList userQuery={userQuery} />
      </AsideBlock>
    </Box>
  );
};

export default MemberBlock;
