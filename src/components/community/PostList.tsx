import { Spinner, VStack } from "@chakra-ui/react";
import { HttpPost } from "../../services/post-service";
import PostItem from "./PostItem";
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
