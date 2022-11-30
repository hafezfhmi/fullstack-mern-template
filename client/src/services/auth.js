import axios from "axios";

const baseUrl = "http://localhost:3001/auth";

const login = () => {
  return axios
    .post(`${baseUrl}/login`, {}, { withCredentials: true })
    .then((response) => response.data);
};

const logout = () => {
  return axios.post(`${baseUrl}/logout`, {}, { withCredentials: true });
};

const authServices = { login, logout };

export default authServices;
