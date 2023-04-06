import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import "./App.css";
import PostCreator from "./components/PostCreator";
import PostList from "./components/PostList";
import { useState } from "react";
import PostArea from "./components/PostArea";

function App() {
  const [user, setUser] = useState({
    id: 1,
    username: "duckode",
    avt: "https://bit.ly/dan-abramov",
  });

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
        <GridItem area="aside-left">Aside left</GridItem>
      </Show>

      <GridItem bg="#24273b" area="main">
        <PostArea user={user} />
      </GridItem>
      <GridItem area="aside-right">Aside right</GridItem>
    </Grid>
  );
}

export default App;
