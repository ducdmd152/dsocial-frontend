import { Heading } from "@chakra-ui/react";
import React from "react";
import AsideMenu from "./AsideMenu";
import AsideSetting from "./AsideSettings";
import UserControl from "./UserControl";
import MemberList from "./MemberList";
import { HttpUser } from "../services/user-service";
interface Props {
  user: HttpUser | null;
}
const AsideRight = ({ user }: Props) => {
  return (
    <>
      <UserControl user={user} />

      <MemberList />
    </>
  );
};

export default AsideRight;
