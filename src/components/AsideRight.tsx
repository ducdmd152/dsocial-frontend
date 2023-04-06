import { Heading } from "@chakra-ui/react";
import React from "react";
import AsideMenu from "./AsideMenu";
import AsideSetting from "./AsideSettings";
import UserControl from "./UserControl";
import MemberList from "./MemberList";

const AsideRight = () => {
  return (
    <>
      <UserControl />

      <MemberList />
    </>
  );
};

export default AsideRight;
