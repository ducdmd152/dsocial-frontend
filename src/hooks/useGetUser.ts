import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import userService, { HttpUser } from "../services/user-service";

const useGetUser = (id: number) => {
  const [user, setUser] = useState<HttpUser | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userService
      .get(id)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false); // hide the loader
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false); // hide the loader
      });
  }, []);

  return { user, error, isLoading };
};
export default useGetUser;
