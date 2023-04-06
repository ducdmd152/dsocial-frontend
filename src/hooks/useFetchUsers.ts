import userService, { HttpUser } from "../services/user-service";
import useFetchEntities from "./useFetchEntities";

const useFetchUsers = () => {
  const { entities, error, isLoading, setEntities, setError } =
    useFetchEntities<HttpUser>(
      userService,
      {
        params: {
          _sort: "id",
          _order: "asc",
        },
      },
      []
    );

  return {
    users: entities,
    isLoading,
    error,
    // setError,
    // setUsers: setEntities,
  };
};

export default useFetchUsers;
