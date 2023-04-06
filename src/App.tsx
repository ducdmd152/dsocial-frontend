import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import "./App.css";
import PostCreator from "./components/PostCreator";
import PostList from "./components/PostList";
import { useState } from "react";
import PostArea from "./components/PostArea";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import useGetUser from "./hooks/useGetUser";

function App() {
  const { user, error } = useGetUser(2);

  if (error) return null;

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

export default App;
