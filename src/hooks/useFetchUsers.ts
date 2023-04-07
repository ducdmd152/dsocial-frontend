import userService, { HttpUser } from "../services/user-service";
import useFetchEntities from "./useFetchEntities";
export interface UserQuery {
  sort: string;
  order: string;
  searchText: string;
}

const useFetchUsers = (userQuery: UserQuery) => {
  const { entities, error, isLoading, setEntities, setError } =
    useFetchEntities<HttpUser>(
      userService,
      {
        params: {
          _sort: userQuery.sort,
          _order: userQuery.order,
          username_like: userQuery.searchText,
        },
      },
      [userQuery]
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
