import { Heading } from "@chakra-ui/react";
import React from "react";
import AsideMenu from "./AsideMenu";
import ColorModeSwitch from "./ColorModeSwitch";
import AsideSetting from "./AsideSettings";

const AsideLeft = () => {
  return (
    <>
      <Heading className="logo" fontSize="2xl" colorScheme="green" paddingY="6">
        DSOCIAL
      </Heading>

      <AsideMenu />

      <AsideSetting />
    </>
  );
};

export default AsideLeft;
