import { Heading } from "@chakra-ui/react";
import AsideMenu from "./AsideMenu";
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
