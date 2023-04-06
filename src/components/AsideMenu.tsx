import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { AiFillTags, AiOutlineHome, AiOutlineTag } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { BiCalendarEvent } from "react-icons/bi";
import React from "react";
import AsideBlock from "./AsideBlock";

const AsideMenu = () => {
  const menuItemMap = [
    {
      icon: <AiOutlineHome size="28" />,
      label: "Home",
    },
    {
      icon: <AiOutlineTag size="28" />,
      label: "Tags",
    },
    {
      icon: <BiCalendarEvent size="27" />,
      label: "Events",
    },
    {
      icon: <CiLogout size="28" />,
      label: "Logout",
    },
  ];
  return (
    <>
      <AsideBlock>
        <Heading
          color="gray.500"
          textAlign="left"
          fontSize="2xl"
          marginBottom={3}
        >
          MENU
        </Heading>
        <List>
          {menuItemMap.map((item) => {
            return (
              <ListItem key={item.label} paddingY="6" color="gray.400">
                <HStack spacing={2}>
                  {item.icon}
                  <Button
                    onClick={() => console.log()}
                    fontSize="xl"
                    variant="link"
                    whiteSpace="normal"
                    textAlign="left"
                    fontWeight="500"
                    color="gray.400"
                  >
                    {item.label}
                  </Button>
                </HStack>
              </ListItem>
            );
          })}
        </List>
      </AsideBlock>
    </>
  );
};

export default AsideMenu;
