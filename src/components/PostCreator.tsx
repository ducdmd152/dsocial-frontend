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
} from "@chakra-ui/react";
import React from "react";
import PostContainer from "./PostContainer";

const PostCreator = () => {
  return (
    <PostContainer>
      <Card>
        <CardHeader paddingBottom="2">
          <HStack gap="1" justifyContent="center">
            <Button
              colorScheme="blue"
              variant="outline"
              borderRadius="100rem"
              paddingX={4}
              paddingY={1}
              height={8}
            >
              Status
            </Button>
            <Button
              colorScheme="gray"
              variant="outline"
              borderRadius="100rem"
              paddingX={4}
              paddingY={1}
              height={8}
            >
              Photo
            </Button>
            <Button
              colorScheme="gray"
              variant="outline"
              borderRadius="100rem"
              paddingX={4}
              paddingY={1}
              height={8}
            >
              Video
            </Button>
          </HStack>
        </CardHeader>
        <CardBody>
          <HStack>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Textarea
              className="input-text"
              placeholder="Create some cookies..."
              variant="filled"
            />
          </HStack>
        </CardBody>
        <CardFooter paddingTop="0" paddingBottom="4">
          <HStack justifyContent="right" width="100%">
            <Button className="create-button" colorScheme="blue" mr={2}>
              Create
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </PostContainer>
  );
};

export default PostCreator;
