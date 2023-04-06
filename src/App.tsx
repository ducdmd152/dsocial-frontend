import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
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
        Main
      </GridItem>
      <GridItem area="aside-right">Aside right</GridItem>
    </Grid>
  );
}

export default App;
