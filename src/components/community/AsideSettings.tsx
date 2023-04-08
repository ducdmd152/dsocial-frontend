import {
  Box,
  ColorModeScript,
  Heading,
  List,
  ListItem,
  Show,
} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import AsideBlock from "./AsideBlock";

const AsideSetting = () => {
  return (
    <AsideBlock>
      <Show above="lg">
        <Heading
          color="gray.500"
          textAlign="left"
          fontSize="2xl"
          marginBottom={3}
        >
          Settings
        </Heading>
      </Show>
      <List>
        <ListItem>
          <ColorModeSwitch />
        </ListItem>
      </List>
    </AsideBlock>
  );
};

export default AsideSetting;
