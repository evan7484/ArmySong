import axios from "axios";

export const api = axios.create({
  baseURL: "https://your-api-url.com/api", // 개발 중엔 http://localhost:4000 등으로 변경 가능
  headers: {
    "Content-Type": "application/json",
  },
});
