import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  return api;
}