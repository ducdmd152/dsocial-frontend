import { useState } from "react";
import "./App.css";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Community from "./pages/Community";

function App() {
  const [route, setRoute] = useState("home");

  if (route === "home") return <Login setRoute={setRoute} />;
  if (route === "login") return <Login setRoute={setRoute} />;
  if (route === "register") return <Register setRoute={setRoute} />;
  if (route === "community") return <Community setRoute={setRoute} />;

  return <div>Welcome to the community</div>;
}

export default App;
