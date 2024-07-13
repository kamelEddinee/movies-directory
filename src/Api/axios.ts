import axios from "axios";

export const MoviesApiFetch = axios.create({
  baseURL: "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com",
  headers: {
    Accept: "application/json",
    "Accept-Language": "en",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvcGVuSnd0MSIsIm5hbWUiOiJPcGVuSldUWzFdIn0.n8x8GHYe8RQYKkAoMVMlw9-FMZ57bs0HrwxBeJn3hQM`,
  },
});
