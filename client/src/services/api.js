import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const generateCategory = (data) => API.post("/ai/category", data);

export const generateProposal = (data) => API.post("/ai/proposal", data);
