import apisauce from "apisauce";
import { UrlBase } from "../Enviroment";
let URL = `${UrlBase()}api`;
const headers = {
  "Content-Type": "multipart/form-data",
};

const create = (enpoint = URL) => {
  const api = apisauce.create({
    baseURL: enpoint,
    timeout: 25000,
  });

  // Login
  const postSaveBook = (data) => api.post("Biblioteca/SaveBook", data);
  const getBooks = () => api.get(`Biblioteca/GetBooks`);

  async function retrieveData(key) {
    try {
      const value = await localStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
      return false;
    }
  }

  /* -------- Token Header managment --------- */
  const setToken = async (token) => {
    const tokenAsync = await retrieveData("jwt");
    if (token) {
      api.setHeader("Authorization", "Bearer " + token);
    } else {
      api.setHeader("Authorization", "Bearer " + tokenAsync);
    }
  };

  const removeToken = () => api.deleteHeader("Authorization");

  return {
    postSaveBook,
    getBooks,
  };
};

const api_ = create();

export default api_;
