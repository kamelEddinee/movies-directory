import axios from "axios";

export const MoviesApiFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Accept-Language": "en",
    Authorization: process.env.NEXT_PUBLIC_TOKEN,
  },
});
