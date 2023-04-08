import { useState } from "react";
import Community from "./Community";
import Login from "./Login";
import Register from "./Register";

const Index = () => {
  const [route, setRoute] = useState("home");

  if (route === "home")
    return (
      <div>
        <Login setRoute={setRoute} />
      </div>
    );
  if (route === "login")
    return (
      <div>
        <Login setRoute={setRoute} />
      </div>
    );
  if (route === "register")
    return (
      <div>
        <Register setRoute={setRoute} />
      </div>
    );
  if (route === "community")
    return (
      <div>
        <Community setRoute={setRoute} />
      </div>
    );

  return <div></div>;
};

export default Index;
