// apis/users.js
import axios from "axios";

export const fetchUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
