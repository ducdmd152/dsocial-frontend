import { AxiosInstance } from "axios";
import apiClient from "./api-client";

interface AuthEndpoints {
  login: string;
  register: string;
}

export interface Auth {
  usename: string;
  email: string;
  password: string;
}

class AuthService {
  apiClient: AxiosInstance;
  endpoints: AuthEndpoints;
  constructor(
    apiClient: AxiosInstance,
    endpoints: AuthEndpoints = {
      login: "login",
      register: "register",
    }
  ) {
    this.apiClient = apiClient;
    this.endpoints = endpoints;
  }

  login(username: String, password: String) {
    let auth = {
      username,
      email: username + "@dsocial.com",
      password: password,
    };
    console.log(auth);

    return this.apiClient
      .post(this.endpoints.login, auth)
      .then((response) => {
        const { accessToken, user } = response.data;

        this.apiClient.defaults.params = {
          ...this.apiClient.defaults.params,
          accessToken: accessToken,
        };

        sessionStorage.setItem("user", JSON.stringify(user));

        return true;
      })
      .catch((err) => {
        return false;
      });
  }
}

export default new AuthService(apiClient);
