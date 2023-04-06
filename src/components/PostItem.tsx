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
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PostContainer from "./PostContainer";

const PostItem = () => {
  return (
    <PostContainer>
      <Card width="100%">
        <CardHeader paddingBottom="2">
          <HStack>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <VStack alignItems="start" spacing={0}>
              <Text fontSize={15}>@duckode</Text>
              <Text fontSize={12} color="gray" fontStyle="italic">
                Dec 22 2023 20:23
              </Text>
            </VStack>
          </HStack>
        </CardHeader>
        <CardBody paddingTop="1" paddingBottom="5">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tenetur.
          </Text>
        </CardBody>
      </Card>
    </PostContainer>
  );
};

export default PostItem;
