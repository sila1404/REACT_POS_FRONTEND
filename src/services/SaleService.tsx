import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

class SaleService {
  createSale(data: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/sale`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new SaleService();
