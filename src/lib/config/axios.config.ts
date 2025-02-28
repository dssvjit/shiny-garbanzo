import axios from "axios";
import { SERVER_URL } from "../env";
import { isTokenExpired } from "../jwt";
import { refreshAccessToken } from "../api/auth.api";

export const api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const publicApi = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("dss-accessToken");

  if (!token || isTokenExpired(token)) {
    token = await refreshAccessToken();
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
