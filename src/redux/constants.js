import axios from "axios";

export const $instance = axios.create({
  // baseURL: "https://stackninjas-backend.onrender.com/",
  baseURL: "http://localhost:3000",
});