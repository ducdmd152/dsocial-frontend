import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  styleCustom?: Object;
}
const AsideBlock = ({ children, styleCustom }: Props) => {
  return (
    <Box
      padding={{
        base: 2,
        md: 4,
        lg: 10,
      }}
      {...styleCustom}
    >
      {children}
    </Box>
  );
};

export default AsideBlock;
