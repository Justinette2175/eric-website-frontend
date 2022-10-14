import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
  timeout: 1000
});

export type RequestOptions = {
  filters?: Record<string, unknown>;
  sort?: Record<string, unknown>;
};
