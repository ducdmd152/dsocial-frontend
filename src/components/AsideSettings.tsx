import {
  Box,
  ColorModeScript,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const AsideSetting = () => {
  return (
    <Box padding="10">
      <Heading
        color="gray.500"
        textAlign="left"
        fontSize="2xl"
        marginBottom={3}
      >
        Settings
      </Heading>
      <List>
        <ListItem>
          <ColorModeSwitch />
        </ListItem>
      </List>
    </Box>
  );
};

export default AsideSetting;
