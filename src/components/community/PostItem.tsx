import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGetUser from "../../hooks/useGetUser";
import { HttpPost } from "../../services/post-service";
import PostContainer from "./PostContainer";
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
          {post.content.split("\n").map((line) => (
            <Text key={Math.random() % 1000}>{line}</Text>
          ))}
        </CardBody>
      </Card>
    </PostContainer>
  );
};

export default PostItem;
