import axios from "axios";

// const baseURL = "http://localhost:5001/api";
const baseURL = process.env.REACT_APP_API_URL;
export const opened = axios.create({
  baseURL,
});

export const secured = axios.create({
  withCredentials: true,
  baseURL,
});

secured.interceptors.request.use(async (config) => {
  config.headers.token = localStorage.getItem("token") ?? "";

  return { ...config };
});
