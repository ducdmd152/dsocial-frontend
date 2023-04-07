import { Grid, GridItem, Show } from "@chakra-ui/react";
import AsideLeft from "../components/community/AsideLeft";
import AsideRight from "../components/community/AsideRight";
import PostArea from "../components/community/PostArea";
import useGetUser from "../hooks/useGetUser";
import { HttpUser } from "../services/user-service";
import { useEffect, useState } from "react";

function Community() {
  const [user, setUser] = useState<HttpUser | null>(null);

  useEffect(() => {
    const userJSON = sessionStorage.getItem("user");
    // if (userJSON) console.log(JSON.parse(userJSON));
    if (userJSON) setUser(JSON.parse(userJSON));
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"main aside-right"`,
        lg: `"aside-left main aside-right"`,
      }}
      templateColumns={{
        base: `1fr 140px`,
        sm: `1fr 200px`,
        lg: "240px 1fr 240px",
      }}
      h="100%"
    >
      <Show above="lg">
        <GridItem area="aside-left" className="aside-left">
          <AsideLeft />
        </GridItem>
      </Show>

      <GridItem area="main" className="main">
        <PostArea user={user} />
      </GridItem>
      <GridItem area="aside-right" className="aside-right">
        <AsideRight user={user} />
      </GridItem>
    </Grid>
  );
}

export default Community;
