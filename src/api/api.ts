import axios from "axios";

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
