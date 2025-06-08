// utils/Apiurl.ts
import axios from "axios";

// Correct environment variable name
const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:5000";

export const Apiurl = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
