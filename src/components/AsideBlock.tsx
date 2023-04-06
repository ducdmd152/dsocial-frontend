import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const AsideBlock = ({ children }: { children: ReactNode }) => {
  return <Box padding="10">{children}</Box>;
};

export default AsideBlock;
