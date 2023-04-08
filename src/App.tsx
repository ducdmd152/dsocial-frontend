import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Register from "./pages/Register";
import devConfig from "../devConfig";
import { useState } from "react";

const Router = {
  map: {},
};
function App() {
  const [route, setRoute] = useState("home");

  if (route === "home") return <Login setRoute={setRoute} />;
  if (route === "login") return <Login setRoute={setRoute} />;
  if (route === "register") return <Register setRoute={setRoute} />;
  if (route === "community") return <Community setRoute={setRoute} />;
  // const { user, error } = useGetUser(2);
  // if (error) return null;
  // return (
  //   <Grid
  //     templateAreas={{
  //       base: `"main aside-right"`,
  //       lg: `"aside-left main aside-right"`,
  //     }}
  //     templateColumns={{
  //       base: `1fr 140px`,
  //       sm: `1fr 200px`,
  //       lg: "240px 1fr 240px",
  //     }}
  //     h="100%"
  //   >
  //     <Show above="lg">
  //       <GridItem area="aside-left" className="aside-left">
  //         <AsideLeft />
  //       </GridItem>
  //     </Show>
  //     <GridItem area="main" className="main">
  //       <PostArea user={user} />
  //     </GridItem>
  //     <GridItem area="aside-right" className="aside-right">
  //       <AsideRight user={user} />
  //     </GridItem>
  //   </Grid>
  // );
}

export default App;
