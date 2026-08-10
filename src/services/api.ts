import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const carregarDados = async (base: string) => {
  const response = await api.get(`${base}`);
  return response.data;
};
