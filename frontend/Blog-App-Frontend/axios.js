import axios from "axios";
const instance = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:8080/api/user/",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};
export default instance;
