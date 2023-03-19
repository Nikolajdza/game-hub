import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "835c946553a34a1ea98539927ecf9f34",
  },
});
