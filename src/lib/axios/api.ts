import axios from "axios";
import { getCookie } from "cookies-next";
import { env } from "@/configs/env";

const getServerSideToken = async () => {
  const headers = await import("next/headers");
  return getCookie("app-track", { cookies: headers.cookies });
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
        : getCookie("app-track");

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
