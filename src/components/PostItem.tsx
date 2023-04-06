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
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PostContainer from "./PostContainer";
import { Post } from "../hooks/useFetchPosts";
import { HttpPost } from "../services/post-service";
import useGetUser from "../hooks/useGetUser";
interface Props {
  post: HttpPost;
}

const PostItem = ({ post }: Props) => {
  const { user, isLoading, error } = useGetUser(post.userId);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <PostContainer>
      <Card width="100%">
        <CardHeader paddingBottom="2">
          <HStack>
            <Avatar src={user?.avt} />
            <VStack alignItems="start" spacing={0}>
              <Text fontSize={15}>{user?.username}</Text>
              <Text fontSize={12} color="gray" fontStyle="italic">
                {post.time.toString()}
              </Text>
            </VStack>
          </HStack>
        </CardHeader>
        <CardBody paddingTop="1" paddingBottom="5">
          <Text>{post.content}</Text>
        </CardBody>
      </Card>
    </PostContainer>
  );
};

export default PostItem;
