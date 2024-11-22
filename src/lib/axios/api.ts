import { env } from "@/configs/env";
import axios from "axios";
import { getCookie } from "cookies-next";

const getServerSideToken = async () => {
  const headers = await import("next/headers");
  return getCookie("SECRET_COOKIE", { cookies: headers.cookies });
};

const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token =
      typeof window === "undefined"
        ? await getServerSideToken()
        : getCookie("SECRET_COOKIE");

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };

