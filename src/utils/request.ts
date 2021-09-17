import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const URL_API = process.env.URL_API || "http://localhost:4000/api";

const request = axios.create({
  baseURL: URL_API,
  withCredentials: false,
});

request.interceptors.request.use((config: AxiosRequestConfig) => ({
  ...config,
  headers: {
    ...config.headers,
    Accept: "application/json",
  },
}));

request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error.response)
);

export default request;
