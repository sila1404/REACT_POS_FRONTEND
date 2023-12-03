import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token")
class UserService {
  getUsers(): Promise<any> {
    return axios.get(`${API_URL}/users`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }

  getUser(id: string): Promise<any> {
    return axios.get(`${API_URL}/users/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }
  
  createUser(user: any): Promise<any> {
    return axios.post(`${API_URL}/users`, user, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }
  
  updateUser(id: string, user: any): Promise<any> {
    return axios.put(`${API_URL}/users/${id}`, user, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }
  
  deleteUser(id: string): Promise<any> {
    return axios.delete(`${API_URL}/users/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }
}

export default new UserService();
