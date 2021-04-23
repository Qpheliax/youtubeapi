import axios from "axios";
const KEY = "AIzaSyCrnRP8uWI3ewu5G7_zmaoqgf7FKOWvLQw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
