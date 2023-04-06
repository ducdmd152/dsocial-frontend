import { Heading } from "@chakra-ui/react";
import React from "react";
import AsideMenu from "./AsideMenu";
import AsideSetting from "./AsideSettings";
import UserControl from "./UserControl";

const AsideRight = () => {
  return (
    <>
      <UserControl />
      <AsideMenu />

      <AsideSetting />
    </>
  );
};

export default AsideRight;
