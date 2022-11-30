import axios from "axios";

const baseUrl = "http://localhost:3001/auth/login";

const login = () => {
  return axios
    .post(baseUrl, {}, { withCredentials: true })
    .then((response) => response.data);
};

const authServices = { login };

export default authServices;
