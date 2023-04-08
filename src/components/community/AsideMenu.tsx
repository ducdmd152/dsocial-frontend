import {
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Show,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineTag } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import AsideBlock from "./AsideBlock";

const AsideMenu = () => {
  const menuItemMap = [
    {
      icon: <AiOutlineHome size="28" className="aside-left-icon" />,
      label: "Home",
    },
    {
      icon: <AiOutlineTag size="28" className="aside-left-icon" />,
      label: "Tags",
    },
    {
      icon: <BiCalendarEvent size="27" className="aside-left-icon" />,
      label: "Events",
    },
    {
      icon: <CiLogout size="28" className="aside-left-icon" />,
      label: "Logout",
    },
  ];
  return (
    <>
      <AsideBlock
        styleCustom={{
          padding: {
            base: 1,
            md: 1,
            lg: 10,
          },
          marginTop: { base: 24, lg: 0 },
          marginBottom: { base: 6, lg: 0 },
        }}
      >
        <Show above="lg">
          <Heading
            color="gray.500"
            textAlign="left"
            fontSize="2xl"
            marginBottom={3}
          >
            MENU
          </Heading>
        </Show>
        <List marginX="auto">
          {menuItemMap.map((item) => {
            return (
              <ListItem
                key={item.label}
                paddingY={{ base: 6, lg: 6 }}
                color="gray.400"
              >
                <HStack
                  spacing={{ base: 0, lg: 2 }}
                  onClick={() => {
                    if (item.label === "Logout") {
                      sessionStorage.removeItem("user");
                      window.location.reload();
                    }
                  }}
                  justifyContent={{
                    base: "space-around",
                    lg: "start",
                  }}
                >
                  {item.icon}
                  <Show above="lg">
                    <Button
                      fontSize="xl"
                      variant="link"
                      whiteSpace="normal"
                      textAlign="left"
                      fontWeight="500"
                      color="gray.400"
                    >
                      {item.label}
                    </Button>
                  </Show>
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
