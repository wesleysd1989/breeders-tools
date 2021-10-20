import axios from "axios";

const api = axios.create({
  baseURL: "https://wax.greymass.com/v1/chain",
});
api.defaults.headers["Content-Type"] = "text/plain;charset=UTF-8";

export default api;
