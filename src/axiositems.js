import axios from "axios";

const instance = axios.create({
  baseURL: "https://to-do-list-8a92b.firebaseio.com/"
});

export default instance;
