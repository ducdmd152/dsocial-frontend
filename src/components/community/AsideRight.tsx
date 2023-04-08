import { Show } from "@chakra-ui/react";
import { HttpUser } from "../../services/user-service";
import MemberBlock from "./MemberBlock";
import UserControl from "./UserControl";
interface Props {
  user: HttpUser | null;
}
const AsideRight = ({ user }: Props) => {
  return (
    <>
      {/* <Show above="sm"> */}
      <UserControl user={user} />
      {/* </Show> */}

      <MemberBlock />
    </>
  );
};

export default AsideRight;
