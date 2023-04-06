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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PostItem from "./PostItem";
import useFetchPosts from "../hooks/useFetchPosts";

const PostList = () => {
  const { entities: posts, error, isLoading } = useFetchPosts();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <VStack width="100%">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </VStack>
  );
};

export default PostList;
