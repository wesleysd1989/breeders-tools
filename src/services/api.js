import axios from "axios";

const api = axios.create({
  baseURL: "https://wax.greymass.com/v1/chain",
});

export default api;
