import axios from "axios";

const baseUrl = "http://localhost:3001/api/cats";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const get = (id) => {
  return axios.get(`${baseUrl}/${id}`).then((response) => response.data);
};

const create = (data) => {
  return axios.post(baseUrl, data).then((response) => response.data);
};

const update = (id, updatedData) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedData)
    .then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const catsService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default catsService;
