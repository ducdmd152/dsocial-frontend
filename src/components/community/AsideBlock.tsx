import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const AsideBlock = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      padding={{
        base: 4,
        lg: 10,
      }}
    >
      {children}
    </Box>
  );
};

export default AsideBlock;
