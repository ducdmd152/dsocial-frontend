import { Heading } from "@chakra-ui/react";
import React from "react";
import AsideMenu from "./AsideMenu";

const AsideLeft = () => {
  return (
    <>
      <Heading className="logo" fontSize="2xl" colorScheme="green" paddingY="6">
        DSOCIAL
      </Heading>

      <AsideMenu />
    </>
  );
};

export default AsideLeft;
