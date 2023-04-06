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
import { HttpPost } from "../services/post-service";
interface Props {
  fetchPostResult: {
    posts: HttpPost[];
    error: string;
    isLoading: boolean;
  };
}
const PostList = ({ fetchPostResult }: Props) => {
  const { posts, isLoading, error } = fetchPostResult;

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
