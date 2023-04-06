import postService, { HttpPost } from "../services/post-service";
import userService, { HttpUser } from "../services/user-service";
import useFetchEntities from "./useFetchEntities";
export interface Post {
  id: number;
  user: HttpUser;
  time: Date;
  content: string;
}

const useFetchPost = () => {
  const { entities, error, isLoading } = useFetchEntities<HttpPost>(
    postService,
    {
      params: {},
    },
    []
  );

  return {
    entities,
    error,
    isLoading,
  };
};

export default useFetchPost;
