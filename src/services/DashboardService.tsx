import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

class DashboardService {
  getDailyIncome(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/daily-income`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getYesterdayIncome(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/yesterday-income`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getWeeklyIncome(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/weekly-income`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getMonthlyIncome(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/dashboard/monthly-income`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new DashboardService();
