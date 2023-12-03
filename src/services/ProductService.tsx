import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

class ProductService {
  getProducts(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getProduct(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  createProduct(product: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/products`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  updateProducts(id: string, product: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  deleteProducts(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ProductService();
