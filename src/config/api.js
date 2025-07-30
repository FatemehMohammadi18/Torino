import getNewTokens from "@/services/newTokens";
import { getCookie, setCookie } from "@/utils/cookie";
import logoutUser from "@/utils/logoutUser";
// import logoutUser from "@/utils/logoutUser";

import axios from "axios";
// import getNewTokens from "services/token";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("accessToken");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    const isTokenError =
      error.response?.status === 401 || error.response?.status === 403;
    if (isTokenError && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await getNewTokens();

      const newAccessToken = res?.accessToken;

      if (newAccessToken) {
        const currentRefreshToken = getCookie("refreshToken");

        setCookie({
          accessToken: newAccessToken,
          refreshToken: currentRefreshToken,
        });

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } else {
        logoutUser();
        return Promise.reject(error);
      }
    }
  }
);

export default api;
