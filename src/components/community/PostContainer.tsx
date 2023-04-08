import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PostContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ base: "100%", lg: "600px", xl: "700px" }}
      maxWidth="100%"
      //   borderRadius={10}
      //   overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default PostContainer;
