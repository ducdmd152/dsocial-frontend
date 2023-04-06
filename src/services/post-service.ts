// game-service.ts
import apiClient from "./api-client";
import createHttpService from "./http-service";

const endpoint = "posts";

export interface HttpPost {
  id: number;
  userId: number;
  time: Date;
  content: string;
}

export default createHttpService<HttpPost>(apiClient, endpoint);
