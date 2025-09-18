import axios from "axios";

import { ROUTES } from "../routes.ts";

const API_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL
  : "/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = ROUTES.LOGIN.to;
    }
    return Promise.reject(error);
  },
);

/* errors
WRONG_PASSWORD
FORBIDDEN
ROUND_NOT_FOUND
ROUND_NOT_ACTIVE
UNAUTHORIZED
INVALID_TOKEN
 */
