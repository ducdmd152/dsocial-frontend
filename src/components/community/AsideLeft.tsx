import { Heading, Show } from "@chakra-ui/react";
import AsideMenu from "./AsideMenu";
import AsideSetting from "./AsideSettings";

const AsideLeft = () => {
  return (
    <>
      <Show above="md">
        <Heading
          className="logo"
          fontSize={{
            md: "xl",
            lg: "2xl",
          }}
          colorScheme="green"
          paddingY="6"
          textAlign="center"
        >
          DSOCIAL
        </Heading>
      </Show>

      <AsideMenu />

      <AsideSetting />
    </>
  );
};

export default AsideLeft;
