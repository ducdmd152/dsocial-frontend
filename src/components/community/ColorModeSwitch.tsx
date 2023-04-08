import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack
      justifyContent={{
        base: "space-around",
        lg: "start",
      }}
    >
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Show above="lg">
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
