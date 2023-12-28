import axios from "axios";

export const $instance = axios.create({
  baseURL: "https://stackninjas-backend.onrender.com",
});