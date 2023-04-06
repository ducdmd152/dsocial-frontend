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
import React, { useRef } from "react";
import PostContainer from "./PostContainer";
import { HttpUser } from "../services/user-service";
interface Props {
  user: HttpUser;
  onCreate: (content: string) => void;
}

const PostCreator = ({ user, onCreate }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) onCreate(ref.current.value);
      }}
    >
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
              <Avatar src={user?.avt} />
              <Textarea
                ref={ref}
                className="input-text"
                placeholder="Create some cookies..."
                variant="filled"
              />
            </HStack>
          </CardBody>
          <CardFooter paddingTop="0" paddingBottom="4">
            <HStack justifyContent="right" width="100%">
              <Button
                onClick={() => {
                  if (ref.current?.value) onCreate(ref.current.value);
                }}
                className="create-button"
                colorScheme="blue"
                mr={2}
              >
                Create
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      </PostContainer>
    </form>
  );
};

export default PostCreator;
