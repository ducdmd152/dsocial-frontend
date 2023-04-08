import { HttpUser } from "../../services/user-service";
import MemberBlock from "./MemberBlock";
import UserControl from "./UserControl";
interface Props {
  user: HttpUser | null;
}
const AsideRight = ({ user }: Props) => {
  return (
    <>
      <UserControl user={user} />

      <MemberBlock />
    </>
  );
};

export default AsideRight;
