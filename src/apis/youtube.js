import axios from "axios";

const KEY = "AIzaSyA9HJBzL2bT1rt1xZ7tWFlS86tKbnI8xUw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
