import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  params: {
    // key: "d3711183e9394fbbac3f6648edd7b832",
  },
});
