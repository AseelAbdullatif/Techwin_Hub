import axios from "axios";

const api = axios.create({
  baseURL: "https://699bf36e110b5b738cc142c5.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;