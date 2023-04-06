import {
  Avatar,
  Box,
  HStack,
  Heading,
  List,
  ListItem,
  VStack,
  Text,
} from "@chakra-ui/react";
import AsideBlock from "./AsideBlock";
import { BsThreeDotsVertical } from "react-icons/bs";
const MemberList = () => (
  <Box marginTop={4}>
    <AsideBlock>
      <Heading
        color="gray.500"
        textAlign="left"
        fontSize="2xl"
        marginBottom={3}
      >
        Commnunity
      </Heading>

      <List paddingTop={10} max-height="80vh" overflow="auto">
        <ListItem marginBottom={6}>
          <HStack justifyContent="space-between">
            <Avatar src={"https://bit.ly/dan-abramov"} size="md" />
            <Text fontSize={16}>{"Duckode"}</Text>
            <BsThreeDotsVertical color="primary" size="16px" />
          </HStack>
        </ListItem>
        <ListItem marginBottom={6}>
          <HStack justifyContent="space-between">
            <Avatar src={"https://bit.ly/dan-abramov"} size="md" />
            <Text fontSize={16}>{"Duckode"}</Text>
            <BsThreeDotsVertical color="primary" size="16px" />
          </HStack>
        </ListItem>
        <ListItem marginBottom={6}>
          <HStack justifyContent="space-between">
            <Avatar src={"https://bit.ly/dan-abramov"} size="md" />
            <Text fontSize={16}>{"Duckode"}</Text>
            <BsThreeDotsVertical color="primary" size="16px" />
          </HStack>
        </ListItem>
      </List>
    </AsideBlock>
  </Box>
);

export default MemberList;
