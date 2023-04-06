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
  const { entities, error, isLoading, setEntities, setError } =
    useFetchEntities<HttpPost>(
      postService,
      {
        params: {
          _sort: "id",
          _order: "desc",
        },
      },
      []
    );

  return {
    posts: entities,
    error,
    isLoading,
    setError,
    setPosts: setEntities,
  };
};

export default useFetchPost;
