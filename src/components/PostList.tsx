import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Input,
  InputGroup,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PostItem from "./PostItem";

const PostList = () => {
  return (
    <VStack width="100%">
      <PostItem />
      <PostItem />
      <PostItem />
    </VStack>
  );
};

export default PostList;
